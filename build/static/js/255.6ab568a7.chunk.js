(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[255],{395:function(e,a,t){"use strict";var n=t(17),r=t(18),l=t(19),c=t(20),o=t(0),m=t.n(o),i=t(470),u=t(471),s=t(475),b=t(72),d=t(70),p=t(37),E=t(472),f=t(229),h=t(33),v=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"content-header row"},m.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},m.a.createElement("div",{className:"row breadcrumbs-top"},m.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?m.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",m.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},m.a.createElement(i.a,{tag:"ol"},m.a.createElement(u.a,{tag:"li"},m.a.createElement(h.b,{to:"/"},m.a.createElement(E.a,{className:"align-top",size:15}))),m.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?m.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?m.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",m.a.createElement(u.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))),m.a.createElement("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},m.a.createElement("div",{className:"form-group breadcrum-right dropdown"},m.a.createElement(s.a,null,m.a.createElement(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle"},m.a.createElement(f.a,{size:14,style:{left:0}})),m.a.createElement(d.a,{tag:"ul",right:!0},m.a.createElement(p.a,{tag:"li"},m.a.createElement(h.b,{className:"text-dark w-100",to:"/Example"},"Example")))))))}}]),t}(m.a.Component);a.a=v},964:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t(18),l=t(19),c=t(20),o=t(0),m=t.n(o),i=t(347),u=t(270),s=t(395),b=t(493),d=t.n(b),p=t(304),E=t(266),f=t(391),h=t(261),v={wrap:{background:"#E2E2E2",fontSize:14},"input.mobile":{color:"5f5f5f",padding:"0",border:0,display:"block",fontWeight:400,backgroundColor:"#f8f8f8",height:"26px"},"input:focus":{outline:"none"},arrowUp:{borderBottomColor:"#fff"},arrowDown:{borderTopColor:"#fff"},plus:{background:"white"},minus:{background:"white"},"btnUp.mobile":{background:"#7367F0",borderRadius:"5px",height:"22px",width:"22px",top:"2px",cursor:"pointer"},"btnDown.mobile":{background:"#7367F0",borderRadius:"5px",height:"22px",width:"22px",top:"2px",cursor:"pointer"}},g={arrowUp:{borderBottomColor:"#fff"},arrowDown:{borderTopColor:"#fff"},btnUp:{backgroundColor:"#7367F0",background:"#7367F0",border:"none",borderRadius:"2px"},btnDown:{backgroundColor:"#7367F0",background:"#7367F0",border:"none",borderRadius:"2px"},"btn:hover":{background:"#7367F0"},"btn:active":{background:"#7367F0"},input:{color:"5f5f5f",padding:"0.7rem 0.7rem",border:"1px solid #D9D9D9",display:"block",borderRadius:"5px",fontWeight:400,backgroundColor:"#fff",height:"calc(1.25em + 1.4rem + 1px)",width:"100%",fontSize:"0.96rem",lineHeight:"1.25"}},y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"Basic")),m.a.createElement(h.a,null,m.a.createElement(d.a,{min:0,max:100,value:0,mobile:!0,style:v})))}}]),t}(m.a.Component),k=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"Disabled And ReadOnly")),m.a.createElement(h.a,null,m.a.createElement("div",{className:"d-inline-block mb-1 mr-1"},m.a.createElement(d.a,{value:50,disabled:!0,mobile:!0,style:v}))," ",m.a.createElement("div",{className:"d-inline-block mb-1"},m.a.createElement(d.a,{value:50,readOnly:!0,mobile:!0,style:v}))))}}]),t}(m.a.Component),O=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"Floats")),m.a.createElement(h.a,null,m.a.createElement(d.a,{min:0,max:100,value:50,step:.1,precision:2,mobile:!0,style:v})))}}]),t}(m.a.Component),j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).myFormat=function(e){return"".concat(e," $")},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"Custom Format")),m.a.createElement(h.a,null,m.a.createElement(d.a,{min:0,max:100,value:50,mobile:!0,format:this.myFormat,style:v})))}}]),t}(m.a.Component),C=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"HTML Props")),m.a.createElement(h.a,null,m.a.createElement("p",null,"You can use any additional HTML attributes that make sence, just don't forget to camelCase them as JSX requires. Only the type attribute will be overriden to text. Following input will be auto focused."),m.a.createElement(d.a,{mobile:!0,autoComplete:"on",autoCorrect:"on",autoFocus:!0,value:10,style:v})))}}]),t}(m.a.Component),x=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"Styles")),m.a.createElement(h.a,null,m.a.createElement("div",{className:"d-inline-block mb-1 mr-1"},m.a.createElement(d.a,{min:0,max:100,value:10,mobile:!0,style:v})),m.a.createElement("div",{className:"d-inline-block mb-1 mr-1"},m.a.createElement(d.a,{className:"form-control",min:0,max:100,value:10,style:g})),m.a.createElement("div",{className:"d-inline-block mb-1"},m.a.createElement(d.a,{className:"form-control",min:0,max:100,value:10,noStyle:!0}))))}}]),t}(m.a.Component),w=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,{breadCrumbTitle:"Number Input",breadCrumbParent:"Form Elements",breadCrumbActive:"Number Input"}),m.a.createElement(i.a,null,m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(y,null)),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(k,null)),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(O,null)),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(j,null)),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(C,null)),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(x,null))))}}]),t}(m.a.Component);a.default=w}}]);
//# sourceMappingURL=255.6ab568a7.chunk.js.map