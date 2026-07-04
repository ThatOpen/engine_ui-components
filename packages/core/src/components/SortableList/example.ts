import * as BUI from "../..";

BUI.Manager.init();

// ── Theme toggle ──────────────────────────────────────────────────
const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const htmlEl = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("bim-ui-dark");
  htmlEl.classList.toggle("bim-ui-dark", !isDark);
  htmlEl.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});

// ── Active + Available (default) ──────────────────────────────────
const defaultList = document.getElementById("default-list") as BUI.SortableList;

defaultList.items = [
  { id: "cluster", label: "Cluster by distance" },
  { id: "elementA", label: "Group by Element A" },
  { id: "elementB", label: "Group by Element B" },
  { id: "status", label: "Group by Status" },
];

// ── Sort only ─────────────────────────────────────────────────────
const sortOnlyList = document.getElementById("sort-only-list") as BUI.SortableList;
sortOnlyList.sortOnly = true;

sortOnlyList.items = [
  { id: "floor", label: "Floor" },
  { id: "discipline", label: "Discipline" },
  { id: "system", label: "System" },
];

// ── With icons ────────────────────────────────────────────────────
const iconsList = document.getElementById("icons-list") as BUI.SortableList;

iconsList.items = [
  { id: "layers", label: "Layers", icon: "mdi:layers" },
  { id: "search", label: "Clash Detection", icon: "mdi:layers-search" },
  { id: "properties", label: "Properties", icon: "mdi:format-list-bulleted" },
  { id: "ruler", label: "Measurements", icon: "mdi:ruler" },
];

// ── Events ────────────────────────────────────────────────────────
const eventsList = document.getElementById("events-list") as BUI.SortableList;
const eventsOutput = document.getElementById("events-output") as BUI.Label;

eventsList.items = [
  { id: "a", label: "Item A" },
  { id: "b", label: "Item B" },
  { id: "c", label: "Item C" },
];

eventsList.addEventListener("change", (e: Event) => {
  const ids = (e as CustomEvent<string[]>).detail;
  eventsOutput.textContent = `active: [${ids.join(", ")}]`;
});
