import * as OBC from "openbim-components";
import * as BUI from "@thatopen/ui-components";

interface ClipStylerUIState {
  styler: OBC.FragmentClipStyler;
}

export const clipStylerTemplate = (state: ClipStylerUIState) => {
  // @ts-ignore
  const { styler } = state;
  const table = document.createElement("bim-table");
  table.rows = [
    {
      data: {
        Name: "Thick",
      },
      children: [
        {
          data: {
            Name: "Categories",
            Value: {
              template: `
                <bim-dropdown multiple required>
                  <bim-option label="IfcWallStandardCase"></bim-option>
                  <bim-option label="IfcSlab"></bim-option>
                  <bim-option label="IfcWindow"></bim-option>
                  <bim-option label="IfcDoor"></bim-option>
                </bim-dropdown>
              `,
            },
          },
        },
        {
          data: {
            Name: "Fill Color",
            Value: {
              template: `<bim-color-input></bim-color-input>`,
            },
          },
        },
        {
          data: {
            Name: "Fill Color",
            Value: {
              template: `<bim-color-input></bim-color-input>`,
            },
          },
        },
        {
          data: {
            Name: "Line Thickness",
            Value: {
              template: `<bim-number-input min="0" value="0.5" max="1" step="0.001" sensitivity="10" slider></bim-number-input>`,
            },
          },
        },
      ],
    },
  ];

  table.headersHidden = true;
  table.columns = [{ name: "Name", width: "8.375rem" }];

  return BUI.html` ${table} `;
};
