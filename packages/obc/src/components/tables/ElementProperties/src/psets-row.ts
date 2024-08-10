/* eslint-disable import/no-extraneous-dependencies */
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";

export const createPsetsRow = async (
  model: FRAGS.FragmentsGroup,
  psets: { [attribute: string]: any }[],
) => {
  const row: BUI.TableGroupData = { data: { Name: "PropertySets" } };
  for (const pset of psets) {
    const setRow: BUI.TableGroupData = {
      data: { Name: pset.Name.value },
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
