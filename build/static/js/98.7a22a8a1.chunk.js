(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[98],{239:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(318);var a=n(302),c=n(319);function o(e,t){return Object(r.a)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(i){u=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return c}}(e,t)||Object(a.a)(e,t)||Object(c.a)()}},242:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},243:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return a}))},244:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(12);function a(e,t){if(null==e)return{};var n,a,c=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(346);var a=n(320),c=n(302);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(a.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(346);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},318:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},319:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},320:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return r}))},346:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(19),a=n(18),c=Object(r.a)((function e(){Object(a.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},460:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},963:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(68),c=n(0),o=n.n(c),u=n(26),i=n(64),l=n(787),s=n(776),f=n(781),p=n(782),m=n(783),d=n(784),b=n(785),y=n(786),O=n(381),v=n(461),j=n.n(v),h=n(462),E=n.n(h),g=n(255),T=n(2),S=n(19),C=n(18),w=n(20),I=n(21),A=function(e){Object(w.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(C.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).name="",e}return Object(S.a)(n)}(n(383).a),x=n(22),k=function(e,t,n){var a=Object(c.useState)(e),o=Object(r.a)(a,2),u=o[0],i=o[1],l=Object(c.useState)({}),s=Object(r.a)(l,2),f=s[0],p=s[1];return{values:u,setValues:i,errors:f,setErrors:p,handleInputChange:function(e){var n=e.target,r=n.name,a=n.value,c=Object(x.a)({},r,a);i(Object(T.a)(Object(T.a)({},u),c)),t(c)},resetForm:function(){i(Object(T.a)({},e)),p({}),n(0)}}},P=new A;var N={createClientType:i.c,updateClientType:i.e},L=Object(u.b)((function(e){return{clientTypeList:e.clientType.list}}),N)((function(e){var t=Object.assign({},e),n=Object(c.useState)(!1),a=Object(r.a)(n,2),u=(a[0],a[1],Object(g.useToasts)().addToast),i=function(){return!0},l=k(P,i,t.setCurrentId),s=l.values,f=l.setValues,p=(l.errors,l.setErrors),m=l.handleInputChange,d=l.resetForm;return Object(c.useEffect)((function(){0!=t.currentId&&(f(Object(T.a)({},t.clientTypeList.find((function(e){return e.id==t.currentId})))),p({}))}),[t.currentId]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Create Client Type"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=function(){d(),u("Submitted successfully",{appearance:"success"})};0==t.currentId?t.createClientType(s,n):t.updateClientType(t.currentId,s,n)}},o.a.createElement("input",{id:"helperText",placeholder:"Name",name:"name",type:"text",value:s.name,onChange:m,className:"form-control"}),o.a.createElement("br",null),o.a.createElement("button",{style:{marginTop:"3px"},type:"submit",className:"btn btn-primary"},"Submit")))})),_=n(935),M=["classes"],B=void 0,D={fetchAllClientType:i.d,deleteClientType:i.b};t.default=Object(u.b)((function(e){return{clientTypeList:e.clientType.list}}),D)(Object(O.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,n=Object(a.a)(e,M),u=Object(c.useState)(0),i=Object(r.a)(u,2),O=i[0],v=i[1],h=o.a.useState(0),T=Object(r.a)(h,2),S=T[0],C=T[1],w=o.a.useState(5),I=Object(r.a)(w,2),A=I[0],x=I[1];Object(c.useEffect)((function(){n.fetchAllClientType()}),[]);var k=Object(g.useToasts)().addToast;return o.a.createElement("div",{elevation:3},o.a.createElement("div",{className:"row"},o.a.createElement("div",{item:!0,className:"col-md-3"},o.a.createElement(L,{currentId:O,setCurrentId:v})),o.a.createElement("div",{item:!0,className:"col-md-9"},o.a.createElement("div",{className:"add-jobCircular"},o.a.createElement(l.a,{className:"btn-block my-3",variant:"contained",color:"primary",const:!0,onClick:function(){B.props.addClientType("open")}},"Add Task")),o.a.createElement("h1",null,"ClientTypeId List"),o.a.createElement(s.a,null,o.a.createElement(f.a,null,o.a.createElement(p.a,{className:t.root},o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Name"),o.a.createElement(d.a,null,"Actions"))),o.a.createElement(b.a,null,n.clientTypeList.map((function(e,t){return o.a.createElement(m.a,{key:t,hover:!0},o.a.createElement(d.a,null,e.name),o.a.createElement(d.a,null,o.a.createElement(y.a,{variant:"text"},o.a.createElement(l.a,null,o.a.createElement(j.a,{color:"primary",onClick:function(){v(e.id)}})),o.a.createElement(l.a,null,o.a.createElement(E.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Are you sure to delete this record?")&&n.deleteClientType(t,(function(){return k("Deleted successfully",{appearance:"info"})})));var t}})))))}))))),o.a.createElement(_.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.clientTypeList.length,rowsPerPage:A,page:S,onPageChange:function(e,t){C(t)},onRowsPerPageChange:function(e){x(parseInt(e.target.value,10)),C(0)}}))))})))}}]);
//# sourceMappingURL=98.7a22a8a1.chunk.js.map