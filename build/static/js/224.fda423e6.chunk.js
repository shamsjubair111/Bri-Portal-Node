/*! For license information please see 224.fda423e6.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[224],{252:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(96);t.a=function(e){var t=e.className,r=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:n,type:i,className:t,disabled:u}," ",r,l," "))}},254:function(e,t,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(158),c=r(48);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==t&&r.call(y,a)&&(v=y);var g=d.prototype=f.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function e(t){var r,n,a,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),r,{headers:{authorization:u}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},255:function(e,t,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(158),c=r(48);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==t&&r.call(y,a)&&(v=y);var g=d.prototype=f.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function e(t){var r,n,a=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",e.prev=2,e.next=5,o.a.put("".concat(c.a).concat(t),r,{headers:{authorization:u}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===e.t0.response.status&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},987:function(e,t,r){"use strict";r.r(t);var n=r(29),a=r(0),o=r.n(a),i=r(26),c=r(33),l=r(305),u=r(264),s=r(261),h=r(312),f=r(382),p=r(311),d=r(278),v=r(269),m=r(267),y=r(268),g=r(96),E=r(759),w=r(317),b=r(257),L=r(254),x=r(103),O=r(295),j=r(255),N=r(252);t.default=Object(i.b)((function(e){return{allprogramLevelList:e.programLevelDataReducer.programLevelList}}))((function(e){var t=e.allprogramLevelList[0],r=Object(c.g)(),k=Object(i.c)(),S=Object(a.useState)(!1),_=Object(n.a)(S,2),P=_[0],T=_[1],D=Object(a.useState)(!1),G=Object(n.a)(D,2),F=G[0],C=G[1],V=Object(a.useState)(!1),A=Object(n.a)(V,2),I=A[0],Y=A[1],U=Object(b.useToasts)().addToast,q=Object(a.useState)(""),z=Object(n.a)(q,2),J=z[0],B=z[1],R=Object(a.useState)(0),H=Object(n.a)(R,2),K=(H[0],H[1],Object(a.useState)("")),M=Object(n.a)(K,2),Q=M[0],W=M[1],X=Object(a.useState)("Type Level Value"),Z=Object(n.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(0),re=Object(n.a)(te,2),ne=re[0],ae=re[1],oe=Object(a.useState)(""),ie=Object(n.a)(oe,2),ce=ie[0],le=ie[1],ue=Object(a.useState)(void 0),se=Object(n.a)(ue,2),he=se[0],fe=se[1],pe=function(){T(!1),fe(void 0),B("")};Object(a.useEffect)((function(){Object(x.a)("ProgramLevel/Index").then((function(e){k({type:"StoreProgramLevelData",payload:e})}))}),[I]);var de=function(){C(!1),le(""),ae(0)};return o.a.createElement("div",null,o.a.createElement(l.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Program Level List"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){r.push("/")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(l.a,null,o.a.createElement(u.a,null,o.a.createElement(N.a,{className:"btn btn-uapp-add",func:function(){T(!0),B(""),W(""),ee("Type Level Value"),fe(void 0)},icon:o.a.createElement("i",{className:"fas fa-plus"}),name:" Add New Program Level",permission:6}),o.a.createElement("div",null," ",o.a.createElement("b",null," Total ",o.a.createElement("span",{className:"badge badge-primary"}," ",null===t||void 0===t?void 0:t.length)," Program Level  Found "))),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{isOpen:P,toggle:pe,className:"uapp-modal"},o.a.createElement(f.a,null,"Add Program Level "),o.a.createElement(p.a,null,o.a.createElement(d.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);if(void 0!=he)Object(j.a)("ProgramLevel/Update",t).then((function(e){var t;Y(!I),T(!1),U(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),B(""),W(""),ee("Type Level Value"),fe(void 0)}));else Object(L.a)("ProgramLevel/Create",t).then((function(e){var t;Y(!I),T(!1),U(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),B(""),W(""),ee("Type Level Value")}))}},void 0!=he?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:he}):null,o.a.createElement(v.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(m.a,{md:"4"},o.a.createElement("span",null,"Program Level Name ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(m.a,{md:"8"},o.a.createElement(y.a,{type:"text",required:!0,name:"name",id:"name",value:J,onChange:function(e){return B(e.target.value)},placeholder:"Enter Program Level"}))),o.a.createElement(v.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(m.a,{md:"4"},o.a.createElement("span",null,"University Description ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(m.a,{md:"8"},o.a.createElement(y.a,{type:"textarea",required:!0,name:"Description",id:"Description",rows:"3",value:Q,placeholder:"Enter Description",onChange:function(e){return W(e.target.value)}}))),o.a.createElement(v.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(m.a,{md:"4"},o.a.createElement("span",null,"Level Value ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(m.a,{md:"8"},o.a.createElement(y.a,{type:"number",min:"0",name:"levelValue",id:"levelValue",placeholder:"Enter Level Value",value:$,onChange:function(e){return ee(e.target.value)}}))),o.a.createElement(v.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(g.a,{color:"danger",className:"mr-1 mt-3",onClick:pe},"Close"),o.a.createElement(N.a,{color:"primary",type:"submit",className:"mr-1 mt-3",name:"Submit",permission:6}))))),o.a.createElement("div",null)),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(E.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Level Value"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===t||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.description),o.a.createElement("td",null,null===e||void 0===e?void 0:e.levelValue),o.a.createElement("td",null,o.a.createElement(N.a,{className:"mx-1 btn-sm",func:function(){return t=null===e||void 0===e?void 0:e.name,r=null===e||void 0===e?void 0:e.id,le(t),ae(r),void C(!0);var t,r},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(N.a,{func:function(){return t=e,T(!0),B(null===t||void 0===t?void 0:t.name),W(null===t||void 0===t?void 0:t.description),ee(null===t||void 0===t?void 0:t.levelValue),void fe(null===t||void 0===t?void 0:t.id);var t},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(h.a,{isOpen:F,toggle:de,className:"uapp-modal"},o.a.createElement(p.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ",o.a.createElement("b",null,ce)," ? Once Deleted it can't be Undone!")),o.a.createElement(w.a,null,o.a.createElement(g.a,{color:"danger",onClick:function(){return e=ne,void Object(O.a)("ProgramLevel/Delete/".concat(e)).then((function(e){C(!1),Y(!I),console.log(e),U(e,{appearance:"error",autoDismiss:!0}),le(""),ae(0)}));var e}},"YES"),o.a.createElement(g.a,{onClick:de},"NO")))))}))))))))}))}}]);
//# sourceMappingURL=224.fda423e6.chunk.js.map