function qv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Qv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var aa={},Jv={get exports(){return aa},set exports(e){aa=e}},Ha={},I={},Xv={get exports(){return I},set exports(e){I=e}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),Zv=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),pf=Symbol.iterator;function uy(e){return e===null||typeof e!="object"?null:(e=pf&&e[pf]||e["@@iterator"],typeof e=="function"?e:null)}var jh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$h=Object.assign,Bh={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=Bh,this.updater=n||jh}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hh(){}Hh.prototype=Tr.prototype;function Fu(e,t,n){this.props=e,this.context=t,this.refs=Bh,this.updater=n||jh}var zu=Fu.prototype=new Hh;zu.constructor=Fu;$h(zu,Tr.prototype);zu.isPureReactComponent=!0;var mf=Array.isArray,Wh=Object.prototype.hasOwnProperty,ju={current:null},Vh={key:!0,ref:!0,__self:!0,__source:!0};function Kh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Wh.call(t,r)&&!Vh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Hi,type:e,key:o,ref:a,props:i,_owner:ju.current}}function cy(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function fy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gf=/\/+/g;function ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fy(""+e.key):t.toString(36)}function Fo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hi:case Zv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ks(a,0):r,mf(i)?(n="",e!=null&&(n=e.replace(gf,"$&/")+"/"),Fo(i,t,n,"",function(u){return u})):i!=null&&($u(i)&&(i=cy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",mf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ks(o,s);a+=Fo(o,t,n,l,i)}else if(l=uy(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ks(o,s++),a+=Fo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function co(e,t,n){if(e==null)return e;var r=[],i=0;return Fo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function dy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},zo={transition:null},hy={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:zo,ReactCurrentOwner:ju};F.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!$u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Tr;F.Fragment=ey;F.Profiler=ny;F.PureComponent=Fu;F.StrictMode=ty;F.Suspense=ay;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$h({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Wh.call(t,l)&&!Vh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:iy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ry,_context:e},e.Consumer=e};F.createElement=Kh;F.createFactory=function(e){var t=Kh.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:oy,render:e}};F.isValidElement=$u;F.lazy=function(e){return{$$typeof:ly,_payload:{_status:-1,_result:e},_init:dy}};F.memo=function(e,t){return{$$typeof:sy,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=zo.transition;zo.transition={};try{e()}finally{zo.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return ke.current.useCallback(e,t)};F.useContext=function(e){return ke.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};F.useEffect=function(e,t){return ke.current.useEffect(e,t)};F.useId=function(){return ke.current.useId()};F.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ke.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};F.useRef=function(e){return ke.current.useRef(e)};F.useState=function(e){return ke.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ke.current.useTransition()};F.version="18.2.0";(function(e){e.exports=F})(Xv);const qe=Qv(I),hl=qv({__proto__:null,default:qe},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=I,my=Symbol.for("react.element"),gy=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,yy=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function Gh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)vy.call(t,r)&&!wy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:my,type:e,key:o,ref:a,props:i,_owner:yy.current}}Ha.Fragment=gy;Ha.jsx=Gh;Ha.jsxs=Gh;(function(e){e.exports=Ha})(Jv);const b=aa.jsx,J=aa.jsxs;var pl={},ml={},_y={get exports(){return ml},set exports(e){ml=e}},Le={},gl={},Ey={get exports(){return gl},set exports(e){gl=e}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,L){var U=O.length;O.push(L);e:for(;0<U;){var ne=U-1>>>1,ce=O[ne];if(0<i(ce,L))O[ne]=L,O[U]=ce,U=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var L=O[0],U=O.pop();if(U!==L){O[0]=U;e:for(var ne=0,ce=O.length,lo=ce>>>1;ne<lo;){var gn=2*(ne+1)-1,Ss=O[gn],vn=gn+1,uo=O[vn];if(0>i(Ss,U))vn<ce&&0>i(uo,Ss)?(O[ne]=uo,O[vn]=U,ne=vn):(O[ne]=Ss,O[gn]=U,ne=gn);else if(vn<ce&&0>i(uo,U))O[ne]=uo,O[vn]=U,ne=vn;else break e}}return L}function i(O,L){var U=O.sortIndex-L.sortIndex;return U!==0?U:O.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,v=!1,g=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=O)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function w(O){if(y=!1,m(O),!g)if(n(l)!==null)g=!0,_s(S);else{var L=n(u);L!==null&&Es(w,L.startTime-O)}}function S(O,L){g=!1,y&&(y=!1,p(N),N=-1),v=!0;var U=h;try{for(m(L),f=n(l);f!==null&&(!(f.expirationTime>L)||O&&!He());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ce=ne(f.expirationTime<=L);L=e.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),m(L)}else r(l);f=n(l)}if(f!==null)var lo=!0;else{var gn=n(u);gn!==null&&Es(w,gn.startTime-L),lo=!1}return lo}finally{f=null,h=U,v=!1}}var C=!1,T=null,N=-1,z=5,D=-1;function He(){return!(e.unstable_now()-D<z)}function Mr(){if(T!==null){var O=e.unstable_now();D=O;var L=!0;try{L=T(!0,O)}finally{L?Ur():(C=!1,T=null)}}else C=!1}var Ur;if(typeof d=="function")Ur=function(){d(Mr)};else if(typeof MessageChannel<"u"){var hf=new MessageChannel,Yv=hf.port2;hf.port1.onmessage=Mr,Ur=function(){Yv.postMessage(null)}}else Ur=function(){k(Mr,0)};function _s(O){T=O,C||(C=!0,Ur())}function Es(O,L){N=k(function(){O(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,_s(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var U=h;h=L;try{return O()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,L){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=h;h=O;try{return L()}finally{h=U}},e.unstable_scheduleCallback=function(O,L,U){var ne=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,O){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=U+ce,O={id:c++,callback:L,priorityLevel:O,startTime:U,expirationTime:ce,sortIndex:-1},U>ne?(O.sortIndex=U,t(u,O),n(l)===null&&O===n(u)&&(y?(p(N),N=-1):y=!0,Es(w,U-ne))):(O.sortIndex=ce,t(l,O),g||v||(g=!0,_s(S))),O},e.unstable_shouldYield=He,e.unstable_wrapCallback=function(O){var L=h;return function(){var U=h;h=L;try{return O.apply(this,arguments)}finally{h=U}}}})(Yh);(function(e){e.exports=Yh})(Ey);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh=I,Ae=gl;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qh=new Set,hi={};function jn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(hi[e]=t,e=0;e<t.length;e++)Qh.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vf={},yf={};function ky(e){return vl.call(yf,e)?!0:vl.call(vf,e)?!1:Sy.test(e)?yf[e]=!0:(vf[e]=!0,!1)}function by(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Iy(e,t,n,r){if(t===null||typeof t>"u"||by(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bu,Hu);me[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bu,Hu);me[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bu,Hu);me[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wu(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Iy(t,n,i,r)&&(n=null),r||i===null?ky(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),yl=Symbol.for("react.profiler"),Jh=Symbol.for("react.provider"),Xh=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Zh=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=wf&&e[wf]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,bs;function Yr(e){if(bs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bs=t&&t[1]||""}return`
`+bs+e}var Is=!1;function Cs(e,t){if(!e||Is)return"";Is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Cy(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=Cs(e.type,!1),e;case 11:return e=Cs(e.type.render,!1),e;case 1:return e=Cs(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Vn:return"Portal";case yl:return"Profiler";case Vu:return"StrictMode";case wl:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xh:return(e.displayName||"Context")+".Consumer";case Jh:return(e._context.displayName||"Context")+".Provider";case Ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gu:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Ty(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xy(e){var t=ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){e._valueTracker||(e._valueTracker=xy(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _f(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function np(e,t){t=t.checked,t!=null&&Wu(e,"checked",t,!1)}function kl(e,t){np(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ef(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||sa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(qr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function rp(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,op=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Py.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function ap(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ap(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Oy=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(Oy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,lr=null,ur=null;function bf(e){if(e=Ki(e)){if(typeof Ol!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ya(t),Ol(e.stateNode,e.type,t))}}function lp(e){lr?ur?ur.push(e):ur=[e]:lr=e}function up(){if(lr){var e=lr,t=ur;if(ur=lr=null,bf(e),t)for(e=0;e<t.length;e++)bf(t[e])}}function cp(e,t){return e(t)}function fp(){}var Ts=!1;function dp(e,t,n){if(Ts)return e(t,n);Ts=!0;try{return cp(e,t,n)}finally{Ts=!1,(lr!==null||ur!==null)&&(fp(),up())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Rl=!1;if(yt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Rl=!1}function Ry(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ni=!1,la=null,ua=!1,Nl=null,Ny={onError:function(e){ni=!0,la=e}};function Ay(e,t,n,r,i,o,a,s,l){ni=!1,la=null,Ry.apply(Ny,arguments)}function Ly(e,t,n,r,i,o,a,s,l){if(Ay.apply(this,arguments),ni){if(ni){var u=la;ni=!1,la=null}else throw Error(E(198));ua||(ua=!0,Nl=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function If(e){if($n(e)!==e)throw Error(E(188))}function Dy(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return If(i),e;if(o===r)return If(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function pp(e){return e=Dy(e),e!==null?mp(e):null}function mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mp(e);if(t!==null)return t;e=e.sibling}return null}var gp=Ae.unstable_scheduleCallback,Cf=Ae.unstable_cancelCallback,My=Ae.unstable_shouldYield,Uy=Ae.unstable_requestPaint,re=Ae.unstable_now,Fy=Ae.unstable_getCurrentPriorityLevel,qu=Ae.unstable_ImmediatePriority,vp=Ae.unstable_UserBlockingPriority,ca=Ae.unstable_NormalPriority,zy=Ae.unstable_LowPriority,yp=Ae.unstable_IdlePriority,Wa=null,ot=null;function jy(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Wa,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Hy,$y=Math.log,By=Math.LN2;function Hy(e){return e>>>=0,e===0?32:31-($y(e)/By|0)|0}var mo=64,go=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Qr(s):(o&=a,o!==0&&(r=Qr(o)))}else a=n&~i,a!==0?r=Qr(a):o!==0&&(r=Qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Wy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Qe(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Wy(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wp(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function _p(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ep,Ju,Sp,kp,bp,Ll=!1,vo=[],Kt=null,Gt=null,Yt=null,gi=new Map,vi=new Map,Mt=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function jr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Ju(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,n,r,i){switch(t){case"focusin":return Kt=jr(Kt,e,t,n,r,i),!0;case"dragenter":return Gt=jr(Gt,e,t,n,r,i),!0;case"mouseover":return Yt=jr(Yt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,jr(gi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,jr(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Ip(e){var t=Sn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=hp(n),t!==null){e.blockedOn=t,bp(e.priority,function(){Sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return t=Ki(n),t!==null&&Ju(t),e.blockedOn=n,!1;t.shift()}return!0}function xf(e,t,n){jo(e)&&n.delete(t)}function qy(){Ll=!1,Kt!==null&&jo(Kt)&&(Kt=null),Gt!==null&&jo(Gt)&&(Gt=null),Yt!==null&&jo(Yt)&&(Yt=null),gi.forEach(xf),vi.forEach(xf)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,qy)))}function yi(e){function t(i){return $r(i,e)}if(0<vo.length){$r(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&$r(Kt,e),Gt!==null&&$r(Gt,e),Yt!==null&&$r(Yt,e),gi.forEach(t),vi.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Ip(n),n.blockedOn===null&&Mt.shift()}var cr=Ct.ReactCurrentBatchConfig,da=!0;function Qy(e,t,n,r){var i=B,o=cr.transition;cr.transition=null;try{B=1,Xu(e,t,n,r)}finally{B=i,cr.transition=o}}function Jy(e,t,n,r){var i=B,o=cr.transition;cr.transition=null;try{B=4,Xu(e,t,n,r)}finally{B=i,cr.transition=o}}function Xu(e,t,n,r){if(da){var i=Dl(e,t,n,r);if(i===null)Fs(e,t,r,ha,n),Tf(e,r);else if(Yy(i,e,t,n,r))r.stopPropagation();else if(Tf(e,r),t&4&&-1<Gy.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&Ep(o),o=Dl(e,t,n,r),o===null&&Fs(e,t,r,ha,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fs(e,t,r,null,n)}}var ha=null;function Dl(e,t,n,r){if(ha=null,e=Yu(r),e=Sn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ha=e,null}function Cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case qu:return 1;case vp:return 4;case ca:case zy:return 16;case yp:return 536870912;default:return 16}default:return 16}}var Bt=null,Zu=null,$o=null;function Tp(){if($o)return $o;var e,t=Zu,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function Pf(){return!1}function De(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yo:Pf,this.isPropagationStopped=Pf,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=De(xr),Vi=Z({},xr,{view:0,detail:0}),Xy=De(Vi),Ps,Os,Br,Va=Z({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Ps=e.screenX-Br.screenX,Os=e.screenY-Br.screenY):Os=Ps=0,Br=e),Ps)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),Of=De(Va),Zy=Z({},Va,{dataTransfer:0}),e0=De(Zy),t0=Z({},Vi,{relatedTarget:0}),Rs=De(t0),n0=Z({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=De(n0),i0=Z({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o0=De(i0),a0=Z({},xr,{data:0}),Rf=De(a0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u0[e])?!!t[e]:!1}function tc(){return c0}var f0=Z({},Vi,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d0=De(f0),h0=Z({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=De(h0),p0=Z({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),m0=De(p0),g0=Z({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=De(g0),y0=Z({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=De(y0),_0=[9,13,27,32],nc=yt&&"CompositionEvent"in window,ri=null;yt&&"documentMode"in document&&(ri=document.documentMode);var E0=yt&&"TextEvent"in window&&!ri,xp=yt&&(!nc||ri&&8<ri&&11>=ri),Af=String.fromCharCode(32),Lf=!1;function Pp(e,t){switch(e){case"keyup":return _0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function S0(e,t){switch(e){case"compositionend":return Op(t);case"keypress":return t.which!==32?null:(Lf=!0,Af);case"textInput":return e=t.data,e===Af&&Lf?null:e;default:return null}}function k0(e,t){if(Gn)return e==="compositionend"||!nc&&Pp(e,t)?(e=Tp(),$o=Zu=Bt=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xp&&t.locale!=="ko"?null:t.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b0[e.type]:t==="textarea"}function Rp(e,t,n,r){lp(r),t=pa(t,"onChange"),0<t.length&&(n=new ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,wi=null;function I0(e){Bp(e,0)}function Ka(e){var t=Qn(e);if(tp(t))return e}function C0(e,t){if(e==="change")return t}var Np=!1;if(yt){var Ns;if(yt){var As="oninput"in document;if(!As){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),As=typeof Mf.oninput=="function"}Ns=As}else Ns=!1;Np=Ns&&(!document.documentMode||9<document.documentMode)}function Uf(){ii&&(ii.detachEvent("onpropertychange",Ap),wi=ii=null)}function Ap(e){if(e.propertyName==="value"&&Ka(wi)){var t=[];Rp(t,wi,e,Yu(e)),dp(I0,t)}}function T0(e,t,n){e==="focusin"?(Uf(),ii=t,wi=n,ii.attachEvent("onpropertychange",Ap)):e==="focusout"&&Uf()}function x0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ka(wi)}function P0(e,t){if(e==="click")return Ka(t)}function O0(e,t){if(e==="input"||e==="change")return Ka(t)}function R0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:R0;function _i(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vl.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=Ff(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ff(n)}}function Lp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dp(){for(var e=window,t=sa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sa(e.document)}return t}function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N0(e){var t=Dp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lp(n.ownerDocument.documentElement,n)){if(r!==null&&rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zf(n,o);var a=zf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A0=yt&&"documentMode"in document&&11>=document.documentMode,Yn=null,Ml=null,oi=null,Ul=!1;function jf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||Yn==null||Yn!==sa(r)||(r=Yn,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&_i(oi,r)||(oi=r,r=pa(Ml,"onSelect"),0<r.length&&(t=new ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Ls={},Mp={};yt&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Ga(e){if(Ls[e])return Ls[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mp)return Ls[e]=t[n];return e}var Up=Ga("animationend"),Fp=Ga("animationiteration"),zp=Ga("animationstart"),jp=Ga("transitionend"),$p=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){$p.set(e,t),jn(t,[e])}for(var Ds=0;Ds<$f.length;Ds++){var Ms=$f[Ds],L0=Ms.toLowerCase(),D0=Ms[0].toUpperCase()+Ms.slice(1);dn(L0,"on"+D0)}dn(Up,"onAnimationEnd");dn(Fp,"onAnimationIteration");dn(zp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(jp,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Bf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ly(r,t,void 0,e),e.currentTarget=null}function Bp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Bf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Bf(i,s,u),o=l}}}if(ua)throw e=Nl,ua=!1,Nl=null,e}function V(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(Hp(t,e,2,!1),n.add(r))}function Us(e,t,n){var r=0;t&&(r|=4),Hp(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[_o]){e[_o]=!0,Qh.forEach(function(n){n!=="selectionchange"&&(M0.has(n)||Us(n,!1,e),Us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Us("selectionchange",!1,t))}}function Hp(e,t,n,r){switch(Cp(t)){case 1:var i=Qy;break;case 4:i=Jy;break;default:i=Xu}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Sn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}dp(function(){var u=o,c=Yu(n),f=[];e:{var h=$p.get(e);if(h!==void 0){var v=ec,g=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":v=d0;break;case"focusin":g="focus",v=Rs;break;case"focusout":g="blur",v=Rs;break;case"beforeblur":case"afterblur":v=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=m0;break;case Up:case Fp:case zp:v=r0;break;case jp:v=v0;break;case"scroll":v=Xy;break;case"wheel":v=w0;break;case"copy":case"cut":case"paste":v=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Nf}var y=(t&4)!==0,k=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=mi(d,p),w!=null&&y.push(Si(d,w,m)))),k)break;d=d.return}0<y.length&&(h=new v(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Pl&&(g=n.relatedTarget||n.fromElement)&&(Sn(g)||g[wt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Sn(g):null,g!==null&&(k=$n(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Of,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nf,w="onPointerLeave",p="onPointerEnter",d="pointer"),k=v==null?h:Qn(v),m=g==null?h:Qn(g),h=new y(w,d+"leave",v,n,c),h.target=k,h.relatedTarget=m,w=null,Sn(c)===u&&(y=new y(p,d+"enter",g,n,c),y.target=m,y.relatedTarget=k,w=y),k=w,v&&g)t:{for(y=v,p=g,d=0,m=y;m;m=Hn(m))d++;for(m=0,w=p;w;w=Hn(w))m++;for(;0<d-m;)y=Hn(y),d--;for(;0<m-d;)p=Hn(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=Hn(y),p=Hn(p)}y=null}else y=null;v!==null&&Hf(f,h,v,y,!1),g!==null&&k!==null&&Hf(f,k,g,y,!0)}}e:{if(h=u?Qn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=C0;else if(Df(h))if(Np)S=O0;else{S=x0;var C=T0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=P0);if(S&&(S=S(e,u))){Rp(f,S,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&bl(h,"number",h.value)}switch(C=u?Qn(u):window,e){case"focusin":(Df(C)||C.contentEditable==="true")&&(Yn=C,Ml=u,oi=null);break;case"focusout":oi=Ml=Yn=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,jf(f,n,c);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":jf(f,n,c)}var T;if(nc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Gn?Pp(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xp&&n.locale!=="ko"&&(Gn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Gn&&(T=Tp()):(Bt=c,Zu="value"in Bt?Bt.value:Bt.textContent,Gn=!0)),C=pa(u,N),0<C.length&&(N=new Rf(N,e,null,n,c),f.push({event:N,listeners:C}),T?N.data=T:(T=Op(n),T!==null&&(N.data=T)))),(T=E0?S0(e,n):k0(e,n))&&(u=pa(u,"onBeforeInput"),0<u.length&&(c=new Rf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}Bp(f,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,n),o!=null&&r.unshift(Si(e,o,i)),o=mi(e,t),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=mi(n,o),l!=null&&a.unshift(Si(n,l,s))):i||(l=mi(n,o),l!=null&&a.push(Si(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var U0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(U0,`
`).replace(F0,"")}function Eo(e,t,n){if(t=Wf(t),Wf(e)!==t&&n)throw Error(E(425))}function ma(){}var Fl=null,zl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch($0)}:$l;function $0(e){setTimeout(function(){throw e})}function zs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Pr,ki="__reactProps$"+Pr,wt="__reactContainer$"+Pr,Bl="__reactEvents$"+Pr,B0="__reactListeners$"+Pr,H0="__reactHandles$"+Pr;function Sn(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kf(e);e!==null;){if(n=e[nt])return n;e=Kf(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[nt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ya(e){return e[ki]||null}var Hl=[],Jn=-1;function hn(e){return{current:e}}function G(e){0>Jn||(e.current=Hl[Jn],Hl[Jn]=null,Jn--)}function W(e,t){Jn++,Hl[Jn]=e.current,e.current=t}var sn={},we=hn(sn),Te=hn(!1),On=sn;function yr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function ga(){G(Te),G(we)}function Gf(e,t,n){if(we.current!==sn)throw Error(E(168));W(we,t),W(Te,n)}function Wp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Ty(e)||"Unknown",i));return Z({},n,r)}function va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,On=we.current,W(we,e),W(Te,Te.current),!0}function Yf(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Wp(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(we),W(we,e)):G(Te),W(Te,n)}var ft=null,qa=!1,js=!1;function Vp(e){ft===null?ft=[e]:ft.push(e)}function W0(e){qa=!0,Vp(e)}function pn(){if(!js&&ft!==null){js=!0;var e=0,t=B;try{var n=ft;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,qa=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),gp(qu,pn),i}finally{B=t,js=!1}}return null}var Xn=[],Zn=0,ya=null,wa=0,Ue=[],Fe=0,Rn=null,dt=1,ht="";function yn(e,t){Xn[Zn++]=wa,Xn[Zn++]=ya,ya=e,wa=t}function Kp(e,t,n){Ue[Fe++]=dt,Ue[Fe++]=ht,Ue[Fe++]=Rn,Rn=e;var r=dt;e=ht;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dt=1<<32-Qe(t)+i|n<<i|r,ht=o+e}else dt=1<<o|n<<i|r,ht=e}function ic(e){e.return!==null&&(yn(e,1),Kp(e,1,0))}function oc(e){for(;e===ya;)ya=Xn[--Zn],Xn[Zn]=null,wa=Xn[--Zn],Xn[Zn]=null;for(;e===Rn;)Rn=Ue[--Fe],Ue[Fe]=null,ht=Ue[--Fe],Ue[Fe]=null,dt=Ue[--Fe],Ue[Fe]=null}var Ne=null,Re=null,q=!1,Ge=null;function Gp(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Re=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:dt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Re=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(q){var t=Re;if(t){var n=t;if(!qf(e,t)){if(Wl(e))throw Error(E(418));t=qt(n.nextSibling);var r=Ne;t&&qf(e,t)?Gp(r,n):(e.flags=e.flags&-4097|2,q=!1,Ne=e)}}else{if(Wl(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Ne=e}}}function Qf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function So(e){if(e!==Ne)return!1;if(!q)return Qf(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=Re)){if(Wl(e))throw Yp(),Error(E(418));for(;t;)Gp(e,t),t=qt(t.nextSibling)}if(Qf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ne?qt(e.stateNode.nextSibling):null;return!0}function Yp(){for(var e=Re;e;)e=qt(e.nextSibling)}function wr(){Re=Ne=null,q=!1}function ac(e){Ge===null?Ge=[e]:Ge.push(e)}var V0=Ct.ReactCurrentBatchConfig;function Ve(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var _a=hn(null),Ea=null,er=null,sc=null;function lc(){sc=er=Ea=null}function uc(e){var t=_a.current;G(_a),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){Ea=e,sc=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(sc!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Ea===null)throw Error(E(308));er=e,Ea.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var kn=null;function cc(e){kn===null?kn=[e]:kn.push(e)}function qp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qu(e,n)}}function Jf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sa(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(h=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(v,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(v,f,h):g,h==null)break e;f=Z({},f,h);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);An|=a,e.lanes=a,e.memoizedState=f}}function Xf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Jp=new qh.Component().refs;function Gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qa={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Xt(e),o=gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(Je(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Xt(e),o=gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(Je(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Xt(e),i=gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(Je(t,e,r,n),Ho(t,e,r))}};function Zf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function Xp(e,t,n){var r=!1,i=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=xe(t)?On:we.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qa.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jp,fc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=xe(t)?On:we.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Gl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qa.enqueueReplaceState(i,i.state,null),Sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Jp&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function td(e){var t=e._init;return t(e._payload)}function Zp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Zt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,w){return d===null||d.tag!==6?(d=Gs(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var S=m.type;return S===Kn?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Lt&&td(S)===d.type)?(w=i(d,m.props),w.ref=Hr(p,d,m),w.return=p,w):(w=qo(m.type,m.key,m.props,null,p.mode,w),w.ref=Hr(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ys(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,S){return d===null||d.tag!==7?(d=xn(m,p.mode,w,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Gs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case fo:return m=qo(d.type,d.key,d.props,null,p.mode,m),m.ref=Hr(p,null,d),m.return=p,m;case Vn:return d=Ys(d,p.mode,m),d.return=p,d;case Lt:var w=d._init;return f(p,w(d._payload),m)}if(qr(d)||Fr(d))return d=xn(d,p.mode,m,null),d.return=p,d;ko(p,d)}return null}function h(p,d,m,w){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:return m.key===S?l(p,d,m,w):null;case Vn:return m.key===S?u(p,d,m,w):null;case Lt:return S=m._init,h(p,d,S(m._payload),w)}if(qr(m)||Fr(m))return S!==null?null:c(p,d,m,w,null);ko(p,m)}return null}function v(p,d,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,s(d,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fo:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,S);case Vn:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,S);case Lt:var C=w._init;return v(p,d,m,C(w._payload),S)}if(qr(w)||Fr(w))return p=p.get(m)||null,c(d,p,w,S,null);ko(d,w)}return null}function g(p,d,m,w){for(var S=null,C=null,T=d,N=d=0,z=null;T!==null&&N<m.length;N++){T.index>N?(z=T,T=null):z=T.sibling;var D=h(p,T,m[N],w);if(D===null){T===null&&(T=z);break}e&&T&&D.alternate===null&&t(p,T),d=o(D,d,N),C===null?S=D:C.sibling=D,C=D,T=z}if(N===m.length)return n(p,T),q&&yn(p,N),S;if(T===null){for(;N<m.length;N++)T=f(p,m[N],w),T!==null&&(d=o(T,d,N),C===null?S=T:C.sibling=T,C=T);return q&&yn(p,N),S}for(T=r(p,T);N<m.length;N++)z=v(T,p,N,m[N],w),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?N:z.key),d=o(z,d,N),C===null?S=z:C.sibling=z,C=z);return e&&T.forEach(function(He){return t(p,He)}),q&&yn(p,N),S}function y(p,d,m,w){var S=Fr(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var C=S=null,T=d,N=d=0,z=null,D=m.next();T!==null&&!D.done;N++,D=m.next()){T.index>N?(z=T,T=null):z=T.sibling;var He=h(p,T,D.value,w);if(He===null){T===null&&(T=z);break}e&&T&&He.alternate===null&&t(p,T),d=o(He,d,N),C===null?S=He:C.sibling=He,C=He,T=z}if(D.done)return n(p,T),q&&yn(p,N),S;if(T===null){for(;!D.done;N++,D=m.next())D=f(p,D.value,w),D!==null&&(d=o(D,d,N),C===null?S=D:C.sibling=D,C=D);return q&&yn(p,N),S}for(T=r(p,T);!D.done;N++,D=m.next())D=v(T,p,N,D.value,w),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?N:D.key),d=o(D,d,N),C===null?S=D:C.sibling=D,C=D);return e&&T.forEach(function(Mr){return t(p,Mr)}),q&&yn(p,N),S}function k(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:e:{for(var S=m.key,C=d;C!==null;){if(C.key===S){if(S=m.type,S===Kn){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Lt&&td(S)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=Hr(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Kn?(d=xn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=qo(m.type,m.key,m.props,null,p.mode,w),w.ref=Hr(p,d,m),w.return=p,p=w)}return a(p);case Vn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Ys(m,p.mode,w),d.return=p,p=d}return a(p);case Lt:return C=m._init,k(p,d,C(m._payload),w)}if(qr(m))return g(p,d,m,w);if(Fr(m))return y(p,d,m,w);ko(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Gs(m,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return k}var _r=Zp(!0),em=Zp(!1),Gi={},at=hn(Gi),bi=hn(Gi),Ii=hn(Gi);function bn(e){if(e===Gi)throw Error(E(174));return e}function dc(e,t){switch(W(Ii,t),W(bi,e),W(at,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}G(at),W(at,t)}function Er(){G(at),G(bi),G(Ii)}function tm(e){bn(Ii.current);var t=bn(at.current),n=Cl(t,e.type);t!==n&&(W(bi,e),W(at,n))}function hc(e){bi.current===e&&(G(at),G(bi))}var Q=hn(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $s=[];function pc(){for(var e=0;e<$s.length;e++)$s[e]._workInProgressVersionPrimary=null;$s.length=0}var Wo=Ct.ReactCurrentDispatcher,Bs=Ct.ReactCurrentBatchConfig,Nn=0,X=null,oe=null,fe=null,ba=!1,ai=!1,Ci=0,K0=0;function ge(){throw Error(E(321))}function mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function gc(e,t,n,r,i,o){if(Nn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?Q0:J0,e=n(r,i),ai){o=0;do{if(ai=!1,Ci=0,25<=o)throw Error(E(301));o+=1,fe=oe=null,t.updateQueue=null,Wo.current=X0,e=n(r,i)}while(ai)}if(Wo.current=Ia,t=oe!==null&&oe.next!==null,Nn=0,fe=oe=X=null,ba=!1,t)throw Error(E(300));return e}function vc(){var e=Ci!==0;return Ci=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?X.memoizedState=fe=e:fe=fe.next=e,fe}function Be(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=fe===null?X.memoizedState:fe.next;if(t!==null)fe=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},fe===null?X.memoizedState=fe=e:fe=fe.next=e}return fe}function Ti(e,t){return typeof t=="function"?t(e):t}function Hs(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Nn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,X.lanes|=c,An|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Xe(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,An|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ws(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Xe(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nm(){}function rm(e,t){var n=X,r=Be(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,yc(am.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,xi(9,om.bind(null,n,r,i,t),void 0,null),de===null)throw Error(E(349));Nn&30||im(n,t,i)}return i}function im(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function om(e,t,n,r){t.value=n,t.getSnapshot=r,sm(t)&&lm(e)}function am(e,t,n){return n(function(){sm(t)&&lm(e)})}function sm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function lm(e){var t=_t(e,1);t!==null&&Je(t,e,1,-1)}function nd(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=q0.bind(null,X,e),[t.memoizedState,e]}function xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function um(){return Be().memoizedState}function Vo(e,t,n,r){var i=tt();X.flags|=e,i.memoizedState=xi(1|t,n,void 0,r===void 0?null:r)}function Ja(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,r!==null&&mc(r,a.deps)){i.memoizedState=xi(t,n,o,r);return}}X.flags|=e,i.memoizedState=xi(1|t,n,o,r)}function rd(e,t){return Vo(8390656,8,e,t)}function yc(e,t){return Ja(2048,8,e,t)}function cm(e,t){return Ja(4,2,e,t)}function fm(e,t){return Ja(4,4,e,t)}function dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hm(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,dm.bind(null,t,e),n)}function wc(){}function pm(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mm(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gm(e,t,n){return Nn&21?(Xe(n,t)||(n=wp(),X.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function G0(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Bs.transition;Bs.transition={};try{e(!1),t()}finally{B=n,Bs.transition=r}}function vm(){return Be().memoizedState}function Y0(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ym(e))wm(t,n);else if(n=qp(e,t,n,r),n!==null){var i=Se();Je(n,e,r,i),_m(n,t,r)}}function q0(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ym(e))wm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Xe(s,a)){var l=t.interleaved;l===null?(i.next=i,cc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=qp(e,t,i,r),n!==null&&(i=Se(),Je(n,e,r,i),_m(n,t,r))}}function ym(e){var t=e.alternate;return e===X||t!==null&&t===X}function wm(e,t){ai=ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qu(e,n)}}var Ia={readContext:$e,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Q0={readContext:$e,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,dm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y0.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:wc,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=G0.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=tt();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),de===null)throw Error(E(349));Nn&30||im(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rd(am.bind(null,r,o,e),[e]),r.flags|=2048,xi(9,om.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tt(),t=de.identifierPrefix;if(q){var n=ht,r=dt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J0={readContext:$e,useCallback:pm,useContext:$e,useEffect:yc,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:fm,useMemo:mm,useReducer:Hs,useRef:um,useState:function(){return Hs(Ti)},useDebugValue:wc,useDeferredValue:function(e){var t=Be();return gm(t,oe.memoizedState,e)},useTransition:function(){var e=Hs(Ti)[0],t=Be().memoizedState;return[e,t]},useMutableSource:nm,useSyncExternalStore:rm,useId:vm,unstable_isNewReconciler:!1},X0={readContext:$e,useCallback:pm,useContext:$e,useEffect:yc,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:fm,useMemo:mm,useReducer:Ws,useRef:um,useState:function(){return Ws(Ti)},useDebugValue:wc,useDeferredValue:function(e){var t=Be();return oe===null?t.memoizedState=e:gm(t,oe.memoizedState,e)},useTransition:function(){var e=Ws(Ti)[0],t=Be().memoizedState;return[e,t]},useMutableSource:nm,useSyncExternalStore:rm,useId:vm,unstable_isNewReconciler:!1};function Sr(e,t){try{var n="",r=t;do n+=Cy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function Em(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ta||(Ta=!0,ou=r),ql(e,t)},n}function Sm(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h1.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var e1=Ct.ReactCurrentOwner,Ce=!1;function Ee(e,t,n,r){t.child=e===null?em(t,null,n,r):_r(t,e.child,n,r)}function sd(e,t,n,r,i){n=n.render;var o=t.ref;return fr(t,i),r=gc(e,t,n,r,o,i),n=vc(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(q&&n&&ic(t),t.flags|=1,Ee(e,t,r,i),t.child)}function ld(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,km(e,t,o,r,i)):(e=qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(a,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function km(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Et(e,t,i)}return Ql(e,t,n,r,i)}function bm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(nr,Oe),Oe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(nr,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(nr,Oe),Oe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(nr,Oe),Oe|=r;return Ee(e,t,i,n),t.child}function Im(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var o=xe(n)?On:we.current;return o=yr(t,o),fr(t,i),n=gc(e,t,n,r,o,i),r=vc(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(q&&r&&ic(t),t.flags|=1,Ee(e,t,n,i),t.child)}function ud(e,t,n,r,i){if(xe(n)){var o=!0;va(t)}else o=!1;if(fr(t,i),t.stateNode===null)Ko(e,t),Xp(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=xe(n)?On:we.current,u=yr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ed(t,a,r,u),Dt=!1;var h=t.memoizedState;a.state=h,Sa(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Te.current||Dt?(typeof c=="function"&&(Gl(t,n,c,r),l=t.memoizedState),(s=Dt||Zf(t,n,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ve(t.type,s),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=xe(n)?On:we.current,l=yr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&ed(t,a,r,l),Dt=!1,h=t.memoizedState,a.state=h,Sa(t,r,a,i);var g=t.memoizedState;s!==f||h!==g||Te.current||Dt?(typeof v=="function"&&(Gl(t,n,v,r),g=t.memoizedState),(u=Dt||Zf(t,n,u,r,h,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Jl(e,t,n,r,o,i)}function Jl(e,t,n,r,i,o){Im(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Yf(t,n,!1),Et(e,t,o);r=t.stateNode,e1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=_r(t,e.child,null,o),t.child=_r(t,null,s,o)):Ee(e,t,s,o),t.memoizedState=r.state,i&&Yf(t,n,!0),t.child}function Cm(e){var t=e.stateNode;t.pendingContext?Gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gf(e,t.context,!1),dc(e,t.containerInfo)}function cd(e,t,n,r,i){return wr(),ac(i),t.flags|=256,Ee(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tm(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return Vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=es(a,r,0,null),e=xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):_c(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return t1(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Zt(s,o):(o=xn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return o=e.child,e=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _c(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,n,r){return r!==null&&ac(r),_r(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Vs(Error(E(422))),bo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=xn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_r(t,e.child,null,a),t.child.memoizedState=Zl(a),t.memoizedState=Xl,o);if(!(t.mode&1))return bo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=Vs(o,r,void 0),bo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ce||s){if(r=de,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(e,i),Je(r,e,i,-1))}return Cc(),r=Vs(Error(E(421))),bo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=p1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=qt(i.nextSibling),Ne=t,q=!0,Ge=null,e!==null&&(Ue[Fe++]=dt,Ue[Fe++]=ht,Ue[Fe++]=Rn,dt=e.id,ht=e.overflow,Rn=t),t=_c(t,r.children),t.flags|=4096,t)}function fd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function Ks(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function xm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fd(e,n,t);else if(e.tag===19)fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ks(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ka(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ks(t,!0,n,null,o);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function n1(e,t,n){switch(t.tag){case 3:Cm(t),wr();break;case 5:tm(t);break;case 1:xe(t.type)&&va(t);break;case 4:dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(_a,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Tm(e,t,n):(W(Q,Q.current&1),e=Et(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,bm(e,t,n)}return Et(e,t,n)}var Pm,eu,Om,Rm;Pm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eu=function(){};Om=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bn(at.current);var o=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=Il(e,i),r=Il(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ma)}Tl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function r1(e,t,n){var r=t.pendingProps;switch(oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return xe(t.type)&&ga(),ve(t),null;case 3:return r=t.stateNode,Er(),G(Te),G(we),pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(lu(Ge),Ge=null))),eu(e,t),ve(t),null;case 5:hc(t);var i=bn(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)Om(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=bn(at.current),So(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[ki]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)V(Jr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":_f(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Sf(r,o),V("invalid",r)}Tl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",""+s]):hi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&V("scroll",r)}switch(n){case"input":ho(r),Ef(r,o,!0);break;case"textarea":ho(r),kf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ma)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ip(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[nt]=t,e[ki]=r,Pm(e,t,!1,!1),t.stateNode=e;e:{switch(a=xl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)V(Jr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":_f(e,r),i=Sl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":Sf(e,r),i=Il(e,r),V("invalid",e);break;default:i=r}Tl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?sp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&op(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pi(e,l):typeof l=="number"&&pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&Wu(e,o,l,a))}switch(n){case"input":ho(e),Ef(e,r,!1);break;case"textarea":ho(e),kf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=bn(Ii.current),bn(at.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ve(t),null;case 13:if(G(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Re!==null&&t.mode&1&&!(t.flags&128))Yp(),wr(),t.flags|=98560,o=!1;else if(o=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[nt]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Ge!==null&&(lu(Ge),Ge=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ae===0&&(ae=3):Cc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Er(),eu(e,t),e===null&&Ei(t.stateNode.containerInfo),ve(t),null;case 10:return uc(t.type._context),ve(t),null;case 17:return xe(t.type)&&ga(),ve(t),null;case 19:if(G(Q),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Wr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ka(e),a!==null){for(t.flags|=128,Wr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>kr&&(t.flags|=128,r=!0,Wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ka(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!q)return ve(t),null}else 2*re()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Wr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function i1(e,t){switch(oc(t),t.tag){case 1:return xe(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),G(Te),G(we),pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hc(t),null;case 13:if(G(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Q),null;case 4:return Er(),null;case 10:return uc(t.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var Io=!1,ye=!1,o1=typeof WeakSet=="function"?WeakSet:Set,P=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){ee(e,t,r)}}var dd=!1;function a1(e,t){if(Fl=da,e=Dp(),rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=a),h===o&&++c===r&&(l=a),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},da=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,k=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ve(t.type,y),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=dd,dd=!1,g}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tu(t,n,o)}i=i.next}while(i!==r)}}function Xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nm(e){var t=e.alternate;t!==null&&(e.alternate=null,Nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[ki],delete t[Bl],delete t[B0],delete t[H0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Am(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ma));else if(r!==4&&(e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}var he=null,Ke=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Lm(e,t,n),n=n.sibling}function Lm(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:ye||tr(n,t);case 6:var r=he,i=Ke;he=null,Pt(e,t,n),he=r,Ke=i,he!==null&&(Ke?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ke?(e=he,n=n.stateNode,e.nodeType===8?zs(e.parentNode,n):e.nodeType===1&&zs(e,n),yi(e)):zs(he,n.stateNode));break;case 4:r=he,i=Ke,he=n.stateNode.containerInfo,Ke=!0,Pt(e,t,n),he=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&tu(n,t,a),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!ye&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Pt(e,t,n),ye=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new o1),t.forEach(function(r){var i=m1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,Ke=!1;break e;case 3:he=s.stateNode.containerInfo,Ke=!0;break e;case 4:he=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(he===null)throw Error(E(160));Lm(o,a,i),he=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}function Dm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{si(3,e,e.return),Xa(3,e)}catch(y){ee(e,e.return,y)}try{si(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&np(i,o),xl(s,a);var u=xl(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?sp(i,f):c==="dangerouslySetInnerHTML"?op(i,f):c==="children"?pi(i,f):Wu(i,c,f,u)}switch(s){case"input":kl(i,o);break;case"textarea":rp(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?sr(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ki]=o}catch(y){ee(e,e.return,y)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ee(e,e.return,y)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(kc=re())),r&4&&pd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,We(t,e),ye=u):We(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(f=P=c;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:si(4,h,h.return);break;case 1:tr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:tr(h,h.return);break;case 22:if(h.memoizedState!==null){gd(f);continue}}v!==null?(v.return=h,P=v):gd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=ap("display",a))}catch(y){ee(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ee(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(t,e),et(e),r&4&&pd(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Am(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=hd(e);iu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=hd(e);ru(e,s,a);break;default:throw Error(E(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s1(e,t,n){P=e,Mm(e)}function Mm(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Io;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ye;s=Io;var u=ye;if(Io=a,(ye=l)&&!u)for(P=i;P!==null;)a=P,l=a.child,a.tag===22&&a.memoizedState!==null?vd(i):l!==null?(l.return=a,P=l):vd(i);for(;o!==null;)P=o,Mm(o),o=o.sibling;P=i,Io=s,ye=u}md(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):md(e)}}function md(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ye||t.flags&512&&nu(t)}catch(h){ee(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function gd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function vd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xa(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{nu(t)}catch(l){ee(t,o,l)}break;case 5:var a=t.return;try{nu(t)}catch(l){ee(t,a,l)}}}catch(l){ee(t,t.return,l)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var l1=Math.ceil,Ca=Ct.ReactCurrentDispatcher,Ec=Ct.ReactCurrentOwner,je=Ct.ReactCurrentBatchConfig,$=0,de=null,ie=null,pe=0,Oe=0,nr=hn(0),ae=0,Pi=null,An=0,Za=0,Sc=0,li=null,Ie=null,kc=0,kr=1/0,ct=null,Ta=!1,ou=null,Jt=null,Co=!1,Ht=null,xa=0,ui=0,au=null,Go=-1,Yo=0;function Se(){return $&6?re():Go!==-1?Go:Go=re()}function Xt(e){return e.mode&1?$&2&&pe!==0?pe&-pe:V0.transition!==null?(Yo===0&&(Yo=wp()),Yo):(e=B,e!==0||(e=window.event,e=e===void 0?16:Cp(e.type)),e):1}function Je(e,t,n,r){if(50<ui)throw ui=0,au=null,Error(E(185));Wi(e,n,r),(!($&2)||e!==de)&&(e===de&&(!($&2)&&(Za|=n),ae===4&&Ut(e,pe)),Pe(e,r),n===1&&$===0&&!(t.mode&1)&&(kr=re()+500,qa&&pn()))}function Pe(e,t){var n=e.callbackNode;Vy(e,t);var r=fa(e,e===de?pe:0);if(r===0)n!==null&&Cf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cf(n),t===1)e.tag===0?W0(yd.bind(null,e)):Vp(yd.bind(null,e)),j0(function(){!($&6)&&pn()}),n=null;else{switch(_p(r)){case 1:n=qu;break;case 4:n=vp;break;case 16:n=ca;break;case 536870912:n=yp;break;default:n=ca}n=Wm(n,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Um(e,t){if(Go=-1,Yo=0,$&6)throw Error(E(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=fa(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pa(e,r);else{t=r;var i=$;$|=2;var o=zm();(de!==e||pe!==t)&&(ct=null,kr=re()+500,Tn(e,t));do try{f1();break}catch(s){Fm(e,s)}while(1);lc(),Ca.current=o,$=i,ie!==null?t=0:(de=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=Al(e),i!==0&&(r=i,t=su(e,i))),t===1)throw n=Pi,Tn(e,0),Ut(e,r),Pe(e,re()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!u1(i)&&(t=Pa(e,r),t===2&&(o=Al(e),o!==0&&(r=o,t=su(e,o))),t===1))throw n=Pi,Tn(e,0),Ut(e,r),Pe(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:wn(e,Ie,ct);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=kc+500-re(),10<t)){if(fa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$l(wn.bind(null,e,Ie,ct),t);break}wn(e,Ie,ct);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Qe(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*l1(r/1960))-r,10<r){e.timeoutHandle=$l(wn.bind(null,e,Ie,ct),r);break}wn(e,Ie,ct);break;case 5:wn(e,Ie,ct);break;default:throw Error(E(329))}}}return Pe(e,re()),e.callbackNode===n?Um.bind(null,e):null}function su(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&lu(t)),e}function lu(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function u1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Sc,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function yd(e){if($&6)throw Error(E(327));dr();var t=fa(e,0);if(!(t&1))return Pe(e,re()),null;var n=Pa(e,t);if(e.tag!==0&&n===2){var r=Al(e);r!==0&&(t=r,n=su(e,r))}if(n===1)throw n=Pi,Tn(e,0),Ut(e,t),Pe(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Ie,ct),Pe(e,re()),null}function bc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(kr=re()+500,qa&&pn())}}function Ln(e){Ht!==null&&Ht.tag===0&&!($&6)&&dr();var t=$;$|=1;var n=je.transition,r=B;try{if(je.transition=null,B=1,e)return e()}finally{B=r,je.transition=n,$=t,!($&6)&&pn()}}function Ic(){Oe=nr.current,G(nr)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,z0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:Er(),G(Te),G(we),pc();break;case 5:hc(r);break;case 4:Er();break;case 13:G(Q);break;case 19:G(Q);break;case 10:uc(r.type._context);break;case 22:case 23:Ic()}n=n.return}if(de=e,ie=e=Zt(e.current,null),pe=Oe=t,ae=0,Pi=null,Sc=Za=An=0,Ie=li=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}kn=null}return e}function Fm(e,t){do{var n=ie;try{if(lc(),Wo.current=Ia,ba){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ba=!1}if(Nn=0,fe=oe=X=null,ai=!1,Ci=0,Ec.current=null,n===null||n.return===null){ae=1,Pi=t,ie=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=od(a);if(v!==null){v.flags&=-257,ad(v,a,s,o,t),v.mode&1&&id(o,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){id(o,u,t),Cc();break e}l=Error(E(426))}}else if(q&&s.mode&1){var k=od(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ad(k,a,s,o,t),ac(Sr(l,s));break e}}o=l=Sr(l,s),ae!==4&&(ae=2),li===null?li=[o]:li.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Em(o,l,t);Jf(o,p);break e;case 1:s=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jt===null||!Jt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Sm(o,s,t);Jf(o,w);break e}}o=o.return}while(o!==null)}$m(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function zm(){var e=Ca.current;return Ca.current=Ia,e===null?Ia:e}function Cc(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(An&268435455)&&!(Za&268435455)||Ut(de,pe)}function Pa(e,t){var n=$;$|=2;var r=zm();(de!==e||pe!==t)&&(ct=null,Tn(e,t));do try{c1();break}catch(i){Fm(e,i)}while(1);if(lc(),$=n,Ca.current=r,ie!==null)throw Error(E(261));return de=null,pe=0,ae}function c1(){for(;ie!==null;)jm(ie)}function f1(){for(;ie!==null&&!My();)jm(ie)}function jm(e){var t=Hm(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?$m(e):ie=t,Ec.current=null}function $m(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=i1(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=r1(n,t,Oe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function wn(e,t,n){var r=B,i=je.transition;try{je.transition=null,B=1,d1(e,t,n,r)}finally{je.transition=i,B=r}return null}function d1(e,t,n,r){do dr();while(Ht!==null);if($&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ky(e,o),e===de&&(ie=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,Wm(ca,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var a=B;B=1;var s=$;$|=4,Ec.current=null,a1(e,n),Dm(n,e),N0(zl),da=!!Fl,zl=Fl=null,e.current=n,s1(n),Uy(),$=s,B=a,je.transition=o}else e.current=n;if(Co&&(Co=!1,Ht=e,xa=i),o=e.pendingLanes,o===0&&(Jt=null),jy(n.stateNode),Pe(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ta)throw Ta=!1,e=ou,ou=null,e;return xa&1&&e.tag!==0&&dr(),o=e.pendingLanes,o&1?e===au?ui++:(ui=0,au=e):ui=0,pn(),null}function dr(){if(Ht!==null){var e=_p(xa),t=je.transition,n=B;try{if(je.transition=null,B=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,xa=0,$&6)throw Error(E(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:si(8,c,o)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var h=c.sibling,v=c.return;if(Nm(c),c===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){a=P;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,P=m;else e:for(a=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xa(9,s)}}catch(S){ee(s,s.return,S)}if(s===a){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if($=i,pn(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Wa,e)}catch{}r=!0}return r}finally{B=n,je.transition=t}}return!1}function wd(e,t,n){t=Sr(n,t),t=Em(e,t,1),e=Qt(e,t,1),t=Se(),e!==null&&(Wi(e,1,t),Pe(e,t))}function ee(e,t,n){if(e.tag===3)wd(e,e,n);else for(;t!==null;){if(t.tag===3){wd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=Sr(n,e),e=Sm(t,e,1),t=Qt(t,e,1),e=Se(),t!==null&&(Wi(t,1,e),Pe(t,e));break}}t=t.return}}function h1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>re()-kc?Tn(e,0):Sc|=n),Pe(e,t)}function Bm(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var n=Se();e=_t(e,t),e!==null&&(Wi(e,t,n),Pe(e,n))}function p1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bm(e,n)}function m1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Bm(e,n)}var Hm;Hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,n1(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,q&&t.flags&1048576&&Kp(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var i=yr(t,we.current);fr(t,n),i=gc(null,t,r,e,i,n);var o=vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,va(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(t),i.updater=Qa,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Jl(null,t,r,!0,o,n)):(t.tag=0,q&&o&&ic(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=v1(r),e=Ve(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=sd(null,t,r,e,n);break e;case 14:t=ld(null,t,r,Ve(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),ud(e,t,r,i,n);case 3:e:{if(Cm(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qp(e,t),Sa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Sr(Error(E(423)),t),t=cd(e,t,r,n,i);break e}else if(r!==i){i=Sr(Error(E(424)),t),t=cd(e,t,r,n,i);break e}else for(Re=qt(t.stateNode.containerInfo.firstChild),Ne=t,q=!0,Ge=null,n=em(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=Et(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return tm(t),e===null&&Vl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,jl(r,i)?a=null:o!==null&&jl(r,o)&&(t.flags|=32),Im(e,t),Ee(e,t,a,n),t.child;case 6:return e===null&&Vl(t),null;case 13:return Tm(e,t,n);case 4:return dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),sd(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,W(_a,r._currentValue),r._currentValue=a,o!==null)if(Xe(o.value,a)){if(o.children===i.children&&!Te.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=gt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Kl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=$e(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),ld(e,t,r,i,n);case 15:return km(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Ko(e,t),t.tag=1,xe(r)?(e=!0,va(t)):e=!1,fr(t,n),Xp(t,r,i),Yl(t,r,i,n),Jl(null,t,r,!0,e,n);case 19:return xm(e,t,n);case 22:return bm(e,t,n)}throw Error(E(156,t.tag))};function Wm(e,t){return gp(e,t)}function g1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new g1(e,t,n,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v1(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ku)return 11;if(e===Gu)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Tc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kn:return xn(n.children,i,o,t);case Vu:a=8,i|=8;break;case yl:return e=ze(12,n,t,i|2),e.elementType=yl,e.lanes=o,e;case wl:return e=ze(13,n,t,i),e.elementType=wl,e.lanes=o,e;case _l:return e=ze(19,n,t,i),e.elementType=_l,e.lanes=o,e;case Zh:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jh:a=10;break e;case Xh:a=9;break e;case Ku:a=11;break e;case Gu:a=14;break e;case Lt:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xn(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Zh,e.lanes=n,e.stateNode={isHidden:!1},e}function Gs(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xc(e,t,n,r,i,o,a,s,l){return e=new y1(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(o),e}function w1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vm(e){if(!e)return sn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(xe(n))return Wp(e,n,t)}return t}function Km(e,t,n,r,i,o,a,s,l){return e=xc(n,r,!0,e,i,o,a,s,l),e.context=Vm(null),n=e.current,r=Se(),i=Xt(n),o=gt(r,i),o.callback=t??null,Qt(n,o,i),e.current.lanes=i,Wi(e,i,r),Pe(e,r),e}function ts(e,t,n,r){var i=t.current,o=Se(),a=Xt(i);return n=Vm(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,a),e!==null&&(Je(e,i,a,o),Ho(e,i,a)),a}function Oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function _1(){return null}var Gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oc(e){this._internalRoot=e}ns.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ts(e,t,null,null)};ns.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){ts(null,e,null,null)}),t[wt]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=kp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&Ip(e)}};function Rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ed(){}function E1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Oa(a);o.call(u)}}var a=Km(t,r,e,0,null,!1,!1,"",Ed);return e._reactRootContainer=a,e[wt]=a.current,Ei(e.nodeType===8?e.parentNode:e),Ln(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Oa(l);s.call(u)}}var l=xc(e,0,!1,null,null,!1,!1,"",Ed);return e._reactRootContainer=l,e[wt]=l.current,Ei(e.nodeType===8?e.parentNode:e),Ln(function(){ts(t,l,n,r)}),l}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Oa(a);s.call(l)}}ts(t,a,e,i)}else a=E1(n,t,e,i,r);return Oa(a)}Ep=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Qu(t,n|1),Pe(t,re()),!($&6)&&(kr=re()+500,pn()))}break;case 13:Ln(function(){var r=_t(e,1);if(r!==null){var i=Se();Je(r,e,1,i)}}),Pc(e,1)}};Ju=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}Pc(e,134217728)}};Sp=function(e){if(e.tag===13){var t=Xt(e),n=_t(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}Pc(e,t)}};kp=function(){return B};bp=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Ol=function(e,t,n){switch(t){case"input":if(kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ya(r);if(!i)throw Error(E(90));tp(r),kl(r,i)}}}break;case"textarea":rp(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};cp=bc;fp=Ln;var S1={usingClientEntryPoint:!1,Events:[Ki,Qn,Ya,lp,up,bc]},Vr={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},k1={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pp(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||_1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Wa=To.inject(k1),ot=To}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(t))throw Error(E(200));return w1(e,t,null,n)};Le.createRoot=function(e,t){if(!Rc(e))throw Error(E(299));var n=!1,r="",i=Gm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Ei(e.nodeType===8?e.parentNode:e),new Oc(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=pp(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Ln(e)};Le.hydrate=function(e,t,n){if(!rs(t))throw Error(E(200));return is(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Rc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Gm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Km(t,null,e,1,n??null,i,!1,o,a),e[wt]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};Le.render=function(e,t,n){if(!rs(t))throw Error(E(200));return is(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!rs(e))throw Error(E(40));return e._reactRootContainer?(Ln(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Le.unstable_batchedUpdates=bc;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return is(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Le})(_y);var Sd=ml;pl.createRoot=Sd.createRoot,pl.hydrateRoot=Sd.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const kd="popstate";function b1(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=Bn(i.location.hash.substr(1));return uu("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Ri(o))}function r(i,o){I1(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return T1(t,n,r,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function I1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function C1(){return Math.random().toString(36).substr(2,8)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function uu(e,t,n,r){return n===void 0&&(n=null),Oi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bn(t):t,{state:n,key:t&&t.key||r||C1()})}function Ri(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Wt.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Oi({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=Wt.Pop;let k=c(),p=k==null?null:k-u;u=k,l&&l({action:s,location:y.location,delta:p})}function h(k,p){s=Wt.Push;let d=uu(y.location,k,p);n&&n(d,k),u=c()+1;let m=bd(d,u),w=y.createHref(d);try{a.pushState(m,"",w)}catch{i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function v(k,p){s=Wt.Replace;let d=uu(y.location,k,p);n&&n(d,k),u=c();let m=bd(d,u),w=y.createHref(d);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function g(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Ri(k);return se(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return s},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(kd,f),l=k,()=>{i.removeEventListener(kd,f),l=null}},createHref(k){return t(i,k)},createURL:g,encodeLocation(k){let p=g(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(k){return a.go(k)}};return y}var Id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Id||(Id={}));function x1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bn(t):t,i=Qm(r.pathname||"/",n);if(i==null)return null;let o=Ym(e);P1(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=F1(o[s],$1(i));return a}function Ym(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=en([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ym(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:M1(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of qm(o.path))i(o,a,l)}),t}function qm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=qm(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function P1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:U1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const O1=/^:\w+$/,R1=3,N1=2,A1=1,L1=10,D1=-2,Cd=e=>e==="*";function M1(e,t){let n=e.split("/"),r=n.length;return n.some(Cd)&&(r+=D1),t&&(r+=N1),n.filter(i=>!Cd(i)).reduce((i,o)=>i+(O1.test(o)?R1:o===""?A1:L1),r)}function U1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function F1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=z1({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:en([i,c.pathname]),pathnameBase:V1(en([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=en([i,c.pathnameBase]))}return o}function z1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=B1(s[f]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function j1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $1(e){try{return decodeURI(e)}catch(t){return Nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function B1(e,t){try{return decodeURIComponent(e)}catch(n){return Nc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Qm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Bn(e):e;return{pathname:n?n.startsWith("/")?n:W1(n,t):t,search:K1(r),hash:G1(i)}}function W1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Bn(e):(i=Oi({},e),se(!i.pathname||!i.pathname.includes("?"),qs("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),qs("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),qs("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=H1(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const en=e=>e.join("/").replace(/\/\/+/g,"/"),V1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const q1=["post","put","patch","delete"];[...q1];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function Q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const J1=typeof Object.is=="function"?Object.is:Q1,{useState:X1,useEffect:Z1,useLayoutEffect:ew,useDebugValue:tw}=hl;function nw(e,t,n){const r=t(),[{inst:i},o]=X1({inst:{value:r,getSnapshot:t}});return ew(()=>{i.value=r,i.getSnapshot=t,Qs(i)&&o({inst:i})},[e,r,t]),Z1(()=>(Qs(i)&&o({inst:i}),e(()=>{Qs(i)&&o({inst:i})})),[e]),tw(r),r}function Qs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!J1(n,r)}catch{return!0}}function rw(e,t,n){return t()}const iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ow=!iw,aw=ow?rw:nw;"useSyncExternalStore"in hl&&(e=>e.useSyncExternalStore)(hl);const Zm=I.createContext(null),eg=I.createContext(null),os=I.createContext(null),as=I.createContext(null),Or=I.createContext({outlet:null,matches:[]}),tg=I.createContext(null);function sw(e,t){let{relative:n}=t===void 0?{}:t;Yi()||se(!1);let{basename:r,navigator:i}=I.useContext(os),{hash:o,pathname:a,search:s}=ng(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:en([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Yi(){return I.useContext(as)!=null}function ss(){return Yi()||se(!1),I.useContext(as).location}function qi(){Yi()||se(!1);let{basename:e,navigator:t}=I.useContext(os),{matches:n}=I.useContext(Or),{pathname:r}=ss(),i=JSON.stringify(Jm(n).map(s=>s.pathnameBase)),o=I.useRef(!1);return I.useEffect(()=>{o.current=!0}),I.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=Xm(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:en([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function ng(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(Or),{pathname:i}=ss(),o=JSON.stringify(Jm(r).map(a=>a.pathnameBase));return I.useMemo(()=>Xm(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function lw(e,t){Yi()||se(!1);let{navigator:n}=I.useContext(os),r=I.useContext(eg),{matches:i}=I.useContext(Or),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=ss(),u;if(t){var c;let y=typeof t=="string"?Bn(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||se(!1),u=y}else u=l;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",v=x1(e,{pathname:h}),g=dw(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:en([s,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:en([s,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&g?I.createElement(as.Provider,{value:{location:cu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Wt.Pop}},g):g}function uw(){let e=gw(),t=Y1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}class cw extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(Or.Provider,{value:this.props.routeContext},I.createElement(tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fw(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Zm);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Or.Provider,{value:t},r)}function dw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||se(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||I.createElement(uw,null):null,c=t.concat(r.slice(0,s+1)),f=()=>I.createElement(fw,{match:a,routeContext:{outlet:o,matches:c}},l?u:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||s===0)?I.createElement(cw,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Td;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Td||(Td={}));var Ra;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ra||(Ra={}));function hw(e){let t=I.useContext(eg);return t||se(!1),t}function pw(e){let t=I.useContext(Or);return t||se(!1),t}function mw(e){let t=pw(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function gw(){var e;let t=I.useContext(tg),n=hw(Ra.UseRouteError),r=mw(Ra.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function At(e){se(!1)}function vw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Wt.Pop,navigator:o,static:a=!1}=e;Yi()&&se(!1);let s=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Bn(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:v="default"}=r,g=I.useMemo(()=>{let y=Qm(u,s);return y==null?null:{pathname:y,search:c,hash:f,state:h,key:v}},[s,u,c,f,h,v]);return g==null?null:I.createElement(os.Provider,{value:l},I.createElement(as.Provider,{children:n,value:{location:g,navigationType:i}}))}function yw(e){let{children:t,location:n}=e,r=I.useContext(Zm),i=r&&!t?r.router.routes:fu(t);return lw(i,n)}var xd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(xd||(xd={}));new Promise(()=>{});function fu(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,fu(r.props.children,t));return}r.type!==At&&se(!1),!r.props.index||!r.props.children||se(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=fu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}function ww(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _w(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ew(e,t){return e.button===0&&(!t||t==="_self")&&!_w(e)}const Sw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function kw(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=b1({window:r,v5Compat:!0}));let o=i.current,[a,s]=I.useState({action:o.action,location:o.location});return I.useLayoutEffect(()=>o.listen(s),[o]),I.createElement(vw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const bw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",En=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=ww(t,Sw),h=typeof u=="string"?u:Ri(u),v=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),g=h,y=!1;if(bw&&v){let m=new URL(window.location.href),w=h.startsWith("//")?new URL(m.protocol+h):new URL(h);w.origin===m.origin?g=w.pathname+w.search+w.hash:y=!0}let k=sw(g,{relative:i}),p=Iw(g,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function d(m){r&&r(m),m.defaultPrevented||p(m)}return I.createElement("a",du({},f,{href:v?h:k,onClick:y||o?r:d,ref:n,target:l}))});var Pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Pd||(Pd={}));var Od;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Od||(Od={}));function Iw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=qi(),l=ss(),u=ng(e,{relative:a});return I.useCallback(c=>{if(Ew(c,n)){c.preventDefault();let f=r!==void 0?r:Ri(l)===Ri(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Cw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4;let h=(s&15)<<2|u>>6,v=u&63;l||(v=64,a||(h=64)),r.push(n[c],n[f],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Cw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||f==null)throw Error();const h=o<<2|s>>4;if(r.push(h),u!==64){const v=s<<4&240|u>>2;if(r.push(v),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Tw=function(e){const t=rg(e);return ig.encodeByteArray(t,!0)},og=function(e){return Tw(e).replace(/\./g,"")},ag=function(e){try{return ig.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=()=>xw().__FIREBASE_DEFAULTS__,Ow=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Rw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ag(e[1]);return t&&JSON.parse(t)},Ac=()=>{try{return Pw()||Ow()||Rw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Nw=e=>{var t,n;return(n=(t=Ac())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Aw=()=>{var e;return(e=Ac())===null||e===void 0?void 0:e.config},sg=e=>{var t;return(t=Ac())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Mw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fw(){const e=_e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="FirebaseError";class mn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$w,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Bw(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new mn(i,s,r)}}function Bw(e,t){return e.replace(Hw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Hw=/\{\$([^}]+)}/g;function Ww(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Na(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(Rd(o)&&Rd(a)){if(!Na(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Xr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Zr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Vw(e,t){const n=new Kw(e,t);return n.subscribe.bind(n)}class Kw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Js),i.error===void 0&&(i.error=Js),i.complete===void 0&&(i.complete=Js);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Js(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return e&&e._delegate?e._delegate:e}class br{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Lw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qw(t))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=_n){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_n){return this.instances.has(t)}getOptions(t=_n){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=_n){return this.component?this.component.multipleInstances?t:_n:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(e){return e===_n?void 0:e}function Qw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const Xw={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Zw=H.INFO,e_={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},t_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=e_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lg{constructor(t){this.name=t,this._logLevel=Zw,this._logHandler=t_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const n_=(e,t)=>t.some(n=>e instanceof n);let Nd,Ad;function r_(){return Nd||(Nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i_(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,hu=new WeakMap,cg=new WeakMap,Xs=new WeakMap,Lc=new WeakMap;function o_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(tn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&ug.set(n,e)}).catch(()=>{}),Lc.set(t,e),t}function a_(e){if(hu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});hu.set(e,t)}let pu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function s_(e){pu=e(pu)}function l_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Zs(this),t,...n);return cg.set(r,t.sort?t.sort():[t]),tn(r)}:i_().includes(e)?function(...t){return e.apply(Zs(this),t),tn(ug.get(this))}:function(...t){return tn(e.apply(Zs(this),t))}}function u_(e){return typeof e=="function"?l_(e):(e instanceof IDBTransaction&&a_(e),n_(e,r_())?new Proxy(e,pu):e)}function tn(e){if(e instanceof IDBRequest)return o_(e);if(Xs.has(e))return Xs.get(e);const t=u_(e);return t!==e&&(Xs.set(e,t),Lc.set(t,e)),t}const Zs=e=>Lc.get(e);function c_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=tn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(tn(a.result),l.oldVersion,l.newVersion,tn(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const f_=["get","getKey","getAll","getAllKeys","count"],d_=["put","add","delete","clear"],el=new Map;function Ld(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(el.get(t))return el.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=d_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||f_.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return el.set(t,o),o}s_(e=>({...e,get:(t,n,r)=>Ld(t,n)||e.get(t,n,r),has:(t,n)=>!!Ld(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mu="@firebase/app",Dd="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new lg("@firebase/app"),m_="@firebase/app-compat",g_="@firebase/analytics-compat",v_="@firebase/analytics",y_="@firebase/app-check-compat",w_="@firebase/app-check",__="@firebase/auth",E_="@firebase/auth-compat",S_="@firebase/database",k_="@firebase/database-compat",b_="@firebase/functions",I_="@firebase/functions-compat",C_="@firebase/installations",T_="@firebase/installations-compat",x_="@firebase/messaging",P_="@firebase/messaging-compat",O_="@firebase/performance",R_="@firebase/performance-compat",N_="@firebase/remote-config",A_="@firebase/remote-config-compat",L_="@firebase/storage",D_="@firebase/storage-compat",M_="@firebase/firestore",U_="@firebase/firestore-compat",F_="firebase",z_="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="[DEFAULT]",j_={[mu]:"fire-core",[m_]:"fire-core-compat",[v_]:"fire-analytics",[g_]:"fire-analytics-compat",[w_]:"fire-app-check",[y_]:"fire-app-check-compat",[__]:"fire-auth",[E_]:"fire-auth-compat",[S_]:"fire-rtdb",[k_]:"fire-rtdb-compat",[b_]:"fire-fn",[I_]:"fire-fn-compat",[C_]:"fire-iid",[T_]:"fire-iid-compat",[x_]:"fire-fcm",[P_]:"fire-fcm-compat",[O_]:"fire-perf",[R_]:"fire-perf-compat",[N_]:"fire-rc",[A_]:"fire-rc-compat",[L_]:"fire-gcs",[D_]:"fire-gcs-compat",[M_]:"fire-fst",[U_]:"fire-fst-compat","fire-js":"fire-js",[F_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Map,vu=new Map;function $_(e,t){try{e.container.addComponent(t)}catch(n){Dn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ni(e){const t=e.name;if(vu.has(t))return Dn.debug(`There were multiple attempts to register component ${t}.`),!1;vu.set(t,e);for(const n of Aa.values())$_(n,e);return!0}function fg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new Qi("app","Firebase",B_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=z_;function dg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(n||(n=Aw()),!n)throw nn.create("no-options");const o=Aa.get(i);if(o){if(Na(n,o.options)&&Na(r,o.config))return o;throw nn.create("duplicate-app",{appName:i})}const a=new Jw(i);for(const l of vu.values())a.addComponent(l);const s=new H_(n,r,a);return Aa.set(i,s),s}function W_(e=gu){const t=Aa.get(e);if(!t&&e===gu)return dg();if(!t)throw nn.create("no-app",{appName:e});return t}function hr(e,t,n){var r;let i=(r=j_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dn.warn(s.join(" "));return}Ni(new br(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="firebase-heartbeat-database",K_=1,Ai="firebase-heartbeat-store";let tl=null;function hg(){return tl||(tl=c_(V_,K_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ai)}}}).catch(e=>{throw nn.create("idb-open",{originalErrorMessage:e.message})})),tl}async function G_(e){try{return(await hg()).transaction(Ai).objectStore(Ai).get(pg(e))}catch(t){if(t instanceof mn)Dn.warn(t.message);else{const n=nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dn.warn(n.message)}}}async function Md(e,t){try{const r=(await hg()).transaction(Ai,"readwrite");return await r.objectStore(Ai).put(t,pg(e)),r.done}catch(n){if(n instanceof mn)Dn.warn(n.message);else{const r=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function pg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=1024,q_=30*24*60*60*1e3;class Q_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ud();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=q_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ud(),{heartbeatsToSend:n,unsentEntries:r}=J_(this._heartbeatsCache.heartbeats),i=og(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ud(){return new Date().toISOString().substring(0,10)}function J_(e,t=Y_){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Fd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class X_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await G_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Fd(e){return og(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(e){Ni(new br("platform-logger",t=>new h_(t),"PRIVATE")),Ni(new br("heartbeat",t=>new Q_(t),"PRIVATE")),hr(mu,Dd,e),hr(mu,Dd,"esm2017"),hr("fire-js","")}Z_("");function Dc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eE=mg,gg=new Qi("auth","Firebase",mg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new lg("@firebase/auth");function Qo(e,...t){zd.logLevel<=H.ERROR&&zd.error(`Auth (${ls}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,...t){throw Mc(e,...t)}function st(e,...t){return Mc(e,...t)}function tE(e,t,n){const r=Object.assign(Object.assign({},eE()),{[t]:n});return new Qi("auth","Firebase",r).create(t,{appName:e.name})}function Mc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gg.create(e,...t)}function A(e,t,...n){if(!e)throw Mc(t,...n)}function pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qo(t),new Error(t)}function St(e,t){e||pt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;function mt(e){St(e instanceof Function,"Expected a class definition");let t=jd.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,jd.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(e,t){const n=fg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Na(o,t??{}))return i;Ze(i,"already-initialized")}return n.initialize({options:t})}function rE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function iE(){return $d()==="http:"||$d()==="https:"}function $d(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iE()||Mw()||"connection"in navigator)?navigator.onLine:!0}function aE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=Dw()||Uw()}get(){return oE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=new Xi(3e4,6e4);function Rr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nr(e,t,n,r,i={}){return yg(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=Ji(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),vg.fetch()(wg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function yg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},sE),t);try{const i=new uE(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw xo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw xo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw xo(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tE(e,c,u);Ze(e,c)}}catch(i){if(i instanceof mn)throw i;Ze(e,"network-request-failed")}}async function Zi(e,t,n,r,i={}){const o=await Nr(e,t,n,r,i);return"mfaPendingCredential"in o&&Ze(e,"multi-factor-auth-required",{_serverResponse:o}),o}function wg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Uc(e.config,i):`${e.config.apiScheme}://${i}`}class uE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),lE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=st(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(e,t){return Nr(e,"POST","/v1/accounts:delete",t)}async function fE(e,t){return Nr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dE(e,t=!1){const n=ut(e),r=await n.getIdToken(t),i=Fc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ci(nl(i.auth_time)),issuedAtTime:ci(nl(i.iat)),expirationTime:ci(nl(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function nl(e){return Number(e)*1e3}function Fc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ag(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hE(e){const t=Fc(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof mn&&pE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function pE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Li(e,fE(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?yE(o.providerUserInfo):[],s=vE(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new _g(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function gE(e){const t=ut(e);await La(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function vE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function yE(e){return e.map(t=>{var{providerId:n}=t,r=Dc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(e,t){const n=await yg(e,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=wg(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",vg.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return A(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await wE(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Di;return r&&(A(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(A(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Pn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Dc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _g(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Li(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dE(this,t)}reload(){return gE(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Pn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Li(this,cE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(s=n.tenantId)!==null&&s!==void 0?s:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:S,providerData:C,stsTokenManager:T}=n;A(m&&T,t,"internal-error");const N=Di.fromJSON(this.name,T);A(typeof m=="string",t,"internal-error"),Ot(f,t.name),Ot(h,t.name),A(typeof w=="boolean",t,"internal-error"),A(typeof S=="boolean",t,"internal-error"),Ot(v,t.name),Ot(g,t.name),Ot(y,t.name),Ot(k,t.name),Ot(p,t.name),Ot(d,t.name);const z=new Pn({uid:m,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:S,photoURL:g,phoneNumber:v,tenantId:y,stsTokenManager:N,createdAt:p,lastLoginAt:d});return C&&Array.isArray(C)&&(z.providerData=C.map(D=>Object.assign({},D))),k&&(z._redirectEventId=k),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Di;i.updateFromServerResponse(n);const o=new Pn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await La(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Eg.type="NONE";const Bd=Eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e,t,n){return`firebase:${e}:${t}:${n}`}class pr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Jo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Jo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new pr(mt(Bd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||mt(Bd);const a=Jo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const f=Pn._fromJSON(t,c);u!==o&&(s=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new pr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new pr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cg(t))return"Blackberry";if(Tg(t))return"Webos";if(zc(t))return"Safari";if((t.includes("chrome/")||kg(t))&&!t.includes("edge/"))return"Chrome";if(Ig(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sg(e=_e()){return/firefox\//i.test(e)}function zc(e=_e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kg(e=_e()){return/crios\//i.test(e)}function bg(e=_e()){return/iemobile/i.test(e)}function Ig(e=_e()){return/android/i.test(e)}function Cg(e=_e()){return/blackberry/i.test(e)}function Tg(e=_e()){return/webos/i.test(e)}function us(e=_e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _E(e=_e()){var t;return us(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function EE(){return Fw()&&document.documentMode===10}function xg(e=_e()){return us(e)||Ig(e)||Tg(e)||Cg(e)||/windows phone/i.test(e)||bg(e)}function SE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(e,t=[]){let n;switch(e){case"Browser":n=Hd(_e());break;case"Worker":n=`${Hd(_e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wd(this),this.idTokenSubscription=new Wd(this),this.beforeStateQueue=new kE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await La(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=aE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ut(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Qi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&mt(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return A(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function eo(e){return ut(e)}class Wd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Vw(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function IE(e,t,n){const r=eo(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Og(t),{host:a,port:s}=CE(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TE()}function Og(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function CE(e){const t=Og(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Vd(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Vd(a)}}}function Vd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function TE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(t){return pt("not implemented")}_linkToIdToken(t,n){return pt("not implemented")}_getReauthenticationResolver(t){return pt("not implemented")}}async function xE(e,t){return Nr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(e,t){return Zi(e,"POST","/v1/accounts:signInWithPassword",Rr(e,t))}async function OE(e,t){return Nr(e,"POST","/v1/accounts:sendOobCode",Rr(e,t))}async function RE(e,t){return OE(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(e,t){return Zi(e,"POST","/v1/accounts:signInWithEmailLink",Rr(e,t))}async function AE(e,t){return Zi(e,"POST","/v1/accounts:signInWithEmailLink",Rr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends jc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Mi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Mi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return PE(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NE(t,{email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return xE(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return AE(t,{idToken:n,email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(e,t){return Zi(e,"POST","/v1/accounts:signInWithIdp",Rr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="http://localhost";class Mn extends jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Dc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Mn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return mr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,mr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,mr(t,n)}buildRequest(){const t={requestUri:LE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ji(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ME(e){const t=Xr(Zr(e)).link,n=t?Xr(Zr(t)).deep_link_id:null,r=Xr(Zr(e)).deep_link_id;return(r?Xr(Zr(r)).link:null)||r||n||t||e}class $c{constructor(t){var n,r,i,o,a,s;const l=Xr(Zr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=DE((i=l.mode)!==null&&i!==void 0?i:null);A(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=ME(t);try{return new $c(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.providerId=Ar.PROVIDER_ID}static credential(t,n){return Mi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=$c.parseLink(n);return A(r,"argument-error"),Mi._fromEmailAndCode(t,r.code,r.tenantId)}}Ar.PROVIDER_ID="password";Ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends to{constructor(){super("facebook.com")}static credential(t){return Mn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Mn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends to{constructor(){super("github.com")}static credential(t){return Mn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends to{constructor(){super("twitter.com")}static credential(t,n){return Mn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(e,t){return Zi(e,"POST","/v1/accounts:signUp",Rr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Pn._fromIdTokenResponse(t,r,i),a=Kd(r);return new Un({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Kd(r);return new Un({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Kd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends mn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Da(t,n,r,i)}}function Ng(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(e,o,t,r):o})}async function FE(e,t,n=!1){const r=await Li(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Un._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Li(e,Ng(r,i,t,e),n);A(o.idToken,r,"internal-error");const a=Fc(o.idToken);A(a,r,"internal-error");const{sub:s}=a;return A(e.uid===s,r,"user-mismatch"),Un._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(e,t,n=!1){const r="signIn",i=await Ng(e,r,t),o=await Un._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function jE(e,t){return Ag(eo(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e,t,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(e,t,n){const r=ut(e),i={requestType:"PASSWORD_RESET",email:t};n&&$E(r,i,n),await RE(r,i)}async function HE(e,t,n){const r=eo(e),i=await UE(r,{returnSecureToken:!0,email:t,password:n}),o=await Un._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function WE(e,t,n){return jE(ut(e),Ar.credential(t,n))}function VE(e,t,n,r){return ut(e).onIdTokenChanged(t,n,r)}function KE(e,t,n){return ut(e).beforeAuthStateChanged(t,n)}function GE(e,t,n,r){return ut(e).onAuthStateChanged(t,n,r)}function YE(e){return ut(e).signOut()}const Ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){const e=_e();return zc(e)||us(e)}const QE=1e3,JE=10;class Dg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qE()&&SE(),this.fallbackToPolling=xg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);EE()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,JE):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},QE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Dg.type="LOCAL";const XE=Dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Mg.type="SESSION";const Ug=Mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new cs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await ZE(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=Bc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function tS(e){lt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function nS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function iS(){return Fg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="firebaseLocalStorageDb",oS=1,Ua="firebaseLocalStorage",jg="fbase_key";class no{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fs(e,t){return e.transaction([Ua],t?"readwrite":"readonly").objectStore(Ua)}function aS(){const e=indexedDB.deleteDatabase(zg);return new no(e).toPromise()}function wu(){const e=indexedDB.open(zg,oS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ua,{keyPath:jg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ua)?t(r):(r.close(),await aS(),t(await wu()))})})}async function Gd(e,t,n){const r=fs(e,!0).put({[jg]:t,value:n});return new no(r).toPromise()}async function sS(e,t){const n=fs(e,!1).get(t),r=await new no(n).toPromise();return r===void 0?null:r.value}function Yd(e,t){const n=fs(e,!0).delete(t);return new no(n).toPromise()}const lS=800,uS=3;class $g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>uS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(iS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await nS(),!this.activeServiceWorker)return;this.sender=new eS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wu();return await Gd(t,Ma,"1"),await Yd(t,Ma),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>sS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=fs(i,!1).getAll();return new no(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$g.type="LOCAL";const cS=$g;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function dS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=st("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",fS().appendChild(r)})}function hS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(e,t){return t?mt(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends jc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return mr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return mr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mS(e){return Ag(e.auth,new Hc(e),e.bypassAuthState)}function gS(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),zE(n,new Hc(e),e.bypassAuthState)}async function vS(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),FE(n,new Hc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mS;case"linkViaPopup":case"linkViaRedirect":return vS;case"reauthViaPopup":case"reauthViaRedirect":return gS;default:Ze(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new Xi(2e3,1e4);class rr extends Bg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,yS.get())};t()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="pendingRedirect",Xo=new Map;class _S extends Bg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Xo.get(this.auth._key());if(!t){try{const r=await ES(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Xo.set(this.auth._key(),t)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ES(e,t){const n=bS(t),r=kS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SS(e,t){Xo.set(e._key(),t)}function kS(e){return mt(e._redirectPersistence)}function bS(e){return Jo(wS,e.config.apiKey,e.name)}async function IS(e,t,n=!1){const r=eo(e),i=pS(r,t),a=await new _S(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=10*60*1e3;class TS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!xS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Hg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=CS&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(t))}saveEventToCache(t){this.cachedEventUids.add(qd(t)),this.lastProcessedEventTime=Date.now()}}function qd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Hg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function xS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(e,t={}){return Nr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RS=/^https?/;async function NS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await PS(e);for(const n of t)try{if(AS(n))return}catch{}Ze(e,"unauthorized-domain")}function AS(e){const t=yu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!RS.test(n))return!1;if(OS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new Xi(3e4,6e4);function Qd(){const e=lt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function DS(e){return new Promise((t,n)=>{var r,i,o;function a(){Qd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qd(),n(st(e,"network-request-failed"))},timeout:LS.get()})}if(!((i=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=lt().gapi)===null||o===void 0)&&o.load)a();else{const s=hS("iframefcb");return lt()[s]=()=>{gapi.load?a():n(st(e,"network-request-failed"))},dS(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Zo=null,t})}let Zo=null;function MS(e){return Zo=Zo||DS(e),Zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Xi(5e3,15e3),FS="__/auth/iframe",zS="emulator/auth/iframe",jS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BS(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Uc(t,zS):`https://${e.config.authDomain}/${FS}`,r={apiKey:t.apiKey,appName:e.name,v:ls},i=$S.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ji(r).slice(1)}`}async function HS(e){const t=await MS(e),n=lt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:BS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=st(e,"network-request-failed"),s=lt().setTimeout(()=>{o(a)},US.get());function l(){lt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VS=500,KS=600,GS="_blank",YS="http://localhost";class Jd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qS(e,t,n,r=VS,i=KS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},WS),{width:r.toString(),height:i.toString(),top:o,left:a}),u=_e().toLowerCase();n&&(s=kg(u)?GS:n),Sg(u)&&(t=t||YS,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,g])=>`${h}${v}=${g},`,"");if(_E(u)&&s!=="_self")return QS(t||"",s),new Jd(null);const f=window.open(t||"",s,c);A(f,e,"popup-blocked");try{f.focus()}catch{}return new Jd(f)}function QS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="__/auth/handler",XS="emulator/auth/handler";function Xd(e,t,n,r,i,o){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(t instanceof Rg){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Ww(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))a[l]=u}if(t instanceof to){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${ZS(e)}?${Ji(s).slice(1)}`}function ZS({config:e}){return e.emulator?Uc(e,XS):`https://${e.authDomain}/${JS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="webStorageSupport";class ek{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ug,this._completeRedirectFn=IS,this._overrideRedirectResult=SS}async _openPopup(t,n,r,i){var o;St((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=Xd(t,n,r,yu(),i);return qS(t,a,Bc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),tS(Xd(t,n,r,yu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(St(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await HS(t),r=new TS(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(rl,{type:rl},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[rl];a!==void 0&&n(!!a),Ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return xg()||zc()||us()}}const tk=ek;var Zd="@firebase/auth",eh="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ik(e){Ni(new br("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((s,l)=>{A(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),A(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(e)},c=new bE(s,l,u);return rE(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ni(new br("auth-internal",t=>{const n=eo(t.getProvider("auth").getImmediate());return(r=>new nk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Zd,eh,rk(e)),hr(Zd,eh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=5*60,ak=sg("authIdTokenMaxAge")||ok;let th=null;const sk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ak)return;const i=n==null?void 0:n.token;th!==i&&(th=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lk(e=W_()){const t=fg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=nE(e,{popupRedirectResolver:tk,persistence:[cS,XE,Ug]}),r=sg("authTokenSyncURL");if(r){const o=sk(r);KE(n,o,()=>o(n.currentUser)),VE(n,a=>o(a))}const i=Nw("auth");return i&&IE(n,`http://${i}`),n}ik("Browser");var uk="firebase",ck="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(uk,ck,"app");const fk={apiKey:"AIzaSyCndi7wWHQnVwy_5UlOdSVPigxVWo1K74o",authDomain:"filmzone-16314.firebaseapp.com",projectId:"filmzone-16314",storageBucket:"filmzone-16314.appspot.com",messagingSenderId:"570945154318",appId:"1:570945154318:web:d073c72439759ec09abb5f"},dk=dg(fk),Kr=lk(dk),Wg=I.createContext(),hk=({children:e})=>{const[t,n]=I.useState({}),r=(l,u)=>HE(Kr,l,u),i=(l,u)=>WE(Kr,l,u),o=()=>YE(Kr),a=l=>BE(Kr,l);I.useEffect(()=>{const l=GE(Kr,u=>{n(u)});return()=>{l()}},[]);const s={createUser:r,logout:o,signIn:i,resetPassword:a,user:t};return b(Wg.Provider,{value:s,children:e})},Wc=()=>I.useContext(Wg);var Vg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nh=qe.createContext&&qe.createContext(Vg),rn=globalThis&&globalThis.__assign||function(){return rn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rn.apply(this,arguments)},pk=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Kg(e){return e&&e.map(function(t,n){return qe.createElement(t.tag,rn({key:n},t.attr),Kg(t.child))})}function Vc(e){return function(t){return qe.createElement(mk,rn({attr:rn({},e.attr)},t),Kg(e.child))}}function mk(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=pk(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),qe.createElement("svg",rn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:rn(rn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&qe.createElement("title",null,o),e.children)};return nh!==void 0?qe.createElement(nh.Consumer,null,function(n){return t(n)}):t(Vg)}function gk(e){return Vc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function Gg(e){return Vc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}}]})(e)}function vk(e){return Vc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"}}]})(e)}const Wn="28c73f8f765d2a7a746b5f044c4d8a6e",yk="https://api.themoviedb.org/3/",Yg={popular:`https://api.themoviedb.org/3/movie/popular?api_key=${Wn}&language=en-US&page=1`,topRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${Wn}&language=en-US&page=1`,trending:`https://api.themoviedb.org/3/movie/popular?api_key=${Wn}&language=en-US&page=2`,horror:`https://api.themoviedb.org/3/search/movie?api_key=${Wn}&language=en-US&query=horror&page=1&include_adult=false`,upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${Wn}&language=en-US&page=1`,nowPlaying:`${yk}movie/now_playing?api_key=${Wn}&language=en-US&page=1`};function qg(e,t){return function(){return e.apply(t,arguments)}}const{toString:Qg}=Object.prototype,{getPrototypeOf:Kc}=Object,Gc=(e=>t=>{const n=Qg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Tt=e=>(e=e.toLowerCase(),t=>Gc(t)===e),ds=e=>t=>typeof t===e,{isArray:Lr}=Array,Ui=ds("undefined");function wk(e){return e!==null&&!Ui(e)&&e.constructor!==null&&!Ui(e.constructor)&&ln(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Jg=Tt("ArrayBuffer");function _k(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Jg(e.buffer),t}const Ek=ds("string"),ln=ds("function"),Xg=ds("number"),Yc=e=>e!==null&&typeof e=="object",Sk=e=>e===!0||e===!1,ea=e=>{if(Gc(e)!=="object")return!1;const t=Kc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},kk=Tt("Date"),bk=Tt("File"),Ik=Tt("Blob"),Ck=Tt("FileList"),Tk=e=>Yc(e)&&ln(e.pipe),xk=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Qg.call(e)===t||ln(e.toString)&&e.toString()===t)},Pk=Tt("URLSearchParams"),Ok=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ro(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Lr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function Zg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ev=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),tv=e=>!Ui(e)&&e!==ev;function _u(){const{caseless:e}=tv(this)&&this||{},t={},n=(r,i)=>{const o=e&&Zg(t,i)||i;ea(t[o])&&ea(r)?t[o]=_u(t[o],r):ea(r)?t[o]=_u({},r):Lr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ro(arguments[r],n);return t}const Rk=(e,t,n,{allOwnKeys:r}={})=>(ro(t,(i,o)=>{n&&ln(i)?e[o]=qg(i,n):e[o]=i},{allOwnKeys:r}),e),Nk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ak=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Lk=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Kc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Dk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Mk=e=>{if(!e)return null;if(Lr(e))return e;let t=e.length;if(!Xg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Uk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Kc(Uint8Array)),Fk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},zk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},jk=Tt("HTMLFormElement"),$k=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),rh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Bk=Tt("RegExp"),nv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ro(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Hk=e=>{nv(e,(t,n)=>{if(ln(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ln(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wk=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Lr(e)?r(e):r(String(e).split(t)),n},Vk=()=>{},Kk=(e,t)=>(e=+e,Number.isFinite(e)?e:t),il="abcdefghijklmnopqrstuvwxyz",ih="0123456789",rv={DIGIT:ih,ALPHA:il,ALPHA_DIGIT:il+il.toUpperCase()+ih},Gk=(e=16,t=rv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Yk(e){return!!(e&&ln(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qk=e=>{const t=new Array(10),n=(r,i)=>{if(Yc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Lr(r)?[]:{};return ro(r,(a,s)=>{const l=n(a,i+1);!Ui(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},_={isArray:Lr,isArrayBuffer:Jg,isBuffer:wk,isFormData:xk,isArrayBufferView:_k,isString:Ek,isNumber:Xg,isBoolean:Sk,isObject:Yc,isPlainObject:ea,isUndefined:Ui,isDate:kk,isFile:bk,isBlob:Ik,isRegExp:Bk,isFunction:ln,isStream:Tk,isURLSearchParams:Pk,isTypedArray:Uk,isFileList:Ck,forEach:ro,merge:_u,extend:Rk,trim:Ok,stripBOM:Nk,inherits:Ak,toFlatObject:Lk,kindOf:Gc,kindOfTest:Tt,endsWith:Dk,toArray:Mk,forEachEntry:Fk,matchAll:zk,isHTMLForm:jk,hasOwnProperty:rh,hasOwnProp:rh,reduceDescriptors:nv,freezeMethods:Hk,toObjectSet:Wk,toCamelCase:$k,noop:Vk,toFiniteNumber:Kk,findKey:Zg,global:ev,isContextDefined:tv,ALPHABET:rv,generateString:Gk,isSpecCompliantForm:Yk,toJSONObject:qk};function j(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}_.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const iv=j.prototype,ov={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ov[e]={value:e}});Object.defineProperties(j,ov);Object.defineProperty(iv,"isAxiosError",{value:!0});j.from=(e,t,n,r,i,o)=>{const a=Object.create(iv);return _.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),j.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const Qk=null;function Eu(e){return _.isPlainObject(e)||_.isArray(e)}function av(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function oh(e,t,n){return e?e.concat(t).map(function(i,o){return i=av(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Jk(e){return _.isArray(e)&&!e.some(Eu)}const Xk=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function hs(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!_.isUndefined(k[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(_.isDate(g))return g.toISOString();if(!l&&_.isBlob(g))throw new j("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(g)||_.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,k){let p=g;if(g&&!k&&typeof g=="object"){if(_.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(_.isArray(g)&&Jk(g)||(_.isFileList(g)||_.endsWith(y,"[]"))&&(p=_.toArray(g)))return y=av(y),p.forEach(function(m,w){!(_.isUndefined(m)||m===null)&&t.append(a===!0?oh([y],w,o):a===null?y:y+"[]",u(m))}),!1}return Eu(g)?!0:(t.append(oh(k,y,o),u(g)),!1)}const f=[],h=Object.assign(Xk,{defaultVisitor:c,convertValue:u,isVisitable:Eu});function v(g,y){if(!_.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),_.forEach(g,function(p,d){(!(_.isUndefined(p)||p===null)&&i.call(t,p,_.isString(d)?d.trim():d,y,h))===!0&&v(p,y?y.concat(d):[d])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return v(e),t}function ah(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function qc(e,t){this._pairs=[],e&&hs(e,this,t)}const sv=qc.prototype;sv.append=function(t,n){this._pairs.push([t,n])};sv.toString=function(t){const n=t?function(r){return t.call(this,r,ah)}:ah;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Zk(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lv(e,t,n){if(!t)return e;const r=n&&n.encode||Zk,i=n&&n.serialize;let o;if(i?o=i(t,n):o=_.isURLSearchParams(t)?t.toString():new qc(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class e2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const sh=e2,uv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t2=typeof URLSearchParams<"u"?URLSearchParams:qc,n2=FormData,r2=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),i2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),rt={isBrowser:!0,classes:{URLSearchParams:t2,FormData:n2,Blob},isStandardBrowserEnv:r2,isStandardBrowserWebWorkerEnv:i2,protocols:["http","https","file","blob","url","data"]};function o2(e,t){return hs(e,new rt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return rt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function a2(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function s2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function cv(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&_.isArray(i)?i.length:a,l?(_.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!_.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&_.isArray(i[a])&&(i[a]=s2(i[a])),!s)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,i)=>{t(a2(r),i,n,0)}),n}return null}const l2={"Content-Type":void 0};function u2(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ps={transitional:uv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=_.isObject(t);if(o&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return i&&i?JSON.stringify(cv(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return o2(t,this.formSerializer).toString();if((s=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return hs(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),u2(t)):t}],transformResponse:[function(t){const n=this.transitional||ps.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?j.from(s,j.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){ps.headers[t]={}});_.forEach(["post","put","patch"],function(t){ps.headers[t]=_.merge(l2)});const Qc=ps,c2=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),f2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&c2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},lh=Symbol("internals");function Gr(e){return e&&String(e).trim().toLowerCase()}function ta(e){return e===!1||e==null?e:_.isArray(e)?e.map(ta):String(e)}function d2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function h2(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ol(e,t,n,r){if(_.isFunction(r))return r.call(this,t,n);if(_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function p2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function m2(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class ms{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const c=Gr(l);if(!c)throw new Error("header name must be a non-empty string");const f=_.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ta(s))}const a=(s,l)=>_.forEach(s,(u,c)=>o(u,c,l));return _.isPlainObject(t)||t instanceof this.constructor?a(t,n):_.isString(t)&&(t=t.trim())&&!h2(t)?a(f2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Gr(t),t){const r=_.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return d2(i);if(_.isFunction(n))return n.call(this,i,r);if(_.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Gr(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ol(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Gr(a),a){const s=_.findKey(r,a);s&&(!n||ol(r,r[s],s,n))&&(delete r[s],i=!0)}}return _.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ol(this,this[o],o,t))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return _.forEach(this,(i,o)=>{const a=_.findKey(r,o);if(a){n[a]=ta(i),delete n[o];return}const s=t?p2(o):String(o).trim();s!==o&&delete n[o],n[s]=ta(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[lh]=this[lh]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=Gr(a);r[s]||(m2(i,a),r[s]=!0)}return _.isArray(t)?t.forEach(o):o(t),this}}ms.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods(ms.prototype);_.freezeMethods(ms);const vt=ms;function al(e,t){const n=this||Qc,r=t||n,i=vt.from(r.headers);let o=r.data;return _.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function fv(e){return!!(e&&e.__CANCEL__)}function io(e,t,n){j.call(this,e??"canceled",j.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(io,j,{__CANCEL__:!0});function g2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new j("Request failed with status code "+n.status,[j.ERR_BAD_REQUEST,j.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const v2=rt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),_.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),_.isString(o)&&l.push("path="+o),_.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function y2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function w2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function dv(e,t){return e&&!y2(t)?w2(e,t):t}const _2=rt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=_.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function E2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function S2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const v=c&&u-c;return v?Math.round(h*1e3/v):void 0}}function uh(e,t){let n=0;const r=S2(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const k2=typeof XMLHttpRequest<"u",b2=k2&&function(e){return new Promise(function(n,r){let i=e.data;const o=vt.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}_.isFormData(i)&&(rt.isStandardBrowserEnv||rt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+g))}const c=dv(e.baseURL,e.url);u.open(e.method.toUpperCase(),lv(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const v=vt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};g2(function(p){n(p),l()},function(p){r(p),l()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new j("Request aborted",j.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new j("Network Error",j.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||uv;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new j(g,y.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,e,u)),u=null},rt.isStandardBrowserEnv){const v=(e.withCredentials||_2(c))&&e.xsrfCookieName&&v2.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&_.forEach(o.toJSON(),function(g,y){u.setRequestHeader(y,g)}),_.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",uh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",uh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{u&&(r(!v||v.type?new io(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=E2(c);if(h&&rt.protocols.indexOf(h)===-1){r(new j("Unsupported protocol "+h+":",j.ERR_BAD_REQUEST,e));return}u.send(i||null)})},na={http:Qk,xhr:b2};_.forEach(na,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const I2={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=_.isString(n)?na[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new j(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(na,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:na};function sl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new io(null,e)}function ch(e){return sl(e),e.headers=vt.from(e.headers),e.data=al.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),I2.getAdapter(e.adapter||Qc.adapter)(e).then(function(r){return sl(e),r.data=al.call(e,e.transformResponse,r),r.headers=vt.from(r.headers),r},function(r){return fv(r)||(sl(e),r&&r.response&&(r.response.data=al.call(e,e.transformResponse,r.response),r.response.headers=vt.from(r.response.headers))),Promise.reject(r)})}const fh=e=>e instanceof vt?e.toJSON():e;function Ir(e,t){t=t||{};const n={};function r(u,c,f){return _.isPlainObject(u)&&_.isPlainObject(c)?_.merge.call({caseless:f},u,c):_.isPlainObject(c)?_.merge({},c):_.isArray(c)?c.slice():c}function i(u,c,f){if(_.isUndefined(c)){if(!_.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!_.isUndefined(c))return r(void 0,c)}function a(u,c){if(_.isUndefined(c)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>i(fh(u),fh(c),!0)};return _.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,h=f(e[c],t[c],c);_.isUndefined(h)&&f!==s||(n[c]=h)}),n}const hv="1.3.2",Jc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Jc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const dh={};Jc.transitional=function(t,n,r){function i(o,a){return"[Axios v"+hv+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new j(i(a," has been removed"+(n?" in "+n:"")),j.ERR_DEPRECATED);return n&&!dh[a]&&(dh[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function C2(e,t,n){if(typeof e!="object")throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new j("option "+o+" must be "+l,j.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new j("Unknown option "+o,j.ERR_BAD_OPTION)}}const Su={assertOptions:C2,validators:Jc},Rt=Su.validators;class Fa{constructor(t){this.defaults=t,this.interceptors={request:new sh,response:new sh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ir(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Su.assertOptions(r,{silentJSONParsing:Rt.transitional(Rt.boolean),forcedJSONParsing:Rt.transitional(Rt.boolean),clarifyTimeoutError:Rt.transitional(Rt.boolean)},!1),i!==void 0&&Su.assertOptions(i,{encode:Rt.function,serialize:Rt.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&_.merge(o.common,o[n.method]),a&&_.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=vt.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,h;if(!l){const g=[ch.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);f<h;)c=c.then(g[f++],g[f++]);return c}h=s.length;let v=n;for(f=0;f<h;){const g=s[f++],y=s[f++];try{v=g(v)}catch(k){y.call(this,k);break}}try{c=ch.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Ir(this.defaults,t);const n=dv(t.baseURL,t.url);return lv(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Fa.prototype[t]=function(n,r){return this.request(Ir(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Ir(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Fa.prototype[t]=n(),Fa.prototype[t+"Form"]=n(!0)});const ra=Fa;class Xc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new io(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Xc(function(i){t=i}),cancel:t}}}const T2=Xc;function x2(e){return function(n){return e.apply(null,n)}}function P2(e){return _.isObject(e)&&e.isAxiosError===!0}const ku={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ku).forEach(([e,t])=>{ku[t]=e});const O2=ku;function pv(e){const t=new ra(e),n=qg(ra.prototype.request,t);return _.extend(n,ra.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return pv(Ir(e,i))},n}const le=pv(Qc);le.Axios=ra;le.CanceledError=io;le.CancelToken=T2;le.isCancel=fv;le.VERSION=hv;le.toFormData=hs;le.AxiosError=j;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=x2;le.isAxiosError=P2;le.mergeConfig=Ir;le.AxiosHeaders=vt;le.formToJSON=e=>cv(_.isHTMLForm(e)?new FormData(e):e);le.HttpStatusCode=O2;le.default=le;const mv=le;function R2(){const[e,t]=I.useState("");I.useEffect(()=>{mv.get(Yg.nowPlaying).then(i=>{t(i.data.results)})},[]);const n=e[Math.floor(Math.random()*e.length)],r=(i,o)=>(i==null?void 0:i.length)>o?i.slice(0,o)+"...":i;return J("div",{className:"movie--banner--container",children:[b("img",{src:`https://image.tmdb.org/t/p/original/${n==null?void 0:n.backdrop_path}`,alt:n==null?void 0:n.title}),b("div",{className:"overlay"}),J("div",{className:"movie--banner--info",children:[b("h1",{children:n==null?void 0:n.title}),J("p",{children:[b("span",{children:"Released:"})," ",n==null?void 0:n.release_date]}),b("p",{children:r(n==null?void 0:n.overview,200)}),J("div",{className:"banner-icons",children:[b(Gg,{}),b("p",{children:"More Info"})]})]})]})}function N2({movie:e}){const[t,n]=I.useState(!1);return J("div",{className:"card--container",children:[b("img",{src:`https://image.tmdb.org/t/p/w500/${e==null?void 0:e.backdrop_path}`,alt:e==null?void 0:e.title}),b("div",{className:"card--info--container",children:J("div",{className:"card--info",children:[b("h3",{children:e==null?void 0:e.title}),J("p",{children:["Released: ",e==null?void 0:e.release_date]}),J("p",{children:["Rating: ",b("span",{style:{fontWeight:700},children:e==null?void 0:e.vote_average})]}),J("div",{className:"card--icons",children:[t?b(gk,{}):b(vk,{}),b(Gg,{})]})]})})]})}function A2({title:e,fetchData:t}){const[n,r]=I.useState([]);return I.useEffect(()=>{mv.get(t).then(i=>{r(i.data.results)})},[]),J("div",{className:"card--slider--container",children:[b("h2",{children:e}),b("div",{className:"slider",children:n.map((i,o)=>b("div",{children:b(N2,{movie:i})},o))})]})}function L2(){return J("div",{className:"home--container",children:[b(R2,{}),b(A2,{title:"Now Playing",fetchData:Yg.nowPlaying})]})}function D2(){const[e,t]=I.useState(),n=I.useRef(),r=I.useRef(),{signIn:i}=Wc(),o=qi(),a=async s=>{s.preventDefault();try{t(""),await i(n.current.value,r.current.value),console.log("Login Successfully"),o("/")}catch(l){t("Unable to login"),console.log(l.message)}};return setTimeout(()=>{t(!1)},5e3),b("div",{className:"signup--container",children:J("form",{className:"form",onSubmit:a,children:[b("h2",{className:"signup--header",children:"Login"}),b("input",{type:"email",id:"email",placeholder:"Email Address",ref:n,required:!0}),b("input",{type:"password",id:"password",placeholder:"Password",ref:r,required:!0}),b("button",{type:"submit",className:"signup--btn",children:"Login"}),e&&b("p",{className:"signup--error",children:e}),J("p",{children:["Don't have an account? ",b(En,{to:"/signup",children:"Sign Up"})]})]})})}function M2(){const[e,t]=I.useState(),n=I.useRef(),r=I.useRef(),i=I.useRef(),{createUser:o}=Wc(),a=qi(),s=async l=>{if(l.preventDefault(),r.current.value!==i.current.value)return l.target.reset(),t("Passwords do not match");try{t(""),await o(n.current.value,r.current.value),console.log("Signed Up Successfully"),a("/")}catch(u){t("Failed to create an account"),console.log(u.message)}};return setTimeout(()=>{t(!1)},5e3),b("div",{className:"signup--container",children:J("form",{className:"form",onSubmit:s,children:[b("h2",{className:"signup--header",children:"Sign Up"}),b("input",{type:"email",placeholder:"Email Address",ref:n,required:!0}),b("input",{type:"password",placeholder:"Password",ref:r,required:!0}),b("input",{type:"password",placeholder:"Confirm Password",ref:i,required:!0}),b("button",{type:"submit",className:"signup--btn",children:"Create Account"}),e&&b("p",{className:"signup--error",children:e}),J("p",{children:["Have an account? ",b(En,{to:"/login",children:"Login"})]})]})})}function hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hh(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function za(e){return za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},za(e)}function U2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ph(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F2(e,t,n){return t&&ph(e.prototype,t),n&&ph(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zc(e,t){return j2(e)||B2(e,t)||gv(e,t)||W2()}function oo(e){return z2(e)||$2(e)||gv(e)||H2()}function z2(e){if(Array.isArray(e))return bu(e)}function j2(e){if(Array.isArray(e))return e}function $2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function B2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function gv(e,t){if(e){if(typeof e=="string")return bu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bu(e,t)}}function bu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mh=function(){},ef={},vv={},yv=null,wv={mark:mh,measure:mh};try{typeof window<"u"&&(ef=window),typeof document<"u"&&(vv=document),typeof MutationObserver<"u"&&(yv=MutationObserver),typeof performance<"u"&&(wv=performance)}catch{}var V2=ef.navigator||{},gh=V2.userAgent,vh=gh===void 0?"":gh,un=ef,Y=vv,yh=yv,Po=wv;un.document;var xt=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",_v=~vh.indexOf("MSIE")||~vh.indexOf("Trident/"),Oo,Ro,No,Ao,Lo,kt="___FONT_AWESOME___",Iu=16,Ev="fa",Sv="svg-inline--fa",Fn="data-fa-i2svg",Cu="data-fa-pseudo-element",K2="data-fa-pseudo-element-pending",tf="data-prefix",nf="data-icon",wh="fontawesome-i2svg",G2="async",Y2=["HTML","HEAD","STYLE","SCRIPT"],kv=function(){try{return!0}catch{return!1}}(),K="classic",te="sharp",rf=[K,te];function ao(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Fi=ao((Oo={},ue(Oo,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ue(Oo,te,{fa:"solid",fass:"solid","fa-solid":"solid"}),Oo)),zi=ao((Ro={},ue(Ro,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ue(Ro,te,{solid:"fass"}),Ro)),ji=ao((No={},ue(No,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ue(No,te,{fass:"fa-solid"}),No)),q2=ao((Ao={},ue(Ao,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ue(Ao,te,{"fa-solid":"fass"}),Ao)),Q2=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,bv="fa-layers-text",J2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,X2=ao((Lo={},ue(Lo,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ue(Lo,te,{900:"fass"}),Lo)),Iv=[1,2,3,4,5,6,7,8,9,10],Z2=Iv.concat([11,12,13,14,15,16,17,18,19,20]),eb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],In={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$i=new Set;Object.keys(zi[K]).map($i.add.bind($i));Object.keys(zi[te]).map($i.add.bind($i));var tb=[].concat(rf,oo($i),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",In.GROUP,In.SWAP_OPACITY,In.PRIMARY,In.SECONDARY]).concat(Iv.map(function(e){return"".concat(e,"x")})).concat(Z2.map(function(e){return"w-".concat(e)})),fi=un.FontAwesomeConfig||{};function nb(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function rb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var ib=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ib.forEach(function(e){var t=Zc(e,2),n=t[0],r=t[1],i=rb(nb(n));i!=null&&(fi[r]=i)})}var Cv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ev,replacementClass:Sv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fi.familyPrefix&&(fi.cssPrefix=fi.familyPrefix);var Cr=x(x({},Cv),fi);Cr.autoReplaceSvg||(Cr.observeMutations=!1);var R={};Object.keys(Cv).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Cr[e]=n,di.forEach(function(r){return r(R)})},get:function(){return Cr[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Cr.cssPrefix=t,di.forEach(function(n){return n(R)})},get:function(){return Cr.cssPrefix}});un.FontAwesomeConfig=R;var di=[];function ob(e){return di.push(e),function(){di.splice(di.indexOf(e),1)}}var Nt=Iu,it={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ab(e){if(!(!e||!xt)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Y.head.insertBefore(t,r),e}}var sb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Bi(){for(var e=12,t="";e-- >0;)t+=sb[Math.random()*62|0];return t}function Dr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function of(e){return e.classList?Dr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Tv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lb(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Tv(e[n]),'" ')},"").trim()}function gs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function af(e){return e.size!==it.size||e.x!==it.x||e.y!==it.y||e.rotate!==it.rotate||e.flipX||e.flipY}function ub(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function cb(e){var t=e.transform,n=e.width,r=n===void 0?Iu:n,i=e.height,o=i===void 0?Iu:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&_v?l+="translate(".concat(t.x/Nt-r/2,"em, ").concat(t.y/Nt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Nt,"em), calc(-50% + ").concat(t.y/Nt,"em)) "):l+="translate(".concat(t.x/Nt,"em, ").concat(t.y/Nt,"em) "),l+="scale(".concat(t.size/Nt*(t.flipX?-1:1),", ").concat(t.size/Nt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var fb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xv(){var e=Ev,t=Sv,n=R.cssPrefix,r=R.replacementClass,i=fb;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var _h=!1;function ll(){R.autoAddCss&&!_h&&(ab(xv()),_h=!0)}var db={mixout:function(){return{dom:{css:xv,insertCss:ll}}},hooks:function(){return{beforeDOMElementCreation:function(){ll()},beforeI2svg:function(){ll()}}}},bt=un||{};bt[kt]||(bt[kt]={});bt[kt].styles||(bt[kt].styles={});bt[kt].hooks||(bt[kt].hooks={});bt[kt].shims||(bt[kt].shims=[]);var Ye=bt[kt],Pv=[],hb=function e(){Y.removeEventListener("DOMContentLoaded",e),ja=1,Pv.map(function(t){return t()})},ja=!1;xt&&(ja=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),ja||Y.addEventListener("DOMContentLoaded",hb));function pb(e){xt&&(ja?setTimeout(e,0):Pv.push(e))}function so(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Tv(e):"<".concat(t," ").concat(lb(r),">").concat(o.map(so).join(""),"</").concat(t,">")}function Eh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mb=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},ul=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?mb(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function gb(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Tu(e){var t=gb(e);return t.length===1?t[0].toString(16):null}function vb(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function xu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Sh(t);typeof Ye.hooks.addPack=="function"&&!i?Ye.hooks.addPack(e,Sh(t)):Ye.styles[e]=x(x({},Ye.styles[e]||{}),o),e==="fas"&&xu("fa",t)}var Do,Mo,Uo,ir=Ye.styles,yb=Ye.shims,wb=(Do={},ue(Do,K,Object.values(ji[K])),ue(Do,te,Object.values(ji[te])),Do),sf=null,Ov={},Rv={},Nv={},Av={},Lv={},_b=(Mo={},ue(Mo,K,Object.keys(Fi[K])),ue(Mo,te,Object.keys(Fi[te])),Mo);function Eb(e){return~tb.indexOf(e)}function Sb(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Eb(i)?i:null}var Dv=function(){var t=function(o){return ul(ir,function(a,s,l){return a[l]=ul(s,o,{}),a},{})};Ov=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),Rv=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),Lv=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in ir||R.autoFetchSvg,r=ul(yb,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Nv=r.names,Av=r.unicodes,sf=vs(R.styleDefault,{family:R.familyDefault})};ob(function(e){sf=vs(e.styleDefault,{family:R.familyDefault})});Dv();function lf(e,t){return(Ov[e]||{})[t]}function kb(e,t){return(Rv[e]||{})[t]}function Cn(e,t){return(Lv[e]||{})[t]}function Mv(e){return Nv[e]||{prefix:null,iconName:null}}function bb(e){var t=Av[e],n=lf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cn(){return sf}var uf=function(){return{prefix:null,iconName:null,rest:[]}};function vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=Fi[r][e],o=zi[r][e]||zi[r][i],a=e in Ye.styles?e:null;return o||a||null}var kh=(Uo={},ue(Uo,K,Object.keys(ji[K])),ue(Uo,te,Object.keys(ji[te])),Uo);function ys(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},ue(t,K,"".concat(R.cssPrefix,"-").concat(K)),ue(t,te,"".concat(R.cssPrefix,"-").concat(te)),t),a=null,s=K;(e.includes(o[K])||e.some(function(u){return kh[K].includes(u)}))&&(s=K),(e.includes(o[te])||e.some(function(u){return kh[te].includes(u)}))&&(s=te);var l=e.reduce(function(u,c){var f=Sb(R.cssPrefix,c);if(ir[c]?(c=wb[s].includes(c)?q2[s][c]:c,a=c,u.prefix=c):_b[s].indexOf(c)>-1?(a=c,u.prefix=vs(c,{family:s})):f?u.iconName=f:c!==R.replacementClass&&c!==o[K]&&c!==o[te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=a==="fa"?Mv(u.iconName):{},v=Cn(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||v||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ir.far&&ir.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},uf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(ir.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=Cn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=cn()||"fas"),l}var Ib=function(){function e(){U2(this,e),this.definitions={}}return F2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),a[s]),xu(s,a[s]);var l=ji[K][s];l&&xu(l,a[s]),Dv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),bh=[],or={},gr={},Cb=Object.keys(gr);function Tb(e,t){var n=t.mixoutsTo;return bh=e,or={},Object.keys(gr).forEach(function(r){Cb.indexOf(r)===-1&&delete gr[r]}),bh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),za(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){or[a]||(or[a]=[]),or[a].push(o[a])})}r.provides&&r.provides(gr)}),n}function Pu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=or[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=or[e]||[];i.forEach(function(o){o.apply(null,n)})}function It(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gr[e]?gr[e].apply(null,t):void 0}function Ou(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||cn();if(t)return t=Cn(n,t)||t,Eh(Uv.definitions,n,t)||Eh(Ye.styles,n,t)}var Uv=new Ib,xb=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,zn("noAuto")},Pb={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xt?(zn("beforeI2svg",t),It("pseudoElements2svg",t),It("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,pb(function(){Rb({autoReplaceSvgRoot:n}),zn("watch",t)})}},Ob={icon:function(t){if(t===null)return null;if(za(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Cn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vs(t[0]);return{prefix:r,iconName:Cn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(Q2))){var i=ys(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||cn(),iconName:Cn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=cn();return{prefix:o,iconName:Cn(o,t)||t}}}},Me={noAuto:xb,config:R,dom:Pb,parse:Ob,library:Uv,findIconDefinition:Ou,toHtml:so},Rb=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys(Ye.styles).length>0||R.autoFetchSvg)&&xt&&R.autoReplaceSvg&&Me.dom.i2svg({node:r})};function ws(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return so(r)})}}),Object.defineProperty(e,"node",{get:function(){if(xt){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Nb(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(af(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=gs(x(x({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Ab(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:a}),children:r}]}]}function cf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,v=h===void 0?!1:h,g=r.found?r:n,y=g.width,k=g.height,p=i==="fak",d=[R.replacementClass,o?"".concat(R.cssPrefix,"-").concat(o):""].filter(function(z){return f.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(f.classes).join(" "),m={children:[],attributes:x(x({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(k)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/k*16*.0625,"em")}:{};v&&(m.attributes[Fn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Bi())},children:[l]}),delete m.attributes.title);var S=x(x({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:x(x({},w),f.styles)}),C=r.found&&n.found?It("generateAbstractMask",S)||{children:[],attributes:{}}:It("generateAbstractIcon",S)||{children:[],attributes:{}},T=C.children,N=C.attributes;return S.children=T,S.attributes=N,s?Ab(S):Nb(S)}function Ih(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Fn]="");var c=x({},a.styles);af(i)&&(c.transform=cb({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=gs(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Lb(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=gs(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var cl=Ye.styles;function Ru(e){var t=e[0],n=e[1],r=e.slice(4),i=Zc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(In.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(In.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(In.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var Db={found:!1,width:512,height:512};function Mb(e,t){!kv&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nu(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=cn()),new Promise(function(r,i){if(It("missingIconAbstract"),n==="fa"){var o=Mv(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&cl[t]&&cl[t][e]){var a=cl[t][e];return r(Ru(a))}Mb(e,t),r(x(x({},Db),{},{icon:R.showMissingIcons&&e?It("missingIconAbstract")||{}:{}}))})}var Ch=function(){},Au=R.measurePerformance&&Po&&Po.mark&&Po.measure?Po:{mark:Ch,measure:Ch},ei='FA "6.2.1"',Ub=function(t){return Au.mark("".concat(ei," ").concat(t," begins")),function(){return Fv(t)}},Fv=function(t){Au.mark("".concat(ei," ").concat(t," ends")),Au.measure("".concat(ei," ").concat(t),"".concat(ei," ").concat(t," begins"),"".concat(ei," ").concat(t," ends"))},ff={begin:Ub,end:Fv},ia=function(){};function Th(e){var t=e.getAttribute?e.getAttribute(Fn):null;return typeof t=="string"}function Fb(e){var t=e.getAttribute?e.getAttribute(tf):null,n=e.getAttribute?e.getAttribute(nf):null;return t&&n}function zb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function jb(){if(R.autoReplaceSvg===!0)return oa.replace;var e=oa[R.autoReplaceSvg];return e||oa.replace}function $b(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Bb(e){return Y.createElement(e)}function zv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$b:Bb:n;if(typeof e=="string")return Y.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(zv(a,{ceFn:r}))}),i}function Hb(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(zv(i),n)}),n.getAttribute(Fn)===null&&R.keepOriginalSource){var r=Y.createComment(Hb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~of(n).indexOf(R.replacementClass))return oa.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===R.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return so(s)}).join(`
`);n.setAttribute(Fn,""),n.innerHTML=a}};function xh(e){e()}function jv(e,t){var n=typeof t=="function"?t:ia;if(e.length===0)n();else{var r=xh;R.mutateApproach===G2&&(r=un.requestAnimationFrame||xh),r(function(){var i=jb(),o=ff.begin("mutate");e.map(i),o(),n()})}}var df=!1;function $v(){df=!0}function Lu(){df=!1}var $a=null;function Ph(e){if(yh&&R.observeMutations){var t=e.treeCallback,n=t===void 0?ia:t,r=e.nodeCallback,i=r===void 0?ia:r,o=e.pseudoElementsCallback,a=o===void 0?ia:o,s=e.observeMutationsRoot,l=s===void 0?Y:s;$a=new yh(function(u){if(!df){var c=cn();Dr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Th(f.addedNodes[0])&&(R.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Th(f.target)&&~eb.indexOf(f.attributeName))if(f.attributeName==="class"&&Fb(f.target)){var h=ys(of(f.target)),v=h.prefix,g=h.iconName;f.target.setAttribute(tf,v||c),g&&f.target.setAttribute(nf,g)}else zb(f.target)&&i(f.target)})}}),xt&&$a.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wb(){$a&&$a.disconnect()}function Vb(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function Kb(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ys(of(e));return i.prefix||(i.prefix=cn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=kb(i.prefix,e.innerText)||lf(i.prefix,Tu(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Gb(e){var t=Dr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||Bi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:it,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Kb(e),r=n.iconName,i=n.prefix,o=n.rest,a=Gb(e),s=Pu("parseNodeAttributes",{},e),l=t.styleParser?Vb(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:it,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var qb=Ye.styles;function Bv(e){var t=R.autoReplaceSvg==="nest"?Oh(e,{styleParser:!1}):Oh(e);return~t.extra.classes.indexOf(bv)?It("generateLayersText",e,t):It("generateSvgReplacementMutation",e,t)}var fn=new Set;rf.map(function(e){fn.add("fa-".concat(e))});Object.keys(Fi[K]).map(fn.add.bind(fn));Object.keys(Fi[te]).map(fn.add.bind(fn));fn=oo(fn);function Rh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xt)return Promise.resolve();var n=Y.documentElement.classList,r=function(f){return n.add("".concat(wh,"-").concat(f))},i=function(f){return n.remove("".concat(wh,"-").concat(f))},o=R.autoFetchSvg?fn:rf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(qb));o.includes("fa")||o.push("fa");var a=[".".concat(bv,":not([").concat(Fn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Fn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Dr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ff.begin("onTree"),u=s.reduce(function(c,f){try{var h=Bv(f);h&&c.push(h)}catch(v){kv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){jv(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function Qb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bv(e).then(function(n){n&&jv([n],t)})}function Jb(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ou(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ou(i||{})),e(r,x(x({},n),{},{mask:i}))}}var Xb=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?it:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,v=n.titleId,g=v===void 0?null:v,y=n.classes,k=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var S=t.prefix,C=t.iconName,T=t.icon;return ws(x({type:"icon"},t),function(){return zn("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(g||Bi()):(d["aria-hidden"]="true",d.focusable="false")),cf({icons:{main:Ru(T),mask:l?Ru(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:x(x({},it),i),symbol:a,title:h,maskId:c,titleId:g,extra:{attributes:d,styles:w,classes:k}})})}},Zb={mixout:function(){return{icon:Jb(Xb)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Rh,n.nodeCallback=Qb,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Y:r,o=n.callback,a=o===void 0?function(){}:o;return Rh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(v,g){Promise.all([Nu(i,s),c.iconName?Nu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var k=Zc(y,2),p=k[0],d=k[1];v([n,cf({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=gs(s);l.length>0&&(i.style=l);var u;return af(a)&&(u=It("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},eI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return ws({type:"layer"},function(){zn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(oo(o)).join(" ")},children:a}]})}}}},tI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return ws({type:"counter",content:n},function(){return zn("beforeDOMElementCreation",{content:n,params:r}),Lb({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(oo(s))}})})}}}},nI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?it:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,v=h===void 0?{}:h;return ws({type:"text",content:n},function(){return zn("beforeDOMElementCreation",{content:n,params:r}),Ih({content:n,transform:x(x({},it),o),title:s,extra:{attributes:f,styles:v,classes:["".concat(R.cssPrefix,"-layers-text")].concat(oo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(_v){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Ih({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},rI=new RegExp('"',"ug"),Nh=[1105920,1112319];function iI(e){var t=e.replace(rI,""),n=vb(t,0),r=n>=Nh[0]&&n<=Nh[1],i=t.length===2?t[0]===t[1]:!1;return{value:Tu(i?t[0]:t),isSecondary:r||i}}function Ah(e,t){var n="".concat(K2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Dr(e.children),a=o.filter(function(T){return T.getAttribute(Cu)===t})[0],s=un.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(J2),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:K,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?zi[h][l[2].toLowerCase()]:X2[h][u],g=iI(f),y=g.value,k=g.isSecondary,p=l[0].startsWith("FontAwesome"),d=lf(v,y),m=d;if(p){var w=bb(y);w.iconName&&w.prefix&&(d=w.iconName,v=w.prefix)}if(d&&!k&&(!a||a.getAttribute(tf)!==v||a.getAttribute(nf)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var S=Yb(),C=S.extra;C.attributes[Cu]=t,Nu(d,v).then(function(T){var N=cf(x(x({},S),{},{icons:{main:T,mask:uf()},prefix:v,iconName:m,extra:C,watchable:!0})),z=Y.createElement("svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=N.map(function(D){return so(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function oI(e){return Promise.all([Ah(e,"::before"),Ah(e,"::after")])}function aI(e){return e.parentNode!==document.head&&!~Y2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Lh(e){if(xt)return new Promise(function(t,n){var r=Dr(e.querySelectorAll("*")).filter(aI).map(oI),i=ff.begin("searchPseudoElements");$v(),Promise.all(r).then(function(){i(),Lu(),t()}).catch(function(){i(),Lu(),n()})})}var sI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Lh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Y:r;R.searchPseudoElements&&Lh(i)}}},Dh=!1,lI={mixout:function(){return{dom:{unwatch:function(){$v(),Dh=!0}}}},hooks:function(){return{bootstrap:function(){Ph(Pu("mutationObserverCallbacks",{}))},noAuto:function(){Wb()},watch:function(n){var r=n.observeMutationsRoot;Dh?Lu():Ph(Pu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},uI={mixout:function(){return{parse:{transform:function(n){return Mh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Mh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(a/2*-1," -256)")},v={outer:s,inner:f,path:h};return{tag:"g",attributes:x({},v.outer),children:[{tag:"g",attributes:x({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),v.path)}]}]}}}},fl={x:0,y:0,width:"100%",height:"100%"};function Uh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function cI(e){return e.tag==="g"?e.children:[e]}var fI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?ys(i.split(" ").map(function(a){return a.trim()})):uf();return o.prefix||(o.prefix=cn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,h=a.icon,v=ub({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:x(x({},fl),{},{fill:"white"})},y=c.children?{children:c.children.map(Uh)}:{},k={tag:"g",attributes:x({},v.inner),children:[Uh(x({tag:c.tag,attributes:x(x({},c.attributes),v.path)},y))]},p={tag:"g",attributes:x({},v.outer),children:[k]},d="mask-".concat(s||Bi()),m="clip-".concat(s||Bi()),w={tag:"mask",attributes:x(x({},fl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:cI(h)},w]};return r.push(S,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},fl)}),{children:r,attributes:i}}}},dI={provides:function(t){var n=!1;un.matchMedia&&(n=un.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=x(x({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},pI=[db,Zb,eI,tI,nI,sI,lI,uI,fI,dI,hI];Tb(pI,{mixoutsTo:Me});Me.noAuto;Me.config;Me.library;Me.dom;var Du=Me.parse;Me.findIconDefinition;Me.toHtml;var mI=Me.icon;Me.layer;Me.text;Me.counter;var M={},gI={get exports(){return M},set exports(e){M=e}},vI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",yI=vI,wI=yI;function Hv(){}function Wv(){}Wv.resetWarningCache=Hv;var _I=function(){function e(r,i,o,a,s,l){if(l!==wI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Wv,resetWarningCache:Hv};return n.PropTypes=n,n};gI.exports=_I();function Fh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fh(Object(n),!0).forEach(function(r){ar(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ba(e){return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ba(e)}function ar(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function EI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function SI(e,t){if(e==null)return{};var n=EI(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Mu(e){return kI(e)||bI(e)||II(e)||CI()}function kI(e){if(Array.isArray(e))return Uu(e)}function bI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function II(e,t){if(e){if(typeof e=="string")return Uu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(e,t)}}function Uu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function CI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TI(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,v=e.inverse,g=e.border,y=e.listItem,k=e.flip,p=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":v,"fa-border":g,"fa-li":y,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ar(t,"fa-".concat(p),typeof p<"u"&&p!==null),ar(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),ar(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ar(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function xI(e){return e=e-0,e===e}function Vv(e){return xI(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var PI=["style"];function OI(e){return e.charAt(0).toUpperCase()+e.slice(1)}function RI(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Vv(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[OI(i)]=o:t[i]=o,t},{})}function Kv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Kv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=RI(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Vv(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=SI(n,PI);return i.attrs.style=Vt(Vt({},i.attrs.style),a),e.apply(void 0,[t.tag,Vt(Vt({},i.attrs),s)].concat(Mu(r)))}var Gv=!1;try{Gv=!0}catch{}function NI(){if(!Gv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zh(e){if(e&&Ba(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Du.icon)return Du.icon(e);if(e===null)return null;if(e&&Ba(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function dl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ar({},e,t):{}}var on=qe.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=zh(n),c=dl("classes",[].concat(Mu(TI(e)),Mu(o.split(" ")))),f=dl("transform",typeof e.transform=="string"?Du.transform(e.transform):e.transform),h=dl("mask",zh(r)),v=mI(u,Vt(Vt(Vt(Vt({},c),f),h),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!v)return NI("Could not find icon",u),null;var g=v.abstract,y={ref:t};return Object.keys(e).forEach(function(k){on.defaultProps.hasOwnProperty(k)||(y[k]=e[k])}),AI(g[0],y)});on.displayName="FontAwesomeIcon";on.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};on.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var AI=Kv.bind(null,qe.createElement),LI={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},DI={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},MI={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]},UI={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},FI=UI;function zI(){const[e,t]=I.useState(!1),{user:n,logout:r}=Wc(),i=qi(),o=async()=>{t("");try{await r(),i("/login"),console.log("Successfully logged out")}catch(a){t("Failed to log out"),console.log(a.message)}};return setTimeout(()=>{t(!1)},5e3),J("nav",{className:"nav--container",children:[J("div",{className:"nav--links",children:[b(En,{to:"/movies",children:"Movies"}),b(En,{to:"/series",children:"Series"}),n?b(En,{to:"/mylist",children:"My List"}):null]}),b("div",{className:"logo--wrapper",children:J(En,{to:"/",className:"logo",children:[b("h3",{children:"Film"}),b("span",{children:"Time"})]})}),J("div",{className:"nav--right",children:[J("div",{className:"search",children:[b("button",{children:b(on,{icon:FI})}),b("input",{type:"text",placeholder:"Search"})]}),n?b("button",{className:"logout--btn",onClick:o,children:b(on,{icon:MI})}):b(En,{to:"/login",className:"login--btn",children:b(on,{icon:DI})}),e&&b("p",{className:"signup--error",children:e})]})]})}const jI="/filmtime/assets/movietrailer-a762508e.mp4";function $I(){const e=qi();return J("div",{className:"player--container",children:[b("button",{className:"hero--btn back--btn",onClick:()=>e(-1),children:b(on,{icon:LI})}),b("video",{src:jI,autoPlay:!0,loop:!0,controls:!0,muted:!0})]})}function BI(){return b("div",{children:"Movies"})}function HI(){return b("div",{children:"Series"})}function WI(){return b("div",{children:"MyList"})}function VI(){return J("div",{className:"App",children:[b(zI,{}),J(yw,{children:[b(At,{index:!0,path:"/",element:b(L2,{})}),b(At,{exact:!0,path:"/Login",element:b(D2,{})}),b(At,{exact:!0,path:"/signup",element:b(M2,{})}),b(At,{exact:!0,path:"/player",element:b($I,{})}),b(At,{exact:!0,path:"/movies",element:b(BI,{})}),b(At,{exact:!0,path:"/series",element:b(HI,{})}),b(At,{exact:!0,path:"/mylist",element:b(WI,{})})]})]})}pl.createRoot(document.getElementById("root")).render(b(qe.StrictMode,{children:b(kw,{children:b(hk,{children:b(VI,{})})})}));
