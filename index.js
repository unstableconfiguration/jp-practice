(()=>{"use strict";var t,n,e,r,o={524:(t,n,e)=>{function r(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw i}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Ec:()=>c});var a=function(){var t=this;t.get=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.init(n,e);return r},t.init=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=t.setArgDefaults(e);var r=new XMLHttpRequest;for(var o in r.open(e.method,n,e.async),t.__setEvents(r,e),t.__setCallbackChains(r),e)r[o]=e[o];return r},t.argDefaults={method:"GET",async:!0,responseType:"text"},t.setArgDefaults=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in t.argDefaults)n[e]=n[e]||t.argDefaults[e];return n};var n=["abort","error","load","loadend","loadstart","progress","timeout"];return t.__setEvents=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.forEach((function(n){var r=e[n]||e["on"+n];r&&t.addEventListener(n,(function(t){return r(t)}))})),t},t.__setCallbackChains=function(t){return t.load=function(n){return t.addEventListener("load",(function(e){return n(t.response)})),t.send(),t},t.error=function(n){return t.addEventListener("error",n),t},t.then=t.load,t.catch=t.error,t},t},i=(new a,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this;n.paths=[];var e=function(t,n,e){};return Object.defineProperty(n,"onHashChange",{get:function(){return e},set:function(t){e=t,window.onhashchange=n.__onHashChange}}),n.__onHashChange=function(){var t=location.hash||"#",r=n.paths.find((function(n){return n.pattern.test(t)})),o=r?r.value:null,a=/\?.+$/.exec(t);a=a?a[0]:location.search;var i=n.getSearchParams(a);e(t,o,i)},n.onHashChange=t.onHashChange||e,n.getSearchParams=function(t){if(!t)return null;var n,e=new URLSearchParams(t),o={},a=r(e.keys());try{for(a.s();!(n=a.n()).done;){var i=n.value;o[i]=e.get(i)}}catch(t){a.e(t)}finally{a.f()}return o},n.addPath=function(t){if(t.hash instanceof RegExp&&n.paths.push({pattern:t.hash,value:t.value}),"string"==typeof t.hash){var e=n.getHashRegex(t.hash);return n.paths.push({pattern:e,value:t.value}),n.paths}},n.getHashRegex=function(t){return t=(t=t.replace(/{.+}/,".+")).replace("/","/"),new RegExp("^#"+t+"(\\?.*)?$")},n.addPaths=function(t){for(var e in t)n.addPath(t[e]);return n.paths},t.paths&&n.addPaths(t.paths),n}),c=new function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;for(var r in e.xhr=new a,t.prototype.Router=i,e.container,e.contentUrl="",e.initialize=function(){},e.content=null,e.onContentLoaded=function(t){},e.onContentBound=function(t){},e.data=null,e.onDataBound=function(t){},e.setContent=function(t){e.content=t,e.onContentLoaded(e.content),e.container&&(e._bindContent(e.content),e.__isContentBound=!0),e.__isDataSet&&e.bindData(e.data)},e.setData=function(t){e.data=t,e.__isDataSet=!0,e.__isContentBound&&e.bindData(e.data)},e.attach=function(t){t&&(e.container=t),e.data&&e.setData(e.data),e._loadContent()},e._loadContent=function(){return e.contentUrl?e.xhr.get(e.contentUrl).then((function(t){return e.setContent(t)})).catch((function(t){throw"Error when fetching resource "+e.contentUrl})):e.content?e.setContent(e.content):void 0},e._bindContent=function(){if(!e.container||!e.content)throw new Error("no container or no content for template");for(;e.container.firstChild;)e.container.removeChild(e.container.firstChild);e.container.insertAdjacentHTML("afterbegin",e.content),e.onContentBound(e.content)},e.bindData=function(t){e.container.querySelectorAll("[data-field]").forEach((function(n){var e=(n.getAttribute("data-field")||n.id).split(".").reduce((function(t,n){return t[n]}),t);void 0!==n.value?n.value=e:n.innerHTML=e})),e.onDataBound(t)},e.loadStyleSheet=function(t){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t;var e=document.getElementsByTagName("link");Array.from(e).some((function(t){return t.href==n.href}))||document.getElementsByTagName("head")[0].appendChild(n)},e.loadScript=function(t){var n=document.createElement("script");n.src=t;var e=document.getElementsByTagName("script");Array.from(e).some((function(t){return t.src==n.src}))||document.getElementsByTagName("head")[0].appendChild(n)},n)this[r]=n[r];e.extend=function(n){return function(e){for(var r in e)n[r]=e[r];t.call(this,n)}},e.initialize.bind(e)()}}},a={};function i(t){if(a[t])return a[t].exports;var n=a[t]={exports:{}};return o[t](n,n.exports,i),n.exports}i.m=o,i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((n,e)=>(i.f[e](t,n),n)),[])),i.u=t=>t+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),t={},n="jp-practice:",i.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){c=d;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",n+o),c.src=e),t[e]=[r];var f=(n,r)=>{c.onerror=c.onload=null,clearTimeout(h);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((t=>t(r))),n)return n(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var n=i.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{var t={826:0};i.f.j=(n,e)=>{var r=i.o(t,n)?t[n]:void 0;if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(((e,o)=>{r=t[n]=[e,o]}));e.push(r[2]=o);var a=i.p+i.u(n),c=new Error;i.l(a,(e=>{if(i.o(t,n)&&(0!==(r=t[n])&&(t[n]=void 0),r)){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+n,n)}};var n=(n,e)=>{for(var r,o,[a,c,u]=e,s=0,l=[];s<a.length;s++)o=a[s],i.o(t,o)&&t[o]&&l.push(t[o][0]),t[o]=0;for(r in c)i.o(c,r)&&(i.m[r]=c[r]);for(u&&u(i),n&&n(e);l.length;)l.shift()()},e=self.webpackChunkjp_practice=self.webpackChunkjp_practice||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),e=i(524),r=[{hash:"",value:function(){return i.e(894).then(i.bind(i,894)).then((function(t){return(new t.page).attach(document.getElementById("content"))}))}},{hash:"random-characters",value:function(){return i.e(670).then(i.bind(i,670)).then((function(t){return(new t.page).attach(document.getElementById("content"))}))}},{hash:"character-groups",value:function(){return i.e(387).then(i.bind(i,387)).then((function(t){return(new t.page).attach(document.getElementById("content"))}))}}],{init:function(){this.initializeRouter()},initializeRouter:function(){window.lite=e.Ec,e.Ec.router=new e.Ec.Router({paths:r,onHashChange:function(t,n){if("function"==typeof n)return n()}}),window.onhashchange()}}.init()})();