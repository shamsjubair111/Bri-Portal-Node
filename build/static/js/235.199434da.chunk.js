/*! For license information please see 235.199434da.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[235],{247:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98);t.a=function(e){var t=e.className,n=e.icon,r=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:r,type:i,className:t,disabled:u}," ",n,l," "))}},251:function(e,t,n){"use strict";var r=n(9),a=n(3),o=n.n(a),i=n(152),c=n(24);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function f(){}function d(){}function m(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=m.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=m,c(g,"constructor",m),c(m,"constructor",d),d.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var u=localStorage.getItem("token");function s(){return(s=Object(r.a)(l().mark((function e(t){var n,r,a,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},252:function(e,t,n){"use strict";var r=n(9),a=n(3),o=n.n(a),i=(n(152),n(24));function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function f(){}function d(){}function m(){}var p={};l(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=m.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=m,l(g,"constructor",m),l(m,"constructor",d),d.displayName=l(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var l=localStorage.getItem("token");function u(){return(u=Object(r.a)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",e.prev=2,e.next=5,o.a.put("".concat(i.a).concat(t),n,{headers:{authorization:l}});case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98);t.a=function(e){var t=e.isDisabled,n=e.className,r=(e.icon,e.color),i=(e.permission,e.type),c=(e.url,e.func),l=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a.Ripple,{disabled:t,onClick:c,color:r,type:i,className:n},l))}},316:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(337),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:"text-center"},a.a.createElement("img",{className:"img-fluid",src:i.a}))}},856:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n(0),o=n.n(a),i=n(33),c=n(37),l=n(290),u=n(261),s=n(258),h=n(294),f=n(330),d=n(293),m=n(266),p=n(268),v=n(267),y=n(257),g=n(347),E=n(98),b=n(774),w=n(313),x=n(301),O=n(259),j=n(253),N=n(80),L=n(251),S=n(252),k=n(285),_=n(247),D=n(303),C=n(316),F=n(287);t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],A=t[1],G=Object(a.useState)(""),I=Object(r.a)(G,2),P=I[0],T=I[1],V=JSON.parse(localStorage.getItem("permissions")),Y=Object(c.g)(),q=(Object(i.c)(),Object(a.useState)(!1)),J=Object(r.a)(q,2),U=J[0],z=J[1],B=Object(a.useState)(!1),R=Object(r.a)(B,2),W=R[0],H=R[1],K=Object(a.useState)(!1),M=Object(r.a)(K,2),Q=M[0],X=M[1],Z=Object(a.useState)([]),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)([]),re=Object(r.a)(ne,2),ae=re[0],oe=re[1],ie=Object(a.useState)("Select Document Category"),ce=Object(r.a)(ie,2),le=ce[0],ue=ce[1],se=Object(a.useState)(0),he=Object(r.a)(se,2),fe=he[0],de=he[1],me=Object(a.useState)(!1),pe=Object(r.a)(me,2),ve=pe[0],ye=pe[1],ge=Object(a.useState)(null),Ee=Object(r.a)(ge,2),be=Ee[0],we=Ee[1],xe=Object(a.useState)(!1),Oe=Object(r.a)(xe,2),je=Oe[0],Ne=Oe[1],Le=Object(a.useState)(void 0),Se=Object(r.a)(Le,2),ke=Se[0],_e=Se[1],De=Object(a.useState)(0),Ce=Object(r.a)(De,2),Fe=Ce[0],Ae=Ce[1],Ge=Object(a.useState)(""),Ie=Object(r.a)(Ge,2),Pe=Ie[0],Te=Ie[1],Ve=Object(j.useToasts)().addToast,Ye=Object(a.useState)(!0),qe=Object(r.a)(Ye,2),Je=qe[0],Ue=qe[1],ze=Object(a.useState)(!1),Be=Object(r.a)(ze,2),Re=Be[0],We=Be[1];Object(a.useEffect)((function(){Object(N.a)("Document/Index").then((function(e){console.log("doc data",e),te(e),Ue(!1)})),Object(N.a)("DocumentCategoryDD/Index").then((function(e){console.log("dd",e),oe(e)}))}),[Q]);var He=ae.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Ke=function(){z(!1),A(""),T(""),ue("Select Document Category"),de(0),we(null),_e(void 0)},Me=function(){Te(""),Ae(0),H(!1)},Qe=function(e){console.log(e.target.value),we(e.target.value),Ne(!1)};return o.a.createElement("div",null,Je?o.a.createElement(C.a,null):o.a.createElement("div",null,o.a.createElement(l.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Document List"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){Y.push("/")},className:"text-white"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(l.a,null,o.a.createElement(u.a,null,(null===V||void 0===V?void 0:V.includes(null===F.a||void 0===F.a?void 0:F.a.Add_New_Document))?o.a.createElement(_.a,{className:"btn btn-uapp-add",func:function(){return z(!0)},icon:o.a.createElement("i",{className:"fas fa-plus"}),name:" Add Document",permission:6}):null),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{isOpen:U,toggle:Ke,className:"uapp-modal2"},o.a.createElement(f.a,null,"Document Details"),o.a.createElement(d.a,null,o.a.createElement(m.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);if(0===fe)ye(!0);else if(null===be)Ne(!0);else if(void 0!=ke){console.log(localStorage.getItem("updateDocument")),We(!0);Object(S.a)("Document/Update",t).then((function(e){var t;We(!1),X(!Q),z(!1),Ve(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),A(""),T(""),ue("Select Document Category"),de(0),we(null),_e(void 0)}))}else{_e(void 0),We(!0);Object(L.a)("Document/Create",t).then((function(e){var t;We(!1),X(!Q),z(!1),Ve(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),A(""),T(""),ue("Select Document Category"),de(0),we(null)}))}}},void 0!=ke?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:ke}):null,o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Category ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(O.a,{options:He,value:{label:le,value:fe},onChange:function(e){return t=e.label,n=e.value,ue(t),de(n),void ye(!1);var t,n},name:"documentCategoryId",id:"documentCategoryId"}),ve&&o.a.createElement("span",{className:"text-danger"},"Category is required."))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Applicable? ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(p.a,{check:!0,inline:!0},o.a.createElement(y.a,{className:"form-check-input",type:"radio",id:"isVaryForApplication",onChange:Qe,name:"isVaryForApplication",value:"true",checked:"true"==be}),o.a.createElement(g.a,{className:"form-check-label",check:!0,htmlFor:"isVaryForApplication"},"Yes")),o.a.createElement(p.a,{check:!0,inline:!0},o.a.createElement(y.a,{className:"form-check-input",type:"radio",id:"isVaryForApplication",onChange:Qe,name:"isVaryForApplication",value:"false",checked:"false"==be}),o.a.createElement(g.a,{className:"form-check-label",check:!0,htmlFor:"isVaryForApplication"},"No")),o.a.createElement("br",null),je&&o.a.createElement("span",{className:"text-danger"},"Is vary for application is required."))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Name ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(y.a,{type:"text",required:!0,name:"name",id:"name",value:n,placeholder:"Enter name",onChange:function(e){return A(e.target.value)}}))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Description ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(v.a,{md:"8"},o.a.createElement(y.a,{type:"textarea",required:!0,rows:"6",name:"description",id:"description",value:P,placeholder:"Write Description",onChange:function(e){return T(e.target.value)}}))),o.a.createElement(p.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(E.a,{color:"danger",className:"mr-1 mt-3",onClick:Ke},"Close"),o.a.createElement(D.a,{color:"primary",type:"submit",className:"mr-1 mt-3",name:"Submit",permission:6,isDisabled:Re})))))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(b.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Category"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===ee||void 0===ee?void 0:ee.map((function(e,t){var n;return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",{className:"text-center"},null===e||void 0===e?void 0:e.description),o.a.createElement("td",{className:"text-center"},null===e||void 0===e||null===(n=e.documentCategory)||void 0===n?void 0:n.name),o.a.createElement("td",null,o.a.createElement(w.a,null,(null===V||void 0===V?void 0:V.includes(F.a.Update_Document_info))?o.a.createElement(_.a,{func:function(){return function(e){var t,n,r;z(!0),console.log(e,null===e||void 0===e||null===(t=e.documentCategory)||void 0===t?void 0:t.id),ue(null===e||void 0===e||null===(n=e.documentCategory)||void 0===n?void 0:n.name),de(null===e||void 0===e||null===(r=e.documentCategory)||void 0===r?void 0:r.id),A(null===e||void 0===e?void 0:e.name),T(null===e||void 0===e?void 0:e.description),we("".concat(null===e||void 0===e?void 0:e.isVaryForApplication)),_e(null===e||void 0===e?void 0:e.id)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}):null,(null===V||void 0===V?void 0:V.includes(F.a.Delete_Document))?o.a.createElement(_.a,{className:"mx-1 btn-sm",func:function(){return t=null===e||void 0===e?void 0:e.name,n=null===e||void 0===e?void 0:e.id,Te(t),Ae(n),void H(!0);var t,n},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}):null),o.a.createElement(h.a,{isOpen:W,toggle:Me,className:"uapp-modal"},o.a.createElement(d.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,Pe)," ? Once Deleted it can't be Undone!")),o.a.createElement(x.a,null,o.a.createElement(E.a,{color:"danger",onClick:function(){return function(e){We(!0);Object(k.a)("Document/Delete/".concat(e)).then((function(e){We(!1),H(!1),X(!Q),Ve(e,{appearance:"error",autoDismiss:!0}),Te(""),Ae(0)}))}(Fe)},disabled:Re},"YES"),o.a.createElement(E.a,{onClick:Me},"NO")))))})))))))))}}}]);
//# sourceMappingURL=235.199434da.chunk.js.map