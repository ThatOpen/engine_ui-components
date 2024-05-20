import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";

BUI.Manager.init();
CUI.Manager.init();

const components = new OBC.Components();
const worlds = components.get(OBC.Worlds);
const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBC.SimpleRenderer
>();

world.scene = new OBC.SimpleScene(components);
world.scene.setup();
const viewport = document.createElement("bim-viewport");
world.renderer = new OBC.SimpleRenderer(components, viewport);
world.camera = new OBC.SimpleCamera(components);

viewport.addEventListener("resize", () => {
  world.renderer?.resize();
  world.camera.updateAspect();
});

components.init();

const scene2D = document.createElement("bim-scene-2d");

const app = document.getElementById("app") as BUI.Grid;
app.layouts = {
  main: {
    template: `
      "scene2D"
    `,
    elements: { scene2D },
  },
};

const grids = components.get(OBC.Grids);
grids.create(world);

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
const file = await fetch("/resources/small.ifc");
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = await ifcLoader.load(buffer);
scene2D.scene.add(model);
