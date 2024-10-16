import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";
import { Component } from "../../core/Component";
import { styles } from "../../core/Manager/src/styles";
import { Option } from "../Option";
import { HasName, HasValue } from "../../core/types";
import { ContextMenu } from "../ContextMenu";

/**
 * A custom dropdown web component for BIM applications.
 */
export class Dropdown extends Component implements HasValue, HasName {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `,
  ];

  /**
   * The name of the dropdown.
   * @type {string}
   * @default undefined
   * @example
   * <bim-dropdown name="exampleName"></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.name = 'exampleName';
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * The icon to be displayed in the dropdown.
   * @type {string}
   * @default undefined
   * @example
   * <bim-dropdown icon="exampleIcon"></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.icon = 'exampleIcon';
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * The label to be displayed in the dropdown.
   * @type {string}
   * @default undefined
   * @example
   * <bim-dropdown label="Example Label"></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.label = 'Example Label';
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Indicates whether multiple options can be selected in the dropdown.
   * @default false
   * @example
   * <bim-dropdown multiple></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.multiple = true;
   */
  @property({ type: Boolean, reflect: true })
  multiple = false;

  /**
   * Indicates whether a selection is required in the dropdown.
   * @default false
   * @example
   * <bim-dropdown required></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.required = true;
   */
  @property({ type: Boolean, reflect: true })
  required = false;

  /**
   * Indicates whether the dropdown should be displayed vertically.
   * @default false
   * @example
   * <bim-dropdown vertical></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.vertical = true;
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  private _visible = false;

  /**
   * Indicates whether the dropdown it-self (not the component) is visible.
   * @type {boolean}
   * @default false
   * @example
   * <bim-dropdown visible></bim-dropdown>
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.visible = true;
   */

  @property({ type: Boolean, reflect: true })
  set visible(value: boolean) {
    if (value) {
      const { value: contextMenu } = this._contextMenu;
      if (!contextMenu) return;
      for (const element of this.elements) {
        contextMenu.append(element);
      }
      this._visible = true;
    } else {
      for (const element of this.elements) {
        this.append(element);
      }
      this._visible = false;
      this.resetVisibleElements();
    }
  }

  get visible() {
    return this._visible;
  }

  @state()
  private _value: Set<Option> = new Set();

  /**
   * The selected values in the dropdown.
   * @type {any[]}
   * @example
   * const dropdown = document.createElement('bim-dropdown');
   * dropdown.value = ['option1', 'option2'];
   */

  set value(value: any[]) {
    if (this.required && Object.keys(value).length === 0) return;
    const _value: Set<Option> = new Set();
    for (const option of value) {
      const existingOption = this.findOption(option);
      if (!existingOption) continue;
      _value.add(existingOption);
      if (!this.multiple && Object.keys(value).length === 1) break;
    }
    this._value = _value;
    this.updateOptionsState();
    this.dispatchEvent(this.onValueChange);
  }

  get value() {
    const options = [...this._value].filter(
      (option) => option instanceof Option && option.checked,
    );
    return options.map((option) => option.value);
  }

  private get _options() {
    const options = new Set([...this.elements]);
    for (const child of this.children) {
      if (child instanceof Option) options.add(child);
    }
    return [...options];
  }

  /**
   * Event that is fired when the value of the dropdown changes.
   * This event is fired when the user selects or deselects an option.
   *
   * @event change
   * @example
   * dropdown.addEventListener('change', (event) => {
   *   console.log('Dropdown value changed:', event.target.value);
   * });
   */
  onValueChange = new Event("change");

  private _contextMenu = createRef<ContextMenu>();

  constructor() {
    super();
    this.useObserver = true;
  }

  private onOptionClick = (e: MouseEvent) => {
    const option = e.target as Option;
    const selected = this._value.has(option);
    if (!this.multiple && !this.required && !selected) {
      this._value = new Set([option]);
    } else if (!this.multiple && !this.required && selected) {
      this._value = new Set([]);
    } else if (!this.multiple && this.required && !selected) {
      this._value = new Set([option]);
    } else if (this.multiple && !this.required && !selected) {
      this._value = new Set([...this._value, option]);
    } else if (this.multiple && !this.required && selected) {
      const values = [...this._value].filter((v) => v !== option);
      this._value = new Set(values);
    } else if (this.multiple && this.required && !selected) {
      this._value = new Set([...this._value, option]);
    } else if (this.multiple && this.required && selected) {
      const options = [...this._value].filter((v) => v !== option);
      const rest = new Set(options);
      if (rest.size !== 0) this._value = rest;
    }
    this.updateOptionsState();
    this.dispatchEvent(this.onValueChange);
  };

  private onSlotChange(e: any) {
    const children = e.target.assignedElements();
    this.observe(children);
    const checkedOptions = new Set<Option>();
    for (const child of this.elements) {
      if (!(child instanceof Option)) {
        child.remove();
        continue;
      }
      if (child.checked) checkedOptions.add(child);
      child.removeEventListener("click", this.onOptionClick);
      child.addEventListener("click", this.onOptionClick);
    }
    this._value = checkedOptions;
  }

  private updateOptionsState() {
    for (const element of this._options) {
      if (!(element instanceof Option)) continue;
      element.checked = this._value.has(element);
    }
  }

  private findOption(value: any) {
    const element = this._options.find((option) => {
      if (!(option instanceof Option)) return false;
      return option.label === value || option.value === value;
    }) as Option;
    return element;
  }

  protected render() {
    let inputLabel: string;
    let inputImg: string | undefined;
    let inputIcon: string | undefined;

    if (this._value.size === 0) {
      inputLabel = "Select an option...";
    } else if (this._value.size === 1) {
      const option = [...this._value][0];
      inputLabel = option?.label || option?.value;
      inputImg = option?.img;
      inputIcon = option?.icon;
    } else {
      inputLabel = `Multiple (${this._value.size})`;
    }

    return html`
      <bim-input
        title=${this.label ?? ""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${() => (this.visible = !this.visible)}>
          <bim-label
            .img=${inputImg}
            .icon=${inputIcon}
            style="overflow: hidden;"
            >${inputLabel}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${ref(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${() => {
              if (this.visible) this.visible = false;
            }}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `;
  }
}
