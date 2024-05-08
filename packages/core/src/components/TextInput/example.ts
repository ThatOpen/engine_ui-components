import * as BUI from "../..";

BUI.Manager.registerComponents();

const nameInput = document.querySelector<BUI.TextInput>(
  "bim-text-input[name='name']",
)!;

nameInput.addEventListener("input", () => {
  console.log("asd");
});
