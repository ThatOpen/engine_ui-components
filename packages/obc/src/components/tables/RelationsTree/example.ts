/* MD
  ## Showing your model tree 🌲
  ---
  Among the most common things to do with BIM models, is to show their spatial structure. This is really important, because then you can know better the model and see how elements are hierarchized between them. 🔗
  
  However, the IFC schema is not always that intuitive when it comes to create a model tree. Why? You may wonder... and it's because IfcRelContainedInSpatialStructure is not the only IFC relation that takes play in a real model tree. 🤯 Luckily, this is already taken into account by That Open Engine's UI when creating a model tree. Let's learn how you can use the Relations Tree!

  ### 🖖 Importing our Libraries

  In this tutorial, we will import:

  - @thatopen/components to set up the barebone of our app.
  - @thatopen/components-front to use some frontend-oriented components.
  - @thatopen/ui to add some simple and cool UI menus.
  - @thatopen/ui-obc to add some cool pre-made UI menus for components.
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

const fragmentsManager = components.get(OBC.FragmentsManager);
fragmentsManager.onFragmentsLoaded.add(async (model) => {
  if (world.scene) world.scene.three.add(model);
});

/* MD 

  ### Creating the tree
  Before using the Relations Tree, you must have the relations of your model indexed. This will ensure the Relations Tree have access to the required information to create the tree. 🌲
  */

const indexer = components.get(OBC.IfcRelationsIndexer);

fragmentsManager.onFragmentsLoaded.add(async (model) => {
  if (model.hasProperties) await indexer.process(model);
});

/* MD 
  :::tip

  If you're unsure about how the indexer works, you can take a look at the corresponding [IfcRelationsIndexer](https://docs.thatopen.com/Tutorials/Components/Core/IfcRelationsIndexer) tutorial!

  :::

  Now the model has their relations indexed, we can safely create the corresponding tree. 💪
*/

const [relationsTree] = BUIC.tables.relationsTree({
  components,
  models: [],
});

relationsTree.preserveStructureOnFilter = true;

/* MD 
  As you see, we've passed an empty models list because in the first place there are no models. However, the Relations Tree updates it-self each time a new model comes into the scene! Which makes it really handy to work with.

  Great! As we already created the Relations Tree instance, let's add it to the HTML page. For it, let's create simple BIM panel component where we include the tree and also a pre-made IFC load button 👇
*/

const panel = BUI.Component.create(() => {
  const [loadIfcBtn] = BUIC.buttons.loadIfc({ components });

  const onSearch = (e: Event) => {
    const input = e.target as BUI.TextInput;
    relationsTree.queryString = input.value;
  };

  return BUI.html`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${loadIfcBtn}
      <bim-text-input @input=${onSearch} placeholder="Search..." debounce="200"></bim-text-input>
      ${relationsTree}
    </bim-panel-section>
   </bim-panel> 
  `;
});

/* MD
  Finally, let's append the BIM Panel to the page to see the Relations Tree working 😉
  */

const app = document.getElementById("app") as BUI.Grid;
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
