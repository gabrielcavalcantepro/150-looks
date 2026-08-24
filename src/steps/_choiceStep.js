import { createOptionCard } from '../ui/optionCard.js';
import { appendHighlightedText } from '../ui/highlightText.js';

// Renderiza uma etapa single-select ou grid-select genérica. Etapas com
// necessidades muito específicas (multi-select, interstícios, captura de
// nome, etc.) têm seus próprios módulos em vez de usar este helper.
export function renderChoiceStep(
  container,
  ctx,
  { content, answerKey, layout = 'list', tag, eyebrow, interpolateTitle, footnoteVariant }
) {
  const wrap = document.createElement('div');
  wrap.className = 'step step--choice';

  if (tag) {
    const tagEl = document.createElement('span');
    tagEl.className = 'step-tag';
    tagEl.textContent = tag;
    wrap.appendChild(tagEl);
  }

  if (eyebrow) {
    const eyebrowEl = document.createElement('p');
    eyebrowEl.className = 'step-eyebrow';
    eyebrowEl.textContent = eyebrow;
    wrap.appendChild(eyebrowEl);
  }

  const title = document.createElement('h1');
  title.className = 'step-title';
  const titleText = interpolateTitle ? interpolateTitle(content.title) : content.title;
  appendHighlightedText(title, titleText, content.titleHighlight);
  wrap.appendChild(title);

  if (content.subtitle) {
    const subtitle = document.createElement('p');
    subtitle.className = 'step-subtitle';
    subtitle.textContent = content.subtitle;
    wrap.appendChild(subtitle);
  }

  const list = document.createElement('div');
  list.className = `option-list option-list--${layout}`;
  content.options.forEach((opt) => {
    const card = createOptionCard({
      emoji: opt.emoji,
      label: opt.label,
      sublabel: opt.sublabel,
      imageKey: opt.imageKey,
      variant: layout,
      selected: ctx.getAnswer(answerKey) === opt.value,
      onClick: () => {
        ctx.setAnswer(answerKey, opt.value);
        ctx.goNext();
      },
    });
    list.appendChild(card);
  });
  wrap.appendChild(list);

  if (content.footnote) {
    const foot = document.createElement('p');
    if (footnoteVariant === 'tip') {
      foot.className = 'tip-box';
      const icon = document.createElement('span');
      [icon.textContent] = content.footnote.match(/^\S+/) || [''];
      const text = document.createElement('span');
      text.textContent = content.footnote.replace(/^\S+\s*/, '');
      foot.append(icon, text);
    } else {
      foot.className = 'step-footnote';
      foot.textContent = content.footnote;
    }
    wrap.appendChild(foot);
  }

  container.appendChild(wrap);
}
