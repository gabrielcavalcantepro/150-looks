import { CONTENT } from '../data/content.data.js';
import { STYLE_LABELS, getLookImageKeyForStyle } from '../data/scoring.data.js';
import { createOptionCard } from '../ui/optionCard.js';
import { appendHighlightedText } from '../ui/highlightText.js';

// Só aparece se, após aplicar os pesos das Etapas 3/4/6, os 2 estilos com
// maior pontuação empatarem (ou ficarem com diferença <= TIE_MAX_DIFF).
export function shouldShow(ctx) {
  return Boolean(ctx.getResult().wasTie);
}

export function render(container, ctx) {
  const content = CONTENT.desempate;
  const result = ctx.getResult();
  const wrap = document.createElement('div');
  wrap.className = 'step step--choice';

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  const list = document.createElement('div');
  list.className = 'option-list option-list--grid-image';

  [result.primary, result.secondary].forEach((styleKey) => {
    const card = createOptionCard({
      label: STYLE_LABELS[styleKey],
      imageKey: getLookImageKeyForStyle(styleKey),
      variant: 'grid-image',
      onClick: () => {
        ctx.setAnswer('desempate', styleKey);
        ctx.goNext();
      },
    });
    list.appendChild(card);
  });
  wrap.appendChild(list);

  container.appendChild(wrap);
}
