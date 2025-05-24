import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
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

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();

const highlighter = components.get(OBF.Highlighter);
highlighter.setup({ world });
highlighter.zoomToSelection = true;

const fragmentsManager = components.get(OBC.FragmentsManager);
fragmentsManager.onFragmentsLoaded.add(async (model) => {
  if (world.scene) world.scene.three.add(model);
});

/* MD 
  ## Showing your model tree 🌲
  ---
  Among the most common things to do with BIM models, is to show their spatial structure. This is really important, because then you can know better the model and see how elements are hierarchized between them. 🔗
  
  However, the IFC schema is not always that intuitive when it comes to create a model tree. Why? You may wonder... and it's because IfcRelContainedInSpatialStructure is not the only IFC relation that takes play in a real model tree. 🤯 Luckily, this is already taken into account by That Open Engine's UI when creating a model tree. Let's learn how you can use the Relations Tree!

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

const [relationsTree] = CUI.tables.relationsTree({
  components,
  models: [],
});

relationsTree.preserveStructureOnFilter = true;

/* MD 
  As you see, we've passed an empty models list because in the first place there are no models. However, the Relations Tree updates it-self each time a new model comes into the scene! Which makes it really handy to work with.

  Great! As we already created the Relations Tree instance, let's add it to the HTML page. For it, let's create simple BIM panel component where we include the tree and also a pre-made IFC load button 👇
*/

const panel = BUI.Component.create(() => {
  const [loadIfcBtn] = CUI.buttons.loadIfc({ components });

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
