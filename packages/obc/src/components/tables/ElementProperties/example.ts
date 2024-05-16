import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as OBF from "@thatopen/components-front";
import * as FRAGS from "@thatopen/fragments";
import * as CUI from "../..";

BUI.Manager.registerComponents();

const grid = document.getElementById("grid") as BUI.Grid;
grid.layouts = {
  main: `
  "c-panels-properties viewer" 1fr
  "c-panels-properties viewer" 1fr
  /25rem 1fr
  `,
};

grid.layout = "main";

const viewport = document.getElementById("viewer-container") as BUI.Viewport;

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

const ifcLoader = components.get(OBC.FragmentIfcLoader);
await ifcLoader.setup();
const file = await fetch("/resources/small.ifc");
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

/* MD
  :::tip

  You don't need to load the model into the scene to display its properties.

  :::

  Now, in order to get the most out of the entities table, you need to calculate the relations index of your model. To do it, you will need to use the [IfcRelationsIndexer]() component from `@thatopen/components` to speed up the process.
  */

const indexer = components.get(OBC.IfcRelationsIndexer);
await indexer.process(model);

const [propertiesTable, updatePropertiesTable] = CUI.tables.elementProperties({
  components,
  data: [],
});

propertiesTable.preserveStructureOnFilter = true;
propertiesTable.indentationInText = false;

const fragments = components.get(OBC.FragmentManager);
const highlighter = components.get(OBF.Highlighter);
highlighter.setup({ world });

highlighter.events.select.onHighlight.add((fragmentIdMap) => {
  const data: { model: FRAGS.FragmentsGroup; expressIDs: Iterable<number> }[] =
    [];
  for (const fragID in fragmentIdMap) {
    const fragment = fragments.list.get(fragID);
    if (!(fragment && fragment.group)) continue;
    const model = fragment.group;
    const existingModel = data.find((value) => value.model === model);
    if (existingModel) {
      for (const id of fragmentIdMap[fragID]) {
        (existingModel.expressIDs as Set<number>).add(id);
      }
    } else {
      const info = { model, expressIDs: new Set(fragmentIdMap[fragID]) };
      data.push(info);
    }
  }
  updatePropertiesTable({ data });
});

highlighter.events.select.onClear.add(() =>
  updatePropertiesTable({ data: [] }),
);

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
        <bim-text-input @input=${onTextInput} placeholder="Search Property"></bim-text-input>
        ${propertiesTable}
      </bim-panel-section>
    </bim-panel>
  `;
});

const propertiesContainer = grid.getContainer("panels", "properties");
propertiesContainer.append(propertiesPanel);
