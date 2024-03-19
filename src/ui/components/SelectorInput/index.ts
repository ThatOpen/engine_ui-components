import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { Option } from "../Option"
import { HasName, HasValue } from "../../core/types";

export class SelectorInput extends UIComponent implements HasValue, HasName {
  static styles = css`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: white;
      font-weight: normal;
      background-color: var(--bim-ui_color-main);
    }

    ::slotted(bim-option:first-child) {
      border-radius: var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs);
    }

    ::slotted(bim-option:last-child) {
      border-radius: 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0;
    }
  `

  static properties = {
    name: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    options: { type: Array<String> },
    value: { attribute: false },
    vertical: { type: Boolean, reflect: true }
  }

  declare name?: string
  declare icon?: string
  declare label?: string
  declare vertical: boolean

  private _value: any
  onValueChange = new Event("change")

  private get _options() {
    const options = []
    for (const child of this.children) {
      if (child instanceof Option) options.push(child)
    }
    return options
  }

  set value(val: any) {
    let valueSet = false
    for (const option of this._options) {
      const value = option.value || option.label
      if (value === val) {
        option.checked = true
        this._value = value
        valueSet = true
      } else {
        option.checked = false
      }
    }
    if (!valueSet) console.warn(`${val} is not in the options list for this bim-selector-input.`)
  }

  get value() {
    return this._value
  }

  constructor() {
    super()
    this.vertical = false
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[]
    for (const child of children) {
      if (child instanceof Option) {
        child.noMark = true
        child.removeEventListener("click", this.onOptionClick)
        child.addEventListener("click", this.onOptionClick)
      }
    }
  }

  private onOptionClick = (e: MouseEvent) => {
    const element = e.target as Option
    const option = element.value || element.label
    this.value = option
    this.dispatchEvent(this.onValueChange)
  }

  render() {
    return html`
      <bim-input .vertical=${this.vertical} .label=${this.label} .icon=${this.icon}>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `
  }
}