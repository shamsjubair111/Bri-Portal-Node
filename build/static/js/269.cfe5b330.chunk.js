(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[269],{251:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(97);t.a=function(e){var t=e.className,a=e.icon,n=e.color,r=(e.permission,e.type),s=(e.url,e.func),i=e.name,o=e.disable;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{onClick:s,color:n,type:r,className:t,disabled:o}," ",a,i," "))}},844:function(e,t,a){"use strict";a.r(t);var n=a(30),l=a(19),c=a(0),r=a.n(c),s=a(271),i=a(303),o=a(266),u=a(260),m=a(318),d=a(327),v=a(328),b=a(344),p=a(345),E=a(272),j=a(265),f=a(261),h=a(269),y=a(763),S=a(354),g=a(307),O=a(305),N=a(310),D=a(97),P=a(3),I=a.n(P),k=a(31),C=a(37),w=a(256),x=a(251),q=a(99),A=a(299);t.default=function(){var e=Object(c.useState)("3"),t=Object(l.a)(e,2),a=t[0],P=t[1],F=Object(c.useState)([]),R=Object(l.a)(F,2),T=R[0],L=R[1],B=Object(c.useState)("Select Delivery Pattern"),z=Object(l.a)(B,2),J=z[0],U=z[1],Y=Object(c.useState)(0),_=Object(l.a)(Y,2),G=_[0],H=_[1],K=Object(c.useState)(!1),M=Object(l.a)(K,2),Q=M[0],V=M[1],W=Object(c.useState)([]),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(c.useState)(0),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],le=Object(c.useState)(!1),ce=Object(l.a)(le,2),re=ce[0],se=ce[1],ie=Object(c.useState)(!1),oe=Object(l.a)(ie,2),ue=oe[0],me=oe[1],de=Object(c.useState)(0),ve=Object(l.a)(de,2),be=ve[0],pe=ve[1],Ee=Object(c.useState)(""),je=Object(l.a)(Ee,2),fe=je[0],he=je[1],ye=Object(C.i)().id,Se=Object(C.h)();Object(c.useEffect)((function(){Object(q.a)("DeliveryPatternDD/index").then((function(e){console.log(e,"response"),L(e)})),Object(q.a)("SubjectDeliveryPattern/GetBySubject/".concat(ye)).then((function(e){console.log("dsdsdsdds",e),$(e)}))}),[ye,re]);var ge=T.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Oe=Object(C.g)(),Ne=Object(w.useToasts)().addToast,De=function(e){P(e),"1"==e&&Oe.push({pathname:"/addSubject/".concat(ye),subjectId:Se.subjectId}),"2"==e&&Oe.push({pathname:"/addSubjectFee/".concat(ye),subjectId:Se.subjectId}),"4"==e&&Oe.push({pathname:"/addSubjectRequirements/".concat(ye),subjectId:Se.subjectId}),"5"==e&&Oe.push({pathname:"/addSubjectDocumentRequirement/".concat(ye),subjectId:Se.subjectId})},Pe=localStorage.getItem("token"),Ie=function(){me(!1),he(""),pe(0)};return r.a.createElement("div",null,r.a.createElement(i.a,{className:"uapp-card-bg"},r.a.createElement(o.a,{className:"page-header"},r.a.createElement("h3",{className:"text-white"},"Subject Delivery Pattern"),r.a.createElement("div",{className:"page-header-back-to-home"},r.a.createElement("span",{onClick:function(){void 0!=Se.subjectId?Oe.push("/subjectProfile/".concat(Se.subjectId)):Oe.push("/subjectList")},className:"text-white"}," ",r.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ",void 0!=Se.subjectId?"Back to Subject Profile":"Back to Subject List")))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{tabs:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"1"===a,onClick:function(){return De("1")}},"Subject Information")),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"2"===a,onClick:function(){return De("2")}},"Subject Fee Information")),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"3"===a,onClick:function(){return De("3")}},"Delivery Pattern")),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"4"===a,onClick:function(){return De("4")}},"Requirement")),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"5"===a,onClick:function(){return De("5")}},"Document Requirement"))),r.a.createElement(b.a,{activeTab:a},r.a.createElement(p.a,{tabId:"3"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},r.a.createElement("div",null,r.a.createElement("h5",null," ",r.a.createElement("b",null,"Add Delivery Pattern")," "),r.a.createElement("div",{className:"bg-h"}))),r.a.createElement(E.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),l=Object(n.a)(a);try{for(l.s();!(t=l.n()).done;){var c=t.value;console.log("values",c)}}catch(r){l.e(r)}finally{l.f()}0===G?V(!0):0!=ae?I.a.put("".concat(k.a,"SubjectDeliveryPattern/Update"),a,{headers:{"Content-Type":"application/json",authorization:Pe}}).then((function(e){var t,a;200===e.status&&!0===e.data.isSuccess?(Ne(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),U("Select Delivery Pattern"),H(0),se(!re),ne(0)):(Ne(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),U("Select Delivery Pattern"),H(0),ne(0))})):I.a.post("".concat(k.a,"SubjectDeliveryPattern/Create"),a,{headers:{"Content-Type":"application/json",authorization:Pe}}).then((function(e){var t,a;200===e.status&&!0===e.data.isSuccess?(Ne(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),U("Select Delivery Pattern"),H(0),se(!re),ne(0)):(U("Select Delivery Pattern"),H(0),Ne(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}))}))},className:"mt-0"},0!=ae?r.a.createElement(j.a,{type:"hidden",id:"id",name:"id",value:ae}):null,r.a.createElement(j.a,{type:"hidden",id:"subjectId",name:"subjectId",value:ye}),r.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},r.a.createElement(h.a,{md:"4"},r.a.createElement("span",null,"Delivery Pattern"," ",r.a.createElement("span",{className:"text-danger"},"*")," ")),r.a.createElement(h.a,{md:"8"},r.a.createElement(s.a,{options:ge,value:{label:J,value:G},onChange:function(e){return t=e.label,a=e.value,V(!1),U(t),void H(a);var t,a},name:"deliveryPatternId",id:"deliveryPatternId"}),Q&&r.a.createElement("span",{className:"text-danger"},"Delivery pattern is required"))),r.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),r.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},r.a.createElement(x.a,{type:"submit",className:"mr-0 mt-3 badge-primary",name:"Save",permission:6})))),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},r.a.createElement("div",null,r.a.createElement("h5",null," ",r.a.createElement("b",null,"Delivery Pattern List")," "),r.a.createElement("div",{className:"bg-h"}))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement(y.a,{className:"table-sm table-bordered"},r.a.createElement("thead",{className:"thead-uapp-bg"},r.a.createElement("tr",{style:{textAlign:"center"}},r.a.createElement("th",null,"SL/NO"),r.a.createElement("th",null,"Delivery Pattern"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,null===Z||void 0===Z?void 0:Z.map((function(e,t){var a;return r.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,null===e||void 0===e||null===(a=e.deliveryPattern)||void 0===a?void 0:a.name),r.a.createElement("td",null,r.a.createElement(S.a,null,r.a.createElement(x.a,{func:function(){return function(e){var t,a;console.log(e),ne(null===e||void 0===e?void 0:e.id),U(null===e||void 0===e||null===(t=e.deliveryPattern)||void 0===t?void 0:t.name),H(null===e||void 0===e||null===(a=e.deliveryPattern)||void 0===a?void 0:a.id)}(e)},className:"mx-1 btn-sm",color:"warning",icon:r.a.createElement("i",{className:"fas fa-edit"}),permission:6}),r.a.createElement(x.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;he(null===e||void 0===e||null===(t=e.deliveryPattern)||void 0===t?void 0:t.name),pe(null===e||void 0===e?void 0:e.id),me(!0)}(e)},color:"danger",icon:r.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6})),r.a.createElement(g.a,{isOpen:ue,toggle:Ie,className:"uapp-modal"},r.a.createElement(O.a,null,r.a.createElement("p",null,"Are You Sure to Delete this ",r.a.createElement("b",null,fe)," ? Once Deleted it can't be Undone!")),r.a.createElement(N.a,null,r.a.createElement(D.a,{color:"danger",onClick:function(){return function(e){Object(A.a)("SubjectDeliveryPattern/Delete/".concat(e)).then((function(e){me(!1),se(!re),Ne(e,{appearance:"error",autoDismiss:!0}),he(""),pe(0)}))}(be)}},"YES"),r.a.createElement(D.a,{onClick:Ie},"NO")))))}))))))))),r.a.createElement(f.a,{className:"has-icon-left position-relative mt-5",style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(x.a,{func:function(){Oe.push({pathname:"/addSubjectFee/".concat(ye),subjectId:Se.subjectId})},color:"warning uapp-form-button float-right",name:"Previous Page",permission:6}),r.a.createElement(D.a,{onClick:function(){Oe.push({pathname:"/addSubjectRequirements/".concat(ye),subjectId:Se.subjectId})},color:"warning"},"Next Page")))))}}}]);
//# sourceMappingURL=269.cfe5b330.chunk.js.map