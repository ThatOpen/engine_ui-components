import { css, html } from "lit";
import { UIComponent } from "../../UIComponent";
import { styles } from "../../UIManager/src/styles";
import { HasName, HasValue } from "../../types";

export class PanelSection extends UIComponent implements HasName, HasValue {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        pointer-events: auto;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(
          --bim-panel-section¡hover,
          var(--bim-ui_color-accent)
        );
        cursor: pointer;
        color: var(--bim-panel-section¡hover, var(--bim-ui_color-accent));
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-panel-section¡hover, var(--bim-ui_color-accent));
      }

      .header {
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        z-index: 3;
        flex-shrink: 0;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        user-select: none;
        height: 1.5rem;
        padding: 0.75rem 1rem;
        background-color: var(--bim-panel-section--bgc, var(--bim-ui_bg-base));
        color: var(--bim-panel-section--c, var(--bim-ui_bg-contrast-80));
      }

      .header svg {
        fill: var(--bim-panel-section--c, var(--bim-ui_bg-contrast-80));
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-panel-section--fz, var(--bim-ui_size-sm));
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
      }
    `,
  ];

  static properties = {
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    name: { type: String, reflect: true },
    fixed: { type: Boolean, reflect: true },
    collapsed: { type: Boolean, reflect: true },
  };

  declare icon?: string;
  declare label?: string;
  declare name?: string;
  declare fixed?: boolean;
  declare collapsed?: boolean;

  onValueChange = new Event("change");

  get value() {
    const value: Record<string, any> = {};
    for (const _child of this.children) {
      const child = _child as any;
      if ("value" in child) {
        value[child.name || child.label] = child.value;
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
      input.value = data[key];
    }
  }

  private onHeaderClick() {
    if (this.fixed) return;
    this.collapsed = !this.collapsed;
  }

  render() {
    const header = this.label || this.icon || this.name || this.fixed;

    const expandLessSVG = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;
    const expandMoreSVG = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`;
    const expandIcon = this.collapsed ? expandLessSVG : expandMoreSVG;

    const headerTemplate = html`
      <div class="header" @click=${this.onHeaderClick}>
        ${this.label || this.icon || this.name
          ? html`<bim-label
              .label=${this.label || this.name}
              .icon=${this.icon}
            ></bim-label>`
          : null}
        ${!this.fixed ? expandIcon : null}
      </div>
    `;

    return html`
      ${header ? headerTemplate : null}
      <div class="components">
        <slot></slot>
      </div>
    `;
  }
}
