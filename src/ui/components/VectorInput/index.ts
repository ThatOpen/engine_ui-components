import { css, html } from "lit"
import { createRef, ref } from "lit/directives/ref.js"
import { NumberInput } from "../NumberInput"
import { UIComponent } from "../../core/UIComponent"

export class VectorInput extends UIComponent {
  static styles = css`
    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    .inputs-container {
      display: flex;
      flex: 1 1 0%;
      height: 100%;
      justify-content: flex-end;
      column-gap: 0.5rem;
      max-width: 13rem;
    }
  `

  static properties = {
    value: { type: Object },
    label: { type: String },
    sufix: { type: String }
  }

  declare value?: {x: number, y: number, z: number}
  declare label?: string
  declare sufix?: string

  private _host = createRef<HTMLDivElement>()
  private _xInput = createRef<NumberInput>()

  protected static _tableHostable = true

  private onInput(e: InputEvent, axis: "x" | "y" | "z") {
    const input = e.target as NumberInput
    const { value } = input
    if (this.value) {
      this.value[axis] = value ? Number(value) : 0
    }
  }

  focus() {
    const { value } = this._xInput
    if (!value) return;
    value.focus()
  }

  render() {
    return html`
      <div ${ref(this._host)} class="host">
        ${ this.label ? html`<bim-input-label .label="${this.label}" @click=${this.focus}></bim-input-label>` : null }
        <div class="inputs-container">
          <bim-number-input ${ref(this._xInput)} .pref="${"X"}" .sufix="${this.sufix}" .value="${this.value?.x}" @input=${(e: InputEvent) => this.onInput(e, "x")} @change=${(e: InputEvent) => this.onInput(e, "x")}></bim-number-input>
          <bim-number-input .pref="${"Y"}" .sufix="${this.sufix}" .value="${this.value?.y}" @input=${(e: InputEvent) => this.onInput(e, "y")} @change=${(e: InputEvent) => this.onInput(e, "y")}></bim-number-input>
          <bim-number-input .pref="${"Z"}" .sufix="${this.sufix}" .value="${this.value?.z}" @input=${(e: InputEvent) => this.onInput(e, "z")} @change=${(e: InputEvent) => this.onInput(e, "z")}></bim-number-input>
        </div>
      </div> 
    `
  }
}
