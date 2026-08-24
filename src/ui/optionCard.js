import { LOOK_IMAGES, LOOK_IMAGE_LABELS } from '../data/placeholders.data.js';
import { createMediaSlot } from './mediaSlot.js';

// variant: 'list' | 'grid' | 'grid-image'
export function createOptionCard({
  emoji,
  label,
  sublabel,
  imageKey,
  variant = 'list',
  selected = false,
  multi = false,
  onClick,
} = {}) {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = [
    'option-card',
    `option-card--${variant}`,
    selected ? 'is-selected' : '',
    multi ? 'option-card--multi' : '',
  ]
    .filter(Boolean)
    .join(' ');
  el.setAttribute('aria-pressed', String(selected));

  if (variant === 'grid-image') {
    el.appendChild(
      createMediaSlot({
        src: LOOK_IMAGES[imageKey],
        alt: LOOK_IMAGE_LABELS[imageKey] || label,
        aspectRatio: '3 / 4',
      })
    );
    const labelEl = document.createElement('span');
    labelEl.className = 'option-card__label';
    labelEl.textContent = label;
    el.appendChild(labelEl);
  } else {
    if (emoji) {
      const emojiEl = document.createElement('span');
      emojiEl.className = 'option-card__emoji';
      emojiEl.textContent = emoji;
      emojiEl.setAttribute('aria-hidden', 'true');
      el.appendChild(emojiEl);
    }

    const textWrap = document.createElement('span');
    textWrap.className = 'option-card__text';

    const labelEl = document.createElement('span');
    labelEl.className = 'option-card__label';
    labelEl.textContent = label;
    textWrap.appendChild(labelEl);

    if (sublabel) {
      const subEl = document.createElement('span');
      subEl.className = 'option-card__sublabel';
      subEl.textContent = sublabel;
      textWrap.appendChild(subEl);
    }
    el.appendChild(textWrap);

    if (multi) {
      const check = document.createElement('span');
      check.className = 'option-card__check';
      check.setAttribute('aria-hidden', 'true');
      el.appendChild(check);
    }
  }

  if (onClick) el.addEventListener('click', onClick);
  return el;
}
