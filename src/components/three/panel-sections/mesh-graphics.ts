import * as THREE from "three";
import { html } from "lit";
import { Checkbox, NumberInput } from "../../..";

export const meshGraphicsPanelSection = (
  mesh: THREE.Mesh,
  options?: { collapsed?: boolean },
) => {
  const onVisibleChange = (e: Event) => {
    const input = e.target as Checkbox;
    mesh.visible = input.checked;
  };

  const onRenderOrderChange = (e: Event) => {
    const input = e.target as NumberInput;
    mesh.renderOrder = input.value;
  };

  return html`
    <bim-panel-section
      label="Graphics"
      name="graphics"
      .collapsed=${options?.collapsed}
    >
      <bim-checkbox
        name="visible"
        label="Visible"
        @change=${onVisibleChange}
        .checked=${mesh.visible}
      ></bim-checkbox>
      <bim-number-input
        name="renderOrder"
        label="Render Order"
        @input=${onRenderOrderChange}
        .value=${mesh.renderOrder}
      ></bim-number-input>
    </bim-panel-section>
  `;
};
