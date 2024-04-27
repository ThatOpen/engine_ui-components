/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.UIManager.registerComponents();

const selectorInput =
  document.body.querySelector<BUI.SelectorInput>("bim-selector-input")!;

const customOption = selectorInput.querySelector<BUI.Option>(
  "bim-option[label='Custom']",
)!;

const customOptionValue = { data: "Hi!" };
customOption.value = customOptionValue;

selectorInput.value = 0;

selectorInput.addEventListener("change", () => {
  const value = selectorInput.value;
  alert(`Your new camera projection is: ${JSON.stringify(value)}.`);
});
