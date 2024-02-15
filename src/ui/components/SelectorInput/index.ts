import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class SelectorInput extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      color: white;
      border: none;
      outline: none;
    }

    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    .options {
      display: flex;
      flex: 1 1 0%;
      height: 100%;
      justify-content: flex-end;
      max-width: 20rem;
    }

    .options button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      line-height: 1rem;
      column-gap: 0.25rem;
      height: 100%;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      background-color: #2e2e2e;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      cursor: pointer;
    }

    .options button:hover {
      color: #bcf124;
    }

    .options button:first-child {
      border-bottom-left-radius: 0.375rem;
      border-top-left-radius: 0.375rem;
    }

    .options button:last-child {
      border-bottom-right-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
    }
  `

  static properties = {
    label: { type: String },
    options: { type: Array<String> },
    value: { type: String }
  }

  declare label?: string

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
      <div class="host">
        ${ this.label ? html`<bim-input-label .label="${this.label}"></bim-input-label>` : null }
        <div class="options">
          ${
            this.options?.map((option) =>
              html`
              <button @click=${() => this.onOptionClick(option)} style="background-color: ${this.value === option ? '#6528D7' : '#2e2e2e'}" type="button">${option}</button>
              `
            )
          }
        </div> 
      </div>
    `
  }
}