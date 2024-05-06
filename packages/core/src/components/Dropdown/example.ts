/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.registerComponents();

const dropdown = document.body.querySelector<BUI.Dropdown>("bim-dropdown")!;
dropdown.addEventListener("change", () => {
  const value = dropdown.value as string[];
  alert(`You've selected: ${value.join(", ")}.`);
});
