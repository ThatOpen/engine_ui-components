import{X as F,f as u,J as k,n as R,F as T,U as S,V as A,E as H,B as j,h as V}from"./index-CDIUJH9Y.js";import"./lit-html-CgQwCkHV.js";const N=(n,s)=>{const t=s[n],e=(t==null?void 0:t.name)??n,i=e.trim().split(/\s+/);let o,r;return i[0]&&i[0][0]&&(o=i[0][0].toUpperCase(),i[0][1]&&(r=i[0][1].toUpperCase())),i[1]&&i[1][0]&&(r=i[1][0].toUpperCase()),u`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(t!=null&&t.picture)&&(o||r)?u`
        <bim-label
          style=${F({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${o}${r}</bim-label>
        `:null}
      <bim-label .img=${t==null?void 0:t.picture}>${e}</bim-label>
    </div>
  `},_={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},M={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},x=async(n,s)=>{const{localId:t,category:e,children:i}=s;if(e&&i){const o={data:{Name:e,modelId:n.modelId,children:JSON.stringify(i.map(r=>r.localId))}};for(const r of i){const c=await x(n,r);c&&(o.children||(o.children=[]),o.children.push(c))}return o}if(t!==null){const r=await n.getItem(t).getAttributes();if(!r)return null;const c={data:{Name:String(r.getValue("Name")),modelId:n.modelId,localId:t}};for(const l of i??[]){const a=await x(n,l);a&&(c.children||(c.children=[]),c.children.push(a))}return c}return null},J=async n=>{const s=[];for(const t of n){const e=await t.getSpatialStructure(),i=await x(t,e);if(!i)continue;const o={data:{Name:t.modelId,modelId:t.modelId},children:[i]};s.push(o)}return s},O=n=>{const{components:s,models:t}=n,e=n.selectHighlighterName??"select";return u`
    <bim-table @rowcreated=${c=>{c.stopImmediatePropagation();const{row:l}=c.detail,a=s.get(R),d=s.get(T);l.onclick=async()=>{if(!e)return;const{data:{modelId:m,localId:b,children:y}}=l;if(!(m&&(b!==void 0||y)))return;const p=d.list.get(m);if(p){if(b!==void 0){const h=await p.getItemsChildren([b]),w={[m]:h.length!==0?new Set(h):new Set([b])};a.highlightByID(e,w,!0,!0)}else if(y){const h=JSON.parse(y),w=await p.getItemsChildren(h),I={[m]:w.length!==0?w:h};a.highlightByID(e,I,!0,!0)}}}}} @cellcreated=${({detail:c})=>{const{cell:l}=c;l.column==="Name"&&!l.rowData.Name&&(l.style.gridColumn="1 / -1")}} ${k(async c=>{if(!c)return;const l=c;l.loadFunction=async()=>new Promise(a=>{setTimeout(()=>{a(J(t))})}),l.loadData(!0)})} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `},q=(n,s=!0)=>{const t=S.create(O,n),[e,i]=t;if(e.hiddenColumns=["modelId","localId","children"],e.columns=["Name"],e.headersHidden=!0,s){const{components:o}=n,r=o.get(T);r.list.onItemSet.add(()=>i({models:r.list.values()})),r.list.onItemDeleted.add(()=>i())}return t},K=Object.freeze(Object.defineProperty({__proto__:null,spatialTree:q,spatialTreeTemplate:O},Symbol.toStringTag,{value:"Module"}));let D={};const B={_category:"Category",_localId:"LocalId",_guid:"Guid"},X=(n,s,t,e,i)=>{const o={data:{type:"attribute",modelId:e,localId:i,Name:s in B?B[s]:s,Value:t}};n.children||(n.children=[]),n.children.push(o)},L=(n,s,t)=>{var l;n in D||(D[n]=new Map);const e=D[n],i=s._localId.value;if(e.has(i))return e.get(i);const o=(l=s[t.defaultItemNameKey])==null?void 0:l.value,r=s._category.value,c={data:{modelId:n,localId:i,type:"item",Name:(o==null?void 0:o.toString().length)>0?o.toString():r??String(i)}};e.set(i,c);for(const a in s){const d=s[a];if(!Array.isArray(d))X(c,a,d.value,n,i);else{const m={data:{Name:a,type:"relation"}};c.children||(c.children=[]),c.children.push(m);for(const b of d){const y=L(n,b,t);m.children||(m.children=[]),m.children.push(y)}}}return c},W=async(n,s,t)=>{const e=n.get(T);Object.keys(s).length===0&&(D={});const i=[];for(const o in s){const r=e.list.get(o);if(!r)continue;o in D||(D[o]=new Map);const c=D[o],l=s[o];for(const a of l){let d=c.get(a);if(d){i.push(d);continue}const[m]=await r.getItemsData([a],t.itemsDataConfig);d=L(o,m,t),i.push(d)}}return i},z=n=>{const s={defaultItemNameKey:"Name",itemsDataConfig:{attributesDefault:!0,relationsDefault:{attributes:!1,relations:!1},relations:{IsDefinedBy:{attributes:!0,relations:!0},DefinesOcurrence:{attributes:!1,relations:!1},ContainedInStructure:{attributes:!0,relations:!0},ContainsElements:{attributes:!1,relations:!1},Decomposes:{attributes:!1,relations:!1}}},...n},{components:t,modelIdMap:e,emptySelectionWarning:i}=n,o=Object.keys(e).reduce((l,a)=>(a.includes("DELTA")||(l[a]=e[a]),l),{});return u`
    <bim-table @cellcreated=${({detail:l})=>{const{cell:a}=l,{Name:d,Value:m}=a.rowData;d&&m===void 0&&setTimeout(()=>{a.style.gridColumn="1 / -1"})}} ${k(async l=>{if(!l)return;const a=l;a.loadFunction=async()=>W(t,o,s),await a.loadData(!0)&&a.dispatchEvent(new Event("datacomputed"))})}>
      ${i?u`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},Q=(n,s)=>{s.columns=[{name:"Name",width:"12rem"}],s.hiddenColumns=["modelId","localId","Actions","type"],s.headersHidden=!0},Y=n=>{const s=S.create(z,n),[t]=s;return Q(n,t),s},Z=Object.freeze(Object.defineProperty({__proto__:null,itemsData:Y,itemsDataTemplate:z},Symbol.toStringTag,{value:"Module"})),U=n=>{const{components:s}=n,t=n.missingDataMessage??"No models has been loaded yet",e=s.get(T),i=({detail:r})=>{const{cell:c}=r;c.style.padding="0.25rem 0"};return u`
    <bim-table ${k(async r=>{if(!r)return;const c=r,l=[];if(e.initialized)for(const[,a]of e.list){if(!a)continue;const d=await a.getMetadata(),m={data:{Name:a.modelId,modelId:a.modelId,metadata:JSON.stringify(d)}};l.push(m)}c.data=l})} @cellcreated=${i}>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        ${t}
      </bim-label>
    </bim-table>
  `},ee=(n,s)=>{const{components:t,actions:e,metaDataTags:i}=n,o=t.get(T),r=(e==null?void 0:e.dispose)??!0,c=(e==null?void 0:e.download)??!0,l=(e==null?void 0:e.visibility)??!0,a=i??[];s.hiddenColumns=["modelId","metadata"],s.headersHidden=!0,s.noIndentation=!0,s.dataTransform={Name:(d,m)=>{if(!o.initialized)return d;const{modelId:b,metadata:y}=m;if(!b)return d;const p=o.list.get(b);if(!p)return b;const h=[];if(y){const g=JSON.parse(y);for(const f of a){const v=g[f];if(!(typeof v=="string"||typeof v=="boolean"||typeof v=="number"))continue;const $=u`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${v}</bim-label>
            `;h.push($)}}let w;r&&(w=u`<bim-button @click=${()=>o.core.disposeModel(p.modelId)} icon="mdi:delete"></bim-button>`);let I;l&&(I=u`<bim-button @click=${async({target:f})=>{f.loading=!0,await p.setVisible(void 0,f.hasAttribute("data-model-hidden")),await o.core.update(!0),f.toggleAttribute("data-model-hidden"),f.icon=f.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye",f.loading=!1}} icon="mdi:eye"></bim-button>`);let C;return c&&(C=u`<bim-button @click=${async()=>{const f=await p.getBuffer(!1),v=new File([f],`${p.modelId}.frag`),$=document.createElement("a");$.href=URL.createObjectURL(v),$.download=v.name,$.click(),URL.revokeObjectURL($.href)}} icon="flowbite:download-solid"></bim-button>`),u`
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
          ${I}
          ${w}
        </div>
       </div>
      `}}},te=(n,s=!0)=>{const t=S.create(U,n),[e,i]=t;if(ee(n,e),s){const{components:o}=n,r=o.get(T),c=()=>setTimeout(()=>i());r.list.onItemSet.add(c),r.list.onItemDeleted.add(c)}return t},oe=Object.freeze(Object.defineProperty({__proto__:null,modelsList:te,modelsListTemplate:U},Symbol.toStringTag,{value:"Module"})),P=n=>{var l;const{components:s}=n,t=n.missingDataMessage??"No viewpoints to display",e=s.get(A),i=((l=n.topic)==null?void 0:l.viewpoints)??e.list.keys(),o=[];for(const a of i){const d=e.list.get(a);d&&o.push(d)}const r=a=>{if(!a)return;const d=a;d.data=o.map((m,b)=>({data:{Guid:m.guid,Title:m.title??`Viewpoint ${n.topic?b+1:""}`,Actions:""}}))},c=({detail:a})=>{const{cell:d}=a;d.style.padding="0.25rem"};return u`
    <bim-table ${k(r)} @cellcreated=${c}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${t}</bim-label>
    </bim-table>
  `},ne=(n,s)=>{const{components:t,topic:e}=n;s.noIndentation=!0,s.headersHidden=!0,s.hiddenColumns=["Guid"],s.columns=["Title",{name:"Actions",width:"auto"}];const i={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!e,...n.actions},o=t.get(A);s.dataTransform={Actions:(r,c)=>{const{Guid:l}=c;if(!(l&&typeof l=="string"))return r;const a=o.list.get(l);if(!a)return r;const d=async({target:C})=>{C.loading=!0,await a.go(),C.loading=!1};let m;i.selectComponents&&(m=u`
          <bim-button label="Select Components" @click=${async({target:g})=>{const f=t.get(T),v=t.get(R);if(!v.isSetup)return;g.loading=!0;const $=await f.guidsToModelIdMap([...a.selectionComponents]);await v.highlightByID("select",$),g.loading=!1}}></bim-button>
        `);let b;i.colorizeComponent&&(b=u`
          <bim-button label="Colorize Components" @click=${async({target:g})=>{g.loading=!0,await a.setColorizationState(!0),g.loading=!1}}></bim-button>
        `);let y;i.resetColors&&(y=u`
          <bim-button label="Reset Colors" @click=${async({target:g})=>{g.loading=!0,await a.setColorizationState(!1),g.loading=!1}}></bim-button>
        `);let p;i.updateCamera&&(p=u`
          <bim-button label="Update Camera" @click=${()=>a.updateCamera()}></bim-button>
        `);let h;i.unlink&&(h=u`
          <bim-button label="Unlink" @click=${()=>e==null?void 0:e.viewpoints.delete(a.guid)}></bim-button>
        `);let w;i.delete&&(w=u`
          <bim-button label="Delete" @click=${()=>{o.list.delete(a.guid),H.removeMenus()}}></bim-button>
        `);let I;return Object.values(i).includes(!0)&&(I=u`
          <bim-button icon="prime:ellipsis-v">
            <bim-context-menu>
              ${m}
              ${b}
              ${y}
              ${p}
              ${h}
              ${w}
            </bim-context-menu>
          </bim-button>
        `),u`
        <bim-button icon="ph:eye-fill" @click=${d}></bim-button>
        ${I}
      `}}},ie=(n,s=!0)=>{const t=S.create(P,n),[e,i]=t;if(ne(n,e),s){const{components:o,topic:r}=n,c=o.get(A);c.list.onItemUpdated.add(()=>i()),c.list.onItemDeleted.add(()=>i()),c.list.onCleared.add(()=>i()),r?(r.viewpoints.onItemAdded.add(()=>i()),r.viewpoints.onItemDeleted.add(()=>i()),r.viewpoints.onCleared.add(()=>i())):c.list.onItemSet.add(()=>i())}return t},se=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ie,viewpointsListTemplate:P},Symbol.toStringTag,{value:"Module"})),E=n=>{const{components:s}=n,t=n.missingDataMessage??"No topics to display",e=s.get(j),i=n.topics??e.list.values();return u`
    <bim-table no-indentation ${k(r=>{if(!r)return;const c=r;c.data=[...i].map(l=>{var a;return{data:{Guid:l.guid,Title:l.title,Status:l.status,Description:l.description??"",Author:l.creationAuthor,Assignee:l.assignedTo??"",Date:l.creationDate.toDateString(),DueDate:((a=l.dueDate)==null?void 0:a.toDateString())??"",Type:l.type,Priority:l.priority??"",Actions:""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${t}</bim-label>
    </bim-table>
  `},ae=(n,s)=>{const{dataStyles:t}=n;s.hiddenColumns.length===0&&(s.hiddenColumns=["Guid","Actions"]),s.columns=["Title"],s.dataTransform={Priority:e=>{if(typeof e!="string")return e;const o=((t==null?void 0:t.priorities)??_.priorities)[e];return u`
            <bim-label
              .icon=${o==null?void 0:o.icon}
              style=${F({...M,...o==null?void 0:o.style})}
            >${e}
            </bim-label>
          `},Status:e=>{if(typeof e!="string")return e;const o=((t==null?void 0:t.statuses)??_.statuses)[e];return u`
            <bim-label
              .icon=${o==null?void 0:o.icon}
              style=${F({...M,...o==null?void 0:o.style})}
            >${e}
            </bim-label>
          `},Type:e=>{if(typeof e!="string")return e;const o=((t==null?void 0:t.types)??_.types)[e];return u`
            <bim-label
              .icon=${o==null?void 0:o.icon}
              style=${F({...M,...o==null?void 0:o.style})}
            >${e}
            </bim-label>
          `},Author:e=>typeof e!="string"?e:N(e,(t==null?void 0:t.users)??_.users),Assignee:e=>typeof e!="string"?e:N(e,(t==null?void 0:t.users)??_.users)}},le=(n,s=!0)=>{const t=S.create(E,n),[e,i]=t;if(ae(n,e),s){const{components:o,topics:r}=n,c=o.get(j),l=()=>i();if(c.list.onItemUpdated.add(l),c.list.onItemDeleted.add(l),r)for(const a of r)a.relatedTopics.onItemAdded.add(l),a.relatedTopics.onItemDeleted.add(l),a.relatedTopics.onCleared.add(l);else c.list.onItemSet.add(l)}return t},re=Object.freeze(Object.defineProperty({__proto__:null,topicsList:le,topicsListTemplate:E},Symbol.toStringTag,{value:"Module"})),G=n=>{const{topic:s,styles:t,viewpoint:e}=n,i=n.missingDataMessage??"The topic has no comments";return u`
    <bim-table no-indentation ${k(r=>{if(!r)return;const c=r;let l=s.comments.values();e&&(l=[...s.comments.values()].filter(a=>a.viewpoint===e.guid)),c.data=[...l].map(a=>({data:{guid:a.guid,Comment:a.comment,author:(()=>{const d=t;if(!d)return a.author;const m=d[a.author];return(m==null?void 0:m.name)??a.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${i}</bim-label>
    </bim-table>
  `},ce=(n,s)=>{const{topic:t,styles:e}=n,i={delete:!0,...n.actions};s.headersHidden=!0,s.hiddenColumns=["guid","author"],s.dataTransform={Comment:(o,r)=>{const{guid:c}=r;if(typeof c!="string")return o;const l=t.comments.get(c);if(!l)return o;const a=()=>{t.comments.delete(c)};let d;if(i.delete){const m=`btn-${V.newRandomId()}`;d=u`
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
              ${N(l.author,e??_.users)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${l.date.toDateString()}</bim-label>
            </div>
            ${d}
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${l.comment}</bim-label>
        </div>
      `}}},de=(n,s=!0)=>{const t=S.create(G,n),[e,i]=t;if(ce(n,e),s){const{topic:o}=n,r=()=>i();o.comments.onItemSet.add(r),o.comments.onItemUpdated.add(r),o.comments.onItemDeleted.add(r),o.comments.onCleared.add(r)}return t},me=Object.freeze(Object.defineProperty({__proto__:null,commentsList:de,commentsListTemplate:G},Symbol.toStringTag,{value:"Module"})),ge={...K,...Z,...oe,...se,...re,...me};export{N as a,M as b,de as c,_ as d,ge as e,le as t,ie as v};
