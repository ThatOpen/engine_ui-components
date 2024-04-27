import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";
import { HasValue, HasName } from "../../core/types";

export class Input extends UIComponent implements HasValue, HasName {
  static styles = css`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 4rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: 13rem;
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  onValueChange = new Event("change");

  get value() {
    const value: Record<string, any> = {};
    for (const _child of this.children) {
      const child = _child as any;
      if ("value" in child) {
        value[child.name || child.label] = child.value;
      } else if ("checked" in child) {
        value[child.name || child.label] = child.checked;
      }
    }
    return value;
  }

  set value(data: Record<string, any>) {
    const children = [...this.children];
    for (const key in data) {
      const _input = children.find((_child) => {
        const child = _child as any;
        return child.name === key || child.label === key;
      });
      if (!_input) continue;
      const input = _input as any;
      const value = data[key];
      if (typeof value === "boolean") {
        input.checked = value;
      } else {
        input.value = value;
      }
    }
  }

  constructor() {
    super();
    this.vertical = false;
  }

  protected render() {
    return html`
      <div class="parent">
        ${this.label || this.icon
          ? html`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`
          : null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
