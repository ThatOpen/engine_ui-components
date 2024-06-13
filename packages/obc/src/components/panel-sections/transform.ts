import * as THREE from "three";
import { TemplateResult } from "lit";
import * as BUI from "@thatopen/ui";

const onPositionChange = (e: Event, position: THREE.Vector3) => {
  const input = e.target as BUI.NumberInput;
  const parent = input.parentElement as BUI.Input;
  const { x, y, z } = parent.value;
  position.set(x, y, z);
};

const onRotationChange = (e: Event, rotation: THREE.Euler) => {
  const input = e.target as BUI.NumberInput;
  const parent = input.parentElement as BUI.Input;
  const { x, y, z } = parent.value;
  rotation.set(
    THREE.MathUtils.degToRad(x),
    THREE.MathUtils.degToRad(y),
    THREE.MathUtils.degToRad(z),
  );
};

const onScaleChange = (e: Event, scale: THREE.Vector3) => {
  const input = e.target as BUI.NumberInput;
  const parent = input.parentElement as BUI.Input;
  const { x, y, z } = parent.value;
  scale.set(x, y, z);
};

/**
 * A function to generate a mesh transform section for a 3D editor.
 *
 * @param transform - An object containing optional position, rotation, and scale properties.
 * @param options - An optional object containing a collapsed property.
 * @returns A TemplateResult representing the mesh transform section.
 *
 * @remarks
 * This function generates a mesh transform section for a 3D editor. It takes in transform and options parameters,
 * and returns a TemplateResult representing the mesh transform section.
 *
 * The transform parameter is an object with optional position, rotation, and scale properties.
 * The position property is a THREE.Vector3 representing the position of the mesh.
 * The rotation property is a THREE.Euler representing the rotation of the mesh.
 * The scale property is a THREE.Vector3 representing the scale of the mesh.
 *
 * The options parameter is an optional object with a collapsed property.
 * The collapsed property is a boolean indicating whether the mesh transform section should be initially collapsed.
 *
 * The function generates the mesh transform section using the provided transform and options.
 * It creates input fields for position, rotation, and scale, and updates the corresponding properties when the input fields are changed.
 *
 * The function returns a TemplateResult representing the mesh transform section.
 */
export const meshTransform = (
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
    positionTemplate = BUI.html`
      <bim-input name="position" label="Position" vertical>
        <bim-number-input
          name="x"
          pref="X"
          suffix="m"
          .value=${position.x}
          @input=${(e: Event) => onPositionChange(e, position)}
        ></bim-number-input>
        <bim-number-input
          name="y"
          pref="Y"
          suffix="m"
          .value=${position.y}
          @input=${(e: Event) => onPositionChange(e, position)}
        ></bim-number-input>
        <bim-number-input
          name="z"
          pref="Z"
          suffix="m"
          .value=${position.z}
          @input=${(e: Event) => onPositionChange(e, position)}
        ></bim-number-input>
      </bim-input>
    `;
  }

  let rotationTemplate: TemplateResult | null = null;
  if (rotation) {
    rotationTemplate = BUI.html`
      <bim-input name="rotation" label="Rotation" vertical>
        <bim-number-input
          slider
          name="x"
          pref="X"
          min="0"
          max="360"
          suffix="°"
          .value=${THREE.MathUtils.radToDeg(rotation.x)}
          @input=${(e: Event) => onRotationChange(e, rotation)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="y"
          pref="Y"
          min="0"
          max="360"
          suffix="°"
          .value=${THREE.MathUtils.radToDeg(rotation.y)}
          @input=${(e: Event) => onRotationChange(e, rotation)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="z"
          pref="Z"
          min="0"
          max="360"
          suffix="°"
          .value=${THREE.MathUtils.radToDeg(rotation.z)}
          @input=${(e: Event) => onRotationChange(e, rotation)}
        ></bim-number-input>
      </bim-input>
    `;
  }

  let scaleTemplate: TemplateResult | null = null;
  if (scale) {
    scaleTemplate = BUI.html`
      <bim-input name="scale" label="Scale" vertical>
        <bim-number-input
          slider
          name="x"
          pref="X"
          suffix="m"
          min="0"
          .value=${scale.x}
          @input=${(e: Event) => onScaleChange(e, scale)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="y"
          pref="Y"
          suffix="m"
          min="0"
          .value=${scale.y}
          @input=${(e: Event) => onScaleChange(e, scale)}
        ></bim-number-input>
        <bim-number-input
          slider
          name="z"
          pref="Z"
          suffix="m"
          min="0"
          .value=${scale.z}
          @input=${(e: Event) => onScaleChange(e, scale)}
        ></bim-number-input>
      </bim-input>
    `;
  }

  return BUI.html`
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
