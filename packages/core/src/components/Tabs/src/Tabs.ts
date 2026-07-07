import { LitElement, css, html, nothing, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";
import { Tab } from "./Tab";
import { styles } from "../../../core/Manager/src/styles";

type SwitcherData = {
  name: string;
  label?: string;
  icon?: string;
  panelId: string;
};

/**
 * A custom tabs web component for BIM applications. HTML tag: bim-tabs
 */
export class Tabs extends LitElement {
  static styles = [
    styles.scrollbar,
    css`
      * {
        box-sizing: border-box;
      }

      :host {
        flex: 1;
        display: block;
        height: 100%;
        background-color: var(--bim-tabs--bg, var(--bim-ui_bg-contrast-10));
        overflow: auto;
        border: var(--bim-tabs--border, 1px solid var(--bim-ui_bg-contrast-20));
        border-radius: 0.75rem;
        --bim-panel--header-display: none;
        --bim-panel-section--header-display: none;
        --bim-panel-section--border: none;
        --bim-panel-section--bdrs: 0;
        --bim-panel-section--bg: transparent;
        --bim-panel--border: none;
        --bim-toolbar--border: none;
        --bim-toolbar--bdrs: 0;
      }

      .parent {
        display: grid;
        overflow: hidden;
        position: relative;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        height: 35px;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        position: relative;
        display: flex;
        flex-wrap: wrap;
        grid-area: switchers;
        overflow: hidden;
      }

      :host([bottom]) .switchers {
        border-bottom: none;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        padding: 0 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--bim-tabs-switcher--z, 2);
        transition: background-color 0.15s;
        min-height: var(--bim-tabs-switcher--minh, 30px);
      }

      .switcher:not([data-active]):hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_bg-contrast-100);
        background-color: var(--bim-ui_bg-contrast-30);
      }

      .switcher:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      :host([switchers-compact]) .switchers {
        width: fit-content;
        border-bottom: none;
        padding: 0;
        margin: var(--bim-ui_size-sm);
        gap: 0;
        overflow: auto;
        border-radius: var(--bim-ui_size-2xs);
      }

      :host([switchers-compact]) .switcher {
        min-width: unset;
        padding: 0 var(--bim-ui_size-sm);
        border-radius: 0;
        background-color: var(--bim-ui_bg-contrast-20);
      }

      :host([switchers-compact]) .switcher[data-active] {
        background-color: var(--bim-ui_bg-contrast-40);
      }

      /* Invisible measure strip — always rendered to detect overflow */
      .switchers-measure {
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        visibility: hidden;
        pointer-events: none;
        display: flex;
        flex-wrap: nowrap;
      }

      .switcher-ghost {
        padding: 0 0.75rem;
        display: flex;
        align-items: center;
        min-height: var(--bim-tabs-switcher--minh, 30px);
        flex-shrink: 0;
        white-space: nowrap;
      }

      /* Overflow dropdown trigger */
      .tab-trigger {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        all: unset;
        box-sizing: border-box;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.375rem;
        padding: 0 0.75rem;
        cursor: pointer;
        min-height: var(--bim-tabs-switcher--minh, 30px);
        user-select: none;
      }

      .tab-trigger svg {
        flex-shrink: 0;
      }

      .tab-trigger:hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .tab-trigger:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      /* Overflow dropdown dialog */
      dialog {
        position: fixed;
        margin: 0;
        padding: 0.25rem 0;
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-contrast-10);
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        overflow: auto;
        max-height: 20rem;
        min-width: 8rem;
      }

      dialog::backdrop {
        background: transparent;
      }

      .tab-option {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        align-items: center;
        padding: 0 0.75rem;
        min-height: var(--bim-tabs-switcher--minh, 30px);
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
      }

      .tab-option:hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .tab-option[data-active] {
        --bim-label--c: var(--bim-ui_bg-contrast-100);
        background-color: var(--bim-ui_bg-contrast-30);
      }

      .content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-area: content;
        overflow: auto;
      }

      :host([tab="hidden"]) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
        border: none;
        --bim-toolbar--w: 100%;
        overflow: visible;
      }

      :host([floating]) .parent {
        overflow: visible;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: hidden;
        background-color: var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-bottom: none;
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-top: none;
      }

      :host([floating][tab="hidden"]) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border: 1px solid var(--bim-ui_bg-contrast-40);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }

      :host([floating][tab="hidden"]) .content {
        border: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .switcher {
          transition: none;
        }
      }
    `,
  ];

  @state()
  private _switcherData: SwitcherData[] = [];

  @state()
  private _useDropdown = false;

  private _tab?: string;
  private _pendingTab?: string;
  private _initialized = false;
  private _updatingTab = false;
  private _ro?: ResizeObserver;
  private _dialogRef = createRef<HTMLDialogElement>();
  private _triggerRef = createRef<HTMLButtonElement>();

  /** Indicates whether the tabs are positioned at the bottom of the container. */
  @property({ type: Boolean, reflect: true })
  bottom = false;

  /** Hides the tab switcher bar. */
  @property({ type: Boolean, attribute: "switchers-hidden", reflect: true })
  switchersHidden = false;

  @property({ type: Boolean, reflect: true })
  floating = false;

  /** Accessible label forwarded as `aria-label` on the tablist. */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * The name of the currently active tab. Set to `undefined` to deselect all tabs.
   */
  @property({ type: String, reflect: true })
  set tab(value: string | undefined) {
    if (!this._initialized && value && value !== "hidden") {
      this._pendingTab = value;
      return;
    }
    const oldTab = this._tab;
    const children = [...this.children];
    const matchingTab = children.find(
      (child) => child instanceof Tab && child.name === value,
    );
    this._tab = matchingTab ? value : "hidden";
    this._updatingTab = true;
    for (const child of children) {
      if (!(child instanceof Tab)) continue;
      child.hidden = matchingTab !== child;
    }
    this._updatingTab = false;
    this.requestUpdate("tab", oldTab);
  }

  get tab() {
    return this._tab;
  }

  @property({ type: Boolean, attribute: "switchers-full", reflect: true })
  switchersFull = false;

  @property({ type: Boolean, attribute: "switchers-compact", reflect: true })
  switchersCompact = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("tab-update", this._updateSwitchers);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("tab-update", this._updateSwitchers);
    for (const child of this.children) {
      if (child instanceof Tab)
        child.removeEventListener("hiddenchange", this._onTabHiddenChange);
    }
    this._ro?.disconnect();
    this._dialogRef.value?.close();
  }

  firstUpdated() {
    this._ro = new ResizeObserver(() => this._checkOverflow());
    this._ro.observe(this);
    requestAnimationFrame(() => this._checkOverflow());
  }

  protected updated(changed: PropertyValues) {
    super.updated(changed);
    if (changed.has("_switcherData")) {
      requestAnimationFrame(() => this._checkOverflow());
    }
  }

  private _checkOverflow() {
    const measure = this.renderRoot.querySelector<HTMLElement>(
      ".switchers-measure",
    );
    if (!measure) return;
    const needed = measure.offsetWidth;
    const available = this.clientWidth;
    const shouldUse = needed > available;
    if (shouldUse !== this._useDropdown) this._useDropdown = shouldUse;
  }

  private _onTriggerClick() {
    const dialog = this._dialogRef.value;
    const trigger = this._triggerRef.value;
    if (!dialog || !trigger) return;
    if (dialog.open) {
      dialog.close();
      return;
    }
    const rect = trigger.getBoundingClientRect();
    dialog.style.top = `${rect.top}px`;
    dialog.style.left = `${rect.right + 4}px`;
    dialog.showModal();
    // Flip to left side if it overflows the right edge
    const dRect = dialog.getBoundingClientRect();
    if (dRect.right > window.innerWidth - 4) {
      dialog.style.left = `${rect.left - dRect.width - 4}px`;
    }
    // Clip vertically if taller than remaining space
    if (dRect.bottom > window.innerHeight - 4) {
      dialog.style.top = `${Math.max(4, window.innerHeight - dRect.height - 4)}px`;
    }
  }

  private _onDialogClick(e: MouseEvent) {
    const dialog = e.currentTarget as HTMLDialogElement;
    const rect = dialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      dialog.close();
    }
  }

  private _onTabHiddenChange = (e: Event) => {
    if (this._updatingTab) return;
    const element = e.target;
    if (!(element instanceof Tab && !element.hidden)) return;
    this.tab = element.name;
  };

  private _createSwitchers() {
    this._switcherData = [];
    for (const child of this.children) {
      if (!(child instanceof Tab)) continue;
      if (!child.id) child.id = `bim-tab-panel-${child.name}`;
      this._switcherData.push({
        name: child.name,
        label: child.label,
        icon: child.icon,
        panelId: child.id,
      });
    }
  }

  private _updateSwitchers = () => {
    for (const child of this.children) {
      if (!(child instanceof Tab)) continue;
      const entry = this._switcherData.find((s) => s.name === child.name);
      if (!entry) continue;
      entry.label = child.label;
      entry.icon = child.icon;
    }
    this.requestUpdate();
  };

  private _onSwitchersKeyDown = (e: KeyboardEvent) => {
    const switchers = [
      ...this.renderRoot.querySelectorAll<HTMLElement>(".switcher"),
    ];
    const count = switchers.length;
    if (!count) return;
    const activeIdx = switchers.findIndex(
      (s) => s.getAttribute("data-name") === this._tab,
    );
    let nextIdx = activeIdx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIdx = (activeIdx + 1) % count;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIdx = (activeIdx - 1 + count) % count;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIdx = count - 1;
    } else {
      return;
    }
    const next = switchers[nextIdx];
    if (next) {
      this.tab = next.getAttribute("data-name") ?? undefined;
      next.focus();
    }
  };

  private _onSlotChange(e: Event) {
    this._initialized = true;
    this._createSwitchers();
    const slot = e.target as HTMLSlotElement;
    const children = slot.assignedElements() as HTMLElement[];
    const targetName = this._pendingTab ?? this._tab;
    this._pendingTab = undefined;
    const anyVisibleTab = children.find((child) => {
      if (!(child instanceof Tab)) return false;
      if (targetName && targetName !== "hidden") return child.name === targetName;
      return !child.hidden;
    });
    if (anyVisibleTab instanceof Tab) this.tab = anyVisibleTab.name;
    for (const child of children) {
      if (!(child instanceof Tab)) {
        console.warn(
          "[bim-tabs] Only bim-tab elements are allowed as children. Removing:",
          child,
        );
        child.remove();
        continue;
      }
      child.setAttribute("aria-label", child.label || child.name || "");
      child.removeEventListener("hiddenchange", this._onTabHiddenChange);
      if (anyVisibleTab !== child) child.hidden = true;
      child.addEventListener("hiddenchange", this._onTabHiddenChange);
    }
  }

  protected render() {
    const activeData = this._switcherData.find((s) => s.name === this._tab);

    return html`
      <div class="parent">
        <div class="switchers-measure" aria-hidden="true">
          ${this._switcherData.map(
            (s) => html`
              <div class="switcher-ghost">
                <bim-label .icon=${s.icon}>${s.label ?? ""}</bim-label>
              </div>
            `,
          )}
        </div>
        <div
          class="switchers"
          role=${this._useDropdown ? nothing : "tablist"}
          aria-label=${this.label ?? nothing}
          @keydown=${this._useDropdown ? nothing : this._onSwitchersKeyDown}
        >
          ${this._useDropdown
            ? html`
                <button
                  class="tab-trigger"
                  ${ref(this._triggerRef)}
                  @click=${this._onTriggerClick}
                  aria-haspopup="listbox"
                >
                  <bim-label .icon=${activeData?.icon}
                    >${activeData?.label ?? ""}</bim-label
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 6l5 5 5-5" />
                  </svg>
                </button>
                <dialog ${ref(this._dialogRef)} @click=${this._onDialogClick}>
                  ${this._switcherData.map((s) => {
                    const isActive = this._tab === s.name;
                    return html`<div
                      class="tab-option"
                      ?data-active=${isActive}
                      @click=${() => {
                        this.tab = s.name;
                        this._dialogRef.value?.close();
                      }}
                    >
                      <bim-label .icon=${s.icon}>${s.label ?? ""}</bim-label>
                    </div>`;
                  })}
                </dialog>
              `
            : this._switcherData.map((s) => {
                const isActive = this._tab === s.name;
                return html`<div
                  class="switcher"
                  data-name=${s.name}
                  role="tab"
                  aria-selected=${isActive}
                  tabindex=${isActive ? 0 : -1}
                  aria-controls=${s.panelId}
                  ?data-active=${isActive}
                  @click=${() => {
                    if (this._tab === s.name) {
                      if (this.floating) this.tab = undefined;
                      return;
                    }
                    this.tab = s.name;
                  }}
                ><bim-label .icon=${s.icon}>${s.label ?? ""}</bim-label></div>`;
              })}
        </div>
        <div class="content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `;
  }
}
