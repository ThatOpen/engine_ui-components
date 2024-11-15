import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { FacetsListTableData } from "./types";
import { createParameterRow } from "./parameter-row";

export const createClassificationRow = (facet: OBC.IDSClassification) => {
  const row: BUI.TableGroupData<FacetsListTableData> = {
    data: {
      Name: facet.facetType,
      Cardinality: facet.cardinality,
    },
    children: [],
  };

  const { system, value, uri } = facet;

  const systemRow = createParameterRow("System", system);
  const valueRow = createParameterRow("Value", value);

  if (systemRow) row.children?.push(systemRow);
  if (valueRow) row.children?.push(valueRow);

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
