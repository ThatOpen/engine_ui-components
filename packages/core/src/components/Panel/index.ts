import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";
import { Button } from "../Button";
import { HasName, HasValue } from "../../core/types";

// HTML tag: bim-panel
export class Panel extends UIComponent implements HasName, HasValue {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        min-width: 20rem;
        overflow: auto;
      }

      :host([active]) {
        display: flex;
      }

      :host(:not([active])) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        border-radius: var(--bim-panel--bdrs, var(--bim-ui_size-base));
        background-color: var(--bim-panel--bgc, var(--bim-ui_bg-base));
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `,
  ];

  static properties = {
    active: { type: Boolean, reflect: true },
  };

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

  onValueChange = new Event("change");

  private _active = false;

  set active(value: boolean) {
    this._active = value;
    this.activationButton.active = value;
    if (value) {
      const parentChildren = this.parentElement?.children ?? [];
      for (const child of parentChildren) {
        if (child instanceof Panel && child !== this) {
          child.active = false;
        }
      }
    }
  }

  get active() {
    return this._active;
  }

  get value() {
    const value: Record<string, any> = {};
    for (const _child of this.children) {
      const child = _child as any;
      if ("value" in child) {
        value[child.name || child.label] = child.value;
      }
    }
    return value;
  }

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

  activationButton: Button = document.createElement("bim-button");

  constructor() {
    super();
    this.activationButton.onclick = () => (this.active = !this.active);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.activationButton.remove();
  }

  collapseSections() {
    const sections = this.querySelectorAll("bim-panel-section");
    for (const section of sections) section.collapsed = true;
  }

  expandSections() {
    const sections = this.querySelectorAll("bim-panel-section");
    for (const section of sections) section.collapsed = false;
  }

  render() {
    this.activationButton.icon = this.icon;
    this.activationButton.label = this.label || this.name;
    if (!this.label && this.name) {
      this.activationButton.tooltipTitle = this.label || this.name;
    }
    // if (!this.label) {
    //   if (this.name) {
    //     this.activationButton.tooltipTitle = this.label || this.name;
    //   }
    // }
    // this.label ||
    //   (this.name &&
    //     (this.activationButton.tooltipTitle = this.label || this.name));
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
