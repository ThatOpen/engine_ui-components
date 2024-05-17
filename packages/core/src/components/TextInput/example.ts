import * as BUI from "../..";

BUI.Manager.init();

const nameInput = document.querySelector<BUI.TextInput>(
  "bim-text-input[name='name']",
)!;

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});
