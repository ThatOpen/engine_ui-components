import {
  computePosition,
  flip,
  shift,
  offset,
  inline,
  Placement,
} from "@floating-ui/dom";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "../../core/Manager/src/styles";

export class ContextMenu extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `,
  ];

  private _previousContainer: HTMLElement | null = null;
  private _placement?: Placement;

  @property({ type: String, reflect: true })
  get placement() {
    return this._placement;
  }

  set placement(value: Placement | undefined) {
    this._placement = value;
    this.updatePosition();
  }

  private _visible = false;

  @property({ type: Boolean, reflect: true })
  get visible() {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    if (value) {
      this._previousContainer = this.parentElement;
      this._dialog.style.top = `${window.scrollY || document.documentElement.scrollTop}px`;
      document.body.append(this._dialog);
      this._dialog.showModal();
      this.updatePosition();
      this._dialog.append(this);
      this.dispatchEvent(new Event("visible"));
    } else {
      this._previousContainer?.append(this);
      this._previousContainer = null;
      this._dialog.close();
      this._dialog.remove();
      this.dispatchEvent(new Event("hidden"));
    }
  }

  private _dialog: HTMLDialogElement;

  constructor() {
    super();
    this._dialog = document.createElement("dialog");
    this._dialog.toggleAttribute("data-context-dialog");
    this._dialog.style.width = "0";
    this._dialog.style.height = "0";
    this._dialog.style.position = "relative";
    this._dialog.style.padding = "0";
    this._dialog.style.border = "none";
    this._dialog.style.outline = "none";
    this._dialog.style.margin = "none";
    this._dialog.style.overflow = "visible";
    this._dialog.style.backgroundColor = "transparent";
    this._dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
    });
    this._dialog.addEventListener("click", (event) => {
      if (event.target === this._dialog) this.visible = false;
    });
  }

  /**
   * Asynchronously updates the position of the context menu relative to a target element.
   * If no target element is provided, it attempts to use the parent node as the target.
   * The position is calculated using the `computePosition` function from `@floating-ui/dom`,
   * which considers various adjustments like offset, inline positioning, flipping, and shifting
   * to ensure the context menu is properly placed relative to the target element.
   *
   * @param [target] - The target element relative to which the context menu should be positioned.
   *                                 If not provided, the parent node is used as the target.
   * @returns A promise that resolves once the position has been updated. This method
   *                          does not explicitly return a value but updates the context menu's style
   *                          properties to position it on the screen.
   */
  async updatePosition() {
    if (!(this.visible && this._previousContainer)) return;
    const placement: Placement = this.placement ?? "right";
    const position = await computePosition(this._previousContainer, this, {
      placement,
      middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
    });
    const { x, y } = position;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
  }

  protected render() {
    return html` <slot></slot> `;
  }
}
