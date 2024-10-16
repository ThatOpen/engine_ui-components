/* eslint-disable import/no-extraneous-dependencies */
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
import { getModelUnit } from "./get-model-unit";
import { ElementPropertiesUI } from "./template";

export const createPsetsRow = async (
  model: FRAGS.FragmentsGroup,
  psets: { [attribute: string]: any }[],
  uiState: ElementPropertiesUI,
) => {
  const { displayUnits } = uiState;
  const row: BUI.TableGroupData = { data: { Name: "PropertySets" } };
  for (const pset of psets) {
    const setRow: BUI.TableGroupData = {
      data: { Name: pset.Name?.value },
    };
    if (pset.type !== WEBIFC.IFCPROPERTYSET) continue;
    for (const propHandle of pset.HasProperties) {
      const { value: propID } = propHandle;
      const propAttrs = await model.getProperties(propID);
      if (!propAttrs) continue;
      const valueKey = Object.keys(propAttrs).find((attr) =>
        attr.includes("Value"),
      );
      if (!(valueKey && propAttrs[valueKey])) continue;
      let value = propAttrs[valueKey].value;
      let symbol = "";
      if (displayUnits) {
        const { name } = propAttrs[valueKey];
        const units: Record<string, any> =
          (await getModelUnit(model, name)) ?? {};
        symbol = units.symbol;
        value = propAttrs[valueKey].value;
        if (typeof value === "number" && units.digits) {
          value = value.toFixed(units.digits);
        }
      }
      const propRow: BUI.TableGroupData = {
        data: {
          Name: propAttrs.Name?.value,
          Value: `${value} ${symbol ?? ""}`,
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
