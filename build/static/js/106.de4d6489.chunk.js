/*! For license information please see 106.de4d6489.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[106],{255:function(e,t,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(158),c=r(48);function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(z){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(z){return{type:"throw",arg:z}}}e.wrap=l;var f={};function p(){}function d(){}function h(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(N([])));b&&b!==t&&r.call(b,a)&&(m=b);var g=h.prototype=p.prototype=Object.create(m);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(O.prototype),c(O.prototype,o,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new O(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var l=localStorage.getItem("token");function u(){return(u=Object(n.a)(s().mark((function e(t){var r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",e.prev=2,e.next=5,o.a.put("".concat(c.a).concat(t),r,{headers:{authorization:l}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===e.t0.response.status&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},261:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),p=["className","cssModule","innerRef","tag"],d={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,r=e.cssModule,o=e.innerRef,c=e.tag,s=Object(a.a)(e,p),l=Object(f.p)(u()(t,"card-body"),r);return i.a.createElement(c,Object(n.a)({},s,{className:l,ref:o}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},264:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),p=["className","cssModule","tag"],d={tag:f.t,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,r=e.cssModule,o=e.tag,c=Object(a.a)(e,p),s=Object(f.p)(u()(t,"card-header"),r);return i.a.createElement(o,Object(n.a)({},c,{className:s}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},267:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),p=["className","cssModule","widths","tag"],d=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:d,offset:d})]),m={tag:f.t,xs:h,sm:h,md:h,lg:h,xl:h,className:s.a.string,cssModule:s.a.object,widths:s.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,r){return!0===r||""===r?e?"col":"col-"+t:"auto"===r?e?"col-auto":"col-"+t+"-auto":e?"col-"+r:"col-"+t+"-"+r},g=function(e){var t=e.className,r=e.cssModule,o=e.widths,c=e.tag,s=Object(a.a)(e,p),l=[];o.forEach((function(t,n){var a=e[t];if(delete s[t],a||""===a){var o=!n;if(Object(f.n)(a)){var i,c=o?"-":"-"+t+"-",p=b(o,t,a.size);l.push(Object(f.p)(u()(((i={})[p]=a.size||""===a.size,i["order"+c+a.order]=a.order||0===a.order,i["offset"+c+a.offset]=a.offset||0===a.offset,i)),r))}else{var d=b(o,t,a);l.push(d)}}})),l.length||l.push("col");var d=Object(f.p)(u()(t,l),r);return i.a.createElement(c,Object(n.a)({},s,{className:d}))};g.propTypes=m,g.defaultProps=v,t.a=g},268:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(17),i=r(13),c=r(0),s=r.n(c),l=r(1),u=r.n(l),f=r(5),p=r.n(f),d=r(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var r;return(r=e.call(this,t)||this).getRef=r.getRef.bind(Object(o.a)(r)),r.focus=r.focus.bind(Object(o.a)(r)),r}Object(i.a)(t,e);var r=t.prototype;return r.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},r.focus=function(){this.ref&&this.ref.focus()},r.render=function(){var e=this.props,t=e.className,r=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,v=e.innerRef,b=Object(a.a)(e,h),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),O=u||("select"===o||"textarea"===o?o:"input"),w="form-control";m?(w+="-plaintext",O=u||"input"):"file"===o?w+="-file":"range"===o?w+="-range":g&&(w=f?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(d.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var E=Object(d.p)(p()(t,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,w),r);return("input"===O||u&&"function"===typeof u)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"===typeof O&&"select"!==O&&(Object(d.v)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),s.a.createElement(O,Object(n.a)({},b,{ref:v,className:E,"aria-invalid":l}))},t}(s.a.Component);v.propTypes=m,v.defaultProps={type:"text"},t.a=v},269:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),p=["className","cssModule","row","disabled","check","inline","tag"],d={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:f.t,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,r=e.cssModule,o=e.row,c=e.disabled,s=e.check,l=e.inline,d=e.tag,h=Object(a.a)(e,p),m=Object(f.p)(u()(t,!!o&&"row",s?"form-check":"form-group",!(!s||!l)&&"form-check-inline",!(!s||!c)&&"disabled"),r);return"fieldset"===d&&(h.disabled=c),i.a.createElement(d,Object(n.a)({},h,{className:m}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},278:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(17),i=r(13),c=r(0),s=r.n(c),l=r(1),u=r.n(l),f=r(5),p=r.n(f),d=r(4),h=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:d.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var r;return(r=e.call(this,t)||this).getRef=r.getRef.bind(Object(o.a)(r)),r.submit=r.submit.bind(Object(o.a)(r)),r}Object(i.a)(t,e);var r=t.prototype;return r.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},r.submit=function(){this.ref&&this.ref.submit()},r.render=function(){var e=this.props,t=e.className,r=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,l=Object(a.a)(e,h),u=Object(d.p)(p()(t,!!o&&"form-inline"),r);return s.a.createElement(i,Object(n.a)({},l,{ref:c,className:u}))},t}(c.Component);v.propTypes=m,v.defaultProps={tag:"form"},t.a=v},305:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],d={tag:f.t,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,r=e.cssModule,o=e.color,c=e.body,s=e.inverse,l=e.outline,d=e.tag,h=e.innerRef,m=Object(a.a)(e,p),v=Object(f.p)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),r);return i.a.createElement(d,Object(n.a)({},m,{className:v,ref:h}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},389:function(e,t,r){"use strict";var n=r(6),a=r(12),o=r(0),i=r.n(o),c=r(1),s=r.n(c),l=r(5),u=r.n(l),f=r(4),p=["className","cssModule","tag"],d={tag:f.t,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,r=e.cssModule,o=e.tag,c=Object(a.a)(e,p),s=Object(f.p)(u()(t,"card-title"),r);return i.a.createElement(o,Object(n.a)({},c,{className:s}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},390:function(e,t,r){"use strict";var n=r(18),a=r(19),o=r(20),i=r(21),c=r(0),s=r.n(c),l=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},s.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),s.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},s.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),s.a.createElement("span",null,this.props.label))}}]),r}(s.a.Component);t.a=l},494:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Check",t.a=l},580:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Mail",t.a=l},644:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),a.a.createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Smartphone",t.a=l},919:function(e,t,r){"use strict";r.r(t);var n=r(29),a=r(0),o=r.n(a),i=r(305),c=r(264),s=r(389),l=r(261),u=r(278),f=r(269),p=r(267),d=r(268),h=r(96),m=r(257),v=r(390),b=r(231),g=r(580),y=r(644),O=r(494),w=r(33),E=r(103),j=r(255);t.default=function(){var e=Object(a.useState)({}),t=Object(n.a)(e,2),r=t[0],x=t[1],N=Object(m.useToasts)().addToast,k=Object(w.i)().id;Object(a.useEffect)((function(){Object(E.a)("Practice/Get/".concat(k)).then((function(e){x(e)}))}),[k]);return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement(s.a,null,"Update User Information")),o.a.createElement(l.a,null,o.a.createElement(u.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);Object(j.a)("Practice/Update",t).then((function(e){N(e,{appearance:"success",autoDismiss:!0})}))}},o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"4"},o.a.createElement("span",null,"Id")),o.a.createElement(p.a,{md:"8",lg:"6"},o.a.createElement(d.a,{type:"number",name:"id",defaultValue:r.id,id:"id",placeholder:"Id"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(b.a,{size:15})))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"4"},o.a.createElement("span",null,"First Name")),o.a.createElement(p.a,{md:"8",lg:"6"},o.a.createElement(d.a,{type:"text",name:"firstName",defaultValue:r.firstName,id:"firstName",placeholder:"First Name"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(b.a,{size:15})))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"4"},o.a.createElement("span",null,"Last Name")),o.a.createElement(p.a,{md:"8",lg:"6"},o.a.createElement(d.a,{type:"text",name:"lastName",defaultValue:r.lastName,id:"lastName",placeholder:"Last Name"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(b.a,{size:15})))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"4"},o.a.createElement("span",null,"Email")),o.a.createElement(p.a,{md:"8",lg:"6"},o.a.createElement(d.a,{type:"email",name:"email",defaultValue:r.email,id:"email",placeholder:"Email"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(g.a,{size:15})))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"4"},o.a.createElement("span",null,"Mobile")),o.a.createElement(p.a,{md:"8",lg:"6"},o.a.createElement(d.a,{type:"number",name:"phone",defaultValue:r.phone,id:"phone",placeholder:"Mobile"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(y.a,{size:15})))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:{size:8,offset:4}},o.a.createElement(v.a,{color:"primary",icon:o.a.createElement(O.a,{className:"vx-icon",size:16}),label:"Remember Me",defaultChecked:!1}))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:{size:8,offset:4}},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"),o.a.createElement(h.a.Ripple,{outline:!0,color:"warning",type:"reset",className:"mb-1"},"Reset")))))))}}}]);
//# sourceMappingURL=106.de4d6489.chunk.js.map