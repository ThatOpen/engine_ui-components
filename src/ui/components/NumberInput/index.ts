import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { UIComponent } from "../../core/UIComponent"

export class NumberInput extends UIComponent {
  static styles = css`
    :host {
      flex: 1;
      --bim-input--bgc: var(--bim-number-input--bgc, var(--bim-ui_bg-contrast-20));
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input¡focus--c, var(--bim-ui_color-accent));
    }

    bim-label {
      --bim-label--c: var(--bim-number-input_affixes--c, var(--bim-ui_bg-contrast-60));
      --bim-label--fz: var(--bim-number-input_affixes--fz, var(--bim-ui_size-xs));
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 1.25rem;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([sufix]:not([pref])) input {
      text-align: left;
    }
  `

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

  private _canFocus = true
  private _inputRef = createRef<HTMLInputElement>()
  
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

  focus() {
    const { value } = this._inputRef
    if (!(value && this._canFocus)) return;
    value.focus()
  }

  render() {
    return html`
      <bim-input .label=${this.label} .icon=${this.icon} ?vertical=${this.vertical}>
        ${this.pref || this.icon ? html`<bim-label .label=${this.pref}></bim-label>` : null}
        <input ${ref(this._inputRef)} type="text" @input=${this.onInput} @change=${this.onInput} .value=${this.value.toString()}> 
        ${this.sufix ? html`<bim-label .label=${this.sufix}></bim-label>` : null}
      </bim-input>
    `
  }
}