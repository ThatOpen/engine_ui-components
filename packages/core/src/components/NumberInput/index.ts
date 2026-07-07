import { LitElement, css, html, PropertyValues } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, state } from "lit/decorators.js";
import { HasName, HasValue } from "../../core/types";

/**
 * A custom number input web component for BIM applications. HTML tag: bim-number-input
 */
export class NumberInput extends LitElement implements HasValue<number>, HasName {
  /**
  * CSS styles for the component.
  */
  static styles = css`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      user-select: none;
      flex: 1;
      align-items: normal;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    bim-label {
      margin-top: var(--bim-input--label-mt, 0);
      pointer-events: none;
    }

    .input {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: 25px;
      min-width: 3rem;
      gap: 4px;
      padding: 0 7px;
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
      border: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
      transition: border-color 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: var(--bim-input--maxw, fit-content);
    }

    :host(:focus-within) .input {
      border-color: var(--bim-number-input--focus-c, var(--bim-ui_bg-contrast-40));
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
      font-size: var(--bim-ui_size-base);
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
      color-scheme: dark;
    }

    :host-context(html.bim-ui-light) input {
      color-scheme: light;
    }

    @media (prefers-color-scheme: light) {
      input {
        color-scheme: light;
      }
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    bim-label.affix {
      pointer-events: auto;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      --bim-label--fz: var(--bim-ui_size-sm);
    }

    :host([slider]) .input {
      padding: 0;
    }

    .slider {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider bim-label.affix {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider-affix {
      position: relative;
      z-index: 1;
    }

    .slider-affix.pref {
      margin-right: 0.125rem;
    }

    .slider-indicator {
      height: 100%;
      width: var(--_number-input-slider-pct, 0%);
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
    }

    @media (prefers-reduced-motion: reduce) {
      .input {
        transition: none;
      }
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
   * Short for "prefix" — a currency symbol, unit, or other text shown inside the
   * input field before the value (e.g. `pref="$"` renders "$ 42"). Named `pref`
   * (not `prefix`) because `prefix` collides with the native, read-only
   * `Node.prefix` (XML namespace prefix) property inherited from `HTMLElement`.
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

  @state()
  private _value = 0;

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
  @property({ type: Number })
  set value(data: number) {
    if (!Number.isFinite(data)) return;
    this.setValue(data.toString());
  }

  get value() {
    return this._value;
  }

  /**
   * The `step` property determines the amount by which the value should increase or decrease
   * when the user interacts with the component's stepping mechanism (dragging the slider, or
   * pressing the Up/Down arrow keys while focused). It is used for incremental changes to the
   * value. When the property changes, the step size for value changes is updated.
   *
   * @type {Number}
   * @default undefined
   * @example <bim-number-input step="5"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.step = 5;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Number })
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
  @property({ type: Number })
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
   * The `suffix` property is used to specify a suffix for the value in the number input component.
   * Similar to the `pref` property, but the suffix is displayed after the value. It could be a unit of measure,
   * a percentage symbol, etc. When the property changes, the displayed suffix updates accordingly.
   *
   * @type {String}
   * @default undefined
   * @example <bim-number-input suffix="%"></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.suffix = '%';
   * document.body.appendChild(numberInput);
   */
  @property({ type: String, reflect: true })
  suffix?: string;

  /**
   * The `vertical` property indicates whether the slider (if enabled) should be displayed vertically.
   * This can affect the layout and behavior of the slider component within the number input.
   * When the property changes, the orientation of the slider adjusts accordingly.
   *
   * @default false
   * @example <bim-number-input vertical></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.vertical = true;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * The `slider` property enables a slider interface for the number input component, allowing users
   * to adjust the value by dragging the slider. When enabled, it changes the component's UI to include
   * a slider. When the property changes, the component toggles between a regular input field and a slider view.
   *
   * @default false
   * @example <bim-number-input slider></bim-number-input>
   * @example
   * const numberInput = document.createElement('bim-number-input');
   * numberInput.slider = true;
   * document.body.appendChild(numberInput);
   */
  @property({ type: Boolean, reflect: true })
  slider = false;

  private _input = createRef<HTMLInputElement>();

  /**
   * @deprecated Storing a reused Event instance is an anti-pattern. Listen for
   * the "change" event on the element instead: `el.addEventListener("change", fn)`.
   */
  readonly onValueChange = new Event("change");

  // Tracked so disconnectedCallback can remove them if the component is
  // destroyed mid-drag or while a "press Escape to blur" listener is armed —
  // otherwise both leak on `document`/`window` and hold a closure over `this`.
  private _sliderMouseMove?: (e: MouseEvent) => void;
  private _sliderMouseUp?: () => void;
  private _escapeKeyListener?: (e: KeyboardEvent) => void;

  private onChange(e: Event) {
    e.stopPropagation();
    const { value: input } = this._input;
    if (!input) return;
    this.setValue(input.value);
  }

  // Strips any character that isn't a digit, dot, or minus as the user types or
  // pastes — so invalid characters never even appear, not just on blur/change.
  private onInput(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    const original = input.value;
    const sanitized = original.replace(/[^0-9.-]/g, "");
    if (sanitized === original) return;
    const cursor = input.selectionStart ?? sanitized.length;
    const removedBeforeCursor =
      original.slice(0, cursor).length -
      original.slice(0, cursor).replace(/[^0-9.-]/g, "").length;
    input.value = sanitized;
    const newCursor = cursor - removedBeforeCursor;
    input.setSelectionRange(newCursor, newCursor);
  }

  // Up/Down only — bound to the text input, where Left/Right must stay free
  // for native caret movement.
  private onInputKeyDown(e: KeyboardEvent) {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();
    this.stepValue(e.key === "ArrowUp" ? 1 : -1);
  }

  // Up/Down/Left/Right — bound to the slider, which has no text caret to
  // protect, matching the standard ARIA slider keyboard pattern.
  private onSliderKeyDown(e: KeyboardEvent) {
    let direction = 0;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") direction = 1;
    else if (e.key === "ArrowDown" || e.key === "ArrowLeft") direction = -1;
    else return;
    e.preventDefault();
    this.stepValue(direction);
  }

  private stepValue(direction: number) {
    const step = this.step ?? 1;
    const stepDecimals = step.toString().split(".")[1]?.length || 0;
    this.setValue((this.value + direction * step).toFixed(stepDecimals));
  }

  /**
   * Parses, clamps, and commits a raw string value (from the input, a slider
   * drag, or a keyboard step). Called with `_input.value` possibly `undefined`
   * if invoked before the first render (e.g. `el.value = 5` right after
   * `document.createElement`) — in that case `_value` is still updated, just
   * not mirrored to the (not-yet-existing) DOM input; the next render picks it
   * up via `.value=${this.value.toString()}`.
   */
  private setValue(_value: string) {
    const { value: input } = this._input;

    let value = _value;
    value = value.replace(/[^0-9.-]/g, ""); // Only allow numbers, dots, and minus
    value = value.replace(/(\..*)\./g, "$1"); // Only allow one dot
    if (value.endsWith(".")) return;
    if (value.lastIndexOf("-") > 0) {
      value = value[0] + value.substring(1).replace(/-/g, "");
    }
    if (value === "-" || value === "-0") return;

    let numericValue = Number(value);

    if (Number.isNaN(numericValue)) return;

    numericValue =
      this.min !== undefined ? Math.max(numericValue, this.min) : numericValue;
    numericValue =
      this.max !== undefined ? Math.min(numericValue, this.max) : numericValue;

    if (this.value !== numericValue) {
      this._value = numericValue;
      if (input) input.value = this.value.toString();
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }

  private onBlur() {
    if (this._escapeKeyListener) {
      window.removeEventListener("keydown", this._escapeKeyListener);
      this._escapeKeyListener = undefined;
    }
    const { value: input } = this._input;
    if (!input) return;
    // Re-run the full parse/clamp cycle (not just the NaN case) so text typed
    // out of range (e.g. "999" with max=100) is corrected on blur too, not
    // just when a "change" event happens to fire.
    this.setValue(input.value);
    input.value = this.value.toString();
  }

  private onSliderMouseDown(e: MouseEvent) {
    document.body.style.cursor = "w-resize";
    const { clientX: startPosition } = e;
    const initialValue = this.value;
    let mouseMove = false;
    const onMouseMove = (e: MouseEvent) => {
      mouseMove = true;
      const { clientX: endPosition } = e;
      const step = this.step ?? 1;
      const stepDecimals = step.toString().split(".")[1]?.length || 0;
      const hardness = 1 / (this.sensitivity ?? 1);
      const calc = (endPosition - startPosition) / hardness;
      if (Math.floor(Math.abs(calc)) !== Math.abs(calc)) return;
      const value = initialValue + calc * step;
      this.setValue(value.toFixed(stepDecimals));
    };
    const onDragBlur = () => {
      this.slider = true;
      this.removeEventListener("blur", onDragBlur);
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      this._sliderMouseMove = undefined;
      this._sliderMouseUp = undefined;
      document.body.style.cursor = "default";
      if (mouseMove) {
        mouseMove = false;
      } else {
        this.addEventListener("blur", onDragBlur);
        this.slider = false;
        requestAnimationFrame(() => this.focus());
      }
    };
    this._sliderMouseMove = onMouseMove;
    this._sliderMouseUp = onMouseUp;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  private onFocus() {
    if (this._escapeKeyListener) {
      window.removeEventListener("keydown", this._escapeKeyListener);
    }
    this._escapeKeyListener = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      this.blur();
    };
    window.addEventListener("keydown", this._escapeKeyListener);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.min !== undefined && this.min > this._value) this._value = this.min;
    if (this.max !== undefined && this.max < this._value) this._value = this.max;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._sliderMouseMove) {
      document.removeEventListener("mousemove", this._sliderMouseMove);
      this._sliderMouseMove = undefined;
    }
    if (this._sliderMouseUp) {
      document.removeEventListener("mouseup", this._sliderMouseUp);
      this._sliderMouseUp = undefined;
    }
    if (this._escapeKeyListener) {
      window.removeEventListener("keydown", this._escapeKeyListener);
      this._escapeKeyListener = undefined;
    }
  }

  // Re-clamp the current value whenever `min`/`max` change after the fact —
  // otherwise `el.value = 150` followed by `el.max = 100` left `_value` at the
  // stale, now out-of-range 150 until the next user interaction.
  protected updated(changedProperties: PropertyValues<this>) {
    if (!changedProperties.has("min") && !changedProperties.has("max")) return;
    let clamped = this._value;
    if (this.min !== undefined) clamped = Math.max(clamped, this.min);
    if (this.max !== undefined) clamped = Math.min(clamped, this.max);
    if (clamped !== this._value) this._value = clamped;
  }

  /**
   * Sets focus to the input element of the number input component.
   * This method is useful for programmatically focusing the input element, for example,
   * in response to a user action or to emphasize the input in the UI.
   *
   * If the input element reference is not available (not yet rendered or disconnected),
   * this method will do nothing.
   */
  focus(options?: FocusOptions) {
    const { value } = this._input;
    if (!value) return;
    value.focus(options);
  }

  private renderRegular() {
    return html`
      ${this.pref
        ? html`<bim-label class="affix" @mousedown=${this.onSliderMouseDown}
            >${this.pref}</bim-label
          >`
        : null}
      <input
        ${ref(this._input)}
        type="text"
        role="spinbutton"
        aria-label=${this.label || this.name || "Number Input"}
        aria-valuenow=${this.value}
        aria-valuemin=${ifDefined(this.min)}
        aria-valuemax=${ifDefined(this.max)}
        size="1"
        @input=${this.onInput}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        @keydown=${this.onInputKeyDown}
        .value=${this.value.toString()}
      />
      ${this.suffix
        ? html`<bim-label class="affix" @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`
        : null}
    `;
  }

  // Only invoked while `slider` is true, so the normalized-position math (and
  // the CSS custom property write) never runs on the regular-input render path.
  private renderSlider() {
    const min = this.min ?? -Infinity;
    const max = this.max ?? +Infinity;
    const normalizedValue = (100 * (this.value - min)) / (max - min);
    this.style.setProperty(
      "--_number-input-slider-pct",
      Number.isFinite(normalizedValue) ? `${normalizedValue}%` : "0%",
    );
    return html`
      <div
        class="slider"
        role="slider"
        tabindex="0"
        aria-label=${this.label || this.name || "Slider"}
        aria-valuenow=${this.value}
        aria-valuemin=${ifDefined(this.min)}
        aria-valuemax=${ifDefined(this.max)}
        @mousedown=${this.onSliderMouseDown}
        @keydown=${this.onSliderKeyDown}
      >
        <div class="slider-indicator"></div>
        ${this.pref
          ? html`<bim-label class="affix slider-affix pref"
              >${`${this.pref}: `}</bim-label
            >`
          : null}
        <bim-label class="affix slider-affix">${this.value}</bim-label>
        ${this.suffix
          ? html`<bim-label class="affix slider-affix">${this.suffix}</bim-label>`
          : null}
      </div>
    `;
  }

  protected render() {
    const title = `${this.label || this.name || this.pref ? `${this.label || this.name || this.pref}: ` : ""}${this.value}${this.suffix ?? ""}`;

    return html`
      <div class="parent">
        ${this.label || this.icon
          ? html`<bim-label .icon=${this.icon}>${this.label}</bim-label>`
          : null}
        <div class="input" title=${title}>
          ${this.slider ? this.renderSlider() : this.renderRegular()}
        </div>
      </div>
    `;
  }
}
