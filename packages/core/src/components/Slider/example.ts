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

// --- Basic ---
const continuous = document.getElementById("continuous") as BUI.Slider;
continuous.value = 50;

const stepped = document.getElementById("stepped") as BUI.Slider;
stepped.value = 40;

const steppedMarks = document.getElementById("stepped-marks") as BUI.Slider;
steppedMarks.value = 20;

// --- Value label ---
const alwaysOn = document.getElementById("always-on") as BUI.Slider;
alwaysOn.value = 75;

const formatPct = document.getElementById("format-pct") as BUI.Slider;
formatPct.value = 60;
formatPct.valueLabelFormat = (v) => `${v}%`;

// --- Range ---
const range = document.getElementById("range") as BUI.Slider;
range.value = [20, 80];

// --- Snap to marks ---
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = document.getElementById("month") as BUI.Slider;
month.step = null;
month.marks = MONTHS.map((label, value) => ({ value, label }));
month.valueLabelFormat = (v) => MONTHS[v] ?? String(v);
month.value = 0;

const PHASES = ["Foundation", "Structure", "Envelope", "MEP Systems", "Interior Finish", "Landscaping"];
const phaseMarks = PHASES.map((label, value) => ({ value, label }));

const phaseDiagonal = document.getElementById("phase-diagonal") as BUI.Slider;
phaseDiagonal.step = null;
phaseDiagonal.markLabelOrientation = "diagonal";
phaseDiagonal.marks = phaseMarks;
phaseDiagonal.valueLabelFormat = (v) => PHASES[v] ?? String(v);
phaseDiagonal.value = 0;

const phaseVertical = document.getElementById("phase-vertical") as BUI.Slider;
phaseVertical.step = null;
phaseVertical.markLabelOrientation = "vertical";
phaseVertical.marks = phaseMarks;
phaseVertical.valueLabelFormat = (v) => PHASES[v] ?? String(v);
phaseVertical.value = 0;

// --- Events ---
const evtChange = document.getElementById("evt-change") as BUI.Slider;
const outChange = document.getElementById("out-change") as BUI.Label;
evtChange.value = 30;
evtChange.addEventListener("change", () => {
  outChange.textContent = `change → ${evtChange.value}`;
});

const evtCommitted = document.getElementById("evt-committed") as BUI.Slider;
const outCommitted = document.getElementById("out-committed") as BUI.Label;
evtCommitted.value = 30;
evtCommitted.addEventListener("changecommitted", () => {
  outCommitted.textContent = `committed → ${evtCommitted.value}`;
});
