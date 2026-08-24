export function createCompareTable({ headers, rows }) {
  const table = document.createElement('table');
  table.className = 'compare-table';

  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  headers.forEach((h) => {
    const th = document.createElement('th');
    th.textContent = h;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  rows.forEach(([a, b]) => {
    const row = document.createElement('tr');
    const tdA = document.createElement('td');
    tdA.textContent = a;
    const tdB = document.createElement('td');
    tdB.textContent = b;
    row.append(tdA, tdB);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}
