import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
import * as OBC from "@thatopen/components";

const attrsToIgnore = ["OwnerHistory", "ObjectPlacement", "CompositionType"];

export const createAttributesRow = async (
  attrs: { [attribute: string]: any },
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

  const attrsRow: BUI.TableGroupData = { data: { Name: groupName } };

  if (includeClass) {
    if (!attrsRow.children) attrsRow.children = [];
    attrsRow.children.push({
      data: {
        Name: "Class",
        Value: OBC.IfcCategoryMap[attrs.type],
      },
    });
  }

  for (const attrName in attrs) {
    if (attrsToIgnore.includes(attrName)) continue;
    const attrValue = attrs[attrName];
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
