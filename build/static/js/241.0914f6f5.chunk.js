/*! For license information please see 241.0914f6f5.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[241],{251:function(t,e,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=r(151),c=r(29);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(L([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var l=localStorage.getItem("token");function u(){return(u=Object(n.a)(s().mark((function t(e){var r,n,a,u=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:l}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},255:function(t,e,r){"use strict";var n=r(11),a=r(15),o=r(0),i=r.n(o),c=r(2),s=r.n(c),l=r(8),u=r.n(l),f=r(7),h=["className","cssModule","innerRef","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(t){var e=t.className,r=t.cssModule,o=t.innerRef,c=t.tag,s=Object(a.a)(t,h),l=Object(f.p)(u()(e,"card-body"),r);return i.a.createElement(c,Object(n.a)({},s,{className:l,ref:o}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},259:function(t,e,r){"use strict";var n=r(11),a=r(15),o=r(0),i=r.n(o),c=r(2),s=r.n(c),l=r(8),u=r.n(l),f=r(7),h=["className","cssModule","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object},d=function(t){var e=t.className,r=t.cssModule,o=t.tag,c=Object(a.a)(t,h),s=Object(f.p)(u()(e,"card-header"),r);return i.a.createElement(o,Object(n.a)({},c,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},293:function(t,e,r){"use strict";var n=r(11),a=r(15),o=r(0),i=r.n(o),c=r(2),s=r.n(c),l=r(8),u=r.n(l),f=r(7),h=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:f.t,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(t){var e=t.className,r=t.cssModule,o=t.color,c=t.body,s=t.inverse,l=t.outline,p=t.tag,d=t.innerRef,v=Object(a.a)(t,h),y=Object(f.p)(u()(e,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),r);return i.a.createElement(p,Object(n.a)({},v,{className:y,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},931:function(t,e,r){"use strict";r.r(e);var n=r(19),a=r(0),o=r.n(a),i=r(37),c=r(252),s=r(293),l=r(259),u=r(255),f=r(98),h=r(251);e.default=function(){var t=Object(a.useState)(!1),e=Object(n.a)(t,2),r=e[0],p=e[1],d=Object(i.g)(),v=Object(c.useToasts)().addToast;return o.a.createElement("div",null,o.a.createElement(s.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Apply Fixed Data"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{className:"text-white",onClick:function(){d.push("/")}}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement("span",{style:{fontWeight:500}}," All fixed data will be applied and saved to the database.")),o.a.createElement("li",null,o.a.createElement("span",{style:{fontWeight:500}},"If any data is added or changed partially, sytem will detect that data change and apply auto-update.")))),o.a.createElement("div",{className:"text-center mt-4"},o.a.createElement(f.a,{color:"primary",onClick:function(){p(!0),Object(h.a)("SeedData/Apply").then((function(t){p(!1),200==(null===t||void 0===t?void 0:t.status)?v(null===t||void 0===t?void 0:t.data,{appearance:"success",autoDismiss:!0}):v(null===t||void 0===t?void 0:t.data,{appearance:"error",autoDismiss:!0})}))},disabled:r},o.a.createElement("i",{className:"fas fa-plus"}),"  Apply Fixed Data")))))}}}]);
//# sourceMappingURL=241.0914f6f5.chunk.js.map