import{s as e,o as n}from"./typingInterval.mjs";const t=e=>e.childNodes.forEach((e=>e.remove())),o=async(n,t)=>{t.dispatch("done"),await e("number"==typeof t.loop?t.loop:1500);const o=n.innerHTML.replaceAll("&amp;","&");for(let r=o.length-1;r>=0;r--)">"===o[r]&&(r=o.lastIndexOf("<",r)),n.innerHTML=o.slice(0,r),await e(t.interval)},r=e=>{let t=[];for(;;){const o=n(0,e.length),r="number"==typeof t&&o!==t;if(Array.isArray(t)&&!t.includes(o)||r)return r&&(t=[]),t.push(o),e[o];t.length===e.length&&(t=t.pop())}};export{o as n,t as o,r as t};
