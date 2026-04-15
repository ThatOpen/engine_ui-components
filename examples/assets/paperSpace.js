import{b as d}from"./if-defined-DypSrBBK.js";import{M as t}from"./index-CKW6zj6D.js";t.init();const o=(i,e)=>d`
    <div style="width:100%;height:100%;display:flex;flex-direction:column;font-family:Arial,sans-serif;color:#1a1a1a;">

      <!-- Drawing area -->
      <div style="flex:1;border:${i(.5)} solid #333;overflow:hidden;">
        ${e}
      </div>

      <!-- Title block strip -->
      <div style="height:${i(25)};border:${i(.5)} solid #333;border-top:none;display:grid;grid-template-columns:1fr ${i(40)} ${i(35)};">

        <!-- Project name + staff -->
        <div style="border-right:${i(.5)} solid #333;display:grid;grid-template-rows:${i(10)} 1fr;">
          <div style="border-bottom:${i(.5)} solid #333;padding:${i(2)} ${i(3)};background:#2c3e50;color:white;display:flex;align-items:center;">
            <span style="font-size:${i(4.5)};font-weight:bold;">RESIDENTIAL COMPLEX – PHASE 2</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;padding:${i(2)} ${i(3)};gap:${i(1)};">
            <div><div style="font-size:${i(2.5)};color:#888;">DESIGNED BY</div><div style="font-size:${i(3.5)};font-weight:600;">J. Anderson</div></div>
            <div><div style="font-size:${i(2.5)};color:#888;">DATE</div><div style="font-size:${i(3.5)};font-weight:600;">02/04/2026</div></div>
          </div>
        </div>

        <!-- Scale + revision -->
        <div style="border-right:${i(.5)} solid #333;display:grid;grid-template-rows:1fr 1fr;">
          <div style="border-bottom:${i(.5)} solid #333;padding:${i(2)};"><div style="font-size:${i(2.5)};color:#888;">SCALE</div><div style="font-size:${i(4)};font-weight:600;">1:100</div></div>
          <div style="padding:${i(2)};"><div style="font-size:${i(2.5)};color:#888;">REVISION</div><div style="font-size:${i(4)};font-weight:bold;color:#e74c3c;">C</div></div>
        </div>

        <!-- Drawing number + sheet -->
        <div style="display:grid;grid-template-rows:1fr 1fr;">
          <div style="border-bottom:${i(.5)} solid #333;padding:${i(2)};background:#ecf0f1;"><div style="font-size:${i(2.5)};color:#888;">DRAWING NO.</div><div style="font-size:${i(4.5)};font-weight:bold;color:#2c3e50;">A-101-02</div></div>
          <div style="padding:${i(2)};"><div style="font-size:${i(2.5)};color:#888;">SHEET</div><div style="font-size:${i(4)};font-weight:600;">2 OF 15</div></div>
        </div>

      </div>
    </div>
  `,l=document.querySelectorAll("bim-paper-space");l.forEach(i=>{i.titleBlockTemplate=o});
