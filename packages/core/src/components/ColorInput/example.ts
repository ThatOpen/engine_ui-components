import * as BUI from "../..";

BUI.Manager.init();

const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const htmlEl = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("bim-ui-dark");
  htmlEl.classList.toggle("bim-ui-dark", !isDark);
  htmlEl.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});

// --- set value programmatically ---
const ciProg = document.getElementById("ci-prog") as BUI.ColorInput;
document.getElementById("btn-red")?.addEventListener("click", () => {
  ciProg.value = { color: "#df4e4e", opacity: 80 };
});
document.getElementById("btn-green")?.addEventListener("click", () => {
  ciProg.value = { color: "#4edf6a", opacity: 80 };
});
document.getElementById("btn-blue")?.addEventListener("click", () => {
  ciProg.value = { color: "#4e8fdf", opacity: 80 };
});

// --- input event ---
const ciEvent = document.getElementById("ci-event") as BUI.ColorInput;
const eventOutput = document.getElementById("event-output") as BUI.Label;
ciEvent.addEventListener("input", () => {
  const { color, opacity } = ciEvent.value;
  eventOutput.textContent =
    opacity !== undefined
      ? `color: ${color}  opacity: ${opacity}%`
      : `color: ${color}`;
});
