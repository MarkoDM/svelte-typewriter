import{SvelteComponent as e,init as t,safe_not_equal as o,element as n,append as l,create_slot as r,set_style as a,attr as c,toggle_class as s,insert as i,action_destroyer as d,update_slot as p,transition_in as u,transition_out as m,detach as y}from"svelte/internal";function b(){const e=function(){throw new Error("Function called outside component initialization")}();return(t,o)=>{e.$$.callbacks[t]}}const v=(e,t)=>{const o=document.createElement(t);return o.textContent=e,o},f=e=>1===e.childNodes.length&&3===e.childNodes[0].nodeType,g=e=>{if(f(e)){const t=e.textContent,o=v(e.textContent,"p");return e.textContent="",e.appendChild(o),[{currentNode:o,text:t}]}return[...e.children].map((e=>{const t=e.innerHTML.replaceAll("&amp;","&");return{currentNode:e,text:t}}))},$=async(e,t)=>{const{mode:o}=(t.loop||t.loopRandom)&&await import("./loopTypewriter.mjs")||t.scramble&&await import("./scramble.mjs")||await import("./typewriter2.mjs"),n=g(e);if(t.delay>0){const{sleep:o}=await import("./index2.mjs");await o(t.delay),e.classList.remove("delay")}o({node:e,elements:n},t)};function h(e){let t,o,l,b,v;const f=e[9].default,g=r(f,e,e[8],null);return{c(){t=n("div"),g&&g.c(),a(t,"--cursor-color","string"==typeof e[0]?e[0]:"black"),c(t,"class","svelte-8gtb9p"),s(t,"cursor",e[0]),s(t,"delay",e[1].delay>0)},m(n,r){i(n,t,r),g&&g.m(t,null),l=!0,b||(v=d(o=$.call(null,t,e[1])),b=!0)},p(e,[o]){g&&g.p&&256&o&&p(g,f,e,e[8],o,null,null),(!l||1&o)&&a(t,"--cursor-color","string"==typeof e[0]?e[0]:"black"),1&o&&s(t,"cursor",e[0]),2&o&&s(t,"delay",e[1].delay>0)},i(e){l||(u(g,e),l=!0)},o(e){m(g,e),l=!1},d(e){e&&y(t),g&&g.d(e),b=!1,v()}}}function x(e,t,o){let{$$slots:n={},$$scope:l}=t,{interval:r=30}=t,{cascade:a=!1}=t,{loop:c=!1}=t,{loopRandom:s=!1}=t,{scramble:i=!1}=t,{cursor:d=!0}=t,{delay:p=0}=t;const u=b(),m={interval:r,cascade:a,loop:c,loopRandom:s,scramble:i,cursor:d,delay:p,dispatch:u};return e.$$set=e=>{"interval"in e&&o(2,r=e.interval),"cascade"in e&&o(3,a=e.cascade),"loop"in e&&o(4,c=e.loop),"loopRandom"in e&&o(5,s=e.loopRandom),"scramble"in e&&o(6,i=e.scramble),"cursor"in e&&o(0,d=e.cursor),"delay"in e&&o(7,p=e.delay),"$$scope"in e&&o(8,l=e.$$scope)},[d,m,r,a,c,s,i,p,l,n]}class w extends e{constructor(e){var r;super(),document.getElementById("svelte-8gtb9p-style")||((r=n("style")).id="svelte-8gtb9p-style",r.textContent="@keyframes svelte-8gtb9p-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.cursor.svelte-8gtb9p .typing::after{content:'▌';display:inline-block;color:var(--cursor-color);animation:svelte-8gtb9p-cursorFade 1.25s infinite}.delay.svelte-8gtb9p{visibility:hidden}",l(document.head,r)),t(this,e,x,h,o,{interval:2,cascade:3,loop:4,loopRandom:5,scramble:6,cursor:0,delay:7})}}export{w as T,f as e,g as n,v as t};
