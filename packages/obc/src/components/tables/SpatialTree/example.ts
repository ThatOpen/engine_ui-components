/* MD
  ## Showing your model tree 🌲
  ---
  Architects and BIM coordinators navigating a large model need to understand its spatial hierarchy — which elements belong to which floor, zone, or space — but the 3D viewport alone gives no structural overview, and building a tree view that stays in sync with loaded models requires significant custom logic.

  The spatial tree factory reads the IFC spatial structure from any loaded Fragment model and renders it as an interactive nested table that updates automatically when models are added or removed.

  This tutorial covers setting up the Fragment loader and Highlighter with zoom-to-selection; creating the spatial tree with an initially empty model list; enabling preserve-structure on filter so the hierarchy stays visible during search; placing the tree in a panel with a load button and a debounced search input; and wiring a grid layout alongside the viewport.

  By the end, you'll have a spatial tree panel that populates automatically for every loaded model, stays synchronized with the scene, and supports live search across the hierarchy.
*/

import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
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

  ###💡 Getting the highlighter
  Now, we will basically get the highlighter and set it up. This will create and configure 2 things:

  - Selecting: when clicking on an element.
  - Hovering: when hovering the mouse over an element.
  */

const highlighter = components.get(OBCF.Highlighter);
highlighter.setup({ world });
highlighter.zoomToSelection = true;

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

  ### Creating the tree
  Doing this is extremely simple thanks to the information saved in the Fragments file and the power of the UI components from That Open Engine. To proceed with the creation, you can do the following 💪
*/

const [spatialTree] = BUIC.tables.spatialTree({
  components,
  models: [],
});

spatialTree.preserveStructureOnFilter = true;

/* MD 
  As you see, we've passed an empty models list because in the first place there are no models. However, the Spatial Tree updates it-self each time a new model comes into the scene! Which makes it really handy to work with.

  Great! As we already created the Spatial Tree instance, let's add it to the HTML page. For it, let's create simple BIM panel component where we include the tree and also a pre-made IFC load button 👇
*/

const panel = BUI.Component.create(() => {
  const [loadFragBtn] = BUIC.buttons.loadFrag({ components });

  const onSearch = (e: Event) => {
    const input = e.target as BUI.TextInput;
    spatialTree.queryString = input.value;
  };

  return BUI.html`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${loadFragBtn}
      <bim-text-input @input=${onSearch} placeholder="Search..." debounce="200"></bim-text-input>
      ${spatialTree}
    </bim-panel-section>
   </bim-panel> 
  `;
});

/* MD
  Finally, let's append the BIM Panel to the page to see the Spatial Tree working 😉
  */

const app = document.getElementById("app") as BUI.Grid<["main"]>;
app.layouts = {
  main: {
    template: `
      "panel viewport"
      / 30rem 1fr
    `,
    elements: { panel, viewport },
  },
};

app.layout = "main";

/* MD
  Congratulations! You've now a ready to go user interface that let's you show your model tree. 🥳
  */
