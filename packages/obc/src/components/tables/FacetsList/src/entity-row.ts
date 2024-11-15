import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { FacetsListTableData } from "./types";
import { createParameterRow } from "./parameter-row";

export const createEntityRow = (facet: OBC.IDSEntity) => {
  const row: BUI.TableGroupData<FacetsListTableData> = {
    data: {
      Name: facet.facetType,
      Cardinality: facet.cardinality,
    },
    children: [],
  };

  const { name, predefinedType } = facet;

  const nameRow = createParameterRow("Name", name);
  const predefinedTypeRow = createParameterRow(
    "PredefinedType",
    predefinedType,
  );

  if (nameRow) row.children?.push(nameRow);
  if (predefinedTypeRow) row.children?.push(predefinedTypeRow);

  return row;
};
