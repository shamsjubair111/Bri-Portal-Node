(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[195],{267:function(e,a,t){"use strict";var l=t(6),n=t(12),r=t(0),c=t.n(r),i=t(1),o=t.n(i),m=t(5),s=t.n(m),d=t(4),u=["className","cssModule","widths","tag"],E=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:E,offset:E})]),v={tag:d.t,xs:p,sm:p,md:p,lg:p,xl:p,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,i=e.tag,o=Object(n.a)(e,u),m=[];r.forEach((function(a,l){var n=e[a];if(delete o[a],n||""===n){var r=!l;if(Object(d.n)(n)){var c,i=r?"-":"-"+a+"-",u=b(r,a,n.size);m.push(Object(d.p)(s()(((c={})[u]=n.size||""===n.size,c["order"+i+n.order]=n.order||0===n.order,c["offset"+i+n.offset]=n.offset||0===n.offset,c)),t))}else{var E=b(r,a,n);m.push(E)}}})),m.length||m.push("col");var E=Object(d.p)(s()(a,m),t);return c.a.createElement(i,Object(l.a)({},o,{className:E}))};h.propTypes=v,h.defaultProps=f,a.a=h},305:function(e,a,t){"use strict";var l=t(6),n=t(12),r=t(0),c=t.n(r),i=t(1),o=t.n(i),m=t(5),s=t.n(m),d=t(4),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],E={tag:d.t,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,i=e.body,o=e.inverse,m=e.outline,E=e.tag,p=e.innerRef,v=Object(n.a)(e,u),f=Object(d.p)(s()(a,"card",!!o&&"text-white",!!i&&"card-body",!!r&&(m?"border":"bg")+"-"+r),t);return c.a.createElement(E,Object(l.a)({},v,{className:f,ref:p}))};p.propTypes=E,p.defaultProps={tag:"div"},a.a=p},348:function(e,a,t){"use strict";var l=t(6),n=t(12),r=t(0),c=t.n(r),i=t(1),o=t.n(i),m=t(5),s=t.n(m),d=t(4),u=["className","cssModule","noGutters","tag","form","widths"],E=o.a.oneOfType([o.a.number,o.a.string]),p={tag:d.t,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:E,sm:E,md:E,lg:E,xl:E},v={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,i=e.tag,o=e.form,m=e.widths,E=Object(n.a)(e,u),p=[];m.forEach((function(a,t){var l=e[a];if(delete E[a],l){var n=!t;p.push(n?"row-cols-"+l:"row-cols-"+a+"-"+l)}}));var v=Object(d.p)(s()(a,r?"no-gutters":null,o?"form-row":"row",p),t);return c.a.createElement(i,Object(l.a)({},E,{className:v}))};f.propTypes=p,f.defaultProps=v,a.a=f},479:function(e,a,t){e.exports=t.p+"static/media/user-07.c63e602a.jpg"},480:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.className,t=e.func;e.permission;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:a,onClick:t},n.a.createElement("div",{className:"text-right"},n.a.createElement("span",null," ",n.a.createElement("i",{className:"fas fa-pencil-alt pencil-style"})," "))))}},546:function(e,a,t){e.exports=t.p+"static/media/cover.21a4037c.jpg"},795:function(e,a,t){"use strict";t.r(a);var l=t(29),n=t(0),r=t.n(n),c=t(26),i=t(33),o=t(305),m=t(264),s=t(348),d=t(267),u=t(261),E=t(759),p=(t(546),t(479),t(103)),v=t(387),f=t.n(v),b=t(48),h=t(480),g=t(357);a.default=Object(c.b)((function(e){return{}}))((function(){var e,a,t,c,v,N,y,w,j,O,x,I=Object(i.i)().id,M=Object(i.g)(),T=Object(n.useState)({}),P=Object(l.a)(T,2),k=P[0],C=P[1],S=Object(n.useState)({}),z=Object(l.a)(S,2),G=(z[0],z[1]),_=Object(n.useState)({}),R=Object(l.a)(_,2),J=(R[0],R[1]),L=JSON.parse(localStorage.getItem("permissions"));Object(n.useEffect)((function(){Object(p.a)("Employee/Profile/".concat(I)).then((function(e){C(e),G(e.profileImageMedia),J(e.employeeType)}))}),[]);var U=Object(n.useRef)();return r.a.createElement("div",{ref:U},r.a.createElement(o.a,{className:"uapp-card-bg"},r.a.createElement(m.a,{className:"page-header"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"mt-1"},r.a.createElement("h3",{className:"text-light"},"Employee Profile")),r.a.createElement("div",{className:"ms-2"},r.a.createElement(f.a,{trigger:function(){return r.a.createElement("span",{className:"text-light cursor-pointer",title:"Print to pdf"},r.a.createElement("i",{className:"fas fa-print"}))},content:function(){return U.current}}))),r.a.createElement("div",{className:"page-header-back-to-home"},r.a.createElement("span",{onClick:function(){M.push("/employeeList")},className:"text-light"}," ",r.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Employee List")))),r.a.createElement("div",{className:"uapp-employee-profile"},r.a.createElement(s.a,null,r.a.createElement(d.a,{md:"12"},r.a.createElement("div",{className:"uapp-employee-profile-left"},r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"uapp-employee-cover-image"},r.a.createElement("div",{className:"bg-image"},r.a.createElement("div",{className:"uplode-cover-image"},r.a.createElement("img",{src:b.a+(null===k||void 0===k||null===(e=k.coverImageMedia)||void 0===e?void 0:e.fileUrl),alt:"cover_img"})))),r.a.createElement("div",{className:"uapp-employee-profile-image-edit"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"uapp-employee-profile-image"},r.a.createElement("div",{className:"text-left"},r.a.createElement("img",{className:"empProfileImg",src:b.a+(null===k||void 0===k||null===(a=k.profileImageMedia)||void 0===a?void 0:a.fileUrl),alt:"profile_img"})))),r.a.createElement(d.a,null,(null===L||void 0===L?void 0:L.includes(null===g.a||void 0===g.a?void 0:g.a.Update_Staff))?r.a.createElement(h.a,{className:"uapp-employee-profile-Edit",func:function(){M.push("/employeeGeneralInfo/".concat(I))}}):null))),r.a.createElement("div",{className:"uapp-employee-profile-generalInfo"},r.a.createElement(s.a,null,r.a.createElement(d.a,{md:"6"},r.a.createElement("ul",{className:"uapp-ul text-left"},r.a.createElement("li",null,r.a.createElement("h4",null,null===k||void 0===k?void 0:k.firstName," ",null===k||void 0===k?void 0:k.lastName)))),r.a.createElement(d.a,{md:"6"},r.a.createElement("ul",{className:"uapp-ul text-right1"},r.a.createElement("li",null,r.a.createElement("span",null," Email : ",null===k||void 0===k?void 0:k.email)),r.a.createElement("li",null,r.a.createElement("span",null," Phone Number : ",null===k||void 0===k?void 0:k.phoneNumber)))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"General Information")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement(E.a,{className:"table-bordered mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Name:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k?void 0:k.firstName," ",null===k||void 0===k?void 0:k.lastName)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Employee type:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k?void 0:k.employeeTypeName)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Nationality:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k?void 0:k.nationalityName))))))),r.a.createElement("div",{className:" info-item mt-4"},r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"hedding-titel"},r.a.createElement("h5",null," ",r.a.createElement("b",null,"Contact Information")," "),r.a.createElement("div",{className:"bg-h"})),r.a.createElement(E.a,{className:"table-bordered mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("span",null,r.a.createElement("b",null,"Address type:"))),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(t=k.contactInfo)||void 0===t||null===(c=t.addressType)||void 0===c?void 0:c.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("span",null,r.a.createElement("b",null,"Phone number:"))),r.a.createElement("td",{width:"60%"},null===k||void 0===k?void 0:k.phoneNumber)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("span",null,r.a.createElement("b",null,"Cell phone number:"))),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(v=k.contactInfo)||void 0===v?void 0:v.cellPhoneNumber)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Email:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k?void 0:k.email)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Country:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(N=k.contactInfo)||void 0===N||null===(y=N.country)||void 0===y?void 0:y.name)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"City:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(w=k.contactInfo)||void 0===w?void 0:w.city)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"State:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(j=k.contactInfo)||void 0===j?void 0:j.state)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Zip code:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(O=k.contactInfo)||void 0===O?void 0:O.zipCode)),r.a.createElement("tr",null,r.a.createElement("td",{width:"40%"},r.a.createElement("b",null,"Address line:")),r.a.createElement("td",{width:"60%"},null===k||void 0===k||null===(x=k.contactInfo)||void 0===x?void 0:x.addressLine))))))))))))}))}}]);
//# sourceMappingURL=195.56de0811.chunk.js.map