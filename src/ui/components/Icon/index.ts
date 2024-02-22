import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Icon extends UIComponent {
  static styles = css`
    iconify-icon {
      height: var(--bim-icon--fz, 1.125rem);
      width: var(--bim-icon--fz, 1.125rem);
    }
  `

  static properties = {
    icon: { type: String }
  }

  declare icon?: string

  render() {
    return html`
      <iconify-icon .icon=${this.icon} inline height="none"></iconify-icon>
    `
  }
}