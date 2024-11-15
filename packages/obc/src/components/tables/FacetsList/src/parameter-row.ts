import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { FacetsListTableData } from "./types";

export const createParameterRow = (
  name: OBC.IDSFacetParameterName,
  parameter?: OBC.IDSFacetParameter,
) => {
  if (!parameter) return null;

  const row: BUI.TableGroupData<FacetsListTableData> = {
    data: {
      Name: name,
    },
  };

  if (parameter.type === "simple") {
    row.data.Value = String(parameter.parameter);
  } else if (parameter.type === "pattern") {
    row.data.Value = parameter.parameter;
  } else if (parameter.type === "enumeration") {
    row.data.Value = parameter.parameter.join(", ");
  }

  return row;
};
