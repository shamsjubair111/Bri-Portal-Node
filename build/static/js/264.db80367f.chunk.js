(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[264],{363:function(e,a,t){"use strict";var l=t(5),r=t(6),n=t(16),m=t(17),c=t(0),i=t.n(c),o=t(380),s=t(381),u=t(385),d=t(151),E=t(149),b=t(72),p=t(382),h=t(227),N=t(36),f=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"content-header row"},i.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},i.a.createElement("div",{className:"row breadcrumbs-top"},i.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?i.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",i.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},i.a.createElement(o.a,{tag:"ol"},i.a.createElement(s.a,{tag:"li"},i.a.createElement(N.b,{to:"/"},i.a.createElement(p.a,{className:"align-top",size:15}))),i.a.createElement(s.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?i.a.createElement(s.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?i.a.createElement(s.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",i.a.createElement(s.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))),i.a.createElement("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},i.a.createElement("div",{className:"form-group breadcrum-right dropdown"},i.a.createElement(u.a,null,i.a.createElement(d.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle"},i.a.createElement(h.a,{size:14,style:{left:0}})),i.a.createElement(E.a,{tag:"ul",right:!0},i.a.createElement(b.a,{tag:"li"},i.a.createElement(N.b,{className:"text-dark w-100",to:"/Example"},"Example")))))))}}]),t}(i.a.Component);a.a=f},986:function(e,a,t){"use strict";t.r(a);var l=t(5),r=t(6),n=t(16),m=t(17),c=t(0),i=t.n(c),o=t(326),s=t(268),u=t(363),d=t(296),E=t(265),b=t(356),p=t(259),h=t(260),N=t(97),f=t(487),g=t(463),v=(t(591),function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(E.a,null,i.a.createElement(b.a,null,"Basic")),i.a.createElement(p.a,null,i.a.createElement("p",null,"Getting values in and out of form state is easy using formik, you won't have to manage state to make your input a controlled element."),i.a.createElement(f.d,{initialValues:{firstName:"",lastName:"",email:""},onSubmit:function(e){setTimeout((function(){g.b.success(JSON.stringify(e,null,2))}),500)},render:function(){return i.a.createElement(f.c,null,i.a.createElement(h.a,null,i.a.createElement("label",{htmlFor:"firstName"},"First Name"),i.a.createElement(f.b,{className:"form-control",name:"firstName",placeholder:"Jane"})),i.a.createElement(h.a,null,i.a.createElement("label",{htmlFor:"lastName"},"Last Name"),i.a.createElement(f.b,{className:"form-control",name:"lastName",placeholder:"Doe"})),i.a.createElement(h.a,null,i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement(f.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"})),i.a.createElement(N.a.Ripple,{color:"primary",type:"submit"},"Submit"))}}),i.a.createElement(g.a,null)))}}]),t}(i.a.Component)),y=t(550),q=y.c().shape({email:y.d().email("Invalid email address").required("Required"),firstName:y.d().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),lastName:y.d().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a last name that long").required("Required")}),x=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(E.a,null,i.a.createElement(b.a,null,"Error Msg")),i.a.createElement(p.a,null,i.a.createElement("p",null,"You can show error messages with formik using"," ",i.a.createElement("code",null,"validationSchema")," prop with formik tag."),i.a.createElement(f.d,{initialValues:{email:"",firstName:"",lastName:""},validationSchema:q,render:function(e){e.errors,e.touched;return i.a.createElement(f.c,null,i.a.createElement(h.a,null,i.a.createElement("label",{htmlFor:"firstName"},"First Name"),i.a.createElement(f.b,{className:"form-control",name:"firstName",placeholder:"Jane",type:"text"}),i.a.createElement(f.a,{name:"firstName",component:"div",className:"field-error text-danger"})),i.a.createElement(h.a,null,i.a.createElement("label",{htmlFor:"lastName"},"Last Name"),i.a.createElement(f.b,{className:"form-control",name:"lastName",placeholder:"Doe",type:"text"}),i.a.createElement(f.a,{name:"firstName"},(function(e){return i.a.createElement("div",{className:"field-error text-danger"},e)}))),i.a.createElement(h.a,null,i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement(f.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),i.a.createElement(f.a,{name:"email"},(function(e){return i.a.createElement("div",{className:"field-error text-danger"},e)}))),i.a.createElement(N.a.Ripple,{color:"primary",className:"mt-1",type:"submit"},"Submit"))}})))}}]),t}(i.a.Component),j=t(351),O=y.c().shape({required:y.d().required("Required"),email:y.d().email("Invalid email").required("Required"),number:y.b().required("Required"),url:y.d().url().required("Required"),date:y.a().required("Required"),minlength:y.d().min(4,"Too Short!").required("Required"),maxlength:y.d().max(5,"Too Long!").required("Required")}),k=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(E.a,null,i.a.createElement(b.a,null," Validation")),i.a.createElement(p.a,null,i.a.createElement(f.d,{initialValues:{required:"",email:"",url:"",number:"",date:"",minlength:"",maxlength:""},validationSchema:O},(function(e){var a=e.errors,t=e.touched;return i.a.createElement(f.c,null,i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"required"},"Name"),i.a.createElement(f.b,{name:"required",id:"required",className:"form-control ".concat(a.required&&t.required&&"is-invalid")}),a.required&&t.required?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.required):null),i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"email"},"Email"),i.a.createElement(f.b,{type:"email",name:"email",id:"email",className:"form-control ".concat(a.email&&t.email&&"is-invalid")}),a.email&&t.email?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.email):null),i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"url"},"Website URL"),i.a.createElement(f.b,{name:"url",id:"url",className:"form-control ".concat(a.url&&t.url&&"is-invalid")}),a.url&&t.url?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.url):null),i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"number"},"Number"),i.a.createElement(f.b,{name:"number",id:"number",className:"form-control ".concat(a.number&&t.number&&"is-invalid")}),a.number&&t.number?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.number):null),i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"date"},"Date"),i.a.createElement(f.b,{type:"date",name:"date",id:"date",className:"form-control ".concat(a.date&&t.date&&"is-invalid")}),a.date&&t.date?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.date):null),i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"minlength"},"Min Length (Minimum 4 Characters)"),i.a.createElement(f.b,{name:"minlength",id:"minlength",className:"form-control ".concat(a.minlength&&t.minlength&&"is-invalid")}),a.minlength&&t.minlength?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.minlength):null),i.a.createElement(h.a,{className:"my-3"},i.a.createElement(j.a,{for:"maxlength"},"Max Length (Maximum 5 Characters)"),i.a.createElement(f.b,{name:"maxlength",id:"maxlength",className:"form-control ".concat(a.maxlength&&t.maxlength&&"is-invalid")}),a.maxlength&&t.maxlength?i.a.createElement("div",{className:"invalid-tooltip mt-25"},a.maxlength):null),i.a.createElement(N.a.Ripple,{color:"primary",type:"submit"},"Submit"))}))))}}]),t}(i.a.Component),C=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{breadCrumbTitle:"Formik",breadCrumbParent:"Form",breadCrumbActive:"Formik"}),i.a.createElement(o.a,null,i.a.createElement(s.a,{lg:"6",md:"12"},i.a.createElement(v,null)),i.a.createElement(s.a,{lg:"6",md:"12"},i.a.createElement(x,null)),i.a.createElement(s.a,{sm:"12"},i.a.createElement(k,null))))}}]),t}(i.a.Component);a.default=C}}]);
//# sourceMappingURL=264.db80367f.chunk.js.map