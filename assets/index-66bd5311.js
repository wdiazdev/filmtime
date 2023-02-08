function o1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function a1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Di={},s1={get exports(){return Di},set exports(e){Di=e}},_s={},b={},l1={get exports(){return b},set exports(e){b=e}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),u1=Symbol.for("react.portal"),c1=Symbol.for("react.fragment"),f1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),p1=Symbol.for("react.context"),m1=Symbol.for("react.forward_ref"),v1=Symbol.for("react.suspense"),g1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),Fd=Symbol.iterator;function w1(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Tm={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Tm,this.updater=n||Pm}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rm(){}Rm.prototype=Kr.prototype;function Zc(e,t,n){this.props=e,this.context=t,this.refs=Tm,this.updater=n||Pm}var ef=Zc.prototype=new Rm;ef.constructor=Zc;Om(ef,Kr.prototype);ef.isPureReactComponent=!0;var zd=Array.isArray,Am=Object.prototype.hasOwnProperty,tf={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Lm(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Am.call(t,r)&&!Nm.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:vo,type:e,key:o,ref:a,props:i,_owner:tf.current}}function S1(e,t){return{$$typeof:vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nf(e){return typeof e=="object"&&e!==null&&e.$$typeof===vo}function _1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bd=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_1(""+e.key):t.toString(36)}function ca(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case vo:case u1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+El(a,0):r,zd(i)?(n="",e!=null&&(n=e.replace(Bd,"$&/")+"/"),ca(i,t,n,"",function(u){return u})):i!=null&&(nf(i)&&(i=S1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Bd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+El(o,s);a+=ca(o,t,n,l,i)}else if(l=w1(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+El(o,s++),a+=ca(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(e,t,n){if(e==null)return e;var r=[],i=0;return ca(e,r,"","",function(o){return t.call(n,o,i++)}),r}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},fa={transition:null},k1={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:fa,ReactCurrentOwner:tf};j.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!nf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Kr;j.Fragment=c1;j.Profiler=d1;j.PureComponent=Zc;j.StrictMode=f1;j.Suspense=v1;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Om({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=tf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Am.call(t,l)&&!Nm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:vo,type:e.type,key:i,ref:o,props:r,_owner:a}};j.createContext=function(e){return e={$$typeof:p1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h1,_context:e},e.Consumer=e};j.createElement=Lm;j.createFactory=function(e){var t=Lm.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:m1,render:e}};j.isValidElement=nf;j.lazy=function(e){return{$$typeof:y1,_payload:{_status:-1,_result:e},_init:E1}};j.memo=function(e,t){return{$$typeof:g1,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=fa.transition;fa.transition={};try{e()}finally{fa.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return Te.current.useCallback(e,t)};j.useContext=function(e){return Te.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};j.useEffect=function(e,t){return Te.current.useEffect(e,t)};j.useId=function(){return Te.current.useId()};j.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return Te.current.useMemo(e,t)};j.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};j.useRef=function(e){return Te.current.useRef(e)};j.useState=function(e){return Te.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return Te.current.useTransition()};j.version="18.2.0";(function(e){e.exports=j})(l1);const go=a1(b),_u=o1({__proto__:null,default:go},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=b,I1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,P1=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O1={key:!0,ref:!0,__self:!0,__source:!0};function Dm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)x1.call(t,r)&&!O1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:I1,type:e,key:o,ref:a,props:i,_owner:P1.current}}_s.Fragment=C1;_s.jsx=Dm;_s.jsxs=Dm;(function(e){e.exports=_s})(s1);const T1=Di.Fragment,I=Di.jsx,K=Di.jsxs;var Eu={},Aa={},R1={get exports(){return Aa},set exports(e){Aa=e}},Be={},ku={},A1={get exports(){return ku},set exports(e){ku=e}},Mm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var U=T.length;T.push(M);e:for(;0<U;){var oe=U-1>>>1,he=T[oe];if(0<i(he,M))T[oe]=M,T[U]=he,U=oe;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],U=T.pop();if(U!==M){T[0]=U;e:for(var oe=0,he=T.length,Do=he>>>1;oe<Do;){var On=2*(oe+1)-1,_l=T[On],Tn=On+1,Mo=T[Tn];if(0>i(_l,U))Tn<he&&0>i(Mo,_l)?(T[oe]=Mo,T[Tn]=U,oe=Tn):(T[oe]=_l,T[On]=U,oe=On);else if(Tn<he&&0>i(Mo,U))T[oe]=Mo,T[Tn]=U,oe=Tn;else break e}}return M}function i(T,M){var U=T.sortIndex-M.sortIndex;return U!==0?U:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,d=3,g=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(T){if(y=!1,m(T),!v)if(n(l)!==null)v=!0,wl(E);else{var M=n(u);M!==null&&Sl(w,M.startTime-T)}}function E(T,M){v=!1,y&&(y=!1,p(R),R=-1),g=!0;var U=d;try{for(m(M),f=n(l);f!==null&&(!(f.expirationTime>M)||T&&!ye());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var he=oe(f.expirationTime<=M);M=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),m(M)}else r(l);f=n(l)}if(f!==null)var Do=!0;else{var On=n(u);On!==null&&Sl(w,On.startTime-M),Do=!1}return Do}finally{f=null,d=U,g=!1}}var C=!1,x=null,R=-1,D=5,N=-1;function ye(){return!(e.unstable_now()-N<D)}function ni(){if(x!==null){var T=e.unstable_now();N=T;var M=!0;try{M=x(!0,T)}finally{M?ri():(C=!1,x=null)}}else C=!1}var ri;if(typeof h=="function")ri=function(){h(ni)};else if(typeof MessageChannel<"u"){var jd=new MessageChannel,i1=jd.port2;jd.port1.onmessage=ni,ri=function(){i1.postMessage(null)}}else ri=function(){S(ni,0)};function wl(T){x=T,C||(C=!0,ri())}function Sl(T,M){R=S(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,wl(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var U=d;d=M;try{return T()}finally{d=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=d;d=T;try{return M()}finally{d=U}},e.unstable_scheduleCallback=function(T,M,U){var oe=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?oe+U:oe):U=oe,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=U+he,T={id:c++,callback:M,priorityLevel:T,startTime:U,expirationTime:he,sortIndex:-1},U>oe?(T.sortIndex=U,t(u,T),n(l)===null&&T===n(u)&&(y?(p(R),R=-1):y=!0,Sl(w,U-oe))):(T.sortIndex=he,t(l,T),v||g||(v=!0,wl(E))),T},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(T){var M=d;return function(){var U=d;d=M;try{return T.apply(this,arguments)}finally{d=U}}}})(Mm);(function(e){e.exports=Mm})(A1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=b,Fe=ku;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,Mi={};function tr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Mi[e]=t,e=0;e<t.length;e++)Um.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,N1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hd={},Wd={};function L1(e){return bu.call(Wd,e)?!0:bu.call(Hd,e)?!1:N1.test(e)?Wd[e]=!0:(Hd[e]=!0,!1)}function D1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M1(e,t,n,r){if(t===null||typeof t>"u"||D1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function of(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rf,of);_e[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rf,of);_e[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rf,of);_e[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function af(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M1(t,n,i,r)&&(n=null),r||i===null?L1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),sr=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),xu=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),Vd=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=Vd&&e[Vd]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,kl;function pi(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var bl=!1;function Il(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pi(e):""}function $1(e){switch(e.tag){case 5:return pi(e.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function Pu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case sr:return"Portal";case Iu:return"Profiler";case sf:return"StrictMode";case Cu:return"Suspense";case xu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fm:return(e.displayName||"Context")+".Consumer";case jm:return(e._context.displayName||"Context")+".Provider";case lf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uf:return t=e.displayName||null,t!==null?t:Pu(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Pu(e(t))}catch{}}return null}function U1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(t);case 8:return t===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j1(e){var t=Bm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=j1(e))}function Hm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ou(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wm(e,t){t=t.checked,t!=null&&af(e,"checked",t,!1)}function Tu(e,t){Wm(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ru(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ru(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ru(e,t,n){(t!=="number"||Na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Au(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(mi(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function Vm(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Km(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Km(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fo,Gm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F1=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){F1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function Ym(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function qm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ym(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var z1=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lu(e,t){if(t){if(z1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Du(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function cf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $u=null,br=null,Ir=null;function Qd(e){if(e=So(e)){if(typeof $u!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Cs(t),$u(e.stateNode,e.type,t))}}function Qm(e){br?Ir?Ir.push(e):Ir=[e]:br=e}function Jm(){if(br){var e=br,t=Ir;if(Ir=br=null,Qd(e),t)for(e=0;e<t.length;e++)Qd(t[e])}}function Xm(e,t){return e(t)}function Zm(){}var Cl=!1;function ev(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Xm(e,t,n)}finally{Cl=!1,(br!==null||Ir!==null)&&(Zm(),Jm())}}function Ui(e,t){var n=e.stateNode;if(n===null)return null;var r=Cs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Uu=!1;if(Pt)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Uu=!1}function B1(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var bi=!1,La=null,Da=!1,ju=null,H1={onError:function(e){bi=!0,La=e}};function W1(e,t,n,r,i,o,a,s,l){bi=!1,La=null,B1.apply(H1,arguments)}function V1(e,t,n,r,i,o,a,s,l){if(W1.apply(this,arguments),bi){if(bi){var u=La;bi=!1,La=null}else throw Error(k(198));Da||(Da=!0,ju=u)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jd(e){if(nr(e)!==e)throw Error(k(188))}function K1(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Jd(i),e;if(o===r)return Jd(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function nv(e){return e=K1(e),e!==null?rv(e):null}function rv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rv(e);if(t!==null)return t;e=e.sibling}return null}var iv=Fe.unstable_scheduleCallback,Xd=Fe.unstable_cancelCallback,G1=Fe.unstable_shouldYield,Y1=Fe.unstable_requestPaint,ae=Fe.unstable_now,q1=Fe.unstable_getCurrentPriorityLevel,ff=Fe.unstable_ImmediatePriority,ov=Fe.unstable_UserBlockingPriority,Ma=Fe.unstable_NormalPriority,Q1=Fe.unstable_LowPriority,av=Fe.unstable_IdlePriority,Es=null,pt=null;function J1(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:ew,X1=Math.log,Z1=Math.LN2;function ew(e){return e>>>=0,e===0?32:31-(X1(e)/Z1|0)|0}var zo=64,Bo=4194304;function vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $a(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=vi(s):(o&=a,o!==0&&(r=vi(o)))}else a=n&~i,a!==0?r=vi(a):o!==0&&(r=vi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),i=1<<n,r|=e[n],t&=~i;return r}function tw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-ot(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=tw(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Fu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sv(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function rw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function df(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function lv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uv,hf,cv,fv,dv,zu=!1,Ho=[],rn=null,on=null,an=null,ji=new Map,Fi=new Map,Kt=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=So(t),t!==null&&hf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ow(e,t,n,r,i){switch(t){case"focusin":return rn=ai(rn,e,t,n,r,i),!0;case"dragenter":return on=ai(on,e,t,n,r,i),!0;case"mouseover":return an=ai(an,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ji.set(o,ai(ji.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fi.set(o,ai(Fi.get(o)||null,e,t,n,r,i)),!0}return!1}function hv(e){var t=Mn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=tv(n),t!==null){e.blockedOn=t,dv(e.priority,function(){cv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mu=r,n.target.dispatchEvent(r),Mu=null}else return t=So(n),t!==null&&hf(t),e.blockedOn=n,!1;t.shift()}return!0}function eh(e,t,n){da(e)&&n.delete(t)}function aw(){zu=!1,rn!==null&&da(rn)&&(rn=null),on!==null&&da(on)&&(on=null),an!==null&&da(an)&&(an=null),ji.forEach(eh),Fi.forEach(eh)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,zu||(zu=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,aw)))}function zi(e){function t(i){return si(i,e)}if(0<Ho.length){si(Ho[0],e);for(var n=1;n<Ho.length;n++){var r=Ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&si(rn,e),on!==null&&si(on,e),an!==null&&si(an,e),ji.forEach(t),Fi.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&Kt.shift()}var Cr=$t.ReactCurrentBatchConfig,Ua=!0;function sw(e,t,n,r){var i=B,o=Cr.transition;Cr.transition=null;try{B=1,pf(e,t,n,r)}finally{B=i,Cr.transition=o}}function lw(e,t,n,r){var i=B,o=Cr.transition;Cr.transition=null;try{B=4,pf(e,t,n,r)}finally{B=i,Cr.transition=o}}function pf(e,t,n,r){if(Ua){var i=Bu(e,t,n,r);if(i===null)$l(e,t,r,ja,n),Zd(e,r);else if(ow(i,e,t,n,r))r.stopPropagation();else if(Zd(e,r),t&4&&-1<iw.indexOf(e)){for(;i!==null;){var o=So(i);if(o!==null&&uv(o),o=Bu(e,t,n,r),o===null&&$l(e,t,r,ja,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var ja=null;function Bu(e,t,n,r){if(ja=null,e=cf(r),e=Mn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function pv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case ff:return 1;case ov:return 4;case Ma:case Q1:return 16;case av:return 536870912;default:return 16}default:return 16}}var Zt=null,mf=null,ha=null;function mv(){if(ha)return ha;var e,t=mf,n=t.length,r,i="value"in Zt?Zt.value:Zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ha=i.slice(e,1<r?1-r:void 0)}function pa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function th(){return!1}function He(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wo:th,this.isPropagationStopped=th,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=He(Gr),wo=ne({},Gr,{view:0,detail:0}),uw=He(wo),Pl,Ol,li,ks=ne({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Pl=e.screenX-li.screenX,Ol=e.screenY-li.screenY):Ol=Pl=0,li=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),nh=He(ks),cw=ne({},ks,{dataTransfer:0}),fw=He(cw),dw=ne({},wo,{relatedTarget:0}),Tl=He(dw),hw=ne({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),pw=He(hw),mw=ne({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vw=He(mw),gw=ne({},Gr,{data:0}),rh=He(gw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _w(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sw[e])?!!t[e]:!1}function gf(){return _w}var Ew=ne({},wo,{key:function(e){if(e.key){var t=yw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ww[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(e){return e.type==="keypress"?pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kw=He(Ew),bw=ne({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=He(bw),Iw=ne({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),Cw=He(Iw),xw=ne({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=He(xw),Ow=ne({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tw=He(Ow),Rw=[9,13,27,32],yf=Pt&&"CompositionEvent"in window,Ii=null;Pt&&"documentMode"in document&&(Ii=document.documentMode);var Aw=Pt&&"TextEvent"in window&&!Ii,vv=Pt&&(!yf||Ii&&8<Ii&&11>=Ii),oh=String.fromCharCode(32),ah=!1;function gv(e,t){switch(e){case"keyup":return Rw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Nw(e,t){switch(e){case"compositionend":return yv(t);case"keypress":return t.which!==32?null:(ah=!0,oh);case"textInput":return e=t.data,e===oh&&ah?null:e;default:return null}}function Lw(e,t){if(ur)return e==="compositionend"||!yf&&gv(e,t)?(e=mv(),ha=mf=Zt=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vv&&t.locale!=="ko"?null:t.data;default:return null}}var Dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dw[e.type]:t==="textarea"}function wv(e,t,n,r){Qm(r),t=Fa(t,"onChange"),0<t.length&&(n=new vf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ci=null,Bi=null;function Mw(e){Tv(e,0)}function bs(e){var t=dr(e);if(Hm(t))return e}function $w(e,t){if(e==="change")return t}var Sv=!1;if(Pt){var Rl;if(Pt){var Al="oninput"in document;if(!Al){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),Al=typeof lh.oninput=="function"}Rl=Al}else Rl=!1;Sv=Rl&&(!document.documentMode||9<document.documentMode)}function uh(){Ci&&(Ci.detachEvent("onpropertychange",_v),Bi=Ci=null)}function _v(e){if(e.propertyName==="value"&&bs(Bi)){var t=[];wv(t,Bi,e,cf(e)),ev(Mw,t)}}function Uw(e,t,n){e==="focusin"?(uh(),Ci=t,Bi=n,Ci.attachEvent("onpropertychange",_v)):e==="focusout"&&uh()}function jw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(Bi)}function Fw(e,t){if(e==="click")return bs(t)}function zw(e,t){if(e==="input"||e==="change")return bs(t)}function Bw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Bw;function Hi(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bu.call(t,i)||!st(e[i],t[i]))return!1}return!0}function ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fh(e,t){var n=ch(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ch(n)}}function Ev(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ev(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kv(){for(var e=window,t=Na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Na(e.document)}return t}function wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hw(e){var t=kv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ev(n.ownerDocument.documentElement,n)){if(r!==null&&wf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fh(n,o);var a=fh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ww=Pt&&"documentMode"in document&&11>=document.documentMode,cr=null,Hu=null,xi=null,Wu=!1;function dh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||cr==null||cr!==Na(r)||(r=cr,"selectionStart"in r&&wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Hi(xi,r)||(xi=r,r=Fa(Hu,"onSelect"),0<r.length&&(t=new vf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function Vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Nl={},bv={};Pt&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Is(e){if(Nl[e])return Nl[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bv)return Nl[e]=t[n];return e}var Iv=Is("animationend"),Cv=Is("animationiteration"),xv=Is("animationstart"),Pv=Is("transitionend"),Ov=new Map,hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,t){Ov.set(e,t),tr(t,[e])}for(var Ll=0;Ll<hh.length;Ll++){var Dl=hh[Ll],Vw=Dl.toLowerCase(),Kw=Dl[0].toUpperCase()+Dl.slice(1);In(Vw,"on"+Kw)}In(Iv,"onAnimationEnd");In(Cv,"onAnimationIteration");In(xv,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Pv,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function ph(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V1(r,t,void 0,e),e.currentTarget=null}function Tv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;ph(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;ph(i,s,u),o=l}}}if(Da)throw e=ju,Da=!1,ju=null,e}function Y(e,t){var n=t[qu];n===void 0&&(n=t[qu]=new Set);var r=e+"__bubble";n.has(r)||(Rv(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),Rv(n,e,r,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function Wi(e){if(!e[Ko]){e[Ko]=!0,Um.forEach(function(n){n!=="selectionchange"&&(Gw.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,Ml("selectionchange",!1,t))}}function Rv(e,t,n,r){switch(pv(t)){case 1:var i=sw;break;case 4:i=lw;break;default:i=pf}n=i.bind(null,t,n,e),i=void 0,!Uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Mn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}ev(function(){var u=o,c=cf(n),f=[];e:{var d=Ov.get(e);if(d!==void 0){var g=vf,v=e;switch(e){case"keypress":if(pa(n)===0)break e;case"keydown":case"keyup":g=kw;break;case"focusin":v="focus",g=Tl;break;case"focusout":v="blur",g=Tl;break;case"beforeblur":case"afterblur":g=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cw;break;case Iv:case Cv:case xv:g=pw;break;case Pv:g=Pw;break;case"scroll":g=uw;break;case"wheel":g=Tw;break;case"copy":case"cut":case"paste":g=vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ih}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ui(h,p),w!=null&&y.push(Vi(h,w,m)))),S)break;h=h.return}0<y.length&&(d=new g(d,v,null,n,c),f.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Mu&&(v=n.relatedTarget||n.fromElement)&&(Mn(v)||v[Ot]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Mn(v):null,v!==null&&(S=nr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=nh,w="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=ih,w="onPointerLeave",p="onPointerEnter",h="pointer"),S=g==null?d:dr(g),m=v==null?d:dr(v),d=new y(w,h+"leave",g,n,c),d.target=S,d.relatedTarget=m,w=null,Mn(c)===u&&(y=new y(p,h+"enter",v,n,c),y.target=m,y.relatedTarget=S,w=y),S=w,g&&v)t:{for(y=g,p=v,h=0,m=y;m;m=or(m))h++;for(m=0,w=p;w;w=or(w))m++;for(;0<h-m;)y=or(y),h--;for(;0<m-h;)p=or(p),m--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=or(y),p=or(p)}y=null}else y=null;g!==null&&mh(f,d,g,y,!1),v!==null&&S!==null&&mh(f,S,v,y,!0)}}e:{if(d=u?dr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var E=$w;else if(sh(d))if(Sv)E=zw;else{E=jw;var C=Uw}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Fw);if(E&&(E=E(e,u))){wv(f,E,n,c);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ru(d,"number",d.value)}switch(C=u?dr(u):window,e){case"focusin":(sh(C)||C.contentEditable==="true")&&(cr=C,Hu=u,xi=null);break;case"focusout":xi=Hu=cr=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,dh(f,n,c);break;case"selectionchange":if(Ww)break;case"keydown":case"keyup":dh(f,n,c)}var x;if(yf)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ur?gv(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(vv&&n.locale!=="ko"&&(ur||R!=="onCompositionStart"?R==="onCompositionEnd"&&ur&&(x=mv()):(Zt=c,mf="value"in Zt?Zt.value:Zt.textContent,ur=!0)),C=Fa(u,R),0<C.length&&(R=new rh(R,e,null,n,c),f.push({event:R,listeners:C}),x?R.data=x:(x=yv(n),x!==null&&(R.data=x)))),(x=Aw?Nw(e,n):Lw(e,n))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(c=new rh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}Tv(f,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ui(e,n),o!=null&&r.unshift(Vi(e,o,i)),o=Ui(e,t),o!=null&&r.push(Vi(e,o,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Ui(n,o),l!=null&&a.unshift(Vi(n,l,s))):i||(l=Ui(n,o),l!=null&&a.push(Vi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Yw=/\r\n?/g,qw=/\u0000|\uFFFD/g;function vh(e){return(typeof e=="string"?e:""+e).replace(Yw,`
`).replace(qw,"")}function Go(e,t,n){if(t=vh(t),vh(e)!==t&&n)throw Error(k(425))}function za(){}var Vu=null,Ku=null;function Gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(e){return gh.resolve(null).then(e).catch(Xw)}:Yu;function Xw(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Yr,Ki="__reactProps$"+Yr,Ot="__reactContainer$"+Yr,qu="__reactEvents$"+Yr,Zw="__reactListeners$"+Yr,eS="__reactHandles$"+Yr;function Mn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yh(e);e!==null;){if(n=e[ft])return n;e=yh(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[ft]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Cs(e){return e[Ki]||null}var Qu=[],hr=-1;function Cn(e){return{current:e}}function Q(e){0>hr||(e.current=Qu[hr],Qu[hr]=null,hr--)}function G(e,t){hr++,Qu[hr]=e.current,e.current=t}var yn={},Ce=Cn(yn),Le=Cn(!1),Wn=yn;function Mr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Ba(){Q(Le),Q(Ce)}function wh(e,t,n){if(Ce.current!==yn)throw Error(k(168));G(Ce,t),G(Le,n)}function Av(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,U1(e)||"Unknown",i));return ne({},n,r)}function Ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Wn=Ce.current,G(Ce,e),G(Le,Le.current),!0}function Sh(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Av(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,Q(Le),Q(Ce),G(Ce,e)):Q(Le),G(Le,n)}var _t=null,xs=!1,jl=!1;function Nv(e){_t===null?_t=[e]:_t.push(e)}function tS(e){xs=!0,Nv(e)}function xn(){if(!jl&&_t!==null){jl=!0;var e=0,t=B;try{var n=_t;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,xs=!1}catch(i){throw _t!==null&&(_t=_t.slice(e+1)),iv(ff,xn),i}finally{B=t,jl=!1}}return null}var pr=[],mr=0,Wa=null,Va=0,Ke=[],Ge=0,Vn=null,Et=1,kt="";function Rn(e,t){pr[mr++]=Va,pr[mr++]=Wa,Wa=e,Va=t}function Lv(e,t,n){Ke[Ge++]=Et,Ke[Ge++]=kt,Ke[Ge++]=Vn,Vn=e;var r=Et;e=kt;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var o=32-ot(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Et=1<<32-ot(t)+i|n<<i|r,kt=o+e}else Et=1<<o|n<<i|r,kt=e}function Sf(e){e.return!==null&&(Rn(e,1),Lv(e,1,0))}function _f(e){for(;e===Wa;)Wa=pr[--mr],pr[mr]=null,Va=pr[--mr],pr[mr]=null;for(;e===Vn;)Vn=Ke[--Ge],Ke[Ge]=null,kt=Ke[--Ge],Ke[Ge]=null,Et=Ke[--Ge],Ke[Ge]=null}var je=null,Ue=null,Z=!1,nt=null;function Dv(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _h(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ue=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Et,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ue=null,!0):!1;default:return!1}}function Ju(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xu(e){if(Z){var t=Ue;if(t){var n=t;if(!_h(e,t)){if(Ju(e))throw Error(k(418));t=sn(n.nextSibling);var r=je;t&&_h(e,t)?Dv(r,n):(e.flags=e.flags&-4097|2,Z=!1,je=e)}}else{if(Ju(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,je=e}}}function Eh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Yo(e){if(e!==je)return!1;if(!Z)return Eh(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gu(e.type,e.memoizedProps)),t&&(t=Ue)){if(Ju(e))throw Mv(),Error(k(418));for(;t;)Dv(e,t),t=sn(t.nextSibling)}if(Eh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=je?sn(e.stateNode.nextSibling):null;return!0}function Mv(){for(var e=Ue;e;)e=sn(e.nextSibling)}function $r(){Ue=je=null,Z=!1}function Ef(e){nt===null?nt=[e]:nt.push(e)}var nS=$t.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ka=Cn(null),Ga=null,vr=null,kf=null;function bf(){kf=vr=Ga=null}function If(e){var t=Ka.current;Q(Ka),e._currentValue=t}function Zu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Ga=e,kf=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(kf!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(Ga===null)throw Error(k(308));vr=e,Ga.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var $n=null;function Cf(e){$n===null?$n=[e]:$n.push(e)}function $v(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function xf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,Cf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function ma(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,df(e,n)}}function kh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ya(e,t,n,r){var i=e.updateQueue;Vt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var d=s.lane,g=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(d=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break e;f=ne({},f,d);break e;case 2:Vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else g={eventTime:g,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gn|=a,e.lanes=a,e.memoizedState=f}}function bh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var jv=new $m.Component().refs;function ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ps={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=cn(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(at(t,e,i,r),ma(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=cn(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(at(t,e,i,r),ma(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=cn(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(at(t,e,r,n),ma(t,e,r))}};function Ih(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,o):!0}function Fv(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=Qe(o):(i=De(t)?Wn:Ce.current,r=t.contextTypes,o=(r=r!=null)?Mr(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ch(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function tc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=jv,xf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Qe(o):(o=De(t)?Wn:Ce.current,i.context=Mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ec(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ps.enqueueReplaceState(i,i.state,null),Ya(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===jv&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function qo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xh(e){var t=e._init;return t(e._payload)}function zv(e){function t(p,h){if(e){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=fn(p,h),p.index=0,p.sibling=null,p}function o(p,h,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,h,m,w){return h===null||h.tag!==6?(h=Kl(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,w){var E=m.type;return E===lr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Wt&&xh(E)===h.type)?(w=i(h,m.props),w.ref=ui(p,h,m),w.return=p,w):(w=_a(m.type,m.key,m.props,null,p.mode,w),w.ref=ui(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Gl(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,E){return h===null||h.tag!==7?(h=Bn(m,p.mode,w,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Kl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Uo:return m=_a(h.type,h.key,h.props,null,p.mode,m),m.ref=ui(p,null,h),m.return=p,m;case sr:return h=Gl(h,p.mode,m),h.return=p,h;case Wt:var w=h._init;return f(p,w(h._payload),m)}if(mi(h)||ii(h))return h=Bn(h,p.mode,m,null),h.return=p,h;qo(p,h)}return null}function d(p,h,m,w){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:return m.key===E?l(p,h,m,w):null;case sr:return m.key===E?u(p,h,m,w):null;case Wt:return E=m._init,d(p,h,E(m._payload),w)}if(mi(m)||ii(m))return E!==null?null:c(p,h,m,w,null);qo(p,m)}return null}function g(p,h,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,s(h,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Uo:return p=p.get(w.key===null?m:w.key)||null,l(h,p,w,E);case sr:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,E);case Wt:var C=w._init;return g(p,h,m,C(w._payload),E)}if(mi(w)||ii(w))return p=p.get(m)||null,c(h,p,w,E,null);qo(h,w)}return null}function v(p,h,m,w){for(var E=null,C=null,x=h,R=h=0,D=null;x!==null&&R<m.length;R++){x.index>R?(D=x,x=null):D=x.sibling;var N=d(p,x,m[R],w);if(N===null){x===null&&(x=D);break}e&&x&&N.alternate===null&&t(p,x),h=o(N,h,R),C===null?E=N:C.sibling=N,C=N,x=D}if(R===m.length)return n(p,x),Z&&Rn(p,R),E;if(x===null){for(;R<m.length;R++)x=f(p,m[R],w),x!==null&&(h=o(x,h,R),C===null?E=x:C.sibling=x,C=x);return Z&&Rn(p,R),E}for(x=r(p,x);R<m.length;R++)D=g(x,p,R,m[R],w),D!==null&&(e&&D.alternate!==null&&x.delete(D.key===null?R:D.key),h=o(D,h,R),C===null?E=D:C.sibling=D,C=D);return e&&x.forEach(function(ye){return t(p,ye)}),Z&&Rn(p,R),E}function y(p,h,m,w){var E=ii(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var C=E=null,x=h,R=h=0,D=null,N=m.next();x!==null&&!N.done;R++,N=m.next()){x.index>R?(D=x,x=null):D=x.sibling;var ye=d(p,x,N.value,w);if(ye===null){x===null&&(x=D);break}e&&x&&ye.alternate===null&&t(p,x),h=o(ye,h,R),C===null?E=ye:C.sibling=ye,C=ye,x=D}if(N.done)return n(p,x),Z&&Rn(p,R),E;if(x===null){for(;!N.done;R++,N=m.next())N=f(p,N.value,w),N!==null&&(h=o(N,h,R),C===null?E=N:C.sibling=N,C=N);return Z&&Rn(p,R),E}for(x=r(p,x);!N.done;R++,N=m.next())N=g(x,p,R,N.value,w),N!==null&&(e&&N.alternate!==null&&x.delete(N.key===null?R:N.key),h=o(N,h,R),C===null?E=N:C.sibling=N,C=N);return e&&x.forEach(function(ni){return t(p,ni)}),Z&&Rn(p,R),E}function S(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:e:{for(var E=m.key,C=h;C!==null;){if(C.key===E){if(E=m.type,E===lr){if(C.tag===7){n(p,C.sibling),h=i(C,m.props.children),h.return=p,p=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Wt&&xh(E)===C.type){n(p,C.sibling),h=i(C,m.props),h.ref=ui(p,C,m),h.return=p,p=h;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===lr?(h=Bn(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=_a(m.type,m.key,m.props,null,p.mode,w),w.ref=ui(p,h,m),w.return=p,p=w)}return a(p);case sr:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Gl(m,p.mode,w),h.return=p,p=h}return a(p);case Wt:return C=m._init,S(p,h,C(m._payload),w)}if(mi(m))return v(p,h,m,w);if(ii(m))return y(p,h,m,w);qo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Kl(m,p.mode,w),h.return=p,p=h),a(p)):n(p,h)}return S}var Ur=zv(!0),Bv=zv(!1),_o={},mt=Cn(_o),Gi=Cn(_o),Yi=Cn(_o);function Un(e){if(e===_o)throw Error(k(174));return e}function Pf(e,t){switch(G(Yi,t),G(Gi,e),G(mt,_o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nu(t,e)}Q(mt),G(mt,t)}function jr(){Q(mt),Q(Gi),Q(Yi)}function Hv(e){Un(Yi.current);var t=Un(mt.current),n=Nu(t,e.type);t!==n&&(G(Gi,e),G(mt,n))}function Of(e){Gi.current===e&&(Q(mt),Q(Gi))}var ee=Cn(0);function qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Tf(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var va=$t.ReactCurrentDispatcher,zl=$t.ReactCurrentBatchConfig,Kn=0,te=null,le=null,pe=null,Qa=!1,Pi=!1,qi=0,rS=0;function Ee(){throw Error(k(321))}function Rf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Af(e,t,n,r,i,o){if(Kn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?sS:lS,e=n(r,i),Pi){o=0;do{if(Pi=!1,qi=0,25<=o)throw Error(k(301));o+=1,pe=le=null,t.updateQueue=null,va.current=uS,e=n(r,i)}while(Pi)}if(va.current=Ja,t=le!==null&&le.next!==null,Kn=0,pe=le=te=null,Qa=!1,t)throw Error(k(300));return e}function Nf(){var e=qi!==0;return qi=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function Je(){if(le===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function Qi(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Kn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,te.lanes|=c,Gn|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,st(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,Gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);st(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wv(){}function Vv(e,t){var n=te,r=Je(),i=t(),o=!st(r.memoizedState,i);if(o&&(r.memoizedState=i,Ne=!0),r=r.queue,Lf(Yv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Ji(9,Gv.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(k(349));Kn&30||Kv(n,t,i)}return i}function Kv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gv(e,t,n,r){t.value=n,t.getSnapshot=r,qv(t)&&Qv(e)}function Yv(e,t,n){return n(function(){qv(t)&&Qv(e)})}function qv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Qv(e){var t=Tt(e,1);t!==null&&at(t,e,1,-1)}function Ph(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=aS.bind(null,te,e),[t.memoizedState,e]}function Ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jv(){return Je().memoizedState}function ga(e,t,n,r){var i=ct();te.flags|=e,i.memoizedState=Ji(1|t,n,void 0,r===void 0?null:r)}function Os(e,t,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(le!==null){var a=le.memoizedState;if(o=a.destroy,r!==null&&Rf(r,a.deps)){i.memoizedState=Ji(t,n,o,r);return}}te.flags|=e,i.memoizedState=Ji(1|t,n,o,r)}function Oh(e,t){return ga(8390656,8,e,t)}function Lf(e,t){return Os(2048,8,e,t)}function Xv(e,t){return Os(4,2,e,t)}function Zv(e,t){return Os(4,4,e,t)}function eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tg(e,t,n){return n=n!=null?n.concat([e]):null,Os(4,4,eg.bind(null,t,e),n)}function Df(){}function ng(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rg(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ig(e,t,n){return Kn&21?(st(n,t)||(n=sv(),te.lanes|=n,Gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function iS(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{B=n,zl.transition=r}}function og(){return Je().memoizedState}function oS(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ag(e))sg(t,n);else if(n=$v(e,t,n,r),n!==null){var i=Oe();at(n,e,r,i),lg(n,t,r)}}function aS(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ag(e))sg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,st(s,a)){var l=t.interleaved;l===null?(i.next=i,Cf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=$v(e,t,i,r),n!==null&&(i=Oe(),at(n,e,r,i),lg(n,t,r))}}function ag(e){var t=e.alternate;return e===te||t!==null&&t===te}function sg(e,t){Pi=Qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,df(e,n)}}var Ja={readContext:Qe,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},sS={readContext:Qe,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Oh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ga(4194308,4,eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return ga(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oS.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Ph,useDebugValue:Df,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Ph(!1),t=e[0];return e=iS.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=ct();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ve===null)throw Error(k(349));Kn&30||Kv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Oh(Yv.bind(null,r,o,e),[e]),r.flags|=2048,Ji(9,Gv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=ve.identifierPrefix;if(Z){var n=kt,r=Et;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lS={readContext:Qe,useCallback:ng,useContext:Qe,useEffect:Lf,useImperativeHandle:tg,useInsertionEffect:Xv,useLayoutEffect:Zv,useMemo:rg,useReducer:Bl,useRef:Jv,useState:function(){return Bl(Qi)},useDebugValue:Df,useDeferredValue:function(e){var t=Je();return ig(t,le.memoizedState,e)},useTransition:function(){var e=Bl(Qi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Wv,useSyncExternalStore:Vv,useId:og,unstable_isNewReconciler:!1},uS={readContext:Qe,useCallback:ng,useContext:Qe,useEffect:Lf,useImperativeHandle:tg,useInsertionEffect:Xv,useLayoutEffect:Zv,useMemo:rg,useReducer:Hl,useRef:Jv,useState:function(){return Hl(Qi)},useDebugValue:Df,useDeferredValue:function(e){var t=Je();return le===null?t.memoizedState=e:ig(t,le.memoizedState,e)},useTransition:function(){var e=Hl(Qi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Wv,useSyncExternalStore:Vv,useId:og,unstable_isNewReconciler:!1};function Fr(e,t){try{var n="",r=t;do n+=$1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cS=typeof WeakMap=="function"?WeakMap:Map;function ug(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Za||(Za=!0,dc=r),nc(e,t)},n}function cg(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){nc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){nc(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Th(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bS.bind(null,e,t,n),t.then(e,e))}function Rh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ah(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var fS=$t.ReactCurrentOwner,Ne=!1;function Pe(e,t,n,r){t.child=e===null?Bv(t,null,n,r):Ur(t,e.child,n,r)}function Nh(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=Af(e,t,n,r,o,i),n=Nf(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(Z&&n&&Sf(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Lh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Hf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fg(e,t,o,r,i)):(e=_a(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(a,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function fg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hi(o,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return rc(e,t,n,r,i)}function dg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(yr,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(yr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(yr,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(yr,$e),$e|=r;return Pe(e,t,i,n),t.child}function hg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rc(e,t,n,r,i){var o=De(n)?Wn:Ce.current;return o=Mr(t,o),xr(t,i),n=Af(e,t,n,r,o,i),r=Nf(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(Z&&r&&Sf(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Dh(e,t,n,r,i){if(De(n)){var o=!0;Ha(t)}else o=!1;if(xr(t,i),t.stateNode===null)ya(e,t),Fv(t,n,r),tc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=De(n)?Wn:Ce.current,u=Mr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ch(t,a,r,u),Vt=!1;var d=t.memoizedState;a.state=d,Ya(t,r,a,i),l=t.memoizedState,s!==r||d!==l||Le.current||Vt?(typeof c=="function"&&(ec(t,n,c,r),l=t.memoizedState),(s=Vt||Ih(t,n,s,r,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Uv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:et(t.type,s),a.props=u,f=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=De(n)?Wn:Ce.current,l=Mr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Ch(t,a,r,l),Vt=!1,d=t.memoizedState,a.state=d,Ya(t,r,a,i);var v=t.memoizedState;s!==f||d!==v||Le.current||Vt?(typeof g=="function"&&(ec(t,n,g,r),v=t.memoizedState),(u=Vt||Ih(t,n,u,r,d,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ic(e,t,n,r,o,i)}function ic(e,t,n,r,i,o){hg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Sh(t,n,!1),Rt(e,t,o);r=t.stateNode,fS.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,s,o)):Pe(e,t,s,o),t.memoizedState=r.state,i&&Sh(t,n,!0),t.child}function pg(e){var t=e.stateNode;t.pendingContext?wh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wh(e,t.context,!1),Pf(e,t.containerInfo)}function Mh(e,t,n,r,i){return $r(),Ef(i),t.flags|=256,Pe(e,t,n,r),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function mg(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(ee,i&1),e===null)return Xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=As(a,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ac(n),t.memoizedState=oc,e):Mf(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return dS(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=fn(s,o):(o=Bn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ac(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=oc,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mf(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qo(e,t,n,r){return r!==null&&Ef(r),Ur(t,e.child,null,n),e=Mf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dS(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(k(422))),Qo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=As({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ur(t,e.child,null,a),t.child.memoizedState=ac(a),t.memoizedState=oc,o);if(!(t.mode&1))return Qo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=Wl(o,r,void 0),Qo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ne||s){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tt(e,i),at(r,e,i,-1))}return Bf(),r=Wl(Error(k(421))),Qo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=IS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=sn(i.nextSibling),je=t,Z=!0,nt=null,e!==null&&(Ke[Ge++]=Et,Ke[Ge++]=kt,Ke[Ge++]=Vn,Et=e.id,kt=e.overflow,Vn=t),t=Mf(t,r.children),t.flags|=4096,t)}function $h(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zu(e.return,t,n)}function Vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$h(e,n,t);else if(e.tag===19)$h(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hS(e,t,n){switch(t.tag){case 3:pg(t),$r();break;case 5:Hv(t);break;case 1:De(t.type)&&Ha(t);break;case 4:Pf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Ka,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?mg(e,t,n):(G(ee,ee.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);G(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,dg(e,t,n)}return Rt(e,t,n)}var gg,sc,yg,wg;gg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sc=function(){};yg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Un(mt.current);var o=null;switch(n){case"input":i=Ou(e,i),r=Ou(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=Au(e,i),r=Au(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=za)}Lu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wg=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pS(e,t,n){var r=t.pendingProps;switch(_f(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return De(t.type)&&Ba(),ke(t),null;case 3:return r=t.stateNode,jr(),Q(Le),Q(Ce),Tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(mc(nt),nt=null))),sc(e,t),ke(t),null;case 5:Of(t);var i=Un(Yi.current);if(n=t.type,e!==null&&t.stateNode!=null)yg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ke(t),null}if(e=Un(mt.current),Yo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ft]=t,r[Ki]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<gi.length;i++)Y(gi[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Kd(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":Yd(r,o),Y("invalid",r)}Lu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Go(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Go(r.textContent,s,e),i=["children",""+s]):Mi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":jo(r),Gd(r,o,!0);break;case"textarea":jo(r),qd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=za)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Km(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ft]=t,e[Ki]=r,gg(e,t,!1,!1),t.stateNode=e;e:{switch(a=Du(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<gi.length;i++)Y(gi[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":Kd(e,r),i=Ou(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Yd(e,r),i=Au(e,r),Y("invalid",e);break;default:i=r}Lu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?qm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$i(e,l):typeof l=="number"&&$i(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Y("scroll",e):l!=null&&af(e,o,l,a))}switch(n){case"input":jo(e),Gd(e,r,!1);break;case"textarea":jo(e),qd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kr(e,!!r.multiple,o,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)wg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Un(Yi.current),Un(mt.current),Yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return ke(t),null;case 13:if(Q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&t.mode&1&&!(t.flags&128))Mv(),$r(),t.flags|=98560,o=!1;else if(o=Yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[ft]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),o=!1}else nt!==null&&(mc(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):Bf())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return jr(),sc(e,t),e===null&&Wi(t.stateNode.containerInfo),ke(t),null;case 10:return If(t.type._context),ke(t),null;case 17:return De(t.type)&&Ba(),ke(t),null;case 19:if(Q(ee),o=t.memoizedState,o===null)return ke(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ci(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qa(e),a!==null){for(t.flags|=128,ci(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>zr&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=qa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Z)return ke(t),null}else 2*ae()-o.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ee.current,G(ee,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return zf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function mS(e,t){switch(_f(t),t.tag){case 1:return De(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),Q(Le),Q(Ce),Tf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Of(t),null;case 13:if(Q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(ee),null;case 4:return jr(),null;case 10:return If(t.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var Jo=!1,Ie=!1,vS=typeof WeakSet=="function"?WeakSet:Set,O=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function lc(e,t,n){try{n()}catch(r){re(e,t,r)}}var Uh=!1;function gS(e,t){if(Vu=Ua,e=kv(),wf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++c===r&&(l=a),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:e,selectionRange:n},Ua=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:et(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=Uh,Uh=!1,v}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&lc(t,n,o)}i=i.next}while(i!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sg(e){var t=e.alternate;t!==null&&(e.alternate=null,Sg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[Ki],delete t[qu],delete t[Zw],delete t[eS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _g(e){return e.tag===5||e.tag===3||e.tag===4}function jh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=za));else if(r!==4&&(e=e.child,e!==null))for(cc(e,t,n),e=e.sibling;e!==null;)cc(e,t,n),e=e.sibling}function fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}var we=null,tt=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Eg(e,t,n),n=n.sibling}function Eg(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:Ie||gr(n,t);case 6:var r=we,i=tt;we=null,Ft(e,t,n),we=r,tt=i,we!==null&&(tt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(tt?(e=we,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),zi(e)):Ul(we,n.stateNode));break;case 4:r=we,i=tt,we=n.stateNode.containerInfo,tt=!0,Ft(e,t,n),we=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&lc(n,t,a),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!Ie&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Ft(e,t,n),Ie=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vS),t.forEach(function(r){var i=CS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,tt=!1;break e;case 3:we=s.stateNode.containerInfo,tt=!0;break e;case 4:we=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(we===null)throw Error(k(160));Eg(o,a,i),we=null,tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kg(t,e),t=t.sibling}function kg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ut(e),r&4){try{Oi(3,e,e.return),Ts(3,e)}catch(y){re(e,e.return,y)}try{Oi(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Ze(t,e),ut(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Ze(t,e),ut(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{$i(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Wm(i,o),Du(s,a);var u=Du(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?qm(i,f):c==="dangerouslySetInnerHTML"?Gm(i,f):c==="children"?$i(i,f):af(i,c,f,u)}switch(s){case"input":Tu(i,o);break;case"textarea":Vm(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?kr(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?kr(i,!!o.multiple,o.defaultValue,!0):kr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ki]=o}catch(y){re(e,e.return,y)}}break;case 6:if(Ze(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){re(e,e.return,y)}}break;case 3:if(Ze(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Ze(t,e),ut(e);break;case 13:Ze(t,e),ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jf=ae())),r&4&&Fh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||c,Ze(t,e),Ie=u):Ze(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(d=O,g=d.child,d.tag){case 0:case 11:case 14:case 15:Oi(4,d,d.return);break;case 1:gr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:gr(d,d.return);break;case 22:if(d.memoizedState!==null){Bh(f);continue}}g!==null?(g.return=d,O=g):Bh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Ym("display",a))}catch(y){re(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){re(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ze(t,e),ut(e),r&4&&Fh(e);break;case 21:break;default:Ze(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_g(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var o=jh(e);fc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=jh(e);cc(e,s,a);break;default:throw Error(k(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yS(e,t,n){O=e,bg(e)}function bg(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Jo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ie;s=Jo;var u=Ie;if(Jo=a,(Ie=l)&&!u)for(O=i;O!==null;)a=O,l=a.child,a.tag===22&&a.memoizedState!==null?Hh(i):l!==null?(l.return=a,O=l):Hh(i);for(;o!==null;)O=o,bg(o),o=o.sibling;O=i,Jo=s,Ie=u}zh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):zh(e)}}function zh(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ie||t.flags&512&&uc(t)}catch(d){re(t,t.return,d)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Bh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Hh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ts(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var o=t.return;try{uc(t)}catch(l){re(t,o,l)}break;case 5:var a=t.return;try{uc(t)}catch(l){re(t,a,l)}}}catch(l){re(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var wS=Math.ceil,Xa=$t.ReactCurrentDispatcher,$f=$t.ReactCurrentOwner,qe=$t.ReactCurrentBatchConfig,z=0,ve=null,se=null,Se=0,$e=0,yr=Cn(0),ue=0,Xi=null,Gn=0,Rs=0,Uf=0,Ti=null,Ae=null,jf=0,zr=1/0,St=null,Za=!1,dc=null,un=null,Xo=!1,en=null,es=0,Ri=0,hc=null,wa=-1,Sa=0;function Oe(){return z&6?ae():wa!==-1?wa:wa=ae()}function cn(e){return e.mode&1?z&2&&Se!==0?Se&-Se:nS.transition!==null?(Sa===0&&(Sa=sv()),Sa):(e=B,e!==0||(e=window.event,e=e===void 0?16:pv(e.type)),e):1}function at(e,t,n,r){if(50<Ri)throw Ri=0,hc=null,Error(k(185));yo(e,n,r),(!(z&2)||e!==ve)&&(e===ve&&(!(z&2)&&(Rs|=n),ue===4&&Gt(e,Se)),Me(e,r),n===1&&z===0&&!(t.mode&1)&&(zr=ae()+500,xs&&xn()))}function Me(e,t){var n=e.callbackNode;nw(e,t);var r=$a(e,e===ve?Se:0);if(r===0)n!==null&&Xd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xd(n),t===1)e.tag===0?tS(Wh.bind(null,e)):Nv(Wh.bind(null,e)),Jw(function(){!(z&6)&&xn()}),n=null;else{switch(lv(r)){case 1:n=ff;break;case 4:n=ov;break;case 16:n=Ma;break;case 536870912:n=av;break;default:n=Ma}n=Ag(n,Ig.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ig(e,t){if(wa=-1,Sa=0,z&6)throw Error(k(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=$a(e,e===ve?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ts(e,r);else{t=r;var i=z;z|=2;var o=xg();(ve!==e||Se!==t)&&(St=null,zr=ae()+500,zn(e,t));do try{ES();break}catch(s){Cg(e,s)}while(1);bf(),Xa.current=o,z=i,se!==null?t=0:(ve=null,Se=0,t=ue)}if(t!==0){if(t===2&&(i=Fu(e),i!==0&&(r=i,t=pc(e,i))),t===1)throw n=Xi,zn(e,0),Gt(e,r),Me(e,ae()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!SS(i)&&(t=ts(e,r),t===2&&(o=Fu(e),o!==0&&(r=o,t=pc(e,o))),t===1))throw n=Xi,zn(e,0),Gt(e,r),Me(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:An(e,Ae,St);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=jf+500-ae(),10<t)){if($a(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yu(An.bind(null,e,Ae,St),t);break}An(e,Ae,St);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ot(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wS(r/1960))-r,10<r){e.timeoutHandle=Yu(An.bind(null,e,Ae,St),r);break}An(e,Ae,St);break;case 5:An(e,Ae,St);break;default:throw Error(k(329))}}}return Me(e,ae()),e.callbackNode===n?Ig.bind(null,e):null}function pc(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=ts(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&mc(t)),e}function mc(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function SS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!st(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Uf,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function Wh(e){if(z&6)throw Error(k(327));Pr();var t=$a(e,0);if(!(t&1))return Me(e,ae()),null;var n=ts(e,t);if(e.tag!==0&&n===2){var r=Fu(e);r!==0&&(t=r,n=pc(e,r))}if(n===1)throw n=Xi,zn(e,0),Gt(e,t),Me(e,ae()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,Ae,St),Me(e,ae()),null}function Ff(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(zr=ae()+500,xs&&xn())}}function Yn(e){en!==null&&en.tag===0&&!(z&6)&&Pr();var t=z;z|=1;var n=qe.transition,r=B;try{if(qe.transition=null,B=1,e)return e()}finally{B=r,qe.transition=n,z=t,!(z&6)&&xn()}}function zf(){$e=yr.current,Q(yr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qw(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(_f(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:jr(),Q(Le),Q(Ce),Tf();break;case 5:Of(r);break;case 4:jr();break;case 13:Q(ee);break;case 19:Q(ee);break;case 10:If(r.type._context);break;case 22:case 23:zf()}n=n.return}if(ve=e,se=e=fn(e.current,null),Se=$e=t,ue=0,Xi=null,Uf=Rs=Gn=0,Ae=Ti=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}$n=null}return e}function Cg(e,t){do{var n=se;try{if(bf(),va.current=Ja,Qa){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qa=!1}if(Kn=0,pe=le=te=null,Pi=!1,qi=0,$f.current=null,n===null||n.return===null){ue=1,Xi=t,se=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Rh(a);if(g!==null){g.flags&=-257,Ah(g,a,s,o,t),g.mode&1&&Th(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Th(o,u,t),Bf();break e}l=Error(k(426))}}else if(Z&&s.mode&1){var S=Rh(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ah(S,a,s,o,t),Ef(Fr(l,s));break e}}o=l=Fr(l,s),ue!==4&&(ue=2),Ti===null?Ti=[o]:Ti.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ug(o,l,t);kh(o,p);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(un===null||!un.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=cg(o,s,t);kh(o,w);break e}}o=o.return}while(o!==null)}Og(n)}catch(E){t=E,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function xg(){var e=Xa.current;return Xa.current=Ja,e===null?Ja:e}function Bf(){(ue===0||ue===3||ue===2)&&(ue=4),ve===null||!(Gn&268435455)&&!(Rs&268435455)||Gt(ve,Se)}function ts(e,t){var n=z;z|=2;var r=xg();(ve!==e||Se!==t)&&(St=null,zn(e,t));do try{_S();break}catch(i){Cg(e,i)}while(1);if(bf(),z=n,Xa.current=r,se!==null)throw Error(k(261));return ve=null,Se=0,ue}function _S(){for(;se!==null;)Pg(se)}function ES(){for(;se!==null&&!G1();)Pg(se)}function Pg(e){var t=Rg(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Og(e):se=t,$f.current=null}function Og(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mS(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(n=pS(n,t,$e),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function An(e,t,n){var r=B,i=qe.transition;try{qe.transition=null,B=1,kS(e,t,n,r)}finally{qe.transition=i,B=r}return null}function kS(e,t,n,r){do Pr();while(en!==null);if(z&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rw(e,o),e===ve&&(se=ve=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,Ag(Ma,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var a=B;B=1;var s=z;z|=4,$f.current=null,gS(e,n),kg(n,e),Hw(Ku),Ua=!!Vu,Ku=Vu=null,e.current=n,yS(n),Y1(),z=s,B=a,qe.transition=o}else e.current=n;if(Xo&&(Xo=!1,en=e,es=i),o=e.pendingLanes,o===0&&(un=null),J1(n.stateNode),Me(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Za)throw Za=!1,e=dc,dc=null,e;return es&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===hc?Ri++:(Ri=0,hc=e):Ri=0,xn(),null}function Pr(){if(en!==null){var e=lv(es),t=qe.transition,n=B;try{if(qe.transition=null,B=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,es=0,z&6)throw Error(k(331));var i=z;for(z|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Oi(8,c,o)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var d=c.sibling,g=c.return;if(Sg(c),c===u){O=null;break}if(d!==null){d.return=g,O=d;break}O=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Oi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}var h=e.current;for(O=h;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=h;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ts(9,s)}}catch(E){re(s,s.return,E)}if(s===a){O=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,O=w;break e}O=s.return}}if(z=i,xn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{B=n,qe.transition=t}}return!1}function Vh(e,t,n){t=Fr(n,t),t=ug(e,t,1),e=ln(e,t,1),t=Oe(),e!==null&&(yo(e,1,t),Me(e,t))}function re(e,t,n){if(e.tag===3)Vh(e,e,n);else for(;t!==null;){if(t.tag===3){Vh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=Fr(n,e),e=cg(t,e,1),t=ln(t,e,1),e=Oe(),t!==null&&(yo(t,1,e),Me(t,e));break}}t=t.return}}function bS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Se&n)===n&&(ue===4||ue===3&&(Se&130023424)===Se&&500>ae()-jf?zn(e,0):Uf|=n),Me(e,t)}function Tg(e,t){t===0&&(e.mode&1?(t=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):t=1);var n=Oe();e=Tt(e,t),e!==null&&(yo(e,t,n),Me(e,n))}function IS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tg(e,n)}function CS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Tg(e,n)}var Rg;Rg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,hS(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Z&&t.flags&1048576&&Lv(t,Va,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ya(e,t),e=t.pendingProps;var i=Mr(t,Ce.current);xr(t,n),i=Af(null,t,r,e,i,n);var o=Nf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,Ha(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xf(t),i.updater=Ps,t.stateNode=i,i._reactInternals=t,tc(t,r,e,n),t=ic(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&Sf(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=PS(r),e=et(r,e),i){case 0:t=rc(null,t,r,e,n);break e;case 1:t=Dh(null,t,r,e,n);break e;case 11:t=Nh(null,t,r,e,n);break e;case 14:t=Lh(null,t,r,et(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),rc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Dh(e,t,r,i,n);case 3:e:{if(pg(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Uv(e,t),Ya(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fr(Error(k(423)),t),t=Mh(e,t,r,n,i);break e}else if(r!==i){i=Fr(Error(k(424)),t),t=Mh(e,t,r,n,i);break e}else for(Ue=sn(t.stateNode.containerInfo.firstChild),je=t,Z=!0,nt=null,n=Bv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=Rt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Hv(t),e===null&&Xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Gu(r,i)?a=null:o!==null&&Gu(r,o)&&(t.flags|=32),hg(e,t),Pe(e,t,a,n),t.child;case 6:return e===null&&Xu(t),null;case 13:return mg(e,t,n);case 4:return Pf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ur(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Nh(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,G(Ka,r._currentValue),r._currentValue=a,o!==null)if(st(o.value,a)){if(o.children===i.children&&!Le.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ct(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Zu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=Qe(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=et(r,t.pendingProps),i=et(r.type,i),Lh(e,t,r,i,n);case 15:return fg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),ya(e,t),t.tag=1,De(r)?(e=!0,Ha(t)):e=!1,xr(t,n),Fv(t,r,i),tc(t,r,i,n),ic(null,t,r,!0,e,n);case 19:return vg(e,t,n);case 22:return dg(e,t,n)}throw Error(k(156,t.tag))};function Ag(e,t){return iv(e,t)}function xS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new xS(e,t,n,r)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function PS(e){if(typeof e=="function")return Hf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lf)return 11;if(e===uf)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _a(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Hf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case lr:return Bn(n.children,i,o,t);case sf:a=8,i|=8;break;case Iu:return e=Ye(12,n,t,i|2),e.elementType=Iu,e.lanes=o,e;case Cu:return e=Ye(13,n,t,i),e.elementType=Cu,e.lanes=o,e;case xu:return e=Ye(19,n,t,i),e.elementType=xu,e.lanes=o,e;case zm:return As(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jm:a=10;break e;case Fm:a=9;break e;case lf:a=11;break e;case uf:a=14;break e;case Wt:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ye(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=zm,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function OS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wf(e,t,n,r,i,o,a,s,l){return e=new OS(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ye(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(o),e}function TS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ng(e){if(!e)return yn;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(De(n))return Av(e,n,t)}return t}function Lg(e,t,n,r,i,o,a,s,l){return e=Wf(n,r,!0,e,i,o,a,s,l),e.context=Ng(null),n=e.current,r=Oe(),i=cn(n),o=Ct(r,i),o.callback=t??null,ln(n,o,i),e.current.lanes=i,yo(e,i,r),Me(e,r),e}function Ns(e,t,n,r){var i=t.current,o=Oe(),a=cn(i);return n=Ng(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,a),e!==null&&(at(e,i,a,o),ma(e,i,a)),a}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vf(e,t){Kh(e,t),(e=e.alternate)&&Kh(e,t)}function RS(){return null}var Dg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kf(e){this._internalRoot=e}Ls.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ns(e,t,null,null)};Ls.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){Ns(null,e,null,null)}),t[Ot]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=fv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&hv(e)}};function Gf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function AS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ns(a);o.call(u)}}var a=Lg(t,r,e,0,null,!1,!1,"",Gh);return e._reactRootContainer=a,e[Ot]=a.current,Wi(e.nodeType===8?e.parentNode:e),Yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ns(l);s.call(u)}}var l=Wf(e,0,!1,null,null,!1,!1,"",Gh);return e._reactRootContainer=l,e[Ot]=l.current,Wi(e.nodeType===8?e.parentNode:e),Yn(function(){Ns(t,l,n,r)}),l}function Ms(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ns(a);s.call(l)}}Ns(t,a,e,i)}else a=AS(n,t,e,i,r);return ns(a)}uv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vi(t.pendingLanes);n!==0&&(df(t,n|1),Me(t,ae()),!(z&6)&&(zr=ae()+500,xn()))}break;case 13:Yn(function(){var r=Tt(e,1);if(r!==null){var i=Oe();at(r,e,1,i)}}),Vf(e,1)}};hf=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Oe();at(t,e,134217728,n)}Vf(e,134217728)}};cv=function(e){if(e.tag===13){var t=cn(e),n=Tt(e,t);if(n!==null){var r=Oe();at(n,e,t,r)}Vf(e,t)}};fv=function(){return B};dv=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};$u=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Cs(r);if(!i)throw Error(k(90));Hm(r),Tu(r,i)}}}break;case"textarea":Vm(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};Xm=Ff;Zm=Yn;var NS={usingClientEntryPoint:!1,Events:[So,dr,Cs,Qm,Jm,Ff]},fi={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LS={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nv(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Es=Zo.inject(LS),pt=Zo}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(t))throw Error(k(200));return TS(e,t,null,n)};Be.createRoot=function(e,t){if(!Gf(e))throw Error(k(299));var n=!1,r="",i=Dg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wf(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,Wi(e.nodeType===8?e.parentNode:e),new Kf(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=nv(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return Yn(e)};Be.hydrate=function(e,t,n){if(!Ds(t))throw Error(k(200));return Ms(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!Gf(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Dg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Lg(t,null,e,1,n??null,i,!1,o,a),e[Ot]=t.current,Wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ls(t)};Be.render=function(e,t,n){if(!Ds(t))throw Error(k(200));return Ms(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(k(40));return e._reactRootContainer?(Yn(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Be.unstable_batchedUpdates=Ff;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ds(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ms(e,t,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Be})(R1);var Yh=Aa;Eu.createRoot=Yh.createRoot,Eu.hydrateRoot=Yh.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const qh="popstate";function DS(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=rr(i.location.hash.substr(1));return vc("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:eo(o))}function r(i,o){MS(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return US(t,n,r,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function MS(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $S(){return Math.random().toString(36).substr(2,8)}function Qh(e,t){return{usr:e.state,key:e.key,idx:t}}function vc(e,t,n,r){return n===void 0&&(n=null),Zi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?rr(t):t,{state:n,key:t&&t.key||r||$S()})}function eo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function US(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=tn.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Zi({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=tn.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:s,location:y.location,delta:p})}function d(S,p){s=tn.Push;let h=vc(y.location,S,p);n&&n(h,S),u=c()+1;let m=Qh(h,u),w=y.createHref(h);try{a.pushState(m,"",w)}catch{i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function g(S,p){s=tn.Replace;let h=vc(y.location,S,p);n&&n(h,S),u=c();let m=Qh(h,u),w=y.createHref(h);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:eo(S);return ce(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return s},get location(){return e(i,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qh,f),l=S,()=>{i.removeEventListener(qh,f),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(S){return a.go(S)}};return y}var Jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jh||(Jh={}));function jS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?rr(t):t,i=Ug(r.pathname||"/",n);if(i==null)return null;let o=Mg(e);FS(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=qS(o[s],XS(i));return a}function Mg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mg(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:GS(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of $g(o.path))i(o,a,l)}),t}function $g(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=$g(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function FS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:YS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zS=/^:\w+$/,BS=3,HS=2,WS=1,VS=10,KS=-2,Xh=e=>e==="*";function GS(e,t){let n=e.split("/"),r=n.length;return n.some(Xh)&&(r+=KS),t&&(r+=HS),n.filter(i=>!Xh(i)).reduce((i,o)=>i+(zS.test(o)?BS:o===""?WS:VS),r)}function YS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=QS({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:dn([i,c.pathname]),pathnameBase:n_(dn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=dn([i,c.pathnameBase]))}return o}function QS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=JS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=s[f]||"";a=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ZS(s[f]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function JS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function XS(e){try{return decodeURI(e)}catch(t){return Yf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ZS(e,t){try{return decodeURIComponent(e)}catch(n){return Yf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ug(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function e_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?rr(e):e;return{pathname:n?n.startsWith("/")?n:t_(n,t):t,search:r_(r),hash:i_(i)}}function t_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=rr(e):(i=Zi({},e),ce(!i.pathname||!i.pathname.includes("?"),Yl("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),Yl("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),Yl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}s=f>=0?t[f]:"/"}let l=e_(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dn=e=>e.join("/").replace(/\/\/+/g,"/"),n_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),r_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const a_=["post","put","patch","delete"];[...a_];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gc(){return gc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gc.apply(this,arguments)}function s_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const l_=typeof Object.is=="function"?Object.is:s_,{useState:u_,useEffect:c_,useLayoutEffect:f_,useDebugValue:d_}=_u;function h_(e,t,n){const r=t(),[{inst:i},o]=u_({inst:{value:r,getSnapshot:t}});return f_(()=>{i.value=r,i.getSnapshot=t,ql(i)&&o({inst:i})},[e,r,t]),c_(()=>(ql(i)&&o({inst:i}),e(()=>{ql(i)&&o({inst:i})})),[e]),d_(r),r}function ql(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!l_(n,r)}catch{return!0}}function p_(e,t,n){return t()}const m_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v_=!m_,g_=v_?p_:h_;"useSyncExternalStore"in _u&&(e=>e.useSyncExternalStore)(_u);const zg=b.createContext(null),Bg=b.createContext(null),$s=b.createContext(null),Us=b.createContext(null),qr=b.createContext({outlet:null,matches:[]}),Hg=b.createContext(null);function y_(e,t){let{relative:n}=t===void 0?{}:t;Eo()||ce(!1);let{basename:r,navigator:i}=b.useContext($s),{hash:o,pathname:a,search:s}=Wg(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:dn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Eo(){return b.useContext(Us)!=null}function js(){return Eo()||ce(!1),b.useContext(Us).location}function ir(){Eo()||ce(!1);let{basename:e,navigator:t}=b.useContext($s),{matches:n}=b.useContext(qr),{pathname:r}=js(),i=JSON.stringify(jg(n).map(s=>s.pathnameBase)),o=b.useRef(!1);return b.useEffect(()=>{o.current=!0}),b.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=Fg(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:dn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Wg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qr),{pathname:i}=js(),o=JSON.stringify(jg(r).map(a=>a.pathnameBase));return b.useMemo(()=>Fg(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function w_(e,t){Eo()||ce(!1);let{navigator:n}=b.useContext($s),r=b.useContext(Bg),{matches:i}=b.useContext(qr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=js(),u;if(t){var c;let y=typeof t=="string"?rr(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||ce(!1),u=y}else u=l;let f=u.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",g=jS(e,{pathname:d}),v=k_(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:dn([s,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:dn([s,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&v?b.createElement(Us.Provider,{value:{location:gc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tn.Pop}},v):v}function S_(){let e=x_(),t=o_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}class __ extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qr.Provider,{value:this.props.routeContext},b.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E_(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(zg);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qr.Provider,{value:t},r)}function k_(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||ce(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||b.createElement(S_,null):null,c=t.concat(r.slice(0,s+1)),f=()=>b.createElement(E_,{match:a,routeContext:{outlet:o,matches:c}},l?u:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||s===0)?b.createElement(__,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Zh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Zh||(Zh={}));var rs;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(rs||(rs={}));function b_(e){let t=b.useContext(Bg);return t||ce(!1),t}function I_(e){let t=b.useContext(qr);return t||ce(!1),t}function C_(e){let t=I_(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function x_(){var e;let t=b.useContext(Hg),n=b_(rs.UseRouteError),r=C_(rs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function yi(e){ce(!1)}function P_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:o,static:a=!1}=e;Eo()&&ce(!1);let s=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=rr(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,v=b.useMemo(()=>{let y=Ug(u,s);return y==null?null:{pathname:y,search:c,hash:f,state:d,key:g}},[s,u,c,f,d,g]);return v==null?null:b.createElement($s.Provider,{value:l},b.createElement(Us.Provider,{children:n,value:{location:v,navigationType:i}}))}function O_(e){let{children:t,location:n}=e,r=b.useContext(zg),i=r&&!t?r.router.routes:yc(t);return w_(i,n)}var ep;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ep||(ep={}));new Promise(()=>{});function yc(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,yc(r.props.children,t));return}r.type!==yi&&ce(!1),!r.props.index||!r.props.children||ce(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=yc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wc(){return wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wc.apply(this,arguments)}function T_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function R_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A_(e,t){return e.button===0&&(!t||t==="_self")&&!R_(e)}const N_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function L_(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=DS({window:r,v5Compat:!0}));let o=i.current,[a,s]=b.useState({action:o.action,location:o.location});return b.useLayoutEffect(()=>o.listen(s),[o]),b.createElement(P_,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const D_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dn=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=T_(t,N_),d=typeof u=="string"?u:eo(u),g=/^[a-z+]+:\/\//i.test(d)||d.startsWith("//"),v=d,y=!1;if(D_&&g){let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d);w.origin===m.origin?v=w.pathname+w.search+w.hash:y=!0}let S=y_(v,{relative:i}),p=M_(v,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function h(m){r&&r(m),m.defaultPrevented||p(m)}return b.createElement("a",wc({},f,{href:g?d:S,onClick:y||o?r:h,ref:n,target:l}))});var tp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(tp||(tp={}));var np;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(np||(np={}));function M_(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=ir(),l=js(),u=Wg(e,{relative:a});return b.useCallback(c=>{if(A_(c,n)){c.preventDefault();let f=r!==void 0?r:eo(l)===eo(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}/**
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
 */const Vg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},$_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4;let d=(s&15)<<2|u>>6,g=u&63;l||(g=64,a||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||f==null)throw Error();const d=o<<2|s>>4;if(r.push(d),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},U_=function(e){const t=Vg(e);return Kg.encodeByteArray(t,!0)},Gg=function(e){return U_(e).replace(/\./g,"")},Yg=function(e){try{return Kg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function j_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F_=()=>j_().__FIREBASE_DEFAULTS__,z_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},B_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yg(e[1]);return t&&JSON.parse(t)},qf=()=>{try{return F_()||z_()||B_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},H_=e=>{var t,n;return(n=(t=qf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},W_=()=>{var e;return(e=qf())===null||e===void 0?void 0:e.config},qg=e=>{var t;return(t=qf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class V_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function G_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function q_(){const e=xe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Q_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const X_="FirebaseError";class Pn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=X_,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Z_(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new Pn(i,s,r)}}function Z_(e,t){return e.replace(eE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const eE=/\{\$([^}]+)}/g;function tE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function is(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(rp(o)&&rp(a)){if(!is(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rp(e){return e!==null&&typeof e=="object"}/**
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
 */function bo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Si(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function nE(e,t){const n=new rE(e,t);return n.subscribe.bind(n)}class rE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ql),i.error===void 0&&(i.error=Ql),i.complete===void 0&&(i.complete=Ql);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ql(){}/**
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
 */function wt(e){return e&&e._delegate?e._delegate:e}class Br{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */let oE=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new V_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sE(t))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nn){return this.instances.has(t)}getOptions(t=Nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Nn){return this.component?this.component.multipleInstances?t:Nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function aE(e){return e===Nn?void 0:e}function sE(e){return e.instantiationMode==="EAGER"}/**
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
 */class lE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new oE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const uE={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},cE=V.INFO,fE={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},dE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=fE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qg{constructor(t){this.name=t,this._logLevel=cE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const hE=(e,t)=>t.some(n=>e instanceof n);let ip,op;function pE(){return ip||(ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mE(){return op||(op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jg=new WeakMap,Sc=new WeakMap,Xg=new WeakMap,Jl=new WeakMap,Qf=new WeakMap;function vE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(hn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Jg.set(n,e)}).catch(()=>{}),Qf.set(t,e),t}function gE(e){if(Sc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Sc.set(e,t)}let _c={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yE(e){_c=e(_c)}function wE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xl(this),t,...n);return Xg.set(r,t.sort?t.sort():[t]),hn(r)}:mE().includes(e)?function(...t){return e.apply(Xl(this),t),hn(Jg.get(this))}:function(...t){return hn(e.apply(Xl(this),t))}}function SE(e){return typeof e=="function"?wE(e):(e instanceof IDBTransaction&&gE(e),hE(e,pE())?new Proxy(e,_c):e)}function hn(e){if(e instanceof IDBRequest)return vE(e);if(Jl.has(e))return Jl.get(e);const t=SE(e);return t!==e&&(Jl.set(e,t),Qf.set(t,e)),t}const Xl=e=>Qf.get(e);function _E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=hn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(hn(a.result),l.oldVersion,l.newVersion,hn(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const EE=["get","getKey","getAll","getAllKeys","count"],kE=["put","add","delete","clear"],Zl=new Map;function ap(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zl.get(t))return Zl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=kE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EE.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Zl.set(t,o),o}yE(e=>({...e,get:(t,n,r)=>ap(t,n)||e.get(t,n,r),has:(t,n)=>!!ap(t,n)||e.has(t,n)}));/**
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
 */class bE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ec="@firebase/app",sp="0.9.3";/**
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
 */const qn=new Qg("@firebase/app"),CE="@firebase/app-compat",xE="@firebase/analytics-compat",PE="@firebase/analytics",OE="@firebase/app-check-compat",TE="@firebase/app-check",RE="@firebase/auth",AE="@firebase/auth-compat",NE="@firebase/database",LE="@firebase/database-compat",DE="@firebase/functions",ME="@firebase/functions-compat",$E="@firebase/installations",UE="@firebase/installations-compat",jE="@firebase/messaging",FE="@firebase/messaging-compat",zE="@firebase/performance",BE="@firebase/performance-compat",HE="@firebase/remote-config",WE="@firebase/remote-config-compat",VE="@firebase/storage",KE="@firebase/storage-compat",GE="@firebase/firestore",YE="@firebase/firestore-compat",qE="firebase",QE="9.17.1";/**
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
 */const kc="[DEFAULT]",JE={[Ec]:"fire-core",[CE]:"fire-core-compat",[PE]:"fire-analytics",[xE]:"fire-analytics-compat",[TE]:"fire-app-check",[OE]:"fire-app-check-compat",[RE]:"fire-auth",[AE]:"fire-auth-compat",[NE]:"fire-rtdb",[LE]:"fire-rtdb-compat",[DE]:"fire-fn",[ME]:"fire-fn-compat",[$E]:"fire-iid",[UE]:"fire-iid-compat",[jE]:"fire-fcm",[FE]:"fire-fcm-compat",[zE]:"fire-perf",[BE]:"fire-perf-compat",[HE]:"fire-rc",[WE]:"fire-rc-compat",[VE]:"fire-gcs",[KE]:"fire-gcs-compat",[GE]:"fire-fst",[YE]:"fire-fst-compat","fire-js":"fire-js",[qE]:"fire-js-all"};/**
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
 */const os=new Map,bc=new Map;function XE(e,t){try{e.container.addComponent(t)}catch(n){qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function to(e){const t=e.name;if(bc.has(t))return qn.debug(`There were multiple attempts to register component ${t}.`),!1;bc.set(t,e);for(const n of os.values())XE(n,e);return!0}function Zg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ZE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new ko("app","Firebase",ZE);/**
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
 */class e2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=QE;function ey(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:kc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=W_()),!n)throw pn.create("no-options");const o=os.get(i);if(o){if(is(n,o.options)&&is(r,o.config))return o;throw pn.create("duplicate-app",{appName:i})}const a=new lE(i);for(const l of bc.values())a.addComponent(l);const s=new e2(n,r,a);return os.set(i,s),s}function t2(e=kc){const t=os.get(e);if(!t&&e===kc)return ey();if(!t)throw pn.create("no-app",{appName:e});return t}function Or(e,t,n){var r;let i=(r=JE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qn.warn(s.join(" "));return}to(new Br(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const n2="firebase-heartbeat-database",r2=1,no="firebase-heartbeat-store";let eu=null;function ty(){return eu||(eu=_E(n2,r2,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(no)}}}).catch(e=>{throw pn.create("idb-open",{originalErrorMessage:e.message})})),eu}async function i2(e){try{return(await ty()).transaction(no).objectStore(no).get(ny(e))}catch(t){if(t instanceof Pn)qn.warn(t.message);else{const n=pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qn.warn(n.message)}}}async function lp(e,t){try{const r=(await ty()).transaction(no,"readwrite");return await r.objectStore(no).put(t,ny(e)),r.done}catch(n){if(n instanceof Pn)qn.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function ny(e){return`${e.name}!${e.options.appId}`}/**
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
 */const o2=1024,a2=30*24*60*60*1e3;class s2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=up();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=a2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=up(),{heartbeatsToSend:n,unsentEntries:r}=l2(this._heartbeatsCache.heartbeats),i=Gg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function up(){return new Date().toISOString().substring(0,10)}function l2(e,t=o2){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),cp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class u2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await i2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function cp(e){return Gg(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function c2(e){to(new Br("platform-logger",t=>new bE(t),"PRIVATE")),to(new Br("heartbeat",t=>new s2(t),"PRIVATE")),Or(Ec,sp,e),Or(Ec,sp,"esm2017"),Or("fire-js","")}c2("");function Jf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ry(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f2=ry,iy=new ko("auth","Firebase",ry());/**
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
 */const fp=new Qg("@firebase/auth");function Ea(e,...t){fp.logLevel<=V.ERROR&&fp.error(`Auth (${Fs}): ${e}`,...t)}/**
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
 */function lt(e,...t){throw Xf(e,...t)}function vt(e,...t){return Xf(e,...t)}function d2(e,t,n){const r=Object.assign(Object.assign({},f2()),{[t]:n});return new ko("auth","Firebase",r).create(t,{appName:e.name})}function Xf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return iy.create(e,...t)}function L(e,t,...n){if(!e)throw Xf(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ea(t),new Error(t)}function At(e,t){e||bt(t)}/**
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
 */const dp=new Map;function It(e){At(e instanceof Function,"Expected a class definition");let t=dp.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,dp.set(e,t),t)}/**
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
 */function h2(e,t){const n=Zg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(is(o,t??{}))return i;lt(i,"already-initialized")}return n.initialize({options:t})}function p2(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Ic(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function m2(){return hp()==="http:"||hp()==="https:"}function hp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function v2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m2()||G_()||"connection"in navigator)?navigator.onLine:!0}function g2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Io{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=K_()||Y_()}get(){return v2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zf(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class oy{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const w2=new Io(3e4,6e4);function Qr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Jr(e,t,n,r,i={}){return ay(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=bo(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),oy.fetch()(sy(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function ay(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},y2),t);try{const i=new S2(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ea(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ea(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw ea(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw d2(e,c,u);lt(e,c)}}catch(i){if(i instanceof Pn)throw i;lt(e,"network-request-failed")}}async function Co(e,t,n,r,i={}){const o=await Jr(e,t,n,r,i);return"mfaPendingCredential"in o&&lt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function sy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Zf(e.config,i):`${e.config.apiScheme}://${i}`}class S2{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),w2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ea(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function _2(e,t){return Jr(e,"POST","/v1/accounts:delete",t)}async function E2(e,t){return Jr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ai(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function k2(e,t=!1){const n=wt(e),r=await n.getIdToken(t),i=ed(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ai(tu(i.auth_time)),issuedAtTime:Ai(tu(i.iat)),expirationTime:Ai(tu(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function tu(e){return Number(e)*1e3}function ed(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yg(n);return i?JSON.parse(i):(Ea("Failed to decode base64 JWT payload"),null)}catch(i){return Ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b2(e){const t=ed(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ro(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Pn&&I2(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function I2({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class C2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ly{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ro(e,E2(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?O2(o.providerUserInfo):[],s=P2(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new ly(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function x2(e){const t=wt(e);await as(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function P2(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function O2(e){return e.map(t=>{var{providerId:n}=t,r=Jf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function T2(e,t){const n=await ay(e,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=sy(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",oy.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):b2(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await T2(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new io;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function zt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Jf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ly(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ro(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return k2(this,t)}reload(){return x2(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ro(this,_2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(s=n.tenantId)!==null&&s!==void 0?s:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:E,providerData:C,stsTokenManager:x}=n;L(m&&x,t,"internal-error");const R=io.fromJSON(this.name,x);L(typeof m=="string",t,"internal-error"),zt(f,t.name),zt(d,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),zt(g,t.name),zt(v,t.name),zt(y,t.name),zt(S,t.name),zt(p,t.name),zt(h,t.name);const D=new Hn({uid:m,auth:t,email:d,emailVerified:w,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:R,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&(D.providerData=C.map(N=>Object.assign({},N))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new io;i.updateFromServerResponse(n);const o=new Hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await as(o),o}}/**
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
 */class uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uy.type="NONE";const pp=uy;/**
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
 */function ka(e,t,n){return`firebase:${e}:${t}:${n}`}class Tr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,o),this.fullPersistenceKey=ka("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Tr(It(pp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||It(pp);const a=ka(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const f=Hn._fromJSON(t,c);u!==o&&(s=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Tr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new Tr(o,t,r))}}/**
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
 */function mp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(py(t))return"Blackberry";if(my(t))return"Webos";if(td(t))return"Safari";if((t.includes("chrome/")||fy(t))&&!t.includes("edge/"))return"Chrome";if(hy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cy(e=xe()){return/firefox\//i.test(e)}function td(e=xe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fy(e=xe()){return/crios\//i.test(e)}function dy(e=xe()){return/iemobile/i.test(e)}function hy(e=xe()){return/android/i.test(e)}function py(e=xe()){return/blackberry/i.test(e)}function my(e=xe()){return/webos/i.test(e)}function zs(e=xe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function R2(e=xe()){var t;return zs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function A2(){return q_()&&document.documentMode===10}function vy(e=xe()){return zs(e)||hy(e)||my(e)||py(e)||/windows phone/i.test(e)||dy(e)}function N2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gy(e,t=[]){let n;switch(e){case"Browser":n=mp(xe());break;case"Worker":n=`${mp(xe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
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
 */class L2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class D2{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new L2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await as(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=g2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?wt(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ko("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return L(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xo(e){return wt(e)}class vp{constructor(t){this.auth=t,this.observer=null,this.addObserver=nE(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function M2(e,t,n){const r=xo(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=yy(t),{host:a,port:s}=$2(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||U2()}function yy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $2(e){const t=yy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:gp(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:gp(a)}}}function gp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function U2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class nd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,n){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function j2(e,t){return Jr(e,"POST","/v1/accounts:update",t)}/**
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
 */async function F2(e,t){return Co(e,"POST","/v1/accounts:signInWithPassword",Qr(e,t))}async function z2(e,t){return Jr(e,"POST","/v1/accounts:sendOobCode",Qr(e,t))}async function B2(e,t){return z2(e,t)}/**
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
 */async function H2(e,t){return Co(e,"POST","/v1/accounts:signInWithEmailLink",Qr(e,t))}async function W2(e,t){return Co(e,"POST","/v1/accounts:signInWithEmailLink",Qr(e,t))}/**
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
 */class oo extends nd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new oo(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new oo(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return F2(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return H2(t,{email:this._email,oobCode:this._password});default:lt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return j2(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return W2(t,{idToken:n,email:this._email,oobCode:this._password});default:lt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Rr(e,t){return Co(e,"POST","/v1/accounts:signInWithIdp",Qr(e,t))}/**
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
 */const V2="http://localhost";class Qn extends nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Jf(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Qn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Rr(t,n)}buildRequest(){const t={requestUri:V2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=bo(n)}return t}}/**
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
 */function K2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G2(e){const t=wi(Si(e)).link,n=t?wi(Si(t)).deep_link_id:null,r=wi(Si(e)).deep_link_id;return(r?wi(Si(r)).link:null)||r||n||t||e}class rd{constructor(t){var n,r,i,o,a,s;const l=wi(Si(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=K2((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=G2(t);try{return new rd(n)}catch{return null}}}/**
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
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(t,n){return oo._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=rd.parseLink(n);return L(r,"argument-error"),oo._fromEmailAndCode(t,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Po extends wy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends Po{constructor(){super("facebook.com")}static credential(t){return Qn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class qt extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Qn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
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
 */class Qt extends Po{constructor(){super("github.com")}static credential(t){return Qn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Jt extends Po{constructor(){super("twitter.com")}static credential(t,n){return Qn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function Y2(e,t){return Co(e,"POST","/v1/accounts:signUp",Qr(e,t))}/**
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
 */class Jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Hn._fromIdTokenResponse(t,r,i),a=yp(r);return new Jn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=yp(r);return new Jn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function yp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ss extends Pn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ss.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ss(t,n,r,i)}}function Sy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ss._fromErrorAndOperation(e,o,t,r):o})}async function q2(e,t,n=!1){const r=await ro(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jn._forOperation(e,"link",r)}/**
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
 */async function Q2(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await ro(e,Sy(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=ed(o.idToken);L(a,r,"internal-error");const{sub:s}=a;return L(e.uid===s,r,"user-mismatch"),Jn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),o}}/**
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
 */async function _y(e,t,n=!1){const r="signIn",i=await Sy(e,r,t),o=await Jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function J2(e,t){return _y(xo(e),t)}/**
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
 */function X2(e,t,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
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
 */async function Z2(e,t,n){const r=wt(e),i={requestType:"PASSWORD_RESET",email:t};n&&X2(r,i,n),await B2(r,i)}async function ek(e,t,n){const r=xo(e),i=await Y2(r,{returnSecureToken:!0,email:t,password:n}),o=await Jn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function tk(e,t,n){return J2(wt(e),Xr.credential(t,n))}function nk(e,t,n,r){return wt(e).onIdTokenChanged(t,n,r)}function rk(e,t,n){return wt(e).beforeAuthStateChanged(t,n)}function ik(e,t,n,r){return wt(e).onAuthStateChanged(t,n,r)}function ok(e){return wt(e).signOut()}const ls="__sak";/**
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
 */class Ey{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ak(){const e=xe();return td(e)||zs(e)}const sk=1e3,lk=10;class ky extends Ey{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ak()&&N2(),this.fallbackToPolling=vy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);A2()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,lk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ky.type="LOCAL";const uk=ky;/**
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
 */class by extends Ey{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}by.type="SESSION";const Iy=by;/**
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
 */function ck(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Bs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await ck(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
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
 */function id(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=id("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function gt(){return window}function dk(e){gt().location.href=e}/**
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
 */function Cy(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function hk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function mk(){return Cy()?self:null}/**
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
 */const xy="firebaseLocalStorageDb",vk=1,us="firebaseLocalStorage",Py="fbase_key";class Oo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hs(e,t){return e.transaction([us],t?"readwrite":"readonly").objectStore(us)}function gk(){const e=indexedDB.deleteDatabase(xy);return new Oo(e).toPromise()}function Cc(){const e=indexedDB.open(xy,vk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(us,{keyPath:Py})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(us)?t(r):(r.close(),await gk(),t(await Cc()))})})}async function wp(e,t,n){const r=Hs(e,!0).put({[Py]:t,value:n});return new Oo(r).toPromise()}async function yk(e,t){const n=Hs(e,!1).get(t),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Sp(e,t){const n=Hs(e,!0).delete(t);return new Oo(n).toPromise()}const wk=800,Sk=3;class Oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Sk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(mk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hk(),!this.activeServiceWorker)return;this.sender=new fk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Cc();return await wp(t,ls,"1"),await Sp(t,ls),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>yk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Hs(i,!1).getAll();return new Oo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oy.type="LOCAL";const _k=Oy;/**
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
 */function Ek(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function kk(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=vt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Ek().appendChild(r)})}function bk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Io(3e4,6e4);/**
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
 */function Ik(e,t){return t?It(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class od extends nd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ck(e){return _y(e.auth,new od(e),e.bypassAuthState)}function xk(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),Q2(n,new od(e),e.bypassAuthState)}async function Pk(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),q2(n,new od(e),e.bypassAuthState)}/**
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
 */class Ty{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ck;case"linkViaPopup":case"linkViaRedirect":return Pk;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:lt(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ok=new Io(2e3,1e4);class wr extends Ty{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Ok.get())};t()}}wr.currentPopupAction=null;/**
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
 */const Tk="pendingRedirect",ba=new Map;class Rk extends Ty{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ba.get(this.auth._key());if(!t){try{const r=await Ak(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ba.set(this.auth._key(),t)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ak(e,t){const n=Dk(t),r=Lk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Nk(e,t){ba.set(e._key(),t)}function Lk(e){return It(e._redirectPersistence)}function Dk(e){return ka(Tk,e.config.apiKey,e.name)}async function Mk(e,t,n=!1){const r=xo(e),i=Ik(r,t),a=await new Rk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const $k=10*60*1e3;class Uk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!jk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ry(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$k&&this.cachedEventUids.clear(),this.cachedEventUids.has(_p(t))}saveEventToCache(t){this.cachedEventUids.add(_p(t)),this.lastProcessedEventTime=Date.now()}}function _p(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ry({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function jk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(e);default:return!1}}/**
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
 */async function Fk(e,t={}){return Jr(e,"GET","/v1/projects",t)}/**
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
 */const zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bk=/^https?/;async function Hk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Fk(e);for(const n of t)try{if(Wk(n))return}catch{}lt(e,"unauthorized-domain")}function Wk(e){const t=Ic(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Bk.test(n))return!1;if(zk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vk=new Io(3e4,6e4);function Ep(){const e=gt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kk(e){return new Promise((t,n)=>{var r,i,o;function a(){Ep(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n(vt(e,"network-request-failed"))},timeout:Vk.get()})}if(!((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=gt().gapi)===null||o===void 0)&&o.load)a();else{const s=bk("iframefcb");return gt()[s]=()=>{gapi.load?a():n(vt(e,"network-request-failed"))},kk(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Ia=null,t})}let Ia=null;function Gk(e){return Ia=Ia||Kk(e),Ia}/**
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
 */const Yk=new Io(5e3,15e3),qk="__/auth/iframe",Qk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zk(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zf(t,Qk):`https://${e.config.authDomain}/${qk}`,r={apiKey:t.apiKey,appName:e.name,v:Fs},i=Xk.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${bo(r).slice(1)}`}async function eb(e){const t=await Gk(e),n=gt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:Zk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=vt(e,"network-request-failed"),s=gt().setTimeout(()=>{o(a)},Yk.get());function l(){gt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nb=500,rb=600,ib="_blank",ob="http://localhost";class kp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ab(e,t,n,r=nb,i=rb){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},tb),{width:r.toString(),height:i.toString(),top:o,left:a}),u=xe().toLowerCase();n&&(s=fy(u)?ib:n),cy(u)&&(t=t||ob,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(R2(u)&&s!=="_self")return sb(t||"",s),new kp(null);const f=window.open(t||"",s,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new kp(f)}function sb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lb="__/auth/handler",ub="emulator/auth/handler";function bp(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fs,eventId:i};if(t instanceof wy){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",tE(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))a[l]=u}if(t instanceof Po){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${cb(e)}?${bo(s).slice(1)}`}function cb({config:e}){return e.emulator?Zf(e,ub):`https://${e.authDomain}/${lb}`}/**
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
 */const nu="webStorageSupport";class fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iy,this._completeRedirectFn=Mk,this._overrideRedirectResult=Nk}async _openPopup(t,n,r,i){var o;At((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=bp(t,n,r,Ic(),i);return ab(t,a,id())}async _openRedirect(t,n,r,i){return await this._originValidation(t),dk(bp(t,n,r,Ic(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(At(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await eb(t),r=new Uk(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(nu,{type:nu},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[nu];a!==void 0&&n(!!a),lt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return vy()||td()||zs()}}const db=fb;var Ip="@firebase/auth",Cp="0.21.3";/**
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
 */class hb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mb(e){to(new Br("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((s,l)=>{L(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),L(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gy(e)},c=new D2(s,l,u);return p2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),to(new Br("auth-internal",t=>{const n=xo(t.getProvider("auth").getImmediate());return(r=>new hb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(Ip,Cp,pb(e)),Or(Ip,Cp,"esm2017")}/**
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
 */const vb=5*60,gb=qg("authIdTokenMaxAge")||vb;let xp=null;const yb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gb)return;const i=n==null?void 0:n.token;xp!==i&&(xp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wb(e=t2()){const t=Zg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=h2(e,{popupRedirectResolver:db,persistence:[_k,uk,Iy]}),r=qg("authTokenSyncURL");if(r){const o=yb(r);rk(n,o,()=>o(n.currentUser)),nk(n,a=>o(a))}const i=H_("auth");return i&&M2(n,`http://${i}`),n}mb("Browser");var Sb="firebase",_b="9.17.1";/**
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
 */Or(Sb,_b,"app");const Eb={apiKey:"AIzaSyCndi7wWHQnVwy_5UlOdSVPigxVWo1K74o",authDomain:"filmzone-16314.firebaseapp.com",projectId:"filmzone-16314",storageBucket:"filmzone-16314.appspot.com",messagingSenderId:"570945154318",appId:"1:570945154318:web:d073c72439759ec09abb5f"},kb=ey(Eb),di=wb(kb),Ay=b.createContext(),bb=({children:e})=>{const[t,n]=b.useState({}),r=(l,u)=>ek(di,l,u),i=(l,u)=>tk(di,l,u),o=()=>ok(di),a=l=>Z2(di,l);b.useEffect(()=>{const l=ik(di,u=>{n(u)});return()=>{l()}},[]);const s={createUser:r,logout:o,signIn:i,resetPassword:a,user:t};return I(Ay.Provider,{value:s,children:e})},ad=()=>b.useContext(Ay);var xc={},Ib={get exports(){return xc},set exports(e){xc=e}},Ny={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=b;function Cb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xb=typeof Object.is=="function"?Object.is:Cb,Pb=Hr.useState,Ob=Hr.useEffect,Tb=Hr.useLayoutEffect,Rb=Hr.useDebugValue;function Ab(e,t){var n=t(),r=Pb({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Tb(function(){i.value=n,i.getSnapshot=t,ru(i)&&o({inst:i})},[e,n,t]),Ob(function(){return ru(i)&&o({inst:i}),e(function(){ru(i)&&o({inst:i})})},[e]),Rb(n),n}function ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xb(e,n)}catch{return!0}}function Nb(e,t){return t()}var Lb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Nb:Ab;Ny.useSyncExternalStore=Hr.useSyncExternalStore!==void 0?Hr.useSyncExternalStore:Lb;(function(e){e.exports=Ny})(Ib);var Pc={},Db={get exports(){return Pc},set exports(e){Pc=e}},Ly={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=b,Mb=xc;function $b(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ub=typeof Object.is=="function"?Object.is:$b,jb=Mb.useSyncExternalStore,Fb=Ws.useRef,zb=Ws.useEffect,Bb=Ws.useMemo,Hb=Ws.useDebugValue;Ly.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Fb(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Bb(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&a.hasValue){var v=a.value;if(i(v,g))return f=v}return f=g}if(v=f,Ub(c,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(c=g,f=y)}var u=!1,c,f,d=n===void 0?null:n;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,n,r,i]);var s=jb(e,o[0],o[1]);return zb(function(){a.hasValue=!0,a.value=s},[s]),Hb(s),s};(function(e){e.exports=Ly})(Db);function Wb(e){e()}let Dy=Wb;const Vb=e=>Dy=e,Kb=()=>Dy,wn=b.createContext(null);function My(){return b.useContext(wn)}const Gb=()=>{throw new Error("uSES not initialized!")};let $y=Gb;const Yb=e=>{$y=e},qb=(e,t)=>e===t;function Qb(e=wn){const t=e===wn?My:()=>b.useContext(e);return function(r,i=qb){const{store:o,subscription:a,getServerState:s}=t(),l=$y(a.addNestedSub,o.getState,s||o.getState,r,i);return b.useDebugValue(l),l}}const iu=Qb();var Oc={},Jb={get exports(){return Oc},set exports(e){Oc=e}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=typeof Symbol=="function"&&Symbol.for,sd=ge?Symbol.for("react.element"):60103,ld=ge?Symbol.for("react.portal"):60106,Vs=ge?Symbol.for("react.fragment"):60107,Ks=ge?Symbol.for("react.strict_mode"):60108,Gs=ge?Symbol.for("react.profiler"):60114,Ys=ge?Symbol.for("react.provider"):60109,qs=ge?Symbol.for("react.context"):60110,ud=ge?Symbol.for("react.async_mode"):60111,Qs=ge?Symbol.for("react.concurrent_mode"):60111,Js=ge?Symbol.for("react.forward_ref"):60112,Xs=ge?Symbol.for("react.suspense"):60113,Xb=ge?Symbol.for("react.suspense_list"):60120,Zs=ge?Symbol.for("react.memo"):60115,el=ge?Symbol.for("react.lazy"):60116,Zb=ge?Symbol.for("react.block"):60121,eI=ge?Symbol.for("react.fundamental"):60117,tI=ge?Symbol.for("react.responder"):60118,nI=ge?Symbol.for("react.scope"):60119;function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case sd:switch(e=e.type,e){case ud:case Qs:case Vs:case Gs:case Ks:case Xs:return e;default:switch(e=e&&e.$$typeof,e){case qs:case Js:case el:case Zs:case Ys:return e;default:return t}}case ld:return t}}}function Uy(e){return We(e)===Qs}H.AsyncMode=ud;H.ConcurrentMode=Qs;H.ContextConsumer=qs;H.ContextProvider=Ys;H.Element=sd;H.ForwardRef=Js;H.Fragment=Vs;H.Lazy=el;H.Memo=Zs;H.Portal=ld;H.Profiler=Gs;H.StrictMode=Ks;H.Suspense=Xs;H.isAsyncMode=function(e){return Uy(e)||We(e)===ud};H.isConcurrentMode=Uy;H.isContextConsumer=function(e){return We(e)===qs};H.isContextProvider=function(e){return We(e)===Ys};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===sd};H.isForwardRef=function(e){return We(e)===Js};H.isFragment=function(e){return We(e)===Vs};H.isLazy=function(e){return We(e)===el};H.isMemo=function(e){return We(e)===Zs};H.isPortal=function(e){return We(e)===ld};H.isProfiler=function(e){return We(e)===Gs};H.isStrictMode=function(e){return We(e)===Ks};H.isSuspense=function(e){return We(e)===Xs};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Vs||e===Qs||e===Gs||e===Ks||e===Xs||e===Xb||typeof e=="object"&&e!==null&&(e.$$typeof===el||e.$$typeof===Zs||e.$$typeof===Ys||e.$$typeof===qs||e.$$typeof===Js||e.$$typeof===eI||e.$$typeof===tI||e.$$typeof===nI||e.$$typeof===Zb)};H.typeOf=We;(function(e){e.exports=H})(Jb);var jy=Oc,rI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fy={};Fy[jy.ForwardRef]=rI;Fy[jy.Memo]=iI;var Pp={},oI={get exports(){return Pp},set exports(e){Pp=e}},W={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=Symbol.for("react.element"),fd=Symbol.for("react.portal"),tl=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),il=Symbol.for("react.provider"),ol=Symbol.for("react.context"),aI=Symbol.for("react.server_context"),al=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),ul=Symbol.for("react.memo"),cl=Symbol.for("react.lazy"),sI=Symbol.for("react.offscreen"),zy;zy=Symbol.for("react.module.reference");function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cd:switch(e=e.type,e){case tl:case rl:case nl:case sl:case ll:return e;default:switch(e=e&&e.$$typeof,e){case aI:case ol:case al:case cl:case ul:case il:return e;default:return t}}case fd:return t}}}W.ContextConsumer=ol;W.ContextProvider=il;W.Element=cd;W.ForwardRef=al;W.Fragment=tl;W.Lazy=cl;W.Memo=ul;W.Portal=fd;W.Profiler=rl;W.StrictMode=nl;W.Suspense=sl;W.SuspenseList=ll;W.isAsyncMode=function(){return!1};W.isConcurrentMode=function(){return!1};W.isContextConsumer=function(e){return Xe(e)===ol};W.isContextProvider=function(e){return Xe(e)===il};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cd};W.isForwardRef=function(e){return Xe(e)===al};W.isFragment=function(e){return Xe(e)===tl};W.isLazy=function(e){return Xe(e)===cl};W.isMemo=function(e){return Xe(e)===ul};W.isPortal=function(e){return Xe(e)===fd};W.isProfiler=function(e){return Xe(e)===rl};W.isStrictMode=function(e){return Xe(e)===nl};W.isSuspense=function(e){return Xe(e)===sl};W.isSuspenseList=function(e){return Xe(e)===ll};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tl||e===rl||e===nl||e===sl||e===ll||e===sI||typeof e=="object"&&e!==null&&(e.$$typeof===cl||e.$$typeof===ul||e.$$typeof===il||e.$$typeof===ol||e.$$typeof===al||e.$$typeof===zy||e.getModuleId!==void 0)};W.typeOf=Xe;(function(e){e.exports=W})(oI);function lI(){const e=Kb();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Op={notify(){},get:()=>[]};function uI(e,t){let n,r=Op;function i(f){return l(),r.subscribe(f)}function o(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function s(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=lI())}function u(){n&&(n(),n=void 0,r.clear(),r=Op)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:s,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const cI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fI=cI?b.useLayoutEffect:b.useEffect;function dI({store:e,context:t,children:n,serverState:r}){const i=b.useMemo(()=>{const s=uI(e);return{store:e,subscription:s,getServerState:r?()=>r:void 0}},[e,r]),o=b.useMemo(()=>e.getState(),[e]);fI(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),o!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,o]);const a=t||wn;return go.createElement(a.Provider,{value:i},n)}function By(e=wn){const t=e===wn?My:()=>b.useContext(e);return function(){const{store:r}=t();return r}}const hI=By();function pI(e=wn){const t=e===wn?hI:By(e);return function(){return t().dispatch}}const mI=pI();Yb(Pc.useSyncExternalStoreWithSelector);Vb(Aa.unstable_batchedUpdates);function rt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Sn(e){return!!e&&!!e[X]}function Nt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===bI}(e)||Array.isArray(e)||!!e[Mp]||!!(!((t=e.constructor)===null||t===void 0)&&t[Mp])||dd(e)||hd(e))}function Xn(e,t,n){n===void 0&&(n=!1),Zr(e)===0?(n?Object.keys:Nr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Zr(e){var t=e[X];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:dd(e)?2:hd(e)?3:0}function Ar(e,t){return Zr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function vI(e,t){return Zr(e)===2?e.get(t):e[t]}function Hy(e,t,n){var r=Zr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Wy(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function dd(e){return EI&&e instanceof Map}function hd(e){return kI&&e instanceof Set}function Ln(e){return e.o||e.t}function pd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ky(e);delete t[X];for(var n=Nr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function md(e,t){return t===void 0&&(t=!1),vd(e)||Sn(e)||!Nt(e)||(Zr(e)>1&&(e.set=e.add=e.clear=e.delete=gI),Object.freeze(e),t&&Xn(e,function(n,r){return md(r,!0)},!0)),e}function gI(){rt(2)}function vd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function yt(e){var t=Nc[e];return t||rt(18,e),t}function yI(e,t){Nc[e]||(Nc[e]=t)}function Tc(){return ao}function ou(e,t){t&&(yt("Patches"),e.u=[],e.s=[],e.v=t)}function cs(e){Rc(e),e.p.forEach(wI),e.p=null}function Rc(e){e===ao&&(ao=e.l)}function Tp(e){return ao={p:[],l:ao,h:e,m:!0,_:0}}function wI(e){var t=e[X];t.i===0||t.i===1?t.j():t.O=!0}function au(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||yt("ES5").S(t,e,r),r?(n[X].P&&(cs(t),rt(4)),Nt(e)&&(e=fs(t,e),t.l||ds(t,e)),t.u&&yt("Patches").M(n[X].t,e,t.u,t.s)):e=fs(t,n,[]),cs(t),t.u&&t.v(t.u,t.s),e!==Vy?e:void 0}function fs(e,t,n){if(vd(t))return t;var r=t[X];if(!r)return Xn(t,function(s,l){return Rp(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ds(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=pd(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Xn(o,function(s,l){return Rp(e,r,i,s,l,n,a)}),ds(e,i,!1),n&&e.u&&yt("Patches").N(r,n,e.u,e.s)}return r.o}function Rp(e,t,n,r,i,o,a){if(Sn(i)){var s=fs(e,i,o&&t&&t.i!==3&&!Ar(t.R,r)?o.concat(r):void 0);if(Hy(n,r,s),!Sn(s))return;e.m=!1}else a&&n.add(i);if(Nt(i)&&!vd(i)){if(!e.h.D&&e._<1)return;fs(e,i),t&&t.A.l||ds(e,i)}}function ds(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&md(t,n)}function su(e,t){var n=e[X];return(n?Ln(n):e)[t]}function Ap(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Xt(e){e.P||(e.P=!0,e.l&&Xt(e.l))}function lu(e){e.o||(e.o=pd(e.t))}function Ac(e,t,n){var r=dd(t)?yt("MapSet").F(t,n):hd(t)?yt("MapSet").T(t,n):e.g?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:Tc(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,u=so;a&&(l=[s],u=_i);var c=Proxy.revocable(l,u),f=c.revoke,d=c.proxy;return s.k=d,s.j=f,d}(t,n):yt("ES5").J(t,n);return(n?n.A:Tc()).p.push(r),r}function SI(e){return Sn(e)||rt(22,e),function t(n){if(!Nt(n))return n;var r,i=n[X],o=Zr(n);if(i){if(!i.P&&(i.i<4||!yt("ES5").K(i)))return i.t;i.I=!0,r=Np(n,o),i.I=!1}else r=Np(n,o);return Xn(r,function(a,s){i&&vI(i.t,a)===s||Hy(r,a,t(s))}),o===3?new Set(r):r}(e)}function Np(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return pd(e)}function _I(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[X];return so.get(l,o)},set:function(l){var u=this[X];so.set(u,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][X];if(!s.P)switch(s.i){case 5:r(s)&&Xt(s);break;case 4:n(s)&&Xt(s)}}}function n(o){for(var a=o.t,s=o.k,l=Nr(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==X){var f=a[c];if(f===void 0&&!Ar(a,c))return!0;var d=s[c],g=d&&d[X];if(g?g.t!==f:!Wy(d,f))return!0}}var v=!!a[X];return l.length!==Nr(a).length+(v?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};yI("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(c,f){if(c){for(var d=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(d,""+g,e(g,!0));return d}var v=Ky(f);delete v[X];for(var y=Nr(v),S=0;S<y.length;S++){var p=y[S];v[p]=e(p,c||!!v[p].enumerable)}return Object.create(Object.getPrototypeOf(f),v)}(s,o),u={i:s?5:4,A:a?a.A:Tc(),P:!1,I:!1,R:{},l:a,t:o,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,X,{value:u,writable:!0}),l},S:function(o,a,s){s?Sn(a)&&a[X].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[X];if(c){var f=c.t,d=c.k,g=c.R,v=c.i;if(v===4)Xn(d,function(m){m!==X&&(f[m]!==void 0||Ar(f,m)?g[m]||l(d[m]):(g[m]=!0,Xt(c)))}),Xn(f,function(m){d[m]!==void 0||Ar(d,m)||(g[m]=!1,Xt(c))});else if(v===5){if(r(c)&&(Xt(c),g.length=!0),d.length<f.length)for(var y=d.length;y<f.length;y++)g[y]=!1;else for(var S=f.length;S<d.length;S++)g[S]=!0;for(var p=Math.min(d.length,f.length),h=0;h<p;h++)d.hasOwnProperty(h)||(g[h]=!0),g[h]===void 0&&l(d[h])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Lp,ao,gd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",EI=typeof Map<"u",kI=typeof Set<"u",Dp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Vy=gd?Symbol.for("immer-nothing"):((Lp={})["immer-nothing"]=!0,Lp),Mp=gd?Symbol.for("immer-draftable"):"__$immer_draftable",X=gd?Symbol.for("immer-state"):"__$immer_state",bI=""+Object.prototype.constructor,Nr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ky=Object.getOwnPropertyDescriptors||function(e){var t={};return Nr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Nc={},so={get:function(e,t){if(t===X)return e;var n=Ln(e);if(!Ar(n,t))return function(i,o,a){var s,l=Ap(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Nt(r)?r:r===su(e.t,t)?(lu(e),e.o[t]=Ac(e.A.h,r,e)):r},has:function(e,t){return t in Ln(e)},ownKeys:function(e){return Reflect.ownKeys(Ln(e))},set:function(e,t,n){var r=Ap(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=su(Ln(e),t),o=i==null?void 0:i[X];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Wy(n,i)&&(n!==void 0||Ar(e.t,t)))return!0;lu(e),Xt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return su(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,lu(e),Xt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){rt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){rt(12)}},_i={};Xn(so,function(e,t){_i[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),_i.deleteProperty=function(e,t){return _i.set.call(this,e,t,void 0)},_i.set=function(e,t,n){return so.set.call(this,e[0],t,n,e[0])};var II=function(){function e(n){var r=this;this.g=Dp,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(y){var S=this;y===void 0&&(y=s);for(var p=arguments.length,h=Array(p>1?p-1:0),m=1;m<p;m++)h[m-1]=arguments[m];return l.produce(y,function(w){var E;return(E=o).call.apply(E,[S,w].concat(h))})}}var u;if(typeof o!="function"&&rt(6),a!==void 0&&typeof a!="function"&&rt(7),Nt(i)){var c=Tp(r),f=Ac(r,i,void 0),d=!0;try{u=o(f),d=!1}finally{d?cs(c):Rc(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return ou(c,a),au(y,c)},function(y){throw cs(c),y}):(ou(c,a),au(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Vy&&(u=void 0),r.D&&md(u,!0),a){var g=[],v=[];yt("Patches").M(i,u,g,v),a(g,v)}return u}rt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(f))})};var a,s,l=r.produce(i,o,function(u,c){a=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Nt(n)||rt(8),Sn(n)&&(n=SI(n));var r=Tp(this),i=Ac(this,n,void 0);return i[X].C=!0,Rc(r),i},t.finishDraft=function(n,r){var i=n&&n[X],o=i.A;return ou(o,r),au(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Dp&&rt(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=yt("Patches").$;return Sn(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),ze=new II,Gy=ze.produce;ze.produceWithPatches.bind(ze);ze.setAutoFreeze.bind(ze);ze.setUseProxies.bind(ze);ze.applyPatches.bind(ze);ze.createDraft.bind(ze);ze.finishDraft.bind(ze);function lo(e){return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lo(e)}function CI(e,t){if(lo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(lo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xI(e){var t=CI(e,"string");return lo(t)==="symbol"?t:String(t)}function PI(e,t,n){return t=xI(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Up(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$p(Object(n),!0).forEach(function(r){PI(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function be(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var jp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),uu=function(){return Math.random().toString(36).substring(7).split("").join(".")},hs={INIT:"@@redux/INIT"+uu(),REPLACE:"@@redux/REPLACE"+uu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+uu()}};function OI(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Yy(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(be(1));return n(Yy)(e,t)}if(typeof e!="function")throw new Error(be(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(be(3));return o}function f(y){if(typeof y!="function")throw new Error(be(4));if(l)throw new Error(be(5));var S=!0;return u(),s.push(y),function(){if(S){if(l)throw new Error(be(6));S=!1,u();var h=s.indexOf(y);s.splice(h,1),a=null}}}function d(y){if(!OI(y))throw new Error(be(7));if(typeof y.type>"u")throw new Error(be(8));if(l)throw new Error(be(9));try{l=!0,o=i(o,y)}finally{l=!1}for(var S=a=s,p=0;p<S.length;p++){var h=S[p];h()}return y}function g(y){if(typeof y!="function")throw new Error(be(10));i=y,d({type:hs.REPLACE})}function v(){var y,S=f;return y={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(be(11));function m(){h.next&&h.next(c())}m();var w=S(m);return{unsubscribe:w}}},y[jp]=function(){return this},y}return d({type:hs.INIT}),r={dispatch:d,subscribe:f,getState:c,replaceReducer:g},r[jp]=v,r}function TI(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:hs.INIT});if(typeof r>"u")throw new Error(be(12));if(typeof n(void 0,{type:hs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(be(13))})}function RI(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{TI(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var c=!1,f={},d=0;d<o.length;d++){var g=o[d],v=n[g],y=l[g],S=v(y,u);if(typeof S>"u")throw u&&u.type,new Error(be(14));f[g]=S,c=c||S!==y}return c=c||o.length!==Object.keys(l).length,c?f:l}}function ps(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function AI(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(be(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=ps.apply(void 0,s)(i.dispatch),Up(Up({},i),{},{dispatch:o})}}}function qy(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(s){return typeof s=="function"?s(i,o,e):a(s)}}};return t}var Qy=qy();Qy.withExtraArgument=qy;const Fp=Qy;var NI=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),LI=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ms=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},DI=Object.defineProperty,MI=Object.defineProperties,$I=Object.getOwnPropertyDescriptors,zp=Object.getOwnPropertySymbols,UI=Object.prototype.hasOwnProperty,jI=Object.prototype.propertyIsEnumerable,Bp=function(e,t,n){return t in e?DI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},mn=function(e,t){for(var n in t||(t={}))UI.call(t,n)&&Bp(e,n,t[n]);if(zp)for(var r=0,i=zp(t);r<i.length;r++){var n=i[r];jI.call(t,n)&&Bp(e,n,t[n])}return e},cu=function(e,t){return MI(e,$I(t))},FI=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(u){i(u)}},a=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})},zI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ps:ps.apply(null,arguments)};function BI(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var HI=function(e){NI(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ms([void 0],n[0].concat(this)))):new(t.bind.apply(t,ms([void 0],n.concat(this))))},t}(Array);function Lc(e){return Nt(e)?Gy(e,function(){}):e}function WI(e){return typeof e=="boolean"}function VI(){return function(t){return KI(t)}}function KI(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new HI;return n&&(WI(n)?r.push(Fp):r.push(Fp.withExtraArgument(n.extraArgument))),r}var GI=!0;function YI(e){var t=VI(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,d=f===void 0?void 0:f,g;if(typeof i=="function")g=i;else if(BI(i))g=RI(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var y=AI.apply(void 0,v),S=ps;l&&(S=zI(mn({trace:!GI},typeof l=="object"&&l)));var p=[y];Array.isArray(d)?p=ms([y],d):typeof d=="function"&&(p=d(p));var h=S.apply(void 0,p);return Yy(g,c,h)}function vn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return mn(mn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Jy(e){var t={},n=[],r,i={addCase:function(o,a){var s=typeof o=="string"?o:o.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function qI(e){return typeof e=="function"}function QI(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Jy(t):[t,n,r],o=i[0],a=i[1],s=i[2],l;if(qI(e))l=function(){return Lc(e())};else{var u=Lc(e);l=function(){return u}}function c(f,d){f===void 0&&(f=l());var g=ms([o[d.type]],a.filter(function(v){var y=v.matcher;return y(d)}).map(function(v){var y=v.reducer;return y}));return g.filter(function(v){return!!v}).length===0&&(g=[s]),g.reduce(function(v,y){if(y)if(Sn(v)){var S=v,p=y(S,d);return p===void 0?v:p}else{if(Nt(v))return Gy(v,function(h){return y(h,d)});var p=y(v,d);if(p===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return v},f)}return c.getInitialState=l,c}function JI(e,t){return e+"/"+t}function XI(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Lc(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},s={};i.forEach(function(c){var f=r[c],d=JI(t,c),g,v;"reducer"in f?(g=f.reducer,v=f.prepare):g=f,o[c]=g,a[d]=g,s[c]=v?vn(d,v):vn(d)});function l(){var c=typeof e.extraReducers=="function"?Jy(e.extraReducers):[e.extraReducers],f=c[0],d=f===void 0?{}:f,g=c[1],v=g===void 0?[]:g,y=c[2],S=y===void 0?void 0:y,p=mn(mn({},d),a);return QI(n,function(h){for(var m in p)h.addCase(m,p[m]);for(var w=0,E=v;w<E.length;w++){var C=E[w];h.addMatcher(C.matcher,C.reducer)}S&&h.addDefaultCase(S)})}var u;return{name:t,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var ZI="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",eC=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=ZI[Math.random()*64|0];return t},tC=["name","message","stack","code"],fu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Hp=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),nC=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=tC;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Xy=function(){function e(t,n,r){var i=vn(t+"/fulfilled",function(u,c,f,d){return{payload:u,meta:cu(mn({},d||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=vn(t+"/pending",function(u,c,f){return{payload:void 0,meta:cu(mn({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),a=vn(t+"/rejected",function(u,c,f,d,g){return{payload:d,error:(r&&r.serializeError||nC)(u||"Rejected"),meta:cu(mn({},g||{}),{arg:f,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,f,d){var g=r!=null&&r.idGenerator?r.idGenerator(u):eC(),v=new s,y;function S(h){y=h,v.abort()}var p=function(){return FI(this,null,function(){var h,m,w,E,C,x,R;return LI(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),E=(h=r==null?void 0:r.condition)==null?void 0:h.call(r,u,{getState:f,extra:d}),iC(E)?[4,E]:[3,2];case 1:E=D.sent(),D.label=2;case 2:if(E===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(N,ye){return v.signal.addEventListener("abort",function(){return ye({name:"AbortError",message:y||"Aborted"})})}),c(o(g,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:g,arg:u},{getState:f,extra:d}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:c,getState:f,extra:d,requestId:g,signal:v.signal,abort:S,rejectWithValue:function(N,ye){return new fu(N,ye)},fulfillWithValue:function(N,ye){return new Hp(N,ye)}})).then(function(N){if(N instanceof fu)throw N;return N instanceof Hp?i(N.payload,g,u,N.meta):i(N,g,u)})])];case 3:return w=D.sent(),[3,5];case 4:return x=D.sent(),w=x instanceof fu?a(null,g,u,x.payload,x.meta):a(x,g,u),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(w)&&w.meta.condition,R||c(w),[2,w]}})})}();return Object.assign(p,{abort:S,requestId:g,arg:u,unwrap:function(){return p.then(rC)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function rC(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function iC(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var yd="listenerMiddleware";vn(yd+"/add");vn(yd+"/removeAll");vn(yd+"/remove");var Wp;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);_I();function Zy(e,t){return function(){return e.apply(t,arguments)}}const{toString:e0}=Object.prototype,{getPrototypeOf:wd}=Object,Sd=(e=>t=>{const n=e0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ut=e=>(e=e.toLowerCase(),t=>Sd(t)===e),fl=e=>t=>typeof t===e,{isArray:ei}=Array,uo=fl("undefined");function oC(e){return e!==null&&!uo(e)&&e.constructor!==null&&!uo(e.constructor)&&_n(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const t0=Ut("ArrayBuffer");function aC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&t0(e.buffer),t}const sC=fl("string"),_n=fl("function"),n0=fl("number"),_d=e=>e!==null&&typeof e=="object",lC=e=>e===!0||e===!1,Ca=e=>{if(Sd(e)!=="object")return!1;const t=wd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},uC=Ut("Date"),cC=Ut("File"),fC=Ut("Blob"),dC=Ut("FileList"),hC=e=>_d(e)&&_n(e.pipe),pC=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||e0.call(e)===t||_n(e.toString)&&e.toString()===t)},mC=Ut("URLSearchParams"),vC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function To(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ei(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function r0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const i0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),o0=e=>!uo(e)&&e!==i0;function Dc(){const{caseless:e}=o0(this)&&this||{},t={},n=(r,i)=>{const o=e&&r0(t,i)||i;Ca(t[o])&&Ca(r)?t[o]=Dc(t[o],r):Ca(r)?t[o]=Dc({},r):ei(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&To(arguments[r],n);return t}const gC=(e,t,n,{allOwnKeys:r}={})=>(To(t,(i,o)=>{n&&_n(i)?e[o]=Zy(i,n):e[o]=i},{allOwnKeys:r}),e),yC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wC=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},SC=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&wd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},_C=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},EC=e=>{if(!e)return null;if(ei(e))return e;let t=e.length;if(!n0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wd(Uint8Array)),bC=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},IC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},CC=Ut("HTMLFormElement"),xC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Vp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),PC=Ut("RegExp"),a0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};To(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},OC=e=>{a0(e,(t,n)=>{if(_n(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_n(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TC=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ei(e)?r(e):r(String(e).split(t)),n},RC=()=>{},AC=(e,t)=>(e=+e,Number.isFinite(e)?e:t),du="abcdefghijklmnopqrstuvwxyz",Kp="0123456789",s0={DIGIT:Kp,ALPHA:du,ALPHA_DIGIT:du+du.toUpperCase()+Kp},NC=(e=16,t=s0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function LC(e){return!!(e&&_n(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const DC=e=>{const t=new Array(10),n=(r,i)=>{if(_d(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ei(r)?[]:{};return To(r,(a,s)=>{const l=n(a,i+1);!uo(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},_={isArray:ei,isArrayBuffer:t0,isBuffer:oC,isFormData:pC,isArrayBufferView:aC,isString:sC,isNumber:n0,isBoolean:lC,isObject:_d,isPlainObject:Ca,isUndefined:uo,isDate:uC,isFile:cC,isBlob:fC,isRegExp:PC,isFunction:_n,isStream:hC,isURLSearchParams:mC,isTypedArray:kC,isFileList:dC,forEach:To,merge:Dc,extend:gC,trim:vC,stripBOM:yC,inherits:wC,toFlatObject:SC,kindOf:Sd,kindOfTest:Ut,endsWith:_C,toArray:EC,forEachEntry:bC,matchAll:IC,isHTMLForm:CC,hasOwnProperty:Vp,hasOwnProp:Vp,reduceDescriptors:a0,freezeMethods:OC,toObjectSet:TC,toCamelCase:xC,noop:RC,toFiniteNumber:AC,findKey:r0,global:i0,isContextDefined:o0,ALPHABET:s0,generateString:NC,isSpecCompliantForm:LC,toJSONObject:DC};function F(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}_.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const l0=F.prototype,u0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{u0[e]={value:e}});Object.defineProperties(F,u0);Object.defineProperty(l0,"isAxiosError",{value:!0});F.from=(e,t,n,r,i,o)=>{const a=Object.create(l0);return _.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),F.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const MC=null;function Mc(e){return _.isPlainObject(e)||_.isArray(e)}function c0(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Gp(e,t,n){return e?e.concat(t).map(function(i,o){return i=c0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function $C(e){return _.isArray(e)&&!e.some(Mc)}const UC=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function dl(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!_.isUndefined(S[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(_.isDate(v))return v.toISOString();if(!l&&_.isBlob(v))throw new F("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(v)||_.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,y,S){let p=v;if(v&&!S&&typeof v=="object"){if(_.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(_.isArray(v)&&$C(v)||(_.isFileList(v)||_.endsWith(y,"[]"))&&(p=_.toArray(v)))return y=c0(y),p.forEach(function(m,w){!(_.isUndefined(m)||m===null)&&t.append(a===!0?Gp([y],w,o):a===null?y:y+"[]",u(m))}),!1}return Mc(v)?!0:(t.append(Gp(S,y,o),u(v)),!1)}const f=[],d=Object.assign(UC,{defaultVisitor:c,convertValue:u,isVisitable:Mc});function g(v,y){if(!_.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(v),_.forEach(v,function(p,h){(!(_.isUndefined(p)||p===null)&&i.call(t,p,_.isString(h)?h.trim():h,y,d))===!0&&g(p,y?y.concat(h):[h])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Yp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ed(e,t){this._pairs=[],e&&dl(e,this,t)}const f0=Ed.prototype;f0.append=function(t,n){this._pairs.push([t,n])};f0.toString=function(t){const n=t?function(r){return t.call(this,r,Yp)}:Yp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function jC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function d0(e,t,n){if(!t)return e;const r=n&&n.encode||jC,i=n&&n.serialize;let o;if(i?o=i(t,n):o=_.isURLSearchParams(t)?t.toString():new Ed(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class FC{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qp=FC,h0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zC=typeof URLSearchParams<"u"?URLSearchParams:Ed,BC=FormData,HC=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),WC=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),dt={isBrowser:!0,classes:{URLSearchParams:zC,FormData:BC,Blob},isStandardBrowserEnv:HC,isStandardBrowserWebWorkerEnv:WC,protocols:["http","https","file","blob","url","data"]};function VC(e,t){return dl(e,new dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return dt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function KC(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function GC(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function p0(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&_.isArray(i)?i.length:a,l?(_.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!_.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&_.isArray(i[a])&&(i[a]=GC(i[a])),!s)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,i)=>{t(KC(r),i,n,0)}),n}return null}const YC={"Content-Type":void 0};function qC(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const hl={transitional:h0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=_.isObject(t);if(o&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return i&&i?JSON.stringify(p0(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return VC(t,this.formSerializer).toString();if((s=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return dl(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),qC(t)):t}],transformResponse:[function(t){const n=this.transitional||hl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?F.from(s,F.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dt.classes.FormData,Blob:dt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){hl.headers[t]={}});_.forEach(["post","put","patch"],function(t){hl.headers[t]=_.merge(YC)});const kd=hl,QC=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),JC=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&QC[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qp=Symbol("internals");function hi(e){return e&&String(e).trim().toLowerCase()}function xa(e){return e===!1||e==null?e:_.isArray(e)?e.map(xa):String(e)}function XC(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function ZC(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function hu(e,t,n,r){if(_.isFunction(r))return r.call(this,t,n);if(_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function ex(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tx(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class pl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const c=hi(l);if(!c)throw new Error("header name must be a non-empty string");const f=_.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=xa(s))}const a=(s,l)=>_.forEach(s,(u,c)=>o(u,c,l));return _.isPlainObject(t)||t instanceof this.constructor?a(t,n):_.isString(t)&&(t=t.trim())&&!ZC(t)?a(JC(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=hi(t),t){const r=_.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return XC(i);if(_.isFunction(n))return n.call(this,i,r);if(_.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=hi(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||hu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=hi(a),a){const s=_.findKey(r,a);s&&(!n||hu(r,r[s],s,n))&&(delete r[s],i=!0)}}return _.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||hu(this,this[o],o,t))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return _.forEach(this,(i,o)=>{const a=_.findKey(r,o);if(a){n[a]=xa(i),delete n[o];return}const s=t?ex(o):String(o).trim();s!==o&&delete n[o],n[s]=xa(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Qp]=this[Qp]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=hi(a);r[s]||(tx(i,a),r[s]=!0)}return _.isArray(t)?t.forEach(o):o(t),this}}pl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods(pl.prototype);_.freezeMethods(pl);const xt=pl;function pu(e,t){const n=this||kd,r=t||n,i=xt.from(r.headers);let o=r.data;return _.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function m0(e){return!!(e&&e.__CANCEL__)}function Ro(e,t,n){F.call(this,e??"canceled",F.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(Ro,F,{__CANCEL__:!0});function nx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const rx=dt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),_.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),_.isString(o)&&l.push("path="+o),_.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ix(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ox(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function v0(e,t){return e&&!ix(t)?ox(e,t):t}const ax=dt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=_.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function sx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,d=0;for(;f!==i;)d+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const g=c&&u-c;return g?Math.round(d*1e3/g):void 0}}function Jp(e,t){let n=0;const r=lx(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const ux=typeof XMLHttpRequest<"u",cx=ux&&function(e){return new Promise(function(n,r){let i=e.data;const o=xt.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}_.isFormData(i)&&(dt.isStandardBrowserEnv||dt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+v))}const c=v0(e.baseURL,e.url);u.open(e.method.toUpperCase(),d0(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const g=xt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:e,request:u};nx(function(p){n(p),l()},function(p){r(p),l()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new F("Request aborted",F.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||h0;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new F(v,y.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,u)),u=null},dt.isStandardBrowserEnv){const g=(e.withCredentials||ax(c))&&e.xsrfCookieName&&rx.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&_.forEach(o.toJSON(),function(v,y){u.setRequestHeader(y,v)}),_.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Jp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Jp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=g=>{u&&(r(!g||g.type?new Ro(null,e,u):g),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=sx(c);if(d&&dt.protocols.indexOf(d)===-1){r(new F("Unsupported protocol "+d+":",F.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Pa={http:MC,xhr:cx};_.forEach(Pa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fx={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=_.isString(n)?Pa[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new F(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(Pa,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Pa};function mu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ro(null,e)}function Xp(e){return mu(e),e.headers=xt.from(e.headers),e.data=pu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),fx.getAdapter(e.adapter||kd.adapter)(e).then(function(r){return mu(e),r.data=pu.call(e,e.transformResponse,r),r.headers=xt.from(r.headers),r},function(r){return m0(r)||(mu(e),r&&r.response&&(r.response.data=pu.call(e,e.transformResponse,r.response),r.response.headers=xt.from(r.response.headers))),Promise.reject(r)})}const Zp=e=>e instanceof xt?e.toJSON():e;function Wr(e,t){t=t||{};const n={};function r(u,c,f){return _.isPlainObject(u)&&_.isPlainObject(c)?_.merge.call({caseless:f},u,c):_.isPlainObject(c)?_.merge({},c):_.isArray(c)?c.slice():c}function i(u,c,f){if(_.isUndefined(c)){if(!_.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!_.isUndefined(c))return r(void 0,c)}function a(u,c){if(_.isUndefined(c)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>i(Zp(u),Zp(c),!0)};return _.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,d=f(e[c],t[c],c);_.isUndefined(d)&&f!==s||(n[c]=d)}),n}const g0="1.3.2",bd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{bd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const em={};bd.transitional=function(t,n,r){function i(o,a){return"[Axios v"+g0+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new F(i(a," has been removed"+(n?" in "+n:"")),F.ERR_DEPRECATED);return n&&!em[a]&&(em[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function dx(e,t,n){if(typeof e!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new F("option "+o+" must be "+l,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F("Unknown option "+o,F.ERR_BAD_OPTION)}}const $c={assertOptions:dx,validators:bd},Bt=$c.validators;class vs{constructor(t){this.defaults=t,this.interceptors={request:new qp,response:new qp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Wr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&$c.assertOptions(r,{silentJSONParsing:Bt.transitional(Bt.boolean),forcedJSONParsing:Bt.transitional(Bt.boolean),clarifyTimeoutError:Bt.transitional(Bt.boolean)},!1),i!==void 0&&$c.assertOptions(i,{encode:Bt.function,serialize:Bt.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&_.merge(o.common,o[n.method]),a&&_.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=xt.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,d;if(!l){const v=[Xp.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),d=v.length,c=Promise.resolve(n);f<d;)c=c.then(v[f++],v[f++]);return c}d=s.length;let g=n;for(f=0;f<d;){const v=s[f++],y=s[f++];try{g=v(g)}catch(S){y.call(this,S);break}}try{c=Xp.call(this,g)}catch(v){return Promise.reject(v)}for(f=0,d=u.length;f<d;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Wr(this.defaults,t);const n=v0(t.baseURL,t.url);return d0(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){vs.prototype[t]=function(n,r){return this.request(Wr(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Wr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}vs.prototype[t]=n(),vs.prototype[t+"Form"]=n(!0)});const Oa=vs;class Id{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new Ro(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Id(function(i){t=i}),cancel:t}}}const hx=Id;function px(e){return function(n){return e.apply(null,n)}}function mx(e){return _.isObject(e)&&e.isAxiosError===!0}const Uc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Uc).forEach(([e,t])=>{Uc[t]=e});const vx=Uc;function y0(e){const t=new Oa(e),n=Zy(Oa.prototype.request,t);return _.extend(n,Oa.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return y0(Wr(e,i))},n}const fe=y0(kd);fe.Axios=Oa;fe.CanceledError=Ro;fe.CancelToken=hx;fe.isCancel=m0;fe.VERSION=g0;fe.toFormData=dl;fe.AxiosError=F;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=px;fe.isAxiosError=mx;fe.mergeConfig=Wr;fe.AxiosHeaders=xt;fe.formToJSON=e=>p0(_.isHTMLForm(e)?new FormData(e):e);fe.HttpStatusCode=vx;fe.default=fe;const w0=fe,S0="28c73f8f765d2a7a746b5f044c4d8a6e",_0="https://api.themoviedb.org/3/",gx={movies:[],genresLoaded:!1,genres:[]},E0=Xy("filmtime/genres",async()=>{const{data:{genres:e}}=await w0.get(`${_0}/genre/movie/list?api_key=${S0}`);return e}),yx=(e,t,n)=>{e.forEach(r=>{const i=[];r.genre_ids.forEach(o=>{const a=n.find(({id:s})=>s===o);a&&i.push(a.name)}),r.backdrop_path&&t.push({id:r.id,name:r!=null&&r.original_name?r.original_name:r.original_title,image:r.backdrop_path,genres:i.slice(0,3)})})},wx=async(e,t,n)=>{const r=[];for(let i=1;r.length<60&&i<10;i++){const{data:{results:o}}=await w0.get(`${e}${n?`&page=${i}`:""}`);yx(o,r,t)}return r},k0=Xy("filmtime/trending",async({type:e},t)=>{const{filmtime:{genres:n}}=t.getState();return wx(`${_0}/trending/${e}/week?api_key=${S0}`,n,!0)}),Sx=XI({name:"filmtime",initialState:gx,extraReducers:e=>{e.addCase(E0.fulfilled,(t,n)=>{t.genres=n.payload,t.genresLoaded=!0}),e.addCase(k0.fulfilled,(t,n)=>{t.movies=n.payload})}}),_x=YI({reducer:{filmtime:Sx.reducer}});const Ex="/filmtime/assets/Homebg-1cd5381a.jpg";function tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tm(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gs(e){return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function kx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bx(e,t,n){return t&&nm(e.prototype,t),n&&nm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cd(e,t){return Cx(e)||Px(e,t)||b0(e,t)||Tx()}function Ao(e){return Ix(e)||xx(e)||b0(e)||Ox()}function Ix(e){if(Array.isArray(e))return jc(e)}function Cx(e){if(Array.isArray(e))return e}function xx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Px(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function b0(e,t){if(e){if(typeof e=="string")return jc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jc(e,t)}}function jc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ox(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rm=function(){},xd={},I0={},C0=null,x0={mark:rm,measure:rm};try{typeof window<"u"&&(xd=window),typeof document<"u"&&(I0=document),typeof MutationObserver<"u"&&(C0=MutationObserver),typeof performance<"u"&&(x0=performance)}catch{}var Rx=xd.navigator||{},im=Rx.userAgent,om=im===void 0?"":im,En=xd,J=I0,am=C0,ta=x0;En.document;var jt=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",P0=~om.indexOf("MSIE")||~om.indexOf("Trident/"),na,ra,ia,oa,aa,Lt="___FONT_AWESOME___",Fc=16,O0="fa",T0="svg-inline--fa",Zn="data-fa-i2svg",zc="data-fa-pseudo-element",Ax="data-fa-pseudo-element-pending",Pd="data-prefix",Od="data-icon",sm="fontawesome-i2svg",Nx="async",Lx=["HTML","HEAD","STYLE","SCRIPT"],R0=function(){try{return!0}catch{return!1}}(),q="classic",ie="sharp",Td=[q,ie];function No(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var co=No((na={},de(na,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(na,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),na)),fo=No((ra={},de(ra,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(ra,ie,{solid:"fass"}),ra)),ho=No((ia={},de(ia,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(ia,ie,{fass:"fa-solid"}),ia)),Dx=No((oa={},de(oa,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(oa,ie,{"fa-solid":"fass"}),oa)),Mx=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,A0="fa-layers-text",$x=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ux=No((aa={},de(aa,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(aa,ie,{900:"fass"}),aa)),N0=[1,2,3,4,5,6,7,8,9,10],jx=N0.concat([11,12,13,14,15,16,17,18,19,20]),Fx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},po=new Set;Object.keys(fo[q]).map(po.add.bind(po));Object.keys(fo[ie]).map(po.add.bind(po));var zx=[].concat(Td,Ao(po),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",jn.GROUP,jn.SWAP_OPACITY,jn.PRIMARY,jn.SECONDARY]).concat(N0.map(function(e){return"".concat(e,"x")})).concat(jx.map(function(e){return"w-".concat(e)})),Ni=En.FontAwesomeConfig||{};function Bx(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hx(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Wx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wx.forEach(function(e){var t=Cd(e,2),n=t[0],r=t[1],i=Hx(Bx(n));i!=null&&(Ni[r]=i)})}var L0={styleDefault:"solid",familyDefault:"classic",cssPrefix:O0,replacementClass:T0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ni.familyPrefix&&(Ni.cssPrefix=Ni.familyPrefix);var Vr=P(P({},L0),Ni);Vr.autoReplaceSvg||(Vr.observeMutations=!1);var A={};Object.keys(L0).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){Vr[e]=n,Li.forEach(function(r){return r(A)})},get:function(){return Vr[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Vr.cssPrefix=t,Li.forEach(function(n){return n(A)})},get:function(){return Vr.cssPrefix}});En.FontAwesomeConfig=A;var Li=[];function Vx(e){return Li.push(e),function(){Li.splice(Li.indexOf(e),1)}}var Ht=Fc,ht={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kx(e){if(!(!e||!jt)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return J.head.insertBefore(t,r),e}}var Gx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mo(){for(var e=12,t="";e-- >0;)t+=Gx[Math.random()*62|0];return t}function ti(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Rd(e){return e.classList?ti(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function D0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yx(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(D0(e[n]),'" ')},"").trim()}function ml(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ad(e){return e.size!==ht.size||e.x!==ht.x||e.y!==ht.y||e.rotate!==ht.rotate||e.flipX||e.flipY}function qx(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Qx(e){var t=e.transform,n=e.width,r=n===void 0?Fc:n,i=e.height,o=i===void 0?Fc:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&P0?l+="translate(".concat(t.x/Ht-r/2,"em, ").concat(t.y/Ht-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ht,"em), calc(-50% + ").concat(t.y/Ht,"em)) "):l+="translate(".concat(t.x/Ht,"em, ").concat(t.y/Ht,"em) "),l+="scale(".concat(t.size/Ht*(t.flipX?-1:1),", ").concat(t.size/Ht*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Jx=`:root, :host {
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
}`;function M0(){var e=O0,t=T0,n=A.cssPrefix,r=A.replacementClass,i=Jx;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var lm=!1;function vu(){A.autoAddCss&&!lm&&(Kx(M0()),lm=!0)}var Xx={mixout:function(){return{dom:{css:M0,insertCss:vu}}},hooks:function(){return{beforeDOMElementCreation:function(){vu()},beforeI2svg:function(){vu()}}}},Dt=En||{};Dt[Lt]||(Dt[Lt]={});Dt[Lt].styles||(Dt[Lt].styles={});Dt[Lt].hooks||(Dt[Lt].hooks={});Dt[Lt].shims||(Dt[Lt].shims=[]);var it=Dt[Lt],$0=[],Zx=function e(){J.removeEventListener("DOMContentLoaded",e),ys=1,$0.map(function(t){return t()})},ys=!1;jt&&(ys=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),ys||J.addEventListener("DOMContentLoaded",Zx));function eP(e){jt&&(ys?setTimeout(e,0):$0.push(e))}function Lo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?D0(e):"<".concat(t," ").concat(Yx(r),">").concat(o.map(Lo).join(""),"</").concat(t,">")}function um(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var tP=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},gu=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?tP(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function nP(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Bc(e){var t=nP(e);return t.length===1?t[0].toString(16):null}function rP(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function cm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=cm(t);typeof it.hooks.addPack=="function"&&!i?it.hooks.addPack(e,cm(t)):it.styles[e]=P(P({},it.styles[e]||{}),o),e==="fas"&&Hc("fa",t)}var sa,la,ua,Sr=it.styles,iP=it.shims,oP=(sa={},de(sa,q,Object.values(ho[q])),de(sa,ie,Object.values(ho[ie])),sa),Nd=null,U0={},j0={},F0={},z0={},B0={},aP=(la={},de(la,q,Object.keys(co[q])),de(la,ie,Object.keys(co[ie])),la);function sP(e){return~zx.indexOf(e)}function lP(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!sP(i)?i:null}var H0=function(){var t=function(o){return gu(Sr,function(a,s,l){return a[l]=gu(s,o,{}),a},{})};U0=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),j0=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),B0=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in Sr||A.autoFetchSvg,r=gu(iP,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});F0=r.names,z0=r.unicodes,Nd=vl(A.styleDefault,{family:A.familyDefault})};Vx(function(e){Nd=vl(e.styleDefault,{family:A.familyDefault})});H0();function Ld(e,t){return(U0[e]||{})[t]}function uP(e,t){return(j0[e]||{})[t]}function Fn(e,t){return(B0[e]||{})[t]}function W0(e){return F0[e]||{prefix:null,iconName:null}}function cP(e){var t=z0[e],n=Ld("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kn(){return Nd}var Dd=function(){return{prefix:null,iconName:null,rest:[]}};function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,i=co[r][e],o=fo[r][e]||fo[r][i],a=e in it.styles?e:null;return o||a||null}var fm=(ua={},de(ua,q,Object.keys(ho[q])),de(ua,ie,Object.keys(ho[ie])),ua);function gl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},de(t,q,"".concat(A.cssPrefix,"-").concat(q)),de(t,ie,"".concat(A.cssPrefix,"-").concat(ie)),t),a=null,s=q;(e.includes(o[q])||e.some(function(u){return fm[q].includes(u)}))&&(s=q),(e.includes(o[ie])||e.some(function(u){return fm[ie].includes(u)}))&&(s=ie);var l=e.reduce(function(u,c){var f=lP(A.cssPrefix,c);if(Sr[c]?(c=oP[s].includes(c)?Dx[s][c]:c,a=c,u.prefix=c):aP[s].indexOf(c)>-1?(a=c,u.prefix=vl(c,{family:s})):f?u.iconName=f:c!==A.replacementClass&&c!==o[q]&&c!==o[ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=a==="fa"?W0(u.iconName):{},g=Fn(u.prefix,u.iconName);d.prefix&&(a=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Sr.far&&Sr.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},Dd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Sr.fass||A.autoFetchSvg)&&(l.prefix="fass",l.iconName=Fn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=kn()||"fas"),l}var fP=function(){function e(){kx(this,e),this.definitions={}}return bx(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),a[s]),Hc(s,a[s]);var l=ho[q][s];l&&Hc(l,a[s]),H0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),dm=[],_r={},Lr={},dP=Object.keys(Lr);function hP(e,t){var n=t.mixoutsTo;return dm=e,_r={},Object.keys(Lr).forEach(function(r){dP.indexOf(r)===-1&&delete Lr[r]}),dm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),gs(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){_r[a]||(_r[a]=[]),_r[a].push(o[a])})}r.provides&&r.provides(Lr)}),n}function Wc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=_r[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function er(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=_r[e]||[];i.forEach(function(o){o.apply(null,n)})}function Mt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lr[e]?Lr[e].apply(null,t):void 0}function Vc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||kn();if(t)return t=Fn(n,t)||t,um(V0.definitions,n,t)||um(it.styles,n,t)}var V0=new fP,pP=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,er("noAuto")},mP={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jt?(er("beforeI2svg",t),Mt("pseudoElements2svg",t),Mt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,eP(function(){gP({autoReplaceSvgRoot:n}),er("watch",t)})}},vP={icon:function(t){if(t===null)return null;if(gs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vl(t[0]);return{prefix:r,iconName:Fn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Mx))){var i=gl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||kn(),iconName:Fn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=kn();return{prefix:o,iconName:Fn(o,t)||t}}}},Ve={noAuto:pP,config:A,dom:mP,parse:vP,library:V0,findIconDefinition:Vc,toHtml:Lo},gP=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(it.styles).length>0||A.autoFetchSvg)&&jt&&A.autoReplaceSvg&&Ve.dom.i2svg({node:r})};function yl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Lo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(jt){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function yP(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Ad(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=ml(P(P({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function wP(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:a}),children:r}]}]}function Md(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,g=d===void 0?!1:d,v=r.found?r:n,y=v.width,S=v.height,p=i==="fak",h=[A.replacementClass,o?"".concat(A.cssPrefix,"-").concat(o):""].filter(function(D){return f.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(f.classes).join(" "),m={children:[],attributes:P(P({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};g&&(m.attributes[Zn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||mo())},children:[l]}),delete m.attributes.title);var E=P(P({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:P(P({},w),f.styles)}),C=r.found&&n.found?Mt("generateAbstractMask",E)||{children:[],attributes:{}}:Mt("generateAbstractIcon",E)||{children:[],attributes:{}},x=C.children,R=C.attributes;return E.children=x,E.attributes=R,s?wP(E):yP(E)}function hm(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=P(P(P({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Zn]="");var c=P({},a.styles);Ad(i)&&(c.transform=Qx({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ml(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function SP(e){var t=e.content,n=e.title,r=e.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ml(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var yu=it.styles;function Kc(e){var t=e[0],n=e[1],r=e.slice(4),i=Cd(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var _P={found:!1,width:512,height:512};function EP(e,t){!R0&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Gc(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=kn()),new Promise(function(r,i){if(Mt("missingIconAbstract"),n==="fa"){var o=W0(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&yu[t]&&yu[t][e]){var a=yu[t][e];return r(Kc(a))}EP(e,t),r(P(P({},_P),{},{icon:A.showMissingIcons&&e?Mt("missingIconAbstract")||{}:{}}))})}var pm=function(){},Yc=A.measurePerformance&&ta&&ta.mark&&ta.measure?ta:{mark:pm,measure:pm},Ei='FA "6.2.1"',kP=function(t){return Yc.mark("".concat(Ei," ").concat(t," begins")),function(){return K0(t)}},K0=function(t){Yc.mark("".concat(Ei," ").concat(t," ends")),Yc.measure("".concat(Ei," ").concat(t),"".concat(Ei," ").concat(t," begins"),"".concat(Ei," ").concat(t," ends"))},$d={begin:kP,end:K0},Ta=function(){};function mm(e){var t=e.getAttribute?e.getAttribute(Zn):null;return typeof t=="string"}function bP(e){var t=e.getAttribute?e.getAttribute(Pd):null,n=e.getAttribute?e.getAttribute(Od):null;return t&&n}function IP(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function CP(){if(A.autoReplaceSvg===!0)return Ra.replace;var e=Ra[A.autoReplaceSvg];return e||Ra.replace}function xP(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function PP(e){return J.createElement(e)}function G0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?xP:PP:n;if(typeof e=="string")return J.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(G0(a,{ceFn:r}))}),i}function OP(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ra={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(G0(i),n)}),n.getAttribute(Zn)===null&&A.keepOriginalSource){var r=J.createComment(OP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Rd(n).indexOf(A.replacementClass))return Ra.replace(t);var i=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===A.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return Lo(s)}).join(`
`);n.setAttribute(Zn,""),n.innerHTML=a}};function vm(e){e()}function Y0(e,t){var n=typeof t=="function"?t:Ta;if(e.length===0)n();else{var r=vm;A.mutateApproach===Nx&&(r=En.requestAnimationFrame||vm),r(function(){var i=CP(),o=$d.begin("mutate");e.map(i),o(),n()})}}var Ud=!1;function q0(){Ud=!0}function qc(){Ud=!1}var ws=null;function gm(e){if(am&&A.observeMutations){var t=e.treeCallback,n=t===void 0?Ta:t,r=e.nodeCallback,i=r===void 0?Ta:r,o=e.pseudoElementsCallback,a=o===void 0?Ta:o,s=e.observeMutationsRoot,l=s===void 0?J:s;ws=new am(function(u){if(!Ud){var c=kn();ti(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!mm(f.addedNodes[0])&&(A.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&A.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&mm(f.target)&&~Fx.indexOf(f.attributeName))if(f.attributeName==="class"&&bP(f.target)){var d=gl(Rd(f.target)),g=d.prefix,v=d.iconName;f.target.setAttribute(Pd,g||c),v&&f.target.setAttribute(Od,v)}else IP(f.target)&&i(f.target)})}}),jt&&ws.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function TP(){ws&&ws.disconnect()}function RP(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function AP(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=gl(Rd(e));return i.prefix||(i.prefix=kn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uP(i.prefix,e.innerText)||Ld(i.prefix,Bc(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function NP(e){var t=ti(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||mo()):(t["aria-hidden"]="true",t.focusable="false")),t}function LP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ht,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=AP(e),r=n.iconName,i=n.prefix,o=n.rest,a=NP(e),s=Wc("parseNodeAttributes",{},e),l=t.styleParser?RP(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ht,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var DP=it.styles;function Q0(e){var t=A.autoReplaceSvg==="nest"?ym(e,{styleParser:!1}):ym(e);return~t.extra.classes.indexOf(A0)?Mt("generateLayersText",e,t):Mt("generateSvgReplacementMutation",e,t)}var bn=new Set;Td.map(function(e){bn.add("fa-".concat(e))});Object.keys(co[q]).map(bn.add.bind(bn));Object.keys(co[ie]).map(bn.add.bind(bn));bn=Ao(bn);function wm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jt)return Promise.resolve();var n=J.documentElement.classList,r=function(f){return n.add("".concat(sm,"-").concat(f))},i=function(f){return n.remove("".concat(sm,"-").concat(f))},o=A.autoFetchSvg?bn:Td.map(function(c){return"fa-".concat(c)}).concat(Object.keys(DP));o.includes("fa")||o.push("fa");var a=[".".concat(A0,":not([").concat(Zn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Zn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=ti(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=$d.begin("onTree"),u=s.reduce(function(c,f){try{var d=Q0(f);d&&c.push(d)}catch(g){R0||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Y0(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function MP(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Q0(e).then(function(n){n&&Y0([n],t)})}function $P(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Vc(i||{})),e(r,P(P({},n),{},{mask:i}))}}var UP=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ht:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,y=n.classes,S=y===void 0?[]:y,p=n.attributes,h=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var E=t.prefix,C=t.iconName,x=t.icon;return yl(P({type:"icon"},t),function(){return er("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(d?h["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(v||mo()):(h["aria-hidden"]="true",h.focusable="false")),Md({icons:{main:Kc(x),mask:l?Kc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:P(P({},ht),i),symbol:a,title:d,maskId:c,titleId:v,extra:{attributes:h,styles:w,classes:S}})})}},jP={mixout:function(){return{icon:$P(UP)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wm,n.nodeCallback=MP,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?J:r,o=n.callback,a=o===void 0?function(){}:o;return wm(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,v){Promise.all([Gc(i,s),c.iconName?Gc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=Cd(y,2),p=S[0],h=S[1];g([n,Md({icons:{main:p,mask:h},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=ml(s);l.length>0&&(i.style=l);var u;return Ad(a)&&(u=Mt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},FP={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return yl({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(Ao(o)).join(" ")},children:a}]})}}}},zP={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return yl({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),SP({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(Ao(s))}})})}}}},BP={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?ht:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return yl({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),hm({content:n,transform:P(P({},ht),o),title:s,extra:{attributes:f,styles:g,classes:["".concat(A.cssPrefix,"-layers-text")].concat(Ao(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(P0){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return A.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,hm({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},HP=new RegExp('"',"ug"),Sm=[1105920,1112319];function WP(e){var t=e.replace(HP,""),n=rP(t,0),r=n>=Sm[0]&&n<=Sm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Bc(i?t[0]:t),isSecondary:r||i}}function _m(e,t){var n="".concat(Ax).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=ti(e.children),a=o.filter(function(x){return x.getAttribute(zc)===t})[0],s=En.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match($x),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ie:q,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?fo[d][l[2].toLowerCase()]:Ux[d][u],v=WP(f),y=v.value,S=v.isSecondary,p=l[0].startsWith("FontAwesome"),h=Ld(g,y),m=h;if(p){var w=cP(y);w.iconName&&w.prefix&&(h=w.iconName,g=w.prefix)}if(h&&!S&&(!a||a.getAttribute(Pd)!==g||a.getAttribute(Od)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var E=LP(),C=E.extra;C.attributes[zc]=t,Gc(h,g).then(function(x){var R=Md(P(P({},E),{},{icons:{main:x,mask:Dd()},prefix:g,iconName:m,extra:C,watchable:!0})),D=J.createElement("svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=R.map(function(N){return Lo(N)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function VP(e){return Promise.all([_m(e,"::before"),_m(e,"::after")])}function KP(e){return e.parentNode!==document.head&&!~Lx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Em(e){if(jt)return new Promise(function(t,n){var r=ti(e.querySelectorAll("*")).filter(KP).map(VP),i=$d.begin("searchPseudoElements");q0(),Promise.all(r).then(function(){i(),qc(),t()}).catch(function(){i(),qc(),n()})})}var GP={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Em,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?J:r;A.searchPseudoElements&&Em(i)}}},km=!1,YP={mixout:function(){return{dom:{unwatch:function(){q0(),km=!0}}}},hooks:function(){return{bootstrap:function(){gm(Wc("mutationObserverCallbacks",{}))},noAuto:function(){TP()},watch:function(n){var r=n.observeMutationsRoot;km?qc():gm(Wc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},bm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},qP={mixout:function(){return{parse:{transform:function(n){return bm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=bm(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")},g={outer:s,inner:f,path:d};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},wu={x:0,y:0,width:"100%",height:"100%"};function Im(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function QP(e){return e.tag==="g"?e.children:[e]}var JP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?gl(i.split(" ").map(function(a){return a.trim()})):Dd();return o.prefix||(o.prefix=kn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,d=a.icon,g=qx({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:P(P({},wu),{},{fill:"white"})},y=c.children?{children:c.children.map(Im)}:{},S={tag:"g",attributes:P({},g.inner),children:[Im(P({tag:c.tag,attributes:P(P({},c.attributes),g.path)},y))]},p={tag:"g",attributes:P({},g.outer),children:[S]},h="mask-".concat(s||mo()),m="clip-".concat(s||mo()),w={tag:"mask",attributes:P(P({},wu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:QP(d)},w]};return r.push(E,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},wu)}),{children:r,attributes:i}}}},XP={provides:function(t){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=P(P({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ZP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},eO=[Xx,jP,FP,zP,BP,GP,YP,qP,JP,XP,ZP];hP(eO,{mixoutsTo:Ve});Ve.noAuto;Ve.config;Ve.library;Ve.dom;var Qc=Ve.parse;Ve.findIconDefinition;Ve.toHtml;var tO=Ve.icon;Ve.layer;Ve.text;Ve.counter;var $={},nO={get exports(){return $},set exports(e){$=e}},rO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iO=rO,oO=iO;function J0(){}function X0(){}X0.resetWarningCache=J0;var aO=function(){function e(r,i,o,a,s,l){if(l!==oO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:X0,resetWarningCache:J0};return n.PropTypes=n,n};nO.exports=aO();function Cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cm(Object(n),!0).forEach(function(r){Er(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ss(e){return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ss(e)}function Er(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sO(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lO(e,t){if(e==null)return{};var n=sO(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jc(e){return uO(e)||cO(e)||fO(e)||dO()}function uO(e){if(Array.isArray(e))return Xc(e)}function cO(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fO(e,t){if(e){if(typeof e=="string")return Xc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xc(e,t)}}function Xc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hO(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,S=e.flip,p=e.size,h=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Er(t,"fa-".concat(p),typeof p<"u"&&p!==null),Er(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Er(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Er(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(E){return w[E]?E:null}).filter(function(E){return E})}function pO(e){return e=e-0,e===e}function Z0(e){return pO(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var mO=["style"];function vO(e){return e.charAt(0).toUpperCase()+e.slice(1)}function gO(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Z0(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[vO(i)]=o:t[i]=o,t},{})}function e1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return e1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=gO(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Z0(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=lO(n,mO);return i.attrs.style=nn(nn({},i.attrs.style),a),e.apply(void 0,[t.tag,nn(nn({},i.attrs),s)].concat(Jc(r)))}var t1=!1;try{t1=!0}catch{}function yO(){if(!t1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xm(e){if(e&&Ss(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Qc.icon)return Qc.icon(e);if(e===null)return null;if(e&&Ss(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Su(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Er({},e,t):{}}var me=go.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=xm(n),c=Su("classes",[].concat(Jc(hO(e)),Jc(o.split(" ")))),f=Su("transform",typeof e.transform=="string"?Qc.transform(e.transform):e.transform),d=Su("mask",xm(r)),g=tO(u,nn(nn(nn(nn({},c),f),d),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!g)return yO("Could not find icon",u),null;var v=g.abstract,y={ref:t};return Object.keys(e).forEach(function(S){me.defaultProps.hasOwnProperty(S)||(y[S]=e[S])}),wO(v[0],y)});me.displayName="FontAwesomeIcon";me.propTypes={beat:$.bool,border:$.bool,beatFade:$.bool,bounce:$.bool,className:$.string,fade:$.bool,flash:$.bool,mask:$.oneOfType([$.object,$.array,$.string]),maskId:$.string,fixedWidth:$.bool,inverse:$.bool,flip:$.oneOf([!0,!1,"horizontal","vertical","both"]),icon:$.oneOfType([$.object,$.array,$.string]),listItem:$.bool,pull:$.oneOf(["right","left"]),pulse:$.bool,rotation:$.oneOf([0,90,180,270]),shake:$.bool,size:$.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:$.bool,spinPulse:$.bool,spinReverse:$.bool,symbol:$.oneOfType([$.bool,$.string]),title:$.string,titleId:$.string,transform:$.oneOfType([$.string,$.object]),swapOpacity:$.bool};me.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var wO=e1.bind(null,go.createElement),SO={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},_O={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},EO={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},kO={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]},bO={prefix:"fas",iconName:"thumbs-down",icon:[512,512,[128078,61576],"f165","M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z"]},n1={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},IO={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},CO=IO,xO={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},PO={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},OO={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},TO={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},RO={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},AO={prefix:"fas",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"]};const r1="/filmtime/assets/movietrailer-a762508e.mp4";function NO({movieData:e,isLiked:t=!1}){const[n,r]=b.useState(!1),i=ir();return K("div",{className:"card--container",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[I("img",{src:`https://image.tmdb.org/t/p/w500${e.image}`,alt:e.name}),n&&K("div",{className:"card--hero",children:[K("div",{className:"img--video--container",children:[I("img",{src:`https://image.tmdb.org/t/p/w500${e.image}`,alt:e.name,onClick:()=>i("/player")}),I("video",{src:r1,autoPlay:!0,loop:!0,muted:!0,onClick:()=>i("/player")})]}),K("div",{className:"info--container",children:[I("h3",{children:e.name}),K("div",{className:"moviedata--icons",children:[K("div",{className:"controls",children:[I(me,{icon:n1,title:"play",onClick:()=>i("/player")}),I(me,{icon:bO,title:"Dislike"}),I(me,{icon:AO,title:"Like"}),t?I(me,{icon:RO,title:"Remove From List"}):I(me,{icon:TO,title:"Add to my List"})]}),I("div",{className:"info",children:I(me,{icon:xO,title:"More info"})})]})]}),I("div",{children:I("ul",{className:"genres",children:e.genres.map(o=>I("li",{children:o}))})})]})]})}function ar({data:e,title:t}){const[n,r]=b.useState(!1),[i,o]=b.useState(0),a=b.useRef(),s=l=>{let u=a.current.getBoundingClientRect().x-70;l==="left"&&i>0&&(a.current.style.transform=`translateX(${230+u}px)`,o(i-1)),l==="right"&&i<4&&(a.current.style.transform=`translateX(${-230+u}px)`,o(i+1))};return K("div",{className:"card-slider--wrapper",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[I("h2",{children:t}),K("div",{children:[I("div",{className:`slider--action left ${n?"":"none"}`,children:I(me,{icon:PO,onClick:()=>s("left")})}),I("div",{className:"card--wrapper",ref:a,children:e.map((l,u)=>I(NO,{movieData:l,index:u},l.id))}),I("div",{className:`slider--action right ${n?"":"none"}`,children:I(me,{icon:OO,onClick:()=>s("right")})})]})]})}function LO({movies:e}){const t=(n,r)=>e.slice(n,r);return K("div",{className:"cards--sliders--wrappers",children:[I(ar,{title:"Trending Now",data:t(0,10)}),I(ar,{title:"New Releases",data:t(10,20)}),I(ar,{title:"Blockbuster",data:t(20,30)}),I(ar,{title:"Popular on FilmTime",data:t(30,40)}),I(ar,{title:"Action Movies",data:t(40,50)}),I(ar,{title:"Epics",data:t(50,60)})]})}function DO(){const e=ir(),t=iu(o=>o.filmtime.genresLoaded),n=iu(o=>o.filmtime.movies),r=iu(o=>o.filmtime.genres),i=mI();return b.useEffect(()=>{i(E0())},[]),b.useEffect(()=>{t&&i(k0({genres:r,type:"all"}))},[t]),K(T1,{children:[K("div",{className:"hero",children:[I("img",{src:Ex,alt:"Background",className:"hero--bgimg"}),K("div",{className:"hero--info",children:[I("h1",{children:"Avatar"}),K("div",{className:"hero--btns--container",children:[I("button",{className:"hero--btn play--btn",title:"play",onClick:()=>e("player"),children:I(me,{icon:n1})}),K("button",{className:"hero--btn",children:[I(me,{icon:EO}),"More Info"]})]})]})]}),I(LO,{movies:n})]})}function MO(){const[e,t]=b.useState(),n=b.useRef(),r=b.useRef(),{signIn:i}=ad(),o=ir(),a=async s=>{s.preventDefault();try{t(""),await i(n.current.value,r.current.value),console.log("Login Successfully"),o("/")}catch(l){t("Unable to login"),console.log(l.message)}};return setTimeout(()=>{t(!1)},5e3),I("div",{className:"signup--container",children:K("form",{className:"form",onSubmit:a,children:[I("h2",{className:"signup--header",children:"Login"}),I("input",{type:"email",id:"email",placeholder:"Email Address",ref:n,required:!0}),I("input",{type:"password",id:"password",placeholder:"Password",ref:r,required:!0}),I("button",{type:"submit",className:"signup--btn",children:"Login"}),e&&I("p",{className:"signup--error",children:e}),K("p",{children:["Don't have an account? ",I(Dn,{to:"/signup",children:"Sign Up"})]})]})})}function $O(){const[e,t]=b.useState(),n=b.useRef(),r=b.useRef(),i=b.useRef(),{createUser:o}=ad(),a=ir(),s=async l=>{if(l.preventDefault(),r.current.value!==i.current.value)return l.target.reset(),t("Passwords do not match");try{t(""),await o(n.current.value,r.current.value),console.log("Signed Up Successfully"),a("/")}catch(u){t("Failed to create an account"),console.log(u.message)}};return setTimeout(()=>{t(!1)},5e3),I("div",{className:"signup--container",children:K("form",{className:"form",onSubmit:s,children:[I("h2",{className:"signup--header",children:"Sign Up"}),I("input",{type:"email",placeholder:"Email Address",ref:n,required:!0}),I("input",{type:"password",placeholder:"Password",ref:r,required:!0}),I("input",{type:"password",placeholder:"Confirm Password",ref:i,required:!0}),I("button",{type:"submit",className:"signup--btn",children:"Create Account"}),e&&I("p",{className:"signup--error",children:e}),K("p",{children:["Have an account? ",I(Dn,{to:"/login",children:"Login"})]})]})})}function UO(){const[e,t]=b.useState(),{user:n,logout:r}=ad(),i=ir(),o=async()=>{t("");try{await r(),i("/login"),console.log("Successfully logged out")}catch(a){t("Failed to log out"),console.log(a.message)}};return setTimeout(()=>{t(!1)},5e3),K("nav",{className:"nav--container",children:[K("div",{className:"nav--links",children:[I(Dn,{to:"/",children:"Movies"}),I(Dn,{to:"/",children:"Series"}),I(Dn,{to:"/",children:"My List"})]}),I("div",{className:"logo--wrapper",children:K(Dn,{to:"/",className:"logo",children:[I("h3",{children:"Film"}),I("span",{children:"Time"})]})}),K("div",{className:"nav--right",children:[K("div",{className:"search",children:[I("button",{children:I(me,{icon:CO})}),I("input",{type:"text",placeholder:"Search"})]}),n?I("button",{button:!0,className:"logout--btn",onClick:o,children:I(me,{icon:kO})}):I(Dn,{to:"/login",className:"login--btn",children:I(me,{icon:_O})}),e&&I("p",{className:"signup--error",children:e})]})]})}function jO(){const e=ir();return K("div",{className:"player--container",children:[I("button",{className:"hero--btn back--btn",onClick:()=>e(-1),children:I(me,{icon:SO})}),I("video",{src:r1,autoPlay:!0,loop:!0,controls:!0,muted:!0})]})}function FO(){return K("div",{className:"App",children:[I(UO,{}),K(O_,{children:[I(yi,{index:!0,path:"/",element:I(DO,{})}),I(yi,{exact:!0,path:"/Login",element:I(MO,{})}),I(yi,{exact:!0,path:"/signup",element:I($O,{})}),I(yi,{exact:!0,path:"/player",element:I(jO,{})})]})]})}Eu.createRoot(document.getElementById("root")).render(I(go.StrictMode,{children:I(L_,{children:I(dI,{store:_x,children:I(bb,{children:I(FO,{})})})})}));
