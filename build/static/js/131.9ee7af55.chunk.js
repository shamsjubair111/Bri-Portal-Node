/*! For license information please see 131.9ee7af55.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[131],{251:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(100);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),o=e.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onClick:c,color:n,type:i,className:t}," ",a,o," "))}},254:function(e,t,a){"use strict";var n=a(10),l=a(3),r=a.n(l),i=a(103),c=a(101);function o(){o=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},l=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var l=t&&t.prototype instanceof d?t:d,r=Object.create(l.prototype),i=new x(n||[]);return r._invoke=function(e,t,a){var n="suspendedStart";return function(l,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===l)throw r;return k()}for(a.method=l,a.arg=r;;){var i=a.delegate;if(i){var c=y(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var o=u(e,t,a);if("normal"===o.type){if(n=a.done?"completed":"suspendedYield",o.arg===m)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n="completed",a.method="throw",a.arg=o.arg)}}}(e,a,i),r}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function d(){}function v(){}function p(){}var E={};c(E,l,(function(){return this}));var f=Object.getPrototypeOf,h=f&&f(f(O([])));h&&h!==t&&a.call(h,l)&&(E=h);var g=p.prototype=d.prototype=Object.create(E);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var n;this._invoke=function(l,r){function i(){return new t((function(n,i){!function n(l,r,i,c){var o=u(e[l],e,r);if("throw"!==o.type){var s=o.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(o.arg)}(l,r,n,i)}))}return n=n?n.then(i,i):i()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var l=n.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=p,c(g,"constructor",p),c(p,"constructor",v),v.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(N.prototype),c(N.prototype,r,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,n,l,r){void 0===r&&(r=Promise);var i=new N(s(t,a,n,l),r);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,l,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=a.call(r,"catchLoc"),o=a.call(r,"finallyLoc");if(c&&o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var l=n.arg;j(a)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function s(){return(s=Object(n.a)(o().mark((function e(t){var a,n,l,s=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:{},n=s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,r.a.put("".concat(c.a).concat(t),a,n||"");case 5:return l=e.sent,e.next=8,l;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===e.t0.response.status&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},309:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(32),i=a(100);t.a=function(e){var t=e.url,a=e.color,n=e.className,c=e.icon,o=(e.permission,e.name),s=e.func;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{to:t},l.a.createElement(i.a,{color:a,className:n,onClick:s},c," ",o)))}},468:function(e,t,a){e.exports=a.p+"static/media/user-07.c63e602a.jpg"},469:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.className,a=e.func,n=e.permission,r=[1,2,3,4,6];return l.a.createElement(l.a.Fragment,null,(null===r||void 0===r?void 0:r.includes(n))?l.a.createElement("div",{className:t,onClick:a},l.a.createElement("div",{className:"text-right"},l.a.createElement("span",null," ",l.a.createElement("i",{className:"fas fa-pencil-alt pencil-style"})," "))):null)}},483:function(e,t,a){e.exports=a.p+"static/media/cover.21a4037c.jpg"},794:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(0),r=a.n(l),i=a(33),c=a(487),o=(a(313),a(265)),s=a(252),u=a(275),m=a(277),d=a(306),v=a(256),p=a(260),E=a(737),f=(a(483),a(468)),h=a.n(f),g=a(102),b=a(101),N=a(254),y=a(469),w=a(309),j=a(251);t.default=function(){Object(i.h)();var e,t,a,f,x,O,k,S,L,C,I,T,_,P,A,M,R,D,U,G,F,B,q,Q,W,Y,H,J,V,z,K=Object(i.g)(),X=Object(i.i)().id,Z=Object(l.useState)({}),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ae=Object(l.useState)(""),ne=Object(n.a)(ae,2),le=ne[0],re=ne[1],ie=Object(l.useState)(1),ce=Object(n.a)(ie,2),oe=(ce[0],ce[1],Object(l.useState)([])),se=Object(n.a)(oe,2),ue=se[0],me=se[1],de=Object(l.useState)("Account Status"),ve=Object(n.a)(de,2),pe=ve[0],Ee=ve[1],fe=Object(l.useState)(0),he=Object(n.a)(fe,2),ge=he[0],be=he[1],Ne=Object(l.useState)(!1),ye=Object(n.a)(Ne,2),we=ye[0],je=ye[1],xe=Object(s.useToasts)().addToast;Object(l.useEffect)((function(){Object(g.a)("Consultant/Profile/".concat(X)).then((function(e){var t,a;console.log("Consultant Profile Data Check",e),te(e),Ee(null===e||void 0===e||null===(t=e.accountStatus)||void 0===t?void 0:t.statusName),be(null===e||void 0===e||null===(a=e.accountStatus)||void 0===a?void 0:a.id);var n=null===e||void 0===e?void 0:e.createdOn,l=new Date(n).toLocaleString("en-CA"),r=l.split(",")[0].replace("/","-");console.log(l),re(r.replace("/","-"))})),Object(g.a)("AccountStatusDD/index/".concat(localStorage.getItem("consultantRegisterId"))).then((function(e){me(e)}))}),[we]);var Oe=null===ue||void 0===ue?void 0:ue.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),ke=function(){localStorage.setItem("consultantRegisterId",X),K.push("/addBankDetails")};return r.a.createElement("div",null,r.a.createElement(u.a,{className:"uapp-card-bg"},r.a.createElement(m.a,{className:"page-header"},r.a.createElement("h3",{className:"text-light"},"Consultant profile"),r.a.createElement("div",{className:"page-header-back-to-home"},r.a.createElement("span",{onClick:function(){K.push("/consultantList")},className:"text-light"}," ",r.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Consultant List")))),r.a.createElement("div",{className:"uapp-employee-profile"},r.a.createElement(d.a,null,r.a.createElement(v.a,{md:"8"},r.a.createElement("div",{className:"uapp-employee-profile-left"},r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"uapp-employee-cover-image"},r.a.createElement("div",{className:"bg-image"},r.a.createElement("img",{src:b.a+(null===ee||void 0===ee||null===(e=ee.consultantCoverImageMedia)||void 0===e?void 0:e.fileUrl),alt:"cover_img"}),r.a.createElement("div",{className:"uplode-cover-image"},r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-camera"}," "))))),r.a.createElement("div",{className:"uapp-employee-profile-image-edit"},r.a.createElement(d.a,null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"uapp-employee-profile-image"},r.a.createElement("div",{className:"text-left"},r.a.createElement("img",{className:"empProfileImg",src:b.a+(null===ee||void 0===ee||null===(t=ee.consultantProfileImageMedia)||void 0===t?void 0:t.fileUrl),alt:"img-desc"})))),r.a.createElement(v.a,null,r.a.createElement(y.a,{className:"uapp-employee-profile-Edit",func:function(){localStorage.setItem("consultantRegisterId",X),K.push("/addConsultantInformation")},permission:6})))),r.a.createElement("div",{className:"uapp-employee-profile-generalInfo"},r.a.createElement(d.a,null,r.a.createElement(v.a,{md:"6"},r.a.createElement("ul",{className:"uapp-ul text-left"},r.a.createElement("li",null,r.a.createElement("h4",null,null===ee||void 0===ee||null===(a=ee.nameTitle)||void 0===a?void 0:a.name," ",null===ee||void 0===ee?void 0:ee.firstName," ",null===ee||void 0===ee?void 0:ee.lastName," (",null===ee||void 0===ee?void 0:ee.viewId,")")),r.a.createElement("li",null))),r.a.createElement(v.a,{md:"6"},r.a.createElement("ul",{className:"uapp-ul text-right"},r.a.createElement("div",{className:"d-flex justify-content-end mb-2"},r.a.createElement(o.a,{className:" w-50",options:Oe,value:{label:pe,value:ge},onChange:function(e){return function(e,t){Ee(e),be(t);var a={id:parseInt(X),accountStatusId:t};console.log("aaaaaaaaaaaa",a),Object(N.a)("Consultant/statuschange",a).then((function(e){var t;xe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),je(!we)}))}(e.label,e.value)},name:"consultantTypeId",id:"consultantTypeId"})),r.a.createElement("li",null,r.a.createElement("span",null," Email : ",null===ee||void 0===ee?void 0:ee.email)),r.a.createElement("li",null,r.a.createElement("span",null," Phone Number : ",null===ee||void 0===ee?void 0:ee.phoneNumber)))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"General Information"),"  "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement(E.a,{className:"table-bordered mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Title:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee||null===(f=ee.nameTitle)||void 0===f?void 0:f.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Name:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee?void 0:ee.firstName," ",null===ee||void 0===ee?void 0:ee.lastName)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Consultant Type:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee||null===(x=ee.consultantType)||void 0===x?void 0:x.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Branch:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee||null===(O=ee.branch)||void 0===O?void 0:O.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Account Status:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee||null===(k=ee.accountStatus)||void 0===k?void 0:k.statusName)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Residency Status: ")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee||null===(S=ee.residencyStatus)||void 0===S?void 0:S.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Visa Status: ")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee||null===(L=ee.visaStatus)||void 0===L?void 0:L.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Registration Date:")),r.a.createElement("td",{width:"60%"},le)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Have Right To Work:")),r.a.createElement("td",{width:"60%"},null==(null===ee||void 0===ee?void 0:ee.haveRightToWork)?"No":"Yes"))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Contact Information")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement(E.a,{className:"table-bordered mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("span",{className:"fw-bold"}," Phone Number:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee?void 0:ee.phoneNumber)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Email:")),r.a.createElement("td",{width:"60%"},null===ee||void 0===ee?void 0:ee.email))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(u.a,null,r.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("h5",null," ",r.a.createElement("b",null,"Bank Details")," "),r.a.createElement("div",{className:"bg-h"}))),r.a.createElement("div",{className:"row"},null===ee||void 0===ee||null===(C=ee.bankDetails)||void 0===C?void 0:C.map((function(e,t){return r.a.createElement("div",{className:"col-md-6 col-sm-12",key:t},r.a.createElement(u.a,null,r.a.createElement(p.a,{className:"consultant-card-shadow-style d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("b",null,"Account Name:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.accountName),r.a.createElement("br",null),r.a.createElement("b",null,"Account Number:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.accountNumber),r.a.createElement("br",null),r.a.createElement("b",null,"Bank Address:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.bankAddress),r.a.createElement("br",null),r.a.createElement("b",null,"Bank Name:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.bankName),r.a.createElement("br",null),r.a.createElement("b",null,"BIC:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.bic),r.a.createElement("br",null),r.a.createElement("b",null,"Sort Code:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.sortCode),r.a.createElement("br",null),r.a.createElement("b",null,"Swift:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.swift)),r.a.createElement("div",{className:"edit-style"},r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-pencil-alt pencil-style",onClick:ke})," ")))))}))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(u.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Document")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(u.a,{className:"shadow-lg"},r.a.createElement(p.a,null,r.a.createElement(c.a,{width:180,height:104,src:b.a+(null===ee||void 0===ee||null===(I=ee.idOrPassportMedia)||void 0===I?void 0:I.fileUrl)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"fw-bold"},"Id or Passport")))),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(u.a,{className:"shadow-lg"},r.a.createElement(p.a,null,r.a.createElement(c.a,{width:180,height:104,src:b.a+(null===ee||void 0===ee||null===(T=ee.proofOfAddressMedia)||void 0===T?void 0:T.fileUrl)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"fw-bold"},"Proof of Address")))),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(u.a,{className:"shadow-lg"},r.a.createElement(p.a,null,r.a.createElement(c.a,{width:180,height:104,src:b.a+(null===ee||void 0===ee||null===(_=ee.proofOfRightToWorkMedia)||void 0===_?void 0:_.fileUrl)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"fw-bold"},"Proof of Right to Work"))))))))),r.a.createElement(v.a,{md:"4"},r.a.createElement(u.a,{className:"uapp-employee-profile-right"},r.a.createElement("div",{className:"uapp-profile-CardHeader"},r.a.createElement("div",{className:"uapp-circle-image margin-top-minus"},null==(null===ee||void 0===ee||null===(P=ee.parentConsultant)||void 0===P?void 0:P.consultantProfileImageMedia)?r.a.createElement("img",{src:h.a,alt:"profile_img"}):r.a.createElement("img",{src:b.a+(null===ee||void 0===ee||null===(A=ee.parentConsultant)||void 0===A||null===(M=A.consultantProfileImageMedia)||void 0===M?void 0:M.fileUrl),alt:"profile_img"})),r.a.createElement("h5",null,null===ee||void 0===ee||null===(R=ee.parentConsultant)||void 0===R||null===(D=R.nameTitle)||void 0===D?void 0:D.name," ",null===ee||void 0===ee||null===(U=ee.parentConsultant)||void 0===U?void 0:U.firstName," ",null===ee||void 0===ee||null===(G=ee.parentConsultant)||void 0===G?void 0:G.lastName," "),r.a.createElement("p",null," ",null===ee||void 0===ee||null===(F=ee.parentConsultant)||void 0===F||null===(B=F.consultantType)||void 0===B?void 0:B.name," ")),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("ul",{className:"uapp-ul text-center"},r.a.createElement("li",null," ",null===ee||void 0===ee||null===(q=ee.parentConsultant)||void 0===q||null===(Q=q.accountStatus)||void 0===Q?void 0:Q.statusName," "),r.a.createElement("li",null," ",null===ee||void 0===ee||null===(W=ee.parentConsultant)||void 0===W||null===(Y=W.branch)||void 0===Y?void 0:Y.name," "),r.a.createElement("li",null," ",null===ee||void 0===ee||null===(H=ee.parentConsultant)||void 0===H?void 0:H.email," "),r.a.createElement("li",null," ",null===ee||void 0===ee||null===(J=ee.parentConsultant)||void 0===J?void 0:J.phoneNumber," "))))),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"hedding-titel mb-3"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Important Notice")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(w.a,{url:"/studentList/".concat(null===ee||void 0===ee||null===(V=ee.consultantType)||void 0===V?void 0:V.id,"/").concat(null===ee||void 0===ee||null===(z=ee.consultantType)||void 0===z?void 0:z.name),className:"btn btn-uapp-add ",name:"Student",permission:6}),r.a.createElement(j.a,{className:"btn btn-uapp-add ",name:"Application",permission:6}),r.a.createElement(j.a,{className:"btn btn-uapp-add ",name:"Transaction",permission:6})))),r.a.createElement(u.a,{className:"p-3"},r.a.createElement("h6",null," Notice"),r.a.createElement("span",{className:"bg-wg bg-width"}),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))))))))}}}]);
//# sourceMappingURL=131.9ee7af55.chunk.js.map