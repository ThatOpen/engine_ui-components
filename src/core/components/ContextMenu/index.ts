import { computePosition, flip, shift, offset, inline } from "@floating-ui/dom";
import { css, html } from "lit";
import { UIComponent } from "../../UIComponent";
import { styles } from "../../UIManager/src/styles";

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

  static properties = {
    visible: { type: Boolean, reflect: true },
  };

  private _visible = false;

  set visible(value: boolean) {
    this._visible = value;
    if (value) this.updatePosition();
  }

  get visible() {
    return this._visible;
  }

  constructor() {
    super();
    this.visible = false;
    if (this.parentElement) this.updatePosition();
  }

  updatePosition(target?: HTMLElement) {
    const targetElement = target || (this.parentNode as HTMLElement);
    if (!targetElement) {
      this.visible = false;
      console.warn("No target element found for context-menu.");
      return;
    }
    setTimeout(async () => {
      const position = await computePosition(targetElement, this, {
        placement: "right",
        middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
      });
      const { x, y } = position as { x: number; y: number };
      this.style.left = `${x}px`;
      this.style.top = `${y}px`;
    });
  }

  render() {
    return html` <slot></slot> `;
  }
}
