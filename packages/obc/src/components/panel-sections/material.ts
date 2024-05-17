import { TemplateResult } from "lit";
import * as THREE from "three";
import * as BUI from "@thatopen/ui";

export interface MaterialUIState {
  material: THREE.Material;
}

const colorTemplate = (material: THREE.Material) => {
  if (!("color" in material && material.color instanceof THREE.Color))
    return null;

  const { color } = material;

  const onChange = (e: Event) => {
    const input = e.target as BUI.ColorInput;
    const { color: inputColor, opacity } = input;
    color.set(inputColor);
    if (material.transparent && opacity) material.opacity = opacity / 100;
  };

  return BUI.html`
    <bim-color-input
      name="color"
      label="Color"
      color=${`#${(material.color as THREE.Color).getHexString()}`}
      @input=${onChange}
      .opacity=${material.transparent ? material.opacity * 100 : null}
    ></bim-color-input>
  `;
};

const metalnessTemplate = (material: THREE.Material) => {
  if (!("metalness" in material && typeof material.metalness === "number"))
    return null;

  const { metalness } = material;

  const onChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    material.metalness = input.value / 100;
  };

  return BUI.html`<bim-number-input
      slider
      name="metalness"
      label="Metalness"
      suffix="%"
      min="0"
      value=${metalness * 100}
      max="100"
      @input=${onChange}
      vertical
    ></bim-number-input>`;
};

const roughnessTemplate = (material: THREE.Material) => {
  if (!("roughness" in material && typeof material.roughness === "number"))
    return null;

  const { roughness } = material;

  const onChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    material.roughness = input.value / 100;
  };

  return BUI.html`<bim-number-input
    slider
    name="roughness"
    label="Roughness"
    suffix="%"
    min="0"
    value=${roughness * 100}
    max="100"
    @input=${onChange}
    vertical
  ></bim-number-input>`;
};

const transparencyTemplate = (material: THREE.Material) => {
  const onChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    material.transparent = input.checked;
  };

  return BUI.html`
    <bim-checkbox
      name="transparent"
      label="Transparent"
      .checked=${material.transparent}
      @change=${onChange}
    ></bim-checkbox>
  `;
};

export const materialTemplate = (state: MaterialUIState) => {
  const { material } = state;

  let pbrTemplate: TemplateResult | null = null;
  if (metalnessTemplate || roughnessTemplate) {
    pbrTemplate = BUI.html`
      <bim-input name="pbrData">
        ${metalnessTemplate(material)} ${roughnessTemplate(material)}
      </bim-input>
    `;
  }

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem">
      ${colorTemplate(material)} 
      ${pbrTemplate}
      ${transparencyTemplate(material)}
    </div>
  `;
};

export const material = (material: THREE.Material) => {
  const component = BUI.Component.create<HTMLDivElement, MaterialUIState>(
    materialTemplate,
    { material },
  );

  const [element, updateElement] = component;

  const transparentCheckbox = element.querySelector<BUI.Checkbox>(
    "bim-checkbox[name='transparent']",
  );

  if (transparentCheckbox) {
    transparentCheckbox.addEventListener("change", () => {
      updateElement();
    });
  }

  return component;
};
