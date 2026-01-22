import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { LoadIfcState } from "./types";

/**
 * This function generates the template for the LoadIfcUI component. It takes a LoadIfcUIState object as a parameter and returns a BUI.html template.
 *
 * @param state - The state object containing the components object from the @thatopen/components library.
 * @returns A BUI.html template representing the LoadIfcUI component.
 */
export const loadIfcTemplate = (state: LoadIfcState) => {
  const { components, modelUserData, worldName: worldId } = state;

  const onBtnClick = () => {
    if (!(components && worldId)) return;
    const worldsList = [...components.get(OBC.Worlds).list.values()];
    const world = worldsList.find((w) => "name" in w && w.name === worldId);
    if (!world) return;
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".ifc";
    fileOpener.onchange = async () => {
      if (fileOpener.files === null || fileOpener.files.length === 0) return;
      const file = fileOpener.files[0];
      const data = await file.arrayBuffer();
      const bytes = new Uint8Array(data);
      const name = file.name.replace(".ifc", "");

      const fragments = components.get(OBC.FragmentsManager);
      const ifcLoader = components.get(OBC.IfcLoader);
      ifcLoader.settings.autoSetWasm = false;
      ifcLoader.settings.wasm = {
        path: "https://unpkg.com/web-ifc@0.0.74/",
        absolute: false,
      };

      const model = await ifcLoader.load(bytes, true, name, {
        userData: modelUserData,
      });
      world.scene.three.add(model.object);
      model.useCamera(world.camera.three as any);
      fragments.core.update(true);
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
