import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

// HTML Tag: bim-tab
export class Tab extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;

  private _defaultName = "__unnamed__";

  /**
   * The name of the tab. If not provided, a default name will be assigned based on its position in the parent element.
   */
  @property({ type: String, reflect: true })
  name = this._defaultName;

  /**
   * The label of the tab. This property is optional and can be used to display a custom label instead of the tab's name.
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * The icon of the tab. This property is optional and can be used to display an icon next to the tab's label or name.
   */
  @property({ type: String, reflect: true })
  icon?: string;

  private _hidden = false;

  /**
   * Sets the hidden state of the tab.
   *
   * @param value - The new hidden state. If `true`, the tab will be hidden. If `false`, the tab will be visible.
   * @fires hiddenchange - Dispatched when the hidden state changes.
   *
   * @example
   * ```typescript
   * const tab = document.querySelector('bim-tab');
   * tab.hidden = true; // hides the tab
   * ```
   */
  @property({ type: Boolean, reflect: true })
  set hidden(value: boolean) {
    this._hidden = value;
    this.dispatchEvent(new Event("hiddenchange"));
  }

  get hidden() {
    return this._hidden;
  }

  connectedCallback() {
    super.connectedCallback();
    const { parentElement } = this;
    if (!parentElement) return;
    if (this.name === this._defaultName) {
      const index = [...parentElement.children].indexOf(this);
      this.name = `${this._defaultName}${index}`;
    }
  }

  protected render() {
    return html` <slot></slot> `;
  }
}
