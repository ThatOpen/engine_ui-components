import * as BUI from "../..";

BUI.Manager.init();

// --- theme toggle ---
const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});

// --- value propio en options ---
const selValue = document.getElementById("sel-value") as BUI.Selector;
selValue.addEventListener("change", () => {
  console.log("Camera value:", selValue.value); // 0, 1, or "custom"
});

// --- programmatic set value ---
const selProg = document.getElementById("sel-prog") as BUI.Selector;
document.getElementById("btn-a")?.addEventListener("click", () => { selProg.value = "a"; });
document.getElementById("btn-b")?.addEventListener("click", () => { selProg.value = "b"; });
document.getElementById("btn-c")?.addEventListener("click", () => { selProg.value = "c"; });

// --- change event ---
const selEvent = document.getElementById("sel-event") as BUI.Selector;
const eventOutput = document.getElementById("event-output") as BUI.Label;
selEvent.addEventListener("change", () => {
  eventOutput.textContent = `value: ${selEvent.value}`;
});
