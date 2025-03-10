/* eslint-disable no-alert */
import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
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
const file = await fetch(
  "https://thatopen.github.io/engine_ui-components/resources/small.ifc",
);
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

/* MD
  :::tip

  You don't need to add the model into the scene to display its properties. However, as we are going to display the attributes for each selected element, then having the model into the scene is obvious, right?

  :::

  Now, in order to get the most out of the entities table, you need to calculate the relations index of your model. To do it, you will need to use the [IfcRelationsIndexer](/Tutorials/Components/Core/IfcRelationsIndexer) component from `@thatopen/components` to speed up the process.
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

  If you want to learn more about the `html` template tag and how to use it, just take a look at the tutorial on how to make a custom component.

  :::
  */

const tableDefinition: BUI.TableDataTransform = {
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
    return BUI.html`<bim-label style=${BUI.styleMap(style)}>${entity}</bim-label>`;
  },
  PredefinedType: (type) => {
    const colors = ["#1c8d83", "#3c1c8d", "#386c19", "#837c24"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const backgroundColor = colors[randomIndex];
    const style = { ...baseStyle, backgroundColor, color: "white" };
    return BUI.html`<bim-label style=${BUI.styleMap(style)}>${type}</bim-label>`;
  },
  NominalValue: (value) => {
    let style = {};
    if (typeof value === "boolean" && value === false) {
      style = { ...baseStyle, backgroundColor: "#b13535", color: "white" };
    }
    if (typeof value === "boolean" && value === true) {
      style = { ...baseStyle, backgroundColor: "#18882c", color: "white" };
    }
    return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;
  },
};

/* MD 
  Keep in mind the step above is optional! Not needed for the table to work. Now its time to create the table using the predefine functional component that ships with the library 🙂
  */

const [attributesTable, updateAttributesTable] = CUI.tables.entityAttributes({
  components,
  fragmentIdMap: {},
  tableDefinition,
  attributesToInclude: () => {
    const attributes: any[] = [
      "Name",
      "ContainedInStructure",
      "HasProperties",
      "HasPropertySets",
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

attributesTable.expanded = true;
attributesTable.indentationInText = true;
attributesTable.preserveStructureOnFilter = true;

/* MD
  Cool! attributes table created. Then after, let's tell the attributes table to update each time the user makes a selection over the model. For it, we will use the [Highlighter](/Tutorials/Components/Front/Highlighter):
  */

const highlighter = components.get(OBF.Highlighter);
highlighter.setup({ world });

highlighter.events.select.onHighlight.add((fragmentIdMap) => {
  updateAttributesTable({ fragmentIdMap });
});

highlighter.events.select.onClear.add(() =>
  updateAttributesTable({ fragmentIdMap: {} }),
);

/* MD
  ### Creating a panel to append the table
  Allright! Let's now create a BIM Panel to control some aspects of the attributes table and to trigger some functionalities like copying the values to TSV or exporing the data to JSON 😉
  */

const entityAttributesPanel = BUI.Component.create(() => {
  const onSearchInput = (e: Event) => {
    const input = e.target as BUI.TextInput;
    attributesTable.queryString = input.value;
  };

  const onPreserveStructureChange = (e: Event) => {
    const checkbox = e.target as BUI.Checkbox;
    attributesTable.preserveStructureOnFilter = checkbox.checked;
  };

  const onExportJSON = () => {
    attributesTable.downloadData("entities-attributes");
  };

  const onCopyTSV = async () => {
    await navigator.clipboard.writeText(attributesTable.tsv);
    alert(
      "Table data copied as TSV in clipboard! Try to paste it in a spreadsheet app.",
    );
  };

  const onAttributesChange = (e: Event) => {
    const dropdown = e.target as BUI.Dropdown;
    updateAttributesTable({
      attributesToInclude: () => {
        const attributes: any[] = [
          ...dropdown.value,
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
  };

  return BUI.html`
    <bim-panel>
      <bim-panel-section label="Entity Attributes" fixed>
        <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
          <div style="display: flex; gap: 0.5rem;">
            <bim-text-input @input=${onSearchInput} type="search" placeholder="Search" debounce="250"></bim-text-input>
            <bim-checkbox @change=${onPreserveStructureChange} label="Preserve Structure" inverted checked></bim-checkbox>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <bim-dropdown @change=${onAttributesChange} multiple>
              <bim-option label="Name" checked></bim-option> 
              <bim-option label="ContainedInStructure" checked></bim-option>
              <bim-option label="ForLayerSet"></bim-option>
              <bim-option label="LayerThickness"></bim-option>
              <bim-option label="HasProperties" checked></bim-option>
              <bim-option label="HasAssociations"></bim-option>
              <bim-option label="HasAssignments"></bim-option>
              <bim-option label="HasPropertySets" checked></bim-option>
              <bim-option label="PredefinedType"></bim-option>
              <bim-option label="Quantities"></bim-option>
              <bim-option label="ReferencedSource"></bim-option>
              <bim-option label="Identification"></bim-option>
              <bim-option label="Prefix"></bim-option>
              <bim-option label="LongName"></bim-option>
            </bim-dropdown>
            <bim-button @click=${onCopyTSV} icon="solar:copy-bold" tooltip-title="Copy TSV" tooltip-text="Copy the table contents as tab separated text values, so you can copy them into a spreadsheet."></bim-button>
            <bim-button @click=${onExportJSON} icon="ph:export-fill" tooltip-title="Export JSON" tooltip-text="Download the table contents as a JSON file."></bim-button>
          </div>
        </div>
        ${attributesTable}
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
      "viewport" 1fr
      "entityAttributesPanel" 1fr
    `,
    elements: { entityAttributesPanel, viewport },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  Congratulations! You have now created a fully working advanced attributes table for your app in less than 10 minutes of work. Keep going with more tutorials! 💪
  */
