(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[291],{1018:function(e,a,t){"use strict";t.r(a);var l=t(5),c=t(6),n=t(16),i=t(17),r=t(0),s=t.n(r),m=t(321),o=t(262),p=(t(8),t(477),t(478),t(19)),d=t(254),h=t(267),E=t(264),f=t(255),u=t(346),v=(t(354),t(30)),g=t(442),y=(t(22),t(3),t(104),t(152),t(36)),b=t(100),N=Object(v.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:g.b})((function(){var e=Object(r.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)("Student Type"),n=Object(p.a)(c,2),i=(n[0],n[1],Object(r.useState)(0)),m=Object(p.a)(i,2),v=(m[0],m[1],Object(r.useState)("")),g=Object(p.a)(v,2),N=g[0],k=g[1],x=Object(r.useState)(""),S=Object(p.a)(x,2),j=S[0],w=S[1];Object(r.useEffect)((function(){Object(b.a)("StudentTypeDD/Index").then((function(e){l(e)}))}),[]);null===t||void 0===t||t.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}}));var O=function(e){console.log(e.target.value),k(e.target.value)},W=function(e){console.log(e.target.value),w(e.target.value)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"pt-1"},s.a.createElement(h.a,{onSubmit:function(e){e.preventDefault()}},s.a.createElement("input",{type:"hidden",name:"consultantId",id:"consultantId",value:"1"}),s.a.createElement(E.a,{row:!0,className:"has-icon-left position-relative"},s.a.createElement(o.a,{md:"3"},s.a.createElement("span",{style:{fontWeight:"500"}},"Student Type")),s.a.createElement(o.a,{md:"6"},s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"isHaveDisability",onChange:O,name:"isHaveDisability",value:"1",checked:"1"==N}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"isHaveDisability"},"Home")),s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"isHaveDisability",onChange:O,name:"isHaveDisability",value:"2",checked:"2"==N}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"isHaveDisability"},"EU/EEA")),s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"isHaveDisability",onChange:O,name:"isHaveDisability",value:"3",checked:"3"==N}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"isHaveDisability"},"International")))),s.a.createElement(E.a,{row:!0,className:"has-icon-left position-relative"},s.a.createElement(o.a,{md:"3"},s.a.createElement("span",{style:{fontWeight:"500"}},"Title")),s.a.createElement(o.a,{md:"6"},s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"title",onChange:W,name:"title",value:"1",checked:"1"==j}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"title"},"Mr.")),s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"title",onChange:W,name:"title",value:"2",checked:"2"==j}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"title"},"Miss")),s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"title",onChange:W,name:"title",value:"3",checked:"3"==j}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"title"},"Ms.")),s.a.createElement(E.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"title",onChange:W,name:"title",value:"4",checked:"4"==j}),s.a.createElement(u.a,{className:"form-check-label",check:!0,htmlFor:"title"},"Mrs.")))),s.a.createElement("div",{className:"row gx-0"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left",style:{marginTop:"20px"}},s.a.createElement(f.a,{type:"text",placeholder:"First Name",style:{height:"calc(1.5em + 1.3rem + 2px)"},required:!0}),s.a.createElement("div",{className:"form-control-position"}),s.a.createElement(u.a,{style:{fontSize:"18px",fontWeight:"600",top:"-35px"}},"First Name"))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left",style:{marginTop:"20px"}},s.a.createElement(f.a,{type:"text",placeholder:"Last Name",style:{height:"calc(1.5em + 1.3rem + 2px)"},required:!0}),s.a.createElement("div",{className:"form-control-position"}),s.a.createElement(u.a,{style:{fontSize:"18px",fontWeight:"600",top:"-35px"}},"Last Name")))),s.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left",style:{marginTop:"20px"}},s.a.createElement(f.a,{type:"email",placeholder:"Email",style:{height:"calc(1.5em + 1.3rem + 2px)"},required:!0}),s.a.createElement("div",{className:"form-control-position"}),s.a.createElement(u.a,{style:{fontSize:"18px",fontWeight:"600",top:"-35px"}},"Email")),s.a.createElement("div",{className:"row gx-0"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left",style:{marginTop:"20px"}},s.a.createElement(f.a,{type:"password",placeholder:"Password",style:{height:"calc(1.5em + 1.3rem + 2px)"},required:!0}),s.a.createElement("div",{className:"form-control-position"}),s.a.createElement(u.a,{style:{fontSize:"18px",fontWeight:"600",top:"-35px"}},"Password"))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left",style:{marginTop:"20px"}},s.a.createElement(f.a,{type:"password",placeholder:"Confirm Password",style:{height:"calc(1.5em + 1.3rem + 2px)"},required:!0}),s.a.createElement("div",{className:"form-control-position"}),s.a.createElement(u.a,{style:{fontSize:"18px",fontWeight:"600",top:"-35px"}},"Confirm Password")))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement("div",null,s.a.createElement("button",{className:"login-btn-style",type:"submit"},"Register")),s.a.createElement(y.a,{to:"/",style:{textDecoration:"none",color:"rgb(30, 152, 176)",fontSize:"18px",fontWeight:"500"}},"I am already registered"))),s.a.createElement("br",null),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement("div",{className:"",style:{color:"#707070",fontSize:"13px",fontWeight:"400"}},"Privacy policy"),s.a.createElement("div",{className:"",style:{color:"#1E98B0",fontSize:"13px",fontWeight:"400"}},"UAPP \xa9 SMS Higher Education Group."))))})),k=(t(479),t(380),t(414),t(75)),x=t.n(k),S=(t(105),t(706),function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"top-style"},s.a.createElement("div",{className:"",style:{backgroundColor:"#fff"}},s.a.createElement("div",{className:"responsive-top"},s.a.createElement(m.a,{className:"m-0 "},s.a.createElement(o.a,{lg:"6",md:"6",className:" px-1 py-0 hide-responsive-left-side"},s.a.createElement("div",{className:"flexbox-container student-register-img"},s.a.createElement("div",null,s.a.createElement("img",{src:x.a,className:"w-50 mt-5"})))),s.a.createElement(o.a,{lg:"6",md:"6"},s.a.createElement("div",{className:" my-md-5 ml-md-4"},s.a.createElement("h4",{className:"",style:{color:"#111111",fontSize:"38px",fontWeight:"500"}},"Become a Student"),s.a.createElement("span",{style:{color:"#7f7f7f",fontSize:"18px",fontWeight:"500"}},"Apply to Multiple Universities")),s.a.createElement("div",{className:"col-right"},s.a.createElement("div",{className:"text-center hide-responsive-right-side"},s.a.createElement("img",{src:x.a,className:"w-50"})),s.a.createElement("div",{className:"flexbox-container2",style:{backgroundColor:"#fff"}},s.a.createElement(N,null))))))))}}]),t}(s.a.Component));a.default=S},706:function(e,a,t){e.exports=t.p+"static/media/Studentregister.2fbb7e57.png"}}]);
//# sourceMappingURL=291.bf6ea381.chunk.js.map