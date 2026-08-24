export function createImagePlaceholder(label, aspectRatio = '4 / 5') {
  const box = document.createElement('div');
  box.className = 'image-placeholder';
  box.style.aspectRatio = aspectRatio;

  const icon = document.createElement('span');
  icon.className = 'image-placeholder__icon';
  icon.textContent = '🖼️';
  icon.setAttribute('aria-hidden', 'true');

  const text = document.createElement('span');
  text.className = 'image-placeholder__label';
  text.textContent = `[IMAGEM: ${label}]`;

  box.append(icon, text);
  return box;
}
