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

// --- toggle checked programmatically ---
const cbToggle = document.getElementById("cb-toggle") as BUI.Checkbox;
const btnToggle = document.getElementById("btn-toggle") as BUI.Button;
btnToggle.addEventListener("click", () => {
  cbToggle.checked = !cbToggle.checked;
});

// --- set indeterminate programmatically ---
const cbIndet = document.getElementById("cb-indet") as BUI.Checkbox;
const btnIndet = document.getElementById("btn-indet") as BUI.Button;
btnIndet.addEventListener("click", () => {
  cbIndet.indeterminate = true;
  cbIndet.checked = false;
});

// --- change event ---
const cbEvent = document.getElementById("cb-event") as BUI.Checkbox;
const eventOutput = document.getElementById("event-output") as BUI.Label;
cbEvent.addEventListener("change", () => {
  eventOutput.textContent = `change fired — checked: ${cbEvent.checked}`;
});

// --- value getter ---
const cbValue = document.getElementById("cb-value") as BUI.Checkbox;
const valueOutput = document.getElementById("value-output") as BUI.Label;
cbValue.addEventListener("change", () => {
  valueOutput.textContent = `value: ${cbValue.value}`;
});
