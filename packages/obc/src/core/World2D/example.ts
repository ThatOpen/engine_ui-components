/* eslint import/no-extraneous-dependencies: 0 */
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";

BUI.Manager.init();
CUI.Manager.init();

const components = new OBC.Components();
components.init();

const world2d = document.createElement("bim-world-2d");
world2d.components = components;
world2d.gridOffsetX = 10000;

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `"world2d"`,
    elements: { world2d },
  },
};

app.layout = "main";
document.body.append(app);
