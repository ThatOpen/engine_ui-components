import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Component } from "../../../core/Component";
import { Tab } from "./Tab";

// HTML Tag: bim-tabs
export class Tabs extends Component {
  static styles = css`
    :host {
      display: block;
      background-color: var(--bim-ui_bg-base);
    }

    .parent {
      display: grid;
      grid-template: "switchers" auto "content" 1fr;
      height: 100%;
    }

    :host([bottom]) .parent {
      grid-template: "content" "switchers";
    }

    .switchers {
      display: flex;
      height: 2.25rem;
      font-weight: 600;
      grid-area: switchers;
    }

    .switcher {
      cursor: pointer;
      pointer-events: auto;
      background-color: var(--bim-ui_bg-base);
      padding: 0rem 0.75rem;
      color: var(--bim-ui_bg-contrast-60);
    }

    .switcher:hover,
    .switcher[data-active] {
      background-color: var(--bim-ui_color-main);
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .switchers bim-label {
      pointer-events: none;
    }

    :host(:not([bottom])) .content {
      border-top: 1px solid var(--bim-ui_bg-contrast-20);
    }

    :host([bottom]) .content {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
    }
  `;

  @state()
  private _switchers: HTMLDivElement[] = [];

  private _tab?: string;

  @property({ type: Boolean, reflect: true })
  bottom = false;

  @property({ type: String, reflect: true })
  set tab(value: string | undefined) {
    this._tab = value;
    const children = [...this.children];
    const matchingTab = children.find(
      (child) =>
        child instanceof Tab && (child.name === value || child.label === value),
    );
    for (const child of children) {
      if (!(child instanceof Tab)) continue;
      child.hidden = matchingTab !== child;
      const switcher = this.getTabSwitcher(
        child.name || child.label || this._defaultTabName,
      );
      if (!switcher) continue;
      switcher.toggleAttribute("data-active", !child.hidden);
    }
  }

  get tab() {
    return this._tab;
  }

  private _defaultTabName = "Unnamed Tab";

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
    this.tab = element.name || element.label;
    element.addEventListener("hiddenchange", this.onTabHiddenChange);
  };

  private createSwitchers() {
    this._switchers = [];
    for (const child of this.children) {
      if (!(child instanceof Tab)) continue;
      const element = document.createElement("div");
      element.addEventListener(
        "click",
        () => (this.tab = child.name || child.label || this._defaultTabName),
      );
      element.setAttribute(
        "data-name",
        child.name || child.label || this._defaultTabName,
      );
      element.className = "switcher";
      const label = document.createElement("bim-label");
      label.label = child.label || child.name || this._defaultTabName;
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
        return child.name === this.tab || child.label === this.tab;
      }
      return !child.hidden;
    });
    if (anyVisibleTab && anyVisibleTab instanceof Tab)
      this.tab = anyVisibleTab.name || anyVisibleTab.label;
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
