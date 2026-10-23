// ============================================================
// Robô do extrato Sicoob → Fluxo (roda no GitHub Actions)
// Para cada conta ativa em sicoob_contas: busca o extrato pela API
// Conta Corrente v4 e guarda cada lançamento em sicoob_extrato
// (sem duplicar: chave = transactionId do banco).
// Só LÊ o extrato (escopo cco_consulta). Não mexe em dinheiro.
// Segredos (GitHub → Settings → Secrets → Actions):
//   SUPABASE_URL, SUPABASE_SERVICE_KEY
//   SICOOB_PFX_<SEGREDO>  (o .pfx em base64)   SICOOB_SENHA_<SEGREDO>
// ============================================================
import https from 'node:https';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { X509Certificate } from 'node:crypto';

const SB_URL = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
const SB_KEY = process.env.SUPABASE_SERVICE_KEY || '';
const DIAS_PRA_TRAS = Number(process.env.DIAS_PRA_TRAS || 5); // reconfere os últimos dias (lançamento que cai atrasado)
const SO_CONTA = (process.env.SO_CONTA || '').trim();            // rodar só uma conta (opcional, pelo botão do GitHub)
const TOKEN_URL = 'https://auth.sicoob.com.br/auth/realms/cooperado/protocol/openid-connect/token';
const API = 'https://api.sicoob.com.br/conta-corrente/v4';

if (!SB_URL || !SB_KEY) { console.error('Faltam SUPABASE_URL / SUPABASE_SERVICE_KEY nos segredos do GitHub.'); process.exit(1); }

// ---------- Supabase (REST com a chave de serviço) ----------
async function sb(path, { method = 'GET', body, prefer } = {}) {
  const r = await fetch(`${SB_URL}/rest/v1/${path}`, {
    method,
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, 'Content-Type': 'application/json', ...(prefer ? { Prefer: prefer } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const txt = await r.text();
  if (!r.ok) throw new Error(`Supabase ${method} ${path.split('?')[0]}: ${r.status} ${txt.slice(0, 300)}`);
  return txt ? JSON.parse(txt) : null;
}

// ---------- certificado: .pfx (base64) → PEM (aceita certificado antigo "legacy") ----------
function abrirCertificado(pfxB64, senha) {
  const dir = mkdtempSync(join(tmpdir(), 'cert-'));
  try {
    const pfx = join(dir, 'c.pfx'), pem = join(dir, 'c.pem');
    writeFileSync(pfx, Buffer.from(pfxB64.replace(/\s+/g, ''), 'base64'));
    const env = { ...process.env, PFX_PASS: senha };
    const tentar = (extra) => execFileSync('openssl', ['pkcs12', ...extra, '-in', pfx, '-nodes', '-passin', 'env:PFX_PASS', '-out', pem], { env, stdio: 'pipe' });
    try { tentar([]); } catch {
      try { tentar(['-legacy']); } catch { throw new Error('não consegui abrir o certificado: senha errada ou arquivo .pfx inválido'); }
    }
    const txt = readFileSync(pem, 'utf8');
    const key = (txt.match(/-----BEGIN (?:RSA |ENCRYPTED )?PRIVATE KEY-----[\s\S]+?-----END (?:RSA |ENCRYPTED )?PRIVATE KEY-----/) || [])[0];
    const certs = txt.match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/g) || [];
    if (!key || !certs.length) throw new Error('não achei a chave/certificado dentro do .pfx (senha certa?)');
    // o certificado da empresa é o que tem a chave privada; normalmente o primeiro
    const x = new X509Certificate(certs[0]);
    return { key, cert: certs.join('\n'), vence: new Date(x.validTo), titular: (x.subject.match(/CN=([^\n]+)/) || [])[1] || '' };
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

// ---------- chamada HTTPS com certificado (mTLS) ----------
function chamar(url, { agent, method = 'GET', headers = {}, form } = {}) {
  return new Promise((ok, erro) => {
    const body = form ? new URLSearchParams(form).toString() : null;
    const req = https.request(url, { method, agent, headers: { Accept: 'application/json', ...headers, ...(body ? { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) } : {}) }, timeout: 60000 }, (res) => {
      let d = ''; res.setEncoding('utf8'); res.on('data', (c) => (d += c));
      res.on('end', () => {
        if (res.statusCode >= 400) return erro(new Error(`${res.statusCode} em ${url.split('?')[0]}: ${d.slice(0, 300)}`));
        try { ok(d ? JSON.parse(d) : {}); } catch { erro(new Error('resposta não é JSON: ' + d.slice(0, 200))); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('tempo esgotado falando com o Sicoob')));
    req.on('error', erro);
    if (body) req.write(body);
    req.end();
  });
}

// datas no fuso de Brasília
const hojeBR = () => new Date(Date.now() - 3 * 3600e3).toISOString().slice(0, 10);
const addDias = (iso, n) => { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };

// quebra o período em pedaços de um mês (a API pede mês/ano + dia inicial/final)
function pedacosPorMes(de, ate) {
  const out = []; let ini = de;
  while (ini <= ate) {
    const [y, m] = ini.split('-').map(Number);
    const fimMes = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
    const fim = fimMes < ate ? fimMes : ate;
    out.push({ mes: m, ano: y, diaIni: Number(ini.slice(8, 10)), diaFim: Number(fim.slice(8, 10)) });
    ini = addDias(fim, 1);
  }
  return out;
}

async function processarConta(c) {
  const seg = String(c.segredo || '').toUpperCase();
  const pfx = process.env['SICOOB_PFX_' + seg], senha = process.env['SICOOB_SENHA_' + seg];
  if (!pfx || !senha) throw new Error(`faltam os segredos SICOOB_PFX_${seg} e SICOOB_SENHA_${seg} no GitHub`);
  const cert = abrirCertificado(pfx, senha);
  const agent = new https.Agent({ key: cert.key, cert: cert.cert, keepAlive: false });

  const tk = await chamar(TOKEN_URL, { agent, method: 'POST', form: { grant_type: 'client_credentials', client_id: c.client_id, scope: 'cco_consulta' } });
  if (!tk.access_token) throw new Error('o Sicoob não devolveu o token de acesso');
  const H = { Authorization: `Bearer ${tk.access_token}`, client_id: c.client_id };

  // de onde começar: último dia já guardado − alguns dias (ou a data de início da conta)
  const ult = await sb(`sicoob_extrato?select=data&conta_id=eq.${c.id}&order=data.desc&limit=1`);
  const hoje = hojeBR();
  let de = ult && ult[0] ? addDias(ult[0].data, -DIAS_PRA_TRAS) : (c.data_inicio || hoje.slice(0, 8) + '01');
  if (c.data_inicio && de < c.data_inicio) de = c.data_inicio;

  let total = 0, saldo = null;
  for (const p of pedacosPorMes(de, hoje)) {
    const url = `${API}/extrato/${p.mes}/${p.ano}?diaInicial=${p.diaIni}&diaFinal=${p.diaFim}&numeroContaCorrente=${c.numero_conta}&agruparCNAB=false`;
    let r;
    try { r = await chamar(url, { agent, headers: H }); }
    catch (e) {
      // se o banco não aceitar o dia de hoje ainda, tenta até ontem
      if (p.diaFim > p.diaIni && `${p.ano}-${String(p.mes).padStart(2, '0')}-${String(p.diaFim).padStart(2, '0')}` === hoje) {
        r = await chamar(url.replace(`diaFinal=${p.diaFim}`, `diaFinal=${p.diaFim - 1}`), { agent, headers: H });
      } else throw e;
    }
    const res = r.resultado || {};
    saldo = res;
    const linhas = (res.transacoes || []).map((t) => {
      const v = Math.abs(Number(t.valor || 0));
      return {
        transaction_id: t.transactionId,
        conta_id: c.id,
        loja_id: c.loja_id,
        data: (t.dataLote || t.data || '').slice(0, 10),
        data_hora: t.data || null,
        tipo: t.tipo,
        valor: String(t.tipo).toUpperCase().startsWith('DEB') ? -v : v,
        historico: t.descricao || '',
        complemento: String(t.descInfComplementar || '').split('|@').map((s) => s.trim()).filter(Boolean).join(' '),
        documento: t.numeroDocumento || null,
        cpf_cnpj: t.cpfCnpj || null,
        bruto: t,
      };
    }).filter((l) => l.transaction_id && l.data);
    for (let i = 0; i < linhas.length; i += 500) {
      await sb('sicoob_extrato?on_conflict=transaction_id', { method: 'POST', body: linhas.slice(i, i + 500), prefer: 'resolution=merge-duplicates,return=minimal' });
    }
    total += linhas.length;
  }

  await sb(`sicoob_contas?id=eq.${c.id}`, {
    method: 'PATCH', prefer: 'return=minimal',
    body: {
      cert_vence: cert.vence.toISOString().slice(0, 10), cert_titular: cert.titular,
      ultima_execucao: new Date().toISOString(), ultimo_ok: new Date().toISOString(), ultimo_erro: null,
      ultimo_periodo: `${de} a ${hoje}`, ultima_qtd: total,
      saldo_atual: saldo && saldo.saldoAtual != null ? Number(saldo.saldoAtual) : null,
      saldo_limite: saldo && saldo.saldoLimite != null ? Number(saldo.saldoLimite) : null,
    },
  });
  const dias = Math.round((cert.vence - Date.now()) / 864e5);
  console.log(`OK  ${c.apelido}: ${total} lançamentos (${de} a ${hoje}) · certificado vence em ${dias} dias`);
}

const contas = await sb('sicoob_contas?select=*&ativo=eq.true&order=id');
let falhas = 0;
for (const c of contas) {
  if (SO_CONTA && String(c.segredo).toUpperCase() !== SO_CONTA.toUpperCase() && String(c.id) !== SO_CONTA) continue;
  try { await processarConta(c); }
  catch (e) {
    falhas++;
    const msg = String(e.message || e).slice(0, 500);
    console.error(`ERRO ${c.apelido}: ${msg}`);
    try { await sb(`sicoob_contas?id=eq.${c.id}`, { method: 'PATCH', prefer: 'return=minimal', body: { ultima_execucao: new Date().toISOString(), ultimo_erro: msg } }); } catch {}
  }
}
console.log(`Fim: ${contas.length - falhas} conta(s) ok, ${falhas} com erro.`);
if (falhas) process.exit(1); // o GitHub marca a execução em vermelho e manda e-mail
