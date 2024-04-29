/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.registerComponents();

const activationButtons = document.getElementById("activation-buttons")!;

const panelA = document.body.querySelector<BUI.Panel>(
  "bim-panel[name='panelA']",
)!;
const { activationButton: panelABtn } = panelA;
panelABtn.labelHidden = true;
activationButtons.append(panelABtn);

const logVectorBtn = document.getElementById("log-vector")!;
logVectorBtn.addEventListener("click", () => {
  alert(`Your vector is: ${JSON.stringify(panelA.value)}`);
});

const panelB = document.body.querySelector<BUI.Panel>(
  "bim-panel[name='panelB']",
)!;
const { activationButton: panelBBtn } = panelB;
panelBBtn.labelHidden = true;
activationButtons.append(panelBBtn);
