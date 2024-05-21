import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";

BUI.Manager.init();
CUI.Manager.init();

const components = new OBC.Components();
components.init();

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
const file = await fetch("/resources/small.ifc");
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = await ifcLoader.load(buffer);

const world2d = document.createElement("bim-world-2d");
world2d.components = components;
world2d.world!.scene.three.add(model);

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "world2d" 2fr
    "container" 1fr
    `,
    elements: { world2d },
  },
};

app.layout = "main";
document.body.append(app);
