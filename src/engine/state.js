// Estado do quiz vive só na memória da página (sem localStorage): um
// reload sempre volta pra Etapa 1, como na maioria dos quiz de anúncio.
export function createInitialState() {
  return { currentStepIndex: 0, answers: {} };
}
