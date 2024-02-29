import {
  computePosition,
  flip,
  shift,
  offset,
  inline
  //@ts-ignore
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.1/+esm";
import { TemplateResult, css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { createRef, ref } from "lit/directives/ref.js";
import { styles } from "../../core/UIManager/src/styles";

export class Dropdown extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-input--bgc: var(--bim-dropdown--bgc, var(--bim-ui_bg-contrast-20));
        --bim-input--olw: var(--bim-dropdown--olw, 2px);
        --bim-input--olc: var(--bim-dropdown--olc, transparent);
        --bim-input--bdrs: var(--bim-dropdown--bdrs, var(--bim-ui_size-4xs));
        flex: 1;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-dropdown¡focus--c, var(--bim-ui_color-accent));
      }
      
      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
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

      .list {
        position: absolute;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 20rem;
        min-width: 6rem;
        display: flex;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.75rem 0;
        border-radius: 1rem;
        z-index: 20;
        background-color: var(--bim-dropdown_list--bgc, var(--bim-ui_bg-contrast-20));
        font-size: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        color: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
      }

      :host(:not([visible])) .list {
        display: none;
      }

      .list > div {
        display: flex;
        padding: 0 1rem;
        height: 2rem;
        justify-content: space-between;
        align-items: center;
        column-gap: 1.25rem;
      }

      .list > div[data-selected] {
        font-weight: 600;
        color: var(--bim-dropdown¡selected--c, var(--bim-ui_color-main-light))
      }

      .list > div svg {
        visibility: hidden;
      }

      .list > div[data-selected] svg {
        visibility: visible;
        fill: var(--bim-dropdown¡selected--c, var(--bim-ui_color-main-light));
      }

      .list > div:hover {
        cursor: pointer;
        background-color: #00000024;
      }

      .list > div p {
        white-space: nowrap;
      }
    `
  ]

  static properties = {
    icon: { type: String, reflect: true },
    label: { type: String, reflect: true },
    wrapped: { type: Boolean, reflect: true },
    value: { type: Object, attribute: false },
    options: { type: Object, attribute: false },
    multiple: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    visible: { type: Boolean, reflect: true },
    searchBox: { type: Boolean, reflect: true, attribute: "search-box" },
    vertical: { type: Boolean, reflect: true }
  }

  declare icon?: string
  declare label?: string
  declare wrapped: boolean
  declare multiple: boolean
  declare required: boolean
  declare searchBox: boolean
  declare vertical: boolean
  declare options: Record<string, any>

  private changeEvent = new Event("change")
  private _inputContainer = createRef<HTMLDivElement>()
  private _listElement = createRef<HTMLDivElement>()

  private _visible = false

  get visible() {
    return this._visible
  }

  set visible(value: boolean) {
    this._visible = value
    if (value) this.computePosition()
  }
  
  private _value: Record<string, any> = {}

  get value() {
    return this._value
  }

  set value(value: Record<string, any>) {
    if (this.required && Object.keys(value).length === 0) {
      console.warn(`UIComponents.Dropdown was set as required but not value is set. Nothing has changed.`)
      return
    };
    const isArray = Array.isArray(value);
    const _value: Record<string, any> = Array.isArray(this.options) ? [] : {};
    for (const option in value) {
      const key = isArray ? value[Number(option)] : option;
      const optionExists = isArray ? value.includes(key) : key in this.options;
      if (optionExists) {
        if (Array.isArray(_value)) {
          _value.push(key);
        } else {
          _value[key] = this.options[key];
        }
        if (!this.multiple && Object.keys(value).length > 1) {
          console.warn(
            `UIComponents.Dropdown wasn't set as multiple, but provided an array of values. Only first was taken.`
          );
          break;
        }
      } else {
        console.warn(
          `UIComponents.Dropdown doesn't have ${key} as a possible value.`
        );
      }
    }
    this._value = _value;
    this.dispatchEvent(this.changeEvent)
  }

  constructor() {
    super()
    this.wrapped = false
    this.multiple = false
    this.required = false
    this.visible = false
    this.vertical = false
    this.searchBox = false
    this.options = []
  }

  private computePosition() {
    const { value: inputContainer } = this._inputContainer
    const { value: list } = this._listElement
    if (!(inputContainer && list)) return;
    computePosition(inputContainer, list, {
      placement: "right",
      middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
    }).then((data: { x: number; y: number }) => {
      const { x, y } = data;
      Object.assign(list.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  private onOptionClick(option: string) {
    const currentValues = Array.isArray(this._value)
      ? this._value
      : Object.keys(this._value);
    const selected = currentValues.includes(option);
    if (!this.multiple && !this.required && !selected) {
      this.value = [option]
    } else if (!this.multiple && !this.required && selected) {
      this.value = []
    } else if (!this.multiple && this.required && !selected) {
      this.value = [option]
    } else if (this.multiple && !this.required && !selected) {
      this.value = [...currentValues, option]
    } else if (this.multiple && !this.required && selected) {
      this.value = currentValues.filter((v) => v !== option)
    } else if (this.multiple && this.required && !selected) {
      this.value = [...currentValues, option]
    } else if (this.multiple && this.required && selected) {
      const rest = currentValues.filter((v) => v !== option)
      if (rest.length !== 0) this.value = rest
    }
  }
  
  private onWindowMouseUp = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) this.visible = false;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('mouseup', this.onWindowMouseUp);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('mouseup', this.onWindowMouseUp);
  }

  render() {
    const listElementTemplates: TemplateResult[] = []
    const isOptionsArray = Array.isArray(this.options)
    for (const option in this.options) {
      const key = isOptionsArray ? this.options[option] : option
      const selected = Array.isArray(this.value) ? this.value.includes(key) : Object.keys(this.value).includes(key)
      listElementTemplates.push(html`
        <div @click=${() => this.onOptionClick(key)} ?data-selected=${selected}>
          <p>${key}</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
      `)
    }

    let inputLabel: string

    const values = Array.isArray(this._value)
      ? this._value
      : Object.keys(this._value);
    if (values.length === 0) {
      inputLabel = this.wrapped && this.label
        ? `${this.label} (Select an option...)`
        : "Select an option..."
    } else if (values.length === 1) {
      inputLabel = this.wrapped && this.label
        ? `${this.label}: ${values[0]}`
        : values[0]
    } else {
      inputLabel = this.wrapped && this.label
        ? `${this.label} (Multiple ${values.length})`
        : `Multiple (${values.length})`
    }

    return html`
      <bim-input .label=${this.label} .icon=${this.icon} ?vertical=${this.vertical}>
        <div ${ref(this._inputContainer)} class="input" @click=${() => this.visible = !this.visible}>
          <bim-label .label=${inputLabel} style="pointer-events: none; overflow: hidden;"></bim-label>
          <svg style="flex-shrink: 0" xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem" fill="#9ca3af"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
        </div>
        <div ${ref(this._listElement)} class="list">
          ${this.searchBox ? html`SearchBox Here` : null}
          ${listElementTemplates.map(element => element)}
        </div>
      </bim-input>
    `
  }
}