/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.registerComponents();

const btn = document.body.querySelector<BUI.Button>("bim-button")!;
btn.addEventListener("click", () => {
  alert("Your schedule has been created!");
});
