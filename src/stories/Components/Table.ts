import { createPagination } from './Pagination';
import '../assets/scss/components/_table.scss';
import feather from 'feather-icons';

export interface Table {
  title: string;
  columns: number;
  rows: number;
  showDescription: boolean;
  tableSize: 'small' | 'medium';
  description: string;
  smallHeadSwitch: boolean;
  smallBodySwitch: boolean;
  checkbox: boolean;
  expandable: boolean;
  expandableText: string;
  showHead: boolean;
  overflow: boolean;
  pagination: boolean;
}

export const createTable = ({
  title = 'Table Title',
  columns = 3,
  rows = 3,
  showDescription = false,
  description = 'Additional description if required',
  tableSize = 'medium',
  smallHeadSwitch = false,
  smallBodySwitch = false,
  checkbox = false,
  expandable = false,
  expandableText = 'Add text',
  showHead = true,
  overflow = false,
  pagination = false,
}: Table): HTMLDivElement => {
  const wrapper = document.createElement('div');
  const container = document.createElement('div');
  const tableHead = document.createElement('div');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  wrapper.classList.add('table__wrapper');
  container.classList.add('table__container');
  tableHead.classList.add('table__head');
  table.classList.add('table');
  tableHead.innerHTML = `<div class="table__title">${title}</div>`;

  if (showDescription) tableHead.innerHTML += `<span class="table__description">${description}</span>`;

  let rowSelector: HTMLElement | null = null;
  if (checkbox) {
    rowSelector = document.createElement('div');
    rowSelector.classList.add('table__selector');
    rowSelector.style.display = 'none';

    const selectedCount = document.createElement('span');
    selectedCount.classList.add('table__selected-count');
    selectedCount.textContent = '0 items selected';

    const trashButton = document.createElement('button');
    trashButton.classList.add('table__trash-btn');
    
    const trashIcon = document.createElement('i');
    trashIcon.setAttribute('data-feather', 'trash-2');
    trashIcon.classList.add('table__trash-icon');
    trashButton.appendChild(trashIcon);

    trashButton.addEventListener('click', () => {
      const checkboxes = table.querySelectorAll('.table__checkbox') as NodeListOf<HTMLInputElement>;
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.closest('tr')?.classList.remove('selected');
      });
      updateSelectedCount();
    });

    rowSelector.appendChild(selectedCount);
    rowSelector.appendChild(trashButton);
    container.appendChild(rowSelector);
  }

  container.appendChild(tableHead);

  if (showHead) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    if (expandable) headerRow.innerHTML = '<th></th>';

    for (let i = 0; i < columns; i++) {
      const th = document.createElement('th');
      if (checkbox && i === 0) {
        th.classList.add('table__cell', 'table__cell--checkbox');
        th.innerHTML = `<input type="checkbox" class="table__checkbox"> Head`;
        const headerCheckbox = th.querySelector('input') as HTMLInputElement;

        headerCheckbox.addEventListener('change', (e) => {
          const checkboxes = table.querySelectorAll('.table__checkbox') as NodeListOf<HTMLInputElement>;
          const isChecked = (e.target as HTMLInputElement).checked;
          checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
            checkbox.closest('tr')?.classList.toggle('selected', isChecked);
          });
          updateSelectedCount();
          if (isChecked) {
            headerRow.classList.add('selected');
          } else {
            headerRow.classList.remove('selected');
          }
        });
      } else {
        th.textContent = 'Head';
      }

      if (smallHeadSwitch || tableSize === 'small') th.classList.add('small'); // Add 'small' class if tableSize is 'small'
      headerRow.appendChild(th);
    }

    headerRow.addEventListener('click', () => {
      const isSelected = headerRow.classList.contains('selected');
      if (isSelected) {
        headerRow.classList.remove('selected');
        const checkboxes = table.querySelectorAll('.table__checkbox') as NodeListOf<HTMLInputElement>;
        checkboxes.forEach(checkbox => {
          checkbox.checked = false;
          checkbox.closest('tr')?.classList.remove('selected');
        });
      } else {
        headerRow.classList.add('selected');
        const checkboxes = table.querySelectorAll('.table__checkbox') as NodeListOf<HTMLInputElement>;
        checkboxes.forEach(checkbox => {
          checkbox.checked = true;
          checkbox.closest('tr')?.classList.add('selected');
        });
      }
      updateSelectedCount();
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
  }

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    row.classList.add('table__row');

    if (expandable) {
      const expandableTd = document.createElement('td');
      expandableTd.classList.add('table__toggle');
      if (smallBodySwitch || tableSize === 'small') expandableTd.classList.add('small');
      const button = document.createElement('button');
      const icon = document.createElement('i');
      icon.setAttribute('data-feather', 'chevron-down');
      button.appendChild(icon);
      expandableTd.appendChild(button);
      row.appendChild(expandableTd);

      const expandedRow = document.createElement('tr');
      expandedRow.innerHTML = `<td colspan="${columns + (expandable ? 1 : 0)}" class="expandable-row">${expandableText}</td>`;
      expandedRow.style.display = 'none';
      tbody.appendChild(row);
      tbody.insertBefore(expandedRow, row.nextSibling);

      button.addEventListener('click', (e) => {
        e.stopPropagation();
      
        expandedRow.style.display = expandedRow.style.display === 'table-row' ? 'none' : 'table-row';
        const isExpanded = expandedRow.style.display === 'table-row';
        icon.setAttribute('data-feather', isExpanded ? 'chevron-up' : 'chevron-down');
        feather.replace();
        
        row.classList.toggle('table__row--expanded', isExpanded);
      });
    } else {
      tbody.appendChild(row);
    }

    for (let j = 0; j < columns; j++) {
      const td = document.createElement('td');
      if (checkbox && j === 0) {
        td.innerHTML = `<input type="checkbox" class="table__checkbox"> Cell`;
        td.querySelector('input')?.addEventListener('change', (e) => {
          row.classList.toggle('selected', (e.target as HTMLInputElement).checked);
          updateSelectedCount();
          updateHeaderSelection();
        });
      } else {
        td.textContent = 'Cell';
      }
      if (smallBodySwitch || tableSize === 'small') td.classList.add('small'); // Add 'small' class if tableSize is 'small'
      td.classList.add('table__cell');
      row.appendChild(td);

      if (checkbox) {
        row.addEventListener('click', (e) => {
          const checkbox = row.querySelector('.table__checkbox') as HTMLInputElement;
          if (e.target !== checkbox) {
            checkbox.checked = !checkbox.checked;
          }
          row.classList.toggle('selected', checkbox.checked);
          updateSelectedCount();
          updateHeaderSelection();
        });
      }
    }

    if (overflow) {
      const overflowTd = document.createElement('td');
      overflowTd.classList.add('table__overflow');

      const overflowContainer = document.createElement('span');
      
      const overflowIcon = document.createElement('i');
      overflowIcon.setAttribute('data-feather', 'more-vertical');
      overflowContainer.appendChild(overflowIcon);
      row.appendChild(overflowTd);

      overflowTd.appendChild(overflowContainer);
    }
  }

  const updateSelectedCount = () => {
    const selectedRows = container.querySelectorAll('.table__row.selected').length;
    const selectedCount = container.querySelector('.table__selected-count') as HTMLElement;
    selectedCount.textContent = `${selectedRows} items selected`;

    if (selectedRows > 0) {
      rowSelector?.style.setProperty('display', 'flex');
    } else {
      rowSelector?.style.setProperty('display', 'none');
    }
  };

  const updateHeaderSelection = () => {
    const headerRow = table.querySelector('thead tr');
    const checkboxes = table.querySelectorAll('.table__checkbox') as NodeListOf<HTMLInputElement>;
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
      headerRow?.classList.add('selected');
    } else {
      headerRow?.classList.remove('selected');
    }
  };

  table.appendChild(tbody);
  container.appendChild(table);
  wrapper.appendChild(container);

  if (pagination) {
    wrapper.appendChild(createPagination({
      count: 7,
      shape: 'rounded',
      showArrows: true,
      showAll: true,
    }));
  }

  setTimeout(() => feather.replace(), 100);
  return wrapper;
};
