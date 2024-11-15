import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { FacetsListTableData } from "./types";
import { createParameterRow } from "./parameter-row";

export const createPropertyRow = (facet: OBC.IDSProperty) => {
  const row: BUI.TableGroupData<FacetsListTableData> = {
    data: {
      Name: facet.facetType,
      Cardinality: facet.cardinality,
    },
    children: [],
  };

  const { propertySet, baseName, dataType, uri, value } = facet;

  const propertySetRow = createParameterRow("PropertySet", propertySet);
  const baseNameRow = createParameterRow("BaseName", baseName);
  const valueRow = createParameterRow("Value", value);

  if (propertySetRow) row.children?.push(propertySetRow);
  if (baseNameRow) row.children?.push(baseNameRow);
  if (valueRow) row.children?.push(valueRow);

  if (dataType) {
    const dataTypeRow: BUI.TableGroupData<FacetsListTableData> = {
      data: {
        Name: "DataType",
        Value: dataType,
      },
    };
    row.children?.push(dataTypeRow);
  }

  if (uri) {
    const uriRow: BUI.TableGroupData<FacetsListTableData> = {
      data: {
        Name: "URI",
        Value: uri,
      },
    };
    row.children?.push(uriRow);
  }

  return row;
};
