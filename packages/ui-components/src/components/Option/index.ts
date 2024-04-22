import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";

// HTML tag: bim-option
export class Option extends UIComponent {
  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.75rem;
      border-radius: var(--bim-ui_size-4xs);
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector-input--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_color-main) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_color-main), white 30%);
      font-weight: 600;
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_color-main), white 30%);
    }

    .parent {
      box-sizing: border-box;
      padding: 0.375rem 0;
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
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }

    bim-label {
      pointer-events: none;
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
   * @type {Boolean}
   * @default false
   * @example <bim-option checked></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.checked = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, reflect: true })
  checked: boolean;

  /**
   * Determines whether a checkbox is displayed alongside the label. When true, a checkbox is shown.
   * This property affects the internal layout and display of the component, specifically adding a `bim-checkbox` element when enabled.
   *
   * @type {Boolean}
   * @default false
   * @example <bim-option checkbox></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.checkbox = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, reflect: true })
  checkbox: boolean;

  /**
   * Controls the visibility of the mark or checkbox when the option is checked. If true, the mark or checkbox is not displayed even if the option is checked.
   * This property allows for a cleaner look in certain UI designs where the checked state is indicated without a visual mark.
   *
   * @type {Boolean}
   * @default false
   * @example <bim-option no-mark></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.noMark = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, attribute: "no-mark", reflect: true })
  noMark: boolean;

  /**
   * Sets the orientation of the label and icon/image within the component. When true, they are arranged vertically.
   * This property influences the internal layout of the component, specifically affecting how the `bim-label` is displayed.
   *
   * @type {Boolean}
   * @default false
   * @example <bim-option vertical></bim-option>
   * @example
   * const option = document.createElement('bim-option');
   * option.vertical = true;
   * document.body.appendChild(option);
   */
  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  value: any;

  constructor() {
    super();
    this.checked = false;
    this.checkbox = false;
    this.noMark = false;
    this.vertical = false;
  }

  render() {
    return html`
      <div class="parent" .title=${this.label ?? ""}>
        <div style="display: flex; column-gap: 0.375rem">
          ${this.checkbox && !this.noMark
            ? html`<bim-checkbox
                style="pointer-events: none"
                .checked=${this.checked}
              ></bim-checkbox>`
            : null}
          <bim-label
            .vertical=${this.vertical}
            .label=${this.label}
            .icon=${this.icon}
            .img=${this.img}
          ></bim-label>
        </div>
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
      </div>
    `;
  }
}
