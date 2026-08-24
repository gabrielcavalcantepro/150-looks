import { CONTENT } from '../data/content.data.js';
import { PROJECTION_IMAGE_BEFORE, PROJECTION_IMAGE_AFTER } from '../data/placeholders.data.js';
import { createButton } from '../ui/button.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { appendHighlightedText } from '../ui/highlightText.js';

function createProjectionColumn({ src, label, sublabel }) {
  const col = document.createElement('div');
  col.className = 'projection-images__col';
  col.appendChild(createMediaSlot({ src, alt: `${label}: ${sublabel}`, aspectRatio: '3 / 4' }));

  const caption = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = label;
  const sub = document.createElement('span');
  sub.textContent = sublabel;
  caption.append(strong, sub);
  col.appendChild(caption);

  return col;
}

function stripTrailingArrow(label) {
  return (label || '').replace(/\s*›\s*$/, '');
}

export function render(container, ctx) {
  const content = CONTENT.projecao;
  const wrap = document.createElement('div');
  wrap.className = 'step step--reveal';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'step-eyebrow';
  eyebrow.textContent = content.eyebrow;
  wrap.appendChild(eyebrow);

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, content.title, content.titleHighlight);
  wrap.appendChild(title);

  const callout = document.createElement('p');
  callout.className = 'step-callout';
  callout.textContent = content.callout;
  wrap.appendChild(callout);

  const imagesRow = document.createElement('div');
  imagesRow.className = 'projection-images';
  imagesRow.append(
    createProjectionColumn({
      src: PROJECTION_IMAGE_BEFORE,
      label: content.chart.fromLabel,
      sublabel: content.chart.fromSublabel,
    }),
    createProjectionColumn({
      src: PROJECTION_IMAGE_AFTER,
      label: content.chart.toLabel,
      sublabel: content.chart.toSublabel,
    })
  );
  wrap.appendChild(imagesRow);

  const ocasiaoLabel = stripTrailingArrow(ctx.getOptionLabel('ocasiao', ctx.getAnswer('ocasiao')));

  const paragraph = document.createElement('p');
  paragraph.className = 'step-paragraph';
  paragraph.appendChild(document.createTextNode('🎊 Seguindo o guia, '));
  const nameStrong = document.createElement('strong');
  nameStrong.textContent = ctx.getName();
  paragraph.appendChild(nameStrong);
  paragraph.appendChild(document.createTextNode(' pode chegar em '));
  const ocasiaoStrong = document.createElement('strong');
  ocasiaoStrong.textContent = ocasiaoLabel;
  paragraph.appendChild(ocasiaoStrong);
  paragraph.appendChild(
    document.createTextNode(` com looks que combinam 100% com o seu estilo ${ctx.getStyleLabel()}!`)
  );
  wrap.appendChild(paragraph);

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  container.appendChild(wrap);
}
