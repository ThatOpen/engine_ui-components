/* eslint-disable no-alert */
import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
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
cameraComponent.controls.setLookAt(10, 5.5, 5, -4, -1, -6.5);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

/* MD 
  ## Displaying data the advanced way 🔥🔥
  ---
  What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!

  ### Loading a model and computing it's relations
  First things first... let's load a model 👇
  */

const ifcLoader = components.get(OBC.IfcLoader);
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
  The attributes table has some optional configurations. One of them is the ability to modify the styles of the cell value based on the attribute value (e.g., colorizing entities with a specific string in its name, or numeric values based on a codition ). For it, let's first create a simple base style that all our cell overwrites will share:
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

const [attributesTable, updateAttributesTable] = CUI.tables.entityAttributes({
  components,
  model,
  expressIDs: [],
  tableDefinition,
});

attributesTable.expanded = true;
attributesTable.indentationInText = true;
attributesTable.preserveStructureOnFilter = true;

// const dropdown = BUI.Component.create(() => {
//   const dropdown = document.createElement("bim-dropdown");
//   dropdown.label = "ExpressIDs";
//   dropdown.multiple = true;
//   const props = model.getLocalProperties();
//   if (props) {
//     for (const expressID in props) {
//       const { type } = props[expressID];
//       if (type !== WEBIFC.IFCWALL) continue;
//       const option = document.createElement("bim-option");
//       const entityTypeName = OBC.IfcCategoryMap[type];
//       option.label = `${expressID}: ${entityTypeName}`;
//       option.value = expressID;
//       dropdown.append(option);
//     }
//   }

//   dropdown.addEventListener("change", () => {
//     updateAttributesTable({ expressIDs: dropdown.value });
//   });

//   return BUI.html`<div>${dropdown}</div>`;
// });

/** MD
 Now, to make things even more interesting, let's add a dropdown that let's the user decide which attributes they want to see.
 */

const attributesDropdown = document.getElementById(
  "attributes",
) as BUI.Dropdown;

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
  updateAttributesTable({
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
  attributesTable.downloadData("entities-attributes");
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

const entityAttributes = BUI.Component.create(() => {
  const onCopyTSV = async () => {
    await navigator.clipboard.writeText(attributesTable.tsv);
    alert(
      "Table data copied as TSV in clipboard! Try to paste it in a spreadsheet app.",
    );
  };

  const onSearchInput = (e: Event) => {
    const input = e.target as BUI.TextInput;
    attributesTable.queryString = input.value;
  };

  const onPreserveStructureChange = (e: Event) => {
    const checkbox = e.target as BUI.Checkbox;
    attributesTable.preserveStructureOnFilter = checkbox.checked;
  };

  return BUI.html`
    <bim-panel name="entityAttributes" label="Entity Attributes">
      <bim-panel-section name="tableAttributes" label="Table Settings">
        <bim-dropdown multiple id="attributes" label="Attributes"></bim-dropdown>
        <bim-button @click=${onCopyTSV} label="Copy as TSV"></bim-button>
        <bim-button label="Export to JSON"></bim-button>
        <bim-button label="Export IFC"></bim-button>
        <div style="display: flex; gap: 0.5rem">
          <bim-text-input @input=${onSearchInput} type="search" placeholder="Search" debounce="250"></bim-text-input>
          <bim-checkbox @change=${onPreserveStructureChange} label="Preserve Structure" inverted checked></bim-checkbox>
        </div>
      </bim-panel-section>
    </bim-panel>
  `;
});

const grid = document.createElement("bim-grid");
grid.layouts = {
  main: {
    template: `
      "entityAttributes viewport" 1fr
      "entityAttributes attributesTable" minmax(auto, 450px)
      /24rem 1fr
    `,
    elements: { entityAttributes, viewport, attributesTable },
  },
};

grid.layout = "main";
