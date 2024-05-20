import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { HasValue } from "../../core/types";

// HTML tag: bim-checkbox
export class Checkbox extends LitElement implements HasValue {
  static styles = css`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
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
   * The name attribute of the checkbox. It can be used to identify the checkbox when submitting a form or to reference the checkbox in JavaScript. Changing this property dynamically updates the name attribute of the internal <input> element.
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
   * Indicates whether the checkbox is checked or not. This property reflects the checked state of the internal <input> element and can be used to set or get the checkbox's state. Changing this property dynamically updates the checkbox's visual state and its checked attribute.
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

  readonly onValueChange = new Event("change");

  private onChange(e: Event) {
    e.stopPropagation();
    this.checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(this.onValueChange);
  }

  protected render() {
    return html`
      <div class="parent">
        ${this.label
          ? html`<bim-label
              label="${this.label}"
              .icon="${this.icon}"
            ></bim-label> `
          : null}
        <input
          type="checkbox"
          aria-label=${this.label || this.name || "Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `;
  }
}
