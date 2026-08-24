import { CONTENT } from '../data/content.data.js';
import { STYLE_LABELS } from '../data/scoring.data.js';
import { createCompareTable } from '../ui/compareTable.js';
import { createButton } from '../ui/button.js';
import { appendHighlightedText } from '../ui/highlightText.js';
import { interpolate } from '../engine/interpolate.js';

function stripTrailingArrow(label) {
  return (label || '').replace(/\s*›\s*$/, '');
}

function createInfoCard(...children) {
  const card = document.createElement('div');
  card.className = 'info-card';
  card.append(...children);
  return card;
}

export function render(container, ctx) {
  const content = CONTENT.diagnostico;
  const result = ctx.getResult();
  const wrap = document.createElement('div');
  wrap.className = 'step step--result';

  const banner = document.createElement('div');
  banner.className = 'top-banner top-banner--stack';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'step-eyebrow';
  eyebrow.textContent = content.eyebrow;
  banner.appendChild(eyebrow);

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, interpolate(content.title, ctx), ctx.getStyleLabel());
  banner.appendChild(title);

  wrap.appendChild(banner);

  // 📊 Seu Perfil de Estilo — gráfico de compatibilidade
  const chartTitle = document.createElement('h2');
  chartTitle.className = 'step-subheading';
  chartTitle.textContent = content.profileChartTitle;

  const totalScore = Object.values(result.scores).reduce((sum, v) => sum + v, 0) || 1;
  const primaryPct = Math.round((result.scores[result.primary] / totalScore) * 100);

  const chartWrap = document.createElement('div');
  chartWrap.className = 'style-chart';

  const primaryRow = document.createElement('div');
  primaryRow.className = 'style-chart__row';
  const primaryLabel = document.createElement('span');
  primaryLabel.className = 'style-chart__label';
  primaryLabel.textContent = `${STYLE_LABELS[result.primary]} (${primaryPct}%)`;
  const primaryTrack = document.createElement('div');
  primaryTrack.className = 'style-chart__track';
  const primaryFill = document.createElement('div');
  primaryFill.className = 'style-chart__fill';
  primaryFill.style.width = `${primaryPct}%`;
  primaryTrack.appendChild(primaryFill);
  primaryRow.append(primaryLabel, primaryTrack);
  chartWrap.appendChild(primaryRow);

  if (result.secondary) {
    const secondaryPct = Math.round((result.scores[result.secondary] / totalScore) * 100);
    const secondaryRow = document.createElement('div');
    secondaryRow.className = 'style-chart__row';
    const secondaryLabel = document.createElement('span');
    secondaryLabel.className = 'style-chart__label';
    secondaryLabel.textContent = `${STYLE_LABELS[result.secondary]} (${secondaryPct}%)`;
    const secondaryTrack = document.createElement('div');
    secondaryTrack.className = 'style-chart__track';
    const secondaryFill = document.createElement('div');
    secondaryFill.className = 'style-chart__fill style-chart__fill--secondary';
    secondaryFill.style.width = `${secondaryPct}%`;
    secondaryTrack.appendChild(secondaryFill);
    secondaryRow.append(secondaryLabel, secondaryTrack);
    chartWrap.appendChild(secondaryRow);
  }

  wrap.appendChild(createInfoCard(chartTitle, chartWrap));

  // 👗 Seu Perfil de Estilo — resumo de respostas
  const summaryTitle = document.createElement('h2');
  summaryTitle.className = 'step-subheading';
  summaryTitle.textContent = content.profileSummaryTitle;

  const objetivoLabel = ctx.getOptionLabel('motivo', ctx.getAnswer('motivo'));
  const rotinaLabel = ctx.getOptionLabel('rotina', ctx.getAnswer('rotina'));
  const pecasLabels = (ctx.getAnswer('pecas') || [])
    .map((value) => ctx.getOptionLabel('pecas', value))
    .filter(Boolean)
    .join(', ');

  const summaryList = document.createElement('ul');
  summaryList.className = 'summary-list';
  [
    ['Objetivo', objetivoLabel],
    ['Rotina', rotinaLabel],
    ['Peças-chave pro seu estilo', pecasLabels],
    ['Versão do guia', ctx.getGuideVersion()],
  ].forEach(([label, value]) => {
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    strong.textContent = `${label}: `;
    li.appendChild(strong);
    li.append(value);
    summaryList.appendChild(li);
  });

  wrap.appendChild(createInfoCard(summaryTitle, summaryList));

  wrap.appendChild(createCompareTable(content.table));

  const projectionTitle = document.createElement('h2');
  projectionTitle.className = 'step-subheading';
  projectionTitle.textContent = content.projectionTitle;

  const prazoLabel = stripTrailingArrow(ctx.getOptionLabel('prazo', ctx.getAnswer('prazo')));
  const projectionText = document.createElement('p');
  projectionText.className = 'step-paragraph';
  projectionText.textContent = content.projectionText.replace(
    '[prazo escolhido na Etapa 19]',
    prazoLabel
  );

  wrap.appendChild(createInfoCard(projectionTitle, projectionText));

  const cta = createButton({ label: content.cta, variant: 'primary', onClick: () => ctx.goNext() });
  wrap.appendChild(cta);

  container.appendChild(wrap);
}
