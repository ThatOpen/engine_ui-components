import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../../core/Component";

// HTML Tag: bim-tab
export class Tab extends Component {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  label?: string;

  private _hidden = false;

  @property({ type: Boolean, reflect: true })
  set hidden(value: boolean) {
    this._hidden = value;
    this.dispatchEvent(new Event("hiddenchange"));
  }

  get hidden() {
    return this._hidden;
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[];
    // @ts-ignore
    for (const child of children) {
      //
    }
  }

  protected render() {
    return html`
      <div class="parent">
        <slot @slotchange=${this.onSlotChange}></slot>
      </div>
    `;
  }
}
