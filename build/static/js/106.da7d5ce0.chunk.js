/*! For license information please see 106.da7d5ce0.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[106],{251:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(100);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),o=(e.url,e.func),c=e.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onClick:o,color:n,type:i,className:t}," ",a,c," "))}},256:function(e,t,a){"use strict";var n=a(7),l=a(11),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(6),d=a.n(s),m=a(5),u=["className","cssModule","widths","tag"],v=c.a.oneOfType([c.a.number,c.a.string]),E=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:v,offset:v})]),p={tag:m.t,xs:E,sm:E,md:E,lg:E,xl:E,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,c=Object(l.a)(e,u),s=[];r.forEach((function(t,n){var l=e[t];if(delete c[t],l||""===l){var r=!n;if(Object(m.n)(l)){var i,o=r?"-":"-"+t+"-",u=h(r,t,l.size);s.push(Object(m.p)(d()(((i={})[u]=l.size||""===l.size,i["order"+o+l.order]=l.order||0===l.order,i["offset"+o+l.offset]=l.offset||0===l.offset,i)),a))}else{var v=h(r,t,l);s.push(v)}}})),s.length||s.push("col");var v=Object(m.p)(d()(t,s),a);return i.a.createElement(o,Object(n.a)({},c,{className:v}))};g.propTypes=p,g.defaultProps=f,t.a=g},275:function(e,t,a){"use strict";var n=a(7),l=a(11),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(6),d=a.n(s),m=a(5),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],v={tag:m.t,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.body,c=e.inverse,s=e.outline,v=e.tag,E=e.innerRef,p=Object(l.a)(e,u),f=Object(m.p)(d()(t,"card",!!c&&"text-white",!!o&&"card-body",!!r&&(s?"border":"bg")+"-"+r),a);return i.a.createElement(v,Object(n.a)({},p,{className:f,ref:E}))};E.propTypes=v,E.defaultProps={tag:"div"},t.a=E},277:function(e,t,a){"use strict";var n=a(7),l=a(11),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(6),d=a.n(s),m=a(5),u=["className","cssModule","tag"],v={tag:m.t,className:c.a.string,cssModule:c.a.object},E=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(l.a)(e,u),c=Object(m.p)(d()(t,"card-header"),a);return i.a.createElement(r,Object(n.a)({},o,{className:c}))};E.propTypes=v,E.defaultProps={tag:"div"},t.a=E},309:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(32),i=a(100);t.a=function(e){var t=e.url,a=e.color,n=e.className,o=e.icon,c=(e.permission,e.name),s=e.func;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{to:t},l.a.createElement(i.a,{color:a,className:n,onClick:s},o," ",c)))}},468:function(e,t,a){e.exports=a.p+"static/media/user-07.c63e602a.jpg"},469:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.className,a=e.func,n=e.permission,r=[1,2,3,4,6];return l.a.createElement(l.a.Fragment,null,(null===r||void 0===r?void 0:r.includes(n))?l.a.createElement("div",{className:t,onClick:a},l.a.createElement("div",{className:"text-right"},l.a.createElement("span",null," ",l.a.createElement("i",{className:"fas fa-pencil-alt pencil-style"})," "))):null)}},483:function(e,t,a){e.exports=a.p+"static/media/cover.21a4037c.jpg"},840:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(29),r=a(0),i=a.n(r),o=a(33),c=a(275),s=a(277),d=a(306),m=a(256),u=a(260),v=a(737),E=a(100),p=a(102),f=a(483),h=a.n(f),g=(a(468),a(385)),y=a.n(g),b=a(101),N=a(469),w=a(251),S=(a(309),a(3)),I=a.n(S);function x(){x=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},l=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(O){o=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var l=t&&t.prototype instanceof m?t:m,r=Object.create(l.prototype),i=new S(n||[]);return r._invoke=function(e,t,a){var n="suspendedStart";return function(l,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===l)throw r;return j()}for(a.method=l,a.arg=r;;){var i=a.delegate;if(i){var o=b(i,a);if(o){if(o===d)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=s(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),r}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=c;var d={};function m(){}function u(){}function v(){}var E={};o(E,l,(function(){return this}));var p=Object.getPrototypeOf,f=p&&p(p(I([])));f&&f!==t&&a.call(f,l)&&(E=f);var h=v.prototype=m.prototype=Object.create(E);function g(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var n;this._invoke=function(l,r){function i(){return new t((function(n,i){!function n(l,r,i,o){var c=s(e[l],e,r);if("throw"!==c.type){var d=c.arg,m=d.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,o)}),(function(e){n("throw",e,i,o)})):t.resolve(m).then((function(e){d.value=e,i(d)}),(function(e){return n("throw",e,i,o)}))}o(c.arg)}(l,r,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var l=n.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function I(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return u.prototype=v,o(h,"constructor",v),o(v,"constructor",u),u.displayName=o(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},g(y.prototype),o(y.prototype,r,(function(){return this})),e.AsyncIterator=y,e.async=function(t,a,n,l,r){void 0===r&&(r=Promise);var i=new y(c(t,a,n,l),r);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(h),o(h,i,"Generator"),o(h,l,(function(){return this})),o(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=I,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var o=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(o&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var l=n.arg;w(a)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:I(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e,t,a,f,g,S,j,O,T,k,C,L,R,P,A,D,_=Object(r.useState)({}),M=Object(l.a)(_,2),G=M[0],U=M[1],F=Object(r.useState)(""),q=Object(l.a)(F,2),Q=q[0],W=q[1],Y=Object(r.useState)(!1),V=Object(l.a)(Y,2),z=V[0],H=V[1],B=Object(r.useState)(!1),J=Object(l.a)(B,2),X=J[0],Z=J[1],K=Object(r.useState)([]),$=Object(l.a)(K,2),ee=$[0],te=$[1],ae=Object(r.useState)(1),ne=Object(l.a)(ae,2),le=ne[0],re=(ne[1],Object(r.useState)({})),ie=Object(l.a)(re,2),oe=ie[0],ce=ie[1],se=Object(r.useState)({}),de=Object(l.a)(se,2),me=de[0],ue=de[1],ve=Object(r.useState)([]),Ee=Object(l.a)(ve,2),pe=(Ee[0],Ee[1]),fe=Object(r.useState)([]),he=Object(l.a)(fe,2),ge=he[0],ye=he[1],be=Object(r.useState)([]),Ne=Object(l.a)(be,2),we=Ne[0],Se=Ne[1],Ie=Object(o.g)(),xe=Object(o.i)().sId;Object(r.useEffect)((function(){Object(p.a)("StudentProfile/Get/".concat(xe)).then((function(e){var t,a;console.log("profileData",e),U(e),H(null===e||void 0===e||null===(t=e.profileOtherInfo)||void 0===t?void 0:t.isHaveDisability),Z(null===e||void 0===e||null===(a=e.profileOtherInfo)||void 0===a?void 0:a.isHaveCriminalConvictions),te(null===e||void 0===e?void 0:e.educationInfos),console.log("eduInfo",null===e||void 0===e?void 0:e.educationInfos),ce(null===e||void 0===e?void 0:e.gmatScoreInfo),ue(null===e||void 0===e?void 0:e.greScoreInfo),pe(null===e||void 0===e?void 0:e.studentTestScoreInfo),ye(null===e||void 0===e?void 0:e.experienceinfo),Se(null===e||void 0===e?void 0:e.referenceInfo);var n=null===e||void 0===e?void 0:e.dateOfBirth,l=new Date(n).toLocaleString("en-CA"),r=null===l||void 0===l?void 0:l.split(",");W(r[0])}))}),[]);var je=function(){var e=Object(n.a)(x().mark((function e(){var t,a,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://api.ipify.org?format=json");case 2:return t=e.sent,console.log(null===t||void 0===t?void 0:t.data,"data1"),e.next=6,I.a.get("https://api.ipify.org?format=json");case 6:return a=e.sent,console.log(null===a||void 0===a?void 0:a.data,"data2"),e.next=10,I.a.get("https://api.ipdata.co");case 10:n=e.sent,console.log(n,"data3");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe={overflowX:"scroll"},Te=function(e){console.log("Test Score Update",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),Ie.push("/addTestScore")},ke=Object(r.useRef)(),Ce=function(e){return new Date(e).toLocaleString("en-CA").split(",")[0]};return i.a.createElement("div",{ref:ke},i.a.createElement(c.a,{className:"uapp-card-bg"},i.a.createElement(s.a,{className:"page-header"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement("div",{className:"mt-1"},i.a.createElement("h3",{className:"text-light"},"Student Profile")),i.a.createElement("div",{className:"ms-2"},i.a.createElement(y.a,{trigger:function(){return i.a.createElement("span",{className:"text-light cursor-pointer",title:"Print to pdf"},i.a.createElement("i",{className:"fas fa-print"}))},content:function(){return ke.current}}))),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{onClick:function(){Ie.push("/studentList")},className:"text-light"}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Student List")))),i.a.createElement("div",{className:"uapp-employee-profile"},i.a.createElement(d.a,null,i.a.createElement(m.a,{md:"8"},i.a.createElement("div",{className:"uapp-employee-profile-left"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"uapp-employee-cover-image"},i.a.createElement("div",{className:"bg-image",style:{backgroundImage:"url(".concat(h.a,")")}},i.a.createElement("div",{className:"uplode-cover-image"},i.a.createElement("span",null," ",i.a.createElement("i",{className:"fas fa-camera"}," "))))),i.a.createElement("div",{className:"uapp-employee-profile-image-edit"},i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement("div",{className:"uapp-employee-profile-image"},i.a.createElement("div",{className:"text-left"},i.a.createElement("img",{className:"empProfileImg",src:b.a+(null===G||void 0===G||null===(e=G.profileImage)||void 0===e?void 0:e.fileUrl),alt:"profile_img"})))),i.a.createElement(m.a,null,i.a.createElement(N.a,{className:"uapp-employee-profile-Edit",func:function(){return e=G,console.log("Started Working",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addStudentApplicationInformation");var e},permission:6})))),i.a.createElement("div",{className:"uapp-employee-profile-generalInfo"},i.a.createElement(d.a,null,i.a.createElement(m.a,{md:"6"},i.a.createElement("ul",{className:"uapp-ul text-left"},i.a.createElement("li",null,i.a.createElement("h4",null,null===G||void 0===G?void 0:G.nameTittle," ",null===G||void 0===G?void 0:G.firstName," ",G.lastName," (",null===G||void 0===G?void 0:G.studentViewId,")")),i.a.createElement("li",null))),i.a.createElement(m.a,{md:"6"},i.a.createElement("ul",{className:"uapp-ul text-right1"},i.a.createElement("li",null,i.a.createElement("span",null," Email : ",null===G||void 0===G?void 0:G.email)),i.a.createElement("li",null,i.a.createElement("span",null," Phone Number : ",null===G||void 0===G?void 0:G.phoneNumber)))))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Personal Statement")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Checking Personal Statement Data",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addPersonalStatement");var e},permission:6})),i.a.createElement("div",null,i.a.createElement("p",{className:"pt-2"},null===G||void 0===G||null===(t=G.profilePersonalStatement)||void 0===t?void 0:t.statement))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Personal Information")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Updating Personal Information",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addStudentInformation");var e},permission:6})),i.a.createElement(v.a,{className:"table-bordered mt-4"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Title:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.nameTittle)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Name:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.firstName," ",null===G||void 0===G?void 0:G.lastName)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Gender:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.gender)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Date of birth:")),i.a.createElement("td",{width:"60%"},Q)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Birth country:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.birthCountry)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Nationality:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.nationality)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Marital status:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.maritalStatus)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("b",null,"Passport no:")),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.passportNumber))))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Contact Information")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Updating Contact Information",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addStudentContactInformation");var e},permission:6})),i.a.createElement(v.a,{className:"table-bordered mt-4"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Address Type:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(a=G.studentContactInfos)||void 0===a?void 0:a.addressTypeName)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Phone number:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.phoneNumber)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Cell phone number:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(f=G.studentContactInfos)||void 0===f?void 0:f.cellPhoneNumber)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Email:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G?void 0:G.email)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Country:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(g=G.studentContactInfos)||void 0===g?void 0:g.country)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"City:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(S=G.studentContactInfos)||void 0===S?void 0:S.city)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"State:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(j=G.studentContactInfos)||void 0===j?void 0:j.state)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Zip code:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(O=G.studentContactInfos)||void 0===O?void 0:O.zipCode)),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Address Line:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(T=G.studentContactInfos)||void 0===T?void 0:T.addressLine))))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Other Information")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Updating Other Information",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addOtherinformation");var e},permission:6})),i.a.createElement(v.a,{className:"table-bordered mt-4"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Have Disability:"))),i.a.createElement("td",{width:"60%"},z?i.a.createElement("span",null,"Yes"):i.a.createElement("span",null,"No"))),z?i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Disability Description:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(k=G.profileOtherInfo)||void 0===k?void 0:k.disabilityDescription)):null,i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Have Criminal Convictions:"))),i.a.createElement("td",{width:"60%"},X?i.a.createElement("span",null,"Yes"):i.a.createElement("span",null,"No"))),X?i.a.createElement("tr",null,i.a.createElement("td",{width:"40%"},i.a.createElement("span",null," ",i.a.createElement("b",null,"Criminal Convictions Description:"))),i.a.createElement("td",{width:"60%"},null===G||void 0===G||null===(C=G.profileOtherInfo)||void 0===C?void 0:C.criminalConvictionsDescription)):null))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Educational Information")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Updating Educational Information",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addStudentEducationalInformation");var e},permission:6})),i.a.createElement("div",{className:"table-responsive pt-3"},i.a.createElement(v.a,{className:"table-sm striped",style:Oe},i.a.createElement("thead",{className:""},i.a.createElement("tr",{style:{textAlign:"center"}},i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Institute"),i.a.createElement("th",null,"Program Level"),i.a.createElement("th",null,"Subject"),i.a.createElement("th",null,"Duration"),i.a.createElement("th",null,"Grade"),i.a.createElement("th",null,"Still Studying"),i.a.createElement("th",null,"Study Duration"))),i.a.createElement("tbody",null,null===ee||void 0===ee?void 0:ee.map((function(e,t){return i.a.createElement("tr",{key:t,style:{textAlign:"center"}},i.a.createElement("th",{scope:"row"},le+t),i.a.createElement("td",null,null===e||void 0===e?void 0:e.nameOfInstitution),i.a.createElement("td",null,null===e||void 0===e?void 0:e.educationLevel),i.a.createElement("td",null,null===e||void 0===e?void 0:e.qualificationSubject),i.a.createElement("td",null,null===e||void 0===e?void 0:e.duration),i.a.createElement("td",null,null===e||void 0===e?void 0:e.finalGrade),i.a.createElement("td",null,!1===(null===e||void 0===e?void 0:e.stillStudying)?i.a.createElement("span",null,"No"):i.a.createElement("span",null,"Yes")),i.a.createElement("td",null,!1===(null===e||void 0===e?void 0:e.stillStudying)?i.a.createElement("div",null,Ce(null===e||void 0===e?void 0:e.attendedInstitutionFrom)," to ",Ce(null===e||void 0===e?void 0:e.attendedInstitutionTo)):i.a.createElement("div",null,Ce(null===e||void 0===e?void 0:e.attendedInstitutionFrom)," to ",i.a.createElement("div",null,"ongoing"))))})))))))),i.a.createElement("div",{className:" row info-item mt-4"},i.a.createElement("div",{className:"col-md-6 mt-2",style:{textAlign:"left"}},i.a.createElement(c.a,{className:"test-score-card-style2"},i.a.createElement(u.a,{className:""},i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-1"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"GRE Information")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return Te(G)},permission:6})),i.a.createElement("h6",null,"Quantitative Score: ",null===me||void 0===me?void 0:me.quantitativeScore),i.a.createElement("h6",null,"Quantitative Rank: ",null===me||void 0===me?void 0:me.quantitativeRank),i.a.createElement("h6",null,"Verbal Score: ",null===me||void 0===me?void 0:me.verbalScore),i.a.createElement("h6",null,"Verbal Rank: ",null===me||void 0===me?void 0:me.verbalRank),i.a.createElement("h6",null,"Writing Score: ",null===me||void 0===me?void 0:me.writingScore),i.a.createElement("h6",null,"Writing Rank: ",null===me||void 0===me?void 0:me.writingRank)))),i.a.createElement("div",{className:"col-md-6 mt-2",style:{textAlign:"left"}},i.a.createElement(c.a,{className:" test-score-card-style2"},i.a.createElement(u.a,{className:""},i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-1"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"GMAT Information")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return Te(G)},permission:6})),i.a.createElement("h6",null,"Quantitative Score: ",null===oe||void 0===oe?void 0:oe.quantitativeScore),i.a.createElement("h6",null,"Quantitative Rank: ",null===oe||void 0===oe?void 0:oe.quantitativeRank),i.a.createElement("h6",null,"Verbal Score: ",null===oe||void 0===oe?void 0:oe.verbalScore),i.a.createElement("h6",null,"Verbal Rank: ",null===oe||void 0===oe?void 0:oe.verbalRank),i.a.createElement("h6",null,"Total Score: ",null===oe||void 0===oe?void 0:oe.totalScore),i.a.createElement("h6",null,"Total Rank: ",null===oe||void 0===oe?void 0:oe.totalRank),i.a.createElement("h6",null,"Writing Score: ",null===oe||void 0===oe?void 0:oe.writingScore),i.a.createElement("h6",null,"Writing Rank: ",null===oe||void 0===oe?void 0:oe.writingRank))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Test Scores")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(w.a,{className:"p-3",func:function(){return e=G,console.log("Test Score Update",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addTestScore");var e},name:"View Test Scores",color:"primary",permission:6}))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Experience")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Experience Update",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addExperience");var e},permission:6})),i.a.createElement("div",{className:"table-responsive pt-3"},i.a.createElement(v.a,{className:"table-sm striped",style:Oe},i.a.createElement("thead",{className:""},i.a.createElement("tr",{style:{textAlign:"center"}},i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Company Name"),i.a.createElement("th",null,"Job Title"),i.a.createElement("th",null,"Employment Details"),i.a.createElement("th",null,"Start Date"),i.a.createElement("th",null,"End Date"),i.a.createElement("th",null,"Still Working?"))),i.a.createElement("tbody",null,null===ge||void 0===ge?void 0:ge.map((function(e,t){return i.a.createElement("tr",{key:t,style:{textAlign:"center"}},i.a.createElement("th",{scope:"row"},le+t),i.a.createElement("td",null,null===e||void 0===e?void 0:e.companyName),i.a.createElement("td",null,null===e||void 0===e?void 0:e.jobTitle),i.a.createElement("td",null,null===e||void 0===e?void 0:e.employeementDetails),i.a.createElement("td",null,Ce(null===e||void 0===e?void 0:e.startDate)),i.a.createElement("td",null,(null===e||void 0===e?void 0:e.isStillWorking)?i.a.createElement("span",null,"Not Available"):i.a.createElement("span",null,Ce(null===e||void 0===e?void 0:e.endDate))),i.a.createElement("td",null,(null===e||void 0===e?void 0:e.isStillWorking)?i.a.createElement("span",null,"Yes"):i.a.createElement("span",null,"No")))})))))))),i.a.createElement("div",{className:" info-item mt-4"},i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Reference")," "),i.a.createElement("div",{className:"bg-h"})),i.a.createElement(N.a,{className:"text-right edit-style  p-3",func:function(){return e=G,console.log("Reference Update",e),localStorage.setItem("applictionStudentId",null===e||void 0===e?void 0:e.id),localStorage.setItem("applictionStudentTypeId",null===e||void 0===e?void 0:e.studentTypeId),localStorage.setItem("method","put"),void Ie.push("/addReference");var e},permission:6})),i.a.createElement("div",{className:"table-responsive pt-3"},i.a.createElement(v.a,{className:"table-sm striped",style:Oe},i.a.createElement("thead",{className:""},i.a.createElement("tr",{style:{textAlign:"center"}},i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Address Line"),i.a.createElement("th",null,"City"),i.a.createElement("th",null,"Country"),i.a.createElement("th",null,"Email"),i.a.createElement("th",null,"Institute Company"),i.a.createElement("th",null,"Phone Number"),i.a.createElement("th",null,"Reference Name"),i.a.createElement("th",null,"Reference Type"),i.a.createElement("th",null,"State"))),i.a.createElement("tbody",null,null===we||void 0===we?void 0:we.map((function(e,t){return i.a.createElement("tr",{key:t,style:{textAlign:"center"}},i.a.createElement("th",{scope:"row"},le+t),i.a.createElement("td",null,null===e||void 0===e?void 0:e.addressLine),i.a.createElement("td",null,null===e||void 0===e?void 0:e.city),i.a.createElement("td",null,null===e||void 0===e?void 0:e.country),i.a.createElement("td",null,null===e||void 0===e?void 0:e.emailAddress),i.a.createElement("td",null,null===e||void 0===e?void 0:e.institute_Company),i.a.createElement("td",null,null===e||void 0===e?void 0:e.phoneNumber),i.a.createElement("td",null,null===e||void 0===e?void 0:e.referenceName),i.a.createElement("td",null,null===e||void 0===e?void 0:e.referenceTypeName),i.a.createElement("td",null,null===e||void 0===e?void 0:e.state))})))))))))),i.a.createElement(m.a,{md:"4"},i.a.createElement(c.a,{className:"uapp-employee-profile-right"},i.a.createElement("div",{className:"uapp-profile-CardHeader"},i.a.createElement("div",{className:"uapp-circle-image margin-top-minus"},i.a.createElement("img",{src:b.a+(null===G||void 0===G||null===(L=G.consultant)||void 0===L?void 0:L.consultantProfileImage),alt:"consultant_photo"})),i.a.createElement("h5",null,null===G||void 0===G||null===(R=G.consultant)||void 0===R?void 0:R.firstName," ",null===G||void 0===G||null===(P=G.consultant)||void 0===P?void 0:P.lastName),i.a.createElement("p",null," Consultant ")),i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement("ul",{className:"uapp-ul text-center"},i.a.createElement("li",null," ",null===G||void 0===G||null===(A=G.consultant)||void 0===A?void 0:A.email," "),i.a.createElement("li",null," ",null===G||void 0===G||null===(D=G.consultant)||void 0===D?void 0:D.phoneNumber," "))))),i.a.createElement(c.a,{className:"p-3"},i.a.createElement("h6",null," Notice"),i.a.createElement("span",{className:"bg-wg bg-width"}),i.a.createElement("div",{className:"notice-item card-widget mt-3 "},i.a.createElement("div",{className:"notice-titel"},i.a.createElement("h6",null," Super Admin"),i.a.createElement("span",null," 10/12/2021")),i.a.createElement("div",{className:"notice-description"},i.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),i.a.createElement("div",{className:"uapp-read-more-btn"},i.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",i.a.createElement("span",null," ",i.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),i.a.createElement("div",{className:"notice-item card-widget mt-3 "},i.a.createElement("div",{className:"notice-titel"},i.a.createElement("h6",null," Super Admin"),i.a.createElement("span",null," 10/12/2021")),i.a.createElement("div",{className:"notice-description"},i.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),i.a.createElement("div",{className:"uapp-read-more-btn"},i.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",i.a.createElement("span",null," ",i.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),i.a.createElement("div",{className:"notice-item card-widget mt-3 "},i.a.createElement("div",{className:"notice-titel"},i.a.createElement("h6",null," Super Admin"),i.a.createElement("span",null," 10/12/2021")),i.a.createElement("div",{className:"notice-description"},i.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),i.a.createElement("div",{className:"uapp-read-more-btn"},i.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",i.a.createElement("span",null," ",i.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),i.a.createElement("div",{className:"notice-item card-widget mt-3 "},i.a.createElement("div",{className:"notice-titel"},i.a.createElement("h6",null," Super Admin"),i.a.createElement("span",null," 10/12/2021")),i.a.createElement("div",{className:"notice-description"},i.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),i.a.createElement("div",{className:"uapp-read-more-btn"},i.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",i.a.createElement("span",null," ",i.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," "))))),i.a.createElement(c.a,{className:"p-3"},i.a.createElement("h6",null," Concent"),i.a.createElement("span",{className:"bg-wg bg-width"}),i.a.createElement("div",{className:"notice-item card-widget mt-3 "},i.a.createElement("div",{className:"text-center"},i.a.createElement("span",null,"Consent Is Not Signed Yet. "),i.a.createElement("div",null,i.a.createElement(w.a,{func:function(){je()},name:"Sign Consent",className:"badge-primary mt-2"}))))),i.a.createElement(c.a,{className:"p-3"},i.a.createElement("h6",null," Concent"),i.a.createElement("span",{className:"bg-wg bg-width"}),i.a.createElement("div",{className:"notice-item card-widget mt-3 "},i.a.createElement("div",{className:"notice-description"},i.a.createElement("span",null,"Consent Signed On, "),i.a.createElement("br",null),i.a.createElement("span",null,"Date: "),i.a.createElement("br",null),i.a.createElement("span",null,"From: IP"),i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement(E.a,{className:"badge-primary"},"Download")))))))))}}}]);
//# sourceMappingURL=106.da7d5ce0.chunk.js.map