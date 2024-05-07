import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../core/Component";
import { styles } from "../../core/Manager/src/styles";
import { Panel } from "../Panel";

// HTML tag: bim-panels-container
export class PanelsContainer extends Component {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap: 0.5rem;
        overflow: auto;
      }

      :host(:not([floating])) {
        background-color: var(--bim-ui_bg-base);
      }

      :host([horizontal]) {
        flex-direction: row;
      }

      :host([horizontal]) ::slotted(bim-panel) {
        /* max-width: 100%; */
        flex-grow: 1;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  horizontal: boolean;

  @property({ type: Boolean, reflect: true })
  floating: boolean;

  constructor() {
    super();
    this.horizontal = false;
    this.floating = false;
  }

  private onPanelHiddenChange = (e: Event) => {
    const element = e.target;
    if (!(element instanceof Panel && !element.hidden)) return;
    for (const child of this.children) {
      if (!(child instanceof Panel) || child === element) continue;
      child.hidden = true;
    }
  };

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[];
    const anyVisiblePanel = children.find(
      (child) => child instanceof Panel && !child.hidden,
    );
    for (const child of children) {
      if (!(child instanceof Panel)) continue;
      if (anyVisiblePanel !== child) child.hidden = true;
      child.removeEventListener("hiddenchange", this.onPanelHiddenChange);
      child.addEventListener("hiddenchange", this.onPanelHiddenChange);
    }
  }

  protected render() {
    return html` <slot @slotchange=${this.onSlotChange}></slot> `;
  }
}
