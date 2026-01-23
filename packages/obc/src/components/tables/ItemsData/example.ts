/* MD
  ## Displaying data the simplest way 🔥🔥
  ---
  What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!

  ### 🖖 Importing our Libraries

  In this tutorial, we will import:

  - @thatopen/ui to add some simple and cool UI menus.
  - @thatopen/components to set up the barebone of our app.
  - @thatopen/components-front to use some frontend-oriented components.
  - @thatopen/ui-obc to add some cool pre-made UI menus for components.
*/

import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
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

const viewport = document.createElement("bim-viewport");

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

const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;
await world.camera.controls.setLookAt(65, 19, -27, 12.6, -5, -1.4);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

components.get(OBC.Clipper).create(world);

/* MD 

  ### Setting up the components
  First of all, we're going to get the `FragmentIfcLoader` from an existing components instance:
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();

/* MD
  Just after we have setup the loader, let's then configure the `FragmentManager` so any time a model is loaded it gets added to some world scene created before: 
  */

const githubUrl =
  "https://thatopen.github.io/engine_fragment/resources/worker.mjs";
const fetchedUrl = await fetch(githubUrl);
const workerBlob = await fetchedUrl.blob();
const workerFile = new File([workerBlob], "worker.mjs", {
  type: "text/javascript",
});
const workerUrl = URL.createObjectURL(workerFile);
const fragments = components.get(OBC.FragmentsManager);
fragments.init(workerUrl);

world.camera.controls.addEventListener("update", () =>
  fragments.core.update(true),
);

fragments.list.onItemSet.add(({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  fragments.core.update(true);
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
  :::tip

  You don't need to add the model into the scene to display its properties. However, as we are going to display the properties for each selected element, then having the model into the scene is obvious, right?

  :::

  Now, the any Fragments Model loaded includes everything the Element Properties component needs in order to work! So the following is a piece of cake.

  ### Creating the properties table
  Let's create an instance of the functional component, like this:
  */

const [propertiesTable, updatePropertiesTable] = BUIC.tables.itemsData({
  components,
  modelIdMap: {},
});

propertiesTable.preserveStructureOnFilter = true;
propertiesTable.indentationInText = false;

/* MD
  Cool! properties table created. Then after, let's tell the properties table to update each time the user makes a selection over the model. For it, we will use the highlighter from `@thatopen/components-front`:
  */

const highlighter = components.get(OBCF.Highlighter);
highlighter.setup({ world });

highlighter.events.select.onHighlight.add((modelIdMap) => {
  updatePropertiesTable({ modelIdMap });
});

highlighter.events.select.onClear.add(() =>
  updatePropertiesTable({ modelIdMap: {} }),
);

/* MD
  ### Creating a panel to append the table
  Allright! Let's now create a BIM Panel to control some aspects of the properties table and to trigger some functionalities like expanding the rows children and copying the values to TSV, so you can paste your element values inside a spreadsheet application 😉
  */

const propertiesPanel = BUI.Component.create(() => {
  const [loadFragBtn] = BUIC.buttons.loadFrag({ components });

  const onTextInput = (e: Event) => {
    const input = e.target as BUI.TextInput;
    propertiesTable.queryString = input.value !== "" ? input.value : null;
  };

  const expandTable = (e: Event) => {
    const button = e.target as BUI.Button;
    propertiesTable.expanded = !propertiesTable.expanded;
    button.label = propertiesTable.expanded ? "Collapse" : "Expand";
  };

  const copyAsTSV = async () => {
    await navigator.clipboard.writeText(propertiesTable.tsv);
  };

  return BUI.html`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        ${loadFragBtn}
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${expandTable} label=${propertiesTable.expanded ? "Collapse" : "Expand"}></bim-button> 
          <bim-button @click=${copyAsTSV} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${onTextInput} placeholder="Search Property" debounce="250"></bim-text-input>
        ${propertiesTable}
      </bim-panel-section>
    </bim-panel>
  `;
});

/* MD
  Finally, let's create a BIM Grid element and provide both the panel and the viewport to display everything.
  */

const app = document.createElement("bim-grid") as BUI.Grid<["main"]>;
app.layouts = {
  main: {
    template: `
    "propertiesPanel viewport"
    /25rem 1fr
    `,
    elements: { propertiesPanel, viewport },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  Congratulations! You have now created a fully working properties table for your app in less than 5 minutes of work. Keep going with more tutorials! 💪
  */
