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

  onValueChange = new Event("change")
  private _checked = false

  set checked(value: boolean) {
    this._checked = value
    this.dispatchEvent(this.onValueChange)
  }

  get checked() {
    return this._checked
  }

  set value(data: boolean) {
    this.checked = data
  }

  get value() {
    return this.checked
  }

  private onChange(e: Event) {
    this.checked = (e.target as HTMLInputElement).checked
  }
  
  render() {
    return html`
     <div class="host">
       ${this.label ? html`<bim-label .label="${this.label}"></bim-label> ` : null}
       <input type="checkbox" @change="${this.onChange}" ?checked="${this.checked}"> 
     </div>
    `
  }
}