/* MD
  ## Composing Technical Drawing Sheets 📐
  ---
  Architects and technical drafters who prepare construction document sheets need to arrange multiple drawing views — a full floor plan alongside room-scale details — on numbered sheets with title blocks, but wiring geometry projection, viewport scaling, sheet layout, annotation tools, and DXF export into a single coherent canvas requires assembling many independent systems by hand.

  The SheetBoard component is a multi-sheet drawing canvas that hosts PaperSpace sheets, each containing positioned technical drawing viewports at configurable scales, with a built-in edit mode that activates annotation tools directly inside any viewport.

  This tutorial covers creating a hidden 3D world as a geometry container for the drawing; defining floor plan geometry with outer walls and an interior partition with a doorway gap; creating three named viewports at different scales (1:100 full plan, two 1:50 room details); loading a font for annotation labels; configuring two PaperSpace sheets with title block templates, labels, and sheet numbers; placing viewports onto each sheet at specific pixel offsets after layout; wiring double-click to enter edit mode for a viewport; canceling with Escape; requesting re-renders on mouse move; and downloading DXF exports per viewport or per full sheet.

  By the end, you'll have a two-sheet drawing board with a floor plan overview and two room detail viewports, wired for edit mode entry, real-time mouse feedback, and DXF export at the viewport and sheet level.

  ### 🖖 Importing our Libraries
*/

import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components"
import * as OBF from "@thatopen/components-front"
import * as CUI from "../..";

/* MD
  ### 📋 Initializing the UI
  As always, let's first initialize the UI libraries. Remember you only have to do this once in your entire app.
*/

BUI.Manager.init();
CUI.Manager.init();

/* MD
  ### 🌎 Setting Up the 3D World
  The SheetBoard needs a 3D world to project geometry from. We'll create one with a hidden renderer — it's never shown on screen, but it provides the scene container that the technical drawings system requires.
*/

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

/* MD
  ### ✏️ Creating the Technical Drawing
  Now let's create the drawing geometry. We'll define a simple floor plan: an outer rectangular perimeter and an interior partition wall with a doorway gap. Three viewports are created from the same drawing — a 1:100 overview of the full plan, and two 1:50 detail views for each room.
*/

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

/* MD
  ### 🖊️ Setting Up the Drawing Editor
  The DrawingEditor handles annotation interactions inside any active viewport. We load a font for dimension labels so any annotation tool registered later can render text correctly.
*/

// ── DrawingEditor ─────────────────────────────────────────────────────────

const editor = components.get(OBF.DrawingEditor);
// Font for dimension labels — adjust the path to match your dev server setup.
await editor.fonts.load("/resources/fonts/PlusJakartaSans-Medium.ttf");

/* MD
  ### 📄 Configuring Sheets and Title Blocks
  Each PaperSpace element represents a numbered sheet. We assign a label, sheet number, and a title block template function to each one. The title block template receives a `mm` helper (converts millimetres to CSS pixels at the sheet's resolution), the drawing area element, and sheet metadata — and returns any HTML layout you need.
*/

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

/* MD
  ### 📐 Placing Viewports on Sheets
  Viewports are positioned on each sheet in pixel coordinates relative to the sheet's drawing area. We wait for the layout to settle before reading sheet dimensions, then place the full floor plan and the right room detail on sheet A-01, and the left room detail on sheet A-02.
*/

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

/* MD
  ### 🔌 Wiring SheetBoard and Editor Interactions
  The SheetBoard fires events that connect user gestures to the DrawingEditor. Double-clicking a viewport enters edit mode for that viewport. Pressing Escape cancels any in-progress operation and exits edit mode. Mouse moves trigger re-renders so hover highlights appear in real time. DXF export events from the viewport toolbar and sheet toolbar trigger file downloads.
*/

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

  board.enterEditMode(drawingId, viewportId);
});

// Escape → cancel any in-progress operation and exit edit mode.
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || !editor.activeDrawing) return;
  editor.cancel();
  exitEditMode();
});

// Re-render on every editor mousemove so hover highlights appear in real time
// (the board only renders on demand).
editor.onDrawingMouseMove.add(() => board.requestRender());

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

/* MD
  ### 🎉 Congratulations!
  You've successfully built a multi-sheet technical drawing board with in-place annotation and DXF export. From here, you can add more drawings, viewports, and sheets — or connect real BIM geometry by projecting IFC elements through the TechnicalDrawings system.
*/
