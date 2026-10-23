// Fluxo · leitura de boleto por IA (foto ou PDF escaneado) · v2.8.4
// Roda na Vercel (pasta /api). A chave da IA fica SÓ aqui no servidor, na variável ANTHROPIC_API_KEY
// (Vercel → projeto sistema-financeiro → Settings → Environment Variables). Nunca no index.html.
// Só responde para quem está logado no Fluxo (confere o login no Supabase antes de chamar a IA).

const SUPABASE_URL = 'https://caklslhxyjbyiuzhnmsn.supabase.co';
const MODELO = process.env.IA_MODELO || 'claude-haiku-4-5';

const PEDIDO = `Você está lendo um boleto bancário brasileiro (ou uma conta de consumo: luz, água, telefone, imposto).
Responda APENAS com um JSON, sem nenhum texto antes ou depois, neste formato:
{"linha_digitavel":"","valor":0,"vencimento":"AAAA-MM-DD","beneficiario":"","cnpj":"","parcela":null,"parcelas":null,"numero_documento":""}
Regras:
- linha_digitavel: só os números da linha digitável (47 dígitos no boleto, 48 na conta de consumo). Se não der para ler todos os dígitos com certeza, deixe "".
- valor: valor do documento em reais, número com ponto decimal (ex.: 2400.50).
- vencimento: data de vencimento no formato AAAA-MM-DD.
- beneficiario: nome de quem RECEBE o pagamento (beneficiário/cedente), sem o CNPJ. Não confunda com o pagador/sacado.
- cnpj: só os números do CNPJ (ou CPF) do beneficiário.
- parcela e parcelas: se o boleto mostrar parcela (ex.: "5/6", "PARCELA 5 DE 6", número do documento terminando em 05/06), parcela=5 e parcelas=6. Se não mostrar, null.
- Nunca invente. O que não conseguir ler, deixe "" ou null.`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ erro: 'use POST' }); return; }
  try {
    const KEY = process.env.ANTHROPIC_API_KEY;
    if (!KEY) { res.status(500).json({ erro: 'falta a chave da IA na Vercel (ANTHROPIC_API_KEY)' }); return; }

    // 1) só quem está logado no Fluxo
    const auth = req.headers.authorization || '';
    const apikey = req.headers.apikey || '';
    if (!auth.startsWith('Bearer ') || auth.length < 30 || !apikey) { res.status(401).json({ erro: 'entre no Fluxo de novo' }); return; }
    const u = await fetch(SUPABASE_URL + '/auth/v1/user', { headers: { Authorization: auth, apikey } });
    if (!u.ok) { res.status(401).json({ erro: 'entre no Fluxo de novo' }); return; }

    // 2) o arquivo
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    const { arquivo, tipo } = body || {};
    const tiposOk = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (!arquivo || !tiposOk.includes(tipo)) { res.status(400).json({ erro: 'arquivo inválido (use foto ou PDF)' }); return; }
    if (arquivo.length > 6_000_000) { res.status(413).json({ erro: 'arquivo grande demais' }); return; }

    // 3) a IA lê
    const parte = tipo === 'application/pdf'
      ? { type: 'document', source: { type: 'base64', media_type: tipo, data: arquivo } }
      : { type: 'image', source: { type: 'base64', media_type: tipo, data: arquivo } };
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODELO, max_tokens: 600, messages: [{ role: 'user', content: [parte, { type: 'text', text: PEDIDO }] }] })
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) { res.status(502).json({ erro: (j.error && j.error.message) || ('a IA respondeu ' + r.status) }); return; }
    const txt = (j.content || []).map(c => c.text || '').join('');
    const m = txt.match(/\{[\s\S]*\}/);
    let out = {};
    try { out = m ? JSON.parse(m[0]) : {}; } catch (e) { out = {}; }
    res.status(200).json(out);
  } catch (e) {
    res.status(500).json({ erro: String((e && e.message) || e) });
  }
};
