(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[122],{238:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(311);var a=n(300),o=n(312);function c(e,t){return Object(r.a)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(l){u=!0,a=l}finally{try{c||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||Object(a.a)(e,t)||Object(o.a)()}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(342);var a=n(313),o=n(300);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(a.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},241:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},243:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return a}))},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(12);function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(342);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},311:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},312:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},313:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return r}))},342:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(18),a=n(17),o=Object(r.a)((function e(){Object(a.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},460:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},981:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(67),o=n(0),c=n.n(o),u=n(27),l=n(59),i=n(780),s=n(785),f=n(786),m=n(787),b=n(788),d=n(789),p=n(790),y=n(791),O=n(384),v=n(461),j=n.n(v),h=n(462),S=n.n(h),E=n(255),g=n(2),w=n(18),I=n(17),A=n(19),x=n(20),T=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(I.a)(this,n),(e=t.call(this)).name="",e.state={countries:[]},e}return Object(w.a)(n)}(n(386).a),C=n(21),N=function(e,t,n){var a=Object(o.useState)(e),c=Object(r.a)(a,2),u=c[0],l=c[1],i=Object(o.useState)({}),s=Object(r.a)(i,2),f=s[0],m=s[1];return{values:u,setValues:l,errors:f,setErrors:m,handleInputChange:function(e){var n=e.target,r=n.name,a=n.value,o=Object(C.a)({},r,a);l(Object(g.a)(Object(g.a)({},u),o)),t(o)},resetForm:function(){l(Object(g.a)({},e)),m({}),n(0)}}},k=new T;var _={createState:l.c,updateState:l.e},L=Object(u.b)((function(e){return{stateList:e.state.list}}),_)((function(e){var t=Object.assign({},e),n=Object(E.useToasts)().addToast,r=function(){return!0},a=N(k,r,t.setCurrentId),u=a.values,l=a.setValues,i=(a.errors,a.setErrors),s=a.handleInputChange,f=a.resetForm;return Object(o.useEffect)((function(){0!=t.currentId&&(l(Object(g.a)({},t.stateList.find((function(e){return e.id==t.currentId})))),i({}))}),[t.currentId]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Create State"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=function(){f(),n("Submitted successfully",{appearance:"success"})};0==t.currentId?t.createState(u,r):t.updateState(t.currentId,u,r)}},c.a.createElement("input",{id:"helperText",placeholder:"Name",name:"name",type:"text",value:u.name,onChange:s,className:"form-control"}),c.a.createElement("button",{style:{marginTop:"3px"},type:"submit",className:"btn btn-primary"},"Submit")))})),M=["classes"],P={fetchAllState:l.d,deleteState:l.b};t.default=Object(u.b)((function(e){return{stateList:e.state.list}}),P)(Object(O.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,n=Object(a.a)(e,M),u=Object(o.useState)(0),l=Object(r.a)(u,2),O=l[0],v=l[1];Object(o.useEffect)((function(){n.fetchAllState()}),[]);var h=Object(E.useToasts)().addToast;return c.a.createElement("div",{elevation:3},c.a.createElement("div",{className:"row"},c.a.createElement("div",{item:!0,className:"col-md-4"},c.a.createElement(L,{currentId:O,setCurrentId:v})),c.a.createElement("div",{item:!0,className:"col-md-8"},c.a.createElement("h1",null,"State List"),c.a.createElement(i.a,null,c.a.createElement(s.a,null,c.a.createElement(f.a,{className:t.root},c.a.createElement(m.a,null,c.a.createElement(b.a,null,"Name"),c.a.createElement(b.a,null,"Country"),c.a.createElement(b.a,null,"Actions"))),c.a.createElement(d.a,null,n.stateList.map((function(e,t){return c.a.createElement(m.a,{key:t,hover:!0},c.a.createElement(b.a,null,e.name),c.a.createElement(b.a,null,"N/A"),c.a.createElement(b.a,null,"N/A"),c.a.createElement(b.a,null,c.a.createElement(p.a,{variant:"text"},c.a.createElement(y.a,null,c.a.createElement(j.a,{color:"primary",onClick:function(){v(e.id)}})),c.a.createElement(y.a,null,c.a.createElement(S.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Are you sure to delete this record?")&&n.deleteState(t,(function(){return h("Deleted successfully",{appearance:"info"})})));var t}})))))}))))))))})))}}]);
//# sourceMappingURL=122.b47b334a.chunk.js.map