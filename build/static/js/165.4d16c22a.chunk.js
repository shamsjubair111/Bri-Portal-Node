/*! For license information please see 165.4d16c22a.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[165],{254:function(t,e,n){"use strict";var r=n(10),a=n(3),o=n.n(a),i=n(158),c=n(48);function s(){s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function d(){}function h(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&n.call(y,a)&&(m=y);var g=p.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var l=localStorage.getItem("token");function u(){return(u=Object(r.a)(s().mark((function t(e){var n,r,a,u=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),n,{headers:{authorization:l}});case 5:return r=t.sent,t.next=8,r;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},255:function(t,e,n){"use strict";var r=n(10),a=n(3),o=n.n(a),i=n(158),c=n(48);function s(){s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function d(){}function h(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&n.call(y,a)&&(m=y);var g=p.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var l=localStorage.getItem("token");function u(){return(u=Object(r.a)(s().mark((function t(e){var n,r,a=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(c.a).concat(e),n,{headers:{authorization:l}});case 5:return r=t.sent,t.next=8,r;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===t.t0.response.status&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},261:function(t,e,n){"use strict";var r=n(6),a=n(12),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","innerRef","tag"],h={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(t){var e=t.className,n=t.cssModule,o=t.innerRef,c=t.tag,s=Object(a.a)(t,d),l=Object(f.p)(u()(e,"card-body"),n);return i.a.createElement(c,Object(r.a)({},s,{className:l,ref:o}))};p.propTypes=h,p.defaultProps={tag:"div"},e.a=p},264:function(t,e,n){"use strict";var r=n(6),a=n(12),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","tag"],h={tag:f.t,className:s.a.string,cssModule:s.a.object},p=function(t){var e=t.className,n=t.cssModule,o=t.tag,c=Object(a.a)(t,d),s=Object(f.p)(u()(e,"card-header"),n);return i.a.createElement(o,Object(r.a)({},c,{className:s}))};p.propTypes=h,p.defaultProps={tag:"div"},e.a=p},305:function(t,e,n){"use strict";var r=n(6),a=n(12),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","color","body","inverse","outline","tag","innerRef"],h={tag:f.t,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(t){var e=t.className,n=t.cssModule,o=t.color,c=t.body,s=t.inverse,l=t.outline,h=t.tag,p=t.innerRef,m=Object(a.a)(t,d),v=Object(f.p)(u()(e,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),n);return i.a.createElement(h,Object(r.a)({},m,{className:v,ref:p}))};p.propTypes=h,p.defaultProps={tag:"div"},e.a=p},335:function(t,e,n){"use strict";var r=n(6),a=n(12),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],h={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:f.t,className:s.a.string,cssModule:s.a.object},p=function(t){var e=t.className,n=t.cssModule,o=t.tabs,c=t.pills,s=t.vertical,l=t.horizontal,h=t.justified,p=t.fill,m=t.navbar,v=t.card,y=t.tag,g=Object(a.a)(t,d),b=Object(f.p)(u()(e,m?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(s),{"nav-tabs":o,"card-header-tabs":v&&o,"nav-pills":c,"card-header-pills":v&&c,"nav-justified":h,"nav-fill":p}),n);return i.a.createElement(y,Object(r.a)({},g,{className:b}))};p.propTypes=h,p.defaultProps={tag:"ul",vertical:!1},e.a=p},337:function(t,e,n){"use strict";var r=n(6),a=n(12),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","active","tag"],h={tag:f.t,active:s.a.bool,className:s.a.string,cssModule:s.a.object},p=function(t){var e=t.className,n=t.cssModule,o=t.active,c=t.tag,s=Object(a.a)(t,d),l=Object(f.p)(u()(e,"nav-item",!!o&&"active"),n);return i.a.createElement(c,Object(r.a)({},s,{className:l}))};p.propTypes=h,p.defaultProps={tag:"li"},e.a=p},338:function(t,e,n){"use strict";var r=n(6),a=n(12),o=n(17),i=n(13),c=n(0),s=n.n(c),l=n(1),u=n.n(l),f=n(5),d=n.n(f),h=n(4),p=["className","cssModule","active","tag","innerRef"],m={tag:h.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(t){function e(e){var n;return(n=t.call(this,e)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(e,t);var n=e.prototype;return n.onClick=function(t){this.props.disabled?t.preventDefault():("#"===this.props.href&&t.preventDefault(),this.props.onClick&&this.props.onClick(t))},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,o=t.active,i=t.tag,c=t.innerRef,l=Object(a.a)(t,p),u=Object(h.p)(d()(e,"nav-link",{disabled:l.disabled,active:o}),n);return s.a.createElement(i,Object(r.a)({},l,{ref:c,onClick:this.onClick,className:u}))},e}(s.a.Component);v.propTypes=m,v.defaultProps={tag:"a"},e.a=v},920:function(t,e,n){"use strict";n.r(e);var r=n(29),a=n(0),o=n.n(a),i=n(33),c=n(305),s=n(264),l=n(261),u=n(335),f=n(337),d=n(338),h=n(96),p=n(254),m=n(257),v=n(103),y=n(11),g=n(255);e.default=function(){var t=Object(i.g)(),e=Object(a.useState)("4"),n=Object(r.a)(e,2),b=n[0],E=n[1],w=Object(m.useToasts)().addToast,x=Object(a.useState)(!1),N=Object(r.a)(x,2),j=N[0],O=N[1],L=Object(a.useState)({}),k=Object(r.a)(L,2),S=k[0],T=k[1],C=Object(i.i)().consultantRegisterId,_=localStorage.getItem("userType"),I=Object(a.useState)(""),M=Object(r.a)(I,2),P=M[0],G=M[1],F=Object(a.useState)([]),D=Object(r.a)(F,2);D[0],D[1];Object(a.useEffect)((function(){Object(v.a)("ConsultantConscent/Get/".concat(C)).then((function(t){console.log(t,"conscentData"),T(t)})),fetch("https://geolocation-db.com/json/").then((function(t){return null===t||void 0===t?void 0:t.json()})).then((function(t){console.log(t),G(t)}))}),[j]);var A=function(){Object(g.a)("ConsultantConscent/SendEmail/".concat(C)).then((function(t){200==(null===t||void 0===t?void 0:t.status)&&(w("Email Sending is in Process",{appearance:"success",autoDismiss:!0}),O(!j))}))},R=function(e){E(e),"1"==e&&t.push("/consultantInformation/".concat(C)),"2"==e&&t.push("/consultantBankDetails/".concat(C)),"3"==e&&t.push("/consultantCommission/".concat(C)),"4"==e&&t.push("/consultantConscent/".concat(C))};function z(t){return new Date(t).toString([],{year:"numeric",month:"long",day:"numeric"})}return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(s.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"}," Terms and Conditions"),_!=(null===y.a||void 0===y.a?void 0:y.a.Consultant)?o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{className:"text-light",onClick:function(){t.push("/consultantList")}}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Consultant List")):null)),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(u.a,{tabs:!0},o.a.createElement(f.a,null,o.a.createElement(d.a,{active:"1"===b,onClick:function(){return R("1")}},"Information")),o.a.createElement(f.a,null,o.a.createElement(d.a,{active:"2"===b,onClick:function(){return R("2")}},"Bank  Details")),o.a.createElement(f.a,null,o.a.createElement(d.a,{active:"3"===b,onClick:function(){return R("3")}},"Commission")),o.a.createElement(f.a,null,o.a.createElement(d.a,{active:"4"===b,onClick:function(){return R("4")}},"Conscent"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h5",{className:"mb-3"}," ",o.a.createElement("b",{className:"bg-u"},"Terms and Conditions")," ")),o.a.createElement("span",{className:"conscentText-style"},"1. To conduct yourself with integrity, professionally and ethically in a manner that will reflect positively and promote the image of ",o.a.createElement("b",null,"SMS Higher Education Group"),"."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"2. Must follow and check the general entry criteria for admission in colleges/universities i.e. valid passport, required qualification, nationality."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"3. Must ensure all the paperwork, provided by the students is true and accurate according to the data protection act, the agency will not be responsible for any incorrect or fraudulent documents."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"4. Our service for students is 100% free, nobody is allowed to charge for any of the services."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"5. We provide guidance and support to our students, no one is allowed to help the students in their coursework."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"6. Everybody needs to follow the universities\u2019 guidelines and respect their decisions."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"7. Our registered student cannot be passed at to any other agency or third party."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"8. Follow the university guidelines, only offer our listed courses to the students."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"9. Do not make any prior commitment to the student regarding interview, admission, student finance, courses."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"10. Do not compare with the policy of other agency or organisation and only follow our guidelines."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"11. Do not engage in any activity likely to damage SMS Higher Education Group\u2019s or our partner\u2019s reputations, the activity must be prohibited which likely to damage the academic or professional reputation of any university or other entity associated with the course."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"12. Always ensure to advice is given in a professional and accurate manner."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"13. Anyone not able to follow any of these conditions, their contract will be immediately terminated and might miss out from any outstanding commissions and bonuses."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"14. I confirm my email address is accurate and can be considered as my signature."))),null==S||0==(null===S||void 0===S?void 0:S.isSigned)?o.a.createElement("div",{className:"conscentSign-style ms-md-3 py-1 mt-2"},o.a.createElement("span",{className:"inner-term-style"},"Terms and Conditions has not been Signed yet !!!!")):o.a.createElement("div",{className:"conscentSign-style2 ms-md-3 py-1 mt-2 text-white"},o.a.createElement("span",{className:"inner-term-style"},"Terms and Conditions Signed Successfully.")),o.a.createElement("div",{className:" mt-1"},o.a.createElement("div",null,_==(null===y.a||void 0===y.a?void 0:y.a.SystemAdmin)||_==(null===y.a||void 0===y.a?void 0:y.a.Admin)||_==(null===y.a||void 0===y.a?void 0:y.a.ComplianceManager)?o.a.createElement(o.a.Fragment,null,null==S||1==(null===S||void 0===S?void 0:S.consentSignStatusId)?o.a.createElement("div",{className:"mb-1 text-right"},o.a.createElement(h.a,{color:"primary",onClick:A},"Send Email")):null!==S&&2==(null===S||void 0===S?void 0:S.consentSignStatusId)?o.a.createElement("div",{className:"mb-1 ms-3 right"},o.a.createElement("span",{className:"text-info"}," Email is sent with credentails "),o.a.createElement(h.a,{color:"primary",onClick:A},"Send Email Again")):null!==S&&3==(null===S||void 0===S?void 0:S.consentSignStatusId)?o.a.createElement("div",{className:"mb-1 text-left ms-md-4"},o.a.createElement("span",null,"Conscent Signed on: ",o.a.createElement("span",{className:"fw-style"},z(null===S||void 0===S?void 0:S.consentSignTime))),o.a.createElement("br",null),o.a.createElement("span",null,"Conscent Signed on FromIp: ",o.a.createElement("span",{className:"fw-style"}," ",null===S||void 0===S?void 0:S.deviceIp))):null):_==(null===y.a||void 0===y.a?void 0:y.a.Consultant)?null==S||0==(null===S||void 0===S?void 0:S.isSigned)?o.a.createElement("div",{className:"mt-1"},o.a.createElement(h.a,{color:"primary",onClick:function(t){var e=new FormData;e.append("ConsultantId",C),e.append("IpAddress",null===P||void 0===P?void 0:P.IPv4),Object(p.a)("ConsultantConscent/Sign",e).then((function(t){var e;200==(null===t||void 0===t?void 0:t.status)&&(w(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),O(!j))}))}},"Accept Terms and Conditions")):o.a.createElement("div",{className:"mb-1 text-left ms-md-4  "},o.a.createElement("span",null,"Conscent Signed on: ",o.a.createElement("span",{className:"fw-style"},z(null===S||void 0===S?void 0:S.consentSignTime))),o.a.createElement("br",null),o.a.createElement("span",null,"Conscent Signed FromIp:",o.a.createElement("span",{className:"fw-style"}," ",null===S||void 0===S?void 0:S.deviceIp))):null)),o.a.createElement("div",{className:"d-flex justify-content-start"},o.a.createElement(h.a,{color:"warning ms-3 mt-3",onClick:function(){t.push("/consultantCommission/".concat(C))}},"Previous Page")))))}}}]);
//# sourceMappingURL=165.4d16c22a.chunk.js.map