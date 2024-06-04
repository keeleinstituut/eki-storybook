import '../assets/scss/components/_radio-button.scss';

export interface RadioButton {
  name: string;
  count: number;
  radioBehind: boolean;
  onChange?: (event: Event) => void;
}

export const createRadioButton = ({
  name,
  count,
  radioBehind,
  onChange,
}: RadioButton): HTMLDivElement => {
  const selectedValue = "option-1";
  const container = document.createElement('div');

  for (let i = 0; i < count; i++) {
    const value = `option-${i + 1}`;

    const radioButtonContainer = document.createElement('div');
    radioButtonContainer.classList.add('radio-button-container');

    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'radioButtonsDefault';
    radioButton.value = value;
    radioButton.checked = value === selectedValue;

    if (onChange) {
      radioButton.addEventListener('change', onChange);
    }

    const labelElement = document.createElement('label');
    labelElement.htmlFor = value;
    labelElement.textContent = `${name} ${i + 1}`;
    
    radioButton.id = value;

    if(radioBehind) {
      radioButtonContainer.appendChild(labelElement);
      radioButtonContainer.appendChild(radioButton);
    } else {
      radioButtonContainer.appendChild(radioButton);
      radioButtonContainer.appendChild(labelElement);
    }

    container.appendChild(radioButtonContainer);
  }

  return container;
}
