import * as BUI from "../..";

BUI.Manager.init();

const container = document.getElementById("context-container");
container?.addEventListener("click", () => {
  const menu = container.querySelector<BUI.ContextMenu>("bim-context-menu");
  if (!menu) return;
  menu.visible = !menu.visible;
});
