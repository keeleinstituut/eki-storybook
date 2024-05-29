import './css/button.css';

export interface Button {
  buttonSize?: 'small' | 'medium';
  buttonLabel?: string;
  iconDisplay?: boolean;
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: string;
  onClick?: () => void;
}

export const createButton = ({
  buttonSize = 'medium',
  buttonLabel,
  iconDisplay = false,
  iconOnly = false,
  iconPosition = 'left',
  icon,
  onClick,
}: Button) => {
  const btn = document.createElement('button');
  btn.type = 'button';

  const iconElement = icon ? document.createElement('i') : null;
  
  if (iconElement && icon) {
    iconElement.setAttribute('data-feather', icon);
  }

  if (iconOnly && iconElement) {
    btn.appendChild(iconElement);
  } else {
    const labelText = document.createElement('span');
    
    if(buttonLabel) {
      labelText.innerText = buttonLabel;
    }

    if (iconDisplay && iconElement) {
      if (iconPosition === 'left') {
        btn.appendChild(iconElement);
        btn.appendChild(labelText);
      } else {
        btn.appendChild(labelText);
        btn.appendChild(iconElement);
      }
    } else {
      btn.appendChild(labelText);
    }
  }

  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  btn.className = ['storybook-button', `storybook-button--${buttonSize}`].join(' ');

  return btn;
};
