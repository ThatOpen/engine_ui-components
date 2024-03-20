import {
  computePosition,
  flip,
  shift,
  offset,
  inline,
  // @ts-ignore
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.1/+esm";
import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { UIComponent } from "../../core/UIComponent";
import "iconify-icon";
import { ContextMenu } from "../ContextMenu";

export class Button extends UIComponent {
  static styles = css`
    :host {
      flex: 1;
      pointer-events: none;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    .parent {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-icon--c: var(--bim-label--c);
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      column-gap: 0.125rem;
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      outline: var(--bim-button--olw) solid var(--bim-button--olc);
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    .button:hover,
    .children:hover {
      --bim-label--c: white;
      --bim-icon--c: white;
      fill: white;
      background-color: var(--bim-ui_color-main);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([active]) .button {
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.75rem;
    }

    :host([disabled]) .parent {
      background-color: gray;
    }

    .children {
      --bim-icon--fz: var(--bim-ui_size-base);
      padding: 0 0.125rem;
    }

    ::slotted(bim-button) {
      --bim-button--bgc: var(
        --bim-context-menu--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
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
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `;

  static properties = {
    label: { type: String, reflect: true },
    labelHidden: { type: Boolean, attribute: "label-hidden", reflect: true },
    active: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
    tooltipTime: { type: Number, attribute: "tooltip-time", reflect: true },
    tooltipVisible: {
      type: Boolean,
      attribute: "tooltip-visible",
      reflect: true,
    },
    tooltipTitle: { type: String, attribute: "tooltip-title", reflect: true },
    tooltipText: { type: String, attribute: "tooltip-text", reflect: true },
  };

  declare icon?: string;
  declare label?: string;
  declare labelHidden: boolean;
  declare tooltipVisible: boolean;
  declare tooltipText: string;
  declare tooltipTitle: string;
  declare tooltipTime: number;
  declare active: boolean;
  declare disabled: boolean;
  declare vertical: boolean;

  private _parent = createRef<HTMLDivElement>();
  private _tooltip = createRef<HTMLDivElement>();
  private _contextMenu = createRef<ContextMenu>();
  private timeoutID?: number;

  private _mouseLeave = false;

  set mouseLeave(value: boolean) {
    this._mouseLeave = value;
    if (value) {
      this.tooltipVisible = false;
      clearTimeout(this.timeoutID);
    }
  }

  get mouseLeave() {
    return this._mouseLeave;
  }

  constructor() {
    super();
    this.labelHidden = false;
    this.active = false;
    this.disabled = false;
    this.vertical = false;
    this.tooltipVisible = false;
    this.tooltipTime = 700;
    this.mouseLeave = true;
    this.addEventListener("click", (e) => e.stopPropagation());
  }

  private computeTooltipPosition() {
    const { value: parent } = this._parent;
    const { value: tooltip } = this._tooltip;
    if (!(parent && tooltip)) return;
    computePosition(parent, tooltip, {
      placement: "bottom",
      middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
    }).then((data: any) => {
      const { x, y } = data;
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  private onMouseEnter() {
    if (!(this.tooltipTitle || this.tooltipText)) return;
    this.mouseLeave = false;
    this.timeoutID = setTimeout(() => {
      if (this.mouseLeave) return;
      this.computeTooltipPosition();
      this.tooltipVisible = true;
    }, this.tooltipTime);
  }

  private onChildrenClick(e: MouseEvent) {
    e.stopPropagation();
    const { value: contextMenu } = this._contextMenu;
    if (!contextMenu) return;
    contextMenu.visible = !contextMenu.visible;
  }

  private onSlotChange(e: any) {
    const { value: contextMenu } = this._contextMenu;
    const children = e.target.assignedElements();
    for (const child of children) {
      if (!(child instanceof Button)) {
        child.remove();
        console.warn(
          "Only bim-button is allowed inside bim-button. Child has been removed.",
        );
        continue;
      }
      child.addEventListener("click", () => contextMenu?.updatePosition());
    }
    this.requestUpdate();
  }

  private onWindowMouseUp = (e: MouseEvent) => {
    const { value: contextMenu } = this._contextMenu;
    if (!this.contains(e.target as Node) && contextMenu)
      contextMenu.visible = false;
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("mouseup", this.onWindowMouseUp);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("mouseup", this.onWindowMouseUp);
  }

  render() {
    const tooltipTemplate = html`
      <div ${ref(this._tooltip)} class="tooltip">
        ${this.tooltipTitle
          ? html`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`
          : null}
        ${this.tooltipText
          ? html`<p style="width: 9rem;">${this.tooltipText}</p>`
          : null}
      </div>
    `;

    const hasChildren = this.children.length > 0;

    return html`
      <style>
        .button {
          border-radius: var(
            --bim-button--bdrs,
            ${hasChildren
              ? "var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs)"
              : "var(--bim-ui_size-4xs)"}
          );
        }
        .children {
          border-radius: var(
            --bim-button--bdrs,
            ${hasChildren
              ? "0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0"
              : "var(--bim-ui_size-4xs)"}
          );
        }
      </style>
      <div ${ref(this._parent)} class="parent">
        ${this.label || this.icon
          ? html`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${() => (this.mouseLeave = true)}
              >
                <bim-label
                  .label=${this.label}
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                ></bim-label>
              </div>
            `
          : null}
        ${this.tooltipTitle || this.tooltipText ? tooltipTemplate : null}
        ${hasChildren
          ? html`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon icon="ic:round-plus"></bim-icon>
              </div>
            `
          : null}
        <bim-context-menu
          ${ref(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `;
  }
}
