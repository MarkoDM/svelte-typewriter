import{s as e,e as t}from"./typingInterval.mjs";const n=e=>e.childNodes.forEach((e=>e.remove())),l=async(t,n)=>{const l=t.innerHTML.replaceAll("&amp;","&");for(let a=l.length-1;a>=0;a--)">"===l[a]&&(a=l.lastIndexOf("<",a)),t.innerHTML=l.slice(0,a),await e(n.interval)},a=async({currentNode:n,text:a},i)=>{n.textContent="",n.classList.add("typing");for(let s=0;s<=a.length;s++){"<"===a[s]&&(s=a.indexOf(">",s)+1),n.innerHTML=a.slice(0,s);const r=a.replaceAll("&","&amp;");n.innerHTML===r&&(i.dispatch("done"),await t("number"==typeof i.loop?i.loop:1500),await l(n,i)),await e(i.interval)}null!==n.nextSibling&&1==n.classList.length?n.removeAttribute("class"):n.classList.remove("typing")};export{l as e,a as i,n as o};
