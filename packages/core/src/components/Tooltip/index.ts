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
  showTimeout: number = 700;

  /**
   * Whether the tooltip will stay visible or not when the user hovers it
   * @type {Boolean}
   * @default false
   * @example <bim-tooltip hoverable=true></bim-tooltip>
   * @example const tooltip = document.createElement('bim-tooltip');
   *          tooltip.hoverable = true;
   */
  @property({ type: Boolean, reflect: true })
  hoverable: boolean = false;

  private timeoutId?: number;
  private _parentHovered = false;
  private _tooltipHovered = false;

  private _showToolTip = () => {
    this._parentHovered = true;
    this.computePosition();
    this.timeoutId = setTimeout(() => {
      this.visible = true;
    }, this.showTimeout) as unknown as number;
  };

  private _hideToolTip = () => {
    this._parentHovered = false;
    clearTimeout(this.timeoutId);
    if (this.hoverable && this._tooltipHovered) return;
    this.visible = false;
  };

  private _onTooltipMouseEnter = () => {
    this._tooltipHovered = true;
    if (this.hoverable && !this._parentHovered) {
      this.visible = true;
    }
  };

  private _onTooltipMouseLeave = () => {
    this._tooltipHovered = false;
    if (!this._parentHovered) {
      this.visible = false;
    }
  };

  private computePosition() {
    const parent = this.parentElement;
    if (!parent) return;
    computePosition(parent, this, {
      placement: "bottom",
      middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
    }).then((data: any) => {
      const { x, y } = data;
      Object.assign(this.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    const parent = this.parentElement;
    if (parent) {
      parent.addEventListener("mouseenter", this._showToolTip);
      parent.addEventListener("mouseleave", this._hideToolTip);
    }

    if (this.hoverable) {
      this.addEventListener("mouseenter", this._onTooltipMouseEnter);
      this.addEventListener("mouseenter", this._onTooltipMouseLeave);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    const parent = this.parentElement;
    if (parent) {
      parent.removeEventListener("mouseenter", this._showToolTip);
      parent.removeEventListener("mouseleave", this._hideToolTip);
    }

    if (this.hoverable) {
      this.addEventListener("mouseenter", this._onTooltipMouseEnter);
      this.addEventListener("mouseenter", this._onTooltipMouseLeave);
    }
  }

  protected render() {
    return html`<div><slot></slot></div>`;
  }
}

// customElements.define("bim-tooltip", Tooltip);
