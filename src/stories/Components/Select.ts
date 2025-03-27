import "choices.js/public/assets/styles/choices.min.css";
import Choices from "choices.js";
import "../assets/scss/components/_select.scss";

export interface Select {
  size: string;
  addLabel: boolean;
  optionsCount: number;
  selectState: string;
  checkbox: boolean;
  width: string;
  multipleSelect: boolean;
  valueDisplayStyle: string;
}

export const createSelect = ({ size, addLabel, optionsCount, selectState, multipleSelect, width, valueDisplayStyle }: Select): HTMLDivElement => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("select__wrapper", `select__wrapper--${size}`, `select__wrapper--${selectState}`, `dropdown--${width}`, `select__wrapper__values--${valueDisplayStyle}`);

  if ( addLabel === true ) {
    const labelElement = document.createElement("label");
    labelElement.textContent = "Label";
    labelElement.className = "select__label";

    wrapper.appendChild(labelElement);
  }

  if ( addLabel === false ) {
    wrapper.classList.add("select__wrapper--no-label");
  }

  const selectElement = document.createElement("select");
  selectElement.className = "select__dropdown";

  if (selectState === "disabled") {
    selectElement.disabled = true;
  }

  if (multipleSelect) {
    selectElement.multiple = true;
  }

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Label";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  for (let i = 1; i <= optionsCount; i++) {
    const optionElement = document.createElement("option");
    optionElement.value = `option-${i}`;
    optionElement.textContent = `Menu item`;
    optionElement.classList.add(valueDisplayStyle);
    selectElement.appendChild(optionElement);
  }

  wrapper.appendChild(selectElement);

  setTimeout(() => {
    const choices = new Choices(selectElement, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false,
      placeholder: true,
      placeholderValue: "Label",
      removeItemButton: false,
      duplicateItemsAllowed: false,
      removeItems: false,
    });

    if (selectState === "disabled") {
      choices.disable();
    }
  }, 0);

  return wrapper;
};
