import { CONTENT } from '../data/content.data.js';
import { createOptionCard } from '../ui/optionCard.js';
import { createButton } from '../ui/button.js';
import { appendHighlightedText } from '../ui/highlightText.js';

export function render(container, ctx) {
  const content = CONTENT.pecas;
  const wrap = document.createElement('div');
  wrap.className = 'step step--choice';

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.className = 'step-subtitle';
  subtitle.textContent = content.subtitle;
  wrap.appendChild(subtitle);

  const selected = new Set(ctx.getAnswer('pecas') || []);

  const list = document.createElement('div');
  list.className = 'option-list option-list--list';

  const continueBtn = createButton({ label: content.cta, variant: 'primary' });
  continueBtn.disabled = selected.size === 0;

  function renderList() {
    list.innerHTML = '';
    content.options.forEach((opt) => {
      const card = createOptionCard({
        emoji: opt.emoji,
        label: opt.label,
        variant: 'list',
        multi: true,
        selected: selected.has(opt.value),
        onClick: () => {
          if (selected.has(opt.value)) {
            selected.delete(opt.value);
          } else {
            selected.add(opt.value);
          }
          ctx.setAnswer('pecas', Array.from(selected));
          continueBtn.disabled = selected.size === 0;
          renderList();
        },
      });
      list.appendChild(card);
    });
  }
  renderList();
  wrap.appendChild(list);

  continueBtn.addEventListener('click', () => {
    if (selected.size === 0) return;
    ctx.goNext();
  });
  wrap.appendChild(continueBtn);

  container.appendChild(wrap);
}
