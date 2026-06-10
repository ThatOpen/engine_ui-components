import { LitElement, css, html, nothing, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { HasName, HasValue } from "../../core/types";
import { getQuery } from "../../core/utils";
import { styles } from "../../core/Manager/src/styles";

export type TextInputType =
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "area";

/**
 * A custom text input web component for BIM applications. HTML tag: bim-text-input
 */
export class TextInput extends LitElement implements HasName, HasValue<string> {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: block;
      }

      .parent {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;
        user-select: none;
        flex: 1;
        align-items: normal;
      }

      :host(:not([vertical])) .parent {
        justify-content: space-between;
      }

      :host([vertical]) .parent {
        flex-direction: column;
      }

      :host(:not([vertical])[type="area"]) .parent {
        align-items: flex-start;
      }

      bim-label {
        margin-top: var(--bim-input--label-mt, 0);
      }

      :host(:not([vertical])[type="area"]) bim-label {
        margin-top: 4px;
      }

      .input {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 25px;
        min-width: 3rem;
        gap: var(--bim-input--g, var(--bim-ui_size-4xs));
        padding: 0 7px;
        background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
        border: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
        border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
        transition: border-color 0.15s;
      }

      :host([type="area"]) .input {
        height: auto;
        min-height: 25px;
        align-items: flex-start;
        padding: 4px 7px;
      }

      :host(:not([vertical])) .input {
        flex: 1;
        justify-content: flex-end;
      }

      :host(:not([vertical])[label]) .input {
        max-width: var(--bim-input--maxw, fit-content);
      }

      :host(:focus-within) .input {
        border-color: var(--bim-ui_bg-contrast-40);
      }

      :host([invalid]) .input {
        border-color: var(--bim-ui_danger-base);
      }

      input,
      textarea {
        font-size: var(--bim-ui_size-base);
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        color-scheme: dark;
      }

      :host-context(html.bim-ui-light) input {
        color-scheme: light;
      }

      @media (prefers-color-scheme: light) {
        input {
          color-scheme: light;
        }
      }

      :host([disabled]) input,
      :host([disabled]) textarea {
        color: var(--bim-text-input--disabled-c, var(--bim-ui_bg-contrast-60));
      }

      textarea {
        line-height: 1.1rem;
        outline: none;
        resize: var(--bim-text-input--resize, vertical);
      }

      .validation-message {
        display: block;
        font-size: var(--bim-ui_size-base);
        color: var(--bim-ui_danger-base);
        padding: 2px var(--bim-ui_size-xs);
      }

      :host(:not([vertical])) .validation-message {
        text-align: right;
      }

      :host([icon-inside]) input,
      :host([icon-inside]) textarea {
        width: auto;
        flex: 1;
        min-width: 0;
      }

      @media (prefers-reduced-motion: reduce) {
        .input {
          transition: none;
        }
      }
    `,
  ];

  private static readonly _inputTypes: TextInputType[] = [
    "date",
    "datetime-local",
    "email",
    "month",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week",
    "area",
  ];

  private _debounceTimeoutID?: ReturnType<typeof setTimeout>;
  private _type: TextInputType = "text";
  private _cachedQuery: ReturnType<typeof getQuery> | undefined = undefined;
  private _dirty = false;
  private _currentValidation?: { valid: boolean; message?: string };
  private _validation?: (value: string) => { valid: boolean; message?: string };

  /**
   * Represents the icon property of the TextInput component.
   * This property is used to display an icon next to the input field.
   *
   * @example
   * <bim-text-input icon="material-symbols:search"></bim-text-input>
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * Represents the label property of the TextInput component.
   * This property is used to display a label above or next to the input field.
   *
   * @example
   * <bim-text-input label="Name"></bim-text-input>
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Represents the name property of the TextInput component.
   * This property is used to uniquely identify the input field within a form or group of inputs.
   *
   * @example
   * <bim-text-input name="username"></bim-text-input>
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * Represents the placeholder property of the TextInput component.
   * This property is used to display a hint or a placeholder text inside the input field.
   * The placeholder text is displayed when the input field is empty and loses focus.
   *
   * @example
   * <bim-text-input placeholder="Enter your name.."></bim-text-input>
   */
  @property({ type: String, reflect: true })
  placeholder?: string;

  /**
   * Represents the value property of the TextInput component.
   * This property is used to get or set the current value of the input field.
   *
   * @example
   * // Get the current value
   * const currentValue = textInput.value;
   *
   * // Set a new value
   * textInput.value = "New Value";
   */
  @property({ type: String })
  value = "";

  /**
   * Represents the vertical property of the TextInput component.
   * This property is used to control the layout of the input field.
   * When set to `true`, the input field will be displayed vertically.
   *
   * @default false
   *
   * @example
   * <bim-text-input vertical></bim-text-input>
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * Represents the debounce property of the TextInput component.
   * This property is used to control the delay in milliseconds before the `input` event is fired.
   * The `input` event is debounced to prevent excessive event firing when the user types rapidly.
   *
   * @default undefined
   *
   * @example
   * <bim-text-input debounce="500"></bim-text-input>
   */
  @property({ type: Number })
  debounce?: number;

  @property({ type: Number })
  rows?: number;

  /**
   * Represents the disabled property of the TextInput component.
   * This property is used to disable the input field.
   * When set to `true`, the input field will be disabled and the user will not be able to interact with it.
   *
   * @default false
   *
   * @example
   * <bim-text-input disabled></bim-text-input>
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String, reflect: true })
  autocomplete?: string;

  @property({ type: Boolean, reflect: true, attribute: "icon-inside" })
  iconInside = false;

  /**
   * Represents the resize property of the TextInput component.
   * This property controls how the textarea can be resized.
   * Possible values: "none", "both", "horizontal", "vertical", "block", "inline"
   *
   * @default "vertical"
   *
   * @example
   * <bim-text-input resize="both"></bim-text-input>
   */
  @property({ type: String, reflect: true })
  resize: "none" | "both" | "horizontal" | "vertical" | "block" | "inline" =
    "vertical";

  /**
   * Sets the type of the input field.
   * Accepted values: "date", "datetime-local", "email", "month", "password", "search", "tel", "text", "time", "url", "week", "area" (renders a textarea).
   * If an invalid type is provided, the setter is ignored and a warning is logged.
   *
   * @example
   * textInput.type = "email";
   */
  @property({ type: String, reflect: true })
  set type(value: TextInputType) {
    if (TextInput._inputTypes.includes(value)) {
      this._type = value;
    } else {
      console.warn(`[bim-text-input] Unknown type "${value}". Ignored.`);
    }
  }

  get type(): TextInputType {
    return this._type;
  }

  /**
   * Returns the parsed query from the current value, or `null` if the value
   * cannot be parsed. Result is cached and invalidated when `value` changes.
   */
  get query() {
    if (this._cachedQuery === undefined) {
      this._cachedQuery = getQuery(this.value);
    }
    return this._cachedQuery;
  }

  /** @deprecated Listen for the "input" event on the element instead. */
  onValueChange = new Event("input");

  get validation() {
    return this._validation;
  }

  set validation(fn: ((value: string) => { valid: boolean; message?: string }) | undefined) {
    this._validation = fn;
    this.requestUpdate();
  }

  get isValid(): boolean {
    if (!this._dirty) return true;
    return this._currentValidation?.valid ?? true;
  }

  protected override willUpdate(changed: PropertyValues) {
    if (changed.has("value")) {
      this._cachedQuery = undefined;
    }
    this._currentValidation = this._validation ? this._validation(this.value) : undefined;
  }

  protected override updated() {
    this.toggleAttribute("invalid", !this.isValid);
  }

  private onInputChange(e: Event) {
    this._dirty = true;
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    clearTimeout(this._debounceTimeoutID);
    if (this.debounce == null) {
      this.value = input.value;
      this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    } else {
      this._debounceTimeoutID = setTimeout(() => {
        this.value = input.value;
        this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      }, this.debounce);
    }
  }

  async focus() {
    await this.updateComplete;
    const el = this.shadowRoot?.querySelector<HTMLElement>("input, textarea");
    el?.focus();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._debounceTimeoutID);
  }

  protected render() {
    const useIconInside = this.iconInside && this.type !== "area";
    const labelIcon = useIconInside ? undefined : this.icon;
    return html`
      <div class="parent">
        ${this.label || labelIcon
          ? html`<bim-label .icon=${labelIcon}>${this.label}</bim-label>`
          : nothing}
        <div class="input">
          ${useIconInside && this.icon
            ? html`<bim-label .icon=${this.icon}></bim-label>`
            : nothing}
          ${this.type === "area"
            ? html`<textarea
                aria-label=${this.label || "Text Input"}
                .value=${this.value}
                .rows=${this.rows ?? 5}
                ?disabled=${this.disabled}
                placeholder=${ifDefined(this.placeholder)}
                @input=${this.onInputChange}
                style=${styleMap({ "--bim-text-input--resize": this.resize })}
              ></textarea>`
            : html`<input
                aria-label=${this.label || "Text Input"}
                .type=${this.type}
                .value=${this.value}
                ?disabled=${this.disabled}
                placeholder=${ifDefined(this.placeholder)}
                autocomplete=${ifDefined(this.autocomplete)}
                @input=${this.onInputChange}
              />`}
        </div>
      </div>
      ${!this.isValid && this._currentValidation?.message
        ? html`<span class="validation-message">${this._currentValidation.message}</span>`
        : nothing}
    `;
  }
}
