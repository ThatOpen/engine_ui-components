import{m as O,F as T,V as R,e as j}from"./index-PQQfjRhF.js";import{Q as S,o as J,a as Q}from"./index-DQFDb4ne.js";import{o as F,b,n as _}from"./when-D9oPOCfO.js";const U=(e,a)=>{const i=a[e],t=(i==null?void 0:i.name)??e,s=t.trim().split(/\s+/);let n,l;return s[0]&&s[0][0]&&(n=s[0][0].toUpperCase(),s[0][1]&&(l=s[0][1].toUpperCase())),s[1]&&s[1][0]&&(l=s[1][0].toUpperCase()),b`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(n||l)?b`
        <bim-label
          style=${F({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${n}${l}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${t}</bim-label>
    </div>
  `},k={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},M={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},N=e=>e===null?[]:Array.isArray(e)?e:[e],B=(e,a)=>{if(e.localId!==null&&e.localId!==void 0&&a.push(e.localId),e.children)for(const i of e.children)B(i,a)},A=(e,a,i,t=!1,s=new Set)=>{const{localId:n,category:l,children:m}=a;if(l&&m){if(s.has(l)){const o=[];for(const c of m){const d=A(e,c,i,t,s);for(const u of N(d))u.data.category||(u.data={...u.data,category:l}),o.push(u)}return o.length>0?o:null}if(t&&m.length===1){const o=A(e,m[0],i,t,s);if(o&&!Array.isArray(o))return o.data={...o.data,category:l},o;if(Array.isArray(o)){for(const c of o)c.data.category||(c.data={...c.data,category:l});return o}return o}const r={data:{Name:l,category:l,modelId:e.modelId,children:JSON.stringify(m.map(o=>o.localId))}};for(const o of m){const c=A(e,o,i,t,s);for(const d of N(c))d.data.category||(d.data={...d.data,category:l}),r.children||(r.children=[]),r.children.push(d)}return r}if(n!=null){const r=i.get(n);if(r===void 0)return null;const o={data:{Name:r,modelId:e.modelId,localId:n}};for(const c of m??[]){const d=A(e,c,i,t,s);for(const u of N(d))o.children||(o.children=[]),o.children.push(u)}return o}return null},q=async(e,a=!1,i=new Set)=>{const t=[];for(const s of e){const n=await s.getSpatialStructure(),l=[];B(n,l);const m=new Map;if(l.length>0){const d=await s.getItemsData(l,{attributesDefault:!1,attributes:["Name"]});for(let u=0;u<l.length;u++){const y=d[u];if(!y)continue;const f=y.Name,w=f&&"value"in f?f.value:void 0;m.set(l[u],w==null?"":String(w))}}const r=A(s,n,m,a,i),o=N(r);if(o.length===0)continue;const c={data:{Name:s.modelId,modelId:s.modelId},children:o};t.push(c)}return t},z=e=>{const{components:a,models:i,collapseSingleChildCategories:t=!1,collapseCategories:s=[]}=e,n=new Set(s),l=e.selectHighlighterName??"select";return b`
    <bim-table @rowcreated=${c=>{c.stopImmediatePropagation();const{row:d}=c.detail,u=a.get(O),y=a.get(T);d.onclick=async()=>{if(!l)return;const{data:{modelId:f,localId:w,children:v}}=d;if(!(f&&(w!==void 0||v)))return;const I=y.list.get(f);if(I){if(w!==void 0){const p=await I.getItemsChildren([w]),g=p.length!==0?new Set(p):new Set([w]),h={[f]:g};u.highlightByID(l,h,!0)}else if(v){const p=JSON.parse(v),g=await I.getItemsChildren(p),h=g.length!==0?g:p,C={[f]:h};u.highlightByID(l,C,!0)}}}}} @cellcreated=${({detail:c})=>{const{cell:d}=c;d.column==="Name"&&!d.rowData.Name&&(d.style.gridColumn="1 / -1")}} ${_(async c=>{if(!c)return;const d=c;d.loadFunction=async()=>new Promise(u=>{setTimeout(()=>{u(q(i,t,n))})}),d.loadData(!0)})} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `},K=(e,a=!0)=>{const i=S.create(z,e),[t,s]=i;if(t.hiddenColumns=["modelId","localId","children","category"],t.columns=["Name"],t.headersHidden=!0,a){const{components:n}=e,l=n.get(T);l.list.onItemSet.add(()=>s({models:l.list.values()})),l.list.onItemDeleted.add(()=>s())}return i},W=Object.freeze(Object.defineProperty({__proto__:null,spatialTree:K,spatialTreeTemplate:z},Symbol.toStringTag,{value:"Module"}));let D={};const x={_category:"Category",_localId:"LocalId",_guid:"Guid"},X=(e,a,i,t,s,n)=>{const l={data:{type:"attribute",modelId:t,localId:s,Name:a in x?x[a]:a,Value:i,dataType:n}};e.children||(e.children=[]),e.children.push(l)},L=(e,a,i)=>{var o;e in D||(D[e]=new Map);const t=D[e],s=a._localId.value,n=(o=a[i.defaultItemNameKey])==null?void 0:o.value,l=a._category.value,m=(n==null?void 0:n.toString().length)>0?n.toString():l??String(s);if(t.has(s))return{data:{modelId:e,localId:s,type:"item",Name:m}};const r={data:{modelId:e,localId:s,type:"item",Name:m}};t.set(s,r);for(const c in a){const d=a[c];if(!Array.isArray(d))X(r,c,d.value,e,s,d.type);else{const u={data:{Name:c,type:"relation"}};r.children||(r.children=[]),r.children.push(u);for(const y of d){const f=L(e,y,i);u.children||(u.children=[]),u.children.push(f)}}}return r},Y=async(e,a,i)=>{const t=e.get(T);Object.keys(a).length===0&&(D={});const s=[];for(const n in a){const l=t.list.get(n);if(!l)continue;n in D||(D[n]=new Map);const m=D[n],r=a[n];for(const o of r){let c=m.get(o);if(c){s.push(c);continue}const[d]=await l.getItemsData([o],i.itemsDataConfig);c=L(n,d,i),s.push(c)}}return s},E=e=>{const a={defaultItemNameKey:"Name",itemsDataConfig:{attributesDefault:!0,relationsDefault:{attributes:!1,relations:!1},relations:{IsDefinedBy:{attributes:!0,relations:!0},DefinesOccurrence:{attributes:!1,relations:!1},ContainedInStructure:{attributes:!0,relations:!0},ContainsElements:{attributes:!1,relations:!1},Decomposes:{attributes:!1,relations:!1},ObjectTypeOf:{attributes:!1,relations:!1}}},...e},{components:i,modelIdMap:t,emptySelectionWarning:s}=e,n=Object.keys(t).reduce((r,o)=>(o.includes("DELTA")||(r[o]=t[o]),r),{});return b`
    <bim-table @cellcreated=${({detail:r})=>{const{cell:o}=r,{Name:c,Value:d}=o.rowData;c&&d===void 0&&setTimeout(()=>{o.style.gridColumn="1 / -1"})}} ${_(async r=>{if(!r)return;const o=r;o.loadFunction=async()=>Y(i,n,a),await o.loadData(!0)&&o.dispatchEvent(new Event("datacomputed"))})}>
      ${s?b`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},Z=new Map,tt={METRE:"m",SQUARE_METRE:"m²",CUBIC_METRE:"m³"},et=async(e,a)=>{const t=e.get(T).list.get(a);if(!t)throw new Error(`ItemsDataUI: model ${a} not found.`);let s=Z.get(t.modelId);if(!s){const[n]=Object.values(await t.getItemsOfCategories([/UNITASSIGNMENT/])).flat(),[l]=await t.getItemsData([n],{relations:{Units:{relations:!1,attributes:!0}}});if(!Array.isArray(l.Units))return[];s=l.Units}return s},ot=(e,a)=>{const{components:i}=e;a.columns=[{name:"Name",width:"12rem"}],a.visibleColumns=["Name","Value"],a.headersHidden=!0,a.dataTransform={Value:(t,s)=>{const{dataType:n,modelId:l}=s;return n?b`<bim-label ${_(async r=>{if(!(r&&l))return;const o=await et(i,l),c=n.replace("IFC","").replace("MEASURE","UNIT"),d=o.find(y=>y.UnitType&&"value"in y.UnitType?y.UnitType.value===c:!1);if(!d||!(d.Name&&"value"in d.Name))return t;const u=`${t.toFixed(2)} ${tt[d.Name.value]??d.Name.value}`;r.textContent=u})}></bim-label>`:t}}},nt=e=>{const a=S.create(E,e),[i]=a;return ot(e,i),a},it=Object.freeze(Object.defineProperty({__proto__:null,itemsData:nt,itemsDataTemplate:E},Symbol.toStringTag,{value:"Module"})),P=e=>{const{components:a}=e,i=e.missingDataMessage??"No models has been loaded yet",t=a.get(T),s=({detail:l})=>{const{cell:m}=l;m.style.padding="0.25rem 0"};return b`
    <bim-table ${_(async l=>{if(!l)return;const m=l,r=[];if(t.initialized)for(const[,o]of t.list){if(!(o&&!o.isDeltaModel))continue;const c=await o.getMetadata(),d={data:{Name:o.modelId,modelId:o.modelId,metadata:JSON.stringify(c)}};r.push(d)}m.data=r})} @cellcreated=${s}>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        ${i}
      </bim-label>
    </bim-table>
  `},st=(e,a)=>{const{components:i,actions:t,metaDataTags:s}=e,n=i.get(T),l=(t==null?void 0:t.dispose)??!0,m=(t==null?void 0:t.download)??!0,r=(t==null?void 0:t.visibility)??!0,o=s??[];a.hiddenColumns=["modelId","metadata"],a.headersHidden=!0,a.noIndentation=!0,a.dataTransform={Name:(c,d)=>{if(!n.initialized)return c;const{modelId:u,metadata:y}=d;if(!u)return c;const f=n.list.get(u);if(!f)return u;const w=[];if(y){const g=JSON.parse(y);for(const h of o){const C=g[h];if(!(typeof C=="string"||typeof C=="boolean"||typeof C=="number"))continue;const $=b`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${C}</bim-label>
            `;w.push($)}}let v;l&&(v=b`<bim-button @click=${()=>n.core.disposeModel(f.modelId)} icon="mdi:delete"></bim-button>`);let I;r&&(I=b`<bim-button @click=${async({target:h})=>{h.loading=!0,await f.setVisible(void 0,h.hasAttribute("data-model-hidden")),await n.core.update(!0),h.toggleAttribute("data-model-hidden"),h.icon=h.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye",h.loading=!1}} icon="mdi:eye"></bim-button>`);let p;return m&&(p=b`<bim-button @click=${async()=>{const h=await f.getBuffer(!1),C=new File([h],`${f.modelId}.frag`),$=document.createElement("a");$.href=URL.createObjectURL(C),$.download=C.name,$.click(),URL.revokeObjectURL($.href)}} icon="flowbite:download-solid"></bim-button>`),b`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${c}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${w}
          </div>
        </div>
        <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
          ${p}
          ${I}
          ${v}
        </div>
       </div>
      `}}},at=(e,a=!0)=>{const i=S.create(P,e),[t,s]=i;if(st(e,t),a){const{components:n}=e,l=n.get(T),m=()=>setTimeout(()=>s());l.list.onItemSet.add(m),l.list.onItemDeleted.add(m)}return i},lt=Object.freeze(Object.defineProperty({__proto__:null,modelsList:at,modelsListTemplate:P},Symbol.toStringTag,{value:"Module"})),G=e=>{var r;const{components:a}=e,i=e.missingDataMessage??"No viewpoints to display",t=a.get(R),s=((r=e.topic)==null?void 0:r.viewpoints)??t.list.keys(),n=[];for(const o of s){const c=t.list.get(o);c&&n.push(c)}const l=o=>{if(!o)return;const c=o;c.data=n.map((d,u)=>({data:{Guid:d.guid,Title:d.title??`Viewpoint ${e.topic?u+1:""}`,Actions:""}}))},m=({detail:o})=>{const{cell:c}=o;c.style.padding="0.25rem"};return b`
    <bim-table ${_(l)} @cellcreated=${m}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${i}</bim-label>
    </bim-table>
  `},rt=(e,a)=>{const{components:i,topic:t}=e;a.noIndentation=!0,a.headersHidden=!0,a.hiddenColumns=["Guid"],a.columns=["Title",{name:"Actions",width:"auto"}];const s={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!t,...e.actions},n=i.get(R);a.dataTransform={Actions:(l,m)=>{const{Guid:r}=m;if(!(r&&typeof r=="string"))return l;const o=n.list.get(r);if(!o)return l;const c=async({target:p})=>{p.loading=!0,await o.go(),p.loading=!1};let d;s.selectComponents&&(d=b`
          <bim-button label="Select Components" @click=${async({target:g})=>{const h=i.get(T),C=i.get(O);if(!C.isSetup)return;g.loading=!0;const $=await h.guidsToModelIdMap([...o.selectionComponents]);await C.highlightByID("select",$),g.loading=!1}}></bim-button>
        `);let u;s.colorizeComponent&&(u=b`
          <bim-button label="Colorize Components" @click=${async({target:g})=>{g.loading=!0,await o.setColorizationState(!0),g.loading=!1}}></bim-button>
        `);let y;s.resetColors&&(y=b`
          <bim-button label="Reset Colors" @click=${async({target:g})=>{g.loading=!0,await o.setColorizationState(!1),g.loading=!1}}></bim-button>
        `);let f;s.updateCamera&&(f=b`
          <bim-button label="Update Camera" @click=${()=>o.updateCamera()}></bim-button>
        `);let w;s.unlink&&(w=b`
          <bim-button label="Unlink" @click=${()=>t==null?void 0:t.viewpoints.delete(o.guid)}></bim-button>
        `);let v;s.delete&&(v=b`
          <bim-button label="Delete" @click=${()=>{n.list.delete(o.guid),J.removeMenus()}}></bim-button>
        `);let I;return Object.values(s).includes(!0)&&(I=b`
          <bim-button icon="prime:ellipsis-v">
            <bim-context-menu>
              ${d}
              ${u}
              ${y}
              ${f}
              ${w}
              ${v}
            </bim-context-menu>
          </bim-button>
        `),b`
        <bim-button icon="ph:eye-fill" @click=${c}></bim-button>
        ${I}
      `}}},ct=(e,a=!0)=>{const i=S.create(G,e),[t,s]=i;if(rt(e,t),a){const{components:n,topic:l}=e,m=n.get(R);m.list.onItemUpdated.add(()=>s()),m.list.onItemDeleted.add(()=>s()),m.list.onCleared.add(()=>s()),l?(l.viewpoints.onItemAdded.add(()=>s()),l.viewpoints.onItemDeleted.add(()=>s()),l.viewpoints.onCleared.add(()=>s())):m.list.onItemSet.add(()=>s())}return i},dt=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ct,viewpointsListTemplate:G},Symbol.toStringTag,{value:"Module"})),H=e=>{const{components:a}=e,i=e.missingDataMessage??"No topics to display",t=a.get(j),s=e.topics??t.list.values();return b`
    <bim-table no-indentation ${_(l=>{if(!l)return;const m=l;m.data=[...s].map(r=>{var o;return{data:{Guid:r.guid,Title:r.title,Status:r.status,Description:r.description??"",Author:r.creationAuthor,Assignee:r.assignedTo??"",Date:r.creationDate.toDateString(),DueDate:((o=r.dueDate)==null?void 0:o.toDateString())??"",Type:r.type,Priority:r.priority??"",Actions:""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${i}</bim-label>
    </bim-table>
  `},mt=(e,a)=>{const{dataStyles:i}=e;a.hiddenColumns.length===0&&(a.hiddenColumns=["Guid","Actions"]),a.columns=["Title"],a.dataTransform={Priority:t=>{if(typeof t!="string")return t;const n=((i==null?void 0:i.priorities)??k.priorities)[t];return b`
            <bim-label
              .icon=${n==null?void 0:n.icon}
              style=${F({...M,...n==null?void 0:n.style})}
            >${t}
            </bim-label>
          `},Status:t=>{if(typeof t!="string")return t;const n=((i==null?void 0:i.statuses)??k.statuses)[t];return b`
            <bim-label
              .icon=${n==null?void 0:n.icon}
              style=${F({...M,...n==null?void 0:n.style})}
            >${t}
            </bim-label>
          `},Type:t=>{if(typeof t!="string")return t;const n=((i==null?void 0:i.types)??k.types)[t];return b`
            <bim-label
              .icon=${n==null?void 0:n.icon}
              style=${F({...M,...n==null?void 0:n.style})}
            >${t}
            </bim-label>
          `},Author:t=>typeof t!="string"?t:U(t,(i==null?void 0:i.users)??k.users),Assignee:t=>typeof t!="string"?t:U(t,(i==null?void 0:i.users)??k.users)}},ut=(e,a=!0)=>{const i=S.create(H,e),[t,s]=i;if(mt(e,t),a){const{components:n,topics:l}=e,m=n.get(j),r=()=>s();if(m.list.onItemUpdated.add(r),m.list.onItemDeleted.add(r),l)for(const o of l)o.relatedTopics.onItemAdded.add(r),o.relatedTopics.onItemDeleted.add(r),o.relatedTopics.onCleared.add(r);else m.list.onItemSet.add(r)}return i},bt=Object.freeze(Object.defineProperty({__proto__:null,topicsList:ut,topicsListTemplate:H},Symbol.toStringTag,{value:"Module"})),V=e=>{const{topic:a,styles:i,viewpoint:t}=e,s=e.missingDataMessage??"The topic has no comments";return b`
    <bim-table no-indentation ${_(l=>{if(!l)return;const m=l;let r=a.comments.values();t&&(r=[...a.comments.values()].filter(o=>o.viewpoint===t.guid)),m.data=[...r].map(o=>({data:{guid:o.guid,Comment:o.comment,author:(()=>{const c=i;if(!c)return o.author;const d=c[o.author];return(d==null?void 0:d.name)??o.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${s}</bim-label>
    </bim-table>
  `},ft=(e,a)=>{const{topic:i,styles:t}=e,s={delete:!0,...e.actions};a.headersHidden=!0,a.hiddenColumns=["guid","author"],a.dataTransform={Comment:(n,l)=>{const{guid:m}=l;if(typeof m!="string")return n;const r=i.comments.get(m);if(!r)return n;const o=()=>{i.comments.delete(m)};let c;if(s.delete){const d=`btn-${Q.newRandomId()}`;c=b`
          <div>
            <style>
              #${d} {
                background-color: transparent;
                --bim-label--c: var(--bim-ui_bg-contrast-60)
              }
  
              #${d}:hover {
                --bim-label--c: #FF5252;
              }
            </style>
            <bim-button @click=${o} id=${d} icon="majesticons:delete-bin"></bim-button>
          </div>
        `}return b`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${U(r.author,t??k.users)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${r.date.toDateString()}</bim-label>
            </div>
            ${c}
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${r.comment}</bim-label>
        </div>
      `}}},gt=(e,a=!0)=>{const i=S.create(V,e),[t,s]=i;if(ft(e,t),a){const{topic:n}=e,l=()=>s();n.comments.onItemSet.add(l),n.comments.onItemUpdated.add(l),n.comments.onItemDeleted.add(l),n.comments.onCleared.add(l)}return i},pt=Object.freeze(Object.defineProperty({__proto__:null,commentsList:gt,commentsListTemplate:V},Symbol.toStringTag,{value:"Module"})),Ct={...W,...it,...lt,...dt,...bt,...pt};export{U as a,M as b,gt as c,k as d,Ct as e,ut as t,ct as v};
