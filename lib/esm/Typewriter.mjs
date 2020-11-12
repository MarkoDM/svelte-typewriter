import{SvelteComponent as t,init as e,safe_not_equal as o,element as n,append as l,create_slot as a,set_style as s,attr as r,toggle_class as c,insert as i,action_destroyer as d,update_slot as p,transition_in as m,transition_out as u,detach as y}from"svelte/internal";function f(){const t=function(){throw new Error("Function called outside component initialization")}();return(e,o)=>{t.$$.callbacks[e]}}const v=t=>new Promise((e=>setTimeout(e,t))),b=(t,e)=>Math.floor(Math.random()*(e-t)+t),g=t=>1===t.childNodes.length&&3===t.childNodes[0].nodeType,h=async t=>v(t[b(0,t.length)]||t),x=t=>t.childNodes.forEach((t=>t.remove())),w=t=>{if(g(t)){const e=t.textContent.split(""),o=document.createElement("p");return o.textContent=t.textContent,t.textContent="",t.appendChild(o),[{currentNode:o,text:e}]}return[...t.getElementsByTagName("*")].filter((t=>g(t))).map((t=>({currentNode:t,text:t.textContent.split("")})))},C=async({currentNode:t,text:e},o)=>{t.textContent="",t.classList.add("typing");for(const n of e){t.textContent+=n;if(t.textContent===e.join(""))for(o.dispatch("done"),await v("number"==typeof o.loop?o.loop:1500);""!==t.textContent;)t.textContent=t.textContent.slice(0,-1),await h(o.interval);await h(o.interval)}null!==t.nextSibling&&1==t.classList.length?t.removeAttribute("class"):t.classList.remove("typing")};var $=Object.freeze({__proto__:null,sleep:v,rng:b,hasSingleTextNode:g,typingInterval:h,cleanChildNodes:x,getElements:w,loopTypewriterEffect:C});const N=async(t,e)=>{const{default:o}=e.loop&&await import("./loop.mjs")||e.loopRandom&&await import("./loopRandom.mjs")||e.cascade&&await import("./cascade.mjs")||e.scramble&&await import("./scramble.mjs")||await import("./default.mjs"),n=w(t);if(e.delay>0){const{sleep:o}=await Promise.resolve().then((function(){return $}));await o(e.delay),t.classList.remove("delay")}o({node:t,elements:n},e)};function j(t){let e,o,l,f,v;const b=t[9].default,g=a(b,t,t[8],null);return{c(){e=n("div"),g&&g.c(),s(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),r(e,"class","svelte-8gtb9p"),c(e,"cursor",t[0]),c(e,"delay",t[1].delay>0)},m(n,a){i(n,e,a),g&&g.m(e,null),l=!0,f||(v=d(o=N.call(null,e,t[1])),f=!0)},p(t,[o]){g&&g.p&&256&o&&p(g,b,t,t[8],o,null,null),(!l||1&o)&&s(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),1&o&&c(e,"cursor",t[0]),2&o&&c(e,"delay",t[1].delay>0)},i(t){l||(m(g,t),l=!0)},o(t){u(g,t),l=!1},d(t){t&&y(e),g&&g.d(t),f=!1,v()}}}function E(t,e,o){let{$$slots:n={},$$scope:l}=e,{interval:a=30}=e,{cascade:s=!1}=e,{loop:r=!1}=e,{loopRandom:c=!1}=e,{scramble:i=!1}=e,{cursor:d=!0}=e,{delay:p=0}=e;const m=f(),u={interval:a,cascade:s,loop:r,loopRandom:c,scramble:i,cursor:d,delay:p,dispatch:m};return t.$$set=t=>{"interval"in t&&o(2,a=t.interval),"cascade"in t&&o(3,s=t.cascade),"loop"in t&&o(4,r=t.loop),"loopRandom"in t&&o(5,c=t.loopRandom),"scramble"in t&&o(6,i=t.scramble),"cursor"in t&&o(0,d=t.cursor),"delay"in t&&o(7,p=t.delay),"$$scope"in t&&o(8,l=t.$$scope)},[d,u,a,s,r,c,i,p,l,n]}class R extends t{constructor(t){var a;super(),document.getElementById("svelte-8gtb9p-style")||((a=n("style")).id="svelte-8gtb9p-style",a.textContent="@keyframes svelte-8gtb9p-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.cursor.svelte-8gtb9p .typing::after{content:'▌';display:inline-block;color:var(--cursor-color);animation:svelte-8gtb9p-cursorFade 1.25s infinite}.delay.svelte-8gtb9p{visibility:hidden}",l(document.head,a)),e(this,t,E,j,o,{interval:2,cascade:3,loop:4,loopRandom:5,scramble:6,cursor:0,delay:7})}}export{R as T,x as c,g as h,C as l,b as r,v as s,h as t};
