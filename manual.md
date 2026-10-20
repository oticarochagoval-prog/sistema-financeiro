# Como fechar o mês no Caixa Rocha

Atualizado em 20/10/2026 · versão do sistema 1.4

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

## Os três "bancos": onde cada um mora

Existem três saldos no grupo, e cada um vive num lugar. **Nenhum deles se soma ao outro, e nenhum precisa ser redigitado.** Para não confundir, cada um tem um nome fixo:

| Qual | Onde mora | Quem cuida |
| --- | --- | --- |
| 🏦 **Banco Sicoob** — a conta da loja no banco de verdade | Caixa Rocha → Fechamento do mês (a escada) | Copia sozinho do mês anterior fechado |
| 💵 **Caixa (gaveta)** — o dinheiro físico que a loja tem na mão | Sistema Caixinha → aba Caixa. No Caixa Rocha, a aba **Caixinha (espelho)** mostra o mesmo número | O Caixinha calcula sozinho: dinheiro + emprestado |
| 🔁 **Banco Caixinha** — o que o escritório pagou pela loja e ela ainda vai devolver (estornar). Vira o mês e continua em aberto | Sistema Caixinha → aba Banco. No Caixa Rocha, o espelho mostra início do mês, emprestado, voltou e em aberto | O Caixinha calcula sozinho |

No Caixa Rocha, o saldo inicial é **só o do Sicoob**. Não some caixinha nem empréstimo nele.

## Caixinha: a regra é diferente

**A aba Caixinha do Caixa Rocha é um espelho.** Ela mostra, loja por loja, o que o sistema Caixinha calcula: abertura do mês, entradas, saídas, depósitos, tem que ter, a receber e a estornar. Não tem nada para digitar ali. Para corrigir um número, corrija no Caixinha — aqui atualiza sozinho. Na primeira vez em cada computador ela pede o login do Caixinha (o mesmo e-mail e senha de lá); depois abre direto. No Fechamento do mês, a escada da caixinha aparece embaixo da escada do Sicoob.

**Caixinha nunca fica negativa.** Dinheiro na gaveta não tem cheque especial. Se der negativo, não é saldo: é lançamento faltando. Alguém colocou dinheiro e não lançou a entrada, ou lançou uma saída duas vezes.

## Perguntas que sempre aparecem

| Pergunta | Resposta |
| --- | --- |
| O Resultado do mês está somando o saldo inicial? | Não. O Resultado é só entradas menos saídas do mês. Quem soma o saldo inicial é a escada, na linha "Saldo inicial". |
| Qual saldo inicial eu coloco? | Nenhum, na maior parte das vezes: ele copia do mês anterior fechado. Só na primeira vez, se o calculado estiver diferente do extrato do dia 1º, use o ✎. |
| E se o saldo era negativo? | Coloca negativo, com o botão de sinal. −R$ 15.000,00 é −R$ 15.000,00. |
| Parte do dinheiro é emprestado de outra loja. Desconto? | Não. Saldo inicial é o que tem. O empréstimo fica anotado à parte, no Caixinha. |
| Onde lanço os juros do cheque especial? | Como saída normal, na data em que o banco cobrou, categoria de juros. |
| Não bateu. Mexo no saldo inicial? | Não. Diferença se resolve achando o lançamento que falta ou que sobra. |
| Pix recebido e depósito em dinheiro, lanço? | Sim, com categoria neutra (não entra no DRE, a Linx já contou a venda). Na conta do banco eles entram, então para a escada bater eles precisam estar lançados. |
| Transferência entre lojas conta na escada? | Sim. Saiu da conta, conta como saída; entrou, conta como entrada. No DRE não aparece. |
| A caixinha deu negativo. | É lançamento faltando, não saldo. Procurar a entrada que não foi lançada. |
| Posso fechar sem bater? | Pode, escrevendo o motivo. O mês fica fechado e o motivo fica registrado. |
| Preciso mexer num mês fechado. | Peça ao Lucas para reabrir em Fechamento do mês. Depois feche de novo. |
| A aba Caixinha pediu e-mail e senha. | É o login do sistema Caixinha (o mesmo de lá). Só pede uma vez por computador. |
| Como mudo para o tema claro? | Botão 🌙 / ☀️ na barra de cima. Cada pessoa escolhe o seu. |

## Histórico de mudanças

| Data | Versão | O que mudou | Efeito no fechamento |
| --- | --- | --- | --- |
| 20/10/2026 | 1.4 | Espelho ganhou o Banco Caixinha (em aberto no dia 1º, emprestado, voltou, em aberto hoje) e os nomes fixos: Banco Sicoob, Caixa (gaveta), Banco Caixinha | Heloísa vê os três no mesmo lugar |
| 20/10/2026 | 1.3 | Aba Caixinha virou espelho do sistema Caixinha (só leitura); escada da caixinha aparece no Fechamento, embaixo da do Sicoob | Acabou o "ajustar saldo" da caixinha no Caixa Rocha |
| 20/10/2026 | 1.2 | Ícone verde com F na aba do navegador | Nenhum |
| 20/10/2026 | 1.1 | Tema claro/escuro, botão ? de ajuda, aba Manual, escada passa a contar transferências entre lojas | Transferências entram na escada do banco (continuam fora do DRE) |
| 19/10/2026 | 1.0 | Nova tela de Fechamento: saldo inicial por mês copiado do anterior, saldo real no último dia do mês, botão Fechar que trava o mês, contador de lançamentos sem categoria, número da versão na barra de cima | Mês passado passa a bater; mês fechado não aceita lançamento |
| 19/10/2026 | — | Este guia foi criado | Regra do saldo negativo, do empréstimo e da caixinha escritas |
| set/2026 | — | Importação do extrato deixou de ser usada; lançamento voltou a ser manual | Conferir o extrato do banco na mão para achar o que falta |
| ago/2026 | — | Conciliação de caixa ligada, com saldo inicial que aceita negativo | Apareceu a linha "Começou com" |
