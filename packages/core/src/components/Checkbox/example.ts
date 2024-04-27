/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.UIManager.registerComponents();

const checkbox = document.body.querySelector<BUI.Checkbox>("bim-checkbox")!;
checkbox.addEventListener("change", () => {
  const { checked } = checkbox;
  alert(checked ? "You want BIM Tiles! :)" : "You don't want BIM Tiles :(");
});
