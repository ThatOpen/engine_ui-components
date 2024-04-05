// eslint-disable-next-line import/no-unresolved
import * as OBC from "openbim-components";
import * as THREE from "three";
import { html } from "lit";

export const loadIfcBtn = (state: {
  loader: OBC.FragmentIfcLoader;
  scene: THREE.Scene;
}) => {
  const { loader, scene } = state;
  const onBtnClick = () => {
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".ifc";
    fileOpener.style.display = "none";
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

  return html`
    <bim-button
      data-ui-id="import-ifc"
      vertical
      label="IFC"
      icon="mage:box-3d-fill"
      @click=${onBtnClick}
    ></bim-button>
  `;
};
