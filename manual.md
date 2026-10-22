# Como fechar o mês no Fluxo

Atualizado em 22/10/2026 · versão do sistema 2.0 · o Fluxo se chamava "Caixa Rocha" até a versão 1.10

## A escada

Fechar o mês é conferir uma conta de quatro linhas, igual ao extrato do banco: **quanto tinha, quanto entrou, quanto saiu, quanto tem que ter**. Se o "tem que ter" bater com o saldo do app do Sicoob no último dia do mês, o mês está fechado.

| Linha | Exemplo (Rocha 1, junho) | De onde vem |
| --- | --- | --- |
| Saldo inicial em 01/06 | −R$ 20.376,61 | Copiado do fechamento de maio. Se maio não foi fechado, o sistema calcula e você confere |
| + Entradas de junho | R$ 80.659,52 | Tudo que entrou na conta Sicoob no mês, transferências inclusive |
| − Saídas de junho | R$ 125.669,43 | Tudo que saiu da conta Sicoob no mês, transferências inclusive |
| = Tem que ter em 30/06 | −R$ 65.386,52 | O sistema calcula |
| Saldo real no banco em 30/06 | você digita | O app do Sicoob, no dia 30 |
| Diferença | bateu / faltando / sobrando | Se não bateu, falta lançamento ou tem lançamento a mais |

O **Resultado do mês** (entradas menos saídas, no quadro de baixo) é outra conta. Ele diz quanto a loja fez no mês e **não usa o saldo inicial**. A escada diz quanto tem na conta e **usa**.

## Passo a passo do mês

1. **Lançar tudo do mês.** Toda linha do extrato do Sicoob vira um lançamento, com data, categoria e contato (contato só nas saídas). Isso inclui Pix recebido e depósito em dinheiro — eles não entram no DRE, mas entram na conta do banco, então precisam estar lançados para a escada bater.
2. **Abrir Fechamento do mês** e escolher a loja e o mês.
3. **Conferir o saldo inicial.** Se diz "copiado do fechamento de ...", está certo. Se diz "calculado pelo sistema — confira", compare com o extrato do dia 1º; se estiver diferente, clique no ✎, digite o saldo certo e o motivo. Isso só acontece na primeira vez.
4. **Digitar o saldo real.** Abrir o app do Sicoob, pegar o saldo do último dia do mês e digitar em "Saldo real no banco". Se estava negativo, clique no botão de sinal para ficar −. Fica salvo sozinho.
5. **Ler a diferença.**
    - Bateu: clique em **Fechar o mês**. Pronto.
    - Faltando (o sistema calculou mais do que tem no banco): tem saída que não foi lançada. Procurar no extrato, lançar, conferir de novo.
    - Sobrando (o banco tem mais do que o sistema calculou): tem entrada que não foi lançada, ou uma saída lançada duas vezes.
6. **Se não bateu e não achou o motivo:** escreva o motivo na caixa e feche mesmo assim. Fica registrado.
7. **Anotar o que ficou pendente** nas Observações do mês. É o que o Lucas vai ler.

A diferença nunca se resolve mexendo no saldo inicial. Ela se resolve achando o lançamento que falta ou que sobra.

## Dia a dia: onde parei?

Em **Lançamentos**, logo abaixo do mês, aparece uma faixa com todos os dias:

- **✓ verde**: todos os lançamentos do dia estão prontos.
- **4/5 amarelo**: 4 de 5 prontos — falta classificar 1.
- **—**: dia sem lançamento.

**Pronto** quer dizer: tem categoria; tem contato quando é funcionário; e, se for A ESTORNAR ou ESTORNO RECEBIDO, já foi mandado/marcado no Banco Caixinha. O botão **▶ Continuar de onde parou** leva direto ao primeiro dia com pendência. Parou pra almoçar? Quando voltar, é só clicar nele. Clicar num dia mostra só aquele dia; clicar de novo volta pro mês.

## Lançamentos: de onde veio cada um

Cada linha em Lançamentos mostra uma etiqueta: **OFX** (veio da importação do extrato) ou **manual · nome** (quem digitou). As linhas marcadas **💵 caixinha antiga** foram lançadas na aba Caixinha que existia no Fluxo, antes do espelho. O botão "💵 Caixinha antiga" no topo filtra só elas, para conferir categoria e contato. Daqui para frente, gasto de gaveta se lança só no sistema Caixinha.

## Mês fechado

Depois de fechar, ninguém consegue lançar, editar ou excluir nada com data daquele mês na conta do banco. Se tentar, o sistema avisa. Só o dono reabre, em Fechamento do mês, com motivo. A caixinha não trava.

## Saldo negativo: o que colocar

**Coloca o número negativo mesmo.** Se o app do Sicoob mostrava −R$ 20.000,00 no dia 1º, o saldo inicial é −R$ 20.000,00. Use o botão de sinal (+ / −).

Saldo negativo no banco não é erro nem prejuízo. É só onde o dinheiro está: a loja está usando o limite do cheque especial. A escada tem que mostrar o mesmo número que o banco mostra, senão nunca vai bater.

| Exemplo | Valor |
| --- | --- |
| Saldo inicial em 01/10 | −R$ 20.000,00 |
| + Entradas | R$ 60.000,00 |
| − Saídas | R$ 63.000,00 |
| = Tem que ter em 31/10 | −R$ 23.000,00 |

A loja começou devendo 20 mil e terminou devendo 23 mil. Piorou 3 mil no mês. Isso é informação, não problema da tela.

**Os juros do cheque especial são uma saída como qualquer outra.** Quando o banco cobra, aparece no extrato como débito. Lança como saída, categoria de juros. O saldo inicial não "cobra" nada; quem cobra é o banco, e a cobrança vira uma linha de saída no mês em que acontece.

## Dinheiro emprestado faz parte do saldo

**O saldo inicial é o que tem, não importa de onde veio.** Se a loja tem R$ 20.000,00 e R$ 2.000,00 desses vieram emprestados da Rocha 4, o saldo inicial é R$ 20.000,00. O empréstimo não desconta do saldo.

O empréstimo é anotado à parte, como dívida entre lojas. Quando devolver, vira uma saída aqui e uma entrada na Rocha 4 — as duas neutras no DRE, mas as duas contam na escada do banco, porque o dinheiro saiu e entrou de verdade na conta.

| Situação | Saldo inicial | Anotação à parte |
| --- | --- | --- |
| Loja tem 20 mil, sendo 2 mil emprestados da Rocha 4 | R$ 20.000,00 | Deve R$ 2.000,00 à Rocha 4 |
| Loja tem 20 mil e emprestou 2 mil para a Rocha 9 | R$ 20.000,00 | Rocha 9 deve R$ 2.000,00 a esta loja |
| Banco em −15 mil, e 3 mil disso foi emprestado para outra loja | −R$ 15.000,00 | A outra loja deve R$ 3.000,00 |

## Empréstimo e estorno: o que vai pro Banco Caixinha

Existem **dois empréstimos diferentes**, e cada um mora num lugar:

| Tipo | Exemplo | Passa pelo Sicoob? | Onde se anota |
| --- | --- | --- | --- |
| **1. Escritório pagou conta da loja** | A CEMIG da Rocha 8 saiu da conta Sicoob da Rocha 1 | **Sim** — aparece no extrato | Fluxo (categoria A ESTORNAR) **e** Banco Caixinha (empréstimo a estornar na Rocha 8) |
| **2. Loja emprestou dinheiro da gaveta** | Rocha 1 deu R$ 1.000,00 em dinheiro pra Rocha 3 | **Não** | Só no Caixinha (lançamento "empréstimo", com a loja que recebeu) |
| Transferência pelo banco entre lojas | Rocha 1 transferiu pelo Sicoob pra Rocha 3 | Sim | Só no Fluxo, categoria Transferência entre lojas (neutra) |

> ✅ **Regra de ouro: passou pelo extrato do Sicoob, o Fluxo vê. Foi dinheiro da gaveta, só o Caixinha vê.**

**Tipo 1 — passo a passo da Heloísa:**

1. Na importação do extrato (ou no lançamento manual), a linha do pagamento recebe a categoria **A ESTORNAR (BANCO CAIXINHA)**. Se a descrição tiver R8 / ROCHA 8, a loja já vem lida.
2. Em Lançamentos, clique no botão amarelo **🔁 Mandar pro Banco Caixinha**, confira a loja que deve e confirme. O empréstimo nasce na aba Banco do Caixinha; aqui fica a etiqueta **🔁 no Banco Caixinha ✓**.
3. Quando a loja devolver **pelo banco**, a entrada aparece no extrato: categoria **ESTORNO RECEBIDO (BANCO CAIXINHA)** → botão **↩ Marcar devolução no Caixinha** → escolha o empréstimo → confirme. O Banco Caixinha baixa sozinho.
4. Quando a loja devolver **em dinheiro** (a Rhaiane recolhe), isso é registrado só no Caixinha — no Fluxo não aparece nada, porque não entrou no banco.

> ⚠️ As duas categorias são **neutras**: não entram no DRE da loja que pagou. A despesa de verdade (a CEMIG) é da Rocha 8 e chega ao DRE dela pelo Caixinha.

> ⛔ **Nunca** exclua nem lance o pagamento do escritório como despesa da loja que pagou. Categoria A ESTORNAR + botão. Excluir some com o dinheiro da escada do banco; lançar como despesa infla o custo da loja errada.

> 💡 Tudo sobre a ligação com o Caixinha (Banco, Lentes, Caixa) está no **Manual do Caixinha** — botão 🔗? na barra de cima.

## Os três "bancos": onde cada um mora

Existem três saldos no grupo, e cada um vive num lugar. **Nenhum deles se soma ao outro, e nenhum precisa ser redigitado.** Para não confundir, cada um tem um nome fixo:

| Qual | Onde mora | Quem cuida |
| --- | --- | --- |
| 🏦 **Banco Sicoob** — a conta da loja no banco de verdade | Fluxo → Fechamento do mês (a escada) | Copia sozinho do mês anterior fechado |
| 💵 **Caixa (gaveta)** — o dinheiro físico que a loja tem na mão | Sistema Caixinha → aba Caixa. No Fluxo, a aba **Caixinha (espelho)** mostra o mesmo número | O Caixinha calcula sozinho: dinheiro + emprestado |
| 🔁 **Banco Caixinha** — o que o escritório pagou pela loja e ela ainda vai devolver (estornar). Vira o mês e continua em aberto | Sistema Caixinha → aba Banco. No Fluxo, o espelho mostra início do mês, emprestado, voltou e em aberto | O Caixinha calcula sozinho |

No Fluxo, o saldo inicial é **só o do Sicoob**. Não some caixinha nem empréstimo nele.

## Caixinha: a regra é diferente

**A aba Caixinha do Fluxo é um espelho.** Ela mostra, loja por loja, o que o sistema Caixinha calcula: abertura do mês, entradas, saídas, depósitos, tem que ter, a receber e a estornar. Não tem nada para digitar ali. Para corrigir um número, corrija no Caixinha — aqui atualiza sozinho. Na primeira vez em cada computador ela pede o login do Caixinha (o mesmo e-mail e senha de lá); depois abre direto. No Fechamento do mês, a escada da caixinha aparece embaixo da escada do Sicoob.

**As lojas lançam no Caixinha.** Cada loja tem o próprio login lá e lança as saídas, o guardado e (três delas) os depósitos. A Rhaiane passa, recolhe o dinheiro, confere o caixa e completa o que faltou — principalmente categoria. No espelho, a coluna **🔎 Conferir** mostra quantas saídas do mês foram lançadas pela própria loja e quantas estão sem categoria.

**Dinheiro na gaveta e total da caixinha são dois números.** "Tem que ter na gaveta" é o que dá pra contar. "Total da caixinha" é a gaveta mais o que outras lojas devem a ela (emprestado). Os dois aparecem no Fechamento, igual ao Caixinha. Pra conferir a gaveta vale o primeiro; pra saber quanto a loja tem, o segundo. Somando o grupo inteiro, só o dinheiro conta — o emprestado de uma loja está na gaveta da outra.

**Caixinha nunca fica negativa.** Dinheiro na gaveta não tem cheque especial. Se der negativo, não é saldo: é lançamento faltando. Alguém colocou dinheiro e não lançou a entrada, ou lançou uma saída duas vezes.

## Palavras que puxam sozinho

Cada categoria pode ter **palavras-chave** (em Categorias, campo "palavras que puxam sozinho", separadas por vírgula). Quando uma linha do extrato tiver uma dessas palavras na descrição, a categoria já vem preenchida, com a etiqueta **🔑 regra**. Palavra mais longa ganha: "JUROS LIS" vence "LIS".

- **Gerar palavras do histórico** (botão em Categorias): olha os meses já classificados e propõe as palavras. Nada é salvo até você aprovar a lista.
- **Aplicar regras nos N sem categoria** (botão em Lançamentos): preenche os lançamentos do mês que ainda estão em branco. Mostra o que vai mudar e só grava depois do OK. Regra nunca mexe em categoria que alguém já escolheu na mão.
- Na importação do extrato, o topo mostra "N de M linhas vieram classificadas sozinhas". O que não casou vem em branco, para classificar na mão.
- Categoria **A ESTORNAR (BANCO CAIXINHA)**: quando a descrição tem ESTORNAR, XT, VAI ESTORNAR ou CARTÃO AZUL, a linha vem marcada com 🔁 e a loja lida da descrição (R8, ROCHA 8). Se não achar a loja, pergunta — nunca chuta. Mandar pro Banco Caixinha com um clique vem na próxima versão.

No Dashboard, o quadro **Extrato em dia?** mostra, por loja, até que dia o extrato do banco foi importado e quantos dias faltam. A cor é só pelo extrato: só ele prova que o mês está completo. Lançamento manual e boletos do espelho das Lentes aparecem como informação, mas não deixam a loja verde. Regra da casa: extrato de toda loja importado toda semana.

## Quem pode o quê

Cada pessoa entra com o **próprio nome e senha** (tela "Quem é você?"). Tudo o que é lançado, excluído ou restaurado fica com o nome de quem fez.

| Papel | Quem | Pode | Não pode |
| --- | --- | --- | --- |
| Dono | Lucas, Heloísa | Tudo: lançar, importar, excluir, restaurar, fechar e reabrir mês, contas e saldo inicial | — |
| Lançador | Rhaiane, Carol | Lançar, corrigir categoria/contato, importar extrato, ver Lixeira | Excluir, restaurar, fechar mês, Configurações |
| Operador | (ninguém hoje) | Igual ao dono, menos contas/saldo inicial e reabrir mês | Contas, reabrir mês |
| Contador | (ninguém hoje) | Só olhar | Qualquer alteração |

Não é só botão escondido: o banco também recusa (por exemplo, um lançador não consegue excluir nem pelo navegador). A **Lixeira** mostra quem excluiu, quando, e quem restaurou. Para trocar o papel de alguém, o Lucas roda uma linha no banco.

**Contatos também puxam sozinho.** Em Contatos, cada empresa ou funcionário pode ter palavras-chave, iguais às das categorias. Na importação, a categoria pode vir de uma palavra e o contato de outra ("CEMIG" dá a categoria; "ESSILOR" dá o contato).

## Lentes: o boleto vem sozinho do Caixinha

Os boletos de lentes (Shinedux, Perego, Optview, Unióptica…) são registrados na aba **Lentes** do Caixinha, com foto. O Fluxo **espelha** cada boleto pago como uma saída da loja: categoria sempre **Lentes/Laboratório**, contato = fornecedor, data = dia do pagamento, com o link 📎 do boleto. Etiqueta **🔗 Lentes**.

- Acontece sozinho ao abrir o Fluxo (quem estiver logado no Caixinha neste computador) e no botão **↻ Atualizar Lentes** em Lançamentos.
- Editou valor ou data no Caixinha → atualiza aqui. Apagou lá → vai pra Lixeira aqui. Categoria e contato escolhidos aqui não são sobrescritos.
- Se o boleto já estava lançado (na mão ou pelo extrato), o espelho **liga** ao lançamento existente em vez de duplicar (mesma loja, mesmo valor, até 3 dias de diferença).
- Na importação do extrato, a linha do banco que bate com um boleto já espelhado vem marcada **"🔗 já lançado pelas Lentes"** e não entra de novo.
- Saldo anterior e "Compras" da aba Lentes não entram — só boletos **pagos**, a partir de 01/09/2026. Boleto **previsto** (ainda não pago, ou com data futura) não entra; quando for marcado como pago no Caixinha, entra no próximo Atualizar.

## Saldo do dia 1º (Dashboard, Lançamentos e Fechamento)

Ao lado do mês aparece **💰 Saldo em 01/MM** da loja: **🏦 Sicoob + 💵 Gaveta + 🤝 Emprestado a receber = Total**. À direita, separado e **fora do total**, o **🔁 Deve ao escritório** (Banco Caixinha: contas que o escritório pagou pela loja e ela vai devolver). Mudou o mês, muda o saldo.

- O Sicoob vem da escada: com o mês anterior **fechado**, é o saldo real do banco. Sem mês anterior fechado aparece "(estimado)".
- Gaveta, emprestado e Banco Caixinha vêm do Caixinha (é preciso ter entrado no Caixinha uma vez naquele computador).
- Saldo "de hoje" fica pra quando o extrato cair todo dia pela API — até lá ele poderia mostrar número errado.

## Importar o extrato (OFX) — a partir da v2.0

O lançamento do Sicoob volta a ser **pelo extrato**. Ninguém precisa redigitar linha por linha.

1. **Importar extrato** → escolha o arquivo **.OFX** da loja (Sicoob → extrato → salvar em OFX).
2. O Fluxo compara cada linha com o que **já está lançado**: mesmo código do banco (importado antes) ou **digitado à mão com a mesma data e o mesmo valor**. Essas linhas **não entram de novo**; as digitadas só ganham o código do banco.
3. Na tela aparecem só as linhas que **precisam de você** (em amarelo). O resto vem **agrupado e fechado**: ✓ já lançados · 💳 Cartão · 💸 Pix de clientes · 🏧 depósitos da gaveta · ⇆ transferências · 🔑 palavras-chave. Clique num grupo pra abrir, se quiser conferir.
4. **Confirmar** lança as novas e liga as que já existiam.

**O sistema aprende:** classificou uma linha nova (ex.: "FORNECEDOR XYZ" → Material), ele aplica na hora nas outras linhas iguais do mesmo extrato e mostra **🔑 Lembrar sempre**. Clicou, na próxima importação já vem classificado. A barra verde mostra quanto falta ("faltam 1 de 3").

**Sem mouse:** na busca de categoria ou contato, digite parte do nome, use **↑ ↓** pra escolher e **Enter** (ou Tab) pra confirmar.

> ✅ **Nada do extrato é ignorado nem excluído.** Pix de cliente, depósito da gaveta e transferência entre lojas entram **sozinhos** como **neutros**: não mexem no resultado nem no Dashboard, só fazem a escada do banco bater.

> ⚠️ Linha que não é dessa loja (cliente pagou na conta errada, Pix devolvido, troca por cartão) **não se exclui**: entrada como **Pix de cliente** e saída como **Transferência entre lojas** ou **Devolução a cliente**. As duas se anulam.

## Neutras: dinheiro que passa, mas não é venda nem despesa

| Categoria neutra | Quando |
| --- | --- |
| **PIX DE CLIENTE — VENDA NA LINX** | Pix recebido de cliente. A venda já está contada na Linx; aparece só porque o dinheiro entrou no banco. |
| **DEPÓSITO DA GAVETA (CAIXINHA)** | Dinheiro da caixinha levado ao banco. |
| **Transferência entre lojas** | Dinheiro de uma loja pra outra (inclusive Pix que caiu na loja errada e foi repassado). |
| **DEVOLUÇÃO A CLIENTE** | Pix devolvido, cliente trocou por cartão, compra cancelada. |
| **A ESTORNAR / ESTORNO RECEBIDO (BANCO CAIXINHA)** | Escritório pagou conta de outra loja / a loja devolveu. |

Onde aparecem: **não** entram em receitas, despesas, Dashboard nem DRE. Entram só na **escada do banco** (Fechamento), separadas: "despesas da loja R$ X · neutras R$ Y". No **Dashboard** tem o quadro **⇄ Neutras do mês**, com cada lançamento, data e valor (entrada em verde, saída em vermelho).

## Cartão × Sipag (conciliação)

Menu **💳 Cartão × Sipag** (e o atalho no Fechamento). Compara, depósito por depósito, o que o **Cartões Rocha** previu com o que **caiu no Sicoob**.

- **Antecipação:** as vendas de um mês caem no **começo do mês seguinte**, em vários depósitos (Master, Visa, Elo — às vezes o mesmo cartão em dois). O Fluxo casa um a um; se a Sipag juntou ou separou, casa pela **soma do dia**.
- **Débito:** cai no dia seguinte à venda; casa pela agenda do Detalhado.
- **✓** bateu · **✕** esperava e não caiu · **?** caiu sem estar previsto · **⏳** ainda vai cair.
- O resultado fica gravado (com a mesma chave do Cartões), e o Cartões Rocha pode ler pra marcar sozinho.
- O que for **digitado na conferência do Cartões** aparece aqui como "aguardando extrato", mas **não vira lançamento** no Fluxo: dinheiro só entra pelo extrato.
- **⤓ Trazer os cartões já lançados** copia pra conciliação os créditos de cartão já lançados desde 01/06 — inclusive os digitados à mão e os que estão na **Lixeira** (que aparecem num quadro vermelho: se algum é o que falta, restaure).
- **🟣 É Stone:** cada crédito tem o botão **É Stone**. Ele tira o crédito da conta Sipag e o põe na caixa **Stone**, que mostra o total de Stone do mês. **↩ não é Stone** desfaz. **Nada vira Stone sozinho**: só pelo botão.
- **⚠️ Parece não ser Sipag — confira:** vale só para crédito que **já está na lista de cartões** (descrição de cartão ou categoria Cartão) e tem TED, STR, PIX, DOC, TRANSF ou STONE na descrição. Ele fica fora da conta até alguém clicar em **É Stone** ou **É Sipag**. Pix de cliente (categoria "PIX DE CLIENTE") nunca entra nessa lista.
  - 💡 **Dica pela razão social (v2.2.1):** o Fluxo lê o CNPJ ou a razão social que vem no extrato.
    - Se for **da própria loja**, aparece "provavelmente Stone": é assim que a Stone manda o dinheiro.
    - Se for **de outra loja do grupo**, aparece "parece transferência da Rocha X — não é cartão".
    - A dica nunca marca sozinha: quem decide é o botão.
- **Cores:** 🟢 fechou · 🔵 veio a mais até R$ 500 (ok) · 🟡 veio **mais de R$ 500** a mais (confira: quase sempre é Stone ou TED misturado) · 🔴 faltou · ⚪ aguardando extrato. Débito pelo total do mês (≈): diferença de até R$ 500, para mais ou para menos, é normal, porque a venda do último dia cai no dia 1º seguinte.
- **✅ Conferi no extrato (só Lucas e Heloísa):** depósito **digitado** fica amarelo no Cartões Rocha ("falta o banco confirmar"). Olhe o extrato do Sicoob e clique em **Conferi no extrato**: fica gravado **quem conferiu e quando**, e aparece "✔ conferido no extrato por …" em cada depósito. **↩ Desfazer conferência** tira a aprovação. Quando o OFX entrar, a linha do banco passa a valer e a aprovação fica como histórico.

### Cartões do mês: tem que cair × caiu (v2.0.4)

**Cada mês mostra o que cai no banco naquele mês.** Em **Outubro** aparece a antecipação das **vendas de setembro** (cai em 01/10). Em **Setembro**, a das vendas de agosto. O valor da antecipação não é previsão: é o que **tem que cair**.

**No Dashboard e nos Lançamentos: só a loja escolhida lá em cima.** É um quadro pequeno, abaixo do **Saldo do dia 1º**. Nos Lançamentos ele se atualiza a cada lançamento salvo: dá para ir lançando e ver o vermelho sumir.

**Automático (v2.0.5):** não precisa mais clicar em "Trazer os cartões já lançados". Todo crédito de cartão lançado no mês entra sozinho na conferência, tanto pela descrição (SIPAG, antecipação…) quanto pela **categoria Cartão**. Se um digitado for corrigido ou apagado, a conferência acompanha.

**Cuidado com os nomes dos meses:** no Cartões Rocha, "Setembro" quer dizer **vendas de setembro**. A antecipação dessas vendas cai em **outubro**, então ela aparece na tela de **Outubro** do Fluxo. A tela de **Setembro** do Fluxo mostra o que caiu em setembro: a antecipação das **vendas de agosto**.

**Na tela 💳 Cartão × Sipag: todas as lojas de uma vez**, no topo. Embaixo vem o **detalhe da loja**. **Clique numa loja** para ver o detalhe dela.

- ✅ **Igual ou a mais = ok** (verde ou azul). ⛔ **A menos, nunca**: aparece em **vermelho** com quanto faltou.
- ⏳ **Falta importar o extrato**: o dinheiro já caiu no banco, mas o Fluxo só fica sabendo quando entra o OFX. **Não precisa esperar o mês acabar**: dá para importar o OFX até hoje e importar de novo depois (não duplica). A comparação só conta as lojas que já têm extrato.
- 🧾 **Débitos:**
  - **Mês corrente:** "confere quando o mês fechar", porque o Detalhado de vendas só sai depois.
  - **Mês fechado com o Detalhado no Cartões:** confere dia a dia.
  - **Mês fechado sem o Detalhado:** compara pelo **total de débito do mês** que o Cartões já tem (marcado com **≈**). É aproximado, porque a venda do último dia cai no dia 1º do mês seguinte. Diferença pequena aparece como "≈ bateu (−R$ X)".

## Perguntas que sempre aparecem

| Pergunta | Resposta |
| --- | --- |
| O Resultado do mês está somando o saldo inicial? | Não. O Resultado é só entradas menos saídas do mês. Quem soma o saldo inicial é a escada, na linha "Saldo inicial". |
| Qual saldo inicial eu coloco? | Nenhum, na maior parte das vezes: ele copia do mês anterior fechado. Só na primeira vez, se o calculado estiver diferente do extrato do dia 1º, use o ✎. |
| E se o saldo era negativo? | Coloca negativo, com o botão de sinal. −R$ 15.000,00 é −R$ 15.000,00. |
| Parte do dinheiro é emprestado de outra loja. Desconto? | Não. Saldo inicial é o que tem. O empréstimo fica anotado à parte, no Caixinha. |
| O escritório pagou uma conta da loja pelo Sicoob. Lanço como? | Categoria A ESTORNAR (BANCO CAIXINHA) na loja que pagou e botão 🔁 Mandar pro Banco Caixinha. Veja "Empréstimo e estorno" e o Manual do Caixinha (🔗?). |
| Onde lanço os juros do cheque especial? | Como saída normal, na data em que o banco cobrou, categoria de juros. |
| Não bateu. Mexo no saldo inicial? | Não. Diferença se resolve achando o lançamento que falta ou que sobra. |
| Pix recebido e depósito em dinheiro, lanço? | Sim, com categoria neutra (não entra no DRE, a Linx já contou a venda). Na conta do banco eles entram, então para a escada bater eles precisam estar lançados. |
| Transferência entre lojas conta na escada? | Sim. Saiu da conta, conta como saída; entrou, conta como entrada. No DRE não aparece. |
| A caixinha deu negativo. | É lançamento faltando, não saldo. Procurar a entrada que não foi lançada. |
| Posso fechar sem bater? | Pode, escrevendo o motivo. O mês fica fechado e o motivo fica registrado. |
| Preciso mexer num mês fechado. | Peça ao Lucas para reabrir em Fechamento do mês. Depois feche de novo. |
| A aba Caixinha pediu e-mail e senha. | É o login do sistema Caixinha (o mesmo de lá). Só pede uma vez por computador. |
| Como mudo para o tema claro? | Botão 🌙 / ☀️ na barra de cima. Cada pessoa escolhe o seu. |
| Não aparece o botão de excluir. | Seu acesso é de lançador. Peça ao Lucas ou à Heloísa; vai pra Lixeira com o nome de quem excluiu. |
| Cadê Configurações? | Só o dono vê. Saldo inicial de conta não se mexe no dia a dia; o ✎ do Fechamento resolve mês a mês. |

## Histórico de mudanças

| Data | Versão | O que mudou | Efeito no fechamento |
| --- | --- | --- | --- |
| 22/10/2026 | 2.2.1 | Dica na caixa "Parece não ser Sipag": CNPJ/razão social da própria loja = "provavelmente Stone"; de outra loja do grupo = "parece transferência" (nunca marca sozinho) | Nenhum |
| 22/10/2026 | 2.2.0 | Conciliação de cartões: botão **É Stone** (sai da conta Sipag, caixa Stone com total); TED/STR/PIX/DOC/TRANSF na lista de cartões fica em "Parece não ser Sipag — confira"; a mais acima de R$ 500 fica amarelo "confira". Precisa do SQL v2.2 | Nenhum |
| 22/10/2026 | 2.1.0 | Botão **✅ Conferi no extrato** na conciliação de cartões (só dono): aprova os depósitos digitados olhando o extrato, grava nome e hora; dá pra desfazer. Precisa do SQL v2.1 | Nenhum |
| 22/10/2026 | 2.0.6 | Tela Cartão × Sipag explica no topo: "Junho no Fluxo = antecipação das vendas de maio + débitos das vendas de junho" | Nenhum |
| 22/10/2026 | 2.0.5 | Quadro de cartões também nos **Lançamentos** (abaixo do saldo do dia 1º, atualiza ao salvar); cartões lançados entram **sozinhos** na conferência (descrição ou categoria Cartão); digitado corrigido/apagado acompanha | Nenhum (só mostra) |
| 22/10/2026 | 2.0.4 | Cartões: "previsto" virou **"tem que cair"**; quadrinhos somam todas as lojas e avisam quantas aguardam extrato; débito do mês corrente "confere quando o mês fechar"; mês fechado sem Detalhado compara pelo **total de débito** do Cartões (≈); débito sem previsão não deixa mais a loja em "não bateu" | Nenhum (só mostra) |
| 22/10/2026 | 2.0.3 | Cartões previsto × caiu: no **Dashboard só a loja escolhida** (quadro pequeno); **todas as lojas** ficam no topo da tela **Cartão × Sipag**, com o detalhe da loja embaixo | Nenhum (só mostra) |
| 22/10/2026 | 2.0.2 | Dashboard ganhou o quadro **💳 Cartões do mês** (previsto × caiu; vermelho quando vem a menos) | Nenhum (só mostra) |
| 22/10/2026 | 2.0.1 | Corrigido erro na tela Cartão × Sipag em meses de 30 dias ("date/time field value out of range") | Nenhum |
| 22/10/2026 | 2.0 | Importação do OFX volta: liga ao que já foi digitado (não duplica), agrupa o que já está classificado, Pix/depósito/transferência entram sozinhos como neutros (nada ignorado); conciliação **Cartão × Sipag** com o Cartões Rocha; importação aprende ("Lembrar sempre") e busca de categoria/contato com setas e Enter; **Saldo em 01/MM** (Sicoob + gaveta + emprestado = total; Banco Caixinha à parte) no Dashboard, Lançamentos e Fechamento; quadro **Neutras do mês** no Dashboard; escada separa despesas de neutras; corrigida regra antiga que classificava "PAG…" como Cartão | O extrato volta a ser a fonte; a escada passa a bater sem excluir nada |
| 21/10/2026 | 1.11 | O sistema passou a se chamar **Fluxo** (antes "Caixa Rocha"), pra não confundir com o Caixinha. Endereço, logins e dados continuam os mesmos | Nenhum |
| 21/10/2026 | 1.10 | Lançamentos ganhou o "Dia a dia do mês": cada dia mostra ✓ (pronto) ou 4/5 (falta classificar), a barra do mês e o botão "Continuar de onde parou" | Quem para no meio sabe onde retomar; o mês só fecha quando tudo estiver verde |
| 21/10/2026 | 1.9.13 | Espelho da gaveta alinhado ao Caixinha versão 57: o emprestado respeita a data (aparece a partir do mês em que foi lançado) | Fluxo e Caixinha mostram o mesmo número em todo mês |
| 21/10/2026 | 1.9.12 | Bloco da gaveta abre com "Abertura — o que a loja tinha" em destaque (dinheiro + emprestado), igual ao Caixinha | O valor da loja aparece grande no topo |
| 21/10/2026 | 1.9.11 | Espelho da gaveta mostra o emprestado igual à tela do Caixinha em qualquer mês (inclusive junho, julho e agosto) | Junho mostra "R$ 0,00 em dinheiro + R$ 2.088,78 emprestado", igual ao Caixinha |
| 21/10/2026 | 1.9.10 | Espelho da gaveta usa a regra oficial do Caixinha: emprestado a receber = empréstimos − reposições, qualquer contraparte; abertura e fim do mês sempre mostram "dinheiro + emprestado = total" | Bate com o Caixinha centavo a centavo |
| 21/10/2026 | 1.9.9 | Tirada a escada "caixinha antiga" do Fechamento: ficam só Sicoob, Caixa (gaveta) e Banco Caixinha | Três blocos, sem confusão |
| 21/10/2026 | 1.9.8 | Escada da gaveta no Fechamento ganhou a linha "Total da caixinha (dinheiro + emprestado)", igual ao Total do Caixinha; "Tem que ter" virou "Tem que ter na gaveta" | Dois números, dois significados: o que se conta e o que a loja tem |
| 21/10/2026 | 1.9.7 | Espelho da gaveta mostra "Emprestado a outras lojas (a receber)" somando o que já vinha de meses anteriores | Bate com o "Total (dinheiro + emprestado)" do Caixinha |
| 21/10/2026 | 1.9.6 | Escada da caixinha antiga aparece em todo mês em que o sistema Caixinha ainda não tem movimento da loja, mesmo sem lançamento aqui | Dá pra digitar o saldo da gaveta de junho |
| 21/10/2026 | 1.9.5 | Fechamento mostra a escada da "caixinha antiga" (conta CAIXINHA lançada aqui) nos meses anteriores ao sistema Caixinha, com saldo inicial editável e dinheiro contado na gaveta | Junho, julho e agosto conseguem fechar a gaveta também |
| 21/10/2026 | 1.9.4 | Trava do espelho das Lentes: linha "LENTES…" que perdeu a ligação e bate com boleto previsto vai pra Lixeira sozinha | Previsto nunca fica sobrando na escada |
| 21/10/2026 | 1.9.3 | Botão "✕ não foi pago" na linha 🔗 Lentes: volta o boleto a previsto no Caixinha e tira daqui; busca dos espelhados simplificada | Dá pra desfazer um pago errado sem sair do Fluxo |
| 21/10/2026 | 1.9.2 | Espelho das Lentes: boleto que vira previsto ou some no Caixinha vai pra Lixeira mesmo quando o banco gravou a linha como "manual"; linha só ligada (extrato/manual) continua sendo apenas desligada | Previstos não ficam sobrando |
| 21/10/2026 | 1.9.1 | Espelho das Lentes só traz boleto pago: previsto ou com data futura fica de fora (e sai daqui pra Lixeira se deixar de ser pago) | Só despesa real entra |
| 21/10/2026 | 1.9 | Botões "Mandar pro Banco Caixinha" e "Marcar devolução no Caixinha" nos lançamentos A ESTORNAR / ESTORNO RECEBIDO (liga, não duplica; faixa amarela dos pendentes); novo Manual do Caixinha (botão 🔗?) | Banco Caixinha passa a ser alimentado pelo extrato, sem excluir nada |
| 21/10/2026 | 1.8.6 | Manual ganhou a seção "Empréstimo e estorno: o que vai pro Banco Caixinha" (dois tipos de empréstimo, passo a passo, avisos coloridos) e caixas verde/amarela/vermelha/azul | Heloísa sabe o que anotar onde, antes da automação |
| 21/10/2026 | 1.8.5 | Quadro do Dashboard virou "Extrato em dia?": a cor é só pelo extrato importado (dias que faltam de extrato), com manual e "N lançamentos em X dias do mês" como informação | Fica claro qual loja ainda não tem o mês provado pelo extrato |
| 21/10/2026 | 1.8.4 | Quadro "Lançamentos em dia?" conta só extrato importado e lançamento manual (espelho das Lentes e datas futuras ficam de fora) e mostra as duas datas por loja | Nenhum |
| 21/10/2026 | 1.8.3 | Espelho das Lentes passa a pegar boletos desde 01/09/2026 (ligando aos já lançados na mão) | Setembro ganha os boletos de lentes que faltavam |
| 21/10/2026 | 1.8.2 | Espelho das Lentes mostra o erro do banco quando não consegue gravar; avisos ficam na tela mais tempo e fecham com um clique | Nenhum |
| 21/10/2026 | 1.8.1 | Espelho das Lentes mostra quantos boletos leu e de qual loja não reconheceu; botão "Sair do Caixinha" só para dono | Nenhum |
| 21/10/2026 | 1.8 | Espelho das Lentes: boletos pagos na aba Lentes do Caixinha viram saídas aqui (Lentes/Laboratório, fornecedor, foto), atualizam e vão pra Lixeira junto; importação do extrato não duplica boleto já espelhado | Lentes entram no CMV da loja certa sem ninguém digitar |
| 20/10/2026 | 1.7 | Login por pessoa ("Quem é você?"), papéis dono/lançador respeitados pelo banco, Lixeira mostra quem excluiu e quem restaurou, Configurações e saldo inicial só para dono, palavras-chave também em Contatos, categoria e contato podem vir de regras diferentes | Fica registrado quem mexeu em cada coisa; ninguém "arruma" saldo inicial por fora |
| 20/10/2026 | 1.6 | Palavras-chave por categoria (gerar do histórico, editar, aplicar nos sem categoria), importação do extrato chega classificada com etiqueta 🔑, categoria A ESTORNAR (BANCO CAIXINHA) reconhecida com loja lida da descrição, quadro "Lançamentos em dia?" no Dashboard | Menos lançamento sem categoria; o contador do Fechamento cai sozinho |
| 20/10/2026 | 1.5 | Etiqueta de origem (OFX / manual · quem) em cada lançamento, filtro "Caixinha antiga", aviso de "saldo inicial é estimativa", contagem de lançamentos do mês no Fechamento e coluna "Conferir" no espelho (saídas lançadas pela própria loja, sem categoria em amarelo) | Dá para ver quem lançou e o que veio da caixinha antiga; o susto do saldo estimado vem explicado |
| 20/10/2026 | 1.4 | Espelho ganhou o Banco Caixinha (em aberto no dia 1º, emprestado, voltou, em aberto hoje) e os nomes fixos: Banco Sicoob, Caixa (gaveta), Banco Caixinha | Heloísa vê os três no mesmo lugar |
| 20/10/2026 | 1.3 | Aba Caixinha virou espelho do sistema Caixinha (só leitura); escada da caixinha aparece no Fechamento, embaixo da do Sicoob | Acabou o "ajustar saldo" da caixinha no Fluxo |
| 20/10/2026 | 1.2 | Ícone verde com F na aba do navegador | Nenhum |
| 20/10/2026 | 1.1 | Tema claro/escuro, botão ? de ajuda, aba Manual, escada passa a contar transferências entre lojas | Transferências entram na escada do banco (continuam fora do DRE) |
| 19/10/2026 | 1.0 | Nova tela de Fechamento: saldo inicial por mês copiado do anterior, saldo real no último dia do mês, botão Fechar que trava o mês, contador de lançamentos sem categoria, número da versão na barra de cima | Mês passado passa a bater; mês fechado não aceita lançamento |
| 19/10/2026 | — | Este guia foi criado | Regra do saldo negativo, do empréstimo e da caixinha escritas |
| set/2026 | — | Importação do extrato deixou de ser usada; lançamento voltou a ser manual | Conferir o extrato do banco na mão para achar o que falta |
| ago/2026 | — | Conciliação de caixa ligada, com saldo inicial que aceita negativo | Apareceu a linha "Começou com" |
