/*! For license information please see 105.f50d1e52.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[105],{251:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(100);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:n,type:i,className:t}," ",a,l," "))}},253:function(e,t,a){"use strict";var n=a(10),r=a(3),o=a.n(r),i=a(103),c=a(101);function l(){l=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new N(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return S()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=j(i,a);if(c){if(c===f)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var f={};function d(){}function m(){}function p(){}var h={};c(h,r,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==t&&a.call(b,r)&&(h=b);var g=p.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function j(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,c(g,"constructor",p),c(p,"constructor",m),m.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),f}},e}function s(){return(s=Object(n.a)(l().mark((function e(t){var a,n,r,s,u=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),a,n||"");case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},256:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),l=a.n(c),s=a(6),u=a.n(s),f=a(5),d=["className","cssModule","widths","tag"],m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),h={tag:f.t,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,l=Object(r.a)(e,d),s=[];o.forEach((function(t,n){var r=e[t];if(delete l[t],r||""===r){var o=!n;if(Object(f.n)(r)){var i,c=o?"-":"-"+t+"-",d=b(o,t,r.size);s.push(Object(f.p)(u()(((i={})[d]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i)),a))}else{var m=b(o,t,r);s.push(m)}}})),s.length||s.push("col");var m=Object(f.p)(u()(t,s),a);return i.a.createElement(c,Object(n.a)({},l,{className:m}))};g.propTypes=h,g.defaultProps=v,t.a=g},260:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),l=a.n(c),s=a(6),u=a.n(s),f=a(5),d=["className","cssModule","innerRef","tag"],m={tag:f.t,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,c=e.tag,l=Object(r.a)(e,d),s=Object(f.p)(u()(t,"card-body"),a);return i.a.createElement(c,Object(n.a)({},l,{className:s,ref:o}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},262:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(15),i=a(12),c=a(0),l=a.n(c),s=a(1),u=a.n(s),f=a(6),d=a.n(f),m=a(5),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,f=e.addon,h=e.plaintext,v=e.innerRef,b=Object(r.a)(e,p),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),j="form-control";h?(j+="-plaintext",E=u||"input"):"file"===o?j+="-file":"range"===o?j+="-range":g&&(j=f?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(m.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var O=Object(m.p)(d()(t,s&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,j),a);return("input"===E||u&&"function"===typeof u)&&(b.type=o),b.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(m.v)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(E,Object(n.a)({},b,{ref:v,className:O,"aria-invalid":s}))},t}(l.a.Component);v.propTypes=h,v.defaultProps={type:"text"},t.a=v},276:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),l=a.n(c),s=a(6),u=a.n(s),f=a(5),d=["className","cssModule","row","disabled","check","inline","tag"],m={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:f.t,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.row,c=e.disabled,l=e.check,s=e.inline,m=e.tag,p=Object(r.a)(e,d),h=Object(f.p)(u()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!s)&&"form-check-inline",!(!l||!c)&&"disabled"),a);return"fieldset"===m&&(p.disabled=c),i.a.createElement(m,Object(n.a)({},p,{className:h}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},278:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(15),i=a(12),c=a(0),l=a.n(c),s=a(1),u=a.n(s),f=a(6),d=a.n(f),m=a(5),p=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:m.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,s=Object(r.a)(e,p),u=Object(m.p)(d()(t,!!o&&"form-inline"),a);return l.a.createElement(i,Object(n.a)({},s,{ref:c,className:u}))},t}(c.Component);v.propTypes=h,v.defaultProps={tag:"form"},t.a=v},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(68);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}},795:function(e,t,a){"use strict";a.r(t);var n=a(282),r=a(29),o=(a(3),a(0)),i=a.n(o),c=(a(25),a(33)),l=a(265),s=a(252),u=a(275),f=a(277),d=a(260),m=a(278),p=a(276),h=a(256),v=a(262),b=(a(101),a(102)),g=a(253),y=a(251);t.default=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),a=t[0],E=t[1],j=Object(o.useState)([]),O=Object(r.a)(j,2),w=O[0],N=O[1],x=Object(o.useState)([]),S=Object(r.a)(x,2),L=S[0],T=S[1],C=Object(o.useState)("Select Title"),k=Object(r.a)(C,2),R=k[0],P=k[1],_=Object(o.useState)(0),z=Object(r.a)(_,2),I=z[0],M=z[1],D=Object(o.useState)("Select Parent Consultant"),F=Object(r.a)(D,2),G=F[0],q=F[1],A=Object(o.useState)(0),B=Object(r.a)(A,2),J=B[0],Y=B[1],V=Object(o.useState)("Select Consultant Type"),H=Object(r.a)(V,2),K=H[0],Q=H[1],U=Object(o.useState)(0),W=Object(r.a)(U,2),X=W[0],Z=W[1],$=Object(o.useState)(!0),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ne=Object(o.useState)(!1),re=Object(r.a)(ne,2),oe=re[0],ie=re[1],ce=Object(o.useState)(!1),le=Object(r.a)(ce,2),se=le[0],ue=le[1],fe=Object(o.useState)(!1),de=Object(r.a)(fe,2),me=de[0],pe=de[1],he=Object(c.g)(),ve=Object(s.useToasts)().addToast;Object(o.useEffect)((function(){Object(b.a)("NameTittleDD/index").then((function(e){E(e)})),Object(b.a)("ConsultantDD/index").then((function(e){N(e)})),Object(b.a)("ConsultantTypeDD/index").then((function(e){T(e)}))}),[]);var be=null===a||void 0===a?void 0:a.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),ge=null===w||void 0===w?void 0:w.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),ye=null===L||void 0===L?void 0:L.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}}));return i.a.createElement("div",null,i.a.createElement(u.a,{className:"uapp-card-bg"},i.a.createElement(f.a,{className:"page-header"},i.a.createElement("h3",{className:"text-light"},"Consultant Registration"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{className:"text-light",onClick:function(){he.push("/consultantList")}}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Consultant List")))),i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);if(0==I&&pe(!0),0==J&&ue(!0),0==X)ie(!0);else{var a,r=Object(n.a)(t);try{for(r.s();!(a=r.n()).done;){var o=a.value;console.log(o)}}catch(i){r.e(i)}finally{r.f()}Object(g.a)("Consultant/Register",t).then((function(e){var t,a,n;(console.log("consultant",e),ve(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),200===e.status&&!0===e.data.isSuccess)&&(localStorage.setItem("consultantRegisterId",null===e||void 0===e||null===(a=e.data)||void 0===a||null===(n=a.result)||void 0===n?void 0:n.id),he.push("/consultantInformation"))}))}},className:"mt-5"},i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Consultant Type ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(l.a,{options:ye,value:{label:K,value:X},onChange:function(e){return t=e.label,a=e.value,ie(!1),Q(t),void Z(a);var t,a},name:"consultantTypeId",id:"consultantTypeId"}),oe&&i.a.createElement("span",{className:"text-danger"},"Select Consultant Type"))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Parent Consultant ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(l.a,{options:ge,value:{label:G,value:J},onChange:function(e){return t=e.label,a=e.value,ue(!1),q(t),void Y(a);var t,a},name:"parentConsultantId",id:"parentConsultantId"}),se&&i.a.createElement("span",{className:"text-danger"},"Select Parent Consultant"))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Title ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(l.a,{options:be,value:{label:R,value:I},onChange:function(e){return t=e.label,a=e.value,pe(!1),P(t),void M(a);var t,a},name:"nameTittleId",id:"nameTittleId"}),me&&i.a.createElement("span",{className:"text-danger"},"Select Name Title"))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"First Name ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(v.a,{type:"text",name:"firstName",id:"firstName",placeholder:"Enter First Name",required:!0}))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Last Name ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(v.a,{type:"text",name:"lastName",id:"lastName",placeholder:"Enter Last Name",required:!0}))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Email ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(v.a,{type:"email",name:"email",id:"email",placeholder:"Enter Email",required:!0,onBlur:function(e){console.log(e.target.value),Object(b.a)("Consultant/OnChangeEmail/".concat(e.target.value)).then((function(e){console.log("Checking Response",e),ae(e)}))}}),te?null:i.a.createElement("span",{className:"text-danger"},"Email Already Exists"))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Phone Number  ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(v.a,{type:"text",name:"phoneNumber",id:"phoneNumber",placeholder:"Enter Phone Number",required:!0}))),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(h.a,{md:"2"},i.a.createElement("span",null,"Password ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(h.a,{md:"6"},i.a.createElement(v.a,{type:"password",name:"password",id:"password",placeholder:"Enter Password",required:!0}))),i.a.createElement(p.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),i.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(h.a,{md:"5"},i.a.createElement(y.a,{type:"submit",className:"mr-1 mt-3 badge-primary",name:"Submit",permission:6})))))))}}}]);
//# sourceMappingURL=105.f50d1e52.chunk.js.map