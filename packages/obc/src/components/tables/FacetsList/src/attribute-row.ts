import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { FacetsListTableData } from "./types";
import { createParameterRow } from "./parameter-row";

export const createAttributeRow = (facet: OBC.IDSAttribute) => {
  const row: BUI.TableGroupData<FacetsListTableData> = {
    data: {
      Name: facet.facetType,
      Cardinality: facet.cardinality,
    },
    children: [],
  };

  const { name, value } = facet;

  const nameRow = createParameterRow("Name", name);
  const valueRow = createParameterRow("Value", value);

  if (nameRow) row.children?.push(nameRow);
  if (valueRow) row.children?.push(valueRow);

  return row;
};
