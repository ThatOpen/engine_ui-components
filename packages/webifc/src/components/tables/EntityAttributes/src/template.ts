import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";

type Attributes = string | ((name: string) => boolean);

export interface EntityAttributesUIState {
  api: WEBIFC.IfcAPI;
  modelID: number;
  expressIDs: number[];
  // editable: boolean;
  attributeElements?: Record<
    string,
    (value: string | boolean | number) => BUI.TemplateResult
  >;
  attributesToInclude?:
    | Attributes[]
    | ((defaultAttributes: Attributes[]) => Attributes[]);
}

const defaultAttributes: Attributes[] = [
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
  (name: string) => name.includes("Value"),
  (name: string) => name.startsWith("Material"),
  (name: string) => name.startsWith("Relating"),
  (name: string) => {
    const ignore = ["IsGroupedBy", "IsDecomposedBy"];
    return name.startsWith("Is") && !ignore.includes(name);
  },
];

function processEntityAttributes(
  api: WEBIFC.IfcAPI,
  modelID: number,
  expressID: number,
  attributesToInclude = defaultAttributes,
  attributeElements: Record<
    string,
    (value: string | boolean | number) => BUI.TemplateResult
  > = {},
  editable = false,
): BUI.TableGroupData {
  const attributes = api.GetLine(modelID, expressID, false, true);

  const entityRow: BUI.TableGroupData = {
    data: {},
    id: attributes.GlobalId?.value,
  };

  for (const name in attributes) {
    const nameIncluded = attributesToInclude
      .map((item) => {
        if (typeof item === "string") {
          return name === item;
        }
        return item(name);
      })
      .includes(true);
    if (!(name === "type" || nameIncluded)) continue;
    const attributeValue = attributes[name];
    if (!attributeValue) continue;
    if (attributeValue.type === 5) {
      if (!entityRow.children) entityRow.children = [];
      const row = processEntityAttributes(
        api,
        modelID,
        attributeValue.value,
        attributesToInclude,
        attributeElements,
      );
      entityRow.children.push(row);
    } else if (
      typeof attributeValue === "object" &&
      !Array.isArray(attributeValue)
    ) {
      const { value, type } = attributeValue;
      if (editable) {
        if (type === 1 || type === 2 || type === 3) {
          const onInput = (e: Event) => {
            const input = e.target as BUI.NumberInput;
            attributeValue.value = input.value;
          };
          entityRow.data[name] = () => {
            return BUI.html`<bim-text-input @input=${onInput} value=${value}></bim-text-input>`;
          };
        } else {
          entityRow.data[name] = value;
        }
      } else {
        const _value =
          typeof value === "number" ? Number(value.toFixed(3)) : value;
        const componentDefinition = attributeElements[name];
        if (componentDefinition) {
          entityRow.data[name] = () => componentDefinition(_value);
        } else {
          entityRow.data[name] = _value;
        }
      }
    } else if (Array.isArray(attributeValue)) {
      for (const item of attributeValue) {
        if (item.type !== 5) continue;
        if (!entityRow.children) entityRow.children = [];
        const row = processEntityAttributes(
          api,
          modelID,
          item.value,
          attributesToInclude,
          attributeElements,
        );
        if (
          typeof row.data.Entity === "string" &&
          row.data.Entity.startsWith("IfcRel")
        ) {
          entityRow.children.push(...(row.children ?? []));
        } else {
          entityRow.children.push(row);
        }
      }
    } else if (name === "type") {
      const value = api.GetNameFromTypeCode(attributeValue);
      const componentDefinition = attributeElements.Entity;
      if (componentDefinition && !value.startsWith("IfcRel")) {
        entityRow.data.Entity = () => componentDefinition(value);
      } else {
        entityRow.data.Entity = value;
      }
    } else {
      entityRow.data[name] = attributeValue;
    }
  }

  return entityRow;
}

export const entityAttributesTemplate = (state: EntityAttributesUIState) => {
  const {
    api,
    modelID,
    expressIDs,
    attributesToInclude,
    attributeElements: attributesStyles,
  } = state;
  let attributes: Attributes[] | undefined;
  if (typeof attributesToInclude === "function") {
    attributes = attributesToInclude(defaultAttributes);
  } else {
    attributes = attributesToInclude;
  }

  const groups: BUI.TableGroupData[] = [];
  for (const expressID of expressIDs) {
    const group = processEntityAttributes(
      api,
      modelID,
      expressID,
      attributes,
      attributesStyles,
    );
    groups.push(group);
  }

  const onCreated = (el?: Element) => {
    if (!el) return;
    const table = el as BUI.Table;
    table.rows = groups;
    table.columns = [{ name: "Entity", width: "minmax(15rem, 1fr)" }];
  };

  return BUI.html`<bim-table ${BUI.ref(onCreated)}></bim-table>`;
};
