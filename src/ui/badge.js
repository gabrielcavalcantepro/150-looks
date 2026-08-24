export function createBadge(text, variant = 'default') {
  const span = document.createElement('span');
  span.className = `badge badge--${variant}`;
  span.textContent = text;
  return span;
}
