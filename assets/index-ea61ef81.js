function Ry(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ay(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fa={},Ny={get exports(){return fa},set exports(e){fa=e}},es={},E={},Ly={get exports(){return E},set exports(e){E=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),Dy=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),Uy=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),zy=Symbol.for("react.context"),Fy=Symbol.for("react.forward_ref"),By=Symbol.for("react.suspense"),Wy=Symbol.for("react.memo"),Vy=Symbol.for("react.lazy"),Jf=Symbol.iterator;function Hy(e){return e===null||typeof e!="object"?null:(e=Jf&&e[Jf]||e["@@iterator"],typeof e=="function"?e:null)}var Rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ap=Object.assign,Np={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Rp}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lp(){}Lp.prototype=Lr.prototype;function yc(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Rp}var wc=yc.prototype=new Lp;wc.constructor=yc;Ap(wc,Lr.prototype);wc.isPureReactComponent=!0;var Zf=Array.isArray,Dp=Object.prototype.hasOwnProperty,_c={current:null},Mp={key:!0,ref:!0,__self:!0,__source:!0};function $p(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Dp.call(t,r)&&!Mp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:eo,type:e,key:o,ref:a,props:i,_owner:_c.current}}function Ky(e,t){return{$$typeof:eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===eo}function Gy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ed=/\/+/g;function qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gy(""+e.key):t.toString(36)}function Go(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case eo:case Dy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+qs(a,0):r,Zf(i)?(n="",e!=null&&(n=e.replace(ed,"$&/")+"/"),Go(i,t,n,"",function(u){return u})):i!=null&&(Sc(i)&&(i=Ky(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ed,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+qs(o,s);a+=Go(o,t,n,l,i)}else if(l=Hy(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+qs(o,s++),a+=Go(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _o(e,t,n){if(e==null)return e;var r=[],i=0;return Go(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Yo={transition:null},Qy={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:_c};U.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!Sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Lr;U.Fragment=My;U.Profiler=Uy;U.PureComponent=yc;U.StrictMode=$y;U.Suspense=By;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ap({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=_c.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Dp.call(t,l)&&!Mp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:eo,type:e.type,key:i,ref:o,props:r,_owner:a}};U.createContext=function(e){return e={$$typeof:zy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jy,_context:e},e.Consumer=e};U.createElement=$p;U.createFactory=function(e){var t=$p.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Fy,render:e}};U.isValidElement=Sc;U.lazy=function(e){return{$$typeof:Vy,_payload:{_status:-1,_result:e},_init:Yy}};U.memo=function(e,t){return{$$typeof:Wy,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Ce.current.useCallback(e,t)};U.useContext=function(e){return Ce.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ce.current.useEffect(e,t)};U.useId=function(){return Ce.current.useId()};U.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ce.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};U.useRef=function(e){return Ce.current.useRef(e)};U.useState=function(e){return Ce.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ce.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(Ly);const to=Ay(E),Hl=Ry({__proto__:null,default:to},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=E,qy=Symbol.for("react.element"),Jy=Symbol.for("react.fragment"),Zy=Object.prototype.hasOwnProperty,e0=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t0={key:!0,ref:!0,__self:!0,__source:!0};function Up(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Zy.call(t,r)&&!t0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qy,type:e,key:o,ref:a,props:i,_owner:e0.current}}es.Fragment=Jy;es.jsx=Up;es.jsxs=Up;(function(e){e.exports=es})(Ny);const N=fa.jsx,me=fa.jsxs;var Kl={},da={},n0={get exports(){return da},set exports(e){da=e}},Ue={},Gl={},r0={get exports(){return Gl},set exports(e){Gl=e}},jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,D){var $=x.length;x.push(D);e:for(;0<$;){var ne=$-1>>>1,ue=x[ne];if(0<i(ue,D))x[ne]=D,x[$]=ue,$=ne;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var D=x[0],$=x.pop();if($!==D){x[0]=$;e:for(var ne=0,ue=x.length,yo=ue>>>1;ne<yo;){var _n=2*(ne+1)-1,Xs=x[_n],Sn=_n+1,wo=x[Sn];if(0>i(Xs,$))Sn<ue&&0>i(wo,Xs)?(x[ne]=wo,x[Sn]=$,ne=Sn):(x[ne]=Xs,x[_n]=$,ne=_n);else if(Sn<ue&&0>i(wo,$))x[ne]=wo,x[Sn]=$,ne=Sn;else break e}}return D}function i(x,D){var $=x.sortIndex-D.sortIndex;return $!==0?$:x.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,v=!1,g=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=x)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function w(x){if(y=!1,m(x),!g)if(n(l)!==null)g=!0,Ys(S);else{var D=n(u);D!==null&&Qs(w,D.startTime-x)}}function S(x,D){g=!1,y&&(y=!1,p(O),O=-1),v=!0;var $=h;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||x&&!he());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ue=ne(f.expirationTime<=D);D=e.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var yo=!0;else{var _n=n(u);_n!==null&&Qs(w,_n.startTime-D),yo=!1}return yo}finally{f=null,h=$,v=!1}}var b=!1,I=null,O=-1,L=5,R=-1;function he(){return!(e.unstable_now()-R<L)}function Vr(){if(I!==null){var x=e.unstable_now();R=x;var D=!0;try{D=I(!0,x)}finally{D?Hr():(b=!1,I=null)}}else b=!1}var Hr;if(typeof d=="function")Hr=function(){d(Vr)};else if(typeof MessageChannel<"u"){var qf=new MessageChannel,Ty=qf.port2;qf.port1.onmessage=Vr,Hr=function(){Ty.postMessage(null)}}else Hr=function(){_(Vr,0)};function Ys(x){I=x,b||(b=!0,Hr())}function Qs(x,D){O=_(function(){x(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Ys(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var $=h;h=D;try{return x()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,D){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var $=h;h=x;try{return D()}finally{h=$}},e.unstable_scheduleCallback=function(x,D,$){var ne=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,x){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=$+ue,x={id:c++,callback:D,priorityLevel:x,startTime:$,expirationTime:ue,sortIndex:-1},$>ne?(x.sortIndex=$,t(u,x),n(l)===null&&x===n(u)&&(y?(p(O),O=-1):y=!0,Qs(w,$-ne))):(x.sortIndex=ue,t(l,x),g||v||(g=!0,Ys(S))),x},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(x){var D=h;return function(){var $=h;h=D;try{return x.apply(this,arguments)}finally{h=$}}}})(jp);(function(e){e.exports=jp})(r0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=E,Me=Gl;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,ki={};function Hn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(ki[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,i0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,td={},nd={};function o0(e){return Yl.call(nd,e)?!0:Yl.call(td,e)?!1:i0.test(e)?nd[e]=!0:(td[e]=!0,!1)}function a0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s0(e,t,n,r){if(t===null||typeof t>"u"||a0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(kc,Ec);ge[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(kc,Ec);ge[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(kc,Ec);ge[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function bc(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s0(t,n,i,r)&&(n=null),r||i===null?o0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),Ic=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),Pc=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),rd=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=rd&&e[rd]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Js;function ti(e){if(Js===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Js=t&&t[1]||""}return`
`+Js+e}var Zs=!1;function el(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function l0(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Qn:return"Portal";case Ql:return"Profiler";case Ic:return"StrictMode";case Xl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wp:return(e.displayName||"Context")+".Consumer";case Bp:return(e._context.displayName||"Context")+".Provider";case Cc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pc:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function u0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c0(e){var t=Hp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=c0(e))}function Kp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function id(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gp(e,t){t=t.checked,t!=null&&bc(e,"checked",t,!1)}function eu(e,t){Gp(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&tu(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tu(e,t,n){(t!=="number"||ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(ni(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function Yp(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,Xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){f0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var d0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(e,t){if(t){if(d0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,hr=null,pr=null;function ld(e){if(e=io(e)){if(typeof su!="function")throw Error(k(280));var t=e.stateNode;t&&(t=os(t),su(e.stateNode,e.type,t))}}function Zp(e){hr?pr?pr.push(e):pr=[e]:hr=e}function em(){if(hr){var e=hr,t=pr;if(pr=hr=null,ld(e),t)for(e=0;e<t.length;e++)ld(t[e])}}function tm(e,t){return e(t)}function nm(){}var tl=!1;function rm(e,t,n){if(tl)return e(t,n);tl=!0;try{return tm(e,t,n)}finally{tl=!1,(hr!==null||pr!==null)&&(nm(),em())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=os(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var lu=!1;if(kt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{lu=!1}function h0(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var fi=!1,pa=null,ma=!1,uu=null,p0={onError:function(e){fi=!0,pa=e}};function m0(e,t,n,r,i,o,a,s,l){fi=!1,pa=null,h0.apply(p0,arguments)}function v0(e,t,n,r,i,o,a,s,l){if(m0.apply(this,arguments),fi){if(fi){var u=pa;fi=!1,pa=null}else throw Error(k(198));ma||(ma=!0,uu=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function im(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(Kn(e)!==e)throw Error(k(188))}function g0(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ud(i),e;if(o===r)return ud(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function om(e){return e=g0(e),e!==null?am(e):null}function am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=am(e);if(t!==null)return t;e=e.sibling}return null}var sm=Me.unstable_scheduleCallback,cd=Me.unstable_cancelCallback,y0=Me.unstable_shouldYield,w0=Me.unstable_requestPaint,re=Me.unstable_now,_0=Me.unstable_getCurrentPriorityLevel,Oc=Me.unstable_ImmediatePriority,lm=Me.unstable_UserBlockingPriority,va=Me.unstable_NormalPriority,S0=Me.unstable_LowPriority,um=Me.unstable_IdlePriority,ts=null,ut=null;function k0(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:I0,E0=Math.log,b0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(E0(e)/b0|0)|0}var bo=64,Io=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ri(s):(o&=a,o!==0&&(r=ri(o)))}else a=n&~i,a!==0?r=ri(a):o!==0&&(r=ri(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function C0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-tt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=C0(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cm(){var e=bo;return bo<<=1,!(bo&4194240)&&(bo=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function x0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function fm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dm,Rc,hm,pm,mm,fu=!1,Co=[],Xt=null,qt=null,Jt=null,Ii=new Map,Ci=new Map,jt=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&Rc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function T0(e,t,n,r,i){switch(t){case"focusin":return Xt=Yr(Xt,e,t,n,r,i),!0;case"dragenter":return qt=Yr(qt,e,t,n,r,i),!0;case"mouseover":return Jt=Yr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ii.set(o,Yr(Ii.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ci.set(o,Yr(Ci.get(o)||null,e,t,n,r,i)),!0}return!1}function vm(e){var t=Cn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=im(n),t!==null){e.blockedOn=t,mm(e.priority,function(){hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return t=io(n),t!==null&&Rc(t),e.blockedOn=n,!1;t.shift()}return!0}function dd(e,t,n){Qo(e)&&n.delete(t)}function R0(){fu=!1,Xt!==null&&Qo(Xt)&&(Xt=null),qt!==null&&Qo(qt)&&(qt=null),Jt!==null&&Qo(Jt)&&(Jt=null),Ii.forEach(dd),Ci.forEach(dd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,fu||(fu=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,R0)))}function Pi(e){function t(i){return Qr(i,e)}if(0<Co.length){Qr(Co[0],e);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Qr(Xt,e),qt!==null&&Qr(qt,e),Jt!==null&&Qr(Jt,e),Ii.forEach(t),Ci.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)vm(n),n.blockedOn===null&&jt.shift()}var mr=At.ReactCurrentBatchConfig,ya=!0;function A0(e,t,n,r){var i=z,o=mr.transition;mr.transition=null;try{z=1,Ac(e,t,n,r)}finally{z=i,mr.transition=o}}function N0(e,t,n,r){var i=z,o=mr.transition;mr.transition=null;try{z=4,Ac(e,t,n,r)}finally{z=i,mr.transition=o}}function Ac(e,t,n,r){if(ya){var i=du(e,t,n,r);if(i===null)dl(e,t,r,wa,n),fd(e,r);else if(T0(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<O0.indexOf(e)){for(;i!==null;){var o=io(i);if(o!==null&&dm(o),o=du(e,t,n,r),o===null&&dl(e,t,r,wa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var wa=null;function du(e,t,n,r){if(wa=null,e=xc(r),e=Cn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=im(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wa=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case Oc:return 1;case lm:return 4;case va:case S0:return 16;case um:return 536870912;default:return 16}default:return 16}}var Kt=null,Nc=null,Xo=null;function ym(){if(Xo)return Xo;var e,t=Nc,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Xo=i.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function hd(){return!1}function je(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Po:hd,this.isPropagationStopped=hd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=je(Dr),ro=Z({},Dr,{view:0,detail:0}),L0=je(ro),rl,il,Xr,ns=Z({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(rl=e.screenX-Xr.screenX,il=e.screenY-Xr.screenY):il=rl=0,Xr=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:il}}),pd=je(ns),D0=Z({},ns,{dataTransfer:0}),M0=je(D0),$0=Z({},ro,{relatedTarget:0}),ol=je($0),U0=Z({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=je(U0),z0=Z({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=je(z0),B0=Z({},Dr,{data:0}),md=je(B0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=H0[e])?!!t[e]:!1}function Dc(){return K0}var G0=Z({},ro,{key:function(e){if(e.key){var t=W0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=je(G0),Q0=Z({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=je(Q0),X0=Z({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),q0=je(X0),J0=Z({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=je(J0),e1=Z({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t1=je(e1),n1=[9,13,27,32],Mc=kt&&"CompositionEvent"in window,di=null;kt&&"documentMode"in document&&(di=document.documentMode);var r1=kt&&"TextEvent"in window&&!di,wm=kt&&(!Mc||di&&8<di&&11>=di),gd=String.fromCharCode(32),yd=!1;function _m(e,t){switch(e){case"keyup":return n1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function i1(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(yd=!0,gd);case"textInput":return e=t.data,e===gd&&yd?null:e;default:return null}}function o1(e,t){if(qn)return e==="compositionend"||!Mc&&_m(e,t)?(e=ym(),Xo=Nc=Kt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wm&&t.locale!=="ko"?null:t.data;default:return null}}var a1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a1[e.type]:t==="textarea"}function km(e,t,n,r){Zp(r),t=_a(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hi=null,xi=null;function s1(e){Nm(e,0)}function rs(e){var t=er(e);if(Kp(t))return e}function l1(e,t){if(e==="change")return t}var Em=!1;if(kt){var al;if(kt){var sl="oninput"in document;if(!sl){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),sl=typeof _d.oninput=="function"}al=sl}else al=!1;Em=al&&(!document.documentMode||9<document.documentMode)}function Sd(){hi&&(hi.detachEvent("onpropertychange",bm),xi=hi=null)}function bm(e){if(e.propertyName==="value"&&rs(xi)){var t=[];km(t,xi,e,xc(e)),rm(s1,t)}}function u1(e,t,n){e==="focusin"?(Sd(),hi=t,xi=n,hi.attachEvent("onpropertychange",bm)):e==="focusout"&&Sd()}function c1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(xi)}function f1(e,t){if(e==="click")return rs(t)}function d1(e,t){if(e==="input"||e==="change")return rs(t)}function h1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:h1;function Oi(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yl.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Im(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Im(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cm(){for(var e=window,t=ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ha(e.document)}return t}function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p1(e){var t=Cm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Im(n.ownerDocument.documentElement,n)){if(r!==null&&$c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ed(n,o);var a=Ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m1=kt&&"documentMode"in document&&11>=document.documentMode,Jn=null,hu=null,pi=null,pu=!1;function bd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||Jn==null||Jn!==ha(r)||(r=Jn,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Oi(pi,r)||(pi=r,r=_a(hu,"onSelect"),0<r.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},ll={},Pm={};kt&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function is(e){if(ll[e])return ll[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pm)return ll[e]=t[n];return e}var xm=is("animationend"),Om=is("animationiteration"),Tm=is("animationstart"),Rm=is("transitionend"),Am=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Am.set(e,t),Hn(t,[e])}for(var ul=0;ul<Id.length;ul++){var cl=Id[ul],v1=cl.toLowerCase(),g1=cl[0].toUpperCase()+cl.slice(1);vn(v1,"on"+g1)}vn(xm,"onAnimationEnd");vn(Om,"onAnimationIteration");vn(Tm,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Rm,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Cd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,v0(r,t,void 0,e),e.currentTarget=null}function Nm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Cd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Cd(i,s,u),o=l}}}if(ma)throw e=uu,ma=!1,uu=null,e}function H(e,t){var n=t[wu];n===void 0&&(n=t[wu]=new Set);var r=e+"__bubble";n.has(r)||(Lm(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Lm(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[Oo]){e[Oo]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(y1.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,fl("selectionchange",!1,t))}}function Lm(e,t,n,r){switch(gm(t)){case 1:var i=A0;break;case 4:i=N0;break;default:i=Ac}n=i.bind(null,t,n,e),i=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Cn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}rm(function(){var u=o,c=xc(n),f=[];e:{var h=Am.get(e);if(h!==void 0){var v=Lc,g=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":v=Y0;break;case"focusin":g="focus",v=ol;break;case"focusout":g="blur",v=ol;break;case"beforeblur":case"afterblur":v=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=q0;break;case xm:case Om:case Tm:v=j0;break;case Rm:v=Z0;break;case"scroll":v=L0;break;case"wheel":v=t1;break;case"copy":case"cut":case"paste":v=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=vd}var y=(t&4)!==0,_=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=bi(d,p),w!=null&&y.push(Ri(d,w,m)))),_)break;d=d.return}0<y.length&&(h=new v(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==au&&(g=n.relatedTarget||n.fromElement)&&(Cn(g)||g[Et]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Cn(g):null,g!==null&&(_=Kn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=pd,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=vd,w="onPointerLeave",p="onPointerEnter",d="pointer"),_=v==null?h:er(v),m=g==null?h:er(g),h=new y(w,d+"leave",v,n,c),h.target=_,h.relatedTarget=m,w=null,Cn(c)===u&&(y=new y(p,d+"enter",g,n,c),y.target=m,y.relatedTarget=_,w=y),_=w,v&&g)t:{for(y=v,p=g,d=0,m=y;m;m=Yn(m))d++;for(m=0,w=p;w;w=Yn(w))m++;for(;0<d-m;)y=Yn(y),d--;for(;0<m-d;)p=Yn(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=Yn(y),p=Yn(p)}y=null}else y=null;v!==null&&Pd(f,h,v,y,!1),g!==null&&_!==null&&Pd(f,_,g,y,!0)}}e:{if(h=u?er(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=l1;else if(wd(h))if(Em)S=d1;else{S=c1;var b=u1}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=f1);if(S&&(S=S(e,u))){km(f,S,n,c);break e}b&&b(e,h,u),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&tu(h,"number",h.value)}switch(b=u?er(u):window,e){case"focusin":(wd(b)||b.contentEditable==="true")&&(Jn=b,hu=u,pi=null);break;case"focusout":pi=hu=Jn=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,bd(f,n,c);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":bd(f,n,c)}var I;if(Mc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else qn?_m(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(wm&&n.locale!=="ko"&&(qn||O!=="onCompositionStart"?O==="onCompositionEnd"&&qn&&(I=ym()):(Kt=c,Nc="value"in Kt?Kt.value:Kt.textContent,qn=!0)),b=_a(u,O),0<b.length&&(O=new md(O,e,null,n,c),f.push({event:O,listeners:b}),I?O.data=I:(I=Sm(n),I!==null&&(O.data=I)))),(I=r1?i1(e,n):o1(e,n))&&(u=_a(u,"onBeforeInput"),0<u.length&&(c=new md("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=I))}Nm(f,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _a(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=bi(e,n),o!=null&&r.unshift(Ri(e,o,i)),o=bi(e,t),o!=null&&r.push(Ri(e,o,i))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=bi(n,o),l!=null&&a.unshift(Ri(n,l,s))):i||(l=bi(n,o),l!=null&&a.push(Ri(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var w1=/\r\n?/g,_1=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(w1,`
`).replace(_1,"")}function To(e,t,n){if(t=xd(t),xd(e)!==t&&n)throw Error(k(425))}function Sa(){}var mu=null,vu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(E1)}:yu;function E1(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),st="__reactFiber$"+Mr,Ai="__reactProps$"+Mr,Et="__reactContainer$"+Mr,wu="__reactEvents$"+Mr,b1="__reactListeners$"+Mr,I1="__reactHandles$"+Mr;function Cn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Td(e);e!==null;){if(n=e[st])return n;e=Td(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[st]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function os(e){return e[Ai]||null}var _u=[],tr=-1;function gn(e){return{current:e}}function G(e){0>tr||(e.current=_u[tr],_u[tr]=null,tr--)}function V(e,t){tr++,_u[tr]=e.current,e.current=t}var fn={},ke=gn(fn),Te=gn(!1),Ln=fn;function Ir(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function ka(){G(Te),G(ke)}function Rd(e,t,n){if(ke.current!==fn)throw Error(k(168));V(ke,t),V(Te,n)}function Dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,u0(e)||"Unknown",i));return Z({},n,r)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Ln=ke.current,V(ke,e),V(Te,Te.current),!0}function Ad(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Dm(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(ke),V(ke,e)):G(Te),V(Te,n)}var vt=null,as=!1,pl=!1;function Mm(e){vt===null?vt=[e]:vt.push(e)}function C1(e){as=!0,Mm(e)}function yn(){if(!pl&&vt!==null){pl=!0;var e=0,t=z;try{var n=vt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,as=!1}catch(i){throw vt!==null&&(vt=vt.slice(e+1)),sm(Oc,yn),i}finally{z=t,pl=!1}}return null}var nr=[],rr=0,ba=null,Ia=0,Be=[],We=0,Dn=null,gt=1,yt="";function kn(e,t){nr[rr++]=Ia,nr[rr++]=ba,ba=e,Ia=t}function $m(e,t,n){Be[We++]=gt,Be[We++]=yt,Be[We++]=Dn,Dn=e;var r=gt;e=yt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gt=1<<32-tt(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function Uc(e){e.return!==null&&(kn(e,1),$m(e,1,0))}function jc(e){for(;e===ba;)ba=nr[--rr],nr[rr]=null,Ia=nr[--rr],nr[rr]=null;for(;e===Dn;)Dn=Be[--We],Be[We]=null,yt=Be[--We],Be[We]=null,gt=Be[--We],Be[We]=null}var De=null,Le=null,X=!1,Je=null;function Um(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Le=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Le=null,!0):!1;default:return!1}}function Su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ku(e){if(X){var t=Le;if(t){var n=t;if(!Nd(e,t)){if(Su(e))throw Error(k(418));t=Zt(n.nextSibling);var r=De;t&&Nd(e,t)?Um(r,n):(e.flags=e.flags&-4097|2,X=!1,De=e)}}else{if(Su(e))throw Error(k(418));e.flags=e.flags&-4097|2,X=!1,De=e}}}function Ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Ro(e){if(e!==De)return!1;if(!X)return Ld(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=Le)){if(Su(e))throw jm(),Error(k(418));for(;t;)Um(e,t),t=Zt(t.nextSibling)}if(Ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=De?Zt(e.stateNode.nextSibling):null;return!0}function jm(){for(var e=Le;e;)e=Zt(e.nextSibling)}function Cr(){Le=De=null,X=!1}function zc(e){Je===null?Je=[e]:Je.push(e)}var P1=At.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ca=gn(null),Pa=null,ir=null,Fc=null;function Bc(){Fc=ir=Pa=null}function Wc(e){var t=Ca.current;G(Ca),e._currentValue=t}function Eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Pa=e,Fc=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Fc!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Pa===null)throw Error(k(308));ir=e,Pa.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Pn=null;function Vc(e){Pn===null?Pn=[e]:Pn.push(e)}function zm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Vc(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,Vc(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tc(e,n)}}function Dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xa(e,t,n,r){var i=e.updateQueue;Ut=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(h=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(v,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(v,f,h):g,h==null)break e;f=Z({},f,h);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);$n|=a,e.lanes=a,e.memoizedState=f}}function Md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Bm=new zp.Component().refs;function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ss={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=nn(e),o=St(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(nt(t,e,i,r),Jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=nn(e),o=St(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(nt(t,e,i,r),Jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=nn(e),i=St(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(nt(t,e,r,n),Jo(t,e,r))}};function $d(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function Wm(e,t,n){var r=!1,i=fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Re(t)?Ln:ke.current,r=t.contextTypes,o=(r=r!=null)?Ir(e,i):fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Iu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bm,Hc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Re(t)?Ln:ke.current,i.context=Ir(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ss.enqueueReplaceState(i,i.state,null),xa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Bm&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ao(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jd(e){var t=e._init;return t(e._payload)}function Vm(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=rn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,w){return d===null||d.tag!==6?(d=Sl(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var S=m.type;return S===Xn?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$t&&jd(S)===d.type)?(w=i(d,m.props),w.ref=qr(p,d,m),w.return=p,w):(w=ia(m.type,m.key,m.props,null,p.mode,w),w.ref=qr(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=kl(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,S){return d===null||d.tag!==7?(d=An(m,p.mode,w,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Sl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case So:return m=ia(d.type,d.key,d.props,null,p.mode,m),m.ref=qr(p,null,d),m.return=p,m;case Qn:return d=kl(d,p.mode,m),d.return=p,d;case $t:var w=d._init;return f(p,w(d._payload),m)}if(ni(d)||Kr(d))return d=An(d,p.mode,m,null),d.return=p,d;Ao(p,d)}return null}function h(p,d,m,w){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case So:return m.key===S?l(p,d,m,w):null;case Qn:return m.key===S?u(p,d,m,w):null;case $t:return S=m._init,h(p,d,S(m._payload),w)}if(ni(m)||Kr(m))return S!==null?null:c(p,d,m,w,null);Ao(p,m)}return null}function v(p,d,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,s(d,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case So:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,S);case Qn:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,S);case $t:var b=w._init;return v(p,d,m,b(w._payload),S)}if(ni(w)||Kr(w))return p=p.get(m)||null,c(d,p,w,S,null);Ao(d,w)}return null}function g(p,d,m,w){for(var S=null,b=null,I=d,O=d=0,L=null;I!==null&&O<m.length;O++){I.index>O?(L=I,I=null):L=I.sibling;var R=h(p,I,m[O],w);if(R===null){I===null&&(I=L);break}e&&I&&R.alternate===null&&t(p,I),d=o(R,d,O),b===null?S=R:b.sibling=R,b=R,I=L}if(O===m.length)return n(p,I),X&&kn(p,O),S;if(I===null){for(;O<m.length;O++)I=f(p,m[O],w),I!==null&&(d=o(I,d,O),b===null?S=I:b.sibling=I,b=I);return X&&kn(p,O),S}for(I=r(p,I);O<m.length;O++)L=v(I,p,O,m[O],w),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?O:L.key),d=o(L,d,O),b===null?S=L:b.sibling=L,b=L);return e&&I.forEach(function(he){return t(p,he)}),X&&kn(p,O),S}function y(p,d,m,w){var S=Kr(m);if(typeof S!="function")throw Error(k(150));if(m=S.call(m),m==null)throw Error(k(151));for(var b=S=null,I=d,O=d=0,L=null,R=m.next();I!==null&&!R.done;O++,R=m.next()){I.index>O?(L=I,I=null):L=I.sibling;var he=h(p,I,R.value,w);if(he===null){I===null&&(I=L);break}e&&I&&he.alternate===null&&t(p,I),d=o(he,d,O),b===null?S=he:b.sibling=he,b=he,I=L}if(R.done)return n(p,I),X&&kn(p,O),S;if(I===null){for(;!R.done;O++,R=m.next())R=f(p,R.value,w),R!==null&&(d=o(R,d,O),b===null?S=R:b.sibling=R,b=R);return X&&kn(p,O),S}for(I=r(p,I);!R.done;O++,R=m.next())R=v(I,p,O,R.value,w),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?O:R.key),d=o(R,d,O),b===null?S=R:b.sibling=R,b=R);return e&&I.forEach(function(Vr){return t(p,Vr)}),X&&kn(p,O),S}function _(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Xn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case So:e:{for(var S=m.key,b=d;b!==null;){if(b.key===S){if(S=m.type,S===Xn){if(b.tag===7){n(p,b.sibling),d=i(b,m.props.children),d.return=p,p=d;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$t&&jd(S)===b.type){n(p,b.sibling),d=i(b,m.props),d.ref=qr(p,b,m),d.return=p,p=d;break e}n(p,b);break}else t(p,b);b=b.sibling}m.type===Xn?(d=An(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=ia(m.type,m.key,m.props,null,p.mode,w),w.ref=qr(p,d,m),w.return=p,p=w)}return a(p);case Qn:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=kl(m,p.mode,w),d.return=p,p=d}return a(p);case $t:return b=m._init,_(p,d,b(m._payload),w)}if(ni(m))return g(p,d,m,w);if(Kr(m))return y(p,d,m,w);Ao(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Sl(m,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return _}var Pr=Vm(!0),Hm=Vm(!1),oo={},ct=gn(oo),Ni=gn(oo),Li=gn(oo);function xn(e){if(e===oo)throw Error(k(174));return e}function Kc(e,t){switch(V(Li,t),V(Ni,e),V(ct,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ru(t,e)}G(ct),V(ct,t)}function xr(){G(ct),G(Ni),G(Li)}function Km(e){xn(Li.current);var t=xn(ct.current),n=ru(t,e.type);t!==n&&(V(Ni,e),V(ct,n))}function Gc(e){Ni.current===e&&(G(ct),G(Ni))}var q=gn(0);function Oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function Yc(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Zo=At.ReactCurrentDispatcher,vl=At.ReactCurrentBatchConfig,Mn=0,J=null,oe=null,ce=null,Ta=!1,mi=!1,Di=0,x1=0;function ye(){throw Error(k(321))}function Qc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Xc(e,t,n,r,i,o){if(Mn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?A1:N1,e=n(r,i),mi){o=0;do{if(mi=!1,Di=0,25<=o)throw Error(k(301));o+=1,ce=oe=null,t.updateQueue=null,Zo.current=L1,e=n(r,i)}while(mi)}if(Zo.current=Ra,t=oe!==null&&oe.next!==null,Mn=0,ce=oe=J=null,Ta=!1,t)throw Error(k(300));return e}function qc(){var e=Di!==0;return Di=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function Ge(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,oe=e;else{if(e===null)throw Error(k(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function Mi(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Mn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,J.lanes|=c,$n|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,rt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,$n|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);rt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gm(){}function Ym(e,t){var n=J,r=Ge(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Jc(qm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,$i(9,Xm.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(k(349));Mn&30||Qm(n,t,i)}return i}function Qm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xm(e,t,n,r){t.value=n,t.getSnapshot=r,Jm(t)&&Zm(e)}function qm(e,t,n){return n(function(){Jm(t)&&Zm(e)})}function Jm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function Zm(e){var t=bt(e,1);t!==null&&nt(t,e,1,-1)}function zd(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},t.queue=e,e=e.dispatch=R1.bind(null,J,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ev(){return Ge().memoizedState}function ea(e,t,n,r){var i=at();J.flags|=e,i.memoizedState=$i(1|t,n,void 0,r===void 0?null:r)}function ls(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,r!==null&&Qc(r,a.deps)){i.memoizedState=$i(t,n,o,r);return}}J.flags|=e,i.memoizedState=$i(1|t,n,o,r)}function Fd(e,t){return ea(8390656,8,e,t)}function Jc(e,t){return ls(2048,8,e,t)}function tv(e,t){return ls(4,2,e,t)}function nv(e,t){return ls(4,4,e,t)}function rv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iv(e,t,n){return n=n!=null?n.concat([e]):null,ls(4,4,rv.bind(null,t,e),n)}function Zc(){}function ov(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function av(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sv(e,t,n){return Mn&21?(rt(n,t)||(n=cm(),J.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function O1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),t()}finally{z=n,vl.transition=r}}function lv(){return Ge().memoizedState}function T1(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uv(e))cv(t,n);else if(n=zm(e,t,n,r),n!==null){var i=Ie();nt(n,e,r,i),fv(n,t,r)}}function R1(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uv(e))cv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,rt(s,a)){var l=t.interleaved;l===null?(i.next=i,Vc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=zm(e,t,i,r),n!==null&&(i=Ie(),nt(n,e,r,i),fv(n,t,r))}}function uv(e){var t=e.alternate;return e===J||t!==null&&t===J}function cv(e,t){mi=Ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tc(e,n)}}var Ra={readContext:Ke,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},A1={readContext:Ke,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ea(4194308,4,rv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=T1.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:zd,useDebugValue:Zc,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=zd(!1),t=e[0];return e=O1.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=at();if(X){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),fe===null)throw Error(k(349));Mn&30||Qm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fd(qm.bind(null,r,o,e),[e]),r.flags|=2048,$i(9,Xm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=at(),t=fe.identifierPrefix;if(X){var n=yt,r=gt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N1={readContext:Ke,useCallback:ov,useContext:Ke,useEffect:Jc,useImperativeHandle:iv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:av,useReducer:gl,useRef:ev,useState:function(){return gl(Mi)},useDebugValue:Zc,useDeferredValue:function(e){var t=Ge();return sv(t,oe.memoizedState,e)},useTransition:function(){var e=gl(Mi)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Ym,useId:lv,unstable_isNewReconciler:!1},L1={readContext:Ke,useCallback:ov,useContext:Ke,useEffect:Jc,useImperativeHandle:iv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:av,useReducer:yl,useRef:ev,useState:function(){return yl(Mi)},useDebugValue:Zc,useDeferredValue:function(e){var t=Ge();return oe===null?t.memoizedState=e:sv(t,oe.memoizedState,e)},useTransition:function(){var e=yl(Mi)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Ym,useId:lv,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=l0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var D1=typeof WeakMap=="function"?WeakMap:Map;function dv(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,Mu=r),Cu(e,t)},n}function hv(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cu(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new D1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Q1.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var M1=At.ReactCurrentOwner,Oe=!1;function be(e,t,n,r){t.child=e===null?Hm(t,null,n,r):Pr(t,e.child,n,r)}function Hd(e,t,n,r,i){n=n.render;var o=t.ref;return vr(t,i),r=Xc(e,t,n,r,o,i),n=qc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(X&&n&&Uc(t),t.flags|=1,be(e,t,r,i),t.child)}function Kd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!lf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pv(e,t,o,r,i)):(e=ia(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(a,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function pv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,It(e,t,i)}return Pu(e,t,n,r,i)}function mv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(ar,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(ar,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(ar,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(ar,Ne),Ne|=r;return be(e,t,i,n),t.child}function vv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pu(e,t,n,r,i){var o=Re(n)?Ln:ke.current;return o=Ir(t,o),vr(t,i),n=Xc(e,t,n,r,o,i),r=qc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(X&&r&&Uc(t),t.flags|=1,be(e,t,n,i),t.child)}function Gd(e,t,n,r,i){if(Re(n)){var o=!0;Ea(t)}else o=!1;if(vr(t,i),t.stateNode===null)ta(e,t),Wm(t,n,r),Iu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Re(n)?Ln:ke.current,u=Ir(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ud(t,a,r,u),Ut=!1;var h=t.memoizedState;a.state=h,xa(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Te.current||Ut?(typeof c=="function"&&(bu(t,n,c,r),l=t.memoizedState),(s=Ut||$d(t,n,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Xe(t.type,s),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=Re(n)?Ln:ke.current,l=Ir(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Ud(t,a,r,l),Ut=!1,h=t.memoizedState,a.state=h,xa(t,r,a,i);var g=t.memoizedState;s!==f||h!==g||Te.current||Ut?(typeof v=="function"&&(bu(t,n,v,r),g=t.memoizedState),(u=Ut||$d(t,n,u,r,h,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xu(e,t,n,r,o,i)}function xu(e,t,n,r,i,o){vv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ad(t,n,!1),It(e,t,o);r=t.stateNode,M1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,s,o)):be(e,t,s,o),t.memoizedState=r.state,i&&Ad(t,n,!0),t.child}function gv(e){var t=e.stateNode;t.pendingContext?Rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rd(e,t.context,!1),Kc(e,t.containerInfo)}function Yd(e,t,n,r,i){return Cr(),zc(i),t.flags|=256,be(e,t,n,r),t.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function yv(e,t,n){var r=t.pendingProps,i=q.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(q,i&1),e===null)return ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fs(a,r,0,null),e=An(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tu(n),t.memoizedState=Ou,e):ef(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $1(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=rn(s,o):(o=An(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Tu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ou,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ef(e,t){return t=fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&zc(r),Pr(t,e.child,null,n),e=ef(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(k(422))),No(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fs({mode:"visible",children:r.children},i,0,null),o=An(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pr(t,e.child,null,a),t.child.memoizedState=Tu(a),t.memoizedState=Ou,o);if(!(t.mode&1))return No(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=wl(o,r,void 0),No(e,t,a,r)}if(s=(a&e.childLanes)!==0,Oe||s){if(r=fe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),nt(r,e,i,-1))}return sf(),r=wl(Error(k(421))),No(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=X1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=Zt(i.nextSibling),De=t,X=!0,Je=null,e!==null&&(Be[We++]=gt,Be[We++]=yt,Be[We++]=Dn,gt=e.id,yt=e.overflow,Dn=t),t=ef(t,r.children),t.flags|=4096,t)}function Qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eu(e.return,t,n)}function _l(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_l(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_l(t,!0,n,null,o);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U1(e,t,n){switch(t.tag){case 3:gv(t),Cr();break;case 5:Km(t);break;case 1:Re(t.type)&&Ea(t);break;case 4:Kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?yv(e,t,n):(V(q,q.current&1),e=It(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,mv(e,t,n)}return It(e,t,n)}var _v,Ru,Sv,kv;_v=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};Sv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(ct.current);var o=null;switch(n){case"input":i=Zl(e,i),r=Zl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=nu(e,i),r=nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sa)}iu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ki.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ki.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};kv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j1(e,t,n){var r=t.pendingProps;switch(jc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Re(t.type)&&ka(),we(t),null;case 3:return r=t.stateNode,xr(),G(Te),G(ke),Yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ju(Je),Je=null))),Ru(e,t),we(t),null;case 5:Gc(t);var i=xn(Li.current);if(n=t.type,e!==null&&t.stateNode!=null)Sv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return we(t),null}if(e=xn(ct.current),Ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[Ai]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)H(ii[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":id(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ad(r,o),H("invalid",r)}iu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&To(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&To(r.textContent,s,e),i=["children",""+s]):ki.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":ko(r),od(r,o,!0);break;case"textarea":ko(r),sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Sa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[st]=t,e[Ai]=r,_v(e,t,!1,!1),t.stateNode=e;e:{switch(a=ou(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)H(ii[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":id(e,r),i=Zl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),H("invalid",e);break;case"textarea":ad(e,r),i=nu(e,r),H("invalid",e);break;default:i=r}iu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Jp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ei(e,l):typeof l=="number"&&Ei(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ki.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",e):l!=null&&bc(e,o,l,a))}switch(n){case"input":ko(e),od(e,r,!1);break;case"textarea":ko(e),sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)kv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=xn(Li.current),xn(ct.current),Ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return we(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Le!==null&&t.mode&1&&!(t.flags&128))jm(),Cr(),t.flags|=98560,o=!1;else if(o=Ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[st]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else Je!==null&&(ju(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ae===0&&(ae=3):sf())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return xr(),Ru(e,t),e===null&&Ti(t.stateNode.containerInfo),we(t),null;case 10:return Wc(t.type._context),we(t),null;case 17:return Re(t.type)&&ka(),we(t),null;case 19:if(G(q),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Jr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Oa(e),a!==null){for(t.flags|=128,Jr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Tr&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Oa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!X)return we(t),null}else 2*re()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return af(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function z1(e,t){switch(jc(t),t.tag){case 1:return Re(t.type)&&ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),G(Te),G(ke),Yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gc(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return xr(),null;case 10:return Wc(t.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Lo=!1,Se=!1,F1=typeof WeakSet=="function"?WeakSet:Set,P=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Au(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Xd=!1;function B1(e,t){if(mu=ya,e=Cm(),$c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=a),h===o&&++c===r&&(l=a),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vu={focusedElem:e,selectionRange:n},ya=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,_=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xe(t.type,y),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=Xd,Xd=!1,g}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Au(t,n,o)}i=i.next}while(i!==r)}}function us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ev(e){var t=e.alternate;t!==null&&(e.alternate=null,Ev(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ai],delete t[wu],delete t[b1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bv(e){return e.tag===5||e.tag===3||e.tag===4}function qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sa));else if(r!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var pe=null,qe=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Iv(e,t,n),n=n.sibling}function Iv(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ts,n)}catch{}switch(n.tag){case 5:Se||or(n,t);case 6:var r=pe,i=qe;pe=null,Lt(e,t,n),pe=r,qe=i,pe!==null&&(qe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(qe?(e=pe,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Pi(e)):hl(pe,n.stateNode));break;case 4:r=pe,i=qe,pe=n.stateNode.containerInfo,qe=!0,Lt(e,t,n),pe=r,qe=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Au(n,t,a),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!Se&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Lt(e,t,n),Se=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F1),t.forEach(function(r){var i=q1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,qe=!1;break e;case 3:pe=s.stateNode.containerInfo,qe=!0;break e;case 4:pe=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(pe===null)throw Error(k(160));Iv(o,a,i),pe=null,qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cv(t,e),t=t.sibling}function Cv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),ot(e),r&4){try{vi(3,e,e.return),us(3,e)}catch(y){ee(e,e.return,y)}try{vi(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Qe(t,e),ot(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(Qe(t,e),ot(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{Ei(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Gp(i,o),ou(s,a);var u=ou(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Jp(i,f):c==="dangerouslySetInnerHTML"?Xp(i,f):c==="children"?Ei(i,f):bc(i,c,f,u)}switch(s){case"input":eu(i,o);break;case"textarea":Yp(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?dr(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ai]=o}catch(y){ee(e,e.return,y)}}break;case 6:if(Qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ee(e,e.return,y)}}break;case 3:if(Qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Qe(t,e),ot(e);break;case 13:Qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rf=re())),r&4&&Jd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||c,Qe(t,e),Se=u):Qe(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(f=P=c;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:vi(4,h,h.return);break;case 1:or(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:or(h,h.return);break;case 22:if(h.memoizedState!==null){eh(f);continue}}v!==null?(v.return=h,P=v):eh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=qp("display",a))}catch(y){ee(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ee(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),ot(e),r&4&&Jd(e);break;case 21:break;default:Qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bv(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var o=qd(e);Du(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=qd(e);Lu(e,s,a);break;default:throw Error(k(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W1(e,t,n){P=e,Pv(e)}function Pv(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Lo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Se;s=Lo;var u=Se;if(Lo=a,(Se=l)&&!u)for(P=i;P!==null;)a=P,l=a.child,a.tag===22&&a.memoizedState!==null?th(i):l!==null?(l.return=a,P=l):th(i);for(;o!==null;)P=o,Pv(o),o=o.sibling;P=i,Lo=s,Se=u}Zd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Zd(e)}}function Zd(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Md(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Md(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Pi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Se||t.flags&512&&Nu(t)}catch(h){ee(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function eh(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function th(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{us(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{Nu(t)}catch(l){ee(t,o,l)}break;case 5:var a=t.return;try{Nu(t)}catch(l){ee(t,a,l)}}}catch(l){ee(t,t.return,l)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var V1=Math.ceil,Aa=At.ReactCurrentDispatcher,tf=At.ReactCurrentOwner,He=At.ReactCurrentBatchConfig,j=0,fe=null,ie=null,ve=0,Ne=0,ar=gn(0),ae=0,Ui=null,$n=0,cs=0,nf=0,gi=null,xe=null,rf=0,Tr=1/0,mt=null,Na=!1,Mu=null,tn=null,Do=!1,Gt=null,La=0,yi=0,$u=null,na=-1,ra=0;function Ie(){return j&6?re():na!==-1?na:na=re()}function nn(e){return e.mode&1?j&2&&ve!==0?ve&-ve:P1.transition!==null?(ra===0&&(ra=cm()),ra):(e=z,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function nt(e,t,n,r){if(50<yi)throw yi=0,$u=null,Error(k(185));no(e,n,r),(!(j&2)||e!==fe)&&(e===fe&&(!(j&2)&&(cs|=n),ae===4&&zt(e,ve)),Ae(e,r),n===1&&j===0&&!(t.mode&1)&&(Tr=re()+500,as&&yn()))}function Ae(e,t){var n=e.callbackNode;P0(e,t);var r=ga(e,e===fe?ve:0);if(r===0)n!==null&&cd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cd(n),t===1)e.tag===0?C1(nh.bind(null,e)):Mm(nh.bind(null,e)),k1(function(){!(j&6)&&yn()}),n=null;else{switch(fm(r)){case 1:n=Oc;break;case 4:n=lm;break;case 16:n=va;break;case 536870912:n=um;break;default:n=va}n=Dv(n,xv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xv(e,t){if(na=-1,ra=0,j&6)throw Error(k(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=ga(e,e===fe?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Da(e,r);else{t=r;var i=j;j|=2;var o=Tv();(fe!==e||ve!==t)&&(mt=null,Tr=re()+500,Rn(e,t));do try{G1();break}catch(s){Ov(e,s)}while(1);Bc(),Aa.current=o,j=i,ie!==null?t=0:(fe=null,ve=0,t=ae)}if(t!==0){if(t===2&&(i=cu(e),i!==0&&(r=i,t=Uu(e,i))),t===1)throw n=Ui,Rn(e,0),zt(e,r),Ae(e,re()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!H1(i)&&(t=Da(e,r),t===2&&(o=cu(e),o!==0&&(r=o,t=Uu(e,o))),t===1))throw n=Ui,Rn(e,0),zt(e,r),Ae(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:En(e,xe,mt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=rf+500-re(),10<t)){if(ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yu(En.bind(null,e,xe,mt),t);break}En(e,xe,mt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-tt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V1(r/1960))-r,10<r){e.timeoutHandle=yu(En.bind(null,e,xe,mt),r);break}En(e,xe,mt);break;case 5:En(e,xe,mt);break;default:throw Error(k(329))}}}return Ae(e,re()),e.callbackNode===n?xv.bind(null,e):null}function Uu(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Da(e,t),e!==2&&(t=xe,xe=n,t!==null&&ju(t)),e}function ju(e){xe===null?xe=e:xe.push.apply(xe,e)}function H1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~nf,t&=~cs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function nh(e){if(j&6)throw Error(k(327));gr();var t=ga(e,0);if(!(t&1))return Ae(e,re()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var r=cu(e);r!==0&&(t=r,n=Uu(e,r))}if(n===1)throw n=Ui,Rn(e,0),zt(e,t),Ae(e,re()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,xe,mt),Ae(e,re()),null}function of(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Tr=re()+500,as&&yn())}}function Un(e){Gt!==null&&Gt.tag===0&&!(j&6)&&gr();var t=j;j|=1;var n=He.transition,r=z;try{if(He.transition=null,z=1,e)return e()}finally{z=r,He.transition=n,j=t,!(j&6)&&yn()}}function af(){Ne=ar.current,G(ar)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S1(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:xr(),G(Te),G(ke),Yc();break;case 5:Gc(r);break;case 4:xr();break;case 13:G(q);break;case 19:G(q);break;case 10:Wc(r.type._context);break;case 22:case 23:af()}n=n.return}if(fe=e,ie=e=rn(e.current,null),ve=Ne=t,ae=0,Ui=null,nf=cs=$n=0,xe=gi=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Pn=null}return e}function Ov(e,t){do{var n=ie;try{if(Bc(),Zo.current=Ra,Ta){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ta=!1}if(Mn=0,ce=oe=J=null,mi=!1,Di=0,tf.current=null,n===null||n.return===null){ae=1,Ui=t,ie=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Wd(a);if(v!==null){v.flags&=-257,Vd(v,a,s,o,t),v.mode&1&&Bd(o,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){Bd(o,u,t),sf();break e}l=Error(k(426))}}else if(X&&s.mode&1){var _=Wd(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Vd(_,a,s,o,t),zc(Or(l,s));break e}}o=l=Or(l,s),ae!==4&&(ae=2),gi===null?gi=[o]:gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=dv(o,l,t);Dd(o,p);break e;case 1:s=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tn===null||!tn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=hv(o,s,t);Dd(o,w);break e}}o=o.return}while(o!==null)}Av(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Tv(){var e=Aa.current;return Aa.current=Ra,e===null?Ra:e}function sf(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!($n&268435455)&&!(cs&268435455)||zt(fe,ve)}function Da(e,t){var n=j;j|=2;var r=Tv();(fe!==e||ve!==t)&&(mt=null,Rn(e,t));do try{K1();break}catch(i){Ov(e,i)}while(1);if(Bc(),j=n,Aa.current=r,ie!==null)throw Error(k(261));return fe=null,ve=0,ae}function K1(){for(;ie!==null;)Rv(ie)}function G1(){for(;ie!==null&&!y0();)Rv(ie)}function Rv(e){var t=Lv(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Av(e):ie=t,tf.current=null}function Av(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z1(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=j1(n,t,Ne),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function En(e,t,n){var r=z,i=He.transition;try{He.transition=null,z=1,Y1(e,t,n,r)}finally{He.transition=i,z=r}return null}function Y1(e,t,n,r){do gr();while(Gt!==null);if(j&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(x0(e,o),e===fe&&(ie=fe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,Dv(va,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var a=z;z=1;var s=j;j|=4,tf.current=null,B1(e,n),Cv(n,e),p1(vu),ya=!!mu,vu=mu=null,e.current=n,W1(n),w0(),j=s,z=a,He.transition=o}else e.current=n;if(Do&&(Do=!1,Gt=e,La=i),o=e.pendingLanes,o===0&&(tn=null),k0(n.stateNode),Ae(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=Mu,Mu=null,e;return La&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===$u?yi++:(yi=0,$u=e):yi=0,yn(),null}function gr(){if(Gt!==null){var e=fm(La),t=He.transition,n=z;try{if(He.transition=null,z=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,La=0,j&6)throw Error(k(331));var i=j;for(j|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:vi(8,c,o)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var h=c.sibling,v=c.return;if(Ev(c),c===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){a=P;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,P=m;else e:for(a=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:us(9,s)}}catch(S){ee(s,s.return,S)}if(s===a){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if(j=i,yn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ts,e)}catch{}r=!0}return r}finally{z=n,He.transition=t}}return!1}function rh(e,t,n){t=Or(n,t),t=dv(e,t,1),e=en(e,t,1),t=Ie(),e!==null&&(no(e,1,t),Ae(e,t))}function ee(e,t,n){if(e.tag===3)rh(e,e,n);else for(;t!==null;){if(t.tag===3){rh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Or(n,e),e=hv(t,e,1),t=en(t,e,1),e=Ie(),t!==null&&(no(t,1,e),Ae(t,e));break}}t=t.return}}function Q1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>re()-rf?Rn(e,0):nf|=n),Ae(e,t)}function Nv(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=Ie();e=bt(e,t),e!==null&&(no(e,t,n),Ae(e,n))}function X1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nv(e,n)}function q1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Nv(e,n)}var Lv;Lv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,U1(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,X&&t.flags&1048576&&$m(t,Ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ta(e,t),e=t.pendingProps;var i=Ir(t,ke.current);vr(t,n),i=Xc(null,t,r,e,i,n);var o=qc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,Ea(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hc(t),i.updater=ss,t.stateNode=i,i._reactInternals=t,Iu(t,r,e,n),t=xu(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Uc(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ta(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Z1(r),e=Xe(r,e),i){case 0:t=Pu(null,t,r,e,n);break e;case 1:t=Gd(null,t,r,e,n);break e;case 11:t=Hd(null,t,r,e,n);break e;case 14:t=Kd(null,t,r,Xe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Pu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Gd(e,t,r,i,n);case 3:e:{if(gv(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Fm(e,t),xa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(k(423)),t),t=Yd(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(k(424)),t),t=Yd(e,t,r,n,i);break e}else for(Le=Zt(t.stateNode.containerInfo.firstChild),De=t,X=!0,Je=null,n=Hm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=It(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Km(t),e===null&&ku(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,gu(r,i)?a=null:o!==null&&gu(r,o)&&(t.flags|=32),vv(e,t),be(e,t,a,n),t.child;case 6:return e===null&&ku(t),null;case 13:return yv(e,t,n);case 4:return Kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Hd(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,V(Ca,r._currentValue),r._currentValue=a,o!==null)if(rt(o.value,a)){if(o.children===i.children&&!Te.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=St(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Eu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vr(t,n),i=Ke(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Kd(e,t,r,i,n);case 15:return pv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),ta(e,t),t.tag=1,Re(r)?(e=!0,Ea(t)):e=!1,vr(t,n),Wm(t,r,i),Iu(t,r,i,n),xu(null,t,r,!0,e,n);case 19:return wv(e,t,n);case 22:return mv(e,t,n)}throw Error(k(156,t.tag))};function Dv(e,t){return sm(e,t)}function J1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new J1(e,t,n,r)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z1(e){if(typeof e=="function")return lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cc)return 11;if(e===Pc)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ia(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")lf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xn:return An(n.children,i,o,t);case Ic:a=8,i|=8;break;case Ql:return e=Ve(12,n,t,i|2),e.elementType=Ql,e.lanes=o,e;case Xl:return e=Ve(13,n,t,i),e.elementType=Xl,e.lanes=o,e;case ql:return e=Ve(19,n,t,i),e.elementType=ql,e.lanes=o,e;case Vp:return fs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bp:a=10;break e;case Wp:a=9;break e;case Cc:a=11;break e;case Pc:a=14;break e;case $t:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ve(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function An(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function fs(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ew(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uf(e,t,n,r,i,o,a,s,l){return e=new ew(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ve(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(o),e}function tw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mv(e){if(!e)return fn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Re(n))return Dm(e,n,t)}return t}function $v(e,t,n,r,i,o,a,s,l){return e=uf(n,r,!0,e,i,o,a,s,l),e.context=Mv(null),n=e.current,r=Ie(),i=nn(n),o=St(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,no(e,i,r),Ae(e,r),e}function ds(e,t,n,r){var i=t.current,o=Ie(),a=nn(i);return n=Mv(n),t.context===null?t.context=n:t.pendingContext=n,t=St(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,a),e!==null&&(nt(e,i,a,o),Jo(e,i,a)),a}function Ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cf(e,t){ih(e,t),(e=e.alternate)&&ih(e,t)}function nw(){return null}var Uv=typeof reportError=="function"?reportError:function(e){console.error(e)};function ff(e){this._internalRoot=e}hs.prototype.render=ff.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ds(e,t,null,null)};hs.prototype.unmount=ff.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){ds(null,e,null,null)}),t[Et]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&vm(e)}};function df(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oh(){}function rw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ma(a);o.call(u)}}var a=$v(t,r,e,0,null,!1,!1,"",oh);return e._reactRootContainer=a,e[Et]=a.current,Ti(e.nodeType===8?e.parentNode:e),Un(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ma(l);s.call(u)}}var l=uf(e,0,!1,null,null,!1,!1,"",oh);return e._reactRootContainer=l,e[Et]=l.current,Ti(e.nodeType===8?e.parentNode:e),Un(function(){ds(t,l,n,r)}),l}function ms(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ma(a);s.call(l)}}ds(t,a,e,i)}else a=rw(n,t,e,i,r);return Ma(a)}dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(Tc(t,n|1),Ae(t,re()),!(j&6)&&(Tr=re()+500,yn()))}break;case 13:Un(function(){var r=bt(e,1);if(r!==null){var i=Ie();nt(r,e,1,i)}}),cf(e,1)}};Rc=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Ie();nt(t,e,134217728,n)}cf(e,134217728)}};hm=function(e){if(e.tag===13){var t=nn(e),n=bt(e,t);if(n!==null){var r=Ie();nt(n,e,t,r)}cf(e,t)}};pm=function(){return z};mm=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};su=function(e,t,n){switch(t){case"input":if(eu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=os(r);if(!i)throw Error(k(90));Kp(r),eu(r,i)}}}break;case"textarea":Yp(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};tm=of;nm=Un;var iw={usingClientEntryPoint:!1,Events:[io,er,os,Zp,em,of]},Zr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ow={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=om(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{ts=Mo.inject(ow),ut=Mo}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(t))throw Error(k(200));return tw(e,t,null,n)};Ue.createRoot=function(e,t){if(!df(e))throw Error(k(299));var n=!1,r="",i=Uv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uf(e,1,!1,null,null,n,!1,r,i),e[Et]=t.current,Ti(e.nodeType===8?e.parentNode:e),new ff(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=om(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return Un(e)};Ue.hydrate=function(e,t,n){if(!ps(t))throw Error(k(200));return ms(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!df(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$v(t,null,e,1,n??null,i,!1,o,a),e[Et]=t.current,Ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new hs(t)};Ue.render=function(e,t,n){if(!ps(t))throw Error(k(200));return ms(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!ps(e))throw Error(k(40));return e._reactRootContainer?(Un(function(){ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ue.unstable_batchedUpdates=of;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ps(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ms(e,t,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ue})(n0);var ah=da;Kl.createRoot=ah.createRoot,Kl.hydrateRoot=ah.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ji.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const sh="popstate";function aw(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=Gn(i.location.hash.substr(1));return zu("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:zi(o))}function r(i,o){sw(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return uw(t,n,r,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sw(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lw(){return Math.random().toString(36).substr(2,8)}function lh(e,t){return{usr:e.state,key:e.key,idx:t}}function zu(e,t,n,r){return n===void 0&&(n=null),ji({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gn(t):t,{state:n,key:t&&t.key||r||lw()})}function zi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Yt.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(ji({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=Yt.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:s,location:y.location,delta:p})}function h(_,p){s=Yt.Push;let d=zu(y.location,_,p);n&&n(d,_),u=c()+1;let m=lh(d,u),w=y.createHref(d);try{a.pushState(m,"",w)}catch{i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function v(_,p){s=Yt.Replace;let d=zu(y.location,_,p);n&&n(d,_),u=c();let m=lh(d,u),w=y.createHref(d);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function g(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:zi(_);return se(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return s},get location(){return e(i,a)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sh,f),l=_,()=>{i.removeEventListener(sh,f),l=null}},createHref(_){return t(i,_)},createURL:g,encodeLocation(_){let p=g(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(_){return a.go(_)}};return y}var uh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uh||(uh={}));function cw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Gn(t):t,i=Fv(r.pathname||"/",n);if(i==null)return null;let o=jv(e);fw(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=_w(o[s],Ew(i));return a}function jv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=on([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:yw(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of zv(o.path))i(o,a,l)}),t}function zv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=zv(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function fw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ww(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dw=/^:\w+$/,hw=3,pw=2,mw=1,vw=10,gw=-2,ch=e=>e==="*";function yw(e,t){let n=e.split("/"),r=n.length;return n.some(ch)&&(r+=gw),t&&(r+=pw),n.filter(i=>!ch(i)).reduce((i,o)=>i+(dw.test(o)?hw:o===""?mw:vw),r)}function ww(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function _w(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Sw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:on([i,c.pathname]),pathnameBase:Pw(on([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=on([i,c.pathnameBase]))}return o}function Sw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=bw(s[f]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function kw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ew(e){try{return decodeURI(e)}catch(t){return hf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bw(e,t){try{return decodeURIComponent(e)}catch(n){return hf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Fv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Gn(e):e;return{pathname:n?n.startsWith("/")?n:Cw(n,t):t,search:xw(r),hash:Ow(i)}}function Cw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Gn(e):(i=ji({},e),se(!i.pathname||!i.pathname.includes("?"),El("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),El("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),El("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=Iw(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const on=e=>e.join("/").replace(/\/\/+/g,"/"),Pw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ow=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rw=["post","put","patch","delete"];[...Rw];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fu.apply(this,arguments)}function Aw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nw=typeof Object.is=="function"?Object.is:Aw,{useState:Lw,useEffect:Dw,useLayoutEffect:Mw,useDebugValue:$w}=Hl;function Uw(e,t,n){const r=t(),[{inst:i},o]=Lw({inst:{value:r,getSnapshot:t}});return Mw(()=>{i.value=r,i.getSnapshot=t,bl(i)&&o({inst:i})},[e,r,t]),Dw(()=>(bl(i)&&o({inst:i}),e(()=>{bl(i)&&o({inst:i})})),[e]),$w(r),r}function bl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nw(n,r)}catch{return!0}}function jw(e,t,n){return t()}const zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fw=!zw,Bw=Fw?jw:Uw;"useSyncExternalStore"in Hl&&(e=>e.useSyncExternalStore)(Hl);const Vv=E.createContext(null),Hv=E.createContext(null),vs=E.createContext(null),gs=E.createContext(null),$r=E.createContext({outlet:null,matches:[]}),Kv=E.createContext(null);function Ww(e,t){let{relative:n}=t===void 0?{}:t;ao()||se(!1);let{basename:r,navigator:i}=E.useContext(vs),{hash:o,pathname:a,search:s}=Gv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:on([r,a])),i.createHref({pathname:l,search:s,hash:o})}function ao(){return E.useContext(gs)!=null}function ys(){return ao()||se(!1),E.useContext(gs).location}function Ur(){ao()||se(!1);let{basename:e,navigator:t}=E.useContext(vs),{matches:n}=E.useContext($r),{pathname:r}=ys(),i=JSON.stringify(Bv(n).map(s=>s.pathnameBase)),o=E.useRef(!1);return E.useEffect(()=>{o.current=!0}),E.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=Wv(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:on([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Gv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext($r),{pathname:i}=ys(),o=JSON.stringify(Bv(r).map(a=>a.pathnameBase));return E.useMemo(()=>Wv(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Vw(e,t){ao()||se(!1);let{navigator:n}=E.useContext(vs),r=E.useContext(Hv),{matches:i}=E.useContext($r),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=ys(),u;if(t){var c;let y=typeof t=="string"?Gn(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||se(!1),u=y}else u=l;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",v=cw(e,{pathname:h}),g=Yw(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:on([s,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:on([s,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&g?E.createElement(gs.Provider,{value:{location:Fu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Yt.Pop}},g):g}function Hw(){let e=Jw(),t=Tw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}class Kw extends E.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement($r.Provider,{value:this.props.routeContext},E.createElement(Kv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gw(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Vv);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement($r.Provider,{value:t},r)}function Yw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||se(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||E.createElement(Hw,null):null,c=t.concat(r.slice(0,s+1)),f=()=>E.createElement(Gw,{match:a,routeContext:{outlet:o,matches:c}},l?u:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||s===0)?E.createElement(Kw,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var fh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(fh||(fh={}));var $a;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})($a||($a={}));function Qw(e){let t=E.useContext(Hv);return t||se(!1),t}function Xw(e){let t=E.useContext($r);return t||se(!1),t}function qw(e){let t=Xw(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function Jw(){var e;let t=E.useContext(Kv),n=Qw($a.UseRouteError),r=qw($a.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function oi(e){se(!1)}function Zw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:o,static:a=!1}=e;ao()&&se(!1);let s=t.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Gn(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:v="default"}=r,g=E.useMemo(()=>{let y=Fv(u,s);return y==null?null:{pathname:y,search:c,hash:f,state:h,key:v}},[s,u,c,f,h,v]);return g==null?null:E.createElement(vs.Provider,{value:l},E.createElement(gs.Provider,{children:n,value:{location:g,navigationType:i}}))}function e_(e){let{children:t,location:n}=e,r=E.useContext(Vv),i=r&&!t?r.router.routes:Bu(t);return Vw(i,n)}var dh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(dh||(dh={}));new Promise(()=>{});function Bu(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){n.push.apply(n,Bu(r.props.children,t));return}r.type!==oi&&se(!1),!r.props.index||!r.props.children||se(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Bu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wu.apply(this,arguments)}function t_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function n_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function r_(e,t){return e.button===0&&(!t||t==="_self")&&!n_(e)}const i_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function o_(e){let{basename:t,children:n,window:r}=e,i=E.useRef();i.current==null&&(i.current=aw({window:r,v5Compat:!0}));let o=i.current,[a,s]=E.useState({action:o.action,location:o.location});return E.useLayoutEffect(()=>o.listen(s),[o]),E.createElement(Zw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const a_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sr=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=t_(t,i_),h=typeof u=="string"?u:zi(u),v=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),g=h,y=!1;if(a_&&v){let m=new URL(window.location.href),w=h.startsWith("//")?new URL(m.protocol+h):new URL(h);w.origin===m.origin?g=w.pathname+w.search+w.hash:y=!0}let _=Ww(g,{relative:i}),p=s_(g,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function d(m){r&&r(m),m.defaultPrevented||p(m)}return E.createElement("a",Wu({},f,{href:v?h:_,onClick:y||o?r:d,ref:n,target:l}))});var hh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(hh||(hh={}));var ph;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ph||(ph={}));function s_(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=Ur(),l=ys(),u=Gv(e,{relative:a});return E.useCallback(c=>{if(r_(c,n)){c.preventDefault();let f=r!==void 0?r:zi(l)===zi(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}/**
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
 */const Yv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},l_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Qv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4;let h=(s&15)<<2|u>>6,v=u&63;l||(v=64,a||(h=64)),r.push(n[c],n[f],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||f==null)throw Error();const h=o<<2|s>>4;if(r.push(h),u!==64){const v=s<<4&240|u>>2;if(r.push(v),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u_=function(e){const t=Yv(e);return Qv.encodeByteArray(t,!0)},Xv=function(e){return u_(e).replace(/\./g,"")},qv=function(e){try{return Qv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function c_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const f_=()=>c_().__FIREBASE_DEFAULTS__,d_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qv(e[1]);return t&&JSON.parse(t)},pf=()=>{try{return f_()||d_()||h_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},p_=e=>{var t,n;return(n=(t=pf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},m_=()=>{var e;return(e=pf())===null||e===void 0?void 0:e.config},Jv=e=>{var t;return(t=pf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class v_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function y_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function w_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function __(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S_(){try{return typeof indexedDB=="object"}catch{return!1}}function k_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const E_="FirebaseError";class wn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=E_,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?b_(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new wn(i,s,r)}}function b_(e,t){return e.replace(I_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const I_=/\{\$([^}]+)}/g;function C_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ua(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(mh(o)&&mh(a)){if(!Ua(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mh(e){return e!==null&&typeof e=="object"}/**
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
 */function lo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function si(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function P_(e,t){const n=new x_(e,t);return n.subscribe.bind(n)}class x_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");O_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Il),i.error===void 0&&(i.error=Il),i.complete===void 0&&(i.complete=Il);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Il(){}/**
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
 */function pt(e){return e&&e._delegate?e._delegate:e}class Rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const bn="[DEFAULT]";/**
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
 */let T_=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new v_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(A_(t))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=bn){return this.instances.has(t)}getOptions(t=bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=bn){return this.component?this.component.multipleInstances?t:bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function R_(e){return e===bn?void 0:e}function A_(e){return e.instantiationMode==="EAGER"}/**
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
 */class N_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new T_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const L_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},D_=W.INFO,M_={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},$_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=M_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zv{constructor(t){this.name=t,this._logLevel=D_,this._logHandler=$_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?L_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const U_=(e,t)=>t.some(n=>e instanceof n);let vh,gh;function j_(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z_(){return gh||(gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Vu=new WeakMap,tg=new WeakMap,Cl=new WeakMap,mf=new WeakMap;function F_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(an(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&eg.set(n,e)}).catch(()=>{}),mf.set(t,e),t}function B_(e){if(Vu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Vu.set(e,t)}let Hu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||tg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function W_(e){Hu=e(Hu)}function V_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pl(this),t,...n);return tg.set(r,t.sort?t.sort():[t]),an(r)}:z_().includes(e)?function(...t){return e.apply(Pl(this),t),an(eg.get(this))}:function(...t){return an(e.apply(Pl(this),t))}}function H_(e){return typeof e=="function"?V_(e):(e instanceof IDBTransaction&&B_(e),U_(e,j_())?new Proxy(e,Hu):e)}function an(e){if(e instanceof IDBRequest)return F_(e);if(Cl.has(e))return Cl.get(e);const t=H_(e);return t!==e&&(Cl.set(e,t),mf.set(t,e)),t}const Pl=e=>mf.get(e);function K_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=an(a);return r&&a.addEventListener("upgradeneeded",l=>{r(an(a.result),l.oldVersion,l.newVersion,an(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const G_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],xl=new Map;function yh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xl.get(t))return xl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Y_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||G_.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return xl.set(t,o),o}W_(e=>({...e,get:(t,n,r)=>yh(t,n)||e.get(t,n,r),has:(t,n)=>!!yh(t,n)||e.has(t,n)}));/**
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
 */class Q_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function X_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ku="@firebase/app",wh="0.9.3";/**
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
 */const jn=new Zv("@firebase/app"),q_="@firebase/app-compat",J_="@firebase/analytics-compat",Z_="@firebase/analytics",eS="@firebase/app-check-compat",tS="@firebase/app-check",nS="@firebase/auth",rS="@firebase/auth-compat",iS="@firebase/database",oS="@firebase/database-compat",aS="@firebase/functions",sS="@firebase/functions-compat",lS="@firebase/installations",uS="@firebase/installations-compat",cS="@firebase/messaging",fS="@firebase/messaging-compat",dS="@firebase/performance",hS="@firebase/performance-compat",pS="@firebase/remote-config",mS="@firebase/remote-config-compat",vS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",wS="@firebase/firestore-compat",_S="firebase",SS="9.17.1";/**
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
 */const Gu="[DEFAULT]",kS={[Ku]:"fire-core",[q_]:"fire-core-compat",[Z_]:"fire-analytics",[J_]:"fire-analytics-compat",[tS]:"fire-app-check",[eS]:"fire-app-check-compat",[nS]:"fire-auth",[rS]:"fire-auth-compat",[iS]:"fire-rtdb",[oS]:"fire-rtdb-compat",[aS]:"fire-fn",[sS]:"fire-fn-compat",[lS]:"fire-iid",[uS]:"fire-iid-compat",[cS]:"fire-fcm",[fS]:"fire-fcm-compat",[dS]:"fire-perf",[hS]:"fire-perf-compat",[pS]:"fire-rc",[mS]:"fire-rc-compat",[vS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[wS]:"fire-fst-compat","fire-js":"fire-js",[_S]:"fire-js-all"};/**
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
 */const ja=new Map,Yu=new Map;function ES(e,t){try{e.container.addComponent(t)}catch(n){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fi(e){const t=e.name;if(Yu.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Yu.set(t,e);for(const n of ja.values())ES(n,e);return!0}function ng(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const bS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sn=new so("app","Firebase",bS);/**
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
 */class IS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=SS;function rg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=m_()),!n)throw sn.create("no-options");const o=ja.get(i);if(o){if(Ua(n,o.options)&&Ua(r,o.config))return o;throw sn.create("duplicate-app",{appName:i})}const a=new N_(i);for(const l of Yu.values())a.addComponent(l);const s=new IS(n,r,a);return ja.set(i,s),s}function CS(e=Gu){const t=ja.get(e);if(!t&&e===Gu)return rg();if(!t)throw sn.create("no-app",{appName:e});return t}function yr(e,t,n){var r;let i=(r=kS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(s.join(" "));return}Fi(new Rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const PS="firebase-heartbeat-database",xS=1,Bi="firebase-heartbeat-store";let Ol=null;function ig(){return Ol||(Ol=K_(PS,xS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bi)}}}).catch(e=>{throw sn.create("idb-open",{originalErrorMessage:e.message})})),Ol}async function OS(e){try{return(await ig()).transaction(Bi).objectStore(Bi).get(og(e))}catch(t){if(t instanceof wn)jn.warn(t.message);else{const n=sn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}async function _h(e,t){try{const r=(await ig()).transaction(Bi,"readwrite");return await r.objectStore(Bi).put(t,og(e)),r.done}catch(n){if(n instanceof wn)jn.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function og(e){return`${e.name}!${e.options.appId}`}/**
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
 */const TS=1024,RS=30*24*60*60*1e3;class AS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=RS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sh(),{heartbeatsToSend:n,unsentEntries:r}=NS(this._heartbeatsCache.heartbeats),i=Xv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sh(){return new Date().toISOString().substring(0,10)}function NS(e,t=TS){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),kh(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S_()?k_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _h(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _h(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function kh(e){return Xv(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function DS(e){Fi(new Rr("platform-logger",t=>new Q_(t),"PRIVATE")),Fi(new Rr("heartbeat",t=>new AS(t),"PRIVATE")),yr(Ku,wh,e),yr(Ku,wh,"esm2017"),yr("fire-js","")}DS("");function vf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ag(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=ag,sg=new so("auth","Firebase",ag());/**
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
 */const Eh=new Zv("@firebase/auth");function oa(e,...t){Eh.logLevel<=W.ERROR&&Eh.error(`Auth (${ws}): ${e}`,...t)}/**
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
 */function it(e,...t){throw gf(e,...t)}function ft(e,...t){return gf(e,...t)}function $S(e,t,n){const r=Object.assign(Object.assign({},MS()),{[t]:n});return new so("auth","Firebase",r).create(t,{appName:e.name})}function gf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return sg.create(e,...t)}function A(e,t,...n){if(!e)throw gf(t,...n)}function wt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw oa(t),new Error(t)}function Ct(e,t){e||wt(t)}/**
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
 */const bh=new Map;function _t(e){Ct(e instanceof Function,"Expected a class definition");let t=bh.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bh.set(e,t),t)}/**
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
 */function US(e,t){const n=ng(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ua(o,t??{}))return i;it(i,"already-initialized")}return n.initialize({options:t})}function jS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_t);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Qu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function zS(){return Ih()==="http:"||Ih()==="https:"}function Ih(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function FS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zS()||y_()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class uo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=g_()||w_()}get(){return FS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yf(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class lg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const VS=new uo(3e4,6e4);function jr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zr(e,t,n,r,i={}){return ug(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=lo(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),lg.fetch()(cg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function ug(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},WS),t);try{const i=new HS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw $o(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw $o(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw $o(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $S(e,c,u);it(e,c)}}catch(i){if(i instanceof wn)throw i;it(e,"network-request-failed")}}async function co(e,t,n,r,i={}){const o=await zr(e,t,n,r,i);return"mfaPendingCredential"in o&&it(e,"multi-factor-auth-required",{_serverResponse:o}),o}function cg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?yf(e.config,i):`${e.config.apiScheme}://${i}`}class HS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),VS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ft(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function KS(e,t){return zr(e,"POST","/v1/accounts:delete",t)}async function GS(e,t){return zr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function wi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function YS(e,t=!1){const n=pt(e),r=await n.getIdToken(t),i=wf(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:wi(Tl(i.auth_time)),issuedAtTime:wi(Tl(i.iat)),expirationTime:wi(Tl(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Tl(e){return Number(e)*1e3}function wf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=qv(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function QS(e){const t=wf(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof wn&&XS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function XS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class qS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wi(e,GS(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?ek(o.providerUserInfo):[],s=ZS(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new fg(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function JS(e){const t=pt(e);await za(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ZS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ek(e){return e.map(t=>{var{providerId:n}=t,r=vf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tk(e,t){const n=await ug(e,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=cg(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",lg.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):QS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return A(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await tk(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Vi;return r&&(A(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(A(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function Dt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=vf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return YS(this,t)}reload(){return JS(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wi(this,KS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(s=n.tenantId)!==null&&s!==void 0?s:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:S,providerData:b,stsTokenManager:I}=n;A(m&&I,t,"internal-error");const O=Vi.fromJSON(this.name,I);A(typeof m=="string",t,"internal-error"),Dt(f,t.name),Dt(h,t.name),A(typeof w=="boolean",t,"internal-error"),A(typeof S=="boolean",t,"internal-error"),Dt(v,t.name),Dt(g,t.name),Dt(y,t.name),Dt(_,t.name),Dt(p,t.name),Dt(d,t.name);const L=new Nn({uid:m,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:S,photoURL:g,phoneNumber:v,tenantId:y,stsTokenManager:O,createdAt:p,lastLoginAt:d});return b&&Array.isArray(b)&&(L.providerData=b.map(R=>Object.assign({},R))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(t,n,r=!1){const i=new Vi;i.updateFromServerResponse(n);const o=new Nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await za(o),o}}/**
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
 */class dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}dg.type="NONE";const Ch=dg;/**
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
 */function aa(e,t,n){return`firebase:${e}:${t}:${n}`}class wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,o),this.fullPersistenceKey=aa("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wr(_t(Ch),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||_t(Ch);const a=aa(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const f=Nn._fromJSON(t,c);u!==o&&(s=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new wr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new wr(o,t,r))}}/**
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
 */function Ph(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gg(t))return"Blackberry";if(yg(t))return"Webos";if(_f(t))return"Safari";if((t.includes("chrome/")||pg(t))&&!t.includes("edge/"))return"Chrome";if(vg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hg(e=Ee()){return/firefox\//i.test(e)}function _f(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pg(e=Ee()){return/crios\//i.test(e)}function mg(e=Ee()){return/iemobile/i.test(e)}function vg(e=Ee()){return/android/i.test(e)}function gg(e=Ee()){return/blackberry/i.test(e)}function yg(e=Ee()){return/webos/i.test(e)}function _s(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function nk(e=Ee()){var t;return _s(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function rk(){return __()&&document.documentMode===10}function wg(e=Ee()){return _s(e)||vg(e)||yg(e)||gg(e)||/windows phone/i.test(e)||mg(e)}function ik(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _g(e,t=[]){let n;switch(e){case"Browser":n=Ph(Ee());break;case"Worker":n=`${Ph(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class ok{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ak{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xh(this),this.idTokenSubscription=new xh(this),this.beforeStateQueue=new ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await za(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?pt(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new so("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&_t(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return A(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fo(e){return pt(e)}class xh{constructor(t){this.auth=t,this.observer=null,this.addObserver=P_(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sk(e,t,n){const r=fo(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Sg(t),{host:a,port:s}=lk(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uk()}function Sg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function lk(e){const t=Sg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Oh(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Oh(a)}}}function Oh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function uk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Sf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(t){return wt("not implemented")}_linkToIdToken(t,n){return wt("not implemented")}_getReauthenticationResolver(t){return wt("not implemented")}}async function ck(e,t){return zr(e,"POST","/v1/accounts:update",t)}/**
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
 */async function fk(e,t){return co(e,"POST","/v1/accounts:signInWithPassword",jr(e,t))}async function dk(e,t){return zr(e,"POST","/v1/accounts:sendOobCode",jr(e,t))}async function hk(e,t){return dk(e,t)}/**
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
 */async function pk(e,t){return co(e,"POST","/v1/accounts:signInWithEmailLink",jr(e,t))}async function mk(e,t){return co(e,"POST","/v1/accounts:signInWithEmailLink",jr(e,t))}/**
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
 */class Hi extends Sf{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Hi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Hi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return fk(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pk(t,{email:this._email,oobCode:this._password});default:it(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return ck(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mk(t,{idToken:n,email:this._email,oobCode:this._password});default:it(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function _r(e,t){return co(e,"POST","/v1/accounts:signInWithIdp",jr(e,t))}/**
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
 */const vk="http://localhost";class zn extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=vf(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new zn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return _r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_r(t,n)}buildRequest(){const t={requestUri:vk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=lo(n)}return t}}/**
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
 */function gk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yk(e){const t=ai(si(e)).link,n=t?ai(si(t)).deep_link_id:null,r=ai(si(e)).deep_link_id;return(r?ai(si(r)).link:null)||r||n||t||e}class kf{constructor(t){var n,r,i,o,a,s;const l=ai(si(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=gk((i=l.mode)!==null&&i!==void 0?i:null);A(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=yk(t);try{return new kf(n)}catch{return null}}}/**
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
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(t,n){return Hi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=kf.parseLink(n);return A(r,"argument-error"),Hi._fromEmailAndCode(t,r.code,r.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends kg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ft extends ho{constructor(){super("facebook.com")}static credential(t){return zn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class Wt extends ho{constructor(){super("github.com")}static credential(t){return zn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class Vt extends ho{constructor(){super("twitter.com")}static credential(t,n){return zn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */async function wk(e,t){return co(e,"POST","/v1/accounts:signUp",jr(e,t))}/**
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
 */class Fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Nn._fromIdTokenResponse(t,r,i),a=Th(r);return new Fn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Th(r);return new Fn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Th(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Fa extends wn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Fa(t,n,r,i)}}function Eg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Fa._fromErrorAndOperation(e,o,t,r):o})}async function _k(e,t,n=!1){const r=await Wi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fn._forOperation(e,"link",r)}/**
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
 */async function Sk(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Wi(e,Eg(r,i,t,e),n);A(o.idToken,r,"internal-error");const a=wf(o.idToken);A(a,r,"internal-error");const{sub:s}=a;return A(e.uid===s,r,"user-mismatch"),Fn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&it(r,"user-mismatch"),o}}/**
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
 */async function bg(e,t,n=!1){const r="signIn",i=await Eg(e,r,t),o=await Fn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function kk(e,t){return bg(fo(e),t)}/**
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
 */function Ek(e,t,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
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
 */async function bk(e,t,n){const r=pt(e),i={requestType:"PASSWORD_RESET",email:t};n&&Ek(r,i,n),await hk(r,i)}async function Ik(e,t,n){const r=fo(e),i=await wk(r,{returnSecureToken:!0,email:t,password:n}),o=await Fn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Ck(e,t,n){return kk(pt(e),Fr.credential(t,n))}function Pk(e,t,n,r){return pt(e).onIdTokenChanged(t,n,r)}function xk(e,t,n){return pt(e).beforeAuthStateChanged(t,n)}function Ok(e,t,n,r){return pt(e).onAuthStateChanged(t,n,r)}function Tk(e){return pt(e).signOut()}const Ba="__sak";/**
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
 */class Ig{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rk(){const e=Ee();return _f(e)||_s(e)}const Ak=1e3,Nk=10;class Cg extends Ig{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rk()&&ik(),this.fallbackToPolling=wg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);rk()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Nk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Cg.type="LOCAL";const Lk=Cg;/**
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
 */class Pg extends Ig{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Pg.type="SESSION";const xg=Pg;/**
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
 */function Dk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ss{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ss(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await Dk(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ss.receivers=[];/**
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
 */function Ef(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Mk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=Ef("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function dt(){return window}function $k(e){dt().location.href=e}/**
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
 */function Og(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function zk(){return Og()?self:null}/**
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
 */const Tg="firebaseLocalStorageDb",Fk=1,Wa="firebaseLocalStorage",Rg="fbase_key";class po{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ks(e,t){return e.transaction([Wa],t?"readwrite":"readonly").objectStore(Wa)}function Bk(){const e=indexedDB.deleteDatabase(Tg);return new po(e).toPromise()}function Xu(){const e=indexedDB.open(Tg,Fk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wa,{keyPath:Rg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wa)?t(r):(r.close(),await Bk(),t(await Xu()))})})}async function Rh(e,t,n){const r=ks(e,!0).put({[Rg]:t,value:n});return new po(r).toPromise()}async function Wk(e,t){const n=ks(e,!1).get(t),r=await new po(n).toPromise();return r===void 0?null:r.value}function Ah(e,t){const n=ks(e,!0).delete(t);return new po(n).toPromise()}const Vk=800,Hk=3;class Ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Hk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ss._getInstance(zk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new Mk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||jk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xu();return await Rh(t,Ba,"1"),await Ah(t,Ba),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Wk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ah(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ks(i,!1).getAll();return new po(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ag.type="LOCAL";const Kk=Ag;/**
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
 */function Gk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Yk(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ft("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Gk().appendChild(r)})}function Qk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new uo(3e4,6e4);/**
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
 */function Xk(e,t){return t?_t(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class bf extends Sf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return _r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return _r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function qk(e){return bg(e.auth,new bf(e),e.bypassAuthState)}function Jk(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),Sk(n,new bf(e),e.bypassAuthState)}async function Zk(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),_k(n,new bf(e),e.bypassAuthState)}/**
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
 */class Ng{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Jk;default:it(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eE=new uo(2e3,1e4);class lr extends Ng{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,eE.get())};t()}}lr.currentPopupAction=null;/**
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
 */const tE="pendingRedirect",sa=new Map;class nE extends Ng{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=sa.get(this.auth._key());if(!t){try{const r=await rE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}sa.set(this.auth._key(),t)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rE(e,t){const n=aE(t),r=oE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iE(e,t){sa.set(e._key(),t)}function oE(e){return _t(e._redirectPersistence)}function aE(e){return aa(tE,e.config.apiKey,e.name)}async function sE(e,t,n=!1){const r=fo(e),i=Xk(r,t),a=await new nE(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const lE=10*60*1e3;class uE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!cE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Lg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nh(t))}saveEventToCache(t){this.cachedEventUids.add(Nh(t)),this.lastProcessedEventTime=Date.now()}}function Nh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Lg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function cE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lg(e);default:return!1}}/**
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
 */async function fE(e,t={}){return zr(e,"GET","/v1/projects",t)}/**
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
 */const dE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function pE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fE(e);for(const n of t)try{if(mE(n))return}catch{}it(e,"unauthorized-domain")}function mE(e){const t=Qu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!hE.test(n))return!1;if(dE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vE=new uo(3e4,6e4);function Lh(){const e=dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function gE(e){return new Promise((t,n)=>{var r,i,o;function a(){Lh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Lh(),n(ft(e,"network-request-failed"))},timeout:vE.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=dt().gapi)===null||o===void 0)&&o.load)a();else{const s=Qk("iframefcb");return dt()[s]=()=>{gapi.load?a():n(ft(e,"network-request-failed"))},Yk(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw la=null,t})}let la=null;function yE(e){return la=la||gE(e),la}/**
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
 */const wE=new uo(5e3,15e3),_E="__/auth/iframe",SE="emulator/auth/iframe",kE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bE(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yf(t,SE):`https://${e.config.authDomain}/${_E}`,r={apiKey:t.apiKey,appName:e.name,v:ws},i=EE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${lo(r).slice(1)}`}async function IE(e){const t=await yE(e),n=dt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:bE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ft(e,"network-request-failed"),s=dt().setTimeout(()=>{o(a)},wE.get());function l(){dt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const CE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PE=500,xE=600,OE="_blank",TE="http://localhost";class Dh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RE(e,t,n,r=PE,i=xE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},CE),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Ee().toLowerCase();n&&(s=pg(u)?OE:n),hg(u)&&(t=t||TE,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,g])=>`${h}${v}=${g},`,"");if(nk(u)&&s!=="_self")return AE(t||"",s),new Dh(null);const f=window.open(t||"",s,c);A(f,e,"popup-blocked");try{f.focus()}catch{}return new Dh(f)}function AE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const NE="__/auth/handler",LE="emulator/auth/handler";function Mh(e,t,n,r,i,o){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ws,eventId:i};if(t instanceof kg){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",C_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))a[l]=u}if(t instanceof ho){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${DE(e)}?${lo(s).slice(1)}`}function DE({config:e}){return e.emulator?yf(e,LE):`https://${e.authDomain}/${NE}`}/**
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
 */const Rl="webStorageSupport";class ME{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xg,this._completeRedirectFn=sE,this._overrideRedirectResult=iE}async _openPopup(t,n,r,i){var o;Ct((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=Mh(t,n,r,Qu(),i);return RE(t,a,Ef())}async _openRedirect(t,n,r,i){return await this._originValidation(t),$k(Mh(t,n,r,Qu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ct(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await IE(t),r=new uE(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Rl,{type:Rl},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Rl];a!==void 0&&n(!!a),it(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return wg()||_f()||_s()}}const $E=ME;var $h="@firebase/auth",Uh="0.21.3";/**
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
 */class UE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zE(e){Fi(new Rr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((s,l)=>{A(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),A(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(e)},c=new ak(s,l,u);return jS(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Fi(new Rr("auth-internal",t=>{const n=fo(t.getProvider("auth").getImmediate());return(r=>new UE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr($h,Uh,jE(e)),yr($h,Uh,"esm2017")}/**
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
 */const FE=5*60,BE=Jv("authIdTokenMaxAge")||FE;let jh=null;const WE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BE)return;const i=n==null?void 0:n.token;jh!==i&&(jh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VE(e=CS()){const t=ng(e,"auth");if(t.isInitialized())return t.getImmediate();const n=US(e,{popupRedirectResolver:$E,persistence:[Kk,Lk,xg]}),r=Jv("authTokenSyncURL");if(r){const o=WE(r);xk(n,o,()=>o(n.currentUser)),Pk(n,a=>o(a))}const i=p_("auth");return i&&sk(n,`http://${i}`),n}zE("Browser");var HE="firebase",KE="9.17.1";/**
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
 */yr(HE,KE,"app");const GE={apiKey:"AIzaSyCndi7wWHQnVwy_5UlOdSVPigxVWo1K74o",authDomain:"filmzone-16314.firebaseapp.com",projectId:"filmzone-16314",storageBucket:"filmzone-16314.appspot.com",messagingSenderId:"570945154318",appId:"1:570945154318:web:d073c72439759ec09abb5f"},YE=rg(GE),ei=VE(YE),Dg=E.createContext(),QE=({children:e})=>{const[t,n]=E.useState({}),r=(l,u)=>Ik(ei,l,u),i=(l,u)=>Ck(ei,l,u),o=()=>Tk(ei),a=l=>bk(ei,l);E.useEffect(()=>{const l=Ok(ei,u=>{n(u)});return()=>{l()}},[]);const s={createUser:r,logout:o,signIn:i,resetPassword:a,user:t};return N(Dg.Provider,{value:s,children:e})},If=()=>E.useContext(Dg);var qu={},XE={get exports(){return qu},set exports(e){qu=e}},Mg={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=E;function qE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var JE=typeof Object.is=="function"?Object.is:qE,ZE=Ar.useState,eb=Ar.useEffect,tb=Ar.useLayoutEffect,nb=Ar.useDebugValue;function rb(e,t){var n=t(),r=ZE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return tb(function(){i.value=n,i.getSnapshot=t,Al(i)&&o({inst:i})},[e,n,t]),eb(function(){return Al(i)&&o({inst:i}),e(function(){Al(i)&&o({inst:i})})},[e]),nb(n),n}function Al(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!JE(e,n)}catch{return!0}}function ib(e,t){return t()}var ob=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ib:rb;Mg.useSyncExternalStore=Ar.useSyncExternalStore!==void 0?Ar.useSyncExternalStore:ob;(function(e){e.exports=Mg})(XE);var zh={},ab={get exports(){return zh},set exports(e){zh=e}},$g={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=E,sb=qu;function lb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ub=typeof Object.is=="function"?Object.is:lb,cb=sb.useSyncExternalStore,fb=Es.useRef,db=Es.useEffect,hb=Es.useMemo,pb=Es.useDebugValue;$g.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=fb(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=hb(function(){function l(v){if(!u){if(u=!0,c=v,v=r(v),i!==void 0&&a.hasValue){var g=a.value;if(i(g,v))return f=g}return f=v}if(g=f,ub(c,v))return g;var y=r(v);return i!==void 0&&i(g,y)?g:(c=v,f=y)}var u=!1,c,f,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var s=cb(e,o[0],o[1]);return db(function(){a.hasValue=!0,a.value=s},[s]),pb(s),s};(function(e){e.exports=$g})(ab);function mb(e){e()}let Ug=mb;const vb=e=>Ug=e,gb=()=>Ug,yb=E.createContext(null);var Ju={},wb={get exports(){return Ju},set exports(e){Ju=e}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,Cf=de?Symbol.for("react.element"):60103,Pf=de?Symbol.for("react.portal"):60106,bs=de?Symbol.for("react.fragment"):60107,Is=de?Symbol.for("react.strict_mode"):60108,Cs=de?Symbol.for("react.profiler"):60114,Ps=de?Symbol.for("react.provider"):60109,xs=de?Symbol.for("react.context"):60110,xf=de?Symbol.for("react.async_mode"):60111,Os=de?Symbol.for("react.concurrent_mode"):60111,Ts=de?Symbol.for("react.forward_ref"):60112,Rs=de?Symbol.for("react.suspense"):60113,_b=de?Symbol.for("react.suspense_list"):60120,As=de?Symbol.for("react.memo"):60115,Ns=de?Symbol.for("react.lazy"):60116,Sb=de?Symbol.for("react.block"):60121,kb=de?Symbol.for("react.fundamental"):60117,Eb=de?Symbol.for("react.responder"):60118,bb=de?Symbol.for("react.scope"):60119;function ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cf:switch(e=e.type,e){case xf:case Os:case bs:case Cs:case Is:case Rs:return e;default:switch(e=e&&e.$$typeof,e){case xs:case Ts:case Ns:case As:case Ps:return e;default:return t}}case Pf:return t}}}function jg(e){return ze(e)===Os}F.AsyncMode=xf;F.ConcurrentMode=Os;F.ContextConsumer=xs;F.ContextProvider=Ps;F.Element=Cf;F.ForwardRef=Ts;F.Fragment=bs;F.Lazy=Ns;F.Memo=As;F.Portal=Pf;F.Profiler=Cs;F.StrictMode=Is;F.Suspense=Rs;F.isAsyncMode=function(e){return jg(e)||ze(e)===xf};F.isConcurrentMode=jg;F.isContextConsumer=function(e){return ze(e)===xs};F.isContextProvider=function(e){return ze(e)===Ps};F.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cf};F.isForwardRef=function(e){return ze(e)===Ts};F.isFragment=function(e){return ze(e)===bs};F.isLazy=function(e){return ze(e)===Ns};F.isMemo=function(e){return ze(e)===As};F.isPortal=function(e){return ze(e)===Pf};F.isProfiler=function(e){return ze(e)===Cs};F.isStrictMode=function(e){return ze(e)===Is};F.isSuspense=function(e){return ze(e)===Rs};F.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bs||e===Os||e===Cs||e===Is||e===Rs||e===_b||typeof e=="object"&&e!==null&&(e.$$typeof===Ns||e.$$typeof===As||e.$$typeof===Ps||e.$$typeof===xs||e.$$typeof===Ts||e.$$typeof===kb||e.$$typeof===Eb||e.$$typeof===bb||e.$$typeof===Sb)};F.typeOf=ze;(function(e){e.exports=F})(wb);var zg=Ju,Ib={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fg={};Fg[zg.ForwardRef]=Ib;Fg[zg.Memo]=Cb;var Fh={},Pb={get exports(){return Fh},set exports(e){Fh=e}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=Symbol.for("react.element"),Tf=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),$s=Symbol.for("react.provider"),Us=Symbol.for("react.context"),xb=Symbol.for("react.server_context"),js=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),Ws=Symbol.for("react.lazy"),Ob=Symbol.for("react.offscreen"),Bg;Bg=Symbol.for("react.module.reference");function Ye(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Of:switch(e=e.type,e){case Ls:case Ms:case Ds:case zs:case Fs:return e;default:switch(e=e&&e.$$typeof,e){case xb:case Us:case js:case Ws:case Bs:case $s:return e;default:return t}}case Tf:return t}}}B.ContextConsumer=Us;B.ContextProvider=$s;B.Element=Of;B.ForwardRef=js;B.Fragment=Ls;B.Lazy=Ws;B.Memo=Bs;B.Portal=Tf;B.Profiler=Ms;B.StrictMode=Ds;B.Suspense=zs;B.SuspenseList=Fs;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ye(e)===Us};B.isContextProvider=function(e){return Ye(e)===$s};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Of};B.isForwardRef=function(e){return Ye(e)===js};B.isFragment=function(e){return Ye(e)===Ls};B.isLazy=function(e){return Ye(e)===Ws};B.isMemo=function(e){return Ye(e)===Bs};B.isPortal=function(e){return Ye(e)===Tf};B.isProfiler=function(e){return Ye(e)===Ms};B.isStrictMode=function(e){return Ye(e)===Ds};B.isSuspense=function(e){return Ye(e)===zs};B.isSuspenseList=function(e){return Ye(e)===Fs};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ls||e===Ms||e===Ds||e===zs||e===Fs||e===Ob||typeof e=="object"&&e!==null&&(e.$$typeof===Ws||e.$$typeof===Bs||e.$$typeof===$s||e.$$typeof===Us||e.$$typeof===js||e.$$typeof===Bg||e.getModuleId!==void 0)};B.typeOf=Ye;(function(e){e.exports=B})(Pb);function Tb(){const e=gb();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Bh={notify(){},get:()=>[]};function Rb(e,t){let n,r=Bh;function i(f){return l(),r.subscribe(f)}function o(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function s(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=Tb())}function u(){n&&(n(),n=void 0,r.clear(),r=Bh)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:s,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const Ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nb=Ab?E.useLayoutEffect:E.useEffect;function Lb({store:e,context:t,children:n,serverState:r}){const i=E.useMemo(()=>{const s=Rb(e);return{store:e,subscription:s,getServerState:r?()=>r:void 0}},[e,r]),o=E.useMemo(()=>e.getState(),[e]);Nb(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),o!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,o]);const a=t||yb;return to.createElement(a.Provider,{value:i},n)}vb(da.unstable_batchedUpdates);function Ze(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function dn(e){return!!e&&!!e[Q]}function Pt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Wb}(e)||Array.isArray(e)||!!e[Qh]||!!(!((t=e.constructor)===null||t===void 0)&&t[Qh])||Rf(e)||Af(e))}function Bn(e,t,n){n===void 0&&(n=!1),Br(e)===0?(n?Object.keys:kr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Br(e){var t=e[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Rf(e)?2:Af(e)?3:0}function Sr(e,t){return Br(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Db(e,t){return Br(e)===2?e.get(t):e[t]}function Wg(e,t,n){var r=Br(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Vg(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Rf(e){return Fb&&e instanceof Map}function Af(e){return Bb&&e instanceof Set}function In(e){return e.o||e.t}function Nf(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Kg(e);delete t[Q];for(var n=kr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Lf(e,t){return t===void 0&&(t=!1),Df(e)||dn(e)||!Pt(e)||(Br(e)>1&&(e.set=e.add=e.clear=e.delete=Mb),Object.freeze(e),t&&Bn(e,function(n,r){return Lf(r,!0)},!0)),e}function Mb(){Ze(2)}function Df(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ht(e){var t=nc[e];return t||Ze(18,e),t}function $b(e,t){nc[e]||(nc[e]=t)}function Zu(){return Ki}function Nl(e,t){t&&(ht("Patches"),e.u=[],e.s=[],e.v=t)}function Va(e){ec(e),e.p.forEach(Ub),e.p=null}function ec(e){e===Ki&&(Ki=e.l)}function Wh(e){return Ki={p:[],l:Ki,h:e,m:!0,_:0}}function Ub(e){var t=e[Q];t.i===0||t.i===1?t.j():t.O=!0}function Ll(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||ht("ES5").S(t,e,r),r?(n[Q].P&&(Va(t),Ze(4)),Pt(e)&&(e=Ha(t,e),t.l||Ka(t,e)),t.u&&ht("Patches").M(n[Q].t,e,t.u,t.s)):e=Ha(t,n,[]),Va(t),t.u&&t.v(t.u,t.s),e!==Hg?e:void 0}function Ha(e,t,n){if(Df(t))return t;var r=t[Q];if(!r)return Bn(t,function(s,l){return Vh(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ka(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Nf(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Bn(o,function(s,l){return Vh(e,r,i,s,l,n,a)}),Ka(e,i,!1),n&&e.u&&ht("Patches").N(r,n,e.u,e.s)}return r.o}function Vh(e,t,n,r,i,o,a){if(dn(i)){var s=Ha(e,i,o&&t&&t.i!==3&&!Sr(t.R,r)?o.concat(r):void 0);if(Wg(n,r,s),!dn(s))return;e.m=!1}else a&&n.add(i);if(Pt(i)&&!Df(i)){if(!e.h.D&&e._<1)return;Ha(e,i),t&&t.A.l||Ka(e,i)}}function Ka(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Lf(t,n)}function Dl(e,t){var n=e[Q];return(n?In(n):e)[t]}function Hh(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ht(e){e.P||(e.P=!0,e.l&&Ht(e.l))}function Ml(e){e.o||(e.o=Nf(e.t))}function tc(e,t,n){var r=Rf(t)?ht("MapSet").F(t,n):Af(t)?ht("MapSet").T(t,n):e.g?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:Zu(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,u=Gi;a&&(l=[s],u=li);var c=Proxy.revocable(l,u),f=c.revoke,h=c.proxy;return s.k=h,s.j=f,h}(t,n):ht("ES5").J(t,n);return(n?n.A:Zu()).p.push(r),r}function jb(e){return dn(e)||Ze(22,e),function t(n){if(!Pt(n))return n;var r,i=n[Q],o=Br(n);if(i){if(!i.P&&(i.i<4||!ht("ES5").K(i)))return i.t;i.I=!0,r=Kh(n,o),i.I=!1}else r=Kh(n,o);return Bn(r,function(a,s){i&&Db(i.t,a)===s||Wg(r,a,t(s))}),o===3?new Set(r):r}(e)}function Kh(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Nf(e)}function zb(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[Q];return Gi.get(l,o)},set:function(l){var u=this[Q];Gi.set(u,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][Q];if(!s.P)switch(s.i){case 5:r(s)&&Ht(s);break;case 4:n(s)&&Ht(s)}}}function n(o){for(var a=o.t,s=o.k,l=kr(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Q){var f=a[c];if(f===void 0&&!Sr(a,c))return!0;var h=s[c],v=h&&h[Q];if(v?v.t!==f:!Vg(h,f))return!0}}var g=!!a[Q];return l.length!==kr(a).length+(g?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};$b("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(c,f){if(c){for(var h=Array(f.length),v=0;v<f.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var g=Kg(f);delete g[Q];for(var y=kr(g),_=0;_<y.length;_++){var p=y[_];g[p]=e(p,c||!!g[p].enumerable)}return Object.create(Object.getPrototypeOf(f),g)}(s,o),u={i:s?5:4,A:a?a.A:Zu(),P:!1,I:!1,R:{},l:a,t:o,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,Q,{value:u,writable:!0}),l},S:function(o,a,s){s?dn(a)&&a[Q].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[Q];if(c){var f=c.t,h=c.k,v=c.R,g=c.i;if(g===4)Bn(h,function(m){m!==Q&&(f[m]!==void 0||Sr(f,m)?v[m]||l(h[m]):(v[m]=!0,Ht(c)))}),Bn(f,function(m){h[m]!==void 0||Sr(h,m)||(v[m]=!1,Ht(c))});else if(g===5){if(r(c)&&(Ht(c),v.length=!0),h.length<f.length)for(var y=h.length;y<f.length;y++)v[y]=!1;else for(var _=f.length;_<h.length;_++)v[_]=!0;for(var p=Math.min(h.length,f.length),d=0;d<p;d++)h.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&l(h[d])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Gh,Ki,Mf=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Fb=typeof Map<"u",Bb=typeof Set<"u",Yh=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Hg=Mf?Symbol.for("immer-nothing"):((Gh={})["immer-nothing"]=!0,Gh),Qh=Mf?Symbol.for("immer-draftable"):"__$immer_draftable",Q=Mf?Symbol.for("immer-state"):"__$immer_state",Wb=""+Object.prototype.constructor,kr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Kg=Object.getOwnPropertyDescriptors||function(e){var t={};return kr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},nc={},Gi={get:function(e,t){if(t===Q)return e;var n=In(e);if(!Sr(n,t))return function(i,o,a){var s,l=Hh(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Pt(r)?r:r===Dl(e.t,t)?(Ml(e),e.o[t]=tc(e.A.h,r,e)):r},has:function(e,t){return t in In(e)},ownKeys:function(e){return Reflect.ownKeys(In(e))},set:function(e,t,n){var r=Hh(In(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Dl(In(e),t),o=i==null?void 0:i[Q];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Vg(n,i)&&(n!==void 0||Sr(e.t,t)))return!0;Ml(e),Ht(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Dl(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ml(e),Ht(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=In(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ze(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ze(12)}},li={};Bn(Gi,function(e,t){li[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),li.deleteProperty=function(e,t){return li.set.call(this,e,t,void 0)},li.set=function(e,t,n){return Gi.set.call(this,e[0],t,n,e[0])};var Vb=function(){function e(n){var r=this;this.g=Yh,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(y){var _=this;y===void 0&&(y=s);for(var p=arguments.length,d=Array(p>1?p-1:0),m=1;m<p;m++)d[m-1]=arguments[m];return l.produce(y,function(w){var S;return(S=o).call.apply(S,[_,w].concat(d))})}}var u;if(typeof o!="function"&&Ze(6),a!==void 0&&typeof a!="function"&&Ze(7),Pt(i)){var c=Wh(r),f=tc(r,i,void 0),h=!0;try{u=o(f),h=!1}finally{h?Va(c):ec(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return Nl(c,a),Ll(y,c)},function(y){throw Va(c),y}):(Nl(c,a),Ll(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Hg&&(u=void 0),r.D&&Lf(u,!0),a){var v=[],g=[];ht("Patches").M(i,u,v,g),a(v,g)}return u}Ze(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),h=1;h<c;h++)f[h-1]=arguments[h];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(f))})};var a,s,l=r.produce(i,o,function(u,c){a=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Pt(n)||Ze(8),dn(n)&&(n=jb(n));var r=Wh(this),i=tc(this,n,void 0);return i[Q].C=!0,ec(r),i},t.finishDraft=function(n,r){var i=n&&n[Q],o=i.A;return Nl(o,r),Ll(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Yh&&Ze(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=ht("Patches").$;return dn(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),$e=new Vb,Gg=$e.produce;$e.produceWithPatches.bind($e);$e.setAutoFreeze.bind($e);$e.setUseProxies.bind($e);$e.applyPatches.bind($e);$e.createDraft.bind($e);$e.finishDraft.bind($e);function Yi(e){return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yi(e)}function Hb(e,t){if(Yi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Yi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kb(e){var t=Hb(e,"string");return Yi(t)==="symbol"?t:String(t)}function Gb(e,t,n){return t=Kb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xh(Object(n),!0).forEach(function(r){Gb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _e(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Jh=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),$l=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ga={INIT:"@@redux/INIT"+$l(),REPLACE:"@@redux/REPLACE"+$l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+$l()}};function Yb(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Yg(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(_e(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(_e(1));return n(Yg)(e,t)}if(typeof e!="function")throw new Error(_e(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(_e(3));return o}function f(y){if(typeof y!="function")throw new Error(_e(4));if(l)throw new Error(_e(5));var _=!0;return u(),s.push(y),function(){if(_){if(l)throw new Error(_e(6));_=!1,u();var d=s.indexOf(y);s.splice(d,1),a=null}}}function h(y){if(!Yb(y))throw new Error(_e(7));if(typeof y.type>"u")throw new Error(_e(8));if(l)throw new Error(_e(9));try{l=!0,o=i(o,y)}finally{l=!1}for(var _=a=s,p=0;p<_.length;p++){var d=_[p];d()}return y}function v(y){if(typeof y!="function")throw new Error(_e(10));i=y,h({type:Ga.REPLACE})}function g(){var y,_=f;return y={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(_e(11));function m(){d.next&&d.next(c())}m();var w=_(m);return{unsubscribe:w}}},y[Jh]=function(){return this},y}return h({type:Ga.INIT}),r={dispatch:h,subscribe:f,getState:c,replaceReducer:v},r[Jh]=g,r}function Qb(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ga.INIT});if(typeof r>"u")throw new Error(_e(12));if(typeof n(void 0,{type:Ga.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(_e(13))})}function Xb(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{Qb(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var c=!1,f={},h=0;h<o.length;h++){var v=o[h],g=n[v],y=l[v],_=g(y,u);if(typeof _>"u")throw u&&u.type,new Error(_e(14));f[v]=_,c=c||_!==y}return c=c||o.length!==Object.keys(l).length,c?f:l}}function Ya(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function qb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(_e(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=Ya.apply(void 0,s)(i.dispatch),qh(qh({},i),{},{dispatch:o})}}}function Qg(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(s){return typeof s=="function"?s(i,o,e):a(s)}}};return t}var Xg=Qg();Xg.withExtraArgument=Qg;const Zh=Xg;var Jb=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Zb=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Qa=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},e2=Object.defineProperty,t2=Object.defineProperties,n2=Object.getOwnPropertyDescriptors,ep=Object.getOwnPropertySymbols,r2=Object.prototype.hasOwnProperty,i2=Object.prototype.propertyIsEnumerable,tp=function(e,t,n){return t in e?e2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ln=function(e,t){for(var n in t||(t={}))r2.call(t,n)&&tp(e,n,t[n]);if(ep)for(var r=0,i=ep(t);r<i.length;r++){var n=i[r];i2.call(t,n)&&tp(e,n,t[n])}return e},Ul=function(e,t){return t2(e,n2(t))},o2=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(u){i(u)}},a=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})},a2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ya:Ya.apply(null,arguments)};function s2(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var l2=function(e){Jb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Qa([void 0],n[0].concat(this)))):new(t.bind.apply(t,Qa([void 0],n.concat(this))))},t}(Array);function rc(e){return Pt(e)?Gg(e,function(){}):e}function u2(e){return typeof e=="boolean"}function c2(){return function(t){return f2(t)}}function f2(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new l2;return n&&(u2(n)?r.push(Zh):r.push(Zh.withExtraArgument(n.extraArgument))),r}var d2=!0;function h2(e){var t=c2(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,h=f===void 0?void 0:f,v;if(typeof i=="function")v=i;else if(s2(i))v=Xb(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var y=qb.apply(void 0,g),_=Ya;l&&(_=a2(ln({trace:!d2},typeof l=="object"&&l)));var p=[y];Array.isArray(h)?p=Qa([y],h):typeof h=="function"&&(p=h(p));var d=_.apply(void 0,p);return Yg(v,c,d)}function un(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return ln(ln({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function qg(e){var t={},n=[],r,i={addCase:function(o,a){var s=typeof o=="string"?o:o.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function p2(e){return typeof e=="function"}function m2(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?qg(t):[t,n,r],o=i[0],a=i[1],s=i[2],l;if(p2(e))l=function(){return rc(e())};else{var u=rc(e);l=function(){return u}}function c(f,h){f===void 0&&(f=l());var v=Qa([o[h.type]],a.filter(function(g){var y=g.matcher;return y(h)}).map(function(g){var y=g.reducer;return y}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,y){if(y)if(dn(g)){var _=g,p=y(_,h);return p===void 0?g:p}else{if(Pt(g))return Gg(g,function(d){return y(d,h)});var p=y(g,h);if(p===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return g},f)}return c.getInitialState=l,c}function v2(e,t){return e+"/"+t}function g2(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:rc(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},s={};i.forEach(function(c){var f=r[c],h=v2(t,c),v,g;"reducer"in f?(v=f.reducer,g=f.prepare):v=f,o[c]=v,a[h]=v,s[c]=g?un(h,g):un(h)});function l(){var c=typeof e.extraReducers=="function"?qg(e.extraReducers):[e.extraReducers],f=c[0],h=f===void 0?{}:f,v=c[1],g=v===void 0?[]:v,y=c[2],_=y===void 0?void 0:y,p=ln(ln({},h),a);return m2(n,function(d){for(var m in p)d.addCase(m,p[m]);for(var w=0,S=g;w<S.length;w++){var b=S[w];d.addMatcher(b.matcher,b.reducer)}_&&d.addDefaultCase(_)})}var u;return{name:t,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var y2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",w2=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=y2[Math.random()*64|0];return t},_2=["name","message","stack","code"],jl=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),np=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),S2=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=_2;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=un(t+"/fulfilled",function(u,c,f,h){return{payload:u,meta:Ul(ln({},h||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=un(t+"/pending",function(u,c,f){return{payload:void 0,meta:Ul(ln({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),a=un(t+"/rejected",function(u,c,f,h,v){return{payload:h,error:(r&&r.serializeError||S2)(u||"Rejected"),meta:Ul(ln({},v||{}),{arg:f,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,f,h){var v=r!=null&&r.idGenerator?r.idGenerator(u):w2(),g=new s,y;function _(d){y=d,g.abort()}var p=function(){return o2(this,null,function(){var d,m,w,S,b,I,O;return Zb(this,function(L){switch(L.label){case 0:return L.trys.push([0,4,,5]),S=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:f,extra:h}),E2(S)?[4,S]:[3,2];case 1:S=L.sent(),L.label=2;case 2:if(S===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=new Promise(function(R,he){return g.signal.addEventListener("abort",function(){return he({name:"AbortError",message:y||"Aborted"})})}),c(o(v,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:v,arg:u},{getState:f,extra:h}))),[4,Promise.race([b,Promise.resolve(n(u,{dispatch:c,getState:f,extra:h,requestId:v,signal:g.signal,abort:_,rejectWithValue:function(R,he){return new jl(R,he)},fulfillWithValue:function(R,he){return new np(R,he)}})).then(function(R){if(R instanceof jl)throw R;return R instanceof np?i(R.payload,v,u,R.meta):i(R,v,u)})])];case 3:return w=L.sent(),[3,5];case 4:return I=L.sent(),w=I instanceof jl?a(null,v,u,I.payload,I.meta):a(I,v,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&a.match(w)&&w.meta.condition,O||c(w),[2,w]}})})}();return Object.assign(p,{abort:_,requestId:v,arg:u,unwrap:function(){return p.then(k2)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function k2(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function E2(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var $f="listenerMiddleware";un($f+"/add");un($f+"/removeAll");un($f+"/remove");var rp;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);zb();const b2={movies:[],genresLoaded:!1,genres:[]},I2=g2({name:"filmtime",initialState:b2,extraReducers:e=>{}}),C2=h2({reducer:{filmtime:I2.reducer}});const P2="/filmtime/assets/Homebg-1cd5381a.jpg";function ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ip(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xa(e){return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xa(e)}function x2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function op(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O2(e,t,n){return t&&op(e.prototype,t),n&&op(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uf(e,t){return R2(e)||N2(e,t)||Jg(e,t)||D2()}function mo(e){return T2(e)||A2(e)||Jg(e)||L2()}function T2(e){if(Array.isArray(e))return ic(e)}function R2(e){if(Array.isArray(e))return e}function A2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function N2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function Jg(e,t){if(e){if(typeof e=="string")return ic(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ic(e,t)}}function ic(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ap=function(){},jf={},Zg={},ey=null,ty={mark:ap,measure:ap};try{typeof window<"u"&&(jf=window),typeof document<"u"&&(Zg=document),typeof MutationObserver<"u"&&(ey=MutationObserver),typeof performance<"u"&&(ty=performance)}catch{}var M2=jf.navigator||{},sp=M2.userAgent,lp=sp===void 0?"":sp,hn=jf,Y=Zg,up=ey,Uo=ty;hn.document;var Nt=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",ny=~lp.indexOf("MSIE")||~lp.indexOf("Trident/"),jo,zo,Fo,Bo,Wo,xt="___FONT_AWESOME___",oc=16,ry="fa",iy="svg-inline--fa",Wn="data-fa-i2svg",ac="data-fa-pseudo-element",$2="data-fa-pseudo-element-pending",zf="data-prefix",Ff="data-icon",cp="fontawesome-i2svg",U2="async",j2=["HTML","HEAD","STYLE","SCRIPT"],oy=function(){try{return!0}catch{return!1}}(),K="classic",te="sharp",Bf=[K,te];function vo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Qi=vo((jo={},le(jo,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(jo,te,{fa:"solid",fass:"solid","fa-solid":"solid"}),jo)),Xi=vo((zo={},le(zo,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(zo,te,{solid:"fass"}),zo)),qi=vo((Fo={},le(Fo,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Fo,te,{fass:"fa-solid"}),Fo)),z2=vo((Bo={},le(Bo,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Bo,te,{"fa-solid":"fass"}),Bo)),F2=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ay="fa-layers-text",B2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,W2=vo((Wo={},le(Wo,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Wo,te,{900:"fass"}),Wo)),sy=[1,2,3,4,5,6,7,8,9,10],V2=sy.concat([11,12,13,14,15,16,17,18,19,20]),H2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],On={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ji=new Set;Object.keys(Xi[K]).map(Ji.add.bind(Ji));Object.keys(Xi[te]).map(Ji.add.bind(Ji));var K2=[].concat(Bf,mo(Ji),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",On.GROUP,On.SWAP_OPACITY,On.PRIMARY,On.SECONDARY]).concat(sy.map(function(e){return"".concat(e,"x")})).concat(V2.map(function(e){return"w-".concat(e)})),_i=hn.FontAwesomeConfig||{};function G2(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Y2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var Q2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Q2.forEach(function(e){var t=Uf(e,2),n=t[0],r=t[1],i=Y2(G2(n));i!=null&&(_i[r]=i)})}var ly={styleDefault:"solid",familyDefault:"classic",cssPrefix:ry,replacementClass:iy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_i.familyPrefix&&(_i.cssPrefix=_i.familyPrefix);var Nr=C(C({},ly),_i);Nr.autoReplaceSvg||(Nr.observeMutations=!1);var T={};Object.keys(ly).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Nr[e]=n,Si.forEach(function(r){return r(T)})},get:function(){return Nr[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Nr.cssPrefix=t,Si.forEach(function(n){return n(T)})},get:function(){return Nr.cssPrefix}});hn.FontAwesomeConfig=T;var Si=[];function X2(e){return Si.push(e),function(){Si.splice(Si.indexOf(e),1)}}var Mt=oc,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q2(e){if(!(!e||!Nt)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Y.head.insertBefore(t,r),e}}var J2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zi(){for(var e=12,t="";e-- >0;)t+=J2[Math.random()*62|0];return t}function Wr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Wf(e){return e.classList?Wr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function uy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Z2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(uy(e[n]),'" ')},"").trim()}function Vs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Vf(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function eI(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function tI(e){var t=e.transform,n=e.width,r=n===void 0?oc:n,i=e.height,o=i===void 0?oc:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&ny?l+="translate(".concat(t.x/Mt-r/2,"em, ").concat(t.y/Mt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Mt,"em), calc(-50% + ").concat(t.y/Mt,"em)) "):l+="translate(".concat(t.x/Mt,"em, ").concat(t.y/Mt,"em) "),l+="scale(".concat(t.size/Mt*(t.flipX?-1:1),", ").concat(t.size/Mt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var nI=`:root, :host {
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
}`;function cy(){var e=ry,t=iy,n=T.cssPrefix,r=T.replacementClass,i=nI;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var fp=!1;function zl(){T.autoAddCss&&!fp&&(q2(cy()),fp=!0)}var rI={mixout:function(){return{dom:{css:cy,insertCss:zl}}},hooks:function(){return{beforeDOMElementCreation:function(){zl()},beforeI2svg:function(){zl()}}}},Ot=hn||{};Ot[xt]||(Ot[xt]={});Ot[xt].styles||(Ot[xt].styles={});Ot[xt].hooks||(Ot[xt].hooks={});Ot[xt].shims||(Ot[xt].shims=[]);var et=Ot[xt],fy=[],iI=function e(){Y.removeEventListener("DOMContentLoaded",e),qa=1,fy.map(function(t){return t()})},qa=!1;Nt&&(qa=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),qa||Y.addEventListener("DOMContentLoaded",iI));function oI(e){Nt&&(qa?setTimeout(e,0):fy.push(e))}function go(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?uy(e):"<".concat(t," ").concat(Z2(r),">").concat(o.map(go).join(""),"</").concat(t,">")}function dp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var aI=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Fl=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?aI(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function sI(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function sc(e){var t=sI(e);return t.length===1?t[0].toString(16):null}function lI(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function hp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function lc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=hp(t);typeof et.hooks.addPack=="function"&&!i?et.hooks.addPack(e,hp(t)):et.styles[e]=C(C({},et.styles[e]||{}),o),e==="fas"&&lc("fa",t)}var Vo,Ho,Ko,ur=et.styles,uI=et.shims,cI=(Vo={},le(Vo,K,Object.values(qi[K])),le(Vo,te,Object.values(qi[te])),Vo),Hf=null,dy={},hy={},py={},my={},vy={},fI=(Ho={},le(Ho,K,Object.keys(Qi[K])),le(Ho,te,Object.keys(Qi[te])),Ho);function dI(e){return~K2.indexOf(e)}function hI(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!dI(i)?i:null}var gy=function(){var t=function(o){return Fl(ur,function(a,s,l){return a[l]=Fl(s,o,{}),a},{})};dy=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),hy=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),vy=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in ur||T.autoFetchSvg,r=Fl(uI,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});py=r.names,my=r.unicodes,Hf=Hs(T.styleDefault,{family:T.familyDefault})};X2(function(e){Hf=Hs(e.styleDefault,{family:T.familyDefault})});gy();function Kf(e,t){return(dy[e]||{})[t]}function pI(e,t){return(hy[e]||{})[t]}function Tn(e,t){return(vy[e]||{})[t]}function yy(e){return py[e]||{prefix:null,iconName:null}}function mI(e){var t=my[e],n=Kf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pn(){return Hf}var Gf=function(){return{prefix:null,iconName:null,rest:[]}};function Hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=Qi[r][e],o=Xi[r][e]||Xi[r][i],a=e in et.styles?e:null;return o||a||null}var pp=(Ko={},le(Ko,K,Object.keys(qi[K])),le(Ko,te,Object.keys(qi[te])),Ko);function Ks(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},le(t,K,"".concat(T.cssPrefix,"-").concat(K)),le(t,te,"".concat(T.cssPrefix,"-").concat(te)),t),a=null,s=K;(e.includes(o[K])||e.some(function(u){return pp[K].includes(u)}))&&(s=K),(e.includes(o[te])||e.some(function(u){return pp[te].includes(u)}))&&(s=te);var l=e.reduce(function(u,c){var f=hI(T.cssPrefix,c);if(ur[c]?(c=cI[s].includes(c)?z2[s][c]:c,a=c,u.prefix=c):fI[s].indexOf(c)>-1?(a=c,u.prefix=Hs(c,{family:s})):f?u.iconName=f:c!==T.replacementClass&&c!==o[K]&&c!==o[te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=a==="fa"?yy(u.iconName):{},v=Tn(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||v||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ur.far&&ur.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},Gf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(ur.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Tn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=pn()||"fas"),l}var vI=function(){function e(){x2(this,e),this.definitions={}}return O2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),a[s]),lc(s,a[s]);var l=qi[K][s];l&&lc(l,a[s]),gy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),mp=[],cr={},Er={},gI=Object.keys(Er);function yI(e,t){var n=t.mixoutsTo;return mp=e,cr={},Object.keys(Er).forEach(function(r){gI.indexOf(r)===-1&&delete Er[r]}),mp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Xa(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){cr[a]||(cr[a]=[]),cr[a].push(o[a])})}r.provides&&r.provides(Er)}),n}function uc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=cr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Vn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=cr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Er[e]?Er[e].apply(null,t):void 0}function cc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||pn();if(t)return t=Tn(n,t)||t,dp(wy.definitions,n,t)||dp(et.styles,n,t)}var wy=new vI,wI=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Vn("noAuto")},_I={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nt?(Vn("beforeI2svg",t),Tt("pseudoElements2svg",t),Tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,oI(function(){kI({autoReplaceSvgRoot:n}),Vn("watch",t)})}},SI={icon:function(t){if(t===null)return null;if(Xa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Hs(t[0]);return{prefix:r,iconName:Tn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(F2))){var i=Ks(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||pn(),iconName:Tn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=pn();return{prefix:o,iconName:Tn(o,t)||t}}}},Fe={noAuto:wI,config:T,dom:_I,parse:SI,library:wy,findIconDefinition:cc,toHtml:go},kI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys(et.styles).length>0||T.autoFetchSvg)&&Nt&&T.autoReplaceSvg&&Fe.dom.i2svg({node:r})};function Gs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return go(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Nt){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function EI(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Vf(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Vs(C(C({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function bI(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:a}),children:r}]}]}function Yf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,v=h===void 0?!1:h,g=r.found?r:n,y=g.width,_=g.height,p=i==="fak",d=[T.replacementClass,o?"".concat(T.cssPrefix,"-").concat(o):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),m={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};v&&(m.attributes[Wn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Zi())},children:[l]}),delete m.attributes.title);var S=C(C({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:C(C({},w),f.styles)}),b=r.found&&n.found?Tt("generateAbstractMask",S)||{children:[],attributes:{}}:Tt("generateAbstractIcon",S)||{children:[],attributes:{}},I=b.children,O=b.attributes;return S.children=I,S.attributes=O,s?bI(S):EI(S)}function vp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=C(C(C({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Wn]="");var c=C({},a.styles);Vf(i)&&(c.transform=tI({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Vs(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function II(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Vs(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Bl=et.styles;function fc(e){var t=e[0],n=e[1],r=e.slice(4),i=Uf(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(On.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(On.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(On.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var CI={found:!1,width:512,height:512};function PI(e,t){!oy&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dc(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=pn()),new Promise(function(r,i){if(Tt("missingIconAbstract"),n==="fa"){var o=yy(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Bl[t]&&Bl[t][e]){var a=Bl[t][e];return r(fc(a))}PI(e,t),r(C(C({},CI),{},{icon:T.showMissingIcons&&e?Tt("missingIconAbstract")||{}:{}}))})}var gp=function(){},hc=T.measurePerformance&&Uo&&Uo.mark&&Uo.measure?Uo:{mark:gp,measure:gp},ui='FA "6.2.1"',xI=function(t){return hc.mark("".concat(ui," ").concat(t," begins")),function(){return _y(t)}},_y=function(t){hc.mark("".concat(ui," ").concat(t," ends")),hc.measure("".concat(ui," ").concat(t),"".concat(ui," ").concat(t," begins"),"".concat(ui," ").concat(t," ends"))},Qf={begin:xI,end:_y},ua=function(){};function yp(e){var t=e.getAttribute?e.getAttribute(Wn):null;return typeof t=="string"}function OI(e){var t=e.getAttribute?e.getAttribute(zf):null,n=e.getAttribute?e.getAttribute(Ff):null;return t&&n}function TI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function RI(){if(T.autoReplaceSvg===!0)return ca.replace;var e=ca[T.autoReplaceSvg];return e||ca.replace}function AI(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function NI(e){return Y.createElement(e)}function Sy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?AI:NI:n;if(typeof e=="string")return Y.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Sy(a,{ceFn:r}))}),i}function LI(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ca={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Sy(i),n)}),n.getAttribute(Wn)===null&&T.keepOriginalSource){var r=Y.createComment(LI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Wf(n).indexOf(T.replacementClass))return ca.replace(t);var i=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return go(s)}).join(`
`);n.setAttribute(Wn,""),n.innerHTML=a}};function wp(e){e()}function ky(e,t){var n=typeof t=="function"?t:ua;if(e.length===0)n();else{var r=wp;T.mutateApproach===U2&&(r=hn.requestAnimationFrame||wp),r(function(){var i=RI(),o=Qf.begin("mutate");e.map(i),o(),n()})}}var Xf=!1;function Ey(){Xf=!0}function pc(){Xf=!1}var Ja=null;function _p(e){if(up&&T.observeMutations){var t=e.treeCallback,n=t===void 0?ua:t,r=e.nodeCallback,i=r===void 0?ua:r,o=e.pseudoElementsCallback,a=o===void 0?ua:o,s=e.observeMutationsRoot,l=s===void 0?Y:s;Ja=new up(function(u){if(!Xf){var c=pn();Wr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!yp(f.addedNodes[0])&&(T.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&T.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&yp(f.target)&&~H2.indexOf(f.attributeName))if(f.attributeName==="class"&&OI(f.target)){var h=Ks(Wf(f.target)),v=h.prefix,g=h.iconName;f.target.setAttribute(zf,v||c),g&&f.target.setAttribute(Ff,g)}else TI(f.target)&&i(f.target)})}}),Nt&&Ja.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function DI(){Ja&&Ja.disconnect()}function MI(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function $I(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ks(Wf(e));return i.prefix||(i.prefix=pn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=pI(i.prefix,e.innerText)||Kf(i.prefix,sc(e.innerText))),!i.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function UI(e){var t=Wr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Zi()):(t["aria-hidden"]="true",t.focusable="false")),t}function jI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$I(e),r=n.iconName,i=n.prefix,o=n.rest,a=UI(e),s=uc("parseNodeAttributes",{},e),l=t.styleParser?MI(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var zI=et.styles;function by(e){var t=T.autoReplaceSvg==="nest"?Sp(e,{styleParser:!1}):Sp(e);return~t.extra.classes.indexOf(ay)?Tt("generateLayersText",e,t):Tt("generateSvgReplacementMutation",e,t)}var mn=new Set;Bf.map(function(e){mn.add("fa-".concat(e))});Object.keys(Qi[K]).map(mn.add.bind(mn));Object.keys(Qi[te]).map(mn.add.bind(mn));mn=mo(mn);function kp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nt)return Promise.resolve();var n=Y.documentElement.classList,r=function(f){return n.add("".concat(cp,"-").concat(f))},i=function(f){return n.remove("".concat(cp,"-").concat(f))},o=T.autoFetchSvg?mn:Bf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(zI));o.includes("fa")||o.push("fa");var a=[".".concat(ay,":not([").concat(Wn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Wn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Wr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Qf.begin("onTree"),u=s.reduce(function(c,f){try{var h=by(f);h&&c.push(h)}catch(v){oy||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){ky(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function FI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;by(e).then(function(n){n&&ky([n],t)})}function BI(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:cc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:cc(i||{})),e(r,C(C({},n),{},{mask:i}))}}var WI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?lt:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,v=n.titleId,g=v===void 0?null:v,y=n.classes,_=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var S=t.prefix,b=t.iconName,I=t.icon;return Gs(C({type:"icon"},t),function(){return Vn("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?d["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(g||Zi()):(d["aria-hidden"]="true",d.focusable="false")),Yf({icons:{main:fc(I),mask:l?fc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:C(C({},lt),i),symbol:a,title:h,maskId:c,titleId:g,extra:{attributes:d,styles:w,classes:_}})})}},VI={mixout:function(){return{icon:BI(WI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=kp,n.nodeCallback=FI,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Y:r,o=n.callback,a=o===void 0?function(){}:o;return kp(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(v,g){Promise.all([dc(i,s),c.iconName?dc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=Uf(y,2),p=_[0],d=_[1];v([n,Yf({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=Vs(s);l.length>0&&(i.style=l);var u;return Vf(a)&&(u=Tt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},HI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Gs({type:"layer"},function(){Vn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(mo(o)).join(" ")},children:a}]})}}}},KI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Gs({type:"counter",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),II({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(mo(s))}})})}}}},GI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?lt:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,v=h===void 0?{}:h;return Gs({type:"text",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),vp({content:n,transform:C(C({},lt),o),title:s,extra:{attributes:f,styles:v,classes:["".concat(T.cssPrefix,"-layers-text")].concat(mo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(ny){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return T.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,vp({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},YI=new RegExp('"',"ug"),Ep=[1105920,1112319];function QI(e){var t=e.replace(YI,""),n=lI(t,0),r=n>=Ep[0]&&n<=Ep[1],i=t.length===2?t[0]===t[1]:!1;return{value:sc(i?t[0]:t),isSecondary:r||i}}function bp(e,t){var n="".concat($2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Wr(e.children),a=o.filter(function(I){return I.getAttribute(ac)===t})[0],s=hn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(B2),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:K,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xi[h][l[2].toLowerCase()]:W2[h][u],g=QI(f),y=g.value,_=g.isSecondary,p=l[0].startsWith("FontAwesome"),d=Kf(v,y),m=d;if(p){var w=mI(y);w.iconName&&w.prefix&&(d=w.iconName,v=w.prefix)}if(d&&!_&&(!a||a.getAttribute(zf)!==v||a.getAttribute(Ff)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var S=jI(),b=S.extra;b.attributes[ac]=t,dc(d,v).then(function(I){var O=Yf(C(C({},S),{},{icons:{main:I,mask:Gf()},prefix:v,iconName:m,extra:b,watchable:!0})),L=Y.createElement("svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=O.map(function(R){return go(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function XI(e){return Promise.all([bp(e,"::before"),bp(e,"::after")])}function qI(e){return e.parentNode!==document.head&&!~j2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ac)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ip(e){if(Nt)return new Promise(function(t,n){var r=Wr(e.querySelectorAll("*")).filter(qI).map(XI),i=Qf.begin("searchPseudoElements");Ey(),Promise.all(r).then(function(){i(),pc(),t()}).catch(function(){i(),pc(),n()})})}var JI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ip,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Y:r;T.searchPseudoElements&&Ip(i)}}},Cp=!1,ZI={mixout:function(){return{dom:{unwatch:function(){Ey(),Cp=!0}}}},hooks:function(){return{bootstrap:function(){_p(uc("mutationObserverCallbacks",{}))},noAuto:function(){DI()},watch:function(n){var r=n.observeMutationsRoot;Cp?pc():_p(uc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},eC={mixout:function(){return{parse:{transform:function(n){return Pp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Pp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(a/2*-1," -256)")},v={outer:s,inner:f,path:h};return{tag:"g",attributes:C({},v.outer),children:[{tag:"g",attributes:C({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),v.path)}]}]}}}},Wl={x:0,y:0,width:"100%",height:"100%"};function xp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function tC(e){return e.tag==="g"?e.children:[e]}var nC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Ks(i.split(" ").map(function(a){return a.trim()})):Gf();return o.prefix||(o.prefix=pn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,h=a.icon,v=eI({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:C(C({},Wl),{},{fill:"white"})},y=c.children?{children:c.children.map(xp)}:{},_={tag:"g",attributes:C({},v.inner),children:[xp(C({tag:c.tag,attributes:C(C({},c.attributes),v.path)},y))]},p={tag:"g",attributes:C({},v.outer),children:[_]},d="mask-".concat(s||Zi()),m="clip-".concat(s||Zi()),w={tag:"mask",attributes:C(C({},Wl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:tC(h)},w]};return r.push(S,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Wl)}),{children:r,attributes:i}}}},rC={provides:function(t){var n=!1;hn.matchMedia&&(n=hn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=C(C({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},iC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},oC=[rI,VI,HI,KI,GI,JI,ZI,eC,nC,rC,iC];yI(oC,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;var mc=Fe.parse;Fe.findIconDefinition;Fe.toHtml;var aC=Fe.icon;Fe.layer;Fe.text;Fe.counter;var M={},sC={get exports(){return M},set exports(e){M=e}},lC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uC=lC,cC=uC;function Iy(){}function Cy(){}Cy.resetWarningCache=Iy;var fC=function(){function e(r,i,o,a,s,l){if(l!==cC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Cy,resetWarningCache:Iy};return n.PropTypes=n,n};sC.exports=fC();function Op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Op(Object(n),!0).forEach(function(r){fr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Za(e){return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Za(e)}function fr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hC(e,t){if(e==null)return{};var n=dC(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vc(e){return pC(e)||mC(e)||vC(e)||gC()}function pC(e){if(Array.isArray(e))return gc(e)}function mC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vC(e,t){if(e){if(typeof e=="string")return gc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gc(e,t)}}function gc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yC(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,v=e.inverse,g=e.border,y=e.listItem,_=e.flip,p=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":v,"fa-border":g,"fa-li":y,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},fr(t,"fa-".concat(p),typeof p<"u"&&p!==null),fr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),fr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),fr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function wC(e){return e=e-0,e===e}function Py(e){return wC(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var _C=["style"];function SC(e){return e.charAt(0).toUpperCase()+e.slice(1)}function kC(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Py(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[SC(i)]=o:t[i]=o,t},{})}function xy(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return xy(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=kC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Py(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=hC(n,_C);return i.attrs.style=Qt(Qt({},i.attrs.style),a),e.apply(void 0,[t.tag,Qt(Qt({},i.attrs),s)].concat(vc(r)))}var Oy=!1;try{Oy=!0}catch{}function EC(){if(!Oy&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tp(e){if(e&&Za(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mc.icon)return mc.icon(e);if(e===null)return null;if(e&&Za(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Vl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fr({},e,t):{}}var Rt=to.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=Tp(n),c=Vl("classes",[].concat(vc(yC(e)),vc(o.split(" ")))),f=Vl("transform",typeof e.transform=="string"?mc.transform(e.transform):e.transform),h=Vl("mask",Tp(r)),v=aC(u,Qt(Qt(Qt(Qt({},c),f),h),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!v)return EC("Could not find icon",u),null;var g=v.abstract,y={ref:t};return Object.keys(e).forEach(function(_){Rt.defaultProps.hasOwnProperty(_)||(y[_]=e[_])}),bC(g[0],y)});Rt.displayName="FontAwesomeIcon";Rt.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Rt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var bC=xy.bind(null,to.createElement),IC={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},CC={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},PC={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]},xC={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},OC={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},TC=OC;function RC(){const e=Ur();return me("div",{className:"hero",children:[N("img",{src:P2,alt:"Background",className:"hero--bgimg"}),me("div",{className:"hero--info",children:[N("h1",{children:"Avatar"}),me("div",{className:"hero--btns--container",children:[me("button",{className:"hero--btn",onClick:()=>e("player"),children:[N(Rt,{icon:xC}),"Play"]}),me("button",{className:"hero--btn",children:[N(Rt,{icon:CC}),"More Info"]})]})]})]})}function AC(){const[e,t]=E.useState(),n=E.useRef(),r=E.useRef(),{signIn:i}=If(),o=Ur(),a=async s=>{s.preventDefault();try{t(""),await i(n.current.value,r.current.value),console.log("Login Successfully"),o("/")}catch(l){t("Unable to login"),console.log(l.message)}};return setTimeout(()=>{t(!1)},5e3),N("div",{className:"signup--container",children:me("form",{className:"form",onSubmit:a,children:[N("h2",{className:"signup--header",children:"Login"}),N("input",{type:"email",id:"email",placeholder:"Email Address",ref:n,required:!0}),N("input",{type:"password",id:"password",placeholder:"Password",ref:r,required:!0}),N("button",{type:"submit",className:"signup--btn",children:"Login"}),e&&N("p",{className:"signup--error",children:e}),me("p",{children:["Don't have an account? ",N(sr,{to:"/signup",children:"Sign Up"})]})]})})}function NC(){const[e,t]=E.useState(),n=E.useRef(),r=E.useRef(),i=E.useRef(),{createUser:o}=If(),a=Ur(),s=async l=>{if(l.preventDefault(),r.current.value!==i.current.value)return l.target.reset(),t("Passwords do not match");try{t(""),await o(n.current.value,r.current.value),console.log("Signed Up Successfully"),a("/")}catch(u){t("Failed to create an account"),console.log(u.message)}};return setTimeout(()=>{t(!1)},5e3),N("div",{className:"signup--container",children:me("form",{className:"form",onSubmit:s,children:[N("h2",{className:"signup--header",children:"Sign Up"}),N("input",{type:"email",placeholder:"Email Address",ref:n,required:!0}),N("input",{type:"password",placeholder:"Password",ref:r,required:!0}),N("input",{type:"password",placeholder:"Confirm Password",ref:i,required:!0}),N("button",{type:"submit",className:"signup--btn",children:"Create Account"}),e&&N("p",{className:"signup--error",children:e}),me("p",{children:["Have an account? ",N(sr,{to:"/login",children:"Login"})]})]})})}function LC(){const[e,t]=E.useState(),{user:n,logout:r}=If(),i=Ur(),o=async()=>{t("");try{await r(),i("/login"),console.log("Successfully logged out")}catch(a){t("Failed to log out"),console.log(a.message)}};return setTimeout(()=>{t(!1)},5e3),me("nav",{className:"nav--container",children:[me("div",{className:"logo--links",children:[me(sr,{to:"/",className:"logo",children:[N("h3",{children:"Film"}),N("span",{children:"Time"})]}),N(sr,{to:"/signup",children:"Sign Up"}),N(sr,{to:"/login",children:"Login"}),N(sr,{to:"/",children:"Home"})]}),me("div",{className:"nav--right",children:[me("div",{className:"search",children:[N("button",{children:N(Rt,{icon:TC})}),N("input",{type:"text",placeholder:"Search"})]}),N("button",{onClick:o,children:N(Rt,{icon:PC})}),e&&N("p",{className:"signup--error",children:e})]})]})}const DC="/filmtime/assets/movietrailer-a762508e.mp4";function MC(){const e=Ur();return me("div",{className:"player--container",children:[N("button",{className:"hero--btn back--btn",onClick:()=>e(-1),children:N(Rt,{icon:IC})}),N("video",{src:DC,autoPlay:!0,loop:!0,controls:!0,muted:!0})]})}function $C(){return me("div",{className:"App",children:[N(LC,{}),me(e_,{children:[N(oi,{index:!0,path:"/",element:N(RC,{})}),N(oi,{exact:!0,path:"/Login",element:N(AC,{})}),N(oi,{exact:!0,path:"/signup",element:N(NC,{})}),N(oi,{exact:!0,path:"/player",element:N(MC,{})})]})]})}Kl.createRoot(document.getElementById("root")).render(N(to.StrictMode,{children:N(o_,{children:N(Lb,{store:C2,children:N(QE,{children:N($C,{})})})})}));
