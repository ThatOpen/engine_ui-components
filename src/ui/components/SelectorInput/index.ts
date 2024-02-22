import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";

export class SelectorInput extends UIComponent {
  static styles = [
    styles.internalStyles,
    css`
      * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
      }

      .input button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        column-gap: 0.25rem;
        height: 100%;
        width: 100%;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        font-family: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        cursor: pointer;
        background-color: var(--bim-selector-input--bgc);
        color: var(--bim-selector-input--c);
      }
      
      .input button:hover {
        background-color: var(--bim-selector-input¡hover--bgc, #2e2e2e);
        color: var(--bim-selector-input¡hover--c);
      }

      .input button[data-selected] {
        font-weight: 500;
        background-color: var(--bim-selector-input¡selected--bgc);
        color: var(--bim-selector-input¡selected--c);
      }

      .input button:first-child {
        border-bottom-left-radius: var(--bim-selector-input--bdrs);
        border-top-left-radius: var(--bim-selector-input--bdrs);
      }

      .input button:last-child {
        border-bottom-right-radius: var(--bim-selector-input--bdrs);
        border-top-right-radius: var(--bim-selector-input--bdrs);
      }
    `
  ]

  static properties = {
    labelIcon: { type: String, reflect: true, attribute: "label-icon" },
    label: { type: String, reflect: true },
    options: { type: Array<String> },
    value: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true }
  }

  declare labelIcon?: string
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

  protected static _tableHostable = true

  private onOptionClick(value: string) {
    this.value = value
  }

  render() {
    return html`
      <div class="parent">
        ${ this.label ? html`<bim-input-label .icon=${this.labelIcon} .label="${this.label}"></bim-input-label>` : null }
        <div class="input">
          ${
            this.options?.map((option) =>
              html`
              <button @click=${() => this.onOptionClick(option)} ?data-selected=${this.value === option} type="button">${option}</button>
              `
            )
          }
        </div> 
      </div>
    `
  }
}