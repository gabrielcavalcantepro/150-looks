import { CONTENT } from '../data/content.data.js';
import { TESTIMONIAL_IMAGE_STEP21_1, TESTIMONIAL_IMAGE_STEP21_2 } from '../data/placeholders.data.js';
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

  wrap.appendChild(
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP21_1, alt: 'depoimento 1', aspectRatio: '4 / 3' })
  );
  wrap.appendChild(
    createMediaSlot({ src: TESTIMONIAL_IMAGE_STEP21_2, alt: 'depoimento 2', aspectRatio: '4 / 3' })
  );

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
