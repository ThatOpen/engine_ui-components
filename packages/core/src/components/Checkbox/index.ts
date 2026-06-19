import { LitElement, PropertyValues, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { HasValue } from "../../core/types";

const ICON_CHECK = html`<svg part="checkmark" viewBox="0 0 21 21"><polyline points="5 10.75 8.5 14.25 16 6"></polyline></svg>`;
const ICON_INDETERMINATE = html`<svg part="checkmark" viewBox="0 0 21 21"><line x1="5" y1="10.5" x2="16" y2="10.5"></line></svg>`;

/**
 * A custom checkbox web component for BIM applications. HTML tag: bim-checkbox
 *
 * @fires change - Fired when the checkbox changes.
 */
export class Checkbox extends LitElement implements HasValue<boolean> {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      display: block;
    }

    .parent-label {
      --background: var(--bim-checkbox--bg, var(--bim-ui_bg-contrast-30));
      --border: var(--bim-checkbox--bd-c, var(--bim-ui_bg-contrast-50));
      --stroke: var(--bim-checkbox--stroke-c, var(--bim-ui_main-contrast));
      --border-hover: var(--bim-checkbox--bd-h-c, var(--bim-ui_bg-contrast-70));
      --border-active: var(--bim-checkbox--bd-active-c, var(--bim-ui_main-base));
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      position: relative;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([disabled]) .parent-label {
      pointer-events: none;
      opacity: 0.4;
    }

    input,
    svg {
      width: 1rem;
      height: 1rem;
      display: block;
    }

    .input-container {
      position: relative;
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: var(--bim-checkbox--bdrs, 4px);
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    }

    input:focus-visible {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: 2px;
    }

    svg {
      pointer-events: none;
      fill: none;
      stroke-width: 2.2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      transform: translateY(-100%) scale(0);
      position: absolute;
      width: 1rem;
      height: 1rem;
    }

    input:hover {
      --s: 2px;
      --b: var(--border-hover);
    }

    input:checked,
    input:indeterminate {
      --b: var(--border-active);
      --s: 11px;
    }

    input:checked + svg,
    input:indeterminate + svg {
      -webkit-animation: bounce 0.4s linear forwards 0.2s;
      animation: bounce 0.4s linear forwards 0.2s;
    }

    @keyframes bounce {
      0% {
        transform: translateY(-100%) scale(0);
      }
      50% {
        transform: translateY(-100%) scale(1.2);
      }
      75% {
        transform: translateY(-100%) scale(0.9);
      }
      100% {
        transform: translateY(-100%) scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      input:checked + svg,
      input:indeterminate + svg {
        animation: none;
        transform: translateY(-100%) scale(1);
      }
    }

    /* ── Toggle / switch mode: bim-checkbox[toggle] ──────────────────
       Renders a sliding knob in a pill track instead of the check box.
       Knob is a dark ball with an outline; track turns main-base when on. */
    .switch-knob {
      display: none;
    }

    :host([toggle]) .input-container {
      width: 2rem;
      height: 1.1rem;
    }

    :host([toggle]) input {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      box-shadow: none;
      background: var(--bim-checkbox--toggle-track-c, var(--bim-ui_bg-contrast-30));
      transition: background-color 0.2s;
    }

    :host([toggle]) input:checked,
    :host([toggle]) input:indeterminate {
      background: var(--bim-checkbox--toggle-track-on-c, var(--bim-ui_main-base));
    }

    :host([toggle]) input + svg {
      display: none;
    }

    :host([toggle]) .switch-knob {
      display: block;
      position: absolute;
      top: 50%;
      left: 0.15rem;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: var(--bim-checkbox--toggle-knob-c, var(--bim-ui_bg-contrast-80));
      border: 1px solid var(--bim-checkbox--toggle-knob-bd-c, var(--bim-ui_bg-contrast-40));
      box-sizing: border-box;
      transform: translateY(-50%);
      transition: left 0.2s ease;
      pointer-events: none;
    }

    :host([toggle]) input:checked ~ .switch-knob {
      left: calc(100% - 0.95rem);
    }
  `;

  /**
   * Represents the icon associated with the checkbox label. This icon is displayed next to the label text if provided. Changing this property dynamically updates the displayed icon if the label is present. It is used to visually enhance the checkbox by adding an icon.
   * @type {string}
   * @default undefined
   * @example <bim-checkbox icon="check"></bim-checkbox>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * checkbox.icon = 'check';
   * document.body.appendChild(checkbox);
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * The name attribute of the checkbox. It can be used to identify the checkbox when submitting a form or to reference the checkbox in JavaScript. Changing this property dynamically updates the name attribute of the internal \<input\> element.
   * @type {string}
   * @default undefined
   * @example <bim-checkbox name="agreement"></bim-checkbox>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * checkbox.name = 'agreement';
   * document.body.appendChild(checkbox);
   */
  @property({ type: String })
  name?: string;

  /**
   * The label text associated with the checkbox. This text is displayed next to the checkbox itself. Changing this property dynamically updates the displayed label. If an icon is also specified, it will be displayed alongside this label.
   * @type {string}
   * @default undefined
   * @example <bim-checkbox label="Accept Terms"></bim-checkbox>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * checkbox.label = 'Accept Terms';
   * document.body.appendChild(checkbox);
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Indicates whether the checkbox is checked or not. This property reflects the checked state of the internal \<input\> element and can be used to set or get the checkbox's state. Changing this property dynamically updates the checkbox's visual state and its checked attribute.
   * @default false
   * @example <bim-checkbox checked></bim-checkbox>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * checkbox.checked = true;
   * document.body.appendChild(checkbox);
   */
  @property({ type: Boolean })
  checked = false;

  /**
   * Indicates whether the checkbox is in an indeterminate (mixed) state. Typically used when a checkbox represents a group where some but not all items are checked. Cleared automatically when the user interacts with the checkbox.
   * @default false
   * @example <bim-checkbox indeterminate></bim-checkbox>
   */
  @property({ type: Boolean })
  indeterminate = false;

  /**
   * Disables the checkbox, preventing user interaction. When disabled, the checkbox is visually dimmed and ignores all pointer and keyboard events.
   * @default false
   * @example <bim-checkbox disabled></bim-checkbox>
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Indicates whether the checkbox is displayed with an inverted disposition.
   * @default false
   * @example
   * <bim-checkbox inverted></bim-checkbox>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * checkbox.inverted = true;
   * document.body.appendChild(checkbox);
   */
  @property({ type: Boolean, reflect: true })
  inverted = false;

  /**
   * Renders the checkbox as a toggle SWITCH (a sliding knob in a pill track)
   * instead of a checkbox box. The knob is a dark ball with an outline; the
   * track turns `--bim-ui_main-base` when on. Customise via
   * `--bim-checkbox--toggle-track-c` / `-track-on-c` / `-knob-c` / `-knob-bd-c`.
   * @default false
   * @example <bim-checkbox toggle checked></bim-checkbox>
   */
  @property({ type: Boolean, reflect: true })
  toggle = false;

  /**
   * A getter that returns the current checked state of the checkbox. This is useful for retrieving the checkbox's value in form submissions or JavaScript interactions as it provides a consistent `value` property as many other components.
   * @type {boolean}
   * @default false
   * @example <script>console.log(document.querySelector('bim-checkbox').value);</script>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * document.body.appendChild(checkbox);
   * console.log(checkbox.value); // false initially
   */
  get value(): boolean {
    return this.checked;
  }

  set value(v: boolean) {
    this.checked = v;
  }

  override updated(changed: PropertyValues) {
    super.updated(changed);
    if (changed.has("disabled")) {
      this.setAttribute("aria-disabled", String(this.disabled));
    }
  }

  /**
   * @deprecated Use `addEventListener("change", fn)` instead.
   */
  readonly onValueChange = new Event("change");

  private onChange(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement | null;
    if (!input) return;
    this.checked = input.checked;
    this.indeterminate = false;
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }

  protected render() {
    return html`
      <label class="parent-label">
        ${this.icon || this.label
          ? html`<bim-label .icon="${this.icon}">${this.label ?? ""}</bim-label>`
          : nothing}
        <div class="input-container">
          <input
            part="input"
            type="checkbox"
            name=${ifDefined(this.name)}
            aria-label=${this.label || this.name || "Checkbox Input"}
            @change="${this.onChange}"
            .checked="${this.checked}"
            .indeterminate="${this.indeterminate}"
            .disabled="${this.disabled}"
          />
          ${this.indeterminate ? ICON_INDETERMINATE : ICON_CHECK}
          <span class="switch-knob"></span>
        </div>
      </label>
    `;
  }
}
