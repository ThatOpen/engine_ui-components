import {
  computePosition,
  flip,
  shift,
  offset,
  inline,
  detectOverflow,
  MiddlewareState,
  autoPlacement,
} from "@floating-ui/dom";
import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";

export class ContextMenu extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-label--fz: var(--bim-ui_size-xs);
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
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host([visible]) {
        display: flex;
      }

      :host(:not([visible])) {
        display: none;
      }
    `,
  ];

  private _visible = false;

  @property({ type: Boolean, reflect: true })
  get visible() {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    if (value) this.updatePosition();
  }

  private _middleware = {
    name: "middleware",
    async fn(state: MiddlewareState) {
      const { right, top } = await detectOverflow(state);
      state.x -= Math.sign(right) === 1 ? right + 5 : 0;
      state.y -= Math.sign(top) === 1 ? top + 5 : 0;
      return state;
    },
  };

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
  async updatePosition(target?: HTMLElement) {
    const targetElement = target || (this.parentNode as HTMLElement);
    if (!targetElement) {
      this.visible = false;
      console.warn("No target element found for context-menu.");
      return;
    }
    const position = await computePosition(targetElement, this, {
      placement: "right",
      middleware: [
        offset(10),
        inline(),
        flip(),
        shift({ padding: 5 }),
        this._middleware,
      ],
    });
    const { x, y } = position;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
  }

  protected render() {
    return html` <slot></slot> `;
  }
}
