(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[4],{254:function(e,t,n){"use strict";var r=n(11),o=n(15),a=n(0),i=n.n(a),l=n(2),s=n.n(l),c=n(8),u=n.n(c),f=n(7),d=["className","cssModule","innerRef","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,l=e.tag,s=Object(o.a)(e,d),c=Object(f.p)(u()(t,"card-body"),n);return i.a.createElement(l,Object(r.a)({},s,{className:c,ref:a}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},259:function(e,t,n){"use strict";var r=n(11),o=n(15),a=n(0),i=n.n(a),l=n(2),s=n.n(l),c=n(8),u=n.n(c),f=n(7),d=["className","cssModule","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,n=e.cssModule,a=e.tag,l=Object(o.a)(e,d),s=Object(f.p)(u()(t,"card-header"),n);return i.a.createElement(a,Object(r.a)({},l,{className:s}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},262:function(e,t,n){"use strict";var r=n(11),o=n(15),a=n(0),i=n.n(a),l=n(2),s=n.n(l),c=n(8),u=n.n(c),f=n(7),d=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),y={tag:f.t,xs:h,sm:h,md:h,lg:h,xl:h,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},v=function(e){var t=e.className,n=e.cssModule,a=e.widths,l=e.tag,s=Object(o.a)(e,d),c=[];a.forEach((function(t,r){var o=e[t];if(delete s[t],o||""===o){var a=!r;if(Object(f.n)(o)){var i,l=a?"-":"-"+t+"-",d=g(a,t,o.size);c.push(Object(f.p)(u()(((i={})[d]=o.size||""===o.size,i["order"+l+o.order]=o.order||0===o.order,i["offset"+l+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=g(a,t,o);c.push(p)}}})),c.length||c.push("col");var p=Object(f.p)(u()(t,c),n);return i.a.createElement(l,Object(r.a)({},s,{className:p}))};v.propTypes=y,v.defaultProps=b,t.a=v},321:function(e,t,n){"use strict";var r=n(11),o=n(15),a=n(0),i=n.n(a),l=n(2),s=n.n(l),c=n(8),u=n.n(c),f=n(7),d=["className","cssModule","noGutters","tag","form","widths"],p=s.a.oneOfType([s.a.number,s.a.string]),h={tag:f.t,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},y={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,l=e.tag,s=e.form,c=e.widths,p=Object(o.a)(e,d),h=[];c.forEach((function(t,n){var r=e[t];if(delete p[t],r){var o=!n;h.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var y=Object(f.p)(u()(t,a?"no-gutters":null,s?"form-row":"row",h),n);return i.a.createElement(l,Object(r.a)({},p,{className:y}))};b.propTypes=h,b.defaultProps=y,t.a=b},350:function(e,t,n){var r,o;"undefined"!=typeof self&&self,e.exports=(r=n(0),o=n(44),function(){"use strict";var e={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return a},__rest:function(){return i},__decorate:function(){return l},__param:function(){return s},__metadata:function(){return c},__awaiter:function(){return u},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return h},__read:function(){return y},__spread:function(){return b},__spreadArrays:function(){return g},__spreadArray:function(){return v},__await:function(){return m},__asyncGenerator:function(){return w},__asyncDelegator:function(){return _},__asyncValues:function(){return P},__makeTemplateObject:function(){return O},__importStar:function(){return x},__importDefault:function(){return S},__classPrivateFieldGet:function(){return T},__classPrivateFieldSet:function(){return E}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function l(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function s(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r}function v(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(s,c):u(a[0][2],n)}catch(e){u(a[0][3],e)}var n}function s(e){l("next",e)}function c(e){l("throw",e)}function u(e,t){e(t),a.shift(),a.length&&l(a[0][0],a[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return j(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function T(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function E(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},156:function(e){e.exports=r},111:function(e){e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=n(655),r=n(156),o=n(111),i=Object.prototype.hasOwnProperty.call(r,"createContext"),l=Object.prototype.hasOwnProperty.call(r,"useMemo")&&Object.prototype.hasOwnProperty.call(r,"useCallback"),s=i?r.createContext({}):null;e.PrintContextConsumer=s?s.Consumer:function(){return null};var c={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},u=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,a=t.print,i=t.documentTitle;setTimeout((function(){var t,l;if(e.contentWindow){if(e.contentWindow.focus(),a)a(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):n.logMessages(["An error was thrown by the specified `print` function"])}));else if(e.contentWindow.print){var s=null!==(l=null===(t=e.contentDocument)||void 0===t?void 0:t.title)&&void 0!==l?l:"",c=e.ownerDocument.title;i&&(e.ownerDocument.title=i,e.contentDocument&&(e.contentDocument.title=i)),e.contentWindow.print(),i&&(e.ownerDocument.title=c,e.contentDocument&&(e.contentDocument.title=s))}else n.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);r&&r(),n.handleRemoveIframe()}else n.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var a=r();a&&"function"==typeof a.then?a.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,r=e.bodyClass,a=e.content,i=e.copyStyles,l=e.fonts,s=e.pageStyle,c=e.nonce,u=a();if(void 0!==u)if(null!==u){var f=document.createElement("iframe");f.style.position="absolute",f.style.top="-1000px",f.style.left="-1000px",f.id="printWindow",f.srcdoc="<!DOCTYPE html>";var d=(0,o.findDOMNode)(u);if(d){var p=d.cloneNode(!0),h=p instanceof Text,y=document.querySelectorAll("link[rel='stylesheet']"),b=h?[]:p.querySelectorAll("img"),g=h?[]:p.querySelectorAll("video");n.linkTotal=y.length+b.length+g.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var v=function(e,t){t?n.linksLoaded.push(e):(n.logMessages(['"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e]),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(f)};f.onload=function(){var e,o,a,u;f.onload=null;var y=f.contentDocument||(null===(o=f.contentWindow)||void 0===o?void 0:o.document);if(y){y.body.appendChild(p),l&&((null===(a=f.contentDocument)||void 0===a?void 0:a.fonts)&&(null===(u=f.contentWindow)||void 0===u?void 0:u.FontFace)?l.forEach((function(e){var t=new FontFace(e.family,e.source);f.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),n.logMessages(['"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e])}))})):n.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API']));var m="function"==typeof s?s():s;if("string"!=typeof m)n.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof m,'". Styles from `pageStyle` will not be applied.')]);else{var w=y.createElement("style");c&&(w.setAttribute("nonce",c),y.head.setAttribute("nonce",c)),w.appendChild(y.createTextNode(m)),y.head.appendChild(w)}if(r&&(e=y.body.classList).add.apply(e,(0,t.__spreadArray)([],(0,t.__read)(r.split(" ")),!1)),!h){for(var _=h?[]:d.querySelectorAll("canvas"),P=y.querySelectorAll("canvas"),O=0;O<_.length;++O){var j=_[O],x=P[O].getContext("2d");x&&x.drawImage(j,0,0)}for(O=0;O<b.length;O++){var S=b[O],T=S.getAttribute("src");T?((k=new Image).onload=v.bind(null,S,!0),k.onerror=v.bind(null,S,!1),k.src=T):(n.logMessages(['"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',S],"warning"),v(S,!1))}for(O=0;O<g.length;O++){var E=g[O];E.preload="auto";var k,A=E.getAttribute("poster");A?((k=new Image).onload=v.bind(null,E,!0),k.onerror=v.bind(null,E,!1),k.src=A):E.readyState>=2?v(E,!0):(E.onloadeddata=v.bind(null,E,!0),E.onerror=v.bind(null,E,!1),E.onstalled=v.bind(null,E,!1))}var M="input",C=d.querySelectorAll(M),R=y.querySelectorAll(M);for(O=0;O<C.length;O++)R[O].value=C[O].value;var N="input[type=checkbox],input[type=radio]",I=d.querySelectorAll(N),D=y.querySelectorAll(N);for(O=0;O<I.length;O++)D[O].checked=I[O].checked;var q="select",L=d.querySelectorAll(q),W=y.querySelectorAll(q);for(O=0;O<L.length;O++)W[O].value=L[O].value}if(i)for(var F=document.querySelectorAll("style, link[rel='stylesheet']"),G=(O=0,F.length);O<G;++O){var B=F[O];if("style"===B.tagName.toLowerCase()){var z=y.createElement(B.tagName),J=B.sheet;if(J){var V="";try{for(var Y=J.cssRules.length,H=0;H<Y;++H)"string"==typeof J.cssRules[H].cssText&&(V+="".concat(J.cssRules[H].cssText,"\r\n"))}catch(e){n.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",B],"warning")}z.setAttribute("id","react-to-print-".concat(O)),c&&z.setAttribute("nonce",c),z.appendChild(y.createTextNode(V)),y.head.appendChild(z)}}else if(B.getAttribute("href")){z=y.createElement(B.tagName),H=0;for(var K=B.attributes.length;H<K;++H){var Q=B.attributes[H];Q&&z.setAttribute(Q.nodeName,Q.nodeValue||"")}z.onload=v.bind(null,z,!0),z.onerror=v.bind(null,z,!1),c&&z.setAttribute("nonce",c),y.head.appendChild(z)}else n.logMessages(['"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',B],"warning"),v(B,!0)}}0!==n.linkTotal&&i||n.triggerPrint(f)},n.handleRemoveIframe(!0),document.body.appendChild(f)}else n.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else n.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else n.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n.logMessages=function(e,t){void 0===t&&(t="error"),n.props.suppressErrors||("error"===t?console.error(e):"warning"===t&&console.warn(e))},n}return(0,t.__extends)(n,e),n.prototype.render=function(){var e=this.props,t=e.children,n=e.trigger;if(n)return r.cloneElement(n(),{onClick:this.handleClick});if(!s)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var o={handlePrint:this.handleClick};return r.createElement(s.Provider,{value:o},t)},n.defaultProps=c,n}(r.Component);e.default=u,e.useReactToPrint=function(e){if(!l)return e.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var n=r.useMemo((function(){return new u((0,t.__assign)((0,t.__assign)({},c),e))}),[e]);return r.useCallback((function(){return n.handleClick()}),[n])}}(),a}())}}]);
//# sourceMappingURL=4.915e207c.chunk.js.map