// eslint-disable-next-line import/no-extraneous-dependencies
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { InverseAttribute } from "@thatopen/components/dist/ifc/IfcRelationsIndexer/src/types";

type Attributes = string | ((name: string) => boolean);

type AttributesToInclude =
  | Attributes[]
  | ((defaultAttributes: Attributes[]) => Attributes[]);

export interface EntityAttributesUIState {
  components: OBC.Components;
  fragmentIdMap: FRAGS.FragmentIdMap;
  tableDefinition: BUI.TableDataTransform;
  editable?: boolean;
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
  model: FRAGS.FragmentsGroup,
  expressID: number,
  attributesToInclude = defaultAttributes,
  editable = false,
): Promise<BUI.TableGroupData> {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const attributes = await model.getProperties(expressID);
  if (!attributes)
    return {
      data: { Entity: `${expressID} properties not found...` },
      // onRowCreated(row) {
      //   row.addEventListener("cellcreated", (event) => {
      //     if (!(event instanceof CustomEvent)) return;
      //     const { cell } = event.detail;
      //     cell.style.gridColumn = "1 / -1";
      //   });
      // },
    };
  const modelRelations = indexer.relationMaps[model.uuid];

  const entityRow: BUI.TableGroupData = {
    data: {},
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
        editable,
      );
      entityRow.children.push(row);
    } else if (
      typeof attributeValue === "object" &&
      !Array.isArray(attributeValue)
    ) {
      const { value, type } = attributeValue;
      if (editable) {
        // const propertiesManager = components.get(OBC.IfcPropertiesManager);
        if (type === 1 || type === 2 || type === 3) {
          // const onInput = async (e: Event) => {
          //   const input = e.target as BUI.NumberInput;
          //   attributeValue.value = input.value;
          //   await propertiesManager.setData(model, attributes);
          // };
          // entityRow.data[name] = () => {
          //   return BUI.html`<bim-text-input @input=${onInput} value=${value}></bim-text-input>`;
          // };
        } else {
          entityRow.data[name] = value;
        }
      } else {
        const _value =
          typeof value === "number" ? Number(value.toFixed(3)) : value;
        entityRow.data[name] = _value;
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
          editable,
        );
        entityRow.children.push(row);
      }
    } else if (name === "type") {
      const value = OBC.IfcCategoryMap[attributeValue];
      entityRow.data.Entity = value;
    } else {
      entityRow.data[name] = attributeValue;
    }
  }

  if (modelRelations && modelRelations.get(attributes.expressID)) {
    const entityRelations = modelRelations.get(attributes.expressID)!;
    for (const name of attributesToInclude) {
      const targetAttributes: number[] = [];

      if (typeof name === "string") {
        // @ts-ignore
        const index = indexer._inverseAttributes.indexOf(
          name as InverseAttribute,
        );
        if (index !== -1) targetAttributes.push(index);
      } else {
        // @ts-ignore
        const matchingAttributes = indexer._inverseAttributes.filter((attr) =>
          name(attr),
        );
        for (const name of matchingAttributes) {
          // @ts-ignore
          const index = indexer._inverseAttributes.indexOf(name);
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
    fragmentIdMap,
    attributesToInclude,
    editable,
    tableDefinition,
  } = state;

  const fragments = components.get(OBC.FragmentsManager);

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
    const data: {
      model: FRAGS.FragmentsGroup;
      expressIDs: Iterable<number>;
    }[] = [];
    const expressIDs = [];
    for (const fragID in fragmentIdMap) {
      const fragment = fragments.list.get(fragID);
      if (!(fragment && fragment.group)) continue;
      const model = fragment.group;
      const existingModel = data.find((value) => value.model === model);
      if (existingModel) {
        for (const id of fragmentIdMap[fragID]) {
          (existingModel.expressIDs as Set<number>).add(id);
          expressIDs.push(id);
        }
      } else {
        const info = { model, expressIDs: new Set(fragmentIdMap[fragID]) };
        data.push(info);
      }
    }
    for (const value of data) {
      const { model, expressIDs } = value;
      for (const id of expressIDs) {
        const group = await processEntityAttributes(
          components,
          model,
          id,
          attributes,
          editable,
        );
        groups.push(group);
      }
    }
    table.dataTransform = tableDefinition;
    table.data = groups;
    table.columns = [{ name: "Entity", width: "minmax(15rem, 1fr)" }];
  };

  return BUI.html`<bim-table ${BUI.ref(onCreated)}></bim-table>`;
};
