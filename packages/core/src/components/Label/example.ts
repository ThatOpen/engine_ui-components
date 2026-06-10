import * as BUI from "../..";

BUI.Manager.init();

const labelProp = document.getElementById("label-prop") as BUI.Label;
labelProp.label = "Set via .label property";

const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});
