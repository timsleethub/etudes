(()=>{"use strict";var e,r,t={},n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="wp5-starter-react:",o.l=(t,n,a)=>{if(e[t])e[t].push(n);else{var u,l;if(void 0!==a)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var f=i[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){u=f;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var p=(r,n)=>{u.onerror=u.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var u=o.S[t],l="wp5-starter-react",i=(e,r,t)=>{var n=u[e]=u[e]||{},o=n[r];(!o||!o.loaded&&l>o.from)&&(n[r]={get:t,from:l})},s=[];switch(t){case"default":i("react-dom","16.14.0",(()=>o.e(935).then((()=>()=>o(935))))),i("react","16.14.0",(()=>o.e(294).then((()=>()=>o(294)))))}return e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),o.p="http://localhost:8080/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{if(1===e.length)return"*";if(0 in e){var t="",n=e[0];t+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return t}var u=[];for(a=1;a<e.length;a++){var l=e[a];u.push(0===l?"not("+i()+")":1===l?"("+i()+" || "+i()+")":2===l?u.pop()+" "+u.pop():r(l))}return i();function i(){return u.pop().replace(/^\((.+)\)$/,"$1")}},a=(r,t)=>{if(0 in r){t=e(t);var n=r[0],o=n<0;o&&(n=-n-1);for(var u=0,l=1,i=!0;;l++,u++){var s,f,p=l<r.length?(typeof r[l])[0]:"";if(u>=t.length||"o"==(f=(typeof(s=t[u]))[0]))return!i||("u"==p?l>n&&!o:""==p!=o);if("u"==f){if(!i||"u"!=p)return!1}else if(i)if(p==f)if(l<=n){if(s!=r[l])return!1}else{if(o?s>r[l]:s<r[l])return!1;s!=r[l]&&(i=!1)}else if("s"!=p&&"n"!=p){if(o||l<=n)return!1;i=!1,l--}else{if(l<=n||f<p!=o)return!1;i=!1}else"s"!=p&&"n"!=p&&(i=!1,l--)}}var d=[],c=d.pop.bind(d);for(u=1;u<r.length;u++){var h=r[u];d.push(1==h?c()|c():2==h?c()&c():h?a(h,t):!c())}return!!c()},u=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var u=t[n],l=(typeof u)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}})(r,t)?t:r),0)},l=(e,t,n,o)=>{var l=u(e,n);return a(o,l)||"undefined"!=typeof console&&console.warn&&console.warn(((e,t,n)=>"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+r(n)+")")(n,l,o)),i(e[n][l])},i=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,a){var u=o.I(r);return u&&u.then?u.then(e.bind(e,r,o.S[r],t,n,a)):e(r,o.S[r],t,n,a)})(((e,r,t,n,a)=>r&&o.o(r,t)?l(r,0,t,n):a())),f={},p={558:()=>s("default","react",[1,16,13,0],(()=>o.e(294).then((()=>()=>o(294))))),169:()=>s("default","react-dom",[1,16,13,0],(()=>o.e(935).then((()=>()=>o(935)))))};[558,169].forEach((e=>{t[e]=r=>{f[e]=0,delete n[e];var t=p[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var d={};o.f.consumes=(e,r)=>{o.o(d,e)&&d[e].forEach((e=>{if(o.o(f,e))return r.push(f[e]);var a=r=>{f[e]=0,t[e]=t=>{delete n[e],t.exports=r()}},u=r=>{delete f[e],t[e]=t=>{throw delete n[e],r}};try{var l=p[e]();l.then?r.push(f[e]=l.then(a).catch(u)):a(l)}catch(e){u(e)}}))}})(),(()=>{var e={179:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=a);var u=o.p+o.u(r),l=new Error;o.l(u,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+u+")",l.name="ChunkLoadError",l.type=a,l.request=u,n[1](l)}}),"chunk-"+r)}};var r=self.webpackChunkwp5_starter_react=self.webpackChunkwp5_starter_react||[],t=r.push.bind(r);r.push=r=>{for(var n,a,[u,l,i]=r,s=0,f=[];s<u.length;s++)a=u[s],o.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(n in l)o.o(l,n)&&(o.m[n]=l[n]);for(i&&i(o),t(r);f.length;)f.shift()()}})();var a=o(558),u=o.n(a),l=o(169);function i(e){return u().createElement("div",{className:"app"},"Hello World")}o.n(l)().render(u().createElement(i,null),document.getElementById("app-root"))})();