import { TemplateResult } from "lit";
import * as THREE from "three";
import * as BUI from "@thatopen/ui";

/**
 * Interface representing the state of the Material UI component. It contains a THREE.Material object.
 */
export interface MaterialUIState {
  material: THREE.Material;
}

/**
 * Function to generate a color picker template for a given THREE.Material. It creates a color picker input using the BUI library.
 *
 * @param material - The THREE.Material object to generate the template for.
 * @returns A TemplateResult object representing the color picker template.
 *          If the conditions are not met, it returns null.
 */
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

/**
 * Function to generate a metalness template for a given THREE.Material. It creates a metalness input using the BUI library.
 *
 * @param material - The THREE.Material object to generate the template for.
 * @returns A TemplateResult object representing the metalness template.
 *          If the conditions are not met, it returns null.
 */
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

/**
 * Function to generate a roughness template for a given THREE.Material. It creates a roughness input using the BUI library.
 *
 * @param material - The THREE.Material object to generate the template for.
 * @returns A TemplateResult object representing the roughness template.
 *          If the conditions are not met, it returns null.
 */
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

/**
 * Function to generate a transparency template for a given THREE.Material. It creates a transparency checkbox using the BUI library.
 *
 * @param material - The THREE.Material object to generate the template for.
 * @returns A TemplateResult object representing the transparency template.
 *          If the conditions are not met, it returns null.
 */
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

/**
 * Function to generate a material template for a given THREE.Material. It creates a template with color picker, PBR inputs, and transparency checkbox.
 *
 * @param state - The MaterialUIState object containing the THREE.Material object to generate the template for.
 * @returns A TemplateResult object representing the material template.
 *          If the conditions are not met, it returns null.
 */
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

/**
 * Function to create a material component from a given THREE.Material. This function generates a template with color picker, PBR inputs, and transparency checkbox. It also adds event listeners to update the material state when the user interacts with the inputs.
 *
 * @param material - The THREE.Material object to create the component for.
 * @returns A component object containing the HTMLDivElement and the MaterialUIState.
 */
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
