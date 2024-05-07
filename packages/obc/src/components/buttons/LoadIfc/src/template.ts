import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

export interface LoadIfcUIState {
  components: OBC.Components;
}

export const loadIfcTemplate = (state: LoadIfcUIState) => {
  const { components } = state;
  const ifcLoader = components.get(OBC.FragmentIfcLoader);

  const onBtnClick = () => {
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".ifc";
    fileOpener.onchange = async () => {
      if (fileOpener.files === null || fileOpener.files.length === 0) return;
      const file = fileOpener.files[0];
      fileOpener.remove();
      const buffer = await file.arrayBuffer();
      const data = new Uint8Array(buffer);
      const model = await ifcLoader.load(data);
      model.name = file.name.replace(".ifc", "");
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
