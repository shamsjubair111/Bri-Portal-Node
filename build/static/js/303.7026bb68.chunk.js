(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[303],{325:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(324),i=t(267);a.a=function(e){var a,t,n,r,o=e.dataPerPage,s=e.totalData,u=e.paginate,m=e.currentPage,p=Math.ceil(s/o),d=m-5,f=m+4;d<=0&&(f-=d-1,d=1),f>p&&(f=p)>10&&(d=f-9),a=m,t=p;for(var E=[],g=(r=f,n=d,n);g<=r;g++)E.push(g);return l.a.createElement(c.a,null,l.a.createElement(i.a,{md:"6"},l.a.createElement("nav",{className:"page navigation uapp-pagination"},l.a.createElement("ul",{className:"pagination ml-2"},a>1&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"pagination-item pagination-First"},l.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return u(1)},className:"page-link"},"First")),l.a.createElement("li",{className:"pagination-item"},l.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return u(a-1)},className:"page-link"},l.a.createElement("i",{className:"fas fa-chevron-left"})))),E.map((function(e){return a==e?l.a.createElement("li",{key:e,className:"pagination-item "},l.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return u(e)},className:"page-link page-active"},e)):l.a.createElement("li",{key:e,className:"pagination-item"},l.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return u(e)},className:"page-link"},e))})),a<t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"pagination-item"},l.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return u(a+1)},className:"page-link"},l.a.createElement("i",{className:"fas fa-chevron-right"}))),l.a.createElement("li",{className:"pagination-item pagination-Last"},l.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return u(t)},className:"page-link"},"Last")))))),l.a.createElement(i.a,{md:"6",style:{textAlign:"right",marginTop:"1.5%",paddingRight:"2.5%"}},l.a.createElement("h5",null,"Total Results Found: ",s)))}},993:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(0),c=t.n(l),i=t(37),r=t(294),o=t(293),s=t(301),u=t(98),m=t(290),p=t(261),d=t(258),f=t(80),E=t(325),g=t(253);t(285);a.default=function(){var e=Object(i.g)(),a=Object(g.useToasts)().addToast,t=Object(l.useState)(!0),v=Object(n.a)(t,2),b=(v[0],v[1],Object(l.useState)(1)),N=Object(n.a)(b,2),O=N[0],k=N[1],j=Object(l.useState)(30),h=Object(n.a)(j,2),S=h[0],y=(h[1],Object(l.useState)(!1)),C=Object(n.a)(y,2),D=(C[0],C[1]),w=Object(l.useState)(0),x=Object(n.a)(w,2),P=x[0],F=x[1],A=Object(l.useState)([]),T=Object(n.a)(A,2),L=T[0],R=T[1],J=Object(l.useState)(!1),M=Object(n.a)(J,2),U=M[0],W=M[1],Y=Object(l.useState)(!1),_=Object(n.a)(Y,2),z=_[0],B=_[1],I=Object(l.useState)({}),V=Object(n.a)(I,2),q=V[0],G=V[1],H=Object(l.useState)(!1),K=Object(n.a)(H,2),Q=K[0],X=K[1];Object(l.useEffect)((function(){Object(f.a)("Notification/Index?page=".concat(O,"&pageSize=").concat(S)).then((function(e){F(null===e||void 0===e?void 0:e.totalEntity),R(null===e||void 0===e?void 0:e.models)}))}),[S,O,U]);[10,15,20,30,50,100,1e3].map((function(e){return{label:e,value:e}}));return c.a.createElement("div",null,c.a.createElement(r.a,{isOpen:z,toggle:function(){return B(!z)},className:"uapp-modal2"},c.a.createElement(o.a,null,c.a.createElement("p",null,"Are You Sure to Delete this ? Once Deleted it can't be Undone!")),c.a.createElement(s.a,null,c.a.createElement(u.a,{color:"danger",onClick:function(){X(!0),Object(f.a)("Notification/Delete/".concat(null===q||void 0===q?void 0:q.id)).then((function(e){X(!1),e?(a("Notification Deleted",{appearance:"error",autoDismiss:!0}),G({}),B(!1),W(!U)):a("Something Went Wrong",{appearance:"error",autoDismiss:!0})}))},disabled:Q},"YES"),c.a.createElement(u.a,{onClick:function(){return B(!1)}},"NO"))),c.a.createElement(m.a,{className:"uapp-card-bg"},c.a.createElement(p.a,{className:"page-header"},c.a.createElement("h3",{className:"text-white"},"All Notifications"),c.a.createElement("div",{className:"page-header-back-to-home"},c.a.createElement("span",{onClick:function(){e.push("/")},className:"text-white"}," ",c.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),null===L||void 0===L?void 0:L.map((function(a,t){return c.a.createElement(m.a,{key:t,className:"my-3 notification-div"},c.a.createElement(d.a,null,c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("span",null,(n=null===a||void 0===a?void 0:a.createdOn,new Date(n).toLocaleString("en-CA").split(",")[0])),c.a.createElement("div",{className:"d-flex"},(null===a||void 0===a?void 0:a.isSeen)?null:c.a.createElement(u.a,{color:"primary",className:"mr-1 btn-sm",onClick:function(){return function(e){Object(f.a)("Notification/ViewNotification/".concat(null===e||void 0===e?void 0:e.id)).then((function(e){e&&W(!U)}))}(a)}},"Mark as Read"),c.a.createElement(u.a,{color:"danger",className:"ml-1 btn-sm",onClick:function(){return function(e){G(e),B(!0)}(a)}},"Delete"))),c.a.createElement("div",null,c.a.createElement("span",{className:"title",onClick:function(){return function(a){e.push(null===a||void 0===a?void 0:a.targetUrl)}(a)}},null===a||void 0===a?void 0:a.title),c.a.createElement("span",{className:"description"},null===a||void 0===a?void 0:a.description))));var n})),c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement(E.a,{dataPerPage:S,totalData:P,paginate:function(e){k(e),D((function(e){return!e}))},currentPage:O}))))}}}]);
//# sourceMappingURL=303.7026bb68.chunk.js.map