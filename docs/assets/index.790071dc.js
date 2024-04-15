var le=Object.defineProperty;var ae=(n,t,e)=>t in n?le(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var et=(n,t,e)=>(ae(n,typeof t!="symbol"?t+"":t,e),e);import"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/components/card/card.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,$t=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),gt=new WeakMap;class Vt{constructor(t,e,i){if(this._$cssResult$=!0,i!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($t&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=gt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&gt.set(e,t))}return t}toString(){return this.cssText}}const ce=n=>new Vt(typeof n=="string"?n:n+"",void 0,pt),de=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new Vt(e,n,pt)},$e=(n,t)=>{if($t)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=Z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},mt=$t?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ce(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pe,defineProperty:ue,getOwnPropertyDescriptor:_e,getOwnPropertyNames:Ae,getOwnPropertySymbols:fe,getPrototypeOf:ge}=Object,v=globalThis,vt=v.trustedTypes,me=vt?vt.emptyScript:"",st=v.reactiveElementPolyfillSupport,k=(n,t)=>n,at={toAttribute(n,t){switch(t){case Boolean:n=n?me:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},qt=(n,t)=>!pe(n,t),yt={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:qt};var kt,It;(kt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(It=v.litPropertyMetadata)!=null||(v.litPropertyMetadata=new WeakMap);class T extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ue(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){var r;const{get:s,set:o}=(r=_e(this.prototype,t))!=null?r:{get(){return this[e]},set(a){this[e]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const h=s==null?void 0:s.call(this);o.call(this,a),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:yt}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=ge(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,i=[...Ae(e),...fe(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(mt(s))}else t!==void 0&&e.push(mt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;const t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return $e(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:at).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:at;this._$Em=s,this[s]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(t)),!((s=i.hasChanged)!=null?s:qt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){var s;this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&((s=this._$Ej)!=null?s:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,a]of o)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}var jt;T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[k("elementProperties")]=new Map,T[k("finalized")]=new Map,st==null||st({ReactiveElement:T}),((jt=v.reactiveElementVersions)!=null?jt:v.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Q=I.trustedTypes,St=Q?Q.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ft="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,Kt="?"+m,ve=`<${Kt}>`,x=document,D=()=>x.createComment(""),z=n=>n===null||typeof n!="object"&&typeof n!="function",Jt=Array.isArray,ye=n=>Jt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",it=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,bt=/>/g,y=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,xt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,Se=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),R=Se(1),N=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ct=new WeakMap,b=x.createTreeWalker(x,129);function Qt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const Ee=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=M;for(let a=0;a<e;a++){const h=n[a];let c,d,l=-1,p=0;for(;p<h.length&&(r.lastIndex=p,d=r.exec(h),d!==null);)p=r.lastIndex,r===M?d[1]==="!--"?r=Et:d[1]!==void 0?r=bt:d[2]!==void 0?(Zt.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=y):d[3]!==void 0&&(r=y):r===y?d[0]===">"?(r=s!=null?s:M,l=-1):d[1]===void 0?l=-2:(l=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?y:d[3]==='"'?xt:wt):r===xt||r===wt?r=y:r===Et||r===bt?r=M:(r=y,s=void 0);const $=r===y&&n[a+1].startsWith("/>")?" ":"";o+=r===M?h+ve:l>=0?(i.push(c),h.slice(0,l)+Ft+h.slice(l)+m+$):h+m+(l===-2?a:$)}return[Qt(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,h=this.parts,[c,d]=Ee(t,e);if(this.el=W.createElement(c,i),b.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=b.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(Ft)){const p=d[r++],$=s.getAttribute(l).split(m),u=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:u[2],strings:$,ctor:u[1]==="."?we:u[1]==="?"?xe:u[1]==="@"?Ce:X}),s.removeAttribute(l)}else l.startsWith(m)&&(h.push({type:6,index:o}),s.removeAttribute(l));if(Zt.test(s.tagName)){const l=s.textContent.split(m),p=l.length-1;if(p>0){s.textContent=Q?Q.emptyScript:"";for(let $=0;$<p;$++)s.append(l[$],D()),b.nextNode(),h.push({type:2,index:++o});s.append(l[p],D())}}}else if(s.nodeType===8)if(s.data===Kt)h.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)h.push({type:7,index:o}),l+=m.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function P(n,t,e=n,i){var r,a,h;if(t===N)return t;let s=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const o=z(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?((h=e._$Co)!=null?h:e._$Co=[])[i]=s:e._$Cl=s),s!==void 0&&(t=P(n,s._$AS(n,t.values),s,i)),t}class be{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;const{el:{content:e},parts:i}=this._$AD,s=((c=t==null?void 0:t.creationScope)!=null?c:x).importNode(e,!0);b.currentNode=s;let o=b.nextNode(),r=0,a=0,h=i[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new F(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new He(o,this,t)),this._$AV.push(d),h=i[++a]}r!==(h==null?void 0:h.index)&&(o=b.nextNode(),r++)}return b.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,s){var o;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(o=s==null?void 0:s.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),z(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ye(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Qt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const r=new be(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new W(t)),e}k(t){Jt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new F(this.S(D()),this.S(D()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=P(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const a=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=P(this,a[i+h],e,h),c===N&&(c=this._$AH[h]),r||(r=!z(c)||c!==this._$AH[h]),c===_?t=_:t!==_&&(t+=(c!=null?c:"")+o[h+1]),this._$AH[h]=c}r&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class we extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class xe extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class Ce extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=P(this,t,e,0))!=null?r:_)===N)return;const i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class He{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const nt=I.litHtmlPolyfillSupport;var Bt;nt==null||nt(W,F),((Bt=I.litHtmlVersions)!=null?Bt:I.litHtmlVersions=[]).push("3.1.2");const Te=(n,t,e)=>{var o,r;const i=(o=e==null?void 0:e.renderBefore)!=null?o:t;let s=i._$litPart$;if(s===void 0){const a=(r=e==null?void 0:e.renderBefore)!=null?r:null;i._$litPart$=s=new F(t.insertBefore(D(),a),a,void 0,e!=null?e:{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class j extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return(i=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Te(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}}var Dt;j._$litElement$=!0,j.finalized=!0,(Dt=globalThis.litElementHydrateSupport)==null||Dt.call(globalThis,{LitElement:j});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:j});var zt;((zt=globalThis.litElementVersions)!=null?zt:globalThis.litElementVersions=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Y=B.trustedTypes,Ht=Y?Y.createPolicy("lit-html",{createHTML:n=>n}):void 0,ut="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+g,Ne=`<${_t}>`,C=document,G=()=>C.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",Yt=Array.isArray,Gt=n=>Yt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Nt=/>/g,S=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,Ut=/"/g,Xt=/^(?:script|style|textarea|title)$/i,U=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Mt=new WeakMap,w=C.createTreeWalker(C,129);function te(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(t):t}const ee=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=O;for(let a=0;a<e;a++){const h=n[a];let c,d,l=-1,p=0;for(;p<h.length&&(r.lastIndex=p,d=r.exec(h),d!==null);)p=r.lastIndex,r===O?d[1]==="!--"?r=Tt:d[1]!==void 0?r=Nt:d[2]!==void 0?(Xt.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=S):d[3]!==void 0&&(r=S):r===S?d[0]===">"?(r=s!=null?s:O,l=-1):d[1]===void 0?l=-2:(l=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?S:d[3]==='"'?Ut:Pt):r===Ut||r===Pt?r=S:r===Tt||r===Nt?r=O:(r=S,s=void 0);const $=r===S&&n[a+1].startsWith("/>")?" ":"";o+=r===O?h+Ne:l>=0?(i.push(c),h.slice(0,l)+ut+h.slice(l)+g+$):h+g+(l===-2?a:$)}return[te(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,h=this.parts,[c,d]=ee(t,e);if(this.el=q.createElement(c,i),w.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=w.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ut)){const p=d[r++],$=s.getAttribute(l).split(g),u=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:u[2],strings:$,ctor:u[1]==="."?ie:u[1]==="?"?ne:u[1]==="@"?re:J}),s.removeAttribute(l)}else l.startsWith(g)&&(h.push({type:6,index:o}),s.removeAttribute(l));if(Xt.test(s.tagName)){const l=s.textContent.split(g),p=l.length-1;if(p>0){s.textContent=Y?Y.emptyScript:"";for(let $=0;$<p;$++)s.append(l[$],G()),w.nextNode(),h.push({type:2,index:++o});s.append(l[p],G())}}}else if(s.nodeType===8)if(s.data===_t)h.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(g,l+1))!==-1;)h.push({type:7,index:o}),l+=g.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function H(n,t,e=n,i){var r,a,h;if(t===U)return t;let s=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const o=V(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?((h=e._$Co)!=null?h:e._$Co=[])[i]=s:e._$Cl=s),s!==void 0&&(t=H(n,s._$AS(n,t.values),s,i)),t}class se{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;const{el:{content:e},parts:i}=this._$AD,s=((c=t==null?void 0:t.creationScope)!=null?c:C).importNode(e,!0);w.currentNode=s;let o=w.nextNode(),r=0,a=0,h=i[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new K(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new oe(o,this,t)),this._$AV.push(d),h=i[++a]}r!==(h==null?void 0:h.index)&&(o=w.nextNode(),r++)}return w.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,s){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(o=s==null?void 0:s.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),V(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==A&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=q.createElement(te(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const r=new se(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new q(t)),e}k(t){Yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.S(G()),this.S(G()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=H(this,t,e,0),r=!V(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else{const a=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=H(this,a[i+h],e,h),c===U&&(c=this._$AH[h]),r||(r=!V(c)||c!==this._$AH[h]),c===A?t=A:t!==A&&(t+=(c!=null?c:"")+o[h+1]),this._$AH[h]=c}r&&!s&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ie extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class ne extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class re extends J{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=H(this,t,e,0))!=null?r:A)===U)return;const i=this._$AH,s=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==A&&(i===A||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class oe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const Pe={P:ut,A:g,C:_t,M:1,L:ee,R:se,D:Gt,V:H,I:K,H:J,N:ne,U:re,B:ie,F:oe},ht=B.litHtmlPolyfillSupport;var Wt;ht==null||ht(q,K),((Wt=B.litHtmlVersions)!=null?Wt:B.litHtmlVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Me=n=>(...t)=>({_$litDirective$:n,values:t});class Re{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Oe}=Pe,Rt=()=>document.createComment(""),L=(n,t,e)=>{var o;const i=n._$AA.parentNode,s=t===void 0?n._$AB:t._$AA;if(e===void 0){const r=i.insertBefore(Rt(),s),a=i.insertBefore(Rt(),s);e=new Oe(r,a,n,n.options)}else{const r=e._$AB.nextSibling,a=e._$AM,h=a!==n;if(h){let c;(o=e._$AQ)==null||o.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==a._$AU&&e._$AP(c)}if(r!==s||h){let c=e._$AA;for(;c!==r;){const d=c.nextSibling;i.insertBefore(c,s),c=d}}}return e},E=(n,t,e=n)=>(n._$AI(t,e),n),Le={},ke=(n,t=Le)=>n._$AH=t,Ie=n=>n._$AH,lt=n=>{var i;(i=n._$AP)==null||i.call(n,!1,!0);let t=n._$AA;const e=n._$AB.nextSibling;for(;t!==e;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(n,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(n[s],s);return i},Lt=Me(class extends Re{constructor(n){if(super(n),n.type!==Ue.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],o=[];let r=0;for(const a of n)s[r]=i?i(a,r):r,o[r]=e(a,r),r++;return{values:o,keys:s}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,i]){var At;const s=Ie(n),{values:o,keys:r}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=r,o;const a=(At=this.ut)!=null?At:this.ut=[],h=[];let c,d,l=0,p=s.length-1,$=0,u=o.length-1;for(;l<=p&&$<=u;)if(s[l]===null)l++;else if(s[p]===null)p--;else if(a[l]===r[$])h[$]=E(s[l],o[$]),l++,$++;else if(a[p]===r[u])h[u]=E(s[p],o[u]),p--,u--;else if(a[l]===r[u])h[u]=E(s[l],o[u]),L(n,h[u+1],s[l]),l++,u--;else if(a[p]===r[$])h[$]=E(s[p],o[$]),L(n,s[l],s[p]),p--,$++;else if(c===void 0&&(c=Ot(r,$,u),d=Ot(a,l,p)),c.has(a[l]))if(c.has(a[p])){const f=d.get(r[$]),tt=f!==void 0?s[f]:null;if(tt===null){const ft=L(n,s[l]);E(ft,o[$]),h[$]=ft}else h[$]=E(tt,o[$]),L(n,s[l],tt),s[f]=null;$++}else lt(s[p]),p--;else lt(s[l]),l++;for(;$<=u;){const f=L(n,h[u+1]);E(f,o[$]),h[$++]=f}for(;l<=p;){const f=s[l++];f!==null&&lt(f)}return this.ut=r,ke(n,h),U}});class ct extends j{constructor(){super(),this.json={},this.episodes=[],this.tags=new Set([])}async connectedCallback(){const t=await fetch("/motu-quotes/assets/episodes.json");this.json=await t.json(),this.episodes=this.json.episodes;for(let e of this.episodes)new Set(e.tags).forEach(s=>this.tags.add(s));this.dispatchEvent(new CustomEvent("tags-change",{detail:{tags:this.tags}})),super.connectedCallback(),this.performUpdate()}refreshFilter(t){const e=this.json.episodes,i=[];for(let s of e){const o=new Set(s.tags),r=o.intersection(t);console.log(t,o,r),r.size>0&&i.push(s)}this.episodes=i,this.performUpdate()}render(){return R`
      ${Lt(this.episodes,t=>t.number,(t,e)=>{var o;let i="";const s=[].concat((o=t.videoSrc)!=null?o:[]);return s.length?i=R`
              <video slot="image" muted loop autoplay playsinline>
              ${Lt(s,r=>R`<source src="/motu-quotes/assets/images/${r}" type="${r.endsWith("webm")?"video/webm":"video/mp4"}"></source>`)}
             </video>`:t.imageSrc&&(i=R`
              <img
                slot="image"
                src="/motu-quotes/assets/images/${t.imageSrc}"
                alt="A kitten walks towards camera on top of pallet."
              />
            `),R`
            <sl-card id="episode-${t.number}" class="card-overview">
              <strong>${t.text}</strong><br />
              ${t.description||""}<br />
              <small>Episode ${t.number}</small>
              ${i!=null?i:_}
            </sl-card>
          `})}
    `}}et(ct,"properties",{episodes:{}}),et(ct,"styles",de`
    .card-overview {
      margin: 16px;
      width: 100%;
      max-width: min(400px, 100vw - 64px);
    }

    .card-overview small {
      color: var(--sl-color-neutral-500);
    }

    .card-overview img {
      object-fit: cover;
      aspect-ratio: 4 / 3;
    }

    .card-overview video {
      object-fit: cover;
      aspect-ratio: 4 / 3;
      width: 100%;
    }
  `);customElements.define("card-view",ct);const he=document.querySelector("sl-select"),dt=document.querySelector("card-view");dt.addEventListener("tags-change",n=>{for(let t of dt.tags){const e=t.charAt(0).toUpperCase()+t.slice(1);he.insertAdjacentHTML("beforeend",`<sl-option value="${t.replaceAll(" ","-")}">${e}</sl-option>`)}},{once:!0});he.addEventListener("sl-change",n=>{const t=new Set(n.target.selectedOptions.map(e=>e.value.replaceAll("-"," ")));dt.refreshFilter(t)});
