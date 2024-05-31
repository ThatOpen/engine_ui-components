/* eslint-disable import/no-extraneous-dependencies */
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as WEBIFC from "web-ifc";

// TODO: Refactor to remove redundancy

/**
 * Heloooooooooo
 */
export interface ElementPropertiesUIState {
  components: OBC.Components;
  fragmentIdMap: FRAGS.FragmentIdMap;
}

const attrsToIgnore = ["OwnerHistory", "ObjectPlacement", "CompositionType"];

const getAttributesRow = async (
  model: FRAGS.FragmentsGroup,
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
              Value:
                relAttrs.Identification?.value || relAttrs.ItemReference?.value,
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

const computeTableData = async (
  components: OBC.Components,
  fragmentIdMap: FRAGS.FragmentIdMap,
) => {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const fragments = components.get(OBC.FragmentsManager);
  const rows: BUI.TableGroupData[] = [];

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

  for (const value in data) {
    const { model, expressIDs } = data[value];
    const modelRelations = indexer.relationMaps[model.uuid];
    if (!modelRelations) continue;
    for (const expressID of expressIDs) {
      const elementAttrs = await model.getProperties(expressID);
      if (!elementAttrs) continue;

      const elementRow: BUI.TableGroupData = {
        data: {
          Name: elementAttrs.Name?.value,
        },
      };

      rows.push(elementRow);

      const attributesRow = await getAttributesRow(model, expressID, {
        includeClass: true,
      });

      if (!elementRow.children) elementRow.children = [];
      elementRow.children.push(attributesRow);

      const elementRelations = modelRelations.get(expressID);
      if (!elementRelations) continue;

      const definedByRelations = indexer.getEntityRelations(
        model,
        expressID,
        "IsDefinedBy",
      );

      if (definedByRelations) {
        const psetRels = definedByRelations.filter(async (rel) => {
          const relAttrs = await model.getProperties(rel);
          if (relAttrs) {
            return relAttrs.type === WEBIFC.IFCPROPERTYSET;
          }
          return false;
        });
        const psetRow = await getPsetRow(model, psetRels);
        if (psetRow.children) elementRow.children.push(psetRow);

        const qsetRels = definedByRelations.filter(async (rel) => {
          const relAttrs = await model.getProperties(rel);
          if (relAttrs) {
            return relAttrs.type === WEBIFC.IFCELEMENTQUANTITY;
          }
          return false;
        });
        const qsetRow = await getQsetRow(model, qsetRels);
        if (qsetRow.children) elementRow.children.push(qsetRow);
      }

      const associateRelations = indexer.getEntityRelations(
        model,
        expressID,
        "HasAssociations",
      );

      if (associateRelations) {
        const materialRelations = associateRelations.filter(async (rel) => {
          const relAttrs = await model.getProperties(rel);
          if (relAttrs) {
            const isMaterial =
              relAttrs.type === WEBIFC.IFCMATERIALLAYERSETUSAGE ||
              relAttrs.type === WEBIFC.IFCMATERIALLAYERSET ||
              relAttrs.type === WEBIFC.IFCMATERIALLAYER ||
              relAttrs.type === WEBIFC.IFCMATERIAL ||
              relAttrs.type === WEBIFC.IFCMATERIALLIST;
            return isMaterial;
          }
          return false;
        });
        const materialRow = await getMaterialRow(model, materialRelations);
        if (materialRow.children) elementRow.children.push(materialRow);

        const classificationRelations = associateRelations.filter(
          async (rel) => {
            const relAttrs = await model.getProperties(rel);
            if (relAttrs) {
              const isClassification =
                relAttrs.type === WEBIFC.IFCCLASSIFICATIONREFERENCE;
              return isClassification;
            }
            return false;
          },
        );
        const classificationRow = await getClassificationsRow(
          model,
          classificationRelations,
        );
        if (classificationRow.children)
          elementRow.children.push(classificationRow);
      }

      const contianerRelations = indexer.getEntityRelations(
        model,
        expressID,
        "ContainedInStructure",
      );

      if (contianerRelations) {
        const containerID = contianerRelations[0];
        const attributesRow = await getAttributesRow(model, containerID, {
          groupName: "SpatialContainer",
        });
        elementRow.children.push(attributesRow);
      }
    }
  }
  return rows;
};

let table: BUI.Table;

/**
 * Heloooooooooo
 */
export const elementPropertiesTemplate = (state: ElementPropertiesUIState) => {
  const { components, fragmentIdMap } = state;

  if (!table) {
    table = document.createElement("bim-table");
    table.columns = [{ name: "Name", width: "12rem" }];
    table.headersHidden = true;
    table.addEventListener("cellcreated", ({ detail }) => {
      const { cell } = detail;
      if (cell.column === "Name" && !("Value" in cell.rowData)) {
        cell.style.gridColumn = "1 / -1";
      }
    });
  }

  computeTableData(components, fragmentIdMap).then(
    (data) => (table.data = data),
  );

  return BUI.html`${table}`;
};
