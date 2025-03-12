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

    .parent {
      width: 100%;
      position: relative;
      display: block;
      transition: all 0.15s;
    }

    .parent-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: inherit;
      background-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
      clip-path: circle(0 at center bottom);
      filter: brightness(150%);
      box-sizing: border-box;
      transition: clip-path 0.3s cubic-bezier(0.72, 0.1, 0.43, 0.93);
    }

    .checkmark {
      position: absolute;
      top: 50%;
      right: 0;
      margin-inline-end: 0.1rem;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      min-width: min-content;
      min-height: min-content;
      overflow: hidden;
      background: white;
      border-radius: 0.25rem;
    }

    .checkmark::after {
      content: "";
      position: absolute;
      width: 0.3rem;
      height: 0.6rem;
      left: 0.2rem;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg) scale(0.7);
      clip-path: circle(0% at 100% 100%);
      transition: clip-path 0.2s;
    }

    .parent-label:hover .checkmark::before {
      clip-path: circle(120% at center bottom);
    }

    :host([checked]) .checkmark {
      background-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    :host([checked]) .checkmark::after {
      left: 0.25rem;
      clip-path: circle(150% at 100% 100%);
    }

    :host([inverted]) .checkmark {
      left: 0;
      margin-inline-start: 0.3rem;
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
    return html`
      <div class="parent">
        <label class="parent-label">
          ${this.label
            ? html`<bim-label .icon="${this.icon}">${this.label}</bim-label> `
            : null}
          <input
            type="checkbox"
            aria-label=${this.label || this.name || "Checkbox Input"}
            @change="${this.onChange}"
            .checked="${this.checked}"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    `;
  }
}
