(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[123],{259:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","innerRef","tag"],m={tag:d.t,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,l=Object(n.a)(e,f),i=Object(d.p)(u()(a,"card-body"),t);return o.a.createElement(c,Object(s.a)({},l,{className:i,ref:r}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},260:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","row","disabled","check","inline","tag"],m={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.t,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,l=e.check,i=e.inline,m=e.tag,p=Object(n.a)(e,f),b=Object(d.p)(u()(a,!!r&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),t);return"fieldset"===m&&(p.disabled=c),o.a.createElement(m,Object(s.a)({},p,{className:b}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},263:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(23),o=t(18),c=t(0),l=t.n(c),i=t(2),u=t.n(i),d=t(8),f=t.n(d),m=t(7),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,g=e.innerRef,h=Object(n.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,j=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),N="form-control";b?(N+="-plaintext",O=u||"input"):"file"===r?N+="-file":"range"===r?N+="-range":v&&(N=d?null:"form-check-input"),h.size&&j.test(h.size)&&(Object(m.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var y=Object(m.p)(f()(a,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,N),t);return("input"===O||u&&"function"===typeof u)&&(h.type=r),h.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(m.v)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(O,Object(s.a)({},h,{ref:g,className:y,"aria-invalid":i}))},a}(l.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},265:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","tag"],m={tag:d.t,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,f),l=Object(d.p)(u()(a,"card-header"),t);return o.a.createElement(r,Object(s.a)({},c,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},268:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","widths","tag"],m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),b={tag:d.t,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,l=Object(n.a)(e,f),i=[];r.forEach((function(a,s){var n=e[a];if(delete l[a],n||""===n){var r=!s;if(Object(d.n)(n)){var o,c=r?"-":"-"+a+"-",f=h(r,a,n.size);i.push(Object(d.p)(u()(((o={})[f]=n.size||""===n.size,o["order"+c+n.order]=n.order||0===n.order,o["offset"+c+n.offset]=n.offset||0===n.offset,o)),t))}else{var m=h(r,a,n);i.push(m)}}})),i.length||i.push("col");var m=Object(d.p)(u()(a,i),t);return o.a.createElement(c,Object(s.a)({},l,{className:m}))};v.propTypes=b,v.defaultProps=g,a.a=v},271:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(23),o=t(18),c=t(0),l=t.n(c),i=t(2),u=t.n(i),d=t(8),f=t.n(d),m=t(7),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:m.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,c=e.innerRef,i=Object(n.a)(e,p),u=Object(m.p)(f()(a,!!r&&"form-inline"),t);return l.a.createElement(o,Object(s.a)({},i,{ref:c,className:u}))},a}(c.Component);g.propTypes=b,g.defaultProps={tag:"form"},a.a=g},296:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","color","body","inverse","outline","tag","innerRef"],m={tag:d.t,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,l=e.inverse,i=e.outline,m=e.tag,p=e.innerRef,b=Object(n.a)(e,f),g=Object(d.p)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(m,Object(s.a)({},b,{className:g,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},326:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","noGutters","tag","form","widths"],m=l.a.oneOfType([l.a.number,l.a.string]),p={tag:d.t,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,i=e.widths,m=Object(n.a)(e,f),p=[];i.forEach((function(a,t){var s=e[a];if(delete m[a],s){var n=!t;p.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var b=Object(d.p)(u()(a,r?"no-gutters":null,l?"form-row":"row",p),t);return o.a.createElement(c,Object(s.a)({},m,{className:b}))};g.propTypes=p,g.defaultProps=b,a.a=g},351:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.t,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,l=e.tag,i=e.check,m=e.size,p=e.for,b=Object(n.a)(e,f),g=[];c.forEach((function(a,s){var n=e[a];if(delete b[a],n||""===n){var r,o=!s;if(Object(d.n)(n)){var c,l=o?"-":"-"+a+"-";r=h(o,a,n.size),g.push(Object(d.p)(u()(((c={})[r]=n.size||""===n.size,c["order"+l+n.order]=n.order||0===n.order,c["offset"+l+n.offset]=n.offset||0===n.offset,c))),t)}else r=h(o,a,n),g.push(r)}}));var v=Object(d.p)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),t);return o.a.createElement(l,Object(s.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=g,a.a=v},356:function(e,a,t){"use strict";var s=t(11),n=t(15),r=t(0),o=t.n(r),c=t(2),l=t.n(c),i=t(8),u=t.n(i),d=t(7),f=["className","cssModule","tag"],m={tag:d.t,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,f),l=Object(d.p)(u()(a,"card-title"),t);return o.a.createElement(r,Object(s.a)({},c,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},383:function(e,a,t){},706:function(e,a,t){e.exports=t.p+"static/media/forgot-password.63f5a96a.png"},873:function(e,a,t){"use strict";t.r(a);var s=t(5),n=t(6),r=t(16),o=t(17),c=t(0),l=t.n(c),i=t(326),u=t(268),d=t(296),f=t(265),m=t(356),p=t(259),b=t(271),g=t(260),h=t(263),v=t(351),j=t(97),O=t(706),N=t.n(O),y=t(22),E=(t(383),function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(d.a,{className:"bg-authentication rounded-0 mb-0 w-100"},l.a.createElement(i.a,{className:"m-0"},l.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},l.a.createElement("img",{src:N.a,alt:"fgImg"})),l.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(d.a,{className:"rounded-0 mb-0 px-2 py-1"},l.a.createElement(f.a,{className:"pb-1"},l.a.createElement(m.a,null,l.a.createElement("h4",{className:"mb-0"},"Recover your password"))),l.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and we'll send you instructions on how to reset your password."),l.a.createElement(p.a,{className:"pt-1 pb-0"},l.a.createElement(b.a,null,l.a.createElement(g.a,{className:"form-label-group"},l.a.createElement(h.a,{type:"text",placeholder:"Email",required:!0}),l.a.createElement(v.a,null,"Email")),l.a.createElement("div",{className:"float-md-left d-block mb-1"},l.a.createElement(j.a.Ripple,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return y.a.push("/pages/login")}},"Back to Login")),l.a.createElement("div",{className:"float-md-right d-block mb-1"},l.a.createElement(j.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:function(e){e.preventDefault(),y.a.push("/")}},"Recover Password"))))))))))}}]),t}(l.a.Component));a.default=E}}]);
//# sourceMappingURL=123.e18835b7.chunk.js.map