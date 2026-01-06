import{b as t}from"./lit-html-CgQwCkHV.js";import{M as n,C as a}from"./index-Dxq5IOpt.js";import"./ref-B0YVjWyu.js";n.init();const e=document.createElement("bim-table"),r=a.create(()=>t`
    <!-- The most important thing is to have the slot attribute set as missing-data -->
    <!-- Other than that, the element can hold anything inside -->
    <!-- Be aware you can use this missing-data slot no matter if you are not loading data asynchronously -->
    <div slot="missing-data"
      style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
      <bim-label>No data loaded!</bim-label>
      <bim-button @click=${()=>e.loadData()} label="Load Data" style="width: 100%;"></bim-button>
    </div>
  `);e.append(r);const i=a.create(()=>t`
    <bim-checkbox label="Force Load Error" inverted></bim-checkbox>
  `);e.loadFunction=async()=>{if(i.checked)throw new Error("You have forced an error and data couldn't be loaded! Try to disable the 'Force Load Error' checkbox.");const o=await fetch("https://thatopen.github.io/engine_ui-components/resources/table-data.json");if(!o.ok)throw new Error("Failed fetching data from GitHub!");return await o.json()};const l=a.create(()=>t`
    <!-- Just as it happens with the missing-data slot, here the important thing is to have the slot attribute set as error-loading -->
    <div slot="error-loading"
      style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
      <!-- To specify the table where it needs to display the message thrown by the error, you need to include data-table-element='error-message' in any element inside the error-loading slot -->
      <bim-label data-table-element='error-message'>Data failed to load!</bim-label>
      <bim-button @click=${()=>e.loadData()} label="Try Again" style="width: 100%;"></bim-button>
    </div>
  `);e.append(l);const s=a.create(()=>t`
    <bim-button @click=${()=>e.data=[]} label="Clean Data"></bim-button>
  `),d=a.create(()=>t`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.375rem; width: 10rem;">
        ${i}
        ${s}
      </div>
      ${e}
    </div>
  `);document.body.append(d);
