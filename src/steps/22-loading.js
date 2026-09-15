import { CONTENT } from '../data/content.data.js';
import { BEFORE_AFTER_IMAGE_STEP22 } from '../data/placeholders.data.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { appendHighlightedText } from '../ui/highlightText.js';

const TOTAL_DURATION_MS = 12000;
const TICK_MS = 60;
const IMAGE_REVEAL_ITEM_INDEX = 1; // revela a imagem quando o 2º check é marcado

export function render(container, ctx) {
  const content = CONTENT.loading;
  const wrap = document.createElement('div');
  wrap.className = 'step step--loading';

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  const progressTrack = document.createElement('div');
  progressTrack.className = 'progress-bar progress-bar--loading';
  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar__fill';
  progressTrack.appendChild(progressFill);
  wrap.appendChild(progressTrack);

  const percentLabel = document.createElement('p');
  percentLabel.className = 'loading-percent';
  percentLabel.textContent = '0%';
  wrap.appendChild(percentLabel);

  const checklist = document.createElement('ul');
  checklist.className = 'loading-checklist';
  const itemEls = content.steps.map((item) => {
    const li = document.createElement('li');
    const marker = document.createElement('span');
    marker.className = 'loading-checklist__marker';
    marker.textContent = '○';
    const label = document.createElement('span');
    label.textContent = item.label;
    li.append(marker, label);
    checklist.appendChild(li);
    return { li, marker };
  });
  wrap.appendChild(checklist);

  const image = createMediaSlot({
    src: BEFORE_AFTER_IMAGE_STEP22,
    alt: content.imageLabel,
    aspectRatio: '16 / 10',
  });
  image.classList.add('reveal-fade');
  wrap.appendChild(image);

  const verified = document.createElement('p');
  verified.className = 'loading-verified';
  verified.textContent = content.verifiedLabel;
  wrap.appendChild(verified);

  container.appendChild(wrap);

  const startedAt = Date.now();
  const timer = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const pct = Math.min(100, (elapsed / TOTAL_DURATION_MS) * 100);
    progressFill.style.width = `${pct}%`;
    percentLabel.textContent = `${Math.round(pct)}%`;

    itemEls.forEach((entry, idx) => {
      const threshold = ((idx + 1) / itemEls.length) * 100;
      if (pct >= threshold && !entry.li.classList.contains('is-done')) {
        entry.li.classList.add('is-done');
        entry.marker.textContent = '✓';
        if (idx === IMAGE_REVEAL_ITEM_INDEX) {
          image.classList.add('is-visible');
        }
      }
    });

    if (pct >= 100) {
      clearInterval(timer);
      setTimeout(() => ctx.goNext(), 400);
    }
  }, TICK_MS);
}
