/*! For license information please see service-worker.js.LICENSE.txt */
!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){t=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(j){f=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),u=new E(n||[]);return a(i,"_invoke",{value:_(e,r,u)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}r.wrap=l;var h={};function v(){}function y(){}function m(){}var d={};f(d,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(R([])));b&&b!==n&&o.call(b,u)&&(d=b);var w=m.prototype=v.prototype=Object.create(d);function x(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,r){function n(a,i,u,c){var s=p(t[a],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==e(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):r.resolve(l).then((function(e){f.value=e,u(f)}),(function(e){return n("throw",e,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,o){n(e,t,r,o)}))}return i=i?i.then(o,o):o()}})}function _(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function q(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(q,this),this.reset(!0)}function R(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return y.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=f(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,f(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},r.awrap=function(e){return{__await:e}},x(k.prototype),f(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new k(l(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(w),f(w,s,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=R,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function u(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function l(t,r){if(r&&("object"===e(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function p(e,t,r){return p=f()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&c(o,r.prototype),o},p.apply(null,arguments)}function h(e){var t="function"===typeof Map?new Map:void 0;return h=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)},h(e)}try{self.workbox.v["workbox:core:3.6.3"]=1}catch(oe){}var v=function(e){for(var t=e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t},y=v,m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(r,e);var t=function(e){var t=f();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}(r);function r(e,n){var a;o(this,r);var i=y(e,n);return(a=t.call(this,i)).name=e,a.details=n,a}return u(r)}(h(Error)),d={prefix:"workbox",suffix:self.registration.scope,googleAnalytics:"googleAnalytics",precache:"precache",runtime:"runtime"},g=function(e){return[d.prefix,e,d.suffix].filter((function(e){return e.length>0})).join("-")},b=function(e){return e||g(d.runtime)};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t){if(e){if("string"===typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function k(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=x(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}var _="cacheDidUpdate",O="cacheWillUpdate",q="cachedResponseWillBeUsed",N="fetchDidFail",E="requestWillFetch",R=function(e,t){return e.filter((function(e){return t in e}))};function j(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S={debug:0,log:1,warn:2,error:3,silent:4},L=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),P=S.warn,T=function(e){return P<=e},A=S.error,F=function(e,t,r){var n,o=0===e.indexOf("group")?A:S[e];if(T(o))if(!r||"groupCollapsed"===e&&L){var a;(a=console)[e].apply(a,j(t))}else{var i=["%cworkbox","background: ".concat(r,"; color: white; padding: 2px 0.5em; ")+"border-radius: 0.5em;"];(n=console)[e].apply(n,i.concat(j(t)))}},I=function(){T(A)&&console.groupEnd()},U={groupEnd:I,unprefixed:{groupEnd:I}},W={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db"};Object.keys(W).forEach((function(e){return function(e,t){U[e]=function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return F(e,n,t)},U.unprefixed[e]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return F(e,r)}}(e,W[e])}));var G=new Set;function C(){return B.apply(this,arguments)}function B(){return(B=n(t().mark((function e(){var r,n,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,r=k(G),e.prev=2,r.s();case 4:if((n=r.n()).done){e.next=11;break}return o=n.value,e.next=8,o();case 8:0;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),r.e(e.t0);case 16:return e.prev=16,r.f(),e.finish(16);case 19:0;case 20:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}var M=function(e){var t=new URL(e,location);return t.origin===location.origin?t.pathname:t.href},D=function(){var e=n(t().mark((function e(){var r,n,o,a,i,u,c,s,f,l,p,h,v,y,d=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(r=d.length>0&&void 0!==d[0]?d[0]:{}).cacheName,o=r.request,a=r.response,i=r.event,u=r.plugins,c=void 0===u?[]:u,a){e.next=4;break}throw new m("cache-put-with-no-response",{url:M(o.url)});case 4:return e.next=6,$({request:o,response:a,event:i,plugins:c});case 6:if(s=e.sent){e.next=10;break}return e.abrupt("return");case 10:e.next=13;break;case 13:return e.next=15,caches.open(n);case 15:if(f=e.sent,!((l=R(c,_)).length>0)){e.next=23;break}return e.next=20,Y({cacheName:n,request:o});case 20:e.t0=e.sent,e.next=24;break;case 23:e.t0=null;case 24:return p=e.t0,e.prev=26,e.next=29,f.put(o,s);case 29:e.next=37;break;case 31:if(e.prev=31,e.t1=e.catch(26),"QuotaExceededError"!==e.t1.name){e.next=36;break}return e.next=36,C();case 36:throw e.t1;case 37:h=k(l),e.prev=38,h.s();case 40:if((v=h.n()).done){e.next=46;break}return y=v.value,e.next=44,y[_].call(y,{cacheName:n,request:o,event:i,oldResponse:p,newResponse:s});case 44:e.next=40;break;case 46:e.next=51;break;case 48:e.prev=48,e.t2=e.catch(38),h.e(e.t2);case 51:return e.prev=51,h.f(),e.finish(51);case 54:case"end":return e.stop()}}),e,null,[[26,31],[38,48,51,54]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=n(t().mark((function e(r){var n,o,a,i,u,c,s,f,l,p,h;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.cacheName,o=r.request,a=r.event,i=r.matchOptions,u=r.plugins,c=void 0===u?[]:u,e.next=3,caches.open(n);case 3:return s=e.sent,e.next=6,s.match(o,i);case 6:f=e.sent,l=k(c),e.prev=9,l.s();case 11:if((p=l.n()).done){e.next=20;break}if(h=p.value,!(q in h)){e.next=18;break}return e.next=16,h[q].call(h,{cacheName:n,request:o,event:a,matchOptions:i,cachedResponse:f});case 16:f=e.sent;case 18:e.next=11;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(9),l.e(e.t0);case 25:return e.prev=25,l.f(),e.finish(25);case 28:return e.abrupt("return",f);case 29:case"end":return e.stop()}}),e,null,[[9,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=n(t().mark((function e(r){var n,o,a,i,u,c,s,f,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.request,o=r.response,a=r.event,i=r.plugins,u=o,c=!1,s=k(i),e.prev=4,s.s();case 6:if((f=s.n()).done){e.next=18;break}if(l=f.value,!(O in l)){e.next=16;break}return c=!0,e.next=12,l[O].call(l,{request:n,response:u,event:a});case 12:if(u=e.sent){e.next=16;break}return e.abrupt("break",18);case 16:e.next=6;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),s.e(e.t0);case 23:return e.prev=23,s.f(),e.finish(23);case 26:return c||(u=u.ok?u:null),e.abrupt("return",u||null);case 28:case"end":return e.stop()}}),e,null,[[4,20,23,26]])})));return function(t){return e.apply(this,arguments)}}(),H={put:D,match:Y},J=function(){var e=n(t().mark((function e(r){var n,o,a,i,u,c,s,f,l,p,h,v,y,d,g,b;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.request,o=r.fetchOptions,a=r.event,i=r.plugins,u=void 0===i?[]:i,!a||!a.preloadResponse){e.next=8;break}return e.next=4,a.preloadResponse;case 4:if(!(c=e.sent)){e.next=8;break}return e.abrupt("return",c);case 8:"string"===typeof n&&(n=new Request(n)),s=R(u,N),f=s.length>0?n.clone():null,e.prev=12,l=k(u),e.prev=14,l.s();case 16:if((p=l.n()).done){e.next=25;break}if(h=p.value,!(E in h)){e.next=23;break}return e.next=21,h[E].call(h,{request:n.clone(),event:a});case 21:n=e.sent;case 23:e.next=16;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(14),l.e(e.t0);case 30:return e.prev=30,l.f(),e.finish(30);case 33:e.next=38;break;case 35:throw e.prev=35,e.t1=e.catch(12),new m("plugin-error-request-will-fetch",{thrownError:e.t1});case 38:return v=n.clone(),e.prev=39,e.next=42,fetch(n,o);case 42:return y=e.sent,e.abrupt("return",y);case 47:e.prev=47,e.t2=e.catch(39),d=k(s),e.prev=51,d.s();case 53:if((g=d.n()).done){e.next=59;break}return b=g.value,e.next=57,b[N].call(b,{error:e.t2,event:a,originalRequest:f.clone(),request:v.clone()});case 57:e.next=53;break;case 59:e.next=64;break;case 61:e.prev=61,e.t3=e.catch(51),d.e(e.t3);case 64:return e.prev=64,d.f(),e.finish(64);case 67:throw e.t2;case 68:case"end":return e.stop()}}),e,null,[[12,35],[14,27,30,33],[39,47],[51,61,64,67]])})));return function(t){return e.apply(this,arguments)}}(),K={fetch:J};try{self.workbox.v["workbox:strategies:3.6.3"]=1}catch(oe){}var Q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this._cacheName=b(t.cacheName),this._plugins=t.plugins||[],this._fetchOptions=t.fetchOptions||null,this._matchOptions=t.matchOptions||null}return u(e,[{key:"handle",value:function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,e.abrupt("return",this.makeRequest({event:n,request:n.request}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=n(t().mark((function e(r){var n,o,a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,o=r.request,[],"string"===typeof o&&(o=new Request(o)),e.next=6,H.match({cacheName:this._cacheName,request:o,event:n,matchOptions:this._matchOptions,plugins:this._plugins});case 6:if(a=e.sent){e.next=21;break}return e.prev=9,e.next=12,this._getFromNetwork(o,n);case 12:a=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),i=e.t0;case 18:0,e.next=22;break;case 21:0;case 22:if(!i){e.next=25;break}throw i;case 25:return e.abrupt("return",a);case 26:case"end":return e.stop()}}),e,this,[[9,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getFromNetwork",value:function(){var e=n(t().mark((function e(r,n){var o,a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.fetch({request:r,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins});case 2:if(o=e.sent,a=o.clone(),i=H.put({cacheName:this._cacheName,request:r,response:a,event:n,plugins:this._plugins}),n)try{n.waitUntil(i)}catch(t){0}return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this._cacheName=b(t.cacheName),this._plugins=t.plugins||[],this._matchOptions=t.matchOptions||null}return u(e,[{key:"handle",value:function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,e.abrupt("return",this.makeRequest({event:n,request:n.request}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=n(t().mark((function e(r){var n,o,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,"string"===typeof(o=r.request)&&(o=new Request(o)),e.next=5,H.match({cacheName:this._cacheName,request:o,event:n,matchOptions:this._matchOptions,plugins:this._plugins});case 5:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),V={cacheWillUpdate:function(e){var t=e.response;return t.ok||0===t.status?t:null}},X=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o(this,e),this._cacheName=b(t.cacheName),t.plugins){var r=t.plugins.some((function(e){return!!e.cacheWillUpdate}));this._plugins=r?t.plugins:[V].concat(j(t.plugins))}else this._plugins=[V];this._networkTimeoutSeconds=t.networkTimeoutSeconds,this._fetchOptions=t.fetchOptions||null,this._matchOptions=t.matchOptions||null}return u(e,[{key:"handle",value:function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,e.abrupt("return",this.makeRequest({event:n,request:n.request}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=n(t().mark((function e(r){var n,o,a,i,u,c,s,f,l,p;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,o=r.request,a=[],"string"===typeof o&&(o=new Request(o)),i=[],this._networkTimeoutSeconds&&(c=this._getTimeoutPromise({request:o,event:n,logs:a}),s=c.id,f=c.promise,u=s,i.push(f)),l=this._getNetworkPromise({timeoutId:u,request:o,event:n,logs:a}),i.push(l),e.next=10,Promise.race(i);case 10:if(p=e.sent){e.next=15;break}return e.next=14,l;case 14:p=e.sent;case 15:return e.abrupt("return",p);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getTimeoutPromise",value:function(e){var r,o=this,a=e.request,i=(e.logs,e.event),u=new Promise((function(e){var u=function(){var r=n(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=4,o._respondFromCache({request:a,event:i});case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r=setTimeout(u,1e3*o._networkTimeoutSeconds)}));return{promise:u,id:r}}},{key:"_getNetworkPromise",value:function(){var e=n(t().mark((function e(r){var n,o,a,i,u,c,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timeoutId,o=r.request,r.logs,a=r.event,e.prev=1,e.next=4,K.fetch({request:o,event:a,fetchOptions:this._fetchOptions,plugins:this._plugins});case 4:u=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i=e.t0;case 10:if(n&&clearTimeout(n),!i&&u){e.next=19;break}return e.next=15,this._respondFromCache({request:o,event:a});case 15:u=e.sent,e.next=22;break;case 19:if(c=u.clone(),s=H.put({cacheName:this._cacheName,request:o,response:c,event:a,plugins:this._plugins}),a)try{a.waitUntil(s)}catch(t){0}case 22:return e.abrupt("return",u);case 23:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_respondFromCache",value:function(e){var t=e.event,r=e.request;return H.match({cacheName:this._cacheName,request:r,event:t,matchOptions:this._matchOptions,plugins:this._plugins})}}]),e}(),Z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this._cacheName=b(t.cacheName),this._plugins=t.plugins||[],this._fetchOptions=t.fetchOptions||null}return u(e,[{key:"handle",value:function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,e.abrupt("return",this.makeRequest({event:n,request:n.request}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=n(t().mark((function e(r){var n,o,a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,"string"===typeof(o=r.request)&&(o=new Request(o)),e.prev=3,e.next=6,K.fetch({request:o,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins});case 6:i=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),a=e.t0;case 12:if(!a){e.next=15;break}throw a;case 15:return e.abrupt("return",i);case 16:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ee=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o(this,e),this._cacheName=b(t.cacheName),this._plugins=t.plugins||[],t.plugins){var r=t.plugins.some((function(e){return!!e.cacheWillUpdate}));this._plugins=r?t.plugins:[V].concat(j(t.plugins))}else this._plugins=[V];this._fetchOptions=t.fetchOptions||null,this._matchOptions=t.matchOptions||null}return u(e,[{key:"handle",value:function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,e.abrupt("return",this.makeRequest({event:n,request:n.request}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=n(t().mark((function e(r){var n,o,a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.event,o=r.request,[],"string"===typeof o&&(o=new Request(o)),a=this._getFromNetwork({request:o,event:n}),e.next=7,H.match({cacheName:this._cacheName,request:o,event:n,matchOptions:this._matchOptions,plugins:this._plugins});case 7:if(!(i=e.sent)){e.next=13;break}if(n)try{n.waitUntil(a)}catch(t){0}e.next=17;break;case 13:return e.next=16,a;case 16:i=e.sent;case 17:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getFromNetwork",value:function(){var e=n(t().mark((function e(r){var n,o,a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.request,o=r.event,e.next=3,K.fetch({request:n,event:o,fetchOptions:this._fetchOptions,plugins:this._plugins});case 3:if(a=e.sent,i=H.put({cacheName:this._cacheName,request:n,response:a.clone(),event:o,plugins:this._plugins}),o)try{o.waitUntil(i)}catch(t){0}return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),te={cacheFirst:Q,cacheOnly:z,networkFirst:X,networkOnly:Z,staleWhileRevalidate:ee},re={};Object.keys(te).forEach((function(e){re[e]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(0,te[e])(Object.assign(t))}}));clientsClaim(),precacheAndRoute([{'revision':'24bf90edd1d7830e26db72e1dcad8c44','url':'/meet2/index.html'},{'revision':null,'url':'/meet2/static/css/main.7303aea2.css'},{'revision':null,'url':'/meet2/static/js/919.6bf1f6e1.chunk.js'},{'revision':null,'url':'/meet2/static/js/main.edd02cb9.js'}]);var ne=new RegExp("/[^/?]+\\.[^/]+$");registerRoute((function(e){var t=e.request,r=e.url;return"navigate"===t.mode&&(!r.pathname.startsWith("/_")&&!r.pathname.match(ne))}),createHandlerBoundToURL("/meet2/index.html")),registerRoute((function(e){var t=e.url;return t.origin===self.location.origin&&t.pathname.endsWith(".png")}),new ee({cacheName:"images",plugins:[new ExpirationPlugin({maxEntries:50})]})),self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))}();
//# sourceMappingURL=service-worker.js.map