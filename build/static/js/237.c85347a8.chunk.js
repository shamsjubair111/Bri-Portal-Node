/*! For license information please see 237.c85347a8.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[237],{250:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(94);t.a=function(e){var t=e.className,n=e.icon,a=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:a,type:i,className:t,disabled:u}," ",n,l," "))}},253:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=n(153),c=n(47);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new O(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var d={};function m(){}function f(){}function h(){}var p={};c(p,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&n.call(y,r)&&(p=y);var E=h.prototype=m.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,c(E,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(E),c(E,i,"Generator"),c(E,r,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var n,a,r,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},254:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=(n(153),n(47));function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new O(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var d={};function m(){}function f(){}function h(){}var p={};l(p,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&n.call(y,r)&&(p=y);var E=h.prototype=m.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,l(E,"constructor",h),l(h,"constructor",f),f.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(E),l(E,i,"Generator"),l(E,r,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var l=localStorage.getItem("token");function u(){return(u=Object(a.a)(c().mark((function e(t){var n,a,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,e.next=5,o.a.put("".concat(i.a).concat(t),n,{headers:{authorization:l}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},907:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(0),o=n.n(r),i=n(33),c=n(301),l=n(263),u=n(258),s=n(328),d=n(332),m=n(333),f=n(344),h=n(267),p=n(94),v=n(307),y=n(305),E=n(310),g=n(271),b=n(260),w=n(262),x=n(270),N=n(101),O=n(253),j=n(255),L=n(290),S=n(254),k=n(250);t.default=function(){var e=Object(i.g)(),t=Object(i.i)(),n=t.applicationStudentId,C=(t.update,Object(r.useState)("7")),_=Object(a.a)(C,2),I=_[0],T=_[1],G=Object(r.useState)(!1),P=Object(a.a)(G,2),R=P[0],A=P[1],D=Object(r.useState)([]),F=Object(a.a)(D,2),q=F[0],V=F[1],Y=Object(r.useState)("Select Country"),B=Object(a.a)(Y,2),z=B[0],J=B[1],U=Object(r.useState)(0),H=Object(a.a)(U,2),K=H[0],M=H[1],Q=Object(r.useState)([]),W=Object(a.a)(Q,2),X=W[0],Z=W[1],$=Object(r.useState)("Select Reference type"),ee=Object(a.a)($,2),te=ee[0],ne=ee[1],ae=Object(r.useState)(0),re=Object(a.a)(ae,2),oe=re[0],ie=re[1],ce=Object(r.useState)([]),le=Object(a.a)(ce,2),ue=le[0],se=le[1],de=Object(r.useState)(!1),me=Object(a.a)(de,2),fe=me[0],he=me[1],pe=Object(r.useState)({}),ve=Object(a.a)(pe,2),ye=ve[0],Ee=ve[1],ge=Object(j.useToasts)().addToast,be=Object(r.useState)({}),we=Object(a.a)(be,2),xe=we[0],Ne=we[1],Oe=Object(r.useState)(!1),je=Object(a.a)(Oe,2),Le=je[0],Se=je[1],ke=Object(r.useState)(!1),Ce=Object(a.a)(ke,2),_e=Ce[0],Ie=Ce[1],Te=Object(r.useState)(!1),Ge=Object(a.a)(Te,2),Pe=Ge[0],Re=Ge[1];Object(r.useEffect)((function(){Object(N.a)("CountryDD/index").then((function(e){console.log(e),V(e)})),Object(N.a)("Reference/GetByStudentId/".concat(n)).then((function(e){console.log(e),se(e)})),Object(N.a)("ReferenceTypeDD/Index").then((function(e){console.log(e),Z(e)}))}),[]);var Ae=function(t){T(t),"1"==t&&e.push("/addStudentApplicationInformation/".concat(n,"/",1)),"2"==t&&e.push("/addStudentInformation/".concat(n,"/",1)),"3"==t&&e.push("/addStudentContactInformation/".concat(n,"/",1)),"4"==t&&e.push("/addStudentEducationalInformation/".concat(n,"/",1)),"5"==t&&e.push("/addTestScore/".concat(n,"/",1)),"6"==t&&e.push("/addExperience/".concat(n,"/",1)),"7"==t&&e.push("/addReference/".concat(n)),"8"==t&&e.push("/addPersonalStatement/".concat(n)),"9"==t&&e.push("/addOtherInformation/".concat(n)),"10"==t&&e.push("/uploadDocument/".concat(n)),"11"==t&&e.push("/studentDeclaration/".concat(n))},De=null===q||void 0===q?void 0:q.map((function(e){return{label:e.name,value:e.id}})),Fe=null===X||void 0===X?void 0:X.map((function(e){return{label:e.name,value:e.id}})),qe=function(){Re(!0),Object(L.a)("Reference/Delete/".concat(null===xe||void 0===xe?void 0:xe.id)).then((function(e){Re(!1),ge(e,{appearance:"error",autoDismiss:!0}),A(!1),Object(N.a)("Reference/GetByStudentId/".concat(n)).then((function(e){console.log(e),se(e)}))}))};return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Reference Information"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{className:"text-white",onClick:function(){e.push("/studentProfile/".concat(n))}}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Student Profile")))),o.a.createElement(c.a,null,o.a.createElement(u.a,null,o.a.createElement(s.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"1"===I,onClick:function(){return Ae("1")}},"Application")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"2"===I,onClick:function(){return Ae("2")}},"Personal")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"3"===I,onClick:function(){return Ae("3")}},"Contact")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"4"===I,onClick:function(){return Ae("4")}},"Educational")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"5"===I,onClick:function(){return Ae("5")}},"Test Score")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"6"===I,onClick:function(){return Ae("6")}},"Experience")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"7"===I,onClick:function(){return Ae("7")}},"Reference")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"8"===I,onClick:function(){return Ae("8")}},"Personal Statement")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"9"===I,onClick:function(){return Ae("9")}},"Others")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"10"===I,onClick:function(){return Ae("10")}},"Documents")),o.a.createElement(d.a,null,o.a.createElement(m.a,{active:"11"===I,onClick:function(){return Ae("11")}},"Declaration"))),o.a.createElement("div",{className:"row"},null===ue||void 0===ue?void 0:ue.map((function(e,t){var n;return o.a.createElement("div",{className:"col-md-6 mt-2",key:e.id,style:{textAlign:"left"}},o.a.createElement(c.a,{className:"CampusCard shadow-style test-score-card-style-2"},o.a.createElement(u.a,{className:"shadow"},o.a.createElement(f.a,null,o.a.createElement(h.a,{md:"4"},o.a.createElement("h5",{className:"test-score-title-styles"},"Reference Name: ",null===e||void 0===e?void 0:e.referenceName,"   "),o.a.createElement("p",{className:"bank-account-info-text"},"Reference Type: ",null===e||void 0===e||null===(n=e.referenceType)||void 0===n?void 0:n.name,"  "),o.a.createElement("p",{className:"bank-account-info-text"},"Email: ",null===e||void 0===e?void 0:e.emailAddress,"  ")),o.a.createElement(h.a,{md:"5"},o.a.createElement("p",{className:"bank-account-info-text"},"Address Line : ",null===e||void 0===e?void 0:e.addressLine,"  "),o.a.createElement("p",{className:"bank-account-info-text"},"Institute Company : ",null===e||void 0===e?void 0:e.institute_Company,"  ")),o.a.createElement(h.a,{md:"3"},o.a.createElement("div",{className:"CampusCardAction"},o.a.createElement("div",{className:""},o.a.createElement(p.a,{type:"button",color:"primary",className:"bankCard-style",onClick:function(){return t=e.id,he(!0),console.log(t),void Object(N.a)("Reference/Get/".concat(t)).then((function(e){var t,n,a,r;console.log(e),Ee(e),J(null===e||void 0===e||null===(t=e.country)||void 0===t?void 0:t.name),M(null===e||void 0===e||null===(n=e.country)||void 0===n?void 0:n.id),ne(null===e||void 0===e||null===(a=e.referenceType)||void 0===a?void 0:a.name),ie(null===e||void 0===e||null===(r=e.referenceType)||void 0===r?void 0:r.id)}));var t},disabled:Pe}," ",o.a.createElement("i",{className:"fas fa-edit"})," ")),o.a.createElement("div",{className:""},o.a.createElement(p.a,{type:"button",color:"danger",className:"bankCard-style",onClick:function(){return Ne(e),void A(!0)}},o.a.createElement("i",{className:"fas fa-trash-alt"}))))))),o.a.createElement(v.a,{isOpen:R,toggle:function(){return A(!R)},className:"uapp-modal"},o.a.createElement(y.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ? Once Deleted it can't be Undone!")),o.a.createElement(E.a,null,o.a.createElement(p.a,{onClick:qe,color:"danger",disabled:Pe},"YES"),o.a.createElement(p.a,{onClick:function(){return A(!1)}},"NO")))))}))),fe||(null===ue||void 0===ue?void 0:ue.length)<1?o.a.createElement(g.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);0==oe?Se(!0):0==K?Ie(!0):(null===ye||void 0===ye?void 0:ye.id)?(Re(!0),Object(S.a)("Reference/Update",t).then((function(e){var t;Re(!1),ge(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),he(!1),Ee({}),Object(N.a)("Reference/GetByStudentId/".concat(n)).then((function(e){console.log(e),se(e),ne("Select Reference Type"),ie(0),J("Select Country"),M(0)}))}))):(Re(!0),Object(O.a)("Reference/Create",t).then((function(e){var t,a,r;(Re(!1),200==(null===e||void 0===e?void 0:e.status)&&1==(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.isSuccess))?(he(!1),ge(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),Object(N.a)("Reference/GetByStudentId/".concat(n)).then((function(e){console.log(e),se(e),ne("Select Reference Type"),ie(0),J("Select Country"),M(0)}))):ge(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message,{appearance:"error",autoDismiss:!0})})))},className:"mt-5"},o.a.createElement("input",{type:"hidden",name:"studentId",id:"studentId",value:n}),(null===ye||void 0===ye?void 0:ye.id)?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:null===ye||void 0===ye?void 0:ye.id}):null,o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Reference Type ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(x.a,{options:Fe,value:{label:te,value:oe},onChange:function(e){return t=e.label,n=e.value,Se(!1),ne(t),void ie(n);var t,n},name:"referenceTypeId",id:"referenceTypeId"}),Le&&o.a.createElement("span",{className:"text-danger"},"Reference type is required"))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Reference Name ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"referenceName",id:"referenceName",placeholder:"Enter Reference Name",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.referenceName}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Institute/Company ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"institute_Company",id:"institute_Company",placeholder:"Enter Institute/Company",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.institute_Company}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Phone Number ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"phoneNumber",id:"phoneNumber",placeholder:"Enter Phone Number",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.phoneNumber}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Email ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"emailAddress",id:"emailAddress",placeholder:"Enter Email",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.emailAddress}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Country ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(x.a,{options:De,value:{label:z,value:K},onChange:function(e){return t=e.label,n=e.value,Ie(!1),J(t),void M(n);var t,n},name:"countryId",id:"countryId",required:!0}),_e&&o.a.createElement("span",{className:"text-danger"},"Country is required"))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"Adress Line ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"addressLine",id:"addressLine",placeholder:"Enter Address Line",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.addressLine}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"City ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"city",id:"city",placeholder:"Enter City",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.city}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"2"},o.a.createElement("span",null,"State ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"6"},o.a.createElement(w.a,{type:"text",name:"state",id:"state",placeholder:"Enter State",required:!0,defaultValue:null===ye||void 0===ye?void 0:ye.state}))),o.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(h.a,{md:"5"},o.a.createElement(k.a,{name:"Submit",type:"submit",className:"mr-1 mt-3 badge-primary",disable:Pe})))):o.a.createElement(b.a,{className:"has-icon-left position-relative",style:{display:"flex",width:"100%",justifyContent:"space-between"}},o.a.createElement(p.a,{onClick:function(){he(!0)},color:"primary uapp-form-button"},"Add Another")),o.a.createElement(b.a,{className:"has-icon-left position-relative",style:{display:"flex",width:"100%",justifyContent:"space-between"}},o.a.createElement(k.a,{name:"Previous",className:"ms-md-1 mt-3 btn-warning",icon:o.a.createElement("i",{className:"fas fa-arrow-left-long mr-1"}),func:function(){e.push("/addExperience/".concat(n,"/",1))}}),o.a.createElement(p.a,{onClick:function(){e.push("/addPersonalStatement/".concat(n))},className:"me-md-1 mt-3 btn-warning"},"Next",o.a.createElement("i",{className:"fas fa-arrow-right-long ml-1"}))))))}}}]);
//# sourceMappingURL=237.c85347a8.chunk.js.map