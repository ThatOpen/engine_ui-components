/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init();

const dropdown = document.getElementById("my-dropdown-1") as BUI.Dropdown;
dropdown.addEventListener("change", () => {
  const value = dropdown.value as string[];
  alert(`You've selected: ${value.join(", ")}.`);
});

const myDropdown = document.getElementById("my-dropdown-2") as BUI.Dropdown;
for (let index = 0; index < 300; index++) {
  const option = document.createElement("bim-option");
  option.label = `Option ${index}`;
  option.value = index;
  myDropdown.append(option);
}

myDropdown.value = [100];
