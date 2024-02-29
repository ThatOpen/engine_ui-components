import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class Checkbox extends UIComponent {
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
    label: { type: String, reflect: true },
    checked: { type: Boolean, reflect: true }
  }

  declare label?: string
  declare checked: boolean

  private _changeEvent = new Event("change")

  private onChange(e: Event) {
    this.checked = (e.target as HTMLInputElement).checked
    this.dispatchEvent(this._changeEvent)
  }

  private _associatedProperty: {
    object: Record<string, any>,
    key: string,
    privateKey: string,
    onChange: () => void
  } | null = null

  constructor() {
    super()
    this.checked = false
  }

  associateProperty(object: Record<string, any>, key: string) {
    const value = object[key]
    if (typeof value !== "boolean") return;
    const privateKey = `_bim_${key}`
    const onChange = () => object[key] = this.checked
    this.addEventListener("change", onChange)
    const callback = (value: boolean) => {
      if (!this._associatedProperty) return;
      this.checked = value
    };
    this._associatedProperty = {object, key, privateKey, onChange}
    Object.defineProperty(object, key, {
      get() {
        return this[privateKey]
      },
      set(value: boolean) {
        this[privateKey] = value
        callback(value)
      }
    })
    object[key] = value
  }

  decoupleProperty() {
    if (!this._associatedProperty) return;
    const { onChange } = this._associatedProperty
    this.removeEventListener("change", onChange)
    this._associatedProperty = null
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