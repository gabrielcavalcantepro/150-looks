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

**Assertividade da pontuação (rodada 2)**
As Etapas 3, 4 e 6 foram redesenhadas pra mapeamento **100% exclusivo** — cada opção pontua só 1 estilo, sem mais pontos compartilhados entre 2 estilos. A Etapa 3 (visual) ganhou 2 looks novos (Tradicional e Dramático Urbano, que antes dividiam pontuação com outros looks) e passou a ter **peso 2** na fórmula final, por ser o sinal mais confiável. A Etapa 6 deixou de ser multi-select. Foi adicionada uma **etapa condicional de desempate** (Etapa 21B), que só aparece se 2 estilos ficarem empatados. O microfeedback pós-resultado foi descartado — decidimos não arriscar gerar dúvida logo antes da oferta. A Etapa 23 (Diagnóstico) agora mostra uma **imagem + texto-resumo** dedicados a cada um dos 7 estilos possíveis, reaproveitando as mesmas 7 imagens da Etapa 3.

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

`[IMAGEM 1: look casual/confortável — jeans, tênis, peças descomplicadas]` Look 1
`[IMAGEM 2: look elegante/sofisticado — vestido tubinho ou alfaiataria com caimento impecável]` Look 2
`[IMAGEM 3: look ousado/estampado/mix]` Look 3
`[IMAGEM 4: look justo/sensual]` Look 4
`[IMAGEM 5: look romântico/fluido — vestido leve, tecido fluido, detalhes delicados]` Look 5
`[IMAGEM 6: look clássico atemporal — calça alfaiataria, camisa branca, blazer estruturado, cores neutras]` Look 6
`[IMAGEM 7: look estruturado urbano — peças statement, cores fortes/pretas, silhueta marcante]` Look 7

*Pontuação (peso 2, mapeamento 100% exclusivo): Look 1 → Esportivo · Look 2 → Elegante · Look 3 → Criativo · Look 4 → Sexy · Look 5 → Romântico · Look 6 → Tradicional · Look 7 → Dramático Urbano*

*Essas mesmas 7 imagens são reaproveitadas como imagem de resultado na Etapa 23 e na Etapa 21B (desempate) — não é preciso produzir imagens novas pra isso.*

---

## Etapa 4: O que você busca no seu estilo

← Voltar

**O que você mais busca no seu estilo hoje?**
Escolha a opção que mais se aplica a você

🏃 Mais praticidade pra montar looks rápido
👑 Ter um estilo atemporal, que nunca sai de moda
✨ Elevar o nível dos meus looks
💕 Me sentir romântica e delicada
🎨 Parar de repetir sempre as mesmas combinações
🔥 Me sentir sexy e poderosa
⚡ Ter mais confiança pra ousar

*Pontuação (peso 1, mapeamento 100% exclusivo): praticidade → Esportivo · estilo atemporal → Tradicional · elevar nível → Elegante · romântica/delicada → Romântico · parar de repetir → Criativo · sexy/poderosa → Sexy · confiança pra ousar → Dramático Urbano*

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

## Etapa 6: Peça favorita (seleção única)

← Voltar

**Qual dessas peças mais representa você no dia a dia?**
Escolha a que mais combina com você

👖 Jeans e tênis, sempre práticos
👔 Blazer e alfaiataria certinha
🖤 Vestido tubinho e saltos
👗 Vestido fluido e rendado
🎨 Estampas ousadas e acessórios diferentes
💃 Peças justas, decote e couro
🧥 Jaqueta estruturada e cores fortes

*Pontuação (peso 1, mapeamento 100% exclusivo): jeans/tênis → Esportivo · blazer/alfaiataria → Tradicional · tubinho/saltos → Elegante · vestido fluido/rendado → Romântico · estampas ousadas → Criativo · justas/couro → Sexy · jaqueta estruturada/cores fortes → Dramático Urbano*

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

## Etapa 21B (condicional): Desempate de estilo

Só aparece se os 2 estilos com maior pontuação empatarem (ou ficarem muito próximos) após aplicar os pesos das Etapas 3, 4 e 6. Se não houver empate, o quiz pula direto pra Etapa 22.

**Ficamos entre 2 estilos pra você. Qual desses te representa mais?**

`[IMAGEM: foto de resultado do Estilo A — reaproveita a mesma imagem da Etapa 3 usada pra esse estilo]`
`[IMAGEM: foto de resultado do Estilo B — reaproveita a mesma imagem da Etapa 3 usada pra esse estilo]`

A opção escolhida vence o desempate e define o `[ESTILO_RESULTADO]` final.

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

`[IMAGEM: foto de resultado do estilo — uma das 7 imagens da Etapa 3, correspondente ao ESTILO_RESULTADO]`

`[TEXTO_RESUMO_ESTILO — resumo de 2-3 frases descrevendo o estilo pra ela. Ver os 7 textos prontos na seção "Resumo dos 7 estilos" logo após a tabela de pontuação.]`

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

Mapeamento 100% exclusivo — cada opção pontua só 1 estilo. Pontuação final = soma ponderada.

**Pesos:** Etapa 3 (visual) = peso 2 · Etapa 4 (motivo) = peso 1 · Etapa 6 (peça favorita) = peso 1 · Máximo possível por estilo = 4

| Etapa | Opção | Estilo |
|---|---|---|
| 3 (visual, peso 2) | Look 1 | Esportivo |
| 3 (visual, peso 2) | Look 2 | Elegante |
| 3 (visual, peso 2) | Look 3 | Criativo |
| 3 (visual, peso 2) | Look 4 | Sexy |
| 3 (visual, peso 2) | Look 5 | Romântico |
| 3 (visual, peso 2) | Look 6 | Tradicional |
| 3 (visual, peso 2) | Look 7 | Dramático Urbano |
| 4 (motivo, peso 1) | Praticidade | Esportivo |
| 4 (motivo, peso 1) | Estilo atemporal | Tradicional |
| 4 (motivo, peso 1) | Elevar o nível | Elegante |
| 4 (motivo, peso 1) | Romântica e delicada | Romântico |
| 4 (motivo, peso 1) | Parar de repetir | Criativo |
| 4 (motivo, peso 1) | Sexy e poderosa | Sexy |
| 4 (motivo, peso 1) | Confiança pra ousar | Dramático Urbano |
| 6 (peça, peso 1) | Jeans e tênis | Esportivo |
| 6 (peça, peso 1) | Blazer e alfaiataria | Tradicional |
| 6 (peça, peso 1) | Vestido tubinho e saltos | Elegante |
| 6 (peça, peso 1) | Vestido fluido e rendado | Romântico |
| 6 (peça, peso 1) | Estampas ousadas | Criativo |
| 6 (peça, peso 1) | Peças justas/couro | Sexy |
| 6 (peça, peso 1) | Jaqueta estruturada/cores fortes | Dramático Urbano |

**Desempate:** se os 2 estilos com maior pontuação ficarem empatados (ou com diferença ≤1 ponto), aciona a Etapa 21B antes de calcular o `[ESTILO_RESULTADO]` final.

---

## Resumo dos 7 estilos (usado na Etapa 23)

**Esportivo:** Seu estilo é prático e despojado — você se sente bem em peças confortáveis que não perdem o toque de estilo. Jeans, tênis e peças versáteis são sua base, e seu guia vai te mostrar como criar looks incríveis sem abrir mão do conforto.

**Tradicional:** Seu estilo é atemporal e certinho — você gosta de peças clássicas que nunca saem de moda. Alfaiataria, cores neutras e cortes bem definidos são sua marca registrada, e seu guia vai te ajudar a montar looks elegantes com poucas peças-chave.

**Elegante:** Seu estilo é refinado e sofisticado — você gosta de elevar cada look, mesmo nos dias mais simples. Peças estruturadas e bem cortadas são sua praia, e seu guia vai te mostrar como parecer sempre impecável com poucas peças.

**Romântico:** Seu estilo é delicado e fluido — você se sente mais você em tecidos leves, cores suaves e detalhes femininos. Vestidos fluidos e rendas são sua cara, e seu guia vai te mostrar como multiplicar esses looks sem repetir.

**Criativo:** Seu estilo é único e cheio de personalidade — você adora misturar estampas, texturas e acessórios diferentes. Ousar é sua zona de conforto, e seu guia vai te mostrar como criar combinações originais com poucas peças.

**Sexy:** Seu estilo é confiante e sedutor — você gosta de looks que valorizam seu corpo e realçam sua confiança. Peças justas e materiais como couro e cetim são sua assinatura, e seu guia vai te mostrar como montar looks poderosos com poucas peças.

**Dramático Urbano:** Seu estilo é marcante e cheio de atitude — você gosta de looks estruturados que chamam atenção. Cores fortes e silhuetas statement são sua identidade, e seu guia vai te mostrar como criar looks impactantes com poucas peças.

`[Todos os 7 textos acima são rascunho inicial — revisar tom antes de subir pro app.]`

---

## O que ainda está em aberto

1. Etapa 24 (Oferta) — bio da autora e foto de transformação (será enviada posteriormente ao Claude Code; manter layout pronto pra receber depois)
2. Diversos — depoimentos e fotos reais de antes/depois (marcados como `[SUBSTITUIR]`)
3. Imagens reais para os 7 looks da Etapa 3 — inclui 2 novas (Look 6 Tradicional, Look 7 Dramático Urbano) além das 5 já buscadas no Pinterest. Essas 7 imagens cobrem Etapa 3, Etapa 21B e Etapa 23 — não precisa produzir imagens extras pra essas duas últimas.
4. Revisar o tom dos 7 textos-resumo de estilo (rascunho inicial na seção "Resumo dos 7 estilos") antes de subir pro app.

Nenhuma dessas pendências impede a construção do quiz — o spec técnico vai prever esses pontos como configuráveis/placeholder.
