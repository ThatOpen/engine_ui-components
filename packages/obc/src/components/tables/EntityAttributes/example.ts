import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";

BUI.Manager.init();

const grid = document.getElementById("grid") as BUI.Grid;
grid.layouts = {
  main: `
  "c-panels-left viewer" 1fr
  "c-panels-table c-panels-table" minmax(auto, 450px)
  /24rem 1fr
  `,
};

grid.layout = "main";

const panel = document.querySelector<BUI.PanelSection>(
  "bim-panel[name='entityAttributes']",
)!;

const leftPanelContainer = grid.getContainer("panels", "left");
leftPanelContainer.append(panel);

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
  ## Displaying data the right way 🔥🔥
  ---
  What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!

  ### Loading a model and computing it's relations
  First things first... let's load a model 👇
  */

const ifcLoader = components.get(OBC.FragmentIfcLoader);
await ifcLoader.setup();
const file = await fetch("/resources/testing.ifc");
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

/* MD
  ### Preconfiguring the table
  The entities table has some optional configurations. One of them is the ability to modify the styles of the cell value based on the attribute value (e.g., colorizing entities with a specific string in its name, or numeric values based on a codition ). For it, let's first create a simple base style that all our cell overwrites will share:
  */

const baseStyle: Record<string, string> = {
  padding: "0.25rem",
  borderRadius: "0.25rem",
};

/* MD
  Then, let's create an object where the keys are the attribute values you want to overwrite its styles, and the values are functions that returns an `html` template result.

  :::tip

  If you want to learn more about the `html` template tag and how to use it, just take a look at the [tutorial on how to make a custom component]().

  :::
  */

const tableDefinition: BUI.TableDefinition = {
  Entity: (entity) => {
    let style = {};
    if (entity === OBC.IfcCategoryMap[WEBIFC.IFCPROPERTYSET]) {
      style = {
        ...baseStyle,
        backgroundColor: "purple",
        color: "white",
      };
    }
    if (String(entity).includes("IFCWALL")) {
      style = {
        ...baseStyle,
        backgroundColor: "green",
        color: "white",
      };
    }
    return BUI.html`<bim-label label=${entity} style=${BUI.styleMap(style)}></bim-label>`;
  },
  PredefinedType: (type) => {
    const colors = ["#1c8d83", "#3c1c8d", "#386c19", "#837c24"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const backgroundColor = colors[randomIndex];
    const style = { ...baseStyle, backgroundColor, color: "white" };
    return BUI.html`<bim-label label=${type} style=${BUI.styleMap(style)}></bim-label>`;
  },
  NominalValue: (value) => {
    let style = {};
    if (typeof value === "boolean" && value === false) {
      style = { ...baseStyle, backgroundColor: "#b13535", color: "white" };
    }
    if (typeof value === "boolean" && value === true) {
      style = { ...baseStyle, backgroundColor: "#18882c", color: "white" };
    }
    return BUI.html`<bim-label label=${value} style=${BUI.styleMap(style)}></bim-label>`;
  },
};

/* MD 
  Keep in mind the step above is optional! Not needed for the table to work.<br><br>

  Now its time to create the table using the predefine functional component that ships with the library 🙂
  */

const [table, updateTable] = CUI.tables.entityAttributes({
  components,
  model,
  expressIDs: [],
  tableDefinition,
});

table.expanded = true;
table.indentationInText = true;

const tablePanel = grid.getContainer("panels", "table");
tablePanel.append(table);

const dropdown = BUI.Component.create(() => {
  const dropdown = document.createElement("bim-dropdown");
  dropdown.label = "ExpressIDs";
  dropdown.multiple = true;
  const props = model.getLocalProperties();
  if (props) {
    for (const expressID in props) {
      const { type } = props[expressID];
      if (type !== WEBIFC.IFCWALL) continue;
      const option = document.createElement("bim-option");
      const entityTypeName = OBC.IfcCategoryMap[type];
      option.label = `${expressID}: ${entityTypeName}`;
      option.value = expressID;
      dropdown.append(option);
    }
  }

  dropdown.addEventListener("change", () => {
    updateTable({ expressIDs: dropdown.value });
  });

  return BUI.html`<div>${dropdown}</div>`;
});

const attributesDropdown = document.getElementById(
  "attributes",
) as BUI.Dropdown;

const panelSection = document.querySelector<BUI.PanelSection>(
  "bim-panel-section[name='tableAttributes']",
)!;

panelSection.insertBefore(dropdown, attributesDropdown);

const attributes = [
  "Name",
  "ContainedInStructure",
  "ForLayerSet",
  "LayerThickness",
  "HasProperties",
  "HasAssociations",
  "HasAssignments",
  "HasPropertySets",
  "PredefinedType",
  "Quantities",
  "ReferencedSource",
  "Identification",
  "Prefix",
  "LongName",
];

for (const attribute of attributes) {
  const option = document.createElement("bim-option");
  option.label = attribute;
  attributesDropdown.append(option);
}

attributesDropdown.addEventListener("change", () => {
  updateTable({
    attributesToInclude: () => {
      const attributes: any[] = [
        ...attributesDropdown.value,
        (name: string) => name.includes("Value"),
        (name: string) => name.startsWith("Material"),
        (name: string) => name.startsWith("Relating"),
        (name: string) => {
          const ignore = ["IsGroupedBy", "IsDecomposedBy"];
          return name.startsWith("Is") && !ignore.includes(name);
        },
      ];
      return attributes;
    },
  });
});

attributesDropdown.value = attributes;

const exportBtn = document.getElementById("export-json") as BUI.Button;
exportBtn.addEventListener("click", () => {
  table.downloadData("entities-attributes");
});

const makeEditable = document.getElementById("make-editable") as BUI.Checkbox;
makeEditable.addEventListener("change", () => {
  updateTable({ editable: makeEditable.checked });
});

const propsManager = components.get(OBC.IfcPropertiesManager);
const exportIfc = document.getElementById("export-ifc") as BUI.Button;
exportIfc.addEventListener("click", async () => {
  const modifiedIFC = await propsManager.saveToIfc(model, typedArray);
  const file = new File([modifiedIFC], "small-modified.ifc");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = file.name;
  a.click();
  URL.revokeObjectURL(a.href);
});

const copyTSVBtn = document.getElementById("copy-tsv") as BUI.Button;
copyTSVBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(table.tsv);
  alert("Table data copied as TSV in clipboard!");
});

// Searching
const searchBox = document.getElementById("search-box") as BUI.TextInput;
searchBox.addEventListener("input", () => {
  table.queryString = searchBox.value;
});

const preserveStrcuture = document.getElementById(
  "preserve-structure",
) as BUI.Checkbox;
table.preserveStructureOnFilter = preserveStrcuture.checked;
preserveStrcuture?.addEventListener("change", () => {
  table.preserveStructureOnFilter = preserveStrcuture.checked;
});
