// eslint-disable-next-line import/no-unresolved
import * as OBC from "openbim-components";

import * as THREE from "three";
import { TemplateResult, html } from "lit";
import { transformPanelSection } from "../panel-sections/transform";
import { meshGraphicsPanelSection } from "../panel-sections/mesh-graphics";
import { materialPanelSection } from "../panel-sections/material";

export interface MeshPanelState {
  components?: OBC.Components;
  mesh?: THREE.Mesh;
}

export const meshPanel = (state: MeshPanelState) => {
  const { components, mesh } = state;

  let transformSection: TemplateResult | undefined;
  let meshGraphicsSection: TemplateResult | undefined;
  let materialSection: TemplateResult | undefined;
  let findBtn: TemplateResult | undefined;
  let cloneBtn: TemplateResult | undefined;

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

    if (components) {
      const fit = () => {
        const { camera } = components;
        if (camera instanceof OBC.OrthoPerspectiveCamera) {
          camera.fit([mesh]);
        }
      };

      findBtn = html`
        <bim-button
          label="Find"
          icon="material-symbols:fit-screen-rounded"
          @click=${fit}
        ></bim-button>
      `;

      const clone = () => {
        const { parent } = mesh;
        if (parent) {
          const clone = mesh.clone();
          clone.material = material.clone();
          clone.position.set(0, 0, 0);
          parent.add(clone);
          components.meshes.push(clone);
        }
      };

      cloneBtn = html`
        <bim-button
          label="Clone"
          icon="flowbite:file-clone-solid"
          @click=${clone}
        ></bim-button>
      `;
    }
  }

  return html`
    <bim-panel label="Static Mesh">
      ${transformSection} ${meshGraphicsSection} ${materialSection}
      <bim-panel-section label="Extras" collapsed>
        <bim-input> ${findBtn} ${cloneBtn} </bim-input>
      </bim-panel-section>
    </bim-panel>
  `;
};
