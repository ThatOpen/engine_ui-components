import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import { panelSections } from "../panel-sections";

/**
 * Interface representing the state of a Mesh UI component. It contains a single property: `mesh`, which is a THREE.Mesh object.
 */
export interface MeshUIState {
  /**
   * The THREE.Mesh object associated with this UI component.
   */
  mesh: THREE.Mesh;
}

/**
 * Function that generates a template for a Mesh UI component. This template is used to create the visual representation of the component in the UI.
 *
 * @param state - An object representing the state of the Mesh UI component.
 * @returns A BUI.html template that describes the UI layout for the Mesh component.
 */
export const meshTemplate = (state: MeshUIState) => {
  const { mesh } = state;

  const meshGraphicsSection = panelSections.meshGraphics(mesh, {
    collapsed: true,
  });

  const transform = {
    position: mesh.position,
    rotation: mesh.rotation,
    scale: mesh.scale,
  };

  const transformSection = panelSections.meshTransform(transform, {
    collapsed: false,
  });

  const material = Array.isArray(mesh.material)
    ? mesh.material[0]
    : mesh.material;

  const materialSection = panelSections.material(material);

  return BUI.html`
    <bim-panel label="Static Mesh">
      ${transformSection} ${meshGraphicsSection} ${materialSection}
    </bim-panel>
  `;
};

/**
 * Function that generates a Mesh UI component. This function creates a BUI.Panel element with a custom template that displays the properties of a given THREE.Mesh object.
 *
 * @param mesh - The THREE.Mesh object for which the UI component will be created.
 * @returns A BUI.Panel element representing the Mesh UI component.
 */
export const mesh = (mesh: THREE.Mesh) => {
  const [element] = BUI.Component.create<BUI.Panel, MeshUIState>(meshTemplate, {
    mesh,
  });

  return element;
};
