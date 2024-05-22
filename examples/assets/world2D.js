import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as n,f as i,m as r}from"./index-Dhy3Nnp8.js";import{M as m}from"./index-B5BxqIC_.js";import"./index-L7zXnaxf.js";import"./state-CdSmRkb4.js";n.init();m.init();const t=new i;t.init();const a=t.get(r);await a.setup();const c=await fetch("/resources/small.ifc"),s=await c.arrayBuffer(),d=new Uint8Array(s),l=await a.load(d),e=document.createElement("bim-world-2d");e.components=t;e.world.scene.three.add(l);const o=document.createElement("bim-grid");o.layouts={main:{template:`
    "world2d" 2fr
    "container" 1fr
    `,elements:{world2d:e}}};o.layout="main";document.body.append(o);
