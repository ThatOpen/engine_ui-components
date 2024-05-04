import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as THREE from "three";

export interface LoadIfcUIState {
  loader: OBC.FragmentIfcLoader;
  scene: THREE.Scene;
}

const template = (state: LoadIfcUIState) => {
  const { loader, scene } = state;
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

export const loadIfc = (state: LoadIfcUIState) => {
  const [element] = BUI.Component.create<BUI.Button, LoadIfcUIState>(
    template,
    state,
  );

  return element;
};
