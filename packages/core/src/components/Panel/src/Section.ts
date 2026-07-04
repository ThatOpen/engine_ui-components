import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "../../../core/Manager/src/styles";
import { HasName } from "../../../core/types";
import { getElementValue } from "../../../core/utils";
import { Panel } from "./Panel";

/**
 * A custom panel section web component for BIM applications. HTML tag: bim-panel-section
 */
export class PanelSection extends LitElement implements HasName {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        /* flex: 1; */
        display: block;
        pointer-events: auto;
        background-color: var(--bim-panel-section--bg, var(--bim-ui_bg-contrast-10));
        border: var(--bim-panel-section--border, 1px solid var(--bim-ui_bg-contrast-20));
        border-radius: var(--bim-panel-section--bdrs, 0.75rem);
      }

      :host(:last-child:not([collapsed])) {
        flex: 1;
      }

      :host([scrollable]) {
        height: 100%;
      }

      :host .parent {
        display: grid;
        grid-template: "header" auto "content" minmax(0, 1fr);
        height: 100%;
        /* display: flex; */
        /* flex-direction: column; */
        /* height: 100%; */
      }

      :host(:not([fixed])) .header:hover {
        cursor: pointer;
      }

      :host(:not([fixed])) .header:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      @media (prefers-reduced-motion: reduce) {
        .expand-icon {
          transition: none;
        }
      }

      :host(:not([fixed])) .header:hover .title > bim-label {
        --bim-label--c: transparent;
        background: linear-gradient(90deg, var(--bim-ui_accent-base) 0%, color-mix(in srgb, var(--bim-ui_accent-base) 60%, #99a0ae) 100%);
        -webkit-background-clip: text;
        background-clip: text;
      }

      :host(:not([fixed])) .header:hover .expand-icon {
        fill: var(--bim-ui_accent-base);
      }

      .title > bim-label {
        --bim-label--fz: var(--bim-panel-section--fz, var(--bim-ui_size-lg));
        --bim-label--c: transparent;
        --bim-icon--c: #99a0ae;
        background: linear-gradient(90deg, #ffffff 0%, #99a0ae 100%);
        -webkit-background-clip: text;
        background-clip: text;
      }

      .header {
        grid-area: "header";
        display: var(--bim-panel-section--header-display, flex);
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 2rem;
        padding: 2px 6px;
        gap: 0.375rem;
      }

      .expand-icon {
        fill: var(--bim-ui_bg-contrast-80);
        transition: transform 0.2s, fill 0.15s;
      }

      :host([collapsed]) .expand-icon {
        transform: rotateZ(-180deg);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        min-width: 0;
        flex: 1;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .header {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:last-child[collapsed]) .header {
        border-bottom: none;
      }

      .components {
        grid-area: content;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 0.5rem;
        gap: 0.5rem;
        box-sizing: border-box;
        overflow: auto;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
      }

      .header-start,
      .header-end {
        display: flex;
        align-items: center;
        gap: 0.375rem;
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
   * When true, the section fills its parent height and clips its content area,
   * allowing individual children with `flex: 1` to scroll independently.
   * Combine with a `bim-table` or similar element that has `flex: 1` set.
   */
  @property({ type: Boolean, reflect: true })
  scrollable = false;

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

  connectedCallback() {
    super.connectedCallback();
    if (this.fixed === undefined) {
      this.fixed = !this.closest("bim-panel");
    }
  }

  /**
   * The `value` getter computes and returns the current state of the panel section's form elements as an object. This object's keys are the `name` or `label` attributes of the child elements, and the values are the corresponding values of these elements. This property is particularly useful for retrieving a consolidated view of the user's input or selections within the panel section. When the value of any child element changes, the returned object from this getter will reflect those changes, providing a dynamic snapshot of the panel section's state. Note that this property does not have a default value as it dynamically reflects the current state of the panel section's form elements.
   * @example <bim-panel-section></bim-panel-section> <!-- Usage in HTML not directly applicable as this is a getter -->
   * @example
   * const section = document.createElement('bim-panel-section');
   * console.log(section.value); // Logs the current value object
   */
  get value() {
    const parent = this.parentElement;
    let transform;
    if (parent instanceof Panel) transform = parent.valueTransform;
    if (Object.keys(this.valueTransform).length !== 0)
      transform = this.valueTransform;
    const value = getElementValue(this, transform);
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
  /**
   * A record that maps element names or labels to transformation functions.
   * This record is used to transform the values from elements before they are returned as part of the `value` property.
   *
   * @example
   * // Example usage of ValueTransform
   * const valueTransform = {
   *   date: (value: string) => new Date(value), // Transform date value from string to Date object
   * };
   *
   * const panelSection = document.getElementById('your-bim-panel-section'); // should have some inputs inside
   * panelSection.valueTransform = valueTransform;
   *
   * // Now, when accessing the `value` property of the panelSection, the values of the specified elements will be transformed accordingly
   * console.log(panelSection.value); // Output: { date: Date object }
   */
  valueTransform: Record<string, (value: any) => any> = {};

  private onHeaderClick() {
    if (this.fixed) return;
    this.collapsed = !this.collapsed;
  }

  private onHeaderKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.onHeaderClick();
    }
  }

  protected render() {
    const header = this.label || this.icon || this.name || this.fixed;

    const expandIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`;

    const headerTemplate = html`
      <div
        class="header"
        role="button"
        tabindex=${this.fixed ? -1 : 0}
        aria-expanded=${!this.collapsed}
        title=${this.label || nothing}
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeydown}
      >
        <div class="header-start"><slot name="header-start"></slot></div>
        <div class="title">
          ${this.label || this.icon || this.name
            ? html`<bim-label aria-hidden="true" .icon=${this.icon}>${this.label}</bim-label>`
            : null}
          <slot name="header-tag"></slot>
        </div>
        <div class="header-end">
          <slot name="header-end"></slot>
          ${!this.fixed ? expandIcon : null}
        </div>
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
