import { css, html } from "lit";
import { UIComponent } from "../../UIComponent";
import { HasName, HasValue } from "../../types";

export class TextInput extends UIComponent implements HasName, HasValue {
  static styles = css`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      flex: 1;
      padding: 0 var(--bim-ui_size-3xs);
      border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host(:focus) {
      --bim-input--olc: var(--bim-ui_color-accent);
    }

    :host([disabled]) {
      /* --bim-input--bgc: var(--bim-ui_bg-) */
    }
  `;

  static properties = {
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    name: { type: String, reflect: true },
    placeholder: { type: String, reflect: true },
    value: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
  };

  declare icon?: string;
  declare label?: string;
  declare name?: string;
  declare placeholder: string;
  declare value: string;
  declare vertical: boolean;

  onValueChange = new Event("input");

  constructor() {
    super();
    this.value = "";
    this.placeholder = "";
    this.vertical = false;
  }

  private onInputChange(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(this.onValueChange);
  }

  render() {
    return html`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          type="text"
          .value=${this.value}
          .placeholder=${this.placeholder}
          @change=${this.onInputChange}
          @input=${this.onInputChange}
        />
      </bim-input>
    `;
  }
}
