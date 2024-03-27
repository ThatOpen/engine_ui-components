import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { UIComponent } from "../../UIComponent";
import { HasName, HasValue } from "../../types";

// TODO: Improve slider by defining a step.

export class NumberInput extends UIComponent implements HasValue, HasName {
  static styles = css`
    :host {
      flex: 1;
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_color-accent)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([sufix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_color-main);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }
  `;

  static properties = {
    name: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    pref: { type: String, reflect: true },
    min: { type: Number, reflect: true },
    value: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
    sufix: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
    slider: { type: Boolean, reflect: true },
  };

  declare name?: string;
  declare icon?: string;
  declare label?: string;
  declare pref?: string;
  declare min?: number;
  declare max?: number;
  declare sufix?: string;
  declare value: number;
  declare vertical: boolean;
  declare slider: boolean;

  private _input = createRef<HTMLInputElement>();
  onValueChange = new Event("input");

  constructor() {
    super();
    this.value = 0;
    this.vertical = false;
    this.slider = false;
    if (this.min && this.max && (this.min > this.max || this.max < this.min)) {
      throw new Error(
        "bim-number-input min value can't be greater than max and max can't be lower than min.",
      );
    }
  }

  private onInput(e: Event) {
    e.stopPropagation();
    const { value: input } = this._input;
    if (!input) return;
    this.setValue(input.value);
  }

  private setValue(_value: string) {
    const { value: input } = this._input;

    let value = _value;
    value = value.replace(/[^0-9.-]/g, ""); // Only allow numbers, dots, and minus
    value = value.replace(/(\..*)\./g, "$1"); // Only allow one dot
    if (input) input.value = value;
    if (value.endsWith(".")) return;
    if (value.lastIndexOf("-") > 0) {
      value = value[0] + value.substring(1).replace(/-/g, "");
    }
    if (input) input.value = value;
    if (value === "-" || value === "-0") return;

    let numericValue = Number(value);

    if (Number.isNaN(numericValue)) return;

    numericValue =
      this.min !== undefined ? Math.max(numericValue, this.min) : numericValue;
    numericValue =
      this.max !== undefined ? Math.min(numericValue, this.max) : numericValue;

    this.value = numericValue;
    if (input) input.value = this.value.toString();
    this.dispatchEvent(this.onValueChange);
  }

  private onBlur() {
    const { value: input } = this._input;
    if (input && Number.isNaN(Number(input.value)))
      input.value = this.value.toString();
  }

  private onSliderMouseDown(e: MouseEvent) {
    document.body.style.cursor = "w-resize";
    const { clientX: startPosition } = e;
    const initialValue = this.value;
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: endPosition } = e;
      const value = initialValue + (endPosition - startPosition);
      this.setValue(value.toString());
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "default";
    });
  }

  focus() {
    const { value } = this._input;
    if (!value) return;
    value.focus();
  }

  render() {
    const regularTemplate = html`
      ${this.pref || this.icon
        ? html`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.pref}
            .icon=${this.icon}
          ></bim-label>`
        : null}
      <input
        ${ref(this._input)}
        type="text"
        size="1"
        @input=${this.onInput}
        @change=${this.onInput}
        @blur=${this.onBlur}
        .value=${this.value.toString()}
      />
      ${this.sufix
        ? html`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.sufix}
          ></bim-label>`
        : null}
    `;

    const min = this.min ?? -Infinity;
    const max = this.max ?? +Infinity;
    const normalizedValue = (100 * (this.value - min)) / (max - min);
    const sliderTemplate = html`
      <style>
        .slider-indicator {
          width: ${`${normalizedValue}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref || this.icon
          ? html`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .label=${`${this.pref}: `}
              .icon=${this.icon}
            ></bim-label>`
          : null}
        <bim-label
          style="z-index: 1;"
          .label=${this.value.toString()}
        ></bim-label>
        ${this.sufix
          ? html`<bim-label
              style="z-index: 1;"
              .label=${this.sufix}
            ></bim-label>`
          : null}
      </div>
    `;

    return html`
      <bim-input
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider ? sliderTemplate : regularTemplate}
      </bim-input>
    `;
  }
}
