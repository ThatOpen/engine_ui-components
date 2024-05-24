import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ToolbarGroup } from "./Group";
import { HasName } from "../../../core/types";

/**
 * Heloooooooooo
 */
export class ToolbarSection extends LitElement implements HasName {
  static styles = css`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
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

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  private _vertical = false;

  @property({ type: Boolean, reflect: true })
  set vertical(value: boolean) {
    this._vertical = value;
    this.updateChildren();
  }

  get vertical() {
    return this._vertical;
  }

  private _labelHidden = false;

  /**
   * Sets the value of the `labelHidden` property and updates the children accordingly.
   *
   * @example
   * ```typescript
   * toolbarSection.labelHidden = true;
   * ```
   * @example
   * ```html
   * <bim-toolbar-section label-hidden></bim-toolbar-section>
   * ```
   */
  @property({ type: Boolean, attribute: "label-hidden", reflect: true })
  set labelHidden(value: boolean) {
    this._labelHidden = value;
    this.updateChildren();
  }

  get labelHidden() {
    return this._labelHidden;
  }

  private updateChildren() {
    const children = this.children;
    for (const child of children) {
      if (child instanceof ToolbarGroup) child.vertical = this.vertical;
      child.toggleAttribute("label-hidden", this.vertical);
    }
  }

  protected render() {
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
