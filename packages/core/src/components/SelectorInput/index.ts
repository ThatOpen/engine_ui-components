import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";
import { Option } from "../Option";
import { HasName, HasValue } from "../../core/types";

// HTML tag: bim-selector-input
export class SelectorInput extends UIComponent implements HasValue, HasName {
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
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }

    /* ::slotted(bim-option:first-child) {
      border-radius: var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs);
    } */

    /* ::slotted(bim-option:last-child) {
      border-radius: 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0;
    } */
  `;

  static properties = {
    value: { attribute: false },
  };

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  readonly onValueChange = new Event("change");

  private get _options() {
    const options = this.querySelectorAll("bim-option");
    return [...options];
  }

  private _value: any;

  set value(val: any) {
    const matchingOption = this._options.find((option) => option.value === val);
    if (matchingOption) {
      for (const option of this._options) {
        if (option === matchingOption) continue;
        option.checked = false;
      }
      matchingOption.checked = true;
      this._value = matchingOption.value;
      this.dispatchEvent(this.onValueChange);
    } else {
      console.warn(
        `bim-selector: "${val}" doesn't correspond with any of the values in the options for this input, value remained as "${this.value}".`,
      );
    }
  }

  get value() {
    return this._value;
  }

  constructor() {
    super();
    this.vertical = false;
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
    const element = e.target as Option;
    this.value = element.value;
  };

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
