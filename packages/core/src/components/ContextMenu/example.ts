import * as BUI from "../..";

BUI.Manager.init();

// --- toggle visible programmatically ---
const btnProg = document.getElementById("btn-prog") as BUI.Button;
const menuProg = document.getElementById("menu-prog") as BUI.ContextMenu;
btnProg.addEventListener("click", () => {
  menuProg.visible = !menuProg.visible;
});

// --- removeMenus() ---
document.getElementById("btn-remove")?.addEventListener("click", () => {
  BUI.ContextMenu.removeMenus();
});

// --- visible / hidden events ---
const menuEvents = document.getElementById("menu-events") as BUI.ContextMenu;
const eventOutput = document.getElementById("event-output") as BUI.Label;
menuEvents.addEventListener("visible", () => {
  eventOutput.textContent = "visible fired";
});
menuEvents.addEventListener("hidden", () => {
  eventOutput.textContent = "hidden fired";
});
