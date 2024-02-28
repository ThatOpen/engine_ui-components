import {
  computePosition,
  flip,
  shift,
  offset,
  inline,
  arrow
  //@ts-ignore
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.1/+esm";
import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import 'iconify-icon';
import { createRef, ref } from "lit/directives/ref.js";

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
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100)
    }

    .tooltip-arrow {
      position: absolute;
      width: 0.625rem;
      height: 0.625rem;
      background-color: var(--bim-ui_bg-contrast-20);
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    labelHidden: { type: Boolean, attribute: "label-hidden", reflect: true },
    active: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
    tooltipTime: { type: Number, attribute: "tooltip-time", reflect: true },
    tooltipVisible: { type: Boolean, attribute: "tooltip-visible", reflect: true },
    tooltipTitle: { type: String, attribute: "tooltip-title", reflect: true },
    tooltipText: { type: String, attribute: "tooltip-text", reflect: true },
  }

  declare icon?: string
  declare label?: string
  declare labelHidden: boolean
  declare tooltipVisible: boolean
  declare tooltipText: boolean
  declare tooltipTitle: boolean
  declare tooltipTime: number
  declare active: boolean
  declare disabled: boolean
  declare vertical: boolean

  protected static _tableHostable = true

  private _parent = createRef<HTMLDivElement>()
  private _tooltip = createRef<HTMLDivElement>()
  private _tooltipArrow = createRef<HTMLDivElement>()
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
    this.labelHidden = false
    this.active = false
    this.disabled = false
    this.vertical = false
    this.tooltipVisible = false
    this.tooltipTime = 700
    this.mouseLeave = true
  }

  private computeTooltipPosition() {
    const { value: parent } = this._parent
    const { value: tooltip } = this._tooltip
    // const { value: tooltipArrow } = this._tooltipArrow
    if (!(parent && tooltip)) return;
    computePosition(parent, tooltip, {
      placement: "bottom",
      middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
    }).then((data: any) => {
      const { x, y } = data;
      // const { arrow } = data.middlewareData;
      // if (arrow) {
      //   console.log(arrow)
      //   const {x, y} = arrow;
      //   Object.assign(tooltipArrow.style, {
      //     left: x != null ? `${x}px` : '',
      //     top: y != null ? `${y}px` : '',
      //   });
      // }
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  private onMouseEnter() {
    if (!(this.tooltipTitle || this.tooltipText)) return;
    this.mouseLeave = false
    this.timeoutID = setTimeout(() => {
      if (this.mouseLeave) return;
      this.computeTooltipPosition()
      this.tooltipVisible = true
    }, this.tooltipTime)
  }

  render() {
    const tooltipTemplate = html`
      <div ${ref(this._tooltip)} class="tooltip">
        ${this.tooltipTitle ? html`<p style="text-wrap: nowrap;"><strong>${this.tooltipTitle}</strong></p>` : null}
        ${this.tooltipText ? html`<p style="width: 9rem;">${this.tooltipText}</p>` : null}
        <!-- <div ${ref(this._tooltipArrow)} class="tooltip-arrow"></div> -->
      </div>
    `
    return html`
      <div ${ref(this._parent)} class="parent" @mouseenter=${this.onMouseEnter} @mouseleave=${() => this.mouseLeave = true}>
        ${this.label || this.icon ? html`<bim-label .label=${this.label} .icon=${this.icon} ?vertical=${this.vertical} ?label-hidden=${this.labelHidden}></bim-label>` : null}
        ${this.tooltipTitle || this.tooltipText ? tooltipTemplate : null}
      </div>
    `
  }
}