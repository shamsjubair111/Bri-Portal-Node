/*! For license information please see 191.33594276.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[191],{247:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(98);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),s=e.name,l=e.disable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:n,type:i,className:t,disabled:l}," ",a,s," "))}},249:function(e,t,a){"use strict";var n=a(9),r=a(3),o=a.n(r),i=(a(151),a(29));function c(){c=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new N(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return T()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=j(i,a);if(c){if(c===f)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}(e,a,i),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var f={};function d(){}function p(){}function m(){}var h={};s(h,r,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==t&&a.call(b,r)&&(h=b);var g=m.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,c){var s=u(e[r],e,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function j(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m,s(g,"constructor",m),s(m,"constructor",p),p.displayName=s(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),s(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(l(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),s(g,i,"Generator"),s(g,r,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),f}},e}var s=localStorage.getItem("token");function l(){return(l=Object(n.a)(c().mark((function e(t){var a,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:{},r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,e.next=5,o.a.put("".concat(i.a).concat(t),a,{headers:{authorization:s}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return l.apply(this,arguments)}},255:function(e,t,a){"use strict";var n=a(11),r=a(15),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(8),u=a.n(l),f=a(7),d=["className","cssModule","innerRef","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,c=e.tag,s=Object(r.a)(e,d),l=Object(f.p)(u()(t,"card-body"),a);return i.a.createElement(c,Object(n.a)({},s,{className:l,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},258:function(e,t,a){"use strict";var n=a(11),r=a(15),o=a(23),i=a(18),c=a(0),s=a.n(c),l=a(2),u=a.n(l),f=a(8),d=a.n(f),p=a(7),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,f=e.addon,h=e.plaintext,v=e.innerRef,b=Object(r.a)(e,m),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),j="form-control";h?(j+="-plaintext",E=u||"input"):"file"===o?j+="-file":"range"===o?j+="-range":g&&(j=f?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var O=Object(p.p)(d()(t,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,j),a);return("input"===E||u&&"function"===typeof u)&&(b.type=o),b.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(p.v)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),s.a.createElement(E,Object(n.a)({},b,{ref:v,className:O,"aria-invalid":l}))},t}(s.a.Component);v.propTypes=h,v.defaultProps={type:"text"},t.a=v},259:function(e,t,a){"use strict";var n=a(11),r=a(15),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(8),u=a.n(l),f=a(7),d=["className","cssModule","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,c=Object(r.a)(e,d),s=Object(f.p)(u()(t,"card-header"),a);return i.a.createElement(o,Object(n.a)({},c,{className:s}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},260:function(e,t,a){"use strict";var n=a(11),r=a(15),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(8),u=a.n(l),f=a(7),d=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),m=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),h={tag:f.t,xs:m,sm:m,md:m,lg:m,xl:m,className:s.a.string,cssModule:s.a.object,widths:s.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,s=Object(r.a)(e,d),l=[];o.forEach((function(t,n){var r=e[t];if(delete s[t],r||""===r){var o=!n;if(Object(f.n)(r)){var i,c=o?"-":"-"+t+"-",d=b(o,t,r.size);l.push(Object(f.p)(u()(((i={})[d]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i)),a))}else{var p=b(o,t,r);l.push(p)}}})),l.length||l.push("col");var p=Object(f.p)(u()(t,l),a);return i.a.createElement(c,Object(n.a)({},s,{className:p}))};g.propTypes=h,g.defaultProps=v,t.a=g},265:function(e,t,a){"use strict";var n=a(11),r=a(15),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(8),u=a.n(l),f=a(7),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:f.t,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.row,c=e.disabled,s=e.check,l=e.inline,p=e.tag,m=Object(r.a)(e,d),h=Object(f.p)(u()(t,!!o&&"row",s?"form-check":"form-group",!(!s||!l)&&"form-check-inline",!(!s||!c)&&"disabled"),a);return"fieldset"===p&&(m.disabled=c),i.a.createElement(p,Object(n.a)({},m,{className:h}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},268:function(e,t,a){"use strict";var n=a(11),r=a(15),o=a(23),i=a(18),c=a(0),s=a.n(c),l=a(2),u=a.n(l),f=a(8),d=a.n(f),p=a(7),m=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,l=Object(r.a)(e,m),u=Object(p.p)(d()(t,!!o&&"form-inline"),a);return s.a.createElement(i,Object(n.a)({},l,{ref:c,className:u}))},t}(c.Component);v.propTypes=h,v.defaultProps={tag:"form"},t.a=v},952:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(0),o=a.n(r),i=a(37),c=a(100),s=a(293),l=a(259),u=a(255),f=a(268),d=a(265),p=a(260),m=a(258),h=a(264),v=a(247),b=a(249),g=a(252);t.default=function(){var e=Object(i.i)().id,t=Object(i.g)(),a=Object(g.useToasts)().addToast,y=Object(r.useState)({}),E=Object(n.a)(y,2),j=E[0],O=E[1],w=Object(r.useState)([]),N=Object(n.a)(w,2),x=(N[0],N[1],Object(r.useState)([])),T=Object(n.a)(x,2),L=T[0],S=T[1],k=Object(r.useState)("Select Consultant"),R=Object(n.a)(k,2),M=R[0],_=R[1],z=Object(r.useState)(0),P=Object(n.a)(z,2),I=P[0],C=P[1],D=Object(r.useState)("Select Transaction Type"),F=Object(n.a)(D,2),G=F[0],B=F[1],V=Object(r.useState)(0),A=Object(n.a)(V,2),J=A[0],U=A[1],Y=Object(r.useState)(!1),q=Object(n.a)(Y,2),H=q[0],K=q[1],Q=Object(r.useState)(!1),W=Object(n.a)(Q,2),X=W[0],Z=W[1];Object(r.useEffect)((function(){Object(c.a)("BonusTransaction/Details/".concat(e)).then((function(e){console.log(e),O(e),_(null===e||void 0===e?void 0:e.consultant),C(null===e||void 0===e?void 0:e.consultantId),B(null===e||void 0===e?void 0:e.transactionType),U(null===e||void 0===e?void 0:e.transactionTypeId)})),Object(c.a)("BonusTransactionTypeDD/Index").then((function(e){S(e)}))}),[H]);var $=null===L||void 0===L?void 0:L.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}}));return o.a.createElement("div",null,o.a.createElement(s.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Update Inflow Transaction"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{className:"text-white",onClick:function(){t.push("/inFlowTransaction")}}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Inflow Transaction List")))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement("span",{className:"mr-1"},o.a.createElement("b",null,"Code:")),o.a.createElement("span",{className:""}," ",null===j||void 0===j?void 0:j.transactionCode),o.a.createElement("br",null),o.a.createElement("span",{className:"mr-1"},o.a.createElement("b",null,"Date:")),o.a.createElement("span",{className:""}," ",null===j||void 0===j?void 0:j.transactionDate),o.a.createElement("br",null),o.a.createElement("span",{className:"mr-1"},o.a.createElement("b",null,"Consultant:")),o.a.createElement("span",{className:""}," ",M),o.a.createElement(f.a,{className:"mt-3",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);Z(!0),Object(b.a)("BonusTransaction/UPdate",t).then((function(e){var t,n,r;(Z(!1),200==(null===e||void 0===e?void 0:e.status)&&1==(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.isSuccess))?(a(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message,{appearance:"success",autoDismiss:!0}),K(!H)):a(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message,{appearance:"error",autoDismiss:!0})}))}},o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:null===j||void 0===j?void 0:j.id}),o.a.createElement("input",{type:"hidden",name:"consultantId",id:"consultantId",value:I}),o.a.createElement(d.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"2"},o.a.createElement("span",null,"Transaction Type ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(p.a,{md:"6"},o.a.createElement(h.a,{options:$,value:{label:G,value:J},onChange:function(e){return t=e.label,a=e.value,B(t),void U(a);var t,a},name:"transactionTypeId",id:"transactionTypeId"}))),o.a.createElement(d.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"2"},o.a.createElement("span",null,"Amount ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(p.a,{md:"6"},o.a.createElement(m.a,{type:"number",defaultValue:null===j||void 0===j?void 0:j.amount,name:"amount",id:"amount"}))),o.a.createElement(d.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"2"},o.a.createElement("span",null,"Reference")),o.a.createElement(p.a,{md:"6"},o.a.createElement(m.a,{type:"text",defaultValue:null===j||void 0===j?void 0:j.reference,name:"reference",id:"reference"}))),o.a.createElement(d.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"2"},o.a.createElement("span",null,"Note")),o.a.createElement(p.a,{md:"6"},o.a.createElement(m.a,{type:"text",defaultValue:null===j||void 0===j?void 0:j.transactionNote,name:"transactionNote",id:"transactionNote"}))),o.a.createElement(d.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(p.a,{md:"8"},o.a.createElement("div",{style:{display:"flex",justifyContent:"end"}},o.a.createElement(v.a,{className:"",color:"primary",name:"Submit",type:"submit",disable:X}))))))))}}}]);
//# sourceMappingURL=191.33594276.chunk.js.map