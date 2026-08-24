import { CONTENT } from '../data/content.data.js';
import {
  LANDING_MOCKUP_IMAGE,
  LANDING_COUNT_MIN,
  LANDING_COUNT_MAX,
  LANDING_COUNT_INCREMENT_MIN,
  LANDING_COUNT_INCREMENT_MAX,
  LANDING_COUNT_INTERVAL_MIN_MS,
  LANDING_COUNT_INTERVAL_MAX_MS,
} from '../data/placeholders.data.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { createButton } from '../ui/button.js';
import { appendHighlightedText } from '../ui/highlightText.js';
import { randomInt } from '../engine/random.js';

export function render(container, ctx) {
  const content = CONTENT.landing;
  const wrap = document.createElement('div');
  wrap.className = 'step step--landing';

  const kicker = document.createElement('p');
  kicker.className = 'step-kicker';
  const dot = document.createElement('span');
  dot.className = 'step-kicker__dot';
  dot.setAttribute('aria-hidden', 'true');
  const kickerCount = document.createElement('span');
  kickerCount.className = 'step-kicker__count';
  let count = randomInt(LANDING_COUNT_MIN, LANDING_COUNT_MAX);
  kickerCount.textContent = String(count);
  const kickerText = document.createElement('span');
  kickerText.textContent = ` ${content.kickerSuffix}`;
  kicker.append(dot, kickerCount, kickerText);
  wrap.appendChild(kicker);

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.className = 'step-subtitle';
  subtitle.textContent = content.subtitle;
  wrap.appendChild(subtitle);

  wrap.appendChild(
    createMediaSlot({ src: LANDING_MOCKUP_IMAGE, alt: content.imageLabel, aspectRatio: '4 / 5' })
  );

  const checks = document.createElement('p');
  checks.className = 'step-checks';
  checks.textContent = content.checks;
  wrap.appendChild(checks);

  const warning = document.createElement('p');
  warning.className = 'step-warning';
  warning.textContent = content.warning;
  wrap.appendChild(warning);

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  const footnote = document.createElement('p');
  footnote.className = 'step-footnote';
  footnote.textContent = content.footnote;
  wrap.appendChild(footnote);

  container.appendChild(wrap);

  // Contador "ao vivo": sobe sozinho em intervalos e incrementos aleatórios.
  let timeoutId = null;
  function scheduleNextIncrement() {
    const delay = randomInt(LANDING_COUNT_INTERVAL_MIN_MS, LANDING_COUNT_INTERVAL_MAX_MS);
    timeoutId = setTimeout(() => {
      count += randomInt(LANDING_COUNT_INCREMENT_MIN, LANDING_COUNT_INCREMENT_MAX);
      kickerCount.textContent = String(count);
      scheduleNextIncrement();
    }, delay);
  }
  scheduleNextIncrement();

  return () => {
    if (timeoutId) clearTimeout(timeoutId);
  };
}
