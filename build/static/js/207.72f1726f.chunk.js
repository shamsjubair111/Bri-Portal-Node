/*! For license information please see 207.72f1726f.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[207],{252:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(96);t.a=function(e){var t=e.className,n=e.icon,a=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:a,type:i,className:t,disabled:u}," ",n,l," "))}},254:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=n(158),c=n(48);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new x(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function d(){}function p(){}function h(){}var f={};c(f,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,r)&&(f=y);var g=h.prototype=d.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var n,a,r,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},255:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=n(158),c=n(48);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new x(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function d(){}function p(){}function h(){}var f={};c(f,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,r)&&(f=y);var g=h.prototype=d.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var n,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,e.next=5,o.a.put("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===e.t0.response.status&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},332:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(96);t.a=function(e){var t=e.className,n=(e.icon,e.color),a=(e.permission,e.type),i=(e.url,e.func),c=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a.Ripple,{onClick:i,color:n,type:a,className:t},c))}},837:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(0),o=n.n(r),i=n(33),c=n(305),l=n(264),u=n(261),s=n(312),m=n(382),d=n(311),p=n(278),h=n(269),f=n(267),v=n(268),y=n(96),g=n(759),E=n(317),b=n(375),w=n(271),O=n(257),j=n(103),x=n(254),N=n(255),S=n(295),L=n(252),D=n(332);t.default=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],k=t[1],G=Object(r.useState)(""),_=Object(a.a)(G,2),T=_[0],I=_[1],C=Object(i.g)(),A=Object(r.useState)(!1),F=Object(a.a)(A,2),P=F[0],Y=F[1],M=Object(r.useState)(!1),U=Object(a.a)(M,2),q=U[0],z=U[1],B=Object(r.useState)(!1),H=Object(a.a)(B,2),J=H[0],K=H[1],W=Object(r.useState)(!1),R=Object(a.a)(W,2),Q=R[0],V=R[1],X=Object(r.useState)(!1),Z=Object(a.a)(X,2),$=Z[0],ee=Z[1],te=Object(r.useState)([]),ne=Object(a.a)(te,2),ae=ne[0],re=ne[1],oe=Object(r.useState)("Select Application Type"),ie=Object(a.a)(oe,2),ce=ie[0],le=ie[1],ue=Object(r.useState)(0),se=Object(a.a)(ue,2),me=se[0],de=se[1],pe=Object(r.useState)(!1),he=Object(a.a)(pe,2),fe=he[0],ve=he[1],ye=Object(r.useState)([]),ge=Object(a.a)(ye,2),Ee=ge[0],be=ge[1],we=Object(r.useState)([]),Oe=Object(a.a)(we,2),je=Oe[0],xe=Oe[1],Ne=Object(r.useState)("Select Document"),Se=Object(a.a)(Ne,2),Le=Se[0],De=Se[1],ke=Object(r.useState)(0),Ge=Object(a.a)(ke,2),_e=Ge[0],Te=Ge[1],Ie=Object(r.useState)(!1),Ce=Object(a.a)(Ie,2),Ae=Ce[0],Fe=Ce[1],Pe=Object(r.useState)(null),Ye=Object(a.a)(Pe,2),Me=Ye[0],Ue=Ye[1],qe=Object(r.useState)(!1),ze=Object(a.a)(qe,2),Be=ze[0],He=ze[1],Je=Object(r.useState)(0),Ke=Object(a.a)(Je,2),We=Ke[0],Re=Ke[1],Qe=Object(r.useState)(void 0),Ve=Object(a.a)(Qe,2),Xe=Ve[0],Ze=Ve[1],$e=Object(r.useState)([]),et=Object(a.a)($e,2),tt=et[0],nt=et[1],at=Object(r.useState)(""),rt=Object(a.a)(at,2),ot=rt[0],it=rt[1],ct=Object(r.useState)(0),lt=Object(a.a)(ct,2),ut=lt[0],st=lt[1],mt=Object(r.useState)(""),dt=Object(a.a)(mt,2),pt=dt[0],ht=dt[1],ft=Object(r.useState)(0),vt=Object(a.a)(ft,2),yt=vt[0],gt=vt[1],Et=Object(O.useToasts)().addToast;Object(r.useEffect)((function(){Object(j.a)("ApplicationTypeDD/Index").then((function(e){console.log("application DD data",e),re(e)})),We>0&&Object(j.a)("DocumentGroupDocument/GetByGroup/".concat(We)).then((function(e){console.log("documentGroupDocument",e),nt(e)})),Object(j.a)("DocumentDD/Index").then((function(e){console.log("Checking document requirement Status",e),xe(e)})),Object(j.a)("DocumentGroup/Index").then((function(e){console.log("Group Data",e),be(e)}))}),[$,We]);var bt=null===je||void 0===je?void 0:je.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),wt=function(e){console.log(e.target.value),Ue(e.target.value),He(!1)},Ot=ae.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),jt=function(){Y(!1),k(""),I(""),le("Select Application Type"),de(0),Ze(void 0)},xt=function(){z(!1),it(""),st(0)},Nt=function(){ht(""),gt(0),K(!1)},St=function(){V(!1),Re(0)},Lt=function(e){e.preventDefault();var t=new FormData(e.target);0==_e?Fe(!0):null===Me?He(!0):Object(x.a)("DocumentGroupDocument/Create",t).then((function(e){var t;(console.log("document data",e),200==(null===e||void 0===e?void 0:e.status))&&(Et(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),ee(!$),De("Select Document"),Te(0),Ue(null))}))};return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Subject Document Group"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){C.push("/")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(L.a,{className:"btn btn-uapp-add",func:function(){return Y(!0)},icon:o.a.createElement("i",{className:"fas fa-plus"}),name:" Add New Document Group",permission:6}),o.a.createElement("div",null," ",o.a.createElement("b",null," ","Total"," ",o.a.createElement("span",{className:"badge badge-primary"},null===Ee||void 0===Ee?void 0:Ee.length)," ","Subject Document Group Found"," "))),o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(s.a,{isOpen:P,toggle:jt,className:"uapp-modal2"},o.a.createElement(m.a,null,"Add Document Group"),o.a.createElement(d.a,null,o.a.createElement(p.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);if(0===me)ve(!0);else if(void 0!=Xe)Object(N.a)("DocumentGroup/Update",t).then((function(e){var t;ee(!$),Y(!1),Et(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),k(""),I(""),le("Select Application Type"),de(0),Ze(void 0)}));else Object(x.a)("DocumentGroup/Create",t).then((function(e){var t;ee(!$),Y(!1),Et(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),k(""),I(""),le("Select Application Type"),de(0)}))}},void 0!=Xe?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:Xe}):null,o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Application Type ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(w.a,{options:Ot,value:{label:ce,value:me},onChange:function(e){return t=e.label,n=e.value,le(t),de(n),void ve(!1);var t,n},name:"applicationTypeId",id:"applicationTypeId"}),fe&&o.a.createElement("span",{className:"text-danger"},"You must select application type."))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Title ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(v.a,{type:"text",required:!0,name:"title",id:"title",value:n,placeholder:"Write Title",onChange:function(e){return k(e.target.value)}}))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Details ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(v.a,{type:"textarea",required:!0,rows:"6",name:"details",id:"details",value:T,placeholder:"Write Details",onChange:function(e){return I(e.target.value)}}))),o.a.createElement(h.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(y.a,{color:"danger",className:"mr-1 mt-3",onClick:jt},"Close"),o.a.createElement(D.a,{color:"primary",type:"submit",className:"mr-0 mt-3",name:"Submit",permission:6})))))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Details"),o.a.createElement("th",null,"Application type"),o.a.createElement("th",null,"Documents"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===Ee||void 0===Ee?void 0:Ee.map((function(e,t){return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e?void 0:e.title),o.a.createElement("td",{className:"text-center"},null===e||void 0===e?void 0:e.details),o.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?o.a.createElement("span",null,"Home"):2===(null===e||void 0===e?void 0:e.applicationTypeId)?o.a.createElement("span",null,"EU/UK"):o.a.createElement("span",null,"International")),o.a.createElement("td",null,o.a.createElement(L.a,{name:"view",color:"success",func:function(){return function(e){console.log("view document",e),Re(null===e||void 0===e?void 0:e.id),V(!0)}(e)},className:"mx-1 btn-sm"})),o.a.createElement("td",null,o.a.createElement(L.a,{func:function(){return function(e){var t;Y(!0),console.log(e,null===e||void 0===e||null===(t=e.documentCategory)||void 0===t?void 0:t.id),le(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),de(null===e||void 0===e?void 0:e.applicationTypeId),k(null===e||void 0===e?void 0:e.title),I(null===e||void 0===e?void 0:e.details),Ze(null===e||void 0===e?void 0:e.id)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(L.a,{className:"mx-1 btn-sm",func:function(){return t=null===e||void 0===e?void 0:e.title,n=null===e||void 0===e?void 0:e.id,it(t),st(n),void z(!0);var t,n},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(s.a,{size:"xl",isOpen:Q,toggle:St,className:"pt-5"},o.a.createElement(m.a,null,"Document Group"),o.a.createElement(d.a,null,o.a.createElement("div",{className:"row container pt-5"},o.a.createElement("div",{className:"col-md-4 col-sm-12"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document List")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{borderless:!0,className:"table-sm"},o.a.createElement("tbody",null,tt.length<1?o.a.createElement("span",null,"There is no data added here."):o.a.createElement(o.a.Fragment,null,null===tt||void 0===tt?void 0:tt.map((function(e,t){var n;return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement("i",{className:"fas fa-chevron-circle-right"})," ",null===e||void 0===e||null===(n=e.document)||void 0===n?void 0:n.name),o.a.createElement("td",null,o.a.createElement(L.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t,n;console.log("docugrppppp",e,null===e||void 0===e||null===(t=e.document)||void 0===t?void 0:t.name,null===e||void 0===e?void 0:e.id),ht(null===e||void 0===e||null===(n=e.document)||void 0===n?void 0:n.name),gt(null===e||void 0===e?void 0:e.id),K(!0)}(e)},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(s.a,{isOpen:J,toggle:Nt,className:"uapp-modal"},o.a.createElement(d.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,pt)," ","? Once Deleted it can't be Undone!")),o.a.createElement(E.a,null,o.a.createElement(y.a,{color:"danger",onClick:function(){return e=yt,void Object(S.a)("DocumentGroupDocument/Delete/".concat(e)).then((function(e){K(!1),ee(!$),Et(e,{appearance:"error",autoDismiss:!0}),ht(""),gt(0)}));var e}},"YES"),o.a.createElement(y.a,{color:"primary",onClick:Nt},"NO")))))}))))))),o.a.createElement("div",{className:"col-md-8 col-sm-12"},o.a.createElement(p.a,{onSubmit:Lt,className:""},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Add to group")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{type:"hidden",id:"documentGroupId",name:"documentGroupId",value:We})),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Document"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(w.a,{options:bt,value:{label:Le,value:_e},onChange:function(e){return t=e.label,n=e.value,Fe(!1),De(t),void Te(n);var t,n},name:"documentId",id:"documentId"}),Ae&&o.a.createElement("span",{className:"text-danger"},"Document must be selected."))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Is Mandatory"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(h.a,{check:!0,inline:!0},o.a.createElement(v.a,{className:"form-check-input",type:"radio",id:"isMandatory",onChange:wt,name:"isMandatory",value:"true",checked:"true"==Me}),o.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"isMandatory"},"Yes")),o.a.createElement(h.a,{check:!0,inline:!0},o.a.createElement(v.a,{className:"form-check-input",type:"radio",id:"isMandatory",onChange:wt,name:"isMandatory",value:"false",checked:"false"==Me}),o.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"isMandatory"},"No")),o.a.createElement("br",null),Be&&o.a.createElement("span",{className:"text-danger"},"Is mandatory must be selected."))),o.a.createElement(h.a,{className:"has-icon-left position-relative"},o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(L.a,{color:"primary",type:"submit",className:"ms-lg-3 ms-sm-1 mt-3",name:"Submit",permission:6})))))))),o.a.createElement(E.a,null,o.a.createElement(y.a,{color:"danger",onClick:St},"Close"))),o.a.createElement(s.a,{isOpen:q,toggle:xt,className:"uapp-modal"},o.a.createElement(d.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,ot)," ? Once Deleted it can't be Undone!")),o.a.createElement(E.a,null,o.a.createElement(y.a,{color:"danger",onClick:function(){return e=ut,void Object(S.a)("DocumentGroup/Delete/".concat(e)).then((function(e){z(!1),ee(!$),Et(e,{appearance:"error",autoDismiss:!0}),it(""),st(0)}));var e}},"YES"),o.a.createElement(y.a,{onClick:xt},"NO")))))}))))))))}}}]);
//# sourceMappingURL=207.72f1726f.chunk.js.map