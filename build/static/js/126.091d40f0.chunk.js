(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[126],{241:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(322);var a=n(305),c=n(323);function o(e,t){return Object(r.a)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return c}}(e,t)||Object(a.a)(e,t)||Object(c.a)()}},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(316);var a=n(324),c=n(305);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(a.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},245:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},247:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return a}))},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(15);function a(e,t){if(null==e)return{};var n,a,c=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(316);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},316:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},322:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},323:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},324:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return r}))},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),a=n(5),c=Object(r.a)((function e(){Object(a.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},371:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},993:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n(73),c=n(0),o=n.n(c),u=n(30),l=n(64),i=n(785),s=n(790),f=n(791),m=n(792),y=n(793),b=n(794),d=n(795),p=n(796),O=n(353),v=n(373),E=n.n(v),h=n(374),j=n.n(h),S=n(256),C=n(1),g=n(6),A=n(5),I=n(16),w=n(17),x=function(e){Object(I.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(A.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).name="",e.stateId="",e}return Object(g.a)(n)}(n(354).a),N=n(20),T=function(e,t,n){var a=Object(c.useState)(e),o=Object(r.a)(a,2),u=o[0],l=o[1],i=Object(c.useState)({}),s=Object(r.a)(i,2),f=s[0],m=s[1];return{values:u,setValues:l,errors:f,setErrors:m,handleInputChange:function(e){var n=e.target,r=n.name,a=n.value,c=Object(N.a)({},r,a);l(Object(C.a)(Object(C.a)({},u),c)),t(c)},resetForm:function(){l(Object(C.a)({},e)),m({}),n(0)}}},k=new x;var L={createCity:l.c,updateCity:l.e},_=Object(u.b)((function(e){return{cityList:e.city.list}}),L)((function(e){var t=Object.assign({},e),n=Object(S.useToasts)().addToast,r=function(){return!0},a=T(k,r,t.setCurrentId),u=a.values,l=a.setValues,i=a.setErrors,s=a.handleInputChange,f=a.resetForm;return Object(c.useEffect)((function(){0!==t.currentId&&(l(Object(C.a)({},t.cityList.find((function(e){return e.id===t.currentId})))),i({}))}),[t.currentId,t.cityList,i,l]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Create City"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=function(){f(),n("Submitted successfully",{appearance:"success"})};0===t.currentId?t.createCity(u,r):t.updateCity(t.currentId,u,r)}},o.a.createElement("input",{id:"helperText",placeholder:"Name",name:"name",type:"text",value:u.name,onChange:s,className:"form-control"}),o.a.createElement("button",{style:{marginTop:"3px"},type:"submit",className:"btn btn-primary"},"Submit")))})),B=["classes"],M={fetchAllCity:l.d,deleteCity:l.b};t.default=Object(u.b)((function(e){return{cityList:e.city.list}}),M)(Object(O.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,n=Object(a.a)(e,B),u=Object(c.useState)(0),l=Object(r.a)(u,2),O=l[0],v=l[1];Object(c.useEffect)((function(){n.fetchAllCity()}),[n]);var h=Object(S.useToasts)().addToast;return o.a.createElement("div",{elevation:3},o.a.createElement("div",{className:"row"},o.a.createElement("div",{item:!0,className:"col-md-4"},o.a.createElement(_,{currentId:O,setCurrentId:v})),o.a.createElement("div",{item:!0,className:"col-md-8"},o.a.createElement("h1",null,"City List"),o.a.createElement(i.a,null,o.a.createElement(s.a,null,o.a.createElement(f.a,{className:t.root},o.a.createElement(m.a,null,o.a.createElement(y.a,null,"Name"),o.a.createElement(y.a,null,"States"),o.a.createElement(y.a,null,"Employees"),o.a.createElement(y.a,null,"Clients"),o.a.createElement(y.a,null,"CompanyBranches"),o.a.createElement(y.a,null,"CompanyContactInformations"),o.a.createElement(y.a,null,"ContactInformations"),o.a.createElement(y.a,null,"Actions"))),o.a.createElement(b.a,null,n.cityList.map((function(e,t){return o.a.createElement(m.a,{key:t,hover:!0},o.a.createElement(y.a,null,e.name),o.a.createElement(y.a,null,e.stateId),o.a.createElement(y.a,null,"N/A"),o.a.createElement(y.a,null,"N/A"),o.a.createElement(y.a,null,"N/A"),o.a.createElement(y.a,null,"N/A"),o.a.createElement(y.a,null,"N/A"),o.a.createElement(y.a,null,"N/A"),o.a.createElement(y.a,null,o.a.createElement(d.a,{variant:"text"},o.a.createElement(p.a,null,o.a.createElement(E.a,{color:"primary",onClick:function(){v(e.id)}})),o.a.createElement(p.a,null,o.a.createElement(j.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Are you sure to delete this record?")&&n.deleteCity(t,(function(){return h("Deleted successfully",{appearance:"info"})})));var t}})))))}))))))))})))}}]);
//# sourceMappingURL=126.091d40f0.chunk.js.map