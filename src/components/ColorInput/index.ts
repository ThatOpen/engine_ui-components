import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { UIComponent } from "../../core/UIComponent";
import { HasName, HasValue } from "../../core/types";

export class ColorInput extends UIComponent implements HasValue, HasName {
  static styles = css`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
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

  static properties = {
    name: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    color: { type: Number, reflect: true },
    opacity: { type: Number, reflect: true },
    value: { type: Object, attribute: false },
  };

  declare name?: string;
  declare label?: string;
  declare icon?: string;
  declare color: string;
  declare opacity?: number;

  private _colorInput = createRef<HTMLInputElement>();
  private _textInput = createRef<HTMLInputElement>();
  onValueChange = new Event("input");

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

  constructor() {
    super();
    this.color = "#bcf124";
  }

  private onColorInput() {
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

  focus() {
    const { value } = this._colorInput;
    if (!value) return;
    value.click();
  }

  render() {
    return html`
      <bim-input .label=${this.label} .icon=${this.icon}>
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
