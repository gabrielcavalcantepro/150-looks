# Quiz de Descoberta de Estilo — Textos por Etapa

**Produto:** Guia digital "+150 Looks com Apenas 20 Peças"
**Total de etapas:** 24 (+ 1 bloco de lógica de ramificação, sem tela própria)
**Os 7 estilos:** Esportivo · Tradicional · Elegante · Romântico · Criativo · Sexy · Dramático Urbano

## Legenda

| Marcação | Significado |
|---|---|
| `[Nome]` | Nome capturado na Etapa 10, reaproveitado seletivamente dali em diante |
| `[ESTILO_RESULTADO]` | Estilo vencedor calculado pela lógica de pontuação |
| `[EM ABERTO]` | Decisão de conteúdo/estrutura ainda pendente |
| `[SUBSTITUIR]` | Placeholder que precisa de conteúdo real antes de ir pro ar |
| `[IMAGEM: ...]` | Onde uma imagem/ilustração precisa entrar |

---

## Resumo das decisões desta revisão

Este arquivo passou por uma rodada de ajustes em cima da primeira versão modelada a partir do quiz de referência (nicho de emagrecimento). Principais mudanças:

**Preço do front**
Corrigido de R$19,90 (herdado do modelo de referência) para **R$29,90**, que é o preço real definido para o guia "+150 Looks com Apenas 20 Peças".

**Etapa 3 (pergunta visual)**
A pontuação original deixava o estilo Romântico sub-representado (só 2 oportunidades de pontuar, contra 3-4 dos demais estilos), e nenhum dos 4 looks originais representava um visual romântico/fluido. Adicionamos um **5º look (romântico)** pra corrigir esse desequilíbrio.

**Etapa 16 antiga ("pergunta de ramificação")**
Decidimos não criar uma pergunta nova — a resposta da Etapa 8 (Rotina predominante) já é suficiente pra decidir qual versão do guia entregar (Casual & Dia a Dia / Corporativo / Social & Eventos / Versátil). Por isso essa etapa deixou de existir como tela e virou um **bloco de lógica** (sem interação do usuário), documentado logo após a Etapa 15.

**Etapas 17 a 19 antigas (peso / altura / peso-meta)**
Eram um resquício direto do quiz de emagrecimento e não faziam sentido pro nosso produto. Substituídas por **2 perguntas reais sobre o guarda-roupa** (quantidade de peças e quanto realmente é usado), que reforçam a dor central do produto. A 3ª pergunta foi removida — não era necessária.

**Renumeração geral**
Com a etapa de ramificação virando lógica sem tela, e uma das 3 etapas de peso/altura sendo removida, todas as etapas a partir da antiga Etapa 20 foram renumeradas. O quiz foi de **26 para 24 etapas** numeradas.

**Bônus e oferta (Etapa 24)**
Definimos os 5 bônus com valor individual, usados pra calcular o preço-âncora (soma do produto + bônus = **R$594,90**, exibido riscado ao lado do valor real de R$29,90). Garantia definida em **90 dias incondicionais**.

**O que ainda falta**
Bio da autora será enviada depois, diretamente pro Claude Code — o layout precisa ficar pronto pra receber esse conteúdo sem travar o desenvolvimento. Depoimentos e imagens reais continuam como placeholder (`[SUBSTITUIR]`).

---

## Etapa 1: Landing page / Opt-in

🔥 `[SUBSTITUIR: nº real]` mulheres descobrindo seu estilo agora

**Descubra qual dos 7 estilos universais é o seu e tenha +150 looks com apenas 20 peças**

Chega de guarda-roupa cheio e a sensação de não ter nada para vestir.

`[IMAGEM: mockup do guia — celular/tablet/PDF]`

✓ +150 Looks Prontos · ✓ 7 Estilos Universais · ✓ Peças Que Já Combinam

⚠️ **Atenção:** Este diagnóstico está disponível por tempo limitado. Se sair agora, você pode perder sua vaga.

**[ ✨ Quero Descobrir Meu Estilo! ]**

🔒 Diagnóstico Grátis · Apenas 2 minutos

---

## Etapa 2: Idade

**Qual é a sua idade?**
Isso ajuda a entender melhor o seu momento de vida

🌸 18 a 24 anos — Fase de descobrir sua identidade
🌺 25 a 29 anos — Ótimo momento pra consolidar seu estilo
🌻 30 a 34 anos — Ainda fácil de refinar seu guarda-roupa
🌷 35 a 39 anos — Hora de alinhar estilo e maturidade
💪 40 anos ou mais — Nunca é tarde pra reinventar seu visual

---

## Etapa 3: Qual look mais chama sua atenção (visual)

← Voltar

**Qual desses looks mais chama sua atenção?**
Confie no seu instinto, não pense demais

`[IMAGEM 1: look casual/confortável]` Look 1
`[IMAGEM 2: look clássico/alfaiataria discreta]` Look 2
`[IMAGEM 3: look ousado/misturado/estampado]` Look 3
`[IMAGEM 4: look justo/sensual]` Look 4
`[IMAGEM 5: look romântico/fluido — vestido leve, tecido fluido, detalhes delicados]` Look 5

*Pontuação: Look 1 → Esportivo + Tradicional · Look 2 → Elegante + Tradicional · Look 3 → Criativo + Dramático Urbano · Look 4 → Sexy + Dramático Urbano · Look 5 → Romântico*

---

## Etapa 4: O que você busca no seu estilo

← Voltar

**O que você mais busca no seu estilo hoje?**
Escolha a opção que mais se aplica a você

🏃 Mais praticidade pra montar looks rápido
🎨 Parar de repetir sempre as mesmas combinações
✨ Elevar o nível dos meus looks
💕 Me sentir mais bonita e desejável
🔥 Ter mais confiança pra ousar

*Pontuação: praticidade → Esportivo · parar de repetir → Criativo · elevar nível → Elegante · bonita/desejável → Romântico + Sexy · confiança pra ousar → Dramático Urbano*

---

## Etapa 5: Como se sente com o guarda-roupa

← Voltar

**Como você se sente com o seu guarda-roupa hoje?**
Seja honesta, isso personaliza seu resultado

😩 Tenho roupa pra caramba, mas sinto que não tenho nada pra vestir
😕 Compro peças que depois nunca uso
😤 Sempre acabo repetindo os mesmos looks
🤷‍♀️ Não sei o que realmente combina comigo

---

## Etapa 6: Peças favoritas (multi-select)

← Voltar

**Quais peças mais representam você no dia a dia?**
Pode selecionar mais de uma opção

👖 Jeans e tênis
👔 Blazer e alfaiataria
👗 Vestidos fluidos e delicados
🧥 Peças statement e diferentes
👙 Peças justas que valorizam o corpo
✨ Um pouco de tudo

**[ Continuar → ]**

*Pontuação: jeans/tênis → Esportivo · blazer → Elegante + Tradicional · vestido fluido → Romântico · statement → Criativo + Dramático Urbano · justas → Sexy · "um pouco de tudo" → pontos distribuídos igualmente*

---

## Etapa 7: Prova social (carrossel de transformações)

🔥 +`[SUBSTITUIR: nº]` mulheres já descobriram seu estilo

⭐ Mulheres Reais. Estilos Reais.

**Veja as transformações de quem já descobriu seu estilo**

`[IMAGEM: antes/depois de look — SUBSTITUIR]`

*"Eu tinha um guarda-roupa cheio e não sabia montar nada. Com o guia descobri que sou [Estilo] e agora monto looks novos todo dia."*
`[SUBSTITUIR: Nome]` · `[idade]` anos · `[cidade]` · ★★★★★

`[+ 2 cards de depoimento seguindo o mesmo formato — SUBSTITUIR]`

**[ Continuar minha avaliação → ]**

---

## Etapa 8: Rotina predominante

← Voltar

**Qual é a sua rotina predominante?**
Isso personaliza seu guia

💻 Trabalho remoto / home office
🏢 Ambiente corporativo formal
🎉 Vida social intensa, sempre tem um evento
🏡 Cuido da casa e da família em tempo integral
🔀 Mix de tudo um pouco

*Usada como critério de ramificação — ver "Lógica de ramificação" logo após a Etapa 15. Não haverá pergunta extra dedicada para isso.*

---

## Etapa 9: Tempo perdido decidindo o que vestir

← Voltar

**Quanto tempo você perde hoje decidindo o que vestir?**
Seja honesta, isso personaliza sua solução

😕 Até 10 minutos — mas já me incomoda
😔 10 a 20 minutos — sinto que perco tempo
😣 20 a 40 minutos — experimento várias roupas
😰 Mais de 40 minutos — viro o guarda-roupa do avesso

---

## Etapa 10: Captura de nome

👋 **Para personalizar seu diagnóstico de estilo, como podemos te chamar?**
Usaremos seu nome pra deixar tudo 100% personalizado. Zero spam.

Seu primeiro nome `[input]`

**[ Começar meu diagnóstico → ]**

🔒 Seus dados são privados. Zero spam.

*A partir daqui o quiz usa `[Nome]` nas etapas seguintes — mas de forma seletiva, não em todas.*

---

## Etapa 11: Emoção na hora de se vestir

← Voltar

**`[Nome]`, como você se sente na hora de se vestir pra sair?**
Selecione o que mais se aplica a você

😴 Sem inspiração nenhuma
😢 Insegura, sem saber o que combina
😟 Com medo de errar o estilo
😰 Sempre acabo usando o mesmo de sempre

---

## Etapa 12: O que trava seus looks

← Voltar

**O que mais te trava na hora de montar um look?**
Escolha a opção mais próxima da sua realidade

😤 Não sei combinar as peças que tenho
🛍️ Compro roupa e não uso
🧩 Não sei o que realmente combina comigo
⏰ Não tenho tempo pra pensar nisso

---

## Etapa 13: Por que o guarda-roupa cheio não resolve (educativo)

🧠 Por que ter um guarda-roupa cheio não resolve seu problema de estilo

**Por que você sente que "não tem nada pra vestir" mesmo com o armário lotado**

Quando você compra peças aleatórias, sem saber qual é o seu estilo, cada peça nova vira uma ilha — ela não conversa com o resto do que você já tem. Resultado: guarda-roupa cheio, e a sensação de sempre faltar alguma coisa.

O problema não é a falta de roupa. É a falta de um sistema de peças-coringa alinhado ao seu estilo.

💚 Com o guia +150 Looks com Apenas 20 Peças, você aprende exatamente quais peças combinam com o seu estilo `[ESTILO_RESULTADO]` e como multiplicar suas combinações sem precisar comprar mais nada.

`[Depoimento embutido — print de comentário/DM — SUBSTITUIR]`

| ❌ Sem o guia | ✅ Com o guia |
|---|---|
| Guarda-roupa cheio, nada pra vestir | Looks prontos em minutos |
| Tempo perdido decidindo | Peças que sempre combinam |
| Compras que não combinam | Confiança pra se vestir |
| — | +150 combinações reais |

**[ Continuar minha avaliação → ]**

---

## Etapa 14: Antes/depois — por que algumas mulheres parecem sempre estilosas

**Por que algumas mulheres sempre parecem estilosas com poucas peças, enquanto você sente que nada combina?**

`[IMAGEM: antes/depois de guarda-roupa/look — SUBSTITUIR]`

Enquanto você tenta resolver comprando mais, o problema real é a falta de um método pra escolher peças que conversam entre si e com o seu estilo. Resultado: o guarda-roupa cresce, mas o problema continua.

💚 Com o guia +150 Looks, você aprende o método por etapas: descobrir seu estilo, escolher as peças-coringa certas, e multiplicar combinações sem gastar mais.

**[ Continuar → ]**

---

## Etapa 15: Tempo disponível

← Voltar

**Quanto tempo você tem disponível hoje pra pensar em moda?**
Seu guia será adaptado à sua rotina

⚡ Menos de 15 minutos por dia — Precisa ser prático
🕐 Um tempinho nos fins de semana
👗 Gosto de me planejar com calma quando posso

---

## Lógica de ramificação (sem pergunta nova)

Decisão fechada: não haverá pergunta extra dedicada — a Etapa 8 (Rotina predominante) já funciona como gatilho de ramificação. Mapeamento pra versão do guia entregue na oferta final:

- 💻 Home office · 🏡 Cuido da casa e da família → **Casual & Dia a Dia**
- 🏢 Ambiente corporativo formal → **Corporativo**
- 🎉 Vida social intensa → **Social & Eventos**
- 🔀 Mix de tudo → **Versátil** (combina os 2 estilos mais fortes do resultado)

Esse mapeamento é usado na Etapa 23 (Diagnóstico completo) e na Etapa 24 (Oferta).

---

## Etapa 16: Quantidade de peças no guarda-roupa

← Voltar

**Quantas peças você estima que tem no guarda-roupa hoje?**
Uma estimativa já ajuda bastante

👖 Menos de 20 peças
🧺 Entre 20 e 40 peças
👗 Entre 40 e 80 peças
🗄️ Mais de 80 peças
🙈 São tantas que não tenho nem ideia...

---

## Etapa 17: Quanto dessas peças você realmente usa

← Voltar

**Dessas peças, quantas você realmente usa no dia a dia?**
Seja sincera, isso ajuda a personalizar seu guia

😅 Bem poucas — sempre uso as mesmas 4 ou 5
🤷‍♀️ Menos da metade, o resto fica esquecido
🙂 Boa parte, mas sinto que falta combinar melhor
✨ Quase todas, já sei aproveitar o que tenho

---

## Etapa 18: Ocasião especial

Quase lá! ✨
← Voltar
PERGUNTA EXTRA

**`[Nome]`, tem alguma ocasião especial que está te motivando a renovar seu estilo?**
Fixar uma ocasião aumenta muito sua motivação 💪

👰 Casamento (convidada ou noiva) ›
✈️ Viagem ›
💼 Novo emprego / entrevista ›
🎉 Evento social ›
📸 Ensaio fotográfico ›
💚 Quero me sentir bem comigo mesma ›
🚫 Nenhuma específica ›

---

## Etapa 19: Prazo do objetivo

Última etapa! 🎯
← Voltar
ÚLTIMA ETAPA

**Em quanto tempo você quer transformar seu estilo?**
Isso vai calcular sua projeção personalizada

⚡ 1 semana — Quero começar já
🔥 2 semanas — Ritmo constante
🌿 1 mês — Sem pressa
🏆 Sem prazo — No meu tempo

💡 Com o guia +150 Looks, você já sai montando combinações novas nas primeiras 24 horas.

---

## Etapa 20: Projeção personalizada

🎯 Com base no seu diagnóstico...

**Hoje você enxerga poucas combinações no seu guarda-roupa. Com o método +150 Looks, isso pode virar +150 combinações reais!**

🎊 Boa notícia! Seu estilo pede looks incríveis com poucas peças

`[Gráfico: Hoje (poucas combinações) → Com o Guia (150+ combinações) — linha ASCENDENTE]`

🎊 Seguindo o guia, `[Nome]` pode chegar em `[ocasião escolhida na Etapa 18]` com looks que combinam 100% com o seu estilo `[ESTILO_RESULTADO]`!

**[ Ver meu Diagnóstico Completo → ]**

---

## Etapa 21: Mais prova social e benefícios

**Veja o que essas mulheres falaram sobre descobrir seu estilo...**

⚡ *"`[SUBSTITUIR: depoimento 1]`"*
⚡ *"`[SUBSTITUIR: depoimento 2]`"*
⚡ *"`[SUBSTITUIR: depoimento 3]`"*

🏆 Por que o guia funciona pra qualquer estilo:

✅ Peças-coringa que combinam entre si
✅ +150 combinações prontas, sem esforço
✅ Looks montados em minutos
✅ Confiança pra se vestir todos os dias

**[ Ver meu Diagnóstico Personalizado → ]**

`[Pop-up rotativo global: "[Nome] de [Cidade-UF] acabou de comprar o guia +150 Looks!" — aparece de forma rotativa em várias telas do meio pro fim do funil, não é fixo desta etapa]`

---

## Etapa 22: Loading — gerando diagnóstico

⚙️ **Gerando seu Diagnóstico de Estilo...**

`[0% → 100%]`

✓ Analisando suas respostas...
✓ Identificando seu estilo predominante...
○ Selecionando as peças-coringa ideais pra você...
○ Montando suas +150 combinações exclusivas...

`[IMAGEM: antes/depois de look — SUBSTITUIR]`

Resultado Verificado ✅
*"`[SUBSTITUIR: depoimento]`"*
⭐⭐⭐⭐⭐ +`[SUBSTITUIR: nº]` mulheres já descobriram seu estilo

---

## Etapa 23: Diagnóstico completo

Com base no seu perfil...

**`[Nome]`, seu estilo é: `[ESTILO_RESULTADO]`!**

📊 **Seu Perfil de Estilo**
`[Gráfico/barra mostrando % de compatibilidade com o estilo principal e, opcionalmente, o 2º estilo mais próximo]`

👗 **Seu Perfil de Estilo**
- Objetivo: `[baseado na resposta da Etapa 4]`
- Rotina: `[baseado na resposta da Etapa 8]`
- Peças-chave pro seu estilo: `[baseado na resposta da Etapa 6]`
- Versão do guia: `[Casual & Dia a Dia / Corporativo / Social & Eventos / Versátil — conforme resposta da Etapa 8]`

| ⓘ Sem o guia | ✅ Com o guia |
|---|---|
| Guarda-roupa cheio, nada pra vestir | Looks prontos |
| Tempo perdido decidindo | Peças que sempre combinam |
| Compras que não combinam | Confiança pra se vestir |
| — | +150 combinações reais |

🗓️ **Sua projeção personalizada**
Com base em perfis parecidos com o seu: você pode ter looks completamente novos em `[prazo escolhido na Etapa 19]`.

**[ Ver meu Guia Personalizado → ]**

---

## Etapa 24: Oferta

**`[Nome]`, seu guia +150 Looks com Apenas 20 Peças está pronto!**

Escolha o acesso que faz mais sentido pra você:

⚠️ Versão `[Casual & Dia a Dia / Corporativo / Social & Eventos / Versátil]` Disponível!

🏆 MAIS ESCOLHIDO · ⭐ Melhor custo-benefício

**Guia Completo + Bônus**
⚡ O caminho mais rápido pra multiplicar seus looks com poucas peças

✅ O que está incluso:
- Guia +150 Looks com Apenas 20 Peças (baseado no seu estilo `[ESTILO_RESULTADO]`)
- Guia de Cores Que Combinam com Seu Tom de Pele (valor R$97)
- Consultoria: Como Ter um Guarda-Roupa Inteligente (valor R$197)
- Guia: Como Adaptar Seus Looks Para Todas as Estações (valor R$87)
- Mapa de Combinações de Cores Para Multiplicar Seus Looks (valor R$87)
- Guia dos Sapatos: Para Nunca Mais Errar na Escolha do Calçado (valor R$97)

~~De R$594,90~~ **R$29,90**
🔒 Pagamento único · Acesso vitalício · Atualizações inclusas

**[ ✅ Quero meu guia completo com todos os bônus → ]**

📌 Pague uma vez e tenha acesso pra sempre

**Garantia: 90 dias incondicionais**
Risco ZERO. Se você não gostar do guia, por qualquer motivo, dentro de 90 dias após a compra, basta pedir seu dinheiro de volta.

Mais de `[SUBSTITUIR: nº]` mulheres já descobriram seu estilo com o guia +150 Looks!

`[Mais 2-3 cards de depoimento — SUBSTITUIR]`

📋 **Resumindo...**

Pode ser a última vez que você acessa esta página, então sugiro que garanta seu acesso agora.

A proposta é simples e clara: você vai aprender na prática como montar mais de 150 looks usando apenas 20 peças-chave, alinhadas ao seu estilo `[ESTILO_RESULTADO]`.

Você não precisa:
✗ Comprar um guarda-roupa novo
✗ Gastar rios de dinheiro em roupa
✗ Abrir mão do seu jeito de se vestir

Acho justo você ver por dentro e, se não gostar, é só pedir reembolso dentro de 90 dias.

Tudo que você precisa fazer agora é clicar no botão abaixo.

**[ ✅ Quero garantir meu acesso agora → ]**

👋 **Quem sou eu?**

**`[nome da autora]`**

Prazer, sou `[nome da autora]`. `[EM ABERTO — bio será enviada posteriormente ao Claude Code]`

Você está a um clique de descobrir seu estilo e nunca mais sentir que não tem nada pra vestir.

`[EM ABERTO — foto de transformação da autora, se houver. IMPORTANTE PARA O DEV: manter o layout pronto (espaço reservado para foto + bloco de texto) para receber esse conteúdo depois, sem travar o restante do desenvolvimento.]`

**[ ✅ Quero garantir meu acesso agora → ]**

---

## Tabela de pontuação por estilo

| Etapa | Opção | Esportivo | Tradicional | Elegante | Romântico | Criativo | Sexy | Dramático Urbano |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (visual) | Look 1 | ✓ | ✓ | | | | | |
| 3 (visual) | Look 2 | | ✓ | ✓ | | | | |
| 3 (visual) | Look 3 | | | | | ✓ | | ✓ |
| 3 (visual) | Look 4 | | | | | | ✓ | ✓ |
| 3 (visual) | Look 5 | | | | ✓ | | | |
| 4 (motivo) | Praticidade | ✓ | | | | | | |
| 4 (motivo) | Parar de repetir | | | | | ✓ | | |
| 4 (motivo) | Elevar o nível | | | ✓ | | | | |
| 4 (motivo) | Bonita e desejável | | | | ✓ | | ✓ | |
| 4 (motivo) | Confiança pra ousar | | | | | | | ✓ |
| 6 (peças) | Jeans e tênis | ✓ | | | | | | |
| 6 (peças) | Blazer | | ✓ | ✓ | | | | |
| 6 (peças) | Vestido fluido | | | | ✓ | | | |
| 6 (peças) | Statement | | | | | ✓ | | ✓ |
| 6 (peças) | Justas | | | | | | ✓ | |

Tabela é ponto de partida, vale revisar pesos durante o desenvolvimento. Prever empates (exibir os 2 estilos mais próximos quando a diferença de pontos for pequena). Com a Etapa 3 agora com 5 opções, todos os estilos têm 3 pontos de oportunidade na tabela, exceto Dramático Urbano (4).

---

## O que ainda está em aberto

1. Etapa 24 (Oferta) — bio da autora e foto de transformação (será enviada posteriormente ao Claude Code; manter layout pronto pra receber depois)
2. Diversos — depoimentos e fotos reais de antes/depois (marcados como `[SUBSTITUIR]`)
3. Imagens reais para os 5 looks da Etapa 3 (incluindo a nova opção romântica) e demais `[IMAGEM: ...]` do funil

Nenhuma dessas pendências impede a construção do quiz — o spec técnico vai prever esses pontos como configuráveis/placeholder.
