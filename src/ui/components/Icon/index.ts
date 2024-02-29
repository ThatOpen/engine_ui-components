import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Icon extends UIComponent {
  static styles = css`
    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-base));
      width: var(--bim-icon--fz, var(--bim-ui_size-base));
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