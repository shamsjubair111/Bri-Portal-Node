(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[139],{255:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(7),m=["className","cssModule","innerRef","tag"],p={tag:d.t,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,i=Object(c.a)(e,m),o=Object(d.p)(u()(a,"card-body"),t);return s.a.createElement(r,Object(n.a)({},i,{className:o,ref:l}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},258:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(23),s=t(18),r=t(0),i=t.n(r),o=t(2),u=t.n(o),d=t(8),m=t.n(d),p=t(7),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,r=e.valid,o=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,v=e.innerRef,h=Object(c.a)(e,f),g=["radio","checkbox"].indexOf(l)>-1,j=new RegExp("\\D","g"),O=u||("select"===l||"textarea"===l?l:"input"),E="form-control";b?(E+="-plaintext",O=u||"input"):"file"===l?E+="-file":"range"===l?E+="-range":g&&(E=d?null:"form-check-input"),h.size&&j.test(h.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var N=Object(p.p)(m()(a,o&&"is-invalid",r&&"is-valid",!!s&&"form-control-"+s,E),t);return("input"===O||u&&"function"===typeof u)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof O&&"select"!==O&&(Object(p.v)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(O,Object(n.a)({},h,{ref:v,className:N,"aria-invalid":o}))},a}(i.a.Component);v.propTypes=b,v.defaultProps={type:"text"},a.a=v},259:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(7),m=["className","cssModule","tag"],p={tag:d.t,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,m),i=Object(d.p)(u()(a,"card-header"),t);return s.a.createElement(l,Object(n.a)({},r,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},260:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(7),m=["className","cssModule","widths","tag"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),b={tag:d.t,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.widths,r=e.tag,i=Object(c.a)(e,m),o=[];l.forEach((function(a,n){var c=e[a];if(delete i[a],c||""===c){var l=!n;if(Object(d.n)(c)){var s,r=l?"-":"-"+a+"-",m=h(l,a,c.size);o.push(Object(d.p)(u()(((s={})[m]=c.size||""===c.size,s["order"+r+c.order]=c.order||0===c.order,s["offset"+r+c.offset]=c.offset||0===c.offset,s)),t))}else{var p=h(l,a,c);o.push(p)}}})),o.length||o.push("col");var p=Object(d.p)(u()(a,o),t);return s.a.createElement(r,Object(n.a)({},i,{className:p}))};g.propTypes=b,g.defaultProps=v,a.a=g},261:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),c=t.n(n).a.createContext({})},265:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(7),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.t,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.row,r=e.disabled,i=e.check,o=e.inline,p=e.tag,f=Object(c.a)(e,m),b=Object(d.p)(u()(a,!!l&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!r)&&"disabled"),t);return"fieldset"===p&&(f.disabled=r),s.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},268:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(23),s=t(18),r=t(0),i=t.n(r),o=t(2),u=t.n(o),d=t(8),m=t.n(d),p=t(7),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,r=e.innerRef,o=Object(c.a)(e,f),u=Object(p.p)(m()(a,!!l&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},o,{ref:r,className:u}))},a}(r.Component);v.propTypes=b,v.defaultProps={tag:"form"},a.a=v},306:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(7),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:d.t,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tabs,r=e.pills,i=e.vertical,o=e.horizontal,p=e.justified,f=e.fill,b=e.navbar,v=e.card,h=e.tag,g=Object(c.a)(e,m),j=Object(d.p)(u()(a,b?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":l,"card-header-tabs":v&&l,"nav-pills":r,"card-header-pills":v&&r,"nav-justified":p,"nav-fill":f}),t);return s.a.createElement(h,Object(n.a)({},g,{className:j}))};f.propTypes=p,f.defaultProps={tag:"ul",vertical:!1},a.a=f},310:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(7),m=["className","cssModule","active","tag"],p={tag:d.t,active:i.a.bool,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.active,r=e.tag,i=Object(c.a)(e,m),o=Object(d.p)(u()(a,"nav-item",!!l&&"active"),t);return s.a.createElement(r,Object(n.a)({},i,{className:o}))};f.propTypes=p,f.defaultProps={tag:"li"},a.a=f},311:function(e,a,t){"use strict";var n=t(11),c=t(15),l=t(23),s=t(18),r=t(0),i=t.n(r),o=t(2),u=t.n(o),d=t(8),m=t.n(d),p=t(7),f=["className","cssModule","active","tag","innerRef"],b={tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.active,s=e.tag,r=e.innerRef,o=Object(c.a)(e,f),u=Object(p.p)(m()(a,"nav-link",{disabled:o.disabled,active:l}),t);return i.a.createElement(s,Object(n.a)({},o,{ref:r,onClick:this.onClick,className:u}))},a}(i.a.Component);v.propTypes=b,v.defaultProps={tag:"a"},a.a=v},317:function(e,a,t){"use strict";var n=t(11),c=t(18),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(261),m=t(7),p={tag:m.t,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(c.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.tag,l=Object(m.q)(this.props,Object.keys(p)),r=Object(m.p)(u()("tab-content",a),t);return s.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(c,Object(n.a)({},l,{className:r})))},a}(l.Component);a.a=f,f.propTypes=p,f.defaultProps={tag:"div"}},319:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(11),c=t(15),l=t(0),s=t.n(l),r=t(2),i=t.n(r),o=t(8),u=t.n(o),d=t(261),m=t(7),p=["className","cssModule","tabId","tag"],f={tag:m.t,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function b(e){var a=e.className,t=e.cssModule,l=e.tabId,r=e.tag,i=Object(c.a)(e,p),o=function(e){return Object(m.p)(u()("tab-pane",a,{active:l===e}),t)};return s.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return s.a.createElement(r,Object(n.a)({},i,{className:o(a)}))}))}b.propTypes=f,b.defaultProps={tag:"div"}},909:function(e,a,t){"use strict";t.r(a);var n=t(31),c=t(19),l=t(3),s=t.n(l),r=t(0),i=t.n(r),o=t(37),u=t(293),d=t(259),m=t(255),p=t(306),f=t(310),b=t(311),v=t(317),h=t(319),g=t(268),j=t(265),O=t(260),E=t(258),N=t(98),y=t(29),M=t(100),T=t(264);a.default=function(){var e=Object(o.i)().id,a=Object(r.useState)({}),t=Object(c.a)(a,2),l=t[0],x=t[1],k=Object(o.h)(),C=Object(r.useState)("Country"),R=Object(c.a)(C,2),w=R[0],S=R[1],I=Object(r.useState)(0),z=Object(c.a)(I,2),P=z[0],B=z[1],q=Object(r.useState)("State"),D=Object(c.a)(q,2),L=D[0],V=D[1],F=Object(r.useState)(0),G=Object(c.a)(F,2),J=G[0],U=G[1],_=Object(r.useState)([]),A=Object(c.a)(_,2),H=A[0],K=A[1],Q=Object(r.useState)([]),W=Object(c.a)(Q,2),X=W[0],Y=W[1];Object(r.useEffect)((function(){Object(M.a)("Country/Index").then((function(e){K(e)}))}),[]),Object(r.useEffect)((function(){Object(M.a)("Branch/Get/".concat(null===k||void 0===k?void 0:k.pathname)).then((function(e){var a,t;x(e),S(null===e||void 0===e||null===(a=e.country)||void 0===a?void 0:a.name),V(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.name)}))}),[]);var Z=Object(o.g)(),$=Object(r.useState)("1"),ee=Object(c.a)($,2),ae=ee[0],te=ee[1],ne=Object(r.useState)(!1),ce=Object(c.a)(ne,2),le=ce[0],se=ce[1],re=function(a){te(a),"2"==a&&Z.push("/updateBranchManager/".concat(e))},ie=null===H||void 0===H?void 0:H.map((function(e){return{label:e.name,value:e.id}})),oe=null===X||void 0===X?void 0:X.map((function(e){return{label:e.name,value:e.id}})),ue=function(e,a){S(e),B(a),function(e){Object(M.a)("State/GetbyCountryId/".concat(e)).then((function(e){Y(e)}))}(a),V("")},de=localStorage.getItem("token");return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"page-header"},i.a.createElement("h3",null,"Update Branch Information"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{onClick:function(){Z.push("/branchList")}}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Branch List")))),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{tabs:!0},i.a.createElement(f.a,null,i.a.createElement(b.a,{active:"1"===ae,onClick:function(){return re("1")}},"Branch Information")),i.a.createElement(f.a,null,le?i.a.createElement(b.a,{active:"2"===ae,onClick:function(){return re("2")}},"Manager Information"):i.a.createElement(b.a,{disabled:!0,active:"2"===ae},"Manager Information"))),i.a.createElement(v.a,{activeTab:ae},i.a.createElement(h.a,{tabId:"1"},i.a.createElement(g.a,{className:"mt-5",onSubmit:function(a){a.preventDefault();var t,c=new FormData(a.target),l=Object(n.a)(c.values());try{for(l.s();!(t=l.n()).done;)t.value}catch(r){l.e(r)}finally{l.f()}s.a.put("".concat(y.a,"Branch/Update"),c,{headers:{authorization:de}}).then((function(a){var t,n,c,l,s;localStorage.setItem("branchId",null===a||void 0===a||null===(t=a.data)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.id);var r=null===a||void 0===a||null===(c=a.data)||void 0===c||null===(l=c.result)||void 0===l?void 0:l.id;200===(null===a||void 0===a?void 0:a.status)&&!0===(null===a||void 0===a||null===(s=a.data)||void 0===s?void 0:s.isSuccess)&&(se(!0),Z.push({pathname:"/updateBranchManager/".concat(e),id:r}))}))}},i.a.createElement("input",{type:"hidden",name:"id",id:"id",value:null===l||void 0===l?void 0:l.id}),i.a.createElement("input",{type:"hidden",name:"branchCode",id:"branchCode",value:null===l||void 0===l?void 0:l.branchCode}),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Branch Name ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"name",id:"name",defaultValue:null===l||void 0===l?void 0:l.name,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Address Line ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"addressLine",id:"addressLine",defaultValue:null===l||void 0===l?void 0:l.addressLine,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Email ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"email",name:"email",id:"email",defaultValue:null===l||void 0===l?void 0:l.email,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Phone Number ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"phoneNumber",id:"phoneNumber",defaultValue:null===l||void 0===l?void 0:l.phoneNumber}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Telephone Number ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"telePhoneNumber",id:"telePhoneNumber",defaultValue:null===l||void 0===l?void 0:l.telePhoneNumber,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Country ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(T.a,{options:ie,value:{label:w,value:P},onChange:function(e){return ue(e.label,e.value)},name:"countryId",id:"countryId",required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"State ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(T.a,{options:oe,value:{label:L,value:J},onChange:function(e){return a=e.label,t=e.value,V(a),void U(t);var a,t},name:"stateId",id:"stateId",required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(O.a,{md:"7"},i.a.createElement(N.a.Ripple,{type:"submit",className:"mr-1 mt-3 badge-primary"},"Submit")))))))))}}}]);
//# sourceMappingURL=139.e065abd8.chunk.js.map