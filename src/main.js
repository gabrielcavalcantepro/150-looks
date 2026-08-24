import { STEPS } from './config/steps.config.js';
import { createQuizEngine } from './engine/navigation.js';
import { initSocialProofToast } from './ui/socialProofToast.js';

const mountEl = document.getElementById('app');
const engine = createQuizEngine({ steps: STEPS, mountEl });

initSocialProofToast({ getCurrentStepNumber: engine.getCurrentStepNumber });
