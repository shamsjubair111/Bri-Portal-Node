/*! For license information please see 222.e54d74d0.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[222],{252:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(96);t.a=function(e){var t=e.className,n=e.icon,a=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:a,type:i,className:t,disabled:u}," ",n,l," "))}},254:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=n(158),c=n(48);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new j(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return k()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var f={};function m(){}function d(){}function h(){}var p={};c(p,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&n.call(y,r)&&(p=y);var g=h.prototype=m.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var n,a,r,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},255:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=n(158),c=n(48);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new j(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return k()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var f={};function m(){}function d(){}function h(){}var p={};c(p,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&n.call(y,r)&&(p=y);var g=h.prototype=m.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var n,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,e.next=5,o.a.put("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===e.t0.response.status&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},901:function(e,t,n){"use strict";n.r(t);var a=n(282),r=n(29),o=n(0),i=n.n(o),c=n(33),l=n(305),u=n(264),s=n(261),f=n(335),m=n(337),d=n(338),h=n(348),p=n(267),v=n(96),y=n(312),g=n(311),E=n(317),w=n(278),b=n(269),x=n(268),N=n(103),j=n(254),O=n(257),k=n(295),L=n(255),S=n(252);t.default=function(){var e=Object(c.g)(),t=Object(c.i)(),n=t.applicationStudentId,C=(t.update,function(e){return new Date(e).toLocaleString("en-CA").split(",")[0]}),D=Object(o.useState)("6"),_=Object(r.a)(D,2),T=_[0],G=_[1],I=Object(o.useState)(!1),P=Object(r.a)(I,2),F=P[0],A=P[1],W=Object(o.useState)(""),Y=Object(r.a)(W,2),B=Y[0],J=Y[1],V=Object(o.useState)({}),q=Object(r.a)(V,2),R=q[0],U=q[1],z=Object(o.useState)([]),H=Object(r.a)(z,2),K=H[0],M=H[1],Q=Object(O.useToasts)().addToast,X=Object(o.useState)(!1),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.useState)(!1),ne=Object(r.a)(te,2),ae=ne[0],re=ne[1],oe=Object(o.useState)({}),ie=Object(r.a)(oe,2),ce=ie[0],le=ie[1],ue=Object(o.useState)(""),se=Object(r.a)(ue,2),fe=se[0],me=se[1],de=Object(o.useState)(""),he=Object(r.a)(de,2),pe=he[0],ve=he[1];Object(o.useEffect)((function(){Object(N.a)("Experience/GetByStudentId/".concat(n)).then((function(e){console.log(e),M(e)}))}),[]);var ye=function(t){G(t),"1"==t&&e.push("/addStudentApplicationInformation/".concat(n,"/",1)),"2"==t&&e.push("/addStudentInformation/".concat(n,"/",1)),"3"==t&&e.push("/addStudentContactInformation/".concat(n,"/",1)),"4"==t&&e.push("/addStudentEducationalInformation/".concat(n,"/",1)),"5"==t&&e.push("/addTestScore/".concat(n,"/",1)),"6"==t&&e.push("/addExperience/".concat(n)),"7"==t&&e.push("/addReference/".concat(n)),"8"==t&&e.push("/addPersonalStatement/".concat(n)),"9"==t&&e.push("/addOtherInformation/".concat(n)),"10"==t&&e.push("/uploadDocument/".concat(n)),"11"==t&&e.push("/studentDeclaration/".concat(n))},ge=function(){Object(k.a)("Experience/Delete/".concat(null===R||void 0===R?void 0:R.id)).then((function(e){console.log(e),Q(e,{appearance:"error",autoDismiss:!0}),ee(!1),Object(N.a)("Experience/GetByStudentId/".concat(n)).then((function(e){console.log(e),M(e)}))}))};console.log("trying",null===fe||void 0===fe?void 0:fe.split(",")[0]);return i.a.createElement("div",null,i.a.createElement(l.a,{className:"uapp-card-bg"},i.a.createElement(u.a,{className:"page-header"},i.a.createElement("h3",{className:"text-light"},"Experience Information"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{className:"text-light",onClick:function(){e.push("/studentProfile/".concat(n))}}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Student Profile")))),i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(f.a,{tabs:!0},i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"1"===T,onClick:function(){return ye("1")}},"Application")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"2"===T,onClick:function(){return ye("2")}},"Personal")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"3"===T,onClick:function(){return ye("3")}},"Contact")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"4"===T,onClick:function(){return ye("4")}},"Educational")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"5"===T,onClick:function(){return ye("5")}},"Test Score")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"6"===T,onClick:function(){return ye("6")}},"Experience")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"7"===T,onClick:function(){return ye("7")}},"Reference")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"8"===T,onClick:function(){return ye("8")}},"Personal Statement")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"9"===T,onClick:function(){return ye("9")}},"Others")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"10"===T,onClick:function(){return ye("10")}},"Documents")),i.a.createElement(m.a,null,i.a.createElement(d.a,{active:"11"===T,onClick:function(){return ye("11")}},"Declaration"))),i.a.createElement("div",{className:"row"},null===K||void 0===K?void 0:K.map((function(e,t){return i.a.createElement("div",{className:"col-md-6 mt-2",key:e.id,style:{textAlign:"left"}},i.a.createElement(l.a,{className:"CampusCard shadow-style test-score-card-style-2"},i.a.createElement(s.a,{className:"shadow"},i.a.createElement(h.a,null,i.a.createElement(p.a,{md:"4"},i.a.createElement("h5",{className:"test-score-title-styles"},"Company Name: ",null===e||void 0===e?void 0:e.companyName,"   "),i.a.createElement("p",{className:"bank-account-info-text"},"Eployment Details: ",null===e||void 0===e?void 0:e.employeementDetails," ")),i.a.createElement(p.a,{md:"5"},i.a.createElement("p",{className:"bank-account-info-text"},"Job Title : ",null===e||void 0===e?void 0:e.jobTitle," "),i.a.createElement("p",{className:"bank-account-info-text"},"From : ",C(null===e||void 0===e?void 0:e.startDate)," "),(null===e||void 0===e?void 0:e.isStillWorking)?i.a.createElement("p",{className:"bank-account-info-text"},"Currently Working"):i.a.createElement("p",{className:"bank-account-info-text"},"To : ",C(null===e||void 0===e?void 0:e.endDate)," ")),i.a.createElement(p.a,{md:"3"},i.a.createElement("div",{className:"CampusCardAction"},i.a.createElement("div",{className:""},i.a.createElement(v.a,{type:"button",color:"primary",className:"bankCard-style",onClick:function(){return t=e.id,console.log(t),re(!0),void Object(N.a)("Experience/Get/".concat(t)).then((function(e){le(e);var t=null===e||void 0===e?void 0:e.startDate,n=new Date(t).toLocaleString("en-CA"),a=n.split(",")[0].replace("/","-");console.log(n),me(a.replace("/","-"));var r=null===e||void 0===e?void 0:e.endDate,o=new Date(r).toLocaleString("en-CA").split(",")[0].replace("/","-");ve(o.replace("/","-")),console.log(e),A(e.isStillWorking)}));var t}}," ",i.a.createElement("i",{className:"fas fa-edit"})," ")),i.a.createElement("div",{className:""},i.a.createElement(v.a,{type:"button",color:"danger",className:"bankCard-style",onClick:function(){return U(e),void ee(!0)}},i.a.createElement("i",{className:"fas fa-trash-alt"}))))))),i.a.createElement(y.a,{isOpen:$,toggle:function(){return ee(!$)},className:"uapp-modal"},i.a.createElement(g.a,null,i.a.createElement("p",null,"Are You Sure to Delete this ? Once Deleted it can't be Undone!")),i.a.createElement(E.a,null,i.a.createElement(v.a,{onClick:ge,color:"danger"},"YES"),i.a.createElement(v.a,{onClick:function(){return ee(!1)}},"NO")))))}))),K.length<1||ae?i.a.createElement(w.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);t.append("isStillWorking",F),(null===ce||void 0===ce?void 0:ce.end)?t.append("endDate",null):t.append("endDate",B);var r,o=Object(a.a)(t.values());try{for(o.s();!(r=o.n()).done;){var i=r.value;console.log(i)}}catch(c){o.e(c)}finally{o.f()}ce.id?Object(L.a)("Experience/Update",t).then((function(e){var t;Q(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),le({}),Object(N.a)("Experience/GetByStudentId/".concat(n)).then((function(e){M(e)})),re(!1)})):Object(j.a)("Experience/Create",t).then((function(e){var t;console.log(e),Q(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),re(!1),Object(N.a)("Experience/GetByStudentId/".concat(n)).then((function(e){M(e)}))}))},className:"mt-5"},i.a.createElement("input",{type:"hidden",name:"studentId",id:"studentId",value:n}),(null===ce||void 0===ce?void 0:ce.id)?i.a.createElement("input",{type:"hidden",name:"id",id:"id",value:ce.id}):null,i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(p.a,{md:"2"},i.a.createElement("span",null,"Job Title ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(p.a,{md:"6"},i.a.createElement(x.a,{type:"text",name:"jobTitle",id:"jobTitle",placeholder:"Enter Job Title",required:!0,defaultValue:ce.jobTitle}))),i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(p.a,{md:"2"},i.a.createElement("span",null,"Employment Details ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(p.a,{md:"6"},i.a.createElement(x.a,{type:"text",name:"employeementDetails",id:"employeementDetails",placeholder:"Enter Employment Details",required:!0,defaultValue:ce.employeementDetails}))),i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(p.a,{md:"2"},i.a.createElement("span",null,"Company Name ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(p.a,{md:"6"},i.a.createElement(x.a,{type:"text",name:"companyName",id:"companyName",placeholder:"Enter Company Name",required:!0,defaultValue:ce.companyName}))),i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(p.a,{md:"2"},i.a.createElement("span",null,"Start Date ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(p.a,{md:"6"},i.a.createElement(x.a,{type:"date",name:"startDate",id:"startDate",defaultValue:fe}))),i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(p.a,{md:"2"},i.a.createElement("span",null,"Still Working? ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(p.a,{md:"6",className:"ms-4"},i.a.createElement(x.a,{type:"checkbox",defaultChecked:ce.isStillWorking,onChange:function(e){var t=e.target.checked;A(t),console.log(t)}}))),F?null:i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(p.a,{md:"2"},i.a.createElement("span",null,"End Date ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(p.a,{md:"6"},i.a.createElement(x.a,{type:"date",onChange:function(e){return J(e.target.value)},defaultValue:pe}))),ce.id?i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(p.a,{md:"5"},i.a.createElement(S.a,{type:"submit",className:"mr-1 mt-3 badge-primary",name:"Update"}))):i.a.createElement(b.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(p.a,{md:"5"},i.a.createElement(S.a,{type:"submit",className:"mr-1 mt-3 badge-primary",name:"Submit"})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{className:"has-icon-left position-relative",style:{display:"flex",width:"100%",justifyContent:"space-between"}},i.a.createElement(v.a,{onClick:function(){re(!0)},color:"primary uapp-form-button"},"Add another"))),i.a.createElement(b.a,{className:"has-icon-left position-relative",style:{display:"flex",width:"100%",justifyContent:"space-between"}},i.a.createElement(S.a,{name:"Previous",func:function(){e.push("/addTestScore/".concat(n,"/",1))},className:"ms-md-1 mt-3 btn-warning",icon:i.a.createElement("i",{className:"fas fa-arrow-left-long me-1"})}),i.a.createElement(v.a,{onClick:function(){e.push("/addReference/".concat(n))},className:"me-md-1 mt-3 btn-warning"},"Next",i.a.createElement("i",{className:"fas fa-arrow-right-long ms-1"}))))))}}}]);
//# sourceMappingURL=222.e54d74d0.chunk.js.map