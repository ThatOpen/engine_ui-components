import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { HasName, HasValue } from "../../core/types";
import { getQuery } from "../../core/utils";

// HTML Tag: bim-text-input
/**
 * Heloooooooooo
 */
export class TextInput extends LitElement implements HasName, HasValue {
  static styles = css`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      padding: 0 var(--bim-ui_size-3xs);
      border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host(:focus) {
      --bim-input--olc: var(--bim-ui_color-accent);
    }

    /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
  `;

  private _debounceTimeoutID?: number;
  private _inputTypes = [
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
  ];

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
  @property({ type: String, reflect: true })
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
  @property({ type: Number, reflect: true })
  debounce?: number;

  private _type = "text";

  /**
   * Sets the type of the input field.
   * The type property determines the behavior of the input field.
   * It can be any of the following: "date", "datetime-local", "email", "month", "password", "search", "tel", "text", "time", "url", "week".
   * If an invalid type is provided, the type will not be changed.
   *
   * @example
   * // Set the type to "email"
   * textInput.type = "email";
   */
  @property({ type: String, reflect: true })
  set type(value: string) {
    if (this._inputTypes.includes(value)) {
      this._type = value;
    }
  }

  get type() {
    return this._type;
  }

  /**
   * Gets the query value derived from the current input value.
   * The `getQuery` function is assumed to be a utility function that takes a string as input
   * and returns a processed query value based on the input.
   *
   * @returns The processed query value derived from the current input value.
   *
   * @example
   * ```typescript
   * const textInput = new TextInput();
   * textInput.value = "Key?Value";
   * console.log(textInput.query);
   * ```
   */
  get query() {
    return getQuery(this.value);
  }

  onValueChange = new Event("input");

  private onInputChange(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    clearTimeout(this._debounceTimeoutID);
    this._debounceTimeoutID = setTimeout(() => {
      this.value = input.value;
      this.dispatchEvent(this.onValueChange);
    }, this.debounce) as unknown as number;
  }

  focus() {
    setTimeout(() => {
      const input = this.shadowRoot?.querySelector("input");
      input?.focus();
    });
  }

  protected render() {
    return html`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          aria-label=${this.label || this.name || "Text Input"}
          .type=${this.type}
          .value=${this.value}
          placeholder=${ifDefined(this.placeholder)}
          @input=${this.onInputChange}
        />
      </bim-input>
    `;
  }
}
