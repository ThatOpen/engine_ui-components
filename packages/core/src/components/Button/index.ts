import { computePosition, flip, shift, offset, inline } from "@floating-ui/dom";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import "iconify-icon";
import { Manager } from "../../core";
import { ContextMenu } from "../ContextMenu";

/**
 * A custom button web component for BIM applications. HTML tag: bim-button
 *
 * @fires click - Fired when the button is clicked.
 */
export class Button extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      overflow: hidden;
      min-height: min-content;
      min-width: min-content;
      transition: all 0.15s;
    }

    :host::before,
    :host::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      box-sizing: border-box;
    }

    :host(:not([disabled]))::before {
      content: "";
      background-color: var(--bim-ui_main-base);
      border-radius: 50%;
      top: 152%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        top 0.3s cubic-bezier(0.72, 0.1, 0.43, 0.93),
        transform 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93);
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover)::before {
      top: 50%;
      transform: translate(-50%, -50%) scale(200%);
    }

    :host(:hover) {
      --bim-label--c: var(--bim-ui_main-contrast);
    }

    :host([active]) {
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([disabled]):active) {
      transform: scale(0.98);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80) !important;
      background-color: gray !important;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
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

  private _stateBeforeLoading: { disabled: boolean; icon?: string } = {
    disabled: false,
    icon: "",
  };

  private _loading = false;

  /**
   * Attribute to set the loading state of the button.
   * When the loading state is set to true, the button is disabled and the icon is changed to a loading spinner.
   * When the loading state is set to false, the button is reverted to its previous state.
   */
  @property({ type: Boolean, reflect: true })
  set loading(value: boolean) {
    this._loading = value;
    if (value) {
      this._stateBeforeLoading = {
        disabled: this.disabled,
        icon: this.icon,
      };
      this.disabled = value;
      this.icon = "eos-icons:loading";
    } else {
      const { disabled, icon } = this._stateBeforeLoading;
      this.disabled = disabled;
      this.icon = icon;
    }
  }

  get loading() {
    return this._loading;
  }

  private _parent = createRef<HTMLDivElement>();
  private _tooltip = createRef<HTMLDivElement>();
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

  private onClick = (e: PointerEvent) => {
    e.stopPropagation();
    if (!this.disabled) this.dispatchEvent(new Event("click"));
  };

  closeNestedContexts() {
    const groupID = this.getAttribute("data-context-group");
    if (!groupID) return;
    for (const menu of ContextMenu.dialog.children) {
      const menuGroup = menu.getAttribute("data-context-group");
      if (!(menu instanceof ContextMenu && menuGroup === groupID)) continue;
      menu.visible = false;
      menu.removeAttribute("data-context-group");
      for (const child of menu.children) {
        if (!(child instanceof Button)) continue;
        child.closeNestedContexts();
        child.removeAttribute("data-context-group");
      }
    }
  }

  click() {
    if (!this.disabled) super.click();
  }

  private get _contextMenu() {
    return this.querySelector("bim-context-menu");
  }

  private showContextMenu = () => {
    const contextMenu = this._contextMenu;
    if (contextMenu) {
      const id = this.getAttribute("data-context-group");
      if (id) contextMenu.setAttribute("data-context-group", id);
      this.closeNestedContexts();
      const childID = Manager.newRandomId();
      for (const child of contextMenu.children) {
        if (!(child instanceof Button)) continue;
        child.setAttribute("data-context-group", childID);
      }
      contextMenu.visible = true;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.showContextMenu);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.showContextMenu);
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

    const hasChildrenSVG = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;

    return html`
      <div ${ref(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label || this.icon
          ? html`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${() => (this.mouseLeave = true)}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label && this._contextMenu
                    ? hasChildrenSVG
                    : null}</bim-label
                >
              </div>
            `
          : null}
        ${this.tooltipTitle || this.tooltipText ? tooltipTemplate : null}
      </div>
      <slot></slot>
    `;
  }
}
