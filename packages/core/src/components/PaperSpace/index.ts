import { LitElement, html, css, type TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";

/**
 * Paper sizes according to ISO 216 standard (in millimeters)
 */
type PaperSize = "A0" | "A1" | "A2" | "A3" | "A4";
type Orientation = "portrait" | "landscape";

/**
 * Paper size definitions in millimeters
 * ISO 216 standard dimensions
 */
const PAPER_SIZES: Record<PaperSize, { width: number; height: number }> = {
  A0: { width: 841, height: 1189 },
  A1: { width: 594, height: 841 },
  A2: { width: 420, height: 594 },
  A3: { width: 297, height: 420 },
  A4: { width: 210, height: 297 },
};

export class PaperSpace extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      overflow: visible;
      background: white;
      box-sizing: border-box;
    }

    .printable-area {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .drawing-slot {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
      min-width: 0;
      overflow: hidden;
    }

    .printable-area.debug {
      border: 1px dashed #999;
    }

    .calibration-ruler {
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: 100mm;
      height: 100mm;
      visibility: hidden;
      pointer-events: none;
    }

    .ruler-gizmo {
      position: absolute;
      background: rgba(255, 255, 0, 0.15);
      border: 1px solid #ff9800;
      cursor: move;
      user-select: none;
      z-index: 1000;
      padding: 4px 8px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .ruler-gizmo.vertical {
      flex-direction: column;
    }

    .ruler-gizmo:active {
      background: rgba(255, 255, 0, 0.3);
      cursor: grabbing;
    }

    .ruler-line {
      position: relative;
      background: #ff9800;
      border-radius: 2px;
    }

    .ruler-line.horizontal {
      height: 3px;
    }

    .ruler-line.vertical {
      width: 3px;
    }

    .ruler-tick {
      position: absolute;
      background: #ff9800;
    }

    .ruler-tick.horizontal {
      width: 1px;
      height: 8px;
      top: -2.5px;
    }

    .ruler-tick.vertical {
      width: 8px;
      height: 1px;
      left: -2.5px;
    }

    .ruler-tick.cm-marker.horizontal {
      height: 12px;
      top: -4.5px;
      width: 2px;
    }

    .ruler-tick.cm-marker.vertical {
      width: 12px;
      left: -4.5px;
      height: 2px;
    }

    .ruler-cm-label {
      position: absolute;
      color: #ff9800;
      font-weight: bold;
      font-size: 9px;
    }

    .ruler-cm-label.horizontal {
      top: -18px;
      transform: translateX(-50%);
    }

    .ruler-cm-label.vertical {
      left: -22px;
      transform: translateY(-50%);
    }

    .ruler-label {
      color: #ff9800;
      font-weight: bold;
      white-space: nowrap;
    }

    .ruler-rotate-btn {
      background: #ff9800;
      color: white;
      border: none;
      border-radius: 3px;
      padding: 4px 6px;
      cursor: pointer;
      font-size: 10px;
      font-weight: bold;
      line-height: 1;
    }

    .ruler-rotate-btn:hover {
      background: #f57c00;
    }

    .ruler-rotate-btn:active {
      background: #ef6c00;
    }
  `;

  /**
   * Human-readable label for this paper sheet.
   */
  @property({ type: String })
  label = "";

  /**
   * Sheet number (e.g. "A-01", "S-02"). Displayed alongside the label.
   */
  @property({ type: String })
  sheetNumber = "";

  /**
   * Paper size (ISO 216)
   */
  @property({ type: String })
  size: PaperSize = "A4";

  /**
   * Paper orientation
   */
  @property({ type: String })
  orientation: Orientation = "portrait";

  /**
   * Margin in millimeters (applies to all sides)
   */
  @property({ type: Number })
  margin = 10;

  /**
   * Enable debug mode (shows printable area border)
   */
  @property({ type: Boolean })
  debug = false;

  /**
   * Enable ruler for scale validation (debug tool)
   */
  @property({ type: Boolean, attribute: "ruler" })
  ruler = false;

  /**
   * Ruler length in millimeters
   */
  @property({ type: Number, attribute: "ruler-length" })
  rulerLength = 100; // 10cm default

  /**
   * Title block template function
   * Receives:
   * - mm: function to convert millimeters to pixel strings
   * - drawingArea: slot for the drawing area content
   * Developers can position the drawing area slot wherever they want in the template
   */
  @property({ attribute: false })
  titleBlockTemplate?: (
    mm: (mm: number) => string,
    drawingArea: TemplateResult,
    info: { label: string; sheetNumber: string }
  ) => TemplateResult;

  /**
   * Pixels per millimeter calibration value
   * This is measured at runtime and updated on resize
   */
  @state()
  private _pxPerMm = 3.7795275591; // Fallback: 96 DPI standard

  /**
   * Ruler gizmo position (x, y in pixels from top-left)
   */
  @state()
  private _rulerPosition = { x: 20, y: 20 };

  /**
   * Dragging state for ruler
   */
  @state()
  private _rulerDragging = false;

  /**
   * Ruler orientation
   */
  @state()
  private _rulerOrientation: "horizontal" | "vertical" = "horizontal";

  /**
   * Paper width in millimeters
   */
  get widthMm(): number {
    const baseDimensions = PAPER_SIZES[this.size];
    return this.orientation === "portrait"
      ? baseDimensions.width
      : baseDimensions.height;
  }

  /**
   * Paper height in millimeters
   */
  get heightMm(): number {
    const baseDimensions = PAPER_SIZES[this.size];
    return this.orientation === "portrait"
      ? baseDimensions.height
      : baseDimensions.width;
  }

  /**
   * Public getter for pxPerMm
   * Children can use this for their own metric calculations
   */
  get pxPerMm(): number {
    return this._pxPerMm;
  }

  /**
   * The element that represents the printable drawing area (inside the margin).
   * External renderers (e.g. SheetBoard) use this to compute scissor rects.
   */
  get drawingAreaEl(): HTMLElement {
    return this.shadowRoot!.querySelector(".printable-area") as HTMLElement;
  }

  /**
   * The element that wraps the drawing content slot.
   * When a `titleBlockTemplate` is set, this element occupies only the
   * drawing portion of the printable area (excluding the title block).
   * SheetBoard uses this to constrain viewport placement to the drawing area.
   */
  get drawingSlotEl(): HTMLElement | null {
    return this.shadowRoot?.querySelector(".drawing-slot") as HTMLElement ?? null;
  }

  /**
   * Convert millimeters to pixels
   */
  private mmToPx(mm: number): number {
    return mm * this._pxPerMm;
  }

  /**
   * Convert millimeters to CSS pixel string
   * Public API for developers to use in their title block templates
   */
  mm(mm: number): string {
    return `${this.mmToPx(mm)}px`;
  }

  /**
   * Calibrate pixels per millimeter by measuring a 100mm CSS element
   */
  private calibrate(): void {
    const ruler = this.shadowRoot?.querySelector(
      ".calibration-ruler"
    ) as HTMLElement;
    if (!ruler) return;

    // Force a reflow to ensure accurate measurement
    ruler.offsetHeight;

    // Measure the actual pixel width of the 100mm element
    const measuredPx = ruler.getBoundingClientRect().width;

    // Calculate pixels per millimeter
    if (measuredPx > 0) {
      this._pxPerMm = measuredPx / 100;
    }
  }

  /**
   * Media query listener for device pixel ratio changes
   * Detects monitor changes, OS scaling changes, etc.
   */
  private _mediaQueryList: MediaQueryList | null = null;
  private _mediaQueryListener: (() => void) | null = null;

  /**
   * Setup listener for devicePixelRatio changes
   */
  private setupDPRListener(): void {
    const currentDPR = window.devicePixelRatio || 1;
    // Create a media query that matches the current DPR
    this._mediaQueryList = window.matchMedia(
      `(resolution: ${currentDPR}dppx)`
    );

    this._mediaQueryListener = () => {
      // When DPR changes, recalibrate and setup new listener
      this.calibrate();
      this.requestUpdate();
      // Clean up old listener
      if (this._mediaQueryList && this._mediaQueryListener) {
        this._mediaQueryList.removeEventListener(
          "change",
          this._mediaQueryListener
        );
      }
      // Setup new listener for the new DPR
      this.setupDPRListener();
    };

    this._mediaQueryList.addEventListener("change", this._mediaQueryListener);
  }

  connectedCallback(): void {
    super.connectedCallback();

    // Initial calibration after first render
    this.updateComplete.then(() => {
      this.calibrate();
      // Setup listener for DPR changes (monitor change, OS scaling, etc.)
      this.setupDPRListener();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    // Clean up DPR listener
    if (this._mediaQueryList && this._mediaQueryListener) {
      this._mediaQueryList.removeEventListener(
        "change",
        this._mediaQueryListener
      );
    }
    this._mediaQueryList = null;
    this._mediaQueryListener = null;
    // Clean up ruler drag listeners
    this.removeRulerDragListeners();
  }

  /**
   * Ruler drag state
   */
  private _rulerDragStart = { x: 0, y: 0 };

  /**
   * Handle ruler mousedown
   */
  private handleRulerMouseDown(e: MouseEvent): void {
    e.preventDefault();
    this._rulerDragging = true;
    this._rulerDragStart = {
      x: e.clientX - this._rulerPosition.x,
      y: e.clientY - this._rulerPosition.y,
    };

    // Add document listeners
    document.addEventListener("mousemove", this.handleRulerMouseMove);
    document.addEventListener("mouseup", this.handleRulerMouseUp);
  }

  /**
   * Handle ruler mousemove
   */
  private handleRulerMouseMove = (e: MouseEvent): void => {
    if (!this._rulerDragging) return;

    this._rulerPosition = {
      x: e.clientX - this._rulerDragStart.x,
      y: e.clientY - this._rulerDragStart.y,
    };
    this.requestUpdate();
  };

  /**
   * Handle ruler mouseup
   */
  private handleRulerMouseUp = (): void => {
    this._rulerDragging = false;
    this.removeRulerDragListeners();
  };

  /**
   * Remove ruler drag listeners
   */
  private removeRulerDragListeners(): void {
    document.removeEventListener("mousemove", this.handleRulerMouseMove);
    document.removeEventListener("mouseup", this.handleRulerMouseUp);
  }

  /**
   * Toggle ruler orientation
   */
  private toggleRulerOrientation(e: MouseEvent): void {
    e.stopPropagation(); // Prevent dragging when clicking button
    this._rulerOrientation =
      this._rulerOrientation === "horizontal" ? "vertical" : "horizontal";
  }

  /**
   * Render ruler gizmo
   */
  private renderRulerGizmo(): TemplateResult | null {
    if (!this.ruler) return null;

    const rulerSizePx = this.mmToPx(this.rulerLength);
    const numTicks = Math.floor(this.rulerLength / 10); // Tick every 10mm (1cm)
    const isHorizontal = this._rulerOrientation === "horizontal";

    return html`
      <div
        class="ruler-gizmo ${this._rulerOrientation}"
        style="left: ${this._rulerPosition.x}px; top: ${this._rulerPosition.y}px;"
        @mousedown=${this.handleRulerMouseDown}
      >
        <div class="ruler-label">${this.rulerLength}mm</div>
        <button
          class="ruler-rotate-btn"
          @click=${this.toggleRulerOrientation}
          title="Toggle horizontal/vertical"
        >
          ${isHorizontal ? "⇅" : "⇄"}
        </button>
        <div
          class="ruler-line ${this._rulerOrientation}"
          style="${isHorizontal ? `width: ${rulerSizePx}px` : `height: ${rulerSizePx}px`};"
        >
          ${Array.from({ length: numTicks + 1 }, (_, i) => {
            const tickPos = (i / numTicks) * 100;
            const isCmMarker = i % 1 === 0; // Every tick is a cm marker
            const cmValue = (i * 10) / 10; // cm value
            
            return html`
              <div
                class="ruler-tick ${this._rulerOrientation} ${isCmMarker ? "cm-marker" : ""}"
                style="${isHorizontal ? `left: ${tickPos}%` : `top: ${tickPos}%`};"
              >
                ${isCmMarker
                  ? html`<div class="ruler-cm-label ${this._rulerOrientation}">
                      ${cmValue}
                    </div>`
                  : null}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  render() {
    const paperWidthPx = this.mmToPx(this.widthMm);
    const paperHeightPx = this.mmToPx(this.heightMm);

    // Set host dimensions to occupy space in layout
    this.style.width = `${paperWidthPx}px`;
    this.style.height = `${paperHeightPx}px`;
    this.style.padding = this.mm(this.margin);

    return html`
      <!-- Calibration ruler: hidden element used to measure mm→px -->
      <div class="calibration-ruler"></div>

      <!-- Ruler gizmo for scale validation -->
      ${this.renderRulerGizmo()}

      <!-- Printable area -->
      <div class="printable-area ${this.debug ? "debug" : ""}">
        <!-- Title block template or drawing area slot -->
        ${
          this.titleBlockTemplate
            ? this.titleBlockTemplate(this.mm.bind(this), html`<div class="drawing-slot"><slot></slot></div>`, { label: this.label, sheetNumber: this.sheetNumber })
            : html`<div class="drawing-slot"><slot></slot></div>`
        }
      </div>
    `;
  }
}