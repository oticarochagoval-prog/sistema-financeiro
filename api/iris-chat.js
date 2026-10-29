// Fluxo · "Pergunte à Íris": a equipe tira dúvida do sistema conversando · v2.9.97
// Roda na Vercel (pasta /api). Usa a mesma chave da Íris: ANTHROPIC_API_KEY
// (Vercel → projeto sistema-financeiro → Settings → Environment Variables). Nunca no index.html.
// Só responde para quem está logado no Fluxo. Só EXPLICA: não lança, não apaga, não muda nada no banco.

const SUPABASE_URL = 'https://caklslhxyjbyiuzhnmsn.supabase.co';
const MODELO = process.env.IA_MODELO_CHAT || 'claude-sonnet-4-5';

// o manual do Fluxo é a cabeça da Íris; busca uma vez e guarda enquanto o servidor estiver quente
let _manual = null, _manualEm = 0;
async function manual(host) {
  if (_manual && Date.now() - _manualEm < 30 * 60 * 1000) return _manual;
  try {
    const r = await fetch('https://' + host + '/manual.md');
    if (r.ok) { _manual = await r.text(); _manualEm = Date.now(); }
  } catch (e) { }
  return _manual || '';
}

const ESCOPOS = {
  tudo: 'Ela pode perguntar sobre QUALQUER parte do Fluxo.',
  dia_a_dia: 'Ela usa o Dia a dia do Fluxo: Dashboard, Radar do mês, Lançamentos, Importar extrato (o que a Íris traz do banco sozinha), Agenda de pagamentos, Fechamento de caixa, Caixinha (espelho) e Empréstimos (espelho). Responda sobre tudo isso. Duas exceções: Remanejos e as telas de Análise e Gestão (DRE, Fechamento do mês, Cartão × Sipag, Comparativo, configurações) são com a Heloísa — se perguntarem, diga isso com jeito, em uma frase, e volte para o que ela usa.'
};

function instrucoes(nome, escopo, pagina, ensinos) {
  return `Você é a Íris, a assistente do escritório do Grupo Rocha (11 Óticas Rocha, o laboratório GV Lentes e as empresas do grupo). Você já trabalha dentro do sistema financeiro Fluxo: lança o extrato do banco sozinha todo dia às 6h, classifica e confere lançamentos. Agora você também TIRA DÚVIDAS da equipe sobre o sistema.

QUEM ESTÁ FALANDO COM VOCÊ: ${nome}.
${ESCOPOS[escopo] || ESCOPOS.dia_a_dia}
${pagina ? `Ela está agora na tela: ${pagina}.` : ''}

COMO VOCÊ FALA
- Português do Brasil, simples, como gente do escritório conversa. Nada de palavra técnica (não fale em "banco de dados", "tabela", "sistema processa"). Fale "o extrato", "a tela", "a Agenda", "o lançamento".
- Respostas CURTAS: 2 a 5 frases. Se precisar de passo a passo, no máximo 5 passos curtos.
- Tom leve e acolhedor. Chame pelo primeiro nome de vez em quando, não em toda frase. Se a pessoa brincar, brinque junto numa frase e depois explique. Nada de pergunta boba: nunca faça a pessoa se sentir mal por perguntar.
- No máximo um emoji por resposta, e só quando combinar. Nunca use emoji em resposta sobre erro ou dinheiro que não bate.
- Quando a dúvida for "isso muda alguma coisa pro meu trabalho?", responda isso primeiro e com clareza, antes de explicar o resto.

O QUE VOCÊ PODE E NÃO PODE
- Você SÓ EXPLICA. Você não lança, não apaga, não corrige nada por aqui. Se pedirem isso, explique onde a pessoa mesma faz.
- NUNCA invente. Se a resposta não estiver no manual abaixo e você não tiver certeza, responda exatamente assim: comece a resposta com a marca [NAOSEI] (sem falar dela), depois diga em uma ou duas frases, com naturalidade, que essa você não sabe com certeza, que anotou e mandou para o Lucas, e que avisa assim que ele responder.
- Não fale de salário, de valores de outras lojas que não aparecem na tela dela, nem de assunto que não seja o sistema. Se puxarem assunto pessoal, responda com simpatia em uma frase e volte ao sistema.
- Não mande a pessoa "procurar o Lucas" ou "falar com o suporte" por qualquer coisa: tente explicar primeiro.

O MANUAL DO FLUXO (sua fonte da verdade; o "Histórico de mudanças" no fim conta o que mudou em cada versão):
<manual>
${'${MANUAL}'}
</manual>
${ensinos ? `\nO QUE O LUCAS JÁ RESPONDEU ANTES (vale tanto quanto o manual):\n${ensinos}` : ''}`;
}

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
    const user = await u.json();

    // 2) quem é a pessoa e do que ela pode falar (lido do banco, não do navegador)
    let nome = 'você', escopo = 'dia_a_dia';
    try {
      const p = await fetch(SUPABASE_URL + '/rest/v1/perfis?select=nome,papel,iris_escopo&id=eq.' + user.id, { headers: { Authorization: auth, apikey } });
      const d = p.ok ? await p.json() : [];
      if (d && d[0]) {
        nome = (d[0].nome || 'você').split(' ')[0];
        nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        escopo = d[0].iris_escopo || (['dono', 'operador'].includes(d[0].papel) ? 'tudo' : 'dia_a_dia');
      }
    } catch (e) { }

    // 3) o pedido
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    const { mensagens, pagina, ensinos } = body || {};
    if (!Array.isArray(mensagens) || !mensagens.length) { res.status(400).json({ erro: 'sem pergunta' }); return; }

    let msgs = mensagens.slice(-20).map(m => ({
      role: m.quem === 'iris' ? 'assistant' : 'user',
      content: String(m.texto || '').slice(0, 4000)
    })).filter(m => m.content.trim());
    // a conversa começa com o "oi" da Íris: tira o que vier antes da primeira fala da pessoa
    while (msgs.length && msgs[0].role !== 'user') msgs.shift();
    // duas falas seguidas do mesmo lado viram uma só (a IA exige alternar)
    msgs = msgs.reduce((a, m) => { const u = a[a.length - 1]; if (u && u.role === m.role) u.content += '\n' + m.content; else a.push(m); return a; }, []);
    if (msgs[msgs.length - 1] && msgs[msgs.length - 1].role !== 'user') msgs.pop();
    if (!msgs.length) { res.status(400).json({ erro: 'sem pergunta' }); return; }

    const ens = Array.isArray(ensinos) ? ensinos.slice(0, 40).map(e => `- Perguntaram: "${String(e.p || '').slice(0, 300)}" → Lucas respondeu: "${String(e.r || '').slice(0, 800)}"`).join('\n') : '';
    const sistema = instrucoes(nome, escopo, String(pagina || '').slice(0, 60), ens)
      .replace('${MANUAL}', (await manual(req.headers.host)).slice(0, 180000));

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: MODELO, max_tokens: 700,
        system: [{ type: 'text', text: sistema, cache_control: { type: 'ephemeral' } }],
        messages: msgs
      })
    });
    if (!r.ok) { const t = await r.text(); res.status(502).json({ erro: 'a IA não respondeu agora', detalhe: t.slice(0, 300) }); return; }
    const j = await r.json();
    let txt = (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('').trim();
    const naoSabe = /^\s*\[NAOSEI\]/i.test(txt);
    txt = txt.replace(/^\s*\[NAOSEI\]\s*/i, '');
    res.status(200).json({ texto: txt, naoSabe, nome });
  } catch (e) {
    res.status(500).json({ erro: String((e && e.message) || e) });
  }
};
