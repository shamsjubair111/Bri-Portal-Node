(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[135],{256:function(e,a,t){"use strict";var l=t(7),n=t(11),c=t(0),r=t.n(c),i=t(1),m=t.n(i),s=t(6),o=t.n(s),d=t(5),u=["className","cssModule","widths","tag"],E=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:E,offset:E})]),v={tag:d.t,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,c=e.widths,i=e.tag,m=Object(n.a)(e,u),s=[];c.forEach((function(a,l){var n=e[a];if(delete m[a],n||""===n){var c=!l;if(Object(d.n)(n)){var r,i=c?"-":"-"+a+"-",u=N(c,a,n.size);s.push(Object(d.p)(o()(((r={})[u]=n.size||""===n.size,r["order"+i+n.order]=n.order||0===n.order,r["offset"+i+n.offset]=n.offset||0===n.offset,r)),t))}else{var E=N(c,a,n);s.push(E)}}})),s.length||s.push("col");var E=Object(d.p)(o()(a,s),t);return r.a.createElement(i,Object(l.a)({},m,{className:E}))};h.propTypes=v,h.defaultProps=f,a.a=h},275:function(e,a,t){"use strict";var l=t(7),n=t(11),c=t(0),r=t.n(c),i=t(1),m=t.n(i),s=t(6),o=t.n(s),d=t(5),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],E={tag:d.t,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},p=function(e){var a=e.className,t=e.cssModule,c=e.color,i=e.body,m=e.inverse,s=e.outline,E=e.tag,p=e.innerRef,v=Object(n.a)(e,u),f=Object(d.p)(o()(a,"card",!!m&&"text-white",!!i&&"card-body",!!c&&(s?"border":"bg")+"-"+c),t);return r.a.createElement(E,Object(l.a)({},v,{className:f,ref:p}))};p.propTypes=E,p.defaultProps={tag:"div"},a.a=p},277:function(e,a,t){"use strict";var l=t(7),n=t(11),c=t(0),r=t.n(c),i=t(1),m=t.n(i),s=t(6),o=t.n(s),d=t(5),u=["className","cssModule","tag"],E={tag:d.t,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(n.a)(e,u),m=Object(d.p)(o()(a,"card-header"),t);return r.a.createElement(c,Object(l.a)({},i,{className:m}))};p.propTypes=E,p.defaultProps={tag:"div"},a.a=p},468:function(e,a,t){e.exports=t.p+"static/media/user-07.c63e602a.jpg"},469:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.className,t=e.func,l=e.permission,c=[1,2,3,4,6];return n.a.createElement(n.a.Fragment,null,(null===c||void 0===c?void 0:c.includes(l))?n.a.createElement("div",{className:a,onClick:t},n.a.createElement("div",{className:"text-right"},n.a.createElement("span",null," ",n.a.createElement("i",{className:"fas fa-pencil-alt pencil-style"})," "))):null)}},483:function(e,a,t){e.exports=t.p+"static/media/cover.21a4037c.jpg"},773:function(e,a,t){"use strict";t.r(a);var l=t(29),n=t(0),c=t.n(n),r=t(25),i=t(33),m=t(275),s=t(277),o=t(306),d=t(256),u=t(260),E=t(737),p=(t(483),t(468)),v=t.n(p),f=t(102),N=t(385),h=t.n(N),g=t(101),b=t(469);a.default=Object(r.b)((function(e){return{}}))((function(){var e,a,t,r,p,N,y,w,j,O,M,I=Object(i.h)(),k=Object(i.g)(),x=Object(n.useState)({}),S=Object(l.a)(x,2),C=S[0],P=S[1],T=Object(n.useState)({}),R=Object(l.a)(T,2),U=(R[0],R[1]),A=Object(n.useState)({}),z=Object(l.a)(A,2),L=(z[0],z[1]);I.id;Object(n.useEffect)((function(){Object(f.a)("Employee/Profile/".concat(localStorage.getItem("empId"))).then((function(e){P(e),console.log("datas",e),U(e.profileImageMedia),L(e.employeeType)}))}),[]);var q=Object(n.useRef)();return c.a.createElement("div",{ref:q},c.a.createElement(m.a,{className:"uapp-card-bg"},c.a.createElement(s.a,{className:"page-header"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"mt-1"},c.a.createElement("h3",{className:"text-light"},"Employee Profile")),c.a.createElement("div",{className:"ms-2"},c.a.createElement(h.a,{trigger:function(){return c.a.createElement("span",{className:"text-light cursor-pointer",title:"Print to pdf"},c.a.createElement("i",{className:"fas fa-print"}))},content:function(){return q.current}}))),c.a.createElement("div",{className:"page-header-back-to-home"},c.a.createElement("span",{onClick:function(){k.push("/")},className:"text-light"}," ",c.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),c.a.createElement("div",{className:"uapp-employee-profile"},c.a.createElement(o.a,null,c.a.createElement(d.a,{md:"8"},c.a.createElement("div",{className:"uapp-employee-profile-left"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"uapp-employee-cover-image"},c.a.createElement("div",{className:"bg-image"},c.a.createElement("div",{className:"uplode-cover-image"},c.a.createElement("img",{src:g.a+(null===C||void 0===C||null===(e=C.coverImageMedia)||void 0===e?void 0:e.fileUrl),alt:"cover_img"})))),c.a.createElement("div",{className:"uapp-employee-profile-image-edit"},c.a.createElement(o.a,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"uapp-employee-profile-image"},c.a.createElement("div",{className:"text-left"},c.a.createElement("img",{className:"empProfileImg",src:g.a+(null===C||void 0===C||null===(a=C.profileImageMedia)||void 0===a?void 0:a.fileUrl),alt:"profile_img"})))),c.a.createElement(d.a,null,c.a.createElement(b.a,{className:"uapp-employee-profile-Edit",permission:6})))),c.a.createElement("div",{className:"uapp-employee-profile-generalInfo"},c.a.createElement(o.a,null,c.a.createElement(d.a,{md:"6"},c.a.createElement("ul",{className:"uapp-ul text-left"},c.a.createElement("li",null,c.a.createElement("h4",null,null===C||void 0===C?void 0:C.firstName," ",null===C||void 0===C?void 0:C.lastName)),c.a.createElement("li",null))),c.a.createElement(d.a,{md:"6"},c.a.createElement("ul",{className:"uapp-ul text-right1"},c.a.createElement("li",null,c.a.createElement("span",null," Email : ",null===C||void 0===C?void 0:C.email)),c.a.createElement("li",null,c.a.createElement("span",null," Phone Number : ",null===C||void 0===C?void 0:C.phoneNumber)))))))),c.a.createElement("div",{className:" info-item mt-4"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"hedding-titel"},c.a.createElement("h5",null," ",c.a.createElement("b",null,"General Information")," "),c.a.createElement("div",{className:"bg-h"})),c.a.createElement(E.a,{className:"table-bordered mt-4"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Name:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.firstName," ",null===C||void 0===C?void 0:C.lastName)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Employee type:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.employeeTypeName)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Nationality:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.nationalityName))))))),c.a.createElement("div",{className:" info-item mt-4"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"hedding-titel"},c.a.createElement("h5",null," ",c.a.createElement("b",null,"Contact Information")," "),c.a.createElement("div",{className:"bg-h"})),c.a.createElement(E.a,{className:"table-bordered mt-4"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("span",null,c.a.createElement("b",null,"Address type:"))),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(t=C.contactInfo)||void 0===t||null===(r=t.addressType)||void 0===r?void 0:r.name)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("span",null,c.a.createElement("b",null,"Phone number:"))),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.phoneNumber)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("span",null,c.a.createElement("b",null,"Cell phone number:"))),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(p=C.contactInfo)||void 0===p?void 0:p.cellPhoneNumber)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Email:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.email)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Country:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(N=C.contactInfo)||void 0===N||null===(y=N.country)||void 0===y?void 0:y.name)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"City:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(w=C.contactInfo)||void 0===w?void 0:w.city)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"State:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(j=C.contactInfo)||void 0===j?void 0:j.state)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Zip code:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(O=C.contactInfo)||void 0===O?void 0:O.zipCode)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Address line:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(M=C.contactInfo)||void 0===M?void 0:M.addressLine))))))))),c.a.createElement(d.a,{md:"4"},c.a.createElement(m.a,{className:"uapp-employee-profile-right"},c.a.createElement("div",{className:"uapp-profile-CardHeader"},c.a.createElement("div",{className:"uapp-circle-image margin-top-minus"},c.a.createElement("img",{src:v.a,alt:""})),c.a.createElement("h5",null," Md.Jamal Uddin"),c.a.createElement("p",null," Admission Manager ")),c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement("ul",{className:"uapp-ul text-center"},c.a.createElement("li",null," admissionmanager.london@uapp.uk "),c.a.createElement("li",null," +880184000000000 "),c.a.createElement("li",null," 80-82 Nelson st, Whitechapel, E12DY, london United Kingdom "))))),c.a.createElement(m.a,{className:"p-3"},c.a.createElement("h6",null," Notice"),c.a.createElement("span",{className:"bg-wg bg-width"}),c.a.createElement("div",{className:"notice-item card-widget mt-3 "},c.a.createElement("div",{className:"notice-titel"},c.a.createElement("h6",null," Super Admin"),c.a.createElement("span",null," 10/12/2021")),c.a.createElement("div",{className:"notice-description"},c.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),c.a.createElement("div",{className:"uapp-read-more-btn"},c.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",c.a.createElement("span",null," ",c.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),c.a.createElement("div",{className:"notice-item card-widget mt-3 "},c.a.createElement("div",{className:"notice-titel"},c.a.createElement("h6",null," Super Admin"),c.a.createElement("span",null," 10/12/2021")),c.a.createElement("div",{className:"notice-description"},c.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),c.a.createElement("div",{className:"uapp-read-more-btn"},c.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",c.a.createElement("span",null," ",c.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),c.a.createElement("div",{className:"notice-item card-widget mt-3 "},c.a.createElement("div",{className:"notice-titel"},c.a.createElement("h6",null," Super Admin"),c.a.createElement("span",null," 10/12/2021")),c.a.createElement("div",{className:"notice-description"},c.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),c.a.createElement("div",{className:"uapp-read-more-btn"},c.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",c.a.createElement("span",null," ",c.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))),c.a.createElement("div",{className:"notice-item card-widget mt-3 "},c.a.createElement("div",{className:"notice-titel"},c.a.createElement("h6",null," Super Admin"),c.a.createElement("span",null," 10/12/2021")),c.a.createElement("div",{className:"notice-description"},c.a.createElement("span",null," No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. "),c.a.createElement("div",{className:"uapp-read-more-btn"},c.a.createElement("a",{className:"",href:"javascript:void(0)"}," Read More ",c.a.createElement("span",null," ",c.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," ")," ")))))))))}))}}]);
//# sourceMappingURL=135.5f83ed03.chunk.js.map