import * as BUI from "@thatopen/ui";
import * as THREE from "three";
import { panelSections } from "../panel-sections";

/**
 * Heloooooooooo
 */
export interface MaterialsListUIState {
  materials: THREE.Material[];
}

/**
 * Heloooooooooo
 */
export const materialsListTemplate = (state: MaterialsListUIState) => {
  const { materials: inputList } = state;

  const materials: Record<string, THREE.Material> = {};

  for (const material of inputList) {
    const name = material.name === "" ? material.uuid : material.name;
    materials[name] = material;
  }

  const firstMaterial = inputList[0];

  let materialSection: HTMLDivElement | undefined;

  const materialDropdown = document.createElement("bim-dropdown");
  materialDropdown.required = true;

  if (firstMaterial) {
    const [materialUI, updateMaterialSection] =
      panelSections.material(firstMaterial);
    materialSection = materialUI;

    materialDropdown.addEventListener("change", () => {
      const material = materialDropdown.value[0] as THREE.MeshStandardMaterial;
      updateMaterialSection({ material });
    });

    const materialEntries = Object.entries(materials);
    const options = materialEntries.map((entry) => {
      const [name, material] = entry;
      const option = document.createElement("bim-option");
      option.label = name ?? material.uuid;
      option.value = material;
      return option;
    });

    materialDropdown.append(...options);
    materialDropdown.value = [firstMaterial];
  }

  return BUI.html`
    <div>
      ${
        inputList.length > 0
          ? BUI.html`
            <div style="display: flex; flex-direction: column; gap: 0.75rem">
              ${materialDropdown}
              ${materialSection}
            </div>
            `
          : BUI.html`<bim-label>The list of materials is empty</bim-label>`
      }
    </div>
  `;
};

/**
 * Heloooooooooo
 */
export const materialsList = (materials: THREE.Material[]) => {
  const component = BUI.Component.create<HTMLDivElement, MaterialsListUIState>(
    materialsListTemplate,
    { materials },
  );

  return component;
};
