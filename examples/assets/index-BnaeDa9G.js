import{N as F,f as u,J as _,e as A,F as T,V as S,d as B,h as V,B as j,u as E}from"./index-DAd_Xb3m.js";import"./lit-html-BUQgm8fs.js";const M=(n,i)=>{const t=i[n],e=(t==null?void 0:t.name)??n,s=e.trim().split(/\s+/);let o,r;return s[0]&&s[0][0]&&(o=s[0][0].toUpperCase(),s[0][1]&&(r=s[0][1].toUpperCase())),s[1]&&s[1][0]&&(r=s[1][0].toUpperCase()),u`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(t!=null&&t.picture)&&(o||r)?u`
        <bim-label
          style=${F({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${o}${r}</bim-label>
        `:null}
      <bim-label .img=${t==null?void 0:t.picture}>${e}</bim-label>
    </div>
  `},k={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},N={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},x=async(n,i)=>{const{localId:t,category:e,children:s}=i;if(e&&s){const o={data:{Name:e,modelId:n.modelId,children:JSON.stringify(s.map(r=>r.localId))}};for(const r of s){const l=await x(n,r);l&&(o.children||(o.children=[]),o.children.push(l))}return o}if(t!==null){const r=await n.getItem(t).getAttributes();if(!r)return null;const l={data:{Name:String(r.getValue("Name")),modelId:n.modelId,localId:t}};for(const a of s??[]){const c=await x(n,a);c&&(l.children||(l.children=[]),l.children.push(c))}return l}return null},J=async n=>{const i=[];for(const t of n){const e=await t.getSpatialStructure(),s=await x(t,e);if(!s)continue;const o={data:{Name:t.modelId,modelId:t.modelId},children:[s]};i.push(o)}return i},O=n=>{const{components:i,models:t}=n,e=n.selectHighlighterName??"select";return u`
    <bim-table @rowcreated=${l=>{l.stopImmediatePropagation();const{row:a}=l.detail,c=i.get(A),d=i.get(T);a.onclick=async()=>{if(!e)return;const{data:{modelId:m,localId:b,children:y}}=a;if(!(m&&(b!==void 0||y)))return;const p=d.list.get(m);if(p){if(b!==void 0){const h=await p.getItemsChildren([b]),w={[m]:h.length!==0?new Set(h):new Set([b])};c.highlightByID(e,w,!0,!0)}else if(y){const h=JSON.parse(y),w=await p.getItemsChildren(h),I={[m]:w.length!==0?w:h};c.highlightByID(e,I,!0,!0)}}}}} @cellcreated=${({detail:l})=>{const{cell:a}=l;a.column==="Name"&&!a.rowData.Name&&(a.style.gridColumn="1 / -1")}} ${_(async l=>{if(!l)return;const a=l;a.loadFunction=async()=>new Promise(c=>{setTimeout(()=>{c(J(t))})}),a.loadData(!0)})} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `},q=(n,i=!0)=>{const t=S.create(O,n),[e,s]=t;if(e.hiddenColumns=["modelId","localId","children"],e.columns=["Name"],e.headersHidden=!0,i){const{components:o}=n,r=o.get(T);r.list.onItemSet.add(()=>s({models:r.list.values()})),r.list.onItemDeleted.add(()=>s())}return t},K=Object.freeze(Object.defineProperty({__proto__:null,spatialTree:q,spatialTreeTemplate:O},Symbol.toStringTag,{value:"Module"}));let D={};const R={_category:"Category",_localId:"LocalId",_guid:"Guid"},W=(n,i,t)=>{const e={data:{Name:i in R?R[i]:i,Value:t}};n.children||(n.children=[]),n.children.push(e)},L=(n,i,t)=>{var a;n in D||(D[n]=new Map);const e=D[n],s=i._localId.value;if(e.has(s))return e.get(s);const o=(a=i[t.defaultItemNameKey])==null?void 0:a.value,r=i._category.value,l={data:{Name:(o==null?void 0:o.toString().length)>0?o.toString():r??String(s)}};e.set(s,l);for(const c in i){const d=i[c];if(!Array.isArray(d))W(l,c,d.value);else{const m={data:{Name:c}};l.children||(l.children=[]),l.children.push(m);for(const b of d){const y=L(n,b,t);m.children||(m.children=[]),m.children.push(y)}}}return l},Q=async(n,i,t)=>{const e=n.get(T);Object.keys(i).length===0&&(D={});const s=[];for(const o in i){const r=e.list.get(o);if(!r)continue;o in D||(D[o]=new Map);const l=D[o],a=i[o];for(const c of a){let d=l.get(c);if(d){s.push(d);continue}const[m]=await r.getItemsData([c],t.itemsDataConfig);d=L(o,m,t),s.push(d)}}return s},z=n=>{const i={defaultItemNameKey:"Name",itemsDataConfig:{attributesDefault:!0,relationsDefault:{attributes:!1,relations:!1},relations:{IsDefinedBy:{attributes:!0,relations:!0},DefinesOcurrence:{attributes:!1,relations:!1},ContainedInStructure:{attributes:!0,relations:!0},ContainsElements:{attributes:!1,relations:!1},Decomposes:{attributes:!1,relations:!1}}},...n},{components:t,modelIdMap:e,emptySelectionWarning:s}=n;return u`
    <bim-table @cellcreated=${({detail:l})=>{const{cell:a}=l;a.column==="Name"&&!("Value"in a.rowData)&&(a.style.gridColumn="1 / -1")}} ${_(async l=>{if(!l)return;const a=l;a.loadFunction=async()=>Q(t,e,i),await a.loadData(!0)&&a.dispatchEvent(new Event("datacomputed"))})}>
      ${s?u`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},X=(n,i)=>{i.columns=[{name:"Name",width:"12rem"}],i.headersHidden=!0},Y=n=>{const i=S.create(z,n),[t]=i;return X(n,t),i},Z=Object.freeze(Object.defineProperty({__proto__:null,itemsData:Y,itemsDataTemplate:z},Symbol.toStringTag,{value:"Module"})),U=n=>{const{components:i}=n,t=n.missingDataMessage??"No models has been loaded yet",e=i.get(T),s=({detail:r})=>{const{cell:l}=r;l.style.padding="0.25rem 0"};return u`
    <bim-table ${_(async r=>{if(!r)return;const l=r,a=[];if(e.initialized)for(const[,c]of e.list){if(!c)continue;const d=await c.getMetadata(),m={data:{Name:c.modelId,modelId:c.modelId,metadata:JSON.stringify(d)}};a.push(m)}l.data=a})} @cellcreated=${s}>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        ${t}
      </bim-label>
    </bim-table>
  `},ee=(n,i)=>{const{components:t,actions:e,metaDataTags:s}=n,o=t.get(T),r=(e==null?void 0:e.dispose)??!0,l=(e==null?void 0:e.download)??!0,a=(e==null?void 0:e.visibility)??!0,c=s??[];i.hiddenColumns=["modelId","metadata"],i.headersHidden=!0,i.noIndentation=!0,i.dataTransform={Name:(d,m)=>{if(!o.initialized)return d;const{modelId:b,metadata:y}=m;if(!b)return d;const p=o.list.get(b);if(!p)return b;const h=[];if(y){const g=JSON.parse(y);for(const f of c){const v=g[f];if(!(typeof v=="string"||typeof v=="boolean"||typeof v=="number"))continue;const $=u`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${v}</bim-label>
            `;h.push($)}}let w;r&&(w=u`<bim-button @click=${()=>o.core.disposeModel(p.modelId)} icon="mdi:delete"></bim-button>`);let I;a&&(I=u`<bim-button @click=${async({target:f})=>{f.loading=!0,await p.setVisible(void 0,f.hasAttribute("data-model-hidden")),await o.core.update(!0),f.toggleAttribute("data-model-hidden"),f.icon=f.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye",f.loading=!1}} icon="mdi:eye"></bim-button>`);let C;return l&&(C=u`<bim-button @click=${async()=>{const f=await p.getBuffer(!1),v=new File([f],`${p.modelId}.frag`),$=document.createElement("a");$.href=URL.createObjectURL(v),$.download=v.name,$.click(),URL.revokeObjectURL($.href)}} icon="flowbite:download-solid"></bim-button>`),u`
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
      `}}},te=(n,i=!0)=>{const t=S.create(U,n),[e,s]=t;if(ee(n,e),i){const{components:o}=n,r=o.get(T),l=()=>setTimeout(()=>s());r.list.onItemSet.add(l),r.list.onItemDeleted.add(l)}return t},oe=Object.freeze(Object.defineProperty({__proto__:null,modelsList:te,modelsListTemplate:U},Symbol.toStringTag,{value:"Module"})),P=n=>{var a;const{components:i}=n,t=n.missingDataMessage??"No viewpoints to display",e=i.get(B),s=((a=n.topic)==null?void 0:a.viewpoints)??e.list.keys(),o=[];for(const c of s){const d=e.list.get(c);d&&o.push(d)}const r=c=>{if(!c)return;const d=c;d.data=o.map((m,b)=>({data:{Guid:m.guid,Title:m.title??`Viewpoint ${n.topic?b+1:""}`,Actions:""}}))},l=({detail:c})=>{const{cell:d}=c;d.style.padding="0.25rem"};return u`
    <bim-table ${_(r)} @cellcreated=${l}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${t}</bim-label>
    </bim-table>
  `},ne=(n,i)=>{const{components:t,topic:e}=n;i.noIndentation=!0,i.headersHidden=!0,i.hiddenColumns=["Guid"],i.columns=["Title",{name:"Actions",width:"auto"}];const s={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!e,...n.actions},o=t.get(B);i.dataTransform={Actions:(r,l)=>{const{Guid:a}=l;if(!(a&&typeof a=="string"))return r;const c=o.list.get(a);if(!c)return r;const d=async({target:C})=>{C.loading=!0,await c.go(),C.loading=!1};let m;s.selectComponents&&(m=u`
          <bim-button label="Select Components" @click=${async({target:g})=>{const f=t.get(T),v=t.get(A);if(!v.isSetup)return;g.loading=!0;const $=await f.guidsToModelIdMap([...c.selectionComponents]);await v.highlightByID("select",$),g.loading=!1}}></bim-button>
        `);let b;s.colorizeComponent&&(b=u`
          <bim-button label="Colorize Components" @click=${async({target:g})=>{g.loading=!0,await c.setColorizationState(!0),g.loading=!1}}></bim-button>
        `);let y;s.resetColors&&(y=u`
          <bim-button label="Reset Colors" @click=${async({target:g})=>{g.loading=!0,await c.setColorizationState(!1),g.loading=!1}}></bim-button>
        `);let p;s.updateCamera&&(p=u`
          <bim-button label="Update Camera" @click=${()=>c.updateCamera()}></bim-button>
        `);let h;s.unlink&&(h=u`
          <bim-button label="Unlink" @click=${()=>e==null?void 0:e.viewpoints.delete(c.guid)}></bim-button>
        `);let w;s.delete&&(w=u`
          <bim-button label="Delete" @click=${()=>{o.list.delete(c.guid),V.removeMenus()}}></bim-button>
        `);let I;return Object.values(s).includes(!0)&&(I=u`
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
      `}}},ie=(n,i=!0)=>{const t=S.create(P,n),[e,s]=t;if(ne(n,e),i){const{components:o,topic:r}=n,l=o.get(B);l.list.onItemUpdated.add(()=>s()),l.list.onItemDeleted.add(()=>s()),l.list.onCleared.add(()=>s()),r?(r.viewpoints.onItemAdded.add(()=>s()),r.viewpoints.onItemDeleted.add(()=>s()),r.viewpoints.onCleared.add(()=>s())):l.list.onItemSet.add(()=>s())}return t},se=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ie,viewpointsListTemplate:P},Symbol.toStringTag,{value:"Module"})),G=n=>{const{components:i}=n,t=n.missingDataMessage??"No topics to display",e=i.get(j),s=n.topics??e.list.values();return u`
    <bim-table no-indentation ${_(r=>{if(!r)return;const l=r;l.data=[...s].map(a=>{var c;return{data:{Guid:a.guid,Title:a.title,Status:a.status,Description:a.description??"",Author:a.creationAuthor,Assignee:a.assignedTo??"",Date:a.creationDate.toDateString(),DueDate:((c=a.dueDate)==null?void 0:c.toDateString())??"",Type:a.type,Priority:a.priority??"",Actions:""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${t}</bim-label>
    </bim-table>
  `},ae=(n,i)=>{const{dataStyles:t}=n;i.hiddenColumns.length===0&&(i.hiddenColumns=["Guid","Actions"]),i.columns=["Title"],i.dataTransform={Priority:e=>{if(typeof e!="string")return e;const o=((t==null?void 0:t.priorities)??k.priorities)[e];return u`
            <bim-label
              .icon=${o==null?void 0:o.icon}
              style=${F({...N,...o==null?void 0:o.style})}
            >${e}
            </bim-label>
          `},Status:e=>{if(typeof e!="string")return e;const o=((t==null?void 0:t.statuses)??k.statuses)[e];return u`
            <bim-label
              .icon=${o==null?void 0:o.icon}
              style=${F({...N,...o==null?void 0:o.style})}
            >${e}
            </bim-label>
          `},Type:e=>{if(typeof e!="string")return e;const o=((t==null?void 0:t.types)??k.types)[e];return u`
            <bim-label
              .icon=${o==null?void 0:o.icon}
              style=${F({...N,...o==null?void 0:o.style})}
            >${e}
            </bim-label>
          `},Author:e=>typeof e!="string"?e:M(e,(t==null?void 0:t.users)??k.users),Assignee:e=>typeof e!="string"?e:M(e,(t==null?void 0:t.users)??k.users)}},le=(n,i=!0)=>{const t=S.create(G,n),[e,s]=t;if(ae(n,e),i){const{components:o,topics:r}=n,l=o.get(j),a=()=>s();if(l.list.onItemUpdated.add(a),l.list.onItemDeleted.add(a),r)for(const c of r)c.relatedTopics.onItemAdded.add(a),c.relatedTopics.onItemDeleted.add(a),c.relatedTopics.onCleared.add(a);else l.list.onItemSet.add(a)}return t},re=Object.freeze(Object.defineProperty({__proto__:null,topicsList:le,topicsListTemplate:G},Symbol.toStringTag,{value:"Module"})),H=n=>{const{topic:i,styles:t,viewpoint:e}=n,s=n.missingDataMessage??"The topic has no comments";return u`
    <bim-table no-indentation ${_(r=>{if(!r)return;const l=r;let a=i.comments.values();e&&(a=[...i.comments.values()].filter(c=>c.viewpoint===e.guid)),l.data=[...a].map(c=>({data:{guid:c.guid,Comment:c.comment,author:(()=>{const d=t;if(!d)return c.author;const m=d[c.author];return(m==null?void 0:m.name)??c.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${s}</bim-label>
    </bim-table>
  `},ce=(n,i)=>{const{topic:t,styles:e}=n,s={delete:!0,...n.actions};i.headersHidden=!0,i.hiddenColumns=["guid","author"],i.dataTransform={Comment:(o,r)=>{const{guid:l}=r;if(typeof l!="string")return o;const a=t.comments.get(l);if(!a)return o;const c=()=>{t.comments.delete(l)};let d;if(s.delete){const m=`btn-${E.newRandomId()}`;d=u`
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
            <bim-button @click=${c} id=${m} icon="majesticons:delete-bin"></bim-button>
          </div>
        `}return u`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${M(a.author,e??k.users)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${a.date.toDateString()}</bim-label>
            </div>
            ${d}
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${a.comment}</bim-label>
        </div>
      `}}},de=(n,i=!0)=>{const t=S.create(H,n),[e,s]=t;if(ce(n,e),i){const{topic:o}=n,r=()=>s();o.comments.onItemSet.add(r),o.comments.onItemUpdated.add(r),o.comments.onItemDeleted.add(r),o.comments.onCleared.add(r)}return t},me=Object.freeze(Object.defineProperty({__proto__:null,commentsList:de,commentsListTemplate:H},Symbol.toStringTag,{value:"Module"})),ge={...K,...Z,...oe,...se,...re,...me};export{M as a,N as b,de as c,k as d,ge as e,le as t,ie as v};
