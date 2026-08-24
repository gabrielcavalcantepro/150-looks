// Insere `text` num elemento, envolvendo a primeira ocorrência de
// `highlight` num <span class="text-highlight"> (nossa cor de destaque).
// Sem innerHTML — só nós de texto, então é seguro para conteúdo dinâmico.
export function appendHighlightedText(el, text, highlight) {
  if (!highlight) {
    el.appendChild(document.createTextNode(text));
    return;
  }

  const idx = text.indexOf(highlight);
  if (idx === -1) {
    el.appendChild(document.createTextNode(text));
    return;
  }

  const before = text.slice(0, idx);
  const after = text.slice(idx + highlight.length);

  if (before) el.appendChild(document.createTextNode(before));

  const span = document.createElement('span');
  span.className = 'text-highlight';
  span.textContent = highlight;
  el.appendChild(span);

  if (after) el.appendChild(document.createTextNode(after));
}
