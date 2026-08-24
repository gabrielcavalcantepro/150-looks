import { renderChoiceStep } from './_choiceStep.js';
import { CONTENT } from '../data/content.data.js';

export function render(container, ctx) {
  renderChoiceStep(container, ctx, {
    content: CONTENT.prazo,
    answerKey: 'prazo',
    layout: 'grid',
    tag: CONTENT.prazo.tag,
    footnoteVariant: 'tip',
  });
}
