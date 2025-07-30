/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init("bim-button:nth-child(even), .btn-2");

const btn = document.body.querySelector<BUI.Button>("bim-button")!;
btn.addEventListener("click", () => {
  alert("Your schedule has been created!");
});

const contextBtn = document.getElementById("context-btn") as BUI.Button;
contextBtn.addEventListener("click", () => {
  console.log("asdasd");
});
