import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { styleMap } from "lit/directives/style-map.js";
import { HasName, HasValue } from "../../core/types";

export interface SliderMark {
  /** The numeric position of this mark on the slider axis. */
  value: number;
  /** Optional text rendered below the mark dot. */
  label?: string;
}

export interface SliderChangedEventDetail {
  value: number | [number, number];
}

/**
 * A custom slider web component for BIM applications. HTML tag: bim-slider
 */
export class Slider extends LitElement implements HasValue, HasName {
  static styles = css`
    :host {
      display: block;
      flex: 1;
      user-select: none;
    }

    /* ── Track wrapper ────────────────────────────────────────── */
    .track-wrapper {
      position: relative;
      height: var(--bim-slider_track--h, 0.25rem);
      margin: 0.75rem var(--bim-slider--mx, 0.5rem);
      display: flex;
      align-items: center;
    }

    /* ── Rail ─────────────────────────────────────────────────── */
    .rail {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--bim-slider_rail--bdrs, var(--bim-ui_size-4xs));
      background-color: var(
        --bim-slider_rail--bgc,
        var(--bim-ui_bg-contrast-20)
      );
    }

    /* ── Track (filled portion) ───────────────────────────────── */
    .track {
      position: absolute;
      height: 100%;
      border-radius: var(--bim-slider_track--bdrs, var(--bim-ui_size-4xs));
      background-color: var(--bim-slider_track--bgc, var(--bim-ui_main-base));
      pointer-events: none;
    }

    /* ── Thumb ────────────────────────────────────────────────── */
    .thumb {
      position: absolute;
      width: var(--bim-slider_thumb--sz, 0.875rem);
      height: var(--bim-slider_thumb--sz, 0.875rem);
      border-radius: 50%;
      background-color: var(--bim-slider_thumb--bgc, var(--bim-ui_main-base));
      transform: translate(-50%, -50%);
      top: 50%;
      cursor: pointer;
      transition: box-shadow 0.15s;
      z-index: 2;
    }

    .thumb:hover,
    .thumb[data-active] {
      box-shadow: 0 0 0 0.5rem
        var(
          --bim-slider_thumb-focus--shadow,
          color-mix(in srgb, var(--bim-ui_main-base) 20%, transparent)
        );
    }

    /* ── Value label (tooltip) ────────────────────────────────── */
    .value-label {
      position: absolute;
      bottom: calc(100% + 0.5rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: var(
        --bim-slider_value-label--bgc,
        var(--bim-ui_bg-contrast-80)
      );
      color: var(--bim-slider_value-label--c, var(--bim-ui_bg-base));
      font-size: var(--bim-slider_value-label--fz, var(--bim-ui_size-xs));
      padding: 0.125rem 0.375rem;
      border-radius: var(
        --bim-slider_value-label--bdrs,
        var(--bim-ui_size-4xs)
      );
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .thumb:hover .value-label,
    .thumb[data-active] .value-label {
      opacity: 1;
    }

    /* ── Marks ────────────────────────────────────────────────── */
    .mark {
      position: absolute;
      width: var(--bim-slider_mark--sz, 0.25rem);
      height: var(--bim-slider_mark--sz, 0.25rem);
      border-radius: 50%;
      background-color: var(
        --bim-slider_mark--bgc,
        var(--bim-ui_bg-contrast-40)
      );
      transform: translateX(-50%);
      pointer-events: none;
      z-index: 1;
    }

    .mark[data-active] {
      background-color: var(
        --bim-slider_mark-active--bgc,
        var(--bim-ui_bg-base)
      );
    }

    .mark-label {
      position: absolute;
      top: calc(100% + 0.375rem);
      transform: translateX(-50%);
      font-size: var(--bim-slider_mark-label--fz, var(--bim-ui_size-xs));
      color: var(--bim-slider_mark-label--c, var(--bim-ui_bg-contrast-60));
      white-space: nowrap;
      pointer-events: none;
      transform-origin: top left;
    }

    /* ── Mark label orientations ───────────────────────────────── */
    :host([mark-label-orientation="vertical"]) .mark-label {
      transform: rotate(90deg);
      transform-origin: top left;
    }

    :host([mark-label-orientation="diagonal"]) .mark-label {
      transform: translateX(-100%) rotate(-45deg);
      transform-origin: top right;
    }

    /* ── Hidden native input (a11y + keyboard) ────────────────── */
    input[type="range"] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
      margin: 0;
    }

    /* ── Disabled state ───────────────────────────────────────── */
    :host([disabled]) {
      opacity: 0.4;
      pointer-events: none;
    }

    /* ── Vertical orientation ─────────────────────────────────── */
    :host([vertical]) .track-wrapper {
      width: var(--bim-slider_track--h, 0.25rem);
      height: 100%;
      flex-direction: column;
      margin: var(--bim-slider--mx, 0.5rem) 0.75rem;
    }
  `;

  /**
   * The name of the slider. Useful for form integration.
   * @type {String}
   * @default undefined
   * @example <bim-slider name="volume"></bim-slider>
   */
  @property({ type: String, reflect: true })
  name?: string;

  /**
   * Optional label rendered above the track via bim-input.
   * @type {String}
   * @default undefined
   * @example <bim-slider label="Volume"></bim-slider>
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Optional Iconify icon shown in the label row.
   * @type {String}
   * @default undefined
   * @example <bim-slider icon="solar:volume-loud-bold" label="Volume"></bim-slider>
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * The minimum value of the slider.
   * @type {Number}
   * @default 0
   * @example <bim-slider min="0"></bim-slider>
   */
  @property({ type: Number, reflect: true })
  min = 0;

  /**
   * The maximum value of the slider.
   * @type {Number}
   * @default 100
   * @example <bim-slider max="100"></bim-slider>
   */
  @property({ type: Number, reflect: true })
  max = 100;

  /**
   * The granularity of each step. Set to null to snap only to marks.
   * @type {Number | null}
   * @default 1
   * @example <bim-slider step="10"></bim-slider>
   */
  @property({ type: Number, reflect: true })
  step: number | null = 1;

  /**
   * The larger step size used when the user holds Shift + Arrow key.
   * @type {Number}
   * @default 10
   * @example <bim-slider shift-step="10"></bim-slider>
   */
  @property({ type: Number, attribute: "shift-step", reflect: true })
  shiftStep = 10;

  /**
   * An array of mark objects ({ value, label? }) that define snap points.
   * When step is null, the thumb snaps only to these marks.
   * @type {SliderMark[]}
   * @default []
   * @example
   * slider.marks = [{ value: 0, label: 'Jan' }, { value: 6, label: 'Jul' }];
   */
  @property({ type: Array })
  marks: SliderMark[] = [];

  /**
   * Whether to show mark dots on the track even when step is not null.
   * @default false
   * @example <bim-slider show-marks></bim-slider>
   */
  @property({ type: Boolean, attribute: "show-marks", reflect: true })
  showMarks = false;

  private _value: number | [number, number] = 0;

  /**
   * The current value. Pass a tuple [number, number] to enable range mode
   * (two thumbs). Changing this property updates the rendered thumb position(s).
   * @type {number | [number, number]}
   * @default 0
   * @example <bim-slider value="50"></bim-slider>
   * @example slider.value = [20, 80];   // range mode
   */
  @property({ attribute: false })
  set value(v: number | [number, number]) {
    this._value = Array.isArray(v)
      ? ([this._clamp(v[0]), this._clamp(v[1])].sort((a, b) => a - b) as [
          number,
          number,
        ])
      : this._clamp(v);
    this.requestUpdate();
  }

  get value(): number | [number, number] {
    return this._value;
  }

  /**
   * Controls when the value label (tooltip) is displayed.
   * - `"auto"` — shown on hover/drag
   * - `"on"`   — always visible
   * - `"off"`  — never shown
   * @default "auto"
   * @example <bim-slider value-label-display="on"></bim-slider>
   */
  @property({ type: String, attribute: "value-label-display", reflect: true })
  valueLabelDisplay: "auto" | "on" | "off" = "auto";

  /**
   * A format function or fixed string to transform the displayed value in the
   * value label. Receives the raw numeric value and returns a string.
   * @type {((value: number) => string) | string}
   * @default undefined
   * @example slider.valueLabelFormat = (v) => `${v}°C`;
   */
  @property({ attribute: false })
  valueLabelFormat?: ((value: number) => string) | string;

  /**
   * A scale function to transform the internal numeric value for display
   * purposes only (does not affect snapping or stored value).
   * @type {(value: number) => number}
   * @default undefined
   * @example slider.scale = (x) => Math.pow(2, x);
   */
  @property({ attribute: false })
  scale?: (value: number) => number;

  /**
   * When true, swapping thumbs is disabled in range mode.
   * @default false
   * @example <bim-slider disable-swap></bim-slider>
   */
  @property({ type: Boolean, attribute: "disable-swap", reflect: true })
  disableSwap = false;

  /**
   * Disables the slider, preventing all interaction.
   * @default false
   * @example <bim-slider disabled></bim-slider>
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Renders the slider vertically instead of horizontally.
   * @default false
   * @example <bim-slider vertical></bim-slider>
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * Controls the orientation of mark labels below the track.
   * Useful when many marks have long labels that would overlap.
   * - `"horizontal"` — default, labels rendered flat
   * - `"vertical"` — labels rotated -90° (bottom-up)
   * - `"diagonal"` — labels rotated -45°
   * @default "horizontal"
   * @example <bim-slider mark-label-orientation="diagonal"></bim-slider>
   */
  @property({
    type: String,
    attribute: "mark-label-orientation",
    reflect: true,
  })
  markLabelOrientation: "horizontal" | "vertical" | "diagonal" = "horizontal";

  // Index of the thumb currently being dragged (-1 = none)
  @state() private _activeThumb = -1;

  /** Fired continuously while dragging. */
  readonly onValueChange = new Event("change");

  /** Fired once when the thumb is released (mouseup / touchend). */
  readonly onChangeCommitted = new Event("changecommitted");

  /** Clamp a value between min and max. */
  private _clamp(v: number): number {
    return Math.min(Math.max(v, this.min), this.max);
  }

  /** Convert a value to a 0–100 percentage along the track. */
  private _valueToPercent(v: number): number {
    return ((v - this.min) * 100) / (this.max - this.min);
  }

  /** Convert a 0–1 fraction (cursor position) to a raw value. */
  private _percentToValue(pct: number): number {
    return (this.max - this.min) * pct + this.min;
  }

  /** Round a raw value to the nearest step, anchored at min. */
  private _roundToStep(v: number, step: number): number {
    const nearest = Math.round((v - this.min) / step) * step + this.min;
    const decimals = (step.toString().split(".")[1] ?? "").length;
    return Number(nearest.toFixed(decimals));
  }

  /** Find the index of the closest value in an array. */
  private _findClosest(arr: number[], target: number): number {
    return arr.reduce(
      (best, v, i) =>
        Math.abs(v - target) < Math.abs(arr[best] - target) ? i : best,
      0,
    );
  }

  /** Compute the snapped value from a 0–1 cursor fraction. */
  private _getSnappedValue(fraction: number): number {
    let raw = this._percentToValue(fraction);
    if (this.step !== null) {
      raw = this._roundToStep(raw, this.step);
    } else if (this.marks.length > 0) {
      const markValues = this.marks.map((m) => m.value);
      raw = markValues[this._findClosest(markValues, raw)];
    }
    return this._clamp(raw);
  }

  /** Format a value for display in the value label. */
  private _formatValue(v: number): string {
    const scaled = this.scale ? this.scale(v) : v;
    if (typeof this.valueLabelFormat === "function")
      return this.valueLabelFormat(scaled);
    if (typeof this.valueLabelFormat === "string") return this.valueLabelFormat;
    return String(scaled);
  }

  /**
   * Compute the cursor fraction (0–1) from a mouse or touch event
   * relative to the track element bounding rect.
   */
  private _getFraction(clientX: number, clientY: number): number {
    const wrapper = this.shadowRoot?.querySelector(
      ".track-wrapper",
    ) as HTMLElement;
    if (!wrapper) return 0;
    const rect = wrapper.getBoundingClientRect();
    if (this.vertical) {
      return 1 - (clientY - rect.top) / rect.height;
    }
    return (clientX - rect.left) / rect.width;
  }

  /** Handle mousedown / touchstart on the track wrapper. */
  private _onPointerDown(e: MouseEvent | TouchEvent) {
    if (this.disabled) return;
    if (e instanceof MouseEvent && e.button !== 0) return;

    const { clientX, clientY } =
      e instanceof TouchEvent ? e.changedTouches[0] : e;

    const fraction = this._getFraction(clientX, clientY);
    const snapped = this._getSnappedValue(fraction);

    // Determine which thumb to move
    let thumbIndex = 0;
    if (Array.isArray(this._value)) {
      const distances = this._value.map((v) => Math.abs(v - snapped));
      thumbIndex = distances[0] <= distances[1] ? 0 : 1;
    }

    this._activeThumb = thumbIndex;
    this._updateValue(snapped, thumbIndex);

    // Register global move/end listeners
    const onMove = (ev: MouseEvent | TouchEvent) => {
      const { clientX: cx, clientY: cy } =
        ev instanceof TouchEvent ? ev.changedTouches[0] : (ev as MouseEvent);
      const f = this._getFraction(cx, cy);
      const s = this._getSnappedValue(f);
      this._updateValue(s, thumbIndex);
    };

    const onEnd = () => {
      this._activeThumb = -1;
      this.dispatchEvent(this.onChangeCommitted);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove as EventListener);
      document.removeEventListener("touchend", onEnd);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove as EventListener, {
      passive: true,
    });
    document.addEventListener("touchend", onEnd);
  }

  /** Apply the new snapped value and fire onChange. */
  private _updateValue(snapped: number, thumbIndex: number) {
    if (Array.isArray(this._value)) {
      const next: [number, number] = [...this._value] as [number, number];
      next[thumbIndex] = snapped;
      if (!this.disableSwap) next.sort((a, b) => a - b);
      this._value = next;
    } else {
      this._value = snapped;
    }
    this.requestUpdate();
    this.dispatchEvent(this.onValueChange);
  }

  private _onKeyDown(e: KeyboardEvent, thumbIndex: number) {
    const keys = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "PageUp",
      "PageDown",
      "Home",
      "End",
    ];
    if (!keys.includes(e.key)) return;
    e.preventDefault();

    const current = Array.isArray(this._value)
      ? this._value[thumbIndex]
      : this._value;
    const step = this.step ?? 1;
    const bigStep = this.shiftStep;
    const useShift = e.shiftKey;

    let next: number | null = null;
    const markValues = this.marks.map((m) => m.value);

    if (this.step !== null) {
      const s = useShift ? bigStep : step;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          next = this._clamp(current + s);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          next = this._clamp(current - s);
          break;
        case "PageUp":
          next = this._clamp(current + bigStep);
          break;
        case "PageDown":
          next = this._clamp(current - bigStep);
          break;
        case "Home":
          next = this.min;
          break;
        case "End":
          next = this.max;
          break;
      }
    } else if (markValues.length > 0) {
      const idx = this._findClosest(markValues, current);
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          next = markValues[Math.min(idx + 1, markValues.length - 1)];
          break;
        case "ArrowLeft":
        case "ArrowDown":
          next = markValues[Math.max(idx - 1, 0)];
          break;
        case "Home":
          next = markValues[0];
          break;
        case "End":
          next = markValues[markValues.length - 1];
          break;
      }
    }

    if (next !== null) {
      this._updateValue(next, thumbIndex);
      this.dispatchEvent(this.onChangeCommitted);
    }
  }

  protected render() {
    const isRange = Array.isArray(this._value);
    const values = isRange
      ? (this._value as [number, number])
      : [this._value as number];

    // Track fill geometry
    const startPct = isRange ? this._valueToPercent(values[0]) : 0;
    const endPct = this._valueToPercent(values[values.length - 1]);

    const trackStyle = this.vertical
      ? { bottom: `${startPct}%`, height: `${endPct - startPct}%` }
      : { left: `${startPct}%`, width: `${endPct - startPct}%` };

    // Resolve mark list
    const effectiveMarks: SliderMark[] =
      this.showMarks && this.step !== null
        ? Array.from(
            {
              length: Math.floor((this.max - this.min) / this.step) + 1,
            },
            (_, i) => ({ value: this.min + this.step! * i }),
          )
        : this.marks;

    return html`
      ${when(
        this.label || this.icon,
        () => html`
          <bim-input .label=${this.label} .icon=${this.icon}></bim-input>
        `,
      )}

      <div
        class="track-wrapper"
        @mousedown=${this._onPointerDown}
        @touchstart=${this._onPointerDown}
      >
        <div class="rail"></div>
        <div class="track" style=${styleMap(trackStyle)}></div>

        ${effectiveMarks.map((mark) => {
          const pct = this._valueToPercent(mark.value);
          const isActive = isRange
            ? mark.value >= values[0] && mark.value <= values[1]
            : mark.value <= values[0];
          return html`
            <div
              class="mark"
              ?data-active=${isActive}
              style=${styleMap(
                this.vertical ? { bottom: `${pct}%` } : { left: `${pct}%` },
              )}
            ></div>
            ${when(
              mark.label,
              () => html`
                <span
                  class="mark-label"
                  style=${styleMap(
                    this.vertical ? { bottom: `${pct}%` } : { left: `${pct}%` },
                  )}
                >
                  ${mark.label}
                </span>
              `,
            )}
          `;
        })}
        ${values.map((v, i) => {
          const pct = this._valueToPercent(v);
          const isActive = this._activeThumb === i;
          return html`
            <div
              class="thumb"
              ?data-active=${isActive || this.valueLabelDisplay === "on"}
              style=${styleMap(
                this.vertical
                  ? { bottom: `${pct}%`, left: "50%" }
                  : { left: `${pct}%`, top: "50%" },
              )}
            >
              ${when(
                this.valueLabelDisplay !== "off",
                () => html`
                  <div class="value-label">${this._formatValue(v)}</div>
                `,
              )}
            </div>

            <input
              type="range"
              .min=${String(this.min)}
              .max=${String(this.max)}
              .step=${this.step !== null ? String(this.step) : "any"}
              .value=${String(v)}
              aria-label=${this.label ??
              (isRange ? `Thumb ${i + 1}` : "Slider")}
              aria-valuemin=${this.min}
              aria-valuemax=${this.max}
              aria-valuenow=${v}
              data-index=${i}
              ?disabled=${this.disabled}
              @keydown=${(e: KeyboardEvent) => this._onKeyDown(e, i)}
            />
          `;
        })}
      </div>
    `;
  }
}
