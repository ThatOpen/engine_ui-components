<<<<<<< HEAD
import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as n,C as e}from"./index-W5V5HNuJ.js";import"./state-DYefyXr3.js";import{x as a}from"./lit-html-paDGiEfB.js";import"./ref-CInB0H-f.js";n.init();const t=document.createElement("bim-table"),r=e.create(()=>a`
=======
import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as n,C as e}from"./index-CcrzIsUO.js";import"./state-DYefyXr3.js";import{x as a}from"./lit-html-paDGiEfB.js";import"./ref-CInB0H-f.js";n.init();const t=document.createElement("bim-table"),r=e.create(()=>a`
>>>>>>> main
    <!-- The most important thing is to have the slot attribute set as missing-data -->
    <!-- Other than that, the element can hold anything inside -->
    <!-- Be aware you can use this missing-data slot no matter if you are not loading data asynchronously -->
    <div slot="missing-data"
      style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
      <bim-label>No data loaded!</bim-label>
      <bim-button @click=${()=>t.loadData()} label="Load Data" style="width: 100%;"></bim-button>
    </div>
  `);t.append(r);const i=e.create(()=>a`
    <bim-checkbox label="Force Load Error" inverted></bim-checkbox>
  `);t.loadFunction=async()=>{if(i.checked)throw new Error("You have forced an error and data couldn't be loaded! Try to disable the 'Force Load Error' checkbox.");const o=await fetch("https://thatopen.github.io/engine_ui-components/resources/table-data.json");if(!o.ok)throw new Error("Failed fetching data from GitHub!");return await o.json()};const l=e.create(()=>a`
    <!-- Just as it happens with the missing-data slot, here the important thing is to have the slot attribute set as error-loading -->
    <div slot="error-loading"
      style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
      <!-- To specify the table where it needs to display the message thrown by the error, you need to include data-table-element='error-message' in any element inside the error-loading slot -->
      <bim-label data-table-element='error-message'>Data failed to load!</bim-label>
      <bim-button @click=${()=>t.loadData()} label="Try Again" style="width: 100%;"></bim-button>
    </div>
  `);t.append(l);const s=e.create(()=>a`
    <bim-button @click=${()=>t.data=[]} label="Clean Data"></bim-button>
  `),d=e.create(()=>a`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.375rem; width: 10rem;">
        ${i}
        ${s}
      </div>
      ${t}
    </div>
  `);document.body.append(d);
