import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { NumberInput } from "../NumberInput"
import { UIComponent } from "../../core/UIComponent"
import { styles } from "../../core/UIManager/src/styles";

export class VectorInput extends UIComponent {
  static styles = [
    styles.internalStyles,
    css`      
      .input {
        column-gap: 0.5rem;
      }
    `
  ]

  static properties = {
    value: { type: Object },
    label: { type: String, reflect: true },
    sufix: { type: String, reflect: true }
  }

  declare value: {x: number, y: number, z: number}
  declare label?: string
  declare sufix?: string

  private _xInput = createRef<NumberInput>()
  private _yInput = createRef<NumberInput>()
  private _zInput = createRef<NumberInput>()

  protected static _tableHostable = true

  private onInput(e: InputEvent, axis: "x" | "y" | "z") {
    const input = e.target as NumberInput
    const { value } = input
    if (this.value) {
      this.value[axis] = value ? Number(value) : 0
    }
  }

  constructor() {
    super()
    this.value = {x: 0, y: 0, z: 0}
  }

  focus() {
    const { value } = this._xInput
    if (!value) return;
    value.focus()
  }

  render() {
    return html`
      <div class="parent">
        ${ this.label ? html`<bim-input-label .label="${this.label}" @click=${this.focus}></bim-input-label>` : null }
        <div class="input">
          <bim-number-input ${ref(this._xInput)} .pref="${"X"}" .sufix="${this.sufix}" .value="${this.value.x}" @input=${(e: InputEvent) => this.onInput(e, "x")} @change=${(e: InputEvent) => this.onInput(e, "x")}></bim-number-input>
          <bim-number-input ${ref(this._yInput)} .pref="${"Y"}" .sufix="${this.sufix}" .value="${this.value.y}" @input=${(e: InputEvent) => this.onInput(e, "y")} @change=${(e: InputEvent) => this.onInput(e, "y")}></bim-number-input>
          <bim-number-input ${ref(this._zInput)} .pref="${"Z"}" .sufix="${this.sufix}" .value="${this.value.z}" @input=${(e: InputEvent) => this.onInput(e, "z")} @change=${(e: InputEvent) => this.onInput(e, "z")}></bim-number-input>
        </div>
      </div> 
    `
  }
}
