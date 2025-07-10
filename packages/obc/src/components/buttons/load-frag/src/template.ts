import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { LoadFragState } from "./types";

/**
 * This function generates the template for the LoadFragUI component. It takes a LoadFragUIState object as a parameter and returns a BUI.html template.
 *
 * @param state - The state object containing the components object from the @thatopen/components library.
 * @returns A BUI.html template representing the LoadFragUI component.
 */
export const loadFragTemplate = (state: LoadFragState) => {
  const { components, world } = state;

  const onBtnClick = () => {
    const fileOpener = document.createElement("input");
    fileOpener.type = "file";
    fileOpener.accept = ".frag";
    fileOpener.onchange = async () => {
      if (fileOpener.files === null || fileOpener.files.length === 0) return;
      const file = fileOpener.files[0];
      const data = await file.arrayBuffer();
      const bytes = new Uint8Array(data);
      const name = file.name.replace(".frag", "");

      const fragments = components.get(OBC.FragmentsManager);
      const model = await fragments.core.load(bytes, {
        modelId: name,
      });

      if (world) {
        world.scene.three.add(model.object);
        model.useCamera(world.camera.three as any);
        fragments.core.update(true);
      }
    };
    fileOpener.click();
  };

  return BUI.html`
    <bim-button @click=${onBtnClick}></bim-button>
  `;
};
