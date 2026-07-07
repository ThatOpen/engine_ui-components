import { LitElement, css, html, PropertyValues } from "lit";
import { property, state, query } from "lit/decorators.js";
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
export class Slider extends LitElement implements HasValue<number | [number, number]>, HasName {
  static styles = css`
    :host {
      display: block;
      user-select: none;
    }

    /* ── Track row (track + side value) ──────────────────────── */
    .track-row {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* ── Track wrapper ────────────────────────────────────────── */
    .track-wrapper {
      flex: 1;
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
      transition: box-shadow var(--bim-slider_thumb--transition-duration, 0.15s);
      z-index: var(--bim-slider_thumb--z, 2);
    }

    .thumb:hover,
    .thumb[data-active] {
      box-shadow: 0 0 0 0.5rem
        var(
          --bim-slider_thumb-focus--shadow,
          color-mix(in srgb, var(--bim-ui_main-base) 20%, transparent)
        );
    }

    /* ── Hidden native input (a11y + keyboard) ────────────────── */
    /* Sized/positioned to exactly cover its own thumb (not the whole track),
       so a focus-visible ring here reads as "this thumb is focused" rather
       than drawing around the entire slider. Kept pointer-events: none —
       the drag interaction is driven by .track-wrapper's own mousedown
       handler; removing it would let the native input's own click/drag
       behavior compete with that. Click-to-focus is instead done explicitly
       in _onPointerDown (inputEl.focus()), so keyboard users still get a
       correct, visible focus target without touching the hit-testing at all. */
    .thumb input[type="range"] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
      margin: 0;
    }

    .thumb input[type="range"]:focus-visible {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: 2px;
      border-radius: 50%;
    }

    /* ── Side value label (next to the track) ────────────────── */
    .track-row bim-label.value {
      flex-shrink: 0;
      font-variant-numeric: tabular-nums;
    }

    /* ── Value label (tooltip) ────────────────────────────────── */
    .value-label {
      position: absolute;
      bottom: calc(100% + 0.5rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: var(
        --bim-slider_value-label--bgc,
        var(--bim-ui_bg-contrast-10)
      );
      color: var(--bim-slider_value-label--c, var(--bim-ui_bg-contrast-80));
      box-shadow: var(
        --bim-slider_value-label--shadow,
        0 0 10px 3px rgba(0, 0, 0, 0.2)
      );
      font-size: var(--bim-slider_value-label--fz, var(--bim-ui_size-sm));
      padding: var(--bim-slider_value-label--p, 0.125rem 0.375rem);
      border-radius: var(--bim-slider_value-label--bdrs, 4px);
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--bim-slider_value-label--transition-duration, 0.15s);
    }

    .thumb:hover .value-label,
    .thumb[data-active] .value-label {
      opacity: 1;
    }

    @media (prefers-reduced-motion: reduce) {
      .thumb,
      .value-label {
        transition: none;
      }
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
      z-index: var(--bim-slider_mark--z, 1);
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
      transform: var(--bim-slider_mark-label--transform, translateX(-50%));
      font-size: var(--bim-slider_mark-label--fz, var(--bim-ui_size-xs));
      color: var(--bim-slider_mark-label--c, var(--bim-ui_bg-contrast-60));
      white-space: nowrap;
      pointer-events: none;
      transform-origin: top left;
    }

    /* ── Mark label orientations ───────────────────────────────── */
    :host([mark-label-orientation="vertical"]) .mark-label {
      transform: var(--bim-slider_mark-label--transform, translateX(-50%) rotate(90deg));
      transform-origin: top left;
    }

    :host([mark-label-orientation="diagonal"]) .mark-label {
      transform: var(--bim-slider_mark-label--transform, translateX(-100%) rotate(-45deg));
      transform-origin: top right;
    }

    /* ── Disabled state ───────────────────────────────────────── */
    :host([disabled]) {
      opacity: 0.4;
      pointer-events: none;
    }

    /* ── Vertical orientation ─────────────────────────────────── */
    :host([vertical]) .track-wrapper {
      width: var(--bim-slider_track--w, var(--bim-slider_track--h, 0.25rem));
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
   * Optional label rendered above the track.
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
   * Reflected via a custom converter (not the default `String(null)`), so
   * `step = null` round-trips through the `step="none"` attribute correctly
   * instead of serializing as the literal string `"null"`.
   * @type {Number | null}
   * @default 1
   * @example <bim-slider step="10"></bim-slider>
   */
  @property({
    reflect: true,
    converter: {
      fromAttribute: (value: string | null): number | null => {
        if (value === null) return 1;
        if (value.toLowerCase() === "none") return null;
        const n = Number(value);
        return Number.isFinite(n) ? n : 1;
      },
      toAttribute: (value: number | null): string | null =>
        value === null ? "none" : String(value),
    },
  })
  step: number | null = 1;

  /**
   * The larger step size used when the user holds Shift + Arrow key, and
   * (independent of Shift) the amount `PageUp`/`PageDown` jump by — matching
   * the native `<input type="range">` convention where page keys always use
   * the larger increment regardless of modifier keys.
   * @type {Number}
   * @default 10
   * @example <bim-slider shift-step="10"></bim-slider>
   */
  @property({ type: Number, attribute: "shift-step", reflect: true })
  shiftStep = 10;

  /**
   * An array of mark objects (`{ value, label? }`) that define snap points.
   * When step is null, the thumb snaps only to these marks.
   *
   * Property-only: with no custom `converter`, Lit's `type: Array` cannot
   * parse a JSON array out of an HTML attribute string, so `marks` can only
   * be set via JavaScript (`slider.marks = [...]`), not as a `marks="..."`
   * HTML attribute.
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

  @state()
  private _value: number | [number, number] = 0;

  /**
   * The current value. Pass a tuple [number, number] to enable range mode
   * (two thumbs). Changing this property updates the rendered thumb position(s).
   * When `disableSwap` is set, an out-of-order tuple is kept as given instead
   * of being silently sorted — consistent with how dragging behaves.
   * @type {number | [number, number]}
   * @default 0
   * @example <bim-slider value="50"></bim-slider>
   * @example slider.value = [20, 80];   // range mode
   */
  @property({ attribute: false })
  set value(v: number | [number, number]) {
    if (Array.isArray(v)) {
      const clamped: [number, number] = [this._clamp(v[0]), this._clamp(v[1])];
      this._value = this.disableSwap
        ? clamped
        : (clamped.sort((a, b) => a - b) as [number, number]);
    } else {
      this._value = this._clamp(v);
    }
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
   * A format function to transform the displayed value in the value label.
   * Receives the raw numeric value and returns a string.
   * @type {(value: number) => string}
   * @default undefined
   * @example slider.valueLabelFormat = (v) => `${v}°C`;
   */
  @property({ attribute: false })
  valueLabelFormat?: (value: number) => string;

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
   * When true, swapping thumbs is disabled in range mode: dragging one thumb
   * past the other no longer reorders the value tuple (the thumb stops at
   * the other thumb's position instead of crossing it).
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

  /** @deprecated Listen for the "change" event on the element instead: `el.addEventListener("change", fn)`. */
  readonly onValueChange = new Event("change");

  @query(".track-wrapper") private _trackWrapper?: HTMLElement;

  private _effectiveMarks: SliderMark[] = [];
  private _formatCache?: { key: string; values: string[] };

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
    if (arr.length === 0) return -1;
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
    return String(scaled);
  }

  /**
   * Formats every displayed value at once, memoized against the exact set of
   * values plus the `scale`/`valueLabelFormat` functions in use — avoids
   * re-invoking a (possibly expensive) consumer-supplied `scale` on renders
   * triggered by something unrelated to the value itself (e.g. `disabled`).
   */
  private _getFormattedValues(values: number[]): string[] {
    const key = `${values.join(",")}|${this.scale}|${this.valueLabelFormat}`;
    if (this._formatCache?.key === key) return this._formatCache.values;
    const formatted = values.map((v) => this._formatValue(v));
    this._formatCache = { key, values: formatted };
    return formatted;
  }

  /**
   * Reserves stable width for the side value label so the track doesn't
   * visibly resize (and its right edge doesn't jump) as the displayed
   * value's digit count changes between renders. The value is always
   * clamped within [min, max], so the longer of those two formatted
   * extremes is a safe upper bound on how wide the label will ever need
   * to be. The extra 0.5ch covers characters (signs, the range dash) that
   * don't measure exactly like a "0" under `ch`.
   */
  private _getValueLabelMinWidth(isRange: boolean): string {
    const minStr = this._formatValue(this.min);
    const maxStr = this._formatValue(this.max);
    const longest = isRange
      ? `${minStr} – ${maxStr}`
      : minStr.length >= maxStr.length
        ? minStr
        : maxStr;
    return `${longest.length + 0.5}ch`;
  }

  private _keydownHandlers: Array<(e: KeyboardEvent) => void> = [];

  /** A stable (not recreated per render) keydown handler bound to a given thumb index. */
  private _getKeydownHandler(i: number) {
    return (this._keydownHandlers[i] ??= (e: KeyboardEvent) =>
      this._onKeyDown(e, i));
  }

  /**
   * Compute the cursor fraction (0–1) from a mouse or touch event
   * relative to the track element bounding rect.
   */
  private _getFraction(clientX: number, clientY: number): number {
    const wrapper = this._trackWrapper;
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
    let activeIndex = 0;
    if (Array.isArray(this._value)) {
      const distances = this._value.map((v) => Math.abs(v - snapped));
      activeIndex = distances[0] <= distances[1] ? 0 : 1;
    }

    this._activeThumb = activeIndex;
    // Click-to-focus for the accessible input: it's `pointer-events: none`
    // (so it never competes with this custom drag handler for hit-testing),
    // so a real click never focuses it on its own. Do it explicitly instead.
    this._focusInput(activeIndex);
    activeIndex = this._updateValue(snapped, activeIndex);
    this._activeThumb = activeIndex;

    // Register global move/end listeners
    const onMove = (ev: MouseEvent | TouchEvent) => {
      const { clientX: cx, clientY: cy } =
        ev instanceof TouchEvent ? ev.changedTouches[0] : (ev as MouseEvent);
      const f = this._getFraction(cx, cy);
      const s = this._getSnappedValue(f);
      activeIndex = this._updateValue(s, activeIndex);
      this._activeThumb = activeIndex;
    };

    const onEnd = () => {
      this._activeThumb = -1;
      this._dispatchChangeCommitted();
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

  private _focusInput(index: number) {
    const inputs = this.shadowRoot?.querySelectorAll<HTMLInputElement>(
      'input[type="range"]',
    );
    inputs?.[index]?.focus({ preventScroll: true });
  }

  private _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent<SliderChangedEventDetail>("change", {
        detail: { value: this._value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _dispatchChangeCommitted() {
    this.dispatchEvent(
      new CustomEvent<SliderChangedEventDetail>("changecommitted", {
        detail: { value: this._value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Apply the new snapped value and fire "change". Returns the index the
   * moved thumb ends up at — when a swap happens (two-thumb mode, dragging
   * one thumb past the other, `disableSwap` false), that's the OTHER index,
   * so callers tracking "which thumb is under the pointer" during a drag can
   * keep following the right one instead of the one it started as.
   */
  private _updateValue(snapped: number, thumbIndex: number): number {
    let resolvedIndex = thumbIndex;
    if (Array.isArray(this._value)) {
      const next: [number, number] = [...this._value] as [number, number];
      next[thumbIndex] = snapped;
      if (!this.disableSwap && next[0] > next[1]) {
        next.sort((a, b) => a - b);
        resolvedIndex = thumbIndex === 0 ? 1 : 0;
      }
      this._value = next;
    } else {
      this._value = snapped;
    }
    this._dispatchChange();
    return resolvedIndex;
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
    } else {
      // step is null AND there are no marks — nothing to snap to. Fall back
      // to a step of 1 so keyboard users aren't left with a completely dead
      // control (see the misconfiguration warning in `willUpdate`).
      const s = useShift ? bigStep : 1;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          next = this._clamp(current + s);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          next = this._clamp(current - s);
          break;
        case "Home":
          next = this.min;
          break;
        case "End":
          next = this.max;
          break;
      }
    }

    if (next !== null) {
      this._updateValue(next, thumbIndex);
      this._dispatchChangeCommitted();
    }
  }

  protected willUpdate(changed: PropertyValues) {
    if (changed.has("min") || changed.has("max")) {
      if (this.min >= this.max) {
        console.error(
          `[bim-slider] min (${this.min}) must be less than max (${this.max}).`,
        );
      }
      // Re-clamp the existing value — covers both a runtime min/max change
      // AND the HTML attribute-upgrade race (value arriving before min/max).
      this._value = Array.isArray(this._value)
        ? ([this._clamp(this._value[0]), this._clamp(this._value[1])].sort(
            (a, b) => a - b,
          ) as [number, number])
        : this._clamp(this._value);
    }

    if (changed.has("step") && this.step !== null && this.step <= 0) {
      console.error(`[bim-slider] step (${this.step}) must be greater than 0.`);
    }

    if (
      (changed.has("step") || changed.has("marks")) &&
      this.step === null &&
      this.marks.length === 0
    ) {
      console.warn(
        "[bim-slider] step is null and marks is empty — the slider has no snap points. Set step or provide marks.",
      );
    }

    if (
      changed.has("showMarks") ||
      changed.has("step") ||
      changed.has("min") ||
      changed.has("max") ||
      changed.has("marks")
    ) {
      this._effectiveMarks =
        this.showMarks && this.step !== null
          ? Array.from(
              { length: Math.floor((this.max - this.min) / this.step) + 1 },
              (_, i) => ({ value: this.min + this.step! * i }),
            )
          : this.marks;
    }
  }

  protected updated() {
    this.setAttribute("aria-disabled", String(this.disabled));
    if (Array.isArray(this._value)) {
      this.setAttribute("role", "group");
      if (this.label) this.setAttribute("aria-label", this.label);
    } else {
      this.removeAttribute("role");
    }
  }

  protected render() {
    const isRange = Array.isArray(this._value);
    const values = isRange
      ? (this._value as [number, number])
      : [this._value as number];
    const formattedValues = this._getFormattedValues(values);

    // Track fill geometry
    const startPct = isRange ? this._valueToPercent(values[0]) : 0;
    const endPct = this._valueToPercent(values[values.length - 1]);

    const trackStyle = this.vertical
      ? { bottom: `${startPct}%`, height: `${endPct - startPct}%` }
      : { left: `${startPct}%`, width: `${endPct - startPct}%` };

    return html`
      ${when(
        this.label || this.icon,
        () => html`
          <bim-label .icon=${this.icon}>${this.label}</bim-label>
        `,
      )}

      <div class="track-row">
        <div
          class="track-wrapper"
          @mousedown=${this._onPointerDown}
          @touchstart=${this._onPointerDown}
        >
          <div class="rail"></div>
          <div class="track" style=${styleMap(trackStyle)}></div>

          ${this._effectiveMarks.map((mark) => {
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
            const thumbLabel =
              this.label ?? (isRange ? (i === 0 ? "Lower bound" : "Upper bound") : "Slider");
            return html`
              <div
                class="thumb"
                ?data-active=${isActive}
                style=${styleMap(
                  this.vertical
                    ? { bottom: `${pct}%`, left: "50%" }
                    : { left: `${pct}%`, top: "50%" },
                )}
              >
                ${when(
                  this.valueLabelDisplay !== "off",
                  () => html`
                    <div class="value-label">${formattedValues[i]}</div>
                  `,
                )}
                <input
                  type="range"
                  .min=${String(this.min)}
                  .max=${String(this.max)}
                  .step=${this.step !== null ? String(this.step) : "any"}
                  .value=${String(v)}
                  aria-label=${thumbLabel}
                  aria-valuemin=${this.min}
                  aria-valuemax=${this.max}
                  aria-valuenow=${v}
                  data-index=${i}
                  ?disabled=${this.disabled}
                  @keydown=${this._getKeydownHandler(i)}
                />
              </div>
            `;
          })}
        </div>

        ${when(
          !this.vertical && this.valueLabelDisplay !== "off",
          () => html`
            <bim-label
              class="value"
              style=${styleMap({ minWidth: this._getValueLabelMinWidth(isRange) })}
            >
              ${isRange
                ? `${formattedValues[0]} – ${formattedValues[1]}`
                : formattedValues[0]}
            </bim-label>
          `,
        )}
      </div>
    `;
  }
}
