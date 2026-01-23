import{v as F,d as u,c as _,i as x,F as $,e as S,V as U,H as G,B,l as V}from"./index-DPXt1yPz.js";import"./lit-html-CgQwCkHV.js";const N=(n,s)=>{const o=s[n],e=(o==null?void 0:o.name)??n,i=e.trim().split(/\s+/);let t,l;return i[0]&&i[0][0]&&(t=i[0][0].toUpperCase(),i[0][1]&&(l=i[0][1].toUpperCase())),i[1]&&i[1][0]&&(l=i[1][0].toUpperCase()),u`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(o!=null&&o.picture)&&(t||l)?u`
        <bim-label
          style=${F({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${t}${l}</bim-label>
        `:null}
      <bim-label .img=${o==null?void 0:o.picture}>${e}</bim-label>
    </div>
  `},k={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},M={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},A=async(n,s)=>{const{localId:o,category:e,children:i}=s;if(e&&i){const t={data:{Name:e,modelId:n.modelId,children:JSON.stringify(i.map(l=>l.localId))}};for(const l of i){const c=await A(n,l);c&&(t.children||(t.children=[]),t.children.push(c))}return t}if(o!==null){const l=await n.getItem(o).getAttributes();if(!l)return null;const c={data:{Name:String(l.getValue("Name")),modelId:n.modelId,localId:o}};for(const r of i??[]){const a=await A(n,r);a&&(c.children||(c.children=[]),c.children.push(a))}return c}return null},J=async n=>{const s=[];for(const o of n){const e=await o.getSpatialStructure(),i=await A(o,e);if(!i)continue;const t={data:{Name:o.modelId,modelId:o.modelId},children:[i]};s.push(t)}return s},O=n=>{const{components:s,models:o}=n,e=n.selectHighlighterName??"select";return u`
    <bim-table @rowcreated=${c=>{c.stopImmediatePropagation();const{row:r}=c.detail,a=s.get(x),d=s.get($);r.onclick=async()=>{if(!e)return;const{data:{modelId:m,localId:b,children:g}}=r;if(!(m&&(b!==void 0||g)))return;const f=d.list.get(m);if(f){if(b!==void 0){const h=await f.getItemsChildren([b]),w={[m]:h.length!==0?new Set(h):new Set([b])};a.highlightByID(e,w,!0,!0)}else if(g){const h=JSON.parse(g),w=await f.getItemsChildren(h),T={[m]:w.length!==0?w:h};a.highlightByID(e,T,!0,!0)}}}}} @cellcreated=${({detail:c})=>{const{cell:r}=c;r.column==="Name"&&!r.rowData.Name&&(r.style.gridColumn="1 / -1")}} ${_(async c=>{if(!c)return;const r=c;r.loadFunction=async()=>new Promise(a=>{setTimeout(()=>{a(J(o))})}),r.loadData(!0)})} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `},q=(n,s=!0)=>{const o=S.create(O,n),[e,i]=o;if(e.hiddenColumns=["modelId","localId","children"],e.columns=["Name"],e.headersHidden=!0,s){const{components:t}=n,l=t.get($);l.list.onItemSet.add(()=>i({models:l.list.values()})),l.list.onItemDeleted.add(()=>i())}return o},K=Object.freeze(Object.defineProperty({__proto__:null,spatialTree:q,spatialTreeTemplate:O},Symbol.toStringTag,{value:"Module"}));let D={};const R={_category:"Category",_localId:"LocalId",_guid:"Guid"},Q=(n,s,o,e,i,t)=>{const l={data:{type:"attribute",modelId:e,localId:i,Name:s in R?R[s]:s,Value:o,dataType:t}};n.children||(n.children=[]),n.children.push(l)},j=(n,s,o)=>{var r;n in D||(D[n]=new Map);const e=D[n],i=s._localId.value;if(e.has(i))return e.get(i);const t=(r=s[o.defaultItemNameKey])==null?void 0:r.value,l=s._category.value,c={data:{modelId:n,localId:i,type:"item",Name:(t==null?void 0:t.toString().length)>0?t.toString():l??String(i)}};e.set(i,c);for(const a in s){const d=s[a];if(!Array.isArray(d))Q(c,a,d.value,n,i,d.type);else{const m={data:{Name:a,type:"relation"}};c.children||(c.children=[]),c.children.push(m);for(const b of d){const g=j(n,b,o);m.children||(m.children=[]),m.children.push(g)}}}return c},W=async(n,s,o)=>{const e=n.get($);Object.keys(s).length===0&&(D={});const i=[];for(const t in s){const l=e.list.get(t);if(!l)continue;t in D||(D[t]=new Map);const c=D[t],r=s[t];for(const a of r){let d=c.get(a);if(d){i.push(d);continue}const[m]=await l.getItemsData([a],o.itemsDataConfig);d=j(t,m,o),i.push(d)}}return i},L=n=>{const s={defaultItemNameKey:"Name",itemsDataConfig:{attributesDefault:!0,relationsDefault:{attributes:!1,relations:!1},relations:{IsDefinedBy:{attributes:!0,relations:!0},DefinesOcurrence:{attributes:!1,relations:!1},ContainedInStructure:{attributes:!0,relations:!0},ContainsElements:{attributes:!1,relations:!1},Decomposes:{attributes:!1,relations:!1}}},...n},{components:o,modelIdMap:e,emptySelectionWarning:i}=n,t=Object.keys(e).reduce((r,a)=>(a.includes("DELTA")||(r[a]=e[a]),r),{});return u`
    <bim-table @cellcreated=${({detail:r})=>{const{cell:a}=r,{Name:d,Value:m}=a.rowData;d&&m===void 0&&setTimeout(()=>{a.style.gridColumn="1 / -1"})}} ${_(async r=>{if(!r)return;const a=r;a.loadFunction=async()=>W(o,t,s),await a.loadData(!0)&&a.dispatchEvent(new Event("datacomputed"))})}>
      ${i?u`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},X=new Map,Y={METRE:"m",SQUARE_METRE:"m²",CUBIC_METRE:"m³"},Z=async(n,s)=>{const e=n.get($).list.get(s);if(!e)throw new Error(`ItemsDataUI: model ${s} not found.`);let i=X.get(e.modelId);if(!i){const[t]=Object.values(await e.getItemsOfCategories([/UNITASSIGNMENT/])).flat(),[l]=await e.getItemsData([t],{relations:{Units:{relations:!1,attributes:!0}}});if(!Array.isArray(l.Units))return[];i=l.Units}return i},ee=(n,s)=>{const{components:o}=n;s.columns=[{name:"Name",width:"12rem"}],s.visibleColumns=["Name","Value"],s.headersHidden=!0,s.dataTransform={Value:(e,i)=>{const{dataType:t,modelId:l}=i;return t?u`<bim-label ${_(async r=>{if(!(r&&l))return;const a=await Z(o,l),d=t.replace("IFC","").replace("MEASURE","UNIT"),m=a.find(g=>g.UnitType&&"value"in g.UnitType?g.UnitType.value===d:!1);if(!m||!(m.Name&&"value"in m.Name))return e;const b=`${e.toFixed(2)} ${Y[m.Name.value]??m.Name.value}`;r.textContent=b})}></bim-label>`:e}}},te=n=>{const s=S.create(L,n),[o]=s;return ee(n,o),s},oe=Object.freeze(Object.defineProperty({__proto__:null,itemsData:te,itemsDataTemplate:L},Symbol.toStringTag,{value:"Module"})),z=n=>{const{components:s}=n,o=n.missingDataMessage??"No models has been loaded yet",e=s.get($),i=({detail:l})=>{const{cell:c}=l;c.style.padding="0.25rem 0"};return u`
    <bim-table ${_(async l=>{if(!l)return;const c=l,r=[];if(e.initialized)for(const[,a]of e.list){if(!(a&&!a.isDeltaModel))continue;const d=await a.getMetadata(),m={data:{Name:a.modelId,modelId:a.modelId,metadata:JSON.stringify(d)}};r.push(m)}c.data=r})} @cellcreated=${i}>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        ${o}
      </bim-label>
    </bim-table>
  `},ne=(n,s)=>{const{components:o,actions:e,metaDataTags:i}=n,t=o.get($),l=(e==null?void 0:e.dispose)??!0,c=(e==null?void 0:e.download)??!0,r=(e==null?void 0:e.visibility)??!0,a=i??[];s.hiddenColumns=["modelId","metadata"],s.headersHidden=!0,s.noIndentation=!0,s.dataTransform={Name:(d,m)=>{if(!t.initialized)return d;const{modelId:b,metadata:g}=m;if(!b)return d;const f=t.list.get(b);if(!f)return b;const h=[];if(g){const p=JSON.parse(g);for(const y of a){const v=p[y];if(!(typeof v=="string"||typeof v=="boolean"||typeof v=="number"))continue;const I=u`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${v}</bim-label>
            `;h.push(I)}}let w;l&&(w=u`<bim-button @click=${()=>t.core.disposeModel(f.modelId)} icon="mdi:delete"></bim-button>`);let T;r&&(T=u`<bim-button @click=${async({target:y})=>{y.loading=!0,await f.setVisible(void 0,y.hasAttribute("data-model-hidden")),await t.core.update(!0),y.toggleAttribute("data-model-hidden"),y.icon=y.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye",y.loading=!1}} icon="mdi:eye"></bim-button>`);let C;return c&&(C=u`<bim-button @click=${async()=>{const y=await f.getBuffer(!1),v=new File([y],`${f.modelId}.frag`),I=document.createElement("a");I.href=URL.createObjectURL(v),I.download=v.name,I.click(),URL.revokeObjectURL(I.href)}} icon="flowbite:download-solid"></bim-button>`),u`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${d}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${h}
          </div>
        </div>
        <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
          ${C}
          ${T}
          ${w}
        </div>
       </div>
      `}}},ie=(n,s=!0)=>{const o=S.create(z,n),[e,i]=o;if(ne(n,e),s){const{components:t}=n,l=t.get($),c=()=>setTimeout(()=>i());l.list.onItemSet.add(c),l.list.onItemDeleted.add(c)}return o},se=Object.freeze(Object.defineProperty({__proto__:null,modelsList:ie,modelsListTemplate:z},Symbol.toStringTag,{value:"Module"})),E=n=>{var r;const{components:s}=n,o=n.missingDataMessage??"No viewpoints to display",e=s.get(U),i=((r=n.topic)==null?void 0:r.viewpoints)??e.list.keys(),t=[];for(const a of i){const d=e.list.get(a);d&&t.push(d)}const l=a=>{if(!a)return;const d=a;d.data=t.map((m,b)=>({data:{Guid:m.guid,Title:m.title??`Viewpoint ${n.topic?b+1:""}`,Actions:""}}))},c=({detail:a})=>{const{cell:d}=a;d.style.padding="0.25rem"};return u`
    <bim-table ${_(l)} @cellcreated=${c}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${o}</bim-label>
    </bim-table>
  `},ae=(n,s)=>{const{components:o,topic:e}=n;s.noIndentation=!0,s.headersHidden=!0,s.hiddenColumns=["Guid"],s.columns=["Title",{name:"Actions",width:"auto"}];const i={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!e,...n.actions},t=o.get(U);s.dataTransform={Actions:(l,c)=>{const{Guid:r}=c;if(!(r&&typeof r=="string"))return l;const a=t.list.get(r);if(!a)return l;const d=async({target:C})=>{C.loading=!0,await a.go(),C.loading=!1};let m;i.selectComponents&&(m=u`
          <bim-button label="Select Components" @click=${async({target:p})=>{const y=o.get($),v=o.get(x);if(!v.isSetup)return;p.loading=!0;const I=await y.guidsToModelIdMap([...a.selectionComponents]);await v.highlightByID("select",I),p.loading=!1}}></bim-button>
        `);let b;i.colorizeComponent&&(b=u`
          <bim-button label="Colorize Components" @click=${async({target:p})=>{p.loading=!0,await a.setColorizationState(!0),p.loading=!1}}></bim-button>
        `);let g;i.resetColors&&(g=u`
          <bim-button label="Reset Colors" @click=${async({target:p})=>{p.loading=!0,await a.setColorizationState(!1),p.loading=!1}}></bim-button>
        `);let f;i.updateCamera&&(f=u`
          <bim-button label="Update Camera" @click=${()=>a.updateCamera()}></bim-button>
        `);let h;i.unlink&&(h=u`
          <bim-button label="Unlink" @click=${()=>e==null?void 0:e.viewpoints.delete(a.guid)}></bim-button>
        `);let w;i.delete&&(w=u`
          <bim-button label="Delete" @click=${()=>{t.list.delete(a.guid),G.removeMenus()}}></bim-button>
        `);let T;return Object.values(i).includes(!0)&&(T=u`
          <bim-button icon="prime:ellipsis-v">
            <bim-context-menu>
              ${m}
              ${b}
              ${g}
              ${f}
              ${h}
              ${w}
            </bim-context-menu>
          </bim-button>
        `),u`
        <bim-button icon="ph:eye-fill" @click=${d}></bim-button>
        ${T}
      `}}},le=(n,s=!0)=>{const o=S.create(E,n),[e,i]=o;if(ae(n,e),s){const{components:t,topic:l}=n,c=t.get(U);c.list.onItemUpdated.add(()=>i()),c.list.onItemDeleted.add(()=>i()),c.list.onCleared.add(()=>i()),l?(l.viewpoints.onItemAdded.add(()=>i()),l.viewpoints.onItemDeleted.add(()=>i()),l.viewpoints.onCleared.add(()=>i())):c.list.onItemSet.add(()=>i())}return o},re=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:le,viewpointsListTemplate:E},Symbol.toStringTag,{value:"Module"})),P=n=>{const{components:s}=n,o=n.missingDataMessage??"No topics to display",e=s.get(B),i=n.topics??e.list.values();return u`
    <bim-table no-indentation ${_(l=>{if(!l)return;const c=l;c.data=[...i].map(r=>{var a;return{data:{Guid:r.guid,Title:r.title,Status:r.status,Description:r.description??"",Author:r.creationAuthor,Assignee:r.assignedTo??"",Date:r.creationDate.toDateString(),DueDate:((a=r.dueDate)==null?void 0:a.toDateString())??"",Type:r.type,Priority:r.priority??"",Actions:""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${o}</bim-label>
    </bim-table>
  `},ce=(n,s)=>{const{dataStyles:o}=n;s.hiddenColumns.length===0&&(s.hiddenColumns=["Guid","Actions"]),s.columns=["Title"],s.dataTransform={Priority:e=>{if(typeof e!="string")return e;const t=((o==null?void 0:o.priorities)??k.priorities)[e];return u`
            <bim-label
              .icon=${t==null?void 0:t.icon}
              style=${F({...M,...t==null?void 0:t.style})}
            >${e}
            </bim-label>
          `},Status:e=>{if(typeof e!="string")return e;const t=((o==null?void 0:o.statuses)??k.statuses)[e];return u`
            <bim-label
              .icon=${t==null?void 0:t.icon}
              style=${F({...M,...t==null?void 0:t.style})}
            >${e}
            </bim-label>
          `},Type:e=>{if(typeof e!="string")return e;const t=((o==null?void 0:o.types)??k.types)[e];return u`
            <bim-label
              .icon=${t==null?void 0:t.icon}
              style=${F({...M,...t==null?void 0:t.style})}
            >${e}
            </bim-label>
          `},Author:e=>typeof e!="string"?e:N(e,(o==null?void 0:o.users)??k.users),Assignee:e=>typeof e!="string"?e:N(e,(o==null?void 0:o.users)??k.users)}},de=(n,s=!0)=>{const o=S.create(P,n),[e,i]=o;if(ce(n,e),s){const{components:t,topics:l}=n,c=t.get(B),r=()=>i();if(c.list.onItemUpdated.add(r),c.list.onItemDeleted.add(r),l)for(const a of l)a.relatedTopics.onItemAdded.add(r),a.relatedTopics.onItemDeleted.add(r),a.relatedTopics.onCleared.add(r);else c.list.onItemSet.add(r)}return o},me=Object.freeze(Object.defineProperty({__proto__:null,topicsList:de,topicsListTemplate:P},Symbol.toStringTag,{value:"Module"})),H=n=>{const{topic:s,styles:o,viewpoint:e}=n,i=n.missingDataMessage??"The topic has no comments";return u`
    <bim-table no-indentation ${_(l=>{if(!l)return;const c=l;let r=s.comments.values();e&&(r=[...s.comments.values()].filter(a=>a.viewpoint===e.guid)),c.data=[...r].map(a=>({data:{guid:a.guid,Comment:a.comment,author:(()=>{const d=o;if(!d)return a.author;const m=d[a.author];return(m==null?void 0:m.name)??a.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${i}</bim-label>
    </bim-table>
  `},ue=(n,s)=>{const{topic:o,styles:e}=n,i={delete:!0,...n.actions};s.headersHidden=!0,s.hiddenColumns=["guid","author"],s.dataTransform={Comment:(t,l)=>{const{guid:c}=l;if(typeof c!="string")return t;const r=o.comments.get(c);if(!r)return t;const a=()=>{o.comments.delete(c)};let d;if(i.delete){const m=`btn-${V.newRandomId()}`;d=u`
          <div>
            <style>
              #${m} {
                background-color: transparent;
                --bim-label--c: var(--bim-ui_bg-contrast-60)
              }
  
              #${m}:hover {
                --bim-label--c: #FF5252;
              }
            </style>
            <bim-button @click=${a} id=${m} icon="majesticons:delete-bin"></bim-button>
          </div>
        `}return u`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${N(r.author,e??k.users)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${r.date.toDateString()}</bim-label>
            </div>
            ${d}
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${r.comment}</bim-label>
        </div>
      `}}},be=(n,s=!0)=>{const o=S.create(H,n),[e,i]=o;if(ue(n,e),s){const{topic:t}=n,l=()=>i();t.comments.onItemSet.add(l),t.comments.onItemUpdated.add(l),t.comments.onItemDeleted.add(l),t.comments.onCleared.add(l)}return o},ge=Object.freeze(Object.defineProperty({__proto__:null,commentsList:be,commentsListTemplate:H},Symbol.toStringTag,{value:"Module"})),ye={...K,...oe,...se,...re,...me,...ge};export{N as a,M as b,be as c,k as d,ye as e,de as t,le as v};
