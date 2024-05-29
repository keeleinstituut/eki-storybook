import "./css/button.css";

export interface Button {
  buttonSize?: "small" | "medium";
  buttonLabel: string;
  iconDisplay?: boolean;
  iconOnly?: boolean;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export const createButton = ({
  buttonSize = "medium",
  buttonLabel,
  iconDisplay = false,
  iconOnly = false,
  iconPosition = "left",
  onClick,
}: Button) => {
  const btn = document.createElement("button");
  btn.type = "button";

  const labelText = document.createElement("span");
  labelText.innerText = buttonLabel;

  if (iconDisplay && !iconOnly) {
    const iconElement = document.createElement("i");
    iconElement.className = "storybook-button__icon";

    if (iconPosition === "left") {
      btn.appendChild(iconElement);
      btn.appendChild(labelText);
    } else {
      btn.appendChild(labelText);
      btn.appendChild(iconElement);
    }
  } else {
    btn.appendChild(labelText);
  }

  if (onClick) {
    btn.addEventListener("click", onClick);
  }

  btn.className = ["storybook-button", `storybook-button--${buttonSize}`].join(" ");

  return btn;
};
