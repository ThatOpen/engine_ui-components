import { TemplateResult, html } from "lit";
import * as THREE from "three";
import { ColorInput, NumberInput, Checkbox } from "@thatopen/ui-components";

const attributesToGenerate = [
  "metalness",
  "roughness",
  "depthTest",
  "wireframe",
];

const onColorChange = (e: Event, color: THREE.Color) => {
  const input = e.target as ColorInput;
  color.set(input.color);
};

const onMetalnessChange = (e: Event, material: THREE.Material) => {
  const input = e.target as NumberInput;
  if ("metalness" in material) {
    material.metalness = input.value / 100;
  }
};

const onRoughnessChange = (e: Event, material: THREE.Material) => {
  const input = e.target as NumberInput;
  if ("roughness" in material) {
    material.roughness = input.value / 100;
  }
};

const onTransparentChange = (e: Event, material: THREE.Material) => {
  const input = e.target as Checkbox;
  material.transparent = input.checked;
};

export const materialPanelSection = (
  material: THREE.Material,
  options?: { collapsed?: boolean },
) => {
  const inputs: HTMLElement[] = [];

  for (const key of attributesToGenerate) {
    if (!(key in material)) continue;
    // @ts-ignore
    const value = material[key];
    const label = key[0].toUpperCase() + key.slice(1);
    let input: any;
    if (value instanceof THREE.Color) {
      // @ts-ignore
      const color = material[key] as THREE.Color;
      input = document.createElement("bim-color-input");
      input.name = key;
      input.color = `#${color.getHexString()}`;
      input.label = label;
      input.addEventListener("input", () => {
        color.set(input.value.color);
      });
    } else if (typeof value === "number") {
      input = document.createElement("bim-number-input");
      input.name = key;
      input.label = label;
      input.value = value;
      input.addEventListener("input", () => {
        // @ts-ignore
        material[key] = input.value;
      });
    } else if (typeof value === "boolean") {
      input = document.createElement("bim-checkbox");
      input.name = key;
      input.label = label;
      input.checked = value;
      input.addEventListener("change", () => {
        // @ts-ignore
        material[key] = input.checked;
      });
    }
    if (input) inputs.push(input);
  }

  const sectionName = `Material${material.name !== "" ? `: ${material.name}` : ""}`;

  let colorTemplate: TemplateResult | null = null;
  if ("color" in material && material.color instanceof THREE.Color) {
    const color = material.color;
    colorTemplate = html`
      <bim-color-input
        name="color"
        label="Color"
        .color=${`#${(material.color as THREE.Color).getHexString()}`}
        @input=${(e: Event) => onColorChange(e, color)}
      ></bim-color-input>
    `;
  }

  let metalnessTemplate: TemplateResult | null = null;
  if ("metalness" in material) {
    const metalness = material.metalness as number;
    metalnessTemplate = html`<bim-number-input
      slider
      name="metalness"
      label="Metalness"
      sufix="%"
      min="0"
      .value=${metalness * 100}
      max="100"
      @input=${(e: Event) => onMetalnessChange(e, material)}
      vertical
    ></bim-number-input>`;
  }

  let roughnessTemplate: TemplateResult | null = null;
  if ("roughness" in material) {
    const roughness = material.roughness as number;
    roughnessTemplate = html`<bim-number-input
      slider
      name="roughness"
      label="Roughness"
      sufix="%"
      min="0"
      .value=${roughness * 100}
      max="100"
      @input=${(e: Event) => onRoughnessChange(e, material)}
      vertical
    ></bim-number-input>`;
  }

  let pbrTemplate: TemplateResult | null = null;
  if (metalnessTemplate || roughnessTemplate) {
    pbrTemplate = html`
      <bim-input name="pbrData">
        ${metalnessTemplate} ${roughnessTemplate}
      </bim-input>
    `;
  }

  return html`
    <bim-panel-section
      .label=${sectionName}
      name="material"
      .collapsed=${options?.collapsed}
    >
      <bim-dropdown required>
        <bim-option
          label="Stone"
          img="resources/stone.jpg"
          vertical
          no-mark
        ></bim-option>
        <bim-option
          label="Glass"
          img="resources/glass.jpg"
          vertical
          no-mark
        ></bim-option>
      </bim-dropdown>
      ${colorTemplate} ${pbrTemplate}
      <bim-checkbox
        name="transparent"
        label="Transparent"
        .checked=${material.transparent}
        @change=${(e: Event) => onTransparentChange(e, material)}
      ></bim-checkbox>
    </bim-panel-section>
  `;
};
