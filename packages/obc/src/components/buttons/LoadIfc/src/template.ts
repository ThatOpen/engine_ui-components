import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

/**
 * Interface representing the state of the LoadIfcUI component. It contains a reference to the Components object from the @thatopen/components library.
 */
export interface LoadIfcUIState {
  components: OBC.Components;
}

/**
 * This function generates the template for the LoadIfcUI component. It takes a LoadIfcUIState object as a parameter and returns a BUI.html template.
 *
 * @param state - The state object containing the components object from the @thatopen/components library.
 * @returns A BUI.html template representing the LoadIfcUI component.
 */
export const loadIfcTemplate = (state: LoadIfcUIState) => {
  const { components } = state;
  const ifcLoader = components.get(OBC.IfcLoader);

  const onBtnClick = () => {
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".ifc";
    fileOpener.onchange = async () => {
      if (fileOpener.files === null || fileOpener.files.length === 0) return;
      const file = fileOpener.files[0];
      const fileName = file.name.replace(".ifc", "");
      fileOpener.remove();
      const buffer = await file.arrayBuffer();
      const data = new Uint8Array(buffer);
      await ifcLoader.load(data, true, fileName);
    };
    fileOpener.click();
  };

  return BUI.html`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${onBtnClick}
    ></bim-button>
  `;
};
