(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[216],{265:function(e,a,t){"use strict";var n=t(11),l=t(15),r=t(23),c=t(18),s=t(0),o=t.n(s),i=t(2),u=t.n(i),d=t(8),m=t.n(d),p=t(7),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,s=e.valid,i=e.invalid,u=e.tag,d=e.addon,v=e.plaintext,E=e.innerRef,N=Object(l.a)(e,f),g=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),b=u||("select"===r||"textarea"===r?r:"input"),S="form-control";v?(S+="-plaintext",b=u||"input"):"file"===r?S+="-file":"range"===r?S+="-range":g&&(S=d?null:"form-check-input"),N.size&&h.test(N.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=N.size,delete N.size);var y=Object(p.p)(m()(a,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,S),t);return("input"===b||u&&"function"===typeof u)&&(N.type=r),N.children&&!v&&"select"!==r&&"string"===typeof b&&"select"!==b&&(Object(p.v)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete N.children),o.a.createElement(b,Object(n.a)({},N,{ref:E,className:y,"aria-invalid":i}))},a}(o.a.Component);E.propTypes=v,E.defaultProps={type:"text"},a.a=E},269:function(e,a,t){"use strict";var n=t(11),l=t(15),r=t(0),c=t.n(r),s=t(2),o=t.n(s),i=t(8),u=t.n(i),d=t(7),m=["className","cssModule","widths","tag"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),v={tag:d.t,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,s=e.tag,o=Object(l.a)(e,m),i=[];r.forEach((function(a,n){var l=e[a];if(delete o[a],l||""===l){var r=!n;if(Object(d.n)(l)){var c,s=r?"-":"-"+a+"-",m=N(r,a,l.size);i.push(Object(d.p)(u()(((c={})[m]=l.size||""===l.size,c["order"+s+l.order]=l.order||0===l.order,c["offset"+s+l.offset]=l.offset||0===l.offset,c)),t))}else{var p=N(r,a,l);i.push(p)}}})),i.length||i.push("col");var p=Object(d.p)(u()(a,i),t);return c.a.createElement(s,Object(n.a)({},o,{className:p}))};g.propTypes=v,g.defaultProps=E,a.a=g},348:function(e,a,t){"use strict";var n=t(11),l=t(15),r=t(0),c=t.n(r),s=t(2),o=t.n(s),i=t(8),u=t.n(i),d=t(7),m=["className","cssModule","noGutters","tag","form","widths"],p=o.a.oneOfType([o.a.number,o.a.string]),f={tag:d.t,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},v={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,s=e.tag,o=e.form,i=e.widths,p=Object(l.a)(e,m),f=[];i.forEach((function(a,t){var n=e[a];if(delete p[a],n){var l=!t;f.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var v=Object(d.p)(u()(a,r?"no-gutters":null,o?"form-row":"row",f),t);return c.a.createElement(s,Object(n.a)({},p,{className:v}))};E.propTypes=f,E.defaultProps=v,a.a=E},575:function(e,a,t){},964:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=(t(575),t(14)),c=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},s=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},o=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},i=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},u=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},d=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},m=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},p=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},f=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},v=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},E=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},N=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))},g=t(19),h=t(1),b=t(348),S=t(269),y=t(303),O=t(265),x=t(271),I=t(36),T=function(e){var a=e.style,t=e.icon,n=e.title,r=e.link,c=e.count;return l.a.createElement(I.a,{to:r,style:{textDecoration:"none"}},l.a.createElement("div",{className:"".concat(a," uapp-card")},l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"  ",l.a.createElement("span",null," ",t," ")," ",c),l.a.createElement("h5",null," ",n," "))))},J=function(){var e=JSON.parse(localStorage.getItem("current_user")),a={control:function(e,a){return Object(h.a)(Object(h.a)({},e),{},{background:"#fff",borderColor:"#9e9e9e",minHeight:"33px",height:"33px",boxShadow:(a.isFocused,null),paddingBottom:"20px"})}},t=Object(n.useState)([]),r=Object(g.a)(t,2),c=(r[0],r[1],Object(n.useState)("Select Month")),s=Object(g.a)(c,2),o=s[0],i=(s[1],Object(n.useState)(0)),u=Object(g.a)(i,2),d=u[0],m=(u[1],Object(n.useState)([])),p=Object(g.a)(m,2),f=(p[0],p[1],Object(n.useState)("Select Year")),v=Object(g.a)(f,2),E=v[0],N=(v[1],Object(n.useState)(0)),I=Object(g.a)(N,2),J=I[0];I[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("div",{className:"uapp-dashboard"},l.a.createElement("div",{className:"uapp-user-name"},l.a.createElement(b.a,null,l.a.createElement(S.a,{sm:"9",xs:"12"},l.a.createElement("h2",null,"Welcome, ",null===e||void 0===e?void 0:e.displayName,".")))),l.a.createElement("div",{className:"uapp-user-card mt-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},l.a.createElement(T,{style:"uapp-primary-card",icon:l.a.createElement("i",{class:"fas fa-angle-double-right"}),count:500,title:"Total Application-1"})),l.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},l.a.createElement(T,{style:"uapp-secondary-card",icon:l.a.createElement("i",{class:"fas fa-angle-double-right"}),count:600,title:"Total Application-2"})),l.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},l.a.createElement(T,{style:"uapp-purple-card",icon:l.a.createElement("i",{class:"fas fa-angle-double-right"}),count:700,title:"Total Application-3"})),l.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},l.a.createElement(T,{style:"uapp-danger-card",icon:l.a.createElement("i",{class:"fas fa-angle-double-right"}),count:800,title:"Total Application-4"})),l.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},l.a.createElement(T,{style:"uapp-warning-card",icon:l.a.createElement("i",{class:"fas fa-angle-double-right"}),count:900,title:"Total Application-5"})),l.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6"},l.a.createElement(T,{style:"uapp-info-card",icon:l.a.createElement("i",{class:"fas fa-angle-double-right"}),count:1e3,title:"Total Application-6"})))),l.a.createElement("div",{className:"uapp-dashboard-activity"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},l.a.createElement("div",{className:"card",style:{height:"350px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("span",null,l.a.createElement("h5",{class:"uapp-dachboard-head"},"New Application")),l.a.createElement("span",{class:"db-app-count"},"70")))),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},l.a.createElement("div",{className:"card",style:{height:"106px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("span",null,l.a.createElement("h5",{class:"uapp-dachboard-head"},"Universities")),l.a.createElement("span",{class:"db-app-count"},"70"))),l.a.createElement("div",{className:"card",style:{height:"106px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("span",null,l.a.createElement("h5",{class:"uapp-dachboard-head"},"Admission Managers")),l.a.createElement("span",{class:"db-app-count"},"70"))),l.a.createElement("div",{className:"card",style:{height:"106px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("span",null,l.a.createElement("h5",{class:"uapp-dachboard-head"},"Admission Officers")),l.a.createElement("span",{class:"db-app-count"},"70"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 col-md-12 col-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("span",null,l.a.createElement("h5",{class:"uapp-dachboard-head"},"Progress Report")),l.a.createElement(y.a,{className:"mt-3"},l.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",{className:"mt-1 me-1",style:{fontSize:"16px",fontWeight:"500"}},"Daily"),l.a.createElement(O.a,{className:"ms-1",type:"date"})),l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",{className:"mt-1 me-1",style:{fontSize:"16px",fontWeight:"500"}},"Monthly"),l.a.createElement(x.a,{styles:a,value:{label:o,value:d},className:"ms-1",name:"UniversityTypeId",id:"UniversityTypeId"})),l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",{className:"mt-1 me-1",style:{fontSize:"16px",fontWeight:"500"}},"Yearly"),l.a.createElement(x.a,{styles:a,value:{label:E,value:J},className:"ms-1",name:"UniversityTypeId",id:"UniversityTypeId"}))),l.a.createElement("hr",null))))))))))},j=function(){null===JSON||void 0===JSON||JSON.parse(localStorage.getItem("current_user"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h3",null,"Dashboard Is Under Maintenance. Stay Tuned for Further Notification")))};a.default=function(){var e=null===JSON||void 0===JSON?void 0:JSON.parse(localStorage.getItem("current_user"));return l.a.createElement("div",null,e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.SystemAdmin)&&l.a.createElement(s,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.Admin)&&l.a.createElement(i,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.AdmissionManager)&&l.a.createElement(o,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.Provider)&&l.a.createElement(u,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.BranchManager)&&l.a.createElement(d,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.Student)&&l.a.createElement(m,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.AccountManager)&&l.a.createElement(p,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.Editor)&&l.a.createElement(f,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.FinanceManager)&&l.a.createElement(v,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.AccountOfficer)&&l.a.createElement(E,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.ComplianceManager)&&l.a.createElement(N,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.ProviderAdmin)&&l.a.createElement(J,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.AdmissionOfficer)&&l.a.createElement(j,null),e.userTypeId==(null===r.a||void 0===r.a?void 0:r.a.Consultant)&&l.a.createElement(c,null))}}}]);
//# sourceMappingURL=216.4db2264b.chunk.js.map