import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { UIComponent } from "../../core/UIComponent"

export class NumberInput extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    :host {
      width: 100%;
      background-color: #2e2e2e;
      border-radius: 0.375rem;
    }
    
    :host([outlined]) {
      outline: 1px solid #2e2e2e;
      background-color: transparent;
    }

    :host(:focus) {
      outline: 1px solid #bcf124
    }

    .host {
      display: flex;
      height: 1.75rem;
      justify-content: space-between;
      font-size: 12px;
      line-height: 1rem;
      align-items: center;
      color: white;
      font-weight: 500;
      padding: 0 0.5rem;
      pointer-events: auto;
      user-select: none;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-size: 12px;
      line-height: 1rem;
      width: 1.25rem;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
    }

    .prefix-container {
      margin-right: 0.75rem;
    }

    .prefix, .sufix {
      color: #909499;
      font-size: 12px;
      line-height: 1rem;
    }

    .sufix {
      pointer-events: none;
      margin-left: 0.25rem;
    }
  `

  static properties = {
    pref: { type: String },
    icon: { type: String },
    sufix: { type: String },
    value: { type: Number }
  }

  declare pref?: string
  declare icon?: string
  declare sufix?: string
  declare value?: number

  private _inputRef = createRef<HTMLInputElement>()
  private host = createRef<HTMLDivElement>()

  protected static _tableHostable = true
  
  private onInput(e: InputEvent) {
    const input = e.target as HTMLInputElement
    this.value = Number(input.value)
  }

  private onFocus() {
    const { value } = this.host
    if (!value) return;
    // value.style.outlineColor = "#bcf124"
  }
  
  private onBlur() {
    const { value } = this.host
    if (!value) return;
    // value.style.outlineColor = "#2e2e2e"
  }

  focus() {
    const { value } = this._inputRef
    if (!value) return;
    value.focus()
  }

  render() {
    return html`
      <div ${ref(this.host)} class="host" @click=${this.focus}>
        ${
          this.icon || this.pref ? 
          html`<div class="prefix-container">
            ${ this.icon ? html`<p class="icon">${this.icon}</p>` : null }
            ${ this.pref ? html`<p class="prefix">${this.pref}</p>` : null }
          </div>`
          : null
        }
        <input ${ref(this._inputRef)} type="text" @focus=${this.onFocus} @blur=${this.onBlur} @input=${this.onInput} @change=${this.onInput} .value=${this.value?.toString()?? ''}> 
        ${ this.sufix ? html`<p class="sufix">${this.sufix}</p>` : null }
      </div>
    `
  }
}