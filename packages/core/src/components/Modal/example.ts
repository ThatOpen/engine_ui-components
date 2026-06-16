import * as BUI from "../..";
import { icons as customIcons } from "../../../../../resources/custom-icons.json";

BUI.Manager.init();
BUI.Manager.addIconsCollection({
  circle: { body: '<circle fill="currentColor" cx="12" cy="12" r="10"/>' },
  ...customIcons,
});

// --- theme toggle ---
const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const htmlEl = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("bim-ui-dark");
  htmlEl.classList.toggle("bim-ui-dark", !isDark);
  htmlEl.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});

// --- basic ---
const btnBasic = document.getElementById("btn-basic") as BUI.Button;
const modalBasic = document.getElementById("modal-basic") as BUI.Modal;
btnBasic.addEventListener("click", () => { modalBasic.open = true; });

// --- no header ---
const btnNoHeader = document.getElementById("btn-no-header") as BUI.Button;
const modalNoHeader = document.getElementById("modal-no-header") as BUI.Modal;
btnNoHeader.addEventListener("click", () => { modalNoHeader.open = true; });

// --- custom labels ---
const btnCustomLabels = document.getElementById("btn-custom-labels") as BUI.Button;
const modalCustomLabels = document.getElementById("modal-custom-labels") as BUI.Modal;
btnCustomLabels.addEventListener("click", () => { modalCustomLabels.open = true; });

// --- file conflict ---
const btnConflict = document.getElementById("btn-conflict") as BUI.Button;
const modalConflict = document.getElementById("modal-conflict") as BUI.Modal;
btnConflict.addEventListener("click", () => { modalConflict.open = true; });
modalConflict.addEventListener("confirm", () => {
  console.log("[modal] Create new version selected");
});
modalConflict.addEventListener("cancel", () => {
  console.log("[modal] Upload as new file selected");
});

// --- async confirm ---
const btnAsync = document.getElementById("btn-async") as BUI.Button;
const modalAsync = document.getElementById("modal-async") as BUI.Modal;
const asyncOutput = document.getElementById("async-output") as BUI.Label;
btnAsync.addEventListener("click", () => { modalAsync.open = true; });
modalAsync.addEventListener("confirm", async () => {
  modalAsync.loading = true;
  asyncOutput.textContent = "Uploading…";
  await new Promise(resolve => setTimeout(resolve, 2000));
  modalAsync.loading = false;
  modalAsync.open = false;
  asyncOutput.textContent = "Upload complete";
});
modalAsync.addEventListener("cancel", () => {
  asyncOutput.textContent = "Cancelled";
});

// --- events ---
const btnEvents = document.getElementById("btn-events") as BUI.Button;
const modalEvents = document.getElementById("modal-events") as BUI.Modal;
const eventOutput = document.getElementById("event-output") as BUI.Label;
btnEvents.addEventListener("click", () => { modalEvents.open = true; });
modalEvents.addEventListener("confirm", () => {
  modalEvents.open = false;
  eventOutput.textContent = "confirm fired";
});
modalEvents.addEventListener("cancel", () => {
  eventOutput.textContent = "cancel fired";
});

// --- custom bg ---
const btnCustomBg = document.getElementById("btn-custom-bg") as BUI.Button;
const modalCustomBg = document.getElementById("modal-custom-bg") as BUI.Modal;
btnCustomBg.addEventListener("click", () => { modalCustomBg.open = true; });
