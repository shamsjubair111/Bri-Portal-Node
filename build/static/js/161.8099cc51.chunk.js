/*! For license information please see 161.8099cc51.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[161],{253:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(103),c=r(101);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var h={};function f(){}function p(){}function m(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(d=y);var g=m.prototype=f.prototype=Object.create(d);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=m,c(g,"constructor",m),c(m,"constructor",p),p.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function u(){return(u=Object(n.a)(l().mark((function t(e){var r,n,a,u,s=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},n=s.length>2&&void 0!==s[2]?s[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,n||"");case 5:return a=t.sent,t.next=8,a;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u?void 0:u.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},254:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(103),c=r(101);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var h={};function f(){}function p(){}function m(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(d=y);var g=m.prototype=f.prototype=Object.create(d);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=m,c(g,"constructor",m),c(m,"constructor",p),p.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function u(){return(u=Object(n.a)(l().mark((function t(e){var r,n,a,u=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,t.next=5,o.a.put("".concat(c.a).concat(e),r,n||"");case 5:return a=t.sent,t.next=8,a;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===t.t0.response.status&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},856:function(t,e,r){"use strict";r.r(e);var n=r(29),a=r(0),o=r.n(a),i=r(33),c=r(275),l=r(277),u=r(100),s=r(260),h=r(351),f=r(766),p=r(349),m=r(278),d=r(276),v=r(256),y=r(262),g=r(737),E=r(355),w=r(252),x=r(102),b=r(304),T=r(254),L=r(253);r(693);e.default=function(){var t=Object(i.g)(),e=Object(a.useState)(!1),r=Object(n.a)(e,2),N=r[0],O=r[1],j=Object(a.useState)(!1),S=Object(n.a)(j,2),k=S[0],_=S[1],I=Object(a.useState)(!1),G=Object(n.a)(I,2),C=G[0],A=G[1],F=Object(a.useState)([]),P=Object(n.a)(F,2),D=P[0],V=P[1],Y=Object(a.useState)(""),U=Object(n.a)(Y,2),J=U[0],B=U[1],R=Object(w.useToasts)().addToast;Object(a.useEffect)((function(){Object(x.a)("ExamTestType/Index").then((function(t){V(t),console.log("ExamTestType",t)})).catch()}),[C]);var q=function(){_(!1),localStorage.removeItem("examTestTypeName"),localStorage.removeItem("examTestTypeValue")},z=function(){O(!1),localStorage.removeItem("updateUniCountry")},H=localStorage.getItem("updateExamTestTypeValue");return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Exam Test Type"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){t.push("/")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(u.a,{className:"btn btn-uapp-add",onClick:function(){return O(!0)}}," ",o.a.createElement("i",{className:"fas fa-plus"}),"  Add New"),o.a.createElement("div",null," ",o.a.createElement("b",null," Total ",o.a.createElement("span",{className:"badge badge-primary"},null===D||void 0===D?void 0:D.length)," Exam Test Type Found   "))),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{isOpen:N,toggle:z,className:"uapp-modal"},o.a.createElement(f.a,null,"Add Exam Test Type"),o.a.createElement(p.a,null,o.a.createElement(m.a,{onSubmit:function(e){e.preventDefault();var r=new FormData(e.target);Object(L.a)("ExamTestType/Create",r).then((function(e){var r,n,a;console.log(e),A(!C),O(!1),R(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message,{appearance:"success",autoDismiss:!0}),O(!1),t.push({pathname:"/examTestTypeAttribute",examTestTypeId:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(a=n.result)||void 0===a?void 0:a.id}),B("")}))}},H?o.a.createElement("input",{type:"hidden",value:H,name:"id",id:"id"}):null,o.a.createElement(d.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Exam Test Type")),o.a.createElement(v.a,{md:"8"},o.a.createElement(y.a,{type:"text",name:"name",id:"name",defaultValue:J,placeholder:"Create exam test type",onChange:function(t){return B(t.target.value)}}))),o.a.createElement(d.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(u.a,{color:"danger",className:"mr-1 mt-3",onClick:z},"Close"),H?o.a.createElement(u.a,{color:"warning",className:"mr-1 mt-3",onClick:function(){var t={id:H,name:J};Object(T.a)("ExamTestType/Update",t).then((function(t){var e;A(!C),O(!1),R(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),B("")})),localStorage.removeItem("updateExamTestTypeValue")}},"Update"):o.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-3"},"Submit")))))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null," Name"),o.a.createElement("th",{className:"text-center"},"Attribute"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===D||void 0===D?void 0:D.map((function(e,r){return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id},o.a.createElement("th",{style:{textAlign:"center"},scope:"row"},r+1),o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,o.a.createElement(u.a,{color:"primary",onClick:function(){return r=e.id,console.log(r),localStorage.setItem("examTestTypeAttributeId",r),void t.push("/examTestTypeAttribute");var r},className:"mx-1 btn-sm"}," ",o.a.createElement("i",{className:"fas fa-eye"})," ")),o.a.createElement("td",null,o.a.createElement(u.a,{className:"mx-2",onClick:function(){return t=null===e||void 0===e?void 0:e.name,r=null===e||void 0===e?void 0:e.id,localStorage.setItem("examTestTypeName",t),localStorage.setItem("examTestTypeValue",r),void _(!0);var t,r},color:"danger"},o.a.createElement("i",{className:"fas fa-trash-alt"})),o.a.createElement(u.a,{onClick:function(){return t=e,O(!0),B(null===t||void 0===t?void 0:t.name),void localStorage.setItem("updateExamTestTypeValue",t.id);var t},className:"mx-2",color:"warning"},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement(h.a,{isOpen:k,toggle:q,className:"uapp-modal"},o.a.createElement(p.a,null,o.a.createElement("p",null,"Are You Sure to Delete this? Once Deleted it can't be Undone!")),o.a.createElement(E.a,null,o.a.createElement(u.a,{color:"danger",onClick:function(){return function(t){Object(b.a)("ExamTestType/Delete/".concat(t)).then((function(t){_(!1),A(!C),R(t,{appearance:"error",autoDismiss:!0}),localStorage.removeItem("examTestTypeName"),localStorage.removeItem("examTestTypeValue")}));var e=D.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==t}));V(e),B("")}(localStorage.getItem("examTestTypeValue"))}},"YES"),o.a.createElement(u.a,{onClick:q},"NO")))))}))))))))}}}]);
//# sourceMappingURL=161.8099cc51.chunk.js.map