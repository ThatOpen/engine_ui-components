import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

/**
 * A custom toolbar group web component for BIM applications. HTML tag: bim-toolbar-group
 */
export class ToolbarGroup extends LitElement {
  static styles = css`
    :host(:focus-visible) {
      outline: 2px solid var(--bim-ui_accent-base);
      outline-offset: -2px;
    }

    .parent {
      display: grid;
      gap: 0.25rem;
      grid-auto-flow: var(--_flow, column);
      grid-template-rows: repeat(var(--_rows, 2), 1fr);
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `;

  private _rows = 2;

  /**
   * The number of rows in the grid layout. Clamped to a minimum of 1.
   * @defaultValue 2
   */
  @property({ type: Number, reflect: true })
  set rows(value: number) {
    this._rows = Math.max(1, Math.floor(value));
  }

  get rows() {
    return this._rows;
  }

  private _vertical = false;

  /**
   * When `true`, the group renders its children in a vertical flow.
   */
  @property({ type: Boolean, reflect: true })
  set vertical(value: boolean) {
    if (value === this._vertical) return;
    this._vertical = value;
    this.updateChildren();
  }

  get vertical() {
    return this._vertical;
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
    this.style.setProperty("--_flow", this.vertical ? "row" : "column");
    this.style.setProperty("--_rows", String(this.rows));
  }

  private _rafId = 0;

  private _scheduleUpdateChildren = () => {
    cancelAnimationFrame(this._rafId);
    this._rafId = requestAnimationFrame(() => this.updateChildren());
  };

  private updateChildren() {
    for (const child of this.children) {
      if (!child.tagName.startsWith("BIM-")) continue;
      child.toggleAttribute("label-hidden", this.vertical);
    }
  }

  protected render() {
    return html`
      <div class="parent">
        <slot @slotchange=${this._scheduleUpdateChildren}></slot>
      </div>
    `;
  }
}
