import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components"
import * as OBF from "@thatopen/components-front"
import * as CUI from "../..";

BUI.Manager.init();
CUI.Manager.init();

// ── OBC world (hidden — only needed as scene container for the drawing) ────

const components = new OBC.Components();
const worlds = components.get(OBC.Worlds);
const world = worlds.create<OBC.SimpleScene, OBC.SimpleCamera, OBC.SimpleRenderer>();

world.scene = new OBC.SimpleScene(components);
world.scene.setup();
world.scene.three.background = null;

// Hidden container: the 3D world renderer is never shown on screen.
// The SheetBoard is the only visible renderer.
const hiddenContainer = document.createElement("div");
hiddenContainer.style.cssText = "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;";
document.body.appendChild(hiddenContainer);
world.renderer = new OBC.SimpleRenderer(components, hiddenContainer);
world.camera = new OBC.SimpleCamera(components);

// Layer 1 stays disabled on the world camera — the drawing is only visible
// through the SheetBoard viewports, not in any 3D view.
components.init();

// ── TechnicalDrawings ─────────────────────────────────────────────────────

const techDrawings = components.get(OBC.TechnicalDrawings);

function makeLines(pts: number[]): THREE.LineSegments {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pts), 3));
  return new THREE.LineSegments(geo, new THREE.LineBasicMaterial());
}

// ── Drawing 1: Floor plan ─────────────────────────────────────────────────

const drawing = techDrawings.create(world);
drawing.layers.create("geometry");

// Outer perimeter
drawing.addProjectionLines(makeLines([
  -8, 0,  6,   8, 0,  6,
   8, 0,  6,   8, 0, -6,
   8, 0, -6,  -8, 0, -6,
  -8, 0, -6,  -8, 0,  6,
]), "geometry");

// Interior partition with doorway (gap between z=−0.75 and z=0.75)
drawing.addProjectionLines(makeLines([
   0, 0,  6,    0, 0,  0.75,
   0, 0, -0.75, 0, 0, -6,
  -8, 0,  0,    0, 0,  0,
]), "geometry");

const vpA = drawing.viewports.create({ left: -10, right: 10, top: 8,  bottom: -8, scale: 100, name: "Floor Plan" });
const vpB = drawing.viewports.create({ left:   0, right:  9, top: 7,  bottom: -7, scale:  50, name: "Right Room" });
const vpC = drawing.viewports.create({ left: -9,  right:  0, top: 7,  bottom: -7, scale:  50, name: "Left Room" });

// ── DrawingEditor ─────────────────────────────────────────────────────────

const editor = components.get(OBF.DrawingEditor);
// Font for dimension labels — adjust the path to match your dev server setup.
await editor.fonts.load("/resources/fonts/PlusJakartaSans-Medium.ttf");

const dimTool = editor.use(OBF.LinearAnnotationsTool);

// ── SheetBoard and papers ────────────────────────────────────────────────

const board = document.getElementById("board") as CUI.SheetBoard;
board.components = components as any;
const paperA = document.getElementById("paper-a") as BUI.PaperSpace;
const paperB = document.getElementById("paper-b") as BUI.PaperSpace;

function makeTitleBlock(scale: string) {
  return (
    mm: (v: number) => string,
    drawingArea: BUI.TemplateResult,
    info: { label: string; sheetNumber: string },
  ): BUI.TemplateResult => BUI.html`
    <div style="width:100%;height:100%;display:flex;flex-direction:column;font-family:Arial,sans-serif;color:#1a1a1a;">
      <div style="flex:1;border:${mm(0.7)} solid #222;overflow:hidden;">${drawingArea}</div>
      <div style="height:${mm(20)};border:${mm(0.7)} solid #222;border-top:none;display:grid;grid-template-columns:1fr ${mm(30)} ${mm(30)};">
        <div style="display:flex;align-items:center;padding:0 ${mm(3)};border-right:${mm(0.5)} solid #ccc;">
          <span style="font-size:${mm(5)};font-weight:bold;">${info.label}</span>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;padding:0 ${mm(2)};border-right:${mm(0.5)} solid #ccc;gap:${mm(1)};">
          <span style="font-size:${mm(2.5)};color:#666;">SCALE</span>
          <span style="font-size:${mm(3.5)};font-weight:600;">${scale}</span>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;padding:0 ${mm(2)};gap:${mm(1)};">
          <span style="font-size:${mm(2.5)};color:#666;">SHEET</span>
          <span style="font-size:${mm(3.5)};font-weight:600;">${info.sheetNumber}</span>
        </div>
      </div>
    </div>
  `;
}

paperA.label = "General Arrangement";
paperA.sheetNumber = "A-01";
paperA.titleBlockTemplate = makeTitleBlock("Various");

paperB.label = "Details & Sections";
paperB.sheetNumber = "A-02";
paperB.titleBlockTemplate = makeTitleBlock("1:50 / 1:100");

paperA.style.position = "absolute";
paperA.style.left = "0";
paperA.style.top = "0";

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const aW = paperA.offsetWidth;
    paperB.style.position = "absolute";
    paperB.style.left = `${aW + 60}px`;
    paperB.style.top = "0";

    // paperA (General Arrangement) — full floor plan + right room detail
    board.addViewport(paperA, drawing.uuid, vpA.uuid, { x:  10, y: 10 }); // Floor Plan 1:100
    board.addViewport(paperA, drawing.uuid, vpB.uuid, { x: 230, y: 10 }); // Right Room 1:50

    // paperB — left room detail
    board.addViewport(paperB, drawing.uuid, vpC.uuid, { x: 10, y: 10 }); // Left Room 1:50
  });
});

// ── SheetBoard ↔ DrawingEditor wiring ───────────────────────────────────

function exitEditMode() {
  editor.activeDrawing = null;
  editor.activeTool = null;
  board.exitEditMode();
  board.requestRender();
}

// Double-click on a viewport → enter edit mode for that viewport.
// If another viewport was being edited, cancel it first.
board.addEventListener("viewportactivate", (e) => {
  const { drawingId, viewportId } = (e as CustomEvent<{ drawingId: string; viewportId: string }>).detail;

  const techDrawings = components.get(OBC.TechnicalDrawings);
  const drawing = techDrawings.list.get(drawingId);
  const vp = drawing?.viewports.get(viewportId);
  if (!drawing || !vp) return;

  if (editor.activeDrawing) editor.cancel();

  editor.activeDrawing = drawing;
  const vpEl = board.getViewportElement(drawingId, viewportId);
  if (vpEl) editor.setSource(vpEl, vp);

  editor.activeTool = OBF.LinearAnnotationsTool;
  board.enterEditMode(drawingId, viewportId);
});

// Click inside the active viewport → advance the tool state machine.
board.addEventListener("click", () => {
  if (editor.activeDrawing) {
    editor.step();
    board.requestRender();
  }
});

// Escape → cancel any in-progress annotation and exit edit mode.
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || !editor.activeDrawing) return;
  editor.cancel();
  exitEditMode();
});

// Re-render on every editor mousemove so hover highlights and placement
// previews appear in real time (the board only renders on demand).
editor.onDrawingMouseMove.add(() => board.requestRender());

// Re-render when a dimension is committed or deleted.
dimTool.system.onCommit.add(() => board.requestRender());
dimTool.system.onDelete.add(() => board.requestRender());

// Download the DXF string as a file when the viewport toolbar triggers a single-viewport export.
board.addEventListener("viewportdxfexport", (e) => {
  const { drawingId, viewportId, dxf } = (e as CustomEvent<{ drawingId: string; viewportId: string; dxf: string }>).detail;
  const name = components.get(OBC.TechnicalDrawings).list.get(drawingId)!.viewports.get(viewportId)!.name;
  const blob = new Blob([dxf], { type: "application/dxf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name ?? viewportId}.dxf`;
  a.click();
  URL.revokeObjectURL(url);
});

// Download the DXF string as a file when the paper toolbar triggers an export.
board.addEventListener("paperdxfexport", (e) => {
  const { paper, dxf } = (e as CustomEvent<{ paper: BUI.PaperSpace; dxf: string }>).detail;
  const name = (paper.getAttribute("label") || "drawing") + ".dxf";
  const blob = new Blob([dxf], { type: "application/dxf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
});
