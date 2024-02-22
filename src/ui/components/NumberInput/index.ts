import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { UIComponent } from "../../core/UIComponent"
import { internalStyles } from "../../core/UIManager/src/styles";

export class NumberInput extends UIComponent {
  static styles = [
    internalStyles,
    css`
      * {
        margin: 0;
        padding: 0;
      }

      :host(:focus) .input {
        outline: var(--bim-number-input--olw) solid var(--bim-number-input¡focus--c);
      }
      
      .input {
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
        pointer-events: auto;
        user-select: none;
        min-width: 4rem!important;
        background-color: var(--bim-number-input--bgc);
        outline: var(--bim-number-input--olw) solid var(--bim-number-input--olc);
        border-radius: var(--bim-number-input--bdrs);
      }

      .input input[type="text"] {
        background-color: transparent;
        outline: none;
        border: none;
        width: 1.25rem;
        flex-grow: 1;
        text-align: right;
        font-family: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        font-size: var(--bim-number-input--fz);
        color: var(--bim-number-input--c);
      }

      .prefix-container {
        margin-right: 0.625rem;
      }

      .prefix, .sufix {
        color: var(--bim-number-input_affixes--c);
        font-size: var(--bim-number-input_affixes--fz);
      }

      :host([sufix]:not([pref])) .input input[type="text"] {
        text-align: left;
      }

      .sufix {
        pointer-events: none;
        margin-left: 0.375rem;
      }
    `
  ]

  static properties = {
    pref: { type: String, reflect: true },
    icon: { type: String },
    sufix: { type: String, reflect: true },
    value: { type: Number, reflect: true },
    label: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true }
  }

  declare pref?: string
  declare icon?: string
  declare sufix?: string
  declare label?: string
  declare value: number
  declare vertical: boolean

  private _inputRef = createRef<HTMLInputElement>()

  protected static _tableHostable = true
  
  private onInput() {
    const { value: input } = this._inputRef
    if (!input) return
    const value = Number(input.value)
    if (input.value === "-") return
    if (isNaN(value)) {
      input.value = this.value.toString()
    } else {
      this.value = value
      input.value = value.toString()
      this.dispatchEvent(new Event("input"))
    }
  }

  constructor() {
    super()
    this.value = 0
    this.vertical = false
  }

  private _canFocus = true

  focus() {
    const { value } = this._inputRef
    if (!(value && this._canFocus)) return;
    value.focus()
  }
  
  private drag(e: MouseEvent) {
    const { value: input } = this._inputRef
    if (!input) return
    this._canFocus = false
    const { clientX: startPosition } = e
    const initialValue = this.value
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: endPosition } = e
      const value = initialValue + (endPosition - startPosition)
      input.value = value.toString()
      this.onInput()
    }
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", onMouseMove)
      this._canFocus = true
    })
  }

  render() {
    return html`
      <div class="parent">
        ${this.label ? html`<bim-input-label .label=${this.label}></bim-input-label>` : null}
        <div class="input" @mouseup=${this.focus} >
          ${
            this.icon || this.pref ? 
            html`<div class="prefix-container" @mousedown=${this.drag}>
              ${ this.icon ? html`<p class="icon">${this.icon}</p>` : null }
              ${ this.pref ? html`<p class="prefix">${this.pref}</p>` : null }
            </div>`
            : null
          }
          <input ${ref(this._inputRef)} type="text" @input=${this.onInput} @change=${this.onInput} .value=${this.value.toString()}> 
          ${ this.sufix ? html`<p class="sufix">${this.sufix}</p>` : null }
        </div>
      </div>
    `
  }
}