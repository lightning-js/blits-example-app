var bo=Object.defineProperty;var $o=(i,t,e)=>t in i?bo(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var l=(i,t,e)=>($o(i,typeof t!="symbol"?t+"":t,e),e);import{s as h,a as T,E as de,g as Eo,m as Tt,i as Ht,W as Fe,b as te,T as Ut,C as _o,S as To,c as So,d as Je,e as St,f as jt,B as Co,h as ko,j as Ro,k as et,l as Ct,n as Io,o as zo,p as Mo,q as gt}from"./settings-d7e15b36.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class ne extends Error{constructor(t,e,o){super(`TemplateParseError: ${t}`),this.name=e,this.context=o}}const Lo=(i="")=>{let t=0,e=[],o=null,s=0;const r=/^<\/?([a-zA-Z0-9_\-.]+)\s*/,n=/^\s*(\/?>)\s*/,a=/^([A-Za-z0-9:.\-_@]+)=\s*(["'])/,p=/^<>\s*/,c=/^\s*(<\/>)\s*/,d=()=>{i=b(i);try{return f(u),S(e)}catch(y){return y instanceof ne?console.error(`${y.message} | ${y.name}`):console.error(y),null}},f=y=>{t>=i.length||y()},b=y=>y.replace(/<!--.*?-->/gms,"").replace(/\r?\n\s*\r\n/gm," ").replace(/\r?\n\s*(\S)/gm," $1").replace(/\r?\n/g,"").trim(),m=y=>{const $=i.slice(t).match(y);return $&&(t+=$[0].length),$},u=()=>{m(p)?(e.push({type:null,[h.type]:"opening",[h.level]:s}),s++,f(u)):f(x)},x=()=>{m(c)?(s--,e.push({type:null,[h.type]:"closing",[h.level]:s}),f(u)):f(g)},g=()=>{const y=m(r);if(y)y[0].startsWith("</")?(s--,o={type:y[1],[h.type]:"closing",[h.level]:s}):(o={type:y[1],[h.type]:"opening",[h.level]:s},s++),f(w);else throw new ne("InvalidTag",i.slice(t))},w=()=>{const y=m(n);if(y){if(y[1]==="/>"){if(o[h.type]==="closing")throw new ne("InvalidClosingTag",i.slice(t-10));o[h.type]="self-closing",s--}if(o[h.type]==="opening"){const $=i.slice(t,i.indexOf("<",t));$&&(o.content=$,t+=$.length)}e.push(o),f(u)}else f(k)},k=()=>{const y=m(a);if(y){const $=y[2],M=new RegExp(`^(.*?)${$}\\s*`),E=m(M);if(E){const _=L(y[1],E[1]);o[_.name]=_.value,f(w)}else throw new ne("MissingOrInvalidAttributeValue",i.slice(t))}else throw new ne("InvalidAttribute",i.slice(t))},L=(y,$)=>{if(y.includes(".")){const[M,E]=y.split(".");return{name:M,value:`{${E}: ${$}}`}}return{name:y,value:$}},S=y=>{let $=[],M=!1,E={children:[]},_=E;for(let I=0;I<y.length;I++){let v=y[I];if(v[h.level]===0&&v[h.type]!=="closing"){if(M)throw new ne("MultipleTopLevelTags",R(v));M=!0}if(v[h.type]==="opening")$.push({[h.level]:v[h.level],[h.type]:v[h.type],type:v.type,parent:_});else if(v[h.type]==="closing"){const V=$.length===0;let j=!1,oe=!1;if(V||(j=$[$.length-1][h.level]!==v[h.level],oe=$[$.length-1].type!==v.type),V||j||oe)throw new ne("MismatchedClosingTag",R(v));_=$.pop().parent}const F={...v};delete F[h.type],delete F[h.level],v[h.type]==="opening"?(I+1<y.length&&y[I+1][h.type]!=="closing"&&(F.children=[]),_.children.push(F),_=F):v[h.type]==="self-closing"&&_.children.push(F)}if($.length>0){const I=$.map(v=>R(v)).join(", ");throw new ne("UnclosedTags",I)}function R(I){return`${I.type||"empty-tag"}[${I[h.type]}] at level ${I[h.level]}`}return E};return d()};let z;function Fo(i={children:[]}){const t={renderCode:["const elms = []"],effectsCode:[],context:{props:[],components:this.components}};return z=-1,Gt.call(t,i),t.renderCode.push("return elms"),{render:new Function("parent","component","context",t.renderCode.join(`
`)),effects:t.effectsCode.map(e=>new Function("component","elms","context",e)),context:t.context}}const qe=function(i,t=!1,e={key:!1,component:"component.",forceEffect:!1}){const o=e.forceEffect?this.effectsCode:this.renderCode;t&&o.push(`parent = ${t}`),"key"in i&&(e.key=$e(i.key,e.component));const s=e.key?`elms[${z}][${e.key}]`:`elms[${z}]`;e.key&&o.push(`
      elms[${z}] = elms[${z}] || {}
    `),o.push(`
    if(!${s}) {
      ${s} = this.element({componentId: component[Symbol.for('id')], parent: parent || 'root'}, component)
    }
    const elementConfig${z} = {}
  `);const r=i.children;delete i.children,Object.keys(i).forEach(n=>{if(n==="type"){i[n]==="Slot"&&o.push(`elementConfig${z}[Symbol.for('isSlot')] = true`);return}n==="slot"&&o.push(`
        elementConfig${z}['parent'] = component[Symbol.for('slots')].filter(slot => slot.ref === '${i.slot}').shift() || component[Symbol.for('slots')][0] || parent
      `),qt(n)?this.effectsCode.push(`${s}.set('${n.substring(1)}', ${$e(i[n],e.component)})`):o.push(`elementConfig${z}['${n}'] = ${yt(i[n],n,e.component)}`)}),e.holder===!0&&o.push(`
    if(typeof cmp${z} !== 'undefined') {
      for(key in cmp${z}.config.props) {
        delete elementConfig${z}[cmp${z}.config.props[key]]
      }
    }
    `),o.push(`
    if(!${s}.nodeId) {
      ${s}.populate(elementConfig${z})
    }
  `),r&&Gt.call(this,{children:r},`${s}`,e)},Kt=function(i,t=!1,e={key:!1,component:"component.",forceEffect:!1,holder:!1}){const o=e.forceEffect?this.effectsCode:this.renderCode;o.push(`
    const cmp${z} =
      (context.components && context.components['${i.type}']) ||
      component[Symbol.for('components')]['${i.type}']
  `),"key"in i&&(e.key=$e(i.key,e.component));const s=i.children;delete i.children,qe.call(this,i,t,{...e,holder:!0}),t=e.key?`elms[${z}][${e.key}]`:`elms[${z}]`,z++;const r=e.key?`elms[${z}][${e.key}]`:`elms[${z}]`;e.key&&o.push(`
      elms[${z}] = elms[${z}] || {}
    `),t&&o.push(`parent = ${t}`),o.push(`const props${z} = {}`),Object.keys(i).forEach(n=>{n!=="type"&&(qt(n)?(this.effectsCode.push(`
        ${r}[Symbol.for('props')]['${n.substring(1)}'] = ${$e(i[n],e.component)}`),o.push(`props${z}['${n.substring(1)}'] = ${$e(i[n],e.component)}`)):o.push(`props${z}['${n}'] = ${yt(i[n],n,e.component)}`))}),o.push(`
    if(!${r}) {
      ${r} = (context.components && context.components['${i.type}'] || component[Symbol.for('components')]['${i.type}'] || (() => { console.log('component ${i.type} not found')})).call(null, {props: props${z}}, ${t}, component)
      if (${r}[Symbol.for('slots')][0]) {
        parent = ${r}[Symbol.for('slots')][0]
        component = ${r}
      } else {
        parent = ${r}[Symbol.for('children')][0]
      }
    }
  `),s&&(z++,qe.call(this,{children:s},!1,{...e}))},No=function(i,t){const e=i[":for"];delete i[":for"];const s=/(.+)\s+in\s+(.+)/gi.exec(e),[r,n="index"]=s[1].replace("(","").replace(")","").split(/\s*,\s*/),a={renderCode:[],effectsCode:[],context:{props:[],components:this.components}};t&&a.renderCode.push(`parent = ${t}`),a.renderCode.push(`
    const collection = ${yt(s[2],":for")}
    const keys = []
    for(let __index = 0; __index < collection.length; __index++) {
      parent = ${t}
      if(!component.key) keys.length = 0
      const scope = Object.assign(component, {
        key: Math.random(),
        ${n}: __index,
        ${r}: collection[__index]
      })
    `),"key"in i?a.renderCode.push(`
      keys.push(${$e(i.key,"scope.")})
    `):a.renderCode.push(`
      keys.push(scope.key.toString())
    `),i.type==="Element"||i.type==="Slot"?qe.call(a,i,t,{key:"scope.key",component:"scope.",forceEffect:!1}):Kt.call(a,i,!1,{key:"scope.key",component:"scope.",forceEffect:!1}),a.renderCode=a.renderCode.concat(a.effectsCode),a.renderCode.push("}"),a.renderCode.push(`
    if(elms[${z}]) {
      Object.keys(elms[${z}]).forEach(key => {
        if(keys.indexOf(key) === -1) {
          elms[${z}][key].delete && elms[${z}][key].delete()
          elms[${z}][key].destroy && elms[${z}][key].destroy()
          delete elms[${z}][key]
        }
      })
    }
  `),this.effectsCode.push(a.renderCode.join(`
`))},Gt=function(i,t=!1,e={}){i.children&&i.children.forEach(o=>{z++,Object.keys(o).indexOf(":for")>-1?No.call(this,o,t):o.type==="Element"||o.type==="Slot"?qe.call(this,o,t,e):Kt.call(this,o,t,e)})},$e=(i,t="component.")=>{const e=/('.*?')+/gi,o=/\$/gi,s=i.matchAll(e),r=[];let n=0;for(const a of s)r.push(a[0]),i=i.replace(a[0],`[@@REPLACEMENT${n}@@]`),n++;return i=i.replace(o,t),r.forEach((a,p)=>{i=i.replace(`[@@REPLACEMENT${p}@@]`,a)}),i},yt=(i="",t=!1,e="component.")=>{let o;if(t==="content")i.startsWith("$")?o=`${e}${i.replace("$","")}`:o=`'${Po(i,e)}'`;else if(t!=="color"&&!isNaN(parseFloat(i))){if(o=parseFloat(i),i.endsWith("%")){const r={w:"width",width:"width",x:"width",h:"height",height:"height",y:"height"}[t];r&&(o=`parent.node.${r} * (${o} / 100)`)}}else if(i.toLowerCase()==="true")o=!0;else if(i.toLowerCase()==="false")o=!1;else if(t.startsWith("@")&&i){const s=e.slice(0,-1);o=`${s}['${i.replace("$","")}'] && ${s}['${i.replace("$","")}'].bind(${s})`}else i.startsWith("$")?o=`${e}${i.replace("$","")}`:o=`"${i}"`;return o},qt=i=>i.startsWith(":"),Po=(i,t)=>{const e=/\{\{\s*(\$\S+)\s*\}\}/g,o=[...i.matchAll(e)];if(o.length)for(let[s,r]of o)i=i.replace(s,`${r.replace("$",`'+${t}`)}+'`);return i};class Vt{constructor(t){l(this,"releaseCallback");this.releaseCallback=t}}class Ao extends Vt{constructor(e,o){super(e);l(this,"textureMap",new Map);l(this,"zeroReferenceTextureSet",new Set);l(this,"options");this.options={textureCleanupIntervalMs:o.textureCleanupIntervalMs??1e4,textureCleanupAgeThreadholdMs:o.textureCleanupAgeThreadholdMs??6e4},setInterval(()=>{const s=Date.now(),r=this.options.textureCleanupAgeThreadholdMs;for(const n of this.zeroReferenceTextureSet)s-n.lastUpdate>r&&(this.releaseCallback(n.id),this.textureMap.delete(n.id),this.zeroReferenceTextureSet.delete(n))},this.options.textureCleanupIntervalMs)}registerTexture(e){var s;const o=(s=e.options)==null?void 0:s.id;if(T(o,"Texture must have an id to be registered"),!this.textureMap.has(o)){const r={id:o,nodeRefCount:0,lastUpdate:Date.now()};this.textureMap.set(o,r),this.zeroReferenceTextureSet.add(r)}}incrementTextureRefCount(e){var r;const o=(r=e.options)==null?void 0:r.id;T(o,"Texture must have an id to be registered");let s=this.textureMap.get(o);s||(this.registerTexture(e),s=this.textureMap.get(o)),T(s,"Texture must have been registered"),e.txType==="SubTexture"&&this.incrementTextureRefCount(e.props.texture),s.nodeRefCount++,s.lastUpdate=Date.now(),this.zeroReferenceTextureSet.has(s)&&this.zeroReferenceTextureSet.delete(s)}decrementTextureRefCount(e){var r;const o=(r=e.options)==null?void 0:r.id;T(o,"Texture must have an id to be registered");const s=this.textureMap.get(o);T(s,"Texture must have been registered"),s.nodeRefCount--,s.lastUpdate=Date.now(),s.nodeRefCount===0&&this.zeroReferenceTextureSet.add(s),e.txType==="SubTexture"&&this.decrementTextureRefCount(e.props.texture)}}class Bo extends Vt{constructor(e){super(e);l(this,"registry");this.registry=new FinalizationRegistry(e)}registerTexture(e){var o,s;T((o=e.options)==null?void 0:o.id,"Texture must have an ID to be registered"),this.registry.register(e,(s=e.options)==null?void 0:s.id)}incrementTextureRefCount(){}decrementTextureRefCount(){}}class Do extends de{constructor(e,o,s){super();l(this,"root",null);l(this,"driver");l(this,"canvas");l(this,"settings");l(this,"nodes",new Map);l(this,"nextTextureId",1);l(this,"textureTracker");const r={appWidth:e.appWidth||1920,appHeight:e.appHeight||1080,deviceLogicalPixelRatio:e.deviceLogicalPixelRatio||1,devicePhysicalPixelRatio:e.devicePhysicalPixelRatio||window.devicePixelRatio,clearColor:e.clearColor??0,coreExtensionModule:e.coreExtensionModule||null,experimental_FinalizationRegistryTextureUsageTracker:e.experimental_FinalizationRegistryTextureUsageTracker??!1,textureCleanupOptions:e.textureCleanupOptions||{},fpsUpdateInterval:e.fpsUpdateInterval||0};this.settings=r;const{appWidth:n,appHeight:a,deviceLogicalPixelRatio:p,devicePhysicalPixelRatio:c}=r,d=g=>{this.driver.releaseTexture(g)},f=r.experimental_FinalizationRegistryTextureUsageTracker&&typeof FinalizationRegistry=="function";this.textureTracker=f?new Bo(d):new Ao(d,this.settings.textureCleanupOptions);const b=n*p,m=a*p;this.driver=s;const u=document.createElement("canvas");this.canvas=u,u.width=b*c,u.height=m*c,u.style.width=`${b}px`,u.style.height=`${m}px`;let x;if(typeof o=="string"?x=document.getElementById(o):x=o,!x)throw new Error("Could not find target element");s.onCreateNode=g=>{this.nodes.set(g.id,g)},s.onBeforeDestroyNode=g=>{this.nodes.delete(g.id)},s.onFpsUpdate=g=>{this.emit("fpsUpdate",g)},x.appendChild(u)}async init(){await this.driver.init(this,this.settings,this.canvas),this.root=this.driver.getRootNode()}createNode(e){return this.driver.createNode(this.resolveNodeDefaults(e))}createTextNode(e){return this.driver.createTextNode({...this.resolveNodeDefaults(e),text:e.text??"",textRendererOverride:e.textRendererOverride??null,fontSize:e.fontSize??16,fontFamily:e.fontFamily??"sans-serif",fontStyle:e.fontStyle??"normal",fontWeight:e.fontWeight??"normal",fontStretch:e.fontStretch??"normal",textAlign:e.textAlign??"left",contain:e.contain??"none",scrollable:e.scrollable??!1,scrollY:e.scrollY??0,offsetY:e.offsetY??0,letterSpacing:e.letterSpacing??0,debug:e.debug??{}})}resolveNodeDefaults(e){const o=e.color??4294967295,s=e.colorTl??e.colorTop??e.colorLeft??o,r=e.colorTr??e.colorTop??e.colorRight??o,n=e.colorBl??e.colorBottom??e.colorLeft??o,a=e.colorBr??e.colorBottom??e.colorRight??o;return{x:e.x??0,y:e.y??0,width:e.width??0,height:e.height??0,alpha:e.alpha??1,clipping:e.clipping??!1,color:o,colorTop:e.colorTop??o,colorBottom:e.colorBottom??o,colorLeft:e.colorLeft??o,colorRight:e.colorRight??o,colorBl:n,colorBr:a,colorTl:s,colorTr:r,zIndex:e.zIndex??0,zIndexLocked:e.zIndexLocked??0,parent:e.parent??null,texture:e.texture??null,shader:e.shader??null,src:e.src??"",scale:e.scale??null,scaleX:e.scaleX??e.scale??1,scaleY:e.scaleY??e.scale??1,mount:e.mount??0,mountX:e.mountX??e.mount??0,mountY:e.mountY??e.mount??0,pivot:e.pivot??.5,pivotX:e.pivotX??e.pivot??.5,pivotY:e.pivotY??e.pivot??.5,rotation:e.rotation??0}}destroyNode(e){return this.driver.destroyNode(e)}createTexture(e,o,s){const r=this.nextTextureId++,n={descType:"texture",txType:e,props:o,options:{...s,id:r}};return this.textureTracker.registerTexture(n),n}createShader(e,o){return{descType:"shader",shType:e,props:o}}getNodeById(e){return this.nodes.get(e)||null}toggleFreeze(){throw new Error("Not implemented")}advanceFrame(){throw new Error("Not implemented")}rerender(){throw new Error("Not implemented")}}class Yo extends de{constructor(e,o,s){super();l(this,"node");l(this,"props");l(this,"settings");l(this,"propStartValues",{});l(this,"restoreValues",{});l(this,"progress",0);l(this,"timingFunction");l(this,"propsList");this.node=e,this.props=o,this.settings=s,this.propStartValues={},this.propsList=Object.keys(o),this.propsList.forEach(r=>{this.propStartValues[r]=e[r]}),this.timingFunction=r=>r,s.easing&&typeof s.easing=="string"&&(this.timingFunction=Eo(s.easing))}reset(){this.progress=0,this.update(0)}restore(){this.reset(),Object.keys(this.props).forEach(e=>{this.node[e]=this.propStartValues[e]})}reverse(){this.progress=0,Object.keys(this.props).forEach(e=>{const o=this.props[e],s=this.propStartValues[e];this.props[e]=s,this.propStartValues[e]=o}),this.settings.loop||(this.settings.stopMethod=!1)}applyEasing(e,o,s){return(this.timingFunction(e)||e)*(s-o)+o}update(e){const{duration:o,loop:s,easing:r}=this.settings;if(!o){this.emit("finished",{});return}if(this.progress+=e/o,this.progress>1)return this.progress=s?0:1,this.emit("finished",{});for(let n=0;n<this.propsList.length;n++){const a=this.propsList[n],p=this.props[a],c=this.propStartValues[a],d=p;if(a.indexOf("color")!==-1){if(c===d){this.node[a]=c;continue}if(r){const f=this.timingFunction(this.progress)||this.progress,b=Tt(c,d,f);this.node[a]=b;continue}this.node[a]=Tt(c,d,this.progress);continue}if(r){this.node[a]=this.applyEasing(this.progress,c,d);continue}this.node[a]=c+(d-c)*this.progress}}}class Oo{constructor(t,e){l(this,"manager");l(this,"animation");l(this,"stoppedPromise",null);l(this,"stoppedResolve",null);l(this,"state");this.manager=t,this.animation=e,this.state="stopped"}start(){return this.makeStoppedPromise(),this.animation.once("finished",this.finished.bind(this)),this.manager.activeAnimations.has(this.animation)||this.manager.registerAnimation(this.animation),this.state="running",this}stop(){return this.manager.unregisterAnimation(this.animation),this.stoppedResolve!==null&&(this.stoppedResolve(),this.stoppedResolve=null),this.animation.reset(),this.state="stopped",this}pause(){return this.manager.unregisterAnimation(this.animation),this.state="paused",this}restore(){return this.stoppedResolve=null,this.animation.restore(),this}waitUntilStopped(){this.makeStoppedPromise();const t=this.stoppedPromise;return T(t),t}makeStoppedPromise(){this.stoppedResolve===null&&(this.stoppedPromise=new Promise(t=>{this.stoppedResolve=t}))}finished(){T(this.stoppedResolve);const{loop:t,stopMethod:e}=this.animation.settings;if(e==="reverse"){this.animation.reverse(),this.start();return}this.stoppedResolve(),this.stoppedResolve=null,!t&&this.manager.unregisterAnimation(this.animation)}}const B=0,D=3,W=6,A=1,Y=4,H=7,Z=2,J=5,ee=8;class q{constructor(t){l(this,"data");t?(this.data=new Float32Array(9),this.data[B]=t[0],this.data[D]=t[3],this.data[W]=t[6],this.data[A]=t[1],this.data[Y]=t[4],this.data[H]=t[7],this.data[Z]=t[2],this.data[J]=t[5],this.data[ee]=t[8]):this.data=new Float32Array(9)}static get temp(){return Wo}static multiply(t,e,o){const s=t.data[B]*e.data[B]+t.data[D]*e.data[A]+t.data[W]*e.data[Z],r=t.data[B]*e.data[D]+t.data[D]*e.data[Y]+t.data[W]*e.data[J],n=t.data[B]*e.data[W]+t.data[D]*e.data[H]+t.data[W]*e.data[ee],a=t.data[A]*e.data[B]+t.data[Y]*e.data[A]+t.data[H]*e.data[Z],p=t.data[A]*e.data[D]+t.data[Y]*e.data[Y]+t.data[H]*e.data[J],c=t.data[A]*e.data[W]+t.data[Y]*e.data[H]+t.data[H]*e.data[ee],d=t.data[Z]*e.data[B]+t.data[J]*e.data[A]+t.data[ee]*e.data[Z],f=t.data[Z]*e.data[D]+t.data[J]*e.data[Y]+t.data[ee]*e.data[J],b=t.data[Z]*e.data[W]+t.data[J]*e.data[H]+t.data[ee]*e.data[ee];return o||(o=new q),o.data[B]=s,o.data[D]=r,o.data[W]=n,o.data[A]=a,o.data[Y]=p,o.data[H]=c,o.data[Z]=d,o.data[J]=f,o.data[ee]=b,o}static identity(t){return t||(t=new q),t.data[B]=1,t.data[D]=0,t.data[W]=0,t.data[A]=0,t.data[Y]=1,t.data[H]=0,t.data[Z]=0,t.data[J]=0,t.data[ee]=1,t}static translate(t,e,o){return o||(o=new q),o.data[B]=1,o.data[D]=0,o.data[W]=t,o.data[A]=0,o.data[Y]=1,o.data[H]=e,o.data[Z]=0,o.data[J]=0,o.data[ee]=1,o}static scale(t,e,o){return o||(o=new q),o.data[B]=t,o.data[D]=0,o.data[W]=0,o.data[A]=0,o.data[Y]=e,o.data[H]=0,o.data[Z]=0,o.data[J]=0,o.data[ee]=1,o}static rotate(t,e){const o=Math.cos(t),s=Math.sin(t);return e||(e=new q),e.data[B]=o,e.data[D]=-s,e.data[W]=0,e.data[A]=s,e.data[Y]=o,e.data[H]=0,e.data[Z]=0,e.data[J]=0,e.data[ee]=1,e}static copy(t,e,o){return e||(e=new q),e.data[0]=t.data[0],e.data[1]=t.data[1],e.data[2]=t.data[2],e.data[3]=t.data[3],e.data[4]=t.data[4],e.data[5]=t.data[5],e.data[6]=t.data[6],e.data[7]=t.data[7],e.data[8]=t.data[8],e}translate(t,e){return this.data[W]=this.data[B]*t+this.data[D]*e+this.data[W],this.data[H]=this.data[A]*t+this.data[Y]*e+this.data[H],this}scale(t,e){return this.data[B]=this.data[B]*t,this.data[D]=this.data[D]*e,this.data[A]=this.data[A]*t,this.data[Y]=this.data[Y]*e,this}rotate(t){if(t===0||!(t%Math.PI*2))return this;const e=Math.cos(t),o=Math.sin(t),s=this.data[B]*e+this.data[D]*o,r=this.data[D]*e-this.data[B]*o,n=this.data[A]*e+this.data[Y]*o,a=this.data[Y]*e-this.data[A]*o;return this.data[B]=s,this.data[D]=r,this.data[A]=n,this.data[Y]=a,this}multiply(t){return q.multiply(this,t,this)}get tx(){return this.data[W]}get ty(){return this.data[H]}get ta(){return this.data[B]}get tb(){return this.data[D]}get tc(){return this.data[A]}get td(){return this.data[Y]}transformPoint(t,e){return[this.data[B]*t+this.data[D]*e+this.data[W],this.data[A]*t+this.data[Y]*e+this.data[A]]}}const Wo=new q;class wt extends de{constructor(e,o){super();l(this,"stage");l(this,"children",[]);l(this,"props");l(this,"recalculationType",0);l(this,"hasUpdates",!0);l(this,"globalTransform");l(this,"scaleRotateTransform");l(this,"localTransform");l(this,"clippingRect",null);l(this,"parentClippingRect",null);l(this,"isComplex",!1);l(this,"onTextureLoaded",(e,o)=>{this.emit("loaded",{type:"texture",dimensions:o})});l(this,"onTextureFailed",(e,o)=>{this.emit("failed",{type:"texture",error:o})});this.stage=e,this.props={...o,parent:null},this.parent=o.parent,this.updateScaleRotateTransform()}loadTexture(e,o,s=null){this.props.texture&&this.unloadTexture();const{txManager:r}=this.stage,n=r.loadTexture(e,o,s);this.props.texture=n,this.props.textureOptions=s,queueMicrotask(()=>{n.state==="loaded"?this.onTextureLoaded(n,n.dimensions):n.state==="failed"&&this.onTextureFailed(n,n.error),n.on("loaded",this.onTextureLoaded),n.on("failed",this.onTextureFailed)})}unloadTexture(){this.props.texture&&(this.props.texture.off("loaded",this.onTextureLoaded),this.props.texture.off("failed",this.onTextureFailed)),this.props.texture=null,this.props.textureOptions=null}loadShader(e,o){const s=this.stage.renderer.getShaderManager();T(s);const{shader:r,props:n}=s.loadShader(e,o);this.props.shader=r,this.props.shaderProps=n}setHasUpdates(){this.hasUpdates=!0}setChildrenHasUpdates(){this.children.forEach(e=>{e.setRecalculationType(2)})}setParentHasUpdates(){this.props.parent&&this.props.parent.setRecalculationType(1)}setRecalculationType(e){this.recalculationType|=e,this.setHasUpdates(),this.setParentHasUpdates(),e&4&&this.setChildrenHasUpdates()}sortChildren(){this.children.sort((e,o)=>e.zIndex-o.zIndex)}updateScaleRotateTransform(){this.setRecalculationType(4),this.scaleRotateTransform=q.rotate(this.props.rotation,this.scaleRotateTransform).scale(this.props.scaleX,this.props.scaleY),this.updateLocalTransform()}updateLocalTransform(){T(this.scaleRotateTransform),this.setRecalculationType(2);const e=this.props.pivotX*this.props.width,o=this.props.pivotY*this.props.height,s=this.props.mountX*this.props.width,r=this.props.mountY*this.props.height;this.localTransform=q.translate(e-s+this.props.x,o-r+this.props.y,this.localTransform).multiply(this.scaleRotateTransform).translate(-e,-o)}update(e,o=null){var r;T(this.localTransform);const s=(r=this.parent)==null?void 0:r.globalTransform;s?this.globalTransform=q.copy(s,this.globalTransform).multiply(this.localTransform):this.globalTransform=q.copy(this.localTransform,this.globalTransform),this.calculateClippingRect(o),this.children.length&&this.children.forEach(n=>{n.update(e,this.clippingRect)}),this.recalculationType&8&&this.sortChildren(),this.hasUpdates=!1,this.recalculationType=0}calculateClippingRect(e=null){if(!this.globalTransform)return;if(!this.props.clipping&&!e){this.clippingRect=null;return}if(this.parentClippingRect===e&&this.clippingRect)return;const o=this.globalTransform,s=o.tb!==0||o.tc!==0;let r=this.props.clipping&&!s?{x:o.tx,y:o.ty,width:this.width*o.ta,height:this.height*o.td}:null;e&&r?r=Ht(e,r):e&&(r=e),this.parentClippingRect=e,this.clippingRect=r}renderQuads(e){const{width:o,height:s,colorTl:r,colorTr:n,colorBl:a,colorBr:p,texture:c,textureOptions:d,shader:f,shaderProps:b}=this.props,{zIndex:m,worldAlpha:u,globalTransform:x,clippingRect:g}=this;T(x),e.addQuad({width:o,height:s,colorTl:r,colorTr:n,colorBl:a,colorBr:p,texture:c,textureOptions:d,zIndex:m,shader:f,shaderProps:b,alpha:u,clippingRect:g,tx:x.tx,ty:x.ty,ta:x.ta,tb:x.tb,tc:x.tc,td:x.td})}get id(){return this.props.id}get x(){return this.props.x}set x(e){this.props.x!==e&&(this.props.x=e,this.updateLocalTransform())}get absX(){var e,o,s;return this.props.x+(((e=this.props.parent)==null?void 0:e.absX)||((s=(o=this.props.parent)==null?void 0:o.globalTransform)==null?void 0:s.tx)||0)}get absY(){var e;return this.props.y+(((e=this.props.parent)==null?void 0:e.absY)??0)}get y(){return this.props.y}set y(e){this.props.y!==e&&(this.props.y=e,this.updateLocalTransform())}get width(){return this.props.width}set width(e){this.props.width!==e&&(this.props.width=e,this.updateLocalTransform())}get height(){return this.props.height}set height(e){this.props.height!==e&&(this.props.height=e,this.updateLocalTransform())}get scale(){return this.scaleX}set scale(e){this.scaleX=e,this.scaleY=e}get scaleX(){return this.props.scaleX}set scaleX(e){this.props.scaleX!==e&&(this.props.scaleX=e,this.updateScaleRotateTransform())}get scaleY(){return this.props.scaleY}set scaleY(e){this.props.scaleY!==e&&(this.props.scaleY=e,this.updateScaleRotateTransform())}get worldScaleX(){var e;return this.props.scaleX*(((e=this.props.parent)==null?void 0:e.worldScaleX)??1)||this.props.scaleX}get worldScaleY(){var e;return this.props.scaleY*(((e=this.props.parent)==null?void 0:e.worldScaleY)??1)||this.props.scaleY}get mount(){return this.props.mount}set mount(e){this.props.mountX=e,this.props.mountY=e,this.props.mount=e,this.updateLocalTransform()}get mountX(){return this.props.mountX}set mountX(e){this.props.mountX=e,this.updateLocalTransform()}get mountY(){return this.props.mountY}set mountY(e){this.props.mountY=e,this.updateLocalTransform()}get pivot(){return this.props.pivot}set pivot(e){(this.props.pivotX!==e||this.props.pivotY!==e)&&(this.props.pivotX=e,this.props.pivotY=e,this.updateLocalTransform())}get pivotX(){return this.props.pivotX}set pivotX(e){this.props.pivotX=e,this.updateLocalTransform()}get pivotY(){return this.props.pivotY}set pivotY(e){this.props.pivotY=e,this.updateLocalTransform()}get rotation(){return this.props.rotation}set rotation(e){this.props.rotation!==e&&(this.props.rotation=e,this.updateScaleRotateTransform())}get alpha(){return this.props.alpha}set alpha(e){this.props.alpha=e,this.setRecalculationType(1)}get worldAlpha(){const e=this.props,o=e.parent;return e.alpha*((o==null?void 0:o.worldAlpha)||1)}get clipping(){return this.props.clipping}set clipping(e){this.props.clipping=e,this.clippingRect=null,this.setRecalculationType(4)}get color(){return this.props.color}set color(e){(this.props.colorTl!==e||this.props.colorTr!==e||this.props.colorBl!==e||this.props.colorBr!==e)&&(this.colorTl=e,this.colorTr=e,this.colorBl=e,this.colorBr=e),this.props.color=e,this.setRecalculationType(2)}get colorTop(){return this.props.colorTop}set colorTop(e){(this.props.colorTl!==e||this.props.colorTr!==e)&&(this.colorTl=e,this.colorTr=e),this.props.colorTop=e,this.setRecalculationType(2)}get colorBottom(){return this.props.colorBottom}set colorBottom(e){(this.props.colorBl!==e||this.props.colorBr!==e)&&(this.colorBl=e,this.colorBr=e),this.props.colorBottom=e,this.setRecalculationType(2)}get colorLeft(){return this.props.colorLeft}set colorLeft(e){(this.props.colorTl!==e||this.props.colorBl!==e)&&(this.colorTl=e,this.colorBl=e),this.props.colorLeft=e,this.setRecalculationType(2)}get colorRight(){return this.props.colorRight}set colorRight(e){(this.props.colorTr!==e||this.props.colorBr!==e)&&(this.colorTr=e,this.colorBr=e),this.props.colorRight=e,this.setRecalculationType(2)}get colorTl(){return this.props.colorTl}set colorTl(e){this.props.colorTl=e,this.setRecalculationType(2)}get colorTr(){return this.props.colorTr}set colorTr(e){this.props.colorTr=e,this.setRecalculationType(2)}get colorBl(){return this.props.colorBl}set colorBl(e){this.props.colorBl=e,this.setRecalculationType(2)}get colorBr(){return this.props.colorBr}set colorBr(e){this.props.colorBr=e,this.setRecalculationType(2)}get zIndexLocked(){return this.props.zIndexLocked||0}set zIndexLocked(e){this.props.zIndexLocked=e}get zIndex(){var r,n;const e=this.props,o=e.zIndex||0,s=((r=e.parent)==null?void 0:r.zIndex)||0;return(n=e.parent)!=null&&n.zIndexLocked?o<s?o:s:o}set zIndex(e){var o;this.props.zIndex=e,(o=this.props.parent)==null||o.setRecalculationType(8)}get parent(){return this.props.parent}set parent(e){const o=this.props.parent;if(o!==e){if(this.props.parent=e,o){const s=o.children.indexOf(this);T(s!==-1,"CoreNode.parent: Node not found in old parent's children!"),o.children.splice(s,1)}e&&(e.children.push(this),e.setRecalculationType(8)),this.updateScaleRotateTransform()}}}let Xo=1;function vt(){return Xo++}class ct extends de{constructor(e,o,s,r){super();l(this,"rendererMain");l(this,"stage");l(this,"id");l(this,"coreNode");l(this,"_children",[]);l(this,"_src","");l(this,"_parent",null);l(this,"_texture",null);l(this,"_shader",null);l(this,"onTextureLoaded",(e,o)=>{this.emit("loaded",o)});l(this,"onTextureFailed",(e,o)=>{this.emit("failed",o)});this.rendererMain=o,this.stage=s,this.id=(r==null?void 0:r.id)??vt(),this.coreNode=r||new wt(this.stage,{id:this.id,x:e.x,y:e.y,width:e.width,height:e.height,alpha:e.alpha,clipping:e.clipping,color:e.color,colorTop:e.colorTop,colorBottom:e.colorBottom,colorLeft:e.colorLeft,colorRight:e.colorRight,colorTl:e.colorTl,colorTr:e.colorTr,colorBl:e.colorBl,colorBr:e.colorBr,zIndex:e.zIndex,zIndexLocked:e.zIndexLocked,scaleX:e.scaleX,scaleY:e.scaleY,mountX:e.mountX,mountY:e.mountY,mount:e.mount,pivot:e.pivot,pivotX:e.pivotX,pivotY:e.pivotY,rotation:e.rotation,parent:null,shader:null,shaderProps:null,texture:null,textureOptions:null}),this.coreNode.on("loaded",this.onTextureLoaded),this.coreNode.on("failed",this.onTextureFailed),this.parent=e.parent,this.shader=e.shader,this.texture=e.texture,this.src=e.src}get x(){return this.coreNode.x}set x(e){this.coreNode.x=e}get y(){return this.coreNode.y}set y(e){this.coreNode.y=e}get width(){return this.coreNode.width}set width(e){this.coreNode.width=e}get height(){return this.coreNode.height}set height(e){this.coreNode.height=e}get alpha(){return this.coreNode.alpha}set alpha(e){this.coreNode.alpha=e}get clipping(){return this.coreNode.clipping}set clipping(e){this.coreNode.clipping=e}get color(){return this.coreNode.color}set color(e){this.coreNode.color=e}get colorTop(){return this.coreNode.colorTop}set colorTop(e){this.coreNode.colorTop=e}get colorBottom(){return this.coreNode.colorBottom}set colorBottom(e){this.coreNode.colorBottom=e}get colorLeft(){return this.coreNode.colorLeft}set colorLeft(e){this.coreNode.colorLeft=e}get colorRight(){return this.coreNode.colorRight}set colorRight(e){this.coreNode.colorRight=e}get colorTl(){return this.coreNode.colorTl}set colorTl(e){this.coreNode.colorTl=e}get colorTr(){return this.coreNode.colorTr}set colorTr(e){this.coreNode.colorTr=e}get colorBl(){return this.coreNode.colorBl}set colorBl(e){this.coreNode.colorBl=e}get colorBr(){return this.coreNode.colorBr}set colorBr(e){this.coreNode.colorBr=e}get scale(){return this.scaleX!==this.scaleY?null:this.coreNode.scaleX}set scale(e){e!==null&&(this.coreNode.scaleX=e,this.coreNode.scaleY=e)}get scaleX(){return this.coreNode.scaleX}set scaleX(e){this.coreNode.scaleX=e}get scaleY(){return this.coreNode.scaleY}set scaleY(e){this.coreNode.scaleY=e}get mount(){return this.coreNode.mount}set mount(e){this.coreNode.mount=e}get mountX(){return this.coreNode.mountX}set mountX(e){this.coreNode.mountX=e}get mountY(){return this.coreNode.mountY}set mountY(e){this.coreNode.mountY=e}get pivot(){return this.coreNode.pivot}set pivot(e){this.coreNode.pivot=e}get pivotX(){return this.coreNode.pivotX}set pivotX(e){this.coreNode.pivotX=e}get pivotY(){return this.coreNode.pivotY}set pivotY(e){this.coreNode.pivotY=e}get rotation(){return this.coreNode.rotation}set rotation(e){this.coreNode.rotation=e}get parent(){return this._parent}set parent(e){const o=this._parent;if(this._parent=e,this.coreNode.parent=(e==null?void 0:e.coreNode)??null,o){const s=o.children.indexOf(this);T(s!==-1,"MainOnlyNode.parent: Node not found in old parent's children!"),o.children.splice(s,1)}e&&e.children.push(this)}get children(){return this._children}get zIndex(){return this.coreNode.zIndex}set zIndex(e){this.coreNode.zIndex=e}get zIndexLocked(){return this.coreNode.zIndexLocked}set zIndexLocked(e){this.coreNode.zIndexLocked=e}get src(){return this._src}set src(e){if(this._src!==e){if(this._src=e,!e){this.texture=null;return}this.texture=this.rendererMain.createTexture("ImageTexture",{src:e})}}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture&&this.rendererMain.textureTracker.decrementTextureRefCount(this._texture),e&&this.rendererMain.textureTracker.incrementTextureRefCount(e),this._texture=e,e?this.coreNode.loadTexture(e.txType,e.props,e.options):this.coreNode.unloadTexture())}get shader(){return this._shader}set shader(e){this._shader!==e&&(this._shader=e,e&&this.coreNode.loadShader(e.shType,e.props))}destroy(){this.emit("beforeDestroy",{}),this.parent=null,this.texture=null,this.emit("afterDestroy",{}),this.removeAllListeners()}flush(){}animate(e,o){const s=new Yo(this.coreNode,e,o);return new Oo(this.stage.animationManager,s)}}class Ho{constructor(t){l(this,"root");this.root=t}getNodeByType(t){return[]}getNodeById(t){return null}update(t){this.root.update(t)}}const Uo=i=>{const t=()=>{i.updateAnimations(),i.drawFrame(),requestAnimationFrame(t)};requestAnimationFrame(t)},jo=()=>performance?performance.now():Date.now();class Qt extends Fe{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2fv"}]})}bindTextures(t){const{gl:e}=this;e.getParameter(e.TEXTURE_BINDING_2D)!==t[0].ctxTexture&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture))}}l(Qt,"shaderSources",{vertex:`
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
    `});class Zt extends Fe{constructor(e){super({renderer:e,attributes:["a_position","a_textureCoordinate","a_color","a_textureIndex"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_textures[0]",uniform:"uniform1iv"}]});l(this,"supportsIndexedTextures",!0)}bindTextures(e){const{renderer:o,gl:s}=this;if(e.length>o.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS)throw new Error(`DefaultShaderBatched: Cannot bind more than ${o.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS} textures`);e.forEach((n,a)=>{s.activeTexture(s.TEXTURE0+a),s.bindTexture(s.TEXTURE_2D,n.ctxTexture)});const r=Array.from(Array(e.length).keys());this.setUniform("u_textures[0]",r)}}l(Zt,"shaderSources",{vertex:`
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
    `});class O{constructor(t){l(this,"priority",1);l(this,"name","");l(this,"ref");l(this,"target");l(this,"passParameters","");l(this,"declaredUniforms","");l(this,"uniformInfo",{});const{ref:e,target:o,props:s={}}=t;this.ref=e,this.target=o;const r={},n=[];let a="";const p=this.constructor.uniforms||{};for(const c in p){const d=p[c],f=d.type,b=`${e}_${c}`;let m="";d.size&&(m=`[${d.size(s)}]`),n.push(b),a+=`uniform ${f} ${b}${m};`,r[c]={name:b,uniform:p[c].method}}this.passParameters=n.join(","),this.declaredUniforms=a,this.uniformInfo=r}static getEffectKey(t){return""}static getMethodParameters(t,e){const o=[];for(const s in t){const r=t[s];let n="";r.size&&(n=`[${r.size(e)}]`),o.push(`${r.type} ${s}${n}`)}return o.join(",")}static resolveDefaults(t){return{}}static makeEffectKey(t){return!1}}l(O,"uniforms",{}),l(O,"methods"),l(O,"onShaderMask"),l(O,"onColorize"),l(O,"onEffectMask");const se=class se extends Fe{constructor(e,o,s){const r=se.createShader(o,s);super({renderer:e,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2fv"},{name:"u_dimensions",uniform:"uniform2fv"},{name:"u_alpha",uniform:"uniform1f"},...r.uniforms],shaderSources:{vertex:r.vertex,fragment:r.fragment}});l(this,"effects",[]);this.effects=r.effects}bindTextures(e){const{gl:o}=this;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,e[0].ctxTexture)}bindProps(e){var s;const o=this.renderer.shManager.getRegisteredEffects();(s=e.effects)==null||s.forEach((r,n)=>{const a=this.effects[n],p=o[a.name],c=r.props??{},d=a.uniformInfo;Object.keys(c).forEach(f=>{const b=p.uniforms[f],m=d[f];let u=b.validator?b.validator(c[f],c):c[f];Array.isArray(u)&&(u=new Float32Array(u)),this.setUniform(m.name,u)})})}static createShader(e,o){const s={},r={};let n="";const a=[],p=[],c=e.effects.map(u=>{const x=o[u.type],g=x.getEffectKey(u.props||{});s[g]=s[g]?++s[g]:1;const w=s[g];w===1&&p.push({key:g,type:u.type,props:u.props});const k=new x({ref:`${g}${w===1?"":w}`,target:g,props:u.props});return n+=k.declaredUniforms,a.push(...Object.values(k.uniformInfo)),k});let d="";p==null||p.forEach(u=>{const x=o[u.type],g=x.resolveDefaults(u.props??{}),w=[];for(const M in x.methods){let E=M;const _=x.methods[M];r[M]&&r[M]!==_&&(E=se.resolveMethodDuplicate(M,_,r)),r[E]=_.replace("function",E),w.push({m:M,cm:E})}let k=x.onShaderMask instanceof Function?x.onShaderMask(g):x.onShaderMask,L=x.onColorize instanceof Function?x.onColorize(g):x.onColorize,S=x.onEffectMask instanceof Function?x.onEffectMask(g):x.onEffectMask;w.forEach(M=>{const{m:E,cm:_}=M,R=new RegExp(`\\$${E}`,"g");k&&(k=k.replace(R,_)),L&&(L=L.replace(R,_)),S&&(S=S.replace(R,_))});const y=x.getMethodParameters(x.uniforms,g),$=y.length>0?`, ${y}`:"";k&&(d+=`
        float fx_${u.key}_onShaderMask(float shaderMask ${$}) {
          ${k}
        }
        `),L&&(d+=`
          vec4 fx_${u.key}_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor${$}) {
            ${L}
          }
        `),S&&(d+=`
          vec4 fx_${u.key}_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor${$}) {
            ${S}
          }
        `)});let f="";for(const u in r)f+=r[u];let b="mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))",m=`

    `;for(let u=0;u<c.length;u++){const x=c[u],g=x.passParameters.length>0?`, ${x.passParameters}`:"",w=o[x.name];w.onShaderMask&&(m+=`
        shaderMask = fx_${x.target}_onShaderMask(shaderMask ${g});
        `),w.onColorize&&(m+=`
        maskColor = fx_${x.target}_onColorize(shaderMask, maskColor, shaderColor${g});
        `),w.onEffectMask&&(b=`fx_${x.target}_onEffectMask(shaderMask, maskColor, shaderColor${g})`);const k=c[u+1];(k===void 0||o[k.name].onEffectMask)&&(m+=`
          shaderColor = ${b};
        `)}return{effects:c,uniforms:a,fragment:se.fragment(n,f,d,m),vertex:se.vertex()}}static resolveMethodDuplicate(e,o,s,r=0){const n=e+(r>0?r:"");return s[n]&&s[n]!==o?this.resolveMethodDuplicate(e,o,s,++r):n}static resolveDefaults(e,o){return{effects:(e.effects??[]).map(s=>({type:s.type,props:o[s.type].resolveDefaults(s.props||{})})),$dimensions:{width:0,height:0},$alpha:0}}static makeCacheKey(e,o){var r;let s="";return(r=e.effects)==null||r.forEach(n=>{const p=o[n.type].getEffectKey(n.props||{});s+=`,${p}`}),`DynamicShader${s}`}};l(se,"z$__type__Props"),l(se,"vertex",()=>`
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
  `),l(se,"fragment",(e,o,s,r)=>`
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

      ${r}

      gl_FragColor = shaderColor * u_alpha;
    }
  `);let be=se;class ht extends Fe{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate","a_color"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2f"},{name:"u_dimensions",uniform:"uniform2fv"},{name:"u_radius",uniform:"uniform1f"}]})}static resolveDefaults(t){return{radius:t.radius||10,$dimensions:{width:0,height:0}}}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}bindProps(t){this.setUniform("u_radius",t.radius)}canBatchShaderProps(t,e){return t.radius===e.radius&&t.$dimensions.width===e.$dimensions.width&&t.$dimensions.height===e.$dimensions.height}}l(ht,"z$__type__Props"),l(ht,"shaderSources",{vertex:`
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
    `});const Ko=new Float32Array([1,0,0,0,1,0,0,0,1]),Ze=class Ze extends Fe{constructor(t){super({renderer:t,attributes:["a_position","a_textureCoordinate"],uniforms:[{name:"u_resolution",uniform:"uniform2fv"},{name:"u_transform",uniform:"uniformMatrix3fv"},{name:"u_scrollY",uniform:"uniform1f"},{name:"u_pixelRatio",uniform:"uniform1f"},{name:"u_texture",uniform:"uniform2f"},{name:"u_color",uniform:"uniform4fv"},{name:"u_size",uniform:"uniform1f"},{name:"u_distanceRange",uniform:"uniform1f"},{name:"u_debug",uniform:"uniform1i"}]})}bindTextures(t){const{gl:e}=this;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t[0].ctxTexture)}bindProps(t){const e=Ze.resolveDefaults(t);for(const o in e)if(o==="transform")this.setUniform("u_transform",!1,e[o]);else if(o==="scrollY")this.setUniform("u_scrollY",e[o]);else if(o==="color"){const s=te(e.color);this.setUniform("u_color",s)}else o==="size"?this.setUniform("u_size",e[o]):o==="distanceRange"?this.setUniform("u_distanceRange",e[o]):o==="debug"&&this.setUniform("u_debug",e[o]?1:0)}static resolveDefaults(t={}){return{transform:t.transform??Ko,scrollY:t.scrollY??0,color:t.color??4294967295,size:t.size??16,distanceRange:t.distanceRange??1,debug:t.debug??!1}}};l(Ze,"shaderSources",{vertex:`
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
    `});let ft=Ze;class pe extends O{constructor(){super(...arguments);l(this,"name","radius")}static getEffectKey(){return"radius"}static resolveDefaults(e){return{radius:e.radius??10}}}l(pe,"z$__type__Props"),l(pe,"uniforms",{radius:{value:0,method:"uniform4fv",type:"vec4",validator:e=>{let o=e;return Array.isArray(o)?o.length===2?o=[o[0],o[1],o[0],o[1]]:o.length===3?o=[o[0],o[1],o[2],o[0]]:o.length!==4&&(o=[o[0],o[0],o[0],o[0]]):typeof o=="number"&&(o=[o,o,o,o]),o}}}),l(pe,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,boxDist:`
      float function(vec2 p, vec2 size, float radius) {
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
      }
    `}),l(pe,"onShaderMask",`
  vec2 halfDimensions = u_dimensions * 0.5;
  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);
  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);
  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);
  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);
  `),l(pe,"onEffectMask",`
  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));
  `);class Re extends O{constructor(){super(...arguments);l(this,"name","border")}static getEffectKey(){return"border"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}l(Re,"z$__type__Props"),l(Re,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),l(Re,"onEffectMask",`
  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);
  return mix(shaderColor, maskColor, mask);
  `),l(Re,"onColorize",`
    return color;
  `);class me extends O{constructor(){super(...arguments);l(this,"name","linearGradient")}static getEffectKey(e){return`linearGradient${e.colors.length}`}static resolveDefaults(e){const o=e.colors??[4278190080,4294967295];let s=e.stops;if(!s){s=[];const r=o.length-1;for(let n=0;n<o.length;n++)s.push(n*(1/r))}return{colors:o,stops:s,angle:e.angle??0}}}l(me,"z$__type__Props"),l(me,"uniforms",{angle:{value:0,method:"uniform1f",type:"float"},colors:{value:4294967295,validator:e=>e.map(s=>te(s)).reduce((s,r)=>s.concat(r),[]),size:e=>e.colors.length,method:"uniform4fv",type:"vec4"},stops:{value:[],validator:(e,o)=>{const s=o.colors??[];let r=e;const n=e;if(r.length===0||r&&r.length!==s.length){for(let a=0;a<s.length;a++)r[a]?(n[a]=r[a],r[a-1]===void 0&&n[a-2]!==void 0&&(n[a-1]=n[a-2]+(r[a]-n[a-2])/2)):n[a]=a*(1/(s.length-1));r=n}return n},size:e=>e.colors.length,method:"uniform1fv",type:"float"}}),l(me,"methods",{fromLinear:`
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
    `}),l(me,"ColorLoop",e=>{let o="";for(let s=2;s<e;s++)o+=`colorOut = mix(colorOut, colors[${s}], clamp((dist - stops[${s-1}]) / (stops[${s}] - stops[${s-1}]), 0.0, 1.0));`;return o}),l(me,"onColorize",e=>`
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
    `);class Jt extends O{constructor(){super(...arguments);l(this,"name","grayscale")}static getEffectKey(){return"grayscale"}}l(Jt,"onColorize",`
    vec3 color = pow(maskColor.rgb, vec3(2.0));
    float gray = dot(color, vec3(0.2126, 0.7152, 0.0722));
    float gammaGray = sqrt(gray);
    return vec4(gammaGray, gammaGray, gammaGray, 1.0);
  `);class xe extends O{constructor(){super(...arguments);l(this,"name","borderRight")}static getEffectKey(){return"borderRight"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}l(xe,"z$__type__Props"),l(xe,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),l(xe,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),l(xe,"onEffectMask",`
  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),l(xe,"onColorize",`
    return color;
  `);class ge extends O{constructor(){super(...arguments);l(this,"name","borderTop")}static getEffectKey(){return"borderTop"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}l(ge,"z$__type__Props"),l(ge,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),l(ge,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),l(ge,"onEffectMask",`
  vec2 pos = vec2(0.0, width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),l(ge,"onColorize",`
    return color;
  `);class ye extends O{constructor(){super(...arguments);l(this,"name","borderBottom")}static getEffectKey(){return"borderBottom"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}l(ye,"z$__type__Props"),l(ye,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),l(ye,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),l(ye,"onEffectMask",`
  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),l(ye,"onColorize",`
    return color;
  `);class we extends O{constructor(){super(...arguments);l(this,"name","borderLeft")}static getEffectKey(){return"borderLeft"}static resolveDefaults(e){return{width:e.width??10,color:e.color??4294967295}}}l(we,"z$__type__Props"),l(we,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),l(we,"methods",{fillMask:`
      float function(float dist) {
        return clamp(-dist, 0.0, 1.0);
      }
    `,rectDist:`
      float function(vec2 p, vec2 size) {
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }
    `}),l(we,"onEffectMask",`
  vec2 pos = vec2(width * 0.5, 0.0);
  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));
  return mix(shaderColor, maskColor, $fillMask(mask));
  `),l(we,"onColorize",`
    return color;
  `);class Ie extends O{constructor(){super(...arguments);l(this,"name","glitch")}static getEffectKey(e){return"glitch"}static resolveDefaults(e){return{amplitude:e.amplitude??.2,narrowness:e.narrowness??4,blockiness:e.blockiness??2,minimizer:e.minimizer??8,time:e.time??Date.now()}}}l(Ie,"z$__type__Props"),l(Ie,"uniforms",{amplitude:{value:0,method:"uniform1f",type:"float"},narrowness:{value:0,method:"uniform1f",type:"float"},blockiness:{value:0,method:"uniform1f",type:"float"},minimizer:{value:0,method:"uniform1f",type:"float"},time:{value:0,method:"uniform1f",validator:e=>(Date.now()-e)%1e3,type:"float"}}),l(Ie,"methods",{rand:`
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
    `}),l(Ie,"onColorize",`
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
  `);class Ue extends O{constructor(){super(...arguments);l(this,"name","fadeOut")}static getEffectKey(){return"fadeOut"}static resolveDefaults(e){return{fade:e.fade??10}}}l(Ue,"z$__type__Props"),l(Ue,"uniforms",{fade:{value:0,method:"uniform4fv",type:"vec4",validator:e=>{let o=e;return Array.isArray(o)?o.length===2?o=[o[0],o[1],o[0],o[1]]:o.length===3?o=[o[0],o[1],o[2],o[0]]:o.length!==4&&(o=[o[0],o[0],o[0],o[0]]):typeof o=="number"&&(o=[o,o,o,o]),o}}}),l(Ue,"onColorize",`
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
  `);class je extends O{constructor(){super(...arguments);l(this,"name","radialGradient")}static getEffectKey(e){return`radialGradient${e.colors.length}`}static resolveDefaults(e){const o=e.colors??[4278190080,4294967295];let s=e.stops;if(!s){s=[];const r=o.length-1;for(let n=0;n<o.length;n++)s.push(n*(1/r))}return{colors:o,stops:s,width:e.width??0,height:e.height??e.width??0,pivot:e.pivot??[.5,.5]}}}l(je,"z$__type__Props"),l(je,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},height:{value:0,method:"uniform1f",type:"float"},pivot:{value:[.5,.5],method:"uniform2fv",type:"vec2"},colors:{value:4294967295,validator:e=>e.map(s=>te(s)).reduce((s,r)=>s.concat(r),[]),size:e=>e.colors.length,method:"uniform4fv",type:"vec4"},stops:{value:[],validator:(e,o)=>{const s=o.colors??[];let r=e;const n=e;if(r.length===0||r&&r.length!==s.length){for(let a=0;a<s.length;a++)r[a]?(n[a]=r[a],r[a-1]===void 0&&n[a-2]!==void 0&&(n[a-1]=n[a-2]+(r[a]-n[a-2])/2)):n[a]=a*(1/(s.length-1));r=n}return n},size:e=>e.colors.length,method:"uniform1fv",type:"float"}}),l(je,"onColorize",e=>`
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
    `);class ve extends O{constructor(){super(...arguments);l(this,"name","radialProgress")}static getEffectKey(){return"radialProgress"}static resolveDefaults(e){return{width:e.width??10,progress:e.progress??.5,offset:e.offset??0,range:e.range??Math.PI*2,rounded:e.rounded??!1,radius:e.radius??1,color:e.color??4294967295}}}l(ve,"z$__type__Props"),l(ve,"uniforms",{width:{value:0,method:"uniform1f",type:"float"},progress:{value:.5,method:"uniform1f",type:"float"},offset:{value:0,method:"uniform1f",type:"float"},range:{value:0,method:"uniform1f",type:"float"},rounded:{value:0,method:"uniform1f",type:"float",validator:e=>e?1:0},radius:{value:1,method:"uniform1f",type:"float"},color:{value:4294967295,validator:e=>te(e),method:"uniform4fv",type:"vec4"}}),l(ve,"methods",{rotateUV:`
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
    `}),l(ve,"onEffectMask",`
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
  `),l(ve,"onColorize",`
    return color;
  `);class Go{constructor(){l(this,"shCache",new Map);l(this,"shConstructors",{});l(this,"attachedShader",null);l(this,"effectConstructors",{});l(this,"renderer");this.registerShaderType("DefaultShader",Qt),this.registerShaderType("DefaultShaderBatched",Zt),this.registerShaderType("RoundedRectangle",ht),this.registerShaderType("DynamicShader",be),this.registerShaderType("SdfShader",ft),this.registerEffectType("border",Re),this.registerEffectType("borderBottom",ye),this.registerEffectType("borderLeft",we),this.registerEffectType("borderRight",xe),this.registerEffectType("borderTop",ge),this.registerEffectType("fadeOut",Ue),this.registerEffectType("linearGradient",me),this.registerEffectType("radialGradient",je),this.registerEffectType("grayscale",Jt),this.registerEffectType("glitch",Ie),this.registerEffectType("radius",pe),this.registerEffectType("radialProgress",ve)}registerShaderType(t,e){this.shConstructors[t]=e}registerEffectType(t,e){this.effectConstructors[t]=e}getRegisteredEffects(){return this.effectConstructors}getRegisteredShaders(){return this.shConstructors}loadShader(t,e){if(!this.renderer)throw new Error("Renderer is not been defined");const o=this.shConstructors[t];if(!o)throw new Error(`Shader type "${t}" is not registered`);if(t==="DynamicShader")return this.loadDynamicShader(e);const s=o.resolveDefaults(e),r=o.makeCacheKey(s)||o.name;if(r&&this.shCache.has(r))return{shader:this.shCache.get(r),props:s};const n=new o(this.renderer,e);return r&&this.shCache.set(r,n),{shader:n,props:s}}loadDynamicShader(t){if(!this.renderer)throw new Error("Renderer is not been defined");const e=be.resolveDefaults(t,this.effectConstructors),o=be.makeCacheKey(e,this.effectConstructors);if(o&&this.shCache.has(o))return{shader:this.shCache.get(o),props:e};const s=new be(this.renderer,t,this.effectConstructors);return o&&this.shCache.set(o,s),{shader:s,props:e}}useShader(t){this.attachedShader!==t&&(this.attachedShader&&this.attachedShader.detach(),t.attach(),this.attachedShader=t)}}class qo{constructor(){l(this,"activeAnimations",new Set)}registerAnimation(t){this.activeAnimations.add(t)}unregisterAnimation(t){this.activeAnimations.delete(t)}update(t){this.activeAnimations.forEach(e=>{e.update(t)})}}const Me=class Me extends Ut{constructor(e,o){super(e);l(this,"props");this.props=Me.resolveDefaults(o)}async getTextureData(){const{src:e,premultiplyAlpha:o}=this.props;if(!e)return{data:null};if(e instanceof ImageData)return{data:e,premultiplyAlpha:o};const r=await(await fetch(e)).blob();return{data:await createImageBitmap(r,{premultiplyAlpha:o?"premultiply":"none",colorSpaceConversion:"none",imageOrientation:"none"})}}static makeCacheKey(e){const o=Me.resolveDefaults(e);return o.src instanceof ImageData?!1:`ImageTexture,${o.src},${o.premultiplyAlpha}`}static resolveDefaults(e){return{src:e.src??"",premultiplyAlpha:e.premultiplyAlpha??!0}}};l(Me,"z$__type__Props");let dt=Me;const Le=class Le extends Ut{constructor(e,o){super(e);l(this,"props");this.props=Le.resolveDefaults(o)}async getTextureData(){const{width:e,height:o}=this.props,s=e*o*4,r=new Uint8ClampedArray(s);for(let n=0;n<s;n+=4){const a=Math.floor(Math.random()*256);r[n]=a,r[n+1]=a,r[n+2]=a,r[n+3]=255}return{data:new ImageData(r,e,o)}}static makeCacheKey(e){const o=Le.resolveDefaults(e);return`NoiseTexture,${o.width},${o.height},${o.cacheId}`}static resolveDefaults(e){return{width:e.width??128,height:e.height??128,cacheId:e.cacheId??0}}};l(Le,"z$__type__Props");let ut=Le;class Vo{constructor(){l(this,"usedMemory",0);l(this,"txConstructors",{});l(this,"textureKeyCache",new Map);l(this,"textureIdCache",new Map);l(this,"ctxTextureCache",new WeakMap);l(this,"textureRefCountMap",new WeakMap);l(this,"renderer");this.registerTextureType("ImageTexture",dt),this.registerTextureType("ColorTexture",_o),this.registerTextureType("NoiseTexture",ut),this.registerTextureType("SubTexture",To)}registerTextureType(t,e){this.txConstructors[t]=e}loadTexture(t,e,o=null){const s=this.txConstructors[t];if(!s)throw new Error(`Texture type "${t}" is not registered`);let r;if((o==null?void 0:o.id)!==void 0&&this.textureIdCache.has(o.id)&&(r=this.textureIdCache.get(o.id)),!r){const n=o==null?void 0:o.id,a=(o==null?void 0:o.cacheKey)??s.makeCacheKey(e);a&&this.textureKeyCache.has(a)?r=this.textureKeyCache.get(a):r=new s(this,e),n&&this.addTextureIdToCache(n,a,r)}return o!=null&&o.preload&&this.getCtxTexture(r).load(),r}addTextureIdToCache(t,e,o){const{textureIdCache:s,textureRefCountMap:r}=this;s.set(t,o),r.has(o)?r.get(o).count++:(r.set(o,{cacheKey:e,count:1}),e&&this.textureKeyCache.set(e,o))}removeTextureIdFromCache(t){const{textureIdCache:e,textureRefCountMap:o}=this,s=e.get(t);if(s&&(e.delete(t),o.has(s))){const r=o.get(s);T(r),r.count--,r.count===0&&(o.delete(s),r.cacheKey&&this.textureKeyCache.delete(r.cacheKey))}}getDebugInfo(){return{keyCacheSize:this.textureKeyCache.size,idCacheSize:this.textureIdCache.size}}getCtxTexture(t){if(this.ctxTextureCache.has(t))return this.ctxTextureCache.get(t);const e=this.renderer.createCtxTexture(t);return this.ctxTextureCache.set(t,e),e}}class eo{constructor(t){l(this,"textRenderers");this.textRenderers=t}addFontFace(t){for(const e in this.textRenderers){const o=this.textRenderers[e];o&&o.isFontFaceSupported(t)&&o.addFontFace(t)}}static resolveFontFace(t,e){const o=[];return t.reduce((r,n)=>{if(r)return r;const a=n[e.fontFamily];if(!a)return;const p=new Set(a);for(const c of p)(c.descriptors.stretch!==e.fontStretch||c.descriptors.style!==e.fontStyle||c.descriptors.weight!==e.fontWeight)&&p.delete(c);return p.values().next().value},void 0)||o[0]}}const Qo={x:(i,t)=>{i.props.x=t},y:(i,t)=>{i.props.y=t},width:(i,t)=>{i.props.width=t},height:(i,t)=>{i.props.height=t},color:(i,t)=>{i.props.color=t},zIndex:(i,t)=>{i.props.zIndex=t},fontFamily:(i,t)=>{i.props.fontFamily=t},fontWeight:(i,t)=>{i.props.fontWeight=t},fontStyle:(i,t)=>{i.props.fontStyle=t},fontStretch:(i,t)=>{i.props.fontStretch=t},fontSize:(i,t)=>{i.props.fontSize=t},text:(i,t)=>{i.props.text=t},textAlign:(i,t)=>{i.props.textAlign=t},contain:(i,t)=>{i.props.contain=t},offsetY:(i,t)=>{i.props.offsetY=t},scrollable:(i,t)=>{i.props.scrollable=t},scrollY:(i,t)=>{i.props.scrollY=t},letterSpacing:(i,t)=>{i.props.letterSpacing=t},debug:(i,t)=>{i.props.debug=t}};class to{constructor(t){l(this,"stage");l(this,"set");this.stage=t;const e={...Qo,...this.getPropertySetters()};this.set=Object.freeze(Object.fromEntries(Object.entries(e).map(([o,s])=>[o,(r,n)=>{r.props[o]!==n&&s(r,n)}])))}setStatus(t,e,o){t.status!==e&&(t.status=e,t.emitter.emit(e,o))}scheduleUpdateState(t){t.updateScheduled||(t.updateScheduled=!0,queueMicrotask(()=>{t.updateScheduled=!1,this.updateState(t)}))}}const Zo=24;function Jo(i,t,e,o,s,r,n){let a=0;s&&(a=Math.min(Math.max(Math.floor(s.y1/i),0),r.length));const p=0,c=t/e+a*o;if(!(n&&c>=n/e))return{x:p,y:c,lineIndex:a}}class Ke{constructor(t,e=0){l(this,"iterator");l(this,"peekBuffer",[]);l(this,"_lastIndex");this.iterator=t,this.iterator=t,this._lastIndex=e-1,this.peekBuffer=[]}next(){const t=this.peekBuffer.length>0?this.peekBuffer.pop():this.iterator.next();return t.done?this._lastIndex=-1:this._lastIndex++,t}peek(){if(this.peekBuffer.length>0)return this.peekBuffer[0];const t=this.iterator.next();return this.peekBuffer.push(t),t}get lastIndex(){return this._lastIndex}}function*Ge(i,t=0){let e=t;for(;e<i.length;){const o=i.codePointAt(e);if(o===void 0)throw new Error("Invalid Unicode code point");yield o,e+=o<=65535?1:2}}function ei(i,t,e){const o=e.shapeText(t,new Ke(Ge(i,0),0));let s=0;for(const r of o)r.mapped&&(s+=r.xAdvance);return s}function ti(i,t,e,o,s,r,n,a,p,c,d,f,b,m,u,x){T(m,"Font face must be loaded"),T(m.loaded,"Font face must be loaded"),T(m.data,"Font face must be loaded"),T(m.shaper,"Font face must be loaded");const g=m.data.info.size,w=a/g,k=r/w,L=p/w,S=f[i],y=(S==null?void 0:S.codepointIndex)||0,$=(S==null?void 0:S.maxX)||0,M=(S==null?void 0:S.maxY)||0;let E=$,_=M,R=t,I=e,v=0;const F={codepointIndex:-1,bufferOffset:-1,xStart:-1},V=m.shaper,j={letterSpacing:L};let oe=V.shapeText(j,new Ke(Ge(o,y),y)),G,re=-1;const _e=[],$t="...",go=n/w,yo=ei($t,j,V);let Pe=!0;for(;Pe;){const ce=d!=="both"||x||I+g+g<=go,ie=ce?k:k-yo;let X=0;for(;(G=oe.next())&&!G.done;){const N=G.value;if(i===f.length)f.push({codepointIndex:N.cluster,maxY:_,maxX:E});else if(i>f.length)throw new Error("Unexpected lineCache length");if(N.codepoint===32||N.codepoint===10?F.codepointIndex!==-1&&(F.codepointIndex=-1,X=R):F.codepointIndex===-1&&(F.codepointIndex=N.cluster,F.bufferOffset=v,F.xStart=X),N.mapped){const Te=R+N.xOffset+N.width;if(d!=="none"&&Te>=ie&&F.codepointIndex!==-1&&F.codepointIndex<N.cluster&&F.xStart>0)if(ce){oe=V.shapeText(j,new Ke(Ge(o,F.codepointIndex),F.codepointIndex)),v=F.bufferOffset;break}else oe=V.shapeText(j,new Ke(Ge($t,0),0)),R=F.xStart,v=F.bufferOffset;else{const Q=R+N.xOffset,Se=I+N.yOffset,wo=b?I+g>=b.y1/w:!0,vo=b?I<=b.y2/w:!0;if(wo&&vo){re===-1&&(re=v);const Ae=m.getAtlasEntry(N.glyphId),Be=Ae.x/m.data.common.scaleW,De=Ae.y/m.data.common.scaleH,Et=Ae.width/m.data.common.scaleW,_t=Ae.height/m.data.common.scaleH;c[v++]=Q,c[v++]=Se,c[v++]=Be,c[v++]=De,c[v++]=Q+N.width,c[v++]=Se,c[v++]=Be+Et,c[v++]=De,c[v++]=Q,c[v++]=Se+N.height,c[v++]=Be,c[v++]=De+_t,c[v++]=Q+N.width,c[v++]=Se+N.height,c[v++]=Be+Et,c[v++]=De+_t}_=Math.max(_,Se+N.height),R+=N.xAdvance,E=Math.max(E,R)}}else if(N.codepoint===10)break}re!==-1&&(_e.push({bufferStart:re,bufferEnd:v}),re=-1),R=0,I+=g,i++,F.codepointIndex=-1,X=0,(!u&&d==="both"&&b&&I>b.y2/w||G&&G.done||d==="both"&&!x&&!ce)&&(Pe=!1)}if(s==="center"){const ce=d==="none"?E:k;for(let ie=0;ie<_e.length;ie++){const X=_e[ie],N=c[X.bufferEnd-4]-c[X.bufferStart],Te=(ce-N)/2;for(let Q=X.bufferStart;Q<X.bufferEnd;Q+=4)c[Q]+=Te}}else if(s==="right"){const ce=d==="none"?E:k;for(let ie=0;ie<_e.length;ie++){const X=_e[ie],N=X.bufferEnd===X.bufferStart?0:c[X.bufferEnd-4]-c[X.bufferStart],Te=ce-N;for(let Q=X.bufferStart;Q<X.bufferEnd;Q+=4)c[Q]+=Te}}return T(G),{bufferNumFloats:v,bufferNumQuads:v/16,layoutNumCharacters:G.done?o.length-y:G.value.cluster-y+1,fullyProcessed:!!G.done,maxX:E,maxY:_}}function oi(i,t,e,o,s,r){const n=o*s,a=r.x1-i,p=r.y1-t;return So(r)?{x1:a,y1:p+e-n,x2:a+(r.x2-r.x1),y2:p+e+(r.y2-r.y1)+n}:{x1:0,y1:0,x2:0,y2:0}}const ii=Je(0,0,0,0);class si extends to{constructor(e){super(e);l(this,"ssdfFontFamilies",{});l(this,"msdfFontFamilies",{});l(this,"sdfShader");l(this,"rendererBounds");this.sdfShader=this.stage.shManager.loadShader("SdfShader").shader,this.rendererBounds={x1:0,y1:0,x2:this.stage.options.appWidth,y2:this.stage.options.appHeight}}getPropertySetters(){return{fontFamily:(e,o)=>{e.props.fontFamily=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontWeight:(e,o)=>{e.props.fontWeight=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontStyle:(e,o)=>{e.props.fontStyle=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontStretch:(e,o)=>{e.props.fontStretch=o,e.trFontFace=void 0,this.invalidateLayoutCache(e)},fontSize:(e,o)=>{e.props.fontSize=o,this.invalidateLayoutCache(e)},text:(e,o)=>{e.props.text=o,this.invalidateLayoutCache(e)},textAlign:(e,o)=>{e.props.textAlign=o,this.invalidateLayoutCache(e)},color:(e,o)=>{e.props.color=o},x:(e,o)=>{e.props.x=o,this.invalidateVisibleWindowCache(e)},y:(e,o)=>{e.props.y=o,this.invalidateVisibleWindowCache(e)},contain:(e,o)=>{e.props.contain=o,this.invalidateLayoutCache(e)},width:(e,o)=>{e.props.width=o,this.invalidateLayoutCache(e)},height:(e,o)=>{e.props.height=o,this.invalidateLayoutCache(e)},offsetY:(e,o)=>{e.props.offsetY=o,this.invalidateLayoutCache(e)},scrollable:(e,o)=>{e.props.scrollable=o,this.invalidateLayoutCache(e)},scrollY:(e,o)=>{e.props.scrollY=o,this.scheduleUpdateState(e)},letterSpacing:(e,o)=>{e.props.letterSpacing=o,this.invalidateLayoutCache(e)},debug:(e,o)=>{e.props.debug=o}}}canRenderFont(e){const{fontFamily:o}=e;return o in this.ssdfFontFamilies||o in this.msdfFontFamilies||o==="$$SDF_FAILURE_TEST$$"}isFontFaceSupported(e){return e instanceof St}addFontFace(e){T(e instanceof St);const o=e.fontFamily,s=e.type==="ssdf"?this.ssdfFontFamilies:e.type==="msdf"?this.msdfFontFamilies:void 0;if(!s){console.warn(`Invalid font face type: ${e.type}`);return}let r=s[o];r||(r=new Set,s[o]=r),r.add(e)}createState(e){return{props:e,status:"initialState",updateScheduled:!1,emitter:new de,lineCache:[],forceFullLayoutCalc:!1,renderWindow:void 0,visibleWindow:{x1:0,y1:0,x2:0,y2:0,valid:!1},bufferNumFloats:0,bufferNumQuads:0,vertexBuffer:void 0,webGlBuffers:null,bufferUploaded:!1,textH:void 0,textW:void 0,distanceRange:0,trFontFace:void 0,debugData:{updateCount:0,layoutCount:0,lastLayoutNumCharacters:0,layoutSum:0,drawSum:0,drawCount:0,bufferSize:0}}}updateState(e){let{trFontFace:o}=e;const{textH:s,lineCache:r,debugData:n,forceFullLayoutCalc:a}=e;if(n.updateCount++,e.status==="initialState"&&this.setStatus(e,"loading"),!o&&(o=this.resolveFontFace(e.props),e.trFontFace=o,!o)){const v=`SdfTextRenderer: Could not resolve font face for family: '${e.props.fontFamily}'`;console.error(v),this.setStatus(e,"failed",new Error(v));return}if(!o.loaded){o.once("loaded",()=>{this.scheduleUpdateState(e)});return}T(o.data,"Font face data should be loaded");const{text:p,fontSize:c,x:d,y:f,contain:b,width:m,height:u,scrollable:x}=e.props,g=b==="both"&&x?e.props.scrollY:0;let{renderWindow:w}=e;const k=o.data.info.size,L=c/k;e.distanceRange=L*o.data.distanceField.distanceRange;const S=p.length*Zo;let y=e.vertexBuffer;(!y||y.length<S)&&(y=new Float32Array(S*2));const $=e.visibleWindow;if(!$.valid){const v=Je(d,f,b!=="none"?d+m:1/0,b==="both"?f+u:1/0,ii);jt(this.rendererBounds,v,e.visibleWindow),$.valid=!0}if(!a&&w){if(d+w.x1<=$.x1&&d+w.x2>=$.x2&&f-g+w.y1<=$.y1&&f-g+w.y2>=$.y2){this.setStatus(e,"loaded");return}w=e.renderWindow=void 0,this.setStatus(e,"loading")}const{offsetY:M,textAlign:E}=e.props;if(!w){const v=$.y2-$.y1,F=Math.ceil(v/k);w=oi(d,f,g,k,F,$)}const _=Jo(c,M,L,k,w,r,s);if(!_){this.setStatus(e,"loaded");return}const{letterSpacing:R}=e.props,I=ti(_.lineIndex,_.x,_.y,p,E,m,u,c,R,y,b,r,w,o,a,x);e.bufferUploaded=!1,e.bufferNumFloats=I.bufferNumFloats,e.bufferNumQuads=I.bufferNumQuads,e.vertexBuffer=y,e.renderWindow=w,n.lastLayoutNumCharacters=I.layoutNumCharacters,n.bufferSize=y.byteLength,I.fullyProcessed&&(e.textW=I.maxX*L,e.textH=I.maxY*L),this.setStatus(e,"loaded")}renderQuads(e,o,s,r){var E,_;if(!e.vertexBuffer)return;performance.now();const{renderer:n}=this.stage;this.stage.options;const{fontSize:a,color:p,contain:c,scrollable:d,zIndex:f,debug:b}=e.props,m=c==="both"&&d?e.props.scrollY:0,{textW:u=0,textH:x=0,distanceRange:g,vertexBuffer:w,bufferUploaded:k,trFontFace:L}=e;let{webGlBuffers:S}=e;if(!S){const R=n.gl,I=4*Float32Array.BYTES_PER_ELEMENT,v=R.createBuffer();T(v),e.webGlBuffers=new Co([{buffer:v,attributes:{a_position:{name:"a_position",size:2,type:R.FLOAT,normalized:!1,stride:I,offset:0},a_textureCoordinate:{name:"a_textureCoordinate",size:2,type:R.FLOAT,normalized:!1,stride:I,offset:2*Float32Array.BYTES_PER_ELEMENT}}}]),e.bufferUploaded=!1,T(e.webGlBuffers),S=e.webGlBuffers}if(!k){const R=n.gl,I=(S==null?void 0:S.getBuffer("a_textureCoordinate"))??null;R.bindBuffer(R.ARRAY_BUFFER,I),R.bufferData(R.ARRAY_BUFFER,w,R.STATIC_DRAW),e.bufferUploaded=!0}T(L);const y=new ko(n.gl,n.options,S,this.sdfShader,{transform:o.data,color:Ro(p,r),size:a/(((E=L.data)==null?void 0:E.info.size)||0),scrollY:m,distanceRange:g,debug:b.sdfShaderDebug},r,s,{height:x,width:u},0,f),$=(_=e.trFontFace)==null?void 0:_.texture;T($);const M=this.stage.txManager.getCtxTexture($);y.addTexture(M),y.length=e.bufferNumFloats,y.numQuads=e.bufferNumQuads,n.addRenderOp(y)}resolveFontFace(e){return eo.resolveFontFace([this.msdfFontFamilies,this.ssdfFontFamilies],e)}invalidateVisibleWindowCache(e){e.visibleWindow.valid=!1,this.scheduleUpdateState(e)}invalidateLayoutCache(e){e.visibleWindow.valid=!1,e.renderWindow=void 0,e.textH=void 0,e.textW=void 0,e.lineCache=[],this.setStatus(e,"loading"),this.scheduleUpdateState(e)}}const kt=2048;class ri{constructor(t,e){l(this,"_canvas");l(this,"_context");l(this,"_settings");l(this,"renderInfo");this._canvas=t,this._context=e,this._settings=this.mergeDefaults({})}set settings(t){this._settings=this.mergeDefaults(t)}get settings(){return this._settings}getPrecision(){return this._settings.precision}setFontProperties(){this._context.font=this._getFontSetting(),this._context.textBaseline=this._settings.textBaseline}_getFontSetting(){const t=[this._settings.fontFace],e=[];for(let o=0,s=t.length;o<s;o++)t[o]==="serif"||t[o]==="sans-serif"?e.push(t[o]):e.push(`"${t[o]}"`);return`${this._settings.fontStyle} ${this._settings.fontSize*this.getPrecision()}px ${e.join(",")}`}_load(){if(document.fonts){const t=this._getFontSetting();try{if(!document.fonts.check(t,this._settings.text))return document.fonts.load(t,this._settings.text).catch(e=>{console.warn("[Lightning] Font load error",e,t)}).then(()=>{document.fonts.check(t,this._settings.text)||console.warn("[Lightning] Font not found",t)})}catch{console.warn("[Lightning] Can't check font loading for "+t)}}}calculateRenderInfo(){const t={},e=this.getPrecision(),o=this._settings.paddingLeft*e,s=this._settings.paddingRight*e,r=this._settings.fontSize*e;let n=this._settings.offsetY===null?null:this._settings.offsetY*e,a=(this._settings.lineHeight||r)*e;const p=this._settings.w*e,c=this._settings.h*e;let d=this._settings.wordWrapWidth*e;const f=this._settings.cutSx*e,b=this._settings.cutEx*e,m=this._settings.cutSy*e,u=this._settings.cutEy*e,x=(this._settings.letterSpacing||0)*e,g=this._settings.textIndent*e;this.setFontProperties();let w=p||2048/this.getPrecision(),k=w-o;if(k<10&&(w+=10-k,k=10),d||(d=k),this._settings.textOverflow&&!this._settings.wordWrap){let E;switch(this._settings.textOverflow){case"clip":E="";break;case"ellipsis":E=this._settings.maxLinesSuffix;break;default:E=this._settings.textOverflow}this._settings.text=this.wrapWord(this._settings.text,d-g,E)}let L;if(this._settings.wordWrap)L=this.wrapText(this._settings.text,d,x,g);else{L={l:this._settings.text.split(/(?:\r\n|\r|\n)/),n:[]};const E=L.l.length;for(let _=0;_<E-1;_++)L.n.push(_)}let S=L.l;if(this._settings.maxLines&&S.length>this._settings.maxLines){const E=S.slice(0,this._settings.maxLines);let _=null;if(this._settings.maxLinesSuffix){const V=this._settings.maxLinesSuffix?this.measureText(this._settings.maxLinesSuffix):0,j=this.wrapText(E[E.length-1],d-V,x,g);E[E.length-1]=`${j.l[0]}${this._settings.maxLinesSuffix}`,_=[j.l.length>1?j.l[1]:""]}else _=[""];let R;const I=S.length;let v=0;const F=L.n.length;for(R=this._settings.maxLines;R<I;R++)_[v]+=`${_[v]?" ":""}${S[R]}`,R+1<F&&L.n[R+1]&&v++;t.remainingText=_.join(`
`),t.moreTextLines=!0,S=E}else t.moreTextLines=!1,t.remainingText="";let y=0;const $=[];for(let E=0;E<S.length;E++){const _=this.measureText(S[E],x)+(E===0?g:0);$.push(_),y=Math.max(y,_)}t.lineWidths=$,p||(w=y+o+s,k=y),a=a||r;let M;if(c)M=c;else{const E=this._settings.textBaseline!="bottom"?.5*r:0;M=a*(S.length-1)+E+Math.max(a,r)+(n||0)}return n===null&&(n=r),t.w=w,t.h=M,t.lines=S,t.precision=e,w||(w=1),M||(M=1),(f||b)&&(w=Math.min(w,b-f)),(m||u)&&(M=Math.min(M,u-m)),t.width=w,t.innerWidth=k,t.height=M,t.fontSize=r,t.cutSx=f,t.cutSy=m,t.cutEx=b,t.cutEy=u,t.lineHeight=a,t.lineWidths=$,t.offsetY=n,t.paddingLeft=o,t.paddingRight=s,t.letterSpacing=x,t.textIndent=g,t}draw(t,e){const o=this.getPrecision(),s=(e==null?void 0:e.lines)||t.lines,r=(e==null?void 0:e.lineWidths)||t.lineWidths,n=e?e.lines.length*t.lineHeight:t.height;this._canvas.width=Math.min(Math.ceil(t.width+this._settings.textRenderIssueMargin),kt),this._canvas.height=Math.min(Math.ceil(n),kt),this.setFontProperties(),t.fontSize>=128&&(this._context.globalAlpha=.01,this._context.fillRect(0,0,.01,.01),this._context.globalAlpha=1),(t.cutSx||t.cutSy)&&this._context.translate(-t.cutSx,-t.cutSy);let a,p;const c=[];for(let f=0,b=s.length;f<b;f++)a=f===0?t.textIndent:0,p=f*t.lineHeight+t.offsetY,this._settings.verticalAlign=="middle"?p+=(t.lineHeight-t.fontSize)/2:this._settings.verticalAlign=="bottom"&&(p+=t.lineHeight-t.fontSize),this._settings.textAlign==="right"?a+=t.innerWidth-r[f]:this._settings.textAlign==="center"&&(a+=(t.innerWidth-r[f])/2),a+=t.paddingLeft,c.push({text:s[f],x:a,y:p,w:r[f]});if(this._settings.highlight){const f=this._settings.highlightColor,b=this._settings.highlightHeight*o||t.fontSize*1.5,m=this._settings.highlightOffset*o,u=this._settings.highlightPaddingLeft!==null?this._settings.highlightPaddingLeft*o:t.paddingLeft,x=this._settings.highlightPaddingRight!==null?this._settings.highlightPaddingRight*o:t.paddingRight;this._context.fillStyle=et(f);for(let g=0;g<c.length;g++){const w=c[g];this._context.fillRect(w.x-u,w.y-t.offsetY+m,w.w+x+u,b)}}let d=null;this._settings.shadow&&(d=[this._context.shadowColor,this._context.shadowOffsetX,this._context.shadowOffsetY,this._context.shadowBlur],this._context.shadowColor=et(this._settings.shadowColor),this._context.shadowOffsetX=this._settings.shadowOffsetX*o,this._context.shadowOffsetY=this._settings.shadowOffsetY*o,this._context.shadowBlur=this._settings.shadowBlur*o),this._context.fillStyle=et(this._settings.textColor);for(let f=0,b=c.length;f<b;f++){const m=c[f];if(t.letterSpacing===0)this._context.fillText(m.text,m.x,m.y);else{const u=m.text.split("");let x=m.x;for(let g=0,w=u.length;g<w;g++)this._context.fillText(u[g],x,m.y),x+=this.measureText(u[g],t.letterSpacing)}}d&&(this._context.shadowColor=d[0],this._context.shadowOffsetX=d[1],this._context.shadowOffsetY=d[2],this._context.shadowBlur=d[3]),(t.cutSx||t.cutSy)&&this._context.translate(t.cutSx,t.cutSy),this.renderInfo=t}wrapWord(t,e,o){const s=this._context.measureText(o).width,r=t.length,n=this._context.measureText(t).width;if(n<=e)return t;let a=Math.floor(e*r/n),p=this._context.measureText(t.substring(0,a)).width+s;if(p>e)for(;a>0&&(p=this._context.measureText(t.substring(0,a)).width+s,p>e);)a-=1;else for(;a<r;)if(p=this._context.measureText(t.substring(0,a)).width+s,p<e)a+=1;else{a-=1;break}return t.substring(0,a)+(e>=s?o:"")}wrapText(t,e,o,s=0){const r=t.split(/\r?\n/g);let n=[];const a=[];for(let p=0;p<r.length;p++){const c=[];let d="",f=e-s;const b=r[p].split(" ");for(let m=0;m<b.length;m++){const u=this.measureText(b[m],o),x=u+this.measureText(" ",o);m===0||x>f?(m>0&&(c.push(d),d=""),d+=b[m],f=e-u-(m===0?s:0)):(f-=x,d+=` ${b[m]}`)}c.push(d),d="",n=n.concat(c),p<r.length-1&&a.push(n.length)}return{l:n,n:a}}measureText(t,e=0){return e?t.split("").reduce((o,s)=>o+this._context.measureText(s).width+e,0):this._context.measureText(t).width}mergeDefaults(t){return{text:"",w:0,h:0,fontStyle:"normal",fontSize:40,fontFace:null,wordWrap:!0,wordWrapWidth:0,wordBreak:!1,textOverflow:"",lineHeight:null,textBaseline:"alphabetic",textAlign:"left",verticalAlign:"top",offsetY:null,maxLines:0,maxLinesSuffix:"..",textColor:[1,1,1,1],paddingLeft:0,paddingRight:0,shadow:!1,shadowColor:[0,0,0,1],shadowOffsetX:0,shadowOffsetY:0,shadowBlur:5,highlight:!1,highlightHeight:0,highlightColor:[0,0,0,1],highlightOffset:0,highlightPaddingLeft:0,highlightPaddingRight:0,letterSpacing:0,textIndent:0,cutSx:0,cutEx:0,cutSy:0,cutEy:0,advancedRenderer:!1,fontBaselineRatio:0,precision:1,textRenderIssueMargin:0,...t}}}const Rt=typeof self>"u"?globalThis:self;var Xt;const It=((Xt=Rt.document)==null?void 0:Xt.fonts)||Rt.fonts;function ni(i){const{fontFamily:t,fontStyle:e,fontWeight:o,fontStretch:s,fontSize:r}=i;return[e,o,s,`${r}px`,t].join(" ")}const ai=Je(0,0,0,0);class li extends to{constructor(e){super(e);l(this,"canvas");l(this,"context");l(this,"rendererBounds");typeof OffscreenCanvas<"u"?this.canvas=new OffscreenCanvas(0,0):this.canvas=document.createElement("canvas");let o=this.canvas.getContext("2d");o||(this.canvas=document.createElement("canvas"),o=this.canvas.getContext("2d")),T(o),this.context=o,this.rendererBounds={x1:0,y1:0,x2:this.stage.options.appWidth,y2:this.stage.options.appHeight}}getPropertySetters(){return{fontFamily:(e,o)=>{e.props.fontFamily=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontWeight:(e,o)=>{e.props.fontWeight=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontStyle:(e,o)=>{e.props.fontStyle=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontStretch:(e,o)=>{e.props.fontStretch=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},fontSize:(e,o)=>{e.props.fontSize=o,e.fontInfo=void 0,this.invalidateLayoutCache(e)},text:(e,o)=>{e.props.text=o,this.invalidateLayoutCache(e)},textAlign:(e,o)=>{e.props.textAlign=o,this.invalidateLayoutCache(e)},color:(e,o)=>{e.props.color=o,this.invalidateLayoutCache(e)},x:(e,o)=>{e.props.x=o,this.invalidateVisibleWindowCache(e)},y:(e,o)=>{e.props.y=o,this.invalidateVisibleWindowCache(e)},contain:(e,o)=>{e.props.contain=o,this.invalidateLayoutCache(e)},width:(e,o)=>{e.props.width=o,this.invalidateLayoutCache(e)},height:(e,o)=>{e.props.height=o,this.invalidateLayoutCache(e)},offsetY:(e,o)=>{e.props.offsetY=o,this.invalidateLayoutCache(e)},scrollY:(e,o)=>{e.props.scrollY=o},letterSpacing:(e,o)=>{e.props.letterSpacing=o,this.invalidateLayoutCache(e)}}}canRenderFont(e){return!0}isFontFaceSupported(e){return e instanceof Ct}addFontFace(e){T(e instanceof Ct),It.add(e.fontFace)}createState(e){return{props:e,status:"initialState",updateScheduled:!1,emitter:new de,canvasPages:void 0,lightning2TextRenderer:new ri(this.canvas,this.context),renderWindow:void 0,visibleWindow:{x1:0,y1:0,x2:0,y2:0,valid:!1},renderInfo:void 0,forceFullLayoutCalc:!1,textW:0,textH:0,fontInfo:void 0,fontFaceLoadedHandler:void 0,debugData:{updateCount:0,layoutCount:0,drawCount:0,lastLayoutNumCharacters:0,layoutSum:0,drawSum:0,bufferSize:0}}}updateState(e){if(e.status==="initialState"&&this.setStatus(e,"loading"),!e.fontInfo){const u=ni(e.props);if(e.fontInfo={cssString:u,loaded:!1},!e.fontInfo.loaded){It.load(u).then(this.onFontLoaded.bind(this,e,u)).catch(this.onFontLoadError.bind(this,e,u));return}}if(!e.fontInfo.loaded)return;e.renderInfo||(e.lightning2TextRenderer.settings={text:e.props.text,textAlign:e.props.textAlign,fontFace:e.props.fontFamily,fontSize:e.props.fontSize,fontStyle:[e.props.fontStretch,e.props.fontStyle,e.props.fontWeight].join(" "),textColor:te(e.props.color),offsetY:e.props.fontSize+e.props.offsetY,wordWrap:e.props.contain!=="none",wordWrapWidth:e.props.contain==="none"?void 0:e.props.width,letterSpacing:e.props.letterSpacing},e.renderInfo=e.lightning2TextRenderer.calculateRenderInfo(),e.textH=e.renderInfo.lineHeight*e.renderInfo.lines.length,e.textW=e.renderInfo.width,e.renderWindow=void 0);const{x:o,y:s,width:r,height:n,scrollY:a,contain:p}=e.props,{visibleWindow:c}=e;let{renderWindow:d,canvasPages:f}=e;if(!c.valid){const u=Je(o,s,p!=="none"?o+r:1/0,p==="both"?s+n:1/0,ai);jt(this.rendererBounds,u,c),c.valid=!0}const b=c.y2-c.y1,m=Math.ceil(b/e.renderInfo.lineHeight);if(b===0){f=void 0,d=void 0,this.setStatus(e,"loaded");return}else if(d&&f){const u=o+d.x1,x=s-a+d.y1,g=o+d.x2,w=s-a+d.y2;if(u<=c.x1&&g>=c.x2&&x<=c.y1&&w>=c.y2){this.setStatus(e,"loaded");return}w<c.y2?(d.y1+=m*e.renderInfo.lineHeight,d.y2+=m*e.renderInfo.lineHeight,f.push(f.shift()),f[2].lineNumStart=f[1].lineNumStart+m,f[2].lineNumEnd=f[2].lineNumStart+m,f[2].valid=!1):x>c.y1&&(d.y1-=m*e.renderInfo.lineHeight,d.y2-=m*e.renderInfo.lineHeight,f.unshift(f.pop()),f[0].lineNumStart=f[1].lineNumStart-m,f[0].lineNumEnd=f[0].lineNumStart+m,f[0].valid=!1)}else{const u=e.renderInfo.lineHeight*m,x=Math.ceil(a/u),g=x*m,w=g-m,k=g+m;f=[{texture:f==null?void 0:f[0].texture,lineNumStart:w,lineNumEnd:w+m,valid:!1},{texture:f==null?void 0:f[1].texture,lineNumStart:g,lineNumEnd:g+m,valid:!1},{texture:f==null?void 0:f[2].texture,lineNumStart:k,lineNumEnd:k+m,valid:!1}],e.canvasPages=f;const L=x*u;d={x1:0,y1:L-u,x2:r,y2:L+u*2}}e.renderWindow=d,performance.now();for(const u of f)if(!u.valid){if(u.lineNumStart<0){u.texture=this.stage.txManager.loadTexture("ImageTexture",{src:""}),u.valid=!0;continue}e.lightning2TextRenderer.draw(e.renderInfo,{lines:e.renderInfo.lines.slice(u.lineNumStart,u.lineNumEnd),lineWidths:e.renderInfo.lineWidths.slice(u.lineNumStart,u.lineNumEnd)}),this.canvas.width===0||this.canvas.height===0||(u.texture=this.stage.txManager.loadTexture("ImageTexture",{src:this.context.getImageData(0,0,this.canvas.width,this.canvas.height)},{preload:!0})),u.valid=!0}this.setStatus(e,"loaded")}renderQuads(e,o,s,r){var M,E,_,R,I,v,F,V,j,oe,G,re;const{stage:n}=this,{canvasPages:a,textW:p=0,textH:c=0,renderWindow:d}=e;if(!a||!d)return;const{x:f,y:b,scrollY:m,contain:u,width:x,height:g}=e.props,w={x:f,y:b,width:u!=="none"?x:p,height:u==="both"?g:c};Ht({x:0,y:0,width:n.options.appWidth,height:n.options.appHeight},w),T(a,"canvasPages is not defined"),T(d,"renderWindow is not defined");const L=(d.y2-d.y1)/3,{zIndex:S,color:y}=e.props,$=r*Io(y);a[0].valid&&this.stage.renderer.addQuad({alpha:$,clippingRect:s,colorBl:4294967295,colorBr:4294967295,colorTl:4294967295,colorTr:4294967295,width:((E=(M=a[0].texture)==null?void 0:M.dimensions)==null?void 0:E.width)||0,height:((R=(_=a[0].texture)==null?void 0:_.dimensions)==null?void 0:R.height)||0,texture:a[0].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:S,tx:o.tx,ty:o.ty-m+d.y1,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td}),a[1].valid&&this.stage.renderer.addQuad({alpha:$,clippingRect:s,colorBl:4294967295,colorBr:4294967295,colorTl:4294967295,colorTr:4294967295,width:((v=(I=a[1].texture)==null?void 0:I.dimensions)==null?void 0:v.width)||0,height:((V=(F=a[1].texture)==null?void 0:F.dimensions)==null?void 0:V.height)||0,texture:a[1].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:S,tx:o.tx,ty:o.ty-m+d.y1+L,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td}),a[2].valid&&this.stage.renderer.addQuad({alpha:$,clippingRect:s,colorBl:4294967295,colorBr:4294967295,colorTl:4294967295,colorTr:4294967295,width:((oe=(j=a[2].texture)==null?void 0:j.dimensions)==null?void 0:oe.width)||0,height:((re=(G=a[2].texture)==null?void 0:G.dimensions)==null?void 0:re.height)||0,texture:a[2].texture,textureOptions:{},shader:null,shaderProps:null,zIndex:S,tx:o.tx,ty:o.ty-m+d.y1+L+L,ta:o.ta,tb:o.tb,tc:o.tc,td:o.td})}invalidateVisibleWindowCache(e){e.visibleWindow.valid=!1,this.setStatus(e,"loading"),this.scheduleUpdateState(e)}invalidateLayoutCache(e){e.renderInfo=void 0,this.setStatus(e,"loading"),this.scheduleUpdateState(e)}onFontLoaded(e,o){var s;o!==((s=e.fontInfo)==null?void 0:s.cssString)||!e.fontInfo||(e.fontInfo.loaded=!0,this.scheduleUpdateState(e))}onFontLoadError(e,o,s){var r;o!==((r=e.fontInfo)==null?void 0:r.cssString)||!e.fontInfo||(e.fontInfo.loaded=!0,console.error(`CanvasTextRenderer: Error loading font '${e.fontInfo.cssString}'`,s),this.scheduleUpdateState(e))}}const ci=2e6;class hi extends de{constructor(e){super();l(this,"options");l(this,"animationManager");l(this,"txManager");l(this,"fontManager");l(this,"textRenderers");l(this,"shManager");l(this,"renderer");l(this,"scene");l(this,"deltaTime",0);l(this,"lastFrameTime",0);l(this,"currentFrameTime",0);l(this,"fpsNumFrames",0);l(this,"fpsElapsedTime",0);this.options=e;const{canvas:o,clearColor:s,rootId:r,debug:n,appWidth:a,appHeight:p}=e;this.txManager=new Vo,this.shManager=new Go,this.animationManager=new qo,n!=null&&n.monitorTextureCache&&setInterval(()=>{T(this.txManager);const d=this.txManager.getDebugInfo();console.log("Texture ID Cache Size: ",d.idCacheSize),console.log("Texture Key Cache Size: ",d.keyCacheSize)},1e3),this.renderer=new zo({stage:this,canvas:o,pixelRatio:e.devicePhysicalPixelRatio*e.deviceLogicalPixelRatio,clearColor:s??4278190080,bufferMemory:ci,txManager:this.txManager,shManager:this.shManager}),this.txManager.renderer=this.renderer,this.textRenderers={canvas:new li(this),sdf:new si(this)},this.fontManager=new eo(this.textRenderers);const c=new wt(this,{id:r,x:0,y:0,width:a,height:p,alpha:1,clipping:!1,color:0,colorTop:0,colorBottom:0,colorLeft:0,colorRight:0,colorTl:0,colorTr:0,colorBl:0,colorBr:0,zIndex:0,zIndexLocked:0,scaleX:1,scaleY:1,mountX:0,mountY:0,mount:0,pivot:.5,pivotX:.5,pivotY:.5,rotation:0,parent:null,texture:null,textureOptions:null,shader:null,shaderProps:null});this.scene=new Ho(c),Uo(this)}updateAnimations(){const{scene:e,animationManager:o}=this;e!=null&&e.root&&(this.lastFrameTime=this.currentFrameTime,this.currentFrameTime=jo(),this.deltaTime=this.lastFrameTime?this.currentFrameTime-this.lastFrameTime:100/6,o.update(this.deltaTime))}hasSceneUpdates(){var o;const{scene:e}=this;return e!=null&&e.root?(o=e==null?void 0:e.root)==null?void 0:o.hasUpdates:!1}drawFrame(){var r;const{renderer:e,scene:o}=this;if(!(o!=null&&o.root))return;(r=o==null?void 0:o.root)==null||r.update(this.deltaTime),e==null||e.reset(),this.addQuads(o.root),e==null||e.render();const{fpsUpdateInterval:s}=this.options;if(s&&(this.fpsNumFrames++,this.fpsElapsedTime+=this.deltaTime,this.fpsElapsedTime>=s)){const n=Math.round(this.fpsNumFrames*1e3/this.fpsElapsedTime);this.fpsNumFrames=0,this.fpsElapsedTime=0,this.emit("fpsUpdate",n)}}addQuads(e){T(this.renderer&&e.globalTransform),e.renderQuads(this.renderer);for(let o=0;o<e.children.length;o++){const s=e.children[o];s&&(s==null?void 0:s.worldAlpha)!==0&&this.addQuads(s)}}resolveTextRenderer(e,o=null){let s=o,r=!1;if(s){const a=this.textRenderers[s];a?a.canRenderFont(e)||(console.warn(`Cannot use override text renderer '${s}' for font`,e),s=null,r=!0):(console.warn(`Text renderer override '${s}' not found.`),s=null,r=!0)}if(!s){for(const[a,p]of Object.entries(this.textRenderers))if(a!=="canvas"&&p.canRenderFont(e)){s=a;break}s||(s="canvas")}r&&console.warn(`Falling back to text renderer ${String(s)}`);const n=this.textRenderers[s];return T(n,"resolvedTextRenderer undefined"),n}get root(){var e;return((e=this.scene)==null?void 0:e.root)||null}}class fi extends wt{constructor(e,o){super(e,o);l(this,"textRenderer");l(this,"trState");l(this,"_textRendererOverride",null);l(this,"onTextLoaded",()=>{const{contain:e}=this,o=this.trState.props.width,s=this.trState.props.height,r=this.trState.textW||0,n=this.trState.textH||0;e==="both"?(this.props.width=o,this.props.height=s):e==="width"?(this.props.width=o,this.props.height=n):e==="none"&&(this.props.width=r,this.props.height=n),this.updateLocalTransform(),this.emit("loaded",{type:"text",dimensions:{width:this.trState.textW||0,height:this.trState.textH||0}})});l(this,"onTextFailed",(e,o)=>{this.emit("failed",{type:"text",error:o})});this._textRendererOverride=o.textRendererOverride;const{resolvedTextRenderer:s,textRendererState:r}=this.resolveTextRendererAndState({x:this.absX,y:this.absY,width:o.width,height:o.height,textAlign:o.textAlign,color:o.color,zIndex:o.zIndex,contain:o.contain,scrollable:o.scrollable,scrollY:o.scrollY,offsetY:o.offsetY,letterSpacing:o.letterSpacing,debug:o.debug,fontFamily:o.fontFamily,fontSize:o.fontSize,fontStretch:o.fontStretch,fontStyle:o.fontStyle,fontWeight:o.fontWeight,text:o.text},void 0);this.textRenderer=s,this.trState=r}get width(){return this.trState.props.width}set width(e){this.textRenderer.set.width(this.trState,e)}get height(){return this.trState.props.height}set height(e){this.textRenderer.set.height(this.trState,e)}get color(){return this.trState.props.color}set color(e){this.textRenderer.set.color(this.trState,e)}get text(){return this.trState.props.text}set text(e){this.textRenderer.set.text(this.trState,e)}get textRendererOverride(){return this._textRendererOverride}set textRendererOverride(e){this._textRendererOverride=e;const{resolvedTextRenderer:o,textRendererState:s}=this.resolveTextRendererAndState(this.trState.props,this.trState);this.textRenderer=o,this.trState=s}get fontSize(){return this.trState.props.fontSize}set fontSize(e){this.textRenderer.set.fontSize(this.trState,e)}get fontFamily(){return this.trState.props.fontFamily}set fontFamily(e){this.textRenderer.set.fontFamily(this.trState,e)}get fontStretch(){return this.trState.props.fontStretch}set fontStretch(e){this.textRenderer.set.fontStretch(this.trState,e)}get fontStyle(){return this.trState.props.fontStyle}set fontStyle(e){this.textRenderer.set.fontStyle(this.trState,e)}get fontWeight(){return this.trState.props.fontWeight}set fontWeight(e){this.textRenderer.set.fontWeight(this.trState,e)}get textAlign(){return this.trState.props.textAlign}set textAlign(e){this.textRenderer.set.textAlign(this.trState,e)}get contain(){return this.trState.props.contain}set contain(e){this.textRenderer.set.contain(this.trState,e)}get scrollable(){return this.trState.props.scrollable}set scrollable(e){this.textRenderer.set.scrollable(this.trState,e)}get scrollY(){return this.trState.props.scrollY}set scrollY(e){this.textRenderer.set.scrollY(this.trState,e)}get offsetY(){return this.trState.props.offsetY}set offsetY(e){this.textRenderer.set.offsetY(this.trState,e)}get letterSpacing(){return this.trState.props.letterSpacing}set letterSpacing(e){this.textRenderer.set.letterSpacing(this.trState,e)}get debug(){return this.trState.props.debug}set debug(e){this.textRenderer.set.debug(this.trState,e)}update(e,o=null){super.update(e,o),T(this.globalTransform),this.textRenderer.set.x(this.trState,this.globalTransform.tx),this.textRenderer.set.y(this.trState,this.globalTransform.ty)}renderQuads(e){T(this.globalTransform),this.textRenderer.renderQuads(this.trState,this.globalTransform,this.clippingRect,this.worldAlpha)}resolveTextRendererAndState(e,o){const s=this.stage.resolveTextRenderer(e,this._textRendererOverride),r=s.createState(e);return o&&["loading","loaded","failed"].forEach(a=>{o.emitter.off(a)}),r.emitter.on("loaded",this.onTextLoaded),r.emitter.on("failed",this.onTextFailed),s.scheduleUpdateState(r),{resolvedTextRenderer:s,textRendererState:r}}}class di extends ct{constructor(t,e,o){super(t,e,o,new fi(o,{id:vt(),x:t.x,y:t.y,width:t.width,height:t.height,alpha:t.alpha,clipping:t.clipping,color:t.color,colorTop:t.colorTop,colorBottom:t.colorBottom,colorLeft:t.colorLeft,colorRight:t.colorRight,colorTl:t.colorTl,colorTr:t.colorTr,colorBl:t.colorBl,colorBr:t.colorBr,zIndex:t.zIndex,zIndexLocked:t.zIndexLocked,scaleX:t.scaleX,scaleY:t.scaleY,mountX:t.mountX,mountY:t.mountY,mount:t.mount,pivot:t.pivot,pivotX:t.pivotX,pivotY:t.pivotY,rotation:t.rotation,text:t.text,fontSize:t.fontSize,fontFamily:t.fontFamily,fontWeight:t.fontWeight,fontStretch:t.fontStretch,fontStyle:t.fontStyle,contain:t.contain,scrollable:t.scrollable,letterSpacing:t.letterSpacing,textAlign:t.textAlign,scrollY:t.scrollY,offsetY:t.offsetY,textRendererOverride:t.textRendererOverride,debug:t.debug,parent:null,texture:null,textureOptions:null,shader:null,shaderProps:null}))}get text(){return this.coreNode.text}set text(t){this.coreNode.text=t}get textRendererOverride(){return this.coreNode.textRendererOverride}set textRendererOverride(t){this.coreNode.textRendererOverride=t}get fontSize(){return this.coreNode.fontSize}set fontSize(t){this.coreNode.fontSize=t}get fontFamily(){return this.coreNode.fontFamily}set fontFamily(t){this.coreNode.fontFamily=t}get fontWeight(){return this.coreNode.fontWeight}set fontWeight(t){this.coreNode.fontWeight=t}get fontStretch(){return this.coreNode.fontStretch}set fontStretch(t){this.coreNode.fontStretch=t}get fontStyle(){return this.coreNode.fontStyle}set fontStyle(t){this.coreNode.fontStyle=t}get textAlign(){return this.coreNode.textAlign}set textAlign(t){this.coreNode.textAlign=t}get contain(){return this.coreNode.contain}set contain(t){this.coreNode.contain=t}get scrollable(){return this.coreNode.scrollable}set scrollable(t){this.coreNode.scrollable=t}get scrollY(){return this.coreNode.scrollY}set scrollY(t){this.coreNode.scrollY=t}get offsetY(){return this.coreNode.offsetY}set offsetY(t){this.coreNode.offsetY=t}get letterSpacing(){return this.coreNode.letterSpacing}set letterSpacing(t){this.coreNode.letterSpacing=t}get debug(){return this.coreNode.debug}set debug(t){this.coreNode.debug=t}}const ui="modulepreload",pi=function(i){return"/"+i},zt={},oo=function(t,e,o){if(!e||e.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=pi(r),r in zt)return;zt[r]=!0;const n=r.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(!!o)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===r&&(!n||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":ui,n||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),n)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};function mi(i){return i.prototype instanceof Mo}async function xi(i,t){let e;try{console.log("Loading core extension",i),e=await oo(()=>import(i),[])}catch(s){console.error(`The core extension module at '${i}' could not be loaded.`),console.error(s);return}if(!e.default){console.error(`The core extension module at '${i}' does not have a default export.`);return}const o=e.default;if(mi(o)){const s=new o;try{await s.run(t)}catch(r){console.error(`The core extension at '${i}' threw an error.`),console.error(r)}}else console.error(`The core extension at '${i}' does not extend CoreExtension.`)}class gi{constructor(){l(this,"root",null);l(this,"stage",null);l(this,"rendererMain",null)}async init(t,e,o){this.stage=new hi({rootId:vt(),appWidth:e.appWidth,appHeight:e.appHeight,deviceLogicalPixelRatio:e.deviceLogicalPixelRatio,devicePhysicalPixelRatio:e.devicePhysicalPixelRatio,clearColor:e.clearColor,canvas:o,fpsUpdateInterval:e.fpsUpdateInterval,debug:{monitorTextureCache:!1}}),this.rendererMain=t,T(this.stage.root);const s=new ct(t.resolveNodeDefaults({}),this.rendererMain,this.stage,this.stage.root);this.root=s,s.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,s)),this.onCreateNode(s),e.coreExtensionModule&&await xi(e.coreExtensionModule,this.stage),this.stage.on("fpsUpdate",(r,n)=>{this.onFpsUpdate(n)})}createNode(t){T(this.rendererMain),T(this.stage);const e=new ct(t,this.rendererMain,this.stage);return e.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,e)),this.onCreateNode(e),e}createTextNode(t){T(this.rendererMain),T(this.stage);const e=new di(t,this.rendererMain,this.stage);return e.once("beforeDestroy",this.onBeforeDestroyNode.bind(this,e)),this.onCreateNode(e),e}destroyNode(t){t.destroy()}releaseTexture(t){const{stage:e}=this;T(e),e.txManager.removeTextureIdFromCache(t)}getRootNode(){return T(this.root),this.root}onCreateNode(t){throw new Error("Method not implemented.")}onBeforeDestroyNode(t){throw new Error("Method not implemented.")}onFpsUpdate(t){throw new Error("Method not implemented.")}}const Ye=()=>{},tt=()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),io=i=>{const t=gt.get("debugLevel"),e={};return Object.defineProperty(e,"info",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("info")>-1)&&console.info.bind(window.console,`%c ⚡️ ${i} %c ${tt()}`,"background-color: #0284c7; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ye}}),Object.defineProperty(e,"warn",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("warn")>-1)&&console.warn.bind(window.console,`%c ⚡️ ${i} %c ${tt()}`,"background-color: #fbbf24; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ye}}),Object.defineProperty(e,"error",{get(){return(t>=1||Array.isArray(t)&&t.indexOf("error")>-1)&&console.error.bind(window.console,`%c ⚡️ ${i} %c ${tt()}`,"background-color: #dc2626; color: white; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ye}}),Object.defineProperty(e,"debug",{get(){return(t>=2||Array.isArray(t)&&t.indexOf("debug")>-1)&&console.debug.bind(window.console,`%c ⚡️ ${i} %c (${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})})`,"background-color: #e2e8f0; color: #334155; padding: 3px 6px 3px 1px; border-radius: 3px","color: ##94a3b8;")||Ye}}),e};let P;const yi=()=>{P=io("Blits")};let ae;const wi=(i,t,e)=>{gt.set(e),yi();const o=new gi;ae=new Do({appWidth:e.w||1920,appHeight:e.h||1080,coreExtensionModule:e.fontLoader},t,o);const s=()=>{let r=i();r.quit=()=>{P.info("Closing App"),r.destroy(),r=null,ae=null}};ae.init().then(()=>s())},Mt={aliceblue:4042850303,antiquewhite:4209760255,aqua:4294967040,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,transparent:0,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},ot={normalize(i=""){if(i=i.toString(),i.startsWith("0x"))return i;const t=/rgba?\((.+)\)/gi,e=/hsla?\((.+)\)/gi;if(t.test(i)){const o=new RegExp(t).exec(i);if(o[1])return i=o[1].split(",").map((s,r)=>(r==3&&(s=Math.min(Math.max(Math.round(s*255),0),255)),parseInt(s).toString(16).padStart(2,"0"))).join(""),i.padEnd(8,"f").padStart(10,"0x")}else{if(e.test(i))return P.warn("HSL(A) color format is not supported yet"),4294967295;if(i in Mt)return Mt[i];i.startsWith("#")&&(i=i.substring(1))}return i.length===3&&(i=i.split("").map(o=>o+o).join("")),i.padEnd(8,"f").padStart(10,"0x")}},vi=i=>typeof i=="object"&&"transition"in i,it=i=>typeof i=="string"&&i.startsWith("{")&&i.endsWith("}"),st=i=>JSON.parse(i.replace(/'/g,'"').replace(/([\w-_]+)\s*:/g,'"$1":')),U={unpackTransition(i){return typeof i=="object"&&i.constructor.name==="Object"?"value"in i?i.value:"transition"in i?this.unpackTransition(i.transition):i:i},remap(i){"w"in i&&(i.width=i.w),delete i.w,"h"in i&&(i.height=i.h),delete i.h,"z"in i&&(i.zIndex=i.z),delete i.z,"wordWrap"in i&&(i.width=i.wordWrap),delete i.wordWrap},parent(i){i.parent==="root"?i.parent=ae.root:i.parent=i.parent.node},color(i){if(typeof i.color=="object"||it(i.color)&&(i.color=st(i.color))){const t={top:"colorTop",bottom:"colorBottom",left:"colorLeft",right:"colorRight"};Object.entries(i.color).forEach(e=>{i[t[e[0]]]=ot.normalize(e[1])}),delete i.color}else i.color=ot.normalize(i.color)},percentage(i,t){const o={w:"width",width:"width",x:"width",h:"height",height:"height",y:"height"}[t];o&&(i[t]=this.node._parent[o]*(parseFloat(i[t])/100))},mount(i){if(typeof i.mount=="object"||it(i.mount)&&(i.mount=st(i.mount))){const t={x:"mountX",y:"mountY"};Object.entries(i.mount).forEach(e=>{i[t[e[0]]]=e[1]}),delete i.mount}},pivot(i){if(typeof i.pivot=="object"||it(i.pivot)&&(i.pivot=st(i.pivot))){const t={x:"pivotX",y:"pivotY"};Object.entries(i.pivot).forEach(e=>{i[t[e[0]]]=e[1]}),delete i.pivot}},show(i){i.alpha=i.show?1:0,delete i.show},rotation(i){i.rotation=i.rotation*(Math.PI/180)},text(i){i.text=i.text!==void 0?i.text.toString():""},textureColor(i){"color"in i||(i.color="src"in i||"texture"in i?"0xffffffff":"0x00000000")},effects(i){i.shader=ae.createShader("DynamicShader",{effects:i.effects.map(t=>(t.props&&t.props.color&&(t.props.color=ot.normalize(t.props.color)),t))}),delete i.effects},src(i,t){t.indexOf("color")===-1&&(i.color=4294967295)},texture(i,t){this.src(i,t)},maxLines(i,t,e){i.maxLines&&(i.height=i.maxLines*e.node.fontSize),delete i.maxLines}},bi={defaults:{rotation:0},populate(i){const t={...this.defaults,...this.config,...i};this.initData=i,t[h.isSlot]&&(this[h.isSlot]=!0),U.remap(t),Object.keys(t).forEach(e=>{U[e]&&(t[e]=U.unpackTransition(t[e]),U[e](t,this.setProperties)),this.setProperties.push(e)}),U.textureColor(t,this.setProperties),this.node=t.__textnode?ae.createTextNode(t):ae.createNode(t),t["@loaded"]&&this.node.on("loaded",(e,{type:o,dimensions:s})=>{t["@loaded"]({w:s.width,h:s.height,type:o},this)}),t["@error"]&&this.node.on("failed",(e,o)=>{t["@error"](o,this)})},set(i,t){if(vi(t)&&this.setProperties.indexOf(i)>-1)this.animate(i,t.transition);else{const e={};i!=="texture"?e[i]=U.unpackTransition(t):e[i]=t,U.remap(e),U[i]&&U[i](e,this.setProperties,this),Object.keys(e).forEach(o=>{typeof e[o]=="string"&&e[o].endsWith("%")&&U.percentage.call(this,e,o),this.node[o]=e[o]})}this.setProperties.indexOf(i)===-1&&this.setProperties.push(i)},delete(){P.debug("Deleting  Node",this.nodeId,this.node),this.node.parent=null},get nodeId(){return this.node&&this.node.id},get ref(){return this.initData.ref||null},animate(i,t){this.scheduledTransitions[i]&&(clearTimeout(this.scheduledTransitions[i].timeout),this.scheduledTransitions[i].f.state==="running"&&(this.scheduledTransitions[i].f.pause(),this.node[i]=this.scheduledTransitions[i].v));const e={};if(e[i]=U.unpackTransition(t),U.remap(e),U[i]&&U[i](e),i=Object.keys(e).pop(),typeof e[i]=="string"&&e[i].endsWith("%")&&U.percentage.call(this,e,i),this.node[i]!==e[i]){const o=this.node.animate(e,{duration:typeof t=="object"&&"duration"in t?t.duration:300,easing:typeof t=="object"&&"function"in t?t.function:"ease"});return new Promise(s=>{this.scheduledTransitions[i]={v:e[i],f:o,timeout:setTimeout(()=>{t.start&&typeof t.start=="function"&&t.start.call(this.component,this,i,e[i]),o.start().waitUntilStopped().then(()=>delete this.scheduledTransitions[i]).then(()=>{t.end&&typeof t.end=="function"&&t.end.call(this.component,this,i,e[i])}).then(s)},t.delay||0)}})}}},so=(i,t)=>Object.assign(Object.create(bi),{node:null,setProperties:[],scheduledTransitions:{},initData:{},config:i,component:t}),Lt={};let $i=0;const Ei=i=>`BlitsComponent::${i}_${Lt[i]=(Lt[i]||0)+1}`,_i=()=>++$i,le={},Ti=(i,t,e)=>{le[t]&&le[t][i]&&le[t][i].apply(e)},Si=(i,t,e)=>{const o=h[i];le[t]&&le[t][o]&&le[t][o].apply(e)},Ci=(i={},t)=>{le[t]={},[...Object.keys(i),...Object.getOwnPropertySymbols(i)].forEach(o=>{typeof i[o]=="function"&&(le[t][o]=i[o])})};let ze=null;const pt=new WeakMap,ro=(i,t)=>{if(ze){let e=pt.get(i);e||(e=new Map,pt.set(i,e));let o=e.get(t);o||(o=new Set,e.set(t,o)),o.add(ze)}},Ve=(i,t,e=!1)=>{const o=pt.get(i);if(!o)return;const s=o.get(t);s&&s.forEach(r=>{r(e)})},Ft=i=>{ze=i,ze(),ze=null},ki=["constructor","includes","indexOf","lastIndexOf","push","pop","shift","splice","unshift"],Nt=new WeakMap,mt=i=>{const t=Nt.get(i);if(t)return t;const e={get(s,r,n){return Array.isArray(s)&&ki.includes(r)?Reflect.get(s,r,n):(ro(s,r),s[r]!==null&&typeof s[r]=="object"?mt(s[r]):Reflect.get(s,r,n))},set(s,r,n,a){const p=s[r],c=Reflect.set(s,r,n,a);return typeof c=="object"&&mt(s[r]),(r==="length"||c&&p!==n)&&Ve(s,r),c}},o=new Proxy(i,e);return Nt.set(i,o),o},no=i=>(Object.keys(i).forEach(t=>{let e=i[t];if(i[t]!==null&&typeof i[t]=="object"&&Object.getPrototypeOf(i[t])===Object.prototype)return no(i[t]);Object.defineProperty(i,t,{enumerable:!0,configurable:!0,get(){return ro(i,t),e},set(o){e!==o&&(e=o,Ve(i,t))}})}),i),Pt=(i,t="proxy")=>t==="proxy"?mt(i):no(i),Ri={before:{prop:"alpha",value:0},in:{prop:"alpha",value:1,duration:200},out:{prop:"alpha",value:0,duration:100}};let bt,Qe=!1;const ao=new WeakMap,Ii=()=>(document.location.hash||"/").replace(/^#/,""),zi=(i,t=[])=>{const e=t.filter(o=>o.path===i).pop();return e&&(bt=e),e},Mi=async function(){if(Qe=!0,this.parent[h.routes]){const i=bt,t=Ii(),e=zi(t,this.parent[h.routes]);if(e){"transition"in e||(e.transition=Ri),typeof e.transition=="function"&&(e.transition=e.transition(i,e));let o,{view:s,focus:r}=ao.get(e)||{};if(s?o=s.wrapper:(o=so({parent:this[h.children][0]}),o.populate({}),o.set("w","100%"),o.set("h","100%"),s=await e.component(this[h.props],o,this),s[Symbol.toStringTag]==="Module"&&(s.default&&typeof s.default=="function"?s=s.default(this[h.props],o,this):P.error("Dynamic import doesn't have a default export or default is not a function")),typeof s=="function"&&(s=s(this[h.props],o,this))),this[h.children].push(s),e.transition.before)if(Array.isArray(e.transition.before))for(let a=0;a<e.transition.before.length;a++)o.set(e.transition.before[a].prop,e.transition.before[a].value);else o.set(e.transition.before.prop,e.transition.before.value);let n=!1;if(i){n=!0;const a=this[h.children].splice(1,1).pop();a&&Li(i,a,e.transition.out)}if(e.transition.in)if(Array.isArray(e.transition.in))for(let a=0;a<e.transition.in.length;a++)a===e.transition.length-1?await Ee(o,e.transition.in[a],n):Ee(o,e.transition.in[a],n);else await Ee(o,e.transition.in,n);r?fe.set(r):s.focus(),this.activeView=this[h.children][this[h.children].length-1]}else P.error(`Route ${t} not found`)}Qe=!1},Li=async(i,t,e)=>{if(e)if(Array.isArray(e))for(let o=0;o<e.length;o++)o===e.length-1?await Ee(t.wrapper,e[o]):Ee(t.wrapper,e[o]);else await Ee(t.wrapper,e);if(i.options&&i.options.keepAlive===!0)ao.set(i,{view:t,focus:fe.get()});else{for(let o=0;o<t[h.children].length-1;o++)t[h.children][o]&&t[h.children][o].destroy&&(t[h.children][o].destroy(),t[h.children][o]=null);t.destroy(),t=null}},Ee=(i,t,e=!0)=>e?i.animate(t.prop,t):i.set(t.prop,t.value),lo=i=>{window.location.hash=`#${i}`},At={navigate:Mi,to:lo};let he=null,Oe=[],Bt;const fe={_hold:!1,set hold(i){this._hold=i},get hold(){return this._hold},get(){return he},set(i,t){clearTimeout(Bt),he&&he.unfocus(),Oe.reverse().forEach(e=>e.unfocus()),i!==he&&(Bt=setTimeout(()=>{he=i,he.lifecycle.state="focus",t instanceof KeyboardEvent?document.dispatchEvent(new KeyboardEvent("keydown",t)):Oe=[]},this.hold?50:0))},input(i,t){if(Qe===!0)return;Oe=co([he],i);const e=Oe.shift();e&&(e[h.inputEvents][i]?e[h.inputEvents][i].call(e,t):e[h.inputEvents].any&&e[h.inputEvents].any.call(e,t))}},co=(i,t)=>i[0][h.inputEvents]&&(typeof i[0][h.inputEvents][t]=="function"||typeof i[0][h.inputEvents].any=="function")?i:i[0].parent?(i.unshift(i[0].parent),co(i,t)):[],Fi=()=>ue("Image",{template:`
      <Element :imageSource="$imageSource" />`,props:["src"],computed:{imageSource(){return/^(?:https?:)?\/\//i.test(this.src)?this.src:`${window.location.protocol}//${window.location.host}/${this.src}`}}}),Ni=()=>ue("Circle",{template:`
      <Element :color="$color" :w="$size" :h="$size" :effects="[$shader('radius', {radius: $radius})]"></Element>
    `,props:[{key:"size",default:40},"color"],computed:{radius(){return this.size/2}}});let rt;const Pi=()=>ue("RouterView",{template:`
      <Element w="100%" height="100%"></Element>
    `,state(){return{activeView:null}},hooks:{ready(){rt=()=>At.navigate.apply(this),At.navigate.apply(this),window.addEventListener("hashchange",rt)},destroy(){window.removeEventListener("hashchange",rt,!1)},focus(){this.activeView&&this.activeView.focus()}}}),Ai=()=>ue("Sprite",{template:`
      <Element w="$w" h="$h" :texture="$texture" />
    `,props:["image","map","frame","w","h"],state(){return{spriteTexture:!1}},computed:{texture(){const i="frames"in this.map?{...this.map.defaults||{},...this.map.frames[this.frame]}:this.map[this.frame];if(this.spriteTexture&&i)return this[h.renderer].createTexture("SubTexture",{texture:this.spriteTexture,x:i.x,y:i.y,width:i.w,height:i.h})}},hooks:{ready(){this.spriteTexture=this[h.renderer].createTexture("ImageTexture",{src:`${window.location.protocol}//${window.location.host}/${this.image}`})}}}),Bi=()=>ue("Text",{template:`
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
      />`,props:["content",{key:"font",default:"lato"},{key:"size",cast:Number,default:32},"style","color","weight","letterspacing","stretch","align","wordwrap","maxlines","contain","@loaded","@error"],computed:{_contain(){return this.contain||(this.wordwrap&&this.maxlines?"both":this.wordwrap?"width":"none")}}}),We=new Map,nt={registerListener(i,t,e){let o=We.get(t);o||(o=new Map,We.set(t,o));let s=o.get(i);s||(s=new Set,o.set(i,s)),s.add(e)},executeListeners(i,t){const e=We.get(i);e&&e.forEach(o=>{o.forEach(s=>{s(t)})})},removeListeners(i){We.forEach(t=>{const e=t.get(i);e&&(e.clear(),t.delete(e))})}},Dt={radius:"radius",rounded:"radius",border:"border",borderTop:"borderTop",borderBottom:"borderBottom",borderLeft:"borderLeft",borderRight:"borderRight",grayScale:"grayscale",glitch:"glitch"},Di=i=>{Object.defineProperties(i.prototype,{focus:{value:function(t){fe.set(this,t)},writable:!1,enumerable:!0,configurable:!1},unfocus:{value:function(){this.lifecycle.state="unfocus"},writable:!1,enumerable:!0,configurable:!1},destroy:{value:function(){this.lifecycle.state="destroy";for(let t=0;t<this[h.timeouts].length;t++)clearTimeout(this[h.timeouts][t]);for(let t=0;t<this[h.intervals].length;t++)clearInterval(this[h.intervals][t]);nt.removeListeners(this),ho(this[h.children]),P.debug(`Destroyed component ${this.componentId}`)},writable:!1,enumerable:!0,configurable:!1},select:{value:function(t){let e=null;return this[h.children].forEach(o=>{Array.isArray(o)?o.forEach(s=>{s.ref===t&&(e=s)}):Object.getPrototypeOf(o)===Object.prototype?Object.keys(o).forEach(s=>{o[s].ref===t&&(e=o[s])}):o.ref===t&&(e=o)}),e},writable:!1,enumerable:!0,configurable:!1},shader:{value:function(t,e){if(t in Dt)return{type:Dt[t],props:e};P.error(`Shader ${t} not found`)},writable:!1,enumerable:!1,configurable:!1},$router:{value:{to:lo,get currentRoute(){return bt},get routes(){return i.prototype[h.routes]},get navigating(){return Qe}},writable:!1,enumerable:!0,configurable:!1},[h.components]:{value:{Image:Fi(),Circle:Ni(),RouterView:Pi(),Sprite:Ai(),Text:Bi()},writable:!1,enumerable:!1,configurable:!1},[h.timeouts]:{value:[],writable:!1,enumerable:!1,configurable:!1},$setTimeout:{value:function(t,e,...o){const s=setTimeout(()=>{this[h._timeouts]=this[h.timeouts].filter(r=>r!==s),t.apply(null,o)},e,o);return this[h.timeouts].push(s),s},writable:!1,enumerable:!0,configurable:!1},[h.intervals]:{value:[],writable:!1,enumerable:!1,configurable:!1},$setInterval:{value:function(t,e,...o){const s=setInterval(()=>{this[h._intervals]=this[h.intervals].filter(r=>r!==s),t.apply(null,o)},e,o);return this[h.intervals].push(s),s},writable:!1,enumerable:!0,configurable:!1},$emit:{value:function(t,e){nt.executeListeners(t,e)},writable:!1,enumerable:!0,configurable:!1},$listen:{value:function(t,e){nt.registerListener(this,t,e)},writable:!1,enumerable:!0,configurable:!1},[h.renderer]:{value:ae,writable:!1,enumerable:!1,configurable:!1},$log:{value:io("App"),writable:!1,enumerable:!1,configurable:!1},$trigger:{value:function(t){Ve(this[h.originalState],t,!0)},writable:!1,enumerable:!1,configurable:!1}})},ho=function(i){for(let t=0;t<i.length;t++){if(!i[t])return;Array.isArray(i[t])?ho(i[t]):i[t].delete?i[t].delete():i[t].destroy&&(i[t].destroy(),i[t]=null),i[t]=null}i=[]},Yi={cast:i=>i,required:!1},Oi=(i,t=[])=>{t.indexOf("ref")===-1&&t.push("ref"),i[h.propKeys]=[],t.forEach(e=>{e={...Yi,...typeof e=="object"?e:{key:e}},i[h.propKeys].push(e.key),Object.defineProperty(i.prototype,e.key,{get(){const o=e.cast(this[h.props]&&e.key in this[h.props]?this[h.props][e.key]:e.default||void 0);return e.required&&o===void 0&&P.warn(`${e.key} is required`),o},set(o){P.warn(`Warning! Avoid mutating props directly (${e.key})`),this[h.props][e.key]=o}})})},Wi=(i,t)=>{i[h.methodKeys]=[];for(let e in t)i[h.propKeys]&&i[h.propKeys].indexOf(e)>-1?P.error(`${e} already exists as a prop`):(typeof t[e]!="function"&&P.warn(`${e} is not a function`),i[h.methodKeys].push(e),i.prototype[e]=t[e])},Xi=(i,t)=>{i[h.stateKeys]=[],t=t.apply(i.prototype),Object.keys(t).forEach(e=>{i[h.propKeys]&&i[h.propKeys].indexOf(e)>-1&&P.error(`State ${e} already exists as a prop`),i[h.methodKeys]&&i[h.methodKeys].indexOf(e)>-1&&P.error(`State ${e} already exists as a method`),i[h.stateKeys].push(e);try{Object.defineProperty(i.prototype,e,{get(){return this[h.state]&&e in this[h.state]&&this[h.state][e]},set(o){this[h.state]&&(this[h.state][e]=o)}})}catch(o){P.error(o)}})},Hi=(i,t)=>{i[h.computedKeys]=[];for(let e in t)i[h.stateKeys]&&i[h.stateKeys].indexOf(e)>-1?P.error(`${e} already exists as a prop`):i[h.propKeys]&&i[h.propKeys].indexOf(e)>-1?P.error(`${e} already exists as a prop`):i[h.methodKeys]&&i[h.methodKeys].indexOf(e)>-1?P.error(`${e} already exists as a method`):(typeof t[e]!="function"&&P.warn(`${e} is not a function`),i[h.computedKeys].push(e),Object.defineProperty(i.prototype,e,{get(){return t[e].apply(this)}}))},Ui=(i,t)=>{i.prototype[h.inputEvents]=[],Object.keys(t).forEach(e=>{typeof t[e]!="function"&&P.warn(`${t[e]} is not a function`),i.prototype[h.inputEvents][e]=t[e]})},ji=(i,t)=>{i.prototype[h.routes]=[],Object.keys(t).forEach(e=>{i.prototype[h.routes][e]=t[e]})},Ki=(i,t)=>{i.prototype[h.watchKeys]=[],i.prototype[h.watchers]={};for(let e in t)typeof t[e]!="function"&&console.warn(`${e} is not a function`),i.prototype[h.watchKeys].push(e),i.prototype[h.watchers][e]=function(o,s){t[e].call(this,o,s)}},Yt={element:so},Ot=i=>{throw new Error(`Parameter ${i} is required`)},ue=(i=Ot("name"),t=Ot("config"))=>{let e=null;const o=a=>{e||(P.debug(`Generating code for ${i} component`),e=Fo.call(t,Lo(t.template))),Di(r),Ci(t.hooks,i),a.state="beforeSetup",Oi(r,t.props),t.methods&&Wi(r,t.methods),t.state&&Xi(r,t.state),t.computed&&Hi(r,t.computed),t.watch&&Ki(r,t.watch),t.routes&&ji(r,t.routes),t.input&&Ui(r,t.input),r.setup=!0,a.state="setup"},s=a=>{const p=["init","beforeSetup","setup","ready","focus","unfocus","destroy"];return{previous:null,current:null,get state(){return this.current},set state(c){p.indexOf(c)>-1&&c!==this.current&&(P.debug(`Setting lifecycle state from ${this.previous} to ${c} for ${a.componentId}`),this.previous=this.current,Si(c,i,a),Ti(c,i,a),this.current=c)}}},r=function(a,p,c){this.lifecycle=s(this),r.setup||o(this.lifecycle),this.parent=c,this.wrapper=p,Object.defineProperties(this,{type:{value:i,writable:!1,enumerable:!0,configurable:!1},componentId:{value:Ei(i),writable:!1,enumerable:!0,configurable:!1},[h.id]:{value:_i(),writable:!1,enumerable:!1,configurable:!1},[h.props]:{value:Pt(a.props||{}),writable:!1,enumerable:!1,configurable:!1}}),Object.defineProperty(this,h.originalState,{value:t.state&&typeof t.state=="function"&&t.state.apply(this)||{},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,h.state,{value:Pt(this[h.originalState]),writable:!1,enumerable:!1,configurable:!1}),this.lifecycle.state="init",Object.defineProperty(this,h.children,{value:e.render.apply(Yt,[p,this,e.context]),writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,h.slots,{value:this[h.children].filter(d=>d[h.isSlot]),writable:!1,enumerable:!1,configurable:!1}),e.effects.forEach(d=>{Ft(()=>{d.apply(Yt,[this,this[h.children],e.context])})}),this[h.watchers]&&Object.keys(this[h.watchers]).forEach(d=>{let f=this[d];Ft((b=!1)=>{(f!==this[d]||b===!0)&&(this[h.watchers][d].apply(this,[this[d],f]),f=this[d])})}),setTimeout(()=>this.lifecycle.state="ready")},n=(a={},p,c)=>new r(a,p,c);return n.config=t,n},Gi=i=>{const t={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",Enter:"enter"," ":"space",Backspace:"back",Escape:"escape",37:"left",39:"right",38:"up",40:"down",13:"enter",32:"space",8:"back",27:"escape"};i.hooks=i.hooks||{};let e,o,s;return i.hooks[h.destroy]=function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",o)},i.hooks[h.init]=function(){const n={...t,...gt.get("keymap",{})};e=a=>{const p=n[a.key]||n[a.keyCode]||a.key||a.keyCode;fe.input(p,a),clearTimeout(s),s=setTimeout(()=>{fe.hold=!0},50)},o=()=>{clearTimeout(s),fe.hold=!1},document.addEventListener("keydown",e),document.addEventListener("keyup",o),setTimeout(()=>fe.set(this))},ue("App",i)},C={Component:ue,Application:Gi,Launch:wi},qi=new URL("fontLoader-f5fc66f3.js",import.meta.url).href,Vi=C.Component("PortalItem",{template:`
    <Element w="370" h="320" :scale.transition="$scale" :color="$backgroundColor" :effects="[$shader('radius', {radius: 6})]">
      <Text x="30" y="30" :content="$number" size="84" :color="$fontColor" />
      <Text x="30" y="140" :content="$title" size="42" font="raleway" :color="$fontColor" letterspacing="2" />
      <Text x="30" y="200" :content="$description" wordwrap="300" size="28" :color="$fontColor" lineheight="32" />
    </Element>
  `,props:["title","description","index","id"],state(){return{backgroundColor:"#44037a",scale:1,fontColor:"#e8d7f9",number:this.index<9?`0${this.index+1}`:this.index+1}},hooks:{focus(){this.backgroundColor="#fafafa",this.fontColor="#000",this.scale=1.1},unfocus(){this.$router.navigating||(this.backgroundColor="#44037a",this.fontColor="#e8d7f9",this.scale=1)}},input:{enter(){this.$router.to(`/${this.id}`)},back(){}}}),Qi=C.Component("PortalRow",{components:{PortalItem:Vi},template:`
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
  `,props:["title","items"],state(){return{focused:0,rowOffset:60,itemOffset:240}},hooks:{ready(){this.itemOffset=0},focus(){this.$trigger("focused")}},watch:{focused(i){const t=this.select(`item${i}`);t&&t.focus&&(t.focus(),i<1?this.rowOffset=60:i>this.items.length-2?this.rowOffset=60-(this.items.length-2)*430+430:this.rowOffset=60-i*430+430)}},input:{left(){this.focused>0?this.focused--:this.focused=this.items.length-1},right(){this.focused<this.items.length-1?this.focused++:this.focused=0}}}),Zi="@lightningjs/blits-example-app",Ji="0.4.6",es="Lightning 3 Blits Example App",ts="index.js",os="module",is={start:"npm run dev",lint:"eslint '**/*.js'","lint:fix":"eslint '**/*.js' --fix",build:"vite build",dev:"vite dev --host"},ss={hooks:{"pre-commit":"lint-staged"}},rs="Michiel van der Geest <hello@michielvandergeest.com>",ns="Apache-2",as={eslint:"^8.8.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0",husky:"^7.0.4","lint-staged":"^12.3.3",prettier:"^2.5.1",vite:"^4.0.4"},ls={"@lightningjs/blits":"^0.5.6"},cs={name:Zi,version:Ji,description:es,main:ts,type:os,scripts:is,"lint-staged":{"*.js":["eslint --fix"]},husky:ss,author:rs,license:ns,devDependencies:as,dependencies:ls},hs=C.Component("Portal",{components:{PortalRow:Qi},template:`
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
    </Element>`,state(){return{version:cs.version,offset:60,rowFocused:0,rows:["demo","example","benchmark"],logoOffset:50,demo:[{title:"Loader",id:"demos/loading",description:"A basic loading screen"},{title:"Intro",id:"demos/intro",description:"A splash screen with custom animations"},{title:"Theming",id:"demos/theming",description:"Dynamically changing the styling of a component with themes"},{title:"TMDB",id:"demos/tmdb",description:"The Movie Database (TMDB) example using data from a remote API"},{title:"Sprites",id:"demos/sprites",description:"Display multiple images while keeping low memory footprint"},{title:"Focus",id:"demos/focushandling",description:"Managing focus between components in a simple layout"}],example:[{title:"Positioning",id:"examples/positioning",description:"Positioning Elements and Components"},{title:"Colors",id:"examples/colors",description:"Using different formats and notations for defining colors"},{title:"Gradients",id:"examples/gradients",description:"Example of Basic gradients"},{title:"Transitions",id:"examples/transitions",description:"Comparing different transition easing functions"},{title:"Components",id:"examples/components",description:"Reusable Components"},{title:"Alpha",id:"examples/alpha",description:"Applying transparency to Elements, Images and Components"},{title:"Scaling",id:"examples/scaling",description:"Resizing and scaling Elements and Components"},{title:"Rotation",id:"examples/rotation",description:"Rotating Elements"},{title:"Key input",id:"examples/keyinput",description:"Handling user input events"},{title:"For Loop",id:"examples/forloop",description:"Iterating over Elements and Components using for loops"},{title:"Effects",id:"examples/effects",description:"Applying one or multiple effects (aka shaders)"},{title:"Show",id:"examples/showif",description:"Conditionally show or hide Elements and Components"},{title:"Events",id:"examples/events",description:"Communication between components by emitting and listening for events"},{title:"Images",id:"examples/images",description:"1 image says more than 1000 words ;)"},{title:"Texts",id:"examples/texts",description:"Displaying and formatting text"},{title:"Slots",id:"examples/slots",description:"Insert dynamic content from a parent into a child using slots"}],benchmark:[{title:"Exponential",id:"benchmarks/exponential",description:"Spawn a large number of components at an exponential rate"}]}},hooks:{ready(){this.logoOffset=0,this.$trigger("rowFocused")}},watch:{rowFocused(i){const t=this.select(`row${i}`);t&&t.focus&&t.focus()}},input:{up(){this.rowFocused=(this.rowFocused-1+this.rows.length)%this.rows.length},down(){this.rowFocused=(this.rowFocused+1)%this.rows.length}}}),fs=C.Component("Letter",{template:`
    <Element>
      <Element w="$w" :h.transition="{value: 410+$offset, duration: $duration, delay: $wait, function: $timingFunction}" color="#E6E6E6" />
      <Element w="$w" h="280" :src="$image" :y.transition="{value: 400+$offset, duration: $duration, delay: $wait, function: $timingFunction}" />
      <Element w="$w" color="#E6E6E6"
        :h.transition="{value: 500-$offset, duration: $duration, delay: $wait, function: $timingFunction}"
        :y.transition="{value: 660+$offset, duration: $duration, delay: $wait, function: $timingFunction}"
      />
    </Element>`,props:["w","letter","direction","delay"],computed:{image(){return`${window.location.protocol}//${window.location.host}/assets/${this.letter}.png`}},state(){return{offset:this.direction==="up"?-680:680,duration:1e3,wait:0,timingFunction:"cubic-bezier(1,-0.64,.39,1.44)"}},hooks:{ready(){this.animate()}},methods:{animate(){this.$setTimeout(()=>{this.offset=0},1e3),this.$setTimeout(()=>{this.wait=this.delay+150,this.duration=1e3,this.offset=1080},2800),this.$setTimeout(()=>{this.wait=this.delay/3,this.timingFunction="ease-in-out",this.duration=1500,this.offset=0},5e3)}}}),ds=C.Component("Intro",{components:{Letter:fs},template:`
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
    </Element>`,state(){return{background:`${window.location.protocol}//${window.location.host}/assets/background.png`}}}),us=C.Component("Toggle",{template:`
    <Element w="100" h="50" y="5" :color="$bgColor" :effects="[$shader('radius', {radius:25})]">
      <Circle :x.transition="$on ? 0 : 50" size="50" :color="$primaryColor" />
    </Element>
  `,props:["bgColor","primaryColor","on"]}),ps=C.Component("Bar",{template:`
    <Element :w="{value: $w, duration: $duration}" :h="{value: $h, duration: $duration}" :color="$bgColor" :x="$index * ($w + ($w / 4))" :effects="[$shader('radius', {radius:10})]">
      <Element :w="$w" :y.transition="{value: $h-$innerH, duration: $duration}" :h.transition="{value: $innerH, duration: $duration}" :color="$primaryColor" :effects="[$shader('radius', {radius:10})]" />
    </Element>
  `,props:["bgColor","primaryColor","height","index","size"],state(){return{h:200,innerH:0,duration:400}},hooks:{ready(){this.innerH=this.height}},computed:{w(){return this.size==="large"?110:72}},watch:{bgColor(){this.duration=1e-6,this.innerH=0,this.$setTimeout(()=>{this.duration=400,this.innerH=this.height},200)},size(){this.duration=1e-6,this.innerH=0,this.$setTimeout(()=>{this.duration=400,this.innerH=this.height},100)}}}),ms={color1:"#475569",color2:"#64748b",color3:"#cbd5e1",color4:"#38bdf8",bg:"#1e293b80"},xs={color1:"#f8fafc",color2:"#e2e8f0",color3:"#1e293b",color4:"#0369a1",bg:"#f1f5f9"},gs=C.Component("Theming",{components:{Bar:ps,Toggle:us},template:`
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
  `,state(){return{mode:"dark",radius:20,width:500,height:600}},computed:{colors(){return this.mode==="dark"?ms:xs},text(){return this.mode==="dark"?"Dark mode":"Light mode"},block1(){return{height:this.height===600?180:720}},block2(){return{y:this.height===600?140:560,h:this.height===600?180:300,w:this.height===600?200:890}},graph(){return{x:this.height===600?32:270,y:this.height===600?370:140,w:this.height===600?0:890,h:this.height===600?0:400,offset:this.height===600?0:110,size:this.height===600?"small":"large"}}},input:{right(){this.toggleX=0,this.$setTimeout(()=>{this.mode="light"},150)},left(){this.toggleX=48,this.$setTimeout(()=>{this.mode="dark"},150)},up(){this.width=1200,this.height=900},down(){this.width=500,this.height=600}}}),ys="ABC123",ws="https://8b4fa39d.lightningjs.workers.dev";let fo,uo;const vs="w185",bs={headers:{"Content-Type":"application/json",Authorization:"Bearer "+ys}};function Wt(i,t=vs){return uo+t+i}function $s(...i){return fo?xt(...i):po().then(()=>xt(...i))}function xt(i,t={}){return fetch(ws+i,{...bs,...t}).then(e=>e.json())}function po(){return xt("/configuration").then(i=>(fo=i,uo=i.images.secure_base_url,i))}const Es={get:$s,loadConfig:po};function _s(i){return Es.get(`/${i}/popular`).then(t=>t.results.filter(o=>!o.adult).map(o=>({poster:Wt(o.poster_path||o.profile_path),background:Wt(o.backdrop_path,"w1280"),identifier:o.id})))}const Ts=C.Component("Poster",{template:`
    <Element w="185" h="278" x="$x"
      :src="$src"
      :color="{top: '#fff', bottom: $colorBottom}"
      :scale.transition="{value: $scale, duration: 200, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      :effects="[$shader('radius', {radius: 8})]"
    />`,props:["src","index"],state(){return{scale:1,colorBottom:"#000"}},computed:{x(){return this.index*215}},hooks:{focus(){this.colorBottom="#fff",this.scale=1.1,this.$emit("posterSelect",this.index)},unfocus(){this.colorBottom="#000",this.scale=1}}}),Ss=C.Component("Background",{template:`
    <Element>
      <Element
        :src="$bg1" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha1, duration: 400, function: 'ease-in'}"
      />
      <Element
        :src="$bg2" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha2, duration: 400, function: 'ease-in'}"
      />
    </Element>`,props:["src"],state(){return{counter:0,alpha1:0,alpha2:0,bg1:!1,bg2:!1}},watch:{src(i){this.counter=(this.counter+1)%2,this.counter===0?(this.bg1=i,this.alpha1=.8,this.alpha2=0):(this.bg2=i,this.alpha1=0,this.alpha2=.8)}}}),Cs=C.Component("TMdb",{components:{Poster:Ts,Background:Ss},template:`
    <Element w="1920" h="1080" color="black">
      <Background :src="$src" />
      <Element :alpha.transition="{value: $alphaIn, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
        <Element src="assets/logo.png" x="130" :y.transition="{value: $logoY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}" w="243" h="52" />
        <Element :x.transition="{value: $x, duration: 300, function: 'ease-in-out'}"  :y.transition="{value: $listY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
          <Poster :for="(item, index) in $items" index="$index" src="$item.poster" ref="$item.identifier"/>
        </Element>
      </Element>
    </Element>`,state(){return{items:[],src:"",focused:null,alphaIn:.001,logoY:30,listY:750}},computed:{x(){return this.focused<=1?150:150-Math.min(this.focused-1,this.items.length-8)*215}},watch:{focused(i){const t=this.select(this.items[i]&&this.items[i].identifier);t&&t.focus&&t.focus()}},hooks:{ready(){this.alphaIn=1,this.listY=700,this.logoY=80,_s("movie").then(i=>{this.items=i,this.focused=0,this.background=i[this.focused].background}),this.$listen("posterSelect",i=>{this.src=this.items[i].background})},focus(){this.$trigger("focused")}},input:{left(){console.log("left in tmdb"),this.focused=Math.max(this.focused-1,0)},right(){this.focused=Math.min(this.focused+1,this.items.length-1)}}}),ks=C.Component("MenuSprite",{template:`
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
    `,state(){return{icon1:"icon1_unfocus",map:{defaults:{w:160,h:160},frames:{icon1_focus:{x:0,y:0},icon1_unfocus:{x:170,y:340},icon2:{x:170,y:0},icon3:{x:350,y:0},icon4_unfocus:{x:680,y:170}}}}},hooks:{ready(){this.$setInterval(()=>{this.icon1=this.icon1==="icon1_unfocus"?"icon1_focus":"icon1_unfocus"},2e3)}}}),Xe=["menu"],Rs=C.Component("Sprites",{components:{MenuSprite:ks},template:`
    <Element>
      <MenuSprite :show="$currentSprite === 'menu'"/>
    </Element>
    `,state(){return{currentSprite:"menu"}},input:{down(){const i=Xe.indexOf(this.currentSprite);i<Xe.length-1?this.currentSprite=Xe[i+1]:this.currentSprite=Xe[0]}}}),mo=C.Component("Button",{template:`
    <Element w="300" h="80" color="$color"
      :effects="[$shader('rounded', {radius: 20})]"
      :alpha.transition="$alpha"
      :scale.transition="$scale"
      :z="$zIndex"
      :rotation="$rotate">
    </Element>`,props:["color"],state(){return{alpha:.4,scale:1,zIndex:1,rotate:0}},hooks:{focus(){this.$log.info(`Button with color ${this.color} received focus`),this.alpha=1,this.scale=this.scale===1?1.2:1,this.zIndex=100},unfocus(){this.$log.info(`Button with color ${this.color} lost focus`),this.alpha=.4,this.scale=1,this.zIndex=1,this.rotate=0}},input:{enter(){this.rotate=this.rotate===0?-4:0,this.scale=this.scale===1.2?1.3:1.2}}}),Is=C.Component("Menu",{components:{Button:mo},template:`
    <Element :x.transition="$x" w="400" h="1080" color="{right: '#64748baa', left: '#475569aa'}">
      <Element x="50" y="40">
        <Button color="#e4e4e7" ref="menu1" />
        <Button color="#e4e4e7" y="100" ref="menu2" />
        <Button color="#e4e4e7" y="200" ref="menu3" />
        <Button color="#e4e4e7" y="300" ref="menu4" />
      </Element>
    </Element>`,state(){return{x:-360,focused:null}},hooks:{focus(){this.focused=1,this.$trigger("focused"),this.x=0},unfocus(){this.x=-360}},watch:{focused(){const i=this.select(`menu${this.focused}`);i&&i.focus&&i.focus()}},input:{right(){this.parent.focus()},down(){this.focused=Math.min(this.focused+1,4)},up(){this.focused=Math.max(this.focused-1,1)}}}),zs=C.Component("FocusHandling",{components:{Menu:Is,Button:mo},template:`
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
    </Element>`,state(){return{focused:null}},hooks:{focus(){this.focused=1,this.$trigger("focused")}},watch:{focused(i){const t=this.select(`button${i}`);t&&t.focus&&t.focus()}},input:{right(){this.focused=Math.min(this.focused+1,9)},left(){const i=this.focused-1;if(i===0){const t=this.select("menu");t&&t.focus&&t.focus()}else this.focused=Math.max(i,1)},a(){const i=this.select("menu");i&&i.focus&&i.focus()}}}),Ms=C.Component("Positioning",{template:`
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

    </Element>`,state(){return{x1:20,x2:140,x3:20+140+100,x4:380,y:140,xA:20,xB:140,xC:260,xD:380,yNested:0,xNested:0,bar2:{direction:"up",v:"10%"},bar3:"10%"}},hooks:{ready(){this.$setTimeout(()=>{this.xD=this.xD+200,this.xC=this.xC+100,this.xB=this.xB+50,this.xA=this.xA+25},4e3),this.$setInterval(()=>{this.yNested=this.yNested===0?50:0},2e3),this.$setInterval(()=>{this.xNested=this.xNested===0?150:0},1e3),this.$setInterval(()=>{const i=parseFloat(this.bar2.v),t=this.bar2.direction==="up"?i+10:i-10;this.bar2.v=t+"%",t>=90&&(this.bar2.direction="down"),t<=10&&(this.bar2.direction="up")},400),this.$setInterval(()=>{this.bar3=Math.ceil(Math.random()*96)+"%"},2e3)}}}),Ls=C.Component("Colors",{template:`
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
    </Element>`,state(){return{bg:"#fff",color1:"#22d3ee",color2:"#dc2626",color3:"rgba(251, 191, 36)",color4:"#bfdbfe"}},input:{enter(){this.color1=this.color1==="#0891b2"?"#22d3ee":"#0891b2",this.color2=this.color2==="#dc2626"?"#0f0":"#dc2626",this.color3=this.color3==="rgba(251, 191, 36)"?"rgba(30, 64, 175, 0.5)":"rgba(251, 191, 36)",this.color4=this.color4==="#1e3a8a"?"#bfdbfe":"#1e3a8a"}},hooks:{ready(){let i=0;const t=["#fff","#333","#c0ff33","#546aaa","#000","tomato"];this.$setInterval(()=>{i=i+1,i===t.length-1&&(i=0),this.bg=t[i]},2e3)}}}),Fs=C.Component("Gradients",{template:`
    <Element>
      <Element :w="1920/4" h="1080" color="{top: '#0891b2', bottom: '#a5f3fc'}" />
      <Element :w="1920/4" h="1080" :x="1920/4" color="{left: '#dc2626',  right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 2" color="{top: '#0891b2', right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 3" color="{right: 'green', bottom: 'gold'}" />
    </Element>`}),Ns=C.Component("Transitions",{template:`
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
      <Element w="200" h="200" x="1050" :y.transition="{value: $y, function: 'ease-in-out'}" color="#6d28d9" />
      <!-- transition with custom duration and a built-in easing function -->
      <Element
        w="200" h="200" x="1300"
        :y.transition="{value: $y, duration: 2000, function: 'ease-in-out-back', end: $finished}" color="#5b21b6" />
      <!-- transition with custom duration and a custum bezier function -->
      <Element w="200" h="200" x="1550" :y.transition="{value: $y, duration: 800, function: 'cubic-bezier(1,-0.64,.39,1.44)'}" color="#4c1d95" />
    </Element>`,state(){return{y:50}},hooks:{ready(){this.$setTimeout(()=>{this.y=1080-50-200},2e3)}},methods:{doneTransition3(){this.$log.info("Transition 3 is done!")},start(i,t,e){this.$log.info("Start transition",i.nodeId,t,e)},finished(i,t,e){this.$log.info("Finished transition",i.nodeId,t,e)}}}),Ps=C.Component("Alpha",{template:`
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

    </Element>`,state(){return{alpha:.5,direction:"up",image:"assets/lightningbolt.png"}},hooks:{ready(){this.$setInterval(()=>{const i=this.direction==="up"?this.alpha+.2:this.alpha-.2;this.alpha=Math.max(Math.min(i,1),.1),this.alpha===1&&(this.direction="down"),this.alpha===.1&&(this.direction="up")},1400)}}}),As=C.Component("Scaling",{template:`
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

    </Element>`,state(){return{scale:2,direction:"up",balloon:"assets/balloon.png",scale2:1}},hooks:{ready(){this.$setInterval(()=>{const i=this.direction==="up"?this.scale+.5:0;this.scale=Math.max(Math.min(i,8),0),this.scale===8&&(this.direction="down"),this.scale===0&&(this.direction="up")},500),this.$setInterval(()=>{this.scale2=this.scale2===1?3:1},2e3)}}}),Bs=C.Component("Rotation",{template:`
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

    </Element>`,state(){return{rotation1:38,rotation2:0,rotation3:0}},hooks:{ready(){this.$setInterval(()=>{const i=this.rotation2+10;this.rotation2=i<=360?i:0},800),this.$setInterval(()=>{this.rotation3=Math.max(10,Math.min(720,this.rotation3*2)),this.rotation3===720&&(this.rotation3=0)},2e3)}}}),Ds=C.Component("KeyInput",{template:`
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

    </Element>`,state(){return{focusedX:0,focusedY:0,colorscheme:"yellow"}},computed:{blockColor(){return this.colorscheme==="yellow"?"#fef08a":"#bae6fd"},focusColor(){return this.colorscheme==="yellow"?"#facc15":"#38bdf8"}},input:{left(i){const t=this.focusedX-1;t===-1?this.parent.focus(i):this.focusedX=Math.max(t,0)},right(i){const t=this.focusedX+1;t===4?this.parent.focus(i):this.focusedX=Math.min(t,3)},up(){this.focusedY=Math.max(this.focusedY-1,0)},down(){this.focusedY=Math.min(this.focusedY+1,3)},enter(){this.colorscheme=this.colorscheme==="yellow"?"blue":"yellow"},any(i){const t=parseInt(i.key);isNaN(t)?this.parent.focus(i):(this.focusedX=Math.max(0,(t-1)%4),this.focusedY=Math.max(0,Math.ceil(t/4)-1))}}}),at=["#64748b","#ef4444","#f97316","#84cc16","#14b8a6","#3b82f6"],lt=["Iron Man","Captain America","Thor","Hulk","Black Widow","Hawkeye","Scarlet Witch","Vision","Black Panther","Doctor Strange","Spider-Man","Ant-Man","Wasp","Captain Marvel","Falcon","Winter Soldier","War Machine","Quicksilver","Star-Lord","Gamora"],Ys=C.Component("Texts",{template:`
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
    </Element>`,state(){return{color:at[0],size:10,character:lt[0],myText:"This is my test yeah",longText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ante non mauris commodo tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis mattis mi. Aliquam ultricies mi vel lobortis luctus. Ut non feugiat urna. Duis sed blandit dui. Donec venenatis, mauris at blandit malesuada, elit nibh scelerisque lacus, non tempus arcu mi at justo."}},hooks:{ready(){let i=0;this.$setInterval(()=>{i++,i>at.length-1&&(i=0),this.color=at[i],this.size=10*(i*2+1)},1e3);let t=0;this.$setInterval(()=>{t++,t>lt.length-1&&(t=0),this.character=lt[t]},1400)}},methods:{textLoaded(i){this.$log.info(`Image loaded with w: ${i.w} and h: ${i.h}`)}}}),He=["https://images.unsplash.com/photo-1690360994204-3d10cc73a08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80","https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"],Os=C.Component("Images",{template:`
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

    </Element>`,state(){return{image:He[0],clipping:!0}},hooks:{ready(){this.$setInterval(()=>{this.image=this.image===He[0]?He[1]:He[0],this.clipping=!this.clipping},2e3)}},methods:{imageLoaded(i){this.$log.info(`Image loaded with w: ${i.w} and h: ${i.h}`)}}}),Ne=C.Component("Square",{template:`
    <Element w="$size" h="$size" color="#86198f" />
  `,props:[{key:"size",default:80}]}),xo=C.Component("Card",{components:{Square:Ne},template:`
    <Element w="$w" h="$h" color="#0891b2">
      <Square x="80" y="80" />
      <Square x="20" y="20" size="40" />
    </Element>`,props:["size"],computed:{w(){return this.size==="large"?400:200},h(){return this.size==="large"?500:300}}}),Ws=C.Component("Components",{components:{Square:Ne,Card:xo},template:`
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
    </Element>`,state(){return{x:100}},hooks:{ready(){this.$setInterval(()=>{this.x=this.x===100?250:100},2e3)}}}),K=["#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"],Xs=C.Component("ForLoop",{components:{Square:Ne},template:`
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
  `,state(){return{collection1:[0,100,200,300,400,500],collection2:[{id:"block1",x:0,color:K[0]},{id:"block2",x:100,color:K[1]},{id:"block3",x:200,color:K[2]},{id:"block4",x:300,color:K[3]},{id:"block5",x:400,color:K[4]},{id:"block6",x:500,color:K[5]}],collection3:[],collection4:[{x:0,id:"one"},{x:200,id:"two"},{x:400,id:"three"}],alpha:.5}},hooks:{ready(){this.$setTimeout(()=>{this.collection2[0].color=K[5],this.collection2[1].color=K[4],this.collection2[2].color=K[3],this.collection2[3].color=K[2],this.collection2[4].color=K[1],this.collection2[5].color=K[0]},4e3);let i=0;const t=this.$setInterval(()=>{this.collection3.push({x:i*100,color:K[i]}),i++,i===K.length&&clearInterval(t)},1e3);this.$setTimeout(()=>{this.alpha=this.alpha===.5?1:.5},800),this.$setTimeout(()=>{this.collection4=[{x:100,id:"four"},{x:500,id:"five"}]},2e3)}}}),Hs=C.Component("Effects",{template:`
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
    </Element>`,state(){return{direction:"up",radius:0,effects:[this.shader("borderTop",{width:20,color:"#be123c"}),this.shader("borderBottom",{width:20,color:"#f43f5e"})]}},hooks:{ready(){this.$setInterval(()=>{const t=this.direction==="up"?this.radius+10:this.radius-10;this.radius=Math.max(Math.min(t,80),0),this.radius===80&&(this.direction="down"),this.radius===0&&(this.direction="up")},500);let i=0;this.$setInterval(()=>{i++,i%2?this.effects=[this.shader("borderLeft",{width:20,color:"#be123c"}),this.shader("borderRight",{width:20,color:"#f43f5e"})]:this.effects=[this.shader("borderTop",{width:20,color:"#be123c"}),this.shader("borderBottom",{width:20,color:"#f43f5e"})]},2e3)}}}),Us=C.Component("ShowIf",{components:{Square:Ne},template:`
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

    </Element>`,state(){return{showNr:1,hidNr:0,showBool:!0,hideBool:!1,showHideToggle:!0}},hooks:{ready(){this.$setInterval(()=>{this.showHideToggle=!this.showHideToggle},2e3),this.$setTimeout(()=>{this.showNr=0,this.hideNr=1,this.showBool=!1,this.hideBool=!0},4e3)}}}),js=C.Component("Events",{template:`
    <Element x="400" y="360">

      <Element w="280" h="280" color="#e5e7eb" :x="$x" y="-5" />

      <Element w="250" h="250" x="10" y="10" color="$colors[0]" />
      <Element w="250" h="250" x="290" y="10" color="$colors[1]" />
      <Element w="250" h="250" x="570" y="10" color="$colors[2]" />
      <Element w="250" h="250" x="850" y="10" color="$colors[3]" />
    </Element>`,state(){return{count:0,colors:["#fbbf24","#a3e635","#22d3ee","#f472b6"]}},computed:{x(){return this.count*280-5}},hooks:{unfocus(){this.$emit("changeBackground")}},input:{left(i){const t=this.count-1;t===-1?this.parent.focus(i):this.count=Math.max(t,0)},right(i){const t=this.count+1;t===4?this.parent.focus(i):this.count=Math.min(t,3)},enter(){this.$emit("changeBackground",this.colors[this.count])}}}),Ks=C.Component("SlotCard",{template:`
    <Element
      w="300" h="500"
      :effects="[$shader('radius', {radius: 20}), $shader('border', {width: 6, color: '#e2e8f0'})]" color="{top: '#94a3b8', bottom: '#475569'}"
    >
      <Slot x="20" y="20" />
      <Text content="$label" wordwrap="260" x="20" y="400" align="center" />
    </Element>
  `,props:[{key:"label"}]}),Gs=C.Component("NamedSlotCard",{template:`
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
  `}),Ce=["#fff7ed","#fdba74","#f97316","#ea580c","#9a3412","#431407"],qs=C.Component("Components",{components:{SlotCard:Ks,NamedSlotCard:Gs,Card:xo,Square:Ne},template:`
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

    </Element>`,state(){return{color:Ce[0]}},hooks:{ready(){this.$setInterval(()=>{const i=Ce.indexOf(this.color)+1;this.color=i<=Ce.length?Ce[i]:Ce[0]},600)}}}),ke=(i,t)=>Math.floor(Math.random()*(t-i+1)+i),Vs=C.Component("Item",{template:`<Element
      src="assets/blits-b-small.png"
      w="96"
      h="168"
      :x.transition="{value: $x, duration: 2900}"
      :y.transition="{value: $y, duration: 2900}"
      :rotation.transition="{value: $rotation, duration: 2900}"
      :scale.transition="{value: $scale, duration: 1000}"
    />`,state(){return{x:ke(20,1560),y:ke(20,720),rotation:0,scale:.1}},hooks:{ready(){this.scale=1,this.$setInterval(()=>{this.scale=1,this.x=ke(20,1740),this.y=ke(20,900),this.rotation=ke(10,360)},3e3)}}}),Qs=C.Component("Exponential",{components:{Item:Vs},template:`<Element>
    <Item :for="item in $items" key="$item" />
  </Element>`,state(){return{items:[]}},hooks:{ready(){const i=this.$setInterval(()=>{for(let t=0;t<=Math.floor(this.items.length/10);t++)this.items.push(`item${this.items.length}`);this.$log.info("# items",this.items.length),this.items.length>100&&clearInterval(i)},2e3)}}}),Zs=C.Component("FPScounter",{template:`
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
    `,state(){return{sprite:{defaults:{y:1,w:20,h:20},frames:{false:{x:-1e3},0:{x:1},1:{x:23},2:{x:45},3:{x:67},4:{x:89},5:{x:111},6:{x:133},7:{x:155},8:{x:177},9:{x:199},avg:{x:221,w:48,h:25},fps:{x:271,w:43,h:25},max:{x:316,w:53,h:25},min:{x:371,w:47,h:25}}},fps:"-",avgFps:"-",minFps:"-",maxFps:"-"}},hooks:{init(){const i=[];let t=0,e=1e4,o=0,s=0,r=0,n=0,a=performance.now();const p=()=>{window.requestAnimationFrame(()=>{const c=performance.now();for(e<1e4&&a<=c-1e3&&(a=c,this.fps=t.toString().padStart(3,"0"),this.avgFps=s.toString().padStart(3,"0"),this.minFps=e.toString().padStart(3,"0"),this.maxFps=o.toString().padStart(3,"0"));i.length>0&&i[0]<=c-1e3;)i.shift();i.push(c),t=i.length,n>60&&(e=Math.min(t,e),o=Math.max(t,o),r+=t,s=Math.round(r/(n-60))),n++,p()})};p()}}}),Js=C.Application({components:{FPScounter:Zs},template:`
    <Element w="1920" h="1080" :color="$backgroundColor">
      <RouterView ref="routerview" />
      <FPScounter x="1610" />
    </Element>`,state(){return{backgroundColor:"#1e293b"}},routes:[{path:"/",component:hs,options:{keepAlive:!0}},{path:"/demos/loading",component:()=>oo(()=>import("./Loading-4c561219.js"),["assets/Loading-4c561219.js","assets/settings-d7e15b36.js"])},{path:"/demos/intro",component:()=>new Promise(i=>{i(ds)})},{path:"/demos/theming",component:gs},{path:"/demos/tmdb",component:Cs},{path:"/demos/sprites",component:Rs},{path:"/demos/focushandling",component:zs},{path:"/examples/positioning",component:Ms},{path:"/examples/colors",component:Ls},{path:"/examples/gradients",component:Fs},{path:"/examples/transitions",component:Ns},{path:"/examples/alpha",component:Ps},{path:"/examples/scaling",component:As},{path:"/examples/rotation",component:Bs},{path:"/examples/keyinput",component:Ds},{path:"/examples/texts",component:Ys},{path:"/examples/images",component:Os},{path:"/examples/components",component:Ws},{path:"/examples/forloop",component:Xs},{path:"/examples/effects",component:Hs},{path:"/examples/showif",component:Us},{path:"/examples/events",component:js},{path:"/examples/slots",component:qs},{path:"/benchmarks/exponential",component:Qs}],hooks:{ready(){this.$listen("changeBackground",i=>{this.backgroundColor=i?i+80:"#1e293b"})}},input:{escape(){this.quit()},back(){this.$router.to("/")}}});C.Launch(Js,"app",{w:1920,h:1080,multithreaded:!1,debugLevel:1,fontLoader:qi,fonts:[{family:"lato",type:"msdf",png:"/fonts/Lato-Regular.msdf.png",json:"/fonts/Lato-Regular.msdf.json"},{family:"raleway",type:"msdf",png:"/fonts/Raleway-ExtraBold.msdf.png",json:"/fonts/Raleway-ExtraBold.msdf.json"},{family:"opensans",type:"web",file:"/fonts/OpenSans-Medium.ttf"}]});export{C as B,Ne as S};
