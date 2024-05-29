import './css/radioButton.css';

export interface RadioButton {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: () => void;
}

export const createRadioButton = ({
  label,
  name,
  value,
  checked = false,
  onChange,
}: RadioButton) => {
  const labelElement = document.createElement('label');
  labelElement.className = 'radio-button';

  const inputElement = document.createElement('input');
  inputElement.type = 'radio';
  inputElement.name = name;
  inputElement.value = value;
  inputElement.checked = checked;

  if (onChange) {
    inputElement.addEventListener('change', onChange);
  }

  labelElement.appendChild(inputElement);
  labelElement.appendChild(document.createTextNode(label));

  return labelElement;
};
