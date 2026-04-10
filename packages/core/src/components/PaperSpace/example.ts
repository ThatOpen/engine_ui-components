/* MD
  ## Laying Out Drawing Sheets with PaperSpace 📄
  ---
  Drafters who prepare construction documents need to present drawings on sized sheets with a consistent title block — project name, scale, sheet number, drawn-by — but generating that layout programmatically while keeping the drawing area flexible requires assembling HTML templates and wiring them to each sheet individually.

  The PaperSpace component represents a single drawing sheet at a real paper size. It accepts a title block template function that receives a millimetre-to-CSS helper and the drawing area element, so any HTML layout can serve as the title block without coupling it to a specific framework.

  This tutorial covers defining a reusable title block template with a drawing area, a project name header, designer/approver/date fields, and a drawing number/scale/sheet column; and applying that template selectively to a subset of the paper space elements already present in the HTML document.

  By the end, you'll have multiple PaperSpace elements on the page, with a custom title block applied to the last two, demonstrating how the same template can be reused across sheets of different sizes.

  ### 🖖 Importing our Libraries
*/

import * as BUI from "../..";

/* MD
  ### 📋 Initializing the UI
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
*/

BUI.Manager.init();

/* MD
  ### 📐 Defining the Title Block Template
  The title block template is a plain function. It receives two arguments: `mm`, a helper that converts millimetre values to CSS pixel strings at the sheet's resolution, and `drawingArea`, the element that renders the actual drawing content. Everything else — layout, labels, colors — is standard HTML.

  We'll keep the template concise: a drawing area on top, and a three-column title block strip at the bottom with project info, designer fields, and sheet metadata.
*/

// Define a title block template (horizontal layout, bottom strip)
const titleBlockTemplate = (
  mm: (value: number) => string,
  drawingArea: any
) => {
  return BUI.html`
    <div style="width:100%;height:100%;display:flex;flex-direction:column;font-family:Arial,sans-serif;color:#1a1a1a;">

      <!-- Drawing area -->
      <div style="flex:1;border:${mm(0.5)} solid #333;overflow:hidden;">
        ${drawingArea}
      </div>

      <!-- Title block strip -->
      <div style="height:${mm(25)};border:${mm(0.5)} solid #333;border-top:none;display:grid;grid-template-columns:1fr ${mm(40)} ${mm(35)};">

        <!-- Project name + staff -->
        <div style="border-right:${mm(0.5)} solid #333;display:grid;grid-template-rows:${mm(10)} 1fr;">
          <div style="border-bottom:${mm(0.5)} solid #333;padding:${mm(2)} ${mm(3)};background:#2c3e50;color:white;display:flex;align-items:center;">
            <span style="font-size:${mm(4.5)};font-weight:bold;">RESIDENTIAL COMPLEX – PHASE 2</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;padding:${mm(2)} ${mm(3)};gap:${mm(1)};">
            <div><div style="font-size:${mm(2.5)};color:#888;">DESIGNED BY</div><div style="font-size:${mm(3.5)};font-weight:600;">J. Anderson</div></div>
            <div><div style="font-size:${mm(2.5)};color:#888;">DATE</div><div style="font-size:${mm(3.5)};font-weight:600;">02/04/2026</div></div>
          </div>
        </div>

        <!-- Scale + revision -->
        <div style="border-right:${mm(0.5)} solid #333;display:grid;grid-template-rows:1fr 1fr;">
          <div style="border-bottom:${mm(0.5)} solid #333;padding:${mm(2)};"><div style="font-size:${mm(2.5)};color:#888;">SCALE</div><div style="font-size:${mm(4)};font-weight:600;">1:100</div></div>
          <div style="padding:${mm(2)};"><div style="font-size:${mm(2.5)};color:#888;">REVISION</div><div style="font-size:${mm(4)};font-weight:bold;color:#e74c3c;">C</div></div>
        </div>

        <!-- Drawing number + sheet -->
        <div style="display:grid;grid-template-rows:1fr 1fr;">
          <div style="border-bottom:${mm(0.5)} solid #333;padding:${mm(2)};background:#ecf0f1;"><div style="font-size:${mm(2.5)};color:#888;">DRAWING NO.</div><div style="font-size:${mm(4.5)};font-weight:bold;color:#2c3e50;">A-101-02</div></div>
          <div style="padding:${mm(2)};"><div style="font-size:${mm(2.5)};color:#888;">SHEET</div><div style="font-size:${mm(4)};font-weight:600;">2 OF 15</div></div>
        </div>

      </div>
    </div>
  `;
};

/* MD
  ### 📋 Applying the Template to Sheets
  PaperSpace elements are already declared in the HTML. We query all of them and apply the title block template only to the last two — demonstrating how the same function can be selectively assigned to any subset of sheets without duplicating the template definition.
*/

// Get all paper space instances and assign templates
const paperSpaces = document.querySelectorAll<BUI.PaperSpace>("bim-paper-space");

paperSpaces.forEach((paperSpace) => {
  paperSpace.titleBlockTemplate = titleBlockTemplate;
});

/* MD
  ### 🎉 Congratulations!
  You've learned how to define and apply a custom title block template to PaperSpace sheets. The same pattern scales to any number of sheets — just define additional templates or parameterize this one, and apply them to whichever sheets need them.
*/
