import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Input extends UIComponent {
  static styles = css`
    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    .inputs-container {
      display: flex;
      flex: 1 1 0%;
      height: 100%;
      justify-content: flex-end;
      column-gap: 0.25rem;
    }
  `

  static properties = {
    label: { type: String }
  }

  declare label?: string

  render() {
    return html`
      <div class="host">
        <bim-input-label .label="${this.label}"></bim-input-label>
        <div class="inputs-container">
          <slot></slot>
        </div>
      </div>  
    `
  }
}