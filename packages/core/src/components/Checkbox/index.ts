import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { HasValue } from "../../core/types";

/**
 * A custom checkbox web component for BIM applications. HTML tag: bim-checkbox
 *
 * @fires change - Fired when the checkbox changes.
 */
export class Checkbox extends LitElement implements HasValue {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      display: block;
    }

    .parent-label {
      --background: #fff;
      --border: #dfdfe6;
      --stroke: #fff;
      --border-hover: var(--bim-ui_main-base);
      --border-active: var(--bim-ui_main-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      position: relative;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input,
    svg {
      width: 1rem;
      height: 1rem;
      display: block;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
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

    input:checked {
      --b: var(--border-active);
      --s: 11px;
    }

    input:checked + svg {
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
  @property({ type: String, reflect: true })
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
  @property({ type: Boolean, reflect: true })
  checked = false;

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
   * A getter that returns the current checked state of the checkbox. This is useful for retrieving the checkbox's value in form submissions or JavaScript interactions as it provides a consistent `value` property as many other components.
   * @type {boolean}
   * @default false
   * @example <script>console.log(document.querySelector('bim-checkbox').value);</script>
   * @example
   * const checkbox = document.createElement('bim-checkbox');
   * document.body.appendChild(checkbox);
   * console.log(checkbox.value); // false initially
   */
  get value() {
    return this.checked;
  }

  /**
   * Event that is dispatched when the checkbox's checked state changes.
   * This event can be used to listen for changes to the checkbox's value and perform
   * necessary actions when the value changes.
   *
   * @event change
   * @example
   * checkbox.addEventListener('change', (event) => {
   *   console.log('Checkbox value changed:', event.target.checked);
   * });
   */
  readonly onValueChange = new Event("change");

  private onChange(e: Event) {
    e.stopPropagation();
    this.checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(this.onValueChange);
  }

  protected render() {
    const checkboxIcon = html`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;

    return html`
      <div class="parent">
        <label class="parent-label">
          ${this.label
            ? html`<bim-label .icon="${this.icon}">${this.label}</bim-label> `
            : null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label || this.name || "Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${checkboxIcon}
          </div>
        </label>
      </div>
    `;
  }
}
