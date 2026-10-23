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

Depois de fechar, ninguém consegue lançar, editar ou excluir nada com data daquele mês na conta do banco. Se tentar, o sistema avisa. Só o gestor reabre, em Fechamento do mês, com motivo. A caixinha não trava.

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
| Gestor | Lucas, Heloísa | Tudo: lançar, importar, excluir, restaurar, fechar e reabrir mês, contas e saldo inicial | — |
| Lançador | Rhaiane, Carol | Lançar, corrigir categoria/contato, importar extrato, ver Lixeira | Excluir, restaurar, fechar mês, Configurações |
| Operador | (ninguém hoje) | Igual ao gestor, menos contas/saldo inicial e reabrir mês | Contas, reabrir mês |
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

### Extrato em PDF (v2.8.3)

- Em **Importar extrato** dá para escolher o **OFX ou o PDF** do Sicoob. O PDF traz o texto inteiro de cada linha; o OFX corta em 32 letras.
- Exemplo: no OFX chega só "FAV.: OTICA ROCHA DVL PRODUTOS O". No PDF chega "FAV.: OTICA ROCHA DVL PRODUTOS OPTICOS L **SALARIO HELOISA**", "… **CEMIG ESCRITÓRIO**", "… **VIVO CELULARES**".
- **Não duplica:** o Fluxo dá a cada linha do PDF o mesmo código que o Sicoob usa no OFX. Linha que já entrou por OFX aparece como "já lançada", e dá para importar o mesmo período nos dois formatos.
- **Transferência para a DVL (ou outra loja do grupo):** o que vem depois do nome da empresa vale para classificar. Classifique uma vez "SALARIO HELOISA" e clique em lembrar: nos próximos extratos em PDF ela já vem classificada. Sem regra, continua "confira" como antes.
- Lançamentos futuros que aparecem no fim do PDF (depois do período) ficam de fora.
- Se o PDF for de outra conta (outra empresa), o Fluxo avisa antes de importar.
- A observação da importação já vem como "EXTRATO EM PDF".

### Transferências e Pix na importação (v2.7.1)

- **Saída para outra loja do grupo** (ex.: "FAV.: OTICA ROCHA DVL…" = Rocha 2) vem como **Transferência entre lojas** com **"confira"**, porque pode ser reembolso de conta (internet, contabilidade, energia…). Se for só dinheiro passando, confirme. Se for reembolso, troque a categoria daquela linha.
  - O sistema **não aprende pelo nome da outra loja**, porque o nome não diz qual conta foi paga.
  - Transferência entre lojas é **neutra**: não entra em receita, despesa nem DRE. Só entra na escada do banco, para o saldo bater.
- O botão **✓ Confirmar as N** confirma de uma vez todas as que são só transferência. Empréstimo que precisa voltar vai em **A ESTORNAR**.
- **Botão "não entra" (v2.7.3):** em cada linha da importação. A linha vai como **neutra** (transferência/empréstimo): não entra em receita, despesa, DRE nem Radar. Fica guardada só para o saldo do banco bater. **Não precisa excluir.**
- **Mostrar: Todas / Só entradas / Só saídas** na importação: só muda o que aparece na tela, para conferir por partes. Não muda o que vai ser lançado.
- **Escolher o que lançar agora (v2.7.6, v2.7.7):** cada linha tem uma caixinha ao lado da data. Na barra **"Marcar para lançar"** o botão escolhido fica **verde** e mostra quantas linhas são: Todas, Entradas, Saídas, O que eu mexi, Classificadas, Nenhuma. **Pode escolher mais de um**: Entradas + O que eu mexi = todas as entradas e as saídas em que você escolheu categoria, contato, obs ou "não entra". Se mexer em outra saída depois, ela entra sozinha. Ao lado aparece o total: **"N marcadas (X entradas · Y saídas)"**. Dá para ajustar à mão na caixinha e em "marcar/desmarcar o grupo". As desmarcadas **aparecem de novo na próxima importação** do mesmo extrato, sem duplicar. Importação parcial não marca o extrato como "em dia".
- **Observação no lugar do contato (v2.7.4):** para quem não precisa virar contato (panfletagem, blogueira, ajuda de um dia), clique em **"+ obs"**, embaixo da categoria, e escreva (ex.: MARIA — PANFLETAGEM VILA ISA). Funciona na importação e nos Lançamentos.
  - A observação aparece no lugar do contato e a linha **não fica vermelha**.
  - No relatório **Por contato**, quem não tem contato mas tem observação aparece pela observação (marcado **obs**), com a categoria e quantos lançamentos — ex.: LUÍSA — PANFLETAGEM · Marketing · 2 lanç. Na tela de lançar, o campo vazio diz **"⚠ contato ou obs"**, para a equipe saber que a observação vale no lugar do contato.
  - No medidor de automação, ela conta como "com contato".
- **Lançamentos → "esconder as neutras":** tira da lista as transferências, os Pix de cliente e os depósitos da gaveta. O sistema lembra a escolha.
- **Só no teclado (v2.7.2):** use **Tab** para ir de campo em campo (categoria → contato → próxima linha). Comece a **digitar** ou aperte **Enter** para abrir a busca, e **Enter** de novo para escolher: o cursor pula sozinho para o próximo campo. **Esc** fecha sem mudar. Vale na importação e nos Lançamentos.
- **Lançamentos:** clique em **Entradas** ou **Saídas**, em cima da lista, para ver só as entradas ou só as saídas. Clique de novo para voltar a ver tudo.
- **Pix e TED sem nome** (ex.: "Pagamento Pix 06.981.180 0001-16"): na primeira vez, alguém escolhe a categoria. O sistema oferece **"🔑 Lembrar sempre: CNPJ 06.981.180/0001-16"** e, da próxima vez, aquele Pix vem classificado sozinho. Funciona também com CPF mascarado (***.502.576-**).

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

## 🧭 Radar do mês (v2.3.0)

Menu **🧭 Radar do mês**, logo abaixo do Dashboard. Mostra **o que deve entrar e sair** no mês, por loja ou do **Grupo todo**.

**Três regras (por isso não dá trabalho):**
- ✅ **Não é conta a pagar.** A previsão é **por categoria**, calculada sozinha pela **média dos últimos 3 meses**. Ninguém lança boleto nem dá baixa.
- ✅ **Nunca acumula.** Cada mês começa do zero. O que não saiu num mês **não** passa para o seguinte.
- ✅ **Some sozinho.** Quando o extrato traz o pagamento daquela categoria, o "pago" sobe e o "ainda deve sair" desce. Se pagou por outra conta, também vale.

**O que aparece:**
1. **3 números:**
   - **Deve entrar:** a antecipação que o Cartões Rocha calculou, mais a média do resto.
   - **Deve sair** e **sobra prevista.**
   - Uma barra mostra quanto do mês já passou e se o **ritmo** está normal.
   - Num mês que já acabou, mostra **Entrou / Saiu / Sobrou**, com o que o radar previa.
2. **Para onde vai o dinheiro:** cada categoria com previsto, pago até hoje e ainda deve sair.
   - ⚠️ Avisa quando uma categoria veio **acima do normal**.
   - ⚠️ Avisa quando um fixo **venceu e não apareceu no extrato**.
3. **Próximos 3 meses:** a média, mais as **parcelas já lançadas** (3/6 → 4ª, 5ª e 6ª), mais o que estiver no **A pagar**. Novembro e dezembro mostram o aviso de **13º**.
4. **Comparar lojas:** escolha a categoria (ex.: Funcionários) e veja a média de cada loja lado a lado.
5. **Por contato (v2.3.1):** clique numa categoria (▸) para abrir os contatos dela. Cada um mostra a média dos 3 meses, quanto saiu este mês e um aviso se subiu. Exemplo: em Lentes/Laboratório, de qual laboratório está comprando mais.

**Se um valor mudar (ex.: o aluguel foi de 5.000 para 6.000):**
- **Sem fixar:** a média se ajusta sozinha. O radar prevê 5.333 no 1º mês, 5.667 no 2º e 6.000 no 3º.
- **Fixado:** fica no valor exato até alguém trocar em Recorrentes.
- Fixe só o que precisa ser exato ou ter aviso de vencimento.

**📌 Fixar (só gestor):** para valor que não varia, como o aluguel. Ele vira um **Recorrente** e passa a valer no lugar da média. Quando mudar, troque em **Recorrentes**, uma vez só.

## 🤖 Medidor de automação (v2.4.0)

No **Dashboard** e nos **Lançamentos**, logo abaixo dos cartões, uma faixa mostra **quanto o sistema já faz sozinho** na loja, no mês escolhido, comparado com o mês anterior (▲ subiu, ▼ caiu):

- **Categoria sozinha na importação:** das linhas novas do extrato, quantas já vieram com categoria sem ninguém escolher.
- **Lançamentos com categoria:** o DRE e o Radar dependem disso.
- **Despesas com contato:** fornecedor, laboratório, funcionário.
- **Veio do extrato:** quantos lançamentos vieram do OFX. O resto foi digitado à mão.

Cores: 🟢 90% ou mais · 🟡 70% a 89% · 🔴 menos de 70%. A **meta é 99%**.

Na tela de **Importar extrato** aparece também: "🤖 Sozinho: X% das linhas novas já vieram com categoria".

Cada vez que alguém classifica uma linha, o sistema aprende a palavra, e na próxima importação o número sobe sozinho.

## 👤 Contato padrão das categorias do Caixinha (v2.5.0)

O Caixinha não tem contato, então os lançamentos dele chegam no Fluxo só com a categoria. Agora **cada categoria do Caixinha tem um contato padrão**:

| Categoria | Contato |
|---|---|
| MOTO TAXI | MOTO TAXI |
| REP. CAIXINHA | CAIXINHA |
| MIDIA | MIDIA |

**Como usar:**
1. Em **Lançamentos**, clique em **👤 Contato dos N do Caixinha sem contato**.
2. O sistema já sugere o contato de **mesmo nome** ou o **mais usado** naquela categoria. Confira e clique em **Salvar**.
3. Com **"lembrar"** marcado, **os próximos já vêm sozinhos**: toda vez que os Lançamentos abrem, o que chegou do Caixinha sem contato é preenchido pelo padrão.

Nada que já tem contato muda. Mês fechado não é mexido. Para trocar um padrão, abra a mesma tela pelo botão **👤 Contato padrão por categoria** (aparece no filtro **Caixinha antiga**).

## 📅 Agenda de pagamentos (v2.6.0)

O antigo **A pagar** virou **Agenda de pagamentos**. As contas ficam numa tabela própria e **não mexem em saldo, DRE nem fechamento**. Elas só mostram o que vem pela frente.

**A semana é de sábado a sexta.** O que vence no sábado ou no domingo aparece na **segunda**. Cada dia mostra as contas e o total. Em cima aparecem o total da semana, quanto **já foi pago**, quanto **falta** e quanto vem na **próxima semana**. Dá para ver por **loja** ou o **Grupo todo**.

**Três regras:**
- ✅ **Baixa sozinha.** Quando o pagamento aparece no extrato (mesmo valor, de 7 dias antes a 10 dias depois do vencimento), a conta vira **paga**. Se o lançamento do extrato estiver sem categoria ou contato, ele ganha os da conta.
- ✅ **Lançar é rápido.** Cole o **código de barras / linha digitável**: o valor e o vencimento entram sozinhos. A categoria e o contato são sugeridos pelas palavras-chave. Se for parcelado, escolha as vezes e ele cria todas, uma por mês, no mesmo dia.
- ✅ **Não amontoa.** O vencido de semanas anteriores fica numa caixa separada e não soma na semana.
  - **"Já paguei"** pergunta como foi pago (Sicoob, outra conta, dinheiro).
  - **"Não vou pagar"** tira da agenda e guarda o motivo.

**Aparece sozinho, sem ninguém lançar:**
- os **fixos dos Recorrentes** (aluguel, Simples…), que ficam pagos quando sai um lançamento parecido perto do dia;
- os **boletos de lentes previstos no Caixinha**, quando você está conectado no Caixinha.

Clique em qualquer conta para ver os detalhes ou resolver. A Agenda também alimenta o **Radar do mês** e o card **A pagar em (mês)** do Dashboard.

**No Dashboard, o A pagar não acumula (v2.6.4):** o card e o gráfico mostram só o que **vence no mês escolhido**. O que venceu em meses anteriores e não foi resolvido aparece numa linha à parte ("+ R$ X vencido de meses anteriores") e fica na caixa de vencidos da Agenda.

**Funcionário com salário que varia (v2.6.1):** cadastre em **Recorrentes** com o **contato** do funcionário e o dia do pagamento. A Agenda mostra a **média dos últimos 3 meses** pagos a ele e marca como **pago** quando sai qualquer pagamento para ele no mês, de qualquer valor.

**Parcela lançada → as próximas vão sozinhas (v2.6.1):** ao lançar nos Lançamentos uma despesa com parcela (ex.: 1/6 do cartão da loja), as parcelas 2/6 a 6/6 entram sozinhas na Agenda, uma por mês, no mesmo dia. Quando cada uma sair no extrato, ela é baixada sozinha.


### Ler boleto por foto ou PDF (v2.8.4)

- Na Agenda, em **Lançar conta**, clique em **Ler boleto (foto ou PDF)**. No celular abre a câmera; no computador, escolha a foto ou o PDF.
- O Fluxo preenche sozinho: **valor e vencimento** (pelo código de barras), **descrição** (o nome da empresa), **parcela** (ex.: boleto 5/6 → cria só a 5/6 e a 6/6) e, quando já conhece a empresa pelo CNPJ, **categoria e contato**.
- **Aprende:** depois que você lança o primeiro boleto de uma empresa com categoria, o Fluxo guarda o CNPJ dela. No próximo boleto, categoria e contato vêm sozinhos.
- **PDF com texto** (o que chega por e-mail) é lido no próprio Fluxo, sem custo. **Foto** (ou PDF escaneado) é lida pela IA no servidor — custa centavos por boleto. A chave da IA fica guardada na Vercel, nunca no sistema.
- Parcelado sem boleto na mão: escolha **quantas vezes** e **de qual parcela começa** (ex.: 6x, da 5ª).
- Sempre confira antes de clicar em **Lançar na agenda**.

## 🧩 Módulos: Óticas · Laboratório · Grupo de compras · Casa (v2.7.0)

No alto da tela, ao lado da escolha da loja, ficam os **módulos**. Ao trocar de módulo, a lista de lojas/empresas e o menu mudam:

| Módulo | Empresas |
|---|---|
| **Óticas Rocha** | as 11 lojas (como sempre) |
| **Laboratório** | GV Lentes |
| **Grupo de compras** | FZ Grifes e Grupo VR |
| **🔒 Casa** | só Lucas, Heloísa e Flávia enxergam |

- **Cada módulo soma só o que é dele.** "Grupo todo" (ou "Todas as empresas"), Radar, Agenda e Dashboard nunca misturam módulos.
- **Cartão × Sipag, Caixinha, Fechamento de caixa e Juros por loja** aparecem só nas Óticas.
- **Juros por loja (v2.7.6):** mostra o valor exato de cada mês, por loja (Jan até o mês atual), com a linha do Grupo e o total do ano. O mês atual vai somando conforme os extratos entram e fica guardado quando o mês acaba. Em cima: o mês atual (até agora), o mês passado e o total no ano. Passe o mouse num valor para ver o detalhe (juros, tarifa…).
- **Cada empresa nova tem uma "CONTA PRINCIPAL"** para importar o extrato do banco dela, e tem Agenda, Radar e palavras-chave iguais às das lojas.
- **A Casa tem categorias próprias** (CASA · MERCADO, ESCOLA, CARTÃO DE CRÉDITO…) e contatos e palavras-chave próprios. Nada disso aparece nas lojas, e o que é das lojas não aparece na Casa. Categoria ou contato criado dentro da Casa fica da Casa.
- **A tranca da Casa é no banco de dados.** Quem não tem acesso não vê a Casa nem pelo sistema nem pelo banco.

**Próximas fases:**
- **Repasse das lojas × meta** no Grupo de compras.
- **Conferências do Laboratório.**
- **Uso pelo celular.**

## Remanejos (v2.8.0 · automático na v2.8.1)

Quando o combinado não deu para cumprir: a loja pagou menos do que costuma, pagou mais, atrasou ou não pagou. Exemplo: a Rocha 1 transferia R$ 17.000 por mês para os óculos e este mês mandou R$ 8.000.

- **Quem vê:** só o gestor (Lucas, Heloísa) e a Flávia. Para as outras pessoas o menu nem aparece, e o banco também não deixa ler.
- **Entra sozinho (v2.8.2):** quando o gestor abre a tela (ou o Dashboard), o Fluxo confere o mês e os 2 anteriores, **só nas contas cadastradas nos Recorrentes** (com valor fixo) **e na Agenda**:
  - **A menos:** saiu menos que o fixo, ou não saiu. Só registra depois que o **extrato daquela loja foi importado** (importação completa) até 2 dias úteis depois do vencimento — ou quando o mês está fechado. Loja sem extrato importado não gera "a menos".
  - **A mais:** saiu mais que o fixo (custo subiu, ou pagou um atraso).
  - **Atraso:** saiu 2 dias úteis depois do vencimento ou mais.
  - **Agenda:** conta vencida e em aberto (também só depois do extrato importado), ou marcada "não vou pagar" (o motivo da Agenda já vem preenchido).
- **Com o que ele compara:** com o **valor fixo dos Recorrentes** (avisa a partir de 10% de diferença; menos de R$ 300 não entra). Contas que não estão nos Recorrentes não entram — para acompanhar uma conta, cadastre ela lá.
  - **Dica:** cadastre nos Recorrentes os repasses com o valor combinado (ex.: repasse da Rocha 1 para o grupo de compras, R$ 17.000, dia 5).
- **Dia útil:** sábado, domingo e feriado nacional não contam. Venceu no sábado e pagou na segunda = em dia.
- **Ficam de fora:** contato do tipo funcionário e as categorias de funcionário, salário, férias, juros e tarifas. Em **Ajustes do acompanhamento** (no fim da tela, só o gestor) dá para marcar outras categorias ou contatos que não devem entrar.
- **Completar o porquê:** cada registro sem motivo mostra **"falta o porquê"**. É só abrir e escrever. **Não foi remanejo** tira da lista e o Fluxo não pergunta mais.
- **Se deixar de valer** (ex.: o resto do pagamento caiu depois) e ninguém tinha escrito o porquê, ele sai sozinho da lista.
- **Registrar à mão:** **+ Registrar remanejo** continua funcionando para o que o Fluxo não enxerga.
- **Resumo em cima:** quantos remanejos teve no mês e quantos estão sem porquê, total a menos, total a mais, atrasos (média de dias úteis), juros e tarifas do mês e quanto as lojas devem ao grupo de compras.
- **Por loja, por categoria e por contato:** onde mais aconteceu.
- **Deve ao grupo de compras:** pagar a menos para FZ Grifes ou Grupo VR soma; pagar a mais desconta. Em Ajustes dá para marcar outro contato que acumula dívida.
- **No Dashboard** da loja aparece uma linha discreta: quantos remanejos e quantos sem porquê.
- Tudo fica guardado para o agente ler depois. Registrar por mensagem de WhatsApp fica para quando o agente existir.

## Empréstimos entre lojas — espelho do Caixinha (v2.8.0)

Os empréstimos continuam sendo lançados e baixados no **Caixinha**. No Fluxo, o menu **Empréstimos (espelho)** mostra todas as lojas numa tela só, sem trocar de loja no seletor. Ninguém lança nada aqui.

- **Entre lojas (dinheiro da gaveta):** para cada loja que emprestou, quanto falta voltar (a mesma conta do Caixinha), para quem emprestou e quanto emprestou e voltou no mês. Devolução registrada sem nome aparece como "voltou sem nome".
- **Banco Caixinha:** cada conta que o escritório pagou por uma loja e ainda falta voltar, com data, descrição, valor, quanto já voltou e quanto falta.
- Precisa ter entrado no Caixinha uma vez neste computador (igual à aba Caixinha espelho). Só aparece no módulo Óticas.

## Diversas: a conta dividida (v2.9.0)

Lá em cima, na ordem: **Óticas Rocha · Diversas · Grupo de compras · GV Lentes · Casa**. A Diversas é a conta dividida (DVL): os boletos que ela paga ficam lá, e cada empresa paga a sua parte transferindo para ela.

- **Lançar e dividir:** na Agenda da Diversas, lance o boleto (pode usar **Ler boleto**). Marque **"Dividir entre as empresas"** e escolha:
  - **Por %:** a porcentagem fixa de cada empresa (a mesma ideia da Diversas do FaturaFácil);
  - **Por lente (surfaçagem):** pelas lentes do mês de cada empresa;
  - **Por igual:** só entre as empresas marcadas, com os centavos acertados;
  - **À mão:** digita a parte de cada uma.
- A tabela mostra a parte de cada empresa antes de lançar. O total sempre bate com o valor do boleto (os centavos que sobram vão para quem tem o maior resto).
- **Regras salvas:** "Salvar regra" guarda o jeito de dividir (ex.: ESCRITÓRIO). Na próxima vez, é só escolher em "Regra salva".
- Ao lançar, **cada empresa recebe na própria Agenda** "PARTE DIVERSAS · descrição", com o **mesmo vencimento** do boleto. Quando a transferência para a Diversas cair no extrato da loja (mesmo valor, perto do vencimento), a parte dá baixa sozinha.
- **Não pode atrasar:** marque no lançamento (vale em qualquer módulo). A conta fica com uma faixa vermelha na agenda. Na Diversas, o quadro "Não pode atrasar" mostra os próximos 45 dias e quantas empresas ainda não transferiram. O agente vai vigiar esses.
- **Quanto cada empresa deve à Diversas:** quadro com a parte do mês de cada empresa, quanto já transferiu e quanto falta.
- **Porcentagens e lentes:** no fim da Agenda da Diversas. A % só o gestor muda; as lentes são digitadas todo mês (o "por lente" usa o mês do vencimento do boleto, ou o último mês preenchido).
- Abrir o boleto da Diversas mostra a lista de empresas e quem já transferiu. "Não vou pagar" ou "Excluir" no boleto leva junto as partes que ainda estavam em aberto.

## Mandar para a Lixeira — uma ou várias (v2.9.1)

- Em **Lançamentos**, cada linha tem uma caixinha ao lado da data. Marque as que devem sair (ou a caixinha do cabeçalho, que marca todas que estão aparecendo) e clique em **Mandar para a Lixeira**.
- **Quem lança também pode** (Rhaiane, Carol...). Nada é apagado de vez: vai para a Lixeira com o nome de quem tirou. **Só o gestor restaura.**
- Mês fechado não deixa tirar. Reabra o mês primeiro.
- **Pix de cliente não precisa sair.** Até setembro ele é neutro; desde outubro conta como venda (veja abaixo).

## Pix de cliente vira venda (v2.9.2 · desde a v2.9.6 vale já em outubro/2026)

- **De 01/10/2026 em diante**, o Pix recebido de cliente entra na categoria **VENDA PIX** e **conta como venda no dia em que cai** (no Dashboard, na DRE e no resultado).
- **No fim do mês, lance só o DINHEIRO à vista** da Linx, **sem o Pix** (a Linx mostra os dois separados). Se lançar o total com o Pix, a venda fica duplicada.
- **Até setembro** fica do jeito antigo: o Pix é neutro e o total à vista do fim do mês entra inteiro. **Já no fim de outubro**, lance só o dinheiro.
- O card **Entradas do mês** mostra **À vista + Pix** já somados na mesma linha (com o detalhe: à vista X + Pix Y), depois o **Cartão** e as **outras entradas**. A lista de Receitas mostra a mesma linha. Antes do fim do mês, o à vista aparece como "lança no fim do mês".
- Pix de outra loja do grupo, do Lucas (empréstimo) ou de devolução **não** vira venda: continua separado pelas regras. Depósito do dinheiro da gaveta continua neutro.
- Com o extrato caindo todo dia (API), **não precisa escolher o que entra**: entra tudo (para o saldo do banco bater) e a categoria decide se é venda, despesa ou neutra.

## Extrato automático do Sicoob (v2.9.4)

O extrato do Sicoob não precisa mais ser baixado. Um robô busca o extrato direto no banco, sozinho, 3 vezes por dia (5h37, 12h37 e 19h37).

1. Entre em **Importar** com a loja escolhida.
2. No quadro **Extrato automático do Sicoob**, clique em **Puxar do Sicoob**.
3. Aparece a mesma tela de conferência de sempre. O que já estava lançado aparece como "já lançado" e não entra de novo.
4. Confira o que ficou sem categoria e confirme.

- O texto vem completo, com o nome de quem pagou o Pix e o motivo escrito na transferência (ex.: SALARIO MIRELLE).
- O robô só **lê** o extrato. Ele não consegue fazer pagamento nem transferência.
- O quadro mostra quando o robô atualizou pela última vez, o saldo no banco e quando vence o certificado digital da empresa.
- **Aviso no topo do sistema** (gestor e lançadores veem): certificado vencendo em 30 dias ou menos, certificado vencido, ou robô que falhou ou ficou mais de um dia e meio sem atualizar. Clicar no aviso abre o Importar.
- Loja que ainda não está ligada à API continua com o OFX ou PDF, como antes.

**Certificado vencendo:** renovar o e-CNPJ A1 da empresa, tirar a chave pública (.cer) e trocar no portal developers.sicoob.com.br, no aplicativo FLUXO daquela loja. Depois o Lucas troca o certificado no cofre do GitHub.

## Conferência de Pix: banco × Linx (v2.9.5 · desde outubro/2026)

- **Só o gestor** (Lucas, Heloísa) vê e preenche.
- **No Dashboard de cada loja** aparece o quadro "Pix de [mês]": quanto caiu de Pix no banco e um campo para digitar o **Pix da Linx**. Bateu (diferença até R$ 1,00): fica verde. Não bateu: fica amarelo, com **"olhar com a [loja]"** e quanto falta ou sobra.
- **Menu Análise → Conferência de Pix:** todas as lojas do mês numa tabela (no módulo Óticas Rocha ou GV Lentes), para digitar de uma vez e ver quem tem diferença e quem falta digitar.
- **Quem digitou e quem mudou:** cada valor guarda o nome e a hora. Se mudar depois, aparece "mudou 1x"; clicando, mostra o valor antes, o depois, quem mudou e quando.
- "Faltam" = a Linx tem mais Pix do que caiu no banco. "Sobram" = caiu mais no banco do que a Linx registrou.
- Vale também para a **GV Lentes**: o Pix que o laboratório registrou é conferido com o banco.

## Ler boleto também em Lançamentos (v2.9.5)

- Em **Lançamentos → Novo lançamento**, botão **Ler boleto (foto ou PDF)**: preenche descrição, valor, data (o vencimento — **confira a data do pagamento**), parcela, nº do documento e, pela empresa já aprendida, categoria e contato. As próximas parcelas vão sozinhas para a Agenda.

## Regras das entradas (v2.9.5)

- **Pix de cliente pelo Sicoob** ("TRANSF.RECEBIDA - PIX SICOOB · REM.: MARIA…") entra como **Pix de cliente** (venda desde outubro), não mais como transferência.
- **Transferência ou Pix de outra loja do grupo** (REM.: OTICA ROCHA…, GV OPTICAL) continua como **Transferência entre lojas**.
- **Pix do Lucas** (LUCAS GOMES ROCHA) **não vira venda**: entra como transferência marcada "confira" (normalmente é empréstimo do sócio).
- Em **Lançamentos** e **Importar extrato** aparece até o fim de novembro o aviso: desde 1º de outubro o Pix é venda, não exclua os Pix, e no fim do mês lance só o dinheiro da Linx.
- O botão **Laboratório**, lá em cima, agora se chama **GV Lentes**.

## Regras das saídas com o texto completo do Sicoob (v2.9.7)

O extrato automático (e o PDF) traz o texto inteiro: o nome do favorecido e, depois dele, o motivo. A importação usa isso:

- **Nome de funcionário depois da empresa do grupo** (ex.: "FAV.: OTICA ROCHA DVL … FERIAS ANNA CAROLINA"): vai em **Funcionários**, com o contato da pessoa. O nome é achado mesmo escrito diferente (Ana/Anna, Vitor/Victor, Jéssica/Jezica, com ou sem sobrenome). Se tiver duas pessoas com o mesmo nome (ex.: só "MARIA"), vem Funcionários marcado "confira", sem contato.
- **Funcionários sem contato** (ex.: palavra-chave "SALARIO MARIA" que não tinha pessoa): o Fluxo completa o contato pelo nome que está no texto (SALARIO MARIA CLARA → Maria Clara).
- **Para a GV Optical** ("FAV.: GV OPTICAL…", inclusive "GV OPTICAL FREEFORM"): sempre **Lentes/Laboratório**, contato **GV Optical**.
- **Para a DVL com motivo** (conta dividida: CEMIG ESCRITÓRIO, ESTOJOS, PANFLETOS…): é **despesa**, não neutra. Se a palavra-chave conhece o motivo, já vem com a categoria; se não, aparece em "Precisam de você" com a etiqueta "conta dividida da DVL" para escolher a categoria (e o 🔑 Lembrar sempre aprende).
- **Favorecido de fora do grupo** (fornecedor, pessoa): segue as palavras-chave como qualquer pagamento (ex.: "FAV.: LAURIBERTO CAURIM CEMIG…" → CEMIG). Para o Lucas continua "confira".
- **VAI ESTORNAR** (também "ESTORNAD", quando o Pix corta a mensagem): vem em A ESTORNAR com a pergunta **Qual loja deve?**. Ao confirmar, já vira empréstimo a estornar no **Banco Caixinha** daquela loja, ligado ao lançamento. Se já existir um igual lá (mesma loja, mesmo valor, até 7 dias), só liga. Dá para escolher "decidir depois" e mandar pelo Lançamentos. Precisa estar entrado no Caixinha (menu Caixinha).

### Trava: extrato de outra loja não entra (v2.9.7)

Cada loja tem a sua conta do Sicoob guardada (Rocha 1 18769-0 … Rocha 11 109752-0, GV Lentes, FZ Grifes, Grupo VR e Diversas). No OFX e no PDF o Fluxo lê o número da conta: se é de outra loja, aparece "Este extrato é da conta X, que é da Rocha Y" e **nada é importado**, com o botão para ir à loja certa. Segunda conferência: se a Stone depositou (CRÉD.TED-STR) com o nome de outra loja, o Fluxo pergunta antes de importar. Conta nova numa loja sem conta guardada fica guardada no primeiro extrato confirmado.

### Depósito da gaveta conferido pelo extrato (v2.9.7)

Quando o extrato da loja traz o depósito da gaveta (texto com "DEP…", mesmo valor, data igual ou até 5 dias úteis depois), ao confirmar a importação o depósito fica **conferido no banco** no Caixinha, como "conferido pelo extrato". No **Caixinha (espelho)** aparece o quadro "Depósitos da gaveta no banco": quantos foram conferidos pelo extrato, à mão (pela Rhaiane), aguardando, e em vermelho os que passaram de 5 dias úteis sem aparecer: **não chegou no banco**.

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
| Cadê Configurações? | Só o gestor vê. Saldo inicial de conta não se mexe no dia a dia; o ✎ do Fechamento resolve mês a mês. |

## Histórico de mudanças

| Data | Versão | O que mudou | Efeito no fechamento |
| --- | --- | --- | --- |
| 23/10/2026 | 2.9.7 | Saídas usam o texto completo do Sicoob: nome de funcionário → Funcionários com contato (Ana/Anna); GV Optical → Lentes/Laboratório; DVL com motivo → despesa; VAI ESTORNAR pergunta a loja e manda para o Banco Caixinha; trava de conta (extrato de outra loja não entra); depósito da gaveta conferido pelo extrato e quadro "não chegou no banco" no espelho do Caixinha | Coluna da conta de cada loja criada e preenchida pelo Claude |
| 23/10/2026 | 2.9.6 | Pix como venda e conferência de Pix já valem em outubro; Dashboard mostra À vista + Pix somados na mesma linha (e no Receitas); aviso para a equipe atualizado | Nenhum (tabela da conferência criada pelo Claude) |
| 23/10/2026 | 2.9.5 | Conferência de Pix banco × Linx (de novembro em diante, só gestor, no Dashboard de cada loja e em Análise, com histórico de quem mudou); Ler boleto também em Lançamentos; Pix de cliente pelo Sicoob vira Pix, Pix do Lucas fica "confira"; aviso de 1º de novembro; Laboratório vira GV Lentes | Tabela criada pelo Claude no Supabase |
| 23/10/2026 | 2.9.4 | Extrato automático do Sicoob: robô busca o extrato pela API do banco 3 vezes por dia; em Importar, botão "Puxar do Sicoob" (sem baixar arquivo, texto completo, não duplica com OFX/PDF). Aviso de certificado vencendo e de robô parado. Começa pela Rocha 1 | Rocha 1 não precisa mais baixar o extrato |
| 23/10/2026 | 2.9.3 | Botões dos módulos na nova ordem: Óticas Rocha · Diversas · Grupo de compras · Laboratório · Casa | Nenhum |
| 23/10/2026 | 2.9.2 | Plano B: de novembro/2026 em diante o Pix de cliente entra como VENDA PIX (conta no dia); no fim do mês lança-se só o dinheiro à vista da Linx. Card de Entradas mostra cartão · Pix · dinheiro | Rodar o SQL v2.9.2 no sistema-financeiro |
| 23/10/2026 | 2.9.1 | Lançamentos: marcar várias linhas e mandar para a Lixeira de uma vez; quem lança também pode (só o gestor restaura); restaurar da Lixeira corrigido para linhas que vieram das Lentes | Rodar o SQL v2.9.1 no sistema-financeiro |
| 23/10/2026 | 2.9.0 | Módulo Diversas (conta dividida): dividir boleto entre as empresas por %, por lente, por igual ou à mão, com regras salvas; cada empresa recebe a parte na Agenda e dá baixa pelo extrato. "Não pode atrasar" em qualquer conta. Quadro do que cada empresa deve à Diversas | Rodar o SQL v2.9 no sistema-financeiro |
| 23/10/2026 | 2.8.4 | Agenda: "Ler boleto (foto ou PDF)" preenche valor, vencimento, empresa, parcela e (pelo CNPJ aprendido) categoria e contato; parcelado pode começar na parcela que falta | Subir a pasta api e pôr a chave da IA na Vercel |
| 22/10/2026 | 2.8.3 | Importar extrato aceita o PDF do Sicoob, com o texto completo (ex.: SALARIO HELOISA nas transferências para a DVL); não duplica com o OFX; transferência para loja do grupo é classificada pelo texto que vem depois do nome | Nenhum |
| 22/10/2026 | 2.8.2 | Remanejos: só acompanha o que está nos Recorrentes e na Agenda; "a menos" só depois que o extrato da loja foi importado até aquela data (os avisos falsos de lojas sem extrato somem sozinhos) | Nenhum |
| 22/10/2026 | 2.8.1 | Remanejos entram sozinhos: a menos, a mais e atraso (só dia útil, feriado nacional não conta), comparando com o fixo dos Recorrentes ou a média dos 3 meses; funcionários ficam de fora. Resumo do mês por loja, categoria e contato, juros e o que as lojas devem ao grupo de compras. Ajustes de categorias e contatos | Rodar o SQL v2.8.1 no sistema-financeiro |
| 22/10/2026 | 2.8.0 | Remanejos: registro de quando o combinado não deu para cumprir (só gestor e Flávia), com o Fluxo avisando pagamento bem abaixo do normal e conta da Agenda vencida. Empréstimos (espelho): todas as lojas do Caixinha numa tela. Importação: aviso de amarelos conta só as marcadas | Rodar o SQL v2.8.1 no sistema-financeiro (já inclui a v2.8) |
| 22/10/2026 | 2.7.7 | Importação: botões de "Marcar para lançar" acendem em verde, mostram quantas linhas são e podem ser somados (ex.: Entradas + O que eu mexi); total de marcadas ao lado. "Mostrar" só muda a tela | Nenhum |
| 22/10/2026 | 2.7.6 | Importação: caixinha em cada linha e barra "Marcar para lançar" (Entradas + o que eu mexi, Só o que eu mexi…); o resto volta na próxima importação. Por contato: mostra a observação quando não há contato (e passou a trazer os contatos certinho). Juros por loja: valor de cada mês por loja, sem média | Nenhum |
| 22/10/2026 | 2.7.5 | Importação: com "Só entradas"/"Só saídas", o botão lança só aquele tipo; o resto volta na próxima importação. Importação parcial não marca o extrato como em dia. Neutras não ficam vermelhas por falta de contato | Nenhum |
| 22/10/2026 | 2.7.4 | "+ obs" embaixo da categoria (importação e Lançamentos): observação no lugar de cadastrar contato (panfletagem, blogueira); não fica vermelho e conta no medidor | Nenhum |
| 22/10/2026 | 2.7.3 | Importação: botão "não entra" (neutra, sem excluir), filtro Todas/Só entradas/Só saídas e "Lançar só as já classificadas" (o resto volta na próxima). Lançamentos: "esconder as neutras" | Nenhum |
| 22/10/2026 | 2.7.2 | Teclado: Tab de campo em campo, digitar abre a busca, Enter escolhe e pula para o próximo (importação e Lançamentos). Lançamentos: filtro só Entradas / só Saídas. Saída para outra loja volta a pedir "confira" (pode ser reembolso) e não aprende pelo nome da loja | Nenhum |
| 22/10/2026 | 2.7.1 | Importação: transferência para loja do grupo (razão social/CNPJ) já vai como Transferência entre lojas sem "confira"; botão "Confirmar as N" para as outras; Pix/TED aprende pelo CNPJ/CPF do favorecido | Nenhum |
| 22/10/2026 | 2.7.0 | **Módulos** no alto da tela: Óticas Rocha, Laboratório (GV Lentes), Grupo de compras (FZ Grifes, Grupo VR) e Casa trancada (Lucas, Heloísa, Flávia). Cada módulo soma só o que é dele; categorias/contatos/palavras-chave da Casa separados. Precisa do SQL v2.7 | Nenhum nas lojas |
| 22/10/2026 | 2.6.5 | Card "A pagar em (mês)" avisa em letra pequena: "só o que vence neste mês · não acumula de um mês pro outro" | Nenhum |
| 22/10/2026 | 2.6.4 | Dashboard: "A pagar em (mês)" mostra só o que vence no mês escolhido; vencido de meses anteriores aparece à parte e fica na Agenda (não acumula). A baixa automática também roda ao abrir o Dashboard | Nenhum |
| 22/10/2026 | 2.6.3 | O papel **dono** aparece como **gestor** na tela (rodapé, Configurações, avisos). Por dentro continua o mesmo, nada muda de acesso | Nenhum |
| 22/10/2026 | 2.6.2 | Menu que abre e fecha: clique em DIA A DIA, ANÁLISE ou GESTÃO para recolher; o sistema lembra, e o grupo da tela aberta fica sempre aberto | Nenhum |
| 22/10/2026 | 2.6.1 | Agenda: recorrente com contato (funcionário) usa a média dele e fica pago com qualquer pagamento no mês; parcela lançada (1/6) manda as próximas para a Agenda sozinha | Nenhum |
| 22/10/2026 | 2.6.0 | **Agenda de pagamentos** no lugar do A pagar: semana sáb–sex, baixa sozinha pelo extrato, lançar pelo código de barras (valor e vencimento sozinhos), parcelas de uma vez, vencidos separados, fixos e lentes do Caixinha aparecendo sozinhos. Tabela própria (não mexe no saldo). Precisa do SQL v2.6 | Nenhum (só mostra) |
| 22/10/2026 | 2.5.0 | **Contato padrão por categoria** para o que vem do Caixinha: escolhe uma vez (o sistema sugere), preenche os sem contato e os próximos vêm sozinhos. Precisa do SQL v2.5 para lembrar | Nenhum |
| 22/10/2026 | 2.4.2 | Medidor de automação também nos **Lançamentos** (atualiza a cada lançamento salvo) | Nenhum |
| 22/10/2026 | 2.4.1 | Menu com ícones simples de traço, da mesma cor do texto (no claro e no escuro), no lugar dos emojis coloridos | Nenhum |
| 22/10/2026 | 2.4.0 | **🤖 Medidor de automação** no Dashboard (categoria sozinha na importação, com categoria, despesas com contato, veio do extrato — mês × anterior) e na tela de importação. Precisa do SQL v2.4 para o 1º número | Nenhum (só mostra) |
| 22/10/2026 | 2.3.2 | Radar mais limpo: só o nome da categoria (sem emojis e etiquetas); de onde vem o previsto aparece ao passar o mouse; "📌 fixar" só aparece ao passar o mouse | Nenhum |
| 22/10/2026 | 2.3.1 | Radar: clique na categoria para ver **por contato** (média × este mês, aviso quando sobe) | Nenhum |
| 22/10/2026 | 2.3.0 | Nova tela **🧭 Radar do mês**: deve entrar × deve sair × sobra prevista, previsto × pago por categoria (média de 3 meses ou fixo), próximos 3 meses com parcelas, comparar lojas e visão Grupo todo. Não é conta a pagar, não acumula | Nenhum (só mostra) |
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
