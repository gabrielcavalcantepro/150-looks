// Substitui os dois tokens dinâmicos reconhecidos pelo arquivo de conteúdo
// ([Nome] e [ESTILO_RESULTADO]) pelo valor real, conforme a legenda de
// quiz-estilo-textos-etapas.md. [SUBSTITUIR] e [EM ABERTO] NÃO são tratados
// aqui — permanecem literais na tela, pois marcam conteúdo pendente.
export function interpolate(text, ctx) {
  if (!text) return text;
  let out = text;
  if (out.includes('[Nome]')) {
    out = out.replaceAll('[Nome]', ctx.getName());
  }
  if (out.includes('[ESTILO_RESULTADO]')) {
    out = out.replaceAll('[ESTILO_RESULTADO]', ctx.getStyleLabel());
  }
  return out;
}
