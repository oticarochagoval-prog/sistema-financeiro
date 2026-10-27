// Fluxo · Íris sugere categoria e contato para lançamentos que nunca apareceram · v2.9.60
// Roda na Vercel (pasta /api). Usa a mesma chave da leitura de boleto: ANTHROPIC_API_KEY
// (Vercel → projeto sistema-financeiro → Settings → Environment Variables). Nunca no index.html.
// Só responde para quem está logado no Fluxo. Só SUGERE: nada é gravado aqui.

const SUPABASE_URL = 'https://caklslhxyjbyiuzhnmsn.supabase.co';
const MODELO = process.env.IA_MODELO || 'claude-haiku-4-5';

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

    // 2) o pedido
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    const { loja, itens, categorias, contatos, exemplos, ensinos } = body || {};
    if (!Array.isArray(itens) || !itens.length || !Array.isArray(categorias)) { res.status(400).json({ erro: 'pedido vazio' }); return; }
    const corta = (a, n) => (Array.isArray(a) ? a.slice(0, n) : []);
    const dados = {
      loja: String(loja || '').slice(0, 60),
      itens: corta(itens, 60).map(x => ({ i: x.i, d: String(x.d || '').slice(0, 160), v: Number(x.v) || 0, dt: String(x.dt || '').slice(0, 10) })),
      categorias: corta(categorias, 300).map(c => ({ id: c.id, nome: String(c.nome || '').slice(0, 60), grupo: c.grupo })),
      contatos: corta(contatos, 700).map(c => ({ id: c.id, nome: String(c.nome || '').slice(0, 60), tipo: c.tipo })),
      exemplos: corta(exemplos, 60),
      ensinos: corta(ensinos, 60)
    };

    const PEDIDO = `Você ajuda a classificar lançamentos do extrato bancário de uma ótica (Grupo Rocha, Brasil), loja "${dados.loja}".
Para cada item, escolha a CATEGORIA (pelo id da lista) e, se fizer sentido, o CONTATO (pelo id da lista: funcionário ou empresa).
Grupos de categoria: rec = receita (valor positivo), cmv = custo de mercadoria/lentes, imp = imposto, fixo = custo fixo (salário, aluguel, energia), nop = não operacional, neutra = transferência/dinheiro que só passa.
Use os EXEMPLOS (como a equipe já classificou) e os ENSINOS (regras que a equipe explicou) como guia principal.
Valor negativo = saída (despesa); positivo = entrada. Não use categoria de receita para saída, nem de despesa para entrada.
Se não tiver segurança, devolva c=null (não chute). Contato só se o nome aparecer claramente na descrição ou num exemplo igual; senão k=null.
"m" = motivo curto em português (até 8 palavras).
Responda APENAS com JSON, sem texto antes ou depois: {"sugestoes":[{"i":<id do item>,"c":<id categoria ou null>,"k":<id contato ou null>,"m":"motivo"}]}

DADOS:
${JSON.stringify(dados)}`;

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODELO, max_tokens: 4000, messages: [{ role: 'user', content: PEDIDO }] })
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) { res.status(502).json({ erro: (j.error && j.error.message) || ('a IA respondeu ' + r.status) }); return; }
    const txt = (j.content || []).map(c => c.text || '').join('');
    const m = txt.match(/\{[\s\S]*\}/);
    let out = {};
    try { out = m ? JSON.parse(m[0]) : {}; } catch (e) { out = {}; }
    const ids = new Set(dados.itens.map(x => String(x.i)));
    const sugestoes = (Array.isArray(out.sugestoes) ? out.sugestoes : []).filter(s => s && ids.has(String(s.i)));
    res.status(200).json({ sugestoes });
  } catch (e) {
    res.status(500).json({ erro: String((e && e.message) || e) });
  }
};
