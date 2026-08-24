import { SOCIAL_PROOF_NAMES, SOCIAL_PROOF_CITIES } from '../data/placeholders.data.js';
import { randomInt } from '../engine/random.js';

// Elemento global, montado uma única vez fora do container de etapas
// (ver spec-tecnico-quiz-estilo.md, seção 10). Começa a aparecer a
// partir da Etapa 20 (Projeção), não antes.
const SHOW_FROM_STEP_NUMBER = 20;
const INITIAL_DELAY_MS = 9000;
const INTERVAL_MS = 16000;
const VISIBLE_DURATION_MS = 6000;

// Sorteia um índice diferente do último usado, pra nunca repetir a mesma
// mulher/cidade duas vezes seguidas.
function pickDifferentIndex(length, lastIndex) {
  if (length <= 1) return 0;
  let index = lastIndex;
  while (index === lastIndex) {
    index = randomInt(0, length - 1);
  }
  return index;
}

export function initSocialProofToast({ getCurrentStepNumber }) {
  const root = document.createElement('div');
  root.className = 'social-proof-toast';
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');
  document.body.appendChild(root);

  let lastNameIndex = -1;
  let lastCityIndex = -1;
  let hideTimer = null;

  function hide() {
    root.classList.remove('is-visible');
  }

  function showNext() {
    if (getCurrentStepNumber() < SHOW_FROM_STEP_NUMBER) return;

    lastNameIndex = pickDifferentIndex(SOCIAL_PROOF_NAMES.length, lastNameIndex);
    lastCityIndex = pickDifferentIndex(SOCIAL_PROOF_CITIES.length, lastCityIndex);
    const name = SOCIAL_PROOF_NAMES[lastNameIndex];
    const { city, uf } = SOCIAL_PROOF_CITIES[lastCityIndex];

    root.innerHTML = '';

    const icon = document.createElement('span');
    icon.className = 'social-proof-toast__icon';
    icon.textContent = '🛒';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('p');
    text.className = 'social-proof-toast__text';
    text.textContent = `${name} de ${city} - ${uf} acabou de comprar o guia +150 Looks!`;

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'social-proof-toast__close';
    closeBtn.setAttribute('aria-label', 'Fechar aviso');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', hide);

    root.append(icon, text, closeBtn);
    root.classList.add('is-visible');

    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, VISIBLE_DURATION_MS);
  }

  setTimeout(() => {
    showNext();
    setInterval(showNext, INTERVAL_MS);
  }, INITIAL_DELAY_MS);
}
