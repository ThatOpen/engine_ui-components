import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "../..";

BUI.Manager.registerComponents();

const grid = document.querySelector("bim-grid")!;
grid.layouts = {
  main: `
    "c-panels-left viewer"
    "c-panels-left viewer"
    / 30rem 1fr
  `,
};

grid.layout = "main";

const components = new OBC.Components();

const viewerContainer = document.querySelector(
  "bim-viewport[name='viewer']",
) as BUI.Viewport;

const worlds = components.get(OBC.Worlds);
const world = worlds.create();

const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const rendererComponent = new OBC.SimpleRenderer(components, viewerContainer);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;

viewerContainer.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

const viewerGrids = components.get(OBC.Grids);
viewerGrids.create(world);

components.init();

const ifcLoader = components.get(OBC.FragmentIfcLoader);
await ifcLoader.setup();

const fragmentsManager = components.get(OBC.FragmentManager);
fragmentsManager.onFragmentsLoaded.add((model) => {
  if (world.scene) world.scene.three.add(model);
});

const [relationsTree] = CUI.tables.relationsTree({
  components,
  models: [],
});

const indexer = components.get(OBC.IfcRelationsIndexer);

fragmentsManager.onFragmentsLoaded.add(async (model) => {
  await indexer.process(model);
});

const panel = BUI.Component.create(() => {
  const [loadIfcBtn] = CUI.buttons.loadIfc({ components });

  return BUI.html`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${loadIfcBtn}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${relationsTree}
    </bim-panel-section>
   </bim-panel> 
  `;
});

const leftPanelsContainer = grid.getContainer("panels", "left");
leftPanelsContainer.append(panel);
