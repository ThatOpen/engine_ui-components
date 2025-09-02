import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import "iconify-icon";
import { computePosition, offset, inline, flip, shift } from "@floating-ui/dom";

/**
 * A custom tooltip web component for BIM applications. HTML tag: bim-tooltip
 */
export class Tooltip extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      position: absolute;
      z-index: 99;
      background: var(--bim-ui_bg-contrast-20, #fff);
      color: var(--bim-ui_bg-contrast-100, #000);
      border-radius: var(--bim-ui_size-4xs, 4px);
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
      padding: 0.75rem;
      font-size: var(--bim-ui_size-xs, 0.875rem);
      display: none;
    }
    :host([visible]) {
      display: flex;
    }
  `;

  /**
   * The text to display inside the tooltip.
   * @type {string}
   * @default undefined
   * @example <bim-tooltip text="Here goes some text"></bim-tooltip>
   * @example const tooltip = document.createElement('bim-tooltip');
   *          tooltip.text = "Here goes some text"
   */

  /**
   * Whether the tooltip is visible.
   */
  @property({ type: Boolean, reflect: true })
  visible = false;

  /**
   * The time it will take for the tooltip to appear.
   * @type {Number}
   * @default 700
   * @example <bim-tooltip showTimeout=1000></bim-tooltip>
   * @example const tooltip = document.createElement('bim-tooltip');
   *          tooltip.showTimeout = 1000
   */
  @property({ type: Number, reflect: true })
  showTimeout: number = 100;

  private timeoutId?: number;

  private _showToolTip = async () => {
    this.timeoutId = setTimeout(() => {
      this.visible = true;
    }, this.showTimeout) as unknown as number;
    await this.computePosition();
  };

  private _hideToolTip = () => {
    clearTimeout(this.timeoutId);
    this.visible = false;
  };

  private async computePosition() {
    const parent = this.parentElement;
    if (!parent) return;

    const prevDisplay = this.style.display;
    this.style.display = "block";
    this.style.visibility = "hidden";

    await new Promise(requestAnimationFrame);

    const { x, y } = await computePosition(parent, this, {
      placement: "bottom",
      middleware: [offset(10), flip(), shift({ padding: 8 }), inline()],
    });

    Object.assign(this.style, {
      left: `${x}px`,
      top: `${y}px`,
      display: prevDisplay,
      visibility: "",
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    const parent = this.parentElement;
    if (parent) {
      parent.addEventListener("mouseenter", this._showToolTip);
      parent.addEventListener("mouseleave", this._hideToolTip);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    const parent = this.parentElement;
    if (parent) {
      parent.removeEventListener("mouseenter", this._showToolTip);
      parent.removeEventListener("mouseleave", this._hideToolTip);
    }
  }

  protected render() {
    return html`<div><slot></slot></div>`;
  }
}
