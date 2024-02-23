import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Grid extends UIComponent {
  static styles = css`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      background-color: var(--bim-grid--bgc);
      grid-template: var(--bim-grid--tpl);
      padding: var(--bim-grid--p);
      gap: var(--bim-grid--g);
    }
    
    :host([floating]) {
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }
  `

  static properties = {
    floating: { type: Boolean, reflect: true }
  }

  declare floating: boolean
  declare template: string

  constructor() {
    super()
    this.floating = false
  }

  render() {
    return html`
      <slot></slot>
    `
  }
}