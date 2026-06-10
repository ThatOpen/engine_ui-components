import { LitElement, PropertyValues, TemplateResult, css, html, render } from "lit";
import { property } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";
import "iconify-icon";
import { Manager } from "../../core";

/**
 * A custom button web component for BIM applications. HTML tag: bim-button
 *
 * @fires click - Fired when the button is clicked (not fired when disabled or loading).
 * @fires hidden - Fired when a nested context menu closes.
 */
export class Button extends LitElement {
  private static readonly _chevron = html`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.125rem"
    viewBox="0 0 24 24"
    width="1.125rem"
    class="chevron"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>`;

  /** Registry of buttons with open menus — used for nested-menu coordination. */
  private static _openMenuButtons = new Set<Button>();

  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-2xs);
      transition: background-color 0.15s;
    }

    :host(:not([disabled]):not([loading]):hover) {
      background-color: var(--bim-button--bgc-h, var(--bim-ui_bg-contrast-30));
      cursor: pointer;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: 2px;
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
      min-height: 25px;
      min-width: 25px;
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
      min-height: var(--bim-ui_size-10xl);
      min-width: var(--bim-ui_size-10xl);
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 6px;
    }

    :host([disabled]),
    :host([loading]) {
      --bim-label--c: var(--bim-ui_bg-contrast-50);
      background-color: var(--bim-button--disabled-bgc, var(--bim-ui_bg-contrast-10));
    }

    .chevron {
      fill: var(--bim-label--c);
      flex-shrink: 0;
    }

    /* Buttons inside the context menu dialog */
    dialog bim-button {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--bgc: transparent;
      --bim-button--bgc-h: var(--bim-ui_bg-contrast-20);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    dialog {
      position: fixed;
      margin: 0;
      padding: 0.375rem;
      border: none;
      outline: none;
      border-radius: 4px;
      background-color: var(--bim-ui_bg-contrast-10);
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      overflow: auto;
      max-height: 20rem;
      min-width: 3rem;
      display: none;
      flex-direction: column;
      pointer-events: auto;
    }

    dialog[open] {
      display: flex;
    }

    dialog::backdrop {
      background: transparent;
      pointer-events: auto;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }
  `;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: Boolean, attribute: "label-hidden", reflect: true })
  labelHidden = false;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true, attribute: "disabled" })
  disabled = false;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: Boolean, reflect: true })
  vertical = false;

  /** @deprecated Use `<bim-tooltip>` inside the button instead. */
  private _tooltipTime?: number;

  @property({ type: Number, attribute: "tooltip-time", reflect: true })
  get tooltipTime() { return this._tooltipTime; }
  set tooltipTime(value: number | undefined) {
    const old = this._tooltipTime;
    this._tooltipTime = value;
    if (value !== undefined) {
      console.warn("[bim-button] tooltipTime is deprecated. Use <bim-tooltip timeout=\"...\"> inside the button instead.");
    }
    this.requestUpdate("tooltipTime", old);
  }

  /** @deprecated Use `<bim-tooltip>` inside the button instead. */
  private _tooltipTitle?: string;

  @property({ type: String, attribute: "tooltip-title", reflect: true })
  get tooltipTitle() { return this._tooltipTitle; }
  set tooltipTitle(value: string | undefined) {
    const old = this._tooltipTitle;
    this._tooltipTitle = value;
    if (value !== undefined) {
      console.warn("[bim-button] tooltipTitle is deprecated. Use <bim-tooltip> inside the button instead.");
    }
    this.requestUpdate("tooltipTitle", old);
  }

  /** @deprecated Use `<bim-tooltip>` inside the button instead. */
  private _tooltipText?: string;

  @property({ type: String, attribute: "tooltip-text", reflect: true })
  get tooltipText() { return this._tooltipText; }
  set tooltipText(value: string | undefined) {
    const old = this._tooltipText;
    this._tooltipText = value;
    if (value !== undefined) {
      console.warn("[bim-button] tooltipText is deprecated. Use <bim-tooltip> inside the button instead.");
    }
    this.requestUpdate("tooltipText", old);
  }

  private _loading = false;

  @property({ type: Boolean, reflect: true })
  set loading(value: boolean) {
    const old = this._loading;
    this._loading = value;
    this.requestUpdate("loading", old);
  }

  get loading() {
    return this._loading;
  }

  /**
   * Optional function that returns a TemplateResult for a dynamically rendered
   * context menu. More efficient than a declarative `<bim-context-menu>` child
   * for high-frequency scenarios (e.g. table rows) because the template is only
   * rendered when the menu is actually opened.
   */
  contextMenuTemplate?: () => TemplateResult;

  private _menuDialog = createRef<HTMLDialogElement>();
  private _movedChildren: Element[] = [];

  private _hasContextMenu() {
    return !!(this.querySelector("bim-context-menu") || this.contextMenuTemplate);
  }

  private _updateMenuPosition() {
    const dialog = this._menuDialog.value;
    if (!dialog) return;

    const gap = 10;
    const padding = 5;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const t = this.getBoundingClientRect();
    const m = dialog.getBoundingClientRect();

    // Default placement: right of the button
    let x = t.right + gap;
    let y = t.top;

    // Flip horizontal: if no space to the right, open to the left
    if (x + m.width > vw - padding) x = t.left - m.width - gap;

    // Shift vertical: keep in viewport
    if (y + m.height > vh - padding) y = vh - m.height - padding;
    y = Math.max(padding, y);

    dialog.style.left = `${x}px`;
    dialog.style.top = `${y}px`;
  }

  private _openMenu() {
    const dialog = this._menuDialog.value;
    if (!dialog) return;

    // Clear any stale content from a previous open
    while (dialog.firstChild) dialog.removeChild(dialog.firstChild);
    this._movedChildren = [];

    const contextMenuEl = this.querySelector("bim-context-menu");

    if (this.contextMenuTemplate) {
      // Render template into a temp node, take children of the resulting
      // bim-context-menu (or the node itself if it isn't one)
      const temp = document.createElement("div");
      render(this.contextMenuTemplate(), temp);
      const source = temp.querySelector("bim-context-menu") ?? temp;
      for (const child of [...source.children]) dialog.append(child);
    } else if (contextMenuEl) {
      this._movedChildren = [...contextMenuEl.children];
      for (const child of this._movedChildren) dialog.append(child);
    }

    if (!dialog.children.length) return;

    // Register for nested-menu coordination
    const groupID = this.getAttribute("data-context-group");
    if (groupID) {
      this.closeNestedContexts();
      // Assign a new group ID to children so their submenus can coordinate
      const childID = Manager.newRandomId();
      for (const child of dialog.children) {
        if (child.tagName === "BIM-BUTTON") {
          child.setAttribute("data-context-group", childID);
        }
      }
    }

    Button._openMenuButtons.add(this);
    dialog.showModal();
    this._updateMenuPosition();
  }

  private _closeMenu() {
    const dialog = this._menuDialog.value;
    if (!dialog || !dialog.open) return;

    dialog.close();
    Button._openMenuButtons.delete(this);
    this.dispatchEvent(new Event("menuclose", { bubbles: true, composed: true }));

    // Return moved children to bim-context-menu
    const contextMenuEl = this.querySelector("bim-context-menu");
    if (contextMenuEl && this._movedChildren.length) {
      for (const child of this._movedChildren) contextMenuEl.append(child);
    }
    this._movedChildren = [];
    // Clear any remaining content (template case or orphaned nodes)
    while (dialog.firstChild) dialog.removeChild(dialog.firstChild);

    // Clean up group IDs set on children
    for (const child of [...dialog.children]) {
      if (child.tagName === "BIM-BUTTON") child.removeAttribute("data-context-group");
    }

    this.dispatchEvent(new Event("hidden"));
  }

  /**
   * Closes sibling context menus in the same data-context-group before
   * opening this button's menu — enables correct nested-menu behaviour.
   */
  closeNestedContexts() {
    const groupID = this.getAttribute("data-context-group");
    if (!groupID) return;
    for (const btn of Button._openMenuButtons) {
      if (btn === this) continue;
      if (btn.getAttribute("data-context-group") !== groupID) continue;
      btn._closeMenu();
      btn.removeAttribute("data-context-group");
    }
  }

  click() {
    if (!this.disabled && !this._loading) this.dispatchEvent(new Event("click"));
  }

  // Fires on the inner .parent div — stops propagation then re-dispatches
  // a fresh click on the host so external listeners receive it cleanly.
  private _onParentClick = (e: PointerEvent) => {
    e.stopPropagation();
    if (!this.disabled && !this._loading) this.dispatchEvent(new Event("click"));
  };

  // Fires on the host — opens the context menu if one is configured.
  private _onHostClick = () => {
    if (!this.disabled && !this._loading && this._hasContextMenu()) this._openMenu();
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._onParentClick(e as unknown as PointerEvent);
    }
  };

  private _onDialogClick = (e: MouseEvent) => {
    // Stop ALL clicks from bubbling out of the dialog to the host button,
    // otherwise the host's _onHostClick would re-open the menu immediately.
    e.stopPropagation();
    if (e.target === this._menuDialog.value) this._closeMenu();
  };

  private _onDialogCancel = (e: Event) => {
    e.preventDefault();
    this._closeMenu();
  };

  constructor() {
    super();
    if (!this.hasAttribute("role")) this.setAttribute("role", "button");
    if (!this.hasAttribute("tabindex")) this.setAttribute("tabindex", "0");
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._onHostClick);
    this.addEventListener("keydown", this._onKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._onHostClick);
    this.removeEventListener("keydown", this._onKeyDown);
    this._closeMenu();
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has("disabled") || changedProperties.has("loading")) {
      const isDisabled = this.disabled || this._loading;
      if (isDisabled) {
        this.setAttribute("aria-disabled", "true");
      } else {
        this.removeAttribute("aria-disabled");
      }
    }

    if (
      changedProperties.has("label") ||
      changedProperties.has("labelHidden") ||
      changedProperties.has("icon") ||
      changedProperties.has("tooltipTitle")
    ) {
      if (this.labelHidden && this.label) {
        this.setAttribute("aria-label", this.label);
      } else if (!this.label && this.icon) {
        this.setAttribute("aria-label", this._tooltipTitle ?? this.icon);
      }
    }
  }

  protected render() {
    const hasMenu = this._hasContextMenu();
    const effectiveIcon = this._loading ? "eos-icons:loading" : this.icon;

    let labelContent = html`${this.label}`;
    if (hasMenu && this.label) {
      labelContent = html`
        <div style="display: flex; align-items: center;">
          ${this.label}
          ${Button._chevron}
        </div>
      `;
    }

    return html`
      <div class="parent" @click=${this._onParentClick}>
        ${this.label || effectiveIcon
          ? html`
              <div class="button">
                <bim-label
                  .icon=${effectiveIcon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${labelContent}</bim-label
                >
              </div>
            `
          : null}
      </div>
      <slot></slot>
      <dialog
        ${ref(this._menuDialog)}
        @click=${this._onDialogClick}
        @cancel=${this._onDialogCancel}
      ></dialog>
    `;
  }
}
