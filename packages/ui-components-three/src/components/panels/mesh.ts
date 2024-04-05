import * as THREE from "three";
import { TemplateResult, html } from "lit";
import { transformPanelSection } from "../panel-sections/transform";
import { meshGraphicsPanelSection } from "../panel-sections/mesh-graphics";
import { materialPanelSection } from "../panel-sections/material";

export interface MeshPanelState {
  mesh?: THREE.Mesh;
}

export const meshPanel = (state: MeshPanelState) => {
  const { mesh } = state;

  let transformSection: TemplateResult | undefined;
  let meshGraphicsSection: TemplateResult | undefined;
  let materialSection: TemplateResult | undefined;

  if (mesh) {
    meshGraphicsSection = meshGraphicsPanelSection(mesh, { collapsed: true });

    const transform = {
      position: mesh.position,
      rotation: mesh.rotation,
      scale: mesh.scale,
    };

    transformSection = transformPanelSection(transform, { collapsed: false });

    const material = Array.isArray(mesh.material)
      ? mesh.material[0]
      : mesh.material;

    materialSection = materialPanelSection(material, { collapsed: true });
  }

  return html`
    <bim-panel label="Static Mesh">
      ${transformSection} ${meshGraphicsSection} ${materialSection}
    </bim-panel>
  `;
};
