/*! For license information please see 220.e0ccb329.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[220],{248:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(98);t.a=function(e){var t=e.className,r=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:n,type:i,className:t,disabled:u}," ",r,l," "))}},250:function(e,t,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=r(151),c=r(29);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function f(){}function m(){}function d(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,a)&&(p=y);var g=d.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=d,c(g,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function e(t){var r,n,a,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),r,{headers:{authorization:u}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},251:function(e,t,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=(r(151),r(29));function c(){c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function f(){}function m(){}function d(){}var p={};l(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,a)&&(p=y);var g=d.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=d,l(g,"constructor",d),l(d,"constructor",m),m.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var l=localStorage.getItem("token");function u(){return(u=Object(n.a)(c().mark((function e(t){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",e.prev=2,e.next=5,o.a.put("".concat(i.a).concat(t),r,{headers:{authorization:l}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},302:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(98);t.a=function(e){var t=e.isDisabled,r=e.className,n=(e.icon,e.color),i=(e.permission,e.type),c=(e.url,e.func),l=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a.Ripple,{disabled:t,onClick:c,color:n,type:i,className:r},l))}},307:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(334),i=r.n(o);t.a=function(){return a.a.createElement("div",{className:"text-center"},a.a.createElement("img",{className:"img-fluid",src:i.a}))}},846:function(e,t,r){"use strict";r.r(t);var n=r(19),a=r(0),o=r.n(a),i=r(30),c=r(37),l=r(291),u=r(259),s=r(254),h=r(299),f=r(335),m=r(298),d=r(267),p=r(264),v=r(262),y=r(255),g=r(346),E=r(98),b=r(764),w=r(332),x=r(300),O=r(265),j=r(252),N=r(100),L=r(250),k=r(251),S=r(289),_=r(248),D=r(302),C=r(307);t.default=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),r=t[0],F=t[1],A=Object(a.useState)(""),G=Object(n.a)(A,2),I=G[0],P=G[1],T=Object(c.g)(),V=(Object(i.c)(),Object(a.useState)(!1)),Y=Object(n.a)(V,2),q=Y[0],z=Y[1],J=Object(a.useState)(!1),U=Object(n.a)(J,2),B=U[0],R=U[1],W=Object(a.useState)(!1),H=Object(n.a)(W,2),K=H[0],M=H[1],Q=Object(a.useState)([]),X=Object(n.a)(Q,2),Z=X[0],$=X[1],ee=Object(a.useState)([]),te=Object(n.a)(ee,2),re=te[0],ne=te[1],ae=Object(a.useState)("Select Document Category"),oe=Object(n.a)(ae,2),ie=oe[0],ce=oe[1],le=Object(a.useState)(0),ue=Object(n.a)(le,2),se=ue[0],he=ue[1],fe=Object(a.useState)(!1),me=Object(n.a)(fe,2),de=me[0],pe=me[1],ve=Object(a.useState)(null),ye=Object(n.a)(ve,2),ge=ye[0],Ee=ye[1],be=Object(a.useState)(!1),we=Object(n.a)(be,2),xe=we[0],Oe=we[1],je=Object(a.useState)(void 0),Ne=Object(n.a)(je,2),Le=Ne[0],ke=Ne[1],Se=Object(a.useState)(0),_e=Object(n.a)(Se,2),De=_e[0],Ce=_e[1],Fe=Object(a.useState)(""),Ae=Object(n.a)(Fe,2),Ge=Ae[0],Ie=Ae[1],Pe=Object(j.useToasts)().addToast,Te=Object(a.useState)(!0),Ve=Object(n.a)(Te,2),Ye=Ve[0],qe=Ve[1],ze=Object(a.useState)(!1),Je=Object(n.a)(ze,2),Ue=Je[0],Be=Je[1];Object(a.useEffect)((function(){Object(N.a)("Document/Index").then((function(e){console.log("doc data",e),$(e),qe(!1)})),Object(N.a)("DocumentCategoryDD/Index").then((function(e){console.log("dd",e),ne(e)}))}),[K]);var Re=re.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),We=function(){z(!1),F(""),P(""),ce("Select Document Category"),he(0),Ee(null),ke(void 0)},He=function(){Ie(""),Ce(0),R(!1)},Ke=function(e){console.log(e.target.value),Ee(e.target.value),Oe(!1)};return o.a.createElement("div",null,Ye?o.a.createElement(C.a,null):o.a.createElement("div",null,o.a.createElement(l.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Document List"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){T.push("/")},className:"text-white"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(l.a,null,o.a.createElement(u.a,null,o.a.createElement(_.a,{className:"btn btn-uapp-add",func:function(){return z(!0)},icon:o.a.createElement("i",{className:"fas fa-plus"}),name:" Add Document",permission:6})),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{isOpen:q,toggle:We,className:"uapp-modal2"},o.a.createElement(f.a,null,"Document Details"),o.a.createElement(m.a,null,o.a.createElement(d.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);if(0===se)pe(!0);else if(null===ge)Oe(!0);else if(void 0!=Le){console.log(localStorage.getItem("updateDocument")),Be(!0);Object(k.a)("Document/Update",t).then((function(e){var t;Be(!1),M(!K),z(!1),Pe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),F(""),P(""),ce("Select Document Category"),he(0),Ee(null),ke(void 0)}))}else{ke(void 0),Be(!0);Object(L.a)("Document/Create",t).then((function(e){var t;Be(!1),M(!K),z(!1),Pe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),F(""),P(""),ce("Select Document Category"),he(0),Ee(null)}))}}},void 0!=Le?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:Le}):null,o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Category ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(O.a,{options:Re,value:{label:ie,value:se},onChange:function(e){return t=e.label,r=e.value,ce(t),he(r),void pe(!1);var t,r},name:"documentCategoryId",id:"documentCategoryId"}),de&&o.a.createElement("span",{className:"text-danger"},"Category is required."))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Applicable? ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(p.a,{check:!0,inline:!0},o.a.createElement(y.a,{className:"form-check-input",type:"radio",id:"isVaryForApplication",onChange:Ke,name:"isVaryForApplication",value:"true",checked:"true"==ge}),o.a.createElement(g.a,{className:"form-check-label",check:!0,htmlFor:"isVaryForApplication"},"Yes")),o.a.createElement(p.a,{check:!0,inline:!0},o.a.createElement(y.a,{className:"form-check-input",type:"radio",id:"isVaryForApplication",onChange:Ke,name:"isVaryForApplication",value:"false",checked:"false"==ge}),o.a.createElement(g.a,{className:"form-check-label",check:!0,htmlFor:"isVaryForApplication"},"No")),o.a.createElement("br",null),xe&&o.a.createElement("span",{className:"text-danger"},"Is vary for application is required."))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Name ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(y.a,{type:"text",required:!0,name:"name",id:"name",value:r,placeholder:"Enter name",onChange:function(e){return F(e.target.value)}}))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Description ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(y.a,{type:"textarea",required:!0,rows:"6",name:"description",id:"description",value:I,placeholder:"Write Description",onChange:function(e){return P(e.target.value)}}))),o.a.createElement(p.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(E.a,{color:"danger",className:"mr-1 mt-3",onClick:We},"Close"),o.a.createElement(D.a,{color:"primary",type:"submit",className:"mr-1 mt-3",name:"Submit",permission:6,isDisabled:Ue})))))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(b.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Category"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===Z||void 0===Z?void 0:Z.map((function(e,t){var r;return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",{className:"text-center"},null===e||void 0===e?void 0:e.description),o.a.createElement("td",{className:"text-center"},null===e||void 0===e||null===(r=e.documentCategory)||void 0===r?void 0:r.name),o.a.createElement("td",null,o.a.createElement(w.a,null,o.a.createElement(_.a,{func:function(){return function(e){var t,r,n;z(!0),console.log(e,null===e||void 0===e||null===(t=e.documentCategory)||void 0===t?void 0:t.id),ce(null===e||void 0===e||null===(r=e.documentCategory)||void 0===r?void 0:r.name),he(null===e||void 0===e||null===(n=e.documentCategory)||void 0===n?void 0:n.id),F(null===e||void 0===e?void 0:e.name),P(null===e||void 0===e?void 0:e.description),Ee("".concat(null===e||void 0===e?void 0:e.isVaryForApplication)),ke(null===e||void 0===e?void 0:e.id)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(_.a,{className:"mx-1 btn-sm",func:function(){return t=null===e||void 0===e?void 0:e.name,r=null===e||void 0===e?void 0:e.id,Ie(t),Ce(r),void R(!0);var t,r},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6})),o.a.createElement(h.a,{isOpen:B,toggle:He,className:"uapp-modal"},o.a.createElement(m.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,Ge)," ? Once Deleted it can't be Undone!")),o.a.createElement(x.a,null,o.a.createElement(E.a,{color:"danger",onClick:function(){return function(e){Be(!0);Object(S.a)("Document/Delete/".concat(e)).then((function(e){Be(!1),R(!1),M(!K),Pe(e,{appearance:"error",autoDismiss:!0}),Ie(""),Ce(0)}))}(De)},disabled:Ue},"YES"),o.a.createElement(E.a,{onClick:He},"NO")))))})))))))))}}}]);
//# sourceMappingURL=220.e0ccb329.chunk.js.map