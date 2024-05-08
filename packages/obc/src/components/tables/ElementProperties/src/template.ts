import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as WEBIFC from "web-ifc";

// TODO: Refactor to remove redundancy

export interface ElementPropertiesUIState {
  components: OBC.Components;
  model: any;
  expressID: number;
}

const attrsToIgnore = ["OwnerHistory", "ObjectPlacement", "CompositionType"];

const getAttributesRow = async (
  model: any,
  expressID: number,
  _options?: {
    groupName?: string;
    includeClass?: boolean;
  },
) => {
  const defaultOptions = {
    groupName: "Attributes",
    includeClass: false,
  };
  const options = { ...defaultOptions, ..._options };
  const { groupName, includeClass } = options;

  const elementAttrs = (await model.getProperties(expressID)) ?? {};
  const attrsRow: BUI.TableGroupData = { data: { Name: groupName } };

  if (includeClass) {
    if (!attrsRow.children) attrsRow.children = [];
    attrsRow.children.push({
      data: {
        Name: "Class",
        Value: OBC.IfcCategoryMap[elementAttrs.type],
      },
    });
  }

  for (const attrName in elementAttrs) {
    if (attrsToIgnore.includes(attrName)) continue;
    const attrValue = elementAttrs[attrName];
    if (!attrValue) continue;
    if (typeof attrValue === "object" && !Array.isArray(attrValue)) {
      if (attrValue.type === WEBIFC.REF) continue;
      const valueRow: BUI.TableGroupData = {
        data: { Name: attrName, Value: attrValue.value },
      };
      if (!attrsRow.children) attrsRow.children = [];
      attrsRow.children.push(valueRow);
    }
  }
  return attrsRow;
};

const getPsetRow = async (model: any, psetIDs: number[]) => {
  const row: BUI.TableGroupData = { data: { Name: "Property Sets" } };
  for (const psetID of psetIDs) {
    const setAttrs = await model.getProperties(psetID);
    if (!setAttrs) continue;
    const setRow: BUI.TableGroupData = {
      data: { Name: setAttrs.Name.value },
    };
    if (setAttrs.type !== WEBIFC.IFCPROPERTYSET) continue;
    for (const propHandle of setAttrs.HasProperties) {
      const { value: propID } = propHandle;
      const propAttrs = await model.getProperties(propID);
      if (!propAttrs) continue;
      const valueKey = Object.keys(propAttrs).find((attr) =>
        attr.includes("Value"),
      );
      if (!(valueKey && propAttrs[valueKey])) continue;
      const propRow: BUI.TableGroupData = {
        data: {
          Name: propAttrs.Name.value,
          Value: propAttrs[valueKey].value,
        },
      };
      if (!setRow.children) setRow.children = [];
      setRow.children.push(propRow);
    }
    if (!setRow.children) continue;
    if (!row.children) row.children = [];
    row.children.push(setRow);
  }
  return row;
};

const getQsetRow = async (model: any, psetIDs: number[]) => {
  const row: BUI.TableGroupData = { data: { Name: "Quantity Sets" } };
  for (const psetID of psetIDs) {
    const setAttrs = await model.getProperties(psetID);
    if (!setAttrs) continue;
    const setRow: BUI.TableGroupData = {
      data: { Name: setAttrs.Name.value },
    };
    if (setAttrs.type !== WEBIFC.IFCELEMENTQUANTITY) continue;
    for (const qtoHandle of setAttrs.Quantities) {
      const { value: propID } = qtoHandle;
      const propAttrs = await model.getProperties(propID);
      if (!propAttrs) continue;
      const valueKey = Object.keys(propAttrs).find((attr) =>
        attr.includes("Value"),
      );
      if (!(valueKey && propAttrs[valueKey])) continue;
      const propRow: BUI.TableGroupData = {
        data: {
          Name: propAttrs.Name.value,
          Value: propAttrs[valueKey].value,
        },
      };
      if (!setRow.children) setRow.children = [];
      setRow.children.push(propRow);
    }
    if (!setRow.children) continue;
    if (!row.children) row.children = [];
    row.children.push(setRow);
  }
  return row;
};

const getMaterialRow = async (model: any, materialIDs: number[]) => {
  const row: BUI.TableGroupData = { data: { Name: "Materials" } };
  for (const materialID of materialIDs) {
    const relAttrs = await model.getProperties(materialID);
    if (relAttrs.type === WEBIFC.IFCMATERIALLAYERSETUSAGE) {
      const layerSetID = relAttrs.ForLayerSet.value;
      const layerSetAttrs = await model.getProperties(layerSetID);
      for (const layerHandle of layerSetAttrs.MaterialLayers) {
        const { value: layerID } = layerHandle;
        const layerAttrs = await model.getProperties(layerID);
        const materialAttrs = await model.getProperties(
          layerAttrs.Material.value,
        );
        const layerRow = {
          data: {
            Name: "Layer",
          },
          children: [
            {
              data: {
                Name: "Thickness",
                Value: layerAttrs.LayerThickness.value,
              },
            },
            {
              data: {
                Name: "Material",
                Value: materialAttrs.Name.value,
              },
            },
          ],
        };
        if (!row.children) row.children = [];
        row.children.push(layerRow);
      }
    }
    if (relAttrs.type === WEBIFC.IFCMATERIALLIST) {
      for (const materialHandle of relAttrs.Materials) {
        const { value: materialID } = materialHandle;
        const materialAttrs = await model.getProperties(materialID);
        const materialRow: BUI.TableGroupData = {
          data: {
            Name: "Name",
            Value: materialAttrs.Name.value,
          },
        };
        if (!row.children) row.children = [];
        row.children.push(materialRow);
      }
    }
    if (relAttrs.type === WEBIFC.IFCMATERIAL) {
      const materialAttrs = await model.getProperties(materialID);
      const materialRow: BUI.TableGroupData = {
        data: {
          Name: "Name",
          Value: materialAttrs.Name.value,
        },
      };
      if (!row.children) row.children = [];
      row.children.push(materialRow);
    }
  }
  return row;
};

const getClassificationsRow = async (
  model: any,
  classificationIDs: number[],
) => {
  const row: BUI.TableGroupData = { data: { Name: "Classifications" } };
  for (const classificationID of classificationIDs) {
    const relAttrs = await model.getProperties(classificationID);
    if (relAttrs.type === WEBIFC.IFCCLASSIFICATIONREFERENCE) {
      const { value: sourceID } = relAttrs.ReferencedSource;
      const sourceAttrs = await model.getProperties(sourceID);
      const classificationRow: BUI.TableGroupData = {
        data: {
          Name: sourceAttrs.Name.value,
        },
        children: [
          {
            data: {
              Name: "Identification",
              Value: relAttrs.Identification.value,
            },
          },
          {
            data: {
              Name: "Name",
              Value: relAttrs.Name.value,
            },
          },
        ],
      };
      if (!row.children) row.children = [];
      row.children.push(classificationRow);
    }
  }
  return row;
};

export const elementPropertiesTemplate = (state: ElementPropertiesUIState) => {
  // @ts-ignore
  const { components, model, expressID } = state;

  const indexer = components.get(OBC.IfcRelationsIndexer);

  const onCreated = async (element?: Element) => {
    if (!element) return;
    const modelRelations = indexer.relationMaps[model.uuid];
    if (!modelRelations) return;
    const elementRelations = modelRelations.get(expressID);
    if (!elementRelations) return;
    const rows: BUI.TableGroupData[] = [];

    const attributesRow = await getAttributesRow(model, expressID, {
      includeClass: true,
    });
    rows.push(attributesRow);

    const definedByRelations = indexer.getEntityRelations(
      model,
      expressID,
      "IsDefinedBy",
    );

    if (definedByRelations) {
      const psetRels = definedByRelations.filter(
        async (rel) =>
          (await model.getProperties(rel)).type === WEBIFC.IFCPROPERTYSET,
      );
      const psetRow = await getPsetRow(model, psetRels);
      rows.push(psetRow);

      const qsetRels = definedByRelations.filter(
        async (rel) =>
          (await model.getProperties(rel)).type === WEBIFC.IFCELEMENTQUANTITY,
      );
      const qsetRow = await getQsetRow(model, qsetRels);
      rows.push(qsetRow);
    }

    const associateRelations = indexer.getEntityRelations(
      model,
      expressID,
      "HasAssociations",
    );

    if (associateRelations) {
      const materialRelations = associateRelations.filter(async (rel) => {
        const relAttrs = model.getProperties(rel);
        const isMaterial =
          relAttrs.type === WEBIFC.IFCMATERIALLAYERSETUSAGE ||
          relAttrs.type === WEBIFC.IFCMATERIALLAYERSET ||
          relAttrs.type === WEBIFC.IFCMATERIALLAYER ||
          relAttrs.type === WEBIFC.IFCMATERIAL ||
          relAttrs.type === WEBIFC.IFCMATERIALLIST;
        return isMaterial;
      });
      const materialRow = await getMaterialRow(model, materialRelations);
      rows.push(materialRow);

      const classificationRelations = associateRelations.filter(async (rel) => {
        const relAttrs = model.getProperties(rel);
        const isClassification =
          relAttrs.type === WEBIFC.IFCCLASSIFICATIONREFERENCE;
        return isClassification;
      });
      const classificationRow = await getClassificationsRow(
        model,
        classificationRelations,
      );
      rows.push(classificationRow);
    }

    const contianerRelations = indexer.getEntityRelations(
      model,
      expressID,
      "ContainedInStructure",
    );

    if (contianerRelations) {
      const containerID = contianerRelations[0];
      const attributesRow = await getAttributesRow(model, containerID, {
        groupName: "Storey",
      });
      rows.push(attributesRow);
    }

    // const typedByRelations = indexer.getEntityRelations(
    //   model,
    //   expressID,
    //   "IsTypedBy",
    // );

    // if (typedByRelations) {
    //   const typeID = typedByRelations[0];
    //   const typeAttrs = await model.getProperties(typeID);
    //   console.log(typeAttrs);
    // }

    // console.log(typedByRelations);

    const table = element as BUI.Table;
    table.columns = [{ name: "Name", width: "12rem" }];
    table.rows = rows;
  };
  return BUI.html`<bim-table ${BUI.ref(onCreated)} headers-hidden></bim-table>`;
};
