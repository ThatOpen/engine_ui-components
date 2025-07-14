/* MD
  ## Showing your model tree 🌲
  ---
  Among the most common things to do with BIM models, is to show their spatial structure. This is really important, because then you can know better the model and see how elements are hierarchized between them. 🔗 Let's learn how you can use the Spatial Tree!

  ### 🖖 Importing our Libraries

  In this tutorial, we will import:

  - @thatopen/components to set up the barebone of our app.
  - @thatopen/components-front to use some frontend-oriented components.
  - @thatopen/ui to add some simple and cool UI menus.
  - @thatopen/ui-obc to add some cool pre-made UI menus for components.
*/

import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as CUI from "../..";

BUI.Manager.init();

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

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();

const highlighter = components.get(OBF.Highlighter);
highlighter.setup({ world });
highlighter.zoomToSelection = true;

/* MD
  The step above is super important as none of the existing functional components setup any tool, they just get it as they are! So, if we don't setup the `FragmentIfcLoader` then the wasm path is not going to be defined and an error will arise 🤓. Just after we have setup the loader, let's then configure the `FragmentManager` so any time a model is loaded it gets added to some world scene created before: 
  */

const fragments = components.get(OBC.FragmentsManager);
fragments.init(
  "https://thatopen.github.io/engine_fragment/resources/worker.mjs",
);

world.camera.controls.addEventListener("rest", () =>
  fragments.core.update(true),
);

fragments.list.onItemSet.add(async ({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  await fragments.core.update(true);
});

/* MD 
  ## Showing your model tree 🌲
  ---
  Among the most common things to do with BIM models, is to show their spatial structure. This is really important, because then you can know better the model and see how elements are hierarchized between them. 🔗
  
  However, the IFC schema is not always that intuitive when it comes to create a model tree. Why? You may wonder... and it's because IfcRelContainedInSpatialStructure is not the only IFC relation that takes play in a real model tree. 🤯 Luckily, this is already taken into account by That Open Engine's UI when creating a model tree. Let's learn how you can use the Relations Tree!

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
