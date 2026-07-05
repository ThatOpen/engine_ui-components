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
