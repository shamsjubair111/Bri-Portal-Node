/*! For license information please see 241.c72614f8.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[241],{254:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(158),c=r(48);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a,s=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},255:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(158),c=r(48);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===t.t0.response.status&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},923:function(t,e,r){"use strict";r.r(e);var n=r(29),a=r(0),o=r.n(a),i=r(33),c=r(305),l=r(264),u=r(96),s=r(261),h=r(312),f=r(382),p=r(311),d=r(278),v=r(269),m=r(267),y=r(268),g=r(759),w=r(388),E=r(317),b=r(257),x=r(103),L=r(254),N=r(295),O=r(255);e.default=function(){var t=Object(i.g)(),e=Object(a.useState)(!1),r=Object(n.a)(e,2),j=r[0],k=r[1],_=Object(a.useState)(!1),S=Object(n.a)(_,2),G=S[0],T=S[1],F=Object(a.useState)([]),P=Object(n.a)(F,2),A=P[0],C=P[1],D=Object(b.useToasts)().addToast,I=Object(a.useState)(!1),Y=Object(n.a)(I,2),z=Y[0],J=Y[1],U=Object(a.useState)({}),B=Object(n.a)(U,2),R=B[0],V=B[1],q=Object(a.useState)({}),H=Object(n.a)(q,2),K=H[0],M=H[1];Object(a.useEffect)((function(){Object(x.a)("Nationality/Index").then((function(t){console.log(t),C(t)}))}),[z]);var Q=function(){k(!1)},W=function(){Object(N.a)("Nationality/Delete/".concat(null===K||void 0===K?void 0:K.id)).then((function(t){D(t,{appearance:"error",autoDismiss:!0}),M({}),J(!z),T(!1)}))};return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Nationality List"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){t.push("/")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(u.a,{className:"btn btn-uapp-add",onClick:function(){k(!0)}}," ",o.a.createElement("i",{className:"fas fa-plus"}),"  Add New Nationality"),o.a.createElement("div",null," ",o.a.createElement("b",null," Total ",o.a.createElement("span",{className:"badge badge-primary"},A.length," ")," Nationalities  Found "))),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{isOpen:j,toggle:Q,className:"uapp-modal"},o.a.createElement(f.a,null,"Add Nationality "),o.a.createElement(p.a,null,o.a.createElement(d.a,{onSubmit:function(t){t.preventDefault();var e=new FormData(t.target);(null===R||void 0===R?void 0:R.id)?Object(O.a)("Nationality/Update",e).then((function(t){var e,r;200==(null===t||void 0===t?void 0:t.status)&&(console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message),D(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message,{appearance:"success",autoDismiss:!0}),V({}),J(!z),k(!1))})):Object(L.a)("Nationality/Create",e).then((function(t){var e,r;200==(null===t||void 0===t?void 0:t.status)&&(console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message),D(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message,{appearance:"success",autoDismiss:!0}),J(!z),k(!1))}))}},o.a.createElement(v.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(m.a,{md:"4"},o.a.createElement("span",null," Name")),o.a.createElement(m.a,{md:"8"},(null===R||void 0===R?void 0:R.id)?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:null===R||void 0===R?void 0:R.id}):null,o.a.createElement(y.a,{type:"text",name:"name",id:"name",defaultValue:null===R||void 0===R?void 0:R.name,placeholder:"Enter Nationality"}))),o.a.createElement(v.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(u.a,{color:"danger",className:"mr-1 mt-3",onClick:Q},"Close"),o.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-3"},"Submit"))))),o.a.createElement("div",null)),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{className:"table-sm table-bordered text-center"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null," Name"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,A.map((function(t,e){return o.a.createElement("tr",{key:e,list:t},o.a.createElement("td",null,e+1),o.a.createElement("td",null,null===t||void 0===t?void 0:t.name),o.a.createElement("td",null,o.a.createElement(w.a,{variant:"text"},o.a.createElement(u.a,{className:"btn-sm mx-2",onClick:function(){return function(t){M(t),console.log(t),T(!0)}(t)},color:"danger"},o.a.createElement("i",{className:"fas fa-trash-alt"})),o.a.createElement(u.a,{color:"warning",onClick:function(){return function(t){V(t),k(!0)}(t)},className:" btn-sm"}," ",o.a.createElement("i",{className:"fas fa-edit"})," ")),o.a.createElement(h.a,{isOpen:G,className:"uapp-modal"},o.a.createElement(p.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ? Once Deleted it can't be Undone!")),o.a.createElement(E.a,null,o.a.createElement(u.a,{color:"danger",onClick:W},"YES"),o.a.createElement(u.a,null,"NO")))))}))))))))}}}]);
//# sourceMappingURL=241.c72614f8.chunk.js.map