import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Option } from "../Option";
import { HasName, HasValue } from "../../core/types";

/**
 * A custom selector web component for BIM applications. HTML tag: bim-selector
 */
export class Selector extends LitElement implements HasValue, HasName {
  static styles = css`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      user-select: none;
      flex: 1;
      align-items: normal;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    bim-label.field-label {
      margin-top: var(--bim-input--label-mt, 0);
    }

    .wrapper {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      min-height: 25px;
      min-width: 3rem;
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
    }

    :host(:not([vertical])) .wrapper {
      flex: 1;
    }

    :host(:not([vertical])[label]) .wrapper {
      max-width: var(--bim-input--maxw, fit-content);
    }

    .options {
      display: flex;
      flex: 1;
      align-self: stretch;
    }

    .option {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 0 0.5rem;
      cursor: pointer;
      user-select: none;
      transition: background-color 0.15s;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .option:not(.checked):hover {
      background-color: var(--bim-selector--option-hover-bgc, var(--bim-ui_bg-contrast-30));
    }

    .option.checked {
      background-color: var(--bim-selector--option-checked-bgc, var(--bim-ui_bg-contrast-40));
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .option:focus-visible {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: -2px;
    }

    /* ── Underline variant ── */

    :host([variant="underline"]) {
      --bim-input--bgc: transparent;
      --bim-input--bdrs: 0;
    }

    :host([variant="underline"]) .option {
      border-radius: 0;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      border-bottom: 2px solid transparent;
      transition: border-color 0.15s;
    }

    :host([variant="underline"]) .option.checked {
      background-color: transparent;
      --bim-label--c: var(--bim-ui_accent-base);
      border-bottom-color: var(--bim-ui_accent-base);
    }

    :host([variant="underline"]) .option:not(.checked):hover {
      background-color: transparent;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    :host([variant="underline"]) .option:focus-visible {
      outline-offset: -3px;
    }

    @media (prefers-reduced-motion: reduce) {
      .option,
      :host([variant="underline"]) .option {
        transition: none;
      }
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * Sets the visual variant of the selector.
   * - `undefined` (default): The active option gets a filled background.
   * - `"underline"`: No background; the active option gets an accent-colored
   *   bottom border and text, while inactive options are muted.
   */
  @property({ type: String, reflect: true })
  variant?: "underline";

  /** @deprecated Use `addEventListener("change", ...)` instead. */
  readonly onValueChange = new Event("change");

  private _canEmitEvents = false;
  private _pendingValue: unknown = undefined;
  private _mutationObserver = new MutationObserver(() => this._syncOptions());

  @state() private _options: Option[] = [];
  @state() private _value: Option | null = null;

  set value(value: string | number | boolean | object) {
    const match = this._findOption(value);
    if (!match) {
      this._pendingValue = value;
      return;
    }
    this._pendingValue = undefined;
    for (const o of Array.from(this.children)) {
      if (o instanceof Option) o.checked = o === match;
    }
    this._value = match;
    if (this._canEmitEvents)
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }

  get value(): string | number | boolean | object | undefined {
    return this._value?.value;
  }

  connectedCallback() {
    super.connectedCallback();
    this._mutationObserver.observe(this, { childList: true });
    customElements.whenDefined("bim-option").then(() => this._syncOptions());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._mutationObserver.disconnect();
  }

  protected firstUpdated() {
    const checked = Array.from(this.children).find(
      (c): c is Option => c instanceof Option && c.checked,
    );
    if (checked) this._value = checked;
    this._canEmitEvents = true;
  }

  private _syncOptions() {
    this._options = Array.from(this.children).filter(
      (c) => c.tagName === "BIM-OPTION",
    ) as Option[];
    if (this._pendingValue !== undefined) {
      this.value = this._pendingValue as string | number | boolean | object;
    }
  }

  private _findOption(value: any): Option | undefined {
    for (const child of Array.from(this.children)) {
      if (!(child instanceof Option)) continue;
      if (child.label === value || child.value === value) return child;
    }
    return undefined;
  }

  private _onOptionClick = (option: Option) => {
    for (const o of Array.from(this.children)) {
      if (o instanceof Option) o.checked = o === option;
    }
    this._value = option;
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    const options = this._options;
    if (!options.length) return;

    const currentIdx = this._value ? options.indexOf(this._value) : 0;
    let nextIdx = currentIdx;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIdx = (currentIdx + 1) % options.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIdx = (currentIdx - 1 + options.length) % options.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIdx = options.length - 1;
    } else {
      return;
    }

    this._onOptionClick(options[nextIdx]);
    this.updateComplete.then(() => {
      const tabs = this.renderRoot.querySelectorAll<HTMLElement>(".option");
      tabs[nextIdx]?.focus();
    });
  };

  protected render() {
    return html`
      <div class="parent">
        ${this.label || this.icon
          ? html`<bim-label class="field-label" .icon=${this.icon}>${this.label}</bim-label>`
          : null}
        <div class="wrapper">
          <div
            class="options"
            role="tablist"
            aria-label=${ifDefined(this.label)}
            @keydown=${this._onKeyDown}
          >
            ${this._options.map((o) => {
              const checked = o === this._value;
              return html`
                <div
                  class="option ${checked ? "checked" : ""}"
                  role="tab"
                  aria-selected=${checked}
                  tabindex=${checked ? 0 : -1}
                  @click=${() => this._onOptionClick(o)}
                >
                  <bim-label
                    .icon=${o.icon}
                    .img=${o.img}
                    .vertical=${o.vertical}
                  >${o.label}</bim-label>
                </div>
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }
}
