import { LitElement, css, html, nothing, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { HasName, HasValue } from "../../core/types";
import { NumberInput } from "../NumberInput";

/**
 * A custom color input web component for BIM applications. HTML tag: bim-color-input
 *
 * @fires input - Fired when the color or opacity value changes.
 */
export class ColorInput extends LitElement implements HasValue, HasName {
  static styles = css`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      user-select: none;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    bim-label {
      margin-top: var(--bim-input--label-mt, 0);
    }

    .input {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 25px;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: 0 7px;
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
      border: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
      transition: border-color 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
    }

    :host(:not([vertical])[label]) .input,
    :host(:not([vertical])[icon]) .input {
      max-width: var(--bim-input--maxw, fit-content);
    }

    :host(:focus-within) .input {
      border-color: var(--bim-ui_bg-contrast-40);
    }

    input[type="color"] {
      position: absolute;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .sample {
      width: var(--bim-color-input--swatch-sz, 1rem);
      height: var(--bim-color-input--swatch-sz, 1rem);
      border-radius: var(--bim-color-input--swatch-bdrs, var(--bim-ui_size-4xs));
      border: none;
      padding: 0;
      cursor: pointer;
      flex-shrink: 0;
      background-color: var(--_swatch-c);
    }

    :host([disabled]) .sample {
      cursor: default;
      pointer-events: none;
    }

    .sample:focus-visible {
      outline: 2px solid var(--bim-ui_accent-base);
      outline-offset: 1px;
    }

    input[type="text"] {
      height: 100%;
      flex: 1;
      min-width: 0;
      text-transform: uppercase;
      font-size: var(--bim-ui_size-sm);
      font-family: inherit;
      background-color: transparent;
      padding: 0;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([disabled]) input[type="text"] {
      color: var(--bim-ui_bg-contrast-60);
    }

    bim-number-input {
      flex-shrink: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .input {
        transition: none;
      }
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: Boolean, reflect: true })
  vertical = false;

  /** Opacity value in the range 0–100. When undefined, no opacity control is shown. */
  @property({ type: Number })
  opacity?: number;

  /** Hex color value in `#RRGGBB` format. */
  @property({ type: String })
  color = "#ffffff";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _colorInput = createRef<HTMLInputElement>();
  private _textInput = createRef<HTMLInputElement>();

  /** @deprecated Listen for the "input" event on the element instead. */
  readonly onValueChange = new Event("input");

  set value(_value: { color: string; opacity?: number }) {
    const { color, opacity } = _value;
    this.color = color;
    if (opacity !== undefined) this.opacity = opacity;
  }

  get value(): { color: string; opacity?: number } {
    const result: { color: string; opacity?: number } = { color: this.color };
    if (this.opacity !== undefined) result.opacity = this.opacity;
    return result;
  }

  protected override updated(changed: PropertyValues) {
    super.updated(changed);
    if (changed.has("disabled")) {
      if (this.disabled) {
        this.setAttribute("aria-disabled", "true");
      } else {
        this.removeAttribute("aria-disabled");
      }
    }
  }

  private _onColorInput(e: Event) {
    e.stopPropagation();
    const input = this._colorInput.value;
    if (!input) return;
    this.color = input.value;
    this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  }

  private _onTextInput(e: Event) {
    e.stopPropagation();
    const input = this._textInput.value;
    if (!input) return;
    const hex = "#" + input.value.replace(/[^a-fA-F0-9]/g, "").slice(0, 6);
    input.value = hex;
    if (hex.length === 7) {
      this.color = hex;
      this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    }
  }

  private _onOpacityInput(e: Event) {
    if (!(e.target instanceof NumberInput)) return;
    this.opacity = Math.max(0, Math.min(100, e.target.value));
    this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  }

  focus() {
    this._textInput.value?.focus();
  }

  protected render() {
    return html`
      <div class="parent">
        ${this.label || this.icon
          ? html`<bim-label .icon=${this.icon}>${this.label}</bim-label>`
          : nothing}
        <div
          class="input"
          role="group"
          aria-label=${this.label || this.name || "Color input"}
          style="--_swatch-c: ${this.color}"
        >
          <input
            ${ref(this._colorInput)}
            type="color"
            .value=${this.color}
            ?disabled=${this.disabled}
            aria-hidden="true"
            tabindex="-1"
            @input=${this._onColorInput}
          />
          <button
            class="sample"
            type="button"
            aria-label="Open color picker"
            ?disabled=${this.disabled}
            @click=${() => this._colorInput.value?.click()}
          ></button>
          <input
            ${ref(this._textInput)}
            type="text"
            .value=${this.color}
            ?disabled=${this.disabled}
            aria-label=${this.label || this.name || "Hex color value (e.g. #FF0000)"}
            @input=${this._onTextInput}
          />
          ${this.opacity !== undefined
            ? html`<bim-number-input
                label="Opacity"
                label-hidden
                suffix="%"
                min="0"
                max="100"
                slider
                .value=${this.opacity}
                @change=${this._onOpacityInput}
              ></bim-number-input>`
            : nothing}
        </div>
      </div>
    `;
  }
}
