import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Tab } from "./Tab";
import { styles } from "../../../core/Manager/src/styles";

// HTML Tag: bim-tabs
/**
 * Heloooooooooo
 */
export class Tabs extends LitElement {
  static styles = [
    styles.scrollbar,
    css`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `,
  ];

  @state()
  private _switchers: HTMLDivElement[] = [];

  private _tab?: string;

  /**
   * Indicates whether the tabs are positioned at the bottom of the container.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  bottom = false;

  /**
   * Indicates whether the tab switchers are hidden or not.
   *
   * @default false
   */
  @property({ type: Boolean, attribute: "switchers-hidden", reflect: true })
  switchersHidden = false;

  @property({ type: Boolean, reflect: true })
  floating = false;

  /**
   * Sets the active tab based on the provided name.
   *
   * @param value - The name of the tab to be set as active. If `undefined`, no tab will be selected.
   *
   * @remarks
   * This method iterates through all child elements, finds the matching tab by name,
   * and sets its `hidden` property to `false`. It also updates the corresponding tab switcher's
   * `data-active` attribute to reflect the active state.
   *
   * If the provided `value` does not match any tab name, no tab will be selected.
   *
   * If the `tab` property is already set to the provided `value`, this method will deselect all tabs
   * by setting the `tab` property to `undefined`.
   *
   * @example
   * ```typescript
   * // Set the active tab to "tab1"
   * tabs.tab = "tab1";
   *
   * // Deselect all tabs
   * tabs.tab = undefined;
   * ```
   */
  @property({ type: String, reflect: true })
  set tab(value: string | undefined) {
    this._tab = value;
    const children = [...this.children];
    const matchingTab = children.find(
      (child) => child instanceof Tab && child.name === value,
    );
    for (const child of children) {
      if (!(child instanceof Tab)) continue;
      child.hidden = matchingTab !== child;
      const switcher = this.getTabSwitcher(child.name);
      if (!switcher) continue;
      switcher.toggleAttribute("data-active", !child.hidden);
    }
  }

  get tab() {
    return this._tab;
  }

  @property({ type: Boolean, attribute: "switchers-full", reflect: true })
  switchersFull = false;

  private getTabSwitcher(name: string) {
    const switcher = this._switchers.find(
      (swticher) => swticher.getAttribute("data-name") === name,
    );
    return switcher;
  }

  private onTabHiddenChange = (e: Event) => {
    const element = e.target;
    if (!(element instanceof Tab && !element.hidden)) return;
    element.removeEventListener("hiddenchange", this.onTabHiddenChange);
    this.tab = element.name;
    element.addEventListener("hiddenchange", this.onTabHiddenChange);
  };

  private createSwitchers() {
    this._switchers = [];
    for (const child of this.children) {
      if (!(child instanceof Tab)) continue;
      const element = document.createElement("div");
      element.addEventListener("click", () => {
        const alreadySelected = this.tab === child.name;
        if (alreadySelected) {
          this.toggleAttribute("tab", false);
        } else {
          this.tab = child.name;
        }
      });
      element.setAttribute("data-name", child.name);
      element.className = "switcher";
      const label = document.createElement("bim-label");
      label.textContent = child.label ?? "";
      label.icon = child.icon;
      element.append(label);
      this._switchers.push(element);
    }
  }

  private onSlotChange(e: any) {
    this.createSwitchers();
    const children = e.target.assignedElements() as HTMLElement[];
    const anyVisibleTab = children.find((child) => {
      if (!(child instanceof Tab)) return false;
      if (this.tab) {
        return child.name === this.tab;
      }
      return !child.hidden;
    });
    if (anyVisibleTab && anyVisibleTab instanceof Tab)
      this.tab = anyVisibleTab.name;
    for (const child of children) {
      if (!(child instanceof Tab)) {
        child.remove();
        continue;
      }
      child.removeEventListener("hiddenchange", this.onTabHiddenChange);
      if (anyVisibleTab !== child) child.hidden = true;
      child.addEventListener("hiddenchange", this.onTabHiddenChange);
    }
  }

  protected render() {
    return html`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `;
  }
}
