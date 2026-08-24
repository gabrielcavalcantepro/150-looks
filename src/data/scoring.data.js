// Motor de pontuação — mapa de dados (ver spec-tecnico-quiz-estilo.md, seção 7)

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

export const SCORING_MAP = {
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
  pecas: {
    // multi-select: soma-se os pontos de CADA item marcado
    jeansTenis: { esportivo: 1 },
    blazer: { elegante: 1, tradicional: 1 },
    vestidoFluido: { romantico: 1 },
    statement: { criativo: 1, dramaticoUrbano: 1 },
    justas: { sexy: 1 },
    umPoucoDeTudo: {
      esportivo: 0.15,
      tradicional: 0.15,
      elegante: 0.15,
      romantico: 0.15,
      criativo: 0.15,
      sexy: 0.15,
      dramaticoUrbano: 0.15,
    },
  },
};

// Limiar de empate: diferença de pontos igual ou menor a isso mostra 2 estilos
export const TIE_THRESHOLD = 0.5;

function createEmptyScores() {
  return STYLE_KEYS.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
}

function addScore(scores, points) {
  if (!points) return;
  for (const style of Object.keys(points)) {
    scores[style] += points[style];
  }
}

export function calculateResult(answers) {
  const scores = createEmptyScores();

  addScore(scores, SCORING_MAP.visual[answers.visual]);
  addScore(scores, SCORING_MAP.motivo[answers.motivo]);
  (answers.pecas || []).forEach((item) => addScore(scores, SCORING_MAP.pecas[item]));

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [primary, primaryScore] = sorted[0];
  const [secondary, secondaryScore] = sorted[1];
  const isClose = primaryScore - secondaryScore <= TIE_THRESHOLD;

  return {
    primary,
    secondary: isClose ? secondary : null,
    scores,
  };
}
