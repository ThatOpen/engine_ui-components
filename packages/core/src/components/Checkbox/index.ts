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
      --border-hover: #bbc1e1;
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
      transform: scale(var(--scale, 1)) translateY(-100%);
      position: absolute;
      stroke-dasharray: var(--a, 86.12);
      stroke-dashoffset: var(--o, 86.12);
      transition:
        stroke-dasharray 0.6s,
        stroke-dashoffset 0.6s;
    }

    input:hover {
      --s: 1.7px;
      --b: var(--border-hover);
    }

    input:checked {
      --s: 2px;
      transition-delay: 0.3s;
      --b: var(--border-active);
    }

    input:checked + svg {
      --a: 16.1 86.12;
      --o: 102.22;
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
        <path
          d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"
        ></path>
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
