import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
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
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        position: relative;
        display: flex;
        flex-wrap: wrap;
        grid-area: switchers;
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

  private _tab?: string;
  private _pendingTab?: string;
  private _initialized = false;
  private _updatingTab = false;

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
    return html`
      <div class="parent">
        <div
          class="switchers"
          role="tablist"
          aria-label=${this.label ?? nothing}
          @keydown=${this._onSwitchersKeyDown}
        >
          ${this._switcherData.map((s) => {
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
