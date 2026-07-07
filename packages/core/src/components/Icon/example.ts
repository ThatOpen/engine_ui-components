import * as BUI from "../../..";

BUI.Manager.init();

const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const htmlEl = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("bim-ui-dark");
  htmlEl.classList.toggle("bim-ui-dark", !isDark);
  htmlEl.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});
