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
const marksHorizontal = document.getElementById("marks-horizontal") as BUI.Slider;
marksHorizontal.step = null;
marksHorizontal.marks = [0, 20, 40, 60, 80, 100].map((value) => ({
  value,
  label: String(value),
}));
marksHorizontal.value = 0;

const diagonalMarks = [0, 10, 20, 30, 40, 50].map((value) => ({
  value,
  label: String(value),
}));

const marksDiagonal = document.getElementById("marks-diagonal") as BUI.Slider;
marksDiagonal.step = null;
marksDiagonal.markLabelOrientation = "diagonal";
marksDiagonal.marks = diagonalMarks;
marksDiagonal.value = 0;

const marksVertical = document.getElementById("marks-vertical") as BUI.Slider;
marksVertical.step = null;
marksVertical.markLabelOrientation = "vertical";
marksVertical.marks = diagonalMarks;
marksVertical.value = 0;

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
