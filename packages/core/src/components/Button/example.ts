import * as BUI from "../..";
import { icons as customIcons } from "../../../../../resources/custom-icons.json";

BUI.Manager.init();
BUI.Manager.addIconsCollection({
  circle: { body: '<circle fill="currentColor" cx="12" cy="12" r="10"/>' },
  ...customIcons,
});

// --- theme toggle ---
const themeToggle = document.getElementById("theme-toggle") as BUI.Button;
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("bim-ui-dark");
  html.classList.toggle("bim-ui-dark", !isDark);
  html.classList.toggle("bim-ui-light", isDark);
  themeToggle.icon = isDark ? "solar:sun-bold" : "solar:moon-bold";
});

// --- toggle active ---
const btnToggle = document.getElementById("btn-toggle") as BUI.Button;
btnToggle.addEventListener("click", () => {
  btnToggle.active = !btnToggle.active;
});

// --- simulated async: loading state ---
const btnAsync = document.getElementById("btn-async") as BUI.Button;
btnAsync.addEventListener("click", () => {
  if (btnAsync.loading) return;
  btnAsync.loading = true;
  btnAsync.label = "Processing…";
  setTimeout(() => {
    btnAsync.loading = false;
    btnAsync.label = "Run process";
  }, 2500);
});

// --- programmatic context menu via contextMenuTemplate ---
// More efficient than declarative menus inside bim-table dataTransforms,
// because the template is only rendered when the menu is actually opened.
const btnDynamicMenu = document.getElementById("btn-dynamic-menu") as BUI.Button;
let openCount = 0;
const dynamicMenuTemplate = () => {
  openCount++;
  return BUI.html`
    <bim-context-menu>
      <bim-label style="
        display: block;
        padding: 0.25rem 0.5rem 0.375rem;
        --bim-label--c: var(--bim-ui_bg-contrast-60);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        margin-bottom: 0.125rem;
      ">Render #${openCount}</bim-label>
      <bim-button label="Favourite" icon="solar:star-bold"></bim-button>
      <bim-button label="Bookmark" icon="solar:bookmark-bold"></bim-button>
      <bim-button label="Share" icon="solar:share-bold"></bim-button>
      <bim-button label="Delete" icon="solar:trash-bin-trash-bold"
        style="--bim-label--c: var(--bim-ui_danger-base); --bim-icon--c: var(--bim-ui_danger-base);">
      </bim-button>
    </bim-context-menu>
  `;
};
btnDynamicMenu.contextMenuTemplate = dynamicMenuTemplate;

// --- click event demo ---
const btnEvent = document.getElementById("btn-event") as BUI.Button;
const eventOutput = document.getElementById("event-output") as BUI.Label;
let clickCount = 0;
btnEvent.addEventListener("click", () => {
  clickCount++;
  eventOutput.textContent = `click fired ×${clickCount}`;
});

// --- disabled button: confirm no click fires ---
const btnEventDisabled = document.getElementById("btn-event-disabled") as BUI.Button;
const eventDisabledOutput = document.getElementById("event-disabled-output") as BUI.Label;
btnEventDisabled.addEventListener("click", () => {
  eventDisabledOutput.textContent = "fired (unexpected!)";
});

// --- menuclose event ---
const btnMenuclose = document.getElementById("btn-menuclose") as BUI.Button;
const menuclosOutput = document.getElementById("menuclose-output") as BUI.Label;
let menucloseCount = 0;
btnMenuclose.addEventListener("menuclose", () => {
  menuclosOutput.textContent = `closed ${++menucloseCount} time(s)`;
});
