import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { UIComponent } from "../../core/UIComponent"
import { HasName, HasValue } from "../../core/types"

export class NumberInput extends UIComponent implements HasValue, HasName {
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
      padding: 0;
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
    name: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    pref: { type: String, reflect: true },
    min: { type: Number, reflect: true },
    value: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
    sufix: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true }
  }

  declare name?: string
  declare icon?: string
  declare label?: string
  declare pref?: string
  declare min?: number
  declare max?: number
  declare sufix?: string
  declare vertical: boolean

  private _canFocus = true
  private _inputRef = createRef<HTMLInputElement>()
  onValueChange = new Event("input")

  private _value: number = 0

  set value(data: number) {
    this._value = data
    
  }

  get value() {
    return this._value
  }

  private get _isInputValid() {
    const { value: input } = this._inputRef
    if (!input) return false;
    const number = Number(input.value)
    return !isNaN(number)
  }

  constructor() {
    super()
    this.value = 0
    this.vertical = false
  }

  private onInput(e: Event) {
    e.stopPropagation()
    const { value: input } = this._inputRef
    if (!input) return
    let value = input.value;

    value = value.replace(/[^0-9.-]/g, ''); // Only allow numbers, dots, and minus
    value = value.replace(/(\..*)\./g, '$1');
    if (value.indexOf('-') !== -1) {
      value = value.charAt(0) + value.substring(1).replace(/-/g, '');
    }
    // if (!isNaN(Number(value))) {
    //   value = this.min ? Math.max(Number(value), this.min) : value
    //   value = this.max ? Math.min(Number(value), this.max) : value
    // }

    input.value = value;
    if (this._isInputValid) {
      this.value = Number(input.value)
      this.dispatchEvent(this.onValueChange)
    }
  }

  private onBlur() {
    const { value: input } = this._inputRef
    if (input && !this._isInputValid) input.value = this.value.toString()
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
      // this.onInput()
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
        <input ${ref(this._inputRef)} type="text" size="1" @input=${this.onInput} @change=${this.onInput} @blur=${this.onBlur} .value=${this.value.toString()}> 
        ${this.sufix ? html`<bim-label .label=${this.sufix}></bim-label>` : null}
      </bim-input>
    `
  }
}