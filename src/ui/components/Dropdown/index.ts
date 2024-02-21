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

export class Dropdown extends UIComponent {
  static styles = css`
    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      align-items: center;
      width: 100%;
      user-select: none;
    }

    .input {
      box-sizing: border-box;
      max-width: 13rem;
      column-gap: 0.25rem;
      outline: none;
      background-color: #2e2e2e;
      cursor: pointer;
      height: 100%;
      color: #a0a0a0;
      border-radius: 0.375rem;
      display: flex;
      flex: 1 1 0%;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.5rem;
      font-size: 0.75rem;
    }

    .list {
      position: absolute;
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 20rem;
      min-width: 6rem;
      display: none;
      flex-direction: column;
      background-color: #2e2e2e;
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      font-size: 0.75rem;
      padding: 0.75rem 0;
      border-radius: 1rem;
      z-index: 20;
    }

    :host([visible]) .list {
      display: flex !important;
    }

    :host([visible]) .input {
      outline: 1px solid var(--bim-dropdown-focus-color);
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
      color: #9D6BFF
    }

    .list > div svg {
      visibility: hidden;
    }

    .list > div[data-selected] svg {
      visibility: visible;
      fill: #9D6BFF;
    }

    .list > div:hover {
      background-color: #9D6BFF4D;
      color: white !important;
      cursor: pointer;
    }

    .list > div p {
      white-space: nowrap;
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
      overflow: hidden;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9c6bff77;
      border-radius: 0.25rem;
    }
    
    ::-webkit-scrollbar-track {
      background-color: black;
    }

  `

  static properties = {
    label: { type: String, reflect: true },
    full: { type: Boolean, reflect: true },
    value: { type: Object, attribute: false },
    options: { type: Object, attribute: false },
    multiple: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    visible: { type: Boolean, reflect: true },
    searchBox: { type: Boolean, reflect: true, attribute: "search-box" }
  }

  declare label?: string
  declare full: boolean
  declare multiple: boolean
  declare required: boolean
  declare searchBox: boolean
  declare options: Record<string, any>

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

  private changeEvent = new Event("change")

  private _visible = false

  get visible() {
    return this._visible
  }

  set visible(value: boolean) {
    this._visible = value
    if (value) this.computePosition()
  }

  protected static _tableHostable = true

  constructor() {
    super()
    this.full = false
    this.multiple = false
    this.required = false
    this.visible = false
    this.searchBox = false
    this.options = []
  }

  private _inputContainer = createRef<HTMLDivElement>()
  private _listElement = createRef<HTMLDivElement>()

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
      inputLabel = this.full && this.label
        ? `${this.label} (Select an option...)`
        : "Select an option..."
    } else if (values.length === 1) {
      inputLabel = this.full && this.label
        ? `${this.label}: ${values[0]}`
        : values[0]
    } else {
      inputLabel = this.full && this.label
        ? `${this.label} (Multiple ${values.length})`
        : `Multiple (${values.length})`
    }
    return html`
      <div class="host">
        ${this.label && !this.full ? html`<bim-input-label .label=${this.label}></bim-input-label>` : null}
        <div ${ref(this._inputContainer)} class="input" @click=${() => this.visible = !this.visible}>
          <bim-input-label .label=${inputLabel} style="font-size: 0.75rem; pointer-events: none"></bim-input-label>
          <svg style="flex-shrink: 0" xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem" fill="#9ca3af"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
        </div>
        <div ${ref(this._listElement)} class="list">
          ${this.searchBox ? html`SearchBox Here` : null}
          ${listElementTemplates.map(element => element)}
        </div>
      </div>
    `
  }
}