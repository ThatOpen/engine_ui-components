import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "../..";

BUI.Manager.init();
CUI.Manager.init();

const worldComponent = document.querySelector<CUI.World>(
  "bim-world[name='main']",
)!;

const components = new OBC.Components();
worldComponent.components = components;
components.init();

const { world } = worldComponent;
console.log(world); // The world is only available after setting the components instance in bim-world
