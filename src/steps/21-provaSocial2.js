import { CONTENT } from '../data/content.data.js';
import { TESTIMONIALS_STEP21 } from '../data/testimonials.data.js';
import {
  TESTIMONIAL_IMAGE_STEP21_1,
  TESTIMONIAL_IMAGE_STEP21_2,
  TESTIMONIAL_IMAGE_STEP21_3,
} from '../data/placeholders.data.js';
import { createButton } from '../ui/button.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { appendHighlightedText } from '../ui/highlightText.js';

export function render(container, ctx) {
  const content = CONTENT.provaSocial2;
  const wrap = document.createElement('div');
  wrap.className = 'step step--interstitial';

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  const imageStrip = document.createElement('div');
  imageStrip.className = 'image-strip image-strip--3';
  imageStrip.append(
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP21_1, alt: 'depoimento 1', aspectRatio: '1 / 1' }),
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP21_2, alt: 'depoimento 2', aspectRatio: '1 / 1' }),
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP21_3, alt: 'depoimento 3', aspectRatio: '1 / 1' })
  );
  wrap.appendChild(imageStrip);

  const quoteList = document.createElement('div');
  quoteList.className = 'quote-list';
  TESTIMONIALS_STEP21.forEach((t) => {
    const p = document.createElement('p');
    p.className = 'quote-list__item';
    p.textContent = `⚡ "${t.quote}"`;
    quoteList.appendChild(p);
  });
  wrap.appendChild(quoteList);

  const benefitsTitle = document.createElement('h2');
  benefitsTitle.className = 'step-subheading';
  benefitsTitle.textContent = content.benefitsTitle;
  wrap.appendChild(benefitsTitle);

  const benefitsList = document.createElement('ul');
  benefitsList.className = 'check-list';
  content.benefits.forEach((b) => {
    const li = document.createElement('li');
    li.textContent = b;
    benefitsList.appendChild(li);
  });
  wrap.appendChild(benefitsList);

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  container.appendChild(wrap);
}
