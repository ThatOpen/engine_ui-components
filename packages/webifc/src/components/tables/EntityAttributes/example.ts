import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";
import * as WUI from "../..";

BUI.Manager.registerComponents();

const ifcApi = new WEBIFC.IfcAPI();
ifcApi.SetWasmPath("https://unpkg.com/web-ifc@0.0.51/");
await ifcApi.Init();

const modelBuffer = await (
  await fetch("/packages/webifc/resources/testing.ifc")
).arrayBuffer();

const modelID = ifcApi.OpenModel(new Uint8Array(modelBuffer));
const modelLines = ifcApi.GetAllLines(modelID);

const baseStyle: Record<string, string> = {
  padding: "0.25rem",
  borderRadius: "0.25rem",
};

const attributesStyles: Record<
  string,
  (value: string | boolean | number) => BUI.TemplateResult
> = {
  Entity: (entity) => {
    let style = {};
    if (entity === "IfcPropertySet") {
      style = {
        ...baseStyle,
        backgroundColor: "purple",
        color: "white",
      };
    }
    if (String(entity).includes("IfcWall")) {
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

const [table, updateTable] = WUI.tables.entityAttributes({
  api: ifcApi,
  modelID,
  expressIDs: [],
  attributeElements: attributesStyles,
});

document.body.append(table);

const onlyElements = document.getElementById("only-elements") as BUI.Checkbox;

const [dropdown, updateDropdown] = BUI.Component.create(
  (state: { onlyElements: boolean }) => {
    const { onlyElements } = state;
    const dropdown = document.createElement("bim-dropdown");
    dropdown.label = "ExpressIDs";
    dropdown.multiple = true;
    for (let i = 0; i < modelLines.size(); i++) {
      const expressID = modelLines.get(i);
      const { type } = ifcApi.GetLine(modelID, expressID);
      if (onlyElements && !ifcApi.IsIfcElement(type)) continue;
      const option = document.createElement("bim-option");
      const entityTypeName = ifcApi.GetNameFromTypeCode(type);
      option.label = `${expressID}: ${entityTypeName}`;
      option.value = expressID;
      dropdown.append(option);
    }

    dropdown.addEventListener("change", () => {
      updateTable({ expressIDs: dropdown.value });
    });

    return BUI.html`<div>${dropdown}</div>`;
  },
  { onlyElements: onlyElements.checked },
);

onlyElements.addEventListener("change", () => {
  updateTable({ expressIDs: [] });
  updateDropdown({ onlyElements: onlyElements.checked });
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
exportBtn.addEventListener("click", async () => {
  table.downloadData("entities-attributes");
});
