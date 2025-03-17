/* eslint-disable no-restricted-globals */
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { convertString } from "../../core/utils";

/**
 * A custom option web component for BIM applications. HTML tag: bim-option
 */
export class Option extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
      z-index: 1;
    }
  `;

  /**
   * Represents the image URL for the component. When set, it displays an image inside the component.
   * Changing this property dynamically updates the component to show the specified image.
   * This property is managed by the `bim-label` component nested within the shadow DOM of this component.
   *
   * @type {String}
   * @default undefined
   * @example <bim-option img="path/to/image.png"></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.img = 'path/to/image.png';
   * document.body.appendChild(option);
   */
  @property({ type: String, reflect: true })
  img?: string;

  /**
   * Specifies the label text for the component. This text is displayed inside the component.
   * When the label property changes, the component updates to display the new label text.
   * This property is also passed down to the `bim-label` component nested within the shadow DOM, affecting its display.
   *
   * @type {String}
   * @default undefined
   * @example <bim-option label="Option Label"></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.label = 'Option Label';
   * document.body.appendChild(option);
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Defines the icon to be displayed inside the component. The icon is specified by its name or path.
   * Changing this property will dynamically update the component to display the specified icon.
   * This property is utilized by the `bim-label` component nested within the shadow DOM to render the icon.
   *
   * @type {String}
   * @default undefined
   * @example <bim-option icon="icon-name"></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.icon = 'icon-name';
   * document.body.appendChild(option);
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * Indicates whether the option is checked. This boolean property can be used to mark the option as selected or not.
   * When toggled, it visually updates the component to reflect the checked state.
   *
   * @default false
   * @example <bim-option checked></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.checked = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * Determines whether a checkbox is displayed alongside the label. When true, a checkbox is shown.
   * This property affects the internal layout and display of the component, specifically adding a `bim-checkbox` element when enabled.
   *
   * @default false
   * @example <bim-option checkbox></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.checkbox = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, reflect: true })
  checkbox = false;

  /**
   * Controls the visibility of the mark or checkbox when the option is checked. If true, the mark or checkbox is not displayed even if the option is checked.
   * This property allows for a cleaner look in certain UI designs where the checked state is indicated without a visual mark.
   *
   * @default false
   * @example <bim-option no-mark></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.noMark = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, attribute: "no-mark", reflect: true })
  noMark = false;

  private _value: any;

  /**
   * Represents the dynamic value of the component which can be of different types based on the attribute's value.
   * This property is designed to accept various types of inputs: boolean values (true/false as strings), numbers, or any other value as a string.
   * The conversion logic in the `converter` method ensures that the attribute value is correctly interpreted and stored in the appropriate data type.
   * If you need to use complex data types for the value as arrays or objects, you must do it using the corresponding property in JavaScript
   * as handling those types of data types using HTML attributes is not recommended.
   * The `value` property does not reflect, meaning if you change the value using JavaScript, you won't find the same data in the attributes.
   * However, if you have set the value in the property and then you change the attribute, the `value` will be set at the data from the attribute.
   * By default, if no value is set, `value` will return the `label` value in case there is one defined.
   *
   * @type {any}
   * @example <bim-option value="10"></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * // option.setAttribute('value', 'true');
   * // option.setAttribute('value', '10');
   * // option.setAttribute('value', 'some string');
   * document.body.appendChild(option);
   * @example
   * const option = document.createElement('bim-option');
   * option.label = "At origin"
   * option.value = {x: 0, y: 0, z: 0} // As this is an object, it must be set in the property and not in the attribute.
   * document.body.appendChild(option);
   */
  @property({
    converter: {
      fromAttribute(value) {
        if (value) return convertString(value);
        return value;
      },
    },
  })
  get value() {
    if (this._value !== undefined) {
      return this._value;
    }
    if (!this.label) return this.label;
    return convertString(this.label);
  }

  set value(val) {
    this._value = val;
  }

  /**
   * Sets the orientation of the label and icon/image within the component. When true, they are arranged vertically.
   * This property influences the internal layout of the component, specifically affecting how the `bim-label` is displayed.
   *
   * @default false
   * @example <bim-option vertical></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.vertical = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  protected render() {
    return html`
      <div class="parent" .title=${this.label ?? ""}>
        ${this.img || this.icon || this.label
          ? html` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox && !this.noMark
                ? html`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`
                : null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`
          : null}
        ${!this.checkbox && !this.noMark && this.checked
          ? html`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`
          : null}
        <slot></slot>
      </div>
    `;
  }
}
