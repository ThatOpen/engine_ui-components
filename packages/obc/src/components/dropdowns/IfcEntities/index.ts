import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as WEBIFC from "web-ifc";

export const entities = () => {
  const dropdown = BUI.Component.create<BUI.Dropdown>(() => {
    const entities = Object.entries(OBC.IfcElements);
    return BUI.html`
        <bim-dropdown label="IFC Entity">
          ${entities.map(([id, name]) => BUI.html`<bim-option .checked=${Number(id) === WEBIFC.IFCWALL} label=${name} value=${Number(id)}></bim-option>`)}
        </bim-dropdown>
      `;
  });

  return dropdown;
};
