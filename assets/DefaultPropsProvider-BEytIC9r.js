import{h as ye,i as me,c as he,j as Se,l as _e,m as ve,s as be,e as xe,n as $e,o as Oe,p as Pe,q as je,r as ge,t as we,T as Me}from"./Box-CSL1DSQ9.js";import{r as te,a as _}from"./index-uubelm5h.js";import"./jsx-runtime-QvZ8i92b.js";import{_ as A}from"./extends-CF3RwP-h.js";const Fe=Object.freeze(Object.defineProperty({__proto__:null,default:ye,isPlainObject:me},Symbol.toStringTag,{value:"Module"})),Re=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),Te=Object.freeze(Object.defineProperty({__proto__:null,default:Se,private_createBreakpoints:_e,unstable_applyStyles:ve},Symbol.toStringTag,{value:"Module"})),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:be,extendSxProp:xe,unstable_createStyleFunctionSx:$e,unstable_defaultSxConfig:Oe},Symbol.toStringTag,{value:"Module"}));var re={exports:{}},s={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=Symbol.for("react.element"),G=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),E=Symbol.for("react.context"),ke=Symbol.for("react.server_context"),k=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),qe=Symbol.for("react.offscreen"),oe;oe=Symbol.for("react.module.reference");function a(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case H:switch(e=e.type,e){case M:case R:case F:case q:case D:return e;default:switch(e=e&&e.$$typeof,e){case ke:case E:case k:case W:case C:case T:return e;default:return o}}case G:return o}}}s.ContextConsumer=E;s.ContextProvider=T;s.Element=H;s.ForwardRef=k;s.Fragment=M;s.Lazy=W;s.Memo=C;s.Portal=G;s.Profiler=R;s.StrictMode=F;s.Suspense=q;s.SuspenseList=D;s.isAsyncMode=function(){return!1};s.isConcurrentMode=function(){return!1};s.isContextConsumer=function(e){return a(e)===E};s.isContextProvider=function(e){return a(e)===T};s.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===H};s.isForwardRef=function(e){return a(e)===k};s.isFragment=function(e){return a(e)===M};s.isLazy=function(e){return a(e)===W};s.isMemo=function(e){return a(e)===C};s.isPortal=function(e){return a(e)===G};s.isProfiler=function(e){return a(e)===R};s.isStrictMode=function(e){return a(e)===F};s.isSuspense=function(e){return a(e)===q};s.isSuspenseList=function(e){return a(e)===D};s.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===M||e===R||e===F||e===q||e===D||e===qe||typeof e=="object"&&e!==null&&(e.$$typeof===W||e.$$typeof===C||e.$$typeof===T||e.$$typeof===E||e.$$typeof===k||e.$$typeof===oe||e.getModuleId!==void 0)};s.typeOf=a;re.exports=s;var Y=re.exports;const De=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function ne(e){const o=`${e}`.match(De);return o&&o[1]||""}function se(e,o=""){return e.displayName||e.name||ne(e)||o}function Z(e,o,t){const r=se(o);return e.displayName||(r!==""?`${t}(${r})`:t)}function Ce(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return se(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Y.ForwardRef:return Z(e,e.render,"ForwardRef");case Y.Memo:return Z(e,e.type,"memo");default:return}}}const We=Object.freeze(Object.defineProperty({__proto__:null,default:Ce,getFunctionName:ne},Symbol.toStringTag,{value:"Module"}));function V(e,o){const t=A({},o);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))t[r]=A({},e[r],t[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const n=e[r]||{},u=o[r];t[r]={},!u||!Object.keys(u)?t[r]=n:!n||!Object.keys(n)?t[r]=u:(t[r]=A({},u),Object.keys(n).forEach(i=>{t[r][i]=V(n[i],u[i])}))}else t[r]===void 0&&(t[r]=e[r])}),t}function mt(e,o,t=void 0){const r={};return Object.keys(e).forEach(n=>{r[n]=e[n].reduce((u,i)=>{if(i){const d=o(i);d!==""&&u.push(d),t&&t[i]&&u.push(t[i])}return u},[]).join(" ")}),r}const Le=te.createContext(void 0);function ze(e){const{theme:o,name:t,props:r}=e;if(!o||!o.components||!o.components[t])return r;const n=o.components[t];return n.defaultProps?V(n.defaultProps,r):!n.styleOverrides&&!n.variants?V(n,r):r}function Ae({props:e,name:o}){const t=te.useContext(Le);return ze({props:e,name:o,theme:{components:t}})}const Ie=Pe();var $={},I={exports:{}},N;function Ve(){return N||(N=1,function(e){function o(t,r){if(t==null)return{};var n={};for(var u in t)if({}.hasOwnProperty.call(t,u)){if(r.includes(u))continue;n[u]=t[u]}return n}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(I)),I.exports}const Be=_(je),He=_(Fe),Ge=_(Re),Je=_(We),Ke=_(Te),Qe=_(Ee);var v=we;Object.defineProperty($,"__esModule",{value:!0});var Ue=$.default=ct;$.shouldForwardProp=g;$.systemDefaultTheme=void 0;var l=v(ge()),B=v(Ve()),ee=rt(Be),Xe=He;v(Ge);v(Je);var Ye=v(Ke),Ze=v(Qe);const Ne=["ownerState"],et=["variants"],tt=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ue(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,t=new WeakMap;return(ue=function(r){return r?t:o})(e)}function rt(e,o){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=ue(o);if(t&&t.has(e))return t.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var i=n?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function ot(e){return Object.keys(e).length===0}function nt(e){return typeof e=="string"&&e.charCodeAt(0)>96}function g(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const st=$.systemDefaultTheme=(0,Ye.default)(),ut=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function j({defaultTheme:e,theme:o,themeId:t}){return ot(o)?e:o[t]||o}function it(e){return e?(o,t)=>t[e]:null}function w(e,o){let{ownerState:t}=o,r=(0,B.default)(o,Ne);const n=typeof e=="function"?e((0,l.default)({ownerState:t},r)):e;if(Array.isArray(n))return n.flatMap(u=>w(u,(0,l.default)({ownerState:t},r)));if(n&&typeof n=="object"&&Array.isArray(n.variants)){const{variants:u=[]}=n;let d=(0,B.default)(n,et);return u.forEach(c=>{let p=!0;typeof c.props=="function"?p=c.props((0,l.default)({ownerState:t},r,t)):Object.keys(c.props).forEach(S=>{(t==null?void 0:t[S])!==c.props[S]&&r[S]!==c.props[S]&&(p=!1)}),p&&(Array.isArray(d)||(d=[d]),d.push(typeof c.style=="function"?c.style((0,l.default)({ownerState:t},r,t)):c.style))}),d}return n}function ct(e={}){const{themeId:o,defaultTheme:t=st,rootShouldForwardProp:r=g,slotShouldForwardProp:n=g}=e,u=i=>(0,Ze.default)((0,l.default)({},i,{theme:j((0,l.default)({},i,{defaultTheme:t,themeId:o}))}));return u.__mui_systemSx=!0,(i,d={})=>{(0,ee.internal_processStyles)(i,f=>f.filter(m=>!(m!=null&&m.__mui_systemSx)));const{name:c,slot:p,skipVariantsResolver:S,skipSx:ie,overridesResolver:J=it(ut(p))}=d,ce=(0,B.default)(d,tt),fe=S!==void 0?S:p&&p!=="Root"&&p!=="root"||!1,le=ie||!1;let ae,O=g;p==="Root"||p==="root"?O=r:p?O=n:nt(i)&&(O=void 0);const L=(0,ee.default)(i,(0,l.default)({shouldForwardProp:O,label:ae},ce)),K=f=>typeof f=="function"&&f.__emotion_real!==f||(0,Xe.isPlainObject)(f)?m=>w(f,(0,l.default)({},m,{theme:j({theme:m.theme,defaultTheme:t,themeId:o})})):f,Q=(f,...m)=>{let z=K(f);const b=m?m.map(K):[];c&&J&&b.push(h=>{const y=j((0,l.default)({},h,{defaultTheme:t,themeId:o}));if(!y.components||!y.components[c]||!y.components[c].styleOverrides)return null;const x=y.components[c].styleOverrides,P={};return Object.entries(x).forEach(([de,pe])=>{P[de]=w(pe,(0,l.default)({},h,{theme:y}))}),J(h,P)}),c&&!fe&&b.push(h=>{var y;const x=j((0,l.default)({},h,{defaultTheme:t,themeId:o})),P=x==null||(y=x.components)==null||(y=y[c])==null?void 0:y.variants;return w({variants:P},(0,l.default)({},h,{theme:x}))}),le||b.push(u);const U=b.length-m.length;if(Array.isArray(f)&&U>0){const h=new Array(U).fill("");z=[...f,...h],z.raw=[...f.raw,...h]}const X=L(z,...b);return i.muiName&&(X.muiName=i.muiName),X};return L.withConfig&&(Q.withConfig=L.withConfig),Q}}function ft(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const lt=e=>ft(e)&&e!=="classes",ht=Ue({themeId:Me,defaultTheme:Ie,rootShouldForwardProp:lt});function St(e){return Ae(e)}export{V as a,Be as b,mt as c,Ie as d,lt as r,ht as s,St as u};