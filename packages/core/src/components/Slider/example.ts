/* eslint-disable no-alert */
import * as BUI from "../..";

BUI.Manager.init();

// ── Continuous slider ──────────────────────────────────────────
const continuous = document.getElementById("continuous") as BUI.Slider;
continuous.value = 50;
continuous.addEventListener("change", () => {
  console.log("Continuous value:", continuous.value);
});

// ── Stepped slider with marks ──────────────────────────────────
const stepped = document.getElementById("stepped") as BUI.Slider;
stepped.value = 20;
stepped.addEventListener("change", () => {
  console.log("Stepped value:", stepped.value);
});

// ── Always-on value label with format ──────────────────────────
const alwaysOn = document.getElementById("always-on") as BUI.Slider;
alwaysOn.value = 75;
alwaysOn.valueLabelFormat = (v) => `${v}%`;
alwaysOn.addEventListener("changecommitted", () => {
  console.log("Opacity committed:", alwaysOn.value);
});

// ── Programmatic range mode example ────────────────────────────
const rangeSlider = document.createElement("bim-slider") as BUI.Slider;
rangeSlider.label = "Range (two thumbs)";
rangeSlider.min = 0;
rangeSlider.max = 100;
rangeSlider.step = 5;
rangeSlider.showMarks = true;
rangeSlider.value = [20, 80];
rangeSlider.valueLabelDisplay = "auto";
rangeSlider.style.width = "20rem";
rangeSlider.addEventListener("change", () => {
  const [start, end] = rangeSlider.value as [number, number];
  console.log(`Range: ${start} – ${end}`);
});
document.body.appendChild(rangeSlider);

// ── Snap-to-marks example (step=null) ──────────────────────────
const monthSlider = document.createElement("bim-slider") as BUI.Slider;
monthSlider.label = "Month";
monthSlider.min = 0;
monthSlider.max = 11;
monthSlider.step = null;
monthSlider.showMarks = false;
monthSlider.marks = [
  { value: 0, label: "Jan" },
  { value: 1, label: "Feb" },
  { value: 2, label: "Mar" },
  { value: 3, label: "Apr" },
  { value: 4, label: "May" },
  { value: 5, label: "Jun" },
  { value: 6, label: "Jul" },
  { value: 7, label: "Aug" },
  { value: 8, label: "Sep" },
  { value: 9, label: "Oct" },
  { value: 10, label: "Nov" },
  { value: 11, label: "Dec" },
];
monthSlider.valueLabelFormat = (v) => monthSlider.marks[v]?.label ?? String(v);
monthSlider.value = 0;
monthSlider.style.width = "20rem";
monthSlider.addEventListener("changecommitted", () => {
  console.log("Month:", monthSlider.value);
});
document.body.appendChild(monthSlider);

// ── Diagonal mark labels (many long labels) ────────────────────
const diagonalSlider = document.createElement("bim-slider") as BUI.Slider;
diagonalSlider.label = "Diagonal labels";
diagonalSlider.min = 0;
diagonalSlider.max = 5;
diagonalSlider.step = null;
diagonalSlider.markLabelOrientation = "diagonal";
diagonalSlider.marks = [
  { value: 0, label: "Foundation" },
  { value: 1, label: "Structure" },
  { value: 2, label: "Envelope" },
  { value: 3, label: "MEP Systems" },
  { value: 4, label: "Interior Finish" },
  { value: 5, label: "Landscaping" },
];
diagonalSlider.valueLabelFormat = (v) =>
  diagonalSlider.marks[v]?.label ?? String(v);
diagonalSlider.value = 0;
diagonalSlider.style.width = "20rem";
document.body.appendChild(diagonalSlider);

// ── Vertical mark labels ───────────────────────────────────────
const verticalLabels = document.createElement("bim-slider") as BUI.Slider;
verticalLabels.label = "Vertical labels";
verticalLabels.min = 0;
verticalLabels.max = 5;
verticalLabels.step = null;
verticalLabels.markLabelOrientation = "vertical";
verticalLabels.marks = [
  { value: 0, label: "Foundation" },
  { value: 1, label: "Structure" },
  { value: 2, label: "Envelope" },
  { value: 3, label: "MEP Systems" },
  { value: 4, label: "Interior Finish" },
  { value: 5, label: "Landscaping" },
];
verticalLabels.valueLabelFormat = (v) =>
  verticalLabels.marks[v]?.label ?? String(v);
verticalLabels.value = 0;
verticalLabels.style.width = "20rem";
document.body.appendChild(verticalLabels);
