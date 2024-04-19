import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { customElement, property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";
import { HasName, HasValue } from "../../core/types";

@customElement("bim-color-input")
export class ColorInput extends UIComponent implements HasValue, HasName {
  static styles = css`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_color-accent);
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      padding-left: 0.5rem;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 1.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;

  /**
   * The name of the color input.
   * @type {string}
   * @default undefined
   * @example
   * <bim-color-input name="colorInput"></bim-color-input>
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.name = 'colorInput';
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * The label for the color input.
   * @type {string}
   * @default undefined
   * @example
   * <bim-color-input label="Select a color"></bim-color-input>
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.label = 'Select a color';
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * The icon for the color input.
   * @type {string}
   * @default undefined
   * @example
   * <bim-color-input icon="palette"></bim-color-input>
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.icon = 'palette';
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * A boolean attribute which, if present, indicates that the color input should be displayed vertically.
   * @type {boolean}
   * @default false
   * @example
   * <bim-color-input vertical></bim-color-input>
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.vertical = true;
   */
  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  /**
   * The opacity of the color input.
   * @type {number}
   * @default undefined
   * @example
   * <bim-color-input opacity="0.5"></bim-color-input>
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.opacity = 0.5;
   */
  @property({ type: Number, reflect: true })
  opacity?: number;

  /**
   * The color value of the color input in hexadecimal format.
   * @type {string}
   * @default #bcf124
   * @example
   * <bim-color-input color="#ff0000"></bim-color-input>
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.color = '#ff0000';
   */
  @property({ type: String, reflect: true })
  color!: string;

  private _colorInput = createRef<HTMLInputElement>();
  private _textInput = createRef<HTMLInputElement>();
  onValueChange = new Event("input");

  /**
   * Represents both the color and opacity values combined into a single object. This is an instance property, not an HTMLElement attribute.
   * @type {Object}
   * @example
   * const colorInput = document.createElement('bim-color-input');
   * colorInput.value = { color: '#ff0000', opacity: 0.5 };
   */

  set value(_value: { color: string; opacity?: number }) {
    const { color, opacity } = _value;
    this.color = color;
    if (opacity) this.opacity = opacity;
  }

  get value() {
    const value: { color: string; opacity?: number } = {
      color: this.color,
    };
    if (this.opacity) value.opacity = this.opacity;
    return value;
  }

  private onColorInput(e: Event) {
    e.stopPropagation();
    const { value: colorInput } = this._colorInput;
    if (!colorInput) return;
    this.color = colorInput.value;
    this.dispatchEvent(this.onValueChange);
  }

  private onTextInput(e: Event) {
    e.stopPropagation();
    const { value: textInput } = this._textInput;
    if (!textInput) return;
    const { value: inputValue } = textInput;
    let value = inputValue.replace(/[^a-fA-F0-9]/g, "");
    if (!value.startsWith("#")) value = `#${value}`;
    textInput.value = value.slice(0, 7);
    if (textInput.value.length === 7) {
      this.color = textInput.value;
      this.dispatchEvent(this.onValueChange);
    }
  }

  constructor() {
    super();
    this.vertical = false;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.color) this.color = "#bcf124";
  }

  /**
   * Focuses on the color input by programmatically triggering a click event on the underlying color input element.
   * If the color input element is not available, the function does nothing.
   */
  focus() {
    const { value } = this._colorInput;
    if (!value) return;
    value.click();
  }

  render() {
    return html`
      <bim-input
        .label=${this.label}
        .icon=${this.icon}
        .vertical="${this.vertical}"
      >
        <div class="color-container">
          <input
            ${ref(this._colorInput)}
            @input="${this.onColorInput}"
            type="color"
            .value="${this.color}"
          />
          <div
            @click=${this.focus}
            class="sample"
            style="background-color: ${this.color}"
          ></div>
          <input
            ${ref(this._textInput)}
            @input="${this.onTextInput}"
            .value="${this.color}"
            type="text"
          />
        </div>
        ${this.opacity
          ? html`<bim-number-input
              sufix="%"
              .value=${this.opacity}
            ></bim-number-input>`
          : null}
      </bim-input>
    `;
  }
}
