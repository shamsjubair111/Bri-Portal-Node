/*! For license information please see 185.4104f5c7.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[185],{252:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(96);e.a=function(t){var e=t.className,r=t.icon,n=t.color,i=(t.permission,t.type),c=(t.url,t.func),l=t.name,u=t.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:n,type:i,className:e,disabled:u}," ",r,l," "))}},256:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function f(){}function d(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===t.t0.response.status&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},257:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function f(){}function d(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a,s=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},324:function(t,e,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),l=r.n(c),u=r(5),s=r.n(u),h=r(4),f=["className","cssModule","tag"],d={tag:h.t,className:l.a.string,cssModule:l.a.object},p=function(t){var e=t.className,r=t.cssModule,o=t.tag,c=Object(a.a)(t,f),l=Object(h.p)(s()(e,"modal-footer"),r);return i.a.createElement(o,Object(n.a)({},c,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},e.a=p},455:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(32);e.a=function(t){var e=t.url,r=t.className,n=(t.icon,t.permission),i=(t.name,t.data),c=[1,2,3,4,6];return a.a.createElement(a.a.Fragment,null,(null===c||void 0===c?void 0:c.includes(n))?a.a.createElement(o.a,{className:r,to:e},a.a.createElement("span",null,i)):null)}},831:function(t,e,r){"use strict";r.r(e);var n=r(29),a=r(0),o=r.n(a),i=(r(26),r(33)),c=r(306),l=r(265),u=r(264),s=r(311),h=r(384),f=r(310),d=r(279),p=r(270),m=r(268),v=r(267),y=r(96),g=r(758),E=r(324),w=(r(546),r(255)),b=r(32),x=r(103),O=r(257),L=r(303),j=r(256),N=r(252);r(455);e.default=function(){var t=Object(a.useState)(0),e=Object(n.a)(t,2),r=(e[0],e[1]),k=Object(a.useState)(""),_=Object(n.a)(k,2),S=(_[0],_[1]),D=Object(a.useState)(""),C=Object(n.a)(D,2),G=(C[0],C[1]),F=Object(i.g)(),T=Object(a.useState)(!1),P=Object(n.a)(T,2),A=P[0],I=P[1],Y=Object(a.useState)(!1),M=Object(n.a)(Y,2),V=M[0],q=M[1],z=Object(a.useState)(!1),J=Object(n.a)(z,2),U=J[0],W=J[1],B=Object(w.useToasts)().addToast,R=Object(a.useState)([]),H=Object(n.a)(R,2),K=H[0],Q=H[1],X=Object(a.useState)({}),Z=Object(n.a)(X,2),$=Z[0],tt=Z[1],et=Object(a.useState)(""),rt=Object(n.a)(et,2),nt=rt[0],at=rt[1],ot=Object(a.useState)(0),it=Object(n.a)(ot,2),ct=it[0],lt=it[1];Object(a.useEffect)((function(){Object(x.a)("DocumentCategory/Index").then((function(t){Q(t),r(null===t||void 0===t?void 0:t.id),console.log("docuCate",t)}))}),[U]);var ut=function(){I(!1),tt({})},st=function(){at(""),lt(0),q(!1)};return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Document Category List"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){F.push("/documentList")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Document List")))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(N.a,{className:"btn btn-uapp-add",func:function(){return I(!0)},icon:o.a.createElement("i",{className:"fas fa-plus"}),name:" Add New",permission:6}),o.a.createElement("br",null),o.a.createElement("div",null," ",o.a.createElement("b",null," ","Total"," ",o.a.createElement("span",{className:"badge badge-primary"},null===K||void 0===K?void 0:K.length)," ","Document Category Found"," "))),o.a.createElement(u.a,null,o.a.createElement(b.a,{to:"/newform"}),o.a.createElement("div",null,o.a.createElement(s.a,{isOpen:A,toggle:ut,className:"uapp-modal"},o.a.createElement(h.a,null,"Add Document Category"),o.a.createElement(f.a,null,o.a.createElement(d.a,{onSubmit:function(t){t.preventDefault();var e=new FormData(t.target);(null===$||void 0===$?void 0:$.id)?Object(j.a)("DocumentCategory/Update",e).then((function(t){var e;W(!U),I(!1),B(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),tt({})})):(tt({}),Object(O.a)("DocumentCategory/Create",e).then((function(t){var e;W(!U),B(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),I(!1),S(""),G(""),tt({})})))}},o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},(null===$||void 0===$?void 0:$.id)?o.a.createElement(m.a,{type:"hidden",name:"id",id:"id",defaultValue:null===$||void 0===$?void 0:$.id}):null),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Category Name ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(m.a,{type:"text",required:!0,name:"name",id:"name",defaultValue:null===$||void 0===$?void 0:$.name,placeholder:"Write Document Name",onChange:function(t){return S(t.target.value)}}))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Description ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(m.a,{type:"textarea",required:!0,rows:"4",name:"description",id:"description",defaultValue:null===$||void 0===$?void 0:$.description,placeholder:"Write Description",onChange:function(t){return G(t.target.value)}}))),o.a.createElement(p.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(y.a,{color:"danger",className:"mr-1 mt-3",onClick:ut},"Close"),o.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-3"},"Submit"))))),o.a.createElement("div",null)),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Category Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===K||void 0===K?void 0:K.map((function(t,e){return o.a.createElement("tr",{key:null===t||void 0===t?void 0:t.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},e+1),o.a.createElement("td",null,null===t||void 0===t?void 0:t.name),o.a.createElement("td",null,null===t||void 0===t?void 0:t.description),o.a.createElement("td",null,o.a.createElement(N.a,{func:function(){return function(t){I(!0),S(null===t||void 0===t?void 0:t.name),G(null===t||void 0===t?void 0:t.description),tt(t)}(t)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(N.a,{className:"mx-1 btn-sm",func:function(){return e=null===t||void 0===t?void 0:t.name,r=null===t||void 0===t?void 0:t.id,at(e),lt(r),void q(!0);var e,r},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(s.a,{isOpen:V,toggle:st,className:"uapp-modal"},o.a.createElement(f.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,nt)," ? Once Deleted it can't be Undone!")),o.a.createElement(E.a,null,o.a.createElement(y.a,{color:"danger",onClick:function(){return t=ct,void Object(L.a)("Documentcategory/Delete/".concat(t)).then((function(t){q(!1),W(!U),B(t,{appearance:"error",autoDismiss:!0}),at(""),lt(0)}));var t}},"YES"),o.a.createElement(y.a,{onClick:st},"NO")))))}))))))))}}}]);
//# sourceMappingURL=185.4104f5c7.chunk.js.map