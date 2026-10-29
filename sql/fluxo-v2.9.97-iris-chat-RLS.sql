-- ▶▶ ONDE RODAR: Supabase → projeto sistema-financeiro (caklslhxyjbyiuzhnmsn) → SQL Editor
-- Fluxo v2.9.97 · PARTE 2 (a parte 1, as tabelas, já rodou).
-- Liga o RLS das 3 tabelas da Íris: cada pessoa vê só as conversas dela; o gestor vê todas.
-- IMPORTANTE: rode antes de usar o "Pergunte à Íris".
begin;
alter table iris_conversas enable row level security;
alter table iris_mensagens enable row level security;
alter table iris_duvidas  enable row level security;

drop policy if exists iris_conv_rw on iris_conversas;
create policy iris_conv_rw on iris_conversas for all
  using (usuario_id = auth.uid() or meu_papel() = 'dono')
  with check (usuario_id = auth.uid());

drop policy if exists iris_msg_rw on iris_mensagens;
create policy iris_msg_rw on iris_mensagens for all
  using (usuario_id = auth.uid() or meu_papel() = 'dono')
  with check (usuario_id = auth.uid());

drop policy if exists iris_duv_ler on iris_duvidas;
create policy iris_duv_ler on iris_duvidas for select
  using (usuario_id = auth.uid() or meu_papel() = 'dono' or status = 'respondida');

drop policy if exists iris_duv_criar on iris_duvidas;
create policy iris_duv_criar on iris_duvidas for insert
  with check (usuario_id = auth.uid());

drop policy if exists iris_duv_responder on iris_duvidas;
create policy iris_duv_responder on iris_duvidas for update
  using (meu_papel() = 'dono') with check (meu_papel() = 'dono');
commit;

-- conferência: tem que voltar 3 linhas com rls = true e as regras criadas
select c.relname tabela, c.relrowsecurity rls, count(p.polname) regras
from pg_class c left join pg_policy p on p.polrelid=c.oid
where c.relname in ('iris_conversas','iris_mensagens','iris_duvidas')
group by 1,2 order by 1;
