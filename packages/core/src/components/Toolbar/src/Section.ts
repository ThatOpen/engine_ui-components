import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ToolbarGroup } from "./Group";
import { HasName } from "../../../core/types";

/**
 * A custom toolbar section web component for BIM applications. HTML tag: bim-toolbar-section
 */
export class ToolbarSection extends LitElement implements HasName {
  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      display: block;
      flex: 1;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--bim-ui_accent-base);
      outline-offset: -2px;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1px;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: vertical-rl;
    }

    .name {
      height: 20px;
      padding: 0 10px;
      font-size: var(--bim-ui_size-sm);
      flex-shrink: 0;
    }

    .children {
      display: flex;
      gap: var(--bim-toolbar-section--gap, 6px);
      height: 100%;
      padding: var(--bim-toolbar-section--p, 4px);
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  private _vertical = false;

  @property({ type: Boolean, reflect: true })
  set vertical(value: boolean) {
    if (value === this._vertical) return;
    this._vertical = value;
    this.updateChildren();
  }

  get vertical() {
    return this._vertical;
  }

  private _labelHidden = false;

  /**
   * When `true`, the section name label is hidden.
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
    if (value === this._labelHidden) return;
    this._labelHidden = value;
    this.updateChildren();
  }

  get labelHidden() {
    return this._labelHidden;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) this.setAttribute("role", "group");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    cancelAnimationFrame(this._rafId);
  }

  protected updated() {
    if (this.label) this.setAttribute("aria-label", this.label);
  }

  private _rafId = 0;

  private _scheduleUpdateChildren = () => {
    cancelAnimationFrame(this._rafId);
    this._rafId = requestAnimationFrame(() => this.updateChildren());
  };

  private updateChildren() {
    for (const child of this.children) {
      if (!child.tagName.startsWith("BIM-")) continue;
      if (child instanceof ToolbarGroup) child.vertical = this.vertical;
      child.toggleAttribute("label-hidden", this.vertical);
    }
  }

  protected render() {
    return html`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this._scheduleUpdateChildren}></slot>
        </div>
        ${!this.labelHidden && (this.label || this.icon)
          ? html`<bim-label class="name" .icon=${this.icon}>${this.label}</bim-label>`
          : null}
      </div>
    `;
  }
}
