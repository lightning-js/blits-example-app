var Yo=Object.defineProperty;var Xo=(r,t,e)=>t in r?Yo(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var a=(r,t,e)=>(Xo(r,typeof t!="symbol"?t+"":t,e),e);import{s as h,a as _,E as qe,g as jo,m as Xt,W as Ge,b as de,T as ao,C as Wo,S as Ho,i as Uo,c as jt,d as lo,B as qo,e as Go,f as Ko,h as pt,j as Wt,k as co,l as Vo,n as Qo,o as Zo,p as Ft}from"./settings-27783f3c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class pe extends Error{constructor(t,e,o){super(`TemplateParseError: ${t}`),this.name=e,this.context=o}}const Jo=(r="")=>{let t=0,e=[],o=null,s=0;const i=/^<\/?([a-zA-Z0-9_\-.]+)\s*/,n=/^\s*(\/?>)\s*/,l=/^([A-Za-z0-9:.\-_@]+)=\s*(["'])/,d=/^<>\s*/,c=/^\s*(<\/>)\s*/,f=()=>{r=x(r);try{return m(y),C(e)}catch(b){return b instanceof pe?console.error(`${b.message} | ${b.name}`):console.error(b),null}},m=b=>{t>=r.length||b()},x=b=>b.replace(/<!--.*?-->/gms,"").replace(/\r?\n\s*\r\n/gm," ").replace(/\r?\n\s*(\S)/gm," $1").replace(/\r?\n/g,"").trim(),u=b=>{const $=r.slice(t).match(b);return $&&(t+=$[0].length),$},y=()=>{u(d)?(e.push({type:null,[h.type]:"opening",[h.level]:s}),s++,m(y)):m(g)},g=()=>{u(c)?(s--,e.push({type:null,[h.type]:"closing",[h.level]:s}),m(y)):m(w)},w=()=>{const b=u(i);if(b)b[0].startsWith("</")?(s--,o={type:b[1],[h.type]:"closing",[h.level]:s}):(o={type:b[1],[h.type]:"opening",[h.level]:s},s++),m(p);else throw new pe("InvalidTag",r.slice(t))},p=()=>{const b=u(n);if(b){if(b[1]==="/>"){if(o[h.type]==="closing")throw new pe("InvalidClosingTag",r.slice(t-10));o[h.type]="self-closing",s--}if(o[h.type]==="opening"){const $=r.slice(t,r.indexOf("<",t));$&&(o.content=$,t+=$.length)}e.push(o),m(y)}else m(M)},M=()=>{const b=u(l);if(b){const $=b[2],R=new RegExp(`^(.*?)${$}\\s*`),v=u(R);if(v){const S=O(b[1],v[1]);o[S.name]=S.value,m(p)}else throw new pe("MissingOrInvalidAttributeValue",r.slice(t))}else throw new pe("InvalidAttribute",r.slice(t))},O=(b,$)=>{if(b.includes(".")){const[R,v]=b.split(".");return{name:R,value:`{${v}: ${$}}`}}return{name:b,value:$}},C=b=>{let $=[],R=!1,v={children:[]},S=v;for(let F=0;F<b.length;F++){let E=b[F];if(E[h.level]===0&&E[h.type]!=="closing"){if(R)throw new pe("MultipleTopLevelTags",A(E));R=!0}if(E[h.type]==="opening")$.push({[h.level]:E[h.level],[h.type]:E[h.type],type:E.type,parent:S});else if(E[h.type]==="closing"){const D=$.length===0;let H=!1,le=!1;if(D||(H=$[$.length-1][h.level]!==E[h.level],le=$[$.length-1].type!==E.type),D||H||le)throw new pe("MismatchedClosingTag",A(E));S=$.pop().parent}const T={...E};delete T[h.type],delete T[h.level],E[h.type]==="opening"?(F+1<b.length&&b[F+1][h.type]!=="closing"&&(T.children=[]),S.children.push(T),S=T):E[h.type]==="self-closing"&&S.children.push(T)}if($.length>0){const F=$.map(E=>A(E)).join(", ");throw new pe("UnclosedTags",F)}function A(F){return`${F.type||"empty-tag"}[${F[h.type]}] at level ${F[h.level]}`}return v};return f()};let z;function er(r={children:[]}){const t={renderCode:["const elms = []"],effectsCode:[],context:{props:[],components:this.components}};return z=-1,fo.call(t,r),t.renderCode.push("return elms"),{render:new Function("parent","component","context",t.renderCode.join(`
`)),effects:t.effectsCode.map(e=>new Function("component","elms","context",e)),context:t.context}}const ct=function(r,t=!1,e={key:!1,component:"component.",forceEffect:!1}){const o=e.forceEffect?this.effectsCode:this.renderCode;t&&o.push(`parent = ${t}`),"key"in r&&(e.key=ze(r.key,e.component));const s=e.key?`elms[${z}][${e.key}]`:`elms[${z}]`;e.key&&o.push(`
      elms[${z}] = elms[${z}] || {}
    `),o.push(`
    if(!${s}) {
      ${s} = this.element({componentId: component[Symbol.for('id')], parent: parent || 'root'})
    }
    const elementConfig${z} = {}
  `);const i=r.children;delete r.children,Object.keys(r).forEach(n=>{if(n==="type"){r[n]==="Slot"&&o.push(`elementConfig${z}[Symbol.for('isSlot')] = true`);return}n==="slot"&&o.push(`
        elementConfig${z}['parent'] = component[Symbol.for('slots')].filter(slot => slot.ref === '${r.slot}').shift() || component[Symbol.for('slots')][0] || parent
      `),uo(n)?this.effectsCode.push(`${s}.set('${n.substring(1)}', ${ze(r[n],e.component)})`):o.push(`elementConfig${z}['${n}'] = ${At(r[n],n,e.component)}`)}),e.holder===!0&&o.push(`
    if(typeof cmp${z} !== 'undefined') {
      for(key in cmp${z}.config.props) {
        delete  elementConfig${z}[cmp${z}.config.props[key]]
      }
    }
    `),o.push(`
    if(!${s}.nodeId) {
      ${s}.populate(elementConfig${z})
    }
  `),i&&fo.call(this,{children:i},`elms[${z}]`)},ho=function(r,t=!1,e={key:!1,component:"component.",forceEffect:!1,holder:!1}){const o=e.forceEffect?this.effectsCode:this.renderCode;o.push(`
    const cmp${z} =
      (context.components && context.components['${r.type}']) ||
      component[Symbol.for('components')]['${r.type}']
  `),"key"in r&&(e.key=ze(r.key,e.component));const s=r.children;delete r.children,ct.call(this,r,t,{...e,holder:!0}),t=e.key?`elms[${z}][${e.key}]`:`elms[${z}]`,z++;const i=e.key?`elms[${z}][${e.key}]`:`elms[${z}]`;e.key&&o.push(`
      elms[${z}] = elms[${z}] || {}
    `),t&&o.push(`parent = ${t}`),o.push(`const props${z} = {}`),Object.keys(r).forEach(n=>{n!=="type"&&(uo(n)?(this.effectsCode.push(`
        ${i}[Symbol.for('props')]['${n.substring(1)}'] = ${ze(r[n],e.component)}`),o.push(`props${z}['${n.substring(1)}'] = ${ze(r[n],e.component)}`)):o.push(`props${z}['${n}'] = ${At(r[n],n,e.component)}`))}),o.push(`
    if(!${i}) {
      ${i} = (context.components && context.components['${r.type}'] || component[Symbol.for('components')]['${r.type}'] || (() => { console.log('component ${r.type} not found')})).call(null, {props: props${z}}, ${t}, component)
      if (${i}[Symbol.for('slots')][0]) {
        parent = ${i}[Symbol.for('slots')][0]
        component = ${i}
      } else {
        parent = ${i}[Symbol.for('children')][0]
      }
    }
  `),z++,ct.call(this,{children:s},!1,{...e})},tr=function(r,t){const e=r[":for"];delete r[":for"];const s=/(.+)\s+in\s+(.+)/gi.exec(e),[i,n="index"]=s[1].replace("(","").replace(")","").split(/\s*,\s*/),l={renderCode:[],effectsCode:[],context:{props:[],components:this.components}};t&&l.renderCode.push(`parent = ${t}`),l.renderCode.push(`
    const collection = ${At(s[2],":for")}
    const keys = []
    for(let __index = 0; __index < collection.length; __index++) {
      parent = ${t}
      const scope = Object.assign(component, {
        key: Math.random(),
        ${n}: __index,
        ${i}: collection[__index]
      })
    `),"key"in r?l.renderCode.push(`
      keys.push(${ze(r.key,"scope.")})
    `):l.renderCode.push(`
      keys.push(scope.key.toString())
    `),r.type==="Element"||r.type==="Slot"?ct.call(l,r,t,{key:"scope.key",component:"scope.",forceEffect:!1}):ho.call(l,r,!1,{key:"scope.key",component:"scope.",forceEffect:!1}),l.renderCode=l.renderCode.concat(l.effectsCode),l.renderCode.push("}"),l.renderCode.push(`
    if(elms[${z}]) {
      Object.keys(elms[${z}]).forEach(key => {
        if(keys.indexOf(key) === -1) {
          elms[${z}][key].delete && elms[${z}][key].delete()
          elms[${z}][key].destroy && elms[${z}][key].destroy()
          delete elms[${z}][key]
        }
      })
    }
  `),this.effectsCode.push(l.renderCode.join(`
`))},fo=function(r,t=!1){r.children&&r.children.forEach(e=>{z++,Object.keys(e).indexOf(":for")>-1?tr.call(this,e,t):e.type==="Element"||e.type==="Slot"?ct.call(this,e,t):ho.call(this,e,t)})},ze=(r,t="component.")=>{const e=/('.*?')+/gi,o=/\$/gi,s=r.matchAll(e),i=[];let n=0;for(const l of s)i.push(l[0]),r=r.replace(l[0],`[@@REPLACEMENT${n}@@]`),n++;return r=r.replace(o,t),i.forEach((l,d)=>{r=r.replace(`[@@REPLACEMENT${d}@@]`,l)}),r},At=(r="",t=!1,e="component.")=>{let o;if(t==="content")r.startsWith("$")?o=`${e}${r.replace("$","")}`:o=`'${or(r,e)}'`;else if(t!=="color"&&!isNaN(parseFloat(r))){if(o=parseFloat(r),r.endsWith("%")){const i={w:"width",width:"width",x:"width",h:"height",height:"height",y:"height"}[t];i&&(o=`parent.node.${i} * (${o} / 100)`)}}else if(r.toLowerCase()==="true")o=!0;else if(r.toLowerCase()==="false")o=!1;else if(t.startsWith("@")&&r){const s=e.slice(0,-1);o=`${s}['${r.replace("$","")}'] && ${s}['${r.replace("$","")}'].bind(${s})`}else r.startsWith("$")?o=`${e}${r.replace("$","")}`:o=`"${r}"`;return o},uo=r=>r.startsWith(":"),or=(r,t)=>{const e=/\{\{\s*(\$\S+)\s*\}\}/g,o=[...r.matchAll(e)];if(o.length)for(let[s,i]of o)r=r.replace(s,`${i.replace("$",`'+${t}`)}+'`);return r};class po{constructor(t){a(this,"releaseCallback");this.releaseCallback=t}}class rr extends po{constructor(e,o){super(e);a(this,"textureMap",new Map);a(this,"zeroReferenceTextureSet",new Set);a(this,"options");this.options={textureCleanupIntervalMs:o.textureCleanupIntervalMs??1e4,textureCleanupAgeThreadholdMs:o.textureCleanupAgeThreadholdMs??6e4},setInterval(()=>{const s=Date.now(),i=this.options.textureCleanupAgeThreadholdMs;for(const n of this.zeroReferenceTextureSet)s-n.lastUpdate>i&&(this.releaseCallback(n.id),this.textureMap.delete(n.id),this.zeroReferenceTextureSet.delete(n))},this.options.textureCleanupIntervalMs)}registerTexture(e){var s;const o=(s=e.options)==null?void 0:s.id;if(_(o,"Texture must have an id to be registered"),!this.textureMap.has(o)){const i={id:o,nodeRefCount:0,lastUpdate:Date.now()};this.textureMap.set(o,i),this.zeroReferenceTextureSet.add(i)}}incrementTextureRefCount(e){var i;const o=(i=e.options)==null?void 0:i.id;_(o,"Texture must have an id to be registered");let s=this.textureMap.get(o);s||(this.registerTexture(e),s=this.textureMap.get(o)),_(s,"Texture must have been registered"),e.txType==="SubTexture"&&this.incrementTextureRefCount(e.props.texture),s.nodeRefCount++,s.lastUpdate=Date.now(),this.zeroReferenceTextureSet.has(s)&&this.zeroReferenceTextureSet.delete(s)}decrementTextureRefCount(e){var i;const o=(i=e.options)==null?void 0:i.id;_(o,"Texture must have an id to be registered");const s=this.textureMap.get(o);_(s,"Texture must have been registered"),s.nodeRefCount--,s.lastUpdate=Date.now(),s.nodeRefCount===0&&this.zeroReferenceTextureSet.add(s),e.txType==="SubTexture"&&this.decrementTextureRefCount(e.props.texture)}}class sr extends po{constructor(e){super(e);a(this,"registry");this.registry=new FinalizationRegistry(e)}registerTexture(e){var o,s;_((o=e.options)==null?void 0:o.id,"Texture must have an ID to be registered"),this.registry.register(e,(s=e.options)==null?void 0:s.id)}incrementTextureRefCount(){}decrementTextureRefCount(){}}class ir{constructor(t,e,o){a(this,"root",null);a(this,"driver");a(this,"canvas");a(this,"settings");a(this,"nodes",new Map);a(this,"nextTextureId",1);a(this,"textureTracker");const s={appWidth:t.appWidth||1920,appHeight:t.appHeight||1080,deviceLogicalPixelRatio:t.deviceLogicalPixelRatio||1,devicePhysicalPixelRatio:t.devicePhysicalPixelRatio||window.devicePixelRatio,clearColor:t.clearColor??0,coreExtensionModule:t.coreExtensionModule||null,experimental_FinalizationRegistryTextureUsageTracker:t.experimental_FinalizationRegistryTextureUsageTracker??!1,textureCleanupOptions:t.textureCleanupOptions||{}};this.settings=s;const{appWidth:i,appHeight:n,deviceLogicalPixelRatio:l,devicePhysicalPixelRatio:d}=s,c=g=>{this.driver.releaseTexture(g)},f=s.experimental_FinalizationRegistryTextureUsageTracker&&typeof FinalizationRegistry=="function";this.textureTracker=f?new sr(c):new rr(c,this.settings.textureCleanupOptions);const m=i*l,x=n*l;this.driver=o;const u=document.createElement("canvas");this.canvas=u,u.width=m*d,u.height=x*d,u.style.width=`${m}px`,u.style.height=`${x}px`;let y;if(typeof e=="string"?y=document.getElementById(e):y=e,!y)throw new Error("Could not find target element");o.onCreateNode=g=>{this.nodes.set(g.id,g)},o.onBeforeDestroyNode=g=>{this.nodes.delete(g.id)},y.appendChild(u)}async init(){await this.driver.init(this,this.settings,this.canvas),this.root=this.driver.getRootNode()}createNode(t){return this.driver.createNode(this.resolveNodeDefaults(t))}createTextNode(t){return this.driver.createTextNode({...this.resolveNodeDefaults(t),text:t.text??"",textRendererOverride:t.textRendererOverride??null,fontSize:t.fontSize??16,fontFamily:t.fontFamily??"sans-serif",fontStyle:t.fontStyle??"normal",fontWeight:t.fontWeight??"normal",fontStretch:t.fontStretch??"normal",textAlign:t.textAlign??"left",contain:t.contain??"none",scrollable:t.scrollable??!1,scrollY:t.scrollY??0,offsetY:t.offsetY??0,letterSpacing:t.letterSpacing??0,debug:t.debug??{}})}resolveNodeDefaults(t){const e=t.color??4294967295,o=t.colorTl??t.colorTop??t.colorLeft??e,s=t.colorTr??t.colorTop??t.colorRight??e,i=t.colorBl??t.colorBottom??t.colorLeft??e,n=t.colorBr??t.colorBottom??t.colorRight??e;return{x:t.x??0,y:t.y??0,width:t.width??0,height:t.height??0,alpha:t.alpha??1,clipping:t.clipping??!1,color:e,colorTop:t.colorTop??e,colorBottom:t.colorBottom??e,colorLeft:t.colorLeft??e,colorRight:t.colorRight??e,colorBl:i,colorBr:n,colorTl:o,colorTr:s,zIndex:t.zIndex??0,zIndexLocked:t.zIndexLocked??0,parent:t.parent??null,texture:t.texture??null,shader:t.shader??null,src:t.src??"",scale:t.scale??null,scaleX:t.scaleX??t.scale??1,scaleY:t.scaleY??t.scale??1,mount:t.mount??0,mountX:t.mountX??t.mount??0,mountY:t.mountY??t.mount??0,pivot:t.pivot??.5,pivotX:t.pivotX??t.pivot??.5,pivotY:t.pivotY??t.pivot??.5,rotation:t.rotation??0}}destroyNode(t){return this.driver.destroyNode(t)}createTexture(t,e,o){const s=this.nextTextureId++,i={descType:"texture",txType:t,props:e,options:{...o,id:s}};return this.textureTracker.registerTexture(i),i}createShader(t,e){return{descType:"shader",shType:t,props:e}}getNodeById(t){return this.nodes.get(t)||null}toggleFreeze(){throw new Error("Not implemented")}advanceFrame(){throw new Error("Not implemented")}rerender(){throw new Error("Not implemented")}}class nr extends qe{constructor(e,o,s){super();a(this,"node");a(this,"props");a(this,"settings");a(this,"propStartValues",{});a(this,"restoreValues",{});a(this,"progress",0);a(this,"timingFunction");this.node=e,this.props=o,this.settings=s,this.propStartValues={},Object.keys(o).forEach(i=>{this.propStartValues[i]=e[i]}),this.timingFunction=i=>i,s.easing&&typeof s.easing=="string"&&(this.timingFunction=jo(s.easing))}reset(){this.progress=0,this.update(0)}restore(){this.reset(),Object.keys(this.props).forEach(e=>{this.node[e]=this.propStartValues[e]})}reverse(){this.progress=0,Object.keys(this.props).forEach(e=>{const o=this.props[e],s=this.propStartValues[e];this.props[e]=s,this.propStartValues[e]=o}),this.settings.loop||(this.settings.stopMethod=!1)}applyEasing(e,o,s){return(this.timingFunction(e)||e)*(s-o)+o}update(e){const{duration:o,loop:s,easing:i}=this.settings;if(!o){this.emit("finished",{});return}this.progress+=e/o,this.progress>1&&(this.progress=s?0:1,this.emit("finished",{})),Object.keys(this.props).forEach(n=>{const l=this.props[n],d=this.propStartValues[n],c=l;if(n.indexOf("color")!==-1){const f=i?this.timingFunction(this.progress)||this.progress:this.progress,m=Xt(d,c,f);this.node[n]=i?m:Xt(d,c,this.progress)}else this.node[n]=i?this.applyEasing(this.progress,d,c):d+(c-d)*this.progress})}}class ar{constructor(t,e){a(this,"manager");a(this,"animation");a(this,"stoppedPromise",null);a(this,"stoppedResolve",null);a(this,"state");this.manager=t,this.animation=e,this.state="stopped"}start(){return this.makeStoppedPromise(),this.animation.once("finished",this.finished.bind(this)),this.manager.activeAnimations.has(this.animation)||this.manager.registerAnimation(this.animation),this.state="running",this}stop(){return this.manager.unregisterAnimation(this.animation),this.stoppedResolve!==null&&(this.stoppedResolve(),this.stoppedResolve=null),this.animation.reset(),this.state="stopped",this}pause(){return this.manager.unregisterAnimation(this.animation),this.state="paused",this}restore(){return this.stoppedResolve=null,this.animation.restore(),this}waitUntilStopped(){this.makeStoppedPromise();const t=this.stoppedPromise;return _(t),t}makeStoppedPromise(){this.stoppedResolve===null&&(this.stoppedPromise=new Promise(t=>{this.stoppedResolve=t}))}finished(){_(this.stoppedResolve);const{loop:t,stopMethod:e}=this.animation.settings;if(e==="reverse"){this.animation.reverse(),this.start();return}this.stoppedResolve(),this.stoppedResolve=null,!t&&this.manager.unregisterAnimation(this.animation)}}const X=0,j=3,U=6,Y=1,W=4,K=7,re=2,se=5,ie=8;class ee{constructor(t){a(this,"data");t?(this.data=new Float32Array(9),this.data[X]=t[0],this.data[j]=t[3],this.data[U]=t[6],this.data[Y]=t[1],this.data[W]=t[4],this.data[K]=t[7],this.data[re]=t[2],this.data[se]=t[5],this.data[ie]=t[8]):this.data=new Float32Array(9)}static get temp(){return lr}static multiply(t,e,o){const s=t.data[X]*e.data[X]+t.data[j]*e.data[Y]+t.data[U]*e.data[re],i=t.data[X]*e.data[j]+t.data[j]*e.data[W]+t.data[U]*e.data[se],n=t.data[X]*e.data[U]+t.data[j]*e.data[K]+t.data[U]*e.data[ie],l=t.data[Y]*e.data[X]+t.data[W]*e.data[Y]+t.data[K]*e.data[re],d=t.data[Y]*e.data[j]+t.data[W]*e.data[W]+t.data[K]*e.data[se],c=t.data[Y]*e.data[U]+t.data[W]*e.data[K]+t.data[K]*e.data[ie],f=t.data[re]*e.data[X]+t.data[se]*e.data[Y]+t.data[ie]*e.data[re],m=t.data[re]*e.data[j]+t.data[se]*e.data[W]+t.data[ie]*e.data[se],x=t.data[re]*e.data[U]+t.data[se]*e.data[K]+t.data[ie]*e.data[ie];return o||(o=new ee),o.data[X]=s,o.data[j]=i,o.data[U]=n,o.data[Y]=l,o.data[W]=d,o.data[K]=c,o.data[re]=f,o.data[se]=m,o.data[ie]=x,o}static identity(t){return t||(t=new ee),t.data[X]=1,t.data[j]=0,t.data[U]=0,t.data[Y]=0,t.data[W]=1,t.data[K]=0,t.data[re]=0,t.data[se]=0,t.data[ie]=1,t}static translate(t,e,o){return o||(o=new ee),o.data[X]=1,o.data[j]=0,o.data[U]=t,o.data[Y]=0,o.data[W]=1,o.data[K]=e,o.data[re]=0,o.data[se]=0,o.data[ie]=1,o}static scale(t,e,o){return o||(o=new ee),o.data[X]=t,o.data[j]=0,o.data[U]=0,o.data[Y]=0,o.data[W]=e,o.data[K]=0,o.data[re]=0,o.data[se]=0,o.data[ie]=1,o}static rotate(t,e){const o=Math.cos(t),s=Math.sin(t);return e||(e=new ee),e.data[X]=o,e.data[j]=-s,e.data[U]=0,e.data[Y]=s,e.data[W]=o,e.data[K]=0,e.data[re]=0,e.data[se]=0,e.data[ie]=1,e}static copy(t,e,o){return e||(e=new ee),e.data[0]=t.data[0],e.data[1]=t.data[1],e.data[2]=t.data[2],e.data[3]=t.data[3],e.data[4]=t.data[4],e.data[5]=t.data[5],e.data[6]=t.data[6],e.data[7]=t.data[7],e.data[8]=t.data[8],e}translate(t,e){return this.data[U]=this.data[X]*t+this.data[j]*e+this.data[U],this.data[K]=this.data[Y]*t+this.data[W]*e+this.data[K],this}scale(t,e){return this.data[X]=this.data[X]*t,this.data[j]=this.data[j]*e,this.data[Y]=this.data[Y]*t,this.data[W]=this.data[W]*e,this}rotate(t){if(t===0||!(t%Math.PI*2))return this;const e=Math.cos(t),o=Math.sin(t),s=this.data[X]*e+this.data[j]*o,i=this.data[j]*e-this.data[X]*o,n=this.data[Y]*e+this.data[W]*o,l=this.data[W]*e-this.data[Y]*o;return this.data[X]=s,this.data[j]=i,this.data[Y]=n,this.data[W]=l,this}multiply(t){return ee.multiply(this,t,this)}get tx(){return this.data[U]}get ty(){return this.data[K]}get ta(){return this.data[X]}get tb(){return this.data[j]}get tc(){return this.data[Y]}get td(){return this.data[W]}transformPoint(t,e){return[this.data[X]*t+this.data[j]*e+this.data[U],this.data[Y]*t+this.data[W]*e+this.data[Y]]}}const lr=new ee;class Lt extends qe{constructor(e,o){super();a(this,"stage");a(this,"children",[]);a(this,"props");a(this,"recalculationType",6);a(this,"hasUpdates",!0);a(this,"globalTransform");a(this,"scaleRotateTransform");a(this,"localTransform");a(this,"isComplex",!1);a(this,"onTextureLoaded",(e,o)=>{this.emit("loaded",{type:"texture",dimensions:o})});a(this,"onTextureFailed",(e,o)=>{this.emit("failed",{type:"texture",error:o})});this.stage=e,this.props={...o,parent:null},this.parent=o.parent,this.updateScaleRotateTransform()}loadTexture(e,o,s=null){this.props.texture&&this.unloadTexture();const{txManager:i}=this.stage,n=i.loadTexture(e,o,s);this.props.texture=n,this.props.textureOptions=s,queueMicrotask(()=>{n.state==="loaded"?this.onTextureLoaded(n,n.dimensions):n.state==="failed"&&this.onTextureFailed(n,n.error),n.on("loaded",this.onTextureLoaded),n.on("failed",this.onTextureFailed)})}unloadTexture(){this.props.texture&&(this.props.texture.off("loaded",this.onTextureLoaded),this.props.texture.off("failed",this.onTextureFailed)),this.props.texture=null,this.props.textureOptions=null}loadShader(e,o){const s=this.stage.renderer.getShaderManager();_(s);const{shader:i,props:n}=s.loadShader(e,o);this.props.shader=i,this.props.shaderProps=n}setHasUpdates(){if(!this.props.alpha)return;this.hasUpdates=!0;let e=this==null?void 0:this.props.parent;for(;e;)e.hasUpdates=!0,e=e==null?void 0:e.props.parent}setRecalculationType(e){this.recalculationType|=e,this.setHasUpdates()}updateScaleRotateTransform(){this.setRecalculationType(4),this.scaleRotateTransform=ee.rotate(this.props.rotation,this.scaleRotateTransform).scale(this.props.scaleX,this.props.scaleY),this.updateLocalTransform()}updateLocalTransform(){_(this.scaleRotateTransform),this.setRecalculationType(2);const e=this.props.pivotX*this.props.width,o=this.props.pivotY*this.props.height,s=this.props.mountX*this.props.width,i=this.props.mountY*this.props.height;this.localTransform=ee.translate(e-s+this.props.x,o-i+this.props.y,this.localTransform).multiply(this.scaleRotateTransform).translate(-e,-o)}update(e){var s;_(this.localTransform);const o=(s=this.parent)==null?void 0:s.globalTransform;o?this.globalTransform=ee.copy(o,this.globalTransform).multiply(this.localTransform):this.globalTransform=ee.copy(this.localTransform,this.globalTransform),this.children.length&&this.children.forEach(i=>{i.update(e)}),this.hasUpdates=!1,this.recalculationType=0}renderQuads(e,o){const{width:s,height:i,colorTl:n,colorTr:l,colorBl:d,colorBr:c,texture:f,textureOptions:m,shader:x,shaderProps:u}=this.props,{zIndex:y,worldAlpha:g,globalTransform:w}=this;_(w),e.addRenderable({width:s,height:i,colorTl:n,colorTr:l,colorBl:d,colorBr:c,texture:f,textureOptions:m,zIndex:y,shader:x,shaderProps:u,alpha:g,clippingRect:o,tx:w.tx,ty:w.ty,ta:w.ta,tb:w.tb,tc:w.tc,td:w.td})}get id(){return this.props.id}get x(){return this.props.x}set x(e){this.props.x!==e&&(this.props.x=e,this.updateLocalTransform())}get absX(){var e,o,s;return this.props.x+(((e=this.props.parent)==null?void 0:e.absX)||((s=(o=this.props.parent)==null?void 0:o.globalTransform)==null?void 0:s.tx)||0)}get absY(){var e;return this.props.y+(((e=this.props.parent)==null?void 0:e.absY)??0)}get y(){return this.props.y}set y(e){this.props.y!==e&&(this.props.y=e,this.updateLocalTransform())}get width(){return this.props.width}set width(e){this.props.width!==e&&(this.props.width=e,this.updateLocalTransform())}get height(){return this.props.height}set height(e){this.props.height!==e&&(this.props.height=e,this.updateLocalTransform())}get scale(){return this.scaleX}set scale(e){this.scaleX=e,this.scaleY=e}get scaleX(){return this.props.scaleX}set scaleX(e){this.props.scaleX!==e&&(this.props.scaleX=e,this.updateScaleRotateTransform())}get scaleY(){return this.props.scaleY}set scaleY(e){this.props.scaleY!==e&&(this.props.scaleY=e,this.updateScaleRotateTransform())}get worldScaleX(){var e;return this.props.scaleX*(((e=this.props.parent)==null?void 0:e.worldScaleX)??1)||this.props.scaleX}get worldScaleY(){var e;return this.props.scaleY*(((e=this.props.parent)==null?void 0:e.worldScaleY)??1)||this.props.scaleY}get mount(){return this.props.mount}set mount(e){this.props.mountX=e,this.props.mountY=e,this.props.mount=e,this.updateLocalTransform()}get mountX(){return this.props.mountX}set mountX(e){this.props.mountX=e,this.updateLocalTransform()}get mountY(){return this.props.mountY}set mountY(e){this.props.mountY=e,this.updateLocalTransform()}get pivot(){return this.props.pivot}set pivot(e){(this.props.pivotX!==e||this.props.pivotY!==e)&&(this.props.pivotX=e,this.props.pivotY=e,this.updateLocalTransform())}get pivotX(){return this.props.pivotX}set pivotX(e){this.props.pivotX=e,this.updateLocalTransform()}get pivotY(){return this.props.pivotY}set pivotY(e){this.props.pivotY=e,this.updateLocalTransform()}get rotation(){return this.props.rotation}set rotation(e){this.props.rotation!==e&&(this.props.rotation=e,this.updateScaleRotateTransform())}get alpha(){return this.props.alpha}set alpha(e){this.props.alpha=e}get worldAlpha(){const e=this.props,o=e.parent;return e.alpha*((o==null?void 0:o.worldAlpha)||1)}get clipping(){return this.props.clipping}set clipping(e){this.props.clipping=e}get color(){return this.props.color}set color(e){(this.props.colorTl!==e||this.props.colorTr!==e||this.props.colorBl!==e||this.props.colorBr!==e)&&(this.colorTl=e,this.colorTr=e,this.colorBl=e,this.colorBr=e),this.props.color=e}get colorTop(){return this.props.colorTop}set colorTop(e){(this.props.colorTl!==e||this.props.colorTr!==e)&&(this.colorTl=e,this.colorTr=e),this.props.colorTop=e}get colorBottom(){return this.props.colorBottom}set colorBottom(e){(this.props.colorBl!==e||this.props.colorBr!==e)&&(this.colorBl=e,this.colorBr=e),this.props.colorBottom=e}get colorLeft(){return this.props.colorLeft}set colorLeft(e){(this.props.colorTl!==e||this.props.colorBl!==e)&&(this.colorTl=e,this.colorBl=e),this.props.colorLeft=e}get colorRight(){return this.props.colorRight}set colorRight(e){(this.props.colorTr!==e||this.props.colorBr!==e)&&(this.colorTr=e,this.colorBr=e),this.props.colorRight=e}get colorTl(){return this.props.colorTl}set colorTl(e){this.props.colorTl=e}get colorTr(){return this.props.colorTr}set colorTr(e){this.props.colorTr=e}get colorBl(){return this.props.colorBl}set colorBl(e){this.props.colorBl=e}get colorBr(){return this.props.colorBr}set colorBr(e){this.props.colorBr=e}get zIndexLocked(){return this.props.zIndexLocked||0}set zIndexLocked(e){this.props.zIndexLocked=e}get zIndex(){var i,n;const e=this.props,o=e.zIndex||0,s=((i=e.parent)==null?void 0:i.zIndex)||0;return(n=e.parent)!=null&&n.zIndexLocked?o<s?o:s:o}set zIndex(e){this.props.zIndex=e}get parent(){return this.props.parent}set parent(e){const o=this.props.parent;if(o!==e){if(this.props.parent=e,o){const s=o.children.indexOf(this);_(s!==-1,"CoreNode.parent: Node not found in old parent's children!"),o.children.splice(s,1)}e&&e.children.push(this),this.updateScaleRotateTransform()}}}let cr=1;function mo(){return cr++}class Tt extends qe{constructor(e,o,s,i){super();a(this,"rendererMain");a(this,"stage");a(this,"id");a(this,"coreNode");a(this,"_children",[]);a(this,"_src","");a(this,"_parent",null);a(this,"_texture",null);a(this,"_shader",null);a(this,"onTextureLoaded",(e,o)=>{this.emit("loaded",o)});a(this,"onTextureFailed",(e,o)=>{this.emit("failed",o)});this.rendererMain=o,this.stage=s,this.id=(i==null?void 0:i.id)??mo(),this.coreNode=i||new Lt(this.stage,{id:this.id,x:e.x,y:e.y,width:e.width,height:e.height,alpha:e.alpha,clipping:e.clipping,color:e.color,colorTop:e.colorTop,colorBottom:e.colorBottom,colorLeft:e.colorLeft,colorRight:e.colorRight,colorTl:e.colorTl,colorTr:e.colorTr,colorBl:e.colorBl,colorBr:e.colorBr,zIndex:e.zIndex,zIndexLocked:e.zIndexLocked,scaleX:e.scaleX,scaleY:e.scaleY,mountX:e.mountX,mountY:e.mountY,mount:e.mount,pivot:e.pivot,pivotX:e.pivotX,pivotY:e.pivotY,rotation:e.rotation,parent:null,shader:null,shaderProps:null,texture:null,textureOptions:null}),this.coreNode.on("loaded",this.onTextureLoaded),this.coreNode.on("failed",this.onTextureFailed),this.parent=e.parent,this.shader=e.shader,this.texture=e.texture,this.src=e.src}get x(){return this.coreNode.x}set x(e){this.coreNode.x=e}get y(){return this.coreNode.y}set y(e){this.coreNode.y=e}get width(){return this.coreNode.width}set width(e){this.coreNode.width=e}get height(){return this.coreNode.height}set height(e){this.coreNode.height=e}get alpha(){return this.coreNode.alpha}set alpha(e){this.coreNode.alpha=e}get clipping(){return this.coreNode.clipping}set clipping(e){this.coreNode.clipping=e}get color(){return this.coreNode.color}set color(e){this.coreNode.color=e}get colorTop(){return this.coreNode.colorTop}set colorTop(e){this.coreNode.colorTop=e}get colorBottom(){return this.coreNode.colorBottom}set colorBottom(e){this.coreNode.colorBottom=e}get colorLeft(){return this.coreNode.colorLeft}set colorLeft(e){this.coreNode.colorLeft=e}get colorRight(){return this.coreNode.colorRight}set colorRight(e){this.coreNode.colorRight=e}get colorTl(){return this.coreNode.colorTl}set colorTl(e){this.coreNode.colorTl=e}get colorTr(){return this.coreNode.colorTr}set colorTr(e){this.coreNode.colorTr=e}get colorBl(){return this.coreNode.colorBl}set colorBl(e){this.coreNode.colorBl=e}get colorBr(){return this.coreNode.colorBr}set colorBr(e){this.coreNode.colorBr=e}get scale(){return this.scaleX!==this.scaleY?null:this.coreNode.scaleX}set scale(e){e!==null&&(this.coreNode.scaleX=e,this.coreNode.scaleY=e)}get scaleX(){return this.coreNode.scaleX}set scaleX(e){this.coreNode.scaleX=e}get scaleY(){return this.coreNode.scaleY}set scaleY(e){this.coreNode.scaleY=e}get mount(){return this.coreNode.mount}set mount(e){this.coreNode.mount=e}get mountX(){return this.coreNode.mountX}set mountX(e){this.coreNode.mountX=e}get mountY(){return this.coreNode.mountY}set mountY(e){this.coreNode.mountY=e}get pivot(){return this.coreNode.pivot}set pivot(e){this.coreNode.pivot=e}get pivotX(){return this.coreNode.pivotX}set pivotX(e){this.coreNode.pivotX=e}get pivotY(){return this.coreNode.pivotY}set pivotY(e){this.coreNode.pivotY=e}get rotation(){return this.coreNode.rotation}set rotation(e){this.coreNode.rotation=e}get parent(){return this._parent}set parent(e){const o=this._parent;if(this._parent=e,this.coreNode.parent=(e==null?void 0:e.coreNode)??null,o){const s=o.children.indexOf(this);_(s!==-1,"MainOnlyNode.parent: Node not found in old parent's children!"),o.children.splice(s,1)}e&&e.children.push(this)}get children(){return this._children}get zIndex(){return this.coreNode.zIndex}set zIndex(e){this.coreNode.zIndex=e}get zIndexLocked(){return this.coreNode.zIndexLocked}set zIndexLocked(e){this.coreNode.zIndexLocked=e}get src(){return this._src}set src(e){if(this._src!==e){if(this._src=e,!e){this.texture=null;return}this.texture=this.rendererMain.createTexture("ImageTexture",{src:e})}}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture&&this.rendererMain.textureTracker.decrementTextureRefCount(this._texture),e&&this.rendererMain.textureTracker.incrementTextureRefCount(e),this._texture=e,e?this.coreNode.loadTexture(e.txType,e.props,e.options):this.coreNode.unloadTexture())}get shader(){return this._shader}set shader(e){this._shader!==e&&(this._shader=e,e&&this.coreNode.loadShader(e.shType,e.props))}destroy(){this.emit("beforeDestroy",{}),this.parent=null,this.texture=null,this.emit("afterDestroy",{}),this.removeAllListeners()}flush(){}animate(e,o){const s=new nr(this.coreNode,e,o);return new ar(this.stage.animationManager,s)}}class hr{constructor(t){a(this,"root");this.root=t}getNodeByType(t){return[]}getNodeById(t){return null}update(t){this.root.update(t)}}const fr=r=>{const t=()=>{r.drawFrame(),requestAnimationFrame(t)};requestAnimationFrame(t)},dr=()=>performance?performance.now():Date.now();class go extends Ge{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2fv"}]})}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}}a(go,"shaderSources",{vertex:`
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
    `});class xo extends Ge{constructor(e){super({renderer:e,attributes:["a_position","a_textureCoordinate","a_color","a_textureIndex"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_textures[0]",uniform:"uniform1iv"}]});a(this,"supportsIndexedTextures",!0)}bindTextures(e){const{renderer:o,gl:s}=this;if(e.length>o.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS)throw new Error(`DefaultShaderBatched: Cannot bind more than ${o.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS} textures`);e.forEach((n,l)=>{s.activeTexture(s.TEXTURE0+l),s.bindTexture(s.TEXTURE_2D,n.ctxTexture)});const i=Array.from(Array(e.length).keys());this.setUniform("u_textures[0]",i)}}a(xo,"shaderSources",{vertex:`
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
    `});class q{constructor(t){a(this,"priority",1);a(this,"name","");a(this,"ref");a(this,"target");a(this,"passParameters","");a(this,"declaredUniforms","");a(this,"uniformInfo",{});const{ref:e,target:o,props:s={}}=t;this.ref=e,this.target=o;const i={},n=[];let l="";const d=this.constructor.uniforms||{};for(const c in d){const f=d[c],m=f.type,x=`${e}_${c}`;let u="";f.size&&(u=`[${f.size(s)}]`),n.push(x),l+=`uniform ${m} ${x}${u};`,i[c]={name:x,uniform:d[c].method}}this.passParameters=n.join(","),this.declaredUniforms=l,this.uniformInfo=i}static getEffectKey(t){return""}static getMethodParameters(t,e){const o=[];for(const s in t){const i=t[s];let n="";i.size&&(n=`[${i.size(e)}]`),o.push(`${i.type} ${s}${n}`)}return o.join(",")}static resolveDefaults(t){return{}}static makeEffectKey(t){return!1}}a(q,"uniforms",{}),a(q,"methods"),a(q,"onShaderMask"),a(q,"onColorize"),a(q,"onEffectMask");class be extends q{constructor(){super(...arguments);a(this,"name","radius")}static getEffectKey(){return"radius"}static resolveDefaults(e){return{radius:e.radius??10}}}a(be,"z$__type__Props"),a(be,"uniforms",{radius:{value:0,method:"uniform4fv",type:"vec4",validator:e=>{let o=e;return Array.isArray(o)?o.length===2?o=[o[0],o[1],o[0],o[1]]:o.length===3?o=[o[0],o[1],o[2],o[0]]:o.length!==4&&(o=[o[0],o[0],o[0],o[0]]):typeof o=="number"&&(o=[o,o,o,o]),o}}}),a(be,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,boxDist:`
      float function(vec2 p, vec2 size, float radius) {
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }
    `}),a(be,"onShaderMask",`
  vec2 halfDimensions = u_dimensions * 0.5;
  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);
  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);
  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);
  `),a(be,"onEffectMask",`
  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));
  `);class Ie extends q{constructor(){super(...arguments);a(this,"name","border")}static getEffectKey(){return"border"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(Ie,"z$__type__Props"),a(Ie,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>de(e),method:"uniform4fv",type:"vec4"}}),a(Ie,"onEffectMask",`
  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);
  return mix(shaderColor, maskColor, mask);
  `),a(Ie,"onColorize",`
    return color;
  `);class ve extends q{constructor(){super(...arguments);a(this,"name","linearGradient")}static getEffectKey(e){return`linearGradient${e.colors.length}`}static resolveDefaults(e){const o=e.colors??[4278190080,4294967295];let s=e.stops;if(!s){s=[];const i=o.length-1;for(let n=0;n<o.length;n++)s.push(n*(1/i))}return{colors:o,stops:s,angle:e.angle??0}}}a(ve,"z$__type__Props"),a(ve,"uniforms",{angle:{value:0,method:"uniform1f",type:"float"},colors:{value:4294967295,validator:e=>e.map(s=>de(s)).reduce((s,i)=>s.concat(i),[]),size:e=>e.colors.length,method:"uniform4fv",type:"vec4"},stops:{value:[],validator:(e,o)=>{const s=o.colors??[];let i=e;const n=e;if(i.length===0||i&&i.length!==s.length){for(let l=0;l<s.length;l++)i[l]?(n[l]=i[l],i[l-1]===void 0&&n[l-2]!==void 0&&(n[l-1]=n[l-2]+(i[l]-n[l-2])/2)):n[l]=l*(1/(s.length-1));i=n}return n},size:e=>e.colors.length,method:"uniform1fv",type:"float"}}),a(ve,"methods",{fromLinear:`
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
    `}),a(ve,"ColorLoop",e=>{let o="";for(let s=2;s<e;s++)o+=`colorOut = mix(colorOut, colors[${s}], clamp((dist - stops[${s-1}]) / (stops[${s}] - stops[${s-1}]), 0.0, 1.0));`;return o}),a(ve,"onColorize",e=>`
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
    `);class Pt extends q{constructor(){super(...arguments);a(this,"name","grayscale")}static getEffectKey(){return"grayscale"}}a(Pt,"onColorize",`
    vec3 color = pow(maskColor.rgb, vec3(2.0));
    float gray = dot(color, vec3(0.2126, 0.7152, 0.0722));
    float gammaGray = sqrt(gray);
    return vec4(gammaGray, gammaGray, gammaGray, 1.0);
  `);class Ee extends q{constructor(){super(...arguments);a(this,"name","borderRight")}static getEffectKey(){return"borderRight"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(Ee,"z$__type__Props"),a(Ee,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>de(e),method:"uniform4fv",type:"vec4"}}),a(Ee,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(Ee,"onEffectMask",`
  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(Ee,"onColorize",`
    return color;
  `);class $e extends q{constructor(){super(...arguments);a(this,"name","borderTop")}static getEffectKey(){return"borderTop"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a($e,"z$__type__Props"),a($e,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>de(e),method:"uniform4fv",type:"vec4"}}),a($e,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a($e,"onEffectMask",`
  vec2 pos = vec2(0.0, width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a($e,"onColorize",`
    return color;
  `);class Te extends q{constructor(){super(...arguments);a(this,"name","borderBottom")}static getEffectKey(){return"borderBottom"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(Te,"z$__type__Props"),a(Te,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>de(e),method:"uniform4fv",type:"vec4"}}),a(Te,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(Te,"onEffectMask",`
  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(Te,"onColorize",`
    return color;
  `);class Se extends q{constructor(){super(...arguments);a(this,"name","borderLeft")}static getEffectKey(){return"borderLeft"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}a(Se,"z$__type__Props"),a(Se,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>de(e),method:"uniform4fv",type:"vec4"}}),a(Se,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),a(Se,"onEffectMask",`
  vec2 pos = vec2(width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),a(Se,"onColorize",`
    return color;
  `);class Re extends q{constructor(){super(...arguments);a(this,"name","glitch")}static getEffectKey(e){return"glitch"}static resolveDefaults(e){return{amplitude:e.amplitude??.2,narrowness:e.narrowness??4,blockiness:e.blockiness??2,minimizer:e.minimizer??8,time:e.time??Date.now()}}}a(Re,"z$__type__Props"),a(Re,"uniforms",{amplitude:{value:0,method:"uniform1f",type:"float"},narrowness:{value:0,method:"uniform1f",type:"float"},blockiness:{value:0,method:"uniform1f",type:"float"},minimizer:{value:0,method:"uniform1f",type:"float"},time:{value:0,method:"uniform1f",validator:e=>(Date.now()-e)%1e3,type:"float"}}),a(Re,"methods",{rand:`
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
    `}),a(Re,"onColorize",`
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
  `);class Be extends q{constructor(){super(...arguments);a(this,"name","fadeOut")}static getEffectKey(){return"fadeOut"}static resolveDefaults(e){return{fade:e.fade??10}}}a(Be,"z$__type__Props"),a(Be,"uniforms",{fade:{value:0,method:"uniform4fv",type:"vec4",validator:e=>{let o=e;return Array.isArray(o)?o.length===2?o=[o[0],o[1],o[0],o[1]]:o.length===3?o=[o[0],o[1],o[2],o[0]]:o.length!==4&&(o=[o[0],o[0],o[0],o[0]]):typeof o=="number"&&(o=[o,o,o,o]),o}}}),a(Be,"onColorize",`
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
  `);class Ye extends q{constructor(){super(...arguments);a(this,"name","radialGradient")}static getEffectKey(e){return`radialGradient${e.colors.length}`}static resolveDefaults(e){const o=e.colors??[4278190080,4294967295];let s=e.stops;if(!s){s=[];const i=o.length-1;for(let n=0;n<o.length;n++)s.push(n*(1/i))}return{colors:o,stops:s,width:e.width??0,height:e.height??e.width??0,pivot:e.pivot??[.5,.5]}}}a(Ye,"z$__type__Props"),a(Ye,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},height:{value:0,method:"uniform1f",type:"float"},pivot:{value:[.5,.5],method:"uniform2fv",type:"vec2"},colors:{value:4294967295,validator:e=>e.map(s=>de(s)).reduce((s,i)=>s.concat(i),[]),size:e=>e.colors.length,method:"uniform4fv",type:"vec4"},stops:{value:[],validator:(e,o)=>{const s=o.colors??[];let i=e;const n=e;if(i.length===0||i&&i.length!==s.length){for(let l=0;l<s.length;l++)i[l]?(n[l]=i[l],i[l-1]===void 0&&n[l-2]!==void 0&&(n[l-1]=n[l-2]+(i[l]-n[l-2])/2)):n[l]=l*(1/(s.length-1));i=n}return n},size:e=>e.colors.length,method:"uniform1fv",type:"float"}}),a(Ye,"onColorize",e=>`
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
    `);const mt={radius:be,border:Ie,borderBottom:Te,borderLeft:Se,borderRight:Ee,borderTop:$e,fadeOut:Be,linearGradient:ve,radialGradient:Ye,grayscale:Pt,glitch:Re},fe=class fe extends Ge{constructor(e,o,s){const i=fe.createShader(o,s);super({renderer:e,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2fv"},{name:"u_dimensions",uniform:"uniform2fv"},{name:"u_alpha",uniform:"uniform1f"},...i.uniforms],shaderSources:{vertex:i.vertex,fragment:i.fragment}});a(this,"effects",[]);this.effects=i.effects}bindTextures(e){const{gl:o}=this;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,e[0].ctxTexture)}bindProps(e){var o;(o=e.effects)==null||o.forEach((s,i)=>{const n=this.effects[i],l=mt[n.name],d=s.props??{},c=n.uniformInfo;Object.keys(d).forEach(f=>{const m=l.uniforms[f],x=c[f];let u=m.validator?m.validator(d[f],d):d[f];Array.isArray(u)&&(u=new Float32Array(u)),this.setUniform(x.name,u)})})}static createShader(e,o){const s={},i={};let n="";const l=[],d=[],c=e.effects.map(y=>{const g=o[y.type],w=g.getEffectKey(y.props||{});s[w]=s[w]?++s[w]:1;const p=s[w];p===1&&d.push({key:w,type:y.type,props:y.props});const M=new g({ref:`${w}${p===1?"":p}`,target:w,props:y.props});return n+=M.declaredUniforms,l.push(...Object.values(M.uniformInfo)),M});let f="";d==null||d.forEach(y=>{const g=o[y.type],w=g.resolveDefaults(y.props??{}),p=[];for(const R in g.methods){let v=R;const S=g.methods[R];i[R]&&i[R]!==S&&(v=fe.resolveMethodDuplicate(R,S,i)),i[v]=S.replace("function",v),p.push({m:R,cm:v})}let M=g.onShaderMask instanceof Function?g.onShaderMask(w):g.onShaderMask,O=g.onColorize instanceof Function?g.onColorize(w):g.onColorize,C=g.onEffectMask instanceof Function?g.onEffectMask(w):g.onEffectMask;p.forEach(R=>{const{m:v,cm:S}=R,A=new RegExp(`\\$${v}`,"g");M&&(M=M.replace(A,S)),O&&(O=O.replace(A,S)),C&&(C=C.replace(A,S))});const b=g.getMethodParameters(g.uniforms,w),$=b.length>0?`, ${b}`:"";M&&(f+=`
        float fx_${y.key}_onShaderMask(float shaderMask ${$}) {
          ${M}
        }
        `),O&&(f+=`
          vec4 fx_${y.key}_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor${$}) {
            ${O}
          }
        `),C&&(f+=`
          vec4 fx_${y.key}_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor${$}) {
            ${C}
          }
        `)});let m="";for(const y in i)m+=i[y];let x="mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))",u=`

    `;for(let y=0;y<c.length;y++){const g=c[y],w=g.passParameters.length>0?`, ${g.passParameters}`:"",p=mt[g.name];p.onShaderMask&&(u+=`
        shaderMask = fx_${g.target}_onShaderMask(shaderMask ${w});
        `),p.onColorize&&(u+=`
        maskColor = fx_${g.target}_onColorize(shaderMask, maskColor, shaderColor${w});
        `),p.onEffectMask&&(x=`fx_${g.target}_onEffectMask(shaderMask, maskColor, shaderColor${w})`);const M=c[y+1];(M===void 0||mt[M.name].onEffectMask)&&(u+=`
          shaderColor = ${x};
        `)}return{effects:c,uniforms:l,fragment:fe.fragment(n,m,f,u),vertex:fe.vertex()}}static resolveMethodDuplicate(e,o,s,i=0){const n=e+(i>0?i:"");return s[n]&&s[n]!==o?this.resolveMethodDuplicate(e,o,s,++i):n}static resolveDefaults(e,o){return{effects:(e.effects??[]).map(s=>({type:s.type,props:o[s.type].resolveDefaults(s.props||{})})),$dimensions:{width:0,height:0},$alpha:0}}static makeCacheKey(e,o){var i;let s="";return(i=e.effects)==null||i.forEach(n=>{const d=o[n.type].getEffectKey(n.props||{});s+=`,${d}`}),`DynamicShader${s}`}};a(fe,"z$__type__Props"),a(fe,"vertex",()=>`
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
  `),a(fe,"fragment",(e,o,s,i)=>`
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

    ${s}

    void main() {
      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;
      vec2 d = abs(p) - (u_dimensions) * 0.5;
      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));

      vec4 shaderColor = vec4(0.0);
      float shaderMask = lng_DefaultMask;

      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;

      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));

      ${i}

      gl_FragColor = shaderColor * u_alpha;
    }
  `);let Me=fe;class St extends Ge{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2f"},{name:"u_dimensions",uniform:"uniform2fv"},{name:"u_radius",uniform:"uniform1f"}]})}static resolveDefaults(t){return{radius:t.radius||10,$dimensions:{width:0,height:0}}}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}bindProps(t){this.setUniform("u_radius",t.radius)}canBatchShaderProps(t,e){return t.radius===e.radius&&t.$dimensions.width===e.$dimensions.width&&t.$dimensions.height===e.$dimensions.height}}a(St,"z$__type__Props"),a(St,"shaderSources",{vertex:`
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
    `});const ur=new Float32Array([1,0,0,0,1,0,0,0,1]),ut=class ut extends Ge{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_transform",uniform:"uniformMatrix3fv"},{name:"u_scrollY",uniform:"uniform1f"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2f"},{name:"u_color",uniform:"uniform4fv"},{name:"u_size",uniform:"uniform1f"},{name:"u_distanceRange",uniform:"uniform1f"},{name:"u_debug",uniform:"uniform1i"}]})}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}bindProps(t){const e=ut.resolveDefaults(t);for(const o in e)if(o==="transform")this.setUniform("u_transform",!1,e[o]);else if(o==="scrollY")this.setUniform("u_scrollY",e[o]);else if(o==="color"){const s=de(e.color);this.setUniform("u_color",s)}else o==="size"?this.setUniform("u_size",e[o]):o==="distanceRange"?this.setUniform("u_distanceRange",e[o]):o==="debug"&&this.setUniform("u_debug",e[o]?1:0)}static resolveDefaults(t={}){return{transform:t.transform??ur,scrollY:t.scrollY??0,color:t.color??4294967295,size:t.size??16,distanceRange:t.distanceRange??1,debug:t.debug??!1}}};a(ut,"shaderSources",{vertex:`
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
    `});let _t=ut;class pr{constructor(){a(this,"shCache",new Map);a(this,"shConstructors",{});a(this,"attachedShader",null);a(this,"effectConstructors",{});a(this,"renderer");this.registerShaderType("DefaultShader",go),this.registerShaderType("DefaultShaderBatched",xo),this.registerShaderType("RoundedRectangle",St),this.registerShaderType("DynamicShader",Me),this.registerShaderType("SdfShader",_t),this.registerEffectType("border",Ie),this.registerEffectType("borderBottom",Te),this.registerEffectType("borderLeft",Se),this.registerEffectType("borderRight",Ee),this.registerEffectType("borderTop",$e),this.registerEffectType("fadeOut",Be),this.registerEffectType("linearGradient",ve),this.registerEffectType("radialGradient",Ye),this.registerEffectType("grayscale",Pt),this.registerEffectType("glitch",Re),this.registerEffectType("radius",be)}registerShaderType(t,e){this.shConstructors[t]=e}registerEffectType(t,e){this.effectConstructors[t]=e}loadShader(t,e){if(!this.renderer)throw new Error("Renderer is not been defined");const o=this.shConstructors[t];if(!o)throw new Error(`Shader type "${t}" is not registered`);if(t==="DynamicShader")return this.loadDynamicShader(e);const s=o.resolveDefaults(e),i=o.makeCacheKey(s)||o.name;if(i&&this.shCache.has(i))return{shader:this.shCache.get(i),props:s};const n=new o(this.renderer,e);return i&&this.shCache.set(i,n),{shader:n,props:s}}loadDynamicShader(t){if(!this.renderer)throw new Error("Renderer is not been defined");const e=Me.resolveDefaults(t,this.effectConstructors),o=Me.makeCacheKey(e,this.effectConstructors);if(o&&this.shCache.has(o))return{shader:this.shCache.get(o),props:e};const s=new Me(this.renderer,t,this.effectConstructors);return o&&this.shCache.set(o,s),{shader:s,props:e}}useShader(t){this.attachedShader!==t&&(this.attachedShader&&this.attachedShader.detach(),t.attach(),this.attachedShader=t)}}class mr{constructor(){a(this,"activeAnimations",new Set)}registerAnimation(t){this.activeAnimations.add(t)}unregisterAnimation(t){this.activeAnimations.delete(t)}update(t){this.activeAnimations.forEach(e=>{e.update(t)})}}const je=class je extends ao{constructor(e,o){super(e);a(this,"props");this.props=je.resolveDefaults(o)}async getTextureData(){const{src:e,premultiplyAlpha:o}=this.props;if(!e)return{data:null};if(e instanceof ImageData)return{data:e,premultiplyAlpha:o};const i=await(await fetch(e)).blob();return{data:await createImageBitmap(i,{premultiplyAlpha:o?"premultiply":"none",colorSpaceConversion:"none",imageOrientation:"none"})}}static makeCacheKey(e){const o=je.resolveDefaults(e);return o.src instanceof ImageData?!1:`ImageTexture,${o.src},${o.premultiplyAlpha}`}static resolveDefaults(e){return{src:e.src??"",premultiplyAlpha:e.premultiplyAlpha??!0}}};a(je,"z$__type__Props");let Ct=je;const We=class We extends ao{constructor(e,o){super(e);a(this,"props");this.props=We.resolveDefaults(o)}async getTextureData(){const{width:e,height:o}=this.props,s=e*o*4,i=new Uint8ClampedArray(s);for(let n=0;n<s;n+=4){const l=Math.floor(Math.random()*256);i[n]=l,i[n+1]=l,i[n+2]=l,i[n+3]=255}return{data:new ImageData(i,e,o)}}static makeCacheKey(e){const o=We.resolveDefaults(e);return`NoiseTexture,${o.width},${o.height},${o.cacheId}`}static resolveDefaults(e){return{width:e.width??128,height:e.height??128,cacheId:e.cacheId??0}}};a(We,"z$__type__Props");let kt=We;class gr{constructor(){a(this,"usedMemory",0);a(this,"txConstructors",{});a(this,"textureKeyCache",new Map);a(this,"textureIdCache",new Map);a(this,"ctxTextureCache",new WeakMap);a(this,"textureRefCountMap",new WeakMap);a(this,"renderer");this.registerTextureType("ImageTexture",Ct),this.registerTextureType("ColorTexture",Wo),this.registerTextureType("NoiseTexture",kt),this.registerTextureType("SubTexture",Ho)}registerTextureType(t,e){this.txConstructors[t]=e}loadTexture(t,e,o=null){const s=this.txConstructors[t];if(!s)throw new Error(`Texture type "${t}" is not registered`);let i;if((o==null?void 0:o.id)!==void 0&&this.textureIdCache.has(o.id)&&(i=this.textureIdCache.get(o.id)),!i){const n=o==null?void 0:o.id,l=(o==null?void 0:o.cacheKey)??s.makeCacheKey(e);l&&this.textureKeyCache.has(l)?i=this.textureKeyCache.get(l):i=new s(this,e),n&&this.addTextureIdToCache(n,l,i)}return o!=null&&o.preload&&this.getCtxTexture(i).load(),i}addTextureIdToCache(t,e,o){const{textureIdCache:s,textureRefCountMap:i}=this;s.set(t,o),i.has(o)?i.get(o).count++:(i.set(o,{cacheKey:e,count:1}),e&&this.textureKeyCache.set(e,o))}removeTextureIdFromCache(t){const{textureIdCache:e,textureRefCountMap:o}=this,s=e.get(t);if(s&&(e.delete(t),o.has(s))){const i=o.get(s);_(i),i.count--,i.count===0&&(o.delete(s),i.cacheKey&&this.textureKeyCache.delete(i.cacheKey))}}getDebugInfo(){return{keyCacheSize:this.textureKeyCache.size,idCacheSize:this.textureIdCache.size}}getCtxTexture(t){if(this.ctxTextureCache.has(t))return this.ctxTextureCache.get(t);const e=this.renderer.createCtxTexture(t);return this.ctxTextureCache.set(t,e),e}}class yo{constructor(t){a(this,"textRenderers");this.textRenderers=t}addFontFace(t){for(const e in this.textRenderers){const o=this.textRenderers[e];o&&o.isFontFaceSupported(t)&&o.addFontFace(t)}}static resolveFontFace(t,e){const o=[];return t.reduce((i,n)=>{if(i)return i;const l=n[e.fontFamily];if(!l)return;const d=new Set(l);for(const c of d)(c.descriptors.stretch!==e.fontStretch||c.descriptors.style!==e.fontStyle||c.descriptors.weight!==e.fontWeight)&&d.delete(c);return d.values().next().value},void 0)||o[0]}}const xr={x:(r,t)=>{r.props.x=t},y:(r,t)=>{r.props.y=t},width:(r,t)=>{r.props.width=t},height:(r,t)=>{r.props.height=t},color:(r,t)=>{r.props.color=t},zIndex:(r,t)=>{r.props.zIndex=t},fontFamily:(r,t)=>{r.props.fontFamily=t},fontWeight:(r,t)=>{r.props.fontWeight=t},fontStyle:(r,t)=>{r.props.fontStyle=t},fontStretch:(r,t)=>{r.props.fontStretch=t},fontSize:(r,t)=>{r.props.fontSize=t},scaleX:(r,t)=>{r.props.scaleX=t},scaleY:(r,t)=>{r.props.scaleY=t},text:(r,t)=>{r.props.text=t},textAlign:(r,t)=>{r.props.textAlign=t},contain:(r,t)=>{r.props.contain=t},offsetY:(r,t)=>{r.props.offsetY=t},scrollable:(r,t)=>{r.props.scrollable=t},scrollY:(r,t)=>{r.props.scrollY=t},letterSpacing:(r,t)=>{r.props.letterSpacing=t},debug:(r,t)=>{r.props.debug=t}};class wo{constructor(t){a(this,"stage");a(this,"set");this.stage=t,this.set=Object.freeze({...xr,...this.getPropertySetters()})}setStatus(t,e,o){t.status!==e&&(t.status=e,t.emitter.emit(e,o))}}const yr=24;function wr(r,t,e,o,s,i,n){let l=0;s&&(l=Math.min(Math.max(Math.floor(s.y1/r),0),i.length));const d=0,c=t/e+l*o;if(!(n&&c>=n/e))return{x:d,y:c,lineIndex:l}}class at{constructor(t,e=0){a(this,"iterator");a(this,"peekBuffer",[]);a(this,"_lastIndex");this.iterator=t,this.iterator=t,this._lastIndex=e-1,this.peekBuffer=[]}next(){const t=this.peekBuffer.length>0?this.peekBuffer.pop():this.iterator.next();return t.done?this._lastIndex=-1:this._lastIndex++,t}peek(){if(this.peekBuffer.length>0)return this.peekBuffer[0];const t=this.iterator.next();return this.peekBuffer.push(t),t}get lastIndex(){return this._lastIndex}}function*lt(r,t=0){let e=t;for(;e<r.length;){const o=r.codePointAt(e);if(o===void 0)throw new Error("Invalid Unicode code point");yield o,e+=o<=65535?1:2}}function br(r,t,e){const o=e.shapeText(t,new at(lt(r,0),0));let s=0;for(const i of o)i.mapped&&(s+=i.xAdvance);return s}function vr(r,t,e,o,s,i,n,l,d,c,f,m,x,u,y,g){_(u,"Font face must be loaded"),_(u.loaded,"Font face must be loaded"),_(u.data,"Font face must be loaded"),_(u.shaper,"Font face must be loaded");const w=u.data.info.size,p=l/w,M=i/p,O=d/p,C=m[r],b=(C==null?void 0:C.codepointIndex)||0,$=(C==null?void 0:C.maxX)||0,R=(C==null?void 0:C.maxY)||0;let v=$,S=R,A=t,F=e,E=0;const T={codepointIndex:-1,bufferOffset:-1,xStart:-1},D=u.shaper,H={letterSpacing:O};let le=D.shapeText(H,new at(lt(o,b),b)),J,ue=-1;const Fe=[],Nt="...",Po=n/p,Do=br(Nt,H,D);let Ve=!0;for(;Ve;){const ye=f!=="both"||g||F+w+w<=Po,ce=ye?M:M-Do;let G=0;for(;(J=le.next())&&!J.done;){const N=J.value;if(r===m.length)m.push({codepointIndex:N.cluster,maxY:S,maxX:v});else if(r>m.length)throw new Error("Unexpected lineCache length");if(N.codepoint===32||N.codepoint===10?T.codepointIndex!==-1&&(T.codepointIndex=-1,G=A):T.codepointIndex===-1&&(T.codepointIndex=N.cluster,T.bufferOffset=E,T.xStart=G),N.mapped){const Ae=A+N.xOffset+N.width;if(f!=="none"&&Ae>=ce&&T.codepointIndex!==-1&&T.codepointIndex<N.cluster&&T.xStart>0)if(ye){le=D.shapeText(H,new at(lt(o,T.codepointIndex),T.codepointIndex)),E=T.bufferOffset;break}else le=D.shapeText(H,new at(lt(Nt,0),0)),A=T.xStart,E=T.bufferOffset;else{const oe=A+N.xOffset,Le=F+N.yOffset,No=x?F+w>=x.y1/p:!0,Bo=x?F<=x.y2/p:!0;if(No&&Bo){ue===-1&&(ue=E);const Qe=u.getAtlasEntry(N.glyphId),Ze=Qe.x/u.data.common.scaleW,Je=Qe.y/u.data.common.scaleH,Bt=Qe.width/u.data.common.scaleW,Yt=Qe.height/u.data.common.scaleH;c[E++]=oe,c[E++]=Le,c[E++]=Ze,c[E++]=Je,c[E++]=oe+N.width,c[E++]=Le,c[E++]=Ze+Bt,c[E++]=Je,c[E++]=oe,c[E++]=Le+N.height,c[E++]=Ze,c[E++]=Je+Yt,c[E++]=oe+N.width,c[E++]=Le+N.height,c[E++]=Ze+Bt,c[E++]=Je+Yt}S=Math.max(S,Le+N.height),A+=N.xAdvance,v=Math.max(v,A)}}else if(N.codepoint===10)break}ue!==-1&&(Fe.push({bufferStart:ue,bufferEnd:E}),ue=-1),A=0,F+=w,r++,T.codepointIndex=-1,G=0,(!y&&f==="both"&&x&&F>x.y2/p||J&&J.done||f==="both"&&!g&&!ye)&&(Ve=!1)}if(s==="center"){const ye=f==="none"?v:M;for(let ce=0;ce<Fe.length;ce++){const G=Fe[ce],N=c[G.bufferEnd-4]-c[G.bufferStart],Ae=(ye-N)/2;for(let oe=G.bufferStart;oe<G.bufferEnd;oe+=4)c[oe]+=Ae}}else if(s==="right"){const ye=f==="none"?v:M;for(let ce=0;ce<Fe.length;ce++){const G=Fe[ce],N=G.bufferEnd===G.bufferStart?0:c[G.bufferEnd-4]-c[G.bufferStart],Ae=ye-N;for(let oe=G.bufferStart;oe<G.bufferEnd;oe+=4)c[oe]+=Ae}}return _(J),{bufferNumFloats:E,bufferNumQuads:E/16,layoutNumCharacters:J.done?o.length-b:J.value.cluster-b+1,fullyProcessed:!!J.done,maxX:v,maxY:S}}function Er(r,t,e,o,s,i){const n=o*s,l=i.x1-r,d=i.y1-t;return Uo(i)?{x1:l,y1:d+e-n,x2:l+(i.x2-i.x1),y2:d+e+(i.y2-i.y1)+n}:{x1:0,y1:0,x2:0,y2:0}}class $r extends wo{constructor(e){super(e);a(this,"ssdfFontFamilies",{});a(this,"msdfFontFamilies",{});a(this,"sdfShader");this.sdfShader=this.stage.shManager.loadShader("SdfShader").shader}getPropertySetters(){return{fontFamily:(e,o)=>{e.props.fontFamily=o,e.trFontFace=void 0,this.invalidateCache(e)},fontWeight:(e,o)=>{e.props.fontWeight=o,e.trFontFace=void 0,this.invalidateCache(e)},fontStyle:(e,o)=>{e.props.fontStyle=o,e.trFontFace=void 0,this.invalidateCache(e)},fontStretch:(e,o)=>{e.props.fontStretch=o,e.trFontFace=void 0,this.invalidateCache(e)},fontSize:(e,o)=>{e.props.fontSize=o,this.invalidateCache(e)},text:(e,o)=>{e.props.text=o,this.invalidateCache(e)},textAlign:(e,o)=>{e.props.textAlign=o,this.invalidateCache(e)},color:(e,o)=>{e.props.color=o},x:(e,o)=>{e.props.x=o},y:(e,o)=>{e.props.y=o},contain:(e,o)=>{e.props.contain=o,this.invalidateCache(e)},width:(e,o)=>{e.props.width=o,this.invalidateCache(e)},height:(e,o)=>{e.props.height=o,this.invalidateCache(e)},offsetY:(e,o)=>{e.props.offsetY=o,this.invalidateCache(e)},scrollable:(e,o)=>{e.props.scrollable=o,this.invalidateCache(e)},scrollY:(e,o)=>{e.props.scrollY=o},letterSpacing:(e,o)=>{e.props.letterSpacing=o,this.invalidateCache(e)},debug:(e,o)=>{e.props.debug=o}}}canRenderFont(e){const{fontFamily:o}=e;return o in this.ssdfFontFamilies||o in this.msdfFontFamilies||o==="$$SDF_FAILURE_TEST$$"}isFontFaceSupported(e){return e instanceof jt}addFontFace(e){_(e instanceof jt);const o=e.fontFamily,s=e.type==="ssdf"?this.ssdfFontFamilies:e.type==="msdf"?this.msdfFontFamilies:void 0;if(!s){console.warn(`Invalid font face type: ${e.type}`);return}let i=s[o];i||(i=new Set,s[o]=i),i.add(e)}createState(e){return{props:e,status:"initialState",emitter:new qe,lineCache:[],forceFullLayoutCalc:!1,renderWindow:void 0,bufferNumFloats:0,bufferNumQuads:0,vertexBuffer:void 0,webGlBuffers:null,bufferUploaded:!1,textH:void 0,textW:void 0,distanceRange:0,trFontFace:void 0,debugData:{updateCount:0,layoutCount:0,lastLayoutNumCharacters:0,layoutSum:0,drawSum:0,drawCount:0,bufferSize:0}}}updateState(e){performance.now();let{trFontFace:o}=e;const{textH:s,lineCache:i,debugData:n,forceFullLayoutCalc:l}=e;if(n.updateCount++,e.status==="initialState"&&this.setStatus(e,"loading"),!o&&(o=this.resolveFontFace(e.props),e.trFontFace=o,!o)){const D=`SdfTextRenderer: Could not resolve font face for family: '${e.props.fontFamily}'`;console.error(D),this.setStatus(e,"failed",new Error(D));return}if(!o.loaded){o.on("loaded",function D(){e.emitter.emit("fontLoaded",{}),o==null||o.off("fontLoaded",D)});return}_(o.data,"Font face data should be loaded");const{text:d,fontSize:c,x:f,y:m,contain:x,width:u,height:y,scrollable:g}=e.props,w=x==="both"&&g?e.props.scrollY:0;let{renderWindow:p}=e;const M=o.data.info.size,O=c/M;e.distanceRange=O*o.data.distanceField.distanceRange;const C=d.length*yr;let b=e.vertexBuffer;(!b||b.length<C)&&(b=new Float32Array(C*2));const $={x1:0,y1:0,x2:this.stage.options.appWidth,y2:this.stage.options.appHeight},R={x1:f,y1:m,x2:x!=="none"?f+u:1/0,y2:x==="both"?m+y:1/0},v=lo($,R);if(!l&&p){if(f+p.x1<=v.x1&&f+p.x2>=v.x2&&m-w+p.y1<=v.y1&&m-w+p.y2>=v.y2)return;e.renderWindow=p=void 0}const{offsetY:S,textAlign:A}=e.props;if(!p){const D=v.y2-v.y1,H=Math.ceil(D/M);p=Er(f,m,w,M,H,v)}const F=wr(c,S,O,M,p,i,s);if(!F){this.setStatus(e,"loaded");return}const{letterSpacing:E}=e.props,T=vr(F.lineIndex,F.x,F.y,d,A,u,y,c,E,b,x,i,p,o,l,g);e.bufferUploaded=!1,e.bufferNumFloats=T.bufferNumFloats,e.bufferNumQuads=T.bufferNumQuads,e.vertexBuffer=b,e.renderWindow=p,n.lastLayoutNumCharacters=T.layoutNumCharacters,n.bufferSize=b.byteLength,T.fullyProcessed&&(e.textW=T.maxX*O,e.textH=T.maxY*O),this.setStatus(e,"loaded")}renderQuads(e,o,s,i){var F,E;if(!e.vertexBuffer)return;performance.now();const{renderer:n}=this.stage;this.stage.options;const{fontSize:l,color:d,contain:c,scrollable:f,zIndex:m,debug:x}=e.props,u=c==="both"&&f?e.props.scrollY:0,{textW:y=0,textH:g=0,distanceRange:w,vertexBuffer:p,bufferNumFloats:M,bufferUploaded:O,renderWindow:C,debugData:b,trFontFace:$}=e;let{webGlBuffers:R}=e;if(!R){const T=n.gl,D=4*Float32Array.BYTES_PER_ELEMENT,H=T.createBuffer();_(H),e.webGlBuffers=new qo([{buffer:H,attributes:{a_position:{name:"a_position",size:2,type:T.FLOAT,normalized:!1,stride:D,offset:0},a_textureCoordinate:{name:"a_textureCoordinate",size:2,type:T.FLOAT,normalized:!1,stride:D,offset:2*Float32Array.BYTES_PER_ELEMENT}}}]),e.bufferUploaded=!1,_(e.webGlBuffers),R=e.webGlBuffers}if(!O){const T=n.gl,D=(R==null?void 0:R.getBuffer("a_textureCoordinate"))??null;T.bindBuffer(T.ARRAY_BUFFER,D),T.bufferData(T.ARRAY_BUFFER,p,T.STATIC_DRAW),e.bufferUploaded=!0}_($);const v=new Go(n.gl,n.options,R,this.sdfShader,{transform:o.data,color:Ko(d,i),size:l/(((F=$.data)==null?void 0:F.info.size)||0),scrollY:u,distanceRange:w,debug:x.sdfShaderDebug},i,s,{height:g,width:y},0,m),S=(E=e.trFontFace)==null?void 0:E.texture;_(S);const A=this.stage.txManager.getCtxTexture(S);v.addTexture(A),v.length=e.bufferNumFloats,v.numQuads=e.bufferNumQuads,n.addRenderable(v)}resolveFontFace(e){return yo.resolveFontFace([this.msdfFontFamilies,this.ssdfFontFamilies],e)}invalidateCache(e){e.renderWindow=void 0,e.textH=void 0,e.textW=void 0,e.lineCache=[],this.setStatus(e,"loading")}}const Ht=2048;class Tr{constructor(t,e){a(this,"_canvas");a(this,"_context");a(this,"_settings");a(this,"renderInfo");this._canvas=t,this._context=e,this._settings=this.mergeDefaults({})}set settings(t){this._settings=this.mergeDefaults(t)}get settings(){return this._settings}getPrecision(){return this._settings.precision}setFontProperties(){this._context.font=this._getFontSetting(),this._context.textBaseline=this._settings.textBaseline}_getFontSetting(){const t=[this._settings.fontFace],e=[];for(let o=0,s=t.length;o<s;o++)t[o]==="serif"||t[o]==="sans-serif"?e.push(t[o]):e.push(`"${t[o]}"`);return`${this._settings.fontStyle} ${this._settings.fontSize*this.getPrecision()}px ${e.join(",")}`}_load(){if(document.fonts){const t=this._getFontSetting();try{if(!document.fonts.check(t,this._settings.text))return document.fonts.load(t,this._settings.text).catch(e=>{console.warn("[Lightning] Font load error",e,t)}).then(()=>{document.fonts.check(t,this._settings.text)||console.warn("[Lightning] Font not found",t)})}catch{console.warn("[Lightning] Can't check font loading for "+t)}}}calculateRenderInfo(){const t={},e=this.getPrecision(),o=this._settings.paddingLeft*e,s=this._settings.paddingRight*e,i=this._settings.fontSize*e;let n=this._settings.offsetY===null?null:this._settings.offsetY*e,l=(this._settings.lineHeight||i)*e;const d=this._settings.w*e,c=this._settings.h*e;let f=this._settings.wordWrapWidth*e;const m=this._settings.cutSx*e,x=this._settings.cutEx*e,u=this._settings.cutSy*e,y=this._settings.cutEy*e,g=(this._settings.letterSpacing||0)*e,w=this._settings.textIndent*e;this.setFontProperties();let p=d||2048/this.getPrecision(),M=p-o;if(M<10&&(p+=10-M,M=10),f||(f=M),this._settings.textOverflow&&!this._settings.wordWrap){let v;switch(this._settings.textOverflow){case"clip":v="";break;case"ellipsis":v=this._settings.maxLinesSuffix;break;default:v=this._settings.textOverflow}this._settings.text=this.wrapWord(this._settings.text,f-w,v)}let O;if(this._settings.wordWrap)O=this.wrapText(this._settings.text,f,g,w);else{O={l:this._settings.text.split(/(?:\r\n|\r|\n)/),n:[]};const v=O.l.length;for(let S=0;S<v-1;S++)O.n.push(S)}let C=O.l;if(this._settings.maxLines&&C.length>this._settings.maxLines){const v=C.slice(0,this._settings.maxLines);let S=null;if(this._settings.maxLinesSuffix){const D=this._settings.maxLinesSuffix?this.measureText(this._settings.maxLinesSuffix):0,H=this.wrapText(v[v.length-1],f-D,g,w);v[v.length-1]=`${H.l[0]}${this._settings.maxLinesSuffix}`,S=[H.l.length>1?H.l[1]:""]}else S=[""];let A;const F=C.length;let E=0;const T=O.n.length;for(A=this._settings.maxLines;A<F;A++)S[E]+=`${S[E]?" ":""}${C[A]}`,A+1<T&&O.n[A+1]&&E++;t.remainingText=S.join(`
`),t.moreTextLines=!0,C=v}else t.moreTextLines=!1,t.remainingText="";let b=0;const $=[];for(let v=0;v<C.length;v++){const S=this.measureText(C[v],g)+(v===0?w:0);$.push(S),b=Math.max(b,S)}t.lineWidths=$,d||(p=b+o+s,M=b),l=l||i;let R;if(c)R=c;else{const v=this._settings.textBaseline!="bottom"?.5*i:0;R=l*(C.length-1)+v+Math.max(l,i)+(n||0)}return n===null&&(n=i),t.w=p,t.h=R,t.lines=C,t.precision=e,p||(p=1),R||(R=1),(m||x)&&(p=Math.min(p,x-m)),(u||y)&&(R=Math.min(R,y-u)),t.width=p,t.innerWidth=M,t.height=R,t.fontSize=i,t.cutSx=m,t.cutSy=u,t.cutEx=x,t.cutEy=y,t.lineHeight=l,t.lineWidths=$,t.offsetY=n,t.paddingLeft=o,t.paddingRight=s,t.letterSpacing=g,t.textIndent=w,t}draw(t,e){const o=this.getPrecision(),s=(e==null?void 0:e.lines)||t.lines,i=(e==null?void 0:e.lineWidths)||t.lineWidths,n=e?e.lines.length*t.lineHeight:t.height;this._canvas.width=Math.min(Math.ceil(t.width+this._settings.textRenderIssueMargin),Ht),this._canvas.height=Math.min(Math.ceil(n),Ht),this.setFontProperties(),t.fontSize>=128&&(this._context.globalAlpha=.01,this._context.fillRect(0,0,.01,.01),this._context.globalAlpha=1),(t.cutSx||t.cutSy)&&this._context.translate(-t.cutSx,-t.cutSy);let l,d;const c=[];for(let m=0,x=s.length;m<x;m++)l=m===0?t.textIndent:0,d=m*t.lineHeight+t.offsetY,this._settings.verticalAlign=="middle"?d+=(t.lineHeight-t.fontSize)/2:this._settings.verticalAlign=="bottom"&&(d+=t.lineHeight-t.fontSize),this._settings.textAlign==="right"?l+=t.innerWidth-i[m]:this._settings.textAlign==="center"&&(l+=(t.innerWidth-i[m])/2),l+=t.paddingLeft,c.push({text:s[m],x:l,y:d,w:i[m]});if(this._settings.highlight){const m=this._settings.highlightColor,x=this._settings.highlightHeight*o||t.fontSize*1.5,u=this._settings.highlightOffset*o,y=this._settings.highlightPaddingLeft!==null?this._settings.highlightPaddingLeft*o:t.paddingLeft,g=this._settings.highlightPaddingRight!==null?this._settings.highlightPaddingRight*o:t.paddingRight;this._context.fillStyle=pt(m);for(let w=0;w<c.length;w++){const p=c[w];this._context.fillRect(p.x-y,p.y-t.offsetY+u,p.w+g+y,x)}}let f=null;this._settings.shadow&&(f=[this._context.shadowColor,this._context.shadowOffsetX,this._context.shadowOffsetY,this._context.shadowBlur],this._context.shadowColor=pt(this._settings.shadowColor),this._context.shadowOffsetX=this._settings.shadowOffsetX*o,this._context.shadowOffsetY=this._settings.shadowOffsetY*o,this._context.shadowBlur=this._settings.shadowBlur*o),this._context.fillStyle=pt(this._settings.textColor);for(let m=0,x=c.length;m<x;m++){const u=c[m];if(t.letterSpacing===0)this._context.fillText(u.text,u.x,u.y);else{const y=u.text.split("");let g=u.x;for(let w=0,p=y.length;w<p;w++)this._context.fillText(y[w],g,u.y),g+=this.measureText(y[w],t.letterSpacing)}}f&&(this._context.shadowColor=f[0],this._context.shadowOffsetX=f[1],this._context.shadowOffsetY=f[2],this._context.shadowBlur=f[3]),(t.cutSx||t.cutSy)&&this._context.translate(t.cutSx,t.cutSy),this.renderInfo=t}wrapWord(t,e,o){const s=this._context.measureText(o).width,i=t.length,n=this._context.measureText(t).width;if(n<=e)return t;let l=Math.floor(e*i/n),d=this._context.measureText(t.substring(0,l)).width+s;if(d>e)for(;l>0&&(d=this._context.measureText(t.substring(0,l)).width+s,d>e);)l-=1;else for(;l<i;)if(d=this._context.measureText(t.substring(0,l)).width+s,d<e)l+=1;else{l-=1;break}return t.substring(0,l)+(e>=s?o:"")}wrapText(t,e,o,s=0){const i=t.split(/\r?\n/g);let n=[];const l=[];for(let d=0;d<i.length;d++){const c=[];let f="",m=e-s;const x=i[d].split(" ");for(let u=0;u<x.length;u++){const y=this.measureText(x[u],o),g=y+this.measureText(" ",o);u===0||g>m?(u>0&&(c.push(f),f=""),f+=x[u],m=e-y-(u===0?s:0)):(m-=g,f+=` ${x[u]}`)}c.push(f),f="",n=n.concat(c),d<i.length-1&&l.push(n.length)}return{l:n,n:l}}measureText(t,e=0){return e?t.split("").reduce((o,s)=>o+this._context.measureText(s).width+e,0):this._context.measureText(t).width}mergeDefaults(t){return{text:"",w:0,h:0,fontStyle:"normal",fontSize:40,fontFace:null,wordWrap:!0,wordWrapWidth:0,wordBreak:!1,textOverflow:"",lineHeight:null,textBaseline:"alphabetic",textAlign:"left",verticalAlign:"top",offsetY:null,maxLines:0,maxLinesSuffix:"..",textColor:[1,1,1,1],paddingLeft:0,paddingRight:0,shadow:!1,shadowColor:[0,0,0,1],shadowOffsetX:0,shadowOffsetY:0,shadowBlur:5,highlight:!1,highlightHeight:0,highlightColor:[0,0,0,1],highlightOffset:0,highlightPaddingLeft:0,highlightPaddingRight:0,letterSpacing:0,textIndent:0,cutSx:0,cutEx:0,cutSy:0,cutEy:0,advancedRenderer:!1,fontBaselineRatio:0,precision:1,textRenderIssueMargin:0,...t}}}const Ut=typeof self>"u"?globalThis:self;var no;const qt=((no=Ut.document)==null?void 0:no.fonts)||Ut.fonts;function Sr(r){const{fontFamily:t,fontStyle:e,fontWeight:o,fontStretch:s,fontSize:i}=r;return[e,o,s,`${i}px`,t].join(" ")}class _r extends wo{constructor(e){super(e);a(this,"canvas");a(this,"context");typeof OffscreenCanvas<"u"?this.canvas=new OffscreenCanvas(0,0):this.canvas=document.createElement("canvas");let o=this.canvas.getContext("2d");o||(this.canvas=document.createElement("canvas"),o=this.canvas.getContext("2d")),_(o),this.context=o}getPropertySetters(){return{fontFamily:(e,o)=>{e.props.fontFamily=o,e.fontInfo=void 0,this.markForReload(e)},fontWeight:(e,o)=>{e.props.fontWeight=o,e.fontInfo=void 0,this.markForReload(e)},fontStyle:(e,o)=>{e.props.fontStyle=o,e.fontInfo=void 0,this.markForReload(e)},fontStretch:(e,o)=>{e.props.fontStretch=o,e.fontInfo=void 0,this.markForReload(e)},fontSize:(e,o)=>{e.props.fontSize=o,e.fontInfo=void 0,this.markForReload(e)},text:(e,o)=>{e.props.text=o,this.markForReload(e)},textAlign:(e,o)=>{e.props.textAlign=o,this.markForReload(e)},color:(e,o)=>{e.props.color=o,this.markForReload(e)},x:(e,o)=>{e.props.x=o},y:(e,o)=>{e.props.y=o},contain:(e,o)=>{e.props.contain=o,this.markForReload(e)},width:(e,o)=>{e.props.width=o,this.markForReload(e)},height:(e,o)=>{e.props.height=o,this.markForReload(e)},offsetY:(e,o)=>{e.props.offsetY=o,this.markForReload(e)},scrollY:(e,o)=>{e.props.scrollY=o},letterSpacing:(e,o)=>{e.props.letterSpacing=o,this.markForReload(e)}}}canRenderFont(e){return!0}isFontFaceSupported(e){return e instanceof Wt}addFontFace(e){_(e instanceof Wt),qt.add(e.fontFace)}createState(e){return{props:e,status:"initialState",emitter:new qe,canvasPages:void 0,lightning2TextRenderer:new Tr(this.canvas,this.context),renderWindow:void 0,renderInfo:void 0,forceFullLayoutCalc:!1,textW:0,textH:0,fontInfo:void 0,fontFaceLoadedHandler:void 0,debugData:{updateCount:0,layoutCount:0,drawCount:0,lastLayoutNumCharacters:0,layoutSum:0,drawSum:0,bufferSize:0}}}updateState(e){if(e.status==="initialState"&&this.setStatus(e,"loading"),!e.fontInfo){const p=Sr(e.props);if(e.fontInfo={cssString:p,loaded:!1},!e.fontInfo.loaded){qt.load(p).then(this.onFontLoaded.bind(this,e,p)).catch(this.onFontLoadError.bind(this,e,p));return}}if(!e.fontInfo.loaded)return;if(!e.renderInfo){e.lightning2TextRenderer.settings={text:e.props.text,textAlign:e.props.textAlign,fontFace:e.props.fontFamily,fontSize:e.props.fontSize,fontStyle:[e.props.fontStretch,e.props.fontStyle,e.props.fontWeight].join(" "),textColor:de(e.props.color),offsetY:e.props.fontSize+e.props.offsetY,wordWrap:e.props.contain!=="none",wordWrapWidth:e.props.contain==="none"?void 0:e.props.width,letterSpacing:e.props.letterSpacing};const p=performance.now();e.renderInfo=e.lightning2TextRenderer.calculateRenderInfo(),console.log("Render info calculated in",performance.now()-p,"ms"),e.textH=e.renderInfo.lineHeight*e.renderInfo.lines.length,e.textW=e.renderInfo.width,e.renderWindow=void 0}const{x:o,y:s,width:i,height:n,scrollY:l,contain:d}=e.props;let{renderWindow:c,canvasPages:f}=e;const m={x1:0,y1:0,x2:this.stage.options.appWidth,y2:this.stage.options.appHeight},x={x1:o,y1:s,x2:d!=="none"?o+i:1/0,y2:d==="both"?s+n:1/0},u=lo(m,x),y=u.y2-u.y1,g=Math.ceil(y/e.renderInfo.lineHeight);if(c&&f){const p=o+c.x1,M=s-l+c.y1,O=o+c.x2,C=s-l+c.y2;if(p<=u.x1&&O>=u.x2&&M<=u.y1&&C>=u.y2)return;C<u.y2?(c.y1+=g*e.renderInfo.lineHeight,c.y2+=g*e.renderInfo.lineHeight,f.push(f.shift()),f[2].lineNumStart=f[1].lineNumStart+g,f[2].lineNumEnd=f[2].lineNumStart+g,f[2].valid=!1):M>u.y1&&(c.y1-=g*e.renderInfo.lineHeight,c.y2-=g*e.renderInfo.lineHeight,f.unshift(f.pop()),f[0].lineNumStart=f[1].lineNumStart-g,f[0].lineNumEnd=f[0].lineNumStart+g,f[0].valid=!1)}else{const p=e.renderInfo.lineHeight*g,O=Math.ceil(l/p)*g,C=O-g,b=O+g;f=[{texture:f==null?void 0:f[0].texture,lineNumStart:C,lineNumEnd:C+g,valid:!1},{texture:f==null?void 0:f[1].texture,lineNumStart:O,lineNumEnd:O+g,valid:!1},{texture:f==null?void 0:f[2].texture,lineNumStart:b,lineNumEnd:b+g,valid:!1}],e.canvasPages=f;const $=Math.ceil(l/p)*p;c={x1:0,y1:$-p,x2:i,y2:$+p*2}}e.renderWindow=c;const w=performance.now();for(const p of f)if(!p.valid){if(p.lineNumStart<0){p.texture=this.stage.txManager.loadTexture("ImageTexture",{src:""}),p.valid=!0;continue}e.lightning2TextRenderer.draw(e.renderInfo,{lines:e.renderInfo.lines.slice(p.lineNumStart,p.lineNumEnd),lineWidths:e.renderInfo.lineWidths.slice(p.lineNumStart,p.lineNumEnd)}),this.canvas.width===0||this.canvas.height===0||(p.texture=this.stage.txManager.loadTexture("ImageTexture",{src:this.context.getImageData(0,0,this.canvas.width,this.canvas.height)},{preload:!0})),p.valid=!0}console.log("pageDrawTime",performance.now()-w,"ms"),this.setStatus(e,"loaded")}renderQuads(e,o,s,i){var R,v,S,A,F,E,T,D,H,le,J,ue;const{stage:n}=this,{canvasPages:l,textW:d=0,textH:c=0,renderWindow:f}=e;if(!l||!f)return;const{x:m,y:x,scrollY:u,contain:y,width:g,height:w}=e.props,p={x:m,y:x,width:y!=="none"?g:d,height:y==="both"?w:c};co({x:0,y:0,width:n.options.appWidth,height:n.options.appHeight},p),_(l,"canvasPages is not defined"),_(f,"renderWindow is not defined");const O=(f.y2-f.y1)/3,{zIndex:C,color:b}=e.props,$=i*Vo(b);l[0].valid&&this.stage.renderer.addRenderable({alpha:$,clippingRect:s,colorBl:4294967295,colorBr:4294967295,colorTl:4294967295,colorTr:4294967295,width:((v=(R=l[0].texture)==null?void 0:R.dimensions)==null?void 0:v.width)||0,height:((A=(S=l[0].texture)==null?void 0:S.dimensions)==null?void 0:A.height)||0,texture:l[0].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:C,tx:o.tx,ty:o.ty-u+f.y1,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td}),l[1].valid&&this.stage.renderer.addRenderable({alpha:$,clippingRect:s,colorBl:4294967295,colorBr:4294967295,colorTl:4294967295,colorTr:4294967295,width:((E=(F=l[1].texture)==null?void 0:F.dimensions)==null?void 0:E.width)||0,height:((D=(T=l[1].texture)==null?void 0:T.dimensions)==null?void 0:D.height)||0,texture:l[1].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:C,tx:o.tx,ty:o.ty-u+f.y1+O,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td}),l[2].valid&&this.stage.renderer.addRenderable({alpha:$,clippingRect:s,colorBl:4294967295,colorBr:4294967295,colorTl:4294967295,colorTr:4294967295,width:((le=(H=l[2].texture)==null?void 0:H.dimensions)==null?void 0:le.width)||0,height:((ue=(J=l[2].texture)==null?void 0:J.dimensions)==null?void 0:ue.height)||0,texture:l[2].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:C,tx:o.tx,ty:o.ty-u+f.y1+O+O,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td})}markForReload(e){e.renderInfo=void 0,this.setStatus(e,"loading")}onFontLoaded(e,o){var s;o!==((s=e.fontInfo)==null?void 0:s.cssString)||!e.fontInfo||(e.fontInfo.loaded=!0,this.updateState(e))}onFontLoadError(e,o,s){var i;o!==((i=e.fontInfo)==null?void 0:i.cssString)||!e.fontInfo||(e.fontInfo.loaded=!0,console.error(`CanvasTextRenderer: Error loading font '${e.fontInfo.cssString}'`,s),this.updateState(e))}}const Cr=2e6;class kr{constructor(t){a(this,"options");a(this,"animationManager");a(this,"txManager");a(this,"fontManager");a(this,"textRenderers");a(this,"shManager");a(this,"renderer");a(this,"scene");a(this,"deltaTime",0);a(this,"lastFrameTime",0);a(this,"currentFrameTime",0);this.options=t;const{canvas:e,clearColor:o,rootId:s,debug:i,appWidth:n,appHeight:l}=t;this.txManager=new gr,this.shManager=new pr,this.animationManager=new mr,i!=null&&i.monitorTextureCache&&setInterval(()=>{_(this.txManager);const c=this.txManager.getDebugInfo();console.log("Texture ID Cache Size: ",c.idCacheSize),console.log("Texture Key Cache Size: ",c.keyCacheSize)},1e3),this.renderer=new Qo({stage:this,canvas:e,pixelRatio:t.devicePhysicalPixelRatio*t.deviceLogicalPixelRatio,clearColor:o??4278190080,bufferMemory:Cr,txManager:this.txManager,shManager:this.shManager}),this.txManager.renderer=this.renderer,this.textRenderers={canvas:new _r(this),sdf:new $r(this)},this.fontManager=new yo(this.textRenderers);const d=new Lt(this,{id:s,x:0,y:0,width:n,height:l,alpha:1,clipping:!1,color:0,colorTop:0,colorBottom:0,colorLeft:0,colorRight:0,colorTl:0,colorTr:0,colorBl:0,colorBr:0,zIndex:0,zIndexLocked:0,scaleX:1,scaleY:1,mountX:0,mountY:0,mount:0,pivot:.5,pivotX:.5,pivotY:.5,rotation:0,parent:null,texture:null,textureOptions:null,shader:null,shaderProps:null});this.scene=new hr(d),fr(this)}drawFrame(){var s,i;const{renderer:t,scene:e,animationManager:o}=this;e!=null&&e.root&&(this.lastFrameTime=this.currentFrameTime,this.currentFrameTime=dr(),this.deltaTime=this.lastFrameTime?this.currentFrameTime-this.lastFrameTime:100/6,o.update(this.deltaTime),t==null||t.reset(),(s=e==null?void 0:e.root)!=null&&s.hasUpdates&&((i=e==null?void 0:e.root)==null||i.update(this.deltaTime)),this.addQuads(e.root),t==null||t.sortRenderables(),t==null||t.render())}addQuads(t,e=null){_(this.renderer&&t.globalTransform);const o=t.globalTransform,s=o.tb!==0||o.tc!==0;let i=t.clipping&&!s?{x:o.tx,y:o.ty,width:t.width*o.ta,height:t.height*o.td}:null;e&&i?i=co(e,i):e&&(i=e),t.renderQuads(this.renderer,i),t.children.forEach(n=>{n.worldAlpha!==0&&this.addQuads(n,i)})}resolveTextRenderer(t,e=null){let o=e,s=!1;if(o){const n=this.textRenderers[o];n?n.canRenderFont(t)||(console.warn(`Cannot use override text renderer '${o}' for font`,t),o=null,s=!0):(console.warn(`Text renderer override '${o}' not found.`),o=null,s=!0)}if(!o){for(const[n,l]of Object.entries(this.textRenderers))if(n!=="canvas"&&l.canRenderFont(t)){o=n;break}o||(o="canvas")}s&&console.warn(`Falling back to text renderer ${String(o)}`);const i=this.textRenderers[o];return _(i,"resolvedTextRenderer undefined"),i}get root(){var t;return((t=this.scene)==null?void 0:t.root)||null}}class Ir extends Lt{constructor(e,o){super(e,o);a(this,"textRenderer");a(this,"trState");a(this,"updateScheduled");a(this,"_textRendererOverride",null);a(this,"onTextLoaded",()=>{const{contain:e}=this,o=this.trState.props.width,s=this.trState.props.height,i=this.trState.textW||0,n=this.trState.textH||0;e==="both"?(this.props.width=o,this.props.height=s):e==="width"?(this.props.width=o,this.props.height=n):e==="none"&&(this.props.width=i,this.props.height=n),this.updateLocalTransform(),this.emit("loaded",{type:"text",dimensions:{width:this.trState.textW||0,height:this.trState.textH||0}})});a(this,"onTextFailed",(e,o)=>{this.emit("failed",{type:"text",error:o})});this.updateScheduled=!1,this._textRendererOverride=o.textRendererOverride;const{resolvedTextRenderer:s,textRendererState:i}=this.resolveTextRendererAndState({x:this.absX,y:this.absY,width:o.width,height:o.height,textAlign:o.textAlign,color:o.color,zIndex:o.zIndex,contain:o.contain,scaleX:o.scaleX,scaleY:o.scaleY,scrollable:o.scrollable,scrollY:o.scrollY,offsetY:o.offsetY,letterSpacing:o.letterSpacing,debug:o.debug,fontFamily:o.fontFamily,fontSize:o.fontSize,fontStretch:o.fontStretch,fontStyle:o.fontStyle,fontWeight:o.fontWeight,text:o.text},void 0);this.textRenderer=s,this.trState=i}get width(){return this.trState.props.width}set width(e){this.textRenderer.set.width(this.trState,e),this.updateText()}get height(){return this.trState.props.height}set height(e){this.textRenderer.set.height(this.trState,e),this.updateText()}get color(){return this.trState.props.color}set color(e){this.textRenderer.set.color(this.trState,e),this.updateText()}get text(){return this.trState.props.text}set text(e){this.textRenderer.set.text(this.trState,e),this.updateText()}get textRendererOverride(){return this._textRendererOverride}set textRendererOverride(e){this._textRendererOverride=e;const{resolvedTextRenderer:o,textRendererState:s}=this.resolveTextRendererAndState(this.trState.props,this.trState);this.textRenderer=o,this.trState=s}get fontSize(){return this.trState.props.fontSize}set fontSize(e){this.textRenderer.set.fontSize(this.trState,e),this.updateText()}get fontFamily(){return this.trState.props.fontFamily}set fontFamily(e){this.textRenderer.set.fontFamily(this.trState,e),this.updateText()}get fontStretch(){return this.trState.props.fontStretch}set fontStretch(e){this.textRenderer.set.fontStretch(this.trState,e),this.updateText()}get fontStyle(){return this.trState.props.fontStyle}set fontStyle(e){this.textRenderer.set.fontStyle(this.trState,e),this.updateText()}get fontWeight(){return this.trState.props.fontWeight}set fontWeight(e){this.textRenderer.set.fontWeight(this.trState,e),this.updateText()}get textAlign(){return this.trState.props.textAlign}set textAlign(e){this.textRenderer.set.textAlign(this.trState,e),this.updateText()}get contain(){return this.trState.props.contain}set contain(e){this.textRenderer.set.contain(this.trState,e),this.updateText()}get scrollable(){return this.trState.props.scrollable}set scrollable(e){this.textRenderer.set.scrollable(this.trState,e),this.updateText()}get scrollY(){return this.trState.props.scrollY}set scrollY(e){this.textRenderer.set.scrollY(this.trState,e),this.updateText()}get offsetY(){return this.trState.props.offsetY}set offsetY(e){this.textRenderer.set.offsetY(this.trState,e),this.updateText()}get letterSpacing(){return this.trState.props.letterSpacing}set letterSpacing(e){this.textRenderer.set.letterSpacing(this.trState,e),this.updateText()}get debug(){return this.trState.props.debug}set debug(e){this.textRenderer.set.debug(this.trState,e),this.updateText()}update(e){super.update(e),_(this.globalTransform),this.textRenderer.set.x(this.trState,this.globalTransform.tx),this.textRenderer.set.y(this.trState,this.globalTransform.ty),this.trState.status==="loading"&&this.textRenderer.updateState(this.trState)}updateText(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>{this.updateScheduled=!1,this.textRenderer.updateState(this.trState)}))}renderQuads(e,o){_(this.globalTransform),this.textRenderer.renderQuads(this.trState,this.globalTransform,o,this.worldAlpha)}resolveTextRendererAndState(e,o){const s=this.stage.resolveTextRenderer(e,this._textRendererOverride),i=s.createState(e);return o&&["loading","loaded","failed"].forEach(l=>{o.emitter.off(l)}),i.emitter.on("loading",()=>{i.emitter.once("fontLoaded",()=>{this.updateText()}),i.emitter.once("loaded",()=>{i.emitter.off("fontLoaded")})}),i.emitter.on("loaded",this.onTextLoaded),i.emitter.on("failed",this.onTextFailed),this.updateText(),{resolvedTextRenderer:s,textRendererState:i}}}class Rr extends Tt{constructor(t,e,o){super(t,e,o,new Ir(o,{id:mo(),x:t.x,y:t.y,width:t.width,height:t.height,alpha:t.alpha,clipping:t.clipping,color:t.color,colorTop:t.colorTop,colorBottom:t.colorBottom,colorLeft:t.colorLeft,colorRight:t.colorRight,colorTl:t.colorTl,colorTr:t.colorTr,colorBl:t.colorBl,colorBr:t.colorBr,zIndex:t.zIndex,zIndexLocked:t.zIndexLocked,scaleX:t.scaleX,scaleY:t.scaleY,mountX:t.mountX,mountY:t.mountY,mount:t.mount,pivot:t.pivot,pivotX:t.pivotX,pivotY:t.pivotY,rotation:t.rotation,text:t.text,fontSize:t.fontSize,fontFamily:t.fontFamily,fontWeight:t.fontWeight,fontStretch:t.fontStretch,fontStyle:t.fontStyle,contain:t.contain,scrollable:t.scrollable,letterSpacing:t.letterSpacing,textAlign:t.textAlign,scrollY:t.scrollY,offsetY:t.offsetY,textRendererOverride:t.textRendererOverride,debug:t.debug,parent:null,texture:null,textureOptions:null,shader:null,shaderProps:null}))}get text(){return this.coreNode.text}set text(t){this.coreNode.text=t}get textRendererOverride(){return this.coreNode.textRendererOverride}set textRendererOverride(t){this.coreNode.textRendererOverride=t}get fontSize(){return this.coreNode.fontSize}set fontSize(t){this.coreNode.fontSize=t}get fontFamily(){return this.coreNode.fontFamily}set fontFamily(t){this.coreNode.fontFamily=t}get fontWeight(){return this.coreNode.fontWeight}set fontWeight(t){this.coreNode.fontWeight=t}get fontStretch(){return this.coreNode.fontStretch}set fontStretch(t){this.coreNode.fontStretch=t}get fontStyle(){return this.coreNode.fontStyle}set fontStyle(t){this.coreNode.fontStyle=t}get textAlign(){return this.coreNode.textAlign}set textAlign(t){this.coreNode.textAlign=t}get contain(){return this.coreNode.contain}set contain(t){this.coreNode.contain=t}get scrollable(){return this.coreNode.scrollable}set scrollable(t){this.coreNode.scrollable=t}get scrollY(){return this.coreNode.scrollY}set scrollY(t){this.coreNode.scrollY=t}get offsetY(){return this.coreNode.offsetY}set offsetY(t){this.coreNode.offsetY=t}get letterSpacing(){return this.coreNode.letterSpacing}set letterSpacing(t){this.coreNode.letterSpacing=t}get debug(){return this.coreNode.debug}set debug(t){this.coreNode.debug=t}}const Mr="modulepreload",zr=function(r){return"/"+r},Gt={},bo=function(t,e,o){if(!e||e.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=zr(i),i in Gt)return;Gt[i]=!0;const n=i.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(!!o)for(let f=s.length-1;f>=0;f--){const m=s[f];if(m.href===i&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":Mr,n||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),n)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})};function Or(r){return r.prototype instanceof Zo}async function Fr(r,t){let e;try{console.log("Loading core extension",r),e=await bo(()=>import(r),[])}catch(s){console.error(`The core extension module at '${r}' could not be loaded.`),console.error(s);return}if(!e.default){console.error(`The core extension module at '${r}' does not have a default export.`);return}const o=e.default;if(Or(o)){const s=new o;try{await s.run(t)}catch(i){console.error(`The core extension at '${r}' threw an error.`),console.error(i)}}else console.error(`The core extension at '${r}' does not extend CoreExtension.`)}class Ar{constructor(){a(this,"root",null);a(this,"stage",null);a(this,"rendererMain",null)}async init(t,e,o){this.stage=new kr({rootId:1,appWidth:e.appWidth,appHeight:e.appHeight,deviceLogicalPixelRatio:e.deviceLogicalPixelRatio,devicePhysicalPixelRatio:e.devicePhysicalPixelRatio,clearColor:e.clearColor,canvas:o,debug:{monitorTextureCache:!1}}),this.rendererMain=t,_(this.stage.root);const s=new Tt(t.resolveNodeDefaults({}),this.rendererMain,this.stage,this.stage.root);this.root=s,s.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,s)),this.onCreateNode(s),e.coreExtensionModule&&await Fr(e.coreExtensionModule,this.stage)}createNode(t){_(this.rendererMain),_(this.stage);const e=new Tt(t,this.rendererMain,this.stage);return e.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,e)),this.onCreateNode(e),e}createTextNode(t){_(this.rendererMain),_(this.stage);const e=new Rr(t,this.rendererMain,this.stage);return e.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,e)),this.onCreateNode(e),e}destroyNode(t){t.destroy()}releaseTexture(t){const{stage:e}=this;_(e),e.txManager.removeTextureIdFromCache(t)}getRootNode(){return _(this.root),this.root}onCreateNode(t){throw new Error("Method not implemented.")}onBeforeDestroyNode(t){throw new Error("Method not implemented.")}}const ne=typeof self>"u"?globalThis:self;function It(r,t){if(!r)throw new Error(t||"Assertion failed")}class vo{constructor(t,e){a(this,"threadx");a(this,"sharedObjectStruct");a(this,"mutations");a(this,"waitPromise",null);a(this,"mutationsQueued",!1);a(this,"_id");a(this,"_typeId");a(this,"initialized",!1);a(this,"destroying",!1);a(this,"curProps");a(this,"eventListeners",{});this.curProps=e,this.threadx=He.instance,this.sharedObjectStruct=t,this._id=t.id,this._typeId=t.typeId;const o=this.constructor;if(!Object.prototype.hasOwnProperty.call(o,"staticInitialized")||!o.staticInitialized){o.staticInitialized=!0;const s=Object.getPrototypeOf(this);Object.keys(e).forEach(i=>{Object.defineProperty(s,i,{get:function(){return this.curProps[i]},set:function(n){this.curProps[i]=n,this.mutations[i]=!0,this.queueMutations()}})})}this.mutations={},this._executeMutations(),this.initialized=!0}static extractBuffer(t){if(t.destroying||!t.sharedObjectStruct)throw new Error("SharedObject.extractBuffer(): SharedObject is or was being destroyed.");return t.sharedObjectStruct.buffer}get typeId(){return this._typeId}get id(){return this._id}processDirtyProperties(){if(!this.sharedObjectStruct)throw new Error("SharedObject was destroyed");const{sharedObjectStruct:t,mutations:e,curProps:o}=this;t.constructor.propDefs.forEach((s,i)=>{if(t.isDirty(i)){const n=s.name;delete e[n];const l=o[n];o[n]=t[n],this.initialized&&this.onPropertyChange(n,t[n],l)}}),t.resetDirty()}onPropertyChange(t,e,o){}queueMutations(){this.mutationsQueued||(this.mutationsQueued=!0,queueMicrotask(()=>{this.mutationsQueued=!1,this.sharedObjectStruct&&this.mutationMicrotask().catch(console.error)}))}async mutationMicrotask(){if(!this.sharedObjectStruct)throw new Error("SharedObject was destroyed");await this.sharedObjectStruct.lockAsync(async()=>{this._executeMutations()}),this.destroying&&this.finishDestroy()}flush(){if(this.destroying||!this.sharedObjectStruct)throw new Error("SharedObject was destroyed");this.sharedObjectStruct.lock(()=>{this._executeMutations()})}onDestroy(){}destroy(){const t=this.sharedObjectStruct;this.destroying||!t||(this.emit("beforeDestroy",{},{localOnly:!0}),this.destroying=!0,this.onDestroy(),this.queueMutations())}finishDestroy(){const t=this.sharedObjectStruct;!this.destroying||!t||(this.threadx.forgetObjects([this],{silent:!0}).catch(console.error),this.sharedObjectStruct=null,t.notify(),this.emit("afterDestroy",{},{localOnly:!0}),this.eventListeners={})}get isDestroyed(){return this.sharedObjectStruct===null}_executeMutations(){if(!this.sharedObjectStruct)return;this.sharedObjectStruct.notifyValue!==this.threadx.workerId&&this.sharedObjectStruct.isDirty()&&this.processDirtyProperties();const{mutations:t}=this;this.mutations={};for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const i=this.curProps[s];this.sharedObjectStruct[s],this.sharedObjectStruct[s]=i}this.waitPromise&&(this.waitPromise=null);let e=this.sharedObjectStruct.notifyValue;this.sharedObjectStruct.isDirty()&&(this.sharedObjectStruct.notify(this.threadx.workerId),e=this.threadx.workerId);const o=this.sharedObjectStruct.waitAsync(e).then(async s=>{this.waitPromise===o&&this.sharedObjectStruct&&(It(s==="ok"),this.waitPromise=null,await this.mutationMicrotask())});this.waitPromise=o}on(t,e){let o=this.eventListeners[t];o||(o=[]),o.push(e),this.eventListeners[t]=o}off(t,e){const o=this.eventListeners[t];if(!o)return;const s=o.indexOf(e);s>=0&&o.splice(s,1)}once(t,e){const o=(s,i)=>{this.off(t,o),e(s,i)};this.on(t,o)}emit(t,e,o={}){const s=this.eventListeners[t];o.localOnly||He.instance.__sharedObjectEmit(this,t,e),s&&[...s].forEach(i=>{i(this,e)})}}a(vo,"staticInitialized",!1);function Eo(r){return r>=65&&r<=90||r>=48&&r<=57}function $o(r){let t=0;if(r.length===0)throw new Error("genTypeId: Type ID string must be at least 1 character");if(r.length>4)throw new Error("genTypeId: Type ID string must be 4 characters or less");for(let e=0;e<r.length;e++){let o=r.charCodeAt(e);if(o!==o)o=0;else if(!Eo(o))throw new Error(`genTypeId: Invalid character '${r[e]}' (char code: ${o}) in type ID string. A-Z and 0-9 only.`);t|=o<<e*8}return t}function ht(r){const t=[];for(let e=0;e<4;e++){const o=r&255;if(Eo(o))t.push(String.fromCharCode(o));else if(o!==0||e===0)return"????";r>>>=8}return t.join("")}function Ce(r,t){return typeof t=="object"&&t!==null&&"threadXMessageType"in t&&t.threadXMessageType===r}function Lr(r){return typeof r.DedicatedWorkerGlobalScope=="function"}class He{constructor(t){a(this,"workerId");a(this,"workerName");a(this,"sharedObjectFactory");a(this,"onSharedObjectCreated");a(this,"onBeforeObjectForgotten");a(this,"onUserMessage");a(this,"sharedObjects",new Map);a(this,"sharedObjectData",new WeakMap);a(this,"workers",new Map);a(this,"workerReadyPromises",new Map);a(this,"pendingAsyncMsgs",new Map);a(this,"nextAsyncMsgId",0);a(this,"nextUniqueId",0);a(this,"suppressSharedObjectEmit",!1);this.workerId=t.workerId,this.workerName=t.workerName,this.nextUniqueId=t.workerId*1e13+1,this.sharedObjectFactory=t.sharedObjectFactory,this.onSharedObjectCreated=t.onObjectShared,this.onBeforeObjectForgotten=t.onBeforeObjectForgotten,this.onUserMessage=t.onMessage;const e=ne;Lr(e)&&(this.registerWorker("parent",e),this.sendMessage("parent",{threadXMessageType:"ready"}))}static init(t){if(ne.THREADX)throw new Error("ThreadX.init(): ThreadX already initialized.");const e=new He(t);return ne.THREADX=e,e}static destroy(){if(!ne.THREADX){console.warn("ThreadX.destroy(): ThreadX is not initialized.");return}delete ne.THREADX}static get workerId(){if(!ne.THREADX)throw new Error("ThreadX not initialized");return ne.THREADX.workerId}static get workerName(){if(!ne.THREADX)throw new Error("ThreadX not initialized");return ne.THREADX.workerName}static get instance(){if(!ne.THREADX)throw new Error("ThreadX not initialized");return ne.THREADX}registerWorker(t,e){this.workers.set(t,e);let o,s;t==="parent"?(s=Promise.resolve(),o=()=>{}):s=new Promise(i=>{o=i}),this.workerReadyPromises.set(t,{promise:s,resolve:o}),this.listenForWorkerMessages(t,e)}closeWorker(t){if(!this.workers.has(t))throw new Error(`Worker ${t} not registered.`);this.closeWorkerAsync(t).catch(console.error)}async closeWorkerAsync(t,e=5e3){var i;const o=this.workers.get(t);if(!o)throw new Error(`Worker ${t} not registered.`);const s=await Promise.race([new Promise(n=>{setTimeout(()=>{n(!1)},e)}),this.sendMessageAsync(t,{threadXMessageType:"close"})]);return this.workers.delete(t),this.workerReadyPromises.delete(t),s?"graceful":(console.warn(`threadX.closeWorkerAsync(): Worker "${t}" did not respond to "close" message within ${e}ms. Forcing termination.`),(i=o.terminate)==null||i.call(o),"forced")}listenForWorkerMessages(t,e){e.addEventListener("message",o=>{const{data:s}=o,i=s.__asyncMsgId;this.onMessage(t,s).then(n=>{i!==void 0&&e.postMessage({threadXMessageType:"response",asyncMsgId:i,data:n})}).catch(n=>{i!==void 0&&e.postMessage({threadXMessageType:"response",asyncMsgId:i,error:!0,data:n})})})}async shareObjects(t,e){for(const o of e)this.sharedObjects.get(o.id)?console.warn(`ThreadX.shareObject(): SharedObject ${o.id} (TypeID: ${ht(o.typeId)}) is already shared.`):(this.sharedObjects.set(o.id,o),this.sharedObjectData.set(o,{workerName:t,shareConfirmed:!1,emitQueue:null}));await this.sendMessageAsync(t,{threadXMessageType:"shareObjects",buffers:e.map(o=>vo.extractBuffer(o))});for(const o of e){const s=this.sharedObjectData.get(o);if(s){s.shareConfirmed=!0;const{emitQueue:i}=s;if(i){for(const n of i)this.__sharedObjectEmit(o,n[0],n[1]);s.emitQueue=null}}}}async forgetObjects(t,e={}){const o=new Map;for(const i of t)if(!this.sharedObjects.has(i.id))e.silent||console.warn(`ThreadX.forgetObject(): SharedObject ${i.id} (TypeID: ${ht(i.typeId)}) is not shared.`);else{const n=this.sharedObjectData.get(i);It(n);let l=o.get(n.workerName);l||(l=[],o.set(n.workerName,l)),l.push(i),this.sharedObjects.delete(i.id),this.sharedObjectData.delete(i)}const s=[];for(const[i,n]of o)s.push(this.sendMessageAsync(i,{threadXMessageType:"forgetObjects",objectIds:n.map(l=>l.id)}));await Promise.all(s)}sendMessage(t,e,o){if(!this.workers.get(t))throw new Error(`ThreadX.sendMessage(): Worker '${t}' not registered.`);this.sendMessageAsync(t,e,o,{skipResponseWait:!0}).catch(console.error)}async sendMessageAsync(t,e,o,s={}){const i=this.workers.get(t);if(!i)throw new Error(`ThreadX.execMessage(): Worker '${t}' not registered.`);if(await this.workerReadyPromises.get(t).promise,s.skipResponseWait){i.postMessage(e,o);return}const n=this.nextAsyncMsgId++,l=new Promise((d,c)=>{this.pendingAsyncMsgs.set(n,{resolve:d,reject:c})});return e.__asyncMsgId=n,i.postMessage(e,o),l}async onMessage(t,e){var o;if(Ce("shareObjects",e))e.buffers.forEach(s=>{var n,l;const i=(n=this.sharedObjectFactory)==null?void 0:n.call(this,s);if(!i)throw new Error("ThreadX.onMesasge(): Failed to create shared object.");this.sharedObjects.set(i.id,i),this.sharedObjectData.set(i,{workerName:t,shareConfirmed:!0,emitQueue:null}),(l=this.onSharedObjectCreated)==null||l.call(this,i)});else if(Ce("forgetObjects",e))e.objectIds.forEach(s=>{var n;const i=this.sharedObjects.get(s);i&&((n=this.onBeforeObjectForgotten)==null||n.call(this,i),this.sharedObjects.delete(s),i.destroy())});else if(Ce("sharedObjectEmit",e)){const s=this.sharedObjects.get(e.sharedObjectId);if(!s)return;this.suppressSharedObjectEmit=!0,s.emit(e.eventName,e.data),this.suppressSharedObjectEmit=!1}else if(Ce("response",e)){const s=this.pendingAsyncMsgs.get(e.asyncMsgId);if(!s)throw new Error(`ThreadX.onMessage(): Received response for unknown request (ID: ${e.asyncMsgId})`);this.pendingAsyncMsgs.delete(e.asyncMsgId),e.error?s.reject(e.data):s.resolve(e.data)}else{if(Ce("close",e))return ne.close(),!0;if(Ce("ready",e))return(o=this.workerReadyPromises.get(t))==null||o.resolve(),!0;if(this.onUserMessage)return await this.onUserMessage(e)}}getSharedObjectById(t){return this.sharedObjects.get(t)||null}generateUniqueId(){return this.nextUniqueId++}__sharedObjectEmit(t,e,o){if(this.suppressSharedObjectEmit)return;const s=this.sharedObjectData.get(t);if(!s)return;if(!s.shareConfirmed){s.emitQueue||(s.emitQueue=[]),s.emitQueue.push([e,o]);return}const i=this.workers.get(s.workerName);It(i,"Worker not found"),i.postMessage({threadXMessageType:"sharedObjectEmit",sharedObjectId:t.id,eventName:e,data:o})}}const Pe=0,ke=1,ae=2,we=6,Kt=2,et=255;function tt(r,t,e){return r===t}function ot(r,t){return r===t}function I(r,t){return function(e,o,s){const i=e.constructor;(!Object.prototype.hasOwnProperty.call(i,"staticInitialized")||!i.staticInitialized)&&i.initStatic();let n=i.size,l=0,d=0;r==="string"?(n+=n%2,l=n/2,d=(et+1)*2):r==="int32"||r==="boolean"?(n+=n%4,l=n/4,d=4):r==="number"&&(n+=n%8,l=n/8,d=8);const c=i.propDefs,f=c.length,m={propNum:f,name:o,type:r,byteOffset:n,offset:l,byteSize:d};c.push(m),i.size=n+d,s.get=function(){let x;if(r==="string"){const u=this.uint16array[l];if(!u)return"";if(u>et)throw new Error(`get SharedObject.${o}: Text length is too long. Length: ${u}`);x=String.fromCharCode(...this.uint16array.slice(l+1,l+1+u))}else r==="int32"?x=this.int32array[l]:r==="boolean"?x=!!this.int32array[l]:r==="number"&&(x=this.float64array[l]);return t!=null&&t.bufferToProp&&(x=t.bufferToProp(x)),x},s.set=function(x){if(t!=null&&t.propToBuffer&&(x=t.propToBuffer(x)),tt("string",r)){if(!ot(x,this[o])){this.setDirty(f);let u=x.length;u>et&&(console.error(`set SharedObject.${o}: Text length is too long. Truncating...`,u),u=et),this.uint16array[l]=u;const y=l+1,g=y+u;let w=0;for(let p=y;p<g;p++)this.uint16array[p]=x.charCodeAt(w++)}}else tt("int32",r)?ot(x,this[o])||(this.setDirty(f),this.int32array[l]=x):tt("boolean",r)?ot(x,this[o])||(this.setDirty(f),this.int32array[l]=x?1:0):tt("number",r)&&(ot(x,this[o])||(this.setDirty(f),this.float64array[l]=x))}}}const me=class me{constructor(t){a(this,"buffer");a(this,"lockId",Math.floor(Math.random()*4294967295));a(this,"uint16array");a(this,"int32array");a(this,"float64array");const e=this.constructor;(!Object.prototype.hasOwnProperty.call(e,"staticInitialized")||!e.staticInitialized)&&e.initStatic();const o=!t;t||(t=new SharedArrayBuffer(Math.ceil(e.size/8)*8)),this.buffer=t,this.uint16array=new Uint16Array(t),this.int32array=new Int32Array(t),this.float64array=new Float64Array(t);const s=e.typeId;if(o)this.int32array[Pe]=s,this.float64array[Kt]=He.instance.generateUniqueId();else if(this.int32array[Pe]!==s)throw new Error(`BufferStruct: TypeId mismatch. Expected '${e.typeIdStr}', got '${ht(this.int32array[Pe])}'`)}static extractTypeId(t){return t.byteLength<me.size||t.byteLength%8!==0?0:new Int32Array(t)[Pe]||0}static initStatic(){const t=ht(this.typeId);if(t==="????")throw new Error("BufferStruct.typeId must be set to a valid 32-bit integer");this.typeIdStr=t,this.propDefs=[...this.propDefs],this.staticInitialized=!0}setDirty(t){const e=Math.floor(t/32),o=t-e*32;this.int32array[we+e]=this.int32array[we+e]|1<<o}resetDirty(){this.int32array[ke]=0,this.int32array[we]=0,this.int32array[we+1]=0}isDirty(t){if(t!==void 0){const e=Math.floor(t/32),o=t-e*32;return!!(this.int32array[we+e]&1<<o)}return!!(this.int32array[we]||this.int32array[we+1])}get typeId(){return this.int32array[Pe]}get id(){return this.float64array[Kt]}get notifyValue(){return Atomics.load(this.int32array,ke)}get isLocked(){return Atomics.load(this.int32array,ae)!==0}lock(t){let e=Atomics.compareExchange(this.int32array,ae,0,this.lockId);for(;e!==0;){try{Atomics.wait(this.int32array,ae,e)}catch(s){if(!(s instanceof TypeError&&s.message==="Atomics.wait cannot be called in this context"))throw s}e=Atomics.compareExchange(this.int32array,ae,0,this.lockId)}let o;try{o=t()}finally{Atomics.store(this.int32array,ae,0),Atomics.notify(this.int32array,ae)}return o}async lockAsync(t){let e=Atomics.compareExchange(this.int32array,ae,0,this.lockId);for(;e!==0;)await Atomics.waitAsync(this.int32array,ae,e).value,e=Atomics.compareExchange(this.int32array,ae,0,this.lockId);let o;try{o=await t()}finally{Atomics.store(this.int32array,ae,0),Atomics.notify(this.int32array,ae)}return o}notify(t){return t!==void 0&&Atomics.store(this.int32array,ke,t),Atomics.notify(this.int32array,ke)}wait(t,e=1/0){return Atomics.wait(this.int32array,ke,t,e)}async waitAsync(t,e=1/0){return Atomics.waitAsync(this.int32array,ke,t,e).value}};a(me,"staticInitialized",!1),a(me,"typeId",0),a(me,"typeIdStr",""),a(me,"size",8*4),a(me,"propDefs",[]);let Rt=me;var P=globalThis&&globalThis.__decorate||function(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var l=r.length-1;l>=0;l--)(n=r[l])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};class L extends Rt{get x(){return 0}set x(t){}get y(){return 0}set y(t){}get width(){return 0}set width(t){}get height(){return 0}set height(t){}get alpha(){return 1}set alpha(t){}get clipping(){return!1}set clipping(t){}get color(){return 0}set color(t){}get colorTop(){return 0}set colorTop(t){}get colorBottom(){return 0}set colorBottom(t){}get colorLeft(){return 0}set colorLeft(t){}get colorRight(){return 0}set colorRight(t){}get colorTl(){return 0}set colorTl(t){}get colorTr(){return 0}set colorTr(t){}get colorBl(){return 0}set colorBl(t){}get colorBr(){return 0}set colorBr(t){}get scaleX(){return 1}set scaleX(t){}get scaleY(){return 1}set scaleY(t){}get mount(){return 0}set mount(t){}get mountX(){return 0}set mountX(t){}get mountY(){return 0}set mountY(t){}get pivot(){return .5}set pivot(t){}get pivotX(){return .5}set pivotX(t){}get pivotY(){return .5}set pivotY(t){}get rotation(){return 0}set rotation(t){}get parentId(){return 0}set parentId(t){}get zIndex(){return 0}set zIndex(t){}get zIndexLocked(){return 0}set zIndexLocked(t){}}a(L,"typeId",$o("NODE"));P([I("number")],L.prototype,"x",null);P([I("number")],L.prototype,"y",null);P([I("number")],L.prototype,"width",null);P([I("number")],L.prototype,"height",null);P([I("number")],L.prototype,"alpha",null);P([I("boolean")],L.prototype,"clipping",null);P([I("number")],L.prototype,"color",null);P([I("number")],L.prototype,"colorTop",null);P([I("number")],L.prototype,"colorBottom",null);P([I("number")],L.prototype,"colorLeft",null);P([I("number")],L.prototype,"colorRight",null);P([I("number")],L.prototype,"colorTl",null);P([I("number")],L.prototype,"colorTr",null);P([I("number")],L.prototype,"colorBl",null);P([I("number")],L.prototype,"colorBr",null);P([I("number")],L.prototype,"scaleX",null);P([I("number")],L.prototype,"scaleY",null);P([I("number")],L.prototype,"mount",null);P([I("number")],L.prototype,"mountX",null);P([I("number")],L.prototype,"mountY",null);P([I("number")],L.prototype,"pivot",null);P([I("number")],L.prototype,"pivotX",null);P([I("number")],L.prototype,"pivotY",null);P([I("number")],L.prototype,"rotation",null);P([I("number")],L.prototype,"parentId",null);P([I("number")],L.prototype,"zIndex",null);P([I("number")],L.prototype,"zIndexLocked",null);var te=globalThis&&globalThis.__decorate||function(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var l=r.length-1;l>=0;l--)(n=r[l])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};class Z extends L{get text(){return""}set text(t){}get textRendererOverride(){return null}set textRendererOverride(t){}get fontSize(){return 0}set fontSize(t){}get fontFamily(){return""}set fontFamily(t){}get fontStretch(){return"normal"}set fontStretch(t){}get fontStyle(){return"normal"}set fontStyle(t){}get fontWeight(){return"normal"}set fontWeight(t){}get textAlign(){return"left"}set textAlign(t){}get contain(){return"none"}set contain(t){}get scrollable(){return!1}set scrollable(t){}get scrollY(){return 0}set scrollY(t){}get offsetY(){return 0}set offsetY(t){}get letterSpacing(){return 0}set letterSpacing(t){}}a(Z,"typeId",$o("TEXT"));te([I("string")],Z.prototype,"text",null);te([I("string",{propToBuffer(r){return r??"$$null"},bufferToProp(r){return r==="$$null"?null:r}})],Z.prototype,"textRendererOverride",null);te([I("number")],Z.prototype,"fontSize",null);te([I("string")],Z.prototype,"fontFamily",null);te([I("string")],Z.prototype,"fontStretch",null);te([I("string")],Z.prototype,"fontStyle",null);te([I("string")],Z.prototype,"fontWeight",null);te([I("string")],Z.prototype,"textAlign",null);te([I("string")],Z.prototype,"contain",null);te([I("boolean")],Z.prototype,"scrollable",null);te([I("number")],Z.prototype,"scrollY",null);te([I("number")],Z.prototype,"offsetY",null);te([I("number")],Z.prototype,"letterSpacing",null);const rt=()=>{},gt=()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),To=r=>{const t=Ft.get("debugLevel"),e={};return Object.defineProperty(e,"info",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("info")>-1)&&console.info.bind(window.console,`%c ⚡️ ${r} %c ${gt()}`,"background-color: #0284c7; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||rt}}),Object.defineProperty(e,"warn",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("warn")>-1)&&console.warn.bind(window.console,`%c ⚡️ ${r} %c ${gt()}`,"background-color: #fbbf24; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||rt}}),Object.defineProperty(e,"error",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("error")>-1)&&console.error.bind(window.console,`%c ⚡️ ${r} %c ${gt()}`,"background-color: #dc2626; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||rt}}),Object.defineProperty(e,"debug",{get(){return(t>=2||Array.isArray(t)&&t.indexOf("debug")>-1)&&console.debug.bind(window.console,`%c ⚡️ ${r} %c (${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})})`,"background-color: #e2e8f0; color: #334155; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||rt}}),e};let B;const Pr=()=>{B=To("Blits")};let ge;const Dr=(r,t,e)=>{Ft.set(e),Pr();const o=new Ar;ge=new ir({appWidth:e.w||1920,appHeight:e.h||1080,coreExtensionModule:e.fontLoader},t,o);const s=()=>{let i=r();i.quit=()=>{B.info("Closing App"),i.destroy(),i=null,ge=null}};ge.init().then(()=>s())},Vt={aliceblue:4042850303,antiquewhite:4209760255,aqua:4294967040,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,transparent:0,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},xt={normalize(r=""){if(r=r.toString(),r.startsWith("0x"))return r;const t=/rgba?\((.+)\)/gi,e=/hsla?\((.+)\)/gi;if(t.test(r)){const o=new RegExp(t).exec(r);if(o[1])return r=o[1].split(",").map((s,i)=>(i==3&&(s=Math.min(Math.max(Math.round(s*255),0),255)),parseInt(s).toString(16).padStart(2,"0"))).join(""),r.padEnd(8,"f").padStart(10,"0x")}else{if(e.test(r))return B.warn("HSL(A) color format is not supported yet"),4294967295;if(r in Vt)return Vt[r];r.startsWith("#")&&(r=r.substring(1))}return r.length===3&&(r=r.split("").map(o=>o+o).join("")),r.padEnd(8,"f").padStart(10,"0x")}},Nr=r=>typeof r=="object"&&"transition"in r,yt=r=>typeof r=="string"&&r.startsWith("{")&&r.endsWith("}"),wt=r=>JSON.parse(r.replace(/'/g,'"').replace(/([\w-_]+)\s*:/g,'"$1":')),V={unpackTransition(r){return typeof r=="object"&&r.constructor.name==="Object"?"value"in r?r.value:"transition"in r?this.unpackTransition(r.transition):r:r},remap(r){"w"in r&&(r.width=r.w),delete r.w,"h"in r&&(r.height=r.h),delete r.h,"z"in r&&(r.zIndex=r.z),delete r.z,"wordWrap"in r&&(r.width=r.wordWrap),delete r.wordWrap},parent(r){r.parent==="root"?r.parent=ge.root:r.parent=r.parent.node},color(r){if(typeof r.color=="object"||yt(r.color)&&(r.color=wt(r.color))){const t={top:"colorTop",bottom:"colorBottom",left:"colorLeft",right:"colorRight"};Object.entries(r.color).forEach(e=>{r[t[e[0]]]=xt.normalize(e[1])}),delete r.mount}else r.color=xt.normalize(r.color)},percentage(r,t){const o={w:"width",width:"width",x:"width",h:"height",height:"height",y:"height"}[t];o&&(r[t]=this.node._parent[o]*(parseFloat(r[t])/100))},mount(r){if(typeof r.mount=="object"||yt(r.mount)&&(r.mount=wt(r.mount))){const t={x:"mountX",y:"mountY"};Object.entries(r.mount).forEach(e=>{r[t[e[0]]]=e[1]}),delete r.mount}},pivot(r){if(typeof r.pivot=="object"||yt(r.pivot)&&(r.pivot=wt(r.pivot))){const t={x:"pivotX",y:"pivotY"};Object.entries(r.pivot).forEach(e=>{r[t[e[0]]]=e[1]}),delete r.pivot}},show(r){r.alpha=r.show?1:0,delete r.show},rotation(r){r.rotation=r.rotation*(Math.PI/180)},text(r){r.text=r.text!==void 0?r.text.toString():""},textureColor(r){"color"in r||(r.color="src"in r||"texture"in r?"0xffffffff":"0x00000000")},effects(r){r.shader=ge.createShader("DynamicShader",{effects:r.effects.map(t=>(t.props&&t.props.color&&(t.props.color=xt.normalize(t.props.color)),t))}),delete r.effects},src(r,t){t.indexOf("color")===-1&&(r.color=4294967295)},texture(r,t){this.src(r,t)},maxLines(r,t,e){r.maxLines&&(r.height=r.maxLines*e.node.fontSize),delete r.maxLines}},Br={defaults:{rotation:0},populate(r){const t={...this.defaults,...this.config,...r};this.initData=r,t[h.isSlot]&&(this[h.isSlot]=!0),V.remap(t),Object.keys(t).forEach(e=>{V[e]&&(t[e]=V.unpackTransition(t[e]),V[e](t,this.setProperties)),this.setProperties.push(e)}),V.textureColor(t,this.setProperties),this.node=t.__textnode?ge.createTextNode(t):ge.createNode(t),t["@loaded"]&&this.node.on("loaded",(e,{type:o,dimensions:s})=>{t["@loaded"]({w:s.width,h:s.height,type:o},this)}),t["@error"]&&this.node.on("failed",(e,o)=>{t["@error"](o,this)})},set(r,t){if(Nr(t)&&this.setProperties.indexOf(r)>-1)this.animate(r,t.transition);else{const e={};r!=="texture"?e[r]=V.unpackTransition(t):e[r]=t,V.remap(e),V[r]&&V[r](e,this.setProperties,this),Object.keys(e).forEach(o=>{typeof e[o]=="string"&&e[o].endsWith("%")&&V.percentage.call(this,e,o),this.node[o]=e[o]})}this.setProperties.indexOf(r)===-1&&this.setProperties.push(r)},delete(){B.debug("Deleting  Node",this.nodeId,this.node),this.node.parent=null},get nodeId(){return this.node&&this.node.id},get ref(){return this.initData.ref||null},animate(r,t){const e={};if(e[r]=V.unpackTransition(t),V.remap(e),V[r]&&V[r](e),r=Object.keys(e).pop(),typeof e[r]=="string"&&e[r].endsWith("%")&&V.percentage.call(this,e,r),this.node[r]!==e[r]){const o=this.node.animate(e,{duration:typeof t=="object"&&"duration"in t?t.duration:300,easing:typeof t=="object"&&"function"in t?t.function:"ease"});return new Promise(s=>{t.delay?setTimeout(()=>o.start().waitUntilStopped().then(s),t.delay):o.start().waitUntilStopped().then(s)})}}},So=r=>Object.assign(Object.create(Br),{node:null,setProperties:[],initData:{},config:r}),Qt={};let Yr=0;const Xr=r=>`BlitsComponent::${r}_${Qt[r]=(Qt[r]||0)+1}`,jr=()=>++Yr,xe={},Wr=(r,t,e)=>{xe[t]&&xe[t][r]&&xe[t][r].apply(e)},Hr=(r,t,e)=>{const o=h[r];xe[t]&&xe[t][o]&&xe[t][o].apply(e)},Ur=(r={},t)=>{xe[t]={},[...Object.keys(r),...Object.getOwnPropertySymbols(r)].forEach(o=>{typeof r[o]=="function"&&(xe[t][o]=r[o])})};let Xe=null;const Mt=new WeakMap,_o=(r,t)=>{if(Xe){let e=Mt.get(r);e||(e=new Map,Mt.set(r,e));let o=e.get(t);o||(o=new Set,e.set(t,o)),o.add(Xe)}},ft=(r,t,e=!1)=>{const o=Mt.get(r);if(!o)return;const s=o.get(t);s&&s.forEach(i=>{i(e)})},Zt=r=>{Xe=r,Xe(),Xe=null},qr=["constructor","includes","indexOf","lastIndexOf","push","pop","shift","splice","unshift"],Jt=new WeakMap,zt=r=>{const t=Jt.get(r);if(t)return t;const e={get(s,i,n){return Array.isArray(s)&&qr.includes(i)?Reflect.get(s,i,n):(_o(s,i),s[i]!==null&&typeof s[i]=="object"?zt(s[i]):Reflect.get(s,i,n))},set(s,i,n,l){const d=s[i],c=Reflect.set(s,i,n,l);return typeof c=="object"&&zt(s[i]),(i==="length"||c&&d!==n)&&ft(s,i),c}},o=new Proxy(r,e);return Jt.set(r,o),o},Co=r=>(Object.keys(r).forEach(t=>{let e=r[t];if(r[t]!==null&&typeof r[t]=="object"&&Object.getPrototypeOf(r[t])===Object.prototype)return Co(r[t]);Object.defineProperty(r,t,{enumerable:!0,configurable:!0,get(){return _o(r,t),e},set(o){e!==o&&(e=o,ft(r,t))}})}),r),eo=(r,t="proxy")=>t==="proxy"?zt(r):Co(r),Gr={before:{prop:"alpha",value:0},in:{prop:"alpha",value:1,duration:200},out:{prop:"alpha",value:0,duration:100}};let Dt,dt=!1;const ko=new WeakMap,Kr=()=>(document.location.hash||"/").replace(/^#/,""),Vr=(r,t=[])=>{const e=t.filter(o=>o.path===r).pop();return e&&(Dt=e),e},Qr=async function(){if(dt=!0,this.parent[h.routes]){const r=Dt,t=Kr(),e=Vr(t,this.parent[h.routes]);if(e){"transition"in e||(e.transition=Gr),typeof e.transition=="function"&&(e.transition=e.transition(r,e));let o,{view:s,focus:i}=ko.get(e)||{};if(s?o=s.wrapper:(o=So({parent:this[h.children][0]}),o.populate({}),o.set("w","100%"),o.set("h","100%"),s=await e.component(this[h.props],o,this),s[Symbol.toStringTag]==="Module"&&(s.default&&typeof s.default=="function"?s=s.default(this[h.props],o,this):B.error("Dynamic import doesn't have a default export or default is not a function")),typeof s=="function"&&(s=s(this[h.props],o,this))),this[h.children].push(s),e.transition.before)if(Array.isArray(e.transition.before))for(let l=0;l<e.transition.before.length;l++)o.set(e.transition.before[l].prop,e.transition.before[l].value);else o.set(e.transition.before.prop,e.transition.before.value);let n=!1;if(r){n=!0;const l=this[h.children].splice(1,1).pop();l&&Zr(r,l,e.transition.out)}if(e.transition.in)if(Array.isArray(e.transition.in))for(let l=0;l<e.transition.in.length;l++)l===e.transition.length-1?await Oe(o,e.transition.in[l],n):Oe(o,e.transition.in[l],n);else await Oe(o,e.transition.in,n);i?Ue.set(i):s.focus()}else B.error(`Route ${t} not found`)}dt=!1},Zr=async(r,t,e)=>{if(e)if(Array.isArray(e))for(let o=0;o<e.length;o++)o===e.length-1?await Oe(t.wrapper,e[o]):Oe(t.wrapper,e[o]);else await Oe(t.wrapper,e);if(r.options&&r.options.keepAlive===!0)ko.set(r,{view:t,focus:Ue.get()});else{for(let o=0;o<t[h.children].length-1;o++)t[h.children][o]&&t[h.children][o].destroy&&(t[h.children][o].destroy(),t[h.children][o]=null);t.destroy(),t=null}},Oe=(r,t,e=!0)=>e?r.animate(t.prop,t):r.set(t.prop,t.value),Io=r=>{window.location.hash=`#${r}`},to={navigate:Qr,to:Io};let he=null;const Ue={get(){return he},set(r,t){r!==he&&(he&&he!==r.parent&&he.unfocus(),he=r,he.lifecycle.state="focus",t instanceof KeyboardEvent&&document.dispatchEvent(new KeyboardEvent("keydown",t)))},input(r,t){if(dt===!0)return;const e=Ro([he],r),o=e.shift();o&&(o!==he&&(e.reverse().forEach(s=>s.unfocus()),o.focus()),o[h.inputEvents][r]?o[h.inputEvents][r].call(o,t):o[h.inputEvents].any&&o[h.inputEvents].any.call(o,t))}},Ro=(r,t)=>r[0][h.inputEvents]&&(typeof r[0][h.inputEvents][t]=="function"||typeof r[0][h.inputEvents].any=="function")?r:r[0].parent?(r.unshift(r[0].parent),Ro(r,t)):[],Jr=()=>_e("Image",{template:`
      <Element :imageSource="$imageSource" />`,props:["src"],computed:{imageSource(){return/^(?:https?:)?\/\//i.test(this.src)?this.src:`${window.location.protocol}//${window.location.host}/${this.src}`}}}),es=()=>_e("Circle",{template:`
      <Element :color="$color" :w="$size" :h="$size" :effects="[$shader('radius', {radius: $radius})]"></Element>
    `,props:[{key:"size",default:40},"color"],computed:{radius(){return this.size/2}}});let bt;const ts=()=>_e("RouterView",{template:`
      <Element w="100%" height="100%"></Element>
    `,hooks:{ready(){bt=()=>to.navigate.apply(this),to.navigate.apply(this),window.addEventListener("hashchange",bt)},destroy(){window.removeEventListener("hashchange",bt,!1)}}}),os=()=>_e("Sprite",{template:`
      <Element w="$w" h="$h" :texture="$texture" />
    `,props:["image","map","frame","w","h"],state(){return{spriteTexture:!1}},computed:{texture(){const r="frames"in this.map?{...this.map.defaults||{},...this.map.frames[this.frame]}:this.map[this.frame];if(this.spriteTexture&&r)return this[h.renderer].createTexture("SubTexture",{texture:this.spriteTexture,x:r.x,y:r.y,width:r.w,height:r.h})}},hooks:{ready(){this.spriteTexture=this[h.renderer].createTexture("ImageTexture",{src:`${window.location.protocol}//${window.location.host}/${this.image}`})}}}),rs=()=>_e("Text",{template:`
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
      />`,props:["content",{key:"font",default:"lato"},{key:"size",cast:Number,default:32},"style","color","weight","letterspacing","stretch","align","wordwrap","maxlines","contain","@loaded","@error"],computed:{_contain(){return this.contain||(this.wordwrap&&this.maxlines?"both":this.wordwrap?"width":"none")}}}),st=new Map,vt={registerListener(r,t,e){let o=st.get(t);o||(o=new Map,st.set(t,o));let s=o.get(r);s||(s=new Set,o.set(r,s)),s.add(e)},executeListeners(r,t){const e=st.get(r);e&&e.forEach(o=>{o.forEach(s=>{s(t)})})},removeListeners(r){st.forEach(t=>{const e=t.get(r);e&&(e.clear(),t.delete(e))})}},oo={radius:"radius",rounded:"radius",border:"border",borderTop:"borderTop",borderBottom:"borderBottom",borderLeft:"borderLeft",borderRight:"borderRight",grayScale:"grayscale",glitch:"glitch"},ss=r=>{Object.defineProperties(r.prototype,{focus:{value:function(t){Ue.set(this,t)},writable:!1,enumerable:!0,configurable:!1},unfocus:{value:function(){this.lifecycle.state="unfocus"},writable:!1,enumerable:!0,configurable:!1},destroy:{value:function(){this.lifecycle.state="destroy";for(let t=0;t<this[h.timeouts].length;t++)clearTimeout(this[h.timeouts][t]);for(let t=0;t<this[h.intervals].length;t++)clearInterval(this[h.intervals][t]);vt.removeListeners(this),Mo(this[h.children]),B.debug(`Destroyed component ${this.componentId}`)},writable:!1,enumerable:!0,configurable:!1},select:{value:function(t){let e=null;return this[h.children].forEach(o=>{Array.isArray(o)?o.forEach(s=>{s.ref===t&&(e=s)}):Object.getPrototypeOf(o)===Object.prototype?Object.keys(o).forEach(s=>{o[s].ref===t&&(e=o[s])}):o.ref===t&&(e=o)}),e},writable:!1,enumerable:!0,configurable:!1},shader:{value:function(t,e){if(t in oo)return{type:oo[t],props:e};B.error(`Shader ${t} not found`)},writable:!1,enumerable:!1,configurable:!1},$router:{value:{to:Io,get currentRoute(){return Dt},get routes(){return r.prototype[h.routes]},get navigating(){return dt}},writable:!1,enumerable:!0,configurable:!1},[h.components]:{value:{Image:Jr(),Circle:es(),RouterView:ts(),Sprite:os(),Text:rs()},writable:!1,enumerable:!1,configurable:!1},[h.timeouts]:{value:[],writable:!1,enumerable:!1,configurable:!1},$setTimeout:{value:function(t,e,...o){const s=setTimeout(()=>{this[h._timeouts]=this[h.timeouts].filter(i=>i!==s),t.apply(null,o)},e,o);return this[h.timeouts].push(s),s},writable:!1,enumerable:!0,configurable:!1},[h.intervals]:{value:[],writable:!1,enumerable:!1,configurable:!1},$setInterval:{value:function(t,e,...o){const s=setInterval(()=>{this[h._intervals]=this[h.intervals].filter(i=>i!==s),t.apply(null,o)},e,o);return this[h.intervals].push(s),s},writable:!1,enumerable:!0,configurable:!1},$emit:{value:function(t,e){vt.executeListeners(t,e)},writable:!1,enumerable:!0,configurable:!1},$listen:{value:function(t,e){vt.registerListener(this,t,e)},writable:!1,enumerable:!0,configurable:!1},[h.renderer]:{value:ge,writable:!1,enumerable:!1,configurable:!1},$log:{value:To("App"),writable:!1,enumerable:!1,configurable:!1},$trigger:{value:function(t){ft(this[h.originalState],t,!0)},writable:!1,enumerable:!1,configurable:!1}})},Mo=function(r){for(let t=0;t<r.length;t++){if(!r[t])return;Array.isArray(r[t])?Mo(r[t]):r[t].delete?r[t].delete():r[t].destroy&&(r[t].destroy(),r[t]=null),r[t]=null}r=[]},is={cast:r=>r,required:!1},ns=(r,t=[])=>{t.indexOf("ref")===-1&&t.push("ref"),r[h.propKeys]=[],t.forEach(e=>{e={...is,...typeof e=="object"?e:{key:e}},r[h.propKeys].push(e.key),Object.defineProperty(r.prototype,e.key,{get(){const o=e.cast(this[h.props]&&e.key in this[h.props]?this[h.props][e.key]:e.default||void 0);return e.required&&o===void 0&&B.warn(`${e.key} is required`),o},set(o){B.warn(`Warning! Avoid mutating props directly (${e.key})`),this[h.props][e.key]=o}})})},as=(r,t)=>{r[h.methodKeys]=[];for(let e in t)r[h.propKeys]&&r[h.propKeys].indexOf(e)>-1?B.error(`${e} already exists as a prop`):(typeof t[e]!="function"&&B.warn(`${e} is not a function`),r[h.methodKeys].push(e),r.prototype[e]=t[e])},ls=(r,t)=>{r[h.stateKeys]=[],t=t.apply(r.prototype),Object.keys(t).forEach(e=>{r[h.propKeys]&&r[h.propKeys].indexOf(e)>-1&&B.error(`State ${e} already exists as a prop`),r[h.methodKeys]&&r[h.methodKeys].indexOf(e)>-1&&B.error(`State ${e} already exists as a method`),r[h.stateKeys].push(e);try{Object.defineProperty(r.prototype,e,{get(){return this[h.state]&&e in this[h.state]&&this[h.state][e]},set(o){this[h.state]&&(this[h.state][e]=o)}})}catch(o){B.error(o)}})},cs=(r,t)=>{r[h.computedKeys]=[];for(let e in t)r[h.stateKeys]&&r[h.stateKeys].indexOf(e)>-1?B.error(`${e} already exists as a prop`):r[h.propKeys]&&r[h.propKeys].indexOf(e)>-1?B.error(`${e} already exists as a prop`):r[h.methodKeys]&&r[h.methodKeys].indexOf(e)>-1?B.error(`${e} already exists as a method`):(typeof t[e]!="function"&&B.warn(`${e} is not a function`),r[h.computedKeys].push(e),Object.defineProperty(r.prototype,e,{get(){return t[e].apply(this)}}))},hs=(r,t)=>{r.prototype[h.inputEvents]=[],Object.keys(t).forEach(e=>{typeof t[e]!="function"&&B.warn(`${t[e]} is not a function`),r.prototype[h.inputEvents][e]=t[e]})},fs=(r,t)=>{r.prototype[h.routes]=[],Object.keys(t).forEach(e=>{r.prototype[h.routes][e]=t[e]})},ds=(r,t)=>{r.prototype[h.watchKeys]=[],r.prototype[h.watchers]={};for(let e in t)typeof t[e]!="function"&&console.warn(`${e} is not a function`),r.prototype[h.watchKeys].push(e),r.prototype[h.watchers][e]=function(o,s){t[e].call(this,o,s)}},ro={element:So},so=r=>{throw new Error(`Parameter ${r} is required`)},_e=(r=so("name"),t=so("config"))=>{let e=null;const o=l=>{e||(B.debug(`Generating code for ${r} component`),e=er.call(t,Jo(t.template))),ss(i),Ur(t.hooks,r),l.state="beforeSetup",ns(i,t.props),t.methods&&as(i,t.methods),t.state&&ls(i,t.state),t.computed&&cs(i,t.computed),t.watch&&ds(i,t.watch),t.routes&&fs(i,t.routes),t.input&&hs(i,t.input),i.setup=!0,l.state="setup"},s=l=>{const d=["init","beforeSetup","setup","ready","focus","unfocus","destroy"];return{previous:null,current:null,get state(){return this.current},set state(c){d.indexOf(c)>-1&&c!==this.current&&(B.debug(`Setting lifecycle state from ${this.previous} to ${c} for ${l.componentId}`),this.previous=this.current,Hr(c,r,l),Wr(c,r,l),this.current=c)}}},i=function(l,d,c){this.lifecycle=s(this),i.setup||o(this.lifecycle),this.parent=c,this.wrapper=d,Object.defineProperties(this,{type:{value:r,writable:!1,enumerable:!0,configurable:!1},componentId:{value:Xr(r),writable:!1,enumerable:!0,configurable:!1},[h.id]:{value:jr(),writable:!1,enumerable:!1,configurable:!1},[h.props]:{value:eo(l.props||{}),writable:!1,enumerable:!1,configurable:!1}}),Object.defineProperty(this,h.originalState,{value:t.state&&typeof t.state=="function"&&t.state.apply(this)||{},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,h.state,{value:eo(this[h.originalState]),writable:!1,enumerable:!1,configurable:!1}),this.lifecycle.state="init",Object.defineProperty(this,h.children,{value:e.render.apply(ro,[d,this,e.context]),writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,h.slots,{value:this[h.children].filter(f=>f[h.isSlot]),writable:!1,enumerable:!1,configurable:!1}),e.effects.forEach(f=>{Zt(()=>{f.apply(ro,[this,this[h.children],e.context])})}),this[h.watchers]&&Object.keys(this[h.watchers]).forEach(f=>{let m=this[f];Zt((x=!1)=>{(m!==this[f]||x===!0)&&(this[h.watchers][f].apply(this,[this[f],m]),m=this[f])})}),setTimeout(()=>this.lifecycle.state="ready")},n=(l={},d,c)=>new i(l,d,c);return n.config=t,n},us=r=>{const t={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",Enter:"enter"," ":"space",Backspace:"back",Escape:"escape",37:"left",39:"right",38:"up",40:"down",13:"enter",32:"space",8:"back",27:"escape"};r.hooks=r.hooks||{};let e;return r.hooks[h.destroy]=function(){document.removeEventListener("keydown",e)},r.hooks[h.init]=function(){const s={...t,...Ft.get("keymap",{})};e=i=>{const n=s[i.key]||s[i.keyCode]||i.key||i.keyCode;Ue.input(n,i)},document.addEventListener("keydown",e),setTimeout(()=>Ue.set(this))},_e("App",r)},k={Component:_e,Application:us,Launch:Dr},ps=new URL("fontLoader-71d0d162.js",import.meta.url).href,ms=k.Component("PortalItem",{template:`
    <Element w="370" h="320" :scale.transition="$scale" :color="$backgroundColor" :effects="[$shader('radius', {radius: 6})]">
      <Text x="30" y="30" :content="$number" size="84" :color="$fontColor" />
      <Text x="30" y="140" :content="$title" size="42" font="raleway" :color="$fontColor" letterspacing="2" />
      <Text x="30" y="200" :content="$description" wordwrap="300" size="28" :color="$fontColor" lineheight="32" />
    </Element>
  `,props:["title","description","index","id"],state(){return{backgroundColor:"#44037a",scale:1,fontColor:"#e8d7f9",number:this.index<9?`0${this.index+1}`:this.index+1}},hooks:{focus(){this.backgroundColor="#fafafa",this.fontColor="#000",this.scale=1.1},unfocus(){this.$router.navigating||(this.backgroundColor="#44037a",this.fontColor="#e8d7f9",this.scale=1)}},input:{enter(){this.$router.to(`/${this.id}`)},back(){}}}),gs=k.Component("PortalRow",{components:{PortalItem:ms},template:`
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
  `,props:["title","items"],state(){return{focused:0,rowOffset:60,itemOffset:240}},hooks:{ready(){this.itemOffset=0},focus(){this.$trigger("focused")}},watch:{focused(r){const t=this.select(`item${r}`);t&&t.focus&&(t.focus(),r<1?this.rowOffset=60:r>this.items.length-2?this.rowOffset=60-(this.items.length-2)*430+430:this.rowOffset=60-r*430+430)}},input:{left(){this.focused>0?this.focused--:this.focused=this.items.length-1},right(){this.focused<this.items.length-1?this.focused++:this.focused=0}}}),xs="@lightningjs/blits-example-app",ys="0.4.1",ws="Lightning 3 Blits Example App",bs="index.js",vs="module",Es={start:"npm run dev",lint:"eslint '**/*.js'","lint:fix":"eslint '**/*.js' --fix",build:"vite build",dev:"vite dev --host"},$s={hooks:{"pre-commit":"lint-staged"}},Ts="Michiel van der Geest <hello@michielvandergeest.com>",Ss="Apache-2",_s={eslint:"^8.8.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0",husky:"^7.0.4","lint-staged":"^12.3.3",prettier:"^2.5.1",vite:"^4.0.4"},Cs={"@lightningjs/blits":"^0.5.0"},ks={name:xs,version:ys,description:ws,main:bs,type:vs,scripts:Es,"lint-staged":{"*.js":["eslint --fix"]},husky:$s,author:Ts,license:Ss,devDependencies:_s,dependencies:Cs},Is=k.Component("Portal",{components:{PortalRow:gs},template:`
    <Element w="1920" h="1080" color="{top: '#44037a', bottom: '#240244'}">
      <PortalRow  mountY="0.5" h="500" :y.transition="-$rowFocused * 420 + 550" title="Demos" items="$demo" ref="row0" />
      <PortalRow  mountY="0.5" h="500" :y.transition="-$rowFocused * 420 + 1100" title="Examples and tests" items="$example" ref="row1" />
      <PortalRow  mountY="0.5" h="500" :y.transition="-$rowFocused * 420 + 1650" title="Benchmarks and stress tests" items="$benchmark" ref="row2" />
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
    </Element>`,state(){return{version:ks.version,offset:60,rowFocused:0,rows:["demo","example","benchmark"],logoOffset:50,demo:[{title:"Loader",id:"demos/loading",description:"A basic loading screen"},{title:"Intro",id:"demos/intro",description:"A splash screen with custom animations"},{title:"Theming",id:"demos/theming",description:"Dynamically changing the styling of a component with themes"},{title:"TMDB",id:"demos/tmdb",description:"The Movie Database (TMDB) example using data from a remote API"},{title:"Sprites",id:"demos/sprites",description:"Display multiple images while keeping low memory footprint"},{title:"Focus",id:"demos/focushandling",description:"Managing focus between components in a simple layout"}],example:[{title:"Positioning",id:"examples/positioning",description:"Positioning Elements and Components"},{title:"Colors",id:"examples/colors",description:"Using different formats and notations for defining colors"},{title:"Gradients",id:"examples/gradients",description:"Example of Basic gradients"},{title:"Transitions",id:"examples/transitions",description:"Comparing different transition easing functions"},{title:"Components",id:"examples/components",description:"Reusable Components"},{title:"Alpha",id:"examples/alpha",description:"Applying transparency to Elements, Images and Components"},{title:"Scaling",id:"examples/scaling",description:"Resizing and scaling Elements and Components"},{title:"Rotation",id:"examples/rotation",description:"Rotating Elements"},{title:"Key input",id:"examples/keyinput",description:"Handling user input events"},{title:"For Loop",id:"examples/forloop",description:"Iterating over Elements and Components using for loops"},{title:"Effects",id:"examples/effects",description:"Applying one or multiple effects (aka shaders)"},{title:"Show",id:"examples/showif",description:"Conditionally show or hide Elements and Components"},{title:"Events",id:"examples/events",description:"Communication between components by emitting and listening for events"},{title:"Images",id:"examples/images",description:"1 image says more than 1000 words ;)"},{title:"Texts",id:"examples/texts",description:"Displaying and formatting text"},{title:"Slots",id:"examples/slots",description:"Insert dynamic content from a parent into a child using slots"}],benchmark:[{title:"Exponential",id:"benchmarks/exponential",description:"Spawn a large number of components at an exponential rate"}]}},hooks:{ready(){this.logoOffset=0,this.$trigger("rowFocused")}},watch:{rowFocused(r){const t=this.select(`row${r}`);t&&t.focus&&t.focus()}},input:{up(){this.rowFocused=(this.rowFocused-1+this.rows.length)%this.rows.length},down(){this.rowFocused=(this.rowFocused+1)%this.rows.length}}}),Rs=k.Component("Letter",{template:`
    <Element>
      <Element w="$w" :h.transition="{value: 410+$offset, duration: $duration, delay: $wait, function: $timingFunction}" color="#E6E6E6" />
      <Element w="$w" h="280" :src="$image" :y.transition="{value: 400+$offset, duration: $duration, delay: $wait, function: $timingFunction}" />
      <Element w="$w" color="#E6E6E6"
        :h.transition="{value: 500-$offset, duration: $duration, delay: $wait, function: $timingFunction}"
        :y.transition="{value: 660+$offset, duration: $duration, delay: $wait, function: $timingFunction}"
      />
    </Element>`,props:["w","letter","direction","delay"],computed:{image(){return`${window.location.protocol}//${window.location.host}/assets/${this.letter}.png`}},state(){return{offset:this.direction==="up"?-680:680,duration:1e3,wait:0,timingFunction:"cubic-bezier(1,-0.64,.39,1.44)"}},hooks:{ready(){this.animate()}},methods:{animate(){this.$setTimeout(()=>{this.offset=0},1e3),this.$setTimeout(()=>{this.wait=this.delay+150,this.duration=1e3,this.offset=1080},2800),this.$setTimeout(()=>{this.wait=this.delay/3,this.timingFunction="ease-in-out",this.duration=1500,this.offset=0},5e3)}}}),Ms=k.Component("Intro",{components:{Letter:Rs},template:`
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
    </Element>`,state(){return{background:`${window.location.protocol}//${window.location.host}/assets/background.png`}}}),zs=k.Component("Toggle",{template:`
    <Element w="100" h="50" y="5" :color="$bgColor" :effects="[$shader('radius', {radius:25})]">
      <Circle :x.transition="$on ? 0 : 50" size="50" :color="$primaryColor" />
    </Element>
  `,props:["bgColor","primaryColor","on"]}),Os=k.Component("Bar",{template:`
    <Element :w="{value: $w, duration: $duration}" :h="{value: $h, duration: $duration}" :color="$bgColor" :x="$index * ($w + ($w / 4))" :effects="[$shader('radius', {radius:10})]">
      <Element :w="$w" :y.transition="{value: $h-$innerH, duration: $duration}" :h.transition="{value: $innerH, duration: $duration}" :color="$primaryColor" :effects="[$shader('radius', {radius:10})]" />
    </Element>
  `,props:["bgColor","primaryColor","height","index","size"],state(){return{h:200,innerH:0,duration:400}},hooks:{ready(){this.innerH=this.height}},computed:{w(){return this.size==="large"?110:72}},watch:{bgColor(){this.duration=1e-6,this.innerH=0,this.$setTimeout(()=>{this.duration=400,this.innerH=this.height},200)},size(){this.duration=1e-6,this.innerH=0,this.$setTimeout(()=>{this.duration=400,this.innerH=this.height},100)}}}),Fs={color1:"#475569",color2:"#64748b",color3:"#cbd5e1",color4:"#38bdf8",bg:"#1e293b80"},As={color1:"#f8fafc",color2:"#e2e8f0",color3:"#1e293b",color4:"#0369a1",bg:"#f1f5f9"},Ls=k.Component("Theming",{components:{Bar:Os,Toggle:zs},template:`
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
  `,state(){return{mode:"dark",radius:20,width:500,height:600}},computed:{colors(){return this.mode==="dark"?Fs:As},text(){return this.mode==="dark"?"Dark mode":"Light mode"},block1(){return{height:this.height===600?180:720}},block2(){return{y:this.height===600?140:560,h:this.height===600?180:300,w:this.height===600?200:890}},graph(){return{x:this.height===600?32:270,y:this.height===600?370:140,w:this.height===600?0:890,h:this.height===600?0:400,offset:this.height===600?0:110,size:this.height===600?"small":"large"}}},input:{right(){this.toggleX=0,this.$setTimeout(()=>{this.mode="light"},150)},left(){this.toggleX=48,this.$setTimeout(()=>{this.mode="dark"},150)},up(){this.width=1200,this.height=900},down(){this.width=500,this.height=600}}}),Ps="ABC123",Ds="https://8b4fa39d.lightningjs.workers.dev";let zo,Oo;const Ns="w185",Bs={headers:{"Content-Type":"application/json",Authorization:"Bearer "+Ps}};function io(r,t=Ns){return Oo+t+r}function Ys(...r){return zo?Ot(...r):Fo().then(()=>Ot(...r))}function Ot(r,t={}){return fetch(Ds+r,{...Bs,...t}).then(e=>e.json())}function Fo(){return Ot("/configuration").then(r=>(zo=r,Oo=r.images.secure_base_url,r))}const Xs={get:Ys,loadConfig:Fo};function js(r){return Xs.get(`/${r}/popular`).then(t=>t.results.filter(o=>!o.adult).map(o=>({poster:io(o.poster_path||o.profile_path),background:io(o.backdrop_path,"w1280"),identifier:o.id})))}const Ws=k.Component("Poster",{template:`
    <Element w="185" h="278" x="$x"
      :src="$src"
      :color="{top: '#fff', bottom: $colorBottom}"
      :scale.transition="{value: $scale, duration: 200, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      :effects="[$shader('radius', {radius: 8})]"
    />`,props:["src","index"],state(){return{scale:1,colorBottom:"#000"}},computed:{x(){return this.index*215}},hooks:{focus(){this.colorBottom="#fff",this.scale=1.1,this.$emit("posterSelect",this.index)},unfocus(){this.colorBottom="#000",this.scale=1}}}),Hs=k.Component("Background",{template:`
    <Element>
      <Element
        :src="$bg1" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha1, duration: 400, function: 'ease-in'}"
      />
      <Element
        :src="$bg2" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha2, duration: 400, function: 'ease-in'}"
      />
    </Element>`,props:["src"],state(){return{counter:0,alpha1:0,alpha2:0,bg1:!1,bg2:!1}},watch:{src(r){this.counter=(this.counter+1)%2,this.counter===0?(this.bg1=r,this.alpha1=.8,this.alpha2=0):(this.bg2=r,this.alpha1=0,this.alpha2=.8)}}}),Us=k.Component("TMdb",{components:{Poster:Ws,Background:Hs},template:`
    <Element w="1920" h="1080" color="black">
      <Background :src="$src" />
      <Element :alpha.transition="{value: $alphaIn, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
        <Element src="assets/logo.png" x="130" :y.transition="{value: $logoY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}" w="243" h="52" />
        <Element :x.transition="{value: $x, duration: 300, function: 'ease-in-out'}"  :y.transition="{value: $listY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
          <Poster :for="(item, index) in $items" index="$index" src="$item.poster" ref="$item.identifier"/>
        </Element>
      </Element>
    </Element>`,state(){return{items:[],src:"",focused:null,alphaIn:.001,logoY:30,listY:750}},computed:{x(){return this.focused<=1?150:150-Math.min(this.focused-1,this.items.length-8)*215}},watch:{focused(r){const t=this.select(this.items[r].identifier);t&&t.focus&&t.focus()}},hooks:{ready(){this.alphaIn=1,this.listY=700,this.logoY=80,js("movie").then(r=>{this.items=r,this.focused=0,this.background=r[this.focused].background}),this.$listen("posterSelect",r=>{this.src=this.items[r].background})}},input:{left(){this.focused=Math.max(this.focused-1,0)},right(){this.focused=Math.min(this.focused+1,this.items.length-1)}}}),qs=k.Component("MenuSprite",{template:`
    <Element>
      <Element>
        <Element src="assets/menusprite.png" x="748" y="120" w="425" h="340" />
        <Element y="680" x="560">
          <Sprite image="assets/menusprite.png" x="0" w="140" h="140" map="$map" :frame="$icon1" />
          <Sprite image="assets/menusprite.png" x="220" w="140" h="140" map="$map" frame="icon2" />
          <Sprite image="assets/menusprite.png" x="440" w="140" h="140" map="$map" frame="icon3" />
          <Sprite image="assets/menusprite.png" x="660" w="140" h="140" map="$map" frame="icon4_unfocus" />
        <Element>
      </Element>
    </Element>
    `,state(){return{icon1:"icon1_unfocus",map:{defaults:{w:160,h:160},frames:{icon1_focus:{x:0,y:0},icon1_unfocus:{x:170,y:340},icon2:{x:170,y:0},icon3:{x:350,y:0},icon4_unfocus:{x:680,y:170}}}}},hooks:{ready(){this.$setInterval(()=>{this.icon1=this.icon1==="icon1_unfocus"?"icon1_focus":"icon1_unfocus"},2e3)}}}),it=["menu"],Gs=k.Component("Sprites",{components:{MenuSprite:qs},template:`
    <Element>
      <MenuSprite :show="$currentSprite === 'menu'"/>
    </Element>
    `,state(){return{currentSprite:"menu"}},input:{down(){const r=it.indexOf(this.currentSprite);r<it.length-1?this.currentSprite=it[r+1]:this.currentSprite=it[0]}}}),Ao=k.Component("Button",{template:`
    <Element w="300" h="80" color="$color"
      :effects="[$shader('rounded', {radius: 20})]"
      :alpha.transition="$alpha"
      :scale.transition="$scale"
      :z="$zIndex"
      :rotation="$rotate">
    </Element>`,props:["color"],state(){return{alpha:.4,scale:1,zIndex:1,rotate:0}},hooks:{focus(){this.$log.info(`Button with color ${this.color} received focus`),this.alpha=1,this.scale=this.scale===1?1.2:1,this.zIndex=100},unfocus(){this.$log.info(`Button with color ${this.color} lost focus`),this.alpha=.4,this.scale=1,this.zIndex=1,this.rotate=0}},input:{enter(){this.rotate=this.rotate===0?-4:0,this.scale=this.scale===1.2?1.3:1.2}}}),Ks=k.Component("Menu",{components:{Button:Ao},template:`
    <Element :x.transition="$x" w="400" h="1080" color="{right: '#64748baa', left: '#475569aa'}">
      <Element x="50" y="40">
        <Button color="#e4e4e7" ref="menu1" />
        <Button color="#e4e4e7" y="100" ref="menu2" />
        <Button color="#e4e4e7" y="200" ref="menu3" />
        <Button color="#e4e4e7" y="300" ref="menu4" />
      </Element>
    </Element>`,state(){return{x:-360,focused:1}},hooks:{focus(){this.select(`menu${this.focused}`).focus(),this.x=0},unfocus(){this.x=-360}},input:{right(){this.parent.focus()},left(r){this.parent.parent.focus(r)},down(){this.focused=Math.min(this.focused+1,4),this.select(`menu${this.focused}`).focus()},up(){this.focused=Math.max(this.focused-1,1),this.select(`menu${this.focused}`).focus()}}}),Vs=k.Component("FocusHandling",{components:{Menu:Ks,Button:Ao},template:`
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
    </Element>`,state(){return{focused:1}},hooks:{focus(){const r=this.select(`button${this.focused}`);r&&r.focus&&r.focus()}},watch:{focused(r){const t=this.select(`button${r}`);t&&t.focus&&t.focus()}},input:{right(r){this.focused+1===10?this.parent.focus(r):this.focused=Math.min(this.focused+1,9)},left(){const r=this.focused-1;if(r===0){const t=this.select("menu");t&&t.focus&&t.focus()}else this.focused=Math.max(r,1)},a(){const r=this.select("menu");r&&r.focus&&r.focus()}}}),Qs=k.Component("Positioning",{template:`
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

    </Element>`,state(){return{x1:20,x2:140,x3:20+140+100,x4:380,y:140,xA:20,xB:140,xC:260,xD:380,yNested:0,xNested:0,bar2:{direction:"up",v:"10%"},bar3:"10%"}},hooks:{ready(){this.$setTimeout(()=>{this.xD=this.xD+200,this.xC=this.xC+100,this.xB=this.xB+50,this.xA=this.xA+25},4e3),this.$setInterval(()=>{this.yNested=this.yNested===0?50:0},2e3),this.$setInterval(()=>{this.xNested=this.xNested===0?150:0},1e3),this.$setInterval(()=>{const r=parseFloat(this.bar2.v),t=this.bar2.direction==="up"?r+10:r-10;this.bar2.v=t+"%",t>=90&&(this.bar2.direction="down"),t<=10&&(this.bar2.direction="up")},400),this.$setInterval(()=>{this.bar3=Math.ceil(Math.random()*96)+"%"},2e3)}}}),Zs=k.Component("Colors",{template:`
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
    </Element>`,state(){return{bg:"#fff",color1:"#22d3ee",color2:"#dc2626",color3:"rgba(251, 191, 36)",color4:"#bfdbfe"}},input:{enter(){this.color1=this.color1==="#0891b2"?"#22d3ee":"#0891b2",this.color2=this.color2==="#dc2626"?"#0f0":"#dc2626",this.color3=this.color3==="rgba(251, 191, 36)"?"rgba(30, 64, 175, 0.5)":"rgba(251, 191, 36)",this.color4=this.color4==="#1e3a8a"?"#bfdbfe":"#1e3a8a"}},hooks:{ready(){let r=0;const t=["#fff","#333","#c0ff33","#546aaa","#000","tomato"];this.$setInterval(()=>{r=r+1,r===t.length-1&&(r=0),this.bg=t[r]},2e3)}}}),Js=k.Component("Gradients",{template:`
    <Element>
      <Element :w="1920/4" h="1080" color="{top: '#0891b2', bottom: '#a5f3fc'}" />
      <Element :w="1920/4" h="1080" :x="1920/4" color="{left: '#dc2626',  right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 2" color="{top: '#0891b2', right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 3" color="{right: 'green', bottom: 'gold'}" />
    </Element>`}),ei=k.Component("Transitions",{template:`
    <Element>
      <!-- simple, default transition -->
      <Element w="200" h="200" x="50" :y.transition="$y" color="#c4b5fd" />
      <!-- simple, default transition with object syntax -->
      <Element w="200" h="200" x="300" :y.transition="{value: $y}" color="#a78bfa" />
      <!-- transition with custom duration -->
      <Element w="200" h="200" x="550" :y.transition="{value: $y, duration: 1000}" color="#8b5cf6" />
      <!-- transition with custom duration and wait -->
      <Element w="200" h="200" x="800" :y.transition="{value: $y, duration: 500, delay: 1000}" color="#7c3aed" />
      <!-- transition with built-in easing function -->
      <Element w="200" h="200" x="1050" :y.transition="{value: $y, function: 'ease-in-out'}" color="#6d28d9" />
      <!-- transition with custom duration and a built-in easing function -->
      <Element w="200" h="200" x="1300" :y.transition="{value: $y, duration: 2000, function: 'ease-in-out-back'}" color="#5b21b6" />
      <!-- transition with custom duration and a custum bezier function -->
      <Element w="200" h="200" x="1550" :y.transition="{value: $y, duration: 800, function: 'cubic-bezier(1,-0.64,.39,1.44)'}" color="#4c1d95" />
    </Element>`,state(){return{y:50}},hooks:{ready(){this.$setTimeout(()=>{this.y=1080-50-200},2e3)}}}),ti=k.Component("Alpha",{template:`
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

    </Element>`,state(){return{alpha:.5,direction:"up",image:"assets/lightningbolt.png"}},hooks:{ready(){this.$setInterval(()=>{const r=this.direction==="up"?this.alpha+.2:this.alpha-.2;this.alpha=Math.max(Math.min(r,1),.1),this.alpha===1&&(this.direction="down"),this.alpha===.1&&(this.direction="up")},1400)}}}),oi=k.Component("Scaling",{template:`
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

    </Element>`,state(){return{scale:2,direction:"up",balloon:"assets/balloon.png",scale2:1}},hooks:{ready(){this.$setInterval(()=>{const r=this.direction==="up"?this.scale+.5:0;this.scale=Math.max(Math.min(r,8),0),this.scale===8&&(this.direction="down"),this.scale===0&&(this.direction="up")},500),this.$setInterval(()=>{this.scale2=this.scale2===1?3:1},2e3)}}}),ri=k.Component("Rotation",{template:`
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

    </Element>`,state(){return{rotation1:38,rotation2:0,rotation3:0}},hooks:{ready(){this.$setInterval(()=>{const r=this.rotation2+10;this.rotation2=r<=360?r:0},800),this.$setInterval(()=>{this.rotation3=Math.max(10,Math.min(720,this.rotation3*2)),this.rotation3===720&&(this.rotation3=0)},2e3)}}}),si=k.Component("KeyInput",{template:`
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

    </Element>`,state(){return{focusedX:0,focusedY:0,colorscheme:"yellow"}},computed:{blockColor(){return this.colorscheme==="yellow"?"#fef08a":"#bae6fd"},focusColor(){return this.colorscheme==="yellow"?"#facc15":"#38bdf8"}},input:{left(r){const t=this.focusedX-1;t===-1?this.parent.focus(r):this.focusedX=Math.max(t,0)},right(r){const t=this.focusedX+1;t===4?this.parent.focus(r):this.focusedX=Math.min(t,3)},up(){this.focusedY=Math.max(this.focusedY-1,0)},down(){this.focusedY=Math.min(this.focusedY+1,3)},enter(){this.colorscheme=this.colorscheme==="yellow"?"blue":"yellow"},any(r){const t=parseInt(r.key);isNaN(t)?this.parent.focus(r):(this.focusedX=Math.max(0,(t-1)%4),this.focusedY=Math.max(0,Math.ceil(t/4)-1))}}}),Et=["#64748b","#ef4444","#f97316","#84cc16","#14b8a6","#3b82f6"],$t=["Iron Man","Captain America","Thor","Hulk","Black Widow","Hawkeye","Scarlet Witch","Vision","Black Panther","Doctor Strange","Spider-Man","Ant-Man","Wasp","Captain Marvel","Falcon","Winter Soldier","War Machine","Quicksilver","Star-Lord","Gamora"],ii=k.Component("Texts",{template:`
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
    </Element>`,state(){return{color:Et[0],size:10,character:$t[0],myText:"This is my test yeah",longText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ante non mauris commodo tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis mattis mi. Aliquam ultricies mi vel lobortis luctus. Ut non feugiat urna. Duis sed blandit dui. Donec venenatis, mauris at blandit malesuada, elit nibh scelerisque lacus, non tempus arcu mi at justo."}},hooks:{ready(){let r=0;this.$setInterval(()=>{r++,r>Et.length-1&&(r=0),this.color=Et[r],this.size=10*(r*2+1)},1e3);let t=0;this.$setInterval(()=>{t++,t>$t.length-1&&(t=0),this.character=$t[t]},1400)}},methods:{textLoaded(r){this.$log.info(`Image loaded with w: ${r.w} and h: ${r.h}`)}}}),nt=["https://images.unsplash.com/photo-1690360994204-3d10cc73a08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80","https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"],ni=k.Component("Images",{template:`
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
      <Element  color="gold" src="assets/lightningbolt.png" w="428" h="234" x="600" y="100" />

      <!-- applying clipping -->
      <Element x="600" y="400" w="428" h="234" :clipping="$clipping">
        <Element src="assets/lightningbolt.png" w="856" h="468" />
      </Element>

    </Element>`,state(){return{image:nt[0],clipping:!0}},hooks:{ready(){this.$setInterval(()=>{this.image=this.image===nt[0]?nt[1]:nt[0],this.clipping=!this.clipping},2e3)}},methods:{imageLoaded(r){this.$log.info(`Image loaded with w: ${r.w} and h: ${r.h}`)}}}),Ke=k.Component("Square",{template:`
    <Element w="$size" h="$size" color="#86198f" />
  `,props:[{key:"size",default:80}]}),Lo=k.Component("Card",{components:{Square:Ke},template:`
    <Element w="$w" h="$h" color="#0891b2">
      <Square x="80" y="80" />
      <Square x="20" y="20" size="40" />
    </Element>`,props:["size"],computed:{w(){return this.size==="large"?400:200},h(){return this.size==="large"?500:300}}}),ai=k.Component("Components",{components:{Square:Ke,Card:Lo},template:`
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
    </Element>`,state(){return{x:100}},hooks:{ready(){this.$setInterval(()=>{this.x=this.x===100?250:100},2e3)}}}),Q=["#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"],li=k.Component("ForLoop",{components:{Square:Ke},template:`
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


    </Element>
  `,state(){return{collection1:[0,100,200,300,400,500],collection2:[{id:"block1",x:0,color:Q[0]},{id:"block2",x:100,color:Q[1]},{id:"block3",x:200,color:Q[2]},{id:"block4",x:300,color:Q[3]},{id:"block5",x:400,color:Q[4]},{id:"block6",x:500,color:Q[5]}],collection3:[],alpha:.5}},hooks:{ready(){this.$setTimeout(()=>{this.collection2[0].color=Q[5],this.collection2[1].color=Q[4],this.collection2[2].color=Q[3],this.collection2[3].color=Q[2],this.collection2[4].color=Q[1],this.collection2[5].color=Q[0]},4e3);let r=0;const t=this.$setInterval(()=>{this.collection3.push({x:r*100,color:Q[r]}),r++,r===Q.length&&clearInterval(t)},1e3);this.$setTimeout(()=>{this.alpha=this.alpha===.5?1:.5},800)}}}),ci=k.Component("Effects",{template:`
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
    </Element>`,state(){return{direction:"up",radius:0,effects:[this.shader("borderTop",{width:20,color:"#be123c"}),this.shader("borderBottom",{width:20,color:"#f43f5e"})]}},hooks:{ready(){this.$setInterval(()=>{const t=this.direction==="up"?this.radius+10:this.radius-10;this.radius=Math.max(Math.min(t,80),0),this.radius===80&&(this.direction="down"),this.radius===0&&(this.direction="up")},500);let r=0;this.$setInterval(()=>{r++,r%2?this.effects=[this.shader("borderLeft",{width:20,color:"#be123c"}),this.shader("borderRight",{width:20,color:"#f43f5e"})]:this.effects=[this.shader("borderTop",{width:20,color:"#be123c"}),this.shader("borderBottom",{width:20,color:"#f43f5e"})]},2e3)}}}),hi=k.Component("ShowIf",{components:{Square:Ke},template:`
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

    </Element>`,state(){return{showNr:1,hidNr:0,showBool:!0,hideBool:!1,showHideToggle:!0}},hooks:{ready(){this.$setInterval(()=>{this.showHideToggle=!this.showHideToggle},2e3),this.$setTimeout(()=>{this.showNr=0,this.hideNr=1,this.showBool=!1,this.hideBool=!0},4e3)}}}),fi=k.Component("Events",{template:`
    <Element x="400" y="360">

      <Element w="280" h="280" color="#e5e7eb" :x="$x" y="-5" />

      <Element w="250" h="250" x="10" y="10" color="$colors[0]" />
      <Element w="250" h="250" x="290" y="10" color="$colors[1]" />
      <Element w="250" h="250" x="570" y="10" color="$colors[2]" />
      <Element w="250" h="250" x="850" y="10" color="$colors[3]" />
    </Element>`,state(){return{count:0,colors:["#fbbf24","#a3e635","#22d3ee","#f472b6"]}},computed:{x(){return this.count*280-5}},hooks:{unfocus(){this.$emit("changeBackground")}},input:{left(r){const t=this.count-1;t===-1?this.parent.focus(r):this.count=Math.max(t,0)},right(r){const t=this.count+1;t===4?this.parent.focus(r):this.count=Math.min(t,3)},enter(){this.$emit("changeBackground",this.colors[this.count])}}}),di=k.Component("SlotCard",{template:`
    <Element
      w="300" h="500"
      :effects="[$shader('radius', {radius: 20}), $shader('border', {width: 6, color: '#e2e8f0'})]" color="{top: '#94a3b8', bottom: '#475569'}"
    >
      <Slot x="20" y="20" />
      <Text content="$label" wordwrap="260" x="20" y="400" align="center" />
    </Element>
  `,props:[{key:"label"}]}),ui=k.Component("NamedSlotCard",{template:`
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
  `}),De=["#fff7ed","#fdba74","#f97316","#ea580c","#9a3412","#431407"],pi=k.Component("Components",{components:{SlotCard:di,NamedSlotCard:ui,Card:Lo,Square:Ke},template:`
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

    </Element>`,state(){return{color:De[0]}},hooks:{ready(){this.$setInterval(()=>{const r=De.indexOf(this.color)+1;this.color=r<=De.length?De[r]:De[0]},600)}}}),Ne=(r,t)=>Math.floor(Math.random()*(t-r+1)+r),mi=k.Component("Item",{template:`<Element
      src="assets/blits-b.png"
      w="96"
      h="168"
      :x.transition="{value: $x, duration: 3000}"
      :y.transition="{value: $y, duration: 3000}"
      :rotation.transition="{value: $rotation, duration: 3000}"
      :scale.transition="{value: $scale, duration: 1000}"
    />`,state(){return{x:Ne(20,1560),y:Ne(20,720),rotation:0,scale:.1}},hooks:{ready(){this.scale=1,this.$setInterval(()=>{this.scale=1,this.x=Ne(20,1740),this.y=Ne(20,900),this.rotation=Ne(10,360)},3e3)}}}),gi=k.Component("Exponential",{components:{Item:mi},template:`<Element>
    <Item :for="item in $items" key="$item" />
  </Element>`,state(){return{items:[]}},hooks:{ready(){const r=this.$setInterval(()=>{for(let t=0;t<=Math.floor(this.items.length/10);t++)this.items.push(`item${this.items.length}`);this.$log.info("# items",this.items.length),this.items.length>100&&clearInterval(r)},2e3)}}}),xi=k.Component("FPScounter",{template:`
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
    `,state(){return{sprite:{defaults:{y:1,w:20,h:20},frames:{false:{x:-1e3},0:{x:1},1:{x:23},2:{x:45},3:{x:67},4:{x:89},5:{x:111},6:{x:133},7:{x:155},8:{x:177},9:{x:199},avg:{x:221,w:48,h:25},fps:{x:271,w:43,h:25},max:{x:316,w:53,h:25},min:{x:371,w:47,h:25}}},fps:"-",avgFps:"-",minFps:"-",maxFps:"-"}},hooks:{init(){const r=[];let t=0,e=1e4,o=0,s=0,i=0,n=0,l=performance.now();const d=()=>{window.requestAnimationFrame(()=>{const c=performance.now();for(e<1e4&&l<=c-1e3&&(l=c,this.fps=t.toString().padStart(3,"0"),this.avgFps=s.toString().padStart(3,"0"),this.minFps=e.toString().padStart(3,"0"),this.maxFps=o.toString().padStart(3,"0"));r.length>0&&r[0]<=c-1e3;)r.shift();r.push(c),t=r.length,n>60&&(e=Math.min(t,e),o=Math.max(t,o),i+=t,s=Math.round(i/(n-60))),n++,d()})};d()}}}),yi=k.Application({components:{FPScounter:xi},template:`
    <Element w="1920" h="1080" :color="$backgroundColor">
      <RouterView ref="routerview" />
      <FPScounter x="1610" />
    </Element>`,state(){return{currentPage:0,backgroundColor:"#1e293b"}},routes:[{path:"/",component:Is,options:{keepAlive:!0}},{path:"/demos/loading",component:()=>bo(()=>import("./Loading-c6e46636.js"),["assets/Loading-c6e46636.js","assets/settings-27783f3c.js"])},{path:"/demos/intro",component:()=>new Promise(r=>{r(Ms)})},{path:"/demos/theming",component:Ls},{path:"/demos/tmdb",component:Us},{path:"/demos/sprites",component:Gs},{path:"/demos/focushandling",component:Vs},{path:"/examples/positioning",component:Qs},{path:"/examples/colors",component:Zs},{path:"/examples/gradients",component:Js},{path:"/examples/transitions",component:ei},{path:"/examples/alpha",component:ti},{path:"/examples/scaling",component:oi},{path:"/examples/rotation",component:ri},{path:"/examples/keyinput",component:si},{path:"/examples/texts",component:ii},{path:"/examples/images",component:ni},{path:"/examples/components",component:ai},{path:"/examples/forloop",component:li},{path:"/examples/effects",component:ci},{path:"/examples/showif",component:hi},{path:"/examples/events",component:fi},{path:"/examples/slots",component:pi},{path:"/benchmarks/exponential",component:gi}],hooks:{ready(){this.$listen("changeBackground",r=>{this.backgroundColor=r?r+80:"#1e293b"}),this.$router.routes.forEach((r,t)=>{r===this.$router.currentRoute&&(this.currentPage=t)})}},input:{escape(){this.quit()},back(){this.$router.to("/")}}});k.Launch(yi,"app",{w:1920,h:1080,multithreaded:!1,debugLevel:1,fontLoader:ps,fonts:[{family:"lato",type:"msdf",png:"/fonts/Lato-Regular.msdf.png",json:"/fonts/Lato-Regular.msdf.json"},{family:"raleway",type:"msdf",png:"/fonts/Raleway-ExtraBold.msdf.png",json:"/fonts/Raleway-ExtraBold.msdf.json"},{family:"opensans",type:"web",file:"/fonts/OpenSans-Medium.ttf"}]});export{k as B,Ke as S};