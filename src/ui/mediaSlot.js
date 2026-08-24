import { createImagePlaceholder } from './imagePlaceholder.js';

// Slot de mídia: renderiza a imagem real quando `src` estiver preenchido em
// placeholders.data.js, ou um placeholder editável enquanto `src` for null.
export function createMediaSlot({ src, alt, aspectRatio = '4 / 5', shape } = {}) {
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.className = 'media-slot__image';
    img.style.aspectRatio = aspectRatio;
    if (shape === 'circle') img.classList.add('media-slot__image--circle');
    return img;
  }

  const placeholder = createImagePlaceholder(alt, aspectRatio);
  if (shape === 'circle') placeholder.classList.add('image-placeholder--circle');
  return placeholder;
}
