import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../../core/Component";
import { styles } from "../../../core/Manager/src/styles";
import { Button } from "../../Button";
import { HasName, HasValue } from "../../../core/types";
import { getElementValue } from "../../../core/utils";

// HTML tag: bim-panel
export class Panel extends Component implements HasName, HasValue {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        min-width: 20rem;
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `,
  ];

  /**
   * Represents the icon to be displayed on the and panel and panel's activation button. This icon is a visual representation
   * that can be used to give users a hint about the panel's purpose or content. When the `icon` property changes,
   * the icon on the activation button is updated accordingly. This property is reflected to an attribute, meaning
   * any changes to the property will also update the corresponding attribute on the HTML element, and vice versa.
   *
   * @type {String}
   * @default undefined
   * @example <bim-panel icon="settings"></bim-panel>
   * @example
   * const panel = document.createElement('bim-panel');
   * panel.icon = 'settings';
   * document.body.appendChild(panel);
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * The name of the panel. This property serves as an identifier and can also be displayed on the panel's
   * activation button if the `label` property is not set. Changing the `name` property will update the label
   * of the activation button to reflect the new name if no label is explicitly provided. This property is
   * reflected to an attribute, allowing for synchronization between the property and the HTML attribute.
   *
   * @type {String}
   * @default undefined
   * @example <bim-panel name="user-settings"></bim-panel>
   * @example
   * const panel = document.createElement('bim-panel');
   * panel.name = 'user-settings';
   * document.body.appendChild(panel);
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * The label of the panel, which is displayed on the panel's activation button. This property is intended
   * for a more descriptive text than what `name` might provide. If the `label` property is set, it takes
   * precedence over the `name` property for the button's display. When the `label` changes, the activation
   * button's label is updated to reflect this change. This property is also reflected to an attribute, ensuring
   * consistency between the property value and the HTML attribute.
   *
   * @type {String}
   * @default undefined
   * @example <bim-panel label="User Settings"></bim-panel>
   * @example
   * const panel = document.createElement('bim-panel');
   * panel.label = 'User Settings';
   * document.body.appendChild(panel);
   */
  @property({ type: String, reflect: true })
  label?: string;

  readonly onValueChange = new Event("change");

  static properties = {
    hidden: { type: Boolean, reflect: true },
  };

  private _hidden = false;

  set hidden(value: boolean) {
    this._hidden = value;
    this.activationButton.active = !value;
    this.dispatchEvent(new Event("hiddenchange"));
  }

  get hidden() {
    return this._hidden;
  }

  /**
   * The `value` getter computes and returns the current state of the panel's form elements as an object. This property is dynamic and reflects the current input values within the panel. When accessed, it traverses the panel's child elements, collecting values from those that have a `name` or `label` attribute, and constructs an object where each key corresponds to the `name` or `label` of the element, and the value is the element's value. This property is particularly useful for forms or interactive panels where the user's input needs to be retrieved programmatically. The value returned is a snapshot of the panel's state at the time of access, and it does not maintain a live link to the input elements.
   *
   * @type {Record<string, any>}
   * @default {}
   * @example <bim-panel></bim-panel> <!-- Access via JavaScript to get value -->
   * @example
   * const panel = document.createElement('bim-panel');
   * document.body.appendChild(panel);
   * console.log(panel.value); // Logs the current value object of the panel
   */
  get value() {
    const value = getElementValue(this);
    return value;
  }

  /**
   * The `value` setter allows programmatically updating the values of the panel's form elements. When a data object is passed to this property, it attempts to match the object's keys with the `name` or `label` attributes of the panel's child elements. If a match is found, the corresponding element's value is updated to the value associated with the key in the data object. This property is useful for initializing the panel with specific data or updating its state based on external inputs. Note that this operation does not affect elements without a matching `name` or `label`, and it only updates the values of elements that are direct children of the panel.
   *
   * @type {Record<string, any>}
   * @example <bim-panel></bim-panel> <!-- Set value via JavaScript -->
   * @example
   * const panel = document.createElement('bim-panel');
   * document.body.appendChild(panel);
   * panel.value = { 'input-name': 'John Doe', 'checkbox-name': true };
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

  readonly activationButton: Button = document.createElement("bim-button");

  constructor() {
    super();
    this.activationButton.active = !this.hidden;
    this.activationButton.onclick = () => (this.hidden = !this.hidden);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.activationButton.remove();
  }

  /**
   * Collapses all `bim-panel-section` elements within the panel.
   * This method iterates over each `bim-panel-section` found within the panel's DOM and sets their `collapsed` property to `true`,
   * effectively hiding their content from view. This can be used to programmatically minimize the space taken up by sections
   * within the panel, making the panel more compact or to hide details that are not immediately necessary.
   */
  collapseSections() {
    const sections = this.querySelectorAll("bim-panel-section");
    for (const section of sections) section.collapsed = true;
  }

  /**
   * Expands all `bim-panel-section` elements within the panel.
   * This method iterates over each `bim-panel-section` found within the panel's DOM and sets their `collapsed` property to `false`,
   * effectively showing their content. This can be used to programmatically reveal the content of sections within the panel,
   * making the panel more informative or to display details that are necessary for the user.
   */
  expandSections() {
    const sections = this.querySelectorAll("bim-panel-section");
    for (const section of sections) section.collapsed = false;
  }

  protected render() {
    this.activationButton.icon = this.icon;
    this.activationButton.label = this.label || this.name;
    this.activationButton.tooltipTitle = this.label || this.name;

    return html`
      <div class="parent">
        ${this.label || this.name || this.icon
          ? html`<bim-label
              .label=${this.label || this.name}
              .icon=${this.icon}
            ></bim-label>`
          : null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
