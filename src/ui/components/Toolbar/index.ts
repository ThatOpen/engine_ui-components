import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent"

export class Toolbar extends UIComponent {
  static styles = css`    
    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      align-items: center;
      border-radius: 0.75rem;
      padding: 1rem;
      background-color: var(--bim-toolbar--bgc);
    }

    :host([vertical]) {
      flex-direction: column;
    }
  `

  static properties = {
    horizontal: {type: Boolean, reflect: true}
  }

  declare horizontal?: boolean

  render() {
    return html`
      <div class="parent">
        <slot></slot>
      </div>
    `
  }
}