import{typingInterval as n}from"./typingInterval.js";const e=async(e,t)=>{const l=e.innerHTML.replaceAll("&amp;","&");for(let r=l.length-1;r>=0;r--){">"===l[r]&&(r=l.lastIndexOf("<",r)),e.innerHTML=l.slice(0,r),await n(t.interval)}};export{e as unwriteEffect};