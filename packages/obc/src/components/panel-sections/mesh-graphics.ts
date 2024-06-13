import * as THREE from "three";
import * as BUI from "@thatopen/ui";

/**
 * Creates a BIM panel section for mesh graphics settings.
 *
 * @param mesh - The THREE.Mesh object to be manipulated.
 * @param options - Optional parameters.
 * @param options.collapsed - If true, the panel section will be initially collapsed.
 *
 * @returns A BUI.html element representing the panel section.
 *
 */
export const meshGraphics = (
  mesh: THREE.Mesh,
  options?: { collapsed?: boolean },
) => {
  const onVisibleChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    mesh.visible = input.checked;
  };

  const onRenderOrderChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    mesh.renderOrder = input.value;
  };

  return BUI.html`
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
