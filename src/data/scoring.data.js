// Motor de pontuação — mapa de dados (ver quiz-estilo-textos-etapas.md,
// seção "Tabela de pontuação por estilo").
//
// Mapeamento 100% exclusivo: cada opção de resposta pontua para exatamente
// 1 dos 7 estilos. Os pesos de cada etapa ficam em WEIGHTS — os valores em
// SCORING_MAP ficam sempre em 1 ponto por estilo, e o peso é aplicado na
// soma (calculateResult), não no mapa.

export const STYLE_KEYS = [
  'esportivo',
  'tradicional',
  'elegante',
  'romantico',
  'criativo',
  'sexy',
  'dramaticoUrbano',
];

export const STYLE_LABELS = {
  esportivo: 'Esportivo',
  tradicional: 'Tradicional',
  elegante: 'Elegante',
  romantico: 'Romântico',
  criativo: 'Criativo',
  sexy: 'Sexy',
  dramaticoUrbano: 'Dramático Urbano',
};

// Textos-resumo de 2-3 frases por estilo, usados na Etapa 23 (Diagnóstico).
// Rascunho inicial — ver quiz-estilo-textos-etapas.md, seção "Resumo dos 7 estilos".
export const STYLE_SUMMARIES = {
  esportivo:
    'Seu estilo é prático e despojado. Você se sente bem em peças confortáveis que não perdem o toque de estilo. Jeans, tênis e peças versáteis são sua base, e seu guia vai te mostrar como criar looks incríveis sem abrir mão do conforto.',
  tradicional:
    'Seu estilo é atemporal e certinho. Você gosta de peças clássicas que nunca saem de moda. Alfaiataria, cores neutras e cortes bem definidos são sua marca registrada, e seu guia vai te ajudar a montar looks elegantes com poucas peças-chave.',
  elegante:
    'Seu estilo é refinado e sofisticado. Você gosta de elevar cada look, mesmo nos dias mais simples. Peças estruturadas e bem cortadas são sua praia, e seu guia vai te mostrar como parecer sempre impecável com poucas peças.',
  romantico:
    'Seu estilo é delicado e fluido. Você se sente mais você em tecidos leves, cores suaves e detalhes femininos. Vestidos fluidos e rendas são sua cara, e seu guia vai te mostrar como multiplicar esses looks sem repetir.',
  criativo:
    'Seu estilo é único e cheio de personalidade. Você adora misturar estampas, texturas e acessórios diferentes. Ousar é sua zona de conforto, e seu guia vai te mostrar como criar combinações originais com poucas peças.',
  sexy: 'Seu estilo é confiante e sedutor. Você gosta de looks que valorizam seu corpo e realçam sua confiança. Peças justas e materiais como couro e cetim são sua assinatura, e seu guia vai te mostrar como montar looks poderosos com poucas peças.',
  dramaticoUrbano:
    'Seu estilo é marcante e cheio de atitude. Você gosta de looks estruturados que chamam atenção. Cores fortes e silhuetas statement são sua identidade, e seu guia vai te mostrar como criar looks impactantes com poucas peças.',
};

export const SCORING_MAP = {
  visual: {
    look1: { esportivo: 1 },
    look2: { elegante: 1 },
    look3: { criativo: 1 },
    look4: { sexy: 1 },
    look5: { romantico: 1 },
    look6: { tradicional: 1 },
    look7: { dramaticoUrbano: 1 },
  },
  motivo: {
    praticidade: { esportivo: 1 },
    estiloAtemporal: { tradicional: 1 },
    elevarNivel: { elegante: 1 },
    romanticaDelicada: { romantico: 1 },
    pararRepetir: { criativo: 1 },
    sexyPoderosa: { sexy: 1 },
    confiancaOusar: { dramaticoUrbano: 1 },
  },
  pecas: {
    jeansTenis: { esportivo: 1 },
    blazerAlfaiataria: { tradicional: 1 },
    tubinhoSaltos: { elegante: 1 },
    vestidoFluidoRendado: { romantico: 1 },
    estampasOusadas: { criativo: 1 },
    justasCouro: { sexy: 1 },
    jaquetaEstruturada: { dramaticoUrbano: 1 },
  },
};

// Pesos por etapa na fórmula final. Máximo possível por estilo = soma dos pesos.
export const WEIGHTS = { visual: 2, motivo: 1, pecas: 1 };
export const MAX_SCORE_PER_STYLE = WEIGHTS.visual + WEIGHTS.motivo + WEIGHTS.pecas;

// Diferença de pontos (após pesos) igual ou menor a isso entre o 1º e o 2º
// lugar aciona a Etapa 21B (desempate) antes do loading/diagnóstico.
export const TIE_MAX_DIFF = 1;

// Inverte SCORING_MAP.visual pra saber qual imagem de look representa cada
// estilo — reaproveitada na Etapa 21B (desempate) e na Etapa 23 (Diagnóstico).
const STYLE_TO_LOOK_KEY = Object.fromEntries(
  Object.entries(SCORING_MAP.visual).map(([lookKey, points]) => [Object.keys(points)[0], lookKey])
);

export function getLookImageKeyForStyle(styleKey) {
  return STYLE_TO_LOOK_KEY[styleKey];
}

function createEmptyScores() {
  return STYLE_KEYS.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
}

function addScore(scores, points, weight = 1) {
  if (!points) return;
  for (const style of Object.keys(points)) {
    scores[style] += points[style] * weight;
  }
}

export function calculateResult(answers) {
  const scores = createEmptyScores();

  addScore(scores, SCORING_MAP.visual[answers.visual], WEIGHTS.visual);
  addScore(scores, SCORING_MAP.motivo[answers.motivo], WEIGHTS.motivo);
  addScore(scores, SCORING_MAP.pecas[answers.pecas], WEIGHTS.pecas);

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topStyle, topScore] = sorted[0];
  const [secondStyle, secondScore] = sorted[1];
  const isTie = topScore - secondScore <= TIE_MAX_DIFF;

  // Etapa 21B já respondida: a escolha da usuária decide o vencedor entre
  // os 2 estilos empatados.
  if (isTie && (answers.desempate === topStyle || answers.desempate === secondStyle)) {
    const winner = answers.desempate;
    const loser = winner === topStyle ? secondStyle : topStyle;
    return { primary: winner, secondary: loser, scores, wasTie: true };
  }

  return {
    primary: topStyle,
    secondary: isTie ? secondStyle : null,
    scores,
    wasTie: isTie,
  };
}
