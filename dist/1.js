(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{4:function(n,t,r){"use strict";r.r(t),r.d(t,"extensionIsSupported",(function(){return _})),r.d(t,"main_js",(function(){return h})),r.d(t,"Decoder",(function(){return k})),r.d(t,"Encoder",(function(){return A})),r.d(t,"__wbg_new_d7a8a06e1f975d95",(function(){return E})),r.d(t,"__wbindgen_object_drop_ref",(function(){return I})),r.d(t,"__wbindgen_string_new",(function(){return O})),r.d(t,"__widl_f_log_1_",(function(){return D})),r.d(t,"__wbg_length_453ee8a17581c5a9",(function(){return J})),r.d(t,"__wbindgen_memory",(function(){return T})),r.d(t,"__wbg_buffer_44cb68be3749d64e",(function(){return U})),r.d(t,"__wbg_set_c9c8c0859dad062c",(function(){return B})),r.d(t,"__wbindgen_throw",(function(){return C})),r.d(t,"__wbindgen_rethrow",(function(){return M}));var e=r(5);let o=0,u=new TextEncoder("utf-8");const c="function"==typeof u.encodeInto?function(n,t){return u.encodeInto(n,t)}:function(n,t){const r=u.encode(n);return t.set(r),{read:n.length,written:r.length}};let i=null;function f(){return null!==i&&i.buffer===e.m.buffer||(i=new Uint8Array(e.m.buffer)),i}function s(n){let t=n.length,r=e.d(t);const u=f();let i=0;for(;i<t;i++){const t=n.charCodeAt(i);if(t>127)break;u[r+i]=t}if(i!==t){0!==i&&(n=n.slice(i)),r=e.e(r,t,t=i+3*n.length);const o=f().subarray(r+i,r+t);i+=c(n,o).written}return o=i,r}function _(n){return 0!==e.k(s(n),o)}const d=new Array(32);d.fill(void 0),d.push(void 0,null,!0,!1);let l=32;function a(n){if(1==l)throw new Error("out of js stack");return d[--l]=n,l}let w=null;function b(){return null!==w&&w.buffer===e.m.buffer||(w=new Int32Array(e.m.buffer)),w}function p(n,t){return f().subarray(n/1,n/1+t)}function h(){e.l()}function g(n){return d[n]}let y=d.length;function m(n){y===d.length&&d.push(d.length+1);const t=y;return y=d[t],d[t]=n,t}function j(n){const t=g(n);return function(n){n<36||(d[n]=y,y=n)}(n),t}let v=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function x(n,t){return v.decode(f().subarray(n,n+t))}v.decode();class k{static __wrap(n){const t=Object.create(k.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,e.a(n)}constructor(n){const t=e.h(s(n),o);return k.__wrap(t)}extract(n){try{e.g(8,this.ptr,a(n));const t=b(),r=p(t[2],t[3]).slice();return e.c(t[2],1*t[3]),r}finally{d[l++]=void 0}}}class A{static __wrap(n){const t=Object.create(A.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,e.b(n)}extract(n){try{e.i(8,this.ptr,a(n));const t=b(),r=p(t[2],t[3]).slice();return e.c(t[2],1*t[3]),r}finally{d[l++]=void 0}}constructor(n){const t=e.j(s(n),o);return A.__wrap(t)}}const E=function(n){return m(new Uint8Array(g(n)))},I=function(n){j(n)},O=function(n,t){return m(x(n,t))},D=function(n){console.log(g(n))},J=function(n){return g(n).length},T=function(){return m(e.m)},U=function(n){return m(g(n).buffer)},B=function(n,t,r){g(n).set(g(t),r>>>0)},C=function(n,t){throw new Error(x(n,t))},M=function(n){throw j(n)};e.f()},5:function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(4);e.n()}}]);