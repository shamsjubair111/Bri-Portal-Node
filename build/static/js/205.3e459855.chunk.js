/*! For license information please see 205.3e459855.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[205],{252:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(97);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),o=e.name,u=e.disable;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onClick:c,color:n,type:i,className:t,disabled:u}," ",a,o," "))}},255:function(e,t,a){"use strict";var n=a(9),l=a(3),r=a.n(l),i=(a(152),a(29));function c(){c=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},l=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(S){o=function(e,t,a){return e[t]=a}}function u(e,t,a,n){var l=t&&t.prototype instanceof d?t:d,r=Object.create(l.prototype),i=new j(n||[]);return r._invoke=function(e,t,a){var n="suspendedStart";return function(l,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===l)throw r;return C()}for(a.method=l,a.arg=r;;){var i=a.delegate;if(i){var c=y(i,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var o=m(e,t,a);if("normal"===o.type){if(n=a.done?"completed":"suspendedYield",o.arg===s)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n="completed",a.method="throw",a.arg=o.arg)}}}(e,a,i),r}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var s={};function d(){}function v(){}function E(){}var p={};o(p,l,(function(){return this}));var h=Object.getPrototypeOf,f=h&&h(h(O([])));f&&f!==t&&a.call(f,l)&&(p=f);var g=E.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var n;this._invoke=function(l,r){function i(){return new t((function(n,i){!function n(l,r,i,c){var o=m(e[l],e,r);if("throw"!==o.type){var u=o.arg,s=u.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(o.arg)}(l,r,n,i)}))}return n=n?n.then(i,i):i()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=m(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var l=n.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=E,o(g,"constructor",E),o(E,"constructor",v),v.displayName=o(E,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,o(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(N.prototype),o(N.prototype,r,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,n,l,r){void 0===r&&(r=Promise);var i=new N(u(t,a,n,l),r);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),o(g,i,"Generator"),o(g,l,(function(){return this})),o(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=a.call(r,"catchLoc"),o=a.call(r,"finallyLoc");if(c&&o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var l=n.arg;x(a)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}var o=localStorage.getItem("token");function u(){return(u=Object(n.a)(c().mark((function e(t){var a,n,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},l.length>2&&void 0!==l[2]?l[2]:"",e.prev=2,e.next=5,r.a.put("".concat(i.a).concat(t),a,{headers:{authorization:o}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},318:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(36),i=a(97);t.a=function(e){var t=e.url,a=e.color,n=e.className,c=e.icon,o=(e.permission,e.name),u=e.func,m=e.target,s=e.activeStyle;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{to:t,activeStyle:s,target:m},l.a.createElement(i.a,{color:a,className:n,onClick:u},c," ",o)))}},392:function(e,t,a){e.exports=a.p+"static/media/user-07.c63e602a.jpg"},393:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.className,a=e.func;e.permission;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t,onClick:a},l.a.createElement("div",{className:"text-right"},l.a.createElement("span",null," ",l.a.createElement("i",{className:"fas fa-pencil-alt pencil-style"})," "))))}},477:function(e,t,a){e.exports=a.p+"static/media/cover.21a4037c.jpg"},834:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(0),r=a.n(l),i=a(37),c=a(384),o=a(269),u=a(256),m=a(296),s=a(265),d=a(326),v=a(268),E=a(259),p=a(767),h=(a(477),a(392)),f=a.n(h),g=a(99),b=a(29),N=a(255),y=a(393),w=a(318),x=a(252),j=a(14);t.default=function(){Object(i.h)();var e,t,a,h,O,C,S,k,L,A,I,T,P,_,G,R,M,D,F,U,B,q,Q,W,H,Y,J,z,V,K,X=Object(i.g)(),Z=Object(i.i)().id,$=localStorage.getItem("userType"),ee=Object(l.useState)({}),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],le=Object(l.useState)(""),re=Object(n.a)(le,2),ie=re[0],ce=re[1],oe=Object(l.useState)(1),ue=Object(n.a)(oe,2),me=(ue[0],ue[1],Object(l.useState)([])),se=Object(n.a)(me,2),de=se[0],ve=se[1],Ee=Object(l.useState)("Account Status"),pe=Object(n.a)(Ee,2),he=pe[0],fe=pe[1],ge=Object(l.useState)(0),be=Object(n.a)(ge,2),Ne=be[0],ye=be[1],we=Object(l.useState)([]),xe=Object(n.a)(we,2),je=xe[0],Oe=xe[1],Ce=Object(l.useState)([]),Se=Object(n.a)(Ce,2),ke=Se[0],Le=Se[1],Ae=Object(l.useState)(!1),Ie=Object(n.a)(Ae,2),Te=Ie[0],Pe=Ie[1],_e=Object(u.useToasts)().addToast;Object(l.useEffect)((function(){Object(g.a)("Consultant/Profile/".concat(Z)).then((function(e){var t,a;console.log("Consultant Profile Data Check",e),ne(e),fe(null===e||void 0===e||null===(t=e.accountStatus)||void 0===t?void 0:t.statusName),ye(null===e||void 0===e||null===(a=e.accountStatus)||void 0===a?void 0:a.id);var n=null===e||void 0===e?void 0:e.createdOn,l=new Date(n).toLocaleString("en-CA"),r=l.split(",")[0].replace("/","-");console.log(l),ce(r.replace("/","-"))})),Object(g.a)("AccountStatusDD/index/".concat(Z)).then((function(e){ve(e)})),Object(g.a)("GroupPriceRange/ByConsultant/".concat(Z)).then((function(e){console.log("priceList",e),Oe(e)})),Object(g.a)("ConsultantCommissionGroup/Index/".concat(Z)).then((function(e){console.log("consultantCommissionList",e),Le(e)}))}),[Te,Z]);var Ge=null===de||void 0===de?void 0:de.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Re=function(){X.push("/consultantBankDetails/".concat(Z))},Me=function(e){return new Date(e).toLocaleString("en-CA").split(",")[0]};return r.a.createElement("div",null,r.a.createElement(m.a,{className:"uapp-card-bg"},r.a.createElement(s.a,{className:"page-header"},r.a.createElement("h3",{className:"text-white"},"Consultant Profile"),$!=(null===j.a||void 0===j.a?void 0:j.a.Consultant)?r.a.createElement("div",{className:"page-header-back-to-home"},r.a.createElement("span",{onClick:function(){X.push("/consultantList")},className:"text-white"}," ",r.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Consultant List")):null)),r.a.createElement("div",{className:"uapp-employee-profile"},r.a.createElement(d.a,null,r.a.createElement(v.a,{md:"8"},r.a.createElement("div",{className:"uapp-employee-profile-left"},r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"uapp-employee-cover-image"},r.a.createElement("div",{className:"bg-image"},r.a.createElement("img",{src:b.a+(null===ae||void 0===ae||null===(e=ae.consultantCoverImageMedia)||void 0===e?void 0:e.fileUrl),alt:"cover_img"}),r.a.createElement("div",{className:"uplode-cover-image"},r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-camera"}," "))))),r.a.createElement("div",{className:"uapp-employee-profile-image-edit"},r.a.createElement(d.a,null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"uapp-employee-profile-image"},r.a.createElement("div",{className:"text-left"},r.a.createElement("img",{className:"empProfileImg",src:b.a+(null===ae||void 0===ae||null===(t=ae.consultantProfileImageMedia)||void 0===t?void 0:t.fileUrl),alt:"img-desc"})))),r.a.createElement(v.a,null,r.a.createElement(y.a,{className:"uapp-employee-profile-Edit",func:function(){X.push("/consultantInformation/".concat(Z))},permission:6})))),r.a.createElement("div",{className:"uapp-employee-profile-generalInfo"},r.a.createElement(d.a,null,r.a.createElement(v.a,{md:"6"},r.a.createElement("ul",{className:"uapp-ul text-left"},r.a.createElement("li",null,r.a.createElement("h4",null,null===ae||void 0===ae||null===(a=ae.nameTitle)||void 0===a?void 0:a.name," ",null===ae||void 0===ae?void 0:ae.firstName," ",null===ae||void 0===ae?void 0:ae.lastName," (",null===ae||void 0===ae?void 0:ae.viewId,")")),r.a.createElement("li",null))),r.a.createElement(v.a,{md:"6"},r.a.createElement("ul",{className:"uapp-ul text-right"},r.a.createElement("div",{className:"d-flex justify-content-end mb-2"},r.a.createElement(o.a,{className:" w-50",options:Ge,value:{label:he,value:Ne},onChange:function(e){return function(e,t){fe(e),ye(t);var a={id:parseInt(Z),accountStatusId:t};console.log("aaaaaaaaaaaa",a),Object(N.a)("Consultant/statuschange",a).then((function(e){var t;_e(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),Pe(!Te)}))}(e.label,e.value)},name:"consultantTypeId",id:"consultantTypeId"})),r.a.createElement("li",null,r.a.createElement("span",null," Email : ",null===ae||void 0===ae?void 0:ae.email)),r.a.createElement("li",null,r.a.createElement("span",null," Phone Number : ",null===ae||void 0===ae?void 0:ae.phoneNumber)))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"General Information"),"  "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement(p.a,{className:"table-bordered mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Title:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae||null===(h=ae.nameTitle)||void 0===h?void 0:h.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Name:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae?void 0:ae.firstName," ",null===ae||void 0===ae?void 0:ae.lastName)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Consultant Type:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae||null===(O=ae.consultantType)||void 0===O?void 0:O.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Branch:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae||null===(C=ae.branch)||void 0===C?void 0:C.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Account Status:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae||null===(S=ae.accountStatus)||void 0===S?void 0:S.statusName)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Residency Status: ")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae||null===(k=ae.residencyStatus)||void 0===k?void 0:k.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Visa Status: ")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae||null===(L=ae.visaStatus)||void 0===L?void 0:L.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Registration Date:")),r.a.createElement("td",{width:"60%"},ie)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Have Right To Work:")),r.a.createElement("td",{width:"60%"},null==(null===ae||void 0===ae?void 0:ae.haveRightToWork)?"No":"Yes"))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Contact Information")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement(p.a,{className:"table-bordered mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null," Phone Number:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae?void 0:ae.phoneNumber)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Email:")),r.a.createElement("td",{width:"60%"},null===ae||void 0===ae?void 0:ae.email))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("h5",null," ",r.a.createElement("b",null,"Bank Details")," "),r.a.createElement("div",{className:"bg-h"}))),r.a.createElement("div",{className:"row"},null===ae||void 0===ae||null===(A=ae.bankDetails)||void 0===A?void 0:A.map((function(e,t){return r.a.createElement("div",{className:"col-md-6 col-sm-12",key:t},r.a.createElement(m.a,null,r.a.createElement(E.a,{className:"consultant-card-shadow-style d-flex justify-content-between"},r.a.createElement("div",{className:"p-3"},r.a.createElement("b",null,"Account Name:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.accountName),r.a.createElement("br",null),r.a.createElement("b",null,"Account Number:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.accountNumber),r.a.createElement("br",null),r.a.createElement("b",null,"Bank Address:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.bankAddress),r.a.createElement("br",null),r.a.createElement("b",null,"Bank Name:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.bankName),r.a.createElement("br",null),r.a.createElement("b",null,"BIC:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.bic),r.a.createElement("br",null),r.a.createElement("b",null,"Sort Code:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.sortCode),r.a.createElement("br",null),r.a.createElement("b",null,"Swift:")," ",r.a.createElement("span",null,null===e||void 0===e?void 0:e.swift)),r.a.createElement("div",{className:"edit-style mt-md-3"},r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-pencil-alt pencil-style",onClick:Re})," ")))))}))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("h5",null," ",r.a.createElement("b",null,"Current Commission Group ",je.length>0?r.a.createElement(r.a.Fragment,null,":"," ",null===(I=je[0])||void 0===I||null===(T=I.commissionGroup)||void 0===T?void 0:T.name):null)," "),r.a.createElement("div",{className:"bg-h"}))),je.length<1?r.a.createElement("p",{className:"mt-4"},"There is no data available here."):r.a.createElement("div",{className:"table-responsive container mt-4"},r.a.createElement(p.a,{id:"table-to-xls"},r.a.createElement("thead",null,r.a.createElement("tr",{style:{textAlign:"center"}},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Price Range"),r.a.createElement("th",null,"Range From"),r.a.createElement("th",null,"Range To"),r.a.createElement("th",null,"Commission Amount"))),r.a.createElement("tbody",null,null===je||void 0===je?void 0:je.map((function(e,t){return r.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},r.a.createElement("th",{scope:"row"},1+t),r.a.createElement("td",null,null===e||void 0===e?void 0:e.priceRangeName),r.a.createElement("td",null,null===e||void 0===e?void 0:e.rangeFrom),r.a.createElement("td",null,null===e||void 0===e?void 0:e.rangeTo),r.a.createElement("td",null,null===e||void 0===e?void 0:e.commissionAmount))}))))))),ke.length>1?r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("h5",null," ",r.a.createElement("b",null,"Consultant Commission Group History")," "),r.a.createElement("div",{className:"bg-h"}))),r.a.createElement("span",{className:"ml-3 mt-3"},r.a.createElement("b",null,"Assigned Commission Groups")),r.a.createElement("div",{className:"table-responsive container mt-2"},r.a.createElement(p.a,{id:"table-to-xls"},r.a.createElement("thead",null,r.a.createElement("tr",{style:{textAlign:"center"}},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Applications"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Date Range"))),r.a.createElement("tbody",null,null===ke||void 0===ke?void 0:ke.map((function(e,t){var a;return r.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id,style:{textAlign:"center"}},r.a.createElement("th",{scope:"row"},1+t),r.a.createElement("td",null,null===e||void 0===e||null===(a=e.commissionGroup)||void 0===a?void 0:a.name),r.a.createElement("td",null,null===e||void 0===e?void 0:e.applicationCount),r.a.createElement("td",null,0==(null===e||void 0===e?void 0:e.isActive)?"Deactivated":"Active"),r.a.createElement("td",null,Me(null===e||void 0===e?void 0:e.createdOn)," to ",Me(null===e||void 0===e?void 0:e.updatedOn)))}))))))):null,r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Documents")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(m.a,{className:"shadow-lg"},r.a.createElement(E.a,null,r.a.createElement(c.a,{width:180,height:104,src:b.a+(null===ae||void 0===ae||null===(P=ae.idOrPassportMedia)||void 0===P?void 0:P.fileUrl)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Id or Passport")))),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(m.a,{className:"shadow-lg"},r.a.createElement(E.a,null,r.a.createElement(c.a,{width:180,height:104,src:b.a+(null===ae||void 0===ae||null===(_=ae.proofOfAddressMedia)||void 0===_?void 0:_.fileUrl)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Proof of Address")))),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(m.a,{className:"shadow-lg"},r.a.createElement(E.a,null,r.a.createElement(c.a,{width:180,height:104,src:b.a+(null===ae||void 0===ae||null===(G=ae.proofOfRightToWorkMedia)||void 0===G?void 0:G.fileUrl)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Proof of Right to Work"))))))))),r.a.createElement(v.a,{md:"4"},r.a.createElement(m.a,{className:"uapp-employee-profile-right"},r.a.createElement("div",{className:"uapp-profile-CardHeader"},r.a.createElement("div",{className:"uapp-circle-image margin-top-minus"},null==(null===ae||void 0===ae||null===(R=ae.parentConsultant)||void 0===R?void 0:R.consultantProfileImageMedia)?r.a.createElement("img",{src:f.a,alt:"profile_img"}):r.a.createElement("img",{src:b.a+(null===ae||void 0===ae||null===(M=ae.parentConsultant)||void 0===M||null===(D=M.consultantProfileImageMedia)||void 0===D?void 0:D.fileUrl),alt:"profile_img"})),r.a.createElement("h5",null,null===ae||void 0===ae||null===(F=ae.parentConsultant)||void 0===F||null===(U=F.nameTitle)||void 0===U?void 0:U.name," ",null===ae||void 0===ae||null===(B=ae.parentConsultant)||void 0===B?void 0:B.firstName," ",null===ae||void 0===ae||null===(q=ae.parentConsultant)||void 0===q?void 0:q.lastName," "),r.a.createElement("p",null," ",null===ae||void 0===ae||null===(Q=ae.parentConsultant)||void 0===Q||null===(W=Q.consultantType)||void 0===W?void 0:W.name," ")),r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("ul",{className:"uapp-ul text-center"},r.a.createElement("li",null," ",null===ae||void 0===ae||null===(H=ae.parentConsultant)||void 0===H||null===(Y=H.accountStatus)||void 0===Y?void 0:Y.statusName," "),r.a.createElement("li",null," ",null===ae||void 0===ae||null===(J=ae.parentConsultant)||void 0===J||null===(z=J.branch)||void 0===z?void 0:z.name," "),r.a.createElement("li",null," ",null===ae||void 0===ae||null===(V=ae.parentConsultant)||void 0===V?void 0:V.email," "),r.a.createElement("li",null," ",null===ae||void 0===ae||null===(K=ae.parentConsultant)||void 0===K?void 0:K.phoneNumber," "))))),r.a.createElement(m.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"hedding-titel mb-3"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Important Notice")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(w.a,{url:"/studentListByConsultant/".concat(Z),className:"btn btn-uapp-add ",name:"Student",permission:6}),r.a.createElement(x.a,{func:function(){return e=Z,void X.push({pathname:"/applications",consultantIdFromConsultantList:e});var e},className:"btn btn-uapp-add ",name:"Application",permission:6}),r.a.createElement(x.a,{className:"btn btn-uapp-add ",name:"Transaction",permission:6})))),r.a.createElement(m.a,{className:"p-3"},r.a.createElement("h6",null," Notice"),r.a.createElement("span",{className:"bg-wg bg-width"}),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),r.a.createElement("div",{className:"notice-item card-widget mt-3 "},r.a.createElement("div",{className:"notice-titel"},r.a.createElement("h6",null," Super Admin"),r.a.createElement("span",null," 10/12/2021")),r.a.createElement("div",{className:"notice-description"},r.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),r.a.createElement("div",{className:"uapp-read-more-btn"},r.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",r.a.createElement("span",null," ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))))))))}}}]);
//# sourceMappingURL=205.3e459855.chunk.js.map