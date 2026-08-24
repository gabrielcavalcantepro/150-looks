# Spec Técnico — Quiz de Descoberta de Estilo

## 1. Visão geral

Quiz de descoberta de estilo, porta de entrada de funil, vendendo o guia digital **"+150 Looks com Apenas 20 Peças"** (oferta de entrada, R$29,90). A pessoa chega por anúncio, responde 19 perguntas, descobre qual dos 7 estilos universais é o dela, e a própria tela de resultado já apresenta a oferta personalizada.

**Fonte de verdade para todo o copy:** o arquivo `quiz-estilo-textos-etapas.md` (anexo neste mesmo projeto). Este spec não repete o texto de cada tela — define arquitetura, dados, lógica e comportamento. Ao implementar, use o conteúdo desse arquivo literalmente, etapa por etapa.

**Os 7 estilos:** Esportivo, Tradicional, Elegante, Romântico, Criativo, Sexy, Dramático Urbano.

---

## 2. Stack técnica sugerida

**HTML + CSS + JavaScript puro (vanilla), sem framework de UI.** Como o quiz recebe tráfego pago direto, o critério que mais importa é velocidade de carregamento — cada KB de JS e cada ms de Time to Interactive afetam taxa de conversão e custo do anúncio. Um framework como React adiciona ~40-45kb (gzip) de runtime antes mesmo do código do quiz rodar, e o fluxo aqui (uma etapa ativa por vez, avançar, guardar resposta, calcular no final) não precisa de abstração de componentes/virtual DOM pra ficar organizado — mapeia bem num render orientado por configuração, em JS puro.

- **JavaScript (ou TypeScript, que compila e não pesa nada em runtime) + Vite como bundler** — só pra ter dev server com hot reload e build de produção minificado/tree-shaken. Vite funciona bem sem framework nenhum.
- **Tailwind CSS** (via CLI/PostCSS) ou CSS puro — ambos funcionam; Tailwind agiliza o desenvolvimento sem custo de runtime (é só CSS compilado, não JS)
- Sem necessidade de backend — todo o cálculo (pontuação, ramificação) roda no client
- Estado do quiz num objeto JS simples (sem lib de state management) + `localStorage` para não perder progresso em caso de reload
- Deploy estático (Vercel/Netlify/Cloudflare Pages) — sem SSR necessário, já que não há SEO relevante numa landing de anúncio

A arquitetura de dados/lógica das seções seguintes (steps.config, motor de pontuação, ramificação) é a mesma independente da stack — só a camada de renderização passa de "componentes React" para "funções de render em JS puro". Os trechos de código abaixo usam tipos TypeScript pela clareza — em JS puro, é só remover as anotações de tipo.

---

## 3. Design system

### Paleta de cores

| Variável | Hex | Uso sugerido |
|---|---|---|
| `--color-bg` | `#f2ebdf` | Fundo principal das telas (tom quente, substitui o creme do quiz de referência) |
| `--color-surface` | `#f4f4f4` | Fundo de cards, inputs, opções de resposta |
| `--color-text` | `#484237` | Texto principal, headlines (contraste alto sobre o fundo claro) |
| `--color-accent` | `#7f674d` | CTAs, barra de progresso, destaques, bordas de seleção ativa |

Sugestão de uso: fundo geral `--color-bg`, cards de opção em `--color-surface` com borda sutil, texto em `--color-text`, botões e barra de progresso em `--color-accent` (com um tom mais escuro dele no hover).

### Tipografia

Seguindo o padrão do quiz de referência (que funciona bem e queremos manter): **headline em serif** (peso forte, para títulos de pergunta) + **corpo em sans-serif** (legibilidade em telas pequenas). Qualquer par serif/sans-serif de sistema ou Google Fonts é aceitável — não é um requisito de marca fechado.

### Blocos de UI reutilizáveis

Implementados como funções JS que retornam HTML/DOM (ou templates reaproveitáveis), não como componentes de framework:

- `Button` (variantes: primary — accent sólido; secondary/outline)
- `ProgressBar` (linear, preenchimento em `--color-accent`)
- `OptionCard` (usado em single-select, multi-select e grid visual — estado default/hover/selected)
- `Badge` (usado em selos de confiança, "MAIS ESCOLHIDO", etc.)
- `TestimonialCard`
- `RotatingSocialProofToast` (elemento global — ver seção 10)

---

## 4. Mapa de etapas

24 etapas navegáveis + 1 bloco de lógica sem tela própria (após a Etapa 15).

| # | Nome | id sugerido | Tipo de tela | Pontua estilo? |
|---|---|---|---|---|
| 1 | Landing page / Opt-in | `landing` | LP | Não |
| 2 | Idade | `idade` | Single-select | Não |
| 3 | Visual (5 looks) | `visual` | Grid visual (5 opções) | **Sim** |
| 4 | O que busca no estilo | `motivo` | Single-select | **Sim** |
| 5 | Como se sente com guarda-roupa | `sente` | Single-select | Não |
| 6 | Peças favoritas | `pecas` | Multi-select (botão Continuar) | **Sim** |
| 7 | Prova social #1 | `provaSocial1` | Interstitial/carrossel | Não |
| 8 | Rotina predominante | `rotina` | Single-select | Não (usada na ramificação — ver seção 8) |
| 9 | Tempo perdido decidindo | `tempoDecisao` | Single-select | Não |
| 10 | Captura de nome | `nome` | Captura (input texto) | Não |
| 11 | Emoção na hora de se vestir | `insegura` | Single-select | Não |
| 12 | O que trava os looks | `trava` | Single-select | Não |
| 13 | Educativo #1 | `educativo1` | Interstitial | Não |
| 14 | Educativo #2 (antes/depois) | `educativo2` | Interstitial | Não |
| 15 | Tempo disponível | `planejamento` | Single-select | Não |
| — | Lógica de ramificação | *(sem tela)* | Cálculo | Define versão do guia |
| 16 | Quantidade de peças no guarda-roupa | `qtdPecas` | Single-select | Não |
| 17 | Quanto realmente usa | `usoReal` | Single-select | Não |
| 18 | Ocasião especial | `ocasiao` | Single-select | Não |
| 19 | Prazo do objetivo | `prazo` | Grid-select (4 cards) | Não |
| 20 | Projeção personalizada | `projecao` | Reveal/transição | Não |
| 21 | Mais prova social | `provaSocial2` | Interstitial | Não |
| 22 | Loading | `loading` | Fake-loading | Não |
| 23 | Diagnóstico completo | `diagnostico` | Página de resultado | Não |
| 24 | Oferta | `oferta` | Página de oferta | Não |

---

## 5. Regras de comportamento por etapa

- **Barra de progresso:** visível das Etapas 2 a 19. Ausente na Etapa 1 (landing) e da Etapa 20 em diante (quiz encerrado, entra-se em resultado/oferta).
- **Botão "← Voltar":** presente em todas as perguntas single/multi/grid-select (Etapas 2 a 19), **exceto** na primeira pergunta (Etapa 2) e nos interstícios/prova social (7, 13, 14, 21). Ausente na captura de nome (10) e em tudo a partir da Etapa 20.
- **Avanço automático:** perguntas single-select e grid-select avançam sozinhas ao clicar numa opção (sem precisar de botão "Continuar"). A única exceção é a Etapa 6 (multi-select), que tem botão "Continuar" explícito, já que é possível marcar mais de uma opção.
- **Rótulos especiais:** Etapa 18 leva a tag "PERGUNTA EXTRA" + texto "Quase lá! ✨" acima do título. Etapa 19 leva "ÚLTIMA ETAPA" + "Última etapa! 🎯".
- **Uso do nome `[Nome]`:** só a partir da Etapa 10 (onde é capturado). Mesmo depois disso, é usado de forma seletiva — não em toda etapa. Etapas que usam `[Nome]` no texto: 11, 18, 20, 23, 24. As demais (12, 13, 14, 15, 16, 17, 19, 21, 22) permanecem genéricas mesmo já tendo o nome disponível — siga exatamente o que está no arquivo de conteúdo, não adicione `[Nome]` onde ele não aparece lá.

---

## 6. Arquitetura de estado

```ts
interface QuizAnswers {
  idade?: string;
  visual?: 'look1' | 'look2' | 'look3' | 'look4' | 'look5';
  motivo?: string;
  sente?: string;
  pecas?: string[];          // multi-select
  rotina?: string;
  tempoDecisao?: string;
  nome?: string;
  insegura?: string;
  trava?: string;
  planejamento?: string;
  qtdPecas?: string;
  usoReal?: string;
  ocasiao?: string;
  prazo?: string;
}

interface QuizState {
  currentStepIndex: number;
  answers: QuizAnswers;
  result?: QuizResult;
}
```

Navegação controlada por um array ordenado de configuração de etapas (`steps.config.ts`), cada item com `{ id, type, render, showBack, showProgress }`, onde `render` é a função vanilla que monta o HTML daquela etapa. Uma função `renderCurrentStep()` lê o índice atual, limpa o container principal e injeta o HTML/DOM da etapa correspondente — sem precisar de rotas/URLs por etapa (fluxo linear, single-page, tudo dentro de um único `index.html`).

Persistir `answers` e `currentStepIndex` em `localStorage` a cada resposta, para o caso de reload acidental no meio do quiz.

---

## 7. Motor de pontuação (estilo resultado)

Cada estilo acumula pontos conforme a tabela de pontuação abaixo (reproduzida do arquivo de conteúdo). Estruture como um mapa de dados, não como `if/else` espalhado:

```ts
type StyleKey = 'esportivo' | 'tradicional' | 'elegante' | 'romantico' | 'criativo' | 'sexy' | 'dramaticoUrbano';

const SCORING_MAP: Record<string, Record<string, Partial<Record<StyleKey, number>>>> = {
  visual: {
    look1: { esportivo: 1, tradicional: 1 },
    look2: { tradicional: 1, elegante: 1 },
    look3: { criativo: 1, dramaticoUrbano: 1 },
    look4: { sexy: 1, dramaticoUrbano: 1 },
    look5: { romantico: 1 },
  },
  motivo: {
    praticidade: { esportivo: 1 },
    pararRepetir: { criativo: 1 },
    elevarNivel: { elegante: 1 },
    bonitaDesejavel: { romantico: 1, sexy: 1 },
    confiancaOusar: { dramaticoUrbano: 1 },
  },
  pecas: { // multi-select: somar pontos de CADA item marcado
    jeansTenis: { esportivo: 1 },
    blazer: { elegante: 1, tradicional: 1 },
    vestidoFluido: { romantico: 1 },
    statement: { criativo: 1, dramaticoUrbano: 1 },
    justas: { sexy: 1 },
    umPoucoDeTudo: { esportivo: 0.15, tradicional: 0.15, elegante: 0.15, romantico: 0.15, criativo: 0.15, sexy: 0.15, dramaticoUrbano: 0.15 },
  },
};

function calculateResult(answers: QuizAnswers): { primary: StyleKey; secondary: StyleKey | null; scores: Record<StyleKey, number> } {
  const scores: Record<StyleKey, number> = {
    esportivo: 0, tradicional: 0, elegante: 0, romantico: 0, criativo: 0, sexy: 0, dramaticoUrbano: 0,
  };

  const addScore = (points?: Partial<Record<StyleKey, number>>) => {
    if (!points) return;
    for (const [style, value] of Object.entries(points)) {
      scores[style as StyleKey] += value;
    }
  };

  addScore(SCORING_MAP.visual[answers.visual ?? '']);
  addScore(SCORING_MAP.motivo[answers.motivo ?? '']);
  (answers.pecas ?? []).forEach((item) => addScore(SCORING_MAP.pecas[item]));

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [StyleKey, number][];
  const [primary, primaryScore] = sorted[0];
  const [secondary, secondaryScore] = sorted[1];
  const isClose = primaryScore - secondaryScore <= 0.5; // limiar de empate, ajustável

  return { primary, secondary: isClose ? secondary : null, scores };
}
```

Se `secondary` não for `null`, a tela de Diagnóstico (Etapa 23) pode opcionalmente mencionar os dois estilos mais próximos em vez de só um — decisão de produto em aberto, implementar de forma simples (mostrar só o `primary` já resolve o funil; o `secondary` é um extra caso queiram usar).

---

## 8. Lógica de ramificação (versão do guia)

Sem pergunta dedicada — usa a resposta da Etapa 8 (`rotina`):

```ts
const GUIDE_VERSION_MAP: Record<string, string> = {
  homeOffice: 'Casual & Dia a Dia',
  cuidoDaCasa: 'Casual & Dia a Dia',
  corporativo: 'Corporativo',
  socialIntensa: 'Social & Eventos',
  mixDeTudo: 'Versátil',
};

function getGuideVersion(rotinaAnswer: string): string {
  return GUIDE_VERSION_MAP[rotinaAnswer] ?? 'Versátil';
}
```

Essa versão é usada na Etapa 23 (campo "Versão do guia" no perfil) e na Etapa 24 (box "⚠️ Versão [X] Disponível!" e no item de bônus principal).

---

## 9. Estrutura de dados do resultado final

```ts
interface QuizResult {
  name: string;
  primaryStyle: StyleKey;
  secondaryStyle: StyleKey | null;
  scores: Record<StyleKey, number>;
  guideVersion: string;
  occasion: string;       // resposta da Etapa 18
  timeframe: string;      // resposta da Etapa 19
  answers: QuizAnswers;   // todas as respostas, para uso nos campos de resumo do diagnóstico
}
```

---

## 10. Elemento global: pop-up de prova social rotativo

Não é uma etapa — é um elemento que aparece de forma independente, temporizada, sobre várias telas do meio pro fim do funil (a partir aproximadamente da Etapa 7 em diante), mostrando algo como "**[Nome] de [Cidade-UF] acabou de comprar o guia +150 Looks!**", com nomes/cidades diferentes a cada exibição, e um botão de fechar. Implementar como um elemento fixo (`position: fixed`) montado uma única vez no HTML raiz (fora do container de etapas), controlado por um `setInterval`/`setTimeout` simples — não replicado em cada etapa. Fonte de dados: lista de nomes/cidades fictícios ou reais — marcar como `[SUBSTITUIR]` no código (array facilmente editável).

---

## 11. Placeholders e conteúdo pendente

O código deve deixar estes pontos fáceis de editar sem mexer em lógica:

- **Bio da autora + foto** (Etapa 24): será enviada depois. Deixar o layout pronto (espaço reservado para foto circular + bloco de texto) recebendo o conteúdo de uma constante/config isolada, para que a atualização não exija mexer em componente/lógica.
- **Depoimentos e fotos de antes/depois** (Etapas 7, 13, 14, 21, 22, 24): usar arrays de dados centralizados (ex.: `testimonials.data.ts`) com 2-3 itens de exemplo com texto `[SUBSTITUIR]`, fáceis de trocar por conteúdo real depois.
- **Números de prova social** ("+X mulheres", contadores): centralizar em constantes, não hardcoded em múltiplos lugares.

---

## 12. Responsividade

Mobile-first — o tráfego vem de anúncios, majoritariamente mobile. Testar em viewport ~375-430px como prioridade; desktop é secundário mas deve funcionar (centralizar o card do quiz com largura máxima, como um "container" central).

---

## 13. Critérios de aceite

- As 24 etapas navegam corretamente na ordem definida, incluindo avanço automático onde aplicável e os dois botões "Continuar" (Etapas 6 e 7)
- Barra de progresso e botão "Voltar" aparecem/somem exatamente conforme a seção 5
- `[Nome]` aparece exatamente nas etapas listadas na seção 5, usando o valor capturado na Etapa 10
- O motor de pontuação calcula corretamente o estilo vencedor a partir das respostas das Etapas 3, 4 e 6
- A versão do guia exibida no resultado e na oferta reflete corretamente a resposta da Etapa 8
- Cores, tipografia e componentes seguem o design system da seção 3
- Placeholders (`[SUBSTITUIR]`, `[EM ABERTO]`) estão isolados em arquivos/constantes de fácil edição, não espalhados pelo código
- Fluxo funciona de ponta a ponta em mobile (375px) sem quebra de layout
