import * as OBC from "openbim-components";
import * as BUI from "@thatopen/ui-components";

interface LoadIfcUIState {
  loader: OBC.FragmentIfcLoader;
}

const template = (state: LoadIfcUIState) => {
  const { loader } = state;
  const onBtnClick = () => {
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".ifc";
    fileOpener.onchange = async () => {
      if (fileOpener.files === null || fileOpener.files.length === 0) return;
      const file = fileOpener.files[0];
      const buffer = await file.arrayBuffer();
      const data = new Uint8Array(buffer);
      const model = await loader.load(data);
      model.name = file.name;
      const scene = loader.components.scene.get();
      scene.add(model);
      fileOpener.remove();
    };
    fileOpener.click();
  };

  return BUI.html`
    <bim-button
      data-ui-id="import-ifc"
      label="IFC"
      icon="mage:box-3d-fill"
      @click=${onBtnClick}
    ></bim-button>
  `;
};

export const loadIfcBtnElement = (state: LoadIfcUIState) => {
  const [loadIfcBtn]: [BUI.Button, BUI.UpdateFunction<LoadIfcUIState>] =
    BUI.UIComponent.create(template, state);

  return loadIfcBtn;
};
