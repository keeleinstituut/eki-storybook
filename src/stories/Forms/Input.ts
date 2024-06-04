import '../assets/scss/components/_input.scss';

export interface Input {
  inputLabel: string;
  inputIconDisplay?: boolean;
  inputIconPosition?: 'left' | 'right';
  inputIcon?: string;
}

export const createInput = ({
  inputLabel,
  inputIconDisplay = false,
  inputIconPosition = 'left',
  inputIcon = '',
}: Input): HTMLDivElement => {
  const inputContainer = document.createElement('div');
  
  if (inputLabel) {
    const label = document.createElement('label');
    label.htmlFor = 'inputField';
    label.innerText = inputLabel;
    inputContainer.appendChild(label);
  }

  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input-wrapper');
  
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'inputField';
  input.id = 'inputField';
  input.classList.add('input-field');
  
  if (inputIconDisplay && inputIcon) {
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-feather', inputIcon);
    
    if (inputIconPosition === 'left') {
      inputWrapper.appendChild(iconElement);
      inputWrapper.appendChild(input);
    } else {
      inputWrapper.appendChild(input);
      inputWrapper.appendChild(iconElement);
    }
  } else {
    inputWrapper.appendChild(input);
  }

  inputContainer.appendChild(inputWrapper);
  
  return inputContainer;
};
