import { createMediaSlot } from './mediaSlot.js';

export function createTestimonialCard({ quote, name, age, city, stars = 5, image } = {}) {
  const card = document.createElement('div');
  card.className = 'testimonial-card';

  if (image !== undefined) {
    card.appendChild(createMediaSlot({ src: image, alt: 'foto depoimento', aspectRatio: '4 / 3' }));
  }

  const quoteEl = document.createElement('p');
  quoteEl.className = 'testimonial-card__quote';
  quoteEl.textContent = `"${quote}"`;
  card.appendChild(quoteEl);

  const metaParts = [name, age ? `${age} anos` : null, city].filter(Boolean);
  if (metaParts.length || stars) {
    const meta = document.createElement('p');
    meta.className = 'testimonial-card__meta';
    const starsStr = '★'.repeat(stars) + '☆'.repeat(Math.max(0, 5 - stars));
    meta.textContent = [...metaParts, starsStr].filter(Boolean).join(' · ');
    card.appendChild(meta);
  }

  return card;
}
