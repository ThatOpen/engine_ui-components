import * as BUI from "../..";

BUI.Manager.init();

// --- theme toggle ---
const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "tabler:sun" : "tabler:moon";
});

// --- validation ---
const ddValMin = document.getElementById("dd-val-min") as BUI.Dropdown;
ddValMin.validation = (value) =>
  value.length >= 2
    ? { valid: true }
    : { valid: false, message: "Select at least 2 categories." };

const ddValCombo = document.getElementById("dd-val-combo") as BUI.Dropdown;
ddValCombo.validation = (value) =>
  value.includes("Hidden")
    ? { valid: false, message: "Hidden is not allowed in this context." }
    : { valid: true };

// --- search-box: populate with IFC entities ---
const ddSearch = document.getElementById("dd-search") as BUI.Dropdown;
const ifcEntities = [
  "IfcWall", "IfcSlab", "IfcBeam", "IfcColumn", "IfcWindow", "IfcDoor",
  "IfcRoof", "IfcStair", "IfcRamp", "IfcSpace", "IfcBuildingStorey",
  "IfcBuilding", "IfcSite", "IfcProject", "IfcCovering", "IfcRailing",
];
for (const entity of ifcEntities) {
  const option = document.createElement("bim-option") as BUI.Option;
  option.label = entity;
  ddSearch.append(option);
}
ddSearch.value = ["IfcWall"];

// --- dynamic options ---
const ddDynamic = document.getElementById("dd-dynamic") as BUI.Dropdown;
const dynamicOutput = document.getElementById("dynamic-output") as BUI.Label;
let optCounter = 3;

const refreshDynamicOutput = () => {
  const val = ddDynamic.value as string[];
  dynamicOutput.textContent = val.length ? `[${val.join(", ")}]` : "—";
};

ddDynamic.addEventListener("change", refreshDynamicOutput);
refreshDynamicOutput();

document.getElementById("btn-add-opt")?.addEventListener("click", () => {
  const opt = document.createElement("bim-option") as BUI.Option;
  opt.label = `Option ${String.fromCharCode(64 + optCounter++)}`;
  ddDynamic.append(opt);
  refreshDynamicOutput();
});

document.getElementById("btn-remove-opt")?.addEventListener("click", () => {
  const last = [...ddDynamic.children].filter(c => c.tagName === "BIM-OPTION").at(-1);
  last?.remove();
  // change fires via _syncOptions if the removed option was selected
});

// --- programmatic set value ---
const ddProg = document.getElementById("dd-prog") as BUI.Dropdown;
document.getElementById("btn-set-one")?.addEventListener("click", () => {
  ddProg.value = ["IfcWall"];
});
document.getElementById("btn-set-multi")?.addEventListener("click", () => {
  ddProg.value = ["IfcSlab", "IfcBeam"];
});
document.getElementById("btn-clear")?.addEventListener("click", () => {
  ddProg.value = [];
});

// --- large list ---
const ddLarge = document.getElementById("dd-large") as BUI.Dropdown;
for (let i = 0; i < 300; i++) {
  const option = document.createElement("bim-option") as BUI.Option;
  option.label = `Option ${i}`;
  option.value = i;
  ddLarge.append(option);
}
ddLarge.value = [150];

// --- multipleLabel ---
const ddMultipleLabel = document.getElementById("dd-multiple-label") as BUI.Dropdown;
ddMultipleLabel.multipleLabel = (count) => `${count} entidades seleccionadas`;

// --- close event ---
const ddClose = document.getElementById("dd-close") as BUI.Dropdown;
const closeOutput = document.getElementById("close-output") as BUI.Label;
let closeCount = 0;
ddClose.addEventListener("close", () => {
  closeOutput.textContent = `closed ${++closeCount} time(s)`;
});

// --- change event ---
const ddEvent = document.getElementById("dd-event") as BUI.Dropdown;
const eventOutput = document.getElementById("event-output") as BUI.Label;
ddEvent.addEventListener("change", () => {
  const val = ddEvent.value as string[];
  eventOutput.textContent =
    val.length ? `value: [${val.join(", ")}]` : "value: []";
});
