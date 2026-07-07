import * as BUI from "../..";

BUI.Manager.init();

// --- programmatic set value ---
const niProg = document.getElementById("ni-prog") as BUI.NumberInput;
document.getElementById("btn-inc")?.addEventListener("click", () => {
  niProg.value = Math.min((niProg.value ?? 0) + 1, 50);
});
document.getElementById("btn-dec")?.addEventListener("click", () => {
  niProg.value = Math.max((niProg.value ?? 0) - 1, 1);
});
document.getElementById("btn-reset")?.addEventListener("click", () => {
  niProg.value = 1;
});

// --- change event ---
const niEvent = document.getElementById("ni-event") as BUI.NumberInput;
const eventOutput = document.getElementById("event-output") as BUI.Label;
niEvent.addEventListener("change", () => {
  eventOutput.textContent = `value: ${niEvent.value}`;
});
