// Lógica de ramificação — versão do guia (ver spec-tecnico-quiz-estilo.md, seção 8)
// Não há pergunta dedicada: usa a resposta da Etapa 8 (rotina).

export const GUIDE_VERSION_MAP = {
  homeOffice: 'Casual & Dia a Dia',
  cuidoDaCasa: 'Casual & Dia a Dia',
  corporativo: 'Corporativo',
  socialIntensa: 'Social & Eventos',
  mixDeTudo: 'Versátil',
};

export const DEFAULT_GUIDE_VERSION = 'Versátil';

export function getGuideVersion(rotinaAnswer) {
  return GUIDE_VERSION_MAP[rotinaAnswer] ?? DEFAULT_GUIDE_VERSION;
}
