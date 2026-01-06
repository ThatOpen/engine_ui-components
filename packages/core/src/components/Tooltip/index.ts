import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import "iconify-icon";
import { computePosition, offset, inline, flip, shift, Placement } from "@floating-ui/dom";

/**
 * A custom tooltip web component for BIM applications. HTML tag: bim-tooltip
 */
export class Tooltip extends LitElement {
  static styles = css`
    :host {
      position: absolute;
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

  private static _container: HTMLDivElement | null = null;

  private static get container() {
    if (!Tooltip._container) {
      Tooltip._container = document.createElement("div");
      Tooltip._container.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: visible;
        pointer-events: none;
        z-index: 9999;
      `;
    }
    return Tooltip._container;
  }

  @property({ type: Boolean, reflect: true })
  visible = false;

  @property({ type: Number, reflect: true })
  timeout?: number;

  @property({ type: String, reflect: true })
  placement?: Placement;

  private timeoutId?: number;
  private _previousContainer: HTMLElement | null = null;

  private _showToolTip = async () => {
    this.timeoutId = setTimeout(async () => {
      this.visible = true;
      if (!Tooltip.container.parentElement) {
        const contextDialog = document.querySelector("[data-context-dialog]");
        if (contextDialog) {
          contextDialog.append(Tooltip.container);
        } else {
          document.body.append(Tooltip.container);
        }
      }
      this._previousContainer = this.parentElement;
      Tooltip.container.style.top = `${window.scrollY || document.documentElement.scrollTop}px`;
      Tooltip.container.append(this);
      await this.computePosition();
    }, this.timeout === undefined ? 800 : this.timeout) as unknown as number;
  };

  private _hideToolTip = () => {
    clearTimeout(this.timeoutId);
    this.visible = false;
    if (this._previousContainer) {
      this._previousContainer.append(this);
      this._previousContainer = null;
    }
    // Remove container from body if no tooltips are visible
    if (Tooltip.container.children.length === 0 && Tooltip.container.parentElement) {
      Tooltip.container.remove();
    }
  };

  private async computePosition() {
    const parent = this._previousContainer || this.parentElement;
    if (!parent) return;

    const prevDisplay = this.style.display;
    this.style.display = "block";
    this.style.visibility = "hidden";

    await new Promise(requestAnimationFrame);

    const { x, y } = await computePosition(parent, this, {
      placement: this.placement,
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
