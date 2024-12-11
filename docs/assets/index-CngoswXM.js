(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,I=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),D=new WeakMap;let oe=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(I&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=D.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&D.set(t,e))}return e}toString(){return this.cssText}};const ae=s=>new oe(typeof s=="string"?s:s+"",void 0,X),ne=(s,e)=>{if(I)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=H.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},W=I?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ae(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:le,defineProperty:he,getOwnPropertyDescriptor:ce,getOwnPropertyNames:de,getOwnPropertySymbols:pe,getPrototypeOf:me}=Object,g=globalThis,V=g.trustedTypes,ue=V?V.emptyScript:"",z=g.reactiveElementPolyfillSupport,x=(s,e)=>s,j={toAttribute(s,e){switch(e){case Boolean:s=s?ue:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ee=(s,e)=>!le(s,e),q={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&he(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=ce(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const h=i==null?void 0:i.call(this);o.call(this,a),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??q}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=me(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,r=[...de(t),...pe(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(W(i))}else e!==void 0&&t.push(W(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:j).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),h=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:j;this._$Em=i,this[i]=h.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??ee)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[x("elementProperties")]=new Map,b[x("finalized")]=new Map,z==null||z({ReactiveElement:b}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,N=E.trustedTypes,K=N?N.createPolicy("lit-html",{createHTML:s=>s}):void 0,te="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ie="?"+f,fe=`<${ie}>`,y=document,P=()=>y.createComment(""),C=s=>s===null||typeof s!="object"&&typeof s!="function",B=Array.isArray,ge=s=>B(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",M=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,J=/>/g,v=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,Y=/"/g,re=/^(?:script|style|textarea|title)$/i,ve=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),$e=ve(1),_=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),G=new WeakMap,$=y.createTreeWalker(y,129);function se(s,e){if(!B(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(e):e}const ye=(s,e)=>{const t=s.length-1,r=[];let i,o=e===2?"<svg>":e===3?"<math>":"",a=w;for(let h=0;h<t;h++){const n=s[h];let c,p,l=-1,m=0;for(;m<n.length&&(a.lastIndex=m,p=a.exec(n),p!==null);)m=a.lastIndex,a===w?p[1]==="!--"?a=F:p[1]!==void 0?a=J:p[2]!==void 0?(re.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=v):p[3]!==void 0&&(a=v):a===v?p[0]===">"?(a=i??w,l=-1):p[1]===void 0?l=-2:(l=a.lastIndex-p[2].length,c=p[1],a=p[3]===void 0?v:p[3]==='"'?Y:Z):a===Y||a===Z?a=v:a===F||a===J?a=w:(a=v,i=void 0);const u=a===v&&s[h+1].startsWith("/>")?" ":"";o+=a===w?n+fe:l>=0?(r.push(c),n.slice(0,l)+te+n.slice(l)+f+u):n+f+(l===-2?h:u)}return[se(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class k{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,a=0;const h=e.length-1,n=this.parts,[c,p]=ye(e,t);if(this.el=k.createElement(c,r),$.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=$.nextNode())!==null&&n.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(te)){const m=p[a++],u=i.getAttribute(l).split(f),O=/([.?@])?(.*)/.exec(m);n.push({type:1,index:o,name:O[2],strings:u,ctor:O[1]==="."?_e:O[1]==="?"?Ae:O[1]==="@"?we:T}),i.removeAttribute(l)}else l.startsWith(f)&&(n.push({type:6,index:o}),i.removeAttribute(l));if(re.test(i.tagName)){const l=i.textContent.split(f),m=l.length-1;if(m>0){i.textContent=N?N.emptyScript:"";for(let u=0;u<m;u++)i.append(l[u],P()),$.nextNode(),n.push({type:2,index:++o});i.append(l[m],P())}}}else if(i.nodeType===8)if(i.data===ie)n.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)n.push({type:7,index:o}),l+=f.length-1}o++}}static createElement(e,t){const r=y.createElement("template");return r.innerHTML=e,r}}function A(s,e,t=s,r){var a,h;if(e===_)return e;let i=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const o=C(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=A(s,i._$AS(s,e.values),i,r)),e}class be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??y).importNode(t,!0);$.currentNode=i;let o=$.nextNode(),a=0,h=0,n=r[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new U(o,o.nextSibling,this,e):n.type===1?c=new n.ctor(o,n.name,n.strings,this,e):n.type===6&&(c=new xe(o,this,e)),this._$AV.push(c),n=r[++h]}a!==(n==null?void 0:n.index)&&(o=$.nextNode(),a++)}return $.currentNode=y,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),C(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ge(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=k.createElement(se(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const a=new be(i,this),h=a.u(this.options);a.p(t),this.T(h),this._$AH=a}}_$AC(e){let t=G.get(e.strings);return t===void 0&&G.set(e.strings,t=new k(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new U(this.O(P()),this.O(P()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(e,t=this,r,i){const o=this.strings;let a=!1;if(o===void 0)e=A(this,e,t,0),a=!C(e)||e!==this._$AH&&e!==_,a&&(this._$AH=e);else{const h=e;let n,c;for(e=o[0],n=0;n<o.length-1;n++)c=A(this,h[r+n],t,n),c===_&&(c=this._$AH[n]),a||(a=!C(c)||c!==this._$AH[n]),c===d?e=d:e!==d&&(e+=(c??"")+o[n+1]),this._$AH[n]=c}a&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _e extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ae extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class we extends T{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??d)===_)return;const r=this._$AH,i=e===d&&r!==d||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==d&&(r===d||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class xe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const R=E.litHtmlPolyfillSupport;R==null||R(k,U),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.2.1");const Ee=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new U(e.insertBefore(P(),o),o,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class S extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return _}}var Q;S._$litElement$=!0,S.finalized=!0,(Q=globalThis.litElementHydrateSupport)==null||Q.call(globalThis,{LitElement:S});const L=globalThis.litElementPolyfillSupport;L==null||L({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Se='*{margin:0;padding:0;box-sizing:border-box}body{font-family:Pretendard,sans-serif;background:var(--white-color)}.top-bar{display:flex;flex-direction:column;align-items:flex-end;padding:0 0 1.25rem;width:65.625rem;margin:0 auto;background:var(--white-color)}.top-bar-nav{width:100%}.header-member-service{display:flex;flex-direction:row;align-items:center;list-style:none;justify-content:flex-end;gap:.75rem;padding:.75rem 0 0;height:1.9375rem}.header-member-item{display:flex;align-items:center;gap:.75rem}.header-member-item a{text-decoration:none;font-size:var(--font-sm);line-height:160%;color:var(--content-text-color)}.header-member-item.divider a.join{color:var(--primary-color)}.divider:after{content:"";width:.0625rem;height:.8125rem;background:var(--gray-color-100);margin-left:0 .75rem}.header-wrapper{width:65.625rem;margin:0 auto;background:var(--white-color)}.header{display:flex;flex-direction:column}.header-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:.625rem}.header-name-wrapper{display:flex;align-items:center;width:100%;gap:3.4375rem}.header-site-select{display:flex;align-items:center;gap:.6875rem}.header-logo a img{width:5.125rem;height:3.1875rem}.header-site-select ul{display:flex;list-style:none;gap:.5rem}.header-site-select ul li{position:relative}.header-site-select ul li a{text-decoration:none;font-size:var(--font-lg);color:var(--gray-color-400);letter-spacing:-.0625rem}.header-site-select ul li a.site-main{color:var(--primary-color);font-weight:var(--text-semi-bold)}.header-site-select ul li a.site-beauty:hover{color:var(--primary-color);font-weight:var(--text-semi-bold);transition:color .03s ease,font-weight .03s ease}.header-site-select ul li a.site-main:after{content:"";width:.0625rem;height:1rem;background:var(--gray-color-100);margin-left:.75rem;position:absolute;top:50%;right:-.625rem;transform:translateY(-50%)}.new-icon img{position:relative;top:-.875rem;margin-left:.0625rem;width:.5rem;height:.5rem}.header-search{display:flex;align-items:center;width:25rem;height:3.125rem;border:.0625rem solid var(--primary-color);border-radius:.25rem;padding:.75rem .875rem}.header-search input::placeholder{color:var(--gray-color-400)}.header-search input{flex-grow:1;border:none;font-size:var(--font-md);color:var(--gray-color-400);font-weight:var(--text-bold)}.header-search button{background:none;border:none;cursor:pointer}.header-bookmarks{display:flex;list-style:none;gap:1.25rem;margin-left:auto}.header-bookmarks li a{position:relative;display:flex;align-items:center}.header-bookmarks li a:hover img{filter:invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg) brightness(87%) contrast(91%)}.header-bookmarks .icon{width:2.25rem;height:2.25rem}.header-bookmarks li a:hover .map-popup{display:block}.map-popup{display:none;position:absolute;top:6.25rem;left:50%;transform:translate(-50%,-50%);background-color:var(--white-color);border:.0625rem solid #ccc;padding:1.25rem;z-index:10;width:15.625rem;opacity:2}.map-popup h3{font-size:var(--font-md);font-weight:var(--text-bold);margin-bottom:.625rem}.map-popup p{font-size:var(--font-sm);margin-bottom:.9375rem}.map-popup button{background-color:var(--primary-color);color:var(--white-color);border:none;padding:.5rem 1rem;font-size:var(--font-sm);cursor:pointer}.nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 0;width:65.625rem;margin:0 auto;background:var(--white-color)}.nav-category{display:flex;align-items:center;gap:1.25rem;list-style:none}.nav-category span{text-decoration:none;font-weight:var(--text-semi-bold);font-size:var(--font-md);color:var(--content-text-color);letter-spacing:-.03125rem;padding-left:.5rem}.nav-category-icon{width:1rem;height:.875rem}.nav-category:hover{cursor:pointer}.nav-category:hover .nav-category-icon{filter:invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg) brightness(87%) contrast(91%)}.nav-category:hover span{color:var(--primary-color);font-weight:var(--text-bold)}.nav-site-map{display:flex;list-style:none;gap:5.9375rem}.nav-site-map li a{text-decoration:none;font-weight:var(--text-semi-bold);font-size:var(--font-md);color:var(--content-text-color)}.nav-site-map li a:hover{text-decoration:underline;color:var(--primary-color)}.nav-delivery{display:flex;align-items:center;padding:.3125rem .5rem;border:.0625rem solid var(--gray-color-400);border-radius:1rem}.nav-delivery a{text-decoration:none;font-size:var(--font-sm);color:var(--primary-color)}.header-cs-menu{display:none;list-style:none;position:absolute;top:1.875rem;background:var(--white-color);border:.0625rem solid var(--gray-color-100);z-index:10}.header-member-item:hover .header-cs-menu{display:block}.header-cs-menu li a{display:block;padding:.625rem;text-decoration:none;color:var(--content-text-color)}.header-cs-menu li a:hover{background-color:var(--gray-color-100)}.delivery-bold{font-weight:var(--text-bold)}.header-shadow{position:absolute;left:0;width:100%;height:10px;background:linear-gradient(to bottom,#0000001a,#0000);z-index:1}body{font-size:16px}.nav-site-map{display:flex;justify-content:space-between}@media (max-width: 768px){body{font-size:14px}.nav-site-map{flex-direction:column}}@media (max-width: 1024px){body{font-size:15px}.nav-site-map{flex-direction:row;gap:1rem}}';class Pe extends S{constructor(){super()}render(){return $e`
      <style>
        ${Se}
      </style>

      <!-- 상단 바 영역 -->
      <div class="top-bar">
        <nav class="top-bar-nav">
          <ul class="header-member-service">
            <li class="header-member-item divider">
              <a href="/" class="header-member-link join" aria-label="회원가입"
                >회원가입</a
              >
            </li>
            <li class="header-member-item divider">
              <a href="/" class="header-member-link" aria-label="로그인"
                >로그인</a
              >
            </li>
            <li class="header-member-item">
              <a
                href="#"
                class="header-member-link"
                aria-haspopup="true"
                aria-expanded="false"
              >
                고객센터
                <img
                  class="icon-down"
                  src="./../../assets/icon/down.png"
                  alt="펼치기"
                />
              </a>
              <ul class="header-cs-menu">
                <li><a href="#" aria-label="공지사항">공지사항</a></li>
                <li><a href="#" aria-label="자주하는질문">자주하는질문</a></li>
                <li><a href="#" aria-label="1:1 문의">1:1 문의</a></li>
                <li>
                  <a href="#" aria-label="대량주문 문의">대량주문 문의</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 메인 헤더 -->
      <header class="header-wrapper">
        <div class="header">
          <div class="header-top">
            <div class="header-name-wrapper">
              <div class="header-site-select">
                <h1 class="header-logo">
                  <a href="/" aria-label="마켓컬릿 홈으로 이동">
                    <img src="./../../assets/logo2.jpg" alt="마켓컬릿 로고" />
                  </a>
                </h1>
                <nav class="header-site-select">
                  <ul>
                    <li>
                      <a
                        href="/"
                        class="site-main"
                        aria-label="마켓컬릿 홈페이지"
                      >
                        마켓컬릿
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a
                        href="/"
                        class="site-beauty"
                        aria-label="뷰티컬릿 홈페이지"
                      >
                        뷰티컬릿
                        <span class="new-icon">
                          <img
                            src="./../../assets/icon/new.png"
                            alt="새로운 아이콘"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <form class="header-search" role="search" aria-label="검색">
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요."
                  aria-label="검색어 입력"
                />
                <button type="submit" aria-label="검색 버튼">
                  <img
                    src="./../../assets/icon/search.svg"
                    alt="검색 아이콘"
                    class="icon"
                  />
                </button>
              </form>
              <ul class="header-bookmarks">
                <li>
                  <a href="#" aria-label="매장 찾기">
                    <img
                      src="./../../assets/icon/map.svg"
                      alt="매장 찾기 아이콘"
                      class="icon"
                    />
                    <div class="map-popup">
                      <p>
                        배송지를 등록하고 <br />
                        구매 가능한 상품을 확인하세요.
                      </p>
                      <button>로그인</button>
                      <button>주소 검색</button>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="찜한 상품 목록">
                    <img
                      src="./../../assets/icon/favorits.svg"
                      alt="찜한 상품 목록 아이콘"
                      class="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="장바구니">
                    <img
                      src="./../../assets/icon/cart.svg"
                      alt="장바구니 아이콘"
                      class="icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <nav class="nav">
            <ul class="nav-category">
              <li>
                <img
                  src="./../../assets/icon/hamburger.png"
                  alt="카테고리"
                  class="nav-category-icon"
                  aria-label="카테고리"
                />
                <span>카테고리</span>
              </li>
              <li>
                <ul class="nav-category-list"></ul>
              </li>
            </ul>

            <ul class="nav-site-map">
              <li><a href="/" aria-label="신상품">신상품</a></li>
              <li><a href="/" aria-label="베스트 상품">베스트</a></li>
              <li><a href="/" aria-label="알뜰쇼핑">알뜰쇼핑</a></li>
              <li><a href="/" aria-label="특가/혜택">특가/혜택</a></li>
            </ul>

            <div class="nav-delivery">
              <a href="#" aria-label="샛별·낮 배송 안내">
                <span class="delivery-bold">샛별·하루</span>
                배송안내
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div class="header-shadow"></div>
    `}}customElements.define("home-header",Pe);
