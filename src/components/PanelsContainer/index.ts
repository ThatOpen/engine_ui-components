import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";
import { Panel } from "../Panel";

export class PanelsContainer extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap: 0.5rem;
      }

      :host(:not([floating])) {
        background-color: var(--bim-ui_bg-base);
      }

      :host([horizontal]) {
        flex-direction: row;
      }

      :host([horizontal]) ::slotted(bim-panel) {
        max-width: 100%;
        flex-grow: 1;
      }
    `,
  ];

  static properties = {
    horizontal: { type: Boolean, reflect: true },
    gridArea: { attribute: false },
  };

  declare horizontal: boolean;

  constructor() {
    super();
    this.horizontal = false;
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[];
    const lastChild = children[children.length - 1];
    for (const child of children) {
      if (!(child instanceof Panel)) continue;
      if (
        lastChild instanceof Panel &&
        lastChild.active &&
        child !== lastChild
      ) {
        child.active = false;
      }
    }
  }

  render() {
    return html` <slot @slotchange=${this.onSlotChange}></slot> `;
  }
}
