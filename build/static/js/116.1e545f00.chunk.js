/*! For license information please see 116.1e545f00.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[116],{251:function(e,t,a){"use strict";var n=a(9),r=a(3),l=a.n(r),c=a(152),s=a(24);function o(){o=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(I){s=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof u?t:u,l=Object.create(r.prototype),c=new O(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return j()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var s=b(c,a);if(s){if(s===d)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var o=m(e,t,a);if("normal"===o.type){if(n=a.done?"completed":"suspendedYield",o.arg===d)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n="completed",a.method="throw",a.arg=o.arg)}}}(e,a,c),l}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(I){return{type:"throw",arg:I}}}e.wrap=i;var d={};function u(){}function p(){}function f(){}var v={};s(v,r,(function(){return this}));var h=Object.getPrototypeOf,E=h&&h(h(w([])));E&&E!==t&&a.call(E,r)&&(v=E);var g=f.prototype=u.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var n;this._invoke=function(r,l){function c(){return new t((function(n,c){!function n(r,l,c,s){var o=m(e[r],e,l);if("throw"!==o.type){var i=o.arg,d=i.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):t.resolve(d).then((function(e){i.value=e,c(i)}),(function(e){return n("throw",e,c,s)}))}s(o.arg)}(r,l,n,c)}))}return n=n?n.then(c,c):c()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=m(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function w(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=f,s(g,"constructor",f),s(f,"constructor",p),p.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(N.prototype),s(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new N(i(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(g),s(g,c,"Generator"),s(g,r,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=w,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var s=a.call(l,"catchLoc"),o=a.call(l,"finallyLoc");if(s&&o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),S(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:w(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var i=localStorage.getItem("token");function m(){return(m=Object(n.a)(o().mark((function e(t){var a,n,r,m=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.length>1&&void 0!==m[1]?m[1]:{},m.length>2&&void 0!==m[2]?m[2]:"",e.prev=2,e.next=5,l.a.post("".concat(s.a).concat(t),a,{headers:{authorization:i}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)&&c.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return m.apply(this,arguments)}},257:function(e,t,a){"use strict";var n=a(11),r=a(15),l=a(23),c=a(18),s=a(0),o=a.n(s),i=a(2),m=a.n(i),d=a(8),u=a.n(d),p=a(7),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.t,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,c=e.bsSize,s=e.valid,i=e.invalid,m=e.tag,d=e.addon,v=e.plaintext,h=e.innerRef,E=Object(r.a)(e,f),g=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),N=m||("select"===l||"textarea"===l?l:"input"),b="form-control";v?(b+="-plaintext",N=m||"input"):"file"===l?b+="-file":"range"===l?b+="-range":g&&(b=d?null:"form-check-input"),E.size&&y.test(E.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=E.size,delete E.size);var x=Object(p.p)(u()(t,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,b),a);return("input"===N||m&&"function"===typeof m)&&(E.type=l),E.children&&!v&&"select"!==l&&"string"===typeof N&&"select"!==N&&(Object(p.v)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),o.a.createElement(N,Object(n.a)({},E,{ref:h,className:x,"aria-invalid":i}))},t}(o.a.Component);h.propTypes=v,h.defaultProps={type:"text"},t.a=h},258:function(e,t,a){"use strict";var n=a(11),r=a(15),l=a(0),c=a.n(l),s=a(2),o=a.n(s),i=a(8),m=a.n(i),d=a(7),u=["className","cssModule","innerRef","tag"],p={tag:d.t,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var t=e.className,a=e.cssModule,l=e.innerRef,s=e.tag,o=Object(r.a)(e,u),i=Object(d.p)(m()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},o,{className:i,ref:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},267:function(e,t,a){"use strict";var n=a(11),r=a(15),l=a(0),c=a.n(l),s=a(2),o=a.n(s),i=a(8),m=a.n(i),d=a(7),u=["className","cssModule","widths","tag"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),v={tag:d.t,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,l=e.widths,s=e.tag,o=Object(r.a)(e,u),i=[];l.forEach((function(t,n){var r=e[t];if(delete o[t],r||""===r){var l=!n;if(Object(d.n)(r)){var c,s=l?"-":"-"+t+"-",u=E(l,t,r.size);i.push(Object(d.p)(m()(((c={})[u]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),a))}else{var p=E(l,t,r);i.push(p)}}})),i.length||i.push("col");var p=Object(d.p)(m()(t,i),a);return c.a.createElement(s,Object(n.a)({},o,{className:p}))};g.propTypes=v,g.defaultProps=h,t.a=g},318:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(36),c=a(98);t.a=function(e){var t=e.url,a=e.color,n=e.className,s=e.icon,o=(e.permission,e.name),i=e.func,m=e.target,d=e.activeStyle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:t,activeStyle:d,target:m},r.a.createElement(c.a,{color:a,className:n,onClick:i},s," ",o)))}},324:function(e,t,a){"use strict";var n=a(11),r=a(15),l=a(0),c=a.n(l),s=a(2),o=a.n(s),i=a(8),m=a.n(i),d=a(7),u=["className","cssModule","noGutters","tag","form","widths"],p=o.a.oneOfType([o.a.number,o.a.string]),f={tag:d.t,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,l=e.noGutters,s=e.tag,o=e.form,i=e.widths,p=Object(r.a)(e,u),f=[];i.forEach((function(t,a){var n=e[t];if(delete p[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var v=Object(d.p)(m()(t,l?"no-gutters":null,o?"form-row":"row",f),a);return c.a.createElement(s,Object(n.a)({},p,{className:v}))};h.propTypes=f,h.defaultProps=v,t.a=h},497:function(e,t,a){},504:function(e,t,a){e.exports=a.p+"static/media/video.bf1effb0.mp4"},561:function(e,t,a){e.exports=a.p+"static/media/plusicon.c5779b2f.svg"},562:function(e,t,a){e.exports=a.p+"static/media/Vectorbeat.2c0aef97.svg"},563:function(e,t,a){e.exports=a.p+"static/media/banner.336bfd86.svg"},564:function(e,t,a){e.exports=a.p+"static/media/arrowright.867c1706.svg"},565:function(e,t,a){e.exports=a.p+"static/media/tick.fb50238c.svg"},998:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(497),a(13)),c=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},s=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},o=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},i=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},m=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},d=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},u=a(19),p=a(561),f=a.n(p),v=a(562),h=a.n(v),E=a(563),g=a.n(E),y=a(564),N=a.n(y),b=a(565),x=a.n(b),S=a(290),O=a(258),w=a(98),j=a(37),I=a(36),T=(a(251),a(253)),J=a(80),F=(a(3),a(24),function(){var e=null===JSON||void 0===JSON?void 0:JSON.parse(localStorage.getItem("current_user")),t=localStorage.getItem("referenceId"),a=(Object(T.useToasts)().addToast,Object(j.g)()),l=Object(n.useState)(!1),c=Object(u.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),d=(m[0],m[1]);Object(n.useEffect)((function(){Object(J.a)("Student/CheckIfStudentIsConsultant/".concat(null===e||void 0===e?void 0:e.displayEmail)).then((function(e){console.log("checkEmail",e),o(e)})),Object(J.a)("StudentApplication/Index/".concat(t)).then((function(e){d(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null),r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},r.a.createElement("div",null,r.a.createElement("span",{className:"std-dashboard-style1"},"Good Morning, ",null===e||void 0===e?void 0:e.displayName,"!"),r.a.createElement("br",null),r.a.createElement("span",{className:"std-dashboard-style2"},"Here's what's happening with your store today.")),r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("div",{style:{cursor:"pointer"}},r.a.createElement("div",{className:"std-dashboard-style4"}),r.a.createElement("div",{className:"std-dashboard-style5"},r.a.createElement("img",{src:f.a,className:"img-fluid dashbard-img-style1"}),r.a.createElement("span",{className:"std-dashboard-style3"},"Add New Student"))),r.a.createElement("div",{style:{cursor:"pointer"}},r.a.createElement("div",{className:"std-dashboard-style6"}),r.a.createElement("div",null,r.a.createElement("img",{src:h.a,className:"img-fluid dashbard-img-style2"}))))),r.a.createElement("div",{style:{position:"relative",top:"-20px"}},r.a.createElement("div",{className:"px-4 progress-card-style-std-dashboard"},r.a.createElement("div",{class:"stepper-wrapper"},r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Application Information")),r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Student Profile")),r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Education and Qualifications")),r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"English Language")),r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Employeement History")),r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Reference")),r.a.createElement("div",{class:"stepper-item completed"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Personal Statement")),r.a.createElement("div",{class:"stepper-item"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Other Information")),r.a.createElement("div",{class:"stepper-item"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Upload Document")),r.a.createElement("div",{class:"stepper-item"},r.a.createElement("div",{class:"step-counter"},r.a.createElement("img",{src:x.a,className:"img-fluid"})),r.a.createElement("div",{className:"text-center"},"Declaration")))),r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"row",style:{height:"105px",marginTop:"30px"}},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("span",{className:"std-dashboard-style7"},"App Id"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("span",{className:"std-dashboard-style8",onClick:function(){a.push("/studentProfile/".concat(t))},style:{cursor:"pointer"}},"#",null===e||void 0===e?void 0:e.userViewId))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("span",{className:"std-dashboard-style7"},"Subject"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("span",{className:"std-dashboard-style9"},"Business Management (including foundation year) BA (Hons)"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("span",{className:"std-dashboard-style7"},"University"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("span",{className:"std-dashboard-style9"},"London Metropolitan University"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("span",{className:"std-dashboard-style7"},"Intake"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("span",{className:"std-dashboard-style9"},"January 2023"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("span",{className:"std-dashboard-style7"},"Status"),r.a.createElement("div",{className:"mt-2"}),r.a.createElement("span",{className:"std-dashboard-style9"},"Application In Process")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(w.a,{color:"primary",style:{position:"relative",top:"21px"}},"Check and Submit"))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},s?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:g.a,className:"w-100"}),r.a.createElement(S.a,{style:{marginTop:"24px"}},r.a.createElement(O.a,null,r.a.createElement("div",{style:{height:"60px"},className:"d-flex flex-wrap align-items-center justify-content-between px-4"},r.a.createElement("span",{className:"std-dashboard-style8"},"Why you waiting for?"),r.a.createElement(w.a,{color:"primary",onClick:function(){a.push("/becomeConsultant/".concat(t))}},"Become Consultant")))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("div",{className:"cosultant-image-style-std-dashboard"}),r.a.createElement("div",null,r.a.createElement("div",{className:"consultant-info-style-std-dashboard"},r.a.createElement("span",{className:"consultant-name-style-student-dashboard"},"Roxana-Andreea Beleag"),r.a.createElement("br",null),r.a.createElement("span",{className:"consultant-role-student-dashboard"},"Consultant")),r.a.createElement("div",{className:"necessary-link-student-dashboard"},r.a.createElement(I.a,{style:{textDecorationColor:"#1E98B0"}},r.a.createElement("span",{className:"consultant-role-student-dashboard2"},"beleagroxana@yahoo.com")),r.a.createElement("br",null),r.a.createElement(I.a,{style:{textDecorationColor:"#1E98B0"}},r.a.createElement("span",{className:"consultant-role-student-dashboard2"},"07340 543526"))))))),r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement("iframe",{className:"w-100",height:"177",src:"https://www.youtube.com/embed/V685_4XUz2Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{marginBottom:"19px"}}),r.a.createElement("div",null,r.a.createElement("li",{style:{listStyleType:"none"}},r.a.createElement("img",{src:N.a,className:"img-fluid"}),r.a.createElement(I.a,{style:{textDecorationColor:"#1E98B0"}}," ",r.a.createElement("span",{className:"video-info-style-student-dashboard"},"FAQ"))),r.a.createElement("li",{style:{listStyleType:"none"}},r.a.createElement("img",{src:N.a,className:"img-fluid"}),r.a.createElement(I.a,{style:{textDecorationColor:"#1E98B0"}}," ",r.a.createElement("span",{className:"video-info-style-student-dashboard"},"BLOG"))),r.a.createElement("li",{style:{listStyleType:"none"}},r.a.createElement("img",{src:N.a,className:"img-fluid"}),r.a.createElement(I.a,{style:{textDecorationColor:"#1E98B0"}}," ",r.a.createElement("span",{className:"video-info-style-student-dashboard"},"CONTACT")))))))))}),M=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},_=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},L=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},k=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},A=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},D=a(1),U=a(324),z=a(267),C=a(257),P=a(259),R=function(e){var t=e.style,a=e.icon,n=e.title,l=e.link,c=e.count;return r.a.createElement(I.a,{to:l,style:{textDecoration:"none"}},r.a.createElement("div",{className:"".concat(t," uapp-card")},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"  ",r.a.createElement("span",null," ",a," ")," ",c),r.a.createElement("h5",null," ",n," "))))},B=function(){var e=JSON.parse(localStorage.getItem("current_user")),t={control:function(e,t){return Object(D.a)(Object(D.a)({},e),{},{background:"#fff",borderColor:"#9e9e9e",minHeight:"33px",height:"33px",boxShadow:(t.isFocused,null),paddingBottom:"20px"})}},a=Object(n.useState)([]),l=Object(u.a)(a,2),c=(l[0],l[1],Object(n.useState)("Select Month")),s=Object(u.a)(c,2),o=s[0],i=(s[1],Object(n.useState)(0)),m=Object(u.a)(i,2),d=m[0],p=(m[1],Object(n.useState)([])),f=Object(u.a)(p,2),v=(f[0],f[1],Object(n.useState)("Select Year")),h=Object(u.a)(v,2),E=h[0],g=(h[1],Object(n.useState)(0)),y=Object(u.a)(g,2),N=y[0];y[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement("div",{className:"uapp-dashboard"},r.a.createElement("div",{className:"uapp-user-name"},r.a.createElement(U.a,null,r.a.createElement(z.a,{sm:"9",xs:"12"},r.a.createElement("h2",null,"Welcome, ",null===e||void 0===e?void 0:e.displayName,".")))),r.a.createElement("div",{className:"uapp-user-card mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},r.a.createElement(R,{style:"uapp-primary-card",icon:r.a.createElement("i",{class:"fas fa-angle-double-right"}),count:500,title:"Total Application-1"})),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},r.a.createElement(R,{style:"uapp-secondary-card",icon:r.a.createElement("i",{class:"fas fa-angle-double-right"}),count:600,title:"Total Application-2"})),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},r.a.createElement(R,{style:"uapp-purple-card",icon:r.a.createElement("i",{class:"fas fa-angle-double-right"}),count:700,title:"Total Application-3"})),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},r.a.createElement(R,{style:"uapp-danger-card",icon:r.a.createElement("i",{class:"fas fa-angle-double-right"}),count:800,title:"Total Application-4"})),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},r.a.createElement(R,{style:"uapp-warning-card",icon:r.a.createElement("i",{class:"fas fa-angle-double-right"}),count:900,title:"Total Application-5"})),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},r.a.createElement(R,{style:"uapp-info-card",icon:r.a.createElement("i",{class:"fas fa-angle-double-right"}),count:1e3,title:"Total Application-6"})))),r.a.createElement("div",{className:"uapp-dashboard-activity"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},r.a.createElement("div",{className:"card",style:{height:"350px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",null,r.a.createElement("h5",{class:"uapp-dachboard-head"},"New Application")),r.a.createElement("span",{class:"db-app-count"},"70")))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},r.a.createElement("div",{className:"card",style:{height:"106px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",null,r.a.createElement("h5",{class:"uapp-dachboard-head"},"Universities")),r.a.createElement("span",{class:"db-app-count"},"70"))),r.a.createElement("div",{className:"card",style:{height:"106px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",null,r.a.createElement("h5",{class:"uapp-dachboard-head"},"Admission Managers")),r.a.createElement("span",{class:"db-app-count"},"70"))),r.a.createElement("div",{className:"card",style:{height:"106px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",null,r.a.createElement("h5",{class:"uapp-dachboard-head"},"Admission Officers")),r.a.createElement("span",{class:"db-app-count"},"70"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",null,r.a.createElement("h5",{class:"uapp-dachboard-head"},"Progress Report")),r.a.createElement(S.a,{className:"mt-3"},r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("span",{className:"mt-1 me-1",style:{fontSize:"16px",fontWeight:"500"}},"Daily"),r.a.createElement(C.a,{className:"ms-1",type:"date"})),r.a.createElement("div",{className:"d-flex"},r.a.createElement("span",{className:"mt-1 me-1",style:{fontSize:"16px",fontWeight:"500"}},"Monthly"),r.a.createElement(P.a,{styles:t,value:{label:o,value:d},className:"ms-1",name:"UniversityTypeId",id:"UniversityTypeId"})),r.a.createElement("div",{className:"d-flex"},r.a.createElement("span",{className:"mt-1 me-1",style:{fontSize:"16px",fontWeight:"500"}},"Yearly"),r.a.createElement(P.a,{styles:t,value:{label:E,value:N},className:"ms-1",name:"UniversityTypeId",id:"UniversityTypeId"}))),r.a.createElement("hr",null))))))))))},G=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))};a(318),a(504),t.default=function(){var e=null===JSON||void 0===JSON?void 0:JSON.parse(localStorage.getItem("current_user"));return r.a.createElement("div",null,e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.SystemAdmin)&&r.a.createElement(s,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.Admin)&&r.a.createElement(i,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.AdmissionManager)&&r.a.createElement(o,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.Provider)&&r.a.createElement(m,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.BranchManager)&&r.a.createElement(d,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.Student)&&r.a.createElement(F,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.AccountManager)&&r.a.createElement(M,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.Editor)&&r.a.createElement(_,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.FinanceManager)&&r.a.createElement(L,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.AccountOfficer)&&r.a.createElement(k,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.ComplianceManager)&&r.a.createElement(A,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.ProviderAdmin)&&r.a.createElement(B,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.AdmissionOfficer)&&r.a.createElement(G,null),e.userTypeId==(null===l.a||void 0===l.a?void 0:l.a.Consultant)&&r.a.createElement(c,null))}}}]);
//# sourceMappingURL=116.1e545f00.chunk.js.map