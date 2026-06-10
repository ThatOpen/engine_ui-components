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
const tiRequired = document.getElementById("ti-required") as BUI.TextInput;
const tiMinlen = document.getElementById("ti-minlen") as BUI.TextInput;
const tiEmail = document.getElementById("ti-email") as BUI.TextInput;
const validationOutput = document.getElementById("validation-output") as BUI.Label;

tiRequired.validation = (v) => ({
  valid: v.length > 0,
  message: "Este campo es obligatorio.",
});

tiMinlen.validation = (v) => ({
  valid: v.length >= 3,
  message: "Mínimo 3 caracteres.",
});

tiEmail.validation = (v) => ({
  valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  message: "Ingresa un email válido.",
});

const updateValidationOutput = () => {
  const allValid = [tiRequired, tiMinlen, tiEmail].every((ti) => ti.isValid);
  validationOutput.textContent = allValid ? "✓ todos válidos" : "✗ hay errores";
};

for (const ti of [tiRequired, tiMinlen, tiEmail]) {
  ti.addEventListener("input", updateValidationOutput);
}

// --- debounce ---
const tiDebounce = document.getElementById("ti-debounce") as BUI.TextInput;
const debounceOutput = document.getElementById("debounce-output") as BUI.Label;
tiDebounce.addEventListener("input", () => {
  debounceOutput.textContent = `value: "${tiDebounce.value}"`;
});

// --- programmatic set value / clear / focus ---
const tiProg = document.getElementById("ti-prog") as BUI.TextInput;
document.getElementById("btn-set")?.addEventListener("click", () => {
  tiProg.value = "IfcWall — Level 1";
});
document.getElementById("btn-clear")?.addEventListener("click", () => {
  tiProg.value = "";
});
document.getElementById("btn-focus")?.addEventListener("click", () => {
  tiProg.focus();
});

// --- input event ---
const tiEvent = document.getElementById("ti-event") as BUI.TextInput;
const eventOutput = document.getElementById("event-output") as BUI.Label;
tiEvent.addEventListener("input", () => {
  eventOutput.textContent = `value: "${tiEvent.value}"`;
});
