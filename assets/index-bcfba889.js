var Io=Object.defineProperty;var zo=(s,t,e)=>t in s?Io(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(zo(s,typeof t!="symbol"?t+"":t,e),e);import{s as c,a as S,E as ue,g as Mo,m as Mt,b as Ie,i as Vt,W as Be,c as te,T as Qt,C as Lo,S as Fo,d as No,e as it,f as Lt,h as Zt,B as Ao,j as Po,k as Bo,l as rt,n as Ft,o as Do,p as Yo,q as Oo,r as Ae}from"./settings-b6f7d147.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class le extends Error{constructor(t,e,o){super(`TemplateParseError: ${t}`),this.name=e,this.context=o}}const Wo=(s="")=>{let t=0,e=[],o=null,i=0;const r=/^<\/?([a-zA-Z0-9_\-.]+)\s*/,n=/^\s*(\/?>)\s*/,l=/^([A-Za-z0-9:.\-_@]+)=\s*(["'])/,u=/^<>\s*/,h=/^\s*(<\/>)\s*/,f=()=>{s=$(s);try{return d(p),k(e)}catch(w){return w instanceof le?console.error(`${w.message} | ${w.name}`):console.error(w),null}},d=w=>{t>=s.length||w()},$=w=>w.replace(/<!--.*?-->/gms,"").replace(/\r?\n\s*\r\n/gm," ").replace(/\r?\n\s*(\S)/gm," $1").replace(/\r?\n/g,"").trim(),m=w=>{const E=s.slice(t).match(w);return E&&(t+=E[0].length),E},p=()=>{m(u)?(e.push({type:null,[c.type]:"opening",[c.level]:i}),i++,d(p)):d(x)},x=()=>{m(h)?(i--,e.push({type:null,[c.type]:"closing",[c.level]:i}),d(p)):d(g)},g=()=>{const w=m(r);if(w)w[0].startsWith("</")?(i--,o={type:w[1],[c.type]:"closing",[c.level]:i}):(o={type:w[1],[c.type]:"opening",[c.level]:i},i++),d(v);else throw new le("InvalidTag",s.slice(t))},v=()=>{const w=m(n);if(w){if(w[1]==="/>"){if(o[c.type]==="closing")throw new le("InvalidClosingTag",s.slice(t-10));o[c.type]="self-closing",i--}if(o[c.type]==="opening"){const E=s.slice(t,s.indexOf("<",t));E&&(o.content=E,t+=E.length)}e.push(o),d(p)}else d(I)},I=()=>{const w=m(l);if(w){const E=w[2],C=new RegExp(`^(.*?)${E}\\s*`),_=m(C);if(_){const T=F(w[1],_[1]);o[T.name]=T.value,d(v)}else throw new le("MissingOrInvalidAttributeValue",s.slice(t))}else throw new le("InvalidAttribute",s.slice(t))},F=(w,E)=>{if(w.includes(".")){const[C,_]=w.split(".");return{name:C,value:`{${_}: ${E}}`}}return{name:w,value:E}},k=w=>{let E=[],C=!1,_={children:[]},T=_;for(let M=0;M<w.length;M++){let b=w[M];if(b[c.level]===0&&b[c.type]!=="closing"){if(C)throw new le("MultipleTopLevelTags",z(b));C=!0}if(b[c.type]==="opening")E.push({[c.level]:b[c.level],[c.type]:b[c.type],type:b.type,parent:T});else if(b[c.type]==="closing"){const K=E.length===0;let j=!1,oe=!1;if(K||(j=E[E.length-1][c.level]!==b[c.level],oe=E[E.length-1].type!==b.type),K||j||oe)throw new le("MismatchedClosingTag",z(b));T=E.pop().parent}const N={...b};delete N[c.type],delete N[c.level],b[c.type]==="opening"?(M+1<w.length&&w[M+1][c.type]!=="closing"&&(N.children=[]),T.children.push(N),T=N):b[c.type]==="self-closing"&&T.children.push(N)}if(E.length>0){const M=E.map(b=>z(b)).join(", ");throw new le("UnclosedTags",M)}function z(M){return`${M.type||"empty-tag"}[${M[c.type]}] at level ${M[c.level]}`}return _};return f()};let L;function Xo(s={children:[]}){const t={renderCode:["const elms = []"],effectsCode:[],context:{props:[],components:this.components}};return L=-1,eo.call(t,s),t.renderCode.push("return elms"),{render:new Function("parent","component","context",t.renderCode.join(`
`)),effects:t.effectsCode.map(e=>new Function("component","elms","context",e)),context:t.context}}const tt=function(s,t=!1,e={key:!1,component:"component.",forceEffect:!1}){const o=e.forceEffect?this.effectsCode:this.renderCode;t&&o.push(`parent = ${t}`),"key"in s&&(e.key=_e(s.key,e.component));const i=e.key?`elms[${L}][${e.key}]`:`elms[${L}]`;e.key&&o.push(`
      elms[${L}] = elms[${L}] || {}
    `),o.push(`
    if(!${i}) {
      ${i} = this.element({componentId: component[Symbol.for('id')], parent: parent || 'root'}, component)
    }
    const elementConfig${L} = {}
  `);const r=s.children;delete s.children,Object.keys(s).forEach(n=>{if(n==="type"){s[n]==="Slot"&&o.push(`elementConfig${L}[Symbol.for('isSlot')] = true`);return}n==="slot"&&o.push(`
        elementConfig${L}['parent'] = component[Symbol.for('slots')].filter(slot => slot.ref === '${s.slot}').shift() || component[Symbol.for('slots')][0] || parent
      `),to(n)?this.effectsCode.push(`${i}.set('${n.substring(1)}', ${_e(s[n],e.component)})`):o.push(`elementConfig${L}['${n}'] = ${_t(s[n],n,e.component)}`)}),e.holder===!0&&o.push(`
    if(typeof cmp${L} !== 'undefined') {
      for(key in cmp${L}.config.props) {
        delete elementConfig${L}[cmp${L}.config.props[key]]
      }
    }
    `),o.push(`
    if(!${i}.nodeId) {
      ${i}.populate(elementConfig${L})
    }
  `),r&&eo.call(this,{children:r},`${i}`,e)},Jt=function(s,t=!1,e={key:!1,component:"component.",forceEffect:!1,holder:!1}){const o=e.forceEffect?this.effectsCode:this.renderCode;o.push(`
    const cmp${L} =
      (context.components && context.components['${s.type}']) ||
      component[Symbol.for('components')]['${s.type}']
  `),"key"in s&&(e.key=_e(s.key,e.component));const i=s.children;delete s.children,tt.call(this,s,t,{...e,holder:!0}),t=e.key?`elms[${L}][${e.key}]`:`elms[${L}]`,L++;const r=e.key?`elms[${L}][${e.key}]`:`elms[${L}]`;e.key&&o.push(`
      elms[${L}] = elms[${L}] || {}
    `),t&&o.push(`parent = ${t}`),o.push(`const props${L} = {}`),Object.keys(s).forEach(n=>{n!=="type"&&(to(n)?(this.effectsCode.push(`
        ${r}[Symbol.for('props')]['${n.substring(1)}'] = ${_e(s[n],e.component)}`),o.push(`props${L}['${n.substring(1)}'] = ${_e(s[n],e.component)}`)):o.push(`props${L}['${n}'] = ${_t(s[n],n,e.component)}`))}),o.push(`
    if(!${r}) {
      ${r} = (context.components && context.components['${s.type}'] || component[Symbol.for('components')]['${s.type}'] || (() => { console.log('component ${s.type} not found')})).call(null, {props: props${L}}, ${t}, component)
      if (${r}[Symbol.for('slots')][0]) {
        parent = ${r}[Symbol.for('slots')][0]
        component = ${r}
      } else {
        parent = ${r}[Symbol.for('children')][0]
      }
    }
  `),i&&(L++,tt.call(this,{children:i},!1,{...e}))},Uo=function(s,t){const e=s[":for"];delete s[":for"];const i=/(.+)\s+in\s+(.+)/gi.exec(e),[r,n="index"]=i[1].replace("(","").replace(")","").split(/\s*,\s*/),l={renderCode:[],effectsCode:[],context:{props:[],components:this.components}};t&&l.renderCode.push(`parent = ${t}`),l.renderCode.push(`
    const collection = ${_t(i[2],":for")}
    const keys = []
    for(let __index = 0; __index < collection.length; __index++) {
      parent = ${t}
      if(!component.key) keys.length = 0
      const scope = Object.assign(component, {
        key: Math.random(),
        ${n}: __index,
        ${r}: collection[__index]
      })
    `),"key"in s?l.renderCode.push(`
      keys.push(${_e(s.key,"scope.")})
    `):l.renderCode.push(`
      keys.push(scope.key.toString())
    `),s.type==="Element"||s.type==="Slot"?tt.call(l,s,t,{key:"scope.key",component:"scope.",forceEffect:!1}):Jt.call(l,s,!1,{key:"scope.key",component:"scope.",forceEffect:!1}),l.renderCode=l.renderCode.concat(l.effectsCode),l.renderCode.push("}"),l.renderCode.push(`
    if(elms[${L}]) {
      Object.keys(elms[${L}]).forEach(key => {
        if(keys.indexOf(key) === -1) {
          elms[${L}][key].delete && elms[${L}][key].delete()
          elms[${L}][key].destroy && elms[${L}][key].destroy()
          delete elms[${L}][key]
        }
      })
    }
  `),this.effectsCode.push(l.renderCode.join(`
`))},eo=function(s,t=!1,e={}){s.children&&s.children.forEach(o=>{L++,Object.keys(o).indexOf(":for")>-1?Uo.call(this,o,t):o.type==="Element"||o.type==="Slot"?tt.call(this,o,t,e):Jt.call(this,o,t,e)})},_e=(s,t="component.")=>{const e=/('.*?')+/gi,o=/\$/gi,i=s.matchAll(e),r=[];let n=0;for(const l of i)r.push(l[0]),s=s.replace(l[0],`[@@REPLACEMENT${n}@@]`),n++;return s=s.replace(o,t),r.forEach((l,u)=>{s=s.replace(`[@@REPLACEMENT${u}@@]`,l)}),s},_t=(s="",t=!1,e="component.")=>{let o;if(t==="content")s.startsWith("$")?o=`${e}${s.replace("$","")}`:o=`'${Ho(s,e)}'`;else if(t!=="color"&&!isNaN(parseFloat(s))){if(o=parseFloat(s),s.endsWith("%")){const r={w:"width",width:"width",x:"width",h:"height",height:"height",y:"height"}[t];r&&(o=`parent.node.${r} * (${o} / 100)`)}}else if(s.toLowerCase()==="true")o=!0;else if(s.toLowerCase()==="false")o=!1;else if(t.startsWith("@")&&s){const i=e.slice(0,-1);o=`${i}['${s.replace("$","")}'] && ${i}['${s.replace("$","")}'].bind(${i})`}else s.startsWith("$")?o=`${e}${s.replace("$","")}`:o=`"${s}"`;return o},to=s=>s.startsWith(":"),Ho=(s,t)=>{const e=/\{\{\s*(\$\S+)\s*\}\}/g,o=[...s.matchAll(e)];if(o.length)for(let[i,r]of o)s=s.replace(i,`${r.replace("$",`'+${t}`)}+'`);return s};class oo{constructor(t){a(this,"releaseCallback");this.releaseCallback=t}}class jo extends oo{constructor(e,o){super(e);a(this,"textureMap",new Map);a(this,"zeroReferenceTextureSet",new Set);a(this,"options");this.options={textureCleanupIntervalMs:o.textureCleanupIntervalMs??1e4,textureCleanupAgeThreadholdMs:o.textureCleanupAgeThreadholdMs??6e4},setInterval(()=>{const i=Date.now(),r=this.options.textureCleanupAgeThreadholdMs;for(const n of this.zeroReferenceTextureSet)i-n.lastUpdate>r&&(this.releaseCallback(n.id),this.textureMap.delete(n.id),this.zeroReferenceTextureSet.delete(n))},this.options.textureCleanupIntervalMs)}registerTexture(e){var i;const o=(i=e.options)==null?void 0:i.id;if(S(o,"Texture must have an id to be registered"),!this.textureMap.has(o)){const r={id:o,nodeRefCount:0,lastUpdate:Date.now()};this.textureMap.set(o,r),this.zeroReferenceTextureSet.add(r)}}incrementTextureRefCount(e){var r;const o=(r=e.options)==null?void 0:r.id;S(o,"Texture must have an id to be registered");let i=this.textureMap.get(o);i||(this.registerTexture(e),i=this.textureMap.get(o)),S(i,"Texture must have been registered"),e.txType==="SubTexture"&&this.incrementTextureRefCount(e.props.texture),i.nodeRefCount++,i.lastUpdate=Date.now(),this.zeroReferenceTextureSet.has(i)&&this.zeroReferenceTextureSet.delete(i)}decrementTextureRefCount(e){var r;const o=(r=e.options)==null?void 0:r.id;S(o,"Texture must have an id to be registered");const i=this.textureMap.get(o);S(i,"Texture must have been registered"),i.nodeRefCount--,i.lastUpdate=Date.now(),i.nodeRefCount===0&&this.zeroReferenceTextureSet.add(i),e.txType==="SubTexture"&&this.decrementTextureRefCount(e.props.texture)}}class qo extends oo{constructor(e){super(e);a(this,"registry");this.registry=new FinalizationRegistry(e)}registerTexture(e){var o,i;S((o=e.options)==null?void 0:o.id,"Texture must have an ID to be registered"),this.registry.register(e,(i=e.options)==null?void 0:i.id)}incrementTextureRefCount(){}decrementTextureRefCount(){}}class Go extends ue{constructor(e,o,i){super();a(this,"root",null);a(this,"driver");a(this,"canvas");a(this,"settings");a(this,"nodes",new Map);a(this,"nextTextureId",1);a(this,"textureTracker");const r={appWidth:e.appWidth||1920,appHeight:e.appHeight||1080,deviceLogicalPixelRatio:e.deviceLogicalPixelRatio||1,devicePhysicalPixelRatio:e.devicePhysicalPixelRatio||window.devicePixelRatio,clearColor:e.clearColor??0,coreExtensionModule:e.coreExtensionModule||null,experimental_FinalizationRegistryTextureUsageTracker:e.experimental_FinalizationRegistryTextureUsageTracker??!1,textureCleanupOptions:e.textureCleanupOptions||{},fpsUpdateInterval:e.fpsUpdateInterval||0};this.settings=r;const{appWidth:n,appHeight:l,deviceLogicalPixelRatio:u,devicePhysicalPixelRatio:h}=r,f=g=>{this.driver.releaseTexture(g)},d=r.experimental_FinalizationRegistryTextureUsageTracker&&typeof FinalizationRegistry=="function";this.textureTracker=d?new qo(f):new jo(f,this.settings.textureCleanupOptions);const $=n*u,m=l*u;this.driver=i;const p=document.createElement("canvas");this.canvas=p,p.width=$*h,p.height=m*h,p.style.width=`${$}px`,p.style.height=`${m}px`;let x;if(typeof o=="string"?x=document.getElementById(o):x=o,!x)throw new Error("Could not find target element");i.onCreateNode=g=>{this.nodes.set(g.id,g)},i.onBeforeDestroyNode=g=>{this.nodes.delete(g.id)},i.onFpsUpdate=g=>{this.emit("fpsUpdate",g)},x.appendChild(p)}async init(){await this.driver.init(this,this.settings,this.canvas),this.root=this.driver.getRootNode()}createNode(e){return this.driver.createNode(this.resolveNodeDefaults(e))}createTextNode(e){return this.driver.createTextNode({...this.resolveNodeDefaults(e),text:e.text??"",textRendererOverride:e.textRendererOverride??null,fontSize:e.fontSize??16,fontFamily:e.fontFamily??"sans-serif",fontStyle:e.fontStyle??"normal",fontWeight:e.fontWeight??"normal",fontStretch:e.fontStretch??"normal",textAlign:e.textAlign??"left",contain:e.contain??"none",scrollable:e.scrollable??!1,scrollY:e.scrollY??0,offsetY:e.offsetY??0,letterSpacing:e.letterSpacing??0,debug:e.debug??{}})}resolveNodeDefaults(e){const o=e.color??4294967295,i=e.colorTl??e.colorTop??e.colorLeft??o,r=e.colorTr??e.colorTop??e.colorRight??o,n=e.colorBl??e.colorBottom??e.colorLeft??o,l=e.colorBr??e.colorBottom??e.colorRight??o;return{x:e.x??0,y:e.y??0,width:e.width??0,height:e.height??0,alpha:e.alpha??1,clipping:e.clipping??!1,color:o,colorTop:e.colorTop??o,colorBottom:e.colorBottom??o,colorLeft:e.colorLeft??o,colorRight:e.colorRight??o,colorBl:n,colorBr:l,colorTl:i,colorTr:r,zIndex:e.zIndex??0,zIndexLocked:e.zIndexLocked??0,parent:e.parent??null,texture:e.texture??null,shader:e.shader??null,src:e.src??"",scale:e.scale??null,scaleX:e.scaleX??e.scale??1,scaleY:e.scaleY??e.scale??1,mount:e.mount??0,mountX:e.mountX??e.mount??0,mountY:e.mountY??e.mount??0,pivot:e.pivot??.5,pivotX:e.pivotX??e.pivot??.5,pivotY:e.pivotY??e.pivot??.5,rotation:e.rotation??0}}destroyNode(e){return this.driver.destroyNode(e)}createTexture(e,o,i){const r=this.nextTextureId++,n={descType:"texture",txType:e,props:o,options:{...i,id:r}};return this.textureTracker.registerTexture(n),n}createShader(e,o){return{descType:"shader",shType:e,props:o}}getNodeById(e){return this.nodes.get(e)||null}toggleFreeze(){throw new Error("Not implemented")}advanceFrame(){throw new Error("Not implemented")}rerender(){throw new Error("Not implemented")}}class Ko extends ue{constructor(e,o,i){super();a(this,"node");a(this,"props");a(this,"settings");a(this,"propStartValues",{});a(this,"restoreValues",{});a(this,"progress",0);a(this,"timingFunction");a(this,"propsList");this.node=e,this.props=o,this.settings=i,this.propStartValues={},this.propsList=Object.keys(o),this.propsList.forEach(r=>{this.propStartValues[r]=e[r]}),this.timingFunction=r=>r,i.easing&&typeof i.easing=="string"&&(this.timingFunction=Mo(i.easing))}reset(){this.progress=0,this.update(0)}restore(){this.reset(),Object.keys(this.props).forEach(e=>{this.node[e]=this.propStartValues[e]})}reverse(){this.progress=0,Object.keys(this.props).forEach(e=>{const o=this.props[e],i=this.propStartValues[e];this.props[e]=i,this.propStartValues[e]=o}),this.settings.loop||(this.settings.stopMethod=!1)}applyEasing(e,o,i){return(this.timingFunction(e)||e)*(i-o)+o}update(e){const{duration:o,loop:i,easing:r,stopMethod:n}=this.settings;if(!o){this.emit("finished",{});return}if(this.progress+=e/o,this.progress>1&&(this.progress=i?0:1,n)){this.emit("finished",{});return}for(let l=0;l<this.propsList.length;l++){const u=this.propsList[l],h=this.props[u],f=this.propStartValues[u],d=h;if(u.indexOf("color")!==-1){if(f===d){this.node[u]=f;continue}if(r){const $=this.timingFunction(this.progress)||this.progress,m=Mt(f,d,$);this.node[u]=m;continue}this.node[u]=Mt(f,d,this.progress);continue}if(r){this.node[u]=this.applyEasing(this.progress,f,d);continue}this.node[u]=f+(d-f)*this.progress}this.progress===1&&this.emit("finished",{})}}class Vo{constructor(t,e){a(this,"manager");a(this,"animation");a(this,"stoppedPromise",null);a(this,"stoppedResolve",null);a(this,"state");this.manager=t,this.animation=e,this.state="stopped"}start(){return this.makeStoppedPromise(),this.animation.once("finished",this.finished.bind(this)),this.manager.activeAnimations.has(this.animation)||this.manager.registerAnimation(this.animation),this.state="running",this}stop(){return this.manager.unregisterAnimation(this.animation),this.stoppedResolve!==null&&(this.stoppedResolve(),this.stoppedResolve=null),this.animation.reset(),this.state="stopped",this}pause(){return this.manager.unregisterAnimation(this.animation),this.state="paused",this}restore(){return this.stoppedResolve=null,this.animation.restore(),this}waitUntilStopped(){this.makeStoppedPromise();const t=this.stoppedPromise;return S(t),t}makeStoppedPromise(){this.stoppedResolve===null&&(this.stoppedPromise=new Promise(t=>{this.stoppedResolve=t}))}finished(){S(this.stoppedResolve);const{loop:t,stopMethod:e}=this.animation.settings;if(e==="reverse"){this.animation.reverse(),this.start();return}this.stoppedResolve(),this.stoppedResolve=null,!t&&this.manager.unregisterAnimation(this.animation)}}const D=0,Y=3,X=6,B=1,O=4,H=7,Q=2,Z=5,J=8;class ee{constructor(t){a(this,"data");t?(this.data=new Float32Array(9),this.data[D]=t[0],this.data[Y]=t[3],this.data[X]=t[6],this.data[B]=t[1],this.data[O]=t[4],this.data[H]=t[7],this.data[Q]=t[2],this.data[Z]=t[5],this.data[J]=t[8]):this.data=new Float32Array(9)}static get temp(){return Qo}static multiply(t,e,o){const i=t.data[D]*e.data[D]+t.data[Y]*e.data[B]+t.data[X]*e.data[Q],r=t.data[D]*e.data[Y]+t.data[Y]*e.data[O]+t.data[X]*e.data[Z],n=t.data[D]*e.data[X]+t.data[Y]*e.data[H]+t.data[X]*e.data[J],l=t.data[B]*e.data[D]+t.data[O]*e.data[B]+t.data[H]*e.data[Q],u=t.data[B]*e.data[Y]+t.data[O]*e.data[O]+t.data[H]*e.data[Z],h=t.data[B]*e.data[X]+t.data[O]*e.data[H]+t.data[H]*e.data[J],f=t.data[Q]*e.data[D]+t.data[Z]*e.data[B]+t.data[J]*e.data[Q],d=t.data[Q]*e.data[Y]+t.data[Z]*e.data[O]+t.data[J]*e.data[Z],$=t.data[Q]*e.data[X]+t.data[Z]*e.data[H]+t.data[J]*e.data[J];return o||(o=new ee),o.data[D]=i,o.data[Y]=r,o.data[X]=n,o.data[B]=l,o.data[O]=u,o.data[H]=h,o.data[Q]=f,o.data[Z]=d,o.data[J]=$,o}static identity(t){return t||(t=new ee),t.data[D]=1,t.data[Y]=0,t.data[X]=0,t.data[B]=0,t.data[O]=1,t.data[H]=0,t.data[Q]=0,t.data[Z]=0,t.data[J]=1,t}static translate(t,e,o){return o||(o=new ee),o.data[D]=1,o.data[Y]=0,o.data[X]=t,o.data[B]=0,o.data[O]=1,o.data[H]=e,o.data[Q]=0,o.data[Z]=0,o.data[J]=1,o}static scale(t,e,o){return o||(o=new ee),o.data[D]=t,o.data[Y]=0,o.data[X]=0,o.data[B]=0,o.data[O]=e,o.data[H]=0,o.data[Q]=0,o.data[Z]=0,o.data[J]=1,o}static rotate(t,e){const o=Math.cos(t),i=Math.sin(t);return e||(e=new ee),e.data[D]=o,e.data[Y]=-i,e.data[X]=0,e.data[B]=i,e.data[O]=o,e.data[H]=0,e.data[Q]=0,e.data[Z]=0,e.data[J]=1,e}static copy(t,e,o){return e||(e=new ee),e.data[0]=t.data[0],e.data[1]=t.data[1],e.data[2]=t.data[2],e.data[3]=t.data[3],e.data[4]=t.data[4],e.data[5]=t.data[5],e.data[6]=t.data[6],e.data[7]=t.data[7],e.data[8]=t.data[8],e}translate(t,e){return this.data[X]=this.data[D]*t+this.data[Y]*e+this.data[X],this.data[H]=this.data[B]*t+this.data[O]*e+this.data[H],this}scale(t,e){return this.data[D]=this.data[D]*t,this.data[Y]=this.data[Y]*e,this.data[B]=this.data[B]*t,this.data[O]=this.data[O]*e,this}rotate(t){if(t===0||!(t%Math.PI*2))return this;const e=Math.cos(t),o=Math.sin(t),i=this.data[D]*e+this.data[Y]*o,r=this.data[Y]*e-this.data[D]*o,n=this.data[B]*e+this.data[O]*o,l=this.data[O]*e-this.data[B]*o;return this.data[D]=i,this.data[Y]=r,this.data[B]=n,this.data[O]=l,this}multiply(t){return ee.multiply(this,t,this)}get tx(){return this.data[X]}get ty(){return this.data[H]}get ta(){return this.data[D]}get tb(){return this.data[Y]}get tc(){return this.data[B]}get td(){return this.data[O]}transformPoint(t,e){return[this.data[D]*t+this.data[Y]*e+this.data[X],this.data[B]*t+this.data[O]*e+this.data[B]]}}const Qo=new ee;var y;(function(s){s[s.Children=1]="Children",s[s.ScaleRotate=2]="ScaleRotate",s[s.Local=4]="Local",s[s.Global=8]="Global",s[s.Clipping=16]="Clipping",s[s.CalculatedZIndex=32]="CalculatedZIndex",s[s.ZIndexSortedChildren=64]="ZIndexSortedChildren",s[s.PremultipliedColors=128]="PremultipliedColors",s[s.WorldAlpha=256]="WorldAlpha",s[s.None=0]="None",s[s.All=511]="All"})(y||(y={}));class Tt extends ue{constructor(e,o){super();a(this,"stage");a(this,"children",[]);a(this,"props");a(this,"updateType",y.All);a(this,"globalTransform");a(this,"scaleRotateTransform");a(this,"localTransform");a(this,"clippingRect",null);a(this,"isRenderable",!1);a(this,"parentClippingRect",null);a(this,"worldAlpha",1);a(this,"premultipliedColorTl",0);a(this,"premultipliedColorTr",0);a(this,"premultipliedColorBl",0);a(this,"premultipliedColorBr",0);a(this,"calcZIndex",0);a(this,"isComplex",!1);a(this,"onTextureLoaded",(e,o)=>{this.stage.requestRender(),this.emit("loaded",{type:"texture",dimensions:o})});a(this,"onTextureFailed",(e,o)=>{this.emit("failed",{type:"texture",error:o})});this.stage=e,this.props={...o,parent:null},this.parent=o.parent,this.updateScaleRotateTransform()}loadTexture(e,o,i=null){this.props.texture&&this.unloadTexture();const{txManager:r}=this.stage,n=r.loadTexture(e,o,i);this.props.texture=n,this.props.textureOptions=i,this.checkIsRenderable(),queueMicrotask(()=>{n.state==="loaded"?this.onTextureLoaded(n,n.dimensions):n.state==="failed"&&this.onTextureFailed(n,n.error),n.on("loaded",this.onTextureLoaded),n.on("failed",this.onTextureFailed)})}unloadTexture(){this.props.texture&&(this.props.texture.off("loaded",this.onTextureLoaded),this.props.texture.off("failed",this.onTextureFailed)),this.props.texture=null,this.props.textureOptions=null,this.checkIsRenderable()}loadShader(e,o){const i=this.stage.renderer.getShaderManager();S(i);const{shader:r,props:n}=i.loadShader(e,o);this.props.shader=r,this.props.shaderProps=n,this.checkIsRenderable()}setUpdateType(e){this.updateType|=e;const o=this.props.parent;o&&!(o.updateType&y.Children)&&o.setUpdateType(y.Children)}sortChildren(){this.children.sort((e,o)=>e.calcZIndex-o.calcZIndex)}updateScaleRotateTransform(){this.scaleRotateTransform=ee.rotate(this.props.rotation,this.scaleRotateTransform).scale(this.props.scaleX,this.props.scaleY)}updateLocalTransform(){S(this.scaleRotateTransform);const e=this.props.pivotX*this.props.width,o=this.props.pivotY*this.props.height,i=this.props.mountX*this.props.width,r=this.props.mountY*this.props.height;this.localTransform=ee.translate(e-i+this.props.x,o-r+this.props.y,this.localTransform).multiply(this.scaleRotateTransform).translate(-e,-o),this.setUpdateType(y.Global)}update(e,o=null){this.updateType&y.ScaleRotate&&(this.updateScaleRotateTransform(),this.setUpdateType(y.Local)),this.updateType&y.Local&&(this.updateLocalTransform(),this.setUpdateType(y.Global));const i=this.props.parent;let r=y.None;this.updateType&y.Global&&(S(this.localTransform),this.globalTransform=ee.copy((i==null?void 0:i.globalTransform)||this.localTransform,this.globalTransform),i&&this.globalTransform.multiply(this.localTransform),this.setUpdateType(y.Clipping|y.Children),r|=y.Global),this.updateType&y.Clipping&&(this.calculateClippingRect(o),this.checkIsRenderable(),this.setUpdateType(y.Children),r|=y.Clipping),this.updateType&y.WorldAlpha&&(i?this.worldAlpha=i.worldAlpha*this.props.alpha:this.worldAlpha=this.props.alpha,this.setUpdateType(y.Children|y.PremultipliedColors),r|=y.WorldAlpha),this.updateType&y.PremultipliedColors&&(this.premultipliedColorTl=Ie(this.props.colorTl,this.worldAlpha,!0),this.premultipliedColorTr=Ie(this.props.colorTr,this.worldAlpha,!0),this.premultipliedColorBl=Ie(this.props.colorBl,this.worldAlpha,!0),this.premultipliedColorBr=Ie(this.props.colorBr,this.worldAlpha,!0),this.checkIsRenderable(),this.setUpdateType(y.Children),r|=y.PremultipliedColors),i&&this.updateType&y.CalculatedZIndex&&(this.calculateZIndex(),i.setUpdateType(y.ZIndexSortedChildren)),this.updateType&y.Children&&this.children.length&&this.children.forEach(n=>{n.setUpdateType(r),n.updateType!==0&&n.update(e,this.clippingRect)}),this.updateType&y.ZIndexSortedChildren&&this.sortChildren(),this.updateType=0}checkIsRenderable(){return this.props.texture?this.isRenderable=!0:this.props.shader?this.isRenderable=!0:this.props.clipping?this.isRenderable=!0:["color","colorTop","colorBottom","colorLeft","colorRight","colorTl","colorTr","colorBl","colorBr"].some(o=>this.props[o]!==0)?this.isRenderable=!0:this.isRenderable=!1}calculateClippingRect(e=null){if(S(this.globalTransform),this.parentClippingRect===e&&this.clippingRect)return;const o=this.globalTransform,i=o.tb!==0||o.tc!==0;let r=this.props.clipping&&!i?{x:o.tx,y:o.ty,width:this.width*o.ta,height:this.height*o.td}:null;e&&r?r=Vt(e,r):e&&(r=e),this.parentClippingRect=e,this.clippingRect=r}calculateZIndex(){var n,l;const e=this.props,o=e.zIndex||0,i=((n=e.parent)==null?void 0:n.zIndex)||0;let r=o;(l=e.parent)!=null&&l.zIndexLocked&&(r=o<i?o:i),this.calcZIndex=r}renderQuads(e){const{width:o,height:i,texture:r,textureOptions:n,shader:l,shaderProps:u}=this.props,{premultipliedColorTl:h,premultipliedColorTr:f,premultipliedColorBl:d,premultipliedColorBr:$}=this,{zIndex:m,worldAlpha:p,globalTransform:x,clippingRect:g}=this;S(x),e.addQuad({width:o,height:i,colorTl:h,colorTr:f,colorBl:d,colorBr:$,texture:r,textureOptions:n,zIndex:m,shader:l,shaderProps:u,alpha:p,clippingRect:g,tx:x.tx,ty:x.ty,ta:x.ta,tb:x.tb,tc:x.tc,td:x.td})}get id(){return this.props.id}get x(){return this.props.x}set x(e){this.props.x!==e&&(this.props.x=e,this.setUpdateType(y.Local))}get absX(){var e,o,i;return this.props.x+(((e=this.props.parent)==null?void 0:e.absX)||((i=(o=this.props.parent)==null?void 0:o.globalTransform)==null?void 0:i.tx)||0)}get absY(){var e;return this.props.y+(((e=this.props.parent)==null?void 0:e.absY)??0)}get y(){return this.props.y}set y(e){this.props.y!==e&&(this.props.y=e,this.setUpdateType(y.Local))}get width(){return this.props.width}set width(e){this.props.width!==e&&(this.props.width=e,this.setUpdateType(y.Local))}get height(){return this.props.height}set height(e){this.props.height!==e&&(this.props.height=e,this.setUpdateType(y.Local))}get scale(){return this.scaleX}set scale(e){this.scaleX=e,this.scaleY=e}get scaleX(){return this.props.scaleX}set scaleX(e){this.props.scaleX!==e&&(this.props.scaleX=e,this.setUpdateType(y.ScaleRotate))}get scaleY(){return this.props.scaleY}set scaleY(e){this.props.scaleY!==e&&(this.props.scaleY=e,this.setUpdateType(y.ScaleRotate))}get mount(){return this.props.mount}set mount(e){(this.props.mountX!==e||this.props.mountY!==e)&&(this.props.mountX=e,this.props.mountY=e,this.props.mount=e,this.setUpdateType(y.Local))}get mountX(){return this.props.mountX}set mountX(e){this.props.mountX!==e&&(this.props.mountX=e,this.setUpdateType(y.Local))}get mountY(){return this.props.mountY}set mountY(e){this.props.mountY!==e&&(this.props.mountY=e,this.setUpdateType(y.Local))}get pivot(){return this.props.pivot}set pivot(e){(this.props.pivotX!==e||this.props.pivotY!==e)&&(this.props.pivotX=e,this.props.pivotY=e,this.props.pivot=e,this.setUpdateType(y.Local))}get pivotX(){return this.props.pivotX}set pivotX(e){this.props.pivotX!==e&&(this.props.pivotX=e,this.setUpdateType(y.Local))}get pivotY(){return this.props.pivotY}set pivotY(e){this.props.pivotY!==e&&(this.props.pivotY=e,this.setUpdateType(y.Local))}get rotation(){return this.props.rotation}set rotation(e){this.props.rotation!==e&&(this.props.rotation=e,this.setUpdateType(y.ScaleRotate))}get alpha(){return this.props.alpha}set alpha(e){this.props.alpha=e,this.setUpdateType(y.PremultipliedColors|y.WorldAlpha)}get clipping(){return this.props.clipping}set clipping(e){this.props.clipping=e,this.setUpdateType(y.Clipping)}get color(){return this.props.color}set color(e){(this.props.colorTl!==e||this.props.colorTr!==e||this.props.colorBl!==e||this.props.colorBr!==e)&&(this.colorTl=e,this.colorTr=e,this.colorBl=e,this.colorBr=e),this.props.color=e,this.setUpdateType(y.PremultipliedColors)}get colorTop(){return this.props.colorTop}set colorTop(e){(this.props.colorTl!==e||this.props.colorTr!==e)&&(this.colorTl=e,this.colorTr=e),this.props.colorTop=e,this.setUpdateType(y.PremultipliedColors)}get colorBottom(){return this.props.colorBottom}set colorBottom(e){(this.props.colorBl!==e||this.props.colorBr!==e)&&(this.colorBl=e,this.colorBr=e),this.props.colorBottom=e,this.setUpdateType(y.PremultipliedColors)}get colorLeft(){return this.props.colorLeft}set colorLeft(e){(this.props.colorTl!==e||this.props.colorBl!==e)&&(this.colorTl=e,this.colorBl=e),this.props.colorLeft=e,this.setUpdateType(y.PremultipliedColors)}get colorRight(){return this.props.colorRight}set colorRight(e){(this.props.colorTr!==e||this.props.colorBr!==e)&&(this.colorTr=e,this.colorBr=e),this.props.colorRight=e,this.setUpdateType(y.PremultipliedColors)}get colorTl(){return this.props.colorTl}set colorTl(e){this.props.colorTl=e,this.setUpdateType(y.PremultipliedColors)}get colorTr(){return this.props.colorTr}set colorTr(e){this.props.colorTr=e,this.setUpdateType(y.PremultipliedColors)}get colorBl(){return this.props.colorBl}set colorBl(e){this.props.colorBl=e,this.setUpdateType(y.PremultipliedColors)}get colorBr(){return this.props.colorBr}set colorBr(e){this.props.colorBr=e,this.setUpdateType(y.PremultipliedColors)}get zIndexLocked(){return this.props.zIndexLocked||0}set zIndexLocked(e){this.props.zIndexLocked=e,this.setUpdateType(y.CalculatedZIndex|y.Children),this.children.forEach(o=>{o.setUpdateType(y.CalculatedZIndex)})}get zIndex(){return this.props.zIndex}set zIndex(e){this.props.zIndex=e,this.setUpdateType(y.CalculatedZIndex|y.Children),this.children.forEach(o=>{o.setUpdateType(y.CalculatedZIndex)})}get parent(){return this.props.parent}set parent(e){const o=this.props.parent;if(o!==e){if(this.props.parent=e,o){const i=o.children.indexOf(this);S(i!==-1,"CoreNode.parent: Node not found in old parent's children!"),o.children.splice(i,1)}e&&(e.children.push(this),this.setUpdateType(y.All),e.setUpdateType(y.Children|y.ZIndexSortedChildren)),this.updateScaleRotateTransform()}}}let Zo=1;function Ct(){return Zo++}class pt extends ue{constructor(e,o,i,r){super();a(this,"rendererMain");a(this,"stage");a(this,"id");a(this,"coreNode");a(this,"_children",[]);a(this,"_src","");a(this,"_parent",null);a(this,"_texture",null);a(this,"_shader",null);a(this,"onTextureLoaded",(e,o)=>{this.emit("loaded",o)});a(this,"onTextureFailed",(e,o)=>{this.emit("failed",o)});this.rendererMain=o,this.stage=i,this.id=(r==null?void 0:r.id)??Ct(),this.coreNode=r||new Tt(this.stage,{id:this.id,x:e.x,y:e.y,width:e.width,height:e.height,alpha:e.alpha,clipping:e.clipping,color:e.color,colorTop:e.colorTop,colorBottom:e.colorBottom,colorLeft:e.colorLeft,colorRight:e.colorRight,colorTl:e.colorTl,colorTr:e.colorTr,colorBl:e.colorBl,colorBr:e.colorBr,zIndex:e.zIndex,zIndexLocked:e.zIndexLocked,scaleX:e.scaleX,scaleY:e.scaleY,mountX:e.mountX,mountY:e.mountY,mount:e.mount,pivot:e.pivot,pivotX:e.pivotX,pivotY:e.pivotY,rotation:e.rotation,parent:null,shader:null,shaderProps:null,texture:null,textureOptions:null}),this.coreNode.on("loaded",this.onTextureLoaded),this.coreNode.on("failed",this.onTextureFailed),this.parent=e.parent,this.shader=e.shader,this.texture=e.texture,this.src=e.src}get x(){return this.coreNode.x}set x(e){this.coreNode.x=e}get y(){return this.coreNode.y}set y(e){this.coreNode.y=e}get width(){return this.coreNode.width}set width(e){this.coreNode.width=e}get height(){return this.coreNode.height}set height(e){this.coreNode.height=e}get alpha(){return this.coreNode.alpha}set alpha(e){this.coreNode.alpha=e}get clipping(){return this.coreNode.clipping}set clipping(e){this.coreNode.clipping=e}get color(){return this.coreNode.color}set color(e){this.coreNode.color=e}get colorTop(){return this.coreNode.colorTop}set colorTop(e){this.coreNode.colorTop=e}get colorBottom(){return this.coreNode.colorBottom}set colorBottom(e){this.coreNode.colorBottom=e}get colorLeft(){return this.coreNode.colorLeft}set colorLeft(e){this.coreNode.colorLeft=e}get colorRight(){return this.coreNode.colorRight}set colorRight(e){this.coreNode.colorRight=e}get colorTl(){return this.coreNode.colorTl}set colorTl(e){this.coreNode.colorTl=e}get colorTr(){return this.coreNode.colorTr}set colorTr(e){this.coreNode.colorTr=e}get colorBl(){return this.coreNode.colorBl}set colorBl(e){this.coreNode.colorBl=e}get colorBr(){return this.coreNode.colorBr}set colorBr(e){this.coreNode.colorBr=e}get scale(){return this.scaleX!==this.scaleY?null:this.coreNode.scaleX}set scale(e){e!==null&&(this.coreNode.scaleX=e,this.coreNode.scaleY=e)}get scaleX(){return this.coreNode.scaleX}set scaleX(e){this.coreNode.scaleX=e}get scaleY(){return this.coreNode.scaleY}set scaleY(e){this.coreNode.scaleY=e}get mount(){return this.coreNode.mount}set mount(e){this.coreNode.mount=e}get mountX(){return this.coreNode.mountX}set mountX(e){this.coreNode.mountX=e}get mountY(){return this.coreNode.mountY}set mountY(e){this.coreNode.mountY=e}get pivot(){return this.coreNode.pivot}set pivot(e){this.coreNode.pivot=e}get pivotX(){return this.coreNode.pivotX}set pivotX(e){this.coreNode.pivotX=e}get pivotY(){return this.coreNode.pivotY}set pivotY(e){this.coreNode.pivotY=e}get rotation(){return this.coreNode.rotation}set rotation(e){this.coreNode.rotation=e}get parent(){return this._parent}set parent(e){const o=this._parent;if(this._parent=e,this.coreNode.parent=(e==null?void 0:e.coreNode)??null,o){const i=o.children.indexOf(this);S(i!==-1,"MainOnlyNode.parent: Node not found in old parent's children!"),o.children.splice(i,1)}e&&e.children.push(this)}get children(){return this._children}get zIndex(){return this.coreNode.zIndex}set zIndex(e){this.coreNode.zIndex=e}get zIndexLocked(){return this.coreNode.zIndexLocked}set zIndexLocked(e){this.coreNode.zIndexLocked=e}get src(){return this._src}set src(e){if(this._src!==e){if(this._src=e,!e){this.texture=null;return}this.texture=this.rendererMain.createTexture("ImageTexture",{src:e})}}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture&&this.rendererMain.textureTracker.decrementTextureRefCount(this._texture),e&&this.rendererMain.textureTracker.incrementTextureRefCount(e),this._texture=e,e?this.coreNode.loadTexture(e.txType,e.props,e.options):this.coreNode.unloadTexture())}get shader(){return this._shader}set shader(e){this._shader!==e&&(this._shader=e,e&&this.coreNode.loadShader(e.shType,e.props))}destroy(){this.emit("beforeDestroy",{}),this.parent=null,this.texture=null,this.emit("afterDestroy",{}),this.removeAllListeners()}flush(){}animate(e,o){const i=new Ko(this.coreNode,e,o);return new Vo(this.stage.animationManager,i)}}const Jo=s=>{const t=()=>{if(s.updateAnimations(),!s.hasSceneUpdates()){setTimeout(t,16.666666666666668);return}s.drawFrame(),requestAnimationFrame(t)};requestAnimationFrame(t)},es=()=>performance?performance.now():Date.now();class so extends Be{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2fv"}]})}bindTextures(t){const{gl:e}=this;e.getParameter(e.TEXTURE_BINDING_2D)!==t[0].ctxTexture&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture))}}a(so,"shaderSources",{vertex:`
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      attribute vec2 a_position;
      attribute vec2 a_textureCoordinate;
      attribute vec4 a_color;

      uniform vec2 u_resolution;
      uniform float u_pixelRatio;


      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      void main() {
        vec2 normalized = a_position * u_pixelRatio / u_resolution;
        vec2 zero_two = normalized * 2.0;
        vec2 clip_space = zero_two - 1.0;

        // pass to fragment
        v_color = a_color;
        v_textureCoordinate = a_textureCoordinate;

        // flip y
        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
      }
    `,fragment:`
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      uniform vec2 u_resolution;
      uniform sampler2D u_texture;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      void main() {
          vec4 color = texture2D(u_texture, v_textureCoordinate);
          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);
      }
    `});class io extends Be{constructor(e){super({renderer:e,attributes:["a_position","a_textureCoordinate","a_color","a_textureIndex"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_textures[0]",uniform:"uniform1iv"}]});a(this,"supportsIndexedTextures",!0)}bindTextures(e){const{renderer:o,gl:i}=this;if(e.length>o.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS)throw new Error(`DefaultShaderBatched: Cannot bind more than ${o.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS} textures`);e.forEach((n,l)=>{i.activeTexture(i.TEXTURE0+l),i.bindTexture(i.TEXTURE_2D,n.ctxTexture)});const r=Array.from(Array(e.length).keys());this.setUniform("u_textures[0]",r)}}a(io,"shaderSources",{vertex:`
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      attribute vec2 a_textureCoordinate;
      attribute vec2 a_position;
      attribute vec4 a_color;
      attribute float a_textureIndex;
      attribute float a_depth;

      uniform vec2 u_resolution;
      uniform float u_pixelRatio;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;
      varying float v_textureIndex;

      void main(){
        vec2 normalized = a_position * u_pixelRatio / u_resolution;
        vec2 zero_two = normalized * 2.0;
        vec2 clip_space = zero_two - 1.0;

        // pass to fragment
        v_color = a_color;
        v_textureCoordinate = a_textureCoordinate;
        v_textureIndex = a_textureIndex;

        // flip y
        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
      }
    `,fragment:e=>`
      #define txUnits ${e}
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      uniform vec2 u_resolution;
      uniform sampler2D u_image;
      uniform sampler2D u_textures[txUnits];

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;
      varying float v_textureIndex;

      vec4 sampleFromTexture(sampler2D textures[${e}], int idx, vec2 uv) {
        ${Array.from(Array(e).keys()).map(o=>`
          ${o!==0?"else ":""}if (idx == ${o}) {
            return texture2D(textures[${o}], uv);
          }
        `).join("")}
        return texture2D(textures[0], uv);
      }

      void main(){
        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);
      }
    `});class W{constructor(t){a(this,"priority",1);a(this,"name","");a(this,"ref");a(this,"target");a(this,"passParameters","");a(this,"declaredUniforms","");a(this,"uniformInfo",{});const{ref:e,target:o,props:i={}}=t;this.ref=e,this.target=o;const r={},n=[];let l="";const u=this.constructor.uniforms||{};for(const h in u){const f=u[h],d=f.type,$=`${e}_${h}`;let m="";f.size&&(m=`[${f.size(i)}]`),n.push($),l+=`uniform ${d} ${$}${m};`,r[h]={name:$,uniform:u[h].method}}this.passParameters=n.join(","),this.declaredUniforms=l,this.uniformInfo=r}static getEffectKey(t){return""}static getMethodParameters(t,e){const o=[];for(const i in t){const r=t[i];let n="";r.size&&(n=`[${r.size(e)}]`),o.push(`${r.type} ${i}${n}`)}return o.join(",")}static resolveDefaults(t){return{}}static makeEffectKey(t){return!1}}a(W,"uniforms",{}),a(W,"methods"),a(W,"onShaderMask"),a(W,"onColorize"),a(W,"onEffectMask");const ie=class ie extends Be{constructor(e,o,i){const r=ie.createShader(o,i);super({renderer:e,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2fv"},{name:"u_dimensions",uniform:"uniform2fv"},{name:"u_alpha",uniform:"uniform1f"},...r.uniforms],shaderSources:{vertex:r.vertex,fragment:r.fragment}});a(this,"effects",[]);this.effects=r.effects}bindTextures(e){const{gl:o}=this;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,e[0].ctxTexture)}bindProps(e){var i;const o=this.renderer.shManager.getRegisteredEffects();(i=e.effects)==null||i.forEach((r,n)=>{const l=this.effects[n],u=o[l.name],h=r.props??{},f=l.uniformInfo;Object.keys(h).forEach(d=>{const $=u.uniforms[d],m=f[d];let p=$.validator?$.validator(h[d],h):h[d];Array.isArray(p)&&(p=new Float32Array(p)),this.setUniform(m.name,p)})})}static createShader(e,o){const i={},r={};let n="";const l=[],u=[],h=e.effects.map(p=>{const x=o[p.type],g=x.getEffectKey(p.props||{});i[g]=i[g]?++i[g]:1;const v=i[g];v===1&&u.push({key:g,type:p.type,props:p.props});const I=new x({ref:`${g}${v===1?"":v}`,target:g,props:p.props});return n+=I.declaredUniforms,l.push(...Object.values(I.uniformInfo)),I});let f="";u==null||u.forEach(p=>{const x=o[p.type],g=x.resolveDefaults(p.props??{}),v=[];for(const C in x.methods){let _=C;const T=x.methods[C];r[C]&&r[C]!==T&&(_=ie.resolveMethodDuplicate(C,T,r)),r[_]=T.replace("function",_),v.push({m:C,cm:_})}let I=x.onShaderMask instanceof Function?x.onShaderMask(g):x.onShaderMask,F=x.onColorize instanceof Function?x.onColorize(g):x.onColorize,k=x.onEffectMask instanceof Function?x.onEffectMask(g):x.onEffectMask;v.forEach(C=>{const{m:_,cm:T}=C,z=new RegExp(`\\$${_}`,"g");I&&(I=I.replace(z,T)),F&&(F=F.replace(z,T)),k&&(k=k.replace(z,T))});const w=x.getMethodParameters(x.uniforms,g),E=w.length>0?`, ${w}`:"";I&&(f+=`
        float fx_${p.key}_onShaderMask(float shaderMask ${E}) {
          ${I}
        }
        `),F&&(f+=`
          vec4 fx_${p.key}_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor${E}) {
            ${F}
          }
        `),k&&(f+=`
          vec4 fx_${p.key}_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor${E}) {
            ${k}
          }
        `)});let d="";for(const p in r)d+=r[p];let $="mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))",m=`

    `;for(let p=0;p<h.length;p++){const x=h[p],g=x.passParameters.length>0?`, ${x.passParameters}`:"",v=o[x.name];v.onShaderMask&&(m+=`
        shaderMask = fx_${x.target}_onShaderMask(shaderMask ${g});
        `),v.onColorize&&(m+=`
        maskColor = fx_${x.target}_onColorize(shaderMask, maskColor, shaderColor${g});
        `),v.onEffectMask&&($=`fx_${x.target}_onEffectMask(shaderMask, maskColor, shaderColor${g})`);const I=h[p+1];(I===void 0||o[I.name].onEffectMask)&&(m+=`
          shaderColor = ${$};
        `)}return{effects:h,uniforms:l,fragment:ie.fragment(n,d,f,m),vertex:ie.vertex()}}static resolveMethodDuplicate(e,o,i,r=0){const n=e+(r>0?r:"");return i[n]&&i[n]!==o?this.resolveMethodDuplicate(e,o,i,++r):n}static resolveDefaults(e,o){return{effects:(e.effects??[]).map(i=>({type:i.type,props:o[i.type].resolveDefaults(i.props||{})})),$dimensions:{width:0,height:0},$alpha:0}}static makeCacheKey(e,o){var r;let i="";return(r=e.effects)==null||r.forEach(n=>{const u=o[n.type].getEffectKey(n.props||{});i+=`,${u}`}),`DynamicShader${i}`}};a(ie,"z$__type__Props"),a(ie,"vertex",()=>`
    # ifdef GL_FRAGMENT_PRESICISON_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    attribute vec2 a_textureCoordinate;
    attribute vec2 a_position;
    attribute vec4 a_color;
    attribute float a_textureIndex;

    uniform vec2 u_resolution;
    uniform float u_pixelRatio;

    varying vec4 v_color;
    varying vec2 v_textureCoordinate;
    varying float v_textureIndex;

    void main(){
      vec2 normalized = a_position * u_pixelRatio / u_resolution;
      vec2 zero_two = normalized * 2.0;
      vec2 clip_space = zero_two - 1.0;

      // pass to fragment
      v_color = a_color;
      v_textureCoordinate = a_textureCoordinate;
      v_textureIndex = a_textureIndex;

      // flip y
      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
    }
  `),a(ie,"fragment",(e,o,i,r)=>`
    # ifdef GL_FRAGMENT_PRESICISON_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    #define PI 3.14159265359

    uniform vec2 u_resolution;
    uniform vec2 u_dimensions;
    uniform float u_alpha;
    uniform float u_radius;
    uniform sampler2D u_texture;
    uniform float u_pixelRatio;

    ${e}

    varying vec4 v_color;
    varying vec2 v_textureCoordinate;

    ${o}

    ${i}

    void main() {
      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;
      vec2 d = abs(p) - (u_dimensions) * 0.5;
      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));

      vec4 shaderColor = vec4(0.0);
      float shaderMask = lng_DefaultMask;

      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;

      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));

      ${r}

      gl_FragColor = shaderColor * u_alpha;
    }
  `);let Ee=ie;class mt extends Be{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2f"},{name:"u_dimensions",uniform:"uniform2fv"},{name:"u_radius",uniform:"uniform1f"}]})}static resolveDefaults(t){return{radius:t.radius||10,$dimensions:{width:0,height:0}}}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}bindProps(t){this.setUniform("u_radius",t.radius)}canBatchShaderProps(t,e){return t.radius===e.radius&&t.$dimensions.width===e.$dimensions.width&&t.$dimensions.height===e.$dimensions.height}}a(mt,"z$__type__Props"),a(mt,"shaderSources",{vertex:`
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      attribute vec2 a_position;
      attribute vec2 a_textureCoordinate;
      attribute vec4 a_color;
      attribute float a_textureIndex;
      attribute float a_depth;

      uniform vec2 u_resolution;
      uniform float u_pixelRatio;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      void main() {
        vec2 normalized = a_position * u_pixelRatio / u_resolution;
        vec2 zero_two = normalized * 2.0;
        vec2 clip_space = zero_two - 1.0;

        // pass to fragment
        v_color = a_color;
        v_textureCoordinate = a_textureCoordinate;

        // flip y
        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);
      }
    `,fragment:`
      # ifdef GL_FRAGMENT_PRESICISON_HIGH
      precision highp float;
      # else
      precision mediump float;
      # endif

      uniform vec2 u_resolution;
      uniform vec2 u_dimensions;
      uniform float u_radius;
      uniform sampler2D u_texture;

      varying vec4 v_color;
      varying vec2 v_textureCoordinate;

      float boxDist(vec2 p, vec2 size, float radius){
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }

      float fillMask(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }

      void main() {
        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;
        vec2 halfDimensions = u_dimensions * 0.5;

        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);
        gl_FragColor = mix(vec4(0.0), color, fillMask(d));
      }
    `});const ts=new Float32Array([1,0,0,0,1,0,0,0,1]),st=class st extends Be{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_transform",uniform:"uniformMatrix3fv"},{name:"u_scrollY",uniform:"uniform1f"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2f"},{name:"u_color",uniform:"uniform4fv"},{name:"u_size",uniform:"uniform1f"},{name:"u_distanceRange",uniform:"uniform1f"},{name:"u_debug",uniform:"uniform1i"}]})}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}bindProps(t){const e=st.resolveDefaults(t);for(const o in e)if(o==="transform")this.setUniform("u_transform",!1,e[o]);else if(o==="scrollY")this.setUniform("u_scrollY",e[o]);else if(o==="color"){const i=te(e.color);this.setUniform("u_color",i)}else o==="size"?this.setUniform("u_size",e[o]):o==="distanceRange"?this.setUniform("u_distanceRange",e[o]):o==="debug"&&this.setUniform("u_debug",e[o]?1:0)}static resolveDefaults(t={}){return{transform:t.transform??ts,scrollY:t.scrollY??0,color:t.color??4294967295,size:t.size??16,distanceRange:t.distanceRange??1,debug:t.debug??!1}}};a(st,"shaderSources",{vertex:`
      // an attribute is an input (in) to a vertex shader.
      // It will receive data from a buffer
      attribute vec2 a_position;
      attribute vec2 a_textureCoordinate;

      uniform vec2 u_resolution;
      uniform mat3 u_transform;
      uniform float u_scrollY;
      uniform float u_pixelRatio;
      uniform float u_size;

      varying vec2 v_texcoord;

      void main() {
        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);
        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;
        gl_Position = vec4((transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1), 0, 1);
        v_texcoord = a_textureCoordinate;
      }
    `,fragment:`
      precision highp float;

      uniform vec4 u_color;
      uniform sampler2D u_texture;
      uniform float u_distanceRange;
      uniform float u_pixelRatio;
      uniform int u_debug;

      varying vec2 v_texcoord;

      float median(float r, float g, float b) {
          return max(min(r, g), min(max(r, g), b));
      }

      void main() {
          vec3 sample = texture2D(u_texture, v_texcoord).rgb;
          if (u_debug == 1) {
            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);
            return;
          }
          float scaledDistRange = u_distanceRange * u_pixelRatio;
          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);
          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;

          // Build the final color.
          // IMPORTANT: We must premultiply the color by the alpha value before returning it.
          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);
      }
    `});let xt=st;class xe extends W{constructor(){super(...arguments);a(this,"name","radius")}static getEffectKey(){return"radius"}static resolveDefaults(e){return{radius:e.radius??10}}}a(xe,"z$__type__Props"),a(xe,"uniforms",{radius:{value:0,method:"uniform4fv",type:"vec4",validator:e=>{let o=e;return Array.isArray(o)?o.length===2?o=[o[0],o[1],o[0],o[1]]:o.length===3?o=[o[0],o[1],o[2],o[0]]:o.length!==4&&(o=[o[0],o[0],o[0],o[0]]):typeof o=="number"&&(o=[o,o,o,o]),o}}}),a(xe,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,boxDist:`
      float function(vec2 p, vec2 size, float radius) {
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }
    `}),a(xe,"onShaderMask",`
  vec2 halfDimensions = u_dimensions * 0.5;
  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);
  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);
  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);
  `),a(xe,"onEffectMask",`
  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));
  `);class ze extends W{constructor(){super(...arguments);a(this,"name","border")}static getEffectKey(){return"border"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(ze,"z$__type__Props"),a(ze,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),a(ze,"onEffectMask",`
  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);
  return mix(shaderColor, maskColor, mask);
  `),a(ze,"onColorize",`
    return color;
  `);class ge extends W{constructor(){super(...arguments);a(this,"name","linearGradient")}static getEffectKey(e){return`linearGradient${e.colors.length}`}static resolveDefaults(e){const o=e.colors??[4278190080,4294967295];let i=e.stops;if(!i){i=[];const r=o.length-1;for(let n=0;n<o.length;n++)i.push(n*(1/r))}return{colors:o,stops:i,angle:e.angle??0}}}a(ge,"z$__type__Props"),a(ge,"uniforms",{angle:{value:0,method:"uniform1f",type:"float"},colors:{value:4294967295,validator:e=>e.map(i=>te(i)).reduce((i,r)=>i.concat(r),[]),size:e=>e.colors.length,method:"uniform4fv",type:"vec4"},stops:{value:[],validator:(e,o)=>{const i=o.colors??[];let r=e;const n=e;if(r.length===0||r&&r.length!==i.length){for(let l=0;l<i.length;l++)r[l]?(n[l]=r[l],r[l-1]===void 0&&n[l-2]!==void 0&&(n[l-1]=n[l-2]+(r[l]-n[l-2])/2)):n[l]=l*(1/(i.length-1));r=n}return n},size:e=>e.colors.length,method:"uniform1fv",type:"float"}}),a(ge,"methods",{fromLinear:`
      vec4 function(vec4 linearRGB) {
        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);
        vec4 lower = linearRGB * vec4(12.92);
        return mix(higher, lower, 1.0);
      }
    `,toLinear:`
      vec4 function(vec4 sRGB) {
        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));
        vec4 lower = sRGB/vec4(12.92);
        return mix(higher, lower, 1.0);
      }
    `,calcPoint:`
      vec2 function(float d, float angle) {
        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);
      }
    `}),a(ge,"ColorLoop",e=>{let o="";for(let i=2;i<e;i++)o+=`colorOut = mix(colorOut, colors[${i}], clamp((dist - stops[${i-1}]) / (stops[${i}] - stops[${i-1}]), 0.0, 1.0));`;return o}),a(ge,"onColorize",e=>`
      float a = angle - (PI / 180.0 * 90.0);
      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));
      vec2 f = $calcPoint(lineDist * 0.5, a);
      vec2 t = $calcPoint(lineDist * 0.5, a + PI);
      vec2 gradVec = t - f;
      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);

      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);
      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));
      for(int i = 1; i < ${e.colors.length||1}-1; i++) {
        stopCalc = (dist - stops[i]) / (stops[i + 1] - stops[i]);
        colorOut = mix(colorOut, colors[i + 1], clamp(stopCalc, 0.0, 1.0));
      }
      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));
    `);class ro extends W{constructor(){super(...arguments);a(this,"name","grayscale")}static getEffectKey(){return"grayscale"}}a(ro,"onColorize",`
    vec3 color = pow(maskColor.rgb, vec3(2.0));
    float gray = dot(color, vec3(0.2126, 0.7152, 0.0722));
    float gammaGray = sqrt(gray);
    return vec4(gammaGray, gammaGray, gammaGray, 1.0);
  `);class ye extends W{constructor(){super(...arguments);a(this,"name","borderRight")}static getEffectKey(){return"borderRight"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(ye,"z$__type__Props"),a(ye,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),a(ye,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(ye,"onEffectMask",`
  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(ye,"onColorize",`
    return color;
  `);class we extends W{constructor(){super(...arguments);a(this,"name","borderTop")}static getEffectKey(){return"borderTop"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(we,"z$__type__Props"),a(we,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),a(we,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(we,"onEffectMask",`
  vec2 pos = vec2(0.0, width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(we,"onColorize",`
    return color;
  `);class ve extends W{constructor(){super(...arguments);a(this,"name","borderBottom")}static getEffectKey(){return"borderBottom"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(ve,"z$__type__Props"),a(ve,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),a(ve,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(ve,"onEffectMask",`
  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(ve,"onColorize",`
    return color;
  `);class be extends W{constructor(){super(...arguments);a(this,"name","borderLeft")}static getEffectKey(){return"borderLeft"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(be,"z$__type__Props"),a(be,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),a(be,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(be,"onEffectMask",`
  vec2 pos = vec2(width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(be,"onColorize",`
    return color;
  `);class Me extends W{constructor(){super(...arguments);a(this,"name","glitch")}static getEffectKey(e){return"glitch"}static resolveDefaults(e){return{amplitude:e.amplitude??.2,narrowness:e.narrowness??4,blockiness:e.blockiness??2,minimizer:e.minimizer??8,time:e.time??Date.now()}}}a(Me,"z$__type__Props"),a(Me,"uniforms",{amplitude:{value:0,method:"uniform1f",type:"float"},narrowness:{value:0,method:"uniform1f",type:"float"},blockiness:{value:0,method:"uniform1f",type:"float"},minimizer:{value:0,method:"uniform1f",type:"float"},time:{value:0,method:"uniform1f",validator:e=>(Date.now()-e)%1e3,type:"float"}}),a(Me,"methods",{rand:`
      float function(vec2 p, float time) {
        float t = floor(time * 20.) / 10.;
        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);
      }
    `,noise:`
      float function(vec2 uv, float blockiness, float time) {
        vec2 lv = fract(uv);
        vec2 id = floor(uv);

        float n1 = rand(id, time);
        float n2 = rand(id+vec2(1,0), time);
        float n3 = rand(id+vec2(0,1), time);
        float n4 = rand(id+vec2(1,1), time);
        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);
        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);
      }
    `,fbm:`
      float function(vec2 uv, int count, float blockiness, float complexity, float time) {
        float val = 0.0;
        float amp = 0.5;
        const int MAX_ITERATIONS = 10;

        for(int i = 0; i < MAX_ITERATIONS; i++) {
          if(i >= count) {break;}
          val += amp * noise(uv, blockiness, time);
          amp *= 0.5;
          uv *= complexity;
        }
        return val;
      }
    `}),a(Me,"onColorize",`
    vec2 uv = v_textureCoordinate.xy;
    float aspect = u_dimensions.x / u_dimensions.y;
    vec2 a = vec2(uv.x * aspect , uv.y);
    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));

    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);
    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);
    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);
    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);

    vec3 f = vec3(colR, colG, colB);
    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);
  `);class Qe extends W{constructor(){super(...arguments);a(this,"name","fadeOut")}static getEffectKey(){return"fadeOut"}static resolveDefaults(e){return{fade:e.fade??10}}}a(Qe,"z$__type__Props"),a(Qe,"uniforms",{fade:{value:0,method:"uniform4fv",type:"vec4",validator:e=>{let o=e;return Array.isArray(o)?o.length===2?o=[o[0],o[1],o[0],o[1]]:o.length===3?o=[o[0],o[1],o[2],o[0]]:o.length!==4&&(o=[o[0],o[0],o[0],o[0]]):typeof o=="number"&&(o=[o,o,o,o]),o}}}),a(Qe,"onColorize",`
  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;
  vec2 pos1;
  vec2 pos2;
  vec2 d;
  float c;
  vec4 result = maskColor;


  if(fade[0] > 0.0) {
    pos1 = vec2(point.x, point.y);
    pos2 = vec2(point.x, point.y + fade[0]);
    d = pos2 - pos1;
    c = dot(pos1, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  if(fade[1] > 0.0) {
    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);
    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);
    d = pos1 - pos2;
    c = dot(pos2, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  if(fade[2] > 0.0) {
    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);
    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);
    d = pos1 - pos2;
    c = dot(pos2, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  if(fade[3] > 0.0) {
    pos1 = vec2(point.x, point.y);
    pos2 = vec2(point.x + fade[3], point.y);
    d = pos2 - pos1;
    c = dot(pos1, d) / dot(d, d);
    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));
  }

  return result;
  `);class Ze extends W{constructor(){super(...arguments);a(this,"name","radialGradient")}static getEffectKey(e){return`radialGradient${e.colors.length}`}static resolveDefaults(e){const o=e.colors??[4278190080,4294967295];let i=e.stops;if(!i){i=[];const r=o.length-1;for(let n=0;n<o.length;n++)i.push(n*(1/r))}return{colors:o,stops:i,width:e.width??0,height:e.height??e.width??0,pivot:e.pivot??[.5,.5]}}}a(Ze,"z$__type__Props"),a(Ze,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},height:{value:0,method:"uniform1f",type:"float"},pivot:{value:[.5,.5],method:"uniform2fv",type:"vec2"},colors:{value:4294967295,validator:e=>e.map(i=>te(i)).reduce((i,r)=>i.concat(r),[]),size:e=>e.colors.length,method:"uniform4fv",type:"vec4"},stops:{value:[],validator:(e,o)=>{const i=o.colors??[];let r=e;const n=e;if(r.length===0||r&&r.length!==i.length){for(let l=0;l<i.length;l++)r[l]?(n[l]=r[l],r[l-1]===void 0&&n[l-2]!==void 0&&(n[l-1]=n[l-2]+(r[l]-n[l-2])/2)):n[l]=l*(1/(i.length-1));r=n}return n},size:e=>e.colors.length,method:"uniform1fv",type:"float"}}),a(Ze,"onColorize",e=>`
      vec2 point = v_textureCoordinate.xy * u_dimensions;
      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);

      float dist = length((point - projection) / vec2(width, height));

      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);
      vec4 colorOut = mix(colors[0], colors[1], stopCalc);
      for(int i = 1; i < ${e.colors.length||1}-1; i++) {
        stopCalc = (dist - stops[i]) / (stops[i + 1] - stops[i]);
        colorOut = mix(colorOut, colors[i + 1], clamp(stopCalc, 0.0, 1.0));
      }
      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));
    `);class $e extends W{constructor(){super(...arguments);a(this,"name","radialProgress")}static getEffectKey(){return"radialProgress"}static resolveDefaults(e){return{width:e.width??10,progress:e.progress??.5,offset:e.offset??0,range:e.range??Math.PI*2,rounded:e.rounded??!1,radius:e.radius??1,color:e.color??4294967295}}}a($e,"z$__type__Props"),a($e,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},progress:{value:.5,method:"uniform1f",type:"float"},offset:{value:0,method:"uniform1f",type:"float"},range:{value:0,method:"uniform1f",type:"float"},rounded:{value:0,method:"uniform1f",type:"float",validator:e=>e?1:0},radius:{value:1,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),a($e,"methods",{rotateUV:`
    vec2 function(vec2 uv, float d) {
      float s = sin(d);
      float c = cos(d);
      mat2 rotMatrix = mat2(c, -s, s, c);
      return uv * rotMatrix;
    }
    `,drawDot:`
    float function(vec2 uv, vec2 p, float r) {
      uv += p;
      float circle = length(uv) - r;
      return clamp(-circle, 0.0, 1.0);
    }
    `}),a($e,"onEffectMask",`
    float outerRadius = radius * u_dimensions.y * 0.5;

    float endAngle = range * progress - 0.0005;

    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;

    uv = $rotateUV(uv, -(offset));
    float linewidth = width * u_pixelRatio;
    float circle = length(uv) - (outerRadius - linewidth) ;
    circle = abs(circle) - linewidth;
    circle = clamp(-circle, 0.0, 1.0);

    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);
    float p = endAngle / (PI * 2.);

    circle *= step(fract(angle), fract(p));

    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));
    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));

    return mix(shaderColor, maskColor, circle);
  `),a($e,"onColorize",`
    return color;
  `);class os{constructor(){a(this,"shCache",new Map);a(this,"shConstructors",{});a(this,"attachedShader",null);a(this,"effectConstructors",{});a(this,"renderer");this.registerShaderType("DefaultShader",so),this.registerShaderType("DefaultShaderBatched",io),this.registerShaderType("RoundedRectangle",mt),this.registerShaderType("DynamicShader",Ee),this.registerShaderType("SdfShader",xt),this.registerEffectType("border",ze),this.registerEffectType("borderBottom",ve),this.registerEffectType("borderLeft",be),this.registerEffectType("borderRight",ye),this.registerEffectType("borderTop",we),this.registerEffectType("fadeOut",Qe),this.registerEffectType("linearGradient",ge),this.registerEffectType("radialGradient",Ze),this.registerEffectType("grayscale",ro),this.registerEffectType("glitch",Me),this.registerEffectType("radius",xe),this.registerEffectType("radialProgress",$e)}registerShaderType(t,e){this.shConstructors[t]=e}registerEffectType(t,e){this.effectConstructors[t]=e}getRegisteredEffects(){return this.effectConstructors}getRegisteredShaders(){return this.shConstructors}loadShader(t,e){if(!this.renderer)throw new Error("Renderer is not been defined");const o=this.shConstructors[t];if(!o)throw new Error(`Shader type "${t}" is not registered`);if(t==="DynamicShader")return this.loadDynamicShader(e);const i=o.resolveDefaults(e),r=o.makeCacheKey(i)||o.name;if(r&&this.shCache.has(r))return{shader:this.shCache.get(r),props:i};const n=new o(this.renderer,e);return r&&this.shCache.set(r,n),{shader:n,props:i}}loadDynamicShader(t){if(!this.renderer)throw new Error("Renderer is not been defined");const e=Ee.resolveDefaults(t,this.effectConstructors),o=Ee.makeCacheKey(e,this.effectConstructors);if(o&&this.shCache.has(o))return{shader:this.shCache.get(o),props:e};const i=new Ee(this.renderer,t,this.effectConstructors);return o&&this.shCache.set(o,i),{shader:i,props:e}}useShader(t){this.attachedShader!==t&&(this.attachedShader&&this.attachedShader.detach(),t.attach(),this.attachedShader=t)}}class ss{constructor(){a(this,"activeAnimations",new Set)}registerAnimation(t){this.activeAnimations.add(t)}unregisterAnimation(t){this.activeAnimations.delete(t)}update(t){this.activeAnimations.forEach(e=>{e.update(t)})}}const Fe=class Fe extends Qt{constructor(e,o){super(e);a(this,"props");this.props=Fe.resolveDefaults(o)}async getTextureData(){const{src:e,premultiplyAlpha:o}=this.props;if(!e)return{data:null};if(e instanceof ImageData)return{data:e,premultiplyAlpha:o};const r=await(await fetch(e)).blob();return{data:await createImageBitmap(r,{premultiplyAlpha:o?"premultiply":"none",colorSpaceConversion:"none",imageOrientation:"none"})}}static makeCacheKey(e){const o=Fe.resolveDefaults(e);return o.src instanceof ImageData?!1:`ImageTexture,${o.src},${o.premultiplyAlpha}`}static resolveDefaults(e){return{src:e.src??"",premultiplyAlpha:e.premultiplyAlpha??!0}}};a(Fe,"z$__type__Props");let gt=Fe;const Ne=class Ne extends Qt{constructor(e,o){super(e);a(this,"props");this.props=Ne.resolveDefaults(o)}async getTextureData(){const{width:e,height:o}=this.props,i=e*o*4,r=new Uint8ClampedArray(i);for(let n=0;n<i;n+=4){const l=Math.floor(Math.random()*256);r[n]=l,r[n+1]=l,r[n+2]=l,r[n+3]=255}return{data:new ImageData(r,e,o)}}static makeCacheKey(e){const o=Ne.resolveDefaults(e);return`NoiseTexture,${o.width},${o.height},${o.cacheId}`}static resolveDefaults(e){return{width:e.width??128,height:e.height??128,cacheId:e.cacheId??0}}};a(Ne,"z$__type__Props");let yt=Ne;class is{constructor(){a(this,"usedMemory",0);a(this,"txConstructors",{});a(this,"textureKeyCache",new Map);a(this,"textureIdCache",new Map);a(this,"ctxTextureCache",new WeakMap);a(this,"textureRefCountMap",new WeakMap);a(this,"renderer");this.registerTextureType("ImageTexture",gt),this.registerTextureType("ColorTexture",Lo),this.registerTextureType("NoiseTexture",yt),this.registerTextureType("SubTexture",Fo)}registerTextureType(t,e){this.txConstructors[t]=e}loadTexture(t,e,o=null){const i=this.txConstructors[t];if(!i)throw new Error(`Texture type "${t}" is not registered`);let r;if((o==null?void 0:o.id)!==void 0&&this.textureIdCache.has(o.id)&&(r=this.textureIdCache.get(o.id)),!r){const n=o==null?void 0:o.id,l=(o==null?void 0:o.cacheKey)??i.makeCacheKey(e);l&&this.textureKeyCache.has(l)?r=this.textureKeyCache.get(l):r=new i(this,e),n&&this.addTextureIdToCache(n,l,r)}return o!=null&&o.preload&&this.getCtxTexture(r).load(),r}addTextureIdToCache(t,e,o){const{textureIdCache:i,textureRefCountMap:r}=this;i.set(t,o),r.has(o)?r.get(o).count++:(r.set(o,{cacheKey:e,count:1}),e&&this.textureKeyCache.set(e,o))}removeTextureIdFromCache(t){const{textureIdCache:e,textureRefCountMap:o}=this,i=e.get(t);if(i&&(e.delete(t),o.has(i))){const r=o.get(i);S(r),r.count--,r.count===0&&(o.delete(i),r.cacheKey&&this.textureKeyCache.delete(r.cacheKey))}}getDebugInfo(){return{keyCacheSize:this.textureKeyCache.size,idCacheSize:this.textureIdCache.size}}getCtxTexture(t){if(this.ctxTextureCache.has(t))return this.ctxTextureCache.get(t);const e=this.renderer.createCtxTexture(t);return this.ctxTextureCache.set(t,e),e}}class no{constructor(t){a(this,"textRenderers");this.textRenderers=t}addFontFace(t){for(const e in this.textRenderers){const o=this.textRenderers[e];o&&o.isFontFaceSupported(t)&&o.addFontFace(t)}}static resolveFontFace(t,e){const o=[];return t.reduce((r,n)=>{if(r)return r;const l=n[e.fontFamily];if(!l)return;const u=new Set(l);for(const h of u)(h.descriptors.stretch!==e.fontStretch||h.descriptors.style!==e.fontStyle||h.descriptors.weight!==e.fontWeight)&&u.delete(h);return u.values().next().value},void 0)||o[0]}}const rs={x:(s,t)=>{s.props.x=t},y:(s,t)=>{s.props.y=t},width:(s,t)=>{s.props.width=t},height:(s,t)=>{s.props.height=t},color:(s,t)=>{s.props.color=t},zIndex:(s,t)=>{s.props.zIndex=t},fontFamily:(s,t)=>{s.props.fontFamily=t},fontWeight:(s,t)=>{s.props.fontWeight=t},fontStyle:(s,t)=>{s.props.fontStyle=t},fontStretch:(s,t)=>{s.props.fontStretch=t},fontSize:(s,t)=>{s.props.fontSize=t},text:(s,t)=>{s.props.text=t},textAlign:(s,t)=>{s.props.textAlign=t},contain:(s,t)=>{s.props.contain=t},offsetY:(s,t)=>{s.props.offsetY=t},scrollable:(s,t)=>{s.props.scrollable=t},scrollY:(s,t)=>{s.props.scrollY=t},letterSpacing:(s,t)=>{s.props.letterSpacing=t},debug:(s,t)=>{s.props.debug=t}};class ao{constructor(t){a(this,"stage");a(this,"set");this.stage=t;const e={...rs,...this.getPropertySetters()};this.set=Object.freeze(Object.fromEntries(Object.entries(e).map(([o,i])=>[o,(r,n)=>{r.props[o]!==n&&i(r,n)}])))}setStatus(t,e,o){t.status!==e&&(t.status=e,t.emitter.emit(e,o))}scheduleUpdateState(t){t.updateScheduled||(t.updateScheduled=!0,queueMicrotask(()=>{t.updateScheduled=!1,this.updateState(t)}))}}const ns=24;function as(s,t,e,o,i,r,n){let l=0;i&&(l=Math.min(Math.max(Math.floor(i.y1/s),0),r.length));const u=0,h=t/e+l*o;if(!(n&&h>=n/e))return{x:u,y:h,lineIndex:l}}class Je{constructor(t,e=0){a(this,"iterator");a(this,"peekBuffer",[]);a(this,"_lastIndex");this.iterator=t,this.iterator=t,this._lastIndex=e-1,this.peekBuffer=[]}next(){const t=this.peekBuffer.length>0?this.peekBuffer.pop():this.iterator.next();return t.done?this._lastIndex=-1:this._lastIndex++,t}peek(){if(this.peekBuffer.length>0)return this.peekBuffer[0];const t=this.iterator.next();return this.peekBuffer.push(t),t}get lastIndex(){return this._lastIndex}}function*et(s,t=0){let e=t;for(;e<s.length;){const o=s.codePointAt(e);if(o===void 0)throw new Error("Invalid Unicode code point");yield o,e+=o<=65535?1:2}}function ls(s,t,e){const o=e.shapeText(t,new Je(et(s,0),0));let i=0;for(const r of o)r.mapped&&(i+=r.xAdvance);return i}function cs(s,t,e,o,i,r,n,l,u,h,f,d,$,m,p,x){S(m,"Font face must be loaded"),S(m.loaded,"Font face must be loaded"),S(m.data,"Font face must be loaded"),S(m.shaper,"Font face must be loaded");const g=m.data.info.size,v=l/g,I=r/v,F=u/v,k=d[s],w=(k==null?void 0:k.codepointIndex)||0,E=(k==null?void 0:k.maxX)||0,C=(k==null?void 0:k.maxY)||0;let _=E,T=C,z=t,M=e,b=0;const N={codepointIndex:-1,bufferOffset:-1,xStart:-1},K=m.shaper,j={letterSpacing:F};let oe=K.shapeText(j,new Je(et(o,w),w)),G,ne=-1;const ae=[],Rt="...",Co=n/v,So=ls(Rt,j,K);let Ye=!0;for(;Ye;){const he=f!=="both"||x||M+g+g<=Co,se=he?I:I-So;let U=0;for(;(G=oe.next())&&!G.done;){const P=G.value;if(s===d.length)d.push({codepointIndex:P.cluster,maxY:T,maxX:_});else if(s>d.length)throw new Error("Unexpected lineCache length");if(P.codepoint===32||P.codepoint===10?N.codepointIndex!==-1&&(N.codepointIndex=-1,U=z):N.codepointIndex===-1&&(N.codepointIndex=P.cluster,N.bufferOffset=b,N.xStart=U),P.mapped){const Ce=z+P.xOffset+P.width;if(f!=="none"&&Ce>=se&&N.codepointIndex!==-1&&N.codepointIndex<P.cluster&&N.xStart>0)if(he){oe=K.shapeText(j,new Je(et(o,N.codepointIndex),N.codepointIndex)),b=N.bufferOffset;break}else oe=K.shapeText(j,new Je(et(Rt,0),0)),z=N.xStart,b=N.bufferOffset;else{const V=z+P.xOffset,Se=M+P.yOffset,ko=$?M+g>=$.y1/v:!0,Ro=$?M<=$.y2/v:!0;if(ko&&Ro){ne===-1&&(ne=b);const Oe=m.getAtlasEntry(P.glyphId),We=Oe.x/m.data.common.scaleW,Xe=Oe.y/m.data.common.scaleH,It=Oe.width/m.data.common.scaleW,zt=Oe.height/m.data.common.scaleH;h[b++]=V,h[b++]=Se,h[b++]=We,h[b++]=Xe,h[b++]=V+P.width,h[b++]=Se,h[b++]=We+It,h[b++]=Xe,h[b++]=V,h[b++]=Se+P.height,h[b++]=We,h[b++]=Xe+zt,h[b++]=V+P.width,h[b++]=Se+P.height,h[b++]=We+It,h[b++]=Xe+zt}T=Math.max(T,Se+P.height),z+=P.xAdvance,_=Math.max(_,z)}}else if(P.codepoint===10)break}ne!==-1&&(ae.push({bufferStart:ne,bufferEnd:b}),ne=-1),z=0,M+=g,s++,N.codepointIndex=-1,U=0,(!p&&f==="both"&&$&&M>$.y2/v||G&&G.done||f==="both"&&!x&&!he)&&(Ye=!1)}if(i==="center"){const he=f==="none"?_:I;for(let se=0;se<ae.length;se++){const U=ae[se],P=h[U.bufferEnd-4]-h[U.bufferStart],Ce=(he-P)/2;for(let V=U.bufferStart;V<U.bufferEnd;V+=4)h[V]+=Ce}}else if(i==="right"){const he=f==="none"?_:I;for(let se=0;se<ae.length;se++){const U=ae[se],P=U.bufferEnd===U.bufferStart?0:h[U.bufferEnd-4]-h[U.bufferStart],Ce=he-P;for(let V=U.bufferStart;V<U.bufferEnd;V+=4)h[V]+=Ce}}return S(G),{bufferNumFloats:b,bufferNumQuads:b/16,layoutNumCharacters:G.done?o.length-w:G.value.cluster-w+1,fullyProcessed:!!G.done,maxX:_,maxY:T}}function hs(s,t,e,o,i,r){const n=o*i,l=r.x1-s,u=r.y1-t;return No(r)?{x1:l,y1:u+e-n,x2:l+(r.x2-r.x1),y2:u+e+(r.y2-r.y1)+n}:{x1:0,y1:0,x2:0,y2:0}}const ds=it(0,0,0,0);class fs extends ao{constructor(e){super(e);a(this,"ssdfFontFamilies",{});a(this,"msdfFontFamilies",{});a(this,"sdfShader");a(this,"rendererBounds");this.sdfShader=this.stage.shManager.loadShader("SdfShader").shader,this.rendererBounds={x1:0,y1:0,x2:this.stage.options.appWidth,y2:this.stage.options.appHeight}}getPropertySetters(){return{fontFamily:(e,o)=>{e.props.fontFamily=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontWeight:(e,o)=>{e.props.fontWeight=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontStyle:(e,o)=>{e.props.fontStyle=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontStretch:(e,o)=>{e.props.fontStretch=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontSize:(e,o)=>{e.props.fontSize=o,this.invalidateLayoutCache(e)},text:(e,o)=>{e.props.text=o,this.invalidateLayoutCache(e)},textAlign:(e,o)=>{e.props.textAlign=o,this.invalidateLayoutCache(e)},color:(e,o)=>{e.props.color=o},x:(e,o)=>{e.props.x=o,this.invalidateVisibleWindowCache(e)},y:(e,o)=>{e.props.y=o,this.invalidateVisibleWindowCache(e)},contain:(e,o)=>{e.props.contain=o,this.invalidateLayoutCache(e)},width:(e,o)=>{e.props.width=o,this.invalidateLayoutCache(e)},height:(e,o)=>{e.props.height=o,this.invalidateLayoutCache(e)},offsetY:(e,o)=>{e.props.offsetY=o,this.invalidateLayoutCache(e)},scrollable:(e,o)=>{e.props.scrollable=o,this.invalidateLayoutCache(e)},scrollY:(e,o)=>{e.props.scrollY=o,this.scheduleUpdateState(e)},letterSpacing:(e,o)=>{e.props.letterSpacing=o,this.invalidateLayoutCache(e)},debug:(e,o)=>{e.props.debug=o}}}canRenderFont(e){const{fontFamily:o}=e;return o in this.ssdfFontFamilies||o in this.msdfFontFamilies||o==="$$SDF_FAILURE_TEST$$"}isFontFaceSupported(e){return e instanceof Lt}addFontFace(e){S(e instanceof Lt);const o=e.fontFamily,i=e.type==="ssdf"?this.ssdfFontFamilies:e.type==="msdf"?this.msdfFontFamilies:void 0;if(!i){console.warn(`Invalid font face type: ${e.type}`);return}let r=i[o];r||(r=new Set,i[o]=r),r.add(e)}createState(e){return{props:e,status:"initialState",updateScheduled:!1,emitter:new ue,lineCache:[],forceFullLayoutCalc:!1,renderWindow:void 0,visibleWindow:{x1:0,y1:0,x2:0,y2:0,valid:!1},bufferNumFloats:0,bufferNumQuads:0,vertexBuffer:void 0,webGlBuffers:null,bufferUploaded:!1,textH:void 0,textW:void 0,distanceRange:0,trFontFace:void 0,debugData:{updateCount:0,layoutCount:0,lastLayoutNumCharacters:0,layoutSum:0,drawSum:0,drawCount:0,bufferSize:0}}}updateState(e){let{trFontFace:o}=e;const{textH:i,lineCache:r,debugData:n,forceFullLayoutCalc:l}=e;if(n.updateCount++,e.status==="initialState"&&this.setStatus(e,"loading"),!o&&(o=this.resolveFontFace(e.props),e.trFontFace=o,!o)){const b=`SdfTextRenderer: Could not resolve font face for family: '${e.props.fontFamily}'`;console.error(b),this.setStatus(e,"failed",new Error(b));return}if(!o.loaded){o.once("loaded",()=>{this.scheduleUpdateState(e)});return}S(o.data,"Font face data should be loaded");const{text:u,fontSize:h,x:f,y:d,contain:$,width:m,height:p,scrollable:x}=e.props,g=$==="both"&&x?e.props.scrollY:0;let{renderWindow:v}=e;const I=o.data.info.size,F=h/I;e.distanceRange=F*o.data.distanceField.distanceRange;const k=u.length*ns;let w=e.vertexBuffer;(!w||w.length<k)&&(w=new Float32Array(k*2));const E=e.visibleWindow;if(!E.valid){const b=it(f,d,$!=="none"?f+m:1/0,$==="both"?d+p:1/0,ds);Zt(this.rendererBounds,b,e.visibleWindow),E.valid=!0}if(!l&&v){if(f+v.x1<=E.x1&&f+v.x2>=E.x2&&d-g+v.y1<=E.y1&&d-g+v.y2>=E.y2){this.setStatus(e,"loaded");return}v=e.renderWindow=void 0,this.setStatus(e,"loading")}const{offsetY:C,textAlign:_}=e.props;if(!v){const b=E.y2-E.y1,N=Math.ceil(b/I);v=hs(f,d,g,I,N,E)}const T=as(h,C,F,I,v,r,i);if(!T){this.setStatus(e,"loaded");return}const{letterSpacing:z}=e.props,M=cs(T.lineIndex,T.x,T.y,u,_,m,p,h,z,w,$,r,v,o,l,x);e.bufferUploaded=!1,e.bufferNumFloats=M.bufferNumFloats,e.bufferNumQuads=M.bufferNumQuads,e.vertexBuffer=w,e.renderWindow=v,n.lastLayoutNumCharacters=M.layoutNumCharacters,n.bufferSize=w.byteLength,M.fullyProcessed&&(e.textW=M.maxX*F,e.textH=M.maxY*F),this.setStatus(e,"loaded")}renderQuads(e,o,i,r){var _,T;if(!e.vertexBuffer)return;performance.now();const{renderer:n}=this.stage;this.stage.options;const{fontSize:l,color:u,contain:h,scrollable:f,zIndex:d,debug:$}=e.props,m=h==="both"&&f?e.props.scrollY:0,{textW:p=0,textH:x=0,distanceRange:g,vertexBuffer:v,bufferUploaded:I,trFontFace:F}=e;let{webGlBuffers:k}=e;if(!k){const z=n.gl,M=4*Float32Array.BYTES_PER_ELEMENT,b=z.createBuffer();S(b),e.webGlBuffers=new Ao([{buffer:b,attributes:{a_position:{name:"a_position",size:2,type:z.FLOAT,normalized:!1,stride:M,offset:0},a_textureCoordinate:{name:"a_textureCoordinate",size:2,type:z.FLOAT,normalized:!1,stride:M,offset:2*Float32Array.BYTES_PER_ELEMENT}}}]),e.bufferUploaded=!1,S(e.webGlBuffers),k=e.webGlBuffers}if(!I){const z=n.gl,M=(k==null?void 0:k.getBuffer("a_textureCoordinate"))??null;z.bindBuffer(z.ARRAY_BUFFER,M),z.bufferData(z.ARRAY_BUFFER,v,z.STATIC_DRAW),e.bufferUploaded=!0}S(F);const w=new Po(n.gl,n.options,k,this.sdfShader,{transform:o.data,color:Bo(u,r),size:l/(((_=F.data)==null?void 0:_.info.size)||0),scrollY:m,distanceRange:g,debug:$.sdfShaderDebug},r,i,{height:x,width:p},0,d),E=(T=e.trFontFace)==null?void 0:T.texture;S(E);const C=this.stage.txManager.getCtxTexture(E);w.addTexture(C),w.length=e.bufferNumFloats,w.numQuads=e.bufferNumQuads,n.addRenderOp(w)}resolveFontFace(e){return no.resolveFontFace([this.msdfFontFamilies,this.ssdfFontFamilies],e)}invalidateVisibleWindowCache(e){e.visibleWindow.valid=!1,this.scheduleUpdateState(e)}invalidateLayoutCache(e){e.visibleWindow.valid=!1,e.renderWindow=void 0,e.textH=void 0,e.textW=void 0,e.lineCache=[],this.setStatus(e,"loading"),this.scheduleUpdateState(e)}}const Nt=2048;class us{constructor(t,e){a(this,"_canvas");a(this,"_context");a(this,"_settings");a(this,"renderInfo");this._canvas=t,this._context=e,this._settings=this.mergeDefaults({})}set settings(t){this._settings=this.mergeDefaults(t)}get settings(){return this._settings}getPrecision(){return this._settings.precision}setFontProperties(){this._context.font=this._getFontSetting(),this._context.textBaseline=this._settings.textBaseline}_getFontSetting(){const t=[this._settings.fontFace],e=[];for(let o=0,i=t.length;o<i;o++)t[o]==="serif"||t[o]==="sans-serif"?e.push(t[o]):e.push(`"${t[o]}"`);return`${this._settings.fontStyle} ${this._settings.fontSize*this.getPrecision()}px ${e.join(",")}`}_load(){if(document.fonts){const t=this._getFontSetting();try{if(!document.fonts.check(t,this._settings.text))return document.fonts.load(t,this._settings.text).catch(e=>{console.warn("[Lightning] Font load error",e,t)}).then(()=>{document.fonts.check(t,this._settings.text)||console.warn("[Lightning] Font not found",t)})}catch{console.warn("[Lightning] Can't check font loading for "+t)}}}calculateRenderInfo(){const t={},e=this.getPrecision(),o=this._settings.paddingLeft*e,i=this._settings.paddingRight*e,r=this._settings.fontSize*e;let n=this._settings.offsetY===null?null:this._settings.offsetY*e,l=(this._settings.lineHeight||r)*e;const u=this._settings.w*e,h=this._settings.h*e;let f=this._settings.wordWrapWidth*e;const d=this._settings.cutSx*e,$=this._settings.cutEx*e,m=this._settings.cutSy*e,p=this._settings.cutEy*e,x=(this._settings.letterSpacing||0)*e,g=this._settings.textIndent*e;this.setFontProperties();let v=u||2048/this.getPrecision(),I=v-o;if(I<10&&(v+=10-I,I=10),f||(f=I),this._settings.textOverflow&&!this._settings.wordWrap){let _;switch(this._settings.textOverflow){case"clip":_="";break;case"ellipsis":_=this._settings.maxLinesSuffix;break;default:_=this._settings.textOverflow}this._settings.text=this.wrapWord(this._settings.text,f-g,_)}let F;if(this._settings.wordWrap)F=this.wrapText(this._settings.text,f,x,g);else{F={l:this._settings.text.split(/(?:\r\n|\r|\n)/),n:[]};const _=F.l.length;for(let T=0;T<_-1;T++)F.n.push(T)}let k=F.l;if(this._settings.maxLines&&k.length>this._settings.maxLines){const _=k.slice(0,this._settings.maxLines);let T=null;if(this._settings.maxLinesSuffix){const K=this._settings.maxLinesSuffix?this.measureText(this._settings.maxLinesSuffix):0,j=this.wrapText(_[_.length-1],f-K,x,g);_[_.length-1]=`${j.l[0]}${this._settings.maxLinesSuffix}`,T=[j.l.length>1?j.l[1]:""]}else T=[""];let z;const M=k.length;let b=0;const N=F.n.length;for(z=this._settings.maxLines;z<M;z++)T[b]+=`${T[b]?" ":""}${k[z]}`,z+1<N&&F.n[z+1]&&b++;t.remainingText=T.join(`
`),t.moreTextLines=!0,k=_}else t.moreTextLines=!1,t.remainingText="";let w=0;const E=[];for(let _=0;_<k.length;_++){const T=this.measureText(k[_],x)+(_===0?g:0);E.push(T),w=Math.max(w,T)}t.lineWidths=E,u||(v=w+o+i,I=w),l=l||r;let C;if(h)C=h;else{const _=this._settings.textBaseline!="bottom"?.5*r:0;C=l*(k.length-1)+_+Math.max(l,r)+(n||0)}return n===null&&(n=r),t.w=v,t.h=C,t.lines=k,t.precision=e,v||(v=1),C||(C=1),(d||$)&&(v=Math.min(v,$-d)),(m||p)&&(C=Math.min(C,p-m)),t.width=v,t.innerWidth=I,t.height=C,t.fontSize=r,t.cutSx=d,t.cutSy=m,t.cutEx=$,t.cutEy=p,t.lineHeight=l,t.lineWidths=E,t.offsetY=n,t.paddingLeft=o,t.paddingRight=i,t.letterSpacing=x,t.textIndent=g,t}draw(t,e){const o=this.getPrecision(),i=(e==null?void 0:e.lines)||t.lines,r=(e==null?void 0:e.lineWidths)||t.lineWidths,n=e?e.lines.length*t.lineHeight:t.height;this._canvas.width=Math.min(Math.ceil(t.width+this._settings.textRenderIssueMargin),Nt),this._canvas.height=Math.min(Math.ceil(n),Nt),this.setFontProperties(),t.fontSize>=128&&(this._context.globalAlpha=.01,this._context.fillRect(0,0,.01,.01),this._context.globalAlpha=1),(t.cutSx||t.cutSy)&&this._context.translate(-t.cutSx,-t.cutSy);let l,u;const h=[];for(let d=0,$=i.length;d<$;d++)l=d===0?t.textIndent:0,u=d*t.lineHeight+t.offsetY,this._settings.verticalAlign=="middle"?u+=(t.lineHeight-t.fontSize)/2:this._settings.verticalAlign=="bottom"&&(u+=t.lineHeight-t.fontSize),this._settings.textAlign==="right"?l+=t.innerWidth-r[d]:this._settings.textAlign==="center"&&(l+=(t.innerWidth-r[d])/2),l+=t.paddingLeft,h.push({text:i[d],x:l,y:u,w:r[d]});if(this._settings.highlight){const d=this._settings.highlightColor,$=this._settings.highlightHeight*o||t.fontSize*1.5,m=this._settings.highlightOffset*o,p=this._settings.highlightPaddingLeft!==null?this._settings.highlightPaddingLeft*o:t.paddingLeft,x=this._settings.highlightPaddingRight!==null?this._settings.highlightPaddingRight*o:t.paddingRight;this._context.fillStyle=rt(d);for(let g=0;g<h.length;g++){const v=h[g];this._context.fillRect(v.x-p,v.y-t.offsetY+m,v.w+x+p,$)}}let f=null;this._settings.shadow&&(f=[this._context.shadowColor,this._context.shadowOffsetX,this._context.shadowOffsetY,this._context.shadowBlur],this._context.shadowColor=rt(this._settings.shadowColor),this._context.shadowOffsetX=this._settings.shadowOffsetX*o,this._context.shadowOffsetY=this._settings.shadowOffsetY*o,this._context.shadowBlur=this._settings.shadowBlur*o),this._context.fillStyle=rt(this._settings.textColor);for(let d=0,$=h.length;d<$;d++){const m=h[d];if(t.letterSpacing===0)this._context.fillText(m.text,m.x,m.y);else{const p=m.text.split("");let x=m.x;for(let g=0,v=p.length;g<v;g++)this._context.fillText(p[g],x,m.y),x+=this.measureText(p[g],t.letterSpacing)}}f&&(this._context.shadowColor=f[0],this._context.shadowOffsetX=f[1],this._context.shadowOffsetY=f[2],this._context.shadowBlur=f[3]),(t.cutSx||t.cutSy)&&this._context.translate(t.cutSx,t.cutSy),this.renderInfo=t}wrapWord(t,e,o){const i=this._context.measureText(o).width,r=t.length,n=this._context.measureText(t).width;if(n<=e)return t;let l=Math.floor(e*r/n),u=this._context.measureText(t.substring(0,l)).width+i;if(u>e)for(;l>0&&(u=this._context.measureText(t.substring(0,l)).width+i,u>e);)l-=1;else for(;l<r;)if(u=this._context.measureText(t.substring(0,l)).width+i,u<e)l+=1;else{l-=1;break}return t.substring(0,l)+(e>=i?o:"")}wrapText(t,e,o,i=0){const r=t.split(/\r?\n/g);let n=[];const l=[];for(let u=0;u<r.length;u++){const h=[];let f="",d=e-i;const $=r[u].split(" ");for(let m=0;m<$.length;m++){const p=this.measureText($[m],o),x=p+this.measureText(" ",o);m===0||x>d?(m>0&&(h.push(f),f=""),f+=$[m],d=e-p-(m===0?i:0)):(d-=x,f+=` ${$[m]}`)}h.push(f),f="",n=n.concat(h),u<r.length-1&&l.push(n.length)}return{l:n,n:l}}measureText(t,e=0){return e?t.split("").reduce((o,i)=>o+this._context.measureText(i).width+e,0):this._context.measureText(t).width}mergeDefaults(t){return{text:"",w:0,h:0,fontStyle:"normal",fontSize:40,fontFace:null,wordWrap:!0,wordWrapWidth:0,wordBreak:!1,textOverflow:"",lineHeight:null,textBaseline:"alphabetic",textAlign:"left",verticalAlign:"top",offsetY:null,maxLines:0,maxLinesSuffix:"..",textColor:[1,1,1,1],paddingLeft:0,paddingRight:0,shadow:!1,shadowColor:[0,0,0,1],shadowOffsetX:0,shadowOffsetY:0,shadowBlur:5,highlight:!1,highlightHeight:0,highlightColor:[0,0,0,1],highlightOffset:0,highlightPaddingLeft:0,highlightPaddingRight:0,letterSpacing:0,textIndent:0,cutSx:0,cutEx:0,cutSy:0,cutEy:0,advancedRenderer:!1,fontBaselineRatio:0,precision:1,textRenderIssueMargin:0,...t}}}const At=typeof self>"u"?globalThis:self;var Kt;const Pt=((Kt=At.document)==null?void 0:Kt.fonts)||At.fonts;function ps(s){const{fontFamily:t,fontStyle:e,fontWeight:o,fontStretch:i,fontSize:r}=s;return[e,o,i,`${r}px`,t].join(" ")}const ms=it(0,0,0,0);class xs extends ao{constructor(e){super(e);a(this,"canvas");a(this,"context");a(this,"rendererBounds");typeof OffscreenCanvas<"u"?this.canvas=new OffscreenCanvas(0,0):this.canvas=document.createElement("canvas");let o=this.canvas.getContext("2d");o||(this.canvas=document.createElement("canvas"),o=this.canvas.getContext("2d")),S(o),this.context=o,this.rendererBounds={x1:0,y1:0,x2:this.stage.options.appWidth,y2:this.stage.options.appHeight}}getPropertySetters(){return{fontFamily:(e,o)=>{e.props.fontFamily=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontWeight:(e,o)=>{e.props.fontWeight=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontStyle:(e,o)=>{e.props.fontStyle=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontStretch:(e,o)=>{e.props.fontStretch=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontSize:(e,o)=>{e.props.fontSize=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},text:(e,o)=>{e.props.text=o,this.invalidateLayoutCache(e)},textAlign:(e,o)=>{e.props.textAlign=o,this.invalidateLayoutCache(e)},color:(e,o)=>{e.props.color=o,this.invalidateLayoutCache(e)},x:(e,o)=>{e.props.x=o,this.invalidateVisibleWindowCache(e)},y:(e,o)=>{e.props.y=o,this.invalidateVisibleWindowCache(e)},contain:(e,o)=>{e.props.contain=o,this.invalidateLayoutCache(e)},width:(e,o)=>{e.props.width=o,this.invalidateLayoutCache(e)},height:(e,o)=>{e.props.height=o,this.invalidateLayoutCache(e)},offsetY:(e,o)=>{e.props.offsetY=o,this.invalidateLayoutCache(e)},scrollY:(e,o)=>{e.props.scrollY=o},letterSpacing:(e,o)=>{e.props.letterSpacing=o,this.invalidateLayoutCache(e)}}}canRenderFont(e){return!0}isFontFaceSupported(e){return e instanceof Ft}addFontFace(e){S(e instanceof Ft),Pt.add(e.fontFace)}createState(e){return{props:e,status:"initialState",updateScheduled:!1,emitter:new ue,canvasPages:void 0,lightning2TextRenderer:new us(this.canvas,this.context),renderWindow:void 0,visibleWindow:{x1:0,y1:0,x2:0,y2:0,valid:!1},renderInfo:void 0,forceFullLayoutCalc:!1,textW:0,textH:0,fontInfo:void 0,fontFaceLoadedHandler:void 0,debugData:{updateCount:0,layoutCount:0,drawCount:0,lastLayoutNumCharacters:0,layoutSum:0,drawSum:0,bufferSize:0}}}updateState(e){if(e.status==="initialState"&&this.setStatus(e,"loading"),!e.fontInfo){const p=ps(e.props);if(e.fontInfo={cssString:p,loaded:!1},!e.fontInfo.loaded){Pt.load(p).then(this.onFontLoaded.bind(this,e,p)).catch(this.onFontLoadError.bind(this,e,p));return}}if(!e.fontInfo.loaded)return;e.renderInfo||(e.lightning2TextRenderer.settings={text:e.props.text,textAlign:e.props.textAlign,fontFace:e.props.fontFamily,fontSize:e.props.fontSize,fontStyle:[e.props.fontStretch,e.props.fontStyle,e.props.fontWeight].join(" "),textColor:te(e.props.color),offsetY:e.props.fontSize+e.props.offsetY,wordWrap:e.props.contain!=="none",wordWrapWidth:e.props.contain==="none"?void 0:e.props.width,letterSpacing:e.props.letterSpacing},e.renderInfo=e.lightning2TextRenderer.calculateRenderInfo(),e.textH=e.renderInfo.lineHeight*e.renderInfo.lines.length,e.textW=e.renderInfo.width,e.renderWindow=void 0);const{x:o,y:i,width:r,height:n,scrollY:l,contain:u}=e.props,{visibleWindow:h}=e;let{renderWindow:f,canvasPages:d}=e;if(!h.valid){const p=it(o,i,u!=="none"?o+r:1/0,u==="both"?i+n:1/0,ms);Zt(this.rendererBounds,p,h),h.valid=!0}const $=h.y2-h.y1,m=Math.ceil($/e.renderInfo.lineHeight);if($===0){d=void 0,f=void 0,this.setStatus(e,"loaded");return}else if(f&&d){const p=o+f.x1,x=i-l+f.y1,g=o+f.x2,v=i-l+f.y2;if(p<=h.x1&&g>=h.x2&&x<=h.y1&&v>=h.y2){this.setStatus(e,"loaded");return}v<h.y2?(f.y1+=m*e.renderInfo.lineHeight,f.y2+=m*e.renderInfo.lineHeight,d.push(d.shift()),d[2].lineNumStart=d[1].lineNumStart+m,d[2].lineNumEnd=d[2].lineNumStart+m,d[2].valid=!1):x>h.y1&&(f.y1-=m*e.renderInfo.lineHeight,f.y2-=m*e.renderInfo.lineHeight,d.unshift(d.pop()),d[0].lineNumStart=d[1].lineNumStart-m,d[0].lineNumEnd=d[0].lineNumStart+m,d[0].valid=!1)}else{const p=e.renderInfo.lineHeight*m,x=Math.ceil(l/p),g=x*m,v=g-m,I=g+m;d=[{texture:d==null?void 0:d[0].texture,lineNumStart:v,lineNumEnd:v+m,valid:!1},{texture:d==null?void 0:d[1].texture,lineNumStart:g,lineNumEnd:g+m,valid:!1},{texture:d==null?void 0:d[2].texture,lineNumStart:I,lineNumEnd:I+m,valid:!1}],e.canvasPages=d;const F=x*p;f={x1:0,y1:F-p,x2:r,y2:F+p*2}}e.renderWindow=f,performance.now();for(const p of d)if(!p.valid){if(p.lineNumStart<0){p.texture=this.stage.txManager.loadTexture("ImageTexture",{src:""}),p.valid=!0;continue}e.lightning2TextRenderer.draw(e.renderInfo,{lines:e.renderInfo.lines.slice(p.lineNumStart,p.lineNumEnd),lineWidths:e.renderInfo.lineWidths.slice(p.lineNumStart,p.lineNumEnd)}),this.canvas.width===0||this.canvas.height===0||(p.texture=this.stage.txManager.loadTexture("ImageTexture",{src:this.context.getImageData(0,0,this.canvas.width,this.canvas.height)},{preload:!0})),p.valid=!0}this.setStatus(e,"loaded")}renderQuads(e,o,i,r){var _,T,z,M,b,N,K,j,oe,G,ne,ae;const{stage:n}=this,{canvasPages:l,textW:u=0,textH:h=0,renderWindow:f}=e;if(!l||!f)return;const{x:d,y:$,scrollY:m,contain:p,width:x,height:g}=e.props,v={x:d,y:$,width:p!=="none"?x:u,height:p==="both"?g:h};Vt({x:0,y:0,width:n.options.appWidth,height:n.options.appHeight},v),S(l,"canvasPages is not defined"),S(f,"renderWindow is not defined");const F=(f.y2-f.y1)/3,{zIndex:k,color:w}=e.props,E=r*Do(w),C=Ie(4294967295,E);l[0].valid&&this.stage.renderer.addQuad({alpha:E,clippingRect:i,colorBl:C,colorBr:C,colorTl:C,colorTr:C,width:((T=(_=l[0].texture)==null?void 0:_.dimensions)==null?void 0:T.width)||0,height:((M=(z=l[0].texture)==null?void 0:z.dimensions)==null?void 0:M.height)||0,texture:l[0].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:k,tx:o.tx,ty:o.ty-m+f.y1,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td}),l[1].valid&&this.stage.renderer.addQuad({alpha:E,clippingRect:i,colorBl:C,colorBr:C,colorTl:C,colorTr:C,width:((N=(b=l[1].texture)==null?void 0:b.dimensions)==null?void 0:N.width)||0,height:((j=(K=l[1].texture)==null?void 0:K.dimensions)==null?void 0:j.height)||0,texture:l[1].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:k,tx:o.tx,ty:o.ty-m+f.y1+F,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td}),l[2].valid&&this.stage.renderer.addQuad({alpha:E,clippingRect:i,colorBl:C,colorBr:C,colorTl:C,colorTr:C,width:((G=(oe=l[2].texture)==null?void 0:oe.dimensions)==null?void 0:G.width)||0,height:((ae=(ne=l[2].texture)==null?void 0:ne.dimensions)==null?void 0:ae.height)||0,texture:l[2].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:k,tx:o.tx,ty:o.ty-m+f.y1+F+F,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td})}invalidateVisibleWindowCache(e){e.visibleWindow.valid=!1,this.setStatus(e,"loading"),this.scheduleUpdateState(e)}invalidateLayoutCache(e){e.renderInfo=void 0,this.setStatus(e,"loading"),this.scheduleUpdateState(e)}onFontLoaded(e,o){var i;o!==((i=e.fontInfo)==null?void 0:i.cssString)||!e.fontInfo||(e.fontInfo.loaded=!0,this.scheduleUpdateState(e))}onFontLoadError(e,o,i){var r;o!==((r=e.fontInfo)==null?void 0:r.cssString)||!e.fontInfo||(e.fontInfo.loaded=!0,console.error(`CanvasTextRenderer: Error loading font '${e.fontInfo.cssString}'`,i),this.scheduleUpdateState(e))}}const gs=2e6;class ys extends ue{constructor(e){super();a(this,"options");a(this,"animationManager");a(this,"txManager");a(this,"fontManager");a(this,"textRenderers");a(this,"shManager");a(this,"renderer");a(this,"root");a(this,"deltaTime",0);a(this,"lastFrameTime",0);a(this,"currentFrameTime",0);a(this,"fpsNumFrames",0);a(this,"fpsElapsedTime",0);a(this,"renderRequested",!1);this.options=e;const{canvas:o,clearColor:i,rootId:r,debug:n,appWidth:l,appHeight:u}=e;this.txManager=new is,this.shManager=new os,this.animationManager=new ss,n!=null&&n.monitorTextureCache&&setInterval(()=>{S(this.txManager);const f=this.txManager.getDebugInfo();console.log("Texture ID Cache Size: ",f.idCacheSize),console.log("Texture Key Cache Size: ",f.keyCacheSize)},1e3),this.renderer=new Yo({stage:this,canvas:o,pixelRatio:e.devicePhysicalPixelRatio*e.deviceLogicalPixelRatio,clearColor:i??4278190080,bufferMemory:gs,txManager:this.txManager,shManager:this.shManager}),this.txManager.renderer=this.renderer,this.textRenderers={canvas:new xs(this),sdf:new fs(this)},this.fontManager=new no(this.textRenderers);const h=new Tt(this,{id:r,x:0,y:0,width:l,height:u,alpha:1,clipping:!1,color:0,colorTop:0,colorBottom:0,colorLeft:0,colorRight:0,colorTl:0,colorTr:0,colorBl:0,colorBr:0,zIndex:0,zIndexLocked:0,scaleX:1,scaleY:1,mountX:0,mountY:0,mount:0,pivot:.5,pivotX:.5,pivotY:.5,rotation:0,parent:null,texture:null,textureOptions:null,shader:null,shaderProps:null});this.root=h,Jo(this)}updateAnimations(){const{animationManager:e}=this;this.root&&(this.lastFrameTime=this.currentFrameTime,this.currentFrameTime=es(),this.deltaTime=this.lastFrameTime?this.currentFrameTime-this.lastFrameTime:100/6,e.update(this.deltaTime))}hasSceneUpdates(){return!!this.root.updateType||this.renderRequested}drawFrame(){const{renderer:e,renderRequested:o}=this;this.root.updateType!==0&&this.root.update(this.deltaTime),e==null||e.reset(),this.addQuads(this.root),e==null||e.render(),o&&(this.renderRequested=!1);const{fpsUpdateInterval:i}=this.options;if(i&&(this.fpsNumFrames++,this.fpsElapsedTime+=this.deltaTime,this.fpsElapsedTime>=i)){const r=Math.round(this.fpsNumFrames*1e3/this.fpsElapsedTime);this.fpsNumFrames=0,this.fpsElapsedTime=0,this.emit("fpsUpdate",r)}}addQuads(e){S(this.renderer&&e.globalTransform),e.isRenderable&&e.renderQuads(this.renderer);for(let o=0;o<e.children.length;o++){const i=e.children[o];i&&(i==null?void 0:i.worldAlpha)!==0&&this.addQuads(i)}}requestRender(){this.renderRequested=!0}resolveTextRenderer(e,o=null){let i=o,r=!1;if(i){const l=this.textRenderers[i];l?l.canRenderFont(e)||(console.warn(`Cannot use override text renderer '${i}' for font`,e),i=null,r=!0):(console.warn(`Text renderer override '${i}' not found.`),i=null,r=!0)}if(!i){for(const[l,u]of Object.entries(this.textRenderers))if(l!=="canvas"&&u.canRenderFont(e)){i=l;break}i||(i="canvas")}r&&console.warn(`Falling back to text renderer ${String(i)}`);const n=this.textRenderers[i];return S(n,"resolvedTextRenderer undefined"),n}}class ws extends Tt{constructor(e,o){super(e,o);a(this,"textRenderer");a(this,"trState");a(this,"_textRendererOverride",null);a(this,"onTextLoaded",()=>{const{contain:e}=this,o=this.trState.props.width,i=this.trState.props.height,r=this.trState.textW||0,n=this.trState.textH||0;e==="both"?(this.props.width=o,this.props.height=i):e==="width"?(this.props.width=o,this.props.height=n):e==="none"&&(this.props.width=r,this.props.height=n),this.updateLocalTransform(),this.stage.requestRender(),this.emit("loaded",{type:"text",dimensions:{width:this.trState.textW||0,height:this.trState.textH||0}})});a(this,"onTextFailed",(e,o)=>{this.emit("failed",{type:"text",error:o})});this._textRendererOverride=o.textRendererOverride;const{resolvedTextRenderer:i,textRendererState:r}=this.resolveTextRendererAndState({x:this.absX,y:this.absY,width:o.width,height:o.height,textAlign:o.textAlign,color:o.color,zIndex:o.zIndex,contain:o.contain,scrollable:o.scrollable,scrollY:o.scrollY,offsetY:o.offsetY,letterSpacing:o.letterSpacing,debug:o.debug,fontFamily:o.fontFamily,fontSize:o.fontSize,fontStretch:o.fontStretch,fontStyle:o.fontStyle,fontWeight:o.fontWeight,text:o.text},void 0);this.textRenderer=i,this.trState=r}get width(){return this.trState.props.width}set width(e){this.textRenderer.set.width(this.trState,e)}get height(){return this.trState.props.height}set height(e){this.textRenderer.set.height(this.trState,e)}get color(){return this.trState.props.color}set color(e){this.textRenderer.set.color(this.trState,e)}get text(){return this.trState.props.text}set text(e){this.textRenderer.set.text(this.trState,e),this.checkIsRenderable()}get textRendererOverride(){return this._textRendererOverride}set textRendererOverride(e){this._textRendererOverride=e;const{resolvedTextRenderer:o,textRendererState:i}=this.resolveTextRendererAndState(this.trState.props,this.trState);this.textRenderer=o,this.trState=i}get fontSize(){return this.trState.props.fontSize}set fontSize(e){this.textRenderer.set.fontSize(this.trState,e)}get fontFamily(){return this.trState.props.fontFamily}set fontFamily(e){this.textRenderer.set.fontFamily(this.trState,e)}get fontStretch(){return this.trState.props.fontStretch}set fontStretch(e){this.textRenderer.set.fontStretch(this.trState,e)}get fontStyle(){return this.trState.props.fontStyle}set fontStyle(e){this.textRenderer.set.fontStyle(this.trState,e)}get fontWeight(){return this.trState.props.fontWeight}set fontWeight(e){this.textRenderer.set.fontWeight(this.trState,e)}get textAlign(){return this.trState.props.textAlign}set textAlign(e){this.textRenderer.set.textAlign(this.trState,e)}get contain(){return this.trState.props.contain}set contain(e){this.textRenderer.set.contain(this.trState,e)}get scrollable(){return this.trState.props.scrollable}set scrollable(e){this.textRenderer.set.scrollable(this.trState,e)}get scrollY(){return this.trState.props.scrollY}set scrollY(e){this.textRenderer.set.scrollY(this.trState,e)}get offsetY(){return this.trState.props.offsetY}set offsetY(e){this.textRenderer.set.offsetY(this.trState,e)}get letterSpacing(){return this.trState.props.letterSpacing}set letterSpacing(e){this.textRenderer.set.letterSpacing(this.trState,e)}get debug(){return this.trState.props.debug}set debug(e){this.textRenderer.set.debug(this.trState,e)}update(e,o=null){super.update(e,o),S(this.globalTransform),this.textRenderer.set.x(this.trState,this.globalTransform.tx),this.textRenderer.set.y(this.trState,this.globalTransform.ty)}checkIsRenderable(){return super.checkIsRenderable()?!0:this.trState.props.text!==""?this.isRenderable=!0:this.isRenderable=!1}renderQuads(e){S(this.globalTransform),this.textRenderer.renderQuads(this.trState,this.globalTransform,this.clippingRect,this.worldAlpha)}resolveTextRendererAndState(e,o){const i=this.stage.resolveTextRenderer(e,this._textRendererOverride),r=i.createState(e);return o&&["loading","loaded","failed"].forEach(l=>{o.emitter.off(l)}),r.emitter.on("loaded",this.onTextLoaded),r.emitter.on("failed",this.onTextFailed),i.scheduleUpdateState(r),{resolvedTextRenderer:i,textRendererState:r}}}class vs extends pt{constructor(t,e,o){super(t,e,o,new ws(o,{id:Ct(),x:t.x,y:t.y,width:t.width,height:t.height,alpha:t.alpha,clipping:t.clipping,color:t.color,colorTop:t.colorTop,colorBottom:t.colorBottom,colorLeft:t.colorLeft,colorRight:t.colorRight,colorTl:t.colorTl,colorTr:t.colorTr,colorBl:t.colorBl,colorBr:t.colorBr,zIndex:t.zIndex,zIndexLocked:t.zIndexLocked,scaleX:t.scaleX,scaleY:t.scaleY,mountX:t.mountX,mountY:t.mountY,mount:t.mount,pivot:t.pivot,pivotX:t.pivotX,pivotY:t.pivotY,rotation:t.rotation,text:t.text,fontSize:t.fontSize,fontFamily:t.fontFamily,fontWeight:t.fontWeight,fontStretch:t.fontStretch,fontStyle:t.fontStyle,contain:t.contain,scrollable:t.scrollable,letterSpacing:t.letterSpacing,textAlign:t.textAlign,scrollY:t.scrollY,offsetY:t.offsetY,textRendererOverride:t.textRendererOverride,debug:t.debug,parent:null,texture:null,textureOptions:null,shader:null,shaderProps:null}))}get text(){return this.coreNode.text}set text(t){this.coreNode.text=t}get textRendererOverride(){return this.coreNode.textRendererOverride}set textRendererOverride(t){this.coreNode.textRendererOverride=t}get fontSize(){return this.coreNode.fontSize}set fontSize(t){this.coreNode.fontSize=t}get fontFamily(){return this.coreNode.fontFamily}set fontFamily(t){this.coreNode.fontFamily=t}get fontWeight(){return this.coreNode.fontWeight}set fontWeight(t){this.coreNode.fontWeight=t}get fontStretch(){return this.coreNode.fontStretch}set fontStretch(t){this.coreNode.fontStretch=t}get fontStyle(){return this.coreNode.fontStyle}set fontStyle(t){this.coreNode.fontStyle=t}get textAlign(){return this.coreNode.textAlign}set textAlign(t){this.coreNode.textAlign=t}get contain(){return this.coreNode.contain}set contain(t){this.coreNode.contain=t}get scrollable(){return this.coreNode.scrollable}set scrollable(t){this.coreNode.scrollable=t}get scrollY(){return this.coreNode.scrollY}set scrollY(t){this.coreNode.scrollY=t}get offsetY(){return this.coreNode.offsetY}set offsetY(t){this.coreNode.offsetY=t}get letterSpacing(){return this.coreNode.letterSpacing}set letterSpacing(t){this.coreNode.letterSpacing=t}get debug(){return this.coreNode.debug}set debug(t){this.coreNode.debug=t}}const bs="modulepreload",$s=function(s){return"/"+s},Bt={},lo=function(t,e,o){if(!e||e.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=$s(r),r in Bt)return;Bt[r]=!0;const n=r.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(!!o)for(let f=i.length-1;f>=0;f--){const d=i[f];if(d.href===r&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const h=document.createElement("link");if(h.rel=n?"stylesheet":bs,n||(h.as="script",h.crossOrigin=""),h.href=r,document.head.appendChild(h),n)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};function Es(s){return s.prototype instanceof Oo}async function _s(s,t){let e;try{console.log("Loading core extension",s),e=await lo(()=>import(s),[])}catch(i){console.error(`The core extension module at '${s}' could not be loaded.`),console.error(i);return}if(!e.default){console.error(`The core extension module at '${s}' does not have a default export.`);return}const o=e.default;if(Es(o)){const i=new o;try{await i.run(t)}catch(r){console.error(`The core extension at '${s}' threw an error.`),console.error(r)}}else console.error(`The core extension at '${s}' does not extend CoreExtension.`)}class Ts{constructor(){a(this,"root",null);a(this,"stage",null);a(this,"rendererMain",null)}async init(t,e,o){this.stage=new ys({rootId:Ct(),appWidth:e.appWidth,appHeight:e.appHeight,deviceLogicalPixelRatio:e.deviceLogicalPixelRatio,devicePhysicalPixelRatio:e.devicePhysicalPixelRatio,clearColor:e.clearColor,canvas:o,fpsUpdateInterval:e.fpsUpdateInterval,debug:{monitorTextureCache:!1}}),this.rendererMain=t,S(this.stage.root);const i=new pt(t.resolveNodeDefaults({}),this.rendererMain,this.stage,this.stage.root);this.root=i,i.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,i)),this.onCreateNode(i),e.coreExtensionModule&&await _s(e.coreExtensionModule,this.stage),this.stage.on("fpsUpdate",(r,n)=>{this.onFpsUpdate(n)})}createNode(t){S(this.rendererMain),S(this.stage);const e=new pt(t,this.rendererMain,this.stage);return e.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,e)),this.onCreateNode(e),e}createTextNode(t){S(this.rendererMain),S(this.stage);const e=new vs(t,this.rendererMain,this.stage);return e.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,e)),this.onCreateNode(e),e}destroyNode(t){t.destroy()}releaseTexture(t){const{stage:e}=this;S(e),e.txManager.removeTextureIdFromCache(t)}getRootNode(){return S(this.root),this.root}onCreateNode(t){throw new Error("Method not implemented.")}onBeforeDestroyNode(t){throw new Error("Method not implemented.")}onFpsUpdate(t){throw new Error("Method not implemented.")}}const Ue=()=>{},nt=()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),co=s=>{const t=Ae.get("debugLevel"),e={};return Object.defineProperty(e,"info",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("info")>-1)&&console.info.bind(window.console,`%c ⚡️ ${s} %c ${nt()}`,"background-color: #0284c7; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ue}}),Object.defineProperty(e,"warn",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("warn")>-1)&&console.warn.bind(window.console,`%c ⚡️ ${s} %c ${nt()}`,"background-color: #fbbf24; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ue}}),Object.defineProperty(e,"error",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("error")>-1)&&console.error.bind(window.console,`%c ⚡️ ${s} %c ${nt()}`,"background-color: #dc2626; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ue}}),Object.defineProperty(e,"debug",{get(){return(t>=2||Array.isArray(t)&&t.indexOf("debug")>-1)&&console.debug.bind(window.console,`%c ⚡️ ${s} %c (${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})})`,"background-color: #e2e8f0; color: #334155; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ue}}),e};let A;const Cs=()=>{A=co("Blits")},Dt={hd:.66666667,"720p":.66666667,720:.66666667,fhd:1,fullhd:1,"1080p":1,1080:1,"4k":2,"2160p":2,2160:2};let re;const Ss=(s,t,e)=>{Ae.set(e),Cs();const o=new Ts;re=new Go({appWidth:e.w||1920,appHeight:e.h||1080,coreExtensionModule:e.fontLoader,deviceLogicalPixelRatio:e.pixelRatio||Dt[e.screenResolution]||Dt[window.innerHeight]||1},t,o);const i=()=>{let r=s();r.quit=()=>{A.info("Closing App"),r.destroy(),r=null,re=null}};re.init().then(()=>i())},Yt={aliceblue:4042850303,antiquewhite:4209760255,aqua:4294967040,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,transparent:0,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},at={normalize(s=""){if(s=s.toString(),s.startsWith("0x"))return s;const t=/rgba?\((.+)\)/gi,e=/hsla?\((.+)\)/gi;if(t.test(s)){const o=new RegExp(t).exec(s);if(o[1])return s=o[1].split(",").map((i,r)=>(r==3&&(i=Math.min(Math.max(Math.round(i*255),0),255)),parseInt(i).toString(16).padStart(2,"0"))).join(""),s.padEnd(8,"f").padStart(10,"0x")}else{if(e.test(s))return A.warn("HSL(A) color format is not supported yet"),4294967295;if(s in Yt)return Yt[s];s.startsWith("#")&&(s=s.substring(1))}return s.length===3&&(s=s.split("").map(o=>o+o).join("")),s.padEnd(8,"f").padStart(10,"0x")}},ks=s=>typeof s=="object"&&"transition"in s,He=s=>typeof s=="string"&&s.startsWith("{")&&s.endsWith("}"),je=s=>JSON.parse(s.replace(/'/g,'"').replace(/([\w-_]+)\s*:/g,'"$1":')),me=function(s,t){return typeof s=="string"&&s.endsWith("%")?this.element.node._parent[t]*(parseFloat(s)/100):s},wt=s=>{if(typeof s=="object"&&s.constructor===Object){if("value"in s)return s.value;if("transition"in s)return wt(s.transition)}return s},ho={set parent(s){this._props.parent=s==="root"?re.root:s.node,this._set.add("parent")},set rotation(s){this._props.rotation=s*(Math.PI/180),this._set.add("rotation")},set w(s){this._props.width=me.call(this,s,"width"),this._set.add("width")},set width(s){this._props.width=me.call(this,s,"width"),this._set.add("width")},set h(s){this._props.height=me.call(this,s,"height"),this._set.add("height")},set height(s){this._props.height=me.call(this,s,"height"),this._set.add("height")},set x(s){this._props.x=me.call(this,s,"width"),this._set.add("x")},set y(s){this._props.y=me.call(this,s,"height"),this._set.add("y")},set z(s){this._props.zIndex=s,this._set.add("zIndex")},set zIndex(s){this._props.zIndex=s,this._set.add("zIndex")},set color(s){if(typeof s=="object"||He(s)&&(s=je(s))){const t={top:"colorTop",bottom:"colorBottom",left:"colorLeft",right:"colorRight"};this._props.color=0,Object.entries(s).forEach(e=>{this._props[t[e[0]]]=at.normalize(e[1]),this._set.add(t[e[0]])})}else this._props.color=at.normalize(s);this._set.add("color")},set src(s){this._props.src=s,this._set.has("color")||(this._props.color=4294967295),this._set.add("src")},set texture(s){this._props.texture=s,this._set.add("texture")},set mount(s){typeof s=="object"||He(s)&&(s=je(s))?(s.x&&(this._props.mountX=s.x,this._set.add("mountX")),s.y&&(this._props.mountY=s.y,this._set.add("mountY"))):(this._props.mountX=this._props.mountY=s,this._set.add("mountX"),this._set.add("mountY"))},set pivot(s){typeof s=="object"||He(s)&&(s=je(s))?(s.x&&(this._set.add("pivotX"),this._props.pivotX=s.x),s.y&&(this._set.add("pivotY"),this._props.pivotY=s.y)):(this._props.pivotX=this._props.pivotY=s,this._set.add("pivotX"),this._set.add("pivotY"))},set scale(s){typeof s=="object"||He(s)&&(s=je(s))?(s.x&&(this._props.scaleX=s.x),s.y&&(this._props.scaleY=s.y)):this._props.scale=s,this._set.add("scale")},set show(s){this._props.alpha=s?1:0},set alpha(s){this._props.alpha=s,this._set.add("alpha")},set text(s){this._props.text=s!==void 0?s.toString():""},set effects(s){this._props.shader=re.createShader("DynamicShader",{effects:s.map(t=>(t.props&&t.props.color&&(t.props.color=at.normalize(t.props.color)),t))}),this._set.add("effects")},set fontFamily(s){this._props.fontFamily=s},set fontSize(s){this._props.fontSize=s},set wordWrap(s){this._props.width=s},set contain(s){this._props.contain=s},set maxLines(s){this.height=s*this.element.node.fontSize},set letterSpacing(s){this._props.letterSpacing=s},set textAlign(s){this._props.textAlign=s}},Rs={defaults:{},populate(s){const t={...this.defaults,...this.config,...s};this.initData=s,t[c.isSlot]&&(this[c.isSlot]=!0),this.props.element=this;for(const[e,o]of Object.entries(t)){const i=Object.getOwnPropertyDescriptor(ho,e);i&&i.set&&(this.props[e]=wt(o))}this.props._set.has("color")||(this.props._props.color=this.props._set.has("src")||this.props._set.has("texture")?4294967295:0),this.node=t.__textnode?re.createTextNode(this.props._props):re.createNode(this.props._props),t["@loaded"]&&this.node.on("loaded",(e,{type:o,dimensions:i})=>{t["@loaded"]({w:i.width,h:i.height,type:o},this)}),t["@error"]&&this.node.on("failed",(e,o)=>{t["@error"](o,this)})},set(s,t){const e=new Set(this.props._set);this.props._props={},this.props[s]=wt(t);for(const[o,i]of Object.entries(this.props._props)){if(ks(t)&&e.has(o))return this.animate(o,i,t.transition);this.node[o]=i}},animate(s,t,e){if(this.node[s]===t)return Promise.resolve();this.scheduledTransitions[s]&&this.scheduledTransitions[s].f.state==="running"&&(this.scheduledTransitions[s].f.pause(),this.node[s]=this.scheduledTransitions[s].v);const o={};o[s]=t;const i=this.node.animate(o,{duration:typeof e=="object"&&"duration"in e?e.duration:300,easing:typeof e=="object"&&"function"in e?e.function:"ease"});return new Promise(r=>{this.scheduledTransitions[s]={v:o[s],f:i,timeout:setTimeout(()=>{e.start&&typeof e.start=="function"&&e.start.call(this.component,this,s,o[s]);try{i.start().waitUntilStopped().then(()=>delete this.scheduledTransitions[s]).then(()=>{e.end&&typeof e.end=="function"&&e.end.call(this.component,this,s,this.node[s])}).then(r)}catch(n){A.error(n)}},e.delay||0)}})},delete(){A.debug("Deleting  Node",this.nodeId),Object.values(this.scheduledTransitions).forEach(s=>{clearTimeout(s.timeout)}),this.node.parent=null},get nodeId(){return this.node&&this.node.id},get ref(){return this.initData.ref||null}},fo=(s,t)=>Object.assign(Object.create(Rs),{props:Object.assign(Object.create(ho),{_props:{},_set:new Set}),node:null,scheduledTransitions:{},initData:{},config:s,component:t}),Ot={};let Is=0;const zs=s=>`BlitsComponent::${s}_${Ot[s]=(Ot[s]||0)+1}`,Ms=()=>++Is,ce={},Ls=(s,t,e)=>{ce[t]&&ce[t][s]&&ce[t][s].apply(e)},Fs=(s,t,e)=>{const o=c[s];ce[t]&&ce[t][o]&&ce[t][o].apply(e)},Ns=(s={},t)=>{ce[t]={},[...Object.keys(s),...Object.getOwnPropertySymbols(s)].forEach(o=>{typeof s[o]=="function"&&(ce[t][o]=s[o])})};let Le=null;const vt=new WeakMap,uo=(s,t)=>{if(Le){let e=vt.get(s);e||(e=new Map,vt.set(s,e));let o=e.get(t);o||(o=new Set,e.set(t,o)),o.add(Le)}},Pe=(s,t,e=!1)=>{const o=vt.get(s);if(!o)return;const i=o.get(t);i&&i.forEach(r=>{r(e)})},Wt=s=>{Le=s,Le(),Le=null},As=["constructor","includes","indexOf","lastIndexOf","push","pop","shift","splice","unshift","sort","reverse"],lt=["push","pop","shift","unshift","splice","sort","reverse"],Xt=new WeakMap,bt=s=>{const t=Xt.get(s);if(t)return t;const e={get(i,r,n){return Array.isArray(i)&&As.includes(r)?Reflect.get(i,r,n):(uo(i,r),i[r]!==null&&typeof i[r]=="object"?bt(i[r]):Reflect.get(i,r,n))},set(i,r,n,l){const u=i[r],h=Reflect.set(i,r,n,l);return typeof h=="object"&&bt(i[r]),(r==="length"||h&&u!==n)&&Pe(i,r),h}},o=new Proxy(s,e);return Xt.set(s,o),o},po=s=>(Object.keys(s).forEach(t=>{let e=s[t];if(s[t]!==null&&typeof s[t]=="object"){if(Object.getPrototypeOf(s[t])===Object.prototype)return po(s[t]);if(Array.isArray(s[t]))for(let o=0;o<lt.length-1;o++)s[t][lt[o]]=function(i){Array.prototype[lt[o]].call(this,i),Pe(s,t)}}Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get(){return uo(s,t),e},set(o){e!==o&&(e=o,Pe(s,t))}})}),s),Ut=(s,t="Proxy")=>t==="defineProperty"?po(s):bt(s),Ps={before:{prop:"alpha",value:0},in:{prop:"alpha",value:1,duration:200},out:{prop:"alpha",value:0,duration:100}};let St,ot=!1;const mo=new WeakMap,xo=[];let go={},$t=!1;const Bs=()=>(document.location.hash||"/").replace(/^#/,""),Ds=(s,t=[])=>{const e=t.filter(o=>o.path===s).pop();return e&&(e.options={...e.options,...go},St=e),e},Ys=async function(){if(ot=!0,this.parent[c.routes]){const s=St,t=Bs(),e=Ds(t,this.parent[c.routes]);if(e){$t===!1&&s&&s.options.inHistory===!0&&xo.push(s),"transition"in e||(e.transition=Ps),typeof e.transition=="function"&&(e.transition=e.transition(s,e));let o,{view:i,focus:r}=mo.get(e)||{};if(i?o=i[c.wrapper]:(o=fo({parent:this[c.children][0]}),o.populate({}),o.set("w","100%"),o.set("h","100%"),i=await e.component(this[c.props],o,this),i[Symbol.toStringTag]==="Module"&&(i.default&&typeof i.default=="function"?i=i.default(this[c.props],o,this):A.error("Dynamic import doesn't have a default export or default is not a function")),typeof i=="function"&&(i=i(this[c.props],o,this))),this[c.children].push(i),e.transition.before)if(Array.isArray(e.transition.before))for(let l=0;l<e.transition.before.length;l++)o.set(e.transition.before[l].prop,e.transition.before[l].value);else o.set(e.transition.before.prop,e.transition.before.value);let n=!1;if(s){n=!0;const l=this[c.children].splice(1,1).pop();l&&Os(s,l,e.transition.out)}if(e.transition.in)if(Array.isArray(e.transition.in))for(let l=0;l<e.transition.in.length;l++)l===e.transition.length-1?await Te(o,e.transition.in[l],n):Te(o,e.transition.in[l],n);else await Te(o,e.transition.in,n);r?fe.set(r):i.focus(),this.activeView=this[c.children][this[c.children].length-1]}else A.error(`Route ${t} not found`)}$t=!1,ot=!1},Os=async(s,t,e)=>{if(e)if(Array.isArray(e))for(let o=0;o<e.length;o++)o===e.length-1?await Te(t[c.wrapper],e[o]):Te(t[c.wrapper],e[o]);else await Te(t[c.wrapper],e);if(s.options&&s.options.keepAlive===!0)mo.set(s,{view:t,focus:fe.get()});else{for(let o=0;o<t[c.children].length-1;o++)t[c.children][o]&&t[c.children][o].destroy&&(t[c.children][o].destroy(),t[c.children][o]=null);t.destroy(),t=null}},Te=(s,t,e=!0)=>e?s.animate(t.prop,t.value,t):s.set(t.prop,t.value),kt=(s,t={})=>{go=t,window.location.hash=`#${s}`},yo=()=>{const s=xo.pop();return s?($t=!0,kt(s.path),!0):!1},ct={navigate:Ys,to:kt,back:yo};let de=null,qe=[],Ht;const fe={_hold:!1,set hold(s){this._hold=s},get hold(){return this._hold},get(){return de},set(s,t){clearTimeout(Ht),de&&de.unfocus(),qe.reverse().forEach(e=>e.unfocus()),s!==de&&(Ht=setTimeout(()=>{de=s,de.lifecycle.state="focus",t instanceof KeyboardEvent?document.dispatchEvent(new KeyboardEvent("keydown",t)):qe=[]},this.hold?50:0))},input(s,t){if(ot===!0)return;qe=wo([de],s);const e=qe.shift();e&&(e[c.inputEvents][s]?e[c.inputEvents][s].call(e,t):e[c.inputEvents].any&&e[c.inputEvents].any.call(e,t))}},wo=(s,t)=>s[0][c.inputEvents]&&(typeof s[0][c.inputEvents][t]=="function"||typeof s[0][c.inputEvents].any=="function")?s:s[0].parent?(s.unshift(s[0].parent),wo(s,t)):[],Ws=()=>pe("Image",{template:`
      <Element :imageSource="$imageSource" />`,props:["src"],computed:{imageSource(){return/^(?:https?:)?\/\//i.test(this.src)?this.src:`${window.location.protocol}//${window.location.host}/${this.src}`}}}),Xs=()=>pe("Circle",{template:`
      <Element :color="$color" :w="$size" :h="$size" :effects="[$shader('radius', {radius: $radius})]"></Element>
    `,props:[{key:"size",default:40},"color"],computed:{radius(){return this.size/2}}});let ht;const Us=()=>pe("RouterView",{template:`
      <Element w="100%" height="100%"></Element>
    `,state(){return{activeView:null}},hooks:{ready(){ht=()=>ct.navigate.apply(this),ct.navigate.apply(this),window.addEventListener("hashchange",ht)},destroy(){window.removeEventListener("hashchange",ht,!1)},focus(){this.activeView&&this.activeView.focus()}},input:{back(s){ct.back()||this.parent.focus(s)}}}),Hs=()=>pe("Sprite",{template:`
      <Element w="$w" h="$h" :texture="$texture" />
    `,props:["image","map","frame","w","h"],state(){return{spriteTexture:!1}},computed:{texture(){const s="frames"in this.map?{...this.map.defaults||{},...this.map.frames[this.frame]}:this.map[this.frame];if(this.spriteTexture&&s)return this[c.renderer].createTexture("SubTexture",{texture:this.spriteTexture,x:s.x,y:s.y,width:s.w,height:s.h})}},hooks:{ready(){this.spriteTexture=this[c.renderer].createTexture("ImageTexture",{src:`${window.location.protocol}//${window.location.host}/${this.image}`})}}}),js=()=>pe("Text",{template:`
      <Element
        __textnode="true"
        :text="$content"
        fontFamily="$font"
        :fontSize="$size"
        :color="$color"
        :style="$style"
        :weight="$weight"
        letterSpacing="$letterspacing"
        stretch="$stretch"
        contain="$_contain"
        :wordWrap="$wordwrap"
        :maxLines="$maxlines"
        :textAlign="$align"
        @loaded="$@loaded"
        @error="$@error"
      />`,props:["content",{key:"font",default:"lato"},{key:"size",cast:Number,default:32},"style","color","weight","letterspacing","stretch","align","wordwrap","maxlines","contain","@loaded","@error"],computed:{_contain(){return this.contain||(this.wordwrap&&this.maxlines?"both":this.wordwrap?"width":"none")}}}),Ge=new Map,dt={registerListener(s,t,e){let o=Ge.get(t);o||(o=new Map,Ge.set(t,o));let i=o.get(s);i||(i=new Set,o.set(s,i)),i.add(e)},executeListeners(s,t){const e=Ge.get(s);e&&e.forEach(o=>{o.forEach(i=>{i(t)})})},removeListeners(s){Ge.forEach(t=>{const e=t.get(s);e&&(e.clear(),t.delete(e))})}},qs={rounded:"radius"},Gs=s=>{Object.defineProperties(s.prototype,{focus:{value:function(t){fe.set(this,t)},writable:!1,enumerable:!0,configurable:!1},unfocus:{value:function(){this.lifecycle.state="unfocus"},writable:!1,enumerable:!0,configurable:!1},destroy:{value:function(){this.lifecycle.state="destroy";for(let t=0;t<this[c.timeouts].length;t++)clearTimeout(this[c.timeouts][t]);for(let t=0;t<this[c.intervals].length;t++)clearInterval(this[c.intervals][t]);dt.removeListeners(this),vo(this[c.children]),A.debug(`Destroyed component ${this.componentId}`)},writable:!1,enumerable:!0,configurable:!1},select:{value:function(t){let e=null;return this[c.children].forEach(o=>{Array.isArray(o)?o.forEach(i=>{i.ref===t&&(e=i)}):Object.getPrototypeOf(o)===Object.prototype?Object.keys(o).forEach(i=>{o[i].ref===t&&(e=o[i])}):o.ref===t&&(e=o)}),e},writable:!1,enumerable:!0,configurable:!1},shader:{value:function(t,e){const o=qs[t]||t,i=re.driver.stage.shManager.getRegisteredEffects();if(o in i)return{type:o,props:e};A.error(`Shader ${t} not found`)},writable:!1,enumerable:!1,configurable:!1},$router:{value:{to:kt,back:yo,get currentRoute(){return St},get routes(){return s.prototype[c.routes]},get navigating(){return ot}},writable:!1,enumerable:!0,configurable:!1},[c.components]:{value:{Image:Ws(),Circle:Xs(),RouterView:Us(),Sprite:Hs(),Text:js()},writable:!1,enumerable:!1,configurable:!1},[c.timeouts]:{value:[],writable:!1,enumerable:!1,configurable:!1},$setTimeout:{value:function(t,e,...o){const i=setTimeout(()=>{this[c._timeouts]=this[c.timeouts].filter(r=>r!==i),t.apply(null,o)},e,o);return this[c.timeouts].push(i),i},writable:!1,enumerable:!0,configurable:!1},[c.intervals]:{value:[],writable:!1,enumerable:!1,configurable:!1},$setInterval:{value:function(t,e,...o){const i=setInterval(()=>{this[c._intervals]=this[c.intervals].filter(r=>r!==i),t.apply(null,o)},e,o);return this[c.intervals].push(i),i},writable:!1,enumerable:!0,configurable:!1},$emit:{value:function(t,e){dt.executeListeners(t,e)},writable:!1,enumerable:!0,configurable:!1},$listen:{value:function(t,e){dt.registerListener(this,t,e)},writable:!1,enumerable:!0,configurable:!1},[c.renderer]:{value:re,writable:!1,enumerable:!1,configurable:!1},$log:{value:co("App"),writable:!1,enumerable:!1,configurable:!1},$trigger:{value:function(t){Pe(this[c.originalState],t,!0)},writable:!1,enumerable:!1,configurable:!1}})},vo=function(s){for(let t=0;t<s.length;t++){if(!s[t])return;Array.isArray(s[t])?vo(s[t]):s[t].delete?s[t].delete():s[t].destroy&&(s[t].destroy(),s[t]=null),s[t]=null}s=[]},Ks={cast:s=>s,required:!1},Vs=(s,t=[])=>{t.indexOf("ref")===-1&&t.push("ref"),s[c.propKeys]=[],t.forEach(e=>{e={...Ks,...typeof e=="object"?e:{key:e}},s[c.propKeys].push(e.key),Object.defineProperty(s.prototype,e.key,{get(){const o=e.cast(this[c.props]&&e.key in this[c.props]?this[c.props][e.key]:e.default||void 0);return e.required&&o===void 0&&A.warn(`${e.key} is required`),o},set(o){A.warn(`Warning! Avoid mutating props directly (${e.key})`),this[c.props][e.key]=o}})})},Qs=(s,t)=>{s[c.methodKeys]=[];for(let e in t)s[c.propKeys]&&s[c.propKeys].indexOf(e)>-1?A.error(`${e} already exists as a prop`):(typeof t[e]!="function"&&A.warn(`${e} is not a function`),s[c.methodKeys].push(e),s.prototype[e]=t[e])},Zs=(s,t)=>{s[c.stateKeys]=[],t=t.apply(s.prototype),Object.keys(t).forEach(e=>{s[c.propKeys]&&s[c.propKeys].indexOf(e)>-1&&A.error(`State ${e} already exists as a prop`),s[c.methodKeys]&&s[c.methodKeys].indexOf(e)>-1&&A.error(`State ${e} already exists as a method`),s[c.stateKeys].push(e);try{Object.defineProperty(s.prototype,e,{get(){return this[c.state]&&e in this[c.state]&&this[c.state][e]},set(o){this[c.state]&&(this[c.state][e]=o)}})}catch(o){A.error(o)}})},Js=(s,t)=>{s[c.computedKeys]=[];for(let e in t)s[c.stateKeys]&&s[c.stateKeys].indexOf(e)>-1?A.error(`${e} already exists as a prop`):s[c.propKeys]&&s[c.propKeys].indexOf(e)>-1?A.error(`${e} already exists as a prop`):s[c.methodKeys]&&s[c.methodKeys].indexOf(e)>-1?A.error(`${e} already exists as a method`):(typeof t[e]!="function"&&A.warn(`${e} is not a function`),s[c.computedKeys].push(e),Object.defineProperty(s.prototype,e,{get(){return t[e].apply(this)}}))},ei=(s,t)=>{s.prototype[c.inputEvents]=[],Object.keys(t).forEach(e=>{typeof t[e]!="function"&&A.warn(`${t[e]} is not a function`),s.prototype[c.inputEvents][e]=t[e]})},ti=(s,t)=>{s.prototype[c.routes]=[],Object.keys(t).forEach(e=>{s.prototype[c.routes][e]={...t[e],options:{inHistory:!0,...t[e].options}}})},oi=(s,t)=>{s.prototype[c.watchKeys]=[],s.prototype[c.watchers]={};for(let e in t)typeof t[e]!="function"&&console.warn(`${e} is not a function`),s.prototype[c.watchKeys].push(e),s.prototype[c.watchers][e]=function(o,i){t[e].call(this,o,i)}},jt={element:fo},qt=s=>{throw new Error(`Parameter ${s} is required`)},pe=(s=qt("name"),t=qt("config"))=>{let e=null;const o=l=>{e||(A.debug(`Generating code for ${s} component`),e=Xo.call(t,Wo(t.template))),Gs(r),Ns(t.hooks,s),l.state="beforeSetup",Vs(r,t.props),t.methods&&Qs(r,t.methods),t.state&&Zs(r,t.state),t.computed&&Js(r,t.computed),t.watch&&oi(r,t.watch),t.routes&&ti(r,t.routes),t.input&&ei(r,t.input),r.setup=!0,l.state="setup"},i=l=>{const u=["init","beforeSetup","setup","ready","focus","unfocus","destroy"];return{previous:null,current:null,get state(){return this.current},set state(h){u.indexOf(h)>-1&&h!==this.current&&(A.debug(`Setting lifecycle state from ${this.previous} to ${h} for ${l.componentId}`),this.previous=this.current,Fs(h,s,l),Ls(h,s,l),this.current=h)}}},r=function(l,u,h){this.lifecycle=i(this),r.setup||o(this.lifecycle),this.parent=h,this[c.wrapper]=u,Object.defineProperties(this,{type:{value:s,writable:!1,enumerable:!0,configurable:!1},componentId:{value:zs(s),writable:!1,enumerable:!0,configurable:!1},[c.id]:{value:Ms(),writable:!1,enumerable:!1,configurable:!1},[c.props]:{value:Ut(l.props||{},Ae.get("reactivityMode")),writable:!1,enumerable:!1,configurable:!1}}),Object.defineProperty(this,c.originalState,{value:t.state&&typeof t.state=="function"&&t.state.apply(this)||{},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,c.state,{value:Ut(this[c.originalState],Ae.get("reactivityMode")),writable:!1,enumerable:!1,configurable:!1}),this.lifecycle.state="init",Object.defineProperty(this,c.children,{value:e.render.apply(jt,[u,this,e.context]),writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,c.slots,{value:this[c.children].filter(f=>f[c.isSlot]),writable:!1,enumerable:!1,configurable:!1}),e.effects.forEach(f=>{Wt(()=>{f.apply(jt,[this,this[c.children],e.context])})}),this[c.watchers]&&Object.keys(this[c.watchers]).forEach(f=>{let d=this[f];Wt(($=!1)=>{(d!==this[f]||$===!0)&&(this[c.watchers][f].apply(this,[this[f],d]),d=this[f])})}),setTimeout(()=>this.lifecycle.state="ready")},n=(l={},u,h)=>new r(l,u,h);return n.config=t,n},si=s=>{const t={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",Enter:"enter"," ":"space",Backspace:"back",Escape:"escape",37:"left",39:"right",38:"up",40:"down",13:"enter",32:"space",8:"back",27:"escape"};s.hooks=s.hooks||{};let e,o,i;return s.hooks[c.destroy]=function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",o)},s.hooks[c.init]=function(){const n={...t,...Ae.get("keymap",{})};e=l=>{const u=n[l.key]||n[l.keyCode]||l.key||l.keyCode;fe.input(u,l),clearTimeout(i),i=setTimeout(()=>{fe.hold=!0},50)},o=()=>{clearTimeout(i),fe.hold=!1},document.addEventListener("keydown",e),document.addEventListener("keyup",o),setTimeout(()=>fe.set(this))},pe("App",s)},R={Component:pe,Application:si,Launch:Ss},ii=new URL("fontLoader-4d2b0242.js",import.meta.url).href,ri=R.Component("PortalItem",{template:`
    <Element w="370" h="320" :scale.transition="$scale" :color="$backgroundColor" :effects="[$shader('radius', {radius: 6})]">
      <Text x="30" y="30" :content="$number" size="84" :color="$fontColor" />
      <Text x="30" y="140" :content="$title" size="42" font="raleway" :color="$fontColor" letterspacing="2" />
      <Text x="30" y="200" :content="$description" wordwrap="300" size="28" :color="$fontColor" lineheight="32" />
    </Element>
  `,props:["title","description","index","id"],state(){return{backgroundColor:"#44037a",scale:1,fontColor:"#e8d7f9",number:this.index<9?`0${this.index+1}`:this.index+1}},hooks:{focus(){this.backgroundColor="#fafafa",this.fontColor="#000",this.scale=1.1},unfocus(){this.$router.navigating||(this.backgroundColor="#44037a",this.fontColor="#e8d7f9",this.scale=1)}},input:{enter(){this.$router.to(`/${this.id}`)},back(){}}}),ni=R.Component("PortalRow",{components:{PortalItem:ri},template:`
    <Element>
      <Element :alpha.transition="{value: $itemOffset < 240 ? 1 : 0, duration: 200}">
        <Text content="$title" x="60"  />
        <Element y="50" x="60" h="1" w="1800" color="#e8d7f9" />
      </Element>

      <Element y="100" :x.transition="$rowOffset" >
        <PortalItem
          :for="(item, index) in $items"
          :x.transition="{value: $itemOffset + $index * 430, delay: 50 * ($index%4), duration: 500}"
          title="$item.title"
          description="$item.description"
          id="$item.id"
          index="$index"
          :ref="'item'+$index" key="$item.id" />
      </Element>
    </Element>
  `,props:["title","items"],state(){return{focused:0,rowOffset:60,itemOffset:240}},hooks:{ready(){this.itemOffset=0},focus(){this.$trigger("focused")}},watch:{focused(s){const t=this.select(`item${s}`);t&&t.focus&&(t.focus(),s<1?this.rowOffset=60:s>this.items.length-2?this.rowOffset=60-(this.items.length-2)*430+430:this.rowOffset=60-s*430+430)}},input:{left(){this.focused>0?this.focused--:this.focused=this.items.length-1},right(){this.focused<this.items.length-1?this.focused++:this.focused=0}}}),ai="@lightningjs/blits-example-app",li="0.4.8",ci="Lightning 3 Blits Example App",hi="index.js",di="module",fi={start:"npm run dev",lint:"eslint '**/*.js'","lint:fix":"eslint '**/*.js' --fix",build:"vite build",dev:"vite dev --host"},ui={hooks:{"pre-commit":"lint-staged"}},pi="Michiel van der Geest <hello@michielvandergeest.com>",mi="Apache-2",xi={eslint:"^8.8.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0",husky:"^7.0.4","lint-staged":"^12.3.3",prettier:"^2.5.1",vite:"^4.0.4"},gi={"@lightningjs/blits":"^0.5.10"},yi={name:ai,version:li,description:ci,main:hi,type:di,scripts:fi,"lint-staged":{"*.js":["eslint --fix"]},husky:ui,author:pi,license:mi,devDependencies:xi,dependencies:gi},wi=R.Component("Portal",{components:{PortalRow:ni},template:`
    <Element w="1920" h="1080" color="{top: '#44037a', bottom: '#240244'}">
      <PortalRow mount="{y: 0.5}" h="500" :y.transition="-$rowFocused * 420 + 550" title="Demos" items="$demo" ref="row0" />
      <PortalRow mount="{y: 0.5}" h="500" :y.transition="-$rowFocused * 420 + 1100" title="Examples and tests" items="$example" ref="row1" />
      <PortalRow mount="{y: 0.5}" h="500" :y.transition="-$rowFocused * 420 + 1650" title="Benchmarks and stress tests" items="$benchmark" ref="row2" />
      <Element w="1920" h="200" color="#44037a">
        <Element w="1920" h="70" y="200" color="{top: '#44037a'}"/>
        <Element :y.transition="{value: 80 - $logoOffset, duration: 400}">
          <Element src="assets/blits-logo-full.png" w="200" h="112" x="60" />
          <Element w="2" h="120" y="-10" color="#ffffff80" x="300" />
          <Element x="320" y="16">
            <Text y="0" size="36">Example App</Text>
            <Text y="50" size="24">v{{$version}}</Text>
          </Element>
        </Element>
      </Element>
    </Element>`,state(){return{version:yi.version,offset:60,rowFocused:0,rows:["demo","example","benchmark"],logoOffset:50,demo:[{title:"Loader",id:"demos/loading",description:"A basic loading screen"},{title:"Intro",id:"demos/intro",description:"A splash screen with custom animations"},{title:"Theming",id:"demos/theming",description:"Dynamically changing the styling of a component with themes"},{title:"TMDB",id:"demos/tmdb",description:"The Movie Database (TMDB) example using data from a remote API"},{title:"Sprites",id:"demos/sprites",description:"Display multiple images while keeping low memory footprint"},{title:"Focus",id:"demos/focushandling",description:"Managing focus between components in a simple layout"}],example:[{title:"Positioning",id:"examples/positioning",description:"Positioning Elements and Components"},{title:"Colors",id:"examples/colors",description:"Using different formats and notations for defining colors"},{title:"Gradients",id:"examples/gradients",description:"Example of Basic gradients"},{title:"Transitions",id:"examples/transitions",description:"Comparing different transition easing functions"},{title:"Components",id:"examples/components",description:"Reusable Components"},{title:"Alpha",id:"examples/alpha",description:"Applying transparency to Elements, Images and Components"},{title:"Scaling",id:"examples/scaling",description:"Resizing and scaling Elements and Components"},{title:"Rotation",id:"examples/rotation",description:"Rotating Elements"},{title:"Key input",id:"examples/keyinput",description:"Handling user input events"},{title:"For Loop",id:"examples/forloop",description:"Iterating over Elements and Components using for loops"},{title:"Effects",id:"examples/effects",description:"Applying one or multiple effects (aka shaders)"},{title:"Show",id:"examples/showif",description:"Conditionally show or hide Elements and Components"},{title:"Events",id:"examples/events",description:"Communication between components by emitting and listening for events"},{title:"Images",id:"examples/images",description:"1 image says more than 1000 words ;)"},{title:"Texts",id:"examples/texts",description:"Displaying and formatting text"},{title:"Slots",id:"examples/slots",description:"Insert dynamic content from a parent into a child using slots"}],benchmark:[{title:"Exponential",id:"benchmarks/exponential",description:"Spawn a large number of components at an exponential rate"}]}},hooks:{ready(){this.logoOffset=0,this.$trigger("rowFocused")}},watch:{rowFocused(s){const t=this.select(`row${s}`);t&&t.focus&&t.focus()}},input:{up(){this.rowFocused=(this.rowFocused-1+this.rows.length)%this.rows.length},down(){this.rowFocused=(this.rowFocused+1)%this.rows.length}}}),vi=R.Component("Letter",{template:`
    <Element>
      <Element w="$w" :h.transition="{value: 410+$offset, duration: $duration, delay: $wait, function: $timingFunction}" color="#E6E6E6" />
      <Element w="$w" h="280" :src="$image" :y.transition="{value: 400+$offset, duration: $duration, delay: $wait, function: $timingFunction}" />
      <Element w="$w" color="#E6E6E6"
        :h.transition="{value: 500-$offset, duration: $duration, delay: $wait, function: $timingFunction}"
        :y.transition="{value: 660+$offset, duration: $duration, delay: $wait, function: $timingFunction}"
      />
    </Element>`,props:["w","letter","direction","delay"],computed:{image(){return`${window.location.protocol}//${window.location.host}/assets/${this.letter}.png`}},state(){return{offset:this.direction==="up"?-680:680,duration:1e3,wait:0,timingFunction:"cubic-bezier(1,-0.64,.39,1.44)"}},hooks:{ready(){this.animate()}},methods:{animate(){this.$setTimeout(()=>{this.offset=0},1e3),this.$setTimeout(()=>{this.wait=this.delay+150,this.duration=1e3,this.offset=1080},2800),this.$setTimeout(()=>{this.wait=this.delay/3,this.timingFunction="ease-in-out",this.duration=1500,this.offset=0},5e3)}}}),bi=R.Component("Intro",{components:{Letter:vi},template:`
    <Element w="1920" h="1080" :src="$background">
      <Letter letter="l" w="294" />
      <Letter letter="i-1" w="128" x="294" direction="up" delay="50" />
      <Letter letter="g-1" w="205" x="422" delay="100" />
      <Letter letter="h" w="224" x="627" direction="up" delay="150" />
      <Letter letter="t" w="190" x="851" delay="200" />
      <Letter letter="n-1" w="221" x="1041" direction="up" delay="250" />
      <Letter letter="i-2" w="115" x="1262" delay="300" />
      <Letter letter="n-2" w="219" x="1377" direction="up" delay="350" />
      <Letter letter="g-2" w="324" x="1596" direction="up" delay="400" />
    </Element>`,state(){return{background:`${window.location.protocol}//${window.location.host}/assets/background.png`}}}),$i=R.Component("Toggle",{template:`
    <Element w="100" h="50" y="5" :color="$bgColor" :effects="[$shader('radius', {radius:25})]">
      <Circle :x.transition="$on ? 0 : 50" size="50" :color="$primaryColor" />
    </Element>
  `,props:["bgColor","primaryColor","on"]}),Ei=R.Component("Bar",{template:`
    <Element :w="{value: $w, duration: $duration}" :h="{value: $h, duration: $duration}" :color="$bgColor" :x="$index * ($w + ($w / 4))" :effects="[$shader('radius', {radius:10})]">
      <Element :w="$w" :y.transition="{value: $h-$innerH, duration: $duration}" :h.transition="{value: $innerH, duration: $duration}" :color="$primaryColor" :effects="[$shader('radius', {radius:10})]" />
    </Element>
  `,props:["bgColor","primaryColor","height","index","size"],state(){return{h:200,innerH:0,duration:400}},hooks:{ready(){this.innerH=this.height}},computed:{w(){return this.size==="large"?110:72}},watch:{bgColor(){this.duration=1e-6,this.innerH=0,this.$setTimeout(()=>{this.duration=400,this.innerH=this.height},200)},size(){this.duration=1e-6,this.innerH=0,this.$setTimeout(()=>{this.duration=400,this.innerH=this.height},100)}}}),_i={color1:"#475569",color2:"#64748b",color3:"#cbd5e1",color4:"#38bdf8",bg:"#1e293b80"},Ti={color1:"#f8fafc",color2:"#e2e8f0",color3:"#1e293b",color4:"#0369a1",bg:"#f1f5f9"},Ci=R.Component("Theming",{components:{Bar:Ei,Toggle:$i},template:`
    <Element w="1920" h="1080" :color.transition="$colors.bg">

      <Text y="1020" x="1160" size="28" :color="$colors.color4">Use "up", "down", "left" and "right" to change the appearance</Text>

      <Element :x.transition="(1920 - $width) / 2" :y.transition="(1080 - $height) / 2">
        <Element x="-250" y="-100" src="assets/shadow.png" w="1000" h="900" alpha="0.5" />

        <!-- Header -->
        <Element :w.transition="$width" :h.transition="$height" :color="$colors.color1" :effects="[$shader('radius', {radius: $radius})]">
          <Element :w.transition="$width" h="100" :color="$colors.color2" :effects="[$shader('radius', {radius: $radius})]" />
          <Element :w.transition="$width" h="80" y="20" :color="$colors.color2" />

          <Text :content="$text" :color="$colors.color3" size="28" x="20" y="14" />
          <Toggle :x.transition="$width - 120" :on="$mode === 'dark'" :bgColor="$colors.color1" primaryColor="#22c55e" />

        </Element>

        <!-- Blocks -->
        <Element w="200" :h.transition="$block1.height" x="25" y="140" :color="$colors.color2" :effects="[$shader('radius', {radius: $radius / 2})]" />
        <Element :w.transition="$block2.w" :h="$block2.h" x="270" :y.transition="$block2.y" :color="$colors.color2" :effects="[$shader('radius', {radius: $radius / 2})]" />

        <!-- Graph -->
        <Element :x.transition="$graph.x" :y.transition="$graph.y" :w="$graph.w" :h="$graph.h" color="transparent">
          <Element :x.transition="$graph.offset" :y.transition="$graph.offset">
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="100" index="0" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="140" index="1" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="170" index="2" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="150" index="3" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="90" index="4" />
          </Element>
        </Element>

      </Element>
    </Element>
  `,state(){return{mode:"dark",radius:20,width:500,height:600}},computed:{colors(){return this.mode==="dark"?_i:Ti},text(){return this.mode==="dark"?"Dark mode":"Light mode"},block1(){return{height:this.height===600?180:720}},block2(){return{y:this.height===600?140:560,h:this.height===600?180:300,w:this.height===600?200:890}},graph(){return{x:this.height===600?32:270,y:this.height===600?370:140,w:this.height===600?0:890,h:this.height===600?0:400,offset:this.height===600?0:110,size:this.height===600?"small":"large"}}},input:{right(){this.toggleX=0,this.$setTimeout(()=>{this.mode="light"},150)},left(){this.toggleX=48,this.$setTimeout(()=>{this.mode="dark"},150)},up(){this.width=1200,this.height=900},down(){this.width=500,this.height=600}}}),Si="ABC123",ki="https://8b4fa39d.lightningjs.workers.dev";let bo,$o;const Ri="w185",Ii={headers:{"Content-Type":"application/json",Authorization:"Bearer "+Si}};function Gt(s,t=Ri){return $o+t+s}function zi(...s){return bo?Et(...s):Eo().then(()=>Et(...s))}function Et(s,t={}){return fetch(ki+s,{...Ii,...t}).then(e=>e.json())}function Eo(){return Et("/configuration").then(s=>(bo=s,$o=s.images.secure_base_url,s))}const Mi={get:zi,loadConfig:Eo};function Li(s){return Mi.get(`/${s}/popular`).then(t=>t.results.filter(o=>!o.adult).map(o=>({poster:Gt(o.poster_path||o.profile_path),background:Gt(o.backdrop_path,"w1280"),identifier:o.id})))}const Fi=R.Component("Poster",{template:`
    <Element w="185" h="278" x="$x"
      :src="$src"
      :color="{top: '#fff', bottom: $colorBottom}"
      :scale.transition="{value: $scale, duration: 200, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      :effects="[$shader('radius', {radius: 8})]"
    />`,props:["src","index"],state(){return{scale:1,colorBottom:"#000"}},computed:{x(){return this.index*215}},hooks:{focus(){this.colorBottom="#fff",this.scale=1.1,this.$emit("posterSelect",this.index)},unfocus(){this.colorBottom="#000",this.scale=1}}}),Ni=R.Component("Background",{template:`
    <Element>
      <Element
        :src="$bg1" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha1, duration: 400, function: 'ease-in'}"
      />
      <Element
        :src="$bg2" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha2, duration: 400, function: 'ease-in'}"
      />
    </Element>`,props:["src"],state(){return{counter:0,alpha1:0,alpha2:0,bg1:!1,bg2:!1}},watch:{src(s){this.counter=(this.counter+1)%2,this.counter===0?(this.bg1=s,this.alpha1=.8,this.alpha2=0):(this.bg2=s,this.alpha1=0,this.alpha2=.8)}}}),Ai=R.Component("TMdb",{components:{Poster:Fi,Background:Ni},template:`
    <Element w="1920" h="1080" color="black">
      <Background :src="$src" />
      <Element :alpha.transition="{value: $alphaIn, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
        <Element src="assets/logo.png" x="130" :y.transition="{value: $logoY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}" w="243" h="52" />
        <Element :x.transition="{value: $x, duration: 300, function: 'ease-in-out'}"  :y.transition="{value: $listY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
          <Poster :for="(item, index) in $items" index="$index" src="$item.poster" ref="$item.identifier"/>
        </Element>
      </Element>
    </Element>`,state(){return{items:[],src:"",focused:null,alphaIn:.001,logoY:30,listY:750}},computed:{x(){return this.focused<=1?150:150-Math.min(this.focused-1,this.items.length-8)*215}},watch:{focused(s){const t=this.select(this.items[s]&&this.items[s].identifier);t&&t.focus&&t.focus()}},hooks:{ready(){this.alphaIn=1,this.listY=700,this.logoY=80,Li("movie").then(s=>{this.items=s,this.focused=0,this.background=s[this.focused].background}),this.$listen("posterSelect",s=>{this.src=this.items[s].background})},focus(){this.$trigger("focused")}},input:{left(){this.focused=Math.max(this.focused-1,0)},right(){this.focused=Math.min(this.focused+1,this.items.length-1)}}}),Pi=R.Component("MenuSprite",{template:`
    <Element>
      <Element>
        <Element src="assets/menusprite.png" x="748" y="120" w="425" h="340" />
        <Element y="680" x="560">
          <Sprite image="assets/menusprite.png" x="0" w="140" h="140" map="$map" :frame="$icon1" />
          <Sprite image="assets/menusprite.png" x="220" w="140" h="140" map="$map" frame="icon2" />
          <Sprite image="assets/menusprite.png" x="440" w="140" h="140" map="$map" frame="icon3" />
          <Sprite image="assets/menusprite.png" x="660" w="140" h="140" map="$map" frame="icon4_unfocus" />
        </Element>
      </Element>
    </Element>
    `,state(){return{icon1:"icon1_unfocus",map:{defaults:{w:160,h:160},frames:{icon1_focus:{x:0,y:0},icon1_unfocus:{x:170,y:340},icon2:{x:170,y:0},icon3:{x:350,y:0},icon4_unfocus:{x:680,y:170}}}}},hooks:{ready(){this.$setInterval(()=>{this.icon1=this.icon1==="icon1_unfocus"?"icon1_focus":"icon1_unfocus"},2e3)}}}),Ke=["menu"],Bi=R.Component("Sprites",{components:{MenuSprite:Pi},template:`
    <Element>
      <MenuSprite :show="$currentSprite === 'menu'"/>
    </Element>
    `,state(){return{currentSprite:"menu"}},input:{down(){const s=Ke.indexOf(this.currentSprite);s<Ke.length-1?this.currentSprite=Ke[s+1]:this.currentSprite=Ke[0]}}}),_o=R.Component("Button",{template:`
    <Element w="300" h="80" color="$color"
      :effects="[$shader('rounded', {radius: 20})]"
      :alpha.transition="$alpha"
      :scale.transition="$scale"
      :z="$zIndex"
      :rotation="$rotate">
    </Element>`,props:["color"],state(){return{alpha:.4,scale:1,zIndex:1,rotate:0}},hooks:{focus(){this.$log.info(`Button with color ${this.color} received focus`),this.alpha=1,this.scale=this.scale===1?1.2:1,this.zIndex=100},unfocus(){this.$log.info(`Button with color ${this.color} lost focus`),this.alpha=.4,this.scale=1,this.zIndex=1,this.rotate=0}},input:{enter(){this.rotate=this.rotate===0?-4:0,this.scale=this.scale===1.2?1.3:1.2}}}),Di=R.Component("Menu",{components:{Button:_o},template:`
    <Element :x.transition="$x" w="400" h="1080" color="{right: '#64748baa', left: '#475569aa'}">
      <Element x="50" y="40">
        <Button color="#e4e4e7" ref="menu1" />
        <Button color="#e4e4e7" y="100" ref="menu2" />
        <Button color="#e4e4e7" y="200" ref="menu3" />
        <Button color="#e4e4e7" y="300" ref="menu4" />
      </Element>
    </Element>`,state(){return{x:-360,focused:null}},hooks:{focus(){this.focused=1,this.$trigger("focused"),this.x=0},unfocus(){this.x=-360}},watch:{focused(){const s=this.select(`menu${this.focused}`);s&&s.focus&&s.focus()}},input:{right(){this.parent.focus()},down(){this.focused=Math.min(this.focused+1,4)},up(){this.focused=Math.max(this.focused-1,1)}}}),Yi=R.Component("FocusHandling",{components:{Menu:Di,Button:_o},template:`
    <Element>
      <Element x="300" y="150">
        <Button color="#ef4444" x="0" ref="button1" />
        <Button color="#f97316" x="320" ref="button2" />
        <Button color="#84cc16" x="640" ref="button3" />
        <Button color="#10b981" x="0" y="100" ref="button4" />
        <Button color="#06b6d4" y="100" x="320" ref="button5" />
        <Button color="#3b82f6" y="100" x="640" ref="button6" />
        <Button color="#8b5cf6" y="200" x="0" ref="button7" />
        <Button color="#d946ef" y="200" x="320" ref="button8" />
        <Button color="#f43f5e" y="200" x="640" ref="button9" />
      </Element>
      <Menu ref="menu" />
    </Element>`,state(){return{focused:null}},hooks:{focus(){this.focused=1,this.$trigger("focused")}},watch:{focused(s){const t=this.select(`button${s}`);t&&t.focus&&t.focus()}},input:{right(){this.focused=Math.min(this.focused+1,9)},left(){const s=this.focused-1;if(s===0){const t=this.select("menu");t&&t.focus&&t.focus()}else this.focused=Math.max(s,1)},a(){const s=this.select("menu");s&&s.focus&&s.focus()}}}),Oi=R.Component("Positioning",{template:`
    <Element>
      <!-- regular positioning -->
      <Element w="100" h="100" x="20" y="20" color="#ecfeff" />
      <Element w="100" h="100" x="140" y="20" color="#a5f3fc" />
      <Element w="100" h="100" x="260" y="20" color="#22d3ee" />
      <Element w="100" h="100" x="380" y="20" color="#0891b2" />

      <!-- positioning with dynamic values -->
      <Element w="100" h="100" x="$x1" y="$y" color="#fdf4ff" />
      <Element w="100" h="100" x="$x2" y="$y" color="#f5d0fe" />
      <Element w="100" h="100" x="$x3" y="$y" color="#e879f9" />
      <Element w="100" h="100" x="$x4" y="$y" color="#c026d3" />

      <!-- positioning with reactive values -->
      <Element w="100" h="100" :x="$xA" y="260" color="#fff7ed" />
      <Element w="100" h="100" :x="$xB" y="260" color="#fed7aa" />
      <Element w="100" h="100" :x="$xC" y="260" color="#fb923c" />
      <Element w="100" h="100" :x="$xD" y="260" color="#ea580c" />

      <!--- positioning of nested elements -->
      <Element w="800" h="800" y="20" x="800" color="#ecfdf5">
        <Element w="600" h="600" y="20" x="20" color="#a7f3d0">
          <Element w="400" h="400" y="100" x="20" color="#34d399">
            <Element w="200" h="100" :y="(400-100)/2" :x="(400-200)/2" color="#059669">
              <Element w="50" h="50" :y.transition="$yNested" :x.transition="$xNested" color="#065f46" />
            </Element>
          </Element>
        </Element>
      </Element>

      <!-- positioning after a set of nested elements -->
      <Element w="100" h="100" y="500" x="20" color="#e11d48" />

      <!-- zIndex not inherited by children - currently broken and being investigated :) -->
      <Element w="200" h="200" x="300" y="600" color="#94a3b8" z="100">
        <Text content="Lightning!" x="100" y="140" />
        <Element w="300" h="100" color="#475569" />
        <Circle x="150" y="150" size="100"/>
      </Element>
      <Element w="300" h="300" x="300" y="600" color="#ef444480" />

      <Element w="400" h="100" x="800" y="900" color="#0284c7">
        <Element w="42%" h="30%" y="5%" x="1%" color="#075985" />
        <Element :w="$bar2.v" h="30%" y="35%" x="1%" color="#6b21a8" />
        <Element :w.transition="$bar3" h="30%" y="65%" x="1%" color="#9f1239" />
      </Element>

    </Element>`,state(){return{x1:20,x2:140,x3:20+140+100,x4:380,y:140,xA:20,xB:140,xC:260,xD:380,yNested:0,xNested:0,bar2:{direction:"up",v:"10%"},bar3:"10%"}},hooks:{ready(){this.$setTimeout(()=>{this.xD=this.xD+200,this.xC=this.xC+100,this.xB=this.xB+50,this.xA=this.xA+25},4e3),this.$setInterval(()=>{this.yNested=this.yNested===0?50:0},2e3),this.$setInterval(()=>{this.xNested=this.xNested===0?150:0},1e3),this.$setInterval(()=>{const s=parseFloat(this.bar2.v),t=this.bar2.direction==="up"?s+10:s-10;this.bar2.v=t+"%",t>=90&&(this.bar2.direction="down"),t<=10&&(this.bar2.direction="up")},400),this.$setInterval(()=>{this.bar3=Math.ceil(Math.random()*96)+"%"},2e3)}}}),Wi=R.Component("Colors",{template:`
    <Element w="1920" h="1080" :color.transition="$bg">
      <!-- hex colors -->
      <Element x="20" y="20">
        <Element w="100" h="100" x="0" color="#ecfeff" />
        <Element w="100" h="100" x="120" color="#a5f3fc" />
        <Element w="100" h="100" x="240" color="#22d3ee" />
        <Element w="100" h="100" x="360" color="#0891b2" />
      </Element>

      <!-- hex colors without #-->
      <Element x="20" y="140">
        <Element w="100" h="100" x="0" color="ecfeff" />
        <Element w="100" h="100" x="120" color="a5f3fc" />
        <Element w="100" h="100" x="240" color="22d3ee" />
        <Element w="100" h="100" x="360" color="0891b2" />
      </Element>

      <!-- hex colors with alpha-->
      <Element x="20" y="260">
        <Element w="100" h="100" x="0" color="#ecfeffaa" />
        <Element w="100" h="100" x="120" color="#a5f3fc33" />
        <Element w="100" h="100" x="240" color="#22d3ee20" />
        <Element w="100" h="100" x="360" color="#0891b2ff" />
      </Element>

      <!-- rgb() colors-->
      <Element x="20" y="380">
        <Element w="100" h="100" x="0" color="rgb(236,254,255)" />
        <Element w="100" h="100" x="120" color="rgb(165,243,252)" />
        <Element w="100" h="100" x="240" color="rgb(34,211,238)" />
        <Element w="100" h="100" x="360" color="rgb(8,145,178)" />
      </Element>

      <!-- rgba() colors-->
      <Element x="20" y="500">
        <Element w="100" h="100" x="0" color="rgba(236,254,255,0.67)" />
        <Element w="100" h="100" x="120" color="rgba(165,243,252,0.2)" />
        <Element w="100" h="100" x="240" color="rgba(34,211,238, 0.13)" />
        <Element w="100" h="100" x="360" color="rgba(8,145,178,1)" />
      </Element>

      <!-- 3 char hex colors -->
      <Element x="20" y="620">
        <Element w="100" h="100" x="0" color="#000" />
        <Element w="100" h="100" x="120" color="#ccc" />
        <Element w="100" h="100" x="240" color="#890" />
        <Element w="100" h="100" x="360" color="#0f0" />
      </Element>

      <!-- 3 char hex colors without #-->
      <Element x="20" y="740">
        <Element w="100" h="100" x="0" color="000" />
        <Element w="100" h="100" x="120" color="ccc" />
        <Element w="100" h="100" x="240" color="890" />
        <Element w="100" h="100" x="360" color="0f0" />
      </Element>

      <Element x="620" y="20">
        <Element w="300" h="200" x="0" :color.transition="$color1" />
        <Element w="300" h="200" x="0" y="250" :color.transition="$color2" />
        <Element w="300" h="200" x="100" y="400" :color.transition="$color3"/>
        <Element w="300" h="200" x="0" y="650" :color.transition="{value: $color4, d: 1000, f: 'ease-in-out'}" />
      </Element>
    </Element>`,state(){return{bg:"#fff",color1:"#22d3ee",color2:"#dc2626",color3:"rgba(251, 191, 36)",color4:"#bfdbfe"}},input:{enter(){this.color1=this.color1==="#0891b2"?"#22d3ee":"#0891b2",this.color2=this.color2==="#dc2626"?"#0f0":"#dc2626",this.color3=this.color3==="rgba(251, 191, 36)"?"rgba(30, 64, 175, 0.5)":"rgba(251, 191, 36)",this.color4=this.color4==="#1e3a8a"?"#bfdbfe":"#1e3a8a"}},hooks:{ready(){let s=0;const t=["#fff","#333","#c0ff33","#546aaa","#000","tomato"];this.$setInterval(()=>{s=s+1,s===t.length-1&&(s=0),this.bg=t[s]},2e3)}}}),Xi=R.Component("Gradients",{template:`
    <Element>
      <Element :w="1920/4" h="1080" color="{top: '#0891b2', bottom: '#a5f3fc'}" />
      <Element :w="1920/4" h="1080" :x="1920/4" color="{left: '#dc2626',  right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 2" color="{top: '#0891b2', right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 3" color="{right: 'green', bottom: 'gold'}" />
    </Element>`}),Ui=R.Component("Transitions",{template:`
    <Element>
      <!-- simple, default transition -->
      <Element w="200" h="200" x="50" :y.transition="$y" color="#c4b5fd" />
      <!-- simple, default transition with object syntax -->
      <Element w="200" h="200" x="300" :y.transition="{value: $y}" color="#a78bfa" />
      <!-- transition with custom duration -->
      <Element
        w="200" h="200" x="550"
        :y.transition="{value: $y, duration: 1000, start: $start, end: $doneTransition3}" color="#8b5cf6"
        ref="bla"
      />
      <!-- transition with custom duration and wait -->
      <Element
        w="200" h="200" x="800"
        :y.transition="{value: $y, duration: 500, delay: 1000, start: $start, end: $finished}" color="#7c3aed"
      />
      <!-- transition with built-in easing function -->
      <Element w="200" h="200" x="1050" :y.transition="{value: $y, function: 'ease-in-out', end: $finished}" color="#6d28d9" />
      <!-- transition with custom duration and a built-in easing function -->
      <Element
        w="200" h="200" x="1300"
        :y.transition="{value: $y, duration: $duration, function: 'ease-in-out-back', end: $finished}" color="#5b21b6" />
      <!-- transition with custom duration and a custum bezier function -->
      <Element w="200" h="200" x="1550" :y.transition="{value: $y, duration: 800, function: 'cubic-bezier(1,-0.64,.39,1.44)'}" color="#4c1d95" />
    </Element>`,state(){return{y:50}},hooks:{ready(){this.$setTimeout(()=>{this.y=1080-50-200},2e3)}},methods:{doneTransition3(){this.$log.info("Transition 3 is done!")},start(s,t,e){this.$log.info("Start transition",s.nodeId,t,e)},finished(s,t,e){this.$log.info("Finished transition",s.nodeId,t,e)}}}),Hi=R.Component("Alpha",{template:`
    <Element>
      <Element y="100">
        <!-- hardcoded alpha values -->
        <Element w="200" h="200" x="100" color="#fff" alpha="0.2" />
        <Element w="200" h="200" x="320" color="#fff" alpha="0.4" />
        <Element w="200" h="200" x="540" color="#fff" alpha="0.6" />
        <Element w="200" h="200" x="760" color="#fff" alpha="0.8" />
        <Element w="200" h="200" x="980" color="#fff" alpha="1" />
      </Element>

      <!-- dynamic (but not reactive) alpha value -->
      <Element w="200" h="200" x="100" y="320" color="#fff" alpha="$alpha" />

      <!-- reactive alpha value -->
      <Element w="200" h="200" x="100" y="540" color="#fff" :alpha="$alpha" />

      <!-- reactive alpha value (with transition) -->
      <Element w="200" h="200" x="100" y="760" color="#fff" :alpha.transition="{value: $alpha, duration: 1000, function: 'ease-in-out-circ'}" />

      <Element w="428" h="234" x="1200" y="100" :src="$image" alpha="1" />
      <Element w="428" h="234" x="1300" :y="100 + 234 - 40" :src="$image" alpha=".4" />
      <Element w="428" h="234" x="1200" :y="100 + (234 * 2) - (40 * 2)" :src="$image" alpha=".1" />


      <Text x="400" y="400" alpha="0.2">Text with alpha applied directly</Text>

      <Element alpha="0.5" x="400" y="500">
        <Text>Text with alpha applied on parent element</Text>
      </Element>

    </Element>`,state(){return{alpha:.5,direction:"up",image:"assets/lightningbolt.png"}},hooks:{ready(){this.$setInterval(()=>{const s=this.direction==="up"?this.alpha+.2:this.alpha-.2;this.alpha=Math.max(Math.min(s,1),.1),this.alpha===1&&(this.direction="down"),this.alpha===.1&&(this.direction="up")},1400)}}}),ji=R.Component("Scaling",{template:`
    <Element>
      <!-- non scaled element of 150 -->
      <Element x="100" y="100" w="150" h="150" color="#64748b" />
      <!-- element of 100 scaled with 1.5 to 150 -->
      <Element x="300" y="100" w="100" h="100" color="#64748b" scale="1.5" />

      <!-- scaling with a dynamic value -->
      <Element x="100" y="400" w="100" h="100" color="#b45309" scale="$scale" />

      <!-- reactive scaling (with transition) -->
      <Element x="900" y="400" w="100" h="100" :src="$balloon" :scale.transition="{value: $scale, function: 'ease-in-out'}" />

      <!-- scaling with a nested element -->
      <Element x="300" y="600" w="100" h="100" color="#059669" :scale="$scale2">
        <Element x="10" y="10" h="60" w="80" color="#0369a1" />
      </Element>

      <!-- scaling with a nested element that also uses scaling -->
      <Element x="1500" y="600" w="100" h="100" color="#059669" :scale="$scale2">
        <Element x="10" y="10" h="60" w="80" color="#0369a1" :scale="$scale2 / 2" />
      </Element>

    </Element>`,state(){return{scale:2,direction:"up",balloon:"assets/balloon.png",scale2:1}},hooks:{ready(){this.$setInterval(()=>{const s=this.direction==="up"?this.scale+.5:0;this.scale=Math.max(Math.min(s,8),0),this.scale===8&&(this.direction="down"),this.scale===0&&(this.direction="up")},500),this.$setInterval(()=>{this.scale2=this.scale2===1?3:1},2e3)}}}),qi=R.Component("Rotation",{template:`
    <Element>

      <!-- hardcoded rotation value -->
      <Element y="70">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="0"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="10"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="20"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="30"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="40"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="50"/>
      </Element>

      <Element y="70" x="300">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="60"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="70"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="80"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="90"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="100"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="100"/>
      </Element>

      <Element y="70" x="600">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="110"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="120"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="130"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="140"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="150"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="160"/>
      </Element>

      <Element y="70" x="900">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="170"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="180"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="190"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="200"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="210"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="220"/>
      </Element>

      <Element y="70" x="1200">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="230"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="240"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="250"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="260"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="270"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="280"/>
      </Element>

      <Element y="70" x="1500">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="290"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="300"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="310"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="320"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="330"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="340"/>
      </Element>

      <!-- dynamic rotation value -->
      <Element x="200" y="200" w="400" h="400" color="#0891b2" rotation="$rotation1" />

      <!-- reactive rotation value -->
      <Element x="800" y="200" w="400" h="400" color="#0891b2" :rotation="$rotation2" />

      <!-- reactive rotation value animated -->
      <Element x="1400" y="200" w="400" h="400" color="#0891b2" :rotation.transition="$rotation3" />

    </Element>`,state(){return{rotation1:38,rotation2:0,rotation3:0}},hooks:{ready(){this.$setInterval(()=>{const s=this.rotation2+10;this.rotation2=s<=360?s:0},800),this.$setInterval(()=>{this.rotation3=Math.max(10,Math.min(720,this.rotation3*2)),this.rotation3===720&&(this.rotation3=0)},2e3)}}}),Gi=R.Component("KeyInput",{template:`
    <Element x="525" y="130">

      <Element w="200" h="200" :color="$focusColor" :x="$focusedX * 220" :y="$focusedY * 210" />

      <Element w="180" h="180" x="10" y="10" :color="$blockColor" />
      <Element w="180" h="180" x="230" y="10" :color="$blockColor" />
      <Element w="180" h="180" x="450" y="10" :color="$blockColor" />
      <Element w="180" h="180" x="670" y="10" :color="$blockColor" />

      <Element w="180" h="180" x="10" y="220" :color="$blockColor" />
      <Element w="180" h="180" x="230" y="220" :color="$blockColor" />
      <Element w="180" h="180" x="450" y="220" :color="$blockColor" />
      <Element w="180" h="180" x="670" y="220" :color="$blockColor" />

      <Element w="180" h="180" x="10" y="430" :color="$blockColor" />
      <Element w="180" h="180" x="230" y="430" :color="$blockColor" />
      <Element w="180" h="180" x="450" y="430" :color="$blockColor" />
      <Element w="180" h="180" x="670" y="430" :color="$blockColor" />

      <Element w="180" h="180" x="10" y="640" :color="$blockColor" />
      <Element w="180" h="180" x="230" y="640" :color="$blockColor" />
      <Element w="180" h="180" x="450" y="640" :color="$blockColor" />
      <Element w="180" h="180" x="670" y="640" :color="$blockColor" />

    </Element>`,state(){return{focusedX:0,focusedY:0,colorscheme:"yellow"}},computed:{blockColor(){return this.colorscheme==="yellow"?"#fef08a":"#bae6fd"},focusColor(){return this.colorscheme==="yellow"?"#facc15":"#38bdf8"}},input:{left(s){const t=this.focusedX-1;t===-1?this.parent.focus(s):this.focusedX=Math.max(t,0)},right(s){const t=this.focusedX+1;t===4?this.parent.focus(s):this.focusedX=Math.min(t,3)},up(){this.focusedY=Math.max(this.focusedY-1,0)},down(){this.focusedY=Math.min(this.focusedY+1,3)},enter(){this.colorscheme=this.colorscheme==="yellow"?"blue":"yellow"},any(s){const t=parseInt(s.key);isNaN(t)?this.parent.focus(s):(this.focusedX=Math.max(0,(t-1)%4),this.focusedY=Math.max(0,Math.ceil(t/4)-1))}}}),ft=["#64748b","#ef4444","#f97316","#84cc16","#14b8a6","#3b82f6"],ut=["Iron Man","Captain America","Thor","Hulk","Black Widow","Hawkeye","Scarlet Witch","Vision","Black Panther","Doctor Strange","Spider-Man","Ant-Man","Wasp","Captain Marvel","Falcon","Winter Soldier","War Machine","Quicksilver","Star-Lord","Gamora"],Ki=R.Component("Texts",{template:`
    <Element x="100" y="100">

      <Text content="Default text" @loaded="$textLoaded" />
      <Text content="123456" x="400" />

      <Text content="Text with a different fontsize" :size="$size" y="120" font="raleway" />
      <Text content="Text with a different color" size="50" :color="$color" y="250" />

      <!-- does the font have a bold and italic? -->
      <!--Text content="Bold and Italic text" size="50" color="#0369a1" y="350" style="italic" weight="bold" /-->

      <Text content="Letterspacing" size="50" color="#38bdf8" y="450" letterspacing="40" />

      <Element w="800" h="100" y="550" color="#94a3b8">
        <Text content="Text align center" size="50" y="15" color="#bae6fd" align="center" wordwrap="800" />
      </Element>

      <Element w="800" h="200" x="900" y="550" color="#94a3b8">
        <Text content="$longText" size="40" color="#bae6fd" wordwrap="800" maxlines="5" />
      </Element>

      <Text :content="$character" size="50" :color="$color" y="750" font="opensans" />
    </Element>`,state(){return{color:ft[0],size:10,character:ut[0],myText:"This is my test yeah",longText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ante non mauris commodo tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis mattis mi. Aliquam ultricies mi vel lobortis luctus. Ut non feugiat urna. Duis sed blandit dui. Donec venenatis, mauris at blandit malesuada, elit nibh scelerisque lacus, non tempus arcu mi at justo."}},hooks:{ready(){let s=0;this.$setInterval(()=>{s++,s>ft.length-1&&(s=0),this.color=ft[s],this.size=10*(s*2+1)},1e3);let t=0;this.$setInterval(()=>{t++,t>ut.length-1&&(t=0),this.character=ut[t]},1400)}},methods:{textLoaded(s){this.$log.info(`Image loaded with w: ${s.w} and h: ${s.h}`)}}}),Ve=["https://images.unsplash.com/photo-1690360994204-3d10cc73a08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80","https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"],Vi=R.Component("Images",{template:`
    <Element>
      <!-- local image -->
      <Element src="assets/lightningbolt.png" w="428" h="234" x="100" y="100" />

      <!-- remote image -->
      <Element
        src="https://images.unsplash.com/photo-1611148799269-63df34f63f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
        w="428" h="234" x="100" y="400"
      />

      <Element
        :src="$image"
        w="428" h="234" x="100" y="700"
        @loaded="$imageLoaded"
      />

      <!-- local image with color -->
      <Element color="{top: 'red', bottom: 'gold'}" src="assets/lightningbolt.png" w="428" h="234" x="600" y="100"  />

      <!-- applying clipping -->
      <Element x="600" y="400" w="428" h="234" :clipping="$clipping">
        <Element src="assets/lightningbolt.png" w="856" h="468" />
      </Element>

    </Element>`,state(){return{image:Ve[0],clipping:!0}},hooks:{ready(){this.$setInterval(()=>{this.image=this.image===Ve[0]?Ve[1]:Ve[0],this.clipping=!this.clipping},2e3)}},methods:{imageLoaded(s){this.$log.info(`Image loaded with w: ${s.w} and h: ${s.h}`)}}}),De=R.Component("Square",{template:`
    <Element w="$size" h="$size" color="#86198f" />
  `,props:[{key:"size",default:80}]}),To=R.Component("Card",{components:{Square:De},template:`
    <Element w="$w" h="$h" color="#0891b2">
      <Square x="80" y="80" />
      <Square x="20" y="20" size="40" />
    </Element>`,props:["size"],computed:{w(){return this.size==="large"?400:200},h(){return this.size==="large"?500:300}}}),Qi=R.Component("Components",{components:{Square:De,Card:To},template:`
    <Element>
      <!-- simple square component that takes a size (number) argument and maps it to w and h -->
      <Square x="100" y="100" size="50" />
      <Square x="100" y="200" size="100" />
      <Square x="100" y="350" size="200" />
      <!-- reactive (animated) x position for component -->
      <Square :x.transition="$x" y="600" size="50" />
      <!-- card component that takes a string size argument and also has a nested square component -->
      <Card x="500" y="100" />
      <Card x="500" y="500" size="large" />
    </Element>`,state(){return{x:100}},hooks:{ready(){this.$setInterval(()=>{this.x=this.x===100?250:100},2e3)}}}),q=["#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"],Zi=R.Component("ForLoop",{components:{Square:De},template:`
    <Element>
      <Element y="20">
        <Element :for="item in $collection1" w="80" h="80" x="$item" color="#4d7c0f" />
      </Element>

      <Element y="120">
        <!-- looping over an array with objects -->
        <Element :for="item in $collection2" w="80" h="80" :x="$item.x * $index" color="$item.color" key="$item.id" />
      </Element>

      <Element y="220">
        <!-- looping over an array empty array, adding items over time -->
        <Element :for="item in $collection3" w="80" h="80" :x="$item.x" color="$item.color" />
      </Element>

      <Element y="320">
        <Square :for="(item, index) in $collection2" :x="$item.x * $index" :ref="'square'+$index" :alpha="$alpha" />
      </Element>

      <Element y="420">
        <!-- looping over an array of components, adding items over time -->
        <Square :for="item in $collection3" :x="$item.x" key="$item.color" :alpha="$alpha" />

      </Element>

      <Element y="520">
        <!-- looping over an array and using a component state variable -->
        <Element :for="item in $collection1" w="80" h="80" :x="$item" color="#eab308" :alpha="$alpha" />
      </Element>

      <Element y="620">
        <!-- looping over an array and using a component state variable and passing a key -->
        <Element :for="item in $collection2" w="80" h="80" :x="$item.x" color="$item.color" :alpha="$alpha" key="$item.id" />
      </Element>

      <Element y="720">
        <!-- looping over an array and replacing that array with new items _with_ a key attribute-->
        <Element :for="item in $collection4" w="80" h="80" :x="$item.x" color="#06b6d4" key="$item.id" />
      </Element>

      <Element y="720" x="700">
        <!-- looping over an array and replacing that array with new items _without_ a key attribute-->
        <Element :for="item in $collection4" w="80" h="80" :x="$item.x" color="#8b5cf6" />
      </Element>


      <Element y="920">
        <!-- looping over an array and replacing that array with new items _with_ a key attribute-->
        <Square :for="item in $collection4" w="80" h="80" :x="$item.x" key="$item.id" />
      </Element>

      <Element y="920" x="700">
        <!-- looping over an array and replacing that array with new items _without_ a key attribute-->
        <Square :for="item in $collection4" w="80" h="80" :x="$item.x" />
      </Element>

    </Element>
  `,state(){return{collection1:[0,100,200,300,400,500],collection2:[{id:"block1",x:0,color:q[0]},{id:"block2",x:100,color:q[1]},{id:"block3",x:200,color:q[2]},{id:"block4",x:300,color:q[3]},{id:"block5",x:400,color:q[4]},{id:"block6",x:500,color:q[5]}],collection3:[],collection4:[{x:0,id:"one"},{x:200,id:"two"},{x:400,id:"three"}],alpha:.5}},hooks:{ready(){this.$setTimeout(()=>{this.collection2[0].color=q[5],this.collection2[1].color=q[4],this.collection2[2].color=q[3],this.collection2[3].color=q[2],this.collection2[4].color=q[1],this.collection2[5].color=q[0]},4e3);let s=0;const t=this.$setInterval(()=>{this.collection3.push({x:s*100,color:q[s]}),s++,s===q.length&&clearInterval(t)},1e3);this.$setTimeout(()=>{this.alpha=this.alpha===.5?1:.5},800),this.$setTimeout(()=>{this.collection4=[{x:100,id:"four"},{x:500,id:"five"}]},2e3)}}}),Ji=R.Component("Effects",{template:`
    <Element>
      <!-- rounded corner effect -->
      <Element
        w="160" h="160" x="40" y="40" color="#fb923c"
        :effects="[$shader('radius', {radius: 44})]"
      />

      <Element
        w="160" h="160" x="240" y="40" color="#d97706"
        :effects="[$shader('radius', {radius: 25})]"
      />

      <Element
        w="160" h="160" x="440" y="40" color="#b45309"
        :effects="[$shader('radius', {radius: 80})]"
      />

      <Element
        w="160" h="160" x="640" y="40" color="#78350f"
        :effects="[$shader('radius', {radius: 10})]"
      />

      <!-- reactive rounded corner effect -->
      <Element
        w="160" h="160" x="40" y="240" color="#65a30d"
        :effects="[$shader('radius', {radius: $radius})]"
      />

      <!-- nested rounded corner effects -->
      <Element
        w="300" h="300" x="40" y="440" color="#0c4a6e"
        :effects="[$shader('radius', {radius: 30})]"
      >
        <Element
          w="200" h="200" x="50" y="50" color="#0284c7"
          :effects="[$shader('radius', {radius: 40})]"
        >
          <Element
            w="100" h="100" x="50" y="50" color="#38bdf8"
            :effects="[$shader('radius', {radius: 50})]"
          >
            <Element
              w="40" h="40" x="30" y="30" color="#bae6fd"
              :effects="[$shader('radius', {radius: 20})]"
            >
            </Element>
          </Element>
        </Element>
      </Element>

      <Element
        w="160" h="160" x="840" y="40" color="#3b82f6"
        :effects="[$shader('radius', {radius: 10}), $shader('border', {width: 20, color: '#60a5fa'})]"
      />

      <Element
        w="160" h="160" x="1040" y="40" color="#500724"
        :effects="$effects"
      />
    </Element>`,state(){return{direction:"up",radius:0,effects:[this.shader("borderTop",{width:20,color:"#be123c"}),this.shader("borderBottom",{width:20,color:"#f43f5e"})]}},hooks:{ready(){this.$setInterval(()=>{const t=this.direction==="up"?this.radius+10:this.radius-10;this.radius=Math.max(Math.min(t,80),0),this.radius===80&&(this.direction="down"),this.radius===0&&(this.direction="up")},500);let s=0;this.$setInterval(()=>{s++,s%2?this.effects=[this.shader("borderLeft",{width:20,color:"#be123c"}),this.shader("borderRight",{width:20,color:"#f43f5e"})]:this.effects=[this.shader("borderTop",{width:20,color:"#be123c"}),this.shader("borderBottom",{width:20,color:"#f43f5e"})]},2e3)}}}),er=R.Component("ShowIf",{components:{Square:De},template:`
    <Element>

      <!-- hardcoded show values -->
      <Element y="40">

        <!-- should show -->
        <Element x="50" w="200" h="300" color="#bef264" show="true" />
        <!-- should not show -->
        <Element x="350" w="200" h="300" color="#bef264" show="false" />

        <!-- should show -->
        <Element x="650" w="200" h="300" color="#84cc16" show="1" />
        <!-- should not show -->
        <Element x="950" w="200" h="300" color="#84cc16" show="0" />

      </Element>

      <!-- dynamic show values -->
      <Element y="380">

        <!-- should show -->
        <Element x="50" w="200" h="300" color="#fde047" show="$showNr" />
        <!-- should not show -->
        <Element x="350" w="200" h="300" color="#fde047" show="$hideNr" />

        <!-- should show -->
        <Element x="650" w="200" h="300" color="#84cc16" show="$showBool" />
        <!-- should not show -->
        <Element x="950" w="200" h="300" color="#84cc16" show="$hideBool" />

      </Element>

      <!-- dynamic show value -->
      <Element y="720">

        <!-- should show / hide every 2 seconds -->
        <Element x="50" w="200" h="300" color="#5eead4" :show="$showHideToggle" />

      </Element>

      <!-- show on components! -->
      <Element y="40" x="1000">
        <!-- should show -->
        <Square show="true" />
        <!-- should not show -->
        <Square y="100" show="false" />
        <!-- should show / hide every 2 seconds -->
        <Square y="200" :show="$showHideToggle" />
      </Element>

    </Element>`,state(){return{showNr:1,hidNr:0,showBool:!0,hideBool:!1,showHideToggle:!0}},hooks:{ready(){this.$setInterval(()=>{this.showHideToggle=!this.showHideToggle},2e3),this.$setTimeout(()=>{this.showNr=0,this.hideNr=1,this.showBool=!1,this.hideBool=!0},4e3)}}}),tr=R.Component("Events",{template:`
    <Element x="400" y="360">

      <Element w="280" h="280" color="#e5e7eb" :x="$x" y="-5" />

      <Element w="250" h="250" x="10" y="10" color="$colors[0]" />
      <Element w="250" h="250" x="290" y="10" color="$colors[1]" />
      <Element w="250" h="250" x="570" y="10" color="$colors[2]" />
      <Element w="250" h="250" x="850" y="10" color="$colors[3]" />
    </Element>`,state(){return{count:0,colors:["#fbbf24","#a3e635","#22d3ee","#f472b6"]}},computed:{x(){return this.count*280-5}},hooks:{unfocus(){this.$emit("changeBackground")}},input:{left(s){const t=this.count-1;t===-1?this.parent.focus(s):this.count=Math.max(t,0)},right(s){const t=this.count+1;t===4?this.parent.focus(s):this.count=Math.min(t,3)},enter(){this.$emit("changeBackground",this.colors[this.count])}}}),or=R.Component("SlotCard",{template:`
    <Element
      w="300" h="500"
      :effects="[$shader('radius', {radius: 20}), $shader('border', {width: 6, color: '#e2e8f0'})]" color="{top: '#94a3b8', bottom: '#475569'}"
    >
      <Slot x="20" y="20" />
      <Text content="$label" wordwrap="260" x="20" y="400" align="center" />
    </Element>
  `,props:[{key:"label"}]}),sr=R.Component("NamedSlotCard",{template:`
    <Element
      w="700" h="300"
      :effects="[$shader('radius', {radius: 20}), $shader('border', {width: 6, color: '#e2e8f0'})]" color="{top: '#94a3b8', bottom: '#475569'}"
    >
      <Element x="20" y="20">
        <Text content="First slot" />
        <Slot y="40" ref="first" />
      </Element>

      <Element x="200" y="20">
        <Text content="Second slot"/>
        <Slot y="40" ref="second" />
      </Element>


      <Element x="480" y="20">
        <Text content="Third slot"/>
        <Slot y="40" ref="third"/>
      </Element>

    </Element>
  `}),ke=["#fff7ed","#fdba74","#f97316","#ea580c","#9a3412","#431407"],ir=R.Component("Components",{components:{SlotCard:or,NamedSlotCard:sr,Card:To,Square:De},template:`
    <Element>
      <SlotCard x="400" y="100" label="Element">
        <Element :color="$color" w="100" h="100"/>
      </SlotCard>

      <SlotCard x="800" y="100" label="Component">
        <Square size="200" y="50"  />
      </SlotCard>

      <SlotCard x="1200" y="100" label="Element & Component">
        <Element :color="$color" w="100" h="100" />
        <Square size="200" y="150" />
      </SlotCard>

      <Card x="400" y="700" size="small">
        <Element :color="$color" w="100" h="100" />
      </Card>

      <NamedSlotCard x="800" y="700">
        <Element color="#0891b2" x="10" y="140" w="80" h="60" slot="second" />
        <Element :color="$color" w="100" h="100" slot="third" />
        <Square size="100" slot="first" />
        <Element color="#4d7c0f" x="40" y="40" w="40" h="60" slot="second" />
      </NamedSlotCard>

    </Element>`,state(){return{color:ke[0]}},hooks:{ready(){this.$setInterval(()=>{const s=ke.indexOf(this.color)+1;this.color=s<=ke.length?ke[s]:ke[0]},600)}}}),Re=(s,t)=>Math.floor(Math.random()*(t-s+1)+s),rr=R.Component("Item",{template:`<Element
      src="assets/blits-b-small.png"
      w="96"
      h="168"
      :x.transition="{value: $x, duration: 2900}"
      :y.transition="{value: $y, duration: 2900}"
      :rotation.transition="{value: $rotation, duration: 2900}"
      :scale.transition="{value: $scale, duration: 1000}"
    />`,state(){return{x:Re(20,1560),y:Re(20,720),rotation:0,scale:.1}},hooks:{ready(){this.scale=1,this.$setInterval(()=>{this.scale=1,this.x=Re(20,1740),this.y=Re(20,900),this.rotation=Re(10,360)},3e3)}}}),nr=R.Component("Exponential",{components:{Item:rr},template:`<Element>
    <Item :for="item in $items" key="$item" />
  </Element>`,state(){return{items:[]}},hooks:{ready(){const s=this.$setInterval(()=>{for(let t=0;t<=Math.floor(this.items.length/10);t++)this.items.push(`item${this.items.length}`);this.$log.info("# items",this.items.length),this.items.length>100&&clearInterval(s)},2e3)}}}),ar=R.Component("FPScounter",{template:`
    <Element y="15" x="20">
      <Element>
        <Sprite image="assets/fps_sprite.png"w="43" h="25" map="$sprite" frame="fps" />
        <Element x="58" y="2">
          <Sprite image="assets/fps_sprite.png" x="0" h="20" w="20" map="$sprite" :frame="$fps[0]" />
          <Sprite image="assets/fps_sprite.png" x="18" h="20" w="20" map="$sprite" :frame="$fps[1]" />
          <Sprite image="assets/fps_sprite.png" x="36" h="20" w="20" map="$sprite" :frame="$fps[2]" />
        </Element>
      </Element>

      <Element x="150">
        <Sprite image="assets/fps_sprite.png" y="2" w="48" h="25" map="$sprite" frame="avg" />
        <Element x="63" y="2">
          <Sprite image="assets/fps_sprite.png" x="0" h="20" w="20" map="$sprite" :frame="$avgFps[0]" />
          <Sprite image="assets/fps_sprite.png" x="18" h="20" w="20" map="$sprite" :frame="$avgFps[1]" />
          <Sprite image="assets/fps_sprite.png" x="36" h="20" w="20" map="$sprite" :frame="$avgFps[2]" />
        </Element>
      </Element>


      <Element x="0" y="40" >
        <Sprite image="assets/fps_sprite.png" x="-2" w="47" h="25" map="$sprite" frame="min" />
        <Element x="58" y="2">
          <Sprite image="assets/fps_sprite.png" x="0" h="20" w="20" map="$sprite" :frame="$minFps[0]" />
          <Sprite image="assets/fps_sprite.png" x="18" h="20" w="20" map="$sprite" :frame="$minFps[1]" />
          <Sprite image="assets/fps_sprite.png" x="36" h="20" w="20" map="$sprite" :frame="$minFps[2]" />
        </Element>
      </Element>


      <Element x="150" y="40">
        <Sprite image="assets/fps_sprite.png" w="53" h="25" map="$sprite" frame="max" />
        <Element x="63" y="2">
          <Sprite image="assets/fps_sprite.png" x="0" h="20" w="20" map="$sprite" :frame="$maxFps[0]" />
          <Sprite image="assets/fps_sprite.png" x="18" h="20" w="20" map="$sprite" :frame="$maxFps[1]" />
          <Sprite image="assets/fps_sprite.png" x="36" h="20" w="20" map="$sprite" :frame="$maxFps[2]" />
        </Element>
      </Element>
    </Element>
    `,state(){return{sprite:{defaults:{y:1,w:20,h:20},frames:{false:{x:-1e3},0:{x:1},1:{x:23},2:{x:45},3:{x:67},4:{x:89},5:{x:111},6:{x:133},7:{x:155},8:{x:177},9:{x:199},avg:{x:221,w:48,h:25},fps:{x:271,w:43,h:25},max:{x:316,w:53,h:25},min:{x:371,w:47,h:25}}},fps:"-",avgFps:"-",minFps:"-",maxFps:"-"}},hooks:{init(){const s=[];let t=0,e=1e4,o=0,i=0,r=0,n=0,l=performance.now();const u=()=>{window.requestAnimationFrame(()=>{const h=performance.now();for(e<1e4&&l<=h-1e3&&(l=h,this.fps=t.toString().padStart(3,"0"),this.avgFps=i.toString().padStart(3,"0"),this.minFps=e.toString().padStart(3,"0"),this.maxFps=o.toString().padStart(3,"0"));s.length>0&&s[0]<=h-1e3;)s.shift();s.push(h),t=s.length,n>60&&(e=Math.min(t,e),o=Math.max(t,o),r+=t,i=Math.round(r/(n-60))),n++,u()})};u()}}}),lr=R.Application({components:{FPScounter:ar},template:`
    <Element w="1920" h="1080" :color="$backgroundColor">
      <RouterView />
      <FPScounter x="1610" />
    </Element>`,state(){return{backgroundColor:"#1e293b"}},routes:[{path:"/",component:wi,options:{keepAlive:!0}},{path:"/demos/loading",component:()=>lo(()=>import("./Loading-57b53968.js"),["assets/Loading-57b53968.js","assets/settings-b6f7d147.js"])},{path:"/demos/intro",component:()=>new Promise(s=>{s(bi)})},{path:"/demos/theming",component:Ci},{path:"/demos/tmdb",component:Ai},{path:"/demos/sprites",component:Bi},{path:"/demos/focushandling",component:Yi},{path:"/examples/positioning",component:Oi},{path:"/examples/colors",component:Wi},{path:"/examples/gradients",component:Xi},{path:"/examples/transitions",component:Ui},{path:"/examples/alpha",component:Hi},{path:"/examples/scaling",component:ji},{path:"/examples/rotation",component:qi},{path:"/examples/keyinput",component:Gi},{path:"/examples/texts",component:Ki},{path:"/examples/images",component:Vi},{path:"/examples/components",component:Qi},{path:"/examples/forloop",component:Zi},{path:"/examples/effects",component:Ji},{path:"/examples/showif",component:er},{path:"/examples/events",component:tr},{path:"/examples/slots",component:ir},{path:"/benchmarks/exponential",component:nr}],hooks:{ready(){this.$listen("changeBackground",s=>{this.backgroundColor=s?s+80:"#1e293b"})}},input:{escape(){this.quit()},back(){this.$router.to("/")}}});R.Launch(lr,"app",{w:1920,h:1080,multithreaded:!1,debugLevel:1,fontLoader:ii,reactivityMode:"Proxy",fonts:[{family:"lato",type:"msdf",png:"/fonts/Lato-Regular.msdf.png",json:"/fonts/Lato-Regular.msdf.json"},{family:"raleway",type:"msdf",png:"/fonts/Raleway-ExtraBold.msdf.png",json:"/fonts/Raleway-ExtraBold.msdf.json"},{family:"opensans",type:"web",file:"/fonts/OpenSans-Medium.ttf"}]});export{R as B,De as S};
