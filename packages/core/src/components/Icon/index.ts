import { LitElement, css, html } from "lit";
import "iconify-icon";

/**
 * A custom icon web component for BIM applications. HTML tag: bim-icon
 */
export class Icon extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-base));
      width: var(--bim-icon--fz, var(--bim-ui_size-base));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `;

  static properties = {
    icon: { type: String },
  };

  declare icon?: string;

  render() {
    return html`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `;
  }
}
