(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[245],{252:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(96);t.a=function(e){var t=e.className,a=e.icon,n=e.color,o=(e.permission,e.type),i=(e.url,e.func),s=e.name,u=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:i,color:n,type:o,className:t,disabled:u}," ",a,s," "))}},853:function(e,t,a){"use strict";a.r(t);var n=a(282),c=a(29),l=a(0),o=a.n(l),i=a(272),s=a(306),u=a(265),r=a(264),m=a(337),d=a(342),p=a(343),v=a(352),b=a(354),E=a(279),f=a(268),j=a(270),h=a(267),y=a(758),S=a(311),O=a(310),g=a(324),N=a(96),D=a(3),x=a.n(D),I=a(47),k=a(33),C=a(255),G=a(252),T=a(103),A=a(303);t.default=function(){var e=Object(l.useState)("5"),t=Object(c.a)(e,2),a=t[0],D=t[1],w=Object(l.useState)([]),U=Object(c.a)(w,2),q=U[0],R=U[1],L=Object(l.useState)("Select Document Group"),F=Object(c.a)(L,2),Y=F[0],z=F[1],B=Object(l.useState)(0),H=Object(c.a)(B,2),J=H[0],K=H[1],P=Object(l.useState)(!1),_=Object(c.a)(P,2),M=_[0],Q=_[1],V=Object(l.useState)([]),W=Object(c.a)(V,2),X=W[0],Z=W[1],$=Object(l.useState)("Select Application type"),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(l.useState)(0),ce=Object(c.a)(ne,2),le=ce[0],oe=ce[1],ie=Object(l.useState)(!1),se=Object(c.a)(ie,2),ue=se[0],re=se[1],me=Object(l.useState)([]),de=Object(c.a)(me,2),pe=de[0],ve=de[1],be=Object(l.useState)(!1),Ee=Object(c.a)(be,2),fe=Ee[0],je=Ee[1],he=Object(l.useState)(0),ye=Object(c.a)(he,2),Se=ye[0],Oe=ye[1],ge=Object(l.useState)(!1),Ne=Object(c.a)(ge,2),De=Ne[0],xe=Ne[1],Ie=Object(l.useState)(0),ke=Object(c.a)(Ie,2),Ce=ke[0],Ge=ke[1],Te=Object(l.useState)(""),Ae=Object(c.a)(Te,2),we=Ae[0],Ue=Ae[1],qe=Object(k.i)(),Re=qe.id,Le=qe.subjId;Object(l.useEffect)((function(){Object(T.a)("DocumentGroupDD/Index").then((function(e){console.log(e,"response"),R(e)})),Object(T.a)("ApplicationTypeDD/Index").then((function(e){console.log(e,"response"),Z(e)})),Object(T.a)("SubjectDocumentRequirement/GetBySubject/".concat(Le)).then((function(e){console.log(e,"ssxcsxs"),ve(e)}))}),[Le,fe]);var Fe=q.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Ye=X.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),ze=Object(k.g)(),Be=Object(C.useToasts)().addToast,He=function(e){D(e),"1"==e&&ze.push("/addUniversitySubject/".concat(Re,"/").concat(Le)),"2"==e&&ze.push("/addUniversitySubjectFee/".concat(Re,"/").concat(Le)),"3"==e&&ze.push("/addUniversitySubjectDeliveryPattern/".concat(Re,"/").concat(Le)),"4"==e&&ze.push("/addUniversitySubjectRequirements/".concat(Re,"/").concat(Le)),"5"==e&&ze.push("/addUniversitySubjectDocumentRequirement/".concat(Re,"/").concat(Le))},Je=localStorage.getItem("token"),Ke=function(){xe(!1),Ue(""),Ge(0)};return o.a.createElement("div",null,o.a.createElement(s.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Add Subject Document Requirement"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){ze.push("/universitySubjectList/".concat(Re))},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to University Subject List")))),o.a.createElement(s.a,null,o.a.createElement(r.a,null,o.a.createElement(m.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"1"===a,onClick:function(){return He("1")}},"Subject Information")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"2"===a,onClick:function(){return He("2")}},"Subject Fee Information")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"3"===a,onClick:function(){return He("3")}},"Delivery Pattern")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"4"===a,onClick:function(){return He("4")}},"Requirement")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"5"===a,onClick:function(){return He("5")}},"Document Requirement"))),o.a.createElement(v.a,{activeTab:a},o.a.createElement(b.a,{tabId:"5"},o.a.createElement("div",{className:"row mt-5"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-2"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Add Document Required")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement(E.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),c=Object(n.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;console.log("values",l)}}catch(o){c.e(o)}finally{c.f()}0===J?Q(!0):0===le?re(!0):0!=Se?x.a.put("".concat(I.a,"SubjectDocumentRequirement/Update"),a,{headers:{"Content-Type":"application/json",authorization:Je}}).then((function(e){var t,a;(console.log(e),200===e.status&&!0===e.data.isSuccess)?(Be(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),je(!fe),z("Select Document Group"),K(0),ae("Select Application type"),oe(0),Oe(0)):(Be(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),z("Select Document Group"),K(0),ae("Select Application type"),oe(0),Oe(0))})):x.a.post("".concat(I.a,"SubjectDocumentRequirement/Create"),a,{headers:{"Content-Type":"application/json",authorization:Je}}).then((function(e){var t,a;(console.log(e),200===e.status&&!0===e.data.isSuccess)?(Be(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),je(!fe),z("Select Document Group"),K(0),ae("Select Application type"),oe(0)):(Be(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),z("Select Document Group"),K(0),ae("Select Application type"),oe(0))}))},className:""},0!=Se?o.a.createElement(f.a,{type:"hidden",id:"id",name:"id",value:Se}):null,o.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{type:"hidden",id:"subjectId",name:"subjectId",value:Le})),o.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"4"},o.a.createElement("span",null,"Document Group ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"8"},o.a.createElement(i.a,{options:Fe,value:{label:Y,value:J},onChange:function(e){return t=e.label,a=e.value,Q(!1),z(t),void K(a);var t,a},name:"documentGroupId",id:"documentGroupId"}),M&&o.a.createElement("span",{className:"text-danger"},"You must select document group"))),o.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"4"},o.a.createElement("span",null,"Application Type"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"8"},o.a.createElement(i.a,{options:Ye,value:{label:te,value:le},onChange:function(e){return t=e.label,a=e.value,re(!1),ae(t),void oe(a);var t,a},name:"applicationTypeId",id:"applicationTypeId"}),ue&&o.a.createElement("span",{className:"text-danger"},"You must select application type"))),o.a.createElement(j.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),o.a.createElement(j.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(G.a,{type:"submit",className:"mt-3 badge-primary",name:"Submit",permission:6})))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document Requirement List")," "),o.a.createElement("div",{className:"bg-h"}))),pe<1?o.a.createElement("div",null,"No data available"):o.a.createElement("div",{className:"table-responsive"},o.a.createElement(y.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Document Group"),o.a.createElement("th",{className:"text-center"},"Application Type"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===pe||void 0===pe?void 0:pe.map((function(e,t){var a;return o.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.title),o.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),o.a.createElement("td",null,o.a.createElement(G.a,{func:function(){return function(e){var t,a;console.log("documentList",e),Oe(null===e||void 0===e?void 0:e.id),z(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),K(null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.id),ae(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),oe(null===e||void 0===e?void 0:e.applicationTypeId)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(G.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;console.log(e),Ue(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),Ge(null===e||void 0===e?void 0:e.id),xe(!0)}(e)},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(S.a,{isOpen:De,toggle:Ke,className:"uapp-modal"},o.a.createElement(O.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ",o.a.createElement("b",null,we)," ? Once Deleted it can't be Undone!")),o.a.createElement(g.a,null,o.a.createElement(N.a,{color:"danger",onClick:function(){return function(e){Object(A.a)("SubjectDocumentRequirement/Delete/".concat(e)).then((function(e){xe(!1),je(!fe),Be(e,{appearance:"error",autoDismiss:!0}),Ue(""),Ge(0)}))}(Ce)}},"YES"),o.a.createElement(N.a,{color:"primary",onClick:Ke},"NO")))))}))))))))))))}}}]);
//# sourceMappingURL=245.af4d3599.chunk.js.map