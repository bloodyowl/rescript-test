(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[248],{7625:function(r,n,t){"use strict";function u(r){return function(r,n){for(;;){var t=n,u=r;if(!u)return t;n={hd:u.hd,tl:t},r=u.tl}}(r,0)}t.d(n,{GY:function(){return u}})},6764:function(r,n,t){"use strict";t.d(n,{eq:function(){return E},nI:function(){return y}});var u=t(3680);function e(r){return void 0!==r?r.h:0}function i(r,n,t,u){var i=e(r),c=e(u);return{k:n,v:t,h:i>=c?i+1|0:c+1|0,l:r,r:u}}function c(r,n){return{k:r,v:n,h:1,l:void 0,r:void 0}}function f(r,n){return void 0===n||void 0!==r&&r.h>=n.h}function o(r,n){for(;;){if(void 0===r)return n;n={hd:r,tl:n},r=r.l}}function a(r){var n=r.l,t=r.r;return(1+(void 0!==n?a(n):0)|0)+(void 0!==t?a(t):0)|0}function v(r){return void 0!==r?a(r):0}function l(r,n,t){switch(t){case 0:return;case 1:var u=r[n];return c(u[0],u[1]);case 2:var e=r[n],f=r[n-1|0],o=e;return{k:f[0],v:f[1],h:2,l:c(o[0],o[1]),r:void 0};case 3:var a=r[n],v=r[n-1|0],s=r[n-2|0],h=v,d=a;return{k:h[0],v:h[1],h:2,l:c(d[0],d[1]),r:c(s[0],s[1])};default:var _=t/2|0,g=l(r,n,_),k=r[n-_|0],w=l(r,(n-_|0)-1|0,(t-_|0)-1|0);return i(g,k[0],k[1],w)}}function s(r,n,t){switch(t){case 0:return;case 1:var u=r[n];return c(u[0],u[1]);case 2:var e=r[n],f=r[n+1|0],o=e;return{k:f[0],v:f[1],h:2,l:c(o[0],o[1]),r:void 0};case 3:var a=r[n],v=r[n+1|0],l=r[n+2|0],h=v,d=a;return{k:h[0],v:h[1],h:2,l:c(d[0],d[1]),r:c(l[0],l[1])};default:var _=t/2|0,g=s(r,n,_),k=r[n+_|0],w=s(r,1+(n+_|0)|0,(t-_|0)-1|0);return i(g,k[0],k[1],w)}}function h(r){var n=r.l;r.l=n.r,n.r=r;var t=e(r.l),u=e(r.r);r.h=(t>u?t:u)+1|0;var i=e(n.l),c=r.h;return n.h=(i>c?i:c)+1|0,n}function d(r){var n=r.r;r.r=n.l,n.l=r;var t=e(r.l),u=e(r.r);r.h=(t>u?t:u)+1|0;var i=e(n.r),c=r.h;return n.h=(i>c?i:c)+1|0,n}function _(r){var n=e(r.l),t=e(r.r);return r.h=(n>t?n:t)+1|0,r}function g(r){var n,t,u=r.l,i=r.r,c=e(u),o=e(i);if(c>(2+o|0))return f(u.l,u.r)?_(h(r)):_((t=d((n=r).l),n.l=t,h(n)));if(o>(2+c|0)){var a=i.l;return f(i.r,a)?_(d(r)):_(function(r){var n=h(r.r);return r.r=n,d(r)}(r))}return r.h=(c>o?c:o)+1|0,r}function k(r,n){var t=r.length;if(0===t||1===t)return t;var u=r[0],e=r[1];if(!n(u,e))return n(e,u)?0|-function(r,n,t,u,e){for(;;){var i=t,c=n;if(i>=u)return i;var f=r[i];if(!e(f,c))return i;t=i+1|0,n=f}}(r,e,2,t,n):1;for(var i=e,c=2;;){var f=c,o=i;if(f>=t)return f;var a=r[f];if(!n(o,a))return f;c=f+1|0,i=a}}function w(r,n,t){return v(r)===v(n)&&function(r,n,t){for(;;){var u=n,e=r;if(!e)return!0;if(!u)return!0;var i=u.hd,c=e.hd;if(c.k!==i.k||!t(c.v,i.v))return!1;n=o(i.r,u.tl),r=o(c.r,e.tl)}}(o(r,0),o(n,0),t)}function p(r,n,t){if(void 0===r)return c(n,t);var u=r.k;if(n===u)return r.k=n,r.v=t,r;var e=r.l,i=r.r;if(n<u){var f=p(e,n,t);r.l=f}else r.r=p(i,n,t);return g(r)}var E=function(r,n,t){return w(r,n,u.uv(t))},y=function(r){var n=r.length;if(0!==n){var t,u=k(r,(function(r,n){return r[0]<n[0]}));t=u>=0?s(r,0,u):l(r,(u=0|-u)-1|0,u);for(var e=u;e<n;++e){var i=r[e];t=p(t,i[0],i[1])}return t}}},8644:function(r,n,t){"use strict";t.d(n,{UW:function(){return c}});var u={contents:0};function e(r){return u.contents=u.contents+1|0,r+"/"+u.contents}var i=e("Caml_js_exceptions.Error");function c(r){return function(r){return null!=r&&"string"==typeof r.RE_EXN_ID}(r)?r:{RE_EXN_ID:i,_1:r}}},2755:function(r,n,t){"use strict";t.d(n,{hZ:function(){return e}});var u=function(r,n){for(var t in r)n(t)};function e(r,n){if(r===n)return!0;var t=typeof r;if("string"===t||"number"===t||"boolean"===t||"undefined"===t||null===r)return!1;var i=typeof n;if("function"===t||"function"===i)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if("number"===i||"undefined"===i||null===n)return!1;var c=0|r.TAG,f=0|n.TAG;if(248===c)return r[1]===n[1];if(251===c)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(c!==f)return!1;var o=0|r.length;if(o!==(0|n.length))return!1;if(!Array.isArray(r)){if(r instanceof Date&&n instanceof Date)return!(r>n||r<n);var a={contents:!0};return u(r,(function(r){n.hasOwnProperty(r)||(a.contents=!1)})),a.contents&&u(n,(function(t){r.hasOwnProperty(t)&&e(n[t],r[t])||(a.contents=!1)})),a.contents}for(var v=0;;){var l=v;if(l===o)return!0;if(!e(r[l],n[l]))return!1;v=l+1|0}}},3680:function(r,n,t){"use strict";function u(r,n,t){for(var u=new Array(t),e=0,i=n;e<t;)u[e]=r[i],e=e+1|0,i=i+1|0;return u}function e(r,n){for(;;){var t=n,i=r,c=i.length,f=0===c?1:c,o=f-t.length|0;if(0===o)return i.apply(null,t);if(o>=0)return function(r,n){return function(t){return e(r,n.concat([t]))}}(i,t);n=u(t,f,0|-o),r=i.apply(null,u(t,0,f))}}function i(r,n){var t=r.length;if(1===t)return r(n);switch(t){case 1:return r(n);case 2:return function(t){return r(n,t)};case 3:return function(t,u){return r(n,t,u)};case 4:return function(t,u,e){return r(n,t,u,e)};case 5:return function(t,u,e,i){return r(n,t,u,e,i)};case 6:return function(t,u,e,i,c){return r(n,t,u,e,i,c)};case 7:return function(t,u,e,i,c,f){return r(n,t,u,e,i,c,f)};default:return e(r,[n])}}function c(r){return 1===r.length?r:function(n){return i(r,n)}}function f(r,n,t){var u=r.length;if(2===u)return r(n,t);switch(u){case 1:return e(r(n),[t]);case 2:return r(n,t);case 3:return function(u){return r(n,t,u)};case 4:return function(u,e){return r(n,t,u,e)};case 5:return function(u,e,i){return r(n,t,u,e,i)};case 6:return function(u,e,i,c){return r(n,t,u,e,i,c)};case 7:return function(u,e,i,c,f){return r(n,t,u,e,i,c,f)};default:return e(r,[n,t])}}function o(r){return 2===r.length?r:function(n,t){return f(r,n,t)}}function a(r){return 3===r.length?r:function(n,t,u){return function(r,n,t,u){var i=r.length;if(3===i)return r(n,t,u);switch(i){case 1:return e(r(n),[t,u]);case 2:return e(r(n,t),[u]);case 3:return r(n,t,u);case 4:return function(e){return r(n,t,u,e)};case 5:return function(e,i){return r(n,t,u,e,i)};case 6:return function(e,i,c){return r(n,t,u,e,i,c)};case 7:return function(e,i,c,f){return r(n,t,u,e,i,c,f)};default:return e(r,[n,t,u])}}(r,n,t,u)}}t.d(n,{_1:function(){return i},_2:function(){return f},Dm:function(){return c},uv:function(){return o},ie:function(){return a}})}}]);