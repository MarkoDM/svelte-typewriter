import"./typingInterval.mjs";import{e as t}from"./writeEffect.mjs";export default async({elements:e},o)=>{e.forEach((t=>t.currentNode.textContent=""));for(const r of e)await t(r,o);o.dispatch("done")};