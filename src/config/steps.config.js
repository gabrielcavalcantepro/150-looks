// Mapa de etapas — spec-tecnico-quiz-estilo.md, seções 4 e 5.
// Ordem exata das 24 etapas navegáveis. showBack/showProgress seguem as
// regras da seção 5 (progresso visível 2–19; voltar presente nas perguntas
// single/multi/grid-select de 2–19, exceto a Etapa 2 e os interstícios
// 7/13/14/21; ausente na captura de nome e a partir da Etapa 20).

import * as landing from '../steps/01-landing.js';
import * as idade from '../steps/02-idade.js';
import * as visual from '../steps/03-visual.js';
import * as motivo from '../steps/04-motivo.js';
import * as sente from '../steps/05-sente.js';
import * as pecas from '../steps/06-pecas.js';
import * as provaSocial1 from '../steps/07-provaSocial1.js';
import * as rotina from '../steps/08-rotina.js';
import * as tempoDecisao from '../steps/09-tempoDecisao.js';
import * as nome from '../steps/10-nome.js';
import * as insegura from '../steps/11-insegura.js';
import * as trava from '../steps/12-trava.js';
import * as educativo1 from '../steps/13-educativo1.js';
import * as educativo2 from '../steps/14-educativo2.js';
import * as planejamento from '../steps/15-planejamento.js';
import * as qtdPecas from '../steps/16-qtdPecas.js';
import * as usoReal from '../steps/17-usoReal.js';
import * as ocasiao from '../steps/18-ocasiao.js';
import * as prazo from '../steps/19-prazo.js';
import * as projecao from '../steps/20-projecao.js';
import * as provaSocial2 from '../steps/21-provaSocial2.js';
import * as desempate from '../steps/21b-desempate.js';
import * as loading from '../steps/22-loading.js';
import * as diagnostico from '../steps/23-diagnostico.js';
import * as oferta from '../steps/24-oferta.js';

const QUESTION_STEPS_WITH_BACK = new Set([3, 4, 5, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]);

function showBackFor(number) {
  return QUESTION_STEPS_WITH_BACK.has(number);
}

// Etapas com faixa/interstício de topo (7, 13, 14) não mostram barra de
// progresso, mesmo estando no intervalo 2–19.
const STEPS_WITHOUT_PROGRESS = new Set([7, 13, 14]);

function showProgressFor(number) {
  return number >= 2 && number <= 19 && !STEPS_WITHOUT_PROGRESS.has(number);
}

const DEFS = [
  { number: 1, id: 'landing', module: landing },
  { number: 2, id: 'idade', module: idade },
  { number: 3, id: 'visual', module: visual },
  { number: 4, id: 'motivo', module: motivo },
  { number: 5, id: 'sente', module: sente },
  { number: 6, id: 'pecas', module: pecas },
  { number: 7, id: 'provaSocial1', module: provaSocial1 },
  { number: 8, id: 'rotina', module: rotina },
  { number: 9, id: 'tempoDecisao', module: tempoDecisao },
  { number: 10, id: 'nome', module: nome },
  { number: 11, id: 'insegura', module: insegura },
  { number: 12, id: 'trava', module: trava },
  { number: 13, id: 'educativo1', module: educativo1 },
  { number: 14, id: 'educativo2', module: educativo2 },
  { number: 15, id: 'planejamento', module: planejamento },
  { number: 16, id: 'qtdPecas', module: qtdPecas },
  { number: 17, id: 'usoReal', module: usoReal },
  { number: 18, id: 'ocasiao', module: ocasiao },
  { number: 19, id: 'prazo', module: prazo },
  { number: 20, id: 'projecao', module: projecao },
  { number: 21, id: 'provaSocial2', module: provaSocial2 },
  // Etapa 21B: condicional, só aparece em caso de empate (ver
  // desempate.shouldShow). Mantém a numeração 22/23/24 das etapas
  // seguintes, como no arquivo de conteúdo.
  { number: 21.5, id: 'desempate', module: desempate },
  { number: 22, id: 'loading', module: loading },
  { number: 23, id: 'diagnostico', module: diagnostico },
  { number: 24, id: 'oferta', module: oferta },
];

export const STEPS = DEFS.map(({ number, id, module }) => ({
  number,
  id,
  showBack: showBackFor(number),
  showProgress: showProgressFor(number),
  render: module.render,
  // Etapas normais sempre aparecem; etapas condicionais (ex.: 21B) expõem
  // um shouldShow(ctx) que a engine de navegação consulta antes de renderizar.
  shouldShow: module.shouldShow || null,
}));
