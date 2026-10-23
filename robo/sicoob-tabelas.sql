-- ============================================================
-- RODAR NO SUPABASE DO PROJETO: sistema-financeiro
-- (SQL Editor → New query → colar tudo → Run → tem que aparecer "Success")
-- Só CRIA duas tabelas novas. Não altera nem apaga nada que já existe.
-- ============================================================

-- 1) Contas do Sicoob ligadas pela API (uma linha por conta)
create table if not exists public.sicoob_contas (
  id              bigserial primary key,
  loja_id         integer not null,            -- loja do Fluxo
  conta_fluxo     text,                        -- conta "Banco Sicoob" da loja no Fluxo (opcional)
  apelido         text not null,               -- ex.: ROCHA 1
  cooperativa     text,
  numero_conta    bigint not null,             -- só números, com o dígito (18.769-0 → 187690)
  client_id       text not null,               -- do portal developers.sicoob.com.br
  segredo         text not null,               -- nome no cofre do GitHub (ROCHA1 → SICOOB_PFX_ROCHA1)
  data_inicio     date,                        -- a partir de quando puxar
  ativo           boolean not null default true,
  cert_vence      date,                        -- o robô lê do certificado
  cert_titular    text,
  ultima_execucao timestamptz,
  ultimo_ok       timestamptz,
  ultimo_erro     text,
  ultimo_periodo  text,
  ultima_qtd      integer,
  saldo_atual     numeric(14,2),
  saldo_limite    numeric(14,2),
  criado_em       timestamptz not null default now()
);

-- 2) Cada lançamento que o Sicoob mandou (nada duplica: chave = código do banco)
create table if not exists public.sicoob_extrato (
  transaction_id  text primary key,
  conta_id        bigint not null references public.sicoob_contas(id),
  loja_id         integer not null,
  data            date not null,
  data_hora       text,
  tipo            text,
  valor           numeric(14,2) not null,      -- entrada +, saída −
  historico       text,
  complemento     text,
  documento       text,
  cpf_cnpj        text,
  bruto           jsonb,
  criado_em       timestamptz not null default now()
);
create index if not exists sicoob_extrato_loja_data on public.sicoob_extrato (loja_id, data);
create index if not exists sicoob_extrato_conta_data on public.sicoob_extrato (conta_id, data);

-- 3) Segurança (RLS ligado): quem entra no Fluxo só LÊ. Quem grava é só o robô (chave de serviço).
alter table public.sicoob_contas  enable row level security;
alter table public.sicoob_extrato enable row level security;
drop policy if exists "fluxo le contas sicoob" on public.sicoob_contas;
create policy "fluxo le contas sicoob" on public.sicoob_contas for select to authenticated using (true);
drop policy if exists "fluxo le extrato sicoob" on public.sicoob_extrato;
create policy "fluxo le extrato sicoob" on public.sicoob_extrato for select to authenticated using (true);

-- 4) Rocha 1 (FLUXO - ROCHA 1 · cooperativa 3027 · conta 18.769-0)
insert into public.sicoob_contas (loja_id, conta_fluxo, apelido, cooperativa, numero_conta, client_id, segredo, data_inicio)
select l.id,
       (select c.id::text from public.contas c where c.loja_id = l.id and c.arquivada = false and c.nome ilike '%sicoob%' order by c.id limit 1),
       'ROCHA 1', '3027', 187690, '99e93960-15a2-4467-955d-b2888bc3f542', 'ROCHA1', date '2026-10-01'
from public.lojas l
where lower(l.nome) ~ 'rocha\s*0*1([^0-9]|$)' and l.arquivada = false
  and not exists (select 1 from public.sicoob_contas s where s.numero_conta = 187690)
order by l.ordem
limit 1;

-- Conferência: tem que mostrar 1 linha com a ROCHA 1 e o loja_id dela
select s.id, s.apelido, s.loja_id, l.nome as loja_no_fluxo, s.conta_fluxo, s.numero_conta, s.segredo
from public.sicoob_contas s join public.lojas l on l.id = s.loja_id;
