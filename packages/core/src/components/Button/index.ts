import { computePosition, flip, shift, offset, inline } from "@floating-ui/dom";
import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { Component } from "../../core/Component";
import "iconify-icon";
import { ContextMenu } from "../ContextMenu";

// HTML tag: bim-button
export class Button extends Component {
  static styles = css`
    :host {
      display: block;
      flex: 1;
      pointer-events: none;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
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

    :host(:hover) .button,
    :host(:hover) .children {
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
      fill: white;
      background-color: var(--bim-ui_color-main);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([active]) .button {
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
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
      --bim-icon--fz: var(--bim-ui_size-base);
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

  /**
   * The label to be displayed on the button.
   * @type {string}
   * @default undefined
   * @example <bim-button label="Click me"></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * A boolean attribute which, if present, indicates that the label should be hidden.
   * @default false
   * @example <bim-button label="Click me" label-hidden></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.labelHidden = true;
   */
  @property({ type: Boolean, attribute: "label-hidden", reflect: true })
  labelHidden = false;

  /**
   * A boolean attribute which, if present, indicates that the button is active.
   * @default false
   * @example <bim-button label="Click me" active></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.active = true;
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * A boolean attribute which, if present, indicates that the button is disabled.
   * @default false
   * @example <bim-button label="Click me" disabled></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.disabled = true;
   */
  @property({ type: Boolean, reflect: true, attribute: "disabled" })
  disabled = false;

  /**
   * The icon to be displayed on the button.
   * @type {string}
   * @default undefined
   * @example <bim-button icon="my-icon"></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.icon = 'my-icon';
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * A boolean attribute which, if present, indicates that the button should be displayed vertically.
   * @default false
   * @example <bim-button label="Click me" vertical></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.vertical = true;
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * The time (in milliseconds) to wait before showing the tooltip when hovering over the button.
   * @type {number}
   * @default 700
   * @example <bim-button label="Click me" tooltip-time="1000"></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.tooltipTime = 1000;
   */
  @property({ type: Number, attribute: "tooltip-time", reflect: true })
  tooltipTime?: number;

  /**
   * A boolean attribute which, if present, indicates that the tooltip should be visible.
   * @default false
   * @example <bim-button label="Click me" tooltip-visible></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.tooltipVisible = true;
   */
  @property({ type: Boolean, attribute: "tooltip-visible", reflect: true })
  tooltipVisible = false;

  /**
   * The title of the tooltip to be displayed when hovering over the button.
   * @type {string}
   * @default undefined
   * @example <bim-button label="Click me" tooltip-title="Button Tooltip"></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.tooltipTitle = 'Button Tooltip';
   */
  @property({ type: String, attribute: "tooltip-title", reflect: true })
  tooltipTitle?: string;

  /**
   * The text of the tooltip to be displayed when hovering over the button.
   * @type {string}
   * @default undefined
   * @example <bim-button label="Click me" tooltip-text="This is a tooltip"></bim-button>
   * @example const button = document.createElement('bim-button');
   *          button.label = 'Click me';
   *          button.tooltipText = 'This is a tooltip';
   */
  @property({ type: String, attribute: "tooltip-text", reflect: true })
  tooltipText?: string;

  private _parent = createRef<HTMLDivElement>();
  private _tooltip = createRef<HTMLDivElement>();
  private _contextMenu = createRef<ContextMenu>();
  private timeoutID?: number;

  private _mouseLeave = false;

  private set mouseLeave(value: boolean) {
    this._mouseLeave = value;
    if (value) {
      this.tooltipVisible = false;
      clearTimeout(this.timeoutID);
    }
  }

  private get mouseLeave() {
    return this._mouseLeave;
  }

  constructor() {
    super();
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
    const tooltipTime = this.tooltipTime ?? 700;
    this.timeoutID = setTimeout(() => {
      if (this.mouseLeave) return;
      this.computeTooltipPosition();
      this.tooltipVisible = true;
    }, tooltipTime) as unknown as number;
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

  protected render() {
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
                <bim-icon .icon=${"ic:round-plus"}></bim-icon>
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
