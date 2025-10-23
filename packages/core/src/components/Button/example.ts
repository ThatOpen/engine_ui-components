/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init();

const btn = document.body.querySelector<BUI.Button>("bim-button")!;
btn.addEventListener("click", () => {
  alert("Your schedule has been created!");
});

const contextBtn = document.getElementById("context-btn") as BUI.Button;
contextBtn.addEventListener("click", () => {
  console.log("asdasd");
});

// Programatically context menu
// Way better for performance, specially on heavy nestings on bim-tables dataTransform

const contextMenuTemplate = () => {
  const onCreated = (e?: Element) => {
    if (!e) return
    const btn = e as BUI.Button
    btn.contextMenuTemplate = contextMenuTemplate
  }
  return BUI.html`<bim-context-menu style="gap: 0.5rem;">
    <bim-label style="white-space: normal; width: 10rem; text-align: center;">This is way more efficient, specially on bim-tables dataTransforms where many rows will have the same menu inside. Keep clicking the button below 👇</bim-label>
    <bim-button ${BUI.ref(onCreated)} label="Display more nestings"></bim-button>
  </bim-context-menu>`
}

const testingBtn = document.getElementById("context-testing") as BUI.Button
testingBtn.contextMenuTemplate = contextMenuTemplate