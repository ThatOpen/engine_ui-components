import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import { panelSections } from "..";

interface MeshUIState {
  mesh: THREE.Mesh;
}

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

export const mesh = (mesh: THREE.Mesh) => {
  const [element] = BUI.Component.create<BUI.Panel, MeshUIState>(meshTemplate, {
    mesh,
  });

  return element;
};
