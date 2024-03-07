import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"
import { HasValue } from "../../core/types"

export class Checkbox extends UIComponent implements HasValue {
  static styles = css`
    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }
    
    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }
  `
  
  static properties = {
    name: { type: String, reflect: true },
    label: { type: String, reflect: true },
    checked: { type: Boolean, reflect: true }
  }

  declare name?: string
  declare label?: string
  declare value: boolean
  declare checked: boolean

  onValueChange = new Event("change")

  constructor() {
    super()
    this.checked = false
  }

  private onChange(e: Event) {
    e.stopPropagation()
    this.checked = (e.target as HTMLInputElement).checked
    this.dispatchEvent(this.onValueChange)
  }
  
  render() {
    return html`
     <div class="host">
       ${this.label ? html`<bim-label .label="${this.label}"></bim-label> ` : null}
       <input type="checkbox" @change="${this.onChange}" .checked="${this.checked}"> 
     </div>
    `
  }
}