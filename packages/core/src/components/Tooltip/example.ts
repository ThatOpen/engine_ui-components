import * as BUI from "../..";

BUI.Manager.init();

// --- visible setter ---
const progTooltip = document.getElementById("prog-tooltip") as BUI.Tooltip;
document.getElementById("btn-toggle-visible")?.addEventListener("click", () => {
  progTooltip.visible = !progTooltip.visible;
});
