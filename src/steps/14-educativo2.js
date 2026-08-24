import { CONTENT } from '../data/content.data.js';
import { BEFORE_AFTER_IMAGE_STEP14 } from '../data/placeholders.data.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { createButton } from '../ui/button.js';
import { appendHighlightedText } from '../ui/highlightText.js';

export function render(container, ctx) {
  const content = CONTENT.educativo2;
  const wrap = document.createElement('div');
  wrap.className = 'step step--interstitial';

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  wrap.appendChild(
    createMediaSlot({ src: BEFORE_AFTER_IMAGE_STEP14, alt: content.imageLabel, aspectRatio: '16 / 10' })
  );

  const para = document.createElement('p');
  para.className = 'step-paragraph';
  para.textContent = content.paragraph;
  wrap.appendChild(para);

  const highlight = document.createElement('p');
  highlight.className = 'step-highlight';
  highlight.textContent = content.highlight;
  wrap.appendChild(highlight);

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  container.appendChild(wrap);
}
