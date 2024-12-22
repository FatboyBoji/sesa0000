"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{2868:(e,t,n)=>{let r,i;n.d(t,{v:()=>$});var o=n(804),l=n(458),s=n(2265),f=n(2159),u=n(6559);let c=new WeakMap;function a({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function g(e){e.forEach(a)}let d=new Set;var h=n(3217),p=n(3476);let m=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:m(),y:m()}),y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function w(e,t,n,r){let i=n[t],{length:o,position:l}=y[t],s=i.current,f=n.time;i.current=e[`scroll${l}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,h.Y)(0,i.scrollLength,i.current);let u=r-f;i.velocity=u>50?0:(0,p.R)(i.current-s,u)}let E={All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function W(e,t,n=0){let r=0;if(e in x&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let L=[0,0];var B=n(2548),b=n(839);let S={x:0,y:0};var H=n(6219);let z=new WeakMap,O=new WeakMap,k=new WeakMap,P=e=>e===document.documentElement?window:e;function X(e,{container:t=document.documentElement,...n}={}){let o=k.get(t);o||(o=new Set,k.set(t,o));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{w(e,"x",n,t),w(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=E.All}=n,{target:i=e,axis:o="y"}=n,l="y"===o?"height":"width",s=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,e):S,f=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:L,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),W(i[0],n,r)-W(i[1],t)}(r[e],u[l],f[l],s[o]);c||n===t[o].interpolatorOffsets[e]||(c=!0),t[o].offset[e]=n}c&&(t[o].interpolate=(0,B.s)(t[o].offset,(0,b.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,r)},notify:()=>t(n)}}(t,e,v(),n);if(o.add(l),!z.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(H.frameData.timestamp)},l=()=>{for(let e of o)e.notify()},s=()=>{H.Wi.read(e,!1,!0),H.Wi.read(n,!1,!0),H.Wi.update(l,!1,!0)};z.set(t,s);let f=P(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&O.set(t,"function"==typeof t?(d.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{d.delete(t),!d.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(g));let n=(0,u.IG)(e);return n.forEach(e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=z.get(t);return H.Wi.read(s,!1,!0),()=>{var e;(0,H.Pn)(s);let n=k.get(t);if(!n||(n.delete(l),n.size))return;let r=z.get(t);z.delete(t),r&&(P(t).removeEventListener("scroll",r),null===(e=O.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function A(e,t){let n;let r=()=>{let{currentTime:r}=t,i=(null===r?0:r.value)/100;n!==i&&e(i),n=i};return H.Wi.update(r,!0),()=>(0,H.Pn)(r)}var N=n(7581),T=n(5085);let Y=new Map;function M({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Y.has(t)||Y.set(t,{});let r=Y.get(t);return r[n]||(r[n]=(0,N.t)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},i=X(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:i}}({source:t,axis:n})),r[n]}function R(e){return e&&(e.target||e.offset)}var C=n(9033);function _(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let G=()=>({scrollX:(0,o.BX)(0),scrollY:(0,o.BX)(0),scrollXProgress:(0,o.BX)(0),scrollYProgress:(0,o.BX)(0)});function $({container:e,target:t,layoutEffect:n=!0,...r}={}){let i=(0,l.h)(G);return(n?C.L:s.useEffect)(()=>(_("target",t),_("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||R(r)?X(t=>{e(t[r.axis].progress,t)},r):A(e,M(r)):function(e,t){if(e.flatten(),R(t))return e.pause(),X(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=M(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),A(t=>{e.time=e.duration*t},n))):T.Z}}(e,r)}((e,{x:t,y:n})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}},31:(e,t,n)=>{n.d(t,{H:()=>d});var r=n(2548);let i=e=>e&&"object"==typeof e&&e.mix,o=e=>i(e)?e.mix:void 0;var l=n(2265),s=n(804),f=n(9791),u=n(458),c=n(9033),a=n(6219);function g(e,t){let n=function(e){let t=(0,u.h)(()=>(0,s.BX)(e)),{isStatic:n}=(0,l.useContext)(f._);if(n){let[,n]=(0,l.useState)(e);(0,l.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,c.L)(()=>{let t=()=>a.Wi.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,a.Pn)(r)}}),n}function d(e,t,n,i){if("function"==typeof e)return function(e){s.S1.current=[],e();let t=g(s.S1.current,e);return s.S1.current=void 0,t}(e);let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],l=e[1+n],s=e[2+n],f=e[3+n],u=(0,r.s)(l,s,{mixer:o(s[0]),...f});return t?u(i):u}(t,n,i);return Array.isArray(e)?h(e,l):h([e],([e])=>l(e))}function h(e,t){let n=(0,u.h)(()=>[]);return g(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);