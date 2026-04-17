/* MD
   ## Managing your loaded models 🏢
  ---
  Developers building a multi-model BIM viewer need a panel that lists every loaded model with metadata and lets users remove them — but wiring the model list to load and dispose events, displaying schema tags, and adding a download action requires plumbing that distracts from the actual application logic.

  The models list factory produces a table that stays in sync with the Fragment manager automatically, showing each loaded model's metadata and exposing configurable per-row actions.

  This tutorial covers setting up the Fragment loader and adding models to the scene on load; creating the models list with a schema metadata tag and a download action enabled; placing the list inside a panel alongside a load button; and composing everything into a grid layout next to the viewport.

  By the end, you'll have a model management panel that lists every loaded model with its schema tag and a download button, updating automatically as models are loaded or removed.
*/

import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
// You have to import from "@thatopen/ui-obc"
import * as BUIC from "../..";

/* MD
  ### 📋 Initializing the UI
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
*/

BUI.Manager.init();

/* MD
  ### 🌎 Setting up a simple scene
  ---

  We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial.
*/

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);
const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBC.SimpleRenderer
>();
world.name = "main";

const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const viewport = document.createElement("bim-viewport");
const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

const viewerGrids = components.get(OBC.Grids);
viewerGrids.create(world);

components.init();

/* MD

  ### Setting up the components
  First of all, we're going to get the `FragmentIfcLoader` from an existing components instance:
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();

/* MD
  The step above is super important as none of the existing functional components setup any tool, they just get it as they are! So, if we don't setup the `FragmentIfcLoader` then the wasm path is not going to be defined and an error will arise 🤓. Just after we have setup the loader, let's then configure the `FragmentManager` so any time a model is loaded it gets added to some world scene created before: 
  */

// `FragmentsManager.getWorker()` fetches the matching worker for this library version from unpkg and returns a blob URL.
// You can also pass your own URL to `fragments.init(...)` if you'd rather host the worker yourself.
const workerUrl = await OBC.FragmentsManager.getWorker();
const fragments = components.get(OBC.FragmentsManager);
fragments.init(workerUrl);

world.camera.controls.addEventListener("update", () => fragments.core.update());

fragments.list.onItemSet.add(async ({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  await fragments.core.update(true);
});

// Remove z fighting
fragments.core.models.materials.list.onItemSet.add(({ value: material }) => {
  if (!("isLodMaterial" in material && material.isLodMaterial)) {
    material.polygonOffset = true;
    material.polygonOffsetUnits = 1;
    material.polygonOffsetFactor = Math.random();
  }
});

/* MD
  ### Creating the models list component
  Allright! Now that some basic events are setup, it's time to create a new fresh models list component:
  */

const [modelsList] = BUIC.tables.modelsList({
  components,
  metaDataTags: ["schema"],
  actions: { download: true },
});

/* MD
  Now that we have a brand new models list created, we need to add it to the HTML page. For it, let's create simple BIM panel component where we include the models list and also a pre-made IFC load button 👇
  */

const panel = BUI.Component.create(() => {
  const [loadFragBtn] = BUIC.buttons.loadFrag({ components });

  return BUI.html`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${loadFragBtn}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${modelsList}
    </bim-panel-section>
   </bim-panel> 
  `;
});

/* MD
  Finally, let's append the BIM Panel to the page to see the models list working 😉
  */

const app = document.createElement("bim-grid") as BUI.Grid<["main"]>;
app.layouts = {
  main: {
    template: `
      "panel viewport"
      / 23rem 1fr
    `,
    elements: { panel, viewport },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  Congratulations! You've now a ready to go user interface that let's you show and dispose IFC models loaded into your app 🥳
  */
