import { renderChoiceStep } from './_choiceStep.js';
import { CONTENT } from '../data/content.data.js';

export function render(container, ctx) {
  renderChoiceStep(container, ctx, {
    content: CONTENT.motivo,
    answerKey: 'motivo',
    layout: 'list',
  });
}
