!function(e){function t(t){for(var n,r,i=t[0],a=t[1],u=0,s=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);s.length;)s.shift()()}var n={},o={0:0};var r={};var i={4:function(){return{"./index.js":{__wbindgen_string_new:function(e,t){return n[3].exports.__wbindgen_string_new(e,t)},__widl_f_log_1_:function(e){return n[3].exports.__widl_f_log_1_(e)},__wbindgen_object_drop_ref:function(e){return n[3].exports.__wbindgen_object_drop_ref(e)},__wbindgen_throw:function(e,t){return n[3].exports.__wbindgen_throw(e,t)}}}}};function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({}[e]||e)+".js"}(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return({1:[4]}[e]||[]).forEach((function(e){var n=r[e];if(n)t.push(n);else{var o,u=i[e](),s=fetch(a.p+""+{4:"e153e4005f9e16578d40"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)o=Promise.all([WebAssembly.compileStreaming(s),u]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)o=WebAssembly.instantiateStreaming(s,u);else{o=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,u)}))}t.push(r[e]=o.then((function(t){return a.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e},a.w={};var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a(a.s=1)}([function(e,t,n){(function(n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){a(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,a){var u=i.URL||i.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):o(s.href)?t(e,n,a):r(s,s.target="_blank")):(s.href=u.createObjectURL(e),setTimeout((function(){u.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),n);else if(o(e))t(e,n,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){r(a)}))}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var a="application/octet-stream"===e.type,u=/constructor/i.test(i.HTMLElement)||i.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||a&&u)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var l=i.URL||i.webkitURL,f=l.createObjectURL(e);r?r.location=f:location.href=f,r=null,setTimeout((function(){l.revokeObjectURL(f)}),4e4)}});i.saveAs=a.saveAs=a,e.exports=a})?o.apply(t,r):o)||(e.exports=i)}).call(this,n(2))},function(e,t,n){"use strict";n.r(t);var o=n(0);let r={inputEl:null,dropEl:null,infoEl:null,unsupportedFileTypeInfoEl:null,unsupportedBrowserInfoEl:null,WasmSource:null};async function i(){try{return(await n.e(1).then(n.bind(null,3))).Source}catch(e){console.error(e)}}function a(){const e=document.getElementById("container"),t=e.querySelector("input"),n=e.querySelector(".drop-zone"),o=e.querySelector("output"),r=e.querySelector(".unsupported-filetype-info"),i=e.querySelector(".unsupported-browser-info");return t.addEventListener("change",c,!1),n.addEventListener("dragover",u,!1),n.addEventListener("drop",s,!1),{inputEl:t,dropEl:n,infoEl:o,unsupportedFileTypeInfoEl:r,unsupportedBrowserInfoEl:i}}function u(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function s(e){e.stopPropagation(),e.preventDefault(),l(e.dataTransfer.files[0])}function c(e){l(e.target.files[0])}function l(e){const t=new FileReader;t.onloadend=function(e){return function(t){const n=t.target.result,i=e.name.lastIndexOf("."),a=e.name.substr(i+1),u=e.name.substr(0,i),s=new r.WasmSource(a,new Uint8Array(n));if(function(e,t){const n=t.size();t.extractingIsSupported()?r.unsupportedFileTypeInfoEl.classList.add("hide"):r.unsupportedFileTypeInfoEl.classList.remove("hide");r.infoEl.innerText=`${e.name}, ${n} bytes`}(e,s),s.extractingIsSupported()){let e=s.extract(),t=new Blob([e]);Object(o.saveAs)(t,u)}}}(e),t.readAsArrayBuffer(e)}!async function(){r={WasmSource:await i(),...a()},window.File&&window.FileReader?r.unsupportedBrowserInfoEl.classList.add("hide"):r.unsupportedBrowserInfoEl.classList.remove("hide")}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);