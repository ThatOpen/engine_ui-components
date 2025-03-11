import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Option } from "../Option";
import { HasName, HasValue } from "../../core/types";

/**
 * A custom selector web component for BIM applications. HTML tag: bim-selector
 */
export class Selector extends LitElement implements HasValue, HasName {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      position: relative;
      border-radius: 0;
      overflow: hidden;
      min-width: min-content;
      min-height: min-content;
    }

    ::slotted(bim-option)::before,
    ::slotted(bim-option)::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--bim-ui_main-base);
      box-sizing: border-box;
      transition:
        left 0.3s,
        background-color 0.1s;
    }

    ::slotted(bim-option)::before {
      left: 100%;
    }

    ::slotted(bim-option)::after {
      left: -100%;
    }

    ::slotted(bim-option[checked]:not([animate-to-left]))::before {
      left: 0;
    }

    ::slotted(bim-option[animate-to-left][checked])::after {
      left: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
    }

    ::slotted(bim-option:hover) {
      background-color: #0003;
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: Boolean, reflect: true })
  vertical = false;

  readonly onValueChange = new Event("change");
  private _canEmitEvents = false;
  private _lastClickedElement: HTMLElement | null = null;

  private get _options() {
    const options = this.querySelectorAll("bim-option");
    return [...options];
  }

  @state()
  private _value = document.createElement("bim-option");

  /**
   * Sets the value of the selector.
   * It finds the matching option based on the provided value and sets it as the selected option.
   * If no matching option is found, it does nothing.
   *
   * @param value - The value to set for the selector.
   */
  set value(value: any) {
    const matchingOption = this.findOption(value);
    if (!matchingOption) return;
    for (const option of this._options) {
      option.checked = option === matchingOption;
    }
    this._value = matchingOption;
    if (this._canEmitEvents) this.dispatchEvent(this.onValueChange);
  }

  get value() {
    return this._value.value;
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[];
    for (const child of children) {
      if (child instanceof Option) {
        child.noMark = true;
        child.removeEventListener("click", this.onOptionClick);
        child.addEventListener("click", this.onOptionClick);
      }
    }
  }

  private onOptionClick = (e: MouseEvent) => {
    this._value = e.target as Option;
    this.dispatchEvent(this.onValueChange);
    for (const child of this.children) {
      if (!(child instanceof Option)) continue;
      child.checked = child === e.target;
    }
  };

  private findOption(value: any) {
    const element = this._options.find((option) => {
      if (!(option instanceof Option)) return false;
      return option.label === value || option.value === value;
    }) as Option;
    return element;
  }

  private checkLastElement(e: PointerEvent) {
    e.stopPropagation();
    const currentElement = e.target as HTMLDivElement;

    if (this._lastClickedElement) {
      this.animateFromTo(this._lastClickedElement, currentElement);
    } else if (currentElement.parentNode) {
      for (const child of currentElement.parentNode.childNodes) {
        if (
          child.nodeName !== "#text" &&
          (child as HTMLElement).hasAttribute("checked")
        ) {
          const checkedElement = child as HTMLElement;

          this.animateFromTo(checkedElement, currentElement);
        }
      }
    }

    this._lastClickedElement = currentElement;
  }

  private animateFromTo(from: HTMLElement, to: HTMLElement) {
    if (from.offsetLeft < to.offsetLeft) {
      from.removeAttribute("animate-to-left");
      to.setAttribute("animate-to-left", "");
    } else {
      to.removeAttribute("animate-to-left");
      from.setAttribute("animate-to-left", "");
    }
  }

  protected firstUpdated() {
    const option = [...this.children].find(
      (child) => child instanceof Option && child.checked,
    ) as Option;
    if (option) this._value = option;
  }

  protected render() {
    return html`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
        @pointerdown=${this.checkLastElement}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `;
  }
}
