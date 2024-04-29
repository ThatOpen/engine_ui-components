/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.registerComponents();

const numberInput =
  document.body.querySelector<BUI.NumberInput>("bim-number-input")!;
numberInput.addEventListener("change", () => {
  const value = numberInput.value;
  console.log("Value is:", value);
});
