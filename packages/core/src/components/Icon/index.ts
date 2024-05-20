import { LitElement, css, html } from "lit";
import "iconify-icon";

export class Icon extends LitElement {
  static styles = css`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
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
