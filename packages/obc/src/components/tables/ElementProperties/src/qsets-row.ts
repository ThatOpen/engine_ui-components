/* eslint-disable import/no-extraneous-dependencies */
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";

export const createQsetsRow = async (
  model: FRAGS.FragmentsGroup,
  qsets: { [attribute: string]: any }[],
) => {
  const row: BUI.TableGroupData = { data: { Name: "QuantitySets" } };
  for (const qset of qsets) {
    const setRow: BUI.TableGroupData = { data: { Name: qset.Name.value } };
    if (qset.type !== WEBIFC.IFCELEMENTQUANTITY) continue;
    for (const qtoHandle of qset.Quantities) {
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
