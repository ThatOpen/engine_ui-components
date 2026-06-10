import * as BUI from "../..";

BUI.Manager.init();

const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "tabler:sun" : "tabler:moon";
});

// --- toggle hidden ---
const tbProg = document.getElementById("tb-prog") as BUI.Toolbar;
document.getElementById("btn-toggle-hidden")?.addEventListener("click", () => {
  tbProg.hidden = !tbProg.hidden;
});

// --- toggle labels-hidden ---
const tbLabels = document.getElementById("tb-labels") as BUI.Toolbar;
document.getElementById("btn-toggle-labels")?.addEventListener("click", () => {
  tbLabels.labelsHidden = !tbLabels.labelsHidden;
});

// --- hiddenchange event ---
const tbEvent = document.getElementById("tb-event") as BUI.Toolbar;
const eventOutput = document.getElementById("event-output") as BUI.Label;
document.getElementById("btn-event-toggle")?.addEventListener("click", () => {
  tbEvent.hidden = !tbEvent.hidden;
});
tbEvent.addEventListener("hiddenchange", () => {
  eventOutput.textContent = `hiddenchange — hidden: ${tbEvent.hidden}`;
});
