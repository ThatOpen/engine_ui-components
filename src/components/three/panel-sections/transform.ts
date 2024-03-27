import * as THREE from "three";
import { TemplateResult, html } from "lit";
import { NumberInput, Input } from "../../..";

const onPositionChange = (e: Event, position: THREE.Vector3) => {
  const input = e.target as NumberInput;
  const parent = input.parentElement as Input;
  const { x, y, z } = parent.value;
  position.set(x, y, z);
};

const onRotationChange = (e: Event, rotation: THREE.Euler) => {
  const input = e.target as NumberInput;
  const parent = input.parentElement as Input;
  const { x, y, z } = parent.value;
  rotation.set(
    THREE.MathUtils.degToRad(x),
    THREE.MathUtils.degToRad(y),
    THREE.MathUtils.degToRad(z),
  );
};

const onScaleChange = (e: Event, scale: THREE.Vector3) => {
  const input = e.target as NumberInput;
  const parent = input.parentElement as Input;
  const { x, y, z } = parent.value;
  scale.set(x, y, z);
};

export const transformPanelSection = (
  transform: {
    position?: THREE.Vector3;
    rotation?: THREE.Euler;
    scale?: THREE.Vector3;
  },
  options?: {
    collapsed?: boolean;
  },
) => {
  const { position, rotation, scale } = transform;

  let positionTemplate: TemplateResult | null = null;
  if (position) {
    positionTemplate = html`
      <bim-input name="position" label="Position" vertical>
        <bim-number-input
          name="x"
          pref="X"
          sufix="m"
          .value=${position.x}
          @input=${(e: Event) => onPositionChange(e, position)}
        ></bim-number-input>
        <bim-number-input
          name="y"
          pref="Y"
          sufix="m"
          .value=${position.y}
          @input=${(e: Event) => onPositionChange(e, position)}
        ></bim-number-input>
        <bim-number-input
          name="z"
          pref="Z"
          sufix="m"
          .value=${position.z}
          @input=${(e: Event) => onPositionChange(e, position)}
        ></bim-number-input>
      </bim-input>
    `;
  }

  let rotationTemplate: TemplateResult | null = null;
  if (rotation) {
    rotationTemplate = html`
      <bim-input name="rotation" label="Rotation" vertical>
        <bim-number-input
          slider
          name="x"
          pref="X"
          min="0"
          max="360"
          sufix="°"
          .value=${THREE.MathUtils.radToDeg(rotation.x)}
          @input=${(e: Event) => onRotationChange(e, rotation)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="y"
          pref="Y"
          min="0"
          max="360"
          sufix="°"
          .value=${THREE.MathUtils.radToDeg(rotation.y)}
          @input=${(e: Event) => onRotationChange(e, rotation)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="z"
          pref="Z"
          min="0"
          max="360"
          sufix="°"
          .value=${THREE.MathUtils.radToDeg(rotation.z)}
          @input=${(e: Event) => onRotationChange(e, rotation)}
        ></bim-number-input>
      </bim-input>
    `;
  }

  let scaleTemplate: TemplateResult | null = null;
  if (scale) {
    scaleTemplate = html`
      <bim-input name="scale" label="Scale" vertical>
        <bim-number-input
          slider
          name="x"
          pref="X"
          sufix="m"
          min="0"
          .value=${scale.x}
          @input=${(e: Event) => onScaleChange(e, scale)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="y"
          pref="Y"
          sufix="m"
          min="0"
          .value=${scale.y}
          @input=${(e: Event) => onScaleChange(e, scale)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="z"
          pref="Z"
          sufix="m"
          min="0"
          .value=${scale.z}
          @input=${(e: Event) => onScaleChange(e, scale)}
        ></bim-number-input>
      </bim-input>
    `;
  }

  return html`
    <bim-panel-section
      label="Transform"
      name="transform"
      icon="material-symbols:transform"
      .collapsed=${options?.collapsed}
    >
      ${positionTemplate} ${rotationTemplate} ${scaleTemplate}
    </bim-panel-section>
  `;
};
