/*! For license information please see 178.362ccf33.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[178],{254:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(158),c=r(48);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(N([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var l=localStorage.getItem("token");function u(){return(u=Object(n.a)(s().mark((function t(e){var r,n,a,u=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:l}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},261:function(t,e,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),h=["className","cssModule","innerRef","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(t){var e=t.className,r=t.cssModule,o=t.innerRef,c=t.tag,s=Object(a.a)(t,h),l=Object(f.p)(u()(e,"card-body"),r);return i.a.createElement(c,Object(n.a)({},s,{className:l,ref:o}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},264:function(t,e,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),h=["className","cssModule","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object},d=function(t){var e=t.className,r=t.cssModule,o=t.tag,c=Object(a.a)(t,h),s=Object(f.p)(u()(e,"card-header"),r);return i.a.createElement(o,Object(n.a)({},c,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},268:function(t,e,r){"use strict";var n=r(6),a=r(12),o=r(17),i=r(13),c=r(0),s=r.n(c),l=r(1),u=r.n(l),f=r(5),h=r.n(f),p=r(4),d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},y=function(t){function e(e){var r;return(r=t.call(this,e)||this).getRef=r.getRef.bind(Object(o.a)(r)),r.focus=r.focus.bind(Object(o.a)(r)),r}Object(i.a)(e,t);var r=e.prototype;return r.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},r.focus=function(){this.ref&&this.ref.focus()},r.render=function(){var t=this.props,e=t.className,r=t.cssModule,o=t.type,i=t.bsSize,c=t.valid,l=t.invalid,u=t.tag,f=t.addon,v=t.plaintext,y=t.innerRef,m=Object(a.a)(t,d),g=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),w=u||("select"===o||"textarea"===o?o:"input"),j="form-control";v?(j+="-plaintext",w=u||"input"):"file"===o?j+="-file":"range"===o?j+="-range":g&&(j=f?null:"form-check-input"),m.size&&b.test(m.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=m.size,delete m.size);var O=Object(p.p)(h()(e,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,j),r);return("input"===w||u&&"function"===typeof u)&&(m.type=o),m.children&&!v&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(p.v)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),s.a.createElement(w,Object(n.a)({},m,{ref:y,className:O,"aria-invalid":l}))},e}(s.a.Component);y.propTypes=v,y.defaultProps={type:"text"},e.a=y},269:function(t,e,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),h=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:f.t,className:s.a.string,cssModule:s.a.object},d=function(t){var e=t.className,r=t.cssModule,o=t.row,c=t.disabled,s=t.check,l=t.inline,p=t.tag,d=Object(a.a)(t,h),v=Object(f.p)(u()(e,!!o&&"row",s?"form-check":"form-group",!(!s||!l)&&"form-check-inline",!(!s||!c)&&"disabled"),r);return"fieldset"===p&&(d.disabled=c),i.a.createElement(p,Object(n.a)({},d,{className:v}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},282:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(68);function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n.a)(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}},305:function(t,e,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),h=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:f.t,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(t){var e=t.className,r=t.cssModule,o=t.color,c=t.body,s=t.inverse,l=t.outline,p=t.tag,d=t.innerRef,v=Object(a.a)(t,h),y=Object(f.p)(u()(e,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),r);return i.a.createElement(p,Object(n.a)({},v,{className:y,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},865:function(t,e,r){"use strict";r.r(e);var n=r(282),a=r(29),o=r(0),i=r.n(o),c=r(33),s=r(305),l=r(264),u=r(261),f=r(269),h=r(268),p=r(96),d=r(254);e.default=function(){var t=Object(c.g)(),e=Object(o.useState)(""),r=Object(a.a)(e,2);r[0],r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(l.a,{className:"page-header"},i.a.createElement("h3",null,"University Type Information"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{onClick:function(){t.push("/")}}," ",i.a.createElement("i",{class:"fas fa-arrow-circle-left"})," Dashboard")))),i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e,r=new FormData(t.target),a=Object(n.a)(r.values());try{for(a.s();!(e=a.n()).done;)e.value}catch(o){a.e(o)}finally{a.f()}Object(d.a)("UniversityType/Create",r).then().catch()}},i.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{type:"text",name:"name",id:"name"})),i.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},i.a.createElement(p.a.Ripple,{type:"submit",className:"mr-1 mt-3 badge-primary"},"Submit"))))))}}}]);
//# sourceMappingURL=178.362ccf33.chunk.js.map