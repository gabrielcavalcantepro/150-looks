import { CONTENT } from '../data/content.data.js';
import {
  EMBEDDED_TESTIMONIAL_STEP13,
  TESTIMONIAL_IMAGE_STEP13_1,
  TESTIMONIAL_IMAGE_STEP13_2,
} from '../data/placeholders.data.js';
import { createButton } from '../ui/button.js';
import { createCompareTable } from '../ui/compareTable.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { appendHighlightedText } from '../ui/highlightText.js';
import { interpolate } from '../engine/interpolate.js';

export function render(container, ctx) {
  const content = CONTENT.educativo1;
  const wrap = document.createElement('div');
  wrap.className = 'step step--interstitial';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'step-eyebrow';
  eyebrow.textContent = content.eyebrow;
  wrap.appendChild(eyebrow);

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  content.paragraphs.forEach((p) => {
    const para = document.createElement('p');
    para.className = 'step-paragraph';
    para.textContent = p;
    wrap.appendChild(para);
  });

  const highlight = document.createElement('p');
  highlight.className = 'step-highlight';
  highlight.textContent = interpolate(content.highlight, ctx);
  wrap.appendChild(highlight);

  const testimonialImages = document.createElement('div');
  testimonialImages.className = 'image-strip';
  testimonialImages.append(
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP13_1, alt: 'depoimento 1', aspectRatio: '1 / 1' }),
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP13_2, alt: 'depoimento 2', aspectRatio: '1 / 1' })
  );
  wrap.appendChild(testimonialImages);

  const embedded = document.createElement('div');
  embedded.className = 'embedded-testimonial-placeholder';
  embedded.textContent = EMBEDDED_TESTIMONIAL_STEP13;
  wrap.appendChild(embedded);

  wrap.appendChild(createCompareTable(content.table));

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  container.appendChild(wrap);
}
