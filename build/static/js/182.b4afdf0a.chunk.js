(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[182],{247:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(98);t.a=function(e){var t=e.className,a=e.icon,n=e.color,o=(e.permission,e.type),l=(e.url,e.func),i=e.name,r=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{onClick:l,color:n,type:o,className:t,disabled:r}," ",a,i," "))}},256:function(e,t,a){"use strict";var n=a(11),c=a(15),s=a(43),o=a(0),l=a.n(o),i=a(2),r=a.n(i),m=a(8),u=a.n(m),d=a(292),p=a(7),f=["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"];function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=b(b({},d.Transition.propTypes),{},{children:r.a.oneOfType([r.a.arrayOf(r.a.node),r.a.node]),tag:p.t,baseClass:r.a.string,baseClassActive:r.a.string,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])}),E=b(b({},d.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function O(e){var t=e.tag,a=e.baseClass,s=e.baseClassActive,o=e.className,i=e.cssModule,r=e.children,m=e.innerRef,h=Object(c.a)(e,f),b=Object(p.r)(h,p.c),g=Object(p.q)(h,p.c);return l.a.createElement(d.Transition,b,(function(e){var c="entered"===e,d=Object(p.p)(u()(o,a,c&&s),i);return l.a.createElement(t,Object(n.a)({className:d},g,{ref:m}),r)}))}O.propTypes=g,O.defaultProps=E,t.a=O},258:function(e,t,a){"use strict";var n=a(11),c=a(15),s=a(23),o=a(18),l=a(0),i=a.n(l),r=a(2),m=a.n(r),u=a(8),d=a.n(u),p=a(7),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.t,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,l=e.valid,r=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(c.a)(e,f),E=["radio","checkbox"].indexOf(s)>-1,O=new RegExp("\\D","g"),v=m||("select"===s||"textarea"===s?s:"input"),y="form-control";h?(y+="-plaintext",v=m||"input"):"file"===s?y+="-file":"range"===s?y+="-range":E&&(y=u?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var N=Object(p.p)(d()(t,r&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,y),a);return("input"===v||m&&"function"===typeof m)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.v)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(v,Object(n.a)({},g,{ref:b,className:N,"aria-invalid":r}))},t}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},295:function(e,t,a){"use strict";var n=a(11),c=a(15),s=a(0),o=a.n(s),l=a(2),i=a.n(l),r=a(8),m=a.n(r),u=a(7),d=["className","cssModule","tag"],p={tag:u.t,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(c.a)(e,d),i=Object(u.p)(m()(t,"modal-body"),a);return o.a.createElement(s,Object(n.a)({},l,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},297:function(e,t,a){"use strict";var n=a(43),c=a(11),s=a(23),o=a(18),l=a(0),i=a.n(l),r=a(2),m=a.n(r),u=a(8),d=a.n(u),p=a(44),f=a.n(p),h=a(7),b={children:m.a.node.isRequired,node:m.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return h.g?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),f.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(i.a.Component);g.propTypes=b;var E=g,O=a(256);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function N(){}var j=m.a.shape(O.a.propTypes),k={isOpen:m.a.bool,autoFocus:m.a.bool,centered:m.a.bool,scrollable:m.a.bool,size:m.a.string,toggle:m.a.func,keyboard:m.a.bool,role:m.a.string,labelledBy:m.a.string,backdrop:m.a.oneOfType([m.a.bool,m.a.oneOf(["static"])]),onEnter:m.a.func,onExit:m.a.func,onOpened:m.a.func,onClosed:m.a.func,children:m.a.node,className:m.a.string,wrapClassName:m.a.string,modalClassName:m.a.string,backdropClassName:m.a.string,contentClassName:m.a.string,external:m.a.node,fade:m.a.bool,cssModule:m.a.object,zIndex:m.a.oneOfType([m.a.number,m.a.string]),backdropTransition:j,modalTransition:j,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func]),unmountOnClose:m.a.bool,returnFocusAfterClose:m.a.bool,container:h.u,trapFocus:m.a.bool},x=Object.keys(k),C={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:N,onClosed:N,modalTransition:{timeout:h.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:h.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body",trapFocus:!1},w=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.trapFocus=a.trapFocus.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this.props.trapFocus&&this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||N)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||N)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(h.k.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var c=this.getFocusedChild(),s=0,o=0;o<n;o+=1)if(a[o]===c){s=o;break}e.shiftKey&&0===s?(e.preventDefault(),a[n-1].focus()):e.shiftKey||s!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===h.o.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(h.m)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(h.l)(),Object(h.h)(),0===t.openCount&&(document.body.className=d()(document.body.className,Object(h.p)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(h.p)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(h.s)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(h.q)(this.props,x);return i.a.createElement("div",Object(c.a)({},a,{className:Object(h.p)(d()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),i.a.createElement("div",{className:Object(h.p)(d()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,s=a.modalClassName,o=a.backdropClassName,l=a.cssModule,r=a.isOpen,m=a.backdrop,u=a.role,p=a.labelledBy,f=a.external,b=a.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":p,role:u,tabIndex:"-1"},v=this.props.fade,N=y(y(y({},O.a.defaultProps),this.props.modalTransition),{},{baseClass:v?this.props.modalTransition.baseClass:"",timeout:v?this.props.modalTransition.timeout:0}),j=y(y(y({},O.a.defaultProps),this.props.backdropTransition),{},{baseClass:v?this.props.backdropTransition.baseClass:"",timeout:v?this.props.backdropTransition.timeout:0}),k=m&&(v?i.a.createElement(O.a,Object(c.a)({},j,{in:r&&!!m,cssModule:l,className:Object(h.p)(d()("modal-backdrop",o),l)})):i.a.createElement("div",{className:Object(h.p)(d()("modal-backdrop","show",o),l)}));return i.a.createElement(E,{node:this._element},i.a.createElement("div",{className:Object(h.p)(n)},i.a.createElement(O.a,Object(c.a)({},g,N,{in:r,onEntered:this.onOpened,onExited:this.onClosed,cssModule:l,className:Object(h.p)(d()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),l),innerRef:b}),f,this.renderModalDialog()),k))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(i.a.Component);w.propTypes=k,w.defaultProps=C,w.openCount=0;t.a=w},302:function(e,t,a){"use strict";var n=a(11),c=a(15),s=a(0),o=a.n(s),l=a(2),i=a.n(l),r=a(8),m=a.n(r),u=a(7),d=["className","cssModule","tag"],p={tag:u.t,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(c.a)(e,d),i=Object(u.p)(m()(t,"modal-footer"),a);return o.a.createElement(s,Object(n.a)({},l,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},312:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(36),o=a(98);t.a=function(e){var t=e.url,a=e.color,n=e.className,l=e.icon,i=(e.permission,e.name),r=e.func,m=e.target,u=e.activeStyle;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{to:t,activeStyle:u,target:m},c.a.createElement(o.a,{color:a,className:n,onClick:r},l," ",i)))}},318:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(320),o=a(260);t.a=function(e){var t,a,n,l,i=e.dataPerPage,r=e.totalData,m=e.paginate,u=e.currentPage,d=Math.ceil(r/i),p=u-5,f=u+4;p<=0&&(f-=p-1,p=1),f>d&&(f=d)>10&&(p=f-9),t=u,a=d;for(var h=[],b=(l=f,n=p,n);b<=l;b++)h.push(b);return c.a.createElement(s.a,null,c.a.createElement(o.a,{md:"6"},c.a.createElement("nav",{className:"page navigation uapp-pagination"},c.a.createElement("ul",{className:"pagination ml-2"},t>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"pagination-item pagination-First"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return m(1)},className:"page-link"},"First")),c.a.createElement("li",{className:"pagination-item"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return m(t-1)},className:"page-link"},c.a.createElement("i",{className:"fas fa-chevron-left"})))),h.map((function(e){return t==e?c.a.createElement("li",{key:e,className:"pagination-item "},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return m(e)},className:"page-link page-active"},e)):c.a.createElement("li",{key:e,className:"pagination-item"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return m(e)},className:"page-link"},e))})),t<a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"pagination-item"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return m(t+1)},className:"page-link"},c.a.createElement("i",{className:"fas fa-chevron-right"}))),c.a.createElement("li",{className:"pagination-item pagination-Last"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return m(a)},className:"page-link"},"Last")))))),c.a.createElement(o.a,{md:"6",style:{textAlign:"right",marginTop:"1.5%",paddingRight:"2.5%"}},c.a.createElement("h5",null,"Total Results Found: ",r)))}},321:function(e,t,a){"use strict";var n=a(5),c=a(6),s=a(101),o=a(16),l=a(17),i=a(0),r=a.n(i),m={id:"button-download-as-xls",className:"button-download",buttonText:"Download",icon:r.a.createElement("i",{className:"fas fa-file-excel"})},u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleDownload=c.handleDownload.bind(Object(s.a)(c)),c}return Object(c.a)(a,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var e=document.getElementById(this.props.table).outerHTML,t=String(this.props.sheet),n="".concat(String(this.props.filename),".xls"),c={worksheet:t||"Worksheet",table:e};if(window.navigator.msSaveOrOpenBlob){var s=["".concat('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>').concat(e,"</body></html>")],o=new Blob(s);return document.getElementById("react-html-table-to-excel").click()((function(){window.navigator.msSaveOrOpenBlob(o,n)})),!0}var l=window.document.createElement("a");return l.href="data:application/vnd.ms-excel;base64,"+a.base64(a.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',c)),l.download=n,document.body.appendChild(l),l.click(),document.body.removeChild(l),!0}},{key:"render",value:function(){return r.a.createElement("p",{id:this.props.id,onClick:this.handleDownload,className:this.props.className},this.props.icon)}}],[{key:"base64",value:function(e){return window.btoa(unescape(encodeURIComponent(e)))}},{key:"format",value:function(e,t){return e.replace(/{(\w+)}/g,(function(e,a){return t[a]}))}}]),a}(i.Component);u.defaultProps=m,t.a=u},799:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(0),s=a.n(c),o=a(30),l=a(37),i=a(293),r=a(259),m=a(255),u=a(320),d=a(260),p=a(258),f=a(80),h=a(150),b=a(148),g=a(265),E=a(764),O=a(327),v=a(297),y=a(295),N=a(302),j=a(98),k=a(264),x=a(318),C=a(252),w=a(100),S=a(287),T=a(321),_=(a(350),a(349)),P=a.n(_),A=a(247),D=(a(312),a(324)),F=a(332),B=a.n(F);t.default=Object(o.b)((function(e){return{employeeTypeList:e.employeeTypeDataReducer.employeeType}}))((function(e){var t=Object(l.i)().type,a=Object(l.g)(),o=Object(c.useState)([]),_=Object(n.a)(o,2),F=_[0],M=_[1],I=Object(c.useState)(1),R=Object(n.a)(I,2),z=R[0],W=R[1],L=Object(c.useState)("Select Staff Type"),U=Object(n.a)(L,2),K=(U[0],U[1],Object(c.useState)(0)),q=Object(n.a)(K,2),G=q[0],J=(q[1],Object(c.useState)("")),H=Object(n.a)(J,2),V=H[0],Y=H[1],$=Object(c.useState)(15),Q=Object(n.a)($,2),X=Q[0],Z=Q[1],ee=Object(c.useState)(0),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],ce=Object(c.useState)(!1),se=Object(n.a)(ce,2),oe=se[0],le=se[1],ie=Object(c.useState)(0),re=Object(n.a)(ie,2),me=re[0],ue=re[1],de=Object(c.useState)(!1),pe=Object(n.a)(de,2),fe=pe[0],he=pe[1],be=Object(c.useState)(!1),ge=Object(n.a)(be,2),Ee=ge[0],Oe=ge[1],ve=e.employeeTypeList[0],ye=(Object(l.h)(),Object(C.useToasts)().addToast),Ne=Object(c.useState)(!1),je=Object(n.a)(Ne,2),ke=je[0],xe=je[1],Ce=Object(c.useState)(!1),we=Object(n.a)(Ce,2),Se=we[0],Te=we[1],_e=Object(c.useState)([]),Pe=Object(n.a)(_e,2),Ae=Pe[0],De=Pe[1],Fe=Object(c.useState)("Select Staff Type"),Be=Object(n.a)(Fe,2),Me=Be[0],Ie=Be[1],Re=Object(c.useState)(0),ze=Object(n.a)(Re,2),We=ze[0],Le=ze[1],Ue=Object(c.useState)({}),Ke=Object(n.a)(Ue,2),qe=Ke[0],Ge=Ke[1],Je=Object(c.useState)(!0),He=Object(n.a)(Je,2),Ve=He[0],Ye=He[1],$e=Object(c.useState)(!0),Qe=Object(n.a)($e,2),Xe=Qe[0],Ze=Qe[1],et=Object(c.useState)(!0),tt=Object(n.a)(et,2),at=tt[0],nt=tt[1],ct=Object(c.useState)(!0),st=Object(n.a)(ct,2),ot=st[0],lt=st[1],it=Object(c.useState)(!0),rt=Object(n.a)(it,2),mt=rt[0],ut=rt[1],dt=Object(c.useState)(!0),pt=Object(n.a)(dt,2),ft=pt[0],ht=pt[1],bt=Object(c.useState)(!0),gt=Object(n.a)(bt,2),Et=gt[0],Ot=gt[1],vt=Object(c.useState)(!0),yt=Object(n.a)(vt,2),Nt=yt[0],jt=yt[1],kt=Object(c.useState)(!0),xt=Object(n.a)(kt,2),Ct=xt[0],wt=xt[1],St=Object(c.useState)(!1),Tt=Object(n.a)(St,2),_t=Tt[0],Pt=Tt[1],At=JSON.parse(localStorage.getItem("permissions")),Dt=[10,15,20,30,50,100,1e3].map((function(e){return{label:e,value:e}}));null===ve||void 0===ve||ve.map((function(e){return{label:e.name,value:e.id}}));Object(c.useEffect)((function(){t?Object(w.a)("Employee/Index?page=".concat(z,"&pagesize=").concat(X,"&employeetypeid=").concat(t||We,"&searchstring=").concat(V)).then((function(e){var t,a;M(e.models),Ie(null===e||void 0===e||null===(t=e.models[0])||void 0===t||null===(a=t.employeeType)||void 0===a?void 0:a.name),Ye(!1),ne(e.totalEntity),ue(e.firstSerialNumber),Ye(!1)})):Object(w.a)("Employee/Index?page=".concat(z,"&pagesize=").concat(X,"&employeetypeid=").concat(t||We,"&searchstring=").concat(V)).then((function(e){M(e.models),Ye(!1),ne(e.totalEntity),ue(e.firstSerialNumber),Ye(!1)})),Object(w.a)("EmployeeTypeDD/Index").then((function(e){De(e),Ye(!1)}))}),[oe,z,X,G,V,ae,Se]);var Ft=null===Ae||void 0===Ae?void 0:Ae.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Bt=function(){xe(!1)},Mt=Object(c.useRef)(F);return s.a.createElement("div",null,Ve?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{className:"img-fluid",src:B.a,alt:"uapp_loader"})):s.a.createElement("div",null,s.a.createElement(i.a,{className:"uapp-card-bg"},s.a.createElement(r.a,{className:"page-header"},s.a.createElement("h3",{className:"text-white"},"Staff List"),s.a.createElement("div",{className:"page-header-back-to-home"},s.a.createElement("span",{onClick:function(){a.push("/")},className:"text-white"}," ",s.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),s.a.createElement(i.a,{className:"uapp-employee-search"},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"uapp-mb",md:"6",sm:"12"},s.a.createElement(k.a,{options:Ft,value:{label:Me,value:We},onChange:function(e){return t=e.label,a=e.value,Ie(t),Le(a),void le((function(e){return!e}));var t,a},name:"employeeType",id:"employeeType",isDisabled:!!t})),s.a.createElement(d.a,{className:"uapp-mb",md:"6",sm:"12",style:{display:"flex"}},s.a.createElement(p.a,{style:{height:"2.7rem"},type:"text",name:"search",value:V,id:"search",placeholder:"Id, Name, Email",onChange:function(e){return Y(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(W(1),le((function(e){return!e})))}}))),s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"12",md:"12",sm:"12",xs:"12"},s.a.createElement("div",{style:{display:"flex",justifyContent:"end"}},s.a.createElement("div",{className:"mt-1 mx-1 d-flex btn-clear",onClick:function(){Ie("Select Staff Type"),Le(0),Y(""),W(1),le((function(e){return!e}))}},s.a.createElement("span",{className:"text-danger"},s.a.createElement("i",{className:"fa fa-times"})," Clear"))))))),s.a.createElement(i.a,{className:"uapp-employee-search"},s.a.createElement(m.a,null,s.a.createElement(u.a,{className:"mb-3"},s.a.createElement(d.a,{lg:"5",md:"5",sm:"4",xs:"4"},(null===At||void 0===At?void 0:At.includes(null===D.a||void 0===D.a?void 0:D.a.Add_Staff))?s.a.createElement(A.a,{func:function(){a.push("/addStaffGeneralInfo")},className:"btn btn-uapp-add ",icon:s.a.createElement("i",{className:"fas fa-plus"}),name:" Add Staff"}):null),s.a.createElement(d.a,{lg:"7",md:"7",sm:"8",xs:"8"},s.a.createElement("div",{className:"d-md-flex justify-content-end"},s.a.createElement("div",{className:"mr-3"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"mr-2"},"Showing :"),s.a.createElement("div",null,s.a.createElement(k.a,{options:Dt,value:{label:X,value:X},onChange:function(e){return t=e.value,Ye(!0),Z(t),void le((function(e){return!e}));var t}})))),s.a.createElement("div",{className:"mr-3"},s.a.createElement(f.a,{className:"uapp-dropdown",style:{float:"right"},isOpen:fe,toggle:function(){he((function(e){return!e}))}},s.a.createElement(h.a,{caret:!0},s.a.createElement("i",{className:"fas fa-print fs-7"})),s.a.createElement(b.a,{className:"bg-dd-4"},s.a.createElement("div",{className:"d-flex justify-content-around align-items-center mt-2"},s.a.createElement("div",{className:"cursor-pointer"},s.a.createElement(T.a,{id:"test-table-xls-button",table:"table-to-xls",filename:"tablexls",sheet:"tablexls",icon:s.a.createElement("i",{className:"fas fa-file-excel"})})),s.a.createElement("div",{className:"cursor-pointer"},s.a.createElement(P.a,{trigger:function(){return s.a.createElement("p",null,s.a.createElement("i",{className:"fas fa-file-pdf"}))},content:function(){return Mt.current}})))))),s.a.createElement("div",{className:""},s.a.createElement(f.a,{className:"uapp-dropdown",style:{float:"right"},isOpen:Ee,toggle:function(){Oe((function(e){return!e}))}},s.a.createElement(h.a,{caret:!0},s.a.createElement("i",{className:"fas fa-bars"})),s.a.createElement(b.a,{className:"bg-dd-1"},s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"SL/NO")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",id:"",name:"isAcceptHome",onChange:function(e){!function(e){Ze(e.target.checked)}(e)},defaultChecked:Xe})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"UAPP Id")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){nt(e.target.checked)}(e)},defaultChecked:at})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"Staff Type")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){lt(e.target.checked)}(e)},defaultChecked:ot})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"Nationality")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){ut(e.target.checked)}(e)},defaultChecked:mt})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"Full Name")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){ht(e.target.checked)}(e)},defaultChecked:ft})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"Email")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){Ot(e.target.checked)}(e)},defaultChecked:Et})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"Phone No")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){jt(e.target.checked)}(e)},defaultChecked:Nt})))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(d.a,{md:"8",className:""},s.a.createElement("p",{className:""},"Action")),s.a.createElement(d.a,{md:"4",className:"text-center"},s.a.createElement(g.a,{check:!0,inline:!0},s.a.createElement(p.a,{className:"form-check-input",type:"checkbox",onChange:function(e){!function(e){wt(e.target.checked)}(e)},defaultChecked:Ct})))))))))),Ve?s.a.createElement("h2",{className:"text-center"},"Loading..."):s.a.createElement("div",{className:"table-responsive",ref:Mt},s.a.createElement(E.a,{id:"table-to-xls",className:"table-sm table-bordered"},s.a.createElement("thead",{className:"thead-uapp-bg"},s.a.createElement("tr",{style:{textAlign:"center"}},Xe?s.a.createElement("th",null,"SL/NO"):null,at?s.a.createElement("th",null,"UAPP Id"):null,ot?s.a.createElement("th",null,"Staff Type"):null,mt?s.a.createElement("th",null,"Nationality"):null,ft?s.a.createElement("th",null,"Full Name"):null,Et?s.a.createElement("th",null,"Email"):null,Nt?s.a.createElement("th",null,"Phone No"):null,Ct?s.a.createElement("th",{className:"text-center"},"Action"):null)),s.a.createElement("tbody",null,null===F||void 0===F?void 0:F.map((function(e,t){var n,c;return s.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},Xe?s.a.createElement("th",{scope:"row"},me+t):null,at?s.a.createElement("td",null,null===e||void 0===e?void 0:e.employeeViewId):null,ot?s.a.createElement("td",null,null===e||void 0===e||null===(n=e.employeeType)||void 0===n?void 0:n.name):null,mt?s.a.createElement("td",null,null===e||void 0===e||null===(c=e.nationality)||void 0===c?void 0:c.name):null,ft?s.a.createElement("td",{className:"cursor-pointer hyperlink-hover",onClick:function(){return t=e.id,void a.push({pathname:"/staffProfile/".concat(t)});var t}}," ",s.a.createElement("span",null," ","".concat(e.firstName," ").concat(e.lastName)," ")," "):null,Et?s.a.createElement("td",null,e.email):null,Nt?s.a.createElement("td",null,e.phoneNumber):null,Ct?s.a.createElement("td",{className:"text-center"},s.a.createElement(O.a,{variant:"text"},s.a.createElement(A.a,{func:function(){return t=null===e||void 0===e?void 0:e.id,void a.push("staffProfile/".concat(t));var t},color:"primary",className:"mx-1 btn-sm",icon:s.a.createElement("i",{className:"fas fa-eye"})}),s.a.createElement(A.a,{func:function(){return t=null===e||void 0===e?void 0:e.id,void a.push("/staffGeneralInfo/".concat(t));var t},color:"warning",className:"mx-1 btn-sm",icon:s.a.createElement("i",{className:"fas fa-edit"})}),s.a.createElement(A.a,{func:function(){return function(e){Ge(e),xe(!0)}(e)},color:"danger",className:"mx-1 btn-sm",icon:s.a.createElement("i",{className:"fas fa-trash-alt"}),disable:_t})),s.a.createElement(v.a,{isOpen:ke,toggle:Bt,className:"uapp-modal"},s.a.createElement(y.a,null,s.a.createElement("p",null,"Are You Sure to Delete this? Once Deleted it can't be Undone!")),s.a.createElement(N.a,null,s.a.createElement(j.a,{color:"danger",onClick:function(){return null===e||void 0===e||e.id,Pt(!0),void Object(S.a)("Employee/Delete/".concat(null===qe||void 0===qe?void 0:qe.id)).then((function(e){ye(e,{appearance:"error"}),xe(!1),Te(!Se),Pt(!1)}))}},"YES"),s.a.createElement(j.a,{onClick:Bt},"NO")))):null)}))))),s.a.createElement(x.a,{dataPerPage:X,totalData:ae,paginate:function(e){W(e),le((function(e){return!e}))},currentPage:z})))))}))}}]);
//# sourceMappingURL=182.b4afdf0a.chunk.js.map