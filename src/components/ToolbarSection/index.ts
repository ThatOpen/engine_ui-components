import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { ToolbarGroup } from "../ToolbarGroup";
import { HasName } from "../../core/types";

export class ToolbarSection extends UIComponent implements HasName {
  static styles = css`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      width: 100%;
      height: 100%;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;

  static properties = {
    label: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
    labelHidden: { type: Boolean, attribute: "label-hidden", reflect: true },
  };

  declare label?: string;
  declare icon?: string;

  private _vertical = false;

  set vertical(value: boolean) {
    this._vertical = value;
    this.updateChildren();
  }

  get vertical() {
    return this._vertical;
  }

  private _labelHidden = false;

  set labelHidden(value: boolean) {
    this._labelHidden = value;
    this.updateChildren();
  }

  get labelHidden() {
    return this._labelHidden;
  }

  constructor() {
    super();
    this.labelHidden = false;
  }

  private updateChildren() {
    const children = this.children;
    for (const child of children) {
      if (child instanceof ToolbarGroup) child.vertical = this.vertical;
      child.toggleAttribute("label-hidden", this.vertical);
    }
  }

  render() {
    return html`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden && (this.label || this.icon)
          ? html`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`
          : null}
      </div>
    `;
  }
}
