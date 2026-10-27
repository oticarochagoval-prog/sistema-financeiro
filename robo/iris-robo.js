// Íris · robô das 6h (v2.9.64) — roda no GitHub Actions. Abre o Fluxo como ÍRIS e espera ela terminar.
const { chromium } = require('playwright');
(async () => {
  const { IRIS_EMAIL, IRIS_SENHA, FLUXO_URL } = process.env;
  if (!IRIS_EMAIL || !IRIS_SENHA) { console.error('Faltam os segredos IRIS_EMAIL e IRIS_SENHA no GitHub.'); process.exit(1); }
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: 1366, height: 900 } });
  page.on('pageerror', e => console.log('erro na página:', e.message));
  page.on('dialog', d => d.accept());
  await page.goto((FLUXO_URL || 'https://sistema-financeiro-red-phi.vercel.app/') + '?robo=1', { waitUntil: 'networkidle' });
  const ok = await page.evaluate(async ({ email, senha }) => {
    if (!window.sb && typeof initSupabase === 'function') initSupabase();
    const { data, error } = await sb.auth.signInWithPassword({ email, password: senha });
    if (error) return 'login: ' + error.message;
    await iniciarApp(data.user);
    return PERFIL && PERFIL.nome === 'ÍRIS' ? 'ok' : 'o usuário entrou, mas o perfil não é ÍRIS (' + (PERFIL && PERFIL.nome) + ')';
  }, { email: IRIS_EMAIL, senha: IRIS_SENHA });
  if (ok !== 'ok') { console.error(ok); await b.close(); process.exit(1); }
  console.log('Íris entrou no Fluxo. Trabalhando…');
  const fim = Date.now() + 40 * 60 * 1000;
  let r = null;
  while (Date.now() < fim) { r = await page.evaluate(() => window.__roboFim || null); if (r) break; await page.waitForTimeout(5000); }
  await b.close();
  if (!r) { console.error('A Íris não terminou em 40 minutos.'); process.exit(1); }
  (r.log || []).forEach(l => console.log(' -', l));
  if (!r.ok) { console.error('Erro:', r.erro); process.exit(1); }
  console.log('Pronto.');
})();
