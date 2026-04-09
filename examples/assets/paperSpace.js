import{b as o}from"./lit-html-CgQwCkHV.js";import{M as d}from"./index-CL5enH56.js";import"./ref-B0YVjWyu.js";d.init();const r=(i,t)=>o`
    <div style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      color: #1a1a1a;
    ">
      <!-- Main drawing area slot -->
      <div style="
        flex: 1;
        border: ${i(.5)} solid #333;
        background: #fafafa;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      ">
        ${t}
      </div>
      
      <!-- Title block (horizontal, bottom) -->
      <div style="
        height: ${i(40)};
        border: ${i(.5)} solid #333;
        border-top: none;
        display: grid;
        grid-template-columns: ${i(40)} 1fr ${i(80)};
        background: white;
      ">
        <!-- Logo section -->
        <div style="
          border-right: ${i(.5)} solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: ${i(2)};
          background: #f8f9fa;
        ">
          <img 
            src="https://via.placeholder.com/150x150/2c3e50/ffffff?text=LOGO" 
            alt="Company Logo"
            style="
              width: ${i(20)};
              height: ${i(20)};
              object-fit: contain;
            "
          />
        </div>

        <!-- Project information section -->
        <div style="
          border-right: ${i(.5)} solid #333;
          display: grid;
          grid-template-rows: ${i(12)} 1fr;
        ">
          <!-- Project name -->
          <div style="
            border-bottom: ${i(.5)} solid #333;
            padding: ${i(2)} ${i(3)};
            background: #2c3e50;
            color: white;
            display: flex;
            align-items: center;
          ">
            <span style="
              font-size: ${i(5)};
              font-weight: bold;
              text-transform: uppercase;
            ">RESIDENTIAL COMPLEX - PHASE 2</span>
          </div>

          <!-- Details grid -->
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          ">
            <!-- Column 1 -->
            <div style="
              border-right: ${i(.5)} solid #333;
              display: grid;
              grid-template-rows: 1fr 1fr;
            ">
              <div style="
                border-bottom: ${i(.5)} solid #333;
                padding: ${i(1)} ${i(2)};
              ">
                <div style="
                  font-size: ${i(2.5)};
                  color: #666;
                  margin-bottom: ${i(.5)};
                ">DESIGNED BY</div>
                <div style="
                  font-size: ${i(3.5)};
                  font-weight: 600;
                ">J. Anderson</div>
              </div>
              <div style="
                padding: ${i(1)} ${i(2)};
              ">
                <div style="
                  font-size: ${i(2.5)};
                  color: #666;
                  margin-bottom: ${i(.5)};
                ">APPROVED BY</div>
                <div style="
                  font-size: ${i(3.5)};
                  font-weight: 600;
                ">M. Chen</div>
              </div>
            </div>

            <!-- Column 2 -->
            <div style="
              border-right: ${i(.5)} solid #333;
              display: grid;
              grid-template-rows: 1fr 1fr;
            ">
              <div style="
                border-bottom: ${i(.5)} solid #333;
                padding: ${i(1)} ${i(2)};
              ">
                <div style="
                  font-size: ${i(2.5)};
                  color: #666;
                  margin-bottom: ${i(.5)};
                ">DRAWN BY</div>
                <div style="
                  font-size: ${i(3.5)};
                  font-weight: 600;
                ">R. Martinez</div>
              </div>
              <div style="
                padding: ${i(1)} ${i(2)};
              ">
                <div style="
                  font-size: ${i(2.5)};
                  color: #666;
                  margin-bottom: ${i(.5)};
                ">DATE</div>
                <div style="
                  font-size: ${i(3.5)};
                  font-weight: 600;
                ">02/04/2026</div>
              </div>
            </div>

            <!-- Column 3 - Observations -->
            <div style="
              padding: ${i(1)} ${i(2)};
            ">
              <div style="
                font-size: ${i(2.5)};
                color: #666;
                margin-bottom: ${i(.5)};
              ">NOTES</div>
              <div style="
                font-size: ${i(2.8)};
                line-height: 1.3;
              ">Updated load calculations per structural review</div>
            </div>
          </div>
        </div>

        <!-- Drawing info section -->
        <div style="
          display: grid;
          grid-template-rows: repeat(4, 1fr);
        ">
          <!-- Drawing number -->
          <div style="
            border-bottom: ${i(.5)} solid #333;
            padding: ${i(1)} ${i(2)};
            background: #ecf0f1;
          ">
            <div style="
              font-size: ${i(2.2)};
              color: #666;
            ">DRAWING NO.</div>
            <div style="
              font-size: ${i(4.5)};
              font-weight: bold;
              color: #2c3e50;
            ">A-101-02</div>
          </div>

          <!-- Revision -->
          <div style="
            border-bottom: ${i(.5)} solid #333;
            padding: ${i(1)} ${i(2)};
          ">
            <div style="
              font-size: ${i(2.2)};
              color: #666;
            ">REVISION</div>
            <div style="
              font-size: ${i(4)};
              font-weight: bold;
              color: #e74c3c;
            ">C</div>
          </div>

          <!-- Scale -->
          <div style="
            border-bottom: ${i(.5)} solid #333;
            padding: ${i(1)} ${i(2)};
          ">
            <div style="
              font-size: ${i(2.2)};
              color: #666;
            ">SCALE</div>
            <div style="
              font-size: ${i(3.5)};
              font-weight: 600;
            ">1:100</div>
          </div>

          <!-- Sheet -->
          <div style="
            padding: ${i(1)} ${i(2)};
          ">
            <div style="
              font-size: ${i(2.2)};
              color: #666;
            ">SHEET</div>
            <div style="
              font-size: ${i(3.5)};
              font-weight: 600;
            ">2 OF 15</div>
          </div>
        </div>
      </div>
    </div>
  `,e=document.querySelectorAll("bim-paper-space");e.forEach((i,t)=>{t>=e.length-2&&(i.titleBlockTemplate=r)});
