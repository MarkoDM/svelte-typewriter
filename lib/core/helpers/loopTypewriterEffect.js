import{sleep as t}from"./sleep.js";import{typingInterval as e}from"./typingInterval.js";import{unwriteEffect as n}from"./unwriteEffect.js";const i=async({currentNode:i,text:o},r)=>{i.textContent="",i.classList.add("typing");for(let s=0;s<=o.length;s++){"<"===o[s]&&(s=o.indexOf(">",s)+1),i.innerHTML=o.slice(0,s);const l=o.replaceAll("&","&amp;");i.innerHTML===l&&(r.dispatch("done"),await t("number"==typeof r.loop?r.loop:1500),await n(i,r)),await e(r.interval)}null!==i.nextSibling&&1==i.classList.length?i.removeAttribute("class"):i.classList.remove("typing")};export{i as loopTypewriterEffect};