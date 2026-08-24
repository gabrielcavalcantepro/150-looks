import { renderChoiceStep } from './_choiceStep.js';
import { CONTENT } from '../data/content.data.js';
import { interpolate } from '../engine/interpolate.js';

export function render(container, ctx) {
  renderChoiceStep(container, ctx, {
    content: CONTENT.insegura,
    answerKey: 'insegura',
    layout: 'list',
    interpolateTitle: (text) => interpolate(text, ctx),
  });
}
