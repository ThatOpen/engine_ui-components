import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";
import { HasName, HasValue } from "../../core/types";

// HTML tag: bim-number-input
export class NumberInput extends UIComponent implements HasValue, HasName {
  static styles = css`
    :host {
      flex: 1;
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_color-accent)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([sufix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_color-main);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }
  `;

  /**
   * The `name` property is used to specify the name of the number input component.
   * This can be useful for identifying the component in forms or JavaScript.
   * When the property changes, it updates the component's attribute to reflect the new name.
   *
   * @type {String}
   * @default undefined
   * @example <bim-number-input name="age"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.name = 'age';
   * document.body.appendChild(numberInput);
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * The `icon` property allows specifying an icon identifier to be used within the number input component,
   * potentially for decorative or instructional purposes. Changes to this property may affect the appearance
   * or layout of the component, depending on how the icon is used within the component's template.
   *
   * @type {String}
   * @default undefined
   * @example <bim-number-input icon="user-icon"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.icon = 'user-icon';
   * document.body.appendChild(numberInput);
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * The `label` property is used to define a text label associated with the number input component.
   * This label can provide context or instructions to the user. When the label property changes,
   * the component updates to display the new label text.
   *
   * @type {String}
   * @default undefined
   * @example <bim-number-input label="Enter your age"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.label = 'Enter your age';
   * document.body.appendChild(numberInput);
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * The `pref` property is used to specify a prefix for the value in the number input component.
   * This could be a currency symbol, a unit, or any other kind of prefix. The prefix is displayed
   * inside the input field before the value. When the property changes, the displayed prefix updates accordingly.
   *
   * @type {String}
   * @default undefined
   * @example <bim-number-input pref="$"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.pref = '$';
   * document.body.appendChild(numberInput);
   */
  @property({ type: String, reflect: true })
  pref?: string;

  /**
   * The `min` property defines the minimum value that can be entered in the number input component.
   * It is used to validate the input and ensure that the value does not go below this minimum.
   * When the property changes, the component enforces the new minimum value.
   *
   * @type {Number}
   * @default undefined
   * @example <bim-number-input min="0"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.min = 0;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Number, reflect: true })
  min?: number;

  /**
   * The `value` property represents the current value of the number input component.
   * It is a crucial property that holds the actual number input by the user or set programmatically.
   * Changes to this property update the displayed value in the component and can trigger validation
   * against the `min` and `max` properties if they are set.
   *
   * @type {Number}
   * @default 0
   * @example <bim-number-input value="10"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.value = 10;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Number, reflect: true })
  value: number;

  /**
   * The `step` property determines the amount by which the value should increase or decrease
   * when the user interacts with the component's stepping mechanism. It is used for incremental
   * changes to the value. When the property changes, the step size for value changes is updated.
   *
   * @type {Number}
   * @default undefined
   * @example <bim-number-input step="5"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.step = 5;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Number, reflect: true })
  step?: number;

  /**
   * The `sensitivity` property affects how sensitive the slider is to mouse movements when adjusting
   * the value. A higher sensitivity means smaller movements are needed to change the value. This property
   * is particularly relevant when the `slider` property is enabled. Changes to this property adjust how
   * the slider responds to input.
   *
   * @type {Number}
   * @default undefined
   * @example <bim-number-input sensitivity="10"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.sensitivity = 10;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Number, reflect: true })
  sensitivity?: number;

  /**
   * The `max` property defines the maximum value that can be entered in the number input component.
   * It is used to validate the input and ensure that the value does not exceed this maximum.
   * When the property changes, the component enforces the new maximum value.
   *
   * @type {Number}
   * @default undefined
   * @example <bim-number-input max="100"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.max = 100;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Number, reflect: true })
  max?: number;

  /**
   * The `sufix` property is used to specify a suffix for the value in the number input component.
   * Similar to the `pref` property, but the suffix is displayed after the value. It could be a unit of measure,
   * a percentage symbol, etc. When the property changes, the displayed suffix updates accordingly.
   *
   * @type {String}
   * @default undefined
   * @example <bim-number-input sufix="%"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.sufix = '%';
   * document.body.appendChild(numberInput);
   */
  @property({ type: String, reflect: true })
  sufix?: string;

  /**
   * The `vertical` property indicates whether the slider (if enabled) should be displayed vertically.
   * This can affect the layout and behavior of the slider component within the number input.
   * When the property changes, the orientation of the slider adjusts accordingly.
   *
   * @type {Boolean}
   * @default false
   * @example <bim-number-input vertical></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.vertical = true;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  /**
   * The `slider` property enables a slider interface for the number input component, allowing users
   * to adjust the value by dragging the slider. When enabled, it changes the component's UI to include
   * a slider. When the property changes, the component toggles between a regular input field and a slider view.
   *
   * @type {Boolean}
   * @default false
   * @example <bim-number-input slider></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.slider = true;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Boolean, reflect: true })
  slider: boolean;

  private _input = createRef<HTMLInputElement>();
  readonly onValueChange = new Event("input");

  constructor() {
    super();
    this.value = 0;
    this.vertical = false;
    this.slider = false;
    if (this.min && this.max && (this.min > this.max || this.max < this.min)) {
      throw new Error(
        "bim-number-input min value can't be greater than max and max can't be lower than min.",
      );
    }
  }

  private onInput(e: Event) {
    e.stopPropagation();
    const { value: input } = this._input;
    if (!input) return;
    this.setValue(input.value);
  }

  private setValue(_value: string) {
    const { value: input } = this._input;

    let value = _value;
    value = value.replace(/[^0-9.-]/g, ""); // Only allow numbers, dots, and minus
    value = value.replace(/(\..*)\./g, "$1"); // Only allow one dot
    if (input) input.value = value;
    if (value.endsWith(".")) return;
    if (value.lastIndexOf("-") > 0) {
      value = value[0] + value.substring(1).replace(/-/g, "");
    }
    if (input) input.value = value;
    if (value === "-" || value === "-0") return;

    let numericValue = Number(value);

    if (Number.isNaN(numericValue)) return;

    numericValue =
      this.min !== undefined ? Math.max(numericValue, this.min) : numericValue;
    numericValue =
      this.max !== undefined ? Math.min(numericValue, this.max) : numericValue;

    this.value = numericValue;
    if (input) input.value = this.value.toString();
    this.dispatchEvent(this.onValueChange);
  }

  private onBlur() {
    const { value: input } = this._input;
    if (input && Number.isNaN(Number(input.value)))
      input.value = this.value.toString();
  }

  private onSliderMouseDown(e: MouseEvent) {
    document.body.style.cursor = "w-resize";
    const { clientX: startPosition } = e;
    const initialValue = this.value;
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: endPosition } = e;
      const step = this.step ?? 1;
      const stepDecimals = step.toString().split(".")[1]?.length || 0;
      const hardness = 1 / (this.sensitivity ?? 1);
      const calc = (endPosition - startPosition) / hardness;
      if (Math.floor(Math.abs(calc)) !== Math.abs(calc)) return;
      const value = initialValue + calc * step;
      this.setValue(value.toFixed(stepDecimals));
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "default";
    });
  }

  /**
   * Sets focus to the input element of the number input component.
   * This method is useful for programmatically focusing the input element, for example,
   * in response to a user action or to emphasize the input in the UI.
   *
   * If the input element reference is not available (not yet rendered or disconnected),
   * this method will do nothing.
   */
  focus() {
    const { value } = this._input;
    if (!value) return;
    value.focus();
  }

  protected render() {
    const regularTemplate = html`
      ${this.pref || this.icon
        ? html`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.pref}
            .icon=${this.icon}
          ></bim-label>`
        : null}
      <input
        ${ref(this._input)}
        type="text"
        size="1"
        @input=${this.onInput}
        @change=${this.onInput}
        @blur=${this.onBlur}
        .value=${this.value.toString()}
      />
      ${this.sufix
        ? html`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.sufix}
          ></bim-label>`
        : null}
    `;

    const min = this.min ?? -Infinity;
    const max = this.max ?? +Infinity;
    const normalizedValue = (100 * (this.value - min)) / (max - min);
    const sliderTemplate = html`
      <style>
        .slider-indicator {
          width: ${`${normalizedValue}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref || this.icon
          ? html`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .label=${`${this.pref}: `}
              .icon=${this.icon}
            ></bim-label>`
          : null}
        <bim-label
          style="z-index: 1;"
          .label=${this.value.toString()}
        ></bim-label>
        ${this.sufix
          ? html`<bim-label
              style="z-index: 1;"
              .label=${this.sufix}
            ></bim-label>`
          : null}
      </div>
    `;

    return html`
      <bim-input
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider ? sliderTemplate : regularTemplate}
      </bim-input>
    `;
  }
}
