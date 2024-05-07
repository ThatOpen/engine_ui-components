/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.registerComponents();

const grid = document.body.querySelector<BUI.Grid>("bim-grid")!;
grid.layouts = {
  main: `
    "header header" 80px
    "sidebar content" 1fr
    / 80px 1fr
  `,
  app: `
    "c-toolbars-ribbon c-toolbars-ribbon c-toolbars-ribbon" 80px
    "c-panels-left viewport c-panels-right" 1fr
    "c-panels-left viewport c-panels-right" 1fr
    "c-panels-left c-panels-bottom c-panels-bottom" 1fr
    / 28rem 1fr 20rem
  `,
};

grid.addEventListener("layout-change", () => {
  if (grid.layout) {
    alert(`Your have changed to "${grid.layout}" layout!`);
  } else {
    alert(`Your have cleaned up your layout!`);
  }
});

const btn = document.body.querySelector<BUI.Button>("bim-button")!;
btn.addEventListener("click", () => {
  const { layout } = grid;
  switch (layout) {
    case undefined:
      grid.layout = "main";
      break;
    case "main":
      grid.layout = "app";
      break;
    case "app":
      grid.layout = undefined;
      break;
    default:
      console.log("No follow up action");
  }
});

const panelsContainer = grid.getContainer("panels", "left", true);

const panel = BUI.Component.create(() => {
  const onBtnClick = () => {
    alert("asdasd");
  };
  return BUI.html`
    <bim-panel label="My Panel!">
      <bim-panel-section label="Panel Section" icon="solar:settings-bold">
        <bim-button @click=${onBtnClick} label="Click me!"></bim-button>
        <bim-selector-input label="Click me!">
          <bim-option label="Option A"></bim-option>
          <bim-option label="Option B"></bim-option>
        </bim-selector-input>
      </bim-panel-section>
    </bim-panel>
  `;
});

panelsContainer.append(panel);
