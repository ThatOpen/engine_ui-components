import { LitElement, PropertyValues, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ToolbarSection } from "./Section";
import { Manager } from "../../../core/Manager";

/**
 * A custom toolbar web component for BIM applications. HTML tag: bim-toolbar
 */
export class Toolbar extends LitElement {
  static styles = css`
    :host {
      --bim-button--bgc: transparent;
      overflow: auto;
      display: block;
      contain: layout style;
      background-color: var(--bim-toolbar--bgc, var(--bim-ui_bg-contrast-10));
      border: var(--bim-toolbar--border, 1px solid var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-toolbar--bdrs, var(--bim-ui_size-2xs));
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: var(--bim-toolbar--w, max-content);
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: var(--bim-toolbar--vertical-w, min-content);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: var(--bim-toolbar--divider, 1px solid var(--bim-ui_bg-contrast-20));
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: var(--bim-toolbar--divider, 1px solid var(--bim-ui_bg-contrast-20));
      border-right: none;
    }
  `;

  /**
   * When `true`, section name labels are hidden across all sections.
   * @defaultValue false
   */
  @property({ type: Boolean, attribute: "labels-hidden", reflect: true })
  labelsHidden = false;

  /**
   * When `true`, the toolbar renders vertically.
   * @defaultValue false
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  override set hidden(value: boolean) {
    super.hidden = value;
    this.dispatchEvent(new Event("hiddenchange"));
  }

  override get hidden() {
    return super.hidden;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) this.setAttribute("role", "toolbar");
    this.addEventListener("keydown", this._onKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._onKeyDown);
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    const items = Array.from(
      this.querySelectorAll<HTMLElement>("bim-button:not([disabled])"),
    );
    if (!items.length) return;
    const idx = items.indexOf(document.activeElement as HTMLElement);
    if (
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(
        e.key,
      )
    )
      return;
    e.preventDefault();
    let target: HTMLElement | undefined;
    if (e.key === "Home") target = items[0];
    else if (e.key === "End") target = items[items.length - 1];
    else if (e.key === "ArrowRight" || e.key === "ArrowDown")
      target = items[(idx + 1) % items.length];
    else target = items[(idx - 1 + items.length) % items.length];
    target?.focus();
  };

  protected updated(changed: PropertyValues) {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
    if (changed.has("vertical") || changed.has("labelsHidden")) {
      this.updateSections();
    }
  }

  private updateSections() {
    for (const child of this.children) {
      if (child instanceof ToolbarSection) {
        child.labelHidden =
          this.labelsHidden ||
          (this.vertical && !Manager.config.sectionLabelOnVerticalToolbar);
        child.vertical = this.vertical;
      }
    }
  }

  protected render() {
    return html`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `;
  }
}
