import * as BUI from "@thatopen/ui";
import * as THREE from "three";
import { panelSections } from "../panel-sections";


/**
 * Interface representing the state of the MaterialsList component. It contains an array of THREE.Material objects.
 */
export interface MaterialsListUIState {
  /**
   * An array of THREE.Material objects.
   */
  materials: THREE.Material[];
}

/**
 * A function that generates a template for the MaterialsList component. This template is a function that takes a MaterialsListUIState object as a parameter and returns a HTMLDivElement.
 *
 * @param state - An object representing the state of the MaterialsList component.
 * @returns A HTMLDivElement representing the template for the MaterialsList component.
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
 * A function that creates a MaterialsList component. This component displays a dropdown menu for selecting a material from a list of THREE.Material objects. It also shows a section for editing the properties of the selected material.
 *
 * @param materials - An array of THREE.Material objects to populate the dropdown menu.
 * @returns A BUI.Component representing the MaterialsList component.
 */
export const materialsList = (materials: THREE.Material[]) => {
  const component = BUI.Component.create<HTMLDivElement, MaterialsListUIState>(
    materialsListTemplate,
    { materials },
  );

  return component;
};
