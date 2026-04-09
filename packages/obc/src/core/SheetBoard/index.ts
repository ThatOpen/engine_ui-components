import { LitElement, html, css } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import { Components, TechnicalDrawings, DxfManager, DrawingViewport } from "@thatopen/components";

type HandlePos = "TL" | "T" | "TR" | "L" | "R" | "BL" | "B" | "BR";

interface _Slot {
  drawingId: string;
  viewportId: string;
  paper: BUI.PaperSpace;
  x: number;
  y: number;
  /** Thin border div rendered above the WebGL canvas to show viewport extent. */
  borderEl: HTMLDivElement;
  /** Label shown above the top-left corner of the border. */
  nameEl: BUI.Label;
  handles: Record<HandlePos, HTMLDivElement>;
}

/**
 * An infinite pannable/zoomable canvas for arranging technical drawing sheets.
 * Accepts `bim-paper-space` elements as slotted children and renders
 * {@link DrawingViewport}s onto them via a shared WebGL scissor pass.
 *
 * Pan with right-click or middle-click drag; zoom with the mouse wheel.
 * Call {@link requestRender} whenever the drawing content changes.
 *
 * Single-click a viewport border to select it (enables move + resize handles).
 * Drag the border to reposition the viewport on the paper.
 * Drag a corner/edge handle to resize the viewport bounds.
 * Double-click to emit a `viewportactivate` event for the DrawingEditor.
 *
 * @fires viewportselect      - `{ paper, drawingId, viewportId }` on single-click selection
 * @fires viewportdeselect    - `{ paper, drawingId, viewportId }` on deselection
 * @fires viewportactivate    - `{ paper, drawingId, viewportId }` on double-click
 * @fires viewportdxfexport   - `{ drawingId, viewportId, dxf }` when the viewport Export DXF button is clicked
 * @fires paperdxfexport      - `{ paper, dxf }` when the paper Export DXF button is clicked
 *
 * @element bim-sheet-board
 */
export class SheetBoard extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      background-color: var(--bim-ui_bg-base);
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 24px 24px;
      cursor: default;
      user-select: none;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .world,
    .overlays {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: 0 0;
    }

    .overlays {
      pointer-events: none;
    }

    .toolbar-container {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      z-index: 10;
    }
  `;

  // ── Refs ──────────────────────────────────────────────────────────────────

  private _canvasRef = createRef<HTMLCanvasElement>();
  private _worldRef = createRef<HTMLDivElement>();
  private _overlaysRef = createRef<HTMLDivElement>();
  private _toolbarContainerRef = createRef<HTMLDivElement>();
  private _vpToolbarRef = createRef<BUI.Toolbar>();
  private _paperToolbarRef = createRef<BUI.Toolbar>();

  // ── WebGL ─────────────────────────────────────────────────────────────────

  private _renderer: THREE.WebGLRenderer | null = null;
  private _resizeObserver: ResizeObserver | null = null;

  // ── Viewport registry ─────────────────────────────────────────────────────

  private _slots = new Map<BUI.PaperSpace, _Slot[]>();
  private _paperLabels = new Map<BUI.PaperSpace, BUI.Label>();
  private _renderPending = false;

  // ── Pan / zoom state ──────────────────────────────────────────────────────

  private _pan = { x: 40, y: 40 };
  private _zoom = 0.5;
  private _panning = false;
  private _panStart = { x: 0, y: 0 };
  private _panOrigin = { x: 0, y: 0 };

  // ── Selection / drag state ────────────────────────────────────────────────

  private _editingSlot: _Slot | null = null;
  private _selectedSlot: _Slot | null = null;
  private _selectedPaper: BUI.PaperSpace | null = null;

  // ── Internal toolbar controls ─────────────────────────────────────────────

  private _vpSection: BUI.ToolbarSection | null = null;
  private _vpNameInput: BUI.TextInput | null = null;
  private _vpScaleDropdown: BUI.Dropdown | null = null;
  private _paperSection: BUI.ToolbarSection | null = null;
  private _paperSheetInput: BUI.TextInput | null = null;
  private _paperLabelInput: BUI.TextInput | null = null;
  private _paperSizeDropdown: BUI.Dropdown | null = null;
  private _paperOrientDropdown: BUI.Dropdown | null = null;
  private _dragSlot: _Slot | null = null;
  private _dragType: "move" | HandlePos | null = null;
  private _dragStartClient = { x: 0, y: 0 };
  private _dragTotalMovement = 0;
  private _dragOrigin: {
    x: number;
    y: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
  } | null = null;

  private _dragPaper: BUI.PaperSpace | null = null;
  private _dragPaperStartClient = { x: 0, y: 0 };
  private _dragPaperOrigin = { x: 0, y: 0 };
  private _dragPaperTotalMovement = 0;

  // ── Public API ────────────────────────────────────────────────────────────

  /**
   * Optional {@link Components} instance. When set, the "Export DXF" button
   * in the paper toolbar computes the DXF file internally and fires a
   * `paperdxfexport` event with the resulting string.
   */
  components: Components | null = null;

  /**
   * Registers a {@link DrawingViewport} to be rendered inside a
   * `bim-paper-space` element at the given position.
   *
   * @param paper      - The paper sheet that will display this viewport.
   * @param drawingId  - UUID of the {@link TechnicalDrawing} that owns the viewport.
   * @param viewportId - UUID of the {@link DrawingViewport} to render.
   * @param pos        - Top-left position of the viewport in mm, measured from the
   *                     drawing area origin (inside the paper margin).
   */
  addViewport(
    paper: BUI.PaperSpace,
    drawingId: string,
    viewportId: string,
    pos: { x: number; y: number },
  ) {
    const slot: _Slot = {
      drawingId,
      viewportId,
      paper,
      x: pos.x,
      y: pos.y,
      borderEl: null as any,
      nameEl: null as any,
      handles: null as any,
    };
    this._createBorderEl(slot);
    this._overlaysRef.value?.appendChild(slot.borderEl);

    if (!this._slots.has(paper)) {
      this._slots.set(paper, []);
      this._createPaperLabel(paper);
    }
    this._slots.get(paper)!.push(slot);
    this.requestRender();
  }

  /**
   * Returns the HTML element that covers the screen area of the given viewport.
   * Useful for registering the viewport as a pointer-event source with an
   * external editor (e.g. `DrawingEditor.registerSource`).
   */
  getViewportElement(drawingId: string, viewportId: string): HTMLElement | null {
    return this._findSlot(drawingId, viewportId)?.borderEl ?? null;
  }

  /**
   * Returns the viewport placements registered on the given paper sheet as
   * plain data objects, suitable for passing directly to a DXF exporter.
   *
   * @param paper - The paper sheet to query.
   * @returns Array of `{ vp, x, y }` where `x` and `y` are mm from the
   *          top-left of the drawing area.
   */
  getSlotsForPaper(paper: BUI.PaperSpace): Array<{ drawingId: string; viewportId: string; x: number; y: number }> {
    return (this._slots.get(paper) ?? []).map((s) => ({ drawingId: s.drawingId, viewportId: s.viewportId, x: s.x, y: s.y }));
  }

  /**
   * Enters edit mode for the given viewport: the board stops intercepting
   * pointer events on that slot so an external editor can take over.
   * The slot stays visually selected but drag/resize/click are suspended.
   */
  enterEditMode(drawingId: string, viewportId: string) {
    const slot = this._findSlot(drawingId, viewportId);
    if (!slot) return;
    if (this._editingSlot) this.exitEditMode();
    this._editingSlot = slot;
    slot.borderEl.style.border = "2px dashed rgba(255,140,0,0.9)";
    slot.borderEl.style.boxShadow = "0 0 0 1px rgba(255,140,0,0.3)";
    slot.borderEl.style.cursor = "crosshair";
    for (const h of Object.values(slot.handles)) h.style.display = "none";
  }

  /**
   * Exits edit mode, returning pointer control to the board.
   */
  exitEditMode() {
    if (!this._editingSlot) return;
    const slot = this._editingSlot;
    this._editingSlot = null;
    // Restore selected-state visuals if still selected, otherwise deselect.
    if (this._selectedSlot === slot) {
      slot.borderEl.style.border = "2px solid rgba(0,136,255,1)";
      slot.borderEl.style.boxShadow = "0 0 0 1px rgba(0,136,255,0.3)";
      slot.borderEl.style.cursor = "move";
      for (const h of Object.values(slot.handles)) h.style.display = "block";
    } else {
      slot.borderEl.style.border = "1.5px solid rgba(0,136,255,0.7)";
      slot.borderEl.style.boxShadow = "";
      slot.borderEl.style.cursor = "pointer";
    }
  }

  /**
   * Removes a previously registered viewport from a paper sheet.
   */
  removeViewport(paper: BUI.PaperSpace, drawingId: string, viewportId: string) {
    const slots = this._slots.get(paper);
    if (!slots) return;
    const idx = slots.findIndex((s) => s.drawingId === drawingId && s.viewportId === viewportId);
    if (idx === -1) return;
    if (slots[idx] === this._selectedSlot) this._selectSlot(null);
    slots[idx].borderEl.remove();
    slots.splice(idx, 1);
    if (slots.length === 0) {
      this._slots.delete(paper);
      this._paperLabels.get(paper)?.remove();
      this._paperLabels.delete(paper);
    }
    this.requestRender();
  }

  /**
   * Schedules a WebGL render pass on the next animation frame.
   * Call this whenever drawing content changes (new annotation, projection
   * update, etc.). Multiple calls within the same frame collapse into one.
   */
  requestRender() {
    if (this._renderPending) return;
    this._renderPending = true;
    requestAnimationFrame(() => {
      this._renderPending = false;
      this._doRender();
    });
  }

  // ── Border / handle / paper-label creation ────────────────────────────────

  private _createPaperLabel(paper: BUI.PaperSpace) {
    const labelEl = document.createElement("bim-label") as BUI.Label;
    labelEl.style.cssText =
      "position:absolute;pointer-events:none;transition:none;" +
      "--bim-label--c:var(--bim-ui_bg-contrast-100);" +
      "--bim-label--fz:1.5rem;";
    this._overlaysRef.value?.appendChild(labelEl);
    this._paperLabels.set(paper, labelEl);
  }

  private _createBorderEl(slot: _Slot) {
    const borderEl = document.createElement("div");
    // pointer-events:auto always so the border is always clickable (even before selected).
    // Only handles start hidden/inert; the parent .overlays has pointer-events:none but
    // that doesn't block children with pointer-events:auto (CSS spec).
    borderEl.style.cssText =
      "position:absolute;box-sizing:border-box;border:1.5px solid rgba(0,136,255,0.7);pointer-events:auto;cursor:pointer;";

    const handleDefs: Array<{ pos: HandlePos; left: string; top: string; cursor: string }> = [
      { pos: "TL", left: "0%",   top: "0%",   cursor: "nwse-resize" },
      { pos: "T",  left: "50%",  top: "0%",   cursor: "ns-resize"   },
      { pos: "TR", left: "100%", top: "0%",   cursor: "nesw-resize" },
      { pos: "L",  left: "0%",   top: "50%",  cursor: "ew-resize"   },
      { pos: "R",  left: "100%", top: "50%",  cursor: "ew-resize"   },
      { pos: "BL", left: "0%",   top: "100%", cursor: "nesw-resize" },
      { pos: "B",  left: "50%",  top: "100%", cursor: "ns-resize"   },
      { pos: "BR", left: "100%", top: "100%", cursor: "nwse-resize" },
    ];

    const handles = {} as Record<HandlePos, HTMLDivElement>;

    for (const def of handleDefs) {
      const h = document.createElement("div");
      h.style.cssText = `position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid rgba(0,136,255,0.9);border-radius:2px;transform:translate(-50%,-50%);display:none;pointer-events:none;left:${def.left};top:${def.top};cursor:${def.cursor};`;
      h.addEventListener("mousedown", (e) =>
        this._onHandleMouseDown(slot, def.pos, e),
      );
      borderEl.appendChild(h);
      handles[def.pos] = h;
    }

    borderEl.addEventListener("mousedown", (e) =>
      this._onBorderMouseDown(slot, e),
    );

    const nameEl = document.createElement("bim-label") as BUI.Label;
    nameEl.textContent = this._nameLabel(this._resolveVp(slot));
    nameEl.style.cssText =
      "position:absolute;top:-18px;left:0;pointer-events:none;" +
      "--bim-label--c:rgba(0,136,255,0.85);";
    borderEl.appendChild(nameEl);

    slot.borderEl = borderEl;
    slot.nameEl = nameEl;
    slot.handles = handles;
  }

  // ── Selection ──────────────────────────────────────────────────────────────

  private _selectSlot(slot: _Slot | null) {
    // Deselect previous viewport
    if (this._selectedSlot) {
      const prev = this._selectedSlot;
      prev.borderEl.style.border = "1.5px solid rgba(0,136,255,0.7)";
      prev.borderEl.style.boxShadow = "";
      prev.borderEl.style.cursor = "pointer";
      for (const h of Object.values(prev.handles)) {
        h.style.display = "none";
        h.style.pointerEvents = "none";
      }
      this.dispatchEvent(
        new CustomEvent("viewportdeselect", {
          detail: { paper: prev.paper, drawingId: prev.drawingId, viewportId: prev.viewportId },
          bubbles: true,
          composed: true,
        }),
      );
    }

    // Selecting a viewport clears any paper selection.
    if (slot) this._selectPaper(null);

    this._selectedSlot = slot;

    if (slot) {
      slot.borderEl.style.border = "2px solid rgba(0,136,255,1)";
      slot.borderEl.style.boxShadow = "0 0 0 1px rgba(0,136,255,0.3)";
      slot.borderEl.style.cursor = "move";
      for (const h of Object.values(slot.handles)) {
        h.style.display = "block";
        h.style.pointerEvents = "auto";
      }
      this._showVpToolbar(this._resolveVp(slot));
      this.dispatchEvent(
        new CustomEvent("viewportselect", {
          detail: { paper: slot.paper, drawingId: slot.drawingId, viewportId: slot.viewportId },
          bubbles: true,
          composed: true,
        }),
      );
    } else {
      this._hideToolbar();
    }
  }

  private _selectPaper(paper: BUI.PaperSpace | null) {
    // Deselect previous paper
    if (this._selectedPaper) {
      const prev = this._selectedPaper;
      prev.style.outline = "";
      prev.style.outlineOffset = "";
      this._selectedPaper = null;
      this.dispatchEvent(
        new CustomEvent("paperdeselect", {
          detail: { paper: prev },
          bubbles: true,
          composed: true,
        }),
      );
    }

    // Selecting a paper clears any viewport selection.
    if (paper) this._selectSlot(null);

    this._selectedPaper = paper;

    if (paper) {
      paper.style.outline = "5px solid rgba(255,140,0,0.9)";
      paper.style.outlineOffset = "6px";
      this._showPaperToolbar(paper);
      this.dispatchEvent(
        new CustomEvent("paperselect", {
          detail: { paper },
          bubbles: true,
          composed: true,
        }),
      );
    } else {
      if (!this._selectedSlot) this._hideToolbar();
    }
  }

  private _showVpToolbar(vp: DrawingViewport | null) {
    if (this._vpSection) this._vpSection.label = vp?.name || "Viewport";
    if (this._vpNameInput) this._vpNameInput.value = vp?.name ?? "";
    if (this._vpScaleDropdown) this._vpScaleDropdown.value = [String(vp?.drawingScale ?? 100)];
    if (this._vpToolbarRef.value) this._vpToolbarRef.value.style.display = "";
    if (this._paperToolbarRef.value) this._paperToolbarRef.value.style.display = "none";
    const container = this._toolbarContainerRef.value;
    if (container) container.style.display = "block";
  }

  private _showPaperToolbar(paper: BUI.PaperSpace) {
    if (this._paperSection) this._paperSection.label = paper.label || `${paper.size} · ${paper.orientation}`;
    if (this._paperSheetInput) this._paperSheetInput.value = paper.sheetNumber;
    if (this._paperLabelInput) this._paperLabelInput.value = paper.label;
    if (this._paperSizeDropdown) this._paperSizeDropdown.value = [paper.size];
    if (this._paperOrientDropdown) this._paperOrientDropdown.value = [paper.orientation];
    if (this._vpToolbarRef.value) this._vpToolbarRef.value.style.display = "none";
    if (this._paperToolbarRef.value) this._paperToolbarRef.value.style.display = "";
    const container = this._toolbarContainerRef.value;
    if (container) container.style.display = "block";
  }

  private _hideToolbar() {
    const container = this._toolbarContainerRef.value;
    if (container) container.style.display = "none";
  }

  // ── Drag start ────────────────────────────────────────────────────────────

  private _onBorderMouseDown(slot: _Slot, e: MouseEvent) {
    if (e.button !== 0) return;
    if (slot === this._editingSlot) return; // editor has control
    e.stopPropagation(); // prevent host deselect handler
    this._startDrag(slot, "move", e);
  }

  private _onHandleMouseDown(slot: _Slot, pos: HandlePos, e: MouseEvent) {
    if (e.button !== 0) return;
    if (slot === this._editingSlot) return; // editor has control
    e.stopPropagation();
    this._startDrag(slot, pos, e);
  }

  private _startDrag(slot: _Slot, type: "move" | HandlePos, e: MouseEvent) {
    const vp = this._resolveVp(slot);
    if (!vp) return;
    this._dragSlot = slot;
    this._dragType = type;
    this._dragStartClient = { x: e.clientX, y: e.clientY };
    this._dragTotalMovement = 0;
    this._dragOrigin = {
      x: slot.x,
      y: slot.y,
      left: vp.left,
      right: vp.right,
      top: vp.top,
      bottom: vp.bottom,
    };
  }

  // ── Coordinate helpers ────────────────────────────────────────────────────

  private _findSlot(drawingId: string, viewportId: string): _Slot | null {
    for (const slots of this._slots.values()) {
      const slot = slots.find((s) => s.drawingId === drawingId && s.viewportId === viewportId);
      if (slot) return slot;
    }
    return null;
  }

  private _resolveVp(slot: _Slot): DrawingViewport | null {
    if (!this.components) return null;
    const drawing = this.components.get(TechnicalDrawings).list.get(slot.drawingId);
    return drawing?.viewports.get(slot.viewportId) ?? null;
  }

  private _getPxPerMm(paper: BUI.PaperSpace): number {
    const r = paper.drawingAreaEl.getBoundingClientRect();
    return r.width / (paper.widthMm - 2 * paper.margin);
  }

  // ── Drag apply ───────────────────────────────────────────────────────────

  private _applyMoveDrag(dx: number, dy: number) {
    const slot = this._dragSlot!;
    const origin = this._dragOrigin!;
    const vp = this._resolveVp(slot);
    if (!vp) return;
    const paper = slot.paper;

    // pxPerMm comes from getBoundingClientRect(), which already includes zoom.
    // dx/dy are screen pixels, so dividing by pxPerMm gives mm directly.
    const pxPerMm = this._getPxPerMm(paper);

    // Clamp to the drawing slot area, not the full printable area, so that
    // viewports cannot be dragged into the title block region.
    const slotEl = paper.drawingSlotEl ?? paper.drawingAreaEl;
    const slotRect = slotEl.getBoundingClientRect();
    const areaW = slotRect.width  / pxPerMm;
    const areaH = slotRect.height / pxPerMm;

    const vpW = (vp.right - vp.left)   * (1000 / vp.drawingScale);
    const vpH = (vp.top   - vp.bottom) * (1000 / vp.drawingScale);

    slot.x = Math.max(0, Math.min(areaW - vpW, origin.x + dx / pxPerMm));
    slot.y = Math.max(0, Math.min(areaH - vpH, origin.y + dy / pxPerMm));
  }

  private _applyResizeDrag(handle: HandlePos, dx: number, dy: number) {
    const slot = this._dragSlot!;
    const origin = this._dragOrigin!;
    const vp = this._resolveVp(slot);
    if (!vp) return;
    const paper = slot.paper;
    const pxPerUnit = this._getPxPerMm(paper) * (1000 / vp.drawingScale);
    const dX = dx / pxPerUnit;
    const dY = dy / pxPerUnit;

    if (handle.includes("L")) vp.left   = origin.left   + dX;
    if (handle.includes("R")) vp.right  = origin.right  + dX;
    if (handle.includes("T")) vp.top    = origin.top    - dY;
    if (handle.includes("B")) vp.bottom = origin.bottom - dY;

    const scale = vp.drawingScale;
    const pxPerMm = this._getPxPerMm(paper);
    const slotEl = paper.drawingSlotEl ?? paper.drawingAreaEl;
    const slotRect = slotEl.getBoundingClientRect();
    const areaW = slotRect.width  / pxPerMm;
    const areaH = slotRect.height / pxPerMm;
    const maxW  = (areaW - slot.x) * scale / 1000;
    const maxH  = (areaH - slot.y) * scale / 1000;
    const MIN   = 0.1; // minimum size in world units — prevents inversion

    // Each controlled side is clamped independently against the opposite side.
    // Math.min prevents exceeding the printable area; Math.max prevents inversion.
    if (handle.includes("L")) {
      vp.left = Math.max(vp.left, vp.right - maxW); // area limit
      vp.left = Math.min(vp.left, vp.right - MIN);  // inversion guard
    }
    if (handle.includes("R")) {
      vp.right = Math.min(vp.right, vp.left + maxW); // area limit
      vp.right = Math.max(vp.right, vp.left + MIN);  // inversion guard
    }
    if (handle.includes("T")) {
      vp.top = Math.min(vp.top, vp.bottom + maxH); // area limit
      vp.top = Math.max(vp.top, vp.bottom + MIN);  // inversion guard
    }
    if (handle.includes("B")) {
      vp.bottom = Math.max(vp.bottom, vp.top - maxH); // area limit
      vp.bottom = Math.min(vp.bottom, vp.top - MIN);  // inversion guard
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  private _nameLabel(vp: DrawingViewport | null): string {
    if (!vp) return "";
    const name = vp.name ?? "";
    const scale = `1:${vp.drawingScale}`;
    return name ? `${name} - ${scale}` : scale;
  }

  /** Traverses the camera's parent chain to find the owning THREE.Scene. */
  private _sceneOf(vp: DrawingViewport): THREE.Scene | null {
    let obj: THREE.Object3D | null = vp.camera;
    while (obj) {
      if (obj instanceof THREE.Scene) return obj;
      obj = obj.parent;
    }
    return null;
  }

  private _doRender() {
    const renderer = this._renderer;
    if (!renderer || this._slots.size === 0) return;

    const hostRect = this.getBoundingClientRect();
    const hostW = hostRect.width;
    const hostH = hostRect.height;
    const dpr = window.devicePixelRatio;

    // Clear the whole canvas to transparent first.
    renderer.setScissorTest(false);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.setScissorTest(true);

    for (const [paper, slots] of this._slots) {
      // Update paper label position and text.
      const paperLabel = this._paperLabels.get(paper);
      if (paperLabel) {
        const paperRect = paper.getBoundingClientRect();
        const lx = (paperRect.left - hostRect.left - this._pan.x) / this._zoom;
        const ly = (paperRect.top  - hostRect.top  - this._pan.y) / this._zoom - 42;
        paperLabel.style.left = `${lx}px`;
        paperLabel.style.top  = `${ly}px`;
        const parts = [paper.sheetNumber, paper.label].filter(Boolean);
        paperLabel.textContent = parts.length ? parts.join(": ") : "";
      }

      const areaEl = paper.drawingAreaEl;
      if (!areaEl) continue;
      const areaRect = areaEl.getBoundingClientRect();

      // Derive zoomed pxPerMm from the actual rendered size of the printable
      // area — getBoundingClientRect() already accounts for the board zoom.
      const pxPerMm = areaRect.width / (paper.widthMm - 2 * paper.margin);

      // Use the drawing slot element as the positioning origin so that
      // slot.x/slot.y are measured from the drawing content area, not the
      // full printable area (which may include a title block).
      const slotEl = paper.drawingSlotEl ?? areaEl;
      const slotRect = slotEl !== areaEl ? slotEl.getBoundingClientRect() : areaRect;

      for (const slot of slots) {
        const vp = this._resolveVp(slot);
        const scene = vp ? this._sceneOf(vp) : null;

        // Viewport physical size on paper from its bounds and scale.
        const widthMm = vp
          ? (vp.right - vp.left) * (1000 / vp.drawingScale)
          : 0;
        const heightMm = vp
          ? (vp.top - vp.bottom) * (1000 / vp.drawingScale)
          : 0;

        // Position relative to the SheetBoard element (CSS pixels).
        const sx = slotRect.left - hostRect.left + slot.x * pxPerMm;
        const sy = slotRect.top  - hostRect.top  + slot.y * pxPerMm;
        const sw = widthMm * pxPerMm;
        const sh = heightMm * pxPerMm;

        // Update border overlay — world-local coords so it follows pan/zoom.
        // Borders render even when the scene is missing (shows extent regardless).
        const lx = (sx - this._pan.x) / this._zoom;
        const ly = (sy - this._pan.y) / this._zoom;
        const lw = sw / this._zoom;
        const lh = sh / this._zoom;
        slot.borderEl.style.left = `${lx}px`;
        slot.borderEl.style.top = `${ly}px`;
        slot.borderEl.style.width = `${lw}px`;
        slot.borderEl.style.height = `${lh}px`;
        slot.nameEl.textContent = this._nameLabel(vp);

        if (!scene || !vp) continue;

        // Skip fully off-screen slots.
        if (sx + sw <= 0 || sx >= hostW || sy + sh <= 0 || sy >= hostH)
          continue;

        // Convert to WebGL coords: origin bottom-left, device pixels.
        const glX = Math.round(sx * dpr);
        const glY = Math.round((hostH - sy - sh) * dpr);
        const glW = Math.round(sw * dpr);
        const glH = Math.round(sh * dpr);

        renderer.setScissor(glX, glY, glW, glH);
        renderer.setViewport(glX, glY, glW, glH);
        renderer.setClearColor(0xffffff, 1);
        renderer.clear();
        renderer.render(scene, vp.camera);
      }
    }

    renderer.setScissorTest(false);
  }

  // ── Pan / zoom ────────────────────────────────────────────────────────────

  private _applyTransform() {
    const t = `translate(${this._pan.x}px,${this._pan.y}px) scale(${this._zoom})`;
    if (this._worldRef.value) this._worldRef.value.style.transform = t;
    if (this._overlaysRef.value) this._overlaysRef.value.style.transform = t;
  }

  private _onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const rect = this.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const factor = Math.pow(0.999, e.deltaY);
    const newZoom = Math.max(0.05, Math.min(10, this._zoom * factor));
    this._pan.x = cx - (cx - this._pan.x) * (newZoom / this._zoom);
    this._pan.y = cy - (cy - this._pan.y) * (newZoom / this._zoom);
    this._zoom = newZoom;
    this._applyTransform();
    this.requestRender();
  };

  private _onMouseDown = (e: MouseEvent) => {
    if (e.button === 0 && !this._editingSlot) {
      // Viewport border clicks call stopPropagation(), so they never reach here.
      // Check if the click landed on a registered paper or on empty board space.
      const hitPaper = e.composedPath().find(
        (el) => el instanceof Element && el.tagName === "BIM-PAPER-SPACE",
      ) as BUI.PaperSpace | undefined;

      if (hitPaper) {
        // Defer selection to mouseup — first we need to know if it's a drag.
        this._dragPaper = hitPaper;
        this._dragPaperStartClient = { x: e.clientX, y: e.clientY };
        this._dragPaperOrigin = { x: hitPaper.offsetLeft, y: hitPaper.offsetTop };
        this._dragPaperTotalMovement = 0;
      } else {
        if (this._selectedSlot) this._selectSlot(null);
        if (this._selectedPaper) this._selectPaper(null);
      }
    }

    if (e.button !== 1 && e.button !== 2) return;
    e.preventDefault();
    this._panning = true;
    this._panStart = { x: e.clientX, y: e.clientY };
    this._panOrigin = { ...this._pan };
    this.style.cursor = "grabbing";
  };

  private _onMouseMove = (e: MouseEvent) => {
    if (this._panning) {
      this._pan.x = this._panOrigin.x + (e.clientX - this._panStart.x);
      this._pan.y = this._panOrigin.y + (e.clientY - this._panStart.y);
      this._applyTransform();
      this.requestRender();
    }

    if (this._dragSlot && this._dragType && this._dragOrigin) {
      const dx = e.clientX - this._dragStartClient.x;
      const dy = e.clientY - this._dragStartClient.y;
      this._dragTotalMovement = Math.max(
        this._dragTotalMovement,
        Math.abs(dx) + Math.abs(dy),
      );
      if (this._dragType === "move") {
        this._applyMoveDrag(dx, dy);
      } else {
        this._applyResizeDrag(this._dragType, dx, dy);
      }
      this.requestRender();
    }

    if (this._dragPaper) {
      const dx = e.clientX - this._dragPaperStartClient.x;
      const dy = e.clientY - this._dragPaperStartClient.y;
      this._dragPaperTotalMovement = Math.max(
        this._dragPaperTotalMovement,
        Math.abs(dx) + Math.abs(dy),
      );
      // Divide by zoom because the paper lives inside the scaled .world div.
      this._dragPaper.style.left = `${this._dragPaperOrigin.x + dx / this._zoom}px`;
      this._dragPaper.style.top = `${this._dragPaperOrigin.y + dy / this._zoom}px`;
      this.requestRender();
    }
  };

  private _onMouseUp = (e: MouseEvent) => {
    if (this._panning && (e.button === 1 || e.button === 2)) {
      this._panning = false;
      this.style.cursor = "default";
    }

    if (this._dragSlot && e.button === 0) {
      const wasClick = this._dragTotalMovement < 4;
      const slot = this._dragSlot;
      this._dragSlot = null;
      this._dragType = null;
      this._dragOrigin = null;
      if (wasClick) this._handleSlotClick(slot, e);
    }

    if (this._dragPaper && e.button === 0) {
      const wasClick = this._dragPaperTotalMovement < 4;
      const paper = this._dragPaper;
      this._dragPaper = null;
      if (wasClick) this._selectPaper(this._selectedPaper === paper ? null : paper);
    }
  };

  private _handleSlotClick(slot: _Slot, e: MouseEvent) {
    if (e.detail >= 2) {
      this.dispatchEvent(
        new CustomEvent("viewportactivate", {
          detail: { paper: slot.paper, drawingId: slot.drawingId, viewportId: slot.viewportId },
          bubbles: true,
          composed: true,
        }),
      );
    } else {
      this._selectSlot(this._selectedSlot === slot ? null : slot);
    }
  }

  private _onContextMenu = (e: Event) => e.preventDefault();

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("wheel", this._onWheel, { passive: false });
    this.addEventListener("mousedown", this._onMouseDown);
    this.addEventListener("contextmenu", this._onContextMenu);
    window.addEventListener("mousemove", this._onMouseMove);
    window.addEventListener("mouseup", this._onMouseUp);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("wheel", this._onWheel);
    this.removeEventListener("mousedown", this._onMouseDown);
    this.removeEventListener("contextmenu", this._onContextMenu);
    window.removeEventListener("mousemove", this._onMouseMove);
    window.removeEventListener("mouseup", this._onMouseUp);
    this._resizeObserver?.disconnect();
    this._renderer?.dispose();
    this._renderer = null;
  }

  private _buildVpToolbar() {
    const toolbar = this._vpToolbarRef.value;
    if (!toolbar) return;

    const scaleDropdown = document.createElement("bim-dropdown") as BUI.Dropdown;
    scaleDropdown.label = "Scale";
    scaleDropdown.vertical = true;
    scaleDropdown.style.width = "140px";
    for (const s of [25, 50, 100, 200, 500]) {
      const opt = document.createElement("bim-option") as BUI.Option;
      opt.label = `1:${s}`;
      opt.value = String(s);
      scaleDropdown.appendChild(opt);
    }
    scaleDropdown.addEventListener("change", () => {
      if (!this._selectedSlot) return;
      const vp = this._resolveVp(this._selectedSlot);
      if (!vp) return;
      const val = Number(scaleDropdown.value[0]);
      if (!Number.isNaN(val)) {
        vp.drawingScale = val;
        this.requestRender();
      }
    });

    const nameInput = document.createElement("bim-text-input") as BUI.TextInput;
    nameInput.label = "Name";
    nameInput.vertical = true;
    nameInput.placeholder = "Viewport name...";
    nameInput.style.width = "140px";
    nameInput.addEventListener("input", () => {
      if (!this._selectedSlot) return;
      const vp = this._resolveVp(this._selectedSlot);
      if (!vp) return;
      vp.name = nameInput.value;
      if (this._vpSection) this._vpSection.label = nameInput.value || "Viewport";
      this.requestRender();
    });

    const vpExportBtn = document.createElement("bim-button") as BUI.Button;
    vpExportBtn.label = "Export DXF";
    vpExportBtn.icon = "mingcute:file-export-line";
    vpExportBtn.vertical = true;
    vpExportBtn.addEventListener("click", () => {
      if (!this._selectedSlot || !this.components) return;
      const vp = this._resolveVp(this._selectedSlot);
      if (!vp) return;
      const techDrawings = this.components.get(TechnicalDrawings);
      const drawing = techDrawings.list.get(this._selectedSlot.drawingId);
      if (!drawing) return;
      const dxf = this.components.get(DxfManager).exporter.export([
        { drawing, viewports: [{ viewport: vp }] },
      ]);
      this.dispatchEvent(new CustomEvent("viewportdxfexport", {
        detail: { drawingId: this._selectedSlot.drawingId, viewportId: this._selectedSlot.viewportId, dxf },
        bubbles: true,
        composed: true,
      }));
    });

    const section = document.createElement("bim-toolbar-section") as BUI.ToolbarSection;
    section.appendChild(nameInput);
    section.appendChild(scaleDropdown);
    toolbar.appendChild(section);

    const vpExportSection = document.createElement("bim-toolbar-section") as BUI.ToolbarSection;
    vpExportSection.label = "Export";
    vpExportSection.appendChild(vpExportBtn);
    toolbar.appendChild(vpExportSection);

    this._vpSection = section;
    this._vpNameInput = nameInput;
    this._vpScaleDropdown = scaleDropdown;
  }

  private _buildPaperToolbar() {
    const toolbar = this._paperToolbarRef.value;
    if (!toolbar) return;

    const sheetInput = document.createElement("bim-text-input") as BUI.TextInput;
    sheetInput.label = "Sheet";
    sheetInput.vertical = true;
    sheetInput.placeholder = "A-01...";
    sheetInput.style.width = "100px";
    sheetInput.addEventListener("input", () => {
      if (!this._selectedPaper) return;
      this._selectedPaper.sheetNumber = sheetInput.value;
      this.requestRender();
    });

    const labelInput = document.createElement("bim-text-input") as BUI.TextInput;
    labelInput.label = "Label";
    labelInput.vertical = true;
    labelInput.placeholder = "Sheet label...";
    labelInput.style.width = "160px";
    labelInput.addEventListener("input", () => {
      if (!this._selectedPaper) return;
      this._selectedPaper.label = labelInput.value;
      if (this._paperSection) this._paperSection.label = labelInput.value || `${this._selectedPaper.size} · ${this._selectedPaper.orientation}`;
      this.requestRender();
    });

    const sizeDropdown = document.createElement("bim-dropdown") as BUI.Dropdown;
    sizeDropdown.label = "Size";
    sizeDropdown.vertical = true;
    for (const s of ["A0", "A1", "A2", "A3", "A4"]) {
      const opt = document.createElement("bim-option") as BUI.Option;
      opt.label = s;
      opt.value = s;
      sizeDropdown.appendChild(opt);
    }
    sizeDropdown.addEventListener("change", () => {
      if (!this._selectedPaper) return;
      this._selectedPaper.size = sizeDropdown.value[0] as any;
      this.requestRender();
    });

    const orientDropdown = document.createElement("bim-dropdown") as BUI.Dropdown;
    orientDropdown.label = "Orientation";
    orientDropdown.vertical = true;
    for (const [label, value] of [["Landscape", "landscape"], ["Portrait", "portrait"]]) {
      const opt = document.createElement("bim-option") as BUI.Option;
      opt.label = label;
      opt.value = value;
      orientDropdown.appendChild(opt);
    }
    orientDropdown.addEventListener("change", () => {
      if (!this._selectedPaper) return;
      this._selectedPaper.orientation = orientDropdown.value[0] as any;
      this.requestRender();
    });

    const exportBtn = document.createElement("bim-button") as BUI.Button;
    exportBtn.label = "Export DXF";
    exportBtn.icon = "mingcute:file-export-line";
    exportBtn.vertical = true;
    exportBtn.addEventListener("click", () => {
      if (!this._selectedPaper || !this.components) return;
      const techDrawings = this.components.get(TechnicalDrawings);

      // Group viewport slots by drawing ID to build the exporter entries array.
      const entriesMap = new Map<string, { drawing: any; viewports: Array<{ viewport: DrawingViewport; x: number; y: number }> }>();
      for (const { drawingId, viewportId, x, y } of this.getSlotsForPaper(this._selectedPaper)) {
        if (!entriesMap.has(drawingId)) {
          const drawing = techDrawings.list.get(drawingId);
          if (!drawing) continue;
          entriesMap.set(drawingId, { drawing, viewports: [] });
        }
        const viewport = techDrawings.list.get(drawingId)?.viewports.get(viewportId);
        if (!viewport) continue;
        entriesMap.get(drawingId)!.viewports.push({ viewport, x, y });
      }

      const dxf = this.components.get(DxfManager).exporter.export(
        [...entriesMap.values()],
        {
          widthMm:  this._selectedPaper.widthMm,
          heightMm: this._selectedPaper.heightMm,
          margin:   this._selectedPaper.margin,
        },
      );

      this.dispatchEvent(new CustomEvent("paperdxfexport", {
        detail: { paper: this._selectedPaper, dxf },
        bubbles: true,
        composed: true,
      }));
    });

    const section = document.createElement("bim-toolbar-section") as BUI.ToolbarSection;
    section.appendChild(sheetInput);
    section.appendChild(labelInput);
    section.appendChild(sizeDropdown);
    section.appendChild(orientDropdown);
    toolbar.appendChild(section);

    const exportSection = document.createElement("bim-toolbar-section") as BUI.ToolbarSection;
    exportSection.label = "Export";
    exportSection.appendChild(exportBtn);
    toolbar.appendChild(exportSection);

    this._paperSection = section;
    this._paperSheetInput = sheetInput;
    this._paperLabelInput = labelInput;
    this._paperSizeDropdown = sizeDropdown;
    this._paperOrientDropdown = orientDropdown;
  }

  firstUpdated() {
    // Prevent clicks inside the toolbar from bubbling to the host and
    // triggering the board's deselect-on-click handler.
    this._toolbarContainerRef.value?.addEventListener("mousedown", (e) =>
      e.stopPropagation(),
    );

    this._buildVpToolbar();
    this._buildPaperToolbar();

    this._applyTransform();

    // alpha:true so the canvas is transparent outside scissored regions,
    // letting the board's CSS dot-grid background show through.
    this._renderer = new THREE.WebGLRenderer({
      canvas: this._canvasRef.value!,
      antialias: true,
      alpha: true,
    });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.autoClear = false;
    this._renderer.setSize(this.clientWidth, this.clientHeight);

    this._resizeObserver = new ResizeObserver(() => {
      this._renderer?.setSize(this.clientWidth, this.clientHeight);
      this.requestRender();
    });
    this._resizeObserver.observe(this);
  }

  protected render() {
    return html`
      <div class="world" ${ref(this._worldRef)}>
        <slot></slot>
      </div>
      <canvas ${ref(this._canvasRef)}></canvas>
      <div class="overlays" ${ref(this._overlaysRef)}></div>
      <div class="toolbar-container" ${ref(this._toolbarContainerRef)}>
        <bim-toolbar style="border: 1px solid var(--bim-ui_bg-contrast-20); box-shadow: 0 2px 8px rgba(0,0,0,0.25);" ${ref(this._vpToolbarRef)}></bim-toolbar>
        <bim-toolbar style="border: 1px solid var(--bim-ui_bg-contrast-20); box-shadow: 0 2px 8px rgba(0,0,0,0.25); display: none;" ${ref(this._paperToolbarRef)}></bim-toolbar>
      </div>
    `;
  }
}
