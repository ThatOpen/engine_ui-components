import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

type Attributes = string | ((name: string) => boolean);
type AttributeElements = Record<
  string,
  (value: string | boolean | number) => BUI.TemplateResult
>;

type AttributesToInclude =
  | Attributes[]
  | ((defaultAttributes: Attributes[]) => Attributes[]);

export interface EntityAttributesUIState {
  components: OBC.Components;
  model: any;
  expressIDs: number[];
  editable?: boolean;
  attributeElements?: AttributeElements;
  attributesToInclude?: AttributesToInclude;
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

async function processEntityAttributes(
  components: OBC.Components,
  model: any,
  expressID: number,
  attributesToInclude = defaultAttributes,
  attributeElements: AttributeElements = {},
  editable = false,
): Promise<BUI.TableGroupData> {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const attributes = await model.getProperties(expressID);
  const modelRelations = indexer.relationMaps[model.uuid];

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
      const row = await processEntityAttributes(
        components,
        model,
        attributeValue.value,
        attributesToInclude,
        attributeElements,
        editable,
      );
      entityRow.children.push(row);
    } else if (
      typeof attributeValue === "object" &&
      !Array.isArray(attributeValue)
    ) {
      const { value, type } = attributeValue;
      if (editable) {
        const propertiesManager = components.get(OBC.IfcPropertiesManager);
        if (type === 1 || type === 2 || type === 3) {
          const onInput = async (e: Event) => {
            const input = e.target as BUI.NumberInput;
            attributeValue.value = input.value;
            await propertiesManager.setData(model, attributes);
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
        const row = await processEntityAttributes(
          components,
          model,
          item.value,
          attributesToInclude,
          attributeElements,
          editable,
        );
        entityRow.children.push(row);
      }
    } else if (name === "type") {
      const value = OBC.IfcCategoryMap[attributeValue];
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

  if (modelRelations && modelRelations.get(attributes.expressID)) {
    const entityRelations = modelRelations.get(attributes.expressID)!;
    for (const name of attributesToInclude) {
      const targetAttributes: number[] = [];

      if (typeof name === "string") {
        const index = indexer.inverseAttributes.indexOf(name);
        targetAttributes.push(index);
      } else {
        const matchingAttributes = indexer.inverseAttributes.filter((attr) =>
          name(attr),
        );
        for (const name of matchingAttributes) {
          const index = indexer.inverseAttributes.indexOf(name);
          targetAttributes.push(index);
        }
      }

      for (const attr of targetAttributes) {
        const relations = entityRelations.get(attr);
        if (!relations) continue;
        for (const relation of relations) {
          const row = await processEntityAttributes(
            components,
            model,
            relation,
            attributesToInclude,
            attributeElements,
            editable,
          );
          if (!entityRow.children) entityRow.children = [];
          entityRow.children.push(row);
        }
      }
    }
  }

  return entityRow;
}

export const entityAttributesTemplate = (state: EntityAttributesUIState) => {
  const {
    components,
    model: modelID,
    expressIDs,
    attributesToInclude,
    attributeElements: attributesStyles,
    editable,
  } = state;

  let attributes: Attributes[] | undefined;
  if (typeof attributesToInclude === "function") {
    attributes = attributesToInclude(defaultAttributes);
  } else {
    attributes = attributesToInclude;
  }

  const onCreated = async (el?: Element) => {
    if (!el) return;
    const table = el as BUI.Table;
    const groups: BUI.TableGroupData[] = [];
    for (const expressID of expressIDs) {
      const group = await processEntityAttributes(
        components,
        modelID,
        expressID,
        attributes,
        attributesStyles,
        editable,
      );
      groups.push(group);
    }
    table.rows = groups;
    table.columns = [{ name: "Entity", width: "minmax(15rem, 1fr)" }];
  };

  return BUI.html`<bim-table ${BUI.ref(onCreated)}></bim-table>`;
};
