import { createInitialState } from './state.js';
import { calculateResult } from '../data/scoring.data.js';
import { getGuideVersion } from '../data/guideVersion.data.js';
import { STYLE_LABELS } from '../data/scoring.data.js';
import { CONTENT } from '../data/content.data.js';
import { createProgressBar, setProgress } from '../ui/progressBar.js';

// Progresso visível apenas entre a Etapa 2 e a Etapa 19 (spec, seção 5).
const PROGRESS_START_NUMBER = 2;
const PROGRESS_END_NUMBER = 19;

export function createQuizEngine({ steps, mountEl }) {
  const state = createInitialState();

  mountEl.innerHTML = '';

  const shell = document.createElement('div');
  shell.className = 'quiz-shell';

  const chrome = document.createElement('div');
  chrome.className = 'quiz-chrome';

  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'quiz-back';
  backBtn.textContent = '← Voltar';
  backBtn.addEventListener('click', () => goBack());

  const progressTrack = createProgressBar(0);
  progressTrack.classList.add('quiz-progress');

  chrome.append(backBtn, progressTrack);

  const stepContainer = document.createElement('div');
  stepContainer.className = 'quiz-step-container';

  shell.append(chrome, stepContainer);
  mountEl.appendChild(shell);

  function getAnswer(key) {
    return state.answers[key];
  }

  function setAnswer(key, value) {
    state.answers[key] = value;
  }

  function getName() {
    return state.answers.nome || '';
  }

  function getResult() {
    return calculateResult(state.answers);
  }

  function getStyleLabel(styleKey) {
    const key = styleKey || getResult().primary;
    return STYLE_LABELS[key];
  }

  function getGuideVersionForState() {
    return getGuideVersion(state.answers.rotina);
  }

  function getOptionLabel(stepId, value) {
    const step = CONTENT[stepId];
    if (!step || !step.options) return '';
    const opt = step.options.find((o) => o.value === value);
    return opt ? opt.label : '';
  }

  const ctx = {
    answers: state.answers,
    getAnswer,
    setAnswer,
    getName,
    getResult,
    getStyleLabel,
    getGuideVersion: getGuideVersionForState,
    getOptionLabel,
    goNext,
    goBack,
  };

  function currentStepNumber() {
    return state.currentStepIndex + 1;
  }

  // Uma etapa pode retornar uma função de limpeza (ex.: cancelar um timer)
  // executada antes da próxima etapa ser renderizada.
  let currentCleanup = null;

  function renderChrome(step) {
    backBtn.style.display = step.showBack ? '' : 'none';
    progressTrack.style.display = step.showProgress ? '' : 'none';
    if (step.showProgress) {
      const pct =
        ((step.number - PROGRESS_START_NUMBER) / (PROGRESS_END_NUMBER - PROGRESS_START_NUMBER)) * 100;
      setProgress(progressTrack, pct);
    }
  }

  function renderCurrentStep() {
    if (currentCleanup) {
      currentCleanup();
      currentCleanup = null;
    }
    const step = steps[state.currentStepIndex];
    stepContainer.innerHTML = '';
    renderChrome(step);
    currentCleanup = step.render(stepContainer, ctx) || null;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function goNext() {
    if (state.currentStepIndex < steps.length - 1) {
      state.currentStepIndex += 1;
      renderCurrentStep();
    }
  }

  function goBack() {
    if (state.currentStepIndex > 0) {
      state.currentStepIndex -= 1;
      renderCurrentStep();
    }
  }

  renderCurrentStep();

  return {
    getCurrentStepNumber: currentStepNumber,
  };
}
