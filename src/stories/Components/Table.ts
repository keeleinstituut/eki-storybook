import '../assets/scss/components/_table.scss';

export interface Table {
  title: string;
  columns: number;
  rows: number;
  showDescription: boolean;
  description: string;
  smallHeadSwitch: boolean;
  smallBodySwitch: boolean;
  checkbox: boolean;
  showHead: boolean;
}

export const createTable = ({
  title = 'Table Title',
  columns = 3,
  rows = 3,
  showDescription = false,
  description = 'Additional description if required',
  smallHeadSwitch = false,
  smallBodySwitch = false,
  checkbox = false,
  showHead = true,
}: Table): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add('table__container');

  const tableHead = document.createElement('div');
  tableHead.classList.add('table__head');

  container.append(tableHead);

  const tableTitle = document.createElement('div');
  tableTitle.classList.add('table__title');
  tableTitle.textContent = title;

  tableHead.appendChild(tableTitle);

  if (showDescription) {
    const tableDescription = document.createElement('span');
    tableDescription.classList.add('table__description');
    tableDescription.textContent = description;

    tableHead.appendChild(tableDescription);
  }

  const table = document.createElement('table');
  table.classList.add('table');

  // Conditionally add the thead element based on showHead
  if (showHead) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    for (let i = 0; i < columns; i++) {
      const th = document.createElement('th');
      
      if (checkbox) {
        th.classList.add('table__cell--checkbox'); // Add class to all th cells if checkbox is true
      }

      if (i === 0 && checkbox) {
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('table__checkbox');
        th.appendChild(checkboxInput);
        th.appendChild(document.createTextNode(' Head'));

        checkboxInput.addEventListener('change', (event) => {
          if ((event.target as HTMLInputElement).checked) {
            headerRow.classList.add('selected');
          } else {
            headerRow.classList.remove('selected');
          }
        });

        headerRow.addEventListener('click', () => {
          if (checkbox) {
            headerRow.classList.toggle('selected');
          }
        });
      } else {
        th.textContent = 'Head';
      }

      headerRow.appendChild(th);

      if (smallHeadSwitch) {
        th.classList.add('small');
      }
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);
  }

  const tbody = document.createElement('tbody');

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < columns; j++) {
      const td = document.createElement('td');
      
      if (checkbox) {
        td.classList.add('table__cell--checkbox'); // Add class to all td cells if checkbox is true
      }

      if (j === 0 && checkbox) {
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('table__checkbox');
        td.appendChild(checkboxInput);
        td.appendChild(document.createTextNode(' Cell'));

        checkboxInput.addEventListener('change', (event) => {
          if ((event.target as HTMLInputElement).checked) {
            row.classList.add('selected');
          } else {
            row.classList.remove('selected');
          }
        });

        row.addEventListener('click', () => {
          if (checkbox) {
            row.classList.toggle('selected');
          }
        });
      } else {
        td.textContent = 'Cell';
      }

      td.classList.add('table__cell');
      row.appendChild(td);

      if (smallBodySwitch) {
        td.classList.add('small');
      }
    }
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  container.appendChild(table);

  return container;
};
