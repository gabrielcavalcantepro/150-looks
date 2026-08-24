import { renderChoiceStep } from './_choiceStep.js';
import { CONTENT } from '../data/content.data.js';
import { interpolate } from '../engine/interpolate.js';

export function render(container, ctx) {
  renderChoiceStep(container, ctx, {
    content: CONTENT.ocasiao,
    answerKey: 'ocasiao',
    layout: 'list',
    tag: CONTENT.ocasiao.tag,
    eyebrow: CONTENT.ocasiao.eyebrow,
    interpolateTitle: (text) => interpolate(text, ctx),
  });
}
