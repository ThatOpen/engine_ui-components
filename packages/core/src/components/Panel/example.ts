import * as BUI from "../..";

BUI.Manager.init();

// --- theme toggle ---
const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
themeToggle.onclick = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:moon-bold" : "solar:sun-bold";
};

// --- hidden toggle via bim-button ---
const panelA = document.getElementById("pA") as BUI.Panel;
const panelB = document.getElementById("pB") as BUI.Panel;
const btnToggleA = document.getElementById("btn-toggle-a") as BUI.Button;
const btnToggleB = document.getElementById("btn-toggle-b") as BUI.Button;

btnToggleA.onclick = () => {
  panelA.hidden = !panelA.hidden;
  btnToggleA.active = !panelA.hidden;
};
btnToggleB.onclick = () => {
  panelB.hidden = !panelB.hidden;
  btnToggleB.active = !panelB.hidden;
};

// --- value getter / setter ---
const panelValue = document.getElementById("panel-value") as BUI.Panel;
const valueOutput = document.getElementById("value-output") as HTMLElement;

document.getElementById("btn-get-value")?.addEventListener("click", () => {
  valueOutput.textContent = JSON.stringify(panelValue.value, null, 2);
});

// --- valueTransform ---
const panelTransform = document.getElementById("panel-transform") as BUI.Panel;
const transformOutput = document.getElementById("transform-output") as HTMLElement;

panelTransform.valueTransform = {
  startDate: (v: string) => (v.trim() ? new Date(v).toLocaleDateString() : "—"),
  endDate: (v: string) => (v.trim() ? new Date(v).toLocaleDateString() : "—"),
};

document.getElementById("btn-get-transform")?.addEventListener("click", () => {
  transformOutput.textContent = JSON.stringify(panelTransform.value, null, 2);
});

// --- scrollable showcase ---
const clashRows = [
  { data: { name: "Wall vs Pipe #1", status: "new" } },
  { data: { name: "Wall vs Pipe #2", status: "active" } },
  { data: { name: "Beam vs Duct #1", status: "new" } },
  { data: { name: "Beam vs Duct #2", status: "resolved" } },
  { data: { name: "Column vs Cable #1", status: "new" } },
  { data: { name: "Column vs Cable #2", status: "acknowledged" } },
];

const tableNoScroll = document.getElementById("table-no-scroll") as BUI.Table;
tableNoScroll.data = clashRows;

const tableDefaultScroll = document.getElementById("table-default-scroll") as BUI.Table;
tableDefaultScroll.data = clashRows;

const tableSectionScroll = document.getElementById("table-section-scroll") as BUI.Table;
tableSectionScroll.data = clashRows;


// --- collapseSections / expandSections ---
const panelCollapse = document.getElementById("panel-collapse") as BUI.Panel;
document.getElementById("btn-collapse-all")?.addEventListener("click", () => {
  panelCollapse.collapseSections();
});
document.getElementById("btn-expand-all")?.addEventListener("click", () => {
  panelCollapse.expandSections();
});

// --- hiddenchange event ---
const panelEvent = document.getElementById("panel-event") as BUI.Panel;
const eventOutput = document.getElementById("event-output") as BUI.Label;
const btnToggleEvent = document.getElementById("btn-toggle-event") as BUI.Button;

btnToggleEvent.onclick = () => {
  panelEvent.hidden = !panelEvent.hidden;
};

panelEvent.addEventListener("hiddenchange", () => {
  btnToggleEvent.active = !panelEvent.hidden;
  eventOutput.textContent = `hiddenchange — hidden: ${panelEvent.hidden}`;
});
