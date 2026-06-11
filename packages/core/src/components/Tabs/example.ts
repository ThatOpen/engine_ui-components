import * as BUI from "../..";

BUI.Manager.init();

const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});

// --- tabs.tab setter ---
const tabsProg = document.getElementById("tabs-prog") as BUI.Tabs;
document.getElementById("btn-alpha")?.addEventListener("click", () => { tabsProg.tab = "alpha"; });
document.getElementById("btn-beta")?.addEventListener("click", () => { tabsProg.tab = "beta"; });
document.getElementById("btn-gamma")?.addEventListener("click", () => { tabsProg.tab = "gamma"; });
document.getElementById("btn-hide")?.addEventListener("click", () => {
  // Setting tab to the currently active tab deselects it (hides content)
  tabsProg.tab = "hidden";
});

// --- tab.label dinámico ---
const tabDynamic = document.getElementById("tab-dynamic") as BUI.Tab;
const counterLabel = document.getElementById("counter-label") as BUI.Label;
let itemCount = 0;
document.getElementById("btn-add-item")?.addEventListener("click", () => {
  itemCount++;
  tabDynamic.label = `Items (${itemCount})`;
  counterLabel.textContent = `${itemCount} item(s) added.`;
});

// --- hiddenchange event ---
const tabEventA = document.getElementById("tab-event-a") as BUI.Tab;
const tabEventB = document.getElementById("tab-event-b") as BUI.Tab;
const eventOutput = document.getElementById("event-output") as BUI.Label;

for (const tab of [tabEventA, tabEventB]) {
  tab.addEventListener("hiddenchange", () => {
    if (!tab.hidden) {
      eventOutput.textContent = `hiddenchange — "${tab.name}" is now visible`;
    }
  });
}
