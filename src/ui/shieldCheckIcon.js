const SVG_NS = 'http://www.w3.org/2000/svg';

export function createShieldCheckIcon() {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');

  const shield = document.createElementNS(SVG_NS, 'path');
  shield.setAttribute(
    'd',
    'M12 2.5 4.5 5.5v5.6c0 5.2 3.3 9.6 7.5 10.9 4.2-1.3 7.5-5.7 7.5-10.9V5.5L12 2.5z'
  );
  shield.setAttribute('fill', 'currentColor');
  shield.setAttribute('fill-opacity', '0.15');
  shield.setAttribute('stroke', 'currentColor');
  shield.setAttribute('stroke-width', '1.5');
  shield.setAttribute('stroke-linejoin', 'round');

  const check = document.createElementNS(SVG_NS, 'path');
  check.setAttribute('d', 'M8.5 12.3l2.4 2.4 4.6-5');
  check.setAttribute('stroke', 'currentColor');
  check.setAttribute('stroke-width', '1.8');
  check.setAttribute('stroke-linecap', 'round');
  check.setAttribute('stroke-linejoin', 'round');
  check.setAttribute('fill', 'none');

  svg.append(shield, check);
  return svg;
}
