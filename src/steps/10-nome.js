import { CONTENT } from '../data/content.data.js';
import { createButton } from '../ui/button.js';

export function render(container, ctx) {
  const content = CONTENT.nome;
  const wrap = document.createElement('div');
  wrap.className = 'step step--capture';

  const kicker = document.createElement('p');
  kicker.className = 'step-kicker';
  kicker.textContent = content.kicker;
  wrap.appendChild(kicker);

  const title = document.createElement('h1');
  title.className = 'step-title';
  title.textContent = content.title;
  wrap.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.className = 'step-subtitle';
  subtitle.textContent = content.subtitle;
  wrap.appendChild(subtitle);

  const form = document.createElement('form');
  form.className = 'capture-form';
  form.noValidate = true;

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'nome';
  input.className = 'text-input';
  input.placeholder = content.inputLabel;
  input.autocomplete = 'given-name';
  input.value = ctx.getAnswer('nome') || '';
  input.required = true;
  form.appendChild(input);

  const submitBtn = createButton({ label: content.cta, variant: 'primary', type: 'submit' });
  form.appendChild(submitBtn);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) {
      input.focus();
      return;
    }
    ctx.setAnswer('nome', value);
    ctx.goNext();
  });

  wrap.appendChild(form);

  const footnote = document.createElement('p');
  footnote.className = 'step-footnote';
  footnote.textContent = content.footnote;
  wrap.appendChild(footnote);

  container.appendChild(wrap);
  input.focus();
}
