import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "../../../core/Manager/src/styles";
import { HasName, HasValue } from "../../../core/types";
import { getElementValue } from "../../../core/utils";

// HTML tag: bim-panel-section
/**
 * Heloooooooooo
 */
export class PanelSection extends LitElement implements HasName, HasValue {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        color: var(--bim-ui_bg-contrast-80);
        z-index: 3;
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        user-select: none;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
      }

      bim-label {
        pointer-events: none;
      }
    `,
  ];

  /**
   * Represents the icon to be displayed within the panel section. This icon is a visual cue that can be used alongside the label to provide additional context or to represent the section's content visually. When the `icon` property changes, the displayed icon updates accordingly. This property is reflected to an attribute, allowing for declarative usage in HTML as well as programmatic control in JavaScript.
   * @type {String}
   * @default undefined
   * @example <bim-panel-section icon="settings"></bim-panel-section>
   * @example
   * const section = document.createElement('bim-panel-section');
   * section.icon = 'settings';
   * document.body.appendChild(section);
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * Specifies the label for the panel section. This label is displayed prominently at the top of the section and serves as a title or heading. When the `label` property changes, the section's header updates to reflect the new label. This property takes precedence over the `name` property for display purposes and is also reflected to an attribute for HTML declaration or JavaScript manipulation.
   * @type {String}
   * @default undefined
   * @example <bim-panel-section label="User Settings"></bim-panel-section>
   * @example
   * const section = document.createElement('bim-panel-section');
   * section.label = 'User Settings';
   * document.body.appendChild(section);
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Defines the name of the panel section, acting as an identifier. While similar to `label`, `name` is more suited for identification purposes rather than display. If `label` is not set, `name` can be displayed as a fallback in the section's header. The `name` property is reflected to an attribute, enabling both HTML and JavaScript interactions.
   * @type {String}
   * @default undefined
   * @example <bim-panel-section name="user-settings"></bim-panel-section>
   * @example
   * const section = document.createElement('bim-panel-section');
   * section.name = 'user-settings';
   * document.body.appendChild(section);
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * Determines whether the panel section is fixed, meaning it cannot be collapsed or expanded. This is useful for sections that should always remain visible. When `fixed` is true, the collapse/expand icon is hidden, and clicking the header does not toggle the `collapsed` state. This property is reflected to an attribute, allowing it to be set declaratively in HTML or programmatically via JavaScript.
   * @type {Boolean}
   * @default undefined
   * @example <bim-panel-section fixed></bim-panel-section>
   * @example
   * const section = document.createElement('bim-panel-section');
   * section.fixed = true;
   * document.body.appendChild(section);
   */
  @property({ type: Boolean, reflect: true })
  fixed?: boolean;

  /**
   * Controls the collapsed state of the panel section. When `collapsed` is true, the content of the section is hidden, and only the header is visible. This property can be toggled to show or hide the section's content, and is reflected to an attribute for easy HTML or JavaScript manipulation. Note that sections marked as `fixed` ignore changes to this property.
   * @type {Boolean}
   * @default undefined
   * @example <bim-panel-section collapsed></bim-panel-section>
   * @example
   * const section = document.createElement('bim-panel-section');
   * section.collapsed = true;
   * document.body.appendChild(section);
   */
  @property({ type: Boolean, reflect: true })
  collapsed?: boolean;

  readonly onValueChange = new Event("change");

  /**
   * The `value` getter computes and returns the current state of the panel section's form elements as an object. This object's keys are the `name` or `label` attributes of the child elements, and the values are the corresponding values of these elements. This property is particularly useful for retrieving a consolidated view of the user's input or selections within the panel section. When the value of any child element changes, the returned object from this getter will reflect those changes, providing a dynamic snapshot of the panel section's state. Note that this property does not have a default value as it dynamically reflects the current state of the panel section's form elements.
   * @type {Record<string, any>}
   * @example <bim-panel-section></bim-panel-section> <!-- Usage in HTML not directly applicable as this is a getter -->
   * @example
   * const section = document.createElement('bim-panel-section');
   * console.log(section.value); // Logs the current value object
   */
  get value() {
    const value = getElementValue(this);
    return value;
  }

  /**
   * The `value` setter allows programmatically updating the values of the panel section's child elements. It accepts an object where keys correspond to the `name` or `label` attributes of the child elements, and the values are the new values to be set for these elements. This property is useful for initializing the panel section with specific values or updating its state based on external data. When the property changes, the corresponding child elements' values are updated to reflect the new state. This does not have a default value as it is a method for updating child elements' values.
   * @type {Record<string, any>}
   * @default undefined
   * @example <bim-panel-section></bim-panel-section> <!-- Usage in HTML not directly applicable as this is a setter -->
   * @example
   * const section = document.createElement('bim-panel-section');
   * section.value = { 'user-settings': 'John Doe' }; // Programmatically sets the value of a child element named 'user-settings'
   */
  set value(data: Record<string, any>) {
    const children = [...this.children];
    for (const key in data) {
      const _input = children.find((_child) => {
        const child = _child as any;
        return child.name === key || child.label === key;
      });
      if (!_input) continue;
      const input = _input as any;
      input.value = data[key];
    }
  }

  private onHeaderClick() {
    if (this.fixed) return;
    this.collapsed = !this.collapsed;
  }

  protected render() {
    const header = this.label || this.icon || this.name || this.fixed;

    const expandLessSVG = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;

    const expandMoreSVG = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`;

    const expandIcon = this.collapsed ? expandLessSVG : expandMoreSVG;

    const headerTemplate = html`
      <div
        class="header"
        title=${this.label ?? ""}
        @click=${this.onHeaderClick}
      >
        ${this.label || this.icon || this.name
          ? html`<bim-label .icon=${this.icon}>${this.label}</bim-label>`
          : null}
        ${!this.fixed ? expandIcon : null}
      </div>
    `;

    return html`
      <div class="parent">
        ${header ? headerTemplate : null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
