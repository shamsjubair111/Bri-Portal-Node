(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[243],{252:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(96);t.a=function(e){var t=e.className,a=e.icon,n=e.color,o=(e.permission,e.type),i=(e.url,e.func),s=e.name,u=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:i,color:n,type:o,className:t,disabled:u}," ",a,s," "))}},839:function(e,t,a){"use strict";a.r(t);var n=a(282),c=a(29),l=a(0),o=a.n(l),i=a(272),s=a(306),u=a(265),r=a(264),m=a(337),d=a(342),p=a(343),b=a(352),v=a(354),E=a(279),j=a(268),f=a(270),h=a(267),S=a(758),y=a(311),O=a(310),N=a(324),g=a(96),D=a(3),I=a.n(D),x=a(47),k=a(33),G=a(255),C=a(252),T=a(103),w=a(303),A=a(32);t.default=function(){var e=Object(l.useState)("5"),t=Object(c.a)(e,2),a=t[0],D=t[1],q=Object(l.useState)([]),R=Object(c.a)(q,2),L=R[0],P=R[1],U=Object(l.useState)("Select Document Group"),F=Object(c.a)(U,2),Y=F[0],B=F[1],z=Object(l.useState)(0),H=Object(c.a)(z,2),J=H[0],K=H[1],_=Object(l.useState)(!1),M=Object(c.a)(_,2),Q=M[0],V=M[1],W=Object(l.useState)([]),X=Object(c.a)(W,2),Z=X[0],$=X[1],ee=Object(l.useState)("Select Application type"),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ce=Object(l.useState)(0),le=Object(c.a)(ce,2),oe=le[0],ie=le[1],se=Object(l.useState)(!1),ue=Object(c.a)(se,2),re=ue[0],me=ue[1],de=Object(l.useState)([]),pe=Object(c.a)(de,2),be=pe[0],ve=pe[1],Ee=Object(l.useState)(!1),je=Object(c.a)(Ee,2),fe=je[0],he=je[1],Se=Object(l.useState)(0),ye=Object(c.a)(Se,2),Oe=ye[0],Ne=ye[1],ge=Object(l.useState)(!1),De=Object(c.a)(ge,2),Ie=De[0],xe=De[1],ke=Object(l.useState)(0),Ge=Object(c.a)(ke,2),Ce=Ge[0],Te=Ge[1],we=Object(l.useState)(""),Ae=Object(c.a)(we,2),qe=Ae[0],Re=Ae[1],Le=Object(k.i)().id,Pe=Object(k.h)();Object(l.useEffect)((function(){Object(T.a)("DocumentGroupDD/Index").then((function(e){console.log(e,"response"),P(e)})),Object(T.a)("ApplicationTypeDD/Index").then((function(e){console.log(e,"response"),$(e)})),Object(T.a)("SubjectDocumentRequirement/GetBySubject/".concat(Le)).then((function(e){console.log(e,"ssxcsxs"),ve(e)}))}),[Le,fe]);var Ue=L.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Fe=Z.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Ye=Object(k.g)(),Be=Object(G.useToasts)().addToast,ze=function(e){D(e),"1"==e&&Ye.push({pathname:"/addSubject/".concat(Le),subjectId:Pe.subjectId}),"2"==e&&Ye.push({pathname:"/addSubjectFee/".concat(Le),subjectId:Pe.subjectId}),"3"==e&&Ye.push({pathname:"/addSubjectDeliveryPattern/".concat(Le),subjectId:Pe.subjectId}),"4"==e&&Ye.push({pathname:"/addSubjectRequirements/".concat(Le),subjectId:Pe.subjectId}),"5"==e&&Ye.push({pathname:"/addSubjectDocumentRequirement/".concat(Le),subjectId:Pe.subjectId})},He=localStorage.getItem("token"),Je=function(){xe(!1),Re(""),Te(0)};return o.a.createElement("div",null,o.a.createElement(s.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Subject Document Requirement"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){void 0!=Pe.subjectId?Ye.push("/subjectProfile/".concat(Pe.subjectId)):Ye.push("/subjectList")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ",void 0!=Pe.subjectId?"Back to Subject Profile":"Back to Subject List")))),o.a.createElement(s.a,null,o.a.createElement(r.a,null,o.a.createElement(m.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"1"===a,onClick:function(){return ze("1")}},"Subject Information")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"2"===a,onClick:function(){return ze("2")}},"Subject Fee Information")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"3"===a,onClick:function(){return ze("3")}},"Delivery Pattern")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"4"===a,onClick:function(){return ze("4")}},"Requirement")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"5"===a,onClick:function(){return ze("5")}},"Document Requirement"))),o.a.createElement(b.a,{activeTab:a},o.a.createElement(v.a,{tabId:"5"},o.a.createElement("div",{className:"row mt-5"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-2"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document Required")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement(E.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),c=Object(n.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;console.log("values",l)}}catch(o){c.e(o)}finally{c.f()}0===J?V(!0):0===oe?me(!0):0!=Oe?I.a.put("".concat(x.a,"SubjectDocumentRequirement/Update"),a,{headers:{"Content-Type":"application/json",authorization:He}}).then((function(e){var t,a;(console.log(e),200===e.status&&!0===e.data.isSuccess)?(Be(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),he(!fe),B("Select Document Group"),K(0),ne("Select Application type"),ie(0),Ne(0)):(Be(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),B("Select Document Group"),K(0),ne("Select Application type"),ie(0),Ne(0))})):I.a.post("".concat(x.a,"SubjectDocumentRequirement/Create"),a,{headers:{"Content-Type":"application/json",authorization:He}}).then((function(e){var t,a;(console.log(e),200===e.status&&!0===e.data.isSuccess)?(Be(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),he(!fe),B("Select Document Group"),K(0),ne("Select Application type"),ie(0)):(Be(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),B("Select Document Group"),K(0),ne("Select Application type"),ie(0))}))},className:""},0!=Oe?o.a.createElement(j.a,{type:"hidden",id:"id",name:"id",value:Oe}):null,o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{type:"hidden",id:"subjectId",name:"subjectId",value:Le})),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"4"},o.a.createElement("span",null,"Document Group ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"8"},o.a.createElement(i.a,{options:Ue,value:{label:Y,value:J},onChange:function(e){return t=e.label,a=e.value,V(!1),B(t),void K(a);var t,a},name:"documentGroupId",id:"documentGroupId"}),Q&&o.a.createElement("span",{className:"text-danger"},"You must select document group"))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"4"},o.a.createElement("span",null,"Application Type"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"8"},o.a.createElement(i.a,{options:Fe,value:{label:ae,value:oe},onChange:function(e){return t=e.label,a=e.value,me(!1),ne(t),void ie(a);var t,a},name:"applicationTypeId",id:"applicationTypeId"}),re&&o.a.createElement("span",{className:"text-danger"},"You must select application type"))),o.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),o.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(C.a,{type:"submit",className:"mt-3 badge-primary",name:"Submit",permission:6})))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document Requirement List")," "),o.a.createElement("div",{className:"bg-h"}))),be<1?o.a.createElement("div",null,"No data available"):o.a.createElement("div",{className:"table-responsive"},o.a.createElement(S.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Document Group"),o.a.createElement("th",{className:"text-center"},"Application Type"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===be||void 0===be?void 0:be.map((function(e,t){var a;return o.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.title),o.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),o.a.createElement("td",null,o.a.createElement(C.a,{func:function(){return function(e){var t,a;console.log("documentList",e),Ne(null===e||void 0===e?void 0:e.id),B(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),K(null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.id),ne(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),ie(null===e||void 0===e?void 0:e.applicationTypeId)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(C.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;Re(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),Te(null===e||void 0===e?void 0:e.id),xe(!0)}(e)},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(y.a,{isOpen:Ie,toggle:Je,className:"uapp-modal"},o.a.createElement(O.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ",o.a.createElement("b",null,qe)," ? Once Deleted it can't be Undone!")),o.a.createElement(N.a,null,o.a.createElement(g.a,{color:"danger",onClick:function(){return function(e){Object(w.a)("SubjectDocumentRequirement/Delete/".concat(e)).then((function(e){xe(!1),he(!fe),Be(e,{appearance:"error",autoDismiss:!0}),Re(""),Te(0)}))}(Ce)}},"YES"),o.a.createElement(g.a,{onClick:Je},"NO")))))}))))))),o.a.createElement("div",{className:"d-flex justify-content-end"},o.a.createElement(A.a,{to:"/subjectList"},o.a.createElement(g.a,{color:"primary",className:"me-1"},"Go to Subject List")),o.a.createElement(A.a,{to:"/subjectProfile/".concat(Le)},o.a.createElement(g.a,{color:"primary",className:"ms-1"},"Go to Subject Profile"))))))))}}}]);
//# sourceMappingURL=243.320cc7ec.chunk.js.map