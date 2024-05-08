import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";

BUI.Manager.registerComponents();

const grid = document.getElementById("grid") as BUI.Grid;
grid.layouts = {
  main: `
  "c-panels-properties viewer" 1fr
  "c-panels-properties viewer" 1fr
  /25rem 1fr
  `,
};

grid.layout = "main";

const viewport = document.getElementById("viewer-container") as BUI.Viewport;

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create();
const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

/* MD 
  ## Displaying data the right way 🔥🔥
  ---
  What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!

  ### Loading a model and computing it's relations
  First things first... let's load a model 👇
  */

const ifcLoader = components.get(OBC.FragmentIfcLoader);
await ifcLoader.setup();
const file = await fetch("/resources/testing.ifc");
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

/* MD
  :::tip

  You don't need to load the model into the scene to display its properties.

  :::

  Now, in order to get the most out of the entities table, you need to calculate the relations index of your model. To do it, you will need to use the [IfcRelationsIndexer]() component from `@thatopen/components` to speed up the process.
  */

const indexer = components.get(OBC.IfcRelationsIndexer);
await indexer.process(model);

const [propertiesTable] = CUI.tables.elementProperties({
  components,
  model,
  expressID: 141,
});

const propertiesPanel = BUI.Component.create(() => {
  return BUI.html`
  <bim-panel label="Properties">
    <bim-panel-section label="Element Data">
      <bim-selector-input>
        <bim-option label="Instance" checked></bim-option>
        <bim-option label="Type"></bim-option>
      </bim-selector-input> 
      ${propertiesTable}
    </bim-panel-section>
  </bim-panel>
  `;
});

const propertiesContainer = grid.getContainer("panels", "properties");
propertiesContainer.append(propertiesPanel);
