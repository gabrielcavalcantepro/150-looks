import { CONTENT } from '../data/content.data.js';
import { TESTIMONIALS_STEP7 } from '../data/testimonials.data.js';
import {
  BEFORE_AFTER_IMAGE_STEP7,
  BEFORE_AFTER_IMAGE_STEP7_2,
  BEFORE_AFTER_IMAGE_STEP7_3,
} from '../data/placeholders.data.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { createTestimonialCard } from '../ui/testimonialCard.js';
import { createButton } from '../ui/button.js';
import { appendHighlightedText } from '../ui/highlightText.js';

export function render(container, ctx) {
  const content = CONTENT.provaSocial1;
  const wrap = document.createElement('div');
  wrap.className = 'step step--interstitial';

  const banner = document.createElement('div');
  banner.className = 'top-banner';
  banner.textContent = content.kicker;
  wrap.appendChild(banner);

  const badge = document.createElement('p');
  badge.className = 'step-badge-line';
  badge.textContent = content.badge;
  wrap.appendChild(badge);

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  wrap.appendChild(
    createMediaSlot({ src: BEFORE_AFTER_IMAGE_STEP7, alt: content.imageLabel, aspectRatio: '16 / 10' })
  );

  const imageStrip = document.createElement('div');
  imageStrip.className = 'image-strip';
  imageStrip.append(
    createMediaSlot({ src: BEFORE_AFTER_IMAGE_STEP7_2, alt: `${content.imageLabel} 2`, aspectRatio: '1 / 1' }),
    createMediaSlot({ src: BEFORE_AFTER_IMAGE_STEP7_3, alt: `${content.imageLabel} 3`, aspectRatio: '1 / 1' })
  );
  wrap.appendChild(imageStrip);

  const testimonials = document.createElement('div');
  testimonials.className = 'testimonial-list';
  TESTIMONIALS_STEP7.forEach((t) => testimonials.appendChild(createTestimonialCard(t)));
  wrap.appendChild(testimonials);

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  container.appendChild(wrap);
}
