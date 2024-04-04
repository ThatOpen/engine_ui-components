import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Option extends UIComponent {
  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.75rem;
      border-radius: var(--bim-ui_size-4xs);
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector-input--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_color-main) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_color-main), white 30%);
      font-weight: 600;
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_color-main), white 30%);
    }

    .parent {
      box-sizing: border-box;
      padding: 0.375rem 0;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }
  `;

  static properties = {
    img: { type: String, reflect: true },
    label: { type: String, reflect: true },
    value: { attribute: false },
    icon: { type: String, reflect: true },
    checked: { type: Boolean, reflect: true },
    checkbox: { type: Boolean, reflect: true },
    noMark: { type: Boolean, attribute: "no-mark", reflect: true },
    vertical: { type: Boolean, reflect: true },
  };

  declare img?: string;
  declare label?: string;
  declare icon?: string;
  declare checked: boolean;
  declare noMark: boolean;
  declare checkbox: boolean;
  declare vertical: boolean;
  declare value: any;

  constructor() {
    super();
    this.checked = false;
    this.checkbox = false;
    this.noMark = false;
    this.vertical = false;
  }

  render() {
    return html`
      <div class="parent">
        <div style="display: flex; column-gap: 0.375rem">
          ${this.checkbox && !this.noMark
            ? html`<bim-checkbox
                style="pointer-events: none"
                .checked=${this.checked}
              ></bim-checkbox>`
            : null}
          <bim-label
            .vertical=${this.vertical}
            .label=${this.label}
            .icon=${this.icon}
            .img=${this.img}
          ></bim-label>
        </div>
        ${!this.checkbox && !this.noMark && this.checked
          ? html`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`
          : null}
      </div>
    `;
  }
}
