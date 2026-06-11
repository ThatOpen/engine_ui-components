import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

/** Emitted when a tab's hidden state changes. */
export type HiddenChangeEvent = CustomEvent<{ hidden: boolean }>;

/**
 * A custom tab web component for BIM applications. HTML tag: bim-tab
 */
export class Tab extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
    }

    :host([hidden]) {
      display: none;
    }
  `;

  constructor() {
    super();
    this.setAttribute("role", "tabpanel");
  }

  private _defaultName = "__unnamed__";
  private _autoNamed = false;

  /** The name of the tab, used as its identifier. */
  @property({ type: String, reflect: true })
  name = this._defaultName;

  private _label?: string;

  /** The label displayed in the tab switcher. */
  @property({ type: String, reflect: true })
  set label(value: string | undefined) {
    this._label = value;
    this.dispatchEvent(new CustomEvent("tab-update", { bubbles: true }));
  }

  get label() {
    return this._label;
  }

  private _icon?: string;

  /** The icon displayed in the tab switcher. */
  @property({ type: String, reflect: true })
  set icon(value: string | undefined) {
    this._icon = value;
    this.dispatchEvent(new CustomEvent("tab-update", { bubbles: true }));
  }

  get icon() {
    return this._icon;
  }

  private _hidden = false;

  /**
   * Sets the hidden state of the tab.
   * @fires hiddenchange
   */
  @property({ type: Boolean, reflect: true })
  set hidden(value: boolean) {
    const old = this._hidden;
    this._hidden = value;
    this.requestUpdate("hidden", old);
    this.dispatchEvent(
      new CustomEvent<{ hidden: boolean }>("hiddenchange", {
        detail: { hidden: value },
      }),
    );
  }

  get hidden() {
    return this._hidden;
  }

  connectedCallback() {
    super.connectedCallback();
    const { parentElement } = this;
    if (!parentElement) return;
    if (this.name === this._defaultName || this._autoNamed) {
      const index = [...parentElement.children].indexOf(this);
      this.name = `${this._defaultName}${index}`;
      this._autoNamed = true;
    }
  }

  protected render() {
    return html`<slot></slot>`;
  }
}
