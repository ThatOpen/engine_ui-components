import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
import * as CUI from "../..";

BUI.Manager.registerComponents();

const grid = document.querySelector("bim-grid")!;
grid.layouts = {
  main: `
    "c-panels-left viewer"
    "c-panels-left viewer"
    / 23rem 1fr
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

/* MD 
  ## Displaying elements grouping 📦
  ---
  */

const [classificationsTree, updateClassificationsTree] =
  CUI.tables.classificationTree({
    components,
    classifications: {},
  });

/* MD 
  Now that we have the classifications tree created, let's tell the `FragmentManager` that each time a model is loaded it needs to classify the model based on some conditions and also to update the classifications tree:
  */

const classifier = components.get(OBC.FragmentClassifier);

fragmentsManager.onFragmentsLoaded.add(async (model) => {
  await classifier.byIfcRel(
    model,
    WEBIFC.IFCRELCONTAINEDINSPATIALSTRUCTURE,
    "spatialStructures",
  );

  classifier.byEntity(model);
  await classifier.byPredefinedType(model);

  const classifications = {
    "Spatial Structure": ["spatialStructures", "entities"],
    Entities: ["entities", "predefinedTypes"],
  };

  updateClassificationsTree({ classifications });
});

/* MD
  Great! As we already told the UI when it needs to update, let's add the classifications tree to the HTML page. For it, let's create simple BIM panel component where we include the tree and also a pre-made IFC load button 👇
  */

const panel = BUI.Component.create(() => {
  const [loadIfcBtn] = CUI.buttons.loadIfc({ components });

  return BUI.html`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${loadIfcBtn}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${classificationsTree}
    </bim-panel-section>
   </bim-panel> 
  `;
});

/* MD
  :::tip

  If you haven't see it, take a look at the [LoadIfc]() button tutorial, is pretty simple to set up!

  :::

  Finally, let's append the BIM Panel to the page to see the classifications tree working 😉
  */

const leftPanelsContainer = grid.getContainer("panels", "left");
leftPanelsContainer.append(panel);

/* MD
  Congratulations! You've now a ready to go user interface that let's you show and dispose IFC models loaded into your app 🥳
  */
