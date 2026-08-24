export function createButton({ label, variant = 'primary', type = 'button', onClick, fullWidth = true } = {}) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.className = `btn btn--${variant}${fullWidth ? ' btn--full' : ''}`;
  btn.textContent = label;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}
