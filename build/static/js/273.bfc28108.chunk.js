(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[273],{251:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(97);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),r=(e.url,e.func),s=e.name,o=e.disable;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{onClick:r,color:n,type:i,className:t,disabled:o}," ",a,s," "))}},862:function(e,t,a){"use strict";a.r(t);var n=a(30),l=a(19),c=a(0),i=a.n(c),r=a(271),s=a(303),o=a(266),u=a(260),m=a(318),d=a(327),v=a(328),b=a(344),E=a(345),p=a(272),f=a(265),j=a(261),y=a(269),h=a(763),S=a(354),g=a(307),N=a(305),O=a(310),D=a(97),P=a(3),k=a.n(P),C=a(31),w=a(37),x=a(256),I=a(251),U=a(99),q=a(299);t.default=function(){var e=Object(c.useState)("3"),t=Object(l.a)(e,2),a=t[0],P=t[1],A=Object(c.useState)([]),F=Object(l.a)(A,2),R=F[0],T=F[1],Y=Object(c.useState)("Select Delivery Pattern"),z=Object(l.a)(Y,2),B=z[0],J=z[1],L=Object(c.useState)(0),_=Object(l.a)(L,2),G=_[0],H=_[1],K=Object(c.useState)(!1),M=Object(l.a)(K,2),Q=M[0],V=M[1],W=Object(c.useState)([]),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(c.useState)(0),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],le=Object(c.useState)(!1),ce=Object(l.a)(le,2),ie=ce[0],re=ce[1],se=Object(c.useState)(!1),oe=Object(l.a)(se,2),ue=oe[0],me=oe[1],de=Object(c.useState)(""),ve=Object(l.a)(de,2),be=ve[0],Ee=ve[1],pe=Object(c.useState)(0),fe=Object(l.a)(pe,2),je=fe[0],ye=fe[1],he=Object(w.i)(),Se=he.id,ge=he.subjId;Object(c.useEffect)((function(){Object(U.a)("DeliveryPatternDD/index").then((function(e){console.log(e,"response"),T(e)})),Object(U.a)("SubjectDeliveryPattern/GetBySubject/".concat(ge)).then((function(e){console.log("dsdsdsdds",e),$(e)}))}),[ge,ie]);var Ne=R.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Oe=Object(w.g)(),De=Object(x.useToasts)().addToast,Pe=function(e){P(e),"1"==e&&Oe.push("/addUniProfileSubject/".concat(Se,"/").concat(ge)),"2"==e&&Oe.push("/addUniProfileSubjectFee/".concat(Se,"/").concat(ge)),"4"==e&&Oe.push("/addUniProfileSubjectRequirements/".concat(Se,"/").concat(ge)),"5"==e&&Oe.push("/addUniProfileSubjectDocumentRequirement/".concat(Se,"/").concat(ge))},ke=localStorage.getItem("token"),Ce=function(){me(!1),Ee(""),ye(0)};return i.a.createElement("div",null,i.a.createElement(s.a,{className:"uapp-card-bg"},i.a.createElement(o.a,{className:"page-header"},i.a.createElement("h3",{className:"text-white"},"Subject Delivery Pattern"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{onClick:function(){Oe.push("/universityDetails/".concat(Se))},className:"text-white"}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to University Details")))),i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,{tabs:!0},i.a.createElement(d.a,null,i.a.createElement(v.a,{active:"1"===a,onClick:function(){return Pe("1")}},"Subject Information")),i.a.createElement(d.a,null,i.a.createElement(v.a,{active:"2"===a,onClick:function(){return Pe("2")}},"Subject Fee Information")),i.a.createElement(d.a,null,i.a.createElement(v.a,{active:"3"===a,onClick:function(){return Pe("3")}},"Delivery Pattern")),i.a.createElement(d.a,null,i.a.createElement(v.a,{active:"4"===a,onClick:function(){return Pe("4")}},"Requirement")),i.a.createElement(d.a,null,i.a.createElement(v.a,{active:"5"===a,onClick:function(){return Pe("5")}},"Document Requirement"))),i.a.createElement(b.a,{activeTab:a},i.a.createElement(E.a,{tabId:"3"},i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-md-6 col-sm-12"},i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Add Delivery Pattern")," "),i.a.createElement("div",{className:"bg-h"}))),i.a.createElement(p.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),l=Object(n.a)(a);try{for(l.s();!(t=l.n()).done;){var c=t.value;console.log("values",c)}}catch(i){l.e(i)}finally{l.f()}0===G?V(!0):0!=ae?k.a.put("".concat(C.a,"SubjectDeliveryPattern/Update"),a,{headers:{"Content-Type":"application/json",authorization:ke}}).then((function(e){var t,a;200===e.status&&!0===e.data.isSuccess?(De(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),J("Select Delivery Pattern"),H(0),re(!ie),ne(0)):(De(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),J("Select Delivery Pattern"),H(0),ne(0))})):k.a.post("".concat(C.a,"SubjectDeliveryPattern/Create"),a,{headers:{"Content-Type":"application/json",authorization:ke}}).then((function(e){var t,a;200===e.status&&!0===e.data.isSuccess?(De(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),J("Select Delivery Pattern"),H(0),re(!ie),ne(0)):(J("Select Delivery Pattern"),H(0),De(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}))}))},className:"mt-0"},0!=ae?i.a.createElement(f.a,{type:"hidden",id:"id",name:"id",value:ae}):null,i.a.createElement(f.a,{type:"hidden",id:"subjectId",name:"subjectId",value:ge}),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(y.a,{md:"4"},i.a.createElement("span",null,"Delivery Pattern"," ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(y.a,{md:"8"},i.a.createElement(r.a,{options:Ne,value:{label:B,value:G},onChange:function(e){return t=e.label,a=e.value,V(!1),J(t),void H(a);var t,a},name:"deliveryPatternId",id:"deliveryPatternId"}),Q&&i.a.createElement("span",{className:"text-danger"},"You must select delivery pattern"))),i.a.createElement(j.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),i.a.createElement(j.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(I.a,{type:"submit",className:"mr-0 mt-3 badge-primary",name:"Save",permission:6})))),i.a.createElement("div",{className:"col-md-6 col-sm-12"},i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Delivery Pattern List")," "),i.a.createElement("div",{className:"bg-h"}))),i.a.createElement("div",{className:"table-responsive"},i.a.createElement(h.a,{className:"table-sm table-bordered"},i.a.createElement("thead",{className:"thead-uapp-bg"},i.a.createElement("tr",{style:{textAlign:"center"}},i.a.createElement("th",null,"SL/NO"),i.a.createElement("th",null,"Delivery Pattern"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,null===Z||void 0===Z?void 0:Z.map((function(e,t){var a;return i.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},i.a.createElement("th",{scope:"row"},t+1),i.a.createElement("td",null,null===e||void 0===e||null===(a=e.deliveryPattern)||void 0===a?void 0:a.name),i.a.createElement("td",null,i.a.createElement(S.a,null,i.a.createElement(I.a,{func:function(){return function(e){var t,a;console.log(e),ne(null===e||void 0===e?void 0:e.id),J(null===e||void 0===e||null===(t=e.deliveryPattern)||void 0===t?void 0:t.name),H(null===e||void 0===e||null===(a=e.deliveryPattern)||void 0===a?void 0:a.id)}(e)},className:"mx-1 btn-sm",color:"warning",icon:i.a.createElement("i",{className:"fas fa-edit"}),permission:6}),i.a.createElement(I.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;Ee(null===e||void 0===e||null===(t=e.deliveryPattern)||void 0===t?void 0:t.name),ye(null===e||void 0===e?void 0:e.id),me(!0)}(e)},color:"danger",icon:i.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6})),i.a.createElement(g.a,{isOpen:ue,toggle:Ce,className:"uapp-modal"},i.a.createElement(N.a,null,i.a.createElement("p",null,"Are You Sure to Delete this ",i.a.createElement("b",null,be)," ? Once Deleted it can't be Undone!")),i.a.createElement(O.a,null,i.a.createElement(D.a,{color:"danger",onClick:function(){return function(e){Object(q.a)("SubjectDeliveryPattern/Delete/".concat(e)).then((function(e){me(!1),re(!ie),De(e,{appearance:"error",autoDismiss:!0}),Ee(""),ye(0)}))}(je)}},"YES"),i.a.createElement(D.a,{onClick:Ce},"NO")))))}))))))))),i.a.createElement(j.a,{className:"has-icon-left position-relative mt-5",style:{display:"flex",justifyContent:"space-between"}},i.a.createElement(I.a,{func:function(){Oe.push("/addUniProfileSubjectFee/".concat(Se,"/").concat(ge))},color:"warning uapp-form-button float-right",name:"Previous Page",permission:6}),i.a.createElement(D.a,{onClick:function(){Oe.push({pathname:"/addUniProfileSubjectRequirements/".concat(Se,"/").concat(ge)})},color:"warning"},"Next Page")))))}}}]);
//# sourceMappingURL=273.bfc28108.chunk.js.map