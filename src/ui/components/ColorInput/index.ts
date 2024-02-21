import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { UIComponent } from "../../core/UIComponent"

export class ColorInput extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      border: none;
    }

    :host {
      width: 100%;
    }

    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    .input-container {
      box-sizing: border-box;
      display: flex;
      column-gap: 0.25rem;
      height: 100%;
      flex: 1 1 0%;
      min-width: 6rem;
      max-width: 13rem;
    }

    .color-container {
      position: relative;
      outline: none;
      border-color: #bec0c4;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      border-radius: 0.375rem;
      justify-content: flex-start;
      padding-left: 0.5rem;
      align-items: center;
      flex: 1;
      background-color: #2e2e2e;
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }
    
    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      outline: none;
      background-color: transparent;
      color: #fff;
      font-size: 0.75rem;
      line-height: 1rem;
      width: 1.25rem;
      text-transform: uppercase;
    }

    .opacity-container {
      outline: none;
      border-color: #bec0c4;
      display: flex;
      height: 100%;
      border-radius: 0.375rem;
      justify-content: flex-start;
      padding-left: 0.5rem;
      align-items: center;
      background-color: #2e2e2e;
    }
  `

  static properties = {
    label: { type: String },
    transparent: { type: Boolean, reflect: true },
    opacity: { type: Number },
    value: { type: Object }
  }

  declare label?: string
  declare transparent: boolean
  declare opacity: number
  declare value: { color: string, opacity: number }

  private _sample = createRef<HTMLDivElement>()
  private _color = createRef<HTMLInputElement>()
  private _text = createRef<HTMLInputElement>()
  private _opacity = createRef<HTMLInputElement>()

  protected static _tableHostable = true

  constructor() {
    super()
    this.transparent = false
    this.opacity = 1
    this.value = {
      color: "#bcf124",
      opacity: 1
    }
  }

  focus() {
    const { value } = this._color
    if (!value) return;
    value.click()
  }

  associateMaterial(material: THREE.Material) {
    this.transparent = material.transparent
    material.opacity
  }

  private onColorInput() {
    const { value: colorInput } = this._color
    const { value: textInput } = this._text
    if (!(colorInput && textInput)) return;
    const { value } = colorInput
    textInput.value = value
    this.value = { color: value, opacity: this.opacity }
  }

  private onTextInput() {
    const { value: colorInput } = this._color
    const { value: textInput } = this._text
    if (!(colorInput && textInput)) return;
    const value = this._textValue
    colorInput.value = value
  }

  private get _textValue() {
    const { value: textInput } = this._text
    if (!textInput) return "";
    const { value: inputValue } = textInput
    textInput.value = inputValue.slice(0, 7)
    return textInput.value
  }

  render() {
    const opacityTemplate = html`
      <div class="opacity-container">
        <input ${ref(this._opacity)} type="text">
      </div>
    `

    return html`
     <div class="host">
      ${ this.label ? html`<bim-input-label .label="${this.label}"></bim-input-label>` : null }
      <div class="input-container">
        <div class="color-container">
          <input ${ref(this._color)} @input="${this.onColorInput}" type="color" .value="${this.value.color}">
          <div ${ref(this._sample)} @click=${this.focus} class="sample" style="background-color: ${this.value.color}"></div>
          <input ${ref(this._text)} @input="${this.onTextInput}" .value="${this.value.color}" type="text">
        </div>
        ${
          this.transparent
          ? opacityTemplate
          : null
        }
      </div>
     </div>
    `
  }
}