import {
  computePosition,
  flip,
  shift,
  offset,
  inline
  //@ts-ignore
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.1/+esm";
import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { createRef, ref } from "lit/directives/ref.js";
import { styles } from "../../core/UIManager/src/styles";
import { Option } from "../Option"; 

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
        --bim-label--fz: var(--bim-ui_size-xs);
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
    multiple: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    visible: { type: Boolean, reflect: true },
    searchBox: { type: Boolean, reflect: true, attribute: "search-box" },
    vertical: { type: Boolean, reflect: true },
    value: { attribute: false },
    visibleOptions: { state: true }
  }

  declare icon?: string
  declare label?: string
  declare multiple: boolean
  declare required: boolean
  declare searchBox: boolean
  declare vertical: boolean

  private _changeEvent = new Event("change")
  private _inputContainer = createRef<HTMLDivElement>()
  private _listElement = createRef<HTMLDivElement>()
  private _visibilityObserver: IntersectionObserver
  private _lazyObserver: IntersectionObserver
  private _optionElements: Option[] = []

  private _visibleOptions: Option[] = []

  set visibleOptions(value: Option[]) {
    this._visibleOptions = value
  }

  get visibleOptions() {
    return this._visibleOptions
  }

  private _visible = false

  get visible() {
    return this._visible
  }

  set visible(value: boolean) {
    this._visible = value
    if (value) {
      this.computePosition()
      this.updateOptionsList()
    } else {
      this.resetOptionsList()
    }
  }
  
  private _value: any[] = []

  get value() {
    return this._value
  }

  set value(value: any[]) {
    if (this.required && Object.keys(value).length === 0) {
      console.warn(`bim-dropdown was set as required but not value is set. Nothing has changed.`);
      return;
    };
    const _value: string[] = [];
    for (const option of value) {
      const existingOption = this.findOption(option)
      if (existingOption) {
        _value.push(existingOption.value || existingOption.label);
        if (!this.multiple && Object.keys(value).length > 1) {
          console.warn(
            `bim-dropdown wasn't set as multiple, but provided an array of values. Only first was taken.`
          );
          break;
        }
      } else {
        console.warn(
          `bim-dropdown doesn't have ${option} as a possible value.`
        );
      }
    }
    this._value = _value;
    this.updateOptionState()
    this.dispatchEvent(this._changeEvent)
  }

  private get _options() {
    const options = [...this._visibleOptions, ...this._optionElements]
    for (const child of this.children) {
      if (child instanceof Option) options.push(child)
    }
    return options
  }

  constructor() {
    super()
    this.multiple = false
    this.required = false
    this.visible = false
    this.vertical = false
    this.searchBox = false
    this._visibilityObserver = this.createVisibilityObserver()
    this._lazyObserver = this.createLazyObserver()
  }
  
  private createVisibilityObserver() {
    if (this._visibilityObserver) return this._visibilityObserver;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const element = entry.target
        if (!(element instanceof Option)) continue;
        if (entry.isIntersecting) {
          element.style.visibility = "visible"
        } else {
          element.style.visibility = "hidden"
        }
      }
    }, {
      root: null,
      threshold: 0.5
    })
    return observer
  }

  private createLazyObserver() {
    if (this._lazyObserver) return this._lazyObserver;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (!entry.isIntersecting || !(entry.target instanceof Option)) return;
      const option = entry.target
      observer.unobserve(option)
      const newOption = this._optionElements.splice(0, 1)[0]
      if (newOption) {
        this.visibleOptions = [...this._visibleOptions, newOption]
        this._visibilityObserver.observe(newOption)
        this._lazyObserver.observe(newOption)
      }
    }, {threshold: 0.5})
    return observer
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

  private onOptionClick(option: any) {
    const selected = this._value.includes(option);
    if (!this.multiple && !this.required && !selected) {
      this.value = [option]
    } else if (!this.multiple && !this.required && selected) {
      this.value = []
    } else if (!this.multiple && this.required && !selected) {
      this.value = [option]
    } else if (this.multiple && !this.required && !selected) {
      this.value = [...this._value, option]
    } else if (this.multiple && !this.required && selected) {
      this.value = this._value.filter((v) => v !== option)
    } else if (this.multiple && this.required && !selected) {
      this.value = [...this._value, option]
    } else if (this.multiple && this.required && selected) {
      const rest = this._value.filter((v) => v !== option)
      if (rest.length !== 0) this.value = rest
    }
  }
  
  private onWindowMouseUp = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) this.visible = false;
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements()
    for (const child of children) {
      child.remove();
      if (!(child instanceof Option)) {
        console.warn("Only bim-option is allowed inside bim-dropdown. Child has been removed.");
        continue;
      }
      this._optionElements.push(child)
      if (child.checked) { this.onOptionClick(child.value || child.label) }
      child.addEventListener("click", () => this.onOptionClick(child.value || child.label))
    }
    this.updateOptionsList()
  }

  private updateOptionState() {
    for (const element of this._options) {
      if (!(element instanceof Option)) continue;
      if (this._value.includes(element.value || element.label)) {
        element.checked = true
      } else {
        element.checked = false
      }
    }
  }

  private findOption(value: any) {
    const element = this._options.find((option) => {
      if (!(option instanceof Option)) return false;
      return option.label === value || option.value === value
    }) as Option
    return element
  }

  private updateOptionsList() {
    if (!this.visible) return;
    this.resetOptionsList()
    const elementsToDisplay = 30
    const elements = this._optionElements.splice(0, elementsToDisplay)
    if (!(this.children.length === 0 && elements.length > 0)) return;
    this.visibleOptions = elements
    if (this._options.length > elementsToDisplay) {
      for (const element of elements) {
        this._visibilityObserver.observe(element)
      }
      const lastElement = elements[elementsToDisplay - 1]
      this._lazyObserver.observe(lastElement)
    }
  }

  private resetOptionsList() {
    for (const option of this._options) {
      this._visibilityObserver.unobserve(option)
      this._lazyObserver.unobserve(option)
    }
    this._optionElements.unshift(...this._visibleOptions)
    this._visibleOptions = []
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
    let inputLabel: string

    if (this._value.length === 0) {
      inputLabel = "Select an option..."
    } else if (this._value.length === 1) {
      const option = this.findOption(this._value[0])
      inputLabel = option?.label || option?.value
    } else {
      inputLabel = `Multiple (${this._value.length})`
    }

    return html`
      <bim-input .label=${this.label} .icon=${this.icon} ?vertical=${this.vertical}>
        <div ${ref(this._inputContainer)} class="input" @click=${() => this.visible = !this.visible}>
          <bim-label .label=${inputLabel} style="pointer-events: none; overflow: hidden;"></bim-label>
          <svg style="flex-shrink: 0" xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem" fill="#9ca3af"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
        </div>
        <div ${ref(this._listElement)} class="list">
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this._visibleOptions.map((option) => option)}
        </div>
      </bim-input>
    `
  }
}