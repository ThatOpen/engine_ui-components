import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "../../../core/Manager/src/styles";
import { HasName, HasValue } from "../../../core/types";
import { getElementValue } from "../../../core/utils";
import { Panel } from "./Panel";

/**
 * A custom panel section web component for BIM applications. HTML tag: bim-panel-section
 */
export class PanelSection extends LitElement implements HasName, HasValue {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover .expand-icon {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .expand-icon {
        fill: var(--bim-ui_bg-contrast-80);
        transition: transform 0.2s;
      }

      :host([collapsed]) .expand-icon {
        transform: rotateZ(-180deg);
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
        overflow: hidden;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
        box-sizing: border-box;
        transition:
          height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      :host(:not([fixed])[collapsed]) .components {
        padding: 0 1rem 0;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }

      ::slotted(*) {
        transition:
          transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          opacity 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      :host(:not([fixed])[collapsed]) ::slotted(*) {
        transform: translateX(-20%);
        opacity: 0;
      }

      @keyframes expandAnim {
        0%,
        100% {
          transform: translateY(0%);
        }
        25% {
          transform: translateY(-30%);
        }
        50% {
          transform: translateY(10%);
        }
        75% {
          transform: translateY(-30%);
        }
      }

      @keyframes collapseAnim {
        0%,
        100% {
          transform: translateY(0%) rotateZ(-180deg);
        }
        25% {
          transform: translateY(30%) rotateZ(-180deg);
        }
        50% {
          transform: translateY(-10%) rotateZ(-180deg);
        }
        75% {
          transform: translateY(30%) rotateZ(-180deg);
        }
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
   * @example <bim-panel-section></bim-panel-section> <!-- Usage in HTML not directly applicable as this is a getter -->
   * @example
   * const section = document.createElement('bim-panel-section');
   * console.log(section.value); // Logs the current value object
   */
  get value() {
    const parent = this.parentElement;
    let transform;
    if (parent instanceof Panel) transform = parent.valueTransform;
    if (Object.values(this.valueTransform).length !== 0)
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

  private componentHeight = -1;

  private animateHeader() {
    const componentsElement = this.shadowRoot?.querySelector(
      ".components",
    ) as HTMLElement;

    // Save the component"s maximum height
    if (this.componentHeight < 0) {
      if (!this.collapsed) {
        componentsElement.style.setProperty("transition", "none");
        componentsElement.style.setProperty("height", "auto");
        componentsElement.style.setProperty("padding", "0.125rem 1rem 1rem");

        this.componentHeight = componentsElement.clientHeight;

        requestAnimationFrame(() => {
          componentsElement.style.setProperty("height", "0px");
          componentsElement.style.setProperty("padding", "0 1rem 0");
          componentsElement.style.setProperty(
            "transition",
            "height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)",
          );
        });
      } else {
        this.componentHeight = componentsElement.clientHeight;
      }
    }

    // Animate the component
    if (this.collapsed) {
      componentsElement.style.setProperty(
        "height",
        `${this.componentHeight}px`,
      );
      requestAnimationFrame(() => {
        componentsElement.style.setProperty("height", "0px");
        componentsElement.style.setProperty("padding", "0 1rem 0");
      });
    } else {
      componentsElement.style.setProperty("height", "0px");
      componentsElement.style.setProperty("padding", "0 1rem 0");
      requestAnimationFrame(() => {
        componentsElement.style.setProperty(
          "height",
          `${this.componentHeight}px`,
        );
        componentsElement.style.setProperty("padding", "0.125rem 1rem 1rem");
      });
    }
  }

  private onHeaderClick() {
    if (this.fixed) return;
    this.collapsed = !this.collapsed;
    this.animateHeader();
  }

  private handelSlotChange(e: Event) {
    const slots = e.target as HTMLSlotElement;
    const childNodes = slots.assignedElements({ flatten: true });

    // Apply stagger effect to slotted elements
    childNodes.forEach((element, index) => {
      const delay = index * 0.05;
      const child = element as HTMLElement;
      child.style.setProperty("transition-delay", `${delay}s`);
    });
  }

  private handlePointerEnter() {
    const icon = this.renderRoot.querySelector(".expand-icon") as HTMLElement;
    if (this.collapsed)
      icon?.style.setProperty("animation", "collapseAnim 0.5s");
    else icon?.style.setProperty("animation", "expandAnim 0.5s");
  }

  private handlePointerLeave() {
    const icon = this.renderRoot.querySelector(".expand-icon") as HTMLElement;
    icon?.style.setProperty("animation", "none");
  }

  protected render() {
    const header = this.label || this.icon || this.name || this.fixed;

    const expandIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`;

    const headerTemplate = html`
      <div
        class="header"
        title=${this.label ?? ""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
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
          <slot @slotchange=${this.handelSlotChange}></slot>
        </div>
      </div>
    `;
  }
}
