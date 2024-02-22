import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";

export class ColorInput extends UIComponent {
  static styles = [
    styles.internalStyles,
    css`
      * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
      }

      .color-container {
        position: relative;
        outline: none;
        display: flex;
        height: 100%;
        gap: 0.5rem;
        justify-content: flex-start;
        padding-left: 0.5rem;
        align-items: center;
        flex: 1;
        border-radius: var(--bim-color-input--bdrs);
        background-color: var(--bim-color-input--bgc);
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
        width: 1.25rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        background-color: transparent;
        color: var(--bim-color-input--c);
      }

      .opacity-container {
        outline: none;
        display: flex;
        height: 100%;
        justify-content: flex-start;
        padding-left: 0.5rem;
        align-items: center;
        border-radius: 0.375rem;
        border-color: #bec0c4;
        background-color: #2e2e2e;
      }
    `
  ]

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
     <div class="parent">
      ${ this.label ? html`<bim-input-label .label="${this.label}"></bim-input-label>` : null }
      <div class="input">
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