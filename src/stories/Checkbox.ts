import './assets/scss/components/_checkbox.scss';

export interface Checkbox {
  name: string;
  count: number;
  checkboxBehind: boolean;
  onChange?: (event: Event) => void;
}

export const createCheckbox = ({
  name,
  count,
  checkboxBehind,
  onChange,
}: Checkbox): HTMLDivElement => {
  const selectedValue = "option-1";
  const container = document.createElement('div');
  container.classList.add('checkbox-container');

  for (let i = 0; i < count; i++) {
    const value = `option-${i + 1}`;

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-button-container');

    const checkboxButton = document.createElement('input');
    checkboxButton.type = 'checkbox';
    checkboxButton.name = 'checkboxesDefault';
    checkboxButton.value = value;
    checkboxButton.checked = value === selectedValue;

    if (onChange) {
      checkboxButton.addEventListener('change', onChange);
    }

    const labelElement = document.createElement('label');
    labelElement.htmlFor = value;
    labelElement.textContent = `${name} ${i + 1}`;
    
    checkboxButton.id = value;

    if(checkboxBehind) {
      checkboxContainer.appendChild(labelElement);
      checkboxContainer.appendChild(checkboxButton);
    } else {
        checkboxContainer.appendChild(checkboxButton);
        checkboxContainer.appendChild(labelElement);
    }

    container.appendChild(checkboxContainer);
  }

  return container;
}
