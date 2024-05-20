import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { HasName, HasValue } from "../../core/types";
import { getQuery } from "../../core/utils";

// HTML Tag: bim-text-input
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

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  placeholder?: string;

  @property({ type: String, reflect: true })
  value: string;

  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  @property({ type: Number, reflect: true })
  debounce?: number;

  private _type = "text";

  @property({ type: String, reflect: true })
  set type(value: string) {
    if (this._inputTypes.includes(value)) {
      this._type = value;
    }
  }

  get type() {
    return this._type;
  }

  get query() {
    return getQuery(this.value);
  }

  onValueChange = new Event("input");

  constructor() {
    super();
    this.value = "";
    this.vertical = false;
  }

  private onInputChange(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    clearTimeout(this._debounceTimeoutID);
    this._debounceTimeoutID = setTimeout(() => {
      this.value = input.value;
      this.dispatchEvent(this.onValueChange);
    }, this.debounce) as unknown as number;
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
          aria-label=${this.label || this.name || "Checkbox Input"}
          .type=${this.type}
          .value=${this.value}
          placeholder=${ifDefined(this.placeholder)}
          @input=${this.onInputChange}
        />
      </bim-input>
    `;
  }
}
