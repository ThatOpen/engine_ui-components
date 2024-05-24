// eslint-disable-next-line import/no-unresolved
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

/**
 * Heloooooooooo
 */
export const ifcEntities = () => {
  const dropdown = document.createElement(
    "bim-dropdown",
  ) as unknown as BUI.Dropdown;

  dropdown.onchange = () => {
    const value = dropdown.value as number[];
    console.log(value);
  };

  // let count = 0;
  for (const constant in OBC.IfcCategoryMap) {
    // if (count === 30) break;
    const entity = OBC.IfcCategoryMap[constant];
    const option = document.createElement("bim-option");
    option.label = entity;
    option.value = Number(constant);
    dropdown.append(option);
    // count++;
  }

  dropdown.value = [5716631];

  return BUI.html`${dropdown}`;
};
