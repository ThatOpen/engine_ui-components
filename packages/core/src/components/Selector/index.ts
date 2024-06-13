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
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
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
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `;
  }
}
