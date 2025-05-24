import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as CUI from "../..";

BUI.Manager.init();

const viewport = document.createElement("bim-viewport");

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create();
const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;
cameraComponent.controls.setLookAt(10, 5.5, 5, -4, -1, -6.5);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

/* MD 
  ## Displaying data the simplest way 🔥🔥
  ---
  What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!

  ### Loading a model and computing it's relations
  First things first... let's load a model 👇
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
const file = await fetch(
  "https://thatopen.github.io/engine_ui-components/resources/small.ifc",
);
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

/* MD
  :::tip

  You don't need to add the model into the scene to display its properties. However, as we are going to display the properties for each selected element, then having the model into the scene is obvious, right?

  :::

  Now, in order to get the most out of the properties table, you need to calculate the relations index of your model. To do it, you will need to use the [IfcRelationsIndexer](/Tutorials/Components/Core/IfcRelationsIndexer) component from `@thatopen/components` to speed up the process.
  */

const indexer = components.get(OBC.IfcRelationsIndexer);
await indexer.process(model);

/* MD
  Once the relations are processed, the `Element Properties` component has everything it needs in order to display the properties in a cool way 😎.

  ### Creating the properties table
  Let's create an instance of the functional component, like this:
  */

const [propertiesTable, updatePropertiesTable] = CUI.tables.elementProperties({
  components,
  fragmentIdMap: {},
});

propertiesTable.preserveStructureOnFilter = true;
propertiesTable.indentationInText = false;

/* MD
  :::tip

  The `elementProperties` functional component is a simplified version that shows any model entity data. However, if you like a more complete properties table, use the `entityAttributes` component.

  :::

  Cool! properties table created. Then after, let's tell the properties table to update each time the user makes a selection over the model. For it, we will use the highlighter from `@thatopen/components-front`:
  */

const highlighter = components.get(OBF.Highlighter);
highlighter.setup({ world });

highlighter.events.select.onHighlight.add((fragmentIdMap) => {
  updatePropertiesTable({ fragmentIdMap });
});

highlighter.events.select.onClear.add(() =>
  updatePropertiesTable({ fragmentIdMap: {} }),
);

/* MD
  ### Creating a panel to append the table
  Allright! Let's now create a BIM Panel to control some aspects of the properties table and to trigger some functionalities like expanding the rows children and copying the values to TSV, so you can paste your element values inside a spreadsheet application 😉
  */

const propertiesPanel = BUI.Component.create(() => {
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

const app = document.createElement("bim-grid");
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
