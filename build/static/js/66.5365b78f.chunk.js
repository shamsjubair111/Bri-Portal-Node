(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[66],{238:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(286);var r=n(269),l=n(288);function o(e,t){return Object(a.a)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(i){c=!0,r=i}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}}(e,t)||Object(r.a)(e,t)||Object(l.a)()}},241:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11);function r(e,t){if(null==e)return{};var n,r,l=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},243:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return r}))},244:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(287);var r=n(289),l=n(269);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(r.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(287);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},286:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}))},287:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},288:function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return a}))},289:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return a}))},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(17),r=n(16),l=Object(a.a)((function e(){Object(r.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},381:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},889:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(69),l=n(0),o=n.n(l),c=n(25),i=n(59),u=n(753),s=n(758),p=n(759),f=n(760),m=n(761),d=n(762),b=n(763),y=n(764),h=n(339),v=n(383),E=n.n(v),O=n(384),j=n.n(O),g=n(252),S=n(2),A=n(17),w=n(16),I=n(18),N=n(19),x=function(e){Object(I.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).candidateFullName="",e.email="",e.shortDescription="",e}return Object(A.a)(n)}(n(341).a),C=n(20),T=function(e,t,n){var r=Object(l.useState)(e),o=Object(a.a)(r,2),c=o[0],i=o[1],u=Object(l.useState)({}),s=Object(a.a)(u,2),p=s[0],f=s[1];return{values:c,setValues:i,errors:p,setErrors:f,handleInputChange:function(e){var n=e.target,a=n.name,r=n.value,l=Object(C.a)({},a,r);i(Object(S.a)(Object(S.a)({},c),l)),t(l)},resetForm:function(){i(Object(S.a)({},e)),f({}),n(0)}}},P=new x;var D={createApplication:i.c,updateApplication:i.e},F=Object(c.b)((function(e){return{applicationList:e.application.list}}),D)((function(e){var t=Object.assign({},e),n=Object(g.useToasts)().addToast,a=function(){return!0},r=T(P,a,t.setCurrentId),c=r.values,i=r.setValues,u=(r.errors,r.setErrors),s=r.handleInputChange,p=r.resetForm;return Object(l.useEffect)((function(){0!=t.currentId&&(i(Object(S.a)({},t.applicationList.find((function(e){return e.id==t.currentId})))),u({}))}),[t.currentId]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Create Application"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=function(){p(),n("Submitted successfully",{appearance:"success"})};0==t.currentId?t.createApplication(c,a):t.updateApplication(t.currentId,c,a)}},o.a.createElement("input",{id:"helperText",placeholder:"Full Name",name:"candidateFullName",type:"text",value:c.candidateFullName,onChange:s,className:"form-control"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{id:"helperText",placeholder:"Email",name:"email",type:"email",value:c.email,onChange:s,className:"form-control"}),o.a.createElement("br",null),o.a.createElement("input",{id:"helperText",placeholder:"Short Description",name:"shortDescription",type:"text",value:c.shortDescription,onChange:s,className:"form-control"}),o.a.createElement("br",null),o.a.createElement("button",{style:{marginTop:"3px"},type:"submit",className:"btn btn-primary"},"Submit")))})),k=n(864),L=["classes"],_={fetchAllApplication:i.d,deleteApplication:i.b};t.default=Object(c.b)((function(e){return{applicationList:e.application.list}}),_)(Object(h.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,n=Object(r.a)(e,L),c=Object(l.useState)(0),i=Object(a.a)(c,2),h=i[0],v=i[1],O=o.a.useState(0),S=Object(a.a)(O,2),A=S[0],w=S[1],I=o.a.useState(5),N=Object(a.a)(I,2),x=N[0],C=N[1];Object(l.useEffect)((function(){n.fetchAllApplication()}),[]);var T=Object(g.useToasts)().addToast;return o.a.createElement("div",{elevation:3},o.a.createElement("div",{className:"row"},o.a.createElement("div",{item:!0,className:"col-md-4"},o.a.createElement(F,{currentId:h,setCurrentId:v})),o.a.createElement("div",{item:!0,className:"col-md-8"},o.a.createElement("h1",null,"Application List"),o.a.createElement(u.a,null,o.a.createElement(s.a,null,o.a.createElement(p.a,{className:t.root},o.a.createElement(f.a,null,o.a.createElement(m.a,null,"Candidate FullName"),o.a.createElement(m.a,null,"Email"),o.a.createElement(m.a,null,"Short Description"),o.a.createElement(m.a,null,"Photo"),o.a.createElement(m.a,null,"Resume"),o.a.createElement(m.a,null,"Circular"),o.a.createElement(m.a,null,"Application Status"),o.a.createElement(m.a,null,"Actions"))),o.a.createElement(d.a,null,n.applicationList.map((function(e,t){var a,r,l,c;return o.a.createElement(f.a,{key:t,hover:!0},o.a.createElement(m.a,null,e.candidateFullName),o.a.createElement(m.a,null,e.email),o.a.createElement(m.a,null,e.shortDescription),o.a.createElement(m.a,null,null!==(a=e.photographId)&&void 0!==a?a:"N?A"),o.a.createElement(m.a,null,null!==(r=e.resumeId)&&void 0!==r?r:"N?A"),o.a.createElement(m.a,null,null!==(l=e.circularId)&&void 0!==l?l:"N?A"),o.a.createElement(m.a,null,null!==(c=e.applicationStatus)&&void 0!==c?c:"N?A"),o.a.createElement(m.a,null,o.a.createElement(b.a,{variant:"text"},o.a.createElement(y.a,null,o.a.createElement(E.a,{color:"primary",onClick:function(){v(e.id)}})),o.a.createElement(y.a,null,o.a.createElement(j.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Are you sure to delete this record?")&&n.deleteApplication(t,(function(){return T("Deleted successfully",{appearance:"info"})})));var t}})))))}))))),o.a.createElement(k.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.applicationList.length,rowsPerPage:x,page:A,onPageChange:function(e,t){w(t)},onRowsPerPageChange:function(e){C(parseInt(e.target.value,10)),w(0)}}))))})))}}]);
//# sourceMappingURL=66.5365b78f.chunk.js.map