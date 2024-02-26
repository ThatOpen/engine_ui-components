import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import 'iconify-icon';

export class Button extends UIComponent {
  static styles = css`    
    * {
      margin: 0;
      padding: 0;
    }

    :host {
      background-color: var(--bim-button--bgc);
      border-radius: var(--bim-button--bdrs)
    }

    .parent {
      position: relative;
      box-sizing: border-box;
      display: flex;
      height: 100%;
      user-select: none;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      min-width: 1.75rem;
      align-items: center;
      justify-content: var(--bim-button--jc);
    }
    
    :host([vertical]) .parent {
      flex-direction: column;
      padding: 0.375rem;
    }
    
    :host(:not([vertical])) .parent {
      height: 1.75rem;
      padding: 0 0.375rem;
    }
    
    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    :host([disabled]) .parent {
      background-color: gray;
    }

    .parent > p {
      margin: 0;
      padding: 0;
      text-wrap: nowrap;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      right: -100px; 
      top: 24px;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100)
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    active: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
    tooltip: { type: Boolean, reflect: true },
    tooltipTime: { type: Number, reflect: true },
    tooltipVisible: { type: Boolean, attribute: "tooltip-visible", reflect: true },
    tooltipTitle: { type: String, attribute: "tooltip-title", reflect: true },
    tooltipText: { type: String, attribute: "tooltip-text", reflect: true },
  }

  declare label?: string
  declare icon?: string
  declare tooltip: boolean
  declare tooltipVisible: boolean
  declare tooltipText: boolean
  declare tooltipTitle: boolean
  declare tooltipTime: number
  declare active: boolean
  declare disabled: boolean
  declare vertical: boolean

  protected static _tableHostable = true

  private timeoutID?: number
  private _mouseLeave = false

  set mouseLeave(value: boolean) {
    this._mouseLeave = value
    if (value) {
      this.tooltipVisible = false
      clearTimeout(this.timeoutID)
    }
  }

  get mouseLeave() {
    return this._mouseLeave
  }

  constructor() {
    super()
    this.active = false
    this.disabled = false
    this.vertical = false
    this.tooltip = false
    this.tooltipVisible = false
    this.tooltipTime = 800
    this.mouseLeave = true
  }

  private onMouseEnter() {
    if (!this.tooltip) return;
    this.mouseLeave = false
    this.timeoutID = setTimeout(() => {
      if (this.mouseLeave) return;
      this.tooltipVisible = true
    }, this.tooltipTime)
  }

  render() {
    const tooltipTemplate = html`
      <div class="tooltip">
        <p><strong>Animate</strong></p>
        <p>Starts the 4D simulation based on the tasks assigned.</p>
      </div>
    `
    return html`
      <div class="parent" @mouseenter=${this.onMouseEnter} @mouseleave=${() => this.mouseLeave = true}>
        ${this.label || this.icon ? html`<bim-input-label .label=${this.label} .icon=${this.icon} ?vertical=${this.vertical}></bim-input-label>` : null}
        ${this.tooltip ? tooltipTemplate : null}
      </div>
    `
  }
}