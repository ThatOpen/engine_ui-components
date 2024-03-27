// eslint-disable-next-line import/no-unresolved
import * as OBC from "openbim-components";
import { html } from "lit";

export const importToolbarSection = (state: { viewer: OBC.Components }) => {
  const { viewer } = state;
  const onImportIfcClick = () => {
    const ifcLoader = viewer.tools.get(OBC.FragmentIfcLoader);
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".ifc";
    fileOpener.style.display = "none";
    fileOpener.onchange = async () => {
      if (fileOpener.files === null || fileOpener.files.length === 0) return;
      const file = fileOpener.files[0];
      const buffer = await file.arrayBuffer();
      const data = new Uint8Array(buffer);
      const model = await ifcLoader.load(data, file.name);
      const scene = viewer.scene.get();
      scene.add(model);
      fileOpener.remove();
    };
    fileOpener.click();
  };

  return html`
    <bim-toolbar label="Import" icon="solar:import-bold" active>
      <bim-toolbar-section label="OpenBIM">
        <bim-button
          data-ui-id="import-ifc"
          vertical
          label="IFC"
          icon="mage:box-3d-fill"
          @click=${onImportIfcClick}
        ></bim-button>
        <bim-toolbar-group>
          <bim-button label="BCF" icon="ri:todo-fill"></bim-button>
          <bim-button label="IDS" icon="ri:information-2-fill"></bim-button>
        </bim-toolbar-group>
      </bim-toolbar-section>
    </bim-toolbar>
  `;
};
