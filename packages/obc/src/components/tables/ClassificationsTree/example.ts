import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "../..";

BUI.Manager.init();

const components = new OBC.Components();

const viewport = document.createElement("bim-viewport");
viewport.name = "viewer";

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

const viewerGrids = components.get(OBC.Grids);
viewerGrids.create(world);

components.init();

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();

const fragmentsManager = components.get(OBC.FragmentsManager);
fragmentsManager.onFragmentsLoaded.add((model) => {
  if (world.scene) world.scene.three.add(model);
});

/* MD 
  ## Displaying elements grouping 📦
  ---
  One of the greatest things we can make using BIM models is to group elements based on their properties. This has many use cases! Like grouping elements to check their collisions 💥, grouping elements based on their construction activities 🔨, or grouping fininshed elements during the construction phase ✅. 
  
  Other than grouping the elements, the next most important thing is to show them to your user in an easy way... well, here is where it comes the `ClassificationsTree` functional component!

  ### Creating the classifications tree
  First things first, let's create an instance of the functional component, like this:
  */

const [classificationsTree, updateClassificationsTree] =
  CUI.tables.classificationTree({
    components,
    classifications: [],
  });

/* MD 
  Now that we have the classifications tree created, let's tell the `FragmentsManager` that each time a model is loaded it needs to classify the model based on some conditions, but more importantly is that right after those classifications are made it needs to update the classifications tree!
  */

const classifier = components.get(OBC.Classifier);

fragmentsManager.onFragmentsLoaded.add(async (model) => {
  // This creates a classification system named "entities"
  classifier.byEntity(model);

  // This creates a classification system named "predefinedTypes"
  await classifier.byPredefinedType(model);

  // This classifications in the state of the classifications tree.
  // Is an array with the classification systems to be shown.
  // You can pass the system name directly, or an object with system and label keys.
  // The system key is the name in the classifier, and the label is how you want it to be shown in the table.
  const classifications = [
    { system: "entities", label: "Entities" },
    { system: "predefinedTypes", label: "Predefined Types" },
  ];

  updateClassificationsTree({ classifications });
});

/* MD
  The `classifications` value is just an array of the classification systems from the Classifier that you want to display in the user interface, where `system` is the name in `classifier.list` and `label` is the name you want to use to display in the UI. Needless to say, the classifications need to be computed before they can be used on the tree.
  
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
  Finally, let's append the BIM Panel to the page to see the classifications tree working 😉
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
  Congratulations! You've now a ready to go user interface that let's you show your model classifications. 🥳
  */
