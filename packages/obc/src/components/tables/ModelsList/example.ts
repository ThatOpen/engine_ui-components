import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "../..";

BUI.Manager.init();

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);
const world = worlds.create();

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
  ## Managing your loaded models 🏢
  ---
  What else can we say? The task is really simple: we need to see a list of the loaded models in the app. Let's get into it!

  ### Setting up the components
  First of all, we're going to get the `FragmentIfcLoader` from an existing components instance:
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();

/* MD
  The step above is super important as none of the existing functional components setup any tool, they just get it as they are! So, if we don't setup the `FragmentIfcLoader` then the wasm path is not going to be defined and an error will arise 🤓. Just after we have setup the loader, let's then configure the `FragmentManager` so any time a model is loaded it gets added to some world scene created before: 
  */

const fragmentsManager = components.get(OBC.FragmentsManager);
fragmentsManager.onFragmentsLoaded.add((model) => {
  if (world.scene) world.scene.three.add(model);
});

/* MD
  ### Creating the models list component
  Allright! Now that some basic events are setup, it's time to create a new fresh models list component:
  */

const [modelsList] = CUI.tables.modelsList({
  components,
  tags: { schema: true, viewDefinition: false },
  actions: { download: false },
});

/* MD
  Now that we have a brand new models list created, we need to add it to the HTML page. For it, let's create simple BIM panel component where we include the models list and also a pre-made IFC load button 👇
  */

const panel = BUI.Component.create(() => {
  const [loadIfcBtn] = CUI.buttons.loadIfc({ components });

  return BUI.html`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${loadIfcBtn}
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

const app = document.createElement("bim-grid");
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
