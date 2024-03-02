import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class SelectorInput extends UIComponent {
  static styles = css`
    bim-button {
      --bim-label--fz: var(--bim-selector-input--fz, var(--bim-ui_size-xs));
      --bim-label--c: var(--bim-selector-input--c, var(--bim-ui_bg-contrast-100));
      flex: 1;
      border-radius: 0;
      background-color: var(--bim-selector-input--bgc, var(--bim-ui_bg-contrast-20));
      color: var(--bim-selector-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-button:hover {
      background-color: var(--bim-selector-input¡hover--bgc, color-mix(in lab, var(--bim-selector-input--bgc, var(--bim-ui_bg-contrast-20)), var(--bim-ui_color-main) 25%));
      color: var(--bim-selector-input¡hover--c, var(--bim-ui_bg-contrast-100));
    }

    bim-button[data-selected] {
      --bim-label--c: var(--bim-selector-input¡selected--c, white);
      background-color: var(--bim-selector-input¡selected--bgc, var(--bim-ui_color-main));
    }

    bim-button:first-child {
      border-bottom-left-radius: var(--bim-selector-input--bdrs, var(--bim-ui_size-4xs));
      border-top-left-radius: var(--bim-selector-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-button:last-child {
      border-bottom-right-radius: var(--bim-selector-input--bdrs, var(--bim-ui_size-4xs));
      border-top-right-radius: var(--bim-selector-input--bdrs, var(--bim-ui_size-4xs));
    }
  `

  static properties = {
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    options: { type: Array<String> },
    value: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true }
  }

  declare icon?: string
  declare label?: string
  declare vertical: boolean

  private _optionsSetEvent = new Event("optionsset")
  private _options: string[] = []

  set options(value: string[]) {
    this._options = value
    this.dispatchEvent(this._optionsSetEvent)
    if (this.value === "") {
      this.value = this._options[0]
    }
  }

  get options() {
    return this._options
  }

  constructor() {
    super()
    this.vertical = false
  }

  private _changeEvent = new Event("change")
  private _value: string = ""

  set value(val: string) {
    if (val && this.options?.includes(val)) {
      this._value = val
      this.dispatchEvent(this._changeEvent)
    } else {
      console.warn(`${val} is not in the options list for this SelectorInput.`)
    }
  }

  get value() {
    return this._value
  }

  private onOptionClick(value: string) {
    this.value = value
  }

  render() {
    return html`
      <bim-input ?vertical=${this.vertical} .label=${this.label} .icon=${this.icon}>
        ${
          this.options?.map((option) =>
            html`
            <bim-button .label=${option} @click=${() => this.onOptionClick(option)} ?data-selected=${this.value === option}></bim-button>
            `
          )
        }
      </bim-input>
    `
  }
}