/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init();

const activationButtons = document.getElementById("activation-buttons")!;

const panelA = document.body.querySelector<BUI.Panel>(
  "bim-panel[name='panelA']",
)!;
// const { activationButton: panelABtn } = panelA;
// panelABtn.labelHidden = true;
// activationButtons.append(panelABtn);

const logVectorBtn = document.getElementById("log-vector")!;
logVectorBtn.addEventListener("click", () => {
  alert(`Your vector is: ${JSON.stringify(panelA.value)}`);
});

const panels = document.querySelectorAll("bim-panel");
for (const panel of panels) {
  const { activationButton } = panel;
  activationButton.labelHidden = true;
  activationButtons.append(activationButton);
}

const panelB = document.body.querySelector<BUI.Panel>(
  "bim-panel[name='panelB']",
)!;

panelB.valueTransform = {
  date: (value: string) => {
    if (value.trim() === "") return value;
    return new Date(value);
  },
};

console.log(panelB);
// const { activationButton: panelBBtn } = panelB;
// panelBBtn.labelHidden = true;
// activationButtons.append(panelBBtn);
