export function createProgressBar(percent = 0) {
  const track = document.createElement('div');
  track.className = 'progress-bar';
  track.setAttribute('role', 'progressbar');
  track.setAttribute('aria-valuemin', '0');
  track.setAttribute('aria-valuemax', '100');

  const fill = document.createElement('div');
  fill.className = 'progress-bar__fill';
  track.appendChild(fill);

  setProgress(track, percent);
  return track;
}

export function setProgress(track, percent) {
  const clamped = Math.max(0, Math.min(100, percent));
  track.setAttribute('aria-valuenow', String(Math.round(clamped)));
  const fill = track.querySelector('.progress-bar__fill');
  if (fill) fill.style.width = `${clamped}%`;
}
