import '../assets/scss/components/_input.scss';

export interface Input {
  inputSize: 'large' | 'medium' | 'small';
  inputLabelDisplay?: boolean;
  inputLabel: string;
  inputIconDisplay?: boolean;
  inputIcon?: string;
  placeholder?: string;
  inputHelperTextDisplay?: boolean;
  inputHelperText?: string;
  inputDisabled?: boolean;
}

export const createInput = ({
  inputSize = 'large',
  inputLabelDisplay = false,
  inputLabel,
  inputIconDisplay = false,
  inputIcon = '',
  placeholder = '',
  inputHelperTextDisplay = false,
  inputHelperText = '',
  inputDisabled = false,
}: Input): HTMLDivElement => {
  const inputContainer = document.createElement('div');

  const inputClasses = [
    'input',
    `input--${inputSize}`
  ];
  
  if (inputLabelDisplay && inputLabel) {
    const label = document.createElement('label');
    label.htmlFor = 'inputField';
    label.innerText = inputLabel;
    label.classList.add('input__label');
    inputContainer.appendChild(label);
  }

  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input-wrapper');
  
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'inputField';
  input.id = 'inputField';
  input.classList.add('input-field');

  if (placeholder) {
    input.placeholder = placeholder;
  }

  if (inputDisabled) {
    input.disabled = true;
    inputContainer.classList.add('disabled')
  }
  
  if (inputIconDisplay && inputIcon) {
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-feather', inputIcon);

    inputWrapper.appendChild(iconElement);
    inputWrapper.appendChild(input);
    
  } else {
    inputWrapper.appendChild(input);
  }

  inputContainer.appendChild(inputWrapper);

  if (inputHelperTextDisplay && inputHelperText) {
    const helperText = document.createElement('span');
    helperText.classList.add('helper-text');
    helperText.innerText = inputHelperText;
    inputContainer.appendChild(helperText);
  }

  input.className = inputClasses.join(' ');
  
  return inputContainer;
};
