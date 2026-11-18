/*! 密宗模拟器 全屏前端 © ssd（类脑 @buyssdcom）保留一切权利。禁止复制、转载、修改、改编、借鉴、模仿、反混淆与任何商业用途，许可条款见仓库 README。All rights reserved. */
(()=>{var hs="3.0.0",bs="@fontsource/noto-serif-sc@5.3.0",no=[400,600].map(t=>"https://testingcf.jsdelivr.net/npm/"+bs+"/"+t+".css");function vs(){try{if(window.parent.TAN_ASSET_BASE)return String(window.parent.TAN_ASSET_BASE)}catch{}return"https://testingcf.jsdelivr.net/gh/ssd-tavern/tantra@"+hs+"/assets/"}var wt=vs(),$=t=>wt+t,ao=["bg-ink.webp","hanging-fish.webp","incense-coil.webp","icon-redknot.webp","icon-coffer.webp","icon-letterbox.webp","shrine-model.webp","icon-folddoc.webp","icon-ledger.webp","map-panorama.webp","stamp-angelica.webp","stamp-orchid.webp","stamp-peach.webp","stamp-pomegranate.webp","lotus-rank.webp","map-changan.webp","hall-1-hut.webp","hall-2-vihara.webp","hall-3-edict.webp","fac-danfang.webp","fac-xingtang.webp","fac-kefang.webp","fac-huotan.webp","fac-mitan.webp","fac-wentang.webp","fac-jiguan.webp","fac-rongjin.webp","fac-midang.webp","fac-dilao.webp","fac-kufang.webp","fac-guifang.webp","rite-grand.webp","store-drug.webp","store-tool.webp","store-ritual.webp","own-1-rough.webp","own-2-fine.webp","own-3-grand.webp","loan-guifang.webp","banner-handle.webp","banner-steward.webp","banner-consort.webp","banner-order.webp","banner-craft.webp","sect-1-bliss.webp","sect-2-illusion.webp","sect-3-mercy.webp","sect-4-asura.webp","sect-5-strings.webp","letter-envelope.webp","paper-tibet.webp","stamp-gesang.webp","map-road.webp","map-lhasa.webp","scene-xishi.webp","scene-pingkang.webp","scene-dongshi.webp","scene-xiangfu.webp","scene-ximin.webp","scene-tianjie.webp","scene-lengfang.webp","scene-qujiang.webp","scene-huangcheng.webp","scene-hall-1.webp","scene-hall-2.webp","scene-hall-3.webp","scene-longshan.webp","scene-qinzhou.webp","scene-hezhou.webp","scene-shanzhou.webp","scene-chiling.webp","scene-baihai.webp","scene-yushu.webp","scene-naqu.webp","scene-dazhao.webp","scene-xiaozhao.webp","scene-hongshan.webp","scene-yalong.webp","scene-luoxie.webp","scene-luoxie-2.webp","scene-luoxie-3.webp","fest-yuanri.webp","fest-shangyuan.webp","fest-huiri.webp","fest-hanshi.webp","fest-qingming.webp","fest-shangsi.webp","fest-yufo.webp","fest-duanwu.webp","fest-qixi.webp","fest-yulanpen.webp","fest-chongyang.webp","fest-dongzhi.webp","fest-suichu.webp","fest-xue-sagadawa.webp","fest-xue-saima.webp","fest-xue-muyu.webp","fest-xue-wangguo.webp","fest-xue-gutu.webp","fest-xue-xinnian.webp","hall-lx-1-sealed.webp","hall-lx-2-opened.webp","hall-lx-3-court.webp","fac-lx-danfang.webp","fac-lx-yijing.webp","fac-lx-keshe.webp","fac-lx-huotan.webp","fac-lx-yicang.webp","fac-lx-tancheng.webp","fac-lx-wenquan.webp","fac-lx-jiguan.webp","fac-lx-gongfang.webp","fac-lx-mijiao.webp","fac-lx-dilao.webp","fac-lx-kufang.webp","own-lx-1-rough.webp","own-lx-2-fine.webp","own-lx-3-grand.webp"],oo=6,M={topbar:"tan-topbar",doom:"tan-doom",minimap:"tan-minimap",corner:"tan-corner",lift:"tan-lift",liftTitle:"tan-lift-title",liftBody:"tan-lift-body"};var E=window.parent.document,ws={host:"shell-host",root:"shell-root",entry:"entry",paper:"paper",status:"status",writing:"writing",textarea:"textarea",send:"send",regen:"regen",del:"del",delbar:"delbar",delCount:"del-count",delCancel:"del-cancel",delConfirm:"del-confirm",jump:"jump"},so=t=>Object.fromEntries(Object.entries(ws).map(([e,n])=>[e,t+"-"+n])),Rn=t=>'<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+t+"</svg>",ys=Rn('<path d="M4 20l1-5L16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 2z"/><path d="M14.5 5.5l3 3"/>'),io=Rn('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>'),ks=Rn('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>'),Ss={send:"发送",stop:"停止",sendLabel:"发送",stopLabel:"停止",writing:"续写中……",thinking:"思考中……",stopped:"已停",stopping:"停止中……",noReply:"没有收到回复，可重写上一条",recording:"发送中……",sendFail:"消息未能发出",error:"出错: ",generating:"酒馆正在生成，请稍候",deleting:"删除中……",noFloor:"还没有可删除的楼层",noRegenOpening:"开场白不可重写，请先发言",delIdle:"点选要删除的楼层",delIdleTail:"点一楼，从它起到末尾一并删除",delCount:t=>"已选 "+t+" 楼",delCountTail:t=>"自此以下 "+t+" 楼",delBtn:t=>"删除 "+t+" 楼",delBtnIdle:"删除",delArmed:t=>"再点一次删除 "+t+" 楼",floorNo:t=>"#"+t,editing:"改写中……",editEmpty:"内容为空，保持原样",editLabel:ys,editHint:"改写这一楼",editTitle:"Ctrl+Enter 保存, Esc 取消",editSave:"保存",editCancel:"取消",earlier:t=>"更早还有 "+t+" 楼，点击展开",thought:"思维链",thinkingAlt:"思考中",patchFail:"变量未能记入，请删去这一楼重来",renderFail:"正文未能渲染，请重新进入",sideLabel:io,sideHint:"收起侧栏",sideTopLabel:io,sideTopHint:"展开侧栏",asideLabel:ks,asideHint:"右栏",delLabel:"删",delHint:"删除楼层",delCancel:"取消",regenLabel:"重写",regenHint:"删掉上一条回复重新生成",placeholder:"说点什么……",jumpLabel:"↓",jumpHint:"回到末尾"},ro={name:"全屏前端",prefix:"fs",roleClass:{user:"user",ai:"ai"},windowSize:30,deleteMode:"pick",entryButton:"",legacyPrefix:"",tags:null,fonts:[],escClosers:[]},S={},f={},b={},tt="";function qn(t){if(!t.layout&&typeof t.skeleton!="function")throw new Error("defineShell 缺少 layout 或 skeleton");Object.keys(S).forEach(e=>delete S[e]),Object.assign(S,ro,t),S.roleClass=Object.assign({},ro.roleClass,t.roleClass),tt=S.prefix,Object.keys(f).forEach(e=>delete f[e]),Object.assign(f,so(tt),t.sel),Object.keys(b).forEach(e=>delete b[e]),Object.assign(b,Ss,t.text)}var d=t=>tt+"-"+t,z=(t,...e)=>typeof S[t]=="function"?S[t](...e):void 0,pt=(...t)=>console.warn("["+S.name+"]",...t);function O(t,e){try{window.parent.localStorage.getItem(tt+"Debug")&&console.warn("["+S.name+" dbg]",t,e)}catch{}}function $t(t,e){try{let n=window.parent.localStorage,a=n.getItem(tt+"Pref:"+t);return a==null&&S.legacyPrefix&&(a=n.getItem(S.legacyPrefix+"Pref:"+t)),a??e}catch{return e}}function dt(t,e){try{window.parent.localStorage.setItem(tt+"Pref:"+t,e)}catch{}}function C(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var x={mode:"idle",gen:null,stopAsked:!1,del:new Set,edit:null},Jt=()=>x.mode,it=()=>x.mode==="sending"||x.mode==="generating";function Es(){let t="."+tt+"-",e="#"+f.root;return`
/* ==== 布局模板：宽屏时左栏、中间区、右栏并排 ==== */
${e} { position: relative; overflow: hidden; }
${t}side, ${t}aside { position: relative; flex: none; min-width: 0; }
${t}side { width: var(--side-w, 260px); }
${t}aside { width: var(--aside-w, 320px); }
${t}main { position: relative; flex: 1; min-width: 0; display: flex; flex-direction: column; }
${t}topbar { flex: none; display: flex; align-items: center; }
${t}top-body { flex: 1; min-width: 0; }
${t}top-btn { flex: none; cursor: pointer; }
/* 左栏的开合钮：开着时是栏顶靠右的那枚，收起后换成顶栏左端的那枚；窄屏时顶栏那枚一直在 */
${t}side-btn { position: absolute; top: 8px; right: 8px; z-index: 1; cursor: pointer; }
${e}[data-side="open"]:not([data-narrow]) ${t}top-btn[data-toggle="side"] { display: none; }
/* 中间区的页叠在一起，只露当前那页；不用 display 藏，正文页滚到哪了、输入框多高都留着 */
${t}pages { position: relative; flex: 1; min-height: 0; }
${t}page { position: absolute; inset: 0; visibility: hidden; }
${t}page${t}on { visibility: visible; }
${t}story { display: flex; flex-direction: column; }
${t}story > #${f.paper} { flex: 1; min-height: 0; }
/* 收起的栏整个挪出壳根，中间区顺势占满 */
${e}[data-side="closed"] ${t}side { margin-left: calc(-1 * var(--side-w, 260px)); visibility: hidden; }
${e}[data-aside="closed"] ${t}aside { margin-right: calc(-1 * var(--aside-w, 320px)); visibility: hidden; }
/* 拖宽把手：不占地方，骑在栏与中间区的交界上 */
${t}grip { position: relative; z-index: 2; flex: none; width: 0; touch-action: none; }
${t}grip::after { content: ''; position: absolute; top: 0; bottom: 0; left: -4px; width: 8px; cursor: col-resize; }
${e}[data-side="closed"] [data-grip="side"], ${e}[data-aside="closed"] [data-grip="aside"] { display: none; }
${e}${t}resizing { cursor: col-resize; user-select: none; -webkit-user-select: none; }
${t}scrim { position: absolute; inset: 0; z-index: 10; visibility: hidden; opacity: 0; cursor: pointer; }

/* ==== 窄屏：两栏是抽屉，滑出时把中间区推开，露在外面的那一条盖着遮罩，点它收起 ==== */
${e}[data-narrow] :is(${t}side, ${t}aside) { position: absolute; top: 0; bottom: 0; z-index: 3; width: var(--drawer-w, min(84%, 360px)); margin: 0; }
${e}[data-narrow] ${t}side { left: 0; transform: translateX(-100%); }
${e}[data-narrow] ${t}aside { right: 0; transform: translateX(100%); }
${e}[data-narrow][data-side="open"] ${t}side, ${e}[data-narrow][data-aside="open"] ${t}aside { transform: none; }
${e}[data-narrow][data-side="open"] ${t}main { transform: translateX(var(--drawer-w, min(84%, 360px))); }
${e}[data-narrow][data-aside="open"] ${t}main { transform: translateX(calc(-1 * var(--drawer-w, min(84%, 360px)))); }
${e}[data-narrow] ${t}grip { display: none; }
${e}[data-narrow]:is([data-side="open"], [data-aside="open"]) ${t}scrim { visibility: visible; opacity: 1; }

/* ==== 开合的过渡：只在玩家开合时给（壳根带 sliding），收起的栏与遮罩等滑完再隐去 ==== */
${e}${t}sliding :is(${t}side, ${t}aside, ${t}main, ${t}scrim) { transition: margin var(--frame-dur, .24s) var(--frame-ease, ease), transform var(--frame-dur, .24s) var(--frame-ease, ease), opacity var(--frame-dur, .24s) var(--frame-ease, ease), visibility 0s; }
${e}${t}sliding[data-side="closed"] ${t}side, ${e}${t}sliding[data-aside="closed"] ${t}aside, ${e}${t}sliding:not([data-side="open"], [data-aside="open"]) ${t}scrim { transition-delay: 0s, 0s, 0s, var(--frame-dur, .24s); }
@media (prefers-reduced-motion: reduce) { ${e}${t}sliding :is(${t}side, ${t}aside, ${t}main, ${t}scrim) { transition: none; } }
`}function Bn(){let t="."+tt+"-";return`
/* ==== 宿主节点：在酒馆页面里，用 !important 压过页面那边对它的任何规则；all: initial 切断继承，里面从零开始 ==== */
/* 层级 5000：压过酒馆自己的界面（顶栏 3005、各抽屉与面板最高 4100），让出酒馆的弹窗与提示（9999 起）和各插件的浮层（惯例 9000 起） */
/* 酒馆 html 带 transform，fixed 的包含块是 html 而非视口；手机端 body 又 fixed 使 html 高 0，所以尺寸写死成视口单位，不靠 inset 撑 */
:host(#${f.host}) { all: initial !important; position: fixed !important; left: 0 !important; top: 0 !important;
  width: 100vw !important; width: 100dvw !important; height: 100vh !important; height: 100dvh !important;
  z-index: 5000 !important; display: block !important; }
/* 入口钮的宿主只切断继承，放哪、怎么排由卡写：:host(#${f.entry}) { … !important } */
:host(#${f.entry}) { all: initial !important; }
:host(#${f.host}[data-visible="false"]), :host(#${f.entry}[data-visible="false"]) { display: none !important; }

/* ==== 起点：盒模型与表单控件归零 ==== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
button, input, textarea, select { font: inherit; color: inherit; background: none; border: none; border-radius: 0; outline: none; }
[disabled] { cursor: not-allowed; }
#${f.root} { display: flex; width: 100%; height: 100%; -webkit-tap-highlight-color: transparent; }

/* ==== 内核元素的显隐 ==== */
#${f.paper} { overflow-y: auto; }
#${f.delbar} { display: none; }
#${f.delbar}${t}show { display: flex; }
#${f.jump} { display: none; }
#${f.jump}${t}show { display: block; }
${t}th-body { display: none; white-space: pre-wrap; }
${t}thought${t}open ${t}th-body { display: block; }
${t}turn${t}selable { cursor: pointer; }
/* 改写钮只在空闲与改写中可用，发送、生成、删楼选择途中隐去（占位留着，正文不跳） */
#${f.paper}:is([data-mode="sending"], [data-mode="generating"], [data-mode="deleting"]) ${t}pen { visibility: hidden; }
/* 改写框跟着内容长高，到半屏为止（手机上还要给键盘让地方），再长就在框里滚 */
${t}story-edit { scroll-margin: 24px; }
${t}story-edit textarea { display: block; width: 100%; resize: none; max-height: 50vh; overflow-y: auto; }
`+(S.layout?Es():"")}function P(){try{return getLastMessageId()}catch{return null}}function be(){try{return String(SillyTavern.getCurrentChatId()||"")}catch{return""}}function U(t){try{return getChatMessages(t)[0]||null}catch(e){return O("readFloor",e),null}}function lo(){let t=P();return t==null||t<0?[]:(getChatMessages("0-"+t)||[]).filter(e=>e.is_hidden!==!0)}function co(t){try{if(!Number.isInteger(t)||t<0)return null;let e=getVariables({type:"message",message_id:t});return e&&e.stat_data?e:null}catch(e){return O("floorMvu",e),null}}function Fn(t,e=6){for(let n=t;n>=0&&n>t-e;n--){let a=co(n);if(a)return a}return null}var po=t=>{let e=co(t);return e?e.stat_data:null};function Qt(){try{let t=getChatMessages(0,{include_swipes:!0})[0];return!t||!Array.isArray(t.swipes)?null:{swipes:t.swipes,cur:t.swipe_id||0,data:t.swipes_data||[]}}catch(t){return O("readOpenings",t),null}}function Dt(){let t=P();if(t==null)return null;let e=Fn(t);if(e)return e.stat_data;if(t===0){let n=Qt(),a=n&&n.data[n.cur];if(a&&a.stat_data)return a.stat_data}return null}function ve(t){let e=Fn(t),n=e&&e.stat_data;return!n&&t===0&&(n=Dt()),n?_.cloneDeep(_.omit(n,["$internal"])):null}async function fo(t){let e=P(),n=String(t);try{typeof substitudeMacros=="function"&&(n=substitudeMacros(n))}catch(i){O("macros",i)}await createChatMessages([{role:"user",message:n}]);let a=P(),o=a!=null?U(a):null;return a!==(e??-1)+1||!o||o.role!=="user"?null:a}function Ls(){let t=E.getElementById("send_textarea");t&&t.value&&(t.value="",t.dispatchEvent(new window.parent.Event("input",{bubbles:!0})))}function go(){try{return typeof builtin=="object"&&builtin&&typeof builtin.duringGenerating=="function"&&!!builtin.duringGenerating()}catch{return!1}}async function uo(){Ls(),await SillyTavern.generate("normal")}async function xo(){await SillyTavern.generate("regenerate")}function mo(){try{return!!SillyTavern.stopGeneration()}catch(t){return O("stop",t),!1}}async function ho(t){for(let e of Array.from(new Set(t)).sort((n,a)=>a-n))await deleteChatMessages([e]);try{await eventEmit(tavern_events.MESSAGE_DELETED,(P()==null?-1:P())+1)}catch(e){O("emitDeleted",e)}}async function bo(t){await setChatMessages(t,{refresh:"affected"});for(let e of t)try{await eventEmit(tavern_events.MESSAGE_EDITED,e.message_id),await eventEmit(tavern_events.MESSAGE_UPDATED,e.message_id)}catch(n){O("emitEdited",n)}}async function vo(t){let e=Qt();if(!e||t===e.cur||e.swipes[t]==null)return!1;await setChatMessages([{message_id:0,swipe_id:t}]);try{await eventEmit(tavern_events.MESSAGE_SWIPED,0)}catch(n){O("emitSwiped",n)}return!0}async function wo(t,e){let n=Fn(t);if(!n)throw new Error("这一楼之前没有变量");let a=await Mvu.parseMessage(e,n);if(!a||!a.stat_data)throw new Error("MVU 未返回变量");return await Mvu.replaceMvuData(a,{type:"message",message_id:t}),{before:n.stat_data,after:a.stat_data}}function yo(t){let e=tavern_events;[e.MESSAGE_SENT,e.MESSAGE_RECEIVED,e.MESSAGE_EDITED,e.MESSAGE_UPDATED,e.MESSAGE_DELETED,e.MESSAGE_SWIPED,e.USER_MESSAGE_RENDERED,e.CHARACTER_MESSAGE_RENDERED].forEach(n=>eventOn(n,()=>t.change())),eventOn(e.CHAT_CHANGED,n=>t.chat(n))}function ko(t){return typeof Mvu!="object"||!Mvu||!Mvu.events?!1:(eventOn(Mvu.events.VARIABLE_UPDATE_ENDED,(e,n)=>t.vars(e,n)),eventOn(Mvu.events.VARIABLE_INITIALIZED,e=>t.vars(e,null)),!0)}function So(t,e){return typeof appendInexistentScriptButtons!="function"||typeof getButtonEvent!="function"?!1:(appendInexistentScriptButtons([{name:t,visible:!0}]),eventOn(getButtonEvent(t),e),!0)}function Eo(t,e){let n=tavern_events;return eventOn(n.STREAM_TOKEN_RECEIVED,t),eventOn(n.STREAM_REASONING_DONE,e),()=>{eventRemoveListener(n.STREAM_TOKEN_RECEIVED,t),eventRemoveListener(n.STREAM_REASONING_DONE,e)}}var ee=["side","aside"],Ts={side:!0,aside:!1},_s={side:[180,480],aside:[220,560]},As=320,Je="story",T=null,X=null,we=null,zt=!1,ye=Je,Vn=null,Ye=t=>typeof t=="function"?t():t||"",te=t=>S.layout[t]!=null,Se=t=>"."+d(t);function $s(){return`<div id="${f.paper}"></div>
<div id="${f.status}"></div>
<div id="${f.writing}">
  <button id="${f.del}" title="${b.delHint}">${b.delLabel}</button>
  <button id="${f.regen}" title="${b.regenHint}">${b.regenLabel}</button>
  <textarea id="${f.textarea}" rows="1" placeholder="${b.placeholder}"></textarea>
  <button id="${f.send}" title="${b.send}">${b.sendLabel}</button>
</div>
<div id="${f.delbar}"><span id="${f.delCount}"></span><button id="${f.delCancel}">${b.delCancel}</button><button id="${f.delConfirm}" disabled>${b.delBtnIdle}</button></div>
<button id="${f.jump}" title="${b.jumpHint}">${b.jumpLabel}</button>`}var Gn=(t,e,n)=>te(t)?`<button class="${d(e)}" data-toggle="${t}" title="${b[n+"Hint"]}">${b[n+"Label"]}</button>`:"";function Lo(){let t=S.layout,e=t.story==null?$s():Ye(t.story);return(te("side")?`<div class="${d("side")}">${Gn("side","side-btn","side")}${Ye(t.side)}</div><div class="${d("grip")}" data-grip="side"></div>`:"")+`<div class="${d("main")}">
  <div class="${d("topbar")}">${Gn("side","top-btn","sideTop")}<div class="${d("top-body")}">${Ye(t.top)}</div>${Gn("aside","top-btn","aside")}</div>
  <div class="${d("pages")}">
    <div class="${d("page")} ${d("story")} ${d("on")}" data-page="${Je}">${e}</div>`+(t.pages||[]).map(n=>`<div class="${d("page")}" data-page="${n}"></div>`).join("")+`</div>
  <div class="${d("scrim")}"></div>
</div>`+(te("aside")?`<div class="${d("grip")}" data-grip="aside"></div><div class="${d("aside")}">${Ye(t.aside)}</div>`:"")}var Ee=()=>zt,qt=t=>!!T&&T.dataset[t]==="open",To=t=>$t(t,Ts[t]?"open":"closed")==="open";function Qe(t,e){te(t)&&(T.dataset[t]=e?"open":"closed")}function zs(){T.classList.add(d("sliding")),clearTimeout(Vn),Vn=setTimeout(()=>{T&&T.classList.remove(d("sliding"))},500)}function Ct(t,e){!T||!te(t)||qt(t)===!!e||(zs(),zt&&e&&ee.forEach(n=>Qe(n,!1)),Qe(t,e),zt||dt(t,e?"open":"closed"))}var _o=t=>Ct(t,!qt(t)),Un=()=>ee.forEach(t=>Ct(t,!1)),Ao={isOpen:()=>zt&&ee.some(qt),close:Un};function ke(){if(!T)return;let t=T.getBoundingClientRect().width;if(!t)return;let e=t<=(S.layout.narrow||920);e!==zt&&(zt=e,T.toggleAttribute("data-narrow",e),ee.forEach(n=>Qe(n,e?!1:To(n))))}function Cs(t,e){let[n,a]=S.layout[t+"Width"]||_s[t],o=ee.find(l=>l!==t),i=qt(o)?T.querySelector(Se(o)):null,r=T.getBoundingClientRect().width-(i?i.getBoundingClientRect().width:0)-As,s=Math.round(Math.max(n,Math.min(e,a,r>n?r:a)));return T.style.setProperty("--"+t+"-w",s+"px"),s}function Ms(t){let e=t.target.closest("[data-grip]");if(!e||t.button)return;t.preventDefault();let n=e.dataset.grip,a=n==="side"?1:-1,o=t.clientX,i=T.querySelector(Se(n)).getBoundingClientRect().width,r=i,s=c=>{r=Cs(n,i+a*(c.clientX-o))},l=()=>{X.removeEventListener("pointermove",s),X.removeEventListener("pointerup",l),X.removeEventListener("pointercancel",l),T&&T.classList.remove(d("resizing")),r!==i&&dt(n+"W",String(r))};T.classList.add(d("resizing")),X.addEventListener("pointermove",s),X.addEventListener("pointerup",l),X.addEventListener("pointercancel",l);try{e.setPointerCapture(t.pointerId)}catch{}}var $o=t=>T?T.querySelector(Se("page")+'[data-page="'+t+'"]'):null;function zo(){T.querySelectorAll("[data-goto]").forEach(t=>t.classList.toggle(d("on"),t.dataset.goto===ye))}function Co(t){if(!T||t===ye||!$o(t))return!1;let e=ye;return ye=t,T.dataset.page=t,T.querySelectorAll(Se("page")).forEach(n=>n.classList.toggle(d("on"),n.dataset.page===t)),zo(),z("onPage",t,e),!0}function Os(t){let e=t.target.closest("[data-toggle]");if(e){_o(e.dataset.toggle);return}if(t.target.closest(Se("scrim"))){Un();return}let n=t.target.closest("[data-goto]");n&&(Co(n.dataset.goto),zt&&Un())}function Mo(t){T=t,X=t.ownerDocument.defaultView,zt=!1,ye=Je,T.innerHTML=Lo(),T.dataset.page=Je,ee.forEach(e=>{Qe(e,To(e));let n=parseInt($t(e+"W",""),10);te(e)&&n>0&&T.style.setProperty("--"+e+"-w",n+"px")}),zo(),T.addEventListener("click",Os),T.addEventListener("pointerdown",Ms),X.addEventListener("resize",ke),X.ResizeObserver&&(we=new X.ResizeObserver(ke),we.observe(T))}function Oo(){X&&X.removeEventListener("resize",ke),we&&we.disconnect(),clearTimeout(Vn),T=X=we=null}var Y=null,Bt=null,yt=null,rt=null,Le=null,De="",Mt=null,Wn=[],w=t=>Bt?Bt.getElementById(t):null,Ot=t=>Bt?Bt.querySelector(t):null;var R=()=>yt,jo=()=>Y,Po=()=>typeof S.css=="function"?S.css():S.css||"";function js(t){["keydown","keyup","keypress"].forEach(e=>t.addEventListener(e,n=>n.stopPropagation()))}function Io(){[f.host,f.entry].forEach(e=>{let n=E.getElementById(e);n&&n.remove()}),S.fonts.forEach(e=>{let n=E.createElement("link");n.rel="stylesheet",n.href=e,E.head.appendChild(n),Wn.push(n)}),Y=E.createElement("div"),Y.id=f.host,Y.dataset.visible="false",Bt=Y.attachShadow({mode:"open"});let t=E.createElement("style");t.textContent=Po(),yt=E.createElement("div"),yt.id=f.root,yt.className=S.prefix+"-shell",S.layout?Mo(yt):yt.innerHTML=S.skeleton(),Bt.append(t,yt),js(Y),E.body.appendChild(Y),rt=E.createElement("div"),rt.id=f.entry,rt.dataset.visible="false",Le=rt.attachShadow({mode:"open"}),Mt=E.createElement("style"),Mt.textContent="#sheld { display: none !important; }",E.head.appendChild(Mt),Mt.disabled=!0,z("mount",yt)}function No(){Oo(),[Y,rt,Mt,...Wn].forEach(t=>{t&&t.remove()}),Y=Bt=yt=rt=Le=Mt=null,De="",Wn.length=0}var W=()=>!!Y&&Y.dataset.visible==="true";function tn(t){Y&&(Y.dataset.visible=t?"true":"false")}function Te(t){Mt&&(Mt.disabled=!t)}function ne(t){if(!rt)return;let e=W()?"":z("entryHtml")||"";if(!e){rt.dataset.visible="false",Le.innerHTML="",De="";return}let n=z("entryParent")||E.body;rt.parentNode!==n&&n.appendChild(rt),e!==De&&(Le.innerHTML="<style>"+Po()+"</style>"+e,Le.querySelectorAll("[data-enter]").forEach(a=>a.addEventListener("click",t)),De=e),rt.dataset.visible="true"}var _e=(t,e)=>new RegExp("<(/?)"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?=[\\s/>])",e);function Ae(t){let e=String(t??""),n=S.tags||{};return n.content&&_e(n.content,"i").test(e)&&(e=e.replace(_e("content","gi"),"<$1x-content").replace(_e(n.content,"gi"),"<$1content")),n.options&&_e(n.options,"i").test(e)&&(e=e.replace(/<options(?:\s[^<>]*)?>[\s\S]*?<\/options\s*>/gi,"").replace(_e(n.options,"gi"),"<$1options")),e}var Ps=/<(think|thinking)(?:\s[^<>]*)?>([\s\S]*?)<\/\1\s*>/gi,Is=/<(?:think|thinking)(?:\s[^<>]*)?>([\s\S]*)$/i,Ho=/<content(?:\s[^<>]*)?>/gi,Ro=/<(UpdateVariable)(?:\s[^<>]*)?>[\s\S]*?(?:<\/\1\s*>|$)/gi;function Ns(t){let e=null,n;for(Ho.lastIndex=0;n=Ho.exec(t);)e=n;if(!e)return null;let a=t.slice(e.index+e[0].length),o=a.toLowerCase().indexOf("</content>");return o>=0?a.slice(0,o):a}function $e(t,e){if(e&&e.role==="user")return{thought:"",main:String(t??"").replace(Ro,"").trim()};let n=Ae(t),a=[],o=n.replace(Ps,(l,c,p)=>(a.push(p.trim()),"")),i=o.match(Is);i&&(a.push(i[1].trim()),o=o.slice(0,i.index));let r=Ns(o),s=(r??o).replace(Ro,"").replace(/<!--[\s\S]*?(?:-->|$)/g,"").replace(/<StatusPlaceHolderImpl\s*\/?>/gi,"").replace(/<\/?[A-Za-z][^<>]*$/,"").replace(/\n{3,}/g,`

`).trim();return{thought:a.filter(Boolean).join(`

`),main:s}}function en(t,e){let n=C(t),a=d("quote");return(e?n:n.replace(/“([^”\n]*?)”/g,'<span class="'+a+'">“$1”</span>').replace(/「([^」\n]*?)」/g,'<span class="'+a+'">「$1」</span>').replace(/&quot;([^\n]*?)&quot;/g,'<span class="'+a+'">&quot;$1&quot;</span>').replace(/\*\*/g,"").replace(/\*([^*\n]+?)\*/g,'<span class="'+d("inner")+'">$1</span>')).split(/\n+/).map(i=>i.trim()).filter(Boolean)}var qo=(t,e)=>(S.parse||$e)(t,e)||{thought:"",main:""},oe=new Map,nn=new Map,an=new Set,Ce=0,Kn=!1;function st(t){nn.clear(),t&&(oe.clear(),an.clear(),Ce=S.windowSize),z("onInvalidate",!!t)}function on(t){return nn.has(t)||nn.set(t,po(t)),nn.get(t)}function Rs(t){let e=oe.get(t.message_id),n=t.extra?JSON.stringify(t.extra):"";if(e&&e.src===t.message&&e.sig===n)return e;let a=t.role==="user"?"user":"assistant",o=qo(t.message,{role:a,streaming:!1,mid:t.message_id,message:t}),i=t.extra||{},r=a==="user"?"":i.reasoning||i.extra&&i.extra.reasoning||"",s={src:t.message,sig:n,role:a,mid:t.message_id,text:o.main||"",thought:r||o.thought||""};return oe.set(t.message_id,s),s}var Bo=t=>(oe.get(t)||{}).text||"",ie=()=>w(f.paper);function Zn(t){return t.scrollHeight-t.scrollTop-t.clientHeight<80}function Ft(){let t=ie(),e=w(f.jump);!t||!e||e.classList.toggle(d("show"),x.mode!=="editing"&&t.scrollHeight>t.clientHeight&&!Zn(t))}function rn(t){let e=ie();e&&(t&&e.scrollTo?e.scrollTo({top:e.scrollHeight,behavior:"smooth"}):e.scrollTop=e.scrollHeight,Ft())}var qs=t=>t.role!=="user",Bs=t=>z("floorHead",t)||"",Xn=t=>z("floorFoot",t)||"";function Fo(t,e,n){let a=e==null?"":' data-fold-mid="'+e+'"',o=z("thoughtHeadHtml");return'<div class="'+d("thought")+(n?" "+d("open"):"")+'"'+a+'><button class="'+d("th-head")+'" title="'+b.thought+'">'+(o??b.thought)+'</button><div class="'+d("th-body")+'">'+C(t)+"</div></div>"}function Fs(t){let e=d(t.role==="user"?S.roleClass.user:S.roleClass.ai),n=E.createElement("div");return n.className=d("turn")+" "+e,n.dataset.mid=t.mid,n.innerHTML='<div class="'+d("ftools")+'"><span class="'+d("fno")+'">'+b.floorNo(t.mid)+'</span><button class="'+d("pen")+'" title="'+b.editHint+'">'+b.editLabel+'</button></div><div class="'+d("text")+'"></div>',n}function ae(t,e){t.innerHTML!==e&&(t.innerHTML=e)}function Go(t,e){let n=t.children;for(let a=0;a<e.length;a++){let o=a<n.length?n[a]:null;o||(o=E.createElement("p"),t.appendChild(o)),o.innerHTML!==e[a]&&(o.innerHTML=e[a])}for(;n.length>e.length;)t.removeChild(n[n.length-1])}function Gs(t,e){if(t.classList.contains(d("editing")))return;let n=t.querySelector(":scope > ."+d("text"));Go(n,en(e.text,!1));let a=t.querySelector(":scope > ."+d("thought"));if(e.thought){let l=an.has(e.mid);if(!a){let c=t.querySelector(":scope > ."+d("ftools"));c.insertAdjacentHTML("afterend",Fo(e.thought,e.mid,l)),a=c.nextElementSibling}a.classList.toggle(d("open"),l),ae(a.querySelector("."+d("th-body")),C(e.thought))}else a&&a.remove();if(!qs(e))return;let o=t.querySelector(":scope > ."+d("fh-wrap")),i=Bs(e.mid);i?(o||(o=E.createElement("div"),o.className=d("fh-wrap"),t.insertBefore(o,n)),ae(o,i)):o&&o.remove();let r=t.querySelector(":scope > ."+d("ff-wrap")),s=Xn(e.mid);s?(r||(r=E.createElement("div"),r.className=d("ff-wrap"),r.dataset.footMid=e.mid,t.appendChild(r)),ae(r,s)):r&&r.remove()}function sn(t){let e=R();e&&e.querySelectorAll("."+d("ff-wrap")+'[data-foot-mid="'+t+'"]').forEach(n=>ae(n,Xn(t)))}function Yn(){let t=R();t&&t.querySelectorAll("."+d("ff-wrap")).forEach(e=>ae(e,Xn(+e.dataset.footMid)))}function Vo(t){let e=t.closest("."+d("thought")),n=!e.classList.contains(d("open"));e.classList.toggle(d("open"),n);let a=e.dataset.foldMid;a!=null&&(n?an.add(+a):an.delete(+a))}var Vs=()=>x.mode!=="idle"&&x.mode!=="editing",ze=[];function Me(){let t=ie();if(!t||(ze.forEach(a=>a.remove()),ze=[],Vs()))return;let e=z("tailHtml");if(!e)return;let n=E.createElement("template");n.innerHTML=e,ze=Array.from(n.content.children),ze.forEach(a=>t.appendChild(a))}function Uo(){x.mode==="idle"&&(Kn=!0,Ce+=S.windowSize,J(),Kn=!1)}function J(){let t=ie();if(t)try{Ce||(Ce=S.windowSize);let e=!t.querySelector(":scope > ."+d("turn")+"[data-mid]"),n=e||Zn(t),a=t.scrollTop,o=t.scrollHeight,i=lo();x.gen&&(i=i.filter(u=>u.message_id<=x.gen.baseline));let r=Math.max(0,i.length-Ce),s=i.slice(r),l=s.map(Rs).filter(u=>u.text||u.thought),c=new Set(s.map(u=>u.message_id));for(let u of oe.keys())c.has(u)||oe.delete(u);let p=new Set(l.map(u=>u.mid)),m=new Map;for(let u of Array.from(t.children)){if(u.dataset.streamGenid)continue;let v=u.dataset.mid==null?null:+u.dataset.mid;v!=null&&p.has(v)&&u.classList.contains(d("turn"))?m.set(v,u):ze.includes(u)||u.remove()}let g=t.firstElementChild;for(let u of l){let v=m.get(u.mid);v?v!==g?t.insertBefore(v,g):g=g.nextElementSibling:(v=Fs(u),t.insertBefore(v,g)),Gs(v,u);let D=x.mode==="deleting"&&u.mid>=1;v.classList.toggle(d("selable"),D),v.classList.toggle(d("delsel"),D&&x.del.has(u.mid))}if(r>0){let u=E.createElement("button");u.className=d("earlier"),u.textContent=b.earlier(r),u.disabled=x.mode!=="idle",t.insertBefore(u,t.firstChild)}Me(),i.length<=1&&(e||a===0)?t.scrollTop=0:n?t.scrollTop=t.scrollHeight:Kn?t.scrollTop=a+(t.scrollHeight-o):t.scrollTop=a,Ft()}catch(e){pt("正文渲染失败",e),t.childElementCount||I(b.renderFail)}}function I(t){let e=w(f.status);e&&(e.textContent=t||"")}function Wo(t,e,n){let a=ie();if(!a)return;let o=qo(e,{role:"assistant",streaming:!0,mid:null,message:null}),i=n||o.thought||"",r=Zn(a),s=a.querySelector(':scope > [data-stream-genid="'+t+'"]');s||(s=E.createElement("div"),s.className=d("turn")+" "+d(S.roleClass.ai),s.dataset.streamGenid=t,a.appendChild(s));let l=!o.main&&!!i;if(I(l?b.thinking:b.writing),l){s.classList.add(d("thinking-turn"));let c=z("thinkingHtml");ae(s,'<div class="'+d("thinking")+'">'+(c??b.thinkingAlt)+"</div>")}else(s.classList.contains(d("thinking-turn"))||!s.querySelector(":scope > ."+d("text")))&&(s.classList.remove(d("thinking-turn")),s.innerHTML=(i?Fo(i,null,!1):"")+'<div class="'+d("text")+'"></div>'),Go(s.querySelector(":scope > ."+d("text")),en(o.main||"…",!0));r&&(a.scrollTop=a.scrollHeight),Ft()}function Ko(){let t=ie();t&&t.querySelectorAll(":scope > [data-stream-genid]").forEach(e=>e.remove())}function Jn(t){return`<UpdateVariable>
<JSONPatch>
`+JSON.stringify(t)+`
</JSONPatch>
</UpdateVariable>`}function Qn(t,e){let n=[],a=!1,o=(i,r,s)=>{let l=new Set([...Object.keys(i||{}),...Object.keys(r||{})]);for(let c of l){if(/[/~]/.test(c)){a=!0;return}let p=s+"/"+c,m=i?i[c]:void 0,g=r?r[c]:void 0;_.isEqual(m,g)||(g===void 0?n.push({op:"remove",path:p}):m===void 0?n.push({op:"insert",path:p,value:g}):_.isPlainObject(m)&&_.isPlainObject(g)?o(m,g,p):typeof m=="number"&&typeof g=="number"?n.push({op:"delta",path:p,value:g-m}):n.push({op:"replace",path:p,value:g}))}};return o(t,e,""),a?null:n}var dn=t=>b.error+(t&&t.message?t.message:t),Xo=t=>t.isComposing||t.keyCode===229;function je(t){x.mode=t;let e=it(),n=w(f.textarea),a=w(f.send),o=w(f.regen),i=w(f.del);n&&(n.disabled=e),a&&(a.innerHTML=e?b.stopLabel:b.sendLabel,a.title=e?b.stop:b.send),o&&(o.disabled=e),i&&(i.disabled=e);let r=w(f.writing),s=w(f.delbar),l=w(f.paper);l&&(l.dataset.mode=t),r&&(r.style.display=t==="deleting"?"none":""),s&&s.classList.toggle(d("show"),t==="deleting")}function Oe(){je("idle"),st(),z("render"),J(),z("recheck")}function jt(){let t=w(f.textarea);t&&(t.style.height="auto",t.style.height=t.scrollHeight+2+"px",Ft())}function Pe(t){let e=w(f.textarea);e&&(e.value=t,jt(),e.focus())}async function Yo(t){let e=S.prefix+"_gen_"+Date.now()+"_"+Math.random().toString(36).slice(2),n=P(),a=n!=null?U(n):null,o=t==="regenerate"&&a&&a.role!=="user"?n-1:n;x.gen={id:e,baseline:o,stopped:!1},je("generating"),I(b.writing),J();let i="",r="",s=null,l=()=>{s=null,x.gen&&x.gen.id===e&&Wo(e,i,r)},c=()=>{s==null&&(s=requestAnimationFrame(l))},p=Eo(m=>{i=m,c()},m=>{r=m||r,c()});try{if(go())throw new Error(b.generating);await(t==="regenerate"?xo():uo());let m=P(),g=m!=null&&m>o?U(m):null;I(x.gen.stopped?b.stopped:g&&g.role!=="user"?"":b.noReply)}catch(m){let g=x.gen&&x.gen.stopped||m&&m.name==="AbortError";I(g?b.stopped:dn(m))}finally{p(),s!=null&&cancelAnimationFrame(s),x.gen=null,Ko(),Oe()}}async function re(t,e){if(x.mode==="editing"&&await lt(!0),x.mode!=="idle"||!t)return!1;let n=z("blockSend");if(n)return I(n),!1;x.stopAsked=!1,je("sending"),I(b.recording);try{let a=await fo(t);if(a==null)throw new Error(b.sendFail);if(e&&e.patch&&e.patch.length){try{await wo(a,Jn(e.patch))}catch(o){throw O("applyPatch",o),new Error(b.patchFail)}st(),z("render")}if(e&&e.onSent)try{e.onSent(a)}catch(o){O("onSent",o)}J(),rn()}catch(a){return I(dn(a)),Oe(),!1}return x.stopAsked?(I(b.stopped),Oe(),!0):(await Yo("normal"),!0)}async function Jo(){let t=w(f.textarea);if(!t||x.mode!=="idle"&&x.mode!=="editing")return;let e=t.value.trim();if(!e)return;t.value="",jt(),await re(e)||(t.value=e,jt())}function Us(){if(!it()){Jo();return}x.gen?(x.gen.stopped=!0,mo()):x.stopAsked=!0,I(b.stopping)}async function Qo(){if(x.mode==="editing"&&await lt(!0),x.mode!=="idle")return;let t=P();if(t==null||t<0)return;let e=U(t);if(e&&e.role!=="user"&&t===0){I(b.noRegenOpening);return}await Yo("regenerate")}var Dn=!1,ln=null,Zo=0,ta=()=>S.deleteMode==="tail";function cn(){Dn=!1,ln&&(clearTimeout(ln),ln=null);let t=x.del.size,e=w(f.delCount),n=w(f.delConfirm);e&&(e.textContent=t?ta()?b.delCountTail(t):b.delCount(t):ta()?b.delIdleTail:b.delIdle),n&&(n.disabled=!t,n.classList.remove(d("armed")),n.textContent=t?b.delBtn(t):b.delBtnIdle)}function Gt(t){(t?x.mode!=="idle":x.mode!=="deleting")||(x.del.clear(),je(t?"deleting":"idle"),cn(),I(""),J())}function Ws(t){if(ta()){let e=P(),n=x.del.size?Math.min(...x.del):null;if(x.del.clear(),n!==t&&e!=null&&t>=1)for(let a=t;a<=e;a++)x.del.add(a)}else x.del.has(t)?x.del.delete(t):x.del.add(t);cn(),J()}async function Ks(){if(x.mode==="deleting"){Gt(!1);return}if(x.mode==="editing"&&await lt(!0),x.mode!=="idle")return;let t=P();if(t==null||t<1){I(b.noFloor);return}Gt(!0)}async function Zs(){if(x.mode!=="deleting"||!x.del.size)return;let t=w(f.delConfirm);if(!Dn){Dn=!0,Zo=Date.now(),t&&(t.classList.add(d("armed")),t.textContent=b.delArmed(x.del.size)),ln=setTimeout(cn,3e3);return}if(Date.now()-Zo<300)return;let e=Array.from(x.del).sort((a,o)=>a-o);cn(),t&&(t.disabled=!0),I(b.deleting);let n=null;try{await ho(e)}catch(a){n=a}x.del.clear(),st(!0),Oe(),I(n?dn(n):"")}var pn=t=>t.role==="user"&&S.userEdit||{},Do=t=>pn(t).read?pn(t).read(t):String(t.message),Xs=(t,e)=>pn(t).write?pn(t).write(t,e):[{message_id:t.message_id,message:e}];function Ys(t,e){let n=Bo(t).trim().split(`
`)[0].slice(0,12);return n?e.lastIndexOf(n):-1}async function ti(t){if(x.mode==="editing"){if(x.edit.mid===t)return;await lt(!0)}if(x.mode!=="idle")return;let e=U(t);if(!e)return;let n=w(f.paper).querySelector("."+d("turn")+'[data-mid="'+t+'"]');if(!n)return;x.edit={mid:t,draft:Do(e)},je("editing"),n.classList.add(d("editing")),n.innerHTML='<div class="'+d("story-edit")+'"><textarea title="'+b.editTitle+'"></textarea><div class="'+d("story-edit-row")+'"><button class="'+d("edit-btn")+" "+d("edit-cancel")+'">'+b.editCancel+'</button><button class="'+d("edit-btn")+" "+d("primary")+" "+d("edit-save")+'">'+b.editSave+"</button></div></div>";let a=n.querySelector("textarea");a.value=x.edit.draft;let o=()=>{a.style.height="auto",a.style.height=a.scrollHeight+2+"px"};o(),a.addEventListener("input",()=>{x.edit&&(x.edit.draft=a.value),o()}),a.addEventListener("keydown",s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&!Xo(s)&&(s.preventDefault(),lt(!0))}),n.querySelector("."+d("edit-save")).addEventListener("click",()=>lt(!0)),n.querySelector("."+d("edit-cancel")).addEventListener("click",()=>lt(!1)),a.focus();let i=e.role==="user"?-1:Ys(t,a.value);if(i<0)a.setSelectionRange(a.value.length,a.value.length);else{let s=a.value;a.style.height="0px",a.value=s.slice(0,i);let l=a.scrollHeight;a.value=s,o(),a.setSelectionRange(i,i),a.scrollTop=Math.max(0,l-2*(parseFloat(a.ownerDocument.defaultView.getComputedStyle(a).lineHeight)||24))}I(b.editing);let r=n.firstElementChild;r.scrollIntoView&&r.scrollIntoView({block:"nearest"}),Ft()}async function lt(t){if(x.mode!=="editing"||!x.edit)return;let{mid:e,draft:n}=x.edit,a=String(n??"").trim();if(t&&a)try{let i=U(e);i&&a!==Do(i).trim()&&await bo(Xs(i,a))}catch(i){I(dn(i));return}x.edit=null;let o=w(f.paper)&&w(f.paper).querySelector("."+d("turn")+"."+d("editing"));o&&o.remove(),Oe(),I(t&&!a?b.editEmpty:"")}function ei(){let t=w(f.paper),e=w(f.textarea),n=w(f.send);if(!t||!e||!n){pt("骨架缺少 paper、textarea 或 send");return}let a=(o,i)=>{let r=w(o);r&&r.addEventListener("click",i)};t.addEventListener("scroll",Ft),t.addEventListener("click",o=>{if(o.target.closest("."+d("earlier"))){Uo();return}let i=o.target.closest("."+d("th-head"));if(i){Vo(i);return}if(x.mode==="deleting"){let s=o.target.closest("."+d("turn")+"[data-mid]");s&&+s.dataset.mid>=1&&Ws(+s.dataset.mid);return}let r=o.target.closest("."+d("pen"));if(r){ti(+r.closest("."+d("turn")).dataset.mid);return}z("onStoryClick",o)}),n.addEventListener("click",Us),a(f.jump,()=>rn(!it())),a(f.regen,Qo),a(f.del,Ks),a(f.delCancel,()=>Gt(!1)),a(f.delConfirm,Zs),e.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&!Xo(o)&&(o.preventDefault(),Jo())}),e.addEventListener("input",jt),jt()}function ni(){let e=S.escClosers.concat([Ao,{isOpen:()=>x.mode==="editing",close:()=>lt(!1)},{isOpen:()=>x.mode==="deleting",close:()=>Gt(!1)}]).find(n=>n.isOpen());return e&&e.close(),!!e}var se=!1;async function ft(){if(!(se||W())){se=!0;try{st(!0),tn(!0),ke(),ne(ft),z("render"),J(),jt(),await z("onEnter"),Te(!0)}catch(t){tn(!1),Te(!1),ne(ft),pt("进入全屏失败",t)}finally{se=!1}}}async function ai(){if(!(se||!W())){se=!0;try{x.mode==="editing"&&await lt(!0),x.mode==="deleting"&&Gt(!1),Te(!1),await z("onLeave")}catch(t){O("onLeave",t)}finally{tn(!1),ne(ft),se=!1}}}var na=()=>W()?ai():ft(),oi=()=>tt+"-shell-enter",fn=()=>"__"+tt.toUpperCase()+"_ENTER_FLAG";function ii(){try{window.parent[fn()]=!1}catch{}ft()}var ea=!1;function aa(){st(),!ea&&(ea=!0,setTimeout(()=>{ea=!1;try{if(!W()){ne(ft);return}if(z("render"),x.mode!=="idle")return;J(),z("recheck")}catch(t){pt("重画失败",t)}},0))}function Js(t,e){if(aa(),!e||!t||!W())return;let n=_.cloneDeep(e.stat_data);setTimeout(()=>{try{n&&t.stat_data&&z("onVars",t.stat_data,n)}catch(a){pt("onVars 出错",a)}},0)}async function oa(t){let e=await vo(t);return e&&(st(!0),aa()),e}function ri(t){if(!W())return;let e=t.target;e!==E.body&&e!==E.documentElement||(t.stopPropagation(),t.type==="keydown"&&si(t))}function Qs(t){si(t)}function si(t){try{if(t.key==="Escape"){ni()&&t.preventDefault();return}z("onKey",t)}catch(e){O("key",e)}}var li=["keydown","keyup","keypress"];async function Ds(){typeof waitGlobalInitialized=="function"&&await Promise.race([waitGlobalInitialized("Mvu"),new Promise(t=>setTimeout(t,15e3))])}async function tl(){try{await Ds()}catch(e){O("waitMvu",e)}ko({vars:Js})||pt("未等到 MVU，变量读数不会自动更新"),Io(),ei(),jo().addEventListener("keydown",Qs),li.forEach(e=>E.addEventListener(e,ri,!0)),window.parent.addEventListener(oi(),ii),S.entryButton&&So(S.entryButton,ft);let t=!1;try{t=!!window.parent[fn()],window.parent[fn()]=!1}catch(e){O("enterFlag",e)}z("render"),t?await ft():ne(ft)}function el(){try{li.forEach(t=>E.removeEventListener(t,ri,!0)),window.parent.removeEventListener(oi(),ii),W()&&(window.parent[fn()]=!0),Te(!1),No()}catch(t){O("pagehide",t)}}function ia(){let t=null;try{t=SillyTavern.getCurrentChatId()}catch(n){O("getChatId",n)}yo({change:aa,chat:n=>{if(t!==null&&t!==n)try{reloadIframe()}catch(a){O("reloadIframe",a)}else t=n}}),window.addEventListener("pagehide",el);let e=()=>tl().catch(n=>pt("启动失败",n));document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}var ci="<本轮用户输入>",nl="</本轮用户输入>",al="<meta:检定结果>";function pi(t){let e=t.lastIndexOf(ci);if(e<0)return null;let n=e+ci.length,a=t.indexOf(nl,n);if(a<0)return null;let o=t.indexOf(al,n);return[n,o>=0&&o<a?o:a]}function gn(t){let e=String(t),n=pi(e);return(n?e.slice(n[0],n[1]).trim():"")||e}function ra(t,e){let n=String(t),a=pi(n);return a?n.slice(0,a[0])+`
`+e+`
`+n.slice(a[1]):e}function un(t,e){let n=new RegExp(e.source,e.flags.includes("g")?e.flags:e.flags+"g"),a,o=null;for(;a=n.exec(t);)o=a,a[0].length||n.lastIndex++;return o}var fi="(?:think|thinking|konatan_planning(?:~[^<>\\s]*)?)",gi="<"+fi+"(?:\\s[^<>]*)?>",ol="</"+fi+"\\s*>",il=new RegExp(gi,"i"),rl=new RegExp(gi,"gi"),sl=new RegExp(ol,"i"),ll=/(?:^|\n)[ \t]*<content(?:\s[^<>]*)?>/gi;function ui(t){let e=un(t,ll);return e?{index:e.index+e[0].indexOf("<"),end:e.index+e[0].length}:null}function sa(t,e){let n=String(t),a=ui(n),o=a?n.slice(0,a.index):n,i=a?n.slice(a.index):"",r=un(o,sl);if(r)return{thought:o.slice(0,r.index),rest:o.slice(r.index+r[0].length)+i};let s=o.match(il);return s?{thought:o.slice(s.index+s[0].length),rest:o.slice(0,s.index)+i}:e&&!a&&n.trim()?{thought:n,rest:""}:{thought:"",rest:n}}function cl(t){return t.replace(rl,"").replace(/<!--[\s\S]*?-->/g,"").replace(/<\/[^<>\n]{1,40}>/g,"").replace(/<([^<>\n]{1,40})>/g,"$1").trim()}function la(t,e){return t?cl(sa(t,e).thought):""}var pl=["tucao","konatan_chat","danmu","options","disclaimer","guifan","htmlcontent","advice","IzumiEdit","current_event","progress","details","UpdateVariable","style","script"],dl=new RegExp("<("+pl.join("|")+")(?:\\s[^<>]*)?>[\\s\\S]*?(?:<\\/\\1\\s*>[ \\t]*\\r?\\n?|$)","gi"),xi=/<\/?[A-Za-z_一-鿿][\w\-~:.一-鿿]*(?:\s[^<>]*)?\/?>/g;function di(t,e){let n=t.replace(/<span[^<>]*display:\s*none[^<>]*>([\s\S]*?)<\/span>/gi,"$1").replace(dl,"").replace(/<!--[\s\S]*?(?:-->|$)/g,"").replace(/`?<done>`?|```(?:start|end)/gi,"").replace(/（第[^（）\n]*?楼）/g,"").replace(/<br\s*\/?>/gi,`
`).replace(xi,"");return e&&(n=n.replace(/<\/?[^<>\s]*$/,"")),n.replace(/^[ \t]*#{1,6}[ \t]+(?=\S)/gm,"").replace(/([」』])\{([^{}\n]+)\}/g,(a,o,i)=>"（"+i+"）"+o).replace(/^.*[぀-ヿ].*\{[^{}\n]+\}.*$/gm,a=>a.replace(/\{([^{}\n]+)\}/g,"（$1）")).replace(/\n{3,}/g,`

`).trim()}function ca(t,e){if(!t)return"";let n=sa(t,e).rest,a=ui(n);if(!a)return di(n,e);let o=n.slice(a.end),i=o.toLowerCase().indexOf("</content>");return di(i>=0?o.slice(0,i):o,e)}var fl=/^\s*>?\s*(?:选项[一二三四五六七八九十\d]+\s*[：:]|\d+\s*[.、):：]|[-*•])?\s*/;function mi(t){if(!t)return[];let e=sa(t,!1).rest,n=un(e,/<options(?:\s[^<>]*)?>([\s\S]*?)<\/options\s*>/i);return n?n[1].replace(xi,"").split(`
`).map(a=>a.replace(fl,"").trim()).filter(Boolean).slice(0,10):[]}var pa=["就按照最新的advice说的来吧，注意一下最新advice的内容还没实际发生，要从头开始执行最新的advice。","就按照advice说的来吧，注意一下advice内容还没实际发生，要从头开始执行advice。","按照advice继续吧。"],hi=/(<advice\b[^>]*>)((?:(?!<advice\b|<\/(?:konatan_planning(?:~[^>]*)?|details|script|think(?:ing)?)\s*>)[\s\S])*?)(<\/advice\s*>)/gi;function da(t){let e=t&&t.extra,n=e&&(e.izumi_advice||e.extra&&e.extra.izumi_advice);if(!n||n.version!==1||typeof n.text!="string")return null;let a=typeof n.replacementText=="string"&&!!n.replacementText.trim();return{text:n.text,revision:n.revision||0,replacementText:a?n.replacementText:pa[2]}}function xn(t){if(!t||t.role!=="user")return!1;let e=String(t.message),n=da(t);return n?e===n.replacementText||e.trim()===n.replacementText.trim():pa.includes(e.trim())}function bi(t){for(let e=t-1;e>=0&&e>=t-5;e--){let n=getChatMessages(e)[0];if(n&&n.role!=="user")return n}return null}function Ie(t,e){if(!xn(t))return String(t.message);let n=da(t);if(n)return n.text;let a=e===void 0?bi(t.message_id):e,o=a&&a.role!=="user"?un(String(a.message),hi):null;return o?o[2].trim():String(t.message)}function fa(t,e){let n=bi(t.message_id);if(!n)return[{message_id:t.message_id,message:e}];let a=String(n.message),o=Ie(t,n),i=Array.from(a.matchAll(hi)).reverse(),r=i.find(p=>p[2]===o)||i.find(p=>p[2].trim()===o.trim())||i[0],s=r?a.slice(0,r.index)+r[1]+e+r[3]+a.slice(r.index+r[0].length):a.replace(/\s*$/,"")+`

<advice>`+e+"</advice>",l=da(t),c={version:1,text:e,assistantId:n.message_id,revision:(l?l.revision:0)+1,replacementText:String(t.message)};return[{message_id:n.message_id,message:s},{message_id:t.message_id,message:String(t.message),extra:Object.assign({},t.extra||{},{izumi_advice:c})}]}function vi(t,e){if(e.role==="user"){let a=e.message?Ie(e.message):String(t);return $e(gn(a),e)}let n=Ae(t);return{thought:la(n,e.streaming),main:ca(n,e.streaming)}}var wi=t=>mi(Ae(t)),mn={read:t=>gn(Ie(t)),write:(t,e)=>xn(t)?fa(t,e):[{message_id:t.message_id,message:ra(t.message,e)}]};var yi=!1;function ki(t){if(yi)return;yi=!0;let e=ao.map($),n=new Set,a=()=>{if(!e.length)return;if(t()){setTimeout(a,300);return}let o=e.shift(),i=E.createElement("img");i.onload=a,i.onerror=()=>{if(n.has(o)){a();return}n.add(o),setTimeout(()=>{e.push(o),a()},3e3)},i.src=o};for(let o=0;o<oo;o++)a()}var gl=wt,Si=`
/* ==== 配色（长安炭墨黑金朱为底，藏地换肤见下） ==== */
#tan-shell-root {
  /* 字阶九档，见 docs/前端速记.md */
  --fs-title: 28px; --ls-title: 14px;
  --fs-head: 20px; --ls-head: 5px;
  --fs-plaque: 17px; --ls-plaque: 7px;
  --fs-name: 15.5px; --ls-name: 3px;
  --fs-label: 12.5px; --ls-label: 3px;
  /* 正文字号只此一档；窄屏基准另见 phone.js */
  --fs-body: 17.5px;
  --fs-read: 13.5px; --ls-read: .5px;
  --fs-tag: 12px; --ls-tag: 2px;
  --fs-btn: 13.5px; --ls-btn: 2px; --fs-btn-lg: 16px; --ls-btn-lg: 6px;
  /* 三档时长＋两条曲线，全前端不得另写数字 */
  --t-fast: .16s; --t-mid: .28s; --t-slow: .48s;
  --ease-out: cubic-bezier(.22,.61,.36,1);
  --ease-paper: cubic-bezier(.16,.84,.3,1);
  /* ==== 炭墨黑金朱：五层黑取中性石墨不带暖意，免得金字与底同色系难分（底 < 纸 < 窗 < 卡）／三档字／四档金／一种红，全壳颜色只许引用此处 ==== */
  --bg0: #0d0d0e;
  --bg1: #19191b;
  --bg2: #1d1d20;
  --bg3: #212124;
  --bg4: #29292d;
  --txt: #e8e4dc;
  --txt-dim: #a6a29a;
  --txt-faint: #6e6c68;
  --gold-say: #e3c47a;
  --gold-hi: #c4a563;
  --gold: #a68a4d;
  --gold-line: #5e5032;
  --gold-rgb: 166,138,77;
  --red: #e0362a;
  --red-soft: #b5281f;
  --red-rgb: 224,54,42;
  --on-red: #f6ecd8;
  /* 敕字金：敕印上的那一字，炭墨与对白金同色 */
  --chi: #e3c47a;
  /* 字压金：金底钮悬停时钮上的字，取纸或框的底色 */
  --on-gold: #0d0d0e;
  /* 凹面：缩略图下状态整表比底再沉一层 */
  --sunk: color-mix(in srgb, var(--bg0) 60%, #000);
  /* 阴影色：全壳投影只许引用此处，浅底主题换青灰 */
  --sh-rgb: 0,0,0;
  /* 藏纸上的墨：信笺是壳里唯一的亮纸面，纸上字用墨色不用象牙 */
  --paper-ink: #3b2f21;
  --paper-ink-dim: #6e5b43;
  --paper-ink-rgb: 59,47,33;
  /* 藏纸纹框双线：藏青内线、赭石外线，纸不换肤故两主题同色 */
  --paper-line-in: rgba(64,80,110,.34);
  --paper-line-out: rgba(150,90,56,.42);
  --line: rgba(var(--gold-rgb), .28);
  --line-soft: rgba(var(--gold-rgb), .14);
  --scrim: rgba(0,0,0,.62);
  /* 底纹只此一种：灰度墨云纹以 overlay 叠在侧栏顶栏，似有似无，两主题同值；浮窗与纸面永不加纹 */
  --tex: url('${gl}bg-ink.webp');
  --tex-op: .12;
  --read-col: 700px;
  /* 侧栏宽：壳宽不足 1080 时 240，以上 260 起、随壳宽放到 420（cqw 在用到它的侧栏上按壳根算）；玩家拖过之后内核把这个变量写在壳根上盖掉 */
  --side-w: max(min(22cqw, 420px), min(260px, max(240px, (100cqw - 1079px) * 20)));
  /* 窄屏抽屉八成宽，内核按它滑出并把正文推开；两栏开合过渡跟本卡的节奏 */
  --drawer-w: min(80cqw, 380px);
  --frame-dur: var(--t-slow); --frame-ease: var(--ease-paper);
  --top-h: 64px;
  --bar-tot: calc(60px + env(safe-area-inset-bottom, 0px));
  /* 断点走容器查询：外壳本身即视口，预览页可框定外壳尺寸直接看 */
  container-type: size; container-name: tan;
}

/* ==== 藏地「藏青框＋藏纸面」：进藏在途／久住整壳换肤（09-board.js applyTheme 挂 .tan-xue）。框深纸浅两面：侧栏顶栏藏青深底，正文与浮窗暖米藏纸；纸面令牌在此块，框面令牌在下一块只挂深底容器，靠继承换字色不改结构 ==== */
#tan-shell-root.tan-xue {
  --bg0: #1f2a36;
  --bg1: #f4efe4;
  --bg2: #f9f5ec;
  --bg3: #e4dccb;
  --bg4: #fcf9f2;
  --txt: #2c2620;
  --txt-dim: #5b5142;
  --txt-faint: #8a7f6e;
  --gold-say: #5e4818;
  --gold-hi: #66501a;
  --gold: #9a7f30;
  --gold-line: #cbb97e;
  --gold-rgb: 154,127,48;
  --red: #a3302b;
  --red-soft: #7f2521;
  --red-rgb: 163,48,43;
  --on-red: #f7efe4;
  --chi: #f0d68a;
  --on-gold: #f4efe4;
  --sunk: #161e27;
  --sh-rgb: 31,42,54;
  --line: rgba(var(--gold-rgb), .34);
  --line-soft: rgba(var(--gold-rgb), .18);
  --scrim: rgba(var(--sh-rgb), .62);
}
/* 框面：深底容器（侧栏／顶栏／浮窗题签／图上小签／立绘空格）内字与金翻亮 */
#tan-shell-root.tan-xue :is(.tan-side, .tan-topbar, #tan-lift .tan-held h3, .tan-atlas .tan-lbl, .tan-atlas .tan-stop, .tan-atlas .tan-abroad-mark, .tan-cell.tan-blank i, .tan-cell.tan-lock i) {
  --bg3: #2a3644;
  --txt: #e8e1d3;
  --txt-dim: #aeb4bd;
  --txt-faint: #727d8a;
  --gold-say: #d9bd77;
  --gold-hi: #d9bd77;
  --gold: #b39a5a;
  --gold-line: #5c5a48;
  --gold-rgb: 179,154,90;
  --red: #e4574b;
  --red-soft: #b5281f;
  --red-rgb: 228,87,75;
  --on-gold: #1f2a36;
  --sunk: #161e27;
  --sh-rgb: 0,0,0;
  --line: rgba(var(--gold-rgb), .28);
  --line-soft: rgba(var(--gold-rgb), .14);
}

/* 钮与输入件的行高不随所在的正文段落走 */
button, input, textarea, select { line-height: normal; }
/* 图与图标按块排，图不可拖选 */
svg { display: block; overflow: visible; }
img { display: block; -webkit-user-drag: none; user-select: none; }

/* ==== 整体两栏 ==== */
/* 壳根铺满全屏层（铺位与层级在内核的底层样式里），壳内浮层一律以它为包含块 */
#tan-shell-root {
  position: relative;
  font-family: 'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif;
  color: var(--txt); font-size: 16px; -webkit-locale: 'zh';
  background-color: var(--bg1);
  transition: background-color var(--t-slow) var(--ease-out), color var(--t-slow) var(--ease-out);
}
.tan-side, .tan-topbar, .tan-main, #tan-lift .tan-held { transition: background-color var(--t-slow) var(--ease-out), color var(--t-slow) var(--ease-out); }
/* 底纹叠层：只挂侧栏顶栏两面（.tan-tex），子元素须提到其上 */
.tan-tex { position: relative; isolation: isolate; }
.tan-tex::before { content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: var(--tex) 0 0 / 1024px 1024px repeat; mix-blend-mode: overlay; opacity: var(--tex-op); }
.tan-tex > *, .tan-top-body > * { position: relative; z-index: 1; }
/* 滚动条：槽宽 9px 占位不变（正文列对齐靠它），槽内不画轨道，只一条 3px 淡金细杆，悬停才亮 */
#tan-shell-root ::-webkit-scrollbar { width: 9px; height: 9px; }
#tan-shell-root ::-webkit-scrollbar-corner, #tan-shell-root ::-webkit-scrollbar-track { background: transparent; }
#tan-shell-root ::-webkit-scrollbar-thumb { min-height: 48px; border: 3px solid transparent;
  background-clip: padding-box; border-radius: 5px;
  background-color: color-mix(in srgb, var(--gold) 38%, transparent); }
#tan-shell-root ::-webkit-scrollbar-thumb:hover { background-color: color-mix(in srgb, var(--gold) 70%, transparent); }
/* 禁用态光标总规则：表单件与钮走原生 disabled，非表单件走 .tan-off（.tan-lock／.tan-locked 同义） */
#tan-shell-root [disabled], #tan-shell-root .tan-off, #tan-shell-root .tan-lock, #tan-shell-root .tan-locked { cursor: not-allowed; }

`;var Ei=`
/* ==== 侧栏骨架 ==== */
.tan-side {
  width: var(--side-w); flex: none; display: flex; flex-direction: column;
  /* 栏底留白 16 加目录末条内边距 10，等于题字下缘到舆图上缘那段（间距 12 加匾额半个余量） */
  padding: 8px 11px 16px; gap: 12px; overflow: hidden;
  background: var(--bg0);
  border-right: 1px solid var(--line);
}

/* 栏头题字：不加线（暗底上的横线与界面分隔线撞车），只靠亮金字与字距立住 */
.tan-plaque {
  position: relative;
  flex: none; display: flex; align-items: center; justify-content: center;
  height: 44px; color: var(--gold-hi);
  font-size: var(--fs-plaque); letter-spacing: var(--ls-plaque); text-indent: var(--ls-plaque);   /* 抵消末字字距，题字真居中 */
  font-weight: 600;
}
/* 侧栏开关（内核画的两枚）：描线图标，与顶栏右端工具栏同族。栏顶那枚贴题字行右端；顶栏那枚贴左，不占读数框；层级要压过同一面上的题字行与读数框 */
.tan-side > .tan-side-btn, .tan-topbar > .tan-top-btn { position: absolute; z-index: 2; width: 30px; height: 30px; padding: 6px; cursor: pointer;
  color: var(--txt-faint); opacity: .7; transition: opacity var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out); }
.tan-side > .tan-side-btn { top: 15px; right: 11px; }
.tan-topbar > .tan-top-btn { left: 30px; top: 50%; translate: 0 -50%; }
.tan-side > .tan-side-btn:hover, .tan-topbar > .tan-top-btn:hover { opacity: 1; color: var(--gold-hi); }
.tan-side-btn svg, .tan-top-btn svg { display: block; width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
/* 顶栏那枚里的第二支图标是返回箭头，只在窄屏窗开着时换上 */
.tan-top-btn svg:last-child { display: none; }
/* 拖宽把手与窄屏抽屉推开后盖在正文上的遮罩 */
.tan-grip:hover::after, .tan-resizing .tan-grip::after { background: rgba(var(--gold-rgb), .22); }
.tan-scrim { background: var(--scrim); }

/* ==== 舆图缩略（侧栏舆图一组） ==== */
#tan-minimap { flex: none; cursor: pointer; transition: translate var(--t-fast) var(--ease-out); }
#tan-minimap:hover { translate: 0 -2px; }
#tan-minimap .tan-map-wrap { position: relative; border: 1px solid var(--gold-line); }
#tan-minimap .tan-map-wrap img { width: 100%; display: block; filter: brightness(.86) saturate(.85); }
/* 三态缩略同高：长安全景 3:2 原比例；逻些方图裁中段成 3:2（钉点纵坐标在 minimapView 换算）；驿路长卷 5:2 窄条 */
#tan-minimap .tan-map-wrap img[data-mode="lhasa"] { aspect-ratio: 3 / 2; object-fit: cover; }
/* 图内暗角压边，钉子提到暗角之上 */
#tan-minimap .tan-map-wrap::after { content: ''; position: absolute; inset: 0; pointer-events: none;
  box-shadow: inset 0 0 40px rgba(var(--sh-rgb),.55); }
/* 坐标对应 map-panorama.webp 上的南郊寺庙，换图必须重标 */
#tan-minimap .tan-map-pin { position: absolute; z-index: 1; left: 54%; top: 85%; width: 9px; height: 9px; border-radius: 50%;
  background: var(--red); border: 1.5px solid var(--on-red); box-shadow: 0 0 6px var(--red); }
#tan-minimap .tan-map-pin::after { content: attr(data-label); position: absolute; left: 13px; top: -4px;
  font-size: 10.5px; letter-spacing: 1px; color: var(--txt-dim); white-space: nowrap;
  background: var(--bg3); padding: 1px 5px; }
/* ==== 舆图下状态整表：地界／灭佛大势，行式统一 ==== */
#tan-minimap .tan-doom { background: var(--sunk);
  border: 1px solid var(--gold-line); border-top: 0; padding: 6px 10px 8px; }
.tan-doom .tan-sr-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  font-size: 12.5px; line-height: 1.9; letter-spacing: 2px; color: var(--txt-dim); white-space: nowrap; }
.tan-doom .tan-sr-row + .tan-sr-row { border-top: 1px solid rgba(var(--gold-rgb), .12); }
.tan-doom .tan-sr-row span { flex: none; }
.tan-doom .tan-sr-row b { min-width: 0; text-align: right; letter-spacing: .5px; font-weight: 500;
  color: var(--txt); overflow: hidden; text-overflow: ellipsis; }
.tan-doom .tan-sr-row b.tan-red { color: var(--red); }
.tan-doom .tan-sr-row b.tan-dim { color: var(--txt-faint); opacity: .6; }
.tan-doom .tan-sr-row b .tan-loc-sub { font-style: normal; margin-left: 8px; }

/* ==== 玩法入口目录（一列六条，条间不画线：图标、名、小字三层加留白已足够分开） ==== */
/* 条高随屏高：目录有余量时六条均分撑高、到 84px 封顶，余量不足时不缩只滚（flex-shrink 0） */
.tan-nav { flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 1px; padding-top: 2px; overflow-y: auto; }
.tan-nav-item { position: relative; flex: 1 0 auto; max-height: 84px; display: flex; align-items: center; gap: 10px; padding: 10px 9px 10px 8px; cursor: pointer;
  border-left: 3px solid transparent;
  transition: background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out); }
.tan-nav-ico { width: 26px; height: 26px; flex: none; display: flex; align-items: center; justify-content: center; }
.tan-nav-ico img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 2px 3px rgba(var(--sh-rgb),.5)); }
.tan-nav-main { flex: 1; min-width: 0; }
.tan-nav-lab { display: block; font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--gold);
  white-space: nowrap; transition: color var(--t-fast) var(--ease-out); }
.tan-nav-sub { display: block; margin-top: 2px; font-size: 11.5px; letter-spacing: 1px; color: var(--txt-dim);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tan-nav-item:not(.tan-locked):hover { background: linear-gradient(90deg, rgba(var(--red-rgb), .07), transparent 85%); border-left-color: rgba(var(--red-rgb), .5); }
.tan-nav-item:not(.tan-locked):hover .tan-nav-lab { color: var(--gold-hi); }
.tan-nav-item.tan-on { background: linear-gradient(90deg, rgba(var(--red-rgb), .14), transparent 70%);
  border-left-color: var(--red); }
.tan-nav-item.tan-on .tan-nav-lab { color: var(--gold-hi); }

/* 锁条：整行减淡，位置不空出、不重排 */
.tan-nav-item.tan-locked { cursor: not-allowed; }
.tan-nav-item.tan-locked .tan-nav-ico img { filter: grayscale(1) opacity(.4); }
.tan-nav-item.tan-locked .tan-nav-lab { color: var(--txt-faint); }
.tan-nav-item.tan-locked .tan-nav-sub { color: var(--txt-faint); }
.tan-nav-lock:empty { display: none; }
.tan-nav-lock { width: 13px; height: 13px; flex: none; color: var(--txt-faint); }
.tan-nav-lock svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6;
  stroke-linecap: round; stroke-linejoin: round; }
@keyframes tan-unveil { 0% { background: rgba(var(--gold-rgb), 0); }
  25% { background: rgba(var(--gold-rgb), .3); }
  100% { background: rgba(var(--gold-rgb), 0); } }
.tan-nav-item.tan-unveil { animation: tan-unveil 2.4s var(--ease-out); }

/* ==== 工具栏（顶栏右端 flex 项，读数框自动让位） ==== */
#tan-corner { flex: none; display: flex; align-items: center; gap: 4px; }
#tan-corner button { width: 30px; height: 30px; border: none; background: none; cursor: pointer; padding: 6px;
  color: var(--txt-faint); opacity: .7; transition: opacity var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out); }
#tan-corner button:hover { opacity: 1; color: var(--gold-hi); }
#tan-corner button.tan-on { opacity: 1; color: var(--gold-hi); }
#tan-corner button svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }

`;var le=wt,Li=`
/* ==== 卷首机件：更早哨兵 ==== */
.tan-earlier { display: block; margin: -8px auto 20px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12px; letter-spacing: 2px; color: var(--txt-faint); padding: 4px 12px;
  transition: color var(--t-fast) var(--ease-out); }
.tan-earlier:not([disabled]):hover { color: var(--gold-hi); }
.tan-earlier[disabled] { opacity: .5; }

/* ==== 楼首思维链折叠条 ==== */
.tan-thought { display: flow-root; margin: -4px 0 14px; }
/* 每则右上角的楼角（楼号在左、改写钮在右）：靠右浮着，折叠条与正文给它让位；折叠条左边补同宽，印记仍在正中 */
.tan-ftools { float: right; display: flex; align-items: center; gap: 2px; margin: 4px 0 0 8px; }
.tan-fno { min-width: 28px; text-align: right; font-size: 11px; letter-spacing: .5px; color: var(--txt-faint); opacity: .75; font-variant-numeric: tabular-nums; user-select: none; -webkit-user-select: none; }
.tan-pen { width: 26px; height: 26px; padding: 5px; cursor: pointer; color: var(--txt-faint); opacity: .6;
  transition: color var(--t-fast) var(--ease-out), opacity var(--t-fast) var(--ease-out); }
.tan-pen svg { display: block; width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.tan-pen:hover { color: var(--gold-hi); opacity: 1; }
.tan-ftools:has(+ .tan-thought) { margin-top: -3px; }
.tan-ftools + .tan-thought { padding-left: 64px; }
.tan-ftools + .tan-fh-wrap { clear: both; }
.tan-th-head { width: 100%; display: flex; align-items: center; gap: 10px; border: none; background: none;
  cursor: pointer; padding: 4px 0; color: var(--txt-faint); opacity: .7; transition: color var(--t-fast) var(--ease-out), opacity var(--t-fast) var(--ease-out); }
.tan-th-head:hover { color: var(--gold-hi); opacity: 1; }
.tan-th-head .tan-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.tan-th-head .tan-rule.tan-r { background: linear-gradient(90deg, var(--line), transparent); }
.tan-th-head img { width: 19px; height: 19px; flex: none; opacity: .78; transition: opacity var(--t-fast) var(--ease-out), scale var(--t-fast) var(--ease-out); }
.tan-th-head:hover img, .tan-thought.tan-open .tan-th-head img { opacity: 1; scale: 1.08; }
.tan-th-body { display: none; white-space: normal; margin: 4px 20px 2px; padding: 8px 16px; font-size: 13px; line-height: 2;
  letter-spacing: .3px; color: var(--txt-faint); border-left: 2px solid var(--line-soft); }
.tan-thought.tan-open .tan-th-body { display: block; animation: tan-reveal var(--t-mid) var(--ease-out) both; }

/* ==== 章头图（换地那一楼，思维链下正文上，3:1 横幅，地名 HTML 叠左下） ==== */
.tan-scene { margin: 0 0 14px; cursor: pointer; }
/* 节令横幅只看不点，与章头图同幅同注 */
.tan-scene.tan-fest { cursor: default; }
.tan-scene img { display: block; width: 100%; aspect-ratio: 3 / 1; object-fit: cover; background: var(--bg1); opacity: 0; transition: opacity var(--t-slow) var(--ease-out); }
.tan-scene img.tan-loaded { opacity: 1; }
.tan-scene figcaption { margin-top: 5px; text-align: right; font-size: 11px; letter-spacing: 3px; color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
.tan-scene[data-open-atlas]:hover figcaption { color: var(--gold-hi); }

/* ==== 行动选项（末楼下方一列，点击即发送） ==== */
.tan-opts { margin: 2px 0 12px; }
.tan-opt-head { display: flex; align-items: center; gap: 12px; font-size: 11px; letter-spacing: 4px; text-indent: 4px;
  color: var(--txt-faint); margin-bottom: 6px; }
.tan-opt-head i { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.tan-opt-head i:last-child { background: linear-gradient(90deg, var(--line), transparent); }
.tan-opt { display: flex; width: 100%; align-items: baseline; gap: 11px; border: none; background: none;
  cursor: pointer; font-family: inherit; text-align: left; padding: 5px 10px; font-size: 14.5px;
  letter-spacing: .5px; color: var(--txt-dim); line-height: 1.8; transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.tan-opt:hover { color: var(--gold-hi); background: rgba(var(--gold-rgb), .06); }
.tan-opt .tan-num { flex: none; width: 19px; height: 19px; display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; color: var(--txt-faint); border: 1px solid var(--line); translate: 0 2px;
  transition: all var(--t-fast) var(--ease-out); }
.tan-opt:hover .tan-num { color: var(--on-gold); background: var(--gold-hi); border-color: var(--gold-hi); }

/* ==== 楼尾静默行（变量牌居左＋心声名签居右） ==== */
.tan-ff { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 12px 0 14px; }
/* 基准 0＋min-content 下限：单枚变量牌塞不进名签旁边时右块才整块换行，不叫牌面压到名签上 */
.tan-ff-vars { flex: 1 1 0; min-width: min-content; display: flex; flex-wrap: wrap; align-items: center; gap: 2px 10px; }
.tan-ff-side { flex: none; margin-left: auto; display: flex; align-items: center; gap: 10px; }
.tan-ff .tan-ff-label { font-size: 11px; letter-spacing: 2px; color: var(--txt-faint); }
.tan-ff-var { display: inline-flex; flex: none; white-space: nowrap; align-items: baseline; gap: 5px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12px; letter-spacing: 1px; color: var(--txt-dim); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
.tan-ff-var:hover { color: var(--gold-hi); }
.tan-ff-var .tan-dv { display: inline-flex; align-items: center; gap: 1px; font-weight: 600; }
.tan-ff-var .tan-dv svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 2;
  stroke-linecap: round; stroke-linejoin: round; }
.tan-ff-var .tan-dv.tan-up { color: var(--red); }
.tan-ff-var .tan-dv.tan-down { color: var(--txt-faint); }
.tan-ff-detail { display: none; margin: -8px 0 14px; padding: 5px 14px; font-size: 12.5px; letter-spacing: 1px;
  color: var(--txt-dim); border-left: 2px solid var(--line-soft); }
.tan-ff-detail.tan-show { display: block; animation: tan-reveal var(--t-mid) var(--ease-out) both; }
.tan-ff-detail b { color: var(--gold-hi); font-weight: 600; }
.tan-ff-voice { display: inline-flex; align-items: center; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12.5px; letter-spacing: 1px; color: var(--txt); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
/* 新语红点：楼尾整行共用一枚，不逐人配点 */
.tan-ff-side > .tan-dot { width: 7px; height: 7px; border-radius: 50%; flex: none; background: var(--red);
  box-shadow: 0 0 6px var(--red); animation: breathe 2.6s ease-in-out infinite; }
@keyframes breathe { 0%,100% { opacity: .95; } 50% { opacity: .4; } }
.tan-ff-voice:hover, .tan-ff-voice.tan-open { color: var(--gold-hi); }
/* 心声卡：花押叠印右下角 */
.tan-vc { display: none; gap: 14px; padding: 17px 22px 16px; margin: 0 0 22px;
  position: relative; background: var(--bg3); border: 1px solid var(--line);
  filter: drop-shadow(0 5px 14px rgba(var(--sh-rgb),.28)); }
.tan-vc.tan-show { display: flex; animation: tan-reveal var(--t-slow) var(--ease-paper) both; }
/* 花押：白芷＝苏白芷、石榴＝萧夜沉、幽兰＝裴清砚、桃花＝叶玄薇；赤玛央金暂借桃花，专属花押待出 */
.tan-vc::after { content: ''; position: absolute; right: 24px; bottom: 16px; width: 44px; height: 44px;
  background: var(--stamp) center / contain no-repeat;
  opacity: .55; mix-blend-mode: normal; pointer-events: none; }
.tan-vc.tan-su   { --stamp: url('${le}stamp-angelica.webp'); }
.tan-vc.tan-xiao { --stamp: url('${le}stamp-pomegranate.webp'); }
.tan-vc.tan-pei  { --stamp: url('${le}stamp-orchid.webp'); }
.tan-vc.tan-ye   { --stamp: url('${le}stamp-peach.webp'); }
.tan-vc.tan-chi  { --stamp: url('${le}stamp-gesang.webp'); }
.tan-vc-img { flex: none; width: 118px; aspect-ratio: 832 / 1216; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg3);
  outline: 1px solid var(--line); }
.tan-vc-img span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: var(--txt-faint); }
.tan-vc-main { flex: 1; min-width: 0; }
.tan-vc-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 7px;
  font-size: 14.5px; letter-spacing: 2px; font-weight: 600; color: var(--txt); }
.tan-vc-tabs { display: inline-flex; gap: 10px; font-size: 11.5px; letter-spacing: 2px; color: var(--txt-faint); font-weight: 400; }
.tan-vc-tabs button { border: none; background: none; cursor: pointer; font-family: inherit; font-size: inherit;
  letter-spacing: inherit; color: var(--txt-faint); padding: 2px 3px; transition: color var(--t-fast) var(--ease-out); }
.tan-vc-tabs button.tan-on, .tan-vc-tabs button:hover { color: var(--gold-hi); }
.tan-vc-text { font-size: 13.5px; line-height: 2; color: var(--txt-dim); }
/* 回想页只渲染最近一条回想，旧条目不进此卡 */
.tan-vc.tan-memoir .tan-vc-text { display: none; }
.tan-vc-memos { display: none; }
.tan-vc.tan-memoir .tan-vc-memos { display: block; }
.tan-vc-memo { font-size: 13.5px; line-height: 2; color: var(--txt-dim); }
.tan-vc-memo b { font-weight: 600; letter-spacing: 1px; color: var(--gold-hi); }
.tan-vc-empty { font-size: 13.5px; line-height: 2; color: var(--txt-faint);
  border-left: 2px solid rgba(var(--gold-rgb), .3); padding-left: 12px; }

/* ==== 主区纸面（顶栏一条横边，其下正文列居中；正文与书写区共用同一张纸） ==== */
.tan-main { flex: 1; min-width: 0; display: flex; flex-direction: column; position: relative;
  /* 正文列两侧总留白：宽屏把列锁在 --read-col，窄屏退到左右各 48 */
  --col-side: max(48px, calc((100% - var(--read-col)) / 2));
  color: var(--txt);
  background: var(--bg1); }

/* ==== 顶栏（桌面端三项读数整组居中于整张纸，工具栏绝对定位贴右不占读数框；纸上只此一条横带） ==== */
.tan-topbar { position: relative; flex: none; height: var(--top-h); display: flex; align-items: center; gap: 22px; padding: 0;
  background: var(--bg0); border-bottom: 1px solid var(--line); }
/* 模板给顶栏内容包的那一层不成盒，读数与工具栏仍直接排在顶栏里 */
.tan-top-body { display: contents; }
.tan-topbar #tan-corner { position: absolute; right: 30px; top: 50%; translate: 0 -50%; }
/* 读数框铺满顶栏、内容居中；左右留白与滚动条预留槽照抄正文纸（#tan-paper），读数中线才严格落在正文列中线上；overflow:hidden 顺带裁掉溢出读数 */
.tan-tb-face { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: center; gap: 40px;
  overflow: hidden; scrollbar-gutter: stable both-edges; padding: 0 calc(var(--col-side) - 9px); height: 100%; }
.tan-tb-set { display: flex; align-items: center; gap: 40px; min-width: 0; }
/* 一行账头：标签金常规体在前、值象牙粗体在后，桌面 15px（手机 12）、同 .5 字距，标签与值固定隔 5；三项同式；桌面端不画竖线，组间靠 40 空隔开；桌面端值一律象牙不标金 */
.tan-tb-time { position: relative; flex: none; display: flex; flex-direction: row; align-items: baseline; gap: 5px;
  font-size: 15px; line-height: 1.2; letter-spacing: .5px; text-indent: 0; color: var(--gold); font-weight: 400; white-space: nowrap; }
.tan-tb-time b { text-indent: 0; color: var(--txt); font-weight: 700; }
.tan-tb-time.tan-dim { color: var(--txt-faint); font-weight: 500; }
.tan-tb-i { position: relative; flex: none; display: flex; flex-direction: row; align-items: baseline; gap: 5px;
  font-size: 15px; line-height: 1.2; letter-spacing: .5px; text-indent: 0; color: var(--gold); font-weight: 400; white-space: nowrap; }
.tan-tb-i b { text-indent: 0; color: var(--txt); font-weight: 700; }

/* 槽宽 9px（见 tokens.js）两边各占一道，从总留白里扣掉，正文列才与书写区左右对齐 */
#tan-paper { flex: 1; min-height: 0; overflow-y: auto; scrollbar-gutter: stable both-edges;
  padding: 48px calc(var(--col-side) - 9px) 32px; }
.tan-turn { margin-bottom: 22px; }
/* 正文左对齐不两端对齐：汉字等宽，两端对齐会把行尾空隙摊进字距，窄行上下行字距忽宽忽窄；不用 text-wrap: pretty，iOS Safari 会为匀右缘主动让每行少排一两字 */
.tan-turn.tan-gm { line-height: 2.0; font-size: var(--fs-body); letter-spacing: .3px; color: var(--txt); line-break: strict; text-align: start; }
/* 段宽取字宽（字号＋字距）的整数倍并居中：左对齐时不足一字的行尾余量两边各分一半，不在右侧堆成一条空列 */
.tan-turn.tan-gm p { width: round(down, 100%, calc(var(--fs-body) + .3px)); margin-inline: auto; }
.tan-turn.tan-gm p + p { margin-top: .9em; }
.tan-quote { color: var(--gold-say); }
.tan-inner { color: var(--txt-dim); }
/* 谕印随文跟在末行之后（款后钤印），各行右齐纸边不为印让列 */
.tan-turn.tan-zhu { text-align: right; color: var(--txt); font-size: var(--fs-body); line-height: 2.0; letter-spacing: .3px; padding-right: 2px; }
.tan-turn.tan-zhu.tan-editing::after { content: none; }
.tan-turn.tan-zhu::after { content: '谕'; display: inline-block; margin-left: 10px; font-size: 16px; color: var(--on-red);
  width: 24px; height: 24px; line-height: 24px; text-align: center;
  background: var(--red); border-radius: 4px; translate: 0 -2px; opacity: .82; }

/* ==== 卷末机件：状态行／删除模式条／回到最新钮 ==== */
#tan-status { flex: none; text-align: center; font-size: 12px; letter-spacing: 3px; text-indent: 3px;
  color: var(--txt-faint); padding: 3px var(--col-side) 0; }
#tan-status:empty { display: none; }
#tan-delbar { display: none; align-items: center; justify-content: center; gap: 16px; padding: 9px var(--col-side) 13px;
  font-size: 12.5px; letter-spacing: 2px; color: var(--txt-dim); }
#tan-delbar.tan-show { display: flex; }
#tan-delbar button { border: 1px solid var(--line); background: none; cursor: pointer; font-family: inherit;
  font-size: 12px; letter-spacing: 2px; text-indent: 2px; color: var(--txt-dim); padding: 3px 12px;
  transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out); }
#tan-delbar button:not([disabled]):hover { color: var(--on-gold); background: var(--gold-hi); border-color: var(--gold-hi); }
/* 删楼是不可逆的动作，确认钮走朱 */
#tan-delbar button.tan-danger { color: var(--red); border-color: rgba(var(--red-rgb), .55); }
#tan-delbar button.tan-danger:not([disabled]):hover { color: var(--on-red); background: var(--red); border-color: var(--red); }
#tan-delbar button[disabled] { opacity: .45; }
/* 木鱼中心对齐敕印中心：敕印宽 46 右缘贴 col-side，木鱼宽 34，故左移 23+17 */
#tan-jump { position: absolute; z-index: 5; bottom: 84px; left: calc(100% - var(--col-side) - 40px);
  width: 34px; height: 62px; border: none; padding: 0; cursor: pointer; display: none;
  background: url('${le}hanging-fish.webp') center / contain no-repeat;
  filter: drop-shadow(0 4px 8px rgba(var(--sh-rgb),.4));
  transform-origin: top center; transition: filter var(--t-fast) var(--ease-out), rotate var(--t-mid) var(--ease-out); }
#tan-jump.tan-show { display: block; animation: tan-reveal var(--t-mid) var(--ease-out) both; }
#tan-jump:hover { filter: drop-shadow(0 6px 12px rgba(var(--sh-rgb),.55)); rotate: 4deg; }

/* ==== 卷末书写区（并进瀑布流，界栏隔开） ==== */
#tan-writing { flex: none; position: relative; display: flex; align-items: flex-end; gap: 10px;
  padding: 12px var(--col-side) 24px; }
#tan-writing::before { content: ''; position: absolute; top: 0; left: var(--col-side); right: var(--col-side); height: 1px;
  background: linear-gradient(90deg, transparent, var(--line), transparent); }
.tan-w-tools { display: flex; gap: 2px; padding-bottom: 4px; }
.tan-w-tools button { width: 28px; height: 28px; border: none; background: none; cursor: pointer; padding: 6px;
  color: var(--txt-faint); opacity: .55; transition: opacity var(--t-fast) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.tan-w-tools button:not([disabled]):hover { opacity: 1; translate: 0 -1px; }
.tan-w-tools button[disabled] { opacity: .22; }
.tan-w-tools button svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
#tan-writing textarea { flex: 1; min-width: 0; resize: none; border: none; outline: none;
  font-family: inherit; font-size: 15px; line-height: 26px; min-height: 36px; max-height: 156px;
  padding: 6px 2px 4px; color: var(--txt); caret-color: var(--gold-hi);
  background: transparent;
  /* 界行线起点须对齐 padding-top，线才落在每行字底 */
  background-image: repeating-linear-gradient(180deg, transparent 0 25px, rgba(var(--gold-rgb), .18) 25px 26px);
  background-position: 0 6px;
  background-attachment: local; }
#tan-writing textarea[disabled] { opacity: .55; }
#tan-writing textarea::placeholder { color: var(--txt-faint); opacity: .75; }
#tan-send {
  width: 46px; height: 48px; flex: none; border: none;
  background: var(--red-soft);
  color: var(--chi); cursor: pointer;
  font-family: inherit; font-size: 20px; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  box-shadow: inset 0 0 0 2px var(--red-soft), inset 0 0 0 3px var(--gold);
  text-shadow: 0 1px 2px rgba(var(--sh-rgb),.6), 0 0 1px rgba(var(--sh-rgb),.4);
  filter: drop-shadow(0 6px 14px rgba(var(--sh-rgb),.4));
  transition: translate var(--t-fast) var(--ease-out), filter var(--t-fast) var(--ease-out);
}
#tan-send:hover { filter: drop-shadow(0 8px 18px rgba(var(--sh-rgb),.5)); translate: 0 -2px; }
#tan-send:active { translate: 0 2px; }

`;var Ti=`
/* ==== 浮窗（墨底＋竖排悬签＋内圈暗金细线） ==== */
/* 壳内浮层一律 absolute 以壳根为包含块（fixed 会以酒馆带 transform 的 html 为包含块，手机端高 0） */
#tan-lift { position: absolute; inset: 0; z-index: 40; background: var(--scrim); backdrop-filter: blur(3px);
  display: none; align-items: center; justify-content: center; }
#tan-lift.tan-show { display: flex; }
/* 尺寸走百分比而非 vw／vh：浮窗是壳根 inset:0 的子元素，壳被框小时（预览页 ?vw=）vw 仍按真视口算 */
#tan-lift .tan-held { width: min(1000px, 94%); height: min(720px, 84%);
  position: relative; display: flex; flex-direction: column;
  background-color: var(--bg2);
  filter: drop-shadow(0 3px 5px rgba(var(--sh-rgb),.4)) drop-shadow(0 24px 48px rgba(var(--sh-rgb),.55)); }
#tan-lift .tan-held::before { content: ''; position: absolute; inset: 9px; pointer-events: none; z-index: 1;
  border: 1px solid rgba(var(--gold-rgb),.45); }
/* 题签悬出纸上缘；窗内排版须避让左上题签区（宽约46px、入纸约70px） */
#tan-lift .tan-held h3 { position: absolute; top: -34px; left: 26px; z-index: 2;
  writing-mode: vertical-rl; letter-spacing: 6px; padding: 31px 13px;
  font-size: 15px; font-weight: 600; color: var(--gold-hi);
  background: var(--bg0);
  box-shadow: inset 0 0 0 1px var(--gold-hi), 0 6px 14px rgba(var(--sh-rgb),.6); }
/* 滚动容器缩进内圈金线之内（线在 9px，容器留 10px 外边距），内容滚到头也压不过线；原留白总量不变 */
#tan-lift .tan-held .tan-held-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; margin: 10px; padding: 20px 24px 16px; }
#tan-lift .tan-held .tan-stub { margin: auto; text-align: center; color: var(--txt-faint); font-size: 13.5px; letter-spacing: 4px; }
/* 开窗四层错拍；tan-hide 由 closeLift 挂，动画播完才卸 tan-show */
#tan-lift.tan-show { animation: lift-scrim var(--t-mid) var(--ease-out) both; }
@keyframes lift-scrim { from { background: transparent; backdrop-filter: blur(0); } }
#tan-lift.tan-show .tan-held { animation: lift-settle var(--t-slow) var(--ease-paper) both; }
@keyframes lift-settle { from { opacity: 0; translate: 0 -18px; } }
#tan-lift.tan-show .tan-held h3 { animation: lift-tab var(--t-slow) .1s var(--ease-paper) both; }
@keyframes lift-tab { from { opacity: 0; translate: 0 -16px; } }
#tan-lift.tan-show .tan-held .tan-held-body { animation: lift-body var(--t-slow) .14s var(--ease-out) both; }
@keyframes lift-body { from { opacity: 0; translate: 0 6px; } }
#tan-lift.tan-hide { animation: lift-scrim var(--t-mid) var(--ease-out) reverse both; pointer-events: none; }
#tan-lift.tan-hide .tan-held { animation: lift-leave var(--t-mid) var(--ease-out) both; }
@keyframes lift-leave { to { opacity: 0; translate: 0 -10px; } }
#tan-lift.tan-hide .tan-held h3, #tan-lift.tan-hide .tan-held .tan-held-body { animation: none; }

/* ==== 开坛窗（第 0 楼开局）：题头写在纸面顶端，遮罩点击不关、无关闭钮 ==== */
/* 两步同一尺寸不换窗；比其余浮窗窄而高，竖立绘与上图下格都要高 */
#tan-lift.tan-gate .tan-held { width: min(860px, 94%); height: min(720px, 88%); }
#tan-lift.tan-gate .tan-held h3 { position: static; translate: none; writing-mode: horizontal-tb;
  background: none; box-shadow: none; padding: 34px 44px 0; margin: 0; z-index: 2; text-align: center;
  font-size: var(--fs-title); letter-spacing: var(--ls-title); text-indent: var(--ls-title); font-weight: 600; color: var(--txt); }
#tan-lift.tan-gate.tan-show .tan-held h3 { animation: gate-title var(--t-slow) .12s var(--ease-out) both; }
@keyframes gate-title { from { opacity: 0; translate: 0 -6px; letter-spacing: calc(var(--ls-title) + 6px); } }
#tan-lift.tan-gate .tan-held .tan-held-body { padding: 22px 34px 20px; }
.tan-win.tan-gate-win { gap: 22px; }
.tan-gate-win h4 { margin: 0 0 12px; font-size: var(--fs-label); font-weight: 400; letter-spacing: var(--ls-label); color: var(--txt-faint); display: flex; align-items: center; gap: 12px; }
.tan-gate-win h4::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent); }
/* 两步同一窗：主块吃掉剩余高度，图随之伸缩 */
.tan-gate-body { display: flex; flex-direction: column; flex: 1; min-height: 0; overflow-y: auto; }
.tan-gate-two { display: flex; flex: 1; min-height: 0; gap: 14px; }
/* 第一步：立绘高随正文区、宽按原图比例，过宽时从顶裁；右栏题名简介居中，翻页沉底与立绘下沿齐 */
.tan-gate-opening .tan-gate-two { gap: 28px; }
.tan-gate-portrait { flex: none; height: 100%; width: auto; max-width: 55%; object-fit: cover; object-position: center top; background: var(--bg3); box-shadow: 0 0 0 1px var(--line); }
/* 右列走卷题＋正文两档：题名 20px，简介同正文字号 */
.tan-gate-text { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.tan-gate-copy { margin: auto 0; display: flex; flex-direction: column; gap: 12px; }
.tan-gate-text b { font-size: var(--fs-head); letter-spacing: var(--ls-head); color: var(--txt); font-weight: 600; }
.tan-gate-text p { margin: 0; font-size: var(--fs-body); line-height: 2; color: var(--txt-dim); text-align: start; }
.tan-gate-ledger { margin: 10px 0 0; display: grid; grid-template-columns: auto 1fr; gap: 10px 18px; font-size: var(--fs-read); letter-spacing: var(--ls-read); }
.tan-gate-ledger dt { margin: 0; color: var(--gold); }
.tan-gate-ledger dd { margin: 0; color: var(--txt); }
.tan-gate-nav { display: flex; align-items: center; justify-content: center; gap: 28px; margin-top: 14px; font-size: 12.5px; letter-spacing: 2px; color: var(--txt-faint); padding-top: 10px; border-top: 1px solid var(--line-soft); }
.tan-gate-nav button { border: none; background: none; cursor: pointer; color: var(--txt-dim); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; }
.tan-gate-nav button svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.tan-gate-nav button:not([disabled]):hover { color: var(--gold-hi); }
.tan-gate-nav button:first-child svg { rotate: 180deg; }
.tan-gate-nav button[disabled] { opacity: .3; }
/* 第二步：宗风图在上吃掉剩余高度，五格一行在下挂图下沿；双类压过 windows.js 的 4:1 横幅与三列基样 */
.tan-gate-sects .tan-gate-two { flex-direction: column; }
.tan-rite-pic.tan-gate-pic { flex: 1; min-height: 0; aspect-ratio: auto; box-shadow: inset 0 0 0 1px var(--line); }
.tan-picks.tan-gate-picks { flex: none; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; }
/* 双类压过 windows.js 的 .tan-pick 通用样式：上下布局改顶线，选中朱红粗线、底色自上淡红渐隐 */
.tan-pick.tan-gate-sect { justify-content: flex-start; align-items: center; text-align: center; gap: 4px; padding: 12px 6px 8px; box-shadow: inset 0 1px 0 var(--line); }
.tan-pick.tan-gate-sect:not(.tan-off):hover { box-shadow: inset 0 2px 0 rgba(var(--red-rgb), .5); }
.tan-pick.tan-gate-sect:has(input:checked) { background: linear-gradient(rgba(var(--red-rgb), .1), transparent); box-shadow: inset 0 2px 0 var(--red); }
.tan-pick.tan-gate-sect b { font-size: var(--fs-name); letter-spacing: var(--ls-name); white-space: nowrap; transition: color var(--t-mid) var(--ease-out); }
/* 说明由 17-gate.js 在逗号处断成两行 */
.tan-pick.tan-gate-sect small { font-size: var(--fs-tag); letter-spacing: var(--ls-read); line-height: 1.5; }
.tan-pick.tan-gate-sect:has(input:checked) b { color: var(--gold-hi); }
.tan-gate-foot { flex: none; display: flex; align-items: center; justify-content: center; padding-top: 6px; position: relative; }
.tan-gate-foot .tan-why { position: absolute; left: calc(50% + 70px); top: 50%; translate: 0 -50%; white-space: nowrap; margin: 0; padding-top: 6px; }
.tan-gate-back { position: absolute; right: calc(50% + 70px); top: 50%; translate: 0 -50%; border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: var(--fs-tag); letter-spacing: var(--ls-tag); color: var(--txt-faint); padding: 6px 0 0; transition: color var(--t-fast) var(--ease-out); }
.tan-gate-back:hover { color: var(--gold-hi); }
/* 开坛与下一步同宽：按三字按钮的宽度定最小宽 */
.tan-gate-foot .tan-seal-btn.tan-lg { padding: 8px 22px; box-sizing: border-box; min-width: calc(3em + 4 * var(--ls-btn-lg) + 46px); }

/* --i 由 17-gate.js 的 playEntrance 逐块写入 */
.tan-kindle { animation: tan-kindle .55s var(--ease-out) both; animation-delay: calc(var(--i, 0) * .07s + .15s); }
@keyframes tan-kindle { 0% { opacity: 0; translate: 0 8px; filter: brightness(1.5); } 60% { filter: brightness(1.15); } 100% { opacity: 1; translate: 0 0; filter: none; } }
`;var ce=wt,_i=`
/* ==== 浮窗窗内通用件（页签／经折页／素行／虚位／朱印钮） ==== */
/* 窗内排版须让出左上题签区：列表窗左留边沟，舆图窗图面压在签下无妨 */
/* 去框纪律：浮窗内圈金线是唯一的框，经折页只管滚动，条目走素行（底细线分隔）或图上名下，一页只许契纸一个框；选中态用左侧朱条与朱框，不用容器框 */
.tan-win { display: none; flex: 1; min-height: 0; flex-direction: column; gap: 14px; }
.tan-win.tan-on { display: flex; }
.tan-tabs { display: flex; gap: 22px; margin: -6px 0 8px; padding-left: 48px; flex: none; }
.tan-tabs button { border: none; background: none; cursor: pointer; font-family: inherit; font-size: var(--fs-name);
  letter-spacing: var(--ls-name); color: var(--txt-faint); padding: 4px 2px 6px; position: relative; transition: color var(--t-fast) var(--ease-out); }
.tan-tabs button .tan-n { font-size: 12px; letter-spacing: .5px; margin-left: 4px; opacity: .8; }
.tan-tabs button::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 2px;
  background: var(--red); opacity: 0; transition: opacity var(--t-fast) var(--ease-out); }
.tan-tabs button.tan-on { color: var(--gold-hi); }
.tan-tabs button.tan-on::after { opacity: 1; }
.tan-tabs button:hover { color: var(--gold-hi); }
.tan-tabs button:not(.tan-on):hover::after { opacity: .5; }
.tan-tabs button .tan-red { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--red); margin-left: 5px; translate: 0 -6px; }
.tan-pane { display: none; flex: 1; min-height: 0; flex-direction: column; gap: 12px; }
.tan-pane.tan-on { display: flex; animation: tan-reveal var(--t-mid) var(--ease-out) both; }
@keyframes tan-reveal { from { opacity: 0; translate: 0 4px; } }
.tan-folio { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 16px 10px; }
/* 素行栅格：行距归零让底细线连成账页横线，列间留宽 */
.tan-grid { display: grid; gap: 0 28px; align-content: start; grid-auto-rows: max-content; }
.tan-grid.tan-c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.tan-grid.tan-c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.tan-grid.tan-c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.tan-card { position: relative; padding: 13px 0 12px; border-bottom: 1px solid var(--line-soft);
  font-size: 14.5px; line-height: 1.8; color: var(--txt-dim); min-height: 68px; }
.tan-card:has(> .tan-seal-btn) { padding-right: 72px; }
.tan-card b { display: block; font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--txt); font-weight: 600; margin-bottom: 2px; }
.tan-card .tan-k { color: var(--txt-faint); letter-spacing: 1px; margin-right: 6px; }
.tan-card .tan-tag { position: absolute; top: 14px; right: 0; font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.tan-tag.tan-q1 { color: var(--txt-faint); } .tan-tag.tan-q2 { color: var(--gold); } .tan-tag.tan-q4 { color: var(--gold-hi); }
.tan-card .tan-tag.tan-gold { color: var(--gold); }
.tan-card.tan-empty { display: flex; align-items: center; justify-content: center; color: var(--txt-faint); letter-spacing: 4px; text-indent: 4px; font-size: 14px; }
.tan-card .tan-seal-btn { position: absolute; right: 0; bottom: 14px; }
.tan-card.tan-up .tan-seal-btn { position: static; }
.tan-card .tan-up-foot { display: flex; align-items: center; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.tan-card .tan-up-foot .tan-price { font-size: 12px; margin-left: 6px; opacity: .85; }
/* 设施卡：图上名下不加框，整格可点进详情，悬停图上半强度朱框预告；地宫格两行（图、名与档次标），兴造格三行多脚注；两页都一行四格 */
.tan-cave-grid, .tan-bp-grid { grid-auto-rows: auto; gap: 22px 20px; }
.tan-cave-grid > .tan-empty { grid-column: 1 / -1; }
/* 地宫剖面：一层一条横带不加底色不铺晕；层间一道金线作阶；未凿层不加纹样，只印一行字与开凿钮 */
.tan-cave-sect { display: flex; flex-direction: column; }
.tan-stratum { display: grid; grid-template-columns: 34px minmax(0, 1fr); column-gap: 18px; padding: 14px 14px 14px 0; }
.tan-stratum-name { writing-mode: vertical-rl; align-self: start; justify-self: center; font-size: 13px; letter-spacing: 5px; color: var(--txt-faint); padding-top: 2px; }
.tan-stratum.tan-l0 .tan-stratum-name { color: var(--gold-hi); }
.tan-stair { height: 1px; background: linear-gradient(90deg, rgba(var(--gold-rgb),.45), rgba(var(--gold-rgb),.08)); }
.tan-stratum.tan-undug .tan-stratum-name { opacity: .6; }
.tan-dig { display: flex; align-items: center; gap: 14px; min-height: 40px; }
.tan-dig .tan-why { margin-left: 0; }
.tan-tag.tan-layer { margin-left: 8px; }
.tan-picks.tan-layers { margin-bottom: 10px; }
.tan-card.tan-fac { display: grid; grid-template-rows: subgrid; grid-row: span 2; row-gap: 4px; padding: 0 0 4px; border-bottom: none; }
.tan-bp-grid .tan-card.tan-fac { grid-row: span 3; }
.tan-fac-pic { aspect-ratio: 3 / 2; overflow: hidden; background: rgba(var(--gold-rgb),.08); margin-bottom: 4px; }
.tan-fac-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.tan-fac-top { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.tan-fac-top b { margin-bottom: 0; }
.tan-card.tan-fac .tan-tag { position: static; flex: none; }
.tan-card.tan-fac .tan-up-foot { margin-top: 2px; }
.tan-card.tan-fac.tan-link { cursor: pointer; }
.tan-card.tan-fac.tan-link:hover .tan-fac-pic { outline: 2px solid rgba(var(--red-rgb), .5); outline-offset: -2px; }
.tan-card.tan-fac.tan-queued .tan-fac-pic img { filter: saturate(.7) brightness(.8); }
.tan-fac-act { font-size: 13px; letter-spacing: 2px; color: var(--txt-faint); }
.tan-card.tan-fac.tan-link:hover .tan-fac-act { color: var(--gold-hi); }
/* 待呈行在兴造栅格之下：段题吃满余宽，呈报钮在行尾 */
.tan-basket-bar { display: flex; align-items: center; gap: 14px; margin: 18px 0 0; }
.tan-basket-bar .tan-wh { flex: 1; }
/* 详情页（地宫与兴造共用）：左上返回，图 3:2 不裁靠左占四成六、段题与说明在右，选项与行动通栏在下；自拟态三档殿室图叠放，选哪档亮哪张 */
/* 返回是淡字钮不描印，排在主钮左手，悬停变金 */
.tan-back { border: none; background: none; cursor: pointer; font-family: inherit; padding: 0 6px;
  font-size: 13px; letter-spacing: 2px; color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
.tan-back:hover { color: var(--gold-hi); }
/* 上半（图与说明）与下半（档次、奇效、底行）之间加一指宽留白分段 */
.tan-detail-top { display: grid; grid-template-columns: minmax(0, 23fr) minmax(0, 27fr); gap: 0 24px; align-items: start; margin-bottom: 16px; }
.tan-detail-text { display: flex; flex-direction: column; gap: 11px; min-width: 0; }
.tan-detail-pic { display: grid; width: 100%; aspect-ratio: 3 / 2; overflow: hidden; background: rgba(var(--gold-rgb),.08); }
.tan-detail-pic img { grid-area: 1 / 1; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; }
.tan-detail-pic img[data-g] { opacity: 0; transition: opacity var(--t-mid) var(--ease-out); }
.tan-detail-pic img[data-g="粗成"], .tan-build:has(input[value="精工"]:checked) .tan-detail-pic img[data-g="精工"], .tan-build:has(input[value="天工"]:checked) .tan-detail-pic img[data-g="天工"] { opacity: 1; }
.tan-detail .tan-wh .tan-tag { font-size: 12px; letter-spacing: 1px; }
.tan-build-note { margin: 0; font-size: 14.5px; line-height: 1.9; letter-spacing: .5px; color: var(--txt-dim); }
.tan-build-note .tan-k { color: var(--txt-faint); letter-spacing: 1px; margin-right: 6px; }
.tan-own-head { display: grid; gap: 11px; }
.tan-own-head textarea { height: auto; }
/* 法会页顶横幅：图按横向长条构图出、入库即 3:1，页顶整条铺开；图边不描线，罪业变体例外（朱线） */
.tan-rite-pic { flex: none; aspect-ratio: 4 / 1; overflow: hidden; }
.tan-rite-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.tan-loan-pic, .tan-page-pic { margin-bottom: 14px; }
.tan-sin .tan-loan-pic, .tan-sin .tan-page-pic { border: 1px solid rgba(var(--red-rgb),.45); }
.tan-folio.tan-fill > .tan-page-pic + .tan-wh { margin-top: 0; }
/* 朱印钮（全局按钮语言） */
.tan-seal-btn { border: none; cursor: pointer; white-space: nowrap; font-family: inherit; font-size: var(--fs-btn); letter-spacing: var(--ls-btn); text-indent: var(--ls-btn);
  color: var(--on-red); background: var(--red); padding: 4px 9px; box-shadow: inset 0 0 0 1px rgba(var(--gold-rgb),.35), 0 2px 4px rgba(var(--sh-rgb),.35);
  transition: filter var(--t-fast) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.tan-seal-btn:hover { filter: brightness(1.12); translate: 0 -1px; }
.tan-seal-btn:active { translate: 0 1px; filter: brightness(.96); transition-duration: .06s; }
.tan-seal-btn.tan-lg { font-size: var(--fs-btn-lg); letter-spacing: var(--ls-btn-lg); text-indent: var(--ls-btn-lg); padding: 6px 16px; }
.tan-seal-btn[disabled] { cursor: not-allowed; background: var(--bg4); color: var(--txt-faint); box-shadow: none; filter: none; translate: none; }
.tan-why { font-size: var(--fs-tag); letter-spacing: var(--ls-tag); color: var(--txt-faint); margin-left: 8px; }
.tan-form { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: flex-end; flex: none; }
.tan-form label { display: flex; flex-direction: column; gap: 2px; font-size: 12.5px; letter-spacing: 2px; color: var(--txt-faint); }
.tan-form input { border: none; border-bottom: 1px solid var(--line); background: transparent; outline: none;
  font-family: inherit; font-size: 15.5px; color: var(--txt); padding: 3px 2px; width: 150px; caret-color: var(--gold-hi); }
.tan-form input.tan-w { width: 260px; }
.tan-form .tan-price { font-size: 12px; letter-spacing: .5px; opacity: .85; margin-left: 3px; }
.tan-form ::placeholder { color: var(--txt-faint); opacity: 1; }
/* 契纸：一切记账表单的容器，整列竖排、控件撑满、大号朱印钮收尾；不加框，靠段题横线与留白成段 */
.tan-sheet { flex-direction: column; align-items: stretch; gap: 11px; padding: 0; }
.tan-sheet input, .tan-sheet textarea { width: 100%; box-sizing: border-box; }
.tan-sheet .tan-none { padding: 0; font-size: 13px; }
/* 经折页竖排：行取内容高（两列取高者、契纸尾行沉底），余白留在页底，篮子长起来才由经折页滚 */
.tan-folio.tan-fill { display: flex; flex-direction: column; gap: 12px; }
.tan-folio.tan-fill > .tan-wrow { flex: none; align-items: stretch; }
.tan-folio.tan-fill > .tan-grid { flex: 1; }
.tan-form .tan-grow { flex: 1; min-width: 0; }
/* 债契：放贷契纸是一句填空契文铺顶，三处空自带下划线，句尾库中与放贷钮靠右 */
.tan-loan { flex: none; }
.tan-loan-line { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 6px; font-size: 15px; letter-spacing: 1px; line-height: 2; color: var(--txt-dim); }
.tan-loan-line input { width: 120px; text-align: center; padding: 1px 2px; }
.tan-loan-line input[name="本金"] { width: 64px; }
.tan-loan-line input[name="抵押"] { width: 200px; }
.tan-loan-line .tan-seal-btn { margin-left: 10px; align-self: center; }
/* 钮后的缘由与库中一起落到句下一行：tan-br 占满一行强制折行，库中先、缘由后 */
.tan-loan-line .tan-br { flex-basis: 100%; height: 0; order: 2; }
.tan-loan-line .tan-loan-bal { order: 3; margin-left: 0; }
.tan-loan-line > .tan-why:not(.tan-loan-bal) { order: 4; margin-left: 12px; }
/* 债契行：名、抵押、借、收息四栏对齐，不设表头 */
.tan-debt { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1.6fr); gap: 16px; align-items: baseline; padding: 12px 0 11px;
  border-bottom: 1px solid var(--line-soft); font-size: 14.5px; letter-spacing: .5px; color: var(--txt-dim); }
.tan-debt b { color: var(--txt); font-weight: 600; letter-spacing: 2px; }
.tan-debt .tan-tag { font-style: normal; margin-left: 8px; font-size: 12px; letter-spacing: 1px; }
/* 工坊：页顶横幅之下，左作坊素行竖排＋待呈篮／右契纸撑满，效用框吃满余高 */
.tan-shoplist { flex: none; width: 250px; gap: 6px; }
.tan-picks.tan-col { grid-template-columns: minmax(0, 1fr); gap: 10px; }
/* 作坊行两行：类别与价并排，已备或门槛折到下一行 */
.tan-pick.tan-shop { flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 0 10px; padding: 6px 14px 5px; }
.tan-pick.tan-shop .tan-shopline { flex-basis: 100%; }
.tan-craft { flex: 1; min-width: 0; }
.tan-craft .tan-grow textarea { flex: 1; min-height: 88px; height: auto; }
.tan-form textarea { border: none; border-bottom: 1px solid var(--line); background: transparent; outline: none; resize: none;
  font-family: inherit; font-size: 15.5px; line-height: 1.7; color: var(--txt); padding: 3px 2px; caret-color: var(--gold-hi); }
.tan-sheet .tan-wh { margin-top: 2px; }
/* 选卡不加框：常态左淡金条示可选，悬停半强度朱条，选中朱条＋淡朱底；档次一行三项名价并排，门槛缘由折到下一行 */
.tan-picks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px 16px; }
.tan-picks.tan-row .tan-pick { flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 2px 10px; padding: 7px 14px 6px; }
.tan-picks.tan-row .tan-pick .tan-cond { flex-basis: 100%; }
.tan-pick { position: relative; display: flex; flex-direction: column; gap: 2px; padding: 9px 14px 8px; cursor: pointer; letter-spacing: 1px;
  color: var(--txt-dim); box-shadow: inset 2px 0 0 var(--line); transition: box-shadow var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.tan-pick input { position: absolute; opacity: 0; width: 0; height: 0; }
.tan-pick b { font-size: 16px; letter-spacing: 3px; color: var(--txt); font-weight: 600; }
.tan-pick .tan-price { margin: 0; font-size: 13px; color: var(--gold); }
.tan-pick small { font-size: 12px; letter-spacing: .5px; color: var(--txt-faint); line-height: 1.5; }
.tan-pick:not(.tan-off):hover { box-shadow: inset 2px 0 0 rgba(var(--red-rgb), .5); }
.tan-pick:has(input:checked) { background: rgba(var(--red-rgb),.07); box-shadow: inset 2px 0 0 var(--red); }
/* 门槛句（.tan-cond）不随卡片一起淡，灰卡上最该看见的正是它 */
.tan-pick.tan-off { box-shadow: inset 2px 0 0 var(--line-soft); }
.tan-pick.tan-off > :not(.tan-cond) { opacity: .5; }
.tan-pick .tan-cond { color: var(--gold); }
.tan-pick.tan-off .tan-cond { color: var(--gold-hi); }
/* 奇效栏只属天工：选中天工才展开；升天工契纸（tan-live）常显 */
.tan-form .tan-wonder { display: none; }
.tan-build:has(input[value="天工"]:checked) .tan-wonder, .tan-form .tan-wonder.tan-live { display: flex; }
.tan-wonder small { font-size: 11.5px; letter-spacing: .5px; color: var(--txt-faint); margin-top: 2px; }
.tan-build-foot { display: flex; align-items: center; justify-content: flex-end; gap: 14px; margin-top: auto; }

/* ==== 待呈篮（左列清单之下，段题带件数合计，短钮呈报） ==== */
.tan-basket { flex: none; margin-top: 2px; }
.tan-basket .tan-build-foot { margin-top: 6px; }
.tan-bk-row { display: flex; align-items: baseline; gap: 8px; padding: 4px 2px; font-size: 13px;
  border-bottom: 1px solid var(--line-soft); }
.tan-bk-row b { font-weight: 600; letter-spacing: 1px; color: var(--txt); }
.tan-bk-row .tan-tag { font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.tan-bk-row .tan-price { margin-left: auto; font-size: 12.5px; color: var(--gold); }
.tan-bk-x { flex: none; border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 12px; letter-spacing: 1px; padding: 0 2px; color: var(--txt-faint);
  transition: color var(--t-fast) var(--ease-out); }
.tan-bk-x:hover { color: var(--gold-hi); }
.tan-build-foot > .tan-why:first-child { flex: none; margin: 0 auto 0 0; }
/* 钮旁缘由排在「库中」与钮之间吃余宽，钮位不动 */
.tan-build-foot > .tan-seal-btn { order: 1; }
.tan-build-foot > .tan-seal-btn + .tan-why { flex: 1; margin-left: 0; text-align: right; }
.tan-wh { display: flex; align-items: center; gap: 10px; flex: none; font-size: 13.5px; letter-spacing: 3px; color: var(--txt-faint); }
.tan-wh::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent); }
.tan-wh b { color: var(--gold-hi); font-weight: 600; letter-spacing: 1px; }
.tan-folio > .tan-wh:not(:first-child) { margin-top: 16px; }
.tan-store-row { display: grid; grid-template-columns: 104px minmax(0, 1fr); gap: 12px; align-items: start; padding: 14px 0; }
.tan-store-row:first-child { padding-top: 0; }
.tan-store-head { display: flex; flex-direction: column; align-items: center; gap: 4px; padding-top: 2px; font-size: 15px; letter-spacing: 3px; text-indent: 3px; color: var(--txt-dim); }
.tan-store-head b { color: var(--gold-hi); font-weight: 600; font-size: 13px; letter-spacing: 1px; text-indent: 1px; }
.tan-store-pic { width: 72px; height: 72px; object-fit: cover; display: block; margin-bottom: 4px; }
.tan-store-row .tan-card.tan-wide { grid-column: span 2; }
.tan-store-spare { align-items: center; }
.tan-store-spare .tan-store-head { flex-direction: row; justify-content: center; gap: 8px; padding-top: 0; }
.tan-store .tan-card.tan-empty { min-height: 0; padding: 9px 0 8px; }
/* 浮窗定高 620，行撑满余高，回想在列内滚动 */
.tan-wrow { display: flex; gap: 16px; flex: 1; min-height: 0; align-items: flex-start; }
.tan-wrow > .tan-wcol { align-self: stretch; }
.tan-wcol { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
/* 空态短句 */
.tan-none { color: var(--txt-faint); letter-spacing: 3px; font-size: 14px; padding: 6px 2px; }

/* 同心缕：女主切换走顶部页签，位阶作页签小字；左栏只一张主图、按窗高撑满，右栏心声／回想／立绘分页签一次只看一样 */
.tan-bond-win .tan-names { margin-bottom: 16px; }
.tan-bond-win .tan-wrow { gap: 26px; }
.tan-bond-win .tan-wcol { gap: 26px; }
.tan-portrait { flex: none; width: 400px; display: flex; flex-direction: column; }
.tan-portrait .tan-pic { aspect-ratio: 832 / 1216; width: 100%; background: var(--bg3) center / cover no-repeat;
  outline: 1px solid var(--line); outline-offset: -3px; display: flex; align-items: center; justify-content: center; }
.tan-portrait .tan-pic > span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: var(--txt-faint); }
/* 立绘列高＝列宽×1216/832，以行高反解列宽，窗多高画多高，不留底部空白 */
@container tan (width > 900px) {
  .tan-bond-win .tan-wrow { container-type: size; }
  .tan-bond-win .tan-portrait { width: min(400px, calc((100cqh - 4px) / 1.462)); }
}
/* 立绘页：五列格，图上名下，当前格朱框，格多时页内滚动（立绘再加也放得下） */
.tan-gallery { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px 10px; align-content: start; overflow-y: auto; min-height: 0; padding: 2px 2px 8px; }
.tan-cell { display: flex; flex-direction: column; gap: 6px; padding: 0; border: none; background: none; cursor: pointer; font-family: inherit; color: var(--txt-faint); min-width: 0; }
.tan-cell i { display: flex; align-items: center; justify-content: center; aspect-ratio: 832 / 1216; width: 100%; background: var(--bg3) center / cover no-repeat;
  outline: 1px solid var(--line); opacity: .75; transition: opacity var(--t-fast) var(--ease-out), outline-color var(--t-fast) var(--ease-out); }
.tan-cell span { font-size: 12px; letter-spacing: 1px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tan-cell:not([disabled]):hover i { opacity: 1; outline-color: rgba(var(--red-rgb), .5); }
.tan-cell.tan-on i { opacity: 1; outline-color: var(--red); }
.tan-cell.tan-on span { color: var(--gold-hi); }
/* 待补格与锁定格：暗底竖字，DOM 内无图片 URL */
.tan-cell.tan-blank i, .tan-cell.tan-lock i { background: var(--bg0); }
.tan-cell i::after { font-size: 11px; letter-spacing: 3px; writing-mode: vertical-rl; color: var(--txt-faint); }
.tan-cell.tan-blank i::after { content: '待补'; }
.tan-cell.tan-lock i::after { content: '未至'; color: var(--txt-dim); }
.tan-cell.tan-lock { opacity: .55; }
/* 右栏心声／回想页签：不让题签，紧贴页顶三行 */
.tan-tabs.tan-tabs-sub { padding-left: 2px; margin: 4px 0 2px; gap: 18px; }
.tan-tabs.tan-tabs-sub button { font-size: 14.5px; letter-spacing: 3px; padding-bottom: 8px; }
/* 随行行：位阶行下一行素字不加框（页顶只许心声一个框），随行亮金、留守淡字 */
.tan-escort-line { display: flex; align-items: baseline; gap: 12px; flex: none; padding: 0 2px; font-size: 12.5px; letter-spacing: 1px; color: var(--txt-faint); }
.tan-escort-line b { font-weight: 600; letter-spacing: 3px; font-size: 13px; color: var(--txt-dim); }
.tan-escort-line.tan-with b { color: var(--gold-hi); }
/* 位阶莲瓣：四瓣对应一灌至四灌，待度零瓣，未亮去色压淡 */
.tan-lotus-row { display: flex; align-items: center; gap: 10px; font-size: 14.5px; letter-spacing: 1px; color: var(--txt-dim); flex: none; }
.tan-lotus-row i { width: 26px; height: 28px; background: url('${ce}lotus-rank.webp') center / contain no-repeat;
  filter: grayscale(1) opacity(.32); }
.tan-lotus-row i.tan-lit { filter: none; }
.tan-lotus-row b { color: var(--gold-hi); font-weight: 600; margin-left: auto; }
/* 心声花笺随文自然高，只留花押一角的最小高 */
.tan-voice-sheet { flex: none; position: relative; min-height: 150px; box-sizing: content-box; padding: 18px 22px 22px; background: var(--bg3); border: 1px solid var(--line);
  font-size: 15px; line-height: 2; color: var(--txt-dim); filter: drop-shadow(0 3px 8px rgba(var(--sh-rgb),.22)); }
.tan-voice-sheet::after { content: ''; position: absolute; right: 16px; bottom: 10px; width: 36px; height: 36px;
  background: var(--stamp) center / contain no-repeat; opacity: .55; mix-blend-mode: normal; }
.tan-timeline { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 2px 4px 14px; border-left: 2px solid var(--line-soft); }
.tan-timeline .tan-memo { position: relative; margin-bottom: 18px; font-size: 14.5px; line-height: 1.9; color: var(--txt-dim); }
.tan-timeline .tan-memo::before { content: ''; position: absolute; left: -19px; top: 9px; width: 7px; height: 7px; border-radius: 50%;
  background: var(--gold); box-shadow: 0 0 0 2px var(--bg3); }
.tan-timeline .tan-memo b { color: var(--gold-hi); font-weight: 600; letter-spacing: 1px; margin-right: 8px; }
.tan-timeline .tan-memo small { color: var(--txt-faint); letter-spacing: .5px; }
.tan-su   { --stamp: url('${ce}stamp-angelica.webp'); }
.tan-xiao { --stamp: url('${ce}stamp-pomegranate.webp'); }
.tan-pei  { --stamp: url('${ce}stamp-orchid.webp'); }
.tan-ye   { --stamp: url('${ce}stamp-peach.webp'); }
.tan-chi  { --stamp: url('${ce}stamp-gesang.webp'); }

.tan-names button.tan-off { opacity: .45; }
.tan-names button.tan-off:hover { color: inherit; }

/* 营造正殿页：三阶横排一阶一幅画，卡自然高、在栏内竖向居中；格内五行走 subgrid，三格同一行位对齐；未启格压暗；三格不加框，只当下一格朱框 */
.tan-halls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: auto auto auto auto auto; gap: 14px; flex: none; margin: auto 0; }
.tan-hall { display: grid; grid-template-rows: subgrid; grid-row: span 5; row-gap: 6px; padding-bottom: 12px; color: var(--txt-faint); }
/* 朱框走 outline：inset 阴影画在内容之下，会被整幅殿宇图盖住上半截 */
.tan-hall.tan-cur { background: rgba(var(--red-rgb),.07); outline: 1px solid var(--red); outline-offset: -1px; }
.tan-hall-pic { aspect-ratio: 4 / 3; overflow: hidden; margin-bottom: 4px; }
.tan-hall-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.tan-hall:not(.tan-done):not(.tan-cur) .tan-hall-pic img { filter: saturate(.7) brightness(.8); opacity: .82; }
.tan-hall-top, .tan-hall p, .tan-hall-gain, .tan-hall-act { padding: 0 14px; }
.tan-hall-top { display: flex; align-items: baseline; gap: 12px; }
.tan-hall b { font-size: 17px; letter-spacing: 4px; text-indent: 4px; color: var(--txt-dim); font-weight: 600; }
.tan-hall.tan-cur b { color: var(--gold-hi); }
.tan-hall .tan-tag { font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.tan-hall.tan-cur .tan-tag { color: var(--gold-hi); }
.tan-hall p { font-size: 14px; letter-spacing: 1px; line-height: 1.9; margin: 0; }
.tan-hall-gain { font-size: 13px; letter-spacing: 1px; line-height: 2.4; color: var(--txt-dim); }
.tan-hall-gain .tan-k { color: var(--txt-faint); margin-right: 6px; }
.tan-hall .tan-chi { align-self: center; width: 20px; height: 20px; text-align: center; font-size: 11px; line-height: 20px; color: var(--on-red); background: var(--red); }
.tan-hall-act { display: flex; flex-wrap: wrap; align-items: center; align-self: end; gap: 6px 12px; padding-top: 8px; }
.tan-hall-act small { flex: none; white-space: nowrap; font-size: 13px; letter-spacing: 1px; color: var(--gold); }
.tan-hall-act .tan-why { margin-left: 0; }


/* 教务：法会门槛清单 */
.tan-ticks { display: flex; flex-direction: column; gap: 9px; font-size: 15px; color: var(--txt-dim); letter-spacing: 1px; }
.tan-ticks li { list-style: none; display: flex; align-items: center; gap: 10px; }
.tan-ticks li::before { content: ''; width: 16px; height: 16px; border: 1px solid var(--line); flex: none; }
.tan-ticks li.tan-ok { color: var(--txt); }
.tan-ticks li.tan-ok::before { background: var(--gold); border-color: var(--gold); box-shadow: inset 0 0 0 2px var(--bg3); }

/* 舆图浮窗：SVG overlay 区域面高亮（viewBox 1024） */
.tan-atlas { flex: 1; min-height: 0; display: flex; gap: 16px; }
.tan-atlas .tan-mapbox { position: relative; flex: none; height: min(600px, calc(84vh - 100px)); aspect-ratio: 1; outline: 1px solid var(--gold-line); }
.tan-atlas .tan-mapbox img { width: 100%; height: 100%; }
.tan-atlas .tan-mapbox svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.tan-atlas path { fill: transparent; stroke: transparent; stroke-width: 2; transition: fill var(--t-fast) var(--ease-out), stroke var(--t-fast) var(--ease-out); }
.tan-atlas path:hover { fill: rgba(var(--red-rgb),.10); stroke: rgba(var(--red-rgb),.45); }
.tan-atlas path.tan-cur { fill: rgba(var(--red-rgb),.28); stroke: var(--red); stroke-width: 2.5; animation: region-breathe 1.6s var(--ease-out) 1; }
@keyframes region-breathe { 0% { fill: rgba(var(--red-rgb),.5); } 100% { fill: rgba(var(--red-rgb),.28); } }
.tan-atlas .tan-lbl { position: absolute; translate: -50% -50%; font-size: 12px; letter-spacing: 1px; color: var(--txt-dim); white-space: nowrap;
  background: color-mix(in srgb, var(--bg0) 82%, transparent); padding: 1px 5px; pointer-events: none; }
.tan-atlas .tan-lbl.tan-cur { color: var(--red); font-weight: 600; font-size: 13px; }
.tan-atlas .tan-zones { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
.tan-atlas .tan-zlist { display: flex; flex-direction: column; gap: 2px; font-size: 14.5px; letter-spacing: 1px; color: var(--txt-dim); }
.tan-atlas .tan-zlist li { list-style: none; padding: 4px 8px; display: flex; justify-content: space-between; }
.tan-atlas .tan-zlist li.tan-cur { color: var(--red); font-weight: 600; background: rgba(var(--red-rgb),.07); box-shadow: inset 2px 0 0 var(--red); }
.tan-atlas .tan-zlist li small { color: var(--txt-faint); font-weight: 400; letter-spacing: .5px; }
.tan-atlas .tan-zlist li.tan-abroad:not(.tan-cur) { color: var(--txt-faint); }
.tan-atlas .tan-abroad-mark { position: absolute; left: 10px; bottom: 10px; padding: 4px 10px; font-size: 13px; letter-spacing: 1px; font-weight: 600; color: var(--red);
  background: color-mix(in srgb, var(--bg0) 90%, transparent); outline: 1px solid rgba(var(--red-rgb),.45); }
.tan-atlas .tan-abroad-mark b { font-weight: 400; font-size: 11px; color: var(--txt-dim); margin-right: 6px; }
.tan-doomline { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; letter-spacing: 1px; color: var(--txt-faint); margin-top: auto; }
.tan-doomline .tan-red { color: var(--red); }
/* 久住遇刺：红山王宫标签与行名加朱记，栏下一行朱字 */
.tan-atlas .tan-lbl.tan-mark { outline: 1px solid var(--red); }
.tan-atlas .tan-zmark { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--red); margin-left: 6px; translate: 0 -3px; }
.tan-atlas-note { font-size: 13px; letter-spacing: 2px; color: var(--red); padding: 4px 8px; border-left: 2px solid var(--red); }
/* 驿路长卷：宽幅上、站表下；八站钉点走过描实（金）、当前点亮（朱）、未到淡显 */
.tan-atlas.tan-atlas-road { flex-direction: column; }
.tan-atlas .tan-roadbox { flex: none; overflow-x: auto; overflow-y: hidden; outline: 1px solid var(--gold-line); }
.tan-atlas .tan-mapbox.tan-road { height: auto; aspect-ratio: 5 / 2; width: 100%; min-width: 720px; outline: 0; }
.tan-atlas .tan-stop { position: absolute; translate: -50% -50%; width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid var(--gold-line); background: var(--bg0); opacity: .55;
  transition: opacity var(--t-fast) var(--ease-out); }
.tan-atlas .tan-stop span { position: absolute; left: 50%; top: 14px; translate: -50% 0; font-size: 12px; letter-spacing: 1px; white-space: nowrap; color: var(--txt-dim);
  background: color-mix(in srgb, var(--bg0) 82%, transparent); padding: 1px 5px; }
.tan-atlas .tan-stop.tan-past { opacity: 1; background: var(--gold); border-color: var(--gold); }
.tan-atlas .tan-stop.tan-cur { opacity: 1; width: 12px; height: 12px; background: var(--red); border-color: var(--on-red); box-shadow: 0 0 8px var(--red); }
.tan-atlas .tan-stop.tan-cur span { color: var(--red); font-weight: 600; font-size: 13px; }
.tan-atlas .tan-zlist-road { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 16px; }
.tan-atlas .tan-zlist-road li.tan-todo { color: var(--txt-faint); }
.tan-atlas .tan-zlist-road li.tan-past { color: var(--txt); }
.tan-atlas .tan-zlist li em { font-style: normal; font-size: 12px; letter-spacing: .5px; color: var(--txt-faint); margin-left: 8px; }
.tan-atlas .tan-zlist-road li.tan-abroad { grid-column: 1 / -1; }

`;var Ai=`
/* ==== 正文容器／编辑态／删除态／推演中／入口 ==== */
.tan-turn .tan-text { display: block; }
.tan-turn.tan-gm .tan-text p + p { margin-top: .9em; }
.tan-turn.tan-zhu .tan-text, .tan-turn.tan-zhu .tan-text p { display: inline; }
.tan-turn.tan-selable { cursor: pointer; outline: 1px dashed var(--line); outline-offset: 6px; transition: outline-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.tan-turn.tan-selable:hover { outline-color: var(--gold); }
.tan-turn.tan-delsel { outline: 1px solid var(--red); background: rgba(var(--red-rgb),.07); }
.tan-story-edit { display: flex; flex-direction: column; gap: 8px; }
.tan-story-edit textarea { width: 100%; resize: none; border: none; outline: none; font-family: inherit; font-size: 16px; line-height: 26px;
  color: var(--txt); background: transparent; text-align: right; caret-color: var(--gold-hi);
  background-image: repeating-linear-gradient(180deg, transparent 0 25px, rgba(var(--gold-rgb),.18) 25px 26px); background-attachment: local; }
.tan-turn.tan-gm .tan-story-edit textarea { text-align: left; }
.tan-story-edit-row { display: flex; justify-content: flex-end; gap: 10px; }
.tan-edit-btn { border: 1px solid var(--line); background: none; cursor: pointer; font-family: inherit; font-size: 12px; letter-spacing: 2px; text-indent: 2px;
  color: var(--txt-dim); padding: 3px 12px; transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.tan-edit-btn.tan-primary { color: var(--gold-hi); border-color: rgba(var(--gold-rgb),.55); }
.tan-edit-btn:hover { color: var(--on-gold); background: var(--gold); border-color: var(--gold); }
.tan-thinking { display: flex; align-items: center; gap: 10px; padding: 6px 0; margin-bottom: 14px; color: var(--txt-faint); opacity: .7; }
.tan-thinking .tan-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.tan-thinking .tan-rule.tan-r { background: linear-gradient(90deg, var(--line), transparent); }
.tan-thinking img { width: 19px; height: 19px; animation: tan-smoke 2.4s ease-in-out infinite; }
@keyframes tan-smoke { 0%,100% { opacity: .5; translate: 0 0; rotate: -2deg; } 50% { opacity: 1; translate: 0 -2px; rotate: 2deg; } }
#tan-delbar button.tan-armed { color: var(--on-red); background: var(--red); border-color: var(--red); }
.tan-vc-img img { width: 100%; height: 100%; object-fit: cover; }
.tan-portrait .tan-pic img { width: 100%; height: 100%; object-fit: cover; cursor: zoom-in; }
/* ==== 暗账黑账变体：朱只在窗内圈线、页顶图边与勒索钮，条目仍素行 ==== */
#tan-lift.tan-sin .tan-held::before { border-color: rgba(var(--red-rgb),.5); }

/* 立绘大图灯箱 */
#tan-viewer { position: absolute; inset: 0; z-index: 60; background: rgba(var(--sh-rgb),.78);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  cursor: zoom-out; animation: tan-reveal var(--t-mid) var(--ease-out) both; }
#tan-viewer img { max-width: 92vw; max-height: 88vh; box-shadow: 0 12px 48px rgba(var(--sh-rgb),.6); }
#tan-viewer span { font-size: var(--fs-read); letter-spacing: 4px; text-indent: 4px; color: var(--txt-dim); }
@keyframes tan-flash { 0% { color: var(--gold-hi); text-shadow: 0 0 10px rgba(var(--gold-rgb),.55); translate: 0 -2px; }
  30% { color: var(--gold-hi); text-shadow: 0 0 0 rgba(var(--gold-rgb),0); translate: 0 0; } }
.tan-flash b, .tan-flash.tan-tb-time { animation: tan-flash 1.4s var(--ease-out); }
@keyframes tan-flash-dark { 0% { color: var(--gold-hi); text-shadow: 0 0 10px rgba(var(--gold-rgb),.7); translate: 0 -2px; }
  30% { color: var(--gold-hi); text-shadow: 0 0 0 rgba(var(--gold-rgb),0); translate: 0 0; } }
#tan-minimap .tan-flash b { animation-name: tan-flash-dark; }
#tan-paper.tan-paper-in { animation: tan-paper-in .8s var(--ease-out) both; }
@keyframes tan-paper-in { from { opacity: 0; translate: 0 10px; } }
#tan-shell-root.tan-shell-in { animation: tan-shell-in .28s var(--ease-out) both; pointer-events: none; }
@keyframes tan-shell-in { from { opacity: 0; scale: 1.01; } }
#tan-shell-root.tan-shell-out { animation: tan-shell-out .28s var(--ease-out) both; pointer-events: none; }
@keyframes tan-shell-out { to { opacity: 0; scale: .985; } }
@media (prefers-reduced-motion: reduce) { #tan-shell-root, #tan-shell-root *, #tan-shell-root *::before, #tan-shell-root *::after, #tan-lift, #tan-lift * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
`;var ul=wt,$i=`
/* 正文末信格：末楼楼尾之下、行动选项之上，信封图横放居中带一行字，随正文滚；不画框，悬停只让信封抬起、字转金 */
.tan-letter-strip { display: flex; align-items: center; justify-content: center; gap: 16px; width: 100%; box-sizing: border-box;
  margin: 6px 0 18px; padding: 10px 16px; border: none; background: none; cursor: pointer; font-family: inherit;
  color: var(--txt-dim); font-size: 14px; letter-spacing: 3px; text-indent: 3px; animation: tan-reveal var(--t-slow) var(--ease-paper) both;
  transition: color var(--t-fast) var(--ease-out); }
.tan-letter-strip img { width: 76px; height: 76px; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(var(--sh-rgb),.45));
  transition: translate var(--t-mid) var(--ease-out), filter var(--t-mid) var(--ease-out); }
.tan-letter-strip:hover { color: var(--gold-hi); }
.tan-letter-strip:hover img { translate: 0 -3px; filter: drop-shadow(0 8px 14px rgba(var(--sh-rgb),.55)) drop-shadow(0 0 10px rgba(var(--gold-rgb), .35)); }

/* 信笺弹层：壳根内 absolute 盖满，暗底模糊；藏纸整体 brightness 压暗一档贴近长安主题（叠色层会填掉毛边，故走 filter）；藏纸按 2:3 原比例居中（宽随壳宽与壳高取小），纸只带毛边，纹框是 CSS 双线（赭石外线、藏青内线）避开毛边内嵌，字区再退一步；正文在纸内自滚，钮行常驻 */
.tan-letter-veil { position: absolute; inset: 0; z-index: 45; background: var(--scrim); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: 20px; animation: veil-in var(--t-mid) var(--ease-out) both; }
.tan-letter-veil.tan-out { animation: veil-out var(--t-mid) var(--ease-out) both; pointer-events: none; }
@keyframes veil-in { from { opacity: 0; } }
@keyframes veil-out { to { opacity: 0; } }
.tan-letter { width: min(640px, 92cqw, calc((100cqh - 40px) * 2 / 3)); aspect-ratio: 2 / 3; position: relative; container-type: size;
  background: url('${ul}paper-tibet.webp') center / 100% 100% no-repeat;
  filter: brightness(.86) drop-shadow(0 3px 5px rgba(var(--sh-rgb),.4)) drop-shadow(0 24px 48px rgba(var(--sh-rgb),.55)); animation: tan-reveal var(--t-slow) var(--ease-paper) both; }
/* 纹框：毛边约占四边 4%，框退到 7%（cq 单位以 .tan-letter 为容器，横竖换算后等宽）；outline 画外线 */
.tan-letter::before { content: ''; position: absolute; inset: 5cqh 7cqw; pointer-events: none;
  border: 1px solid var(--paper-line-in); outline: 1px solid var(--paper-line-out); outline-offset: 3px; }
/* 字区：框内再退一步 */
.tan-letter-in { position: absolute; inset: 7.5cqh 10cqw 7cqh; display: flex; flex-direction: column; }
.tan-letter-scroll { flex: 1; min-height: 0; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; }
.tan-letter-head { text-align: center; font-size: var(--fs-head); letter-spacing: var(--ls-head); text-indent: var(--ls-head); color: var(--paper-ink); font-weight: 600; margin-bottom: .6em; }
/* 信文与正文同字同号同行距 */
.tan-letter-body p { margin: 0 0 .5em; text-indent: 2em; font-size: var(--fs-body); line-height: 2; letter-spacing: .3px; color: var(--paper-ink); text-align: start; }
.tan-letter-sign { text-align: right; padding-right: 1em; margin-top: .3em; font-size: var(--fs-body); letter-spacing: 4px; color: var(--paper-ink-dim); }
.tan-letter-foot { flex: none; display: flex; justify-content: flex-end; align-items: stretch; gap: 12px; margin-top: 12px; }
.tan-letter-btn { box-sizing: border-box; height: 36px; line-height: 34px; border: 1px solid rgba(var(--paper-ink-rgb), .45); background: none; cursor: pointer; font-family: inherit; color: var(--paper-ink);
  font-size: var(--fs-btn); letter-spacing: var(--ls-btn); text-indent: var(--ls-btn); padding: 0 16px;
  transition: color var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.tan-letter-btn:hover { border-color: var(--paper-ink); background: rgba(var(--paper-ink-rgb), .06); }
.tan-letter-btn.tan-primary { color: var(--on-red); background: var(--red); border-color: var(--red); }
.tan-letter-btn.tan-primary:hover { filter: brightness(1.1); }

/* 公主页顶书信行：素行不加框，信封小图＋题名＋来处＋答复态，悬停小字亮金 */
.tan-letter-row { display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; padding: 0 2px; cursor: pointer; text-align: left;
  border: none; background: none; font-family: inherit; color: var(--txt-dim); flex: none; }
.tan-letter-row img { width: 30px; height: 30px; object-fit: contain; }
.tan-letter-row b { color: var(--gold-hi); font-weight: 600; letter-spacing: 3px; font-size: 13px; }
.tan-letter-row span { font-size: 12.5px; letter-spacing: 1px; transition: color var(--t-fast) var(--ease-out); }
.tan-letter-row small { margin-left: auto; font-size: 12px; letter-spacing: 2px; color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
.tan-letter-row:hover span, .tan-letter-row:hover small { color: var(--gold-hi); }

`;var zi=`
/* ==== 窄桌面：侧栏收到 240、两侧留白降到 32，正文列随宽 597～740；读数组间距 40 收到 28 ==== */
@container tan (900px < width <= 1079px) {
  .tan-main { --col-side: max(32px, calc((100% - var(--read-col)) / 2)); }
  .tan-tb-face, .tan-tb-set { gap: 28px; }
}

@container tan (max-width: 900px) {
  /* ==== 主区：正文列封顶 700 居中，宽度不够才退到两侧各 22；底部只剩书写区 ==== */
  .tan-main { --col-side: max(22px, calc((100% - var(--read-col)) / 2)); }
  /* 状态栏留空放在顶栏内，让账头底色一直铺到屏幕顶边，不留一条纸色带 */
  .tan-topbar { height: calc(var(--top-h) + env(safe-area-inset-top, 0px)); padding-top: env(safe-area-inset-top, 0px); }
  /* iOS 滚动条不占位，不再从留白里扣槽宽，正文与书写区仍按 --col-side 对齐 */
  #tan-paper { padding: 22px var(--col-side) 16px; scrollbar-gutter: auto; }
  .tan-turn.tan-gm, .tan-turn.tan-zhu { line-height: 1.95; }
  #tan-writing { padding: 8px var(--col-side) calc(12px + env(safe-area-inset-bottom, 0px)); }
  #tan-send { width: 42px; height: 44px; font-size: 18px; }
  /* 木鱼中心对齐敕印中心：窄屏敕印宽 42，木鱼宽 34，故左移 21+17；抬高到书写区之上一指，随状态栏留空一起抬 */
  #tan-jump { bottom: calc(100px + env(safe-area-inset-bottom, 0px)); left: calc(100% - var(--col-side) - 38px); right: auto; }
  .tan-letter-veil { padding: 10px; }
  .tan-letter { width: min(96cqw, calc((100cqh - 20px) * 2 / 3)); }
  .tan-letter-strip img { width: 60px; height: 60px; }
  /* iOS Safari 聚焦字号 <16px 的输入框会放大页面 */
  #tan-shell-root input, #tan-shell-root textarea { font-size: 16px; }

  /* ==== 顶栏：侧栏开关＋时辰／铜钱／信众（居中，手机只时辰去标签），出卷钮（右） ==== */
  /* ==== 顶栏钮一套规格：32 点击区、8 内边距、16 图标；钮与读数隔 12，钮与钮隔 8（中心相距 40）；两端图标边与正文首末字对齐（留白＝正文留白－8） ==== */
  .tan-topbar { --tb-btn: 32px; --tb-pad: 8px; padding-left: calc(var(--col-side) - var(--tb-pad)); padding-right: calc(var(--col-side) - var(--tb-pad)); gap: 12px; }
  /* 侧栏开关回到一排里：只留线稿图标，不加框不填底，与右端工具栏同规格 */
  .tan-topbar > .tan-top-btn { position: relative; left: auto; top: auto; translate: none; flex: none; opacity: 1; width: var(--tb-btn); height: var(--tb-btn); padding: var(--tb-pad); }
  .tan-topbar > .tan-top-btn:active, .tan-topbar > .tan-top-btn:hover { color: var(--gold-hi); }
  /* 钮里两枚图标：侧栏／返回箭头，随窗态二选一；开坛窗时置灰 */
  .tan-top-btn.tan-ret svg:first-child { display: none; }
  .tan-top-btn.tan-ret svg:last-child { display: block; }
  .tan-top-btn[disabled] { opacity: .4; }
  /* 窄屏回到一排 flex：侧栏开关／读数／工具栏，工具栏不再绝对定位；读数在两端钮之间的空位里居中（不补边，宽度留给读数）；读数字阶字色字重双端同，600～900 只把组间距收到 20 */
  .tan-tb-face { justify-content: center; gap: 20px; padding: 0; scrollbar-gutter: auto; }
  .tan-topbar #tan-corner { position: static; translate: none; }
  .tan-tb-set { gap: 20px; }
  .tan-tb-time { flex: 0 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
  .tan-tb-time.tan-dim { color: var(--txt-faint); opacity: .6; }
  /* 手机（<600）：时辰去标签只留「日期 时辰」，铜钱（在藏绢帛）与信众的两字标签照留，字色字重同桌面端、字阶降到 12；组间距再收到 12；时辰仍留省略号兜底 */
  @container tan (max-width: 599px) {
    .tan-tb-time > span { display: none; }
    .tan-tb-face, .tan-tb-set { gap: 12px; }
    .tan-tb-time, .tan-tb-i { font-size: 12px; }
  }
  #tan-corner { gap: 8px; }
  #tan-corner button { color: var(--txt-faint); opacity: 1; width: var(--tb-btn); height: var(--tb-btn); padding: var(--tb-pad); }
  #tan-corner button:hover { color: var(--gold-hi); }
  #tan-corner button.tan-on { color: var(--gold-hi); }
  /* 玩法窗开着时收起出卷，免得误触退回酒馆；开坛窗仍留出卷 */
  #tan-corner.tan-away { display: none; }

  /* ==== 侧栏即左抽屉：八成宽整高，自左滑出把顶栏与正文推开，点栏顶的钮或遮罩收起，不接手势（滑出与推开是内核做的） ==== */
  .tan-side { border-right: 1px solid var(--line); overflow-y: auto; gap: 10px;
    padding: calc(8px + env(safe-area-inset-top, 0px)) 14px calc(14px + env(safe-area-inset-bottom, 0px)); }
  /* 短屏抽屉内容装不下时照滚，但不画桌面浏览器那条占位滚动条（真机本就是浮层细条） */
  .tan-side { scrollbar-width: none; }
  .tan-side::-webkit-scrollbar { display: none; }
  /* iOS 把可滚动面板单独合成一层，层内叠色纹理不混色直接盖上；改成同元素三层背景混色，数值上与原叠色等价 */
  .tan-side.tan-tex::before { display: none; }
  .tan-side { background: linear-gradient(color-mix(in srgb, var(--bg0) calc(100% - var(--tex-op) * 100%), transparent), color-mix(in srgb, var(--bg0) calc(100% - var(--tex-op) * 100%), transparent)),
    var(--tex) 0 0 / 1024px 1024px repeat, var(--bg0);
    background-blend-mode: normal, overlay, normal; }
  /* 抽屉头行：题字居中同桌面端，收起钮贴右，不画线 */
  .tan-plaque { height: 44px; }
  .tan-side > .tan-side-btn { top: calc(14px + env(safe-area-inset-top, 0px)); right: 14px; width: 32px; height: 32px; padding: 8px; opacity: 1; }
  .tan-side > .tan-side-btn:active { color: var(--gold-hi); }
  /* 整面板一条滚动，目录跟着面板走；有余量时六条同桌面端均分撑高（单条 84 封顶），装不下时不缩、整面板滚 */
  .tan-nav { flex: 1 0 auto; overflow: visible; }

  /* ==== 楼尾：变量在上自行折行，心声整块在下贴右（同行放不下四名签，不叫牌面与名签互挤） ==== */
  .tan-ff-vars { flex: 1 1 100%; }
  .tan-ff-vars:empty { display: none; }


  /* ==== 浮窗改全屏页：自顶栏下缘铺到底，顶栏活着（左钮变返回箭头），无遮罩无收窗叉，题签贴纸上缘 ==== */
  #tan-lift { top: calc(var(--top-h) + env(safe-area-inset-top, 0px)); background: none; backdrop-filter: none; }
  #tan-lift.tan-show, #tan-lift.tan-hide { animation: none; }
  #tan-lift .tan-held { width: 100%; height: 100%; }
  #tan-lift .tan-held h3 { left: 10px; top: 0; font-size: 13px; letter-spacing: 4px; padding: 16px 10px; }
  /* 窗内两侧留 14：裸文字（区名题、时局行、注）离屏边 14；自带 8 内边距的行表与折页内容落在 22，对齐正文首字 */
  #tan-lift .tan-held .tan-held-body { padding: 14px 14px calc(8px + env(safe-area-inset-bottom, 0px)); }
  .tan-folio { padding: 4px 8px 10px; }
  .tan-card { padding: 12px 0 11px; font-size: 13.5px; }
  .tan-card:has(> .tan-seal-btn) { padding-right: 0; }
  .tan-card b { padding-right: 34px; font-size: 14.5px; letter-spacing: 2px; }
  .tan-card .tan-seal-btn { position: static; display: block; margin: 8px 0 0 auto; }
  .tan-vc { padding: 14px 8px 14px; }
  .tan-atlas { flex-direction: column; overflow-y: auto; }
  .tan-atlas .tan-mapbox { width: 100%; height: auto; }
  /* 驿路长卷手机端横滚：盒宽随幅面，只滚不缩 */
  .tan-atlas .tan-mapbox.tan-road { width: auto; min-width: 720px; height: 288px; }
  .tan-atlas .tan-zlist-road { grid-template-columns: minmax(0, 1fr); }
  /* 页签栏：等宽一行，小字折到名下，尾注独占一行靠右 */
  .tan-tabs { gap: 0; flex-wrap: wrap; margin: -2px 0 0; padding-left: 30px; }
  .tan-tabs button { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 1px; padding: 4px 2px 6px; }
  .tan-tabs button .tan-n { margin-left: 0; font-size: 11px; line-height: 1.3; text-align: center; white-space: normal; }
  .tan-tabs > .tan-why { flex: 0 0 100%; margin: 4px 0 0; text-align: right; }
  .tan-tabs button .tan-red { position: absolute; top: 6px; right: 6px; margin: 0; translate: none; }
  .tan-wrow { flex-direction: column; overflow-y: auto; }
  .tan-wrow > .tan-wcol { align-self: auto; width: 100%; flex: none; }
  .tan-portrait { width: 100%; flex-direction: column; align-items: center; gap: 10px; }
  .tan-portrait .tan-pic { width: 220px; flex: none; }
  .tan-tabs.tan-tabs-sub { padding-left: 0; }
  .tan-gallery { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .tan-bond-win .tan-wcol { gap: 18px; }
  .tan-grid.tan-c3, .tan-grid.tan-c4 { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 16px; }
  .tan-halls { grid-template-columns: minmax(0, 1fr); grid-template-rows: none; margin: 0; }
  .tan-hall { grid-template-rows: auto; grid-row: auto; }
  .tan-hall-act:empty { display: none; }
  .tan-cave-grid, .tan-bp-grid { gap: 18px 12px; }
  .tan-stratum { grid-template-columns: minmax(0, 1fr); row-gap: 8px; padding: 12px 0; }
  .tan-stratum-name { writing-mode: horizontal-tb; justify-self: start; letter-spacing: 3px; padding-top: 0; }
  .tan-store-row { grid-template-columns: minmax(0, 1fr); }
  .tan-store-head { flex-direction: row; justify-content: flex-start; gap: 10px; }
  .tan-store-pic { width: 44px; height: 44px; margin-bottom: 0; }
  .tan-store-row .tan-card.tan-wide { grid-column: 1 / -1; }
  .tan-card.tan-fac { grid-template-rows: auto; grid-row: auto; }
  .tan-detail-top { grid-template-columns: minmax(0, 1fr); gap: 12px 0; }
  .tan-hall-pic { aspect-ratio: 5 / 2; }
  .tan-picks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .tan-picks.tan-row { grid-template-columns: minmax(0, 1fr); gap: 2px; }
  .tan-craft .tan-grow textarea { height: 140px; }
  .tan-loan-line input[name="抵押"] { width: 100%; }
  .tan-debt { display: flex; flex-wrap: wrap; gap: 2px 14px; }
  .tan-shoplist { width: 100%; }
  .tan-picks.tan-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .tan-form input.tan-w { width: 100%; }
  #tan-lift.tan-gate .tan-held { width: 100%; height: 100%; max-height: none; }
  /* 两步都竖排不再吃满高：立绘在文字上方裁方形从脸往下留，宗风图回 3:2，五格一列 */
  .tan-gate-two, .tan-gate-opening .tan-gate-two { flex-direction: column; flex: none; gap: 14px; }
  .tan-gate-portrait { width: 100%; height: auto; max-width: none; aspect-ratio: 1; object-position: center 15%; }
  .tan-rite-pic.tan-gate-pic { flex: none; aspect-ratio: 3 / 2; }
  .tan-picks.tan-gate-picks { grid-template-columns: minmax(0, 1fr); grid-auto-rows: auto; gap: 6px; }
  .tan-pick.tan-gate-sect { align-items: flex-start; text-align: start; padding: 8px 12px 6px; }
  .tan-gate-foot { flex-wrap: wrap; gap: 6px 18px; }
  .tan-gate-foot .tan-why { position: static; translate: none; width: 100%; text-align: center; padding-top: 0; }
  .tan-gate-back { position: static; translate: none; padding: 0; }
  #tan-lift.tan-gate .tan-held h3 { padding: 22px 20px 0; font-size: 22px; letter-spacing: 8px; text-indent: 8px; }
  #tan-lift.tan-gate .tan-held .tan-held-body { padding: 14px 8px 10px; }
}

`;var Ci=Si+Ei+Li+Ti+_i+Ai+$i+zi;var gt=t=>'<svg viewBox="0 0 24 24">'+t+"</svg>",H={pen:gt('<path d="M4 20l1-5L16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 2z"/><path d="M14.5 5.5l3 3"/>'),trash:gt('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/>'),regen:gt('<path d="M20 11a8 8 0 0 0-13.7-4.7L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5"/><path d="M20 20v-4.5h-4.5"/>'),up:gt('<path d="M12 19V5M5 12l7-7 7 7"/>'),down:gt('<path d="M12 5v14M19 12l-7 7-7-7"/>'),side:gt('<rect x="3" y="4.5" width="18" height="15"/><path d="M9 4.5v15"/>'),close:gt('<path d="M5 5l14 14M19 5L5 19"/>'),back:gt('<path d="M16 5l-8 7 8 7"/>'),chev:gt('<path d="M9 6l6 6-6 6"/>'),lock:gt('<rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>')};var q=["苏白芷","裴清砚","叶玄薇","萧夜沉","赤玛央金"],Hi={苏白芷:"药铺医女",裴清砚:"裴府才女",叶玄薇:"玄都女冠",萧夜沉:"西市女商",赤玛央金:"落难蕃女"},Ne={苏白芷:"tan-su",裴清砚:"tan-pei",叶玄薇:"tan-ye",萧夜沉:"tan-xiao",赤玛央金:"tan-chi"},hn=["待度欲种","一灌·瓶灌","二灌·密灌","三灌·慧灌","四灌·大乐"],Pt=t=>Math.max(0,hn.indexOf(String(t||"").trim())),y=t=>"https://i.postimg.cc/"+t,xa={苏白芷:{work:[["日常药铺",y("PfCzdpVb/su-bai-zhi-ri-chang-yao-pu.png")],["后院药圃",y("NGK7Q9C9/su-bai-zhi-hou-yuan-yao-pu.png")],["高门出诊",y("bNbxtXhb/su-bai-zhi-gao-men-chu-zhen.png")],["灯下私语",y("GhYFy0CH/su-bai-zhi-deng-xia-si-yu.png")]],rite:[["法事佛殿",y("SN86M0hQ/su-bai-zhi-fa-shi-fu-dian.png")],["地宫坛城",y("ryDCq0ZC/su-bai-zhi-de-gong-tan-cheng.png")]],grade:[["一灌瓶灌",y("QCFBs7XJ/su-bai-zhi-yi-guan-ping-guan.png")],["二灌密灌",y("J0symX1x/su-bai-zhi-er-guan-mi-guan.png")],["三灌慧灌",y("8c7FDv1b/su-bai-zhi-san-guan-hui-guan.png")],["四灌大乐",y("8k7BTJX4/su-bai-zhi-si-guan-da-le.png")]]},裴清砚:{work:[["书斋挥毫",y("htd9TkRD/pei-qing-yan-shu-zhai-hui-hao.png")],["上元灯船",y("P5wmYgnd/pei-qing-yan-shang-yuan-deng-chuan.png")],["煮茶失误",y("k41Vksd7/pei-qing-yan-zhu-cha-shi-wu.png")],["风雪庭院",y("90D4V9WP/pei-qing-yan-feng-xue-ting-yuan.png")]],rite:[["法事求道",y("Qt4BRmr8/pei-qing-yan-fa-shi-qiu-dao.png")],["荒野古刹",y("76sCp9yY/pei-qing-yan-huang-ye-gu-sha.png")]],grade:[["一灌瓶灌",y("xT7vk0h2/pei-qing-yan-yi-guan-ping-guan.png")],["二灌密灌",y("XYCwdR6V/pei-qing-yan-er-guan-mi-guan.png")],["三灌慧灌",y("YqV64pZj/pei-qing-yan-san-guan-hui-guan.png")],["四灌大乐",y("V6GS3gcm/pei-qing-yan-si-guan-da-le.png")]]},叶玄薇:{work:[["街头执法",y("3JJhyhpm/ye-xuan-wei-jie-tou-zhi-fa.png")],["校场切磋",y("hv0KkPmd/ye-xuan-wei-xiao-chang-qie-cuo.png")],["西市肉饼",y("m224c4M7/ye-xuan-wei-xi-shi-rou-bing.png")],["丹房格物",y("TPZ2msGq/ye-xuan-wei-dan-fang-ge-wu.png")]],rite:[["斋醮法坛",y("T1cTzYby/ye-xuan-wei-zhai-jiao-fa-tan.png")],["地宫对峙",y("cCcdp43v/ye-xuan-wei-de-gong-dui-zhi.png")]],grade:[["一灌瓶灌",y("SKwQ8Pq9/ye-xuan-wei-yi-guan-ping-guan.png")],["二灌密灌",y("s2tfSLyS/ye-xuan-wei-er-guan-mi-guan.png")],["三灌慧灌",y("TPZ2msG5/ye-xuan-wei-san-guan-hui-guan.png")],["四灌大乐",y("qqGpPMKk/ye-xuan-wei-si-guan-da-le.png")]]},萧夜沉:{work:[["酒肆当垆",y("gkPw1nC6/xiao-ye-chen-jiu-si-dang-lu.png")],["暗市验货",y("zX1L4Vs5/xiao-ye-chen-an-shi-yan-huo.png")],["内室鉴香",y("TwLLvm29/xiao-ye-chen-nei-shi-jian-xiang.png")],["后院听雨",y("MTMMJRZt/xiao-ye-chen-hou-yuan-ting-yu.png")]],rite:[["大寺供香",y("dQCkW8xV/xiao-ye-chen-da-si-gong-xiang.png")],["法事密谋",y("nctsNCyh/xiao-ye-chen-fa-shi-mi-mou.png")]],grade:[["一灌瓶灌",y("gkRVZ9W8/xiao-ye-chen-yi-guan-ping-guan.png")],["二灌密灌",y("0QT6kQrw/xiao-ye-chen-er-guan-mi-guan.png")],["三灌慧灌",y("pThhM8VC/xiao-ye-chen-san-guan-hui-guan.png")],["四灌大乐",y("MZBMsyrm/xiao-ye-chen-si-guan-da-le.png")]]},赤玛央金:{work:[["洁白哈达",y("QC8bq0kY/chi-ma-yang-jin-jie-bai-ha-da.png")],["西市摊头",y("MK47cWNx/chi-ma-yang-jin-xi-shi-tan-tou.png")],["长袖踏歌",y("7Yc3Cxd4/chi-ma-yang-jin-zhang-xiu-ta-ge.png")],["王宫灯影",y("D0vgcBdD/chi-ma-yang-jin-wang-gong-deng-ying.png")]],rite:[["红山回望",y("HsKwJpRC/chi-ma-yang-jin-hong-shan-hui-wang.png")],["圣湖濯足",y("yx1PTvXn/chi-ma-yang-jin-sheng-hu-zhuo-zu.png")]],grade:[["一灌瓶灌",y("Hx4z5f5t/chi-ma-yang-jin-yi-guan-ping-guan.png")],["二灌密灌",y("d1m6dzd5/chi-ma-yang-jin-er-guan-mi-guan.png")],["三灌慧灌",y("FRgpc2cn/chi-ma-yang-jin-san-guan-hui-guan.png")],["四灌大乐",y("RFQdfjfP/chi-ma-yang-jin-si-guan-da-le.png")]]}};function ma(t,e){let n=xa[t];return n?n.work.concat(n.rite,n.grade.slice(0,Pt(e))):[]}function Ri(t,e){let n=xa[t];return n?n.grade.slice(Pt(e)).map((a,o)=>hn[Pt(e)+o+1]):[]}function qi(t,e){let n=xa[t];if(!n)return null;let a=Pt(e);return a>0?n.grade[a-1]:n.work[0]}var He=["城南道场","西市延寿","平康崇仁","东市宣阳","相国府第","细民坊巷","朱雀天街","西南冷坊","曲江池畔","皇城宫阙"],bn=["陇山关隘","秦州渭谷","河州渡口","鄯州湟谷","赤岭青海","柏海河源","玉树河谷","唐古那曲"],Bi=["大昭惹萨","小昭市坊","红山王宫","雅隆山南","逻些道场"],Fi={陇山关隘:"出唐入蕃",秦州渭谷:"蕃治汉城",河州渡口:"凤林渡河",鄯州湟谷:"东道军镇",赤岭青海:"界碑湖畔",柏海河源:"黄河之源",玉树河谷:"腹地东门",唐古那曲:"雪山绝境"},It=t=>["在途","已抵逻些"].includes(t.吐蕃之行.进藏行程),ha=t=>t.吐蕃之行.进藏行程==="在途",ba=t=>t.吐蕃之行.进藏行程==="在途"?"road":t.吐蕃之行.进藏行程==="已抵逻些"?"lhasa":"home",va={陇山关隘:[78.5,50],秦州渭谷:[72.5,66],河州渡口:[67,41],鄯州湟谷:[61,12],赤岭青海:[51,12],柏海河源:[34,26],玉树河谷:[38,70],唐古那曲:[20,62]},Gi={大昭惹萨:"M370 320 L660 320 L660 540 L370 540 Z",小昭市坊:"M250 160 L760 160 L760 320 L250 320 Z",红山王宫:"M10 270 L250 270 L250 330 L340 330 L340 540 L10 540 Z",雅隆山南:"M240 755 L950 755 L950 920 L240 920 Z",逻些道场:"M760 390 L995 390 L995 545 L760 545 Z"},Vi={大昭惹萨:["大昭寺",50,46],小昭市坊:["小昭市坊",50,23],红山王宫:["红山王宫",16,40],雅隆山南:["雅隆山南",58,82],逻些道场:["逻些道场",86,48]},Ui={城南道场:"M440 870 L575 870 L575 985 L440 985 Z",西市延寿:"M100 427 L370 427 L370 597 L100 597 Z",平康崇仁:"M614 359 L708 359 L708 544 L614 544 Z",东市宣阳:"M614 544 L708 544 L708 427 L808 427 L808 544 L905 544 L905 597 L614 597 Z",相国府第:"M614 243 L905 243 L905 544 L808 544 L808 427 L708 427 L708 359 L614 359 Z",细民坊巷:"M100 243 L370 243 L370 427 L100 427 Z",朱雀天街:"M370 497 L614 497 L614 830 L433 830 L433 630 L370 630 Z",西南冷坊:"M100 597 L370 597 L370 630 L433 630 L433 830 L100 830 Z",曲江池畔:"M614 597 L905 597 L905 894 L808 894 L808 830 L614 830 Z",皇城宫阙:"M370 243 L390 243 L390 195 L600 195 L600 17 L772 17 L772 245 L614 245 L614 497 L370 497 Z"},Wi={城南道场:["城南道场",49.6,90.6],西市延寿:["西市",22.9,50],平康崇仁:["平康坊",64.5,44.1],东市宣阳:["东市",74,50],相国府第:["相国府第",74.2,29.4],细民坊巷:["细民坊巷",22.9,32.7],朱雀天街:["朱雀大街",39.2,55],西南冷坊:["西南冷坊",22.9,69.7],曲江池畔:["曲江池",74.2,69.7],皇城宫阙:["皇城",48,36.1]},ga={城南道场:["城南道场",54,85],长安:["长安",55,42],城外:["城外",60,12]},xl={大昭惹萨:[50,46],小昭市坊:[50,23],红山王宫:[16,40],雅隆山南:[58,82],逻些道场:[86,48]},ml={home:"map-panorama.webp",road:"map-road.webp",lhasa:"map-lhasa.webp"};function Ki(t){let e=ba(t),n=String(t.时空.当前地界||"").split("/")[0].trim(),a=null;if(e==="road"){let o=va[n];a=o?[n,o[0],o[1]]:null}else if(e==="lhasa"){let o=xl[n];a=o?[n,o[0],Math.min(96,Math.max(4,Math.round((o[1]-100/6)/(200/3)*1e3)/10))]:null}else a=ga[n]||(n&&!He.includes(n)?ga.城外:n?ga.长安:null);return{mode:e,src:ml[e],pin:a}}var Mi={会昌:841,大中:847,咸通:860,乾符:874,广明:880,中和:881,光启:885,文德:888,龙纪:889,大顺:890,景福:892,乾宁:894,光化:898,天复:901,天祐:904};function hl(t){let e=/^(..)(元|[一二三四五六七八九十]+)年$/.exec(String(t||"").trim());if(!e||!Mi[e[1]])return-1;let n=0,a=0;for(let o of e[2])o==="元"?n=1:o==="十"?(n+=(a||1)*10,a=0):a="一二三四五六七八九".indexOf(o)+1;return Mi[e[1]]+n+a-1}var Oi={841:"赵归真入宫建醮",842:"勒令违戒僧尼还俗",843:"泽潞用兵搜刮铜钱",844:"强拆私刹禁绝俗讲",845:"敕命尽毁天下佛寺",846:"武宗崩 宣宗诛道复寺"},bl=t=>Oi[t]||(t>=860?"会昌旧事已远":t>=847?"大中复佛 天下建寺":Oi[841]),vl=t=>t.吐蕃之行.赞普遇刺?"赞普遇刺":"灭佛令下",vn=(t,e)=>It(t)?{k:"蕃地时局",v:(e.年序号>=0?e.年名:"会昌元年")+" "+vl(t),cls:t.吐蕃之行.赞普遇刺?"tan-red":""}:{k:"灭佛大势",v:(e.年序号>=0?e.年名:"会昌元年")+" "+bl(e.年序号>=0?e.公元:841),cls:""},ji=["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],Pi={一月:"正月",腊月:"十二月"};var Zi=[[0,1,"元日",0,"官民贺岁饮屠苏，市肆歇业数日"],[0,15,"上元",1,"三日弛禁，满城夜游赏灯"],[0,30,"晦日",0,"士民结伴出城水边送穷"],[1,29,"寒食",0,"家家禁火冷食"],[2,1,"清明",0,"出城上坟踏青，城外秋千蹴鞠"],[2,3,"上巳",0,"士民赴曲江水边祓禊宴饮"],[3,8,"浴佛",0,"诸寺施香汤设法会，百姓进香"],[4,5,"端午",0,"缠五色丝，浐水曲江看竞渡"],[6,7,"七夕",0,"妇人庭中摆瓜果乞巧"],[6,15,"盂兰盆",0,"各处设斋供僧超度，富贵人家出资做法事"],[8,9,"重阳",0,"乐游原登高，佩茱萸饮菊酒"],[10,15,"冬至",0,"官府休假，晚辈献鞋袜，亲友走动"],[11,30,"岁除",0,"傩队沿街驱疫，各家通宵守岁"]],wl=[[3,15,"萨嘎达瓦",0,"佛诞成道日，巡像转经遵令停办，信众暗中绕城"],[5,15,"赛马会",1,"盛夏草滩赛马摔跤射箭，四方牧民聚饮青稞酒"],[6,7,"沐浴节",3,"弃山星现，男女老幼下吉曲河洗浴七日"],[7,1,"望果节",0,"青稞熟前绕田转圈，赛马射箭，庄园宴饮"],[9,30,"古突夜",0,"年尾吃面团驱鬼，全家举火把送鬼出门"],[10,1,"吐蕃新年",1,"部族聚在开阔地煨桑祭天，杀羊祈赞普长寿，互送节礼"]],yl=["破败草庵","庄严精舍","敕赐法堂"],kl={庄严精舍:200,敕赐法堂:1e3},Sl={破败草庵:"殿宇陈旧，泥佛落尘，香客罕至",庄严精舍:"殿阁一新，钟磬有声，香客盈门",敕赐法堂:"朝廷题额高悬，自此有名分在身"},El={西市延寿:"scene-xishi.webp",平康崇仁:"scene-pingkang.webp",东市宣阳:"scene-dongshi.webp",相国府第:"scene-xiangfu.webp",细民坊巷:"scene-ximin.webp",朱雀天街:"scene-tianjie.webp",西南冷坊:"scene-lengfang.webp",曲江池畔:"scene-qujiang.webp",皇城宫阙:"scene-huangcheng.webp",陇山关隘:"scene-longshan.webp",秦州渭谷:"scene-qinzhou.webp",河州渡口:"scene-hezhou.webp",鄯州湟谷:"scene-shanzhou.webp",赤岭青海:"scene-chiling.webp",柏海河源:"scene-baihai.webp",玉树河谷:"scene-yushu.webp",唐古那曲:"scene-naqu.webp",大昭惹萨:"scene-dazhao.webp",小昭市坊:"scene-xiaozhao.webp",红山王宫:"scene-hongshan.webp",雅隆山南:"scene-yalong.webp",逻些道场:"scene-luoxie.webp"},Ii={破败草庵:"scene-hall-1.webp",庄严精舍:"scene-hall-2.webp",敕赐法堂:"scene-hall-3.webp"},wa=t=>String(t.时空.当前地界||"").split("/")[0].trim(),Ni={钉封家庙:"scene-luoxie.webp",启封经堂:"scene-luoxie-2.webp",王廷供殿:"scene-luoxie-3.webp"};function ya(t){let e=wa(t);return e==="城南道场"?Ii[t.道场.正殿等级]||Ii.破败草庵:e==="逻些道场"?Ni[t.道场.正殿等级]||Ni.钉封家庙:El[e]||""}var Ll={破败草庵:"hall-1-hut.webp",庄严精舍:"hall-2-vihara.webp",敕赐法堂:"hall-3-edict.webp"},Tl={破败草庵:["一倍","市井细民","无敕额的私刹，官府清查易拆"],庄严精舍:["二倍","豪商命妇","开无尽藏放贷"],敕赐法堂:["四倍","豪门贵客","敕额官寺，官府清查不拆"]},ut=["粗成","精工","天工"],Xi={粗成:"tan-q1",精工:"tan-q2",天工:"tan-q4"},Re={粗成:25,精工:100,天工:200},wn={精工:75,天工:100},kt=["地面","地下一层","地下二层","地下三层"],yn={地下二层:150,地下三层:300},pe=t=>Math.min(3,Math.max(1,Number(t.道场.地宫深度)||1)),ka=t=>kt.slice(0,pe(t)+1),kn=(t,e)=>kt.includes(e.层)?e.层:(B(t).蓝图.find(n=>n.名===e.名)||{}).层||"地下一层",Sa={无:3,粗成:5,精工:8,天工:12},Ea={教务:10,法事:20,暗账:50},Yi={教务:"信众满十人开启",法事:"信众满二十人开启",暗账:"信众满五十人开启",库藏:"建成库房开启",同心缕:"结识女主开启"},St=[{kind:"药品",price:15,shop:"丹房",words:["丹房"],ph:["醉仙散","饮之如坠云雾，半个时辰方醒"]},{kind:"道具",price:30,shop:"机关声光室",words:["机关","声光"],ph:["悬丝佛手","暗牵细丝，佛手于香烟中自举"]},{kind:"法器",price:50,shop:"熔金工坊",words:["熔金","工坊","作坊"],ph:["鎏金法铃","灌顶仪轨摇铃，声闻地宫"]}],Ji=["密坛","坛城","坛场"],_l=[{名:"丹房",层:"地面",用途:"煎炼迷香安神散一类药物",说明:"采后院药圃所种曼陀罗、颠茄与诸般草药，煎炼迷香、安神散一类药物。药圃翻土重种，屋内架起药炉、药臼与分馏的铜管蒸器，炉火昼夜不熄。"},{名:"宿曜星堂",层:"地面",用途:"推命断卦，关门私谈攻心",说明:"教主在此为香客推命断卦，也与贵客关起门来私谈，攻其心防。偏殿辟出的静室，墙上张挂二十八宿星图与地狱变相图，一几一灯，门一合便与外间隔绝。"},{名:"居士客房",层:"地面",用途:"留宿香客贵人，受药静养",说明:"留宿远来的香客与贵重客人，受药调理、静养过夜都在此处。后院僧房修葺成几间厢房，素帐矮榻，窗下一炉安神香，白日看是清修所在。"},{名:"护摩火坛",层:"地面",用途:"火祭焚物祈禳，法事压轴",说明:"火祭与大场面法事的压轴之处，焚物祈禳，烈焰冲天时满场信众跪倒。庭前垒石为坛，坛底暗铺松脂与白磷，投物入火便爆出异色火光。"},{名:"曼荼罗密坛",层:"地下一层",用途:"灌顶双修与一切秘密仪轨",说明:"地宫核心，灌顶、双修与一切秘密仪轨皆在此举行。地面铺厚毡软垫，正中一座雕花法座，四角长明灯环列，幔帐低垂，四壁密教画像在灯影里若隐若现。"},{名:"温汤池",层:"地下一层",用途:"受灌者沐浴香汤，净身敷药",说明:"受灌者在此沐浴香汤、净身敷药，而后登坛。引泉修筑的药浴池，池底走火道加温，水面终年浮着一层药气与热雾。"},{名:"机关声光室",层:"地下一层",用途:"操弄灯影佛语造神迹，制机巧道具",说明:"操弄灯影、佛语与钵鸣，在坛场造出种种神迹，也制作诸般机巧道具。法座后方的夹层暗室，内设凹面铜镜、通向正殿佛像腹腔的传声铜管、调光风阀与一槽水银，一人在暗处便可号令满堂。"},{名:"熔金工坊",层:"地下二层",用途:"熔金销赃，铸嘎巴拉碗金刚杵",说明:"将带记号的金银首饰熔成无记号的金条，也铸嘎巴拉碗、金刚杵一类法器。地宫下风处开一座排烟暗窑，炉火与锤声被厚土掩住，烟气顺暗道散入后山。"},{名:"夹壁密档",层:"地下二层",用途:"收存发露状血契与暗账",说明:"收存入教者的发露状与血契、记载外人把柄与债契的簿册，以及伪造的路引文牒。地宫夹墙里凿出的暗阁，一道假壁封门，非教主亲启无人知其所在。"},{名:"暗室地牢",层:"地下二层",用途:"拘禁细作背约者，逼写发露状",说明:"拘禁细作与背约之人，逼其亲笔写下发露状，再以此拿捏。地宫深处一间封闭暗室，铁环锁链嵌在土壁上，一盏孤灯，昼夜不分。"},{名:"库房",层:"地下一层",用途:"收储成药道具法器，分屉存放",说明:"收储制成的药品、道具与法器，分屉存放，随取随用。干燥土窖里搭起木架与屉匣，以石灰防潮，每屉贴签，教主一看便知存余几何。"},{名:"无尽藏柜坊",层:"地下二层",用途:"放贷立契收息，以钱债拴人",说明:"以教团之名向外放贷，立契收息，借钱债将人拴住。账房模样的柜坊，柜内置契匣与算筹，金银另藏暗格，一本账簿记满城欠户。"}],Al={丹房:"fac-danfang.webp",宿曜星堂:"fac-xingtang.webp",居士客房:"fac-kefang.webp",护摩火坛:"fac-huotan.webp",曼荼罗密坛:"fac-mitan.webp",温汤池:"fac-wentang.webp",机关声光室:"fac-jiguan.webp",熔金工坊:"fac-rongjin.webp",夹壁密档:"fac-midang.webp",暗室地牢:"fac-dilao.webp",库房:"fac-kufang.webp",无尽藏柜坊:"fac-guifang.webp"},$l={粗成:"own-1-rough.webp",精工:"own-2-fine.webp",天工:"own-3-grand.webp"},Qi="loan-guifang.webp",zl=["钉封家庙","启封经堂","王廷供殿"],Cl={启封经堂:200,王廷供殿:1e3},Ml={钉封家庙:"木板横封殿门冷落，唯从后院出入",启封经堂:"封条既除酥油重燃，还俗僧客登门",王廷供殿:"金顶重光宝幢高悬，王廷盟书在案"},Ol={钉封家庙:"hall-lx-1-sealed.webp",启封经堂:"hall-lx-2-opened.webp",王廷供殿:"hall-lx-3-court.webp"},jl={钉封家庙:["一倍","咒师属民","封条未除之私庙，兵差可查可夺"],启封经堂:["二倍","还俗僧与牧户","开青稞义仓放贷"],王廷供殿:["四倍","尚论王妃","王廷盟书在手，兵差不查不夺"]},Pl=[{名:"丹房",层:"地面",用途:"炼制迷香安神散，配红花雪莲",说明:"采高原红花、雪莲与麝香，配以汉地带来的曼陀罗种子，煎炼迷香与安神药散。碉房一角架起药炉药臼，牛粪慢火昼夜不熄，苦涩药气混着酥油香味飘满屋子。"},{名:"译经房",层:"地面",用途:"译校法本，借谱系正名攻心",说明:"教主与赤玛央金在此译校法本，将摩诃瑜伽残卷与汉地密续对勘为完整谱系。房内整齐堆叠贝叶梵本与藏纸卷轴，长案上摆着朱砂墨汁、骨制尺压与两盏酥油铜灯。"},{名:"碉房客舍",层:"地面",用途:"留宿远客贵人，受药静养",说明:"留宿远道而来的咒师、行商与世家贵人，在此受药调理并静养过夜。后院僧房修葺得齐整避风，铺着厚实氆氇与羊毛毡垫，窗下铜炉里常年燃着柏枝桑烟。"},{名:"煨桑火坛",层:"地面",用途:"煨桑火祭祈禳，法事压轴",说明:"主持煨桑火祭与大场面祈禳法事，借冲天烈焰与松柏浓烟聚拢信众敬畏。前院中央以规整乱石砌成方坛，坛底暗设排烟气孔与火道，投掷祭品便能激起阵阵彩色火光。"},{名:"青稞义仓",层:"地面",用途:"贷青稞牲畜立契收息，以债拴人",说明:"借家庙之名向属民与落魄贵族贷放青稞或牛羊，立契收息并拴牢各方人手。粗石砌筑的仓房深处堆满木板粮囤，算筹与借契匣藏在暗柜后，账簿上写满各坊欠户名字。"},{名:"彩砂坛城",层:"地下一层",用途:"灌顶双修与一切秘密仪轨",说明:"地下核心秘所，灌顶受戒、双修调摄与诸般秘密仪轨皆在此处闭门举行。石地中央以五色矿物彩砂铺就繁复坛城，法座四周立着环形铜灯，四壁彩绘本尊在昏暗灯火里隐现。"},{名:"温泉净坛",层:"地下一层",用途:"受灌者沐浴温泉，净身敷药",说明:"受灌信徒在此沐浴温水、敷抹草药膏泥，荡涤身心后方可步入密坛。天然温泉水顺着石渠引入地窖深池，池面蒸腾着草药热雾，四周以整块花岗岩砌出宽阔阶台。"},{名:"机关声光室",层:"地下一层",用途:"操弄灯影佛语造神迹，制机巧道具",说明:"操演光影幻境与浑厚佛音以显现神迹，同时制作各类施法所需的机巧道具。法座后方的石壁夹室内架设凹面铜镜，传声铜管暗通佛像腹腔，几道遮光铁板可随意开合。"},{名:"尼婆罗工坊",层:"地下二层",用途:"熔金销赃，铸嘎巴拉碗金刚杵",说明:"雇佣尼婆罗巧匠熔化来历不明的金银财物，并锤锻打制嘎巴拉碗与金刚铃杵等密教法器。地窖下风处设有隐蔽的小型熔炉与风箱，打铁锤声被厚重石壁隔断，烟道顺着石缝排向深巷。"},{名:"经卷密窖",层:"地下二层",用途:"收存发露状血契与托付的经像",说明:"收存信徒的发露血契、记述外人把柄的密簿，以及世家托付避难的禁毁佛像与梵本。干燥石室由一道暗门假壁封隔，层层柏木架上密密麻麻码放着皮纸封套与漆木经夹。"},{名:"暗室地牢",层:"地下二层",用途:"拘禁细作背约者，逼写发露状",说明:"秘密扣押外来探子与背约之人，对其施加攻心与药理手段，逼其亲笔写下发露状。位于地窖最深处的逼仄石室，粗铁环与锁链深嵌石壁，只点一盏酥油单灯，不见日月晨昏。"},{名:"库房",层:"地下一层",用途:"收储成药道具法器，分屉存放",说明:"集中收储制作妥当的丹药、机巧道具与密宗法器，分门别类以便随取随用。高寒干燥的石壁下立满高大木架与抽屉，每格贴着蕃汉两样签条，各类物件存放得井然有序。"}],Il={丹房:"fac-lx-danfang.webp",译经房:"fac-lx-yijing.webp",碉房客舍:"fac-lx-keshe.webp",煨桑火坛:"fac-lx-huotan.webp",青稞义仓:"fac-lx-yicang.webp",彩砂坛城:"fac-lx-tancheng.webp",温泉净坛:"fac-lx-wenquan.webp",机关声光室:"fac-lx-jiguan.webp",尼婆罗工坊:"fac-lx-gongfang.webp",经卷密窖:"fac-lx-mijiao.webp",暗室地牢:"fac-lx-dilao.webp",库房:"fac-lx-kufang.webp"},Nl={粗成:"own-lx-1-rough.webp",精工:"own-lx-2-fine.webp",天工:"own-lx-3-grand.webp"},Di={长安:{三阶:yl,价:kl,看:Sl,得:Tl,殿图:Ll,顶阶条件:"须得敕额",凭据:"敕额",敕字:"敕",蓝图:_l,设施图:Al,自拟图:$l,贷:{词:"无尽藏",名:"无尽藏柜坊",契:"无尽藏贷与"},作坊:{药品:"丹房",道具:"机关声光室",法器:"熔金工坊"}},逻些:{三阶:zl,价:Cl,看:Ml,得:jl,殿图:Ol,顶阶条件:"须立盟书",凭据:"盟书",敕字:"盟",蓝图:Pl,设施图:Il,自拟图:Nl,贷:{词:"义仓",名:"青稞义仓",契:"义仓贷与"},作坊:{药品:"丹房",道具:"机关声光室",法器:"尼婆罗工坊"}}},Sn=t=>Di[t.道场.所在]?t.道场.所在:"长安",B=t=>Di[Sn(t)],tr={把柄:"banner-handle.webp",执事:"banner-steward.webp",明妃:"banner-consort.webp",委托:"banner-order.webp",工坊:"banner-craft.webp"},er="rite-grand.webp",La=["药品","道具","法器"],nr={药品:"store-drug.webp",道具:"store-tool.webp",法器:"store-ritual.webp"},Vt={库藏:12,暗账:5,法事委托:3,执事名册:24,明妃录:12},Et={兴造:(t,e,n,a,o)=>"【兴造】"+t+"（"+e+(o?"，"+o:"")+"）已破土动工，账房已扣"+h(a)+"贯，此笔不再入账。"+(n?"奇效议定："+n:""),开凿:(t,e)=>"【兴造】地宫向下开凿至"+t+"，匠人已趁夜动土，账房已扣"+h(e)+"贯，此笔不再入账。",升殿:(t,e)=>"【兴造】正殿改建"+t+"，匠人已开工动土，账房已扣"+h(e)+"贯，此笔不再入账。",升造:(t,e,n,a,o)=>"【兴造】"+t+"自"+e+"改造为"+n+"，匠人已动工，账房已扣"+h(o)+"贯，此笔不再入账。"+(a?"奇效议定："+a:""),工巧:(t,e,n)=>"【工巧】"+e+"「"+t+"」已拨资开炉，账房已扣"+h(n)+"贯，此笔不再入账。",兴造多:(t,e)=>"【兴造】"+h(t.length)+"事同举："+t.join("、")+"已一并破土动工，账房共扣"+h(e)+"贯，此笔不再入账。",工巧多:(t,e)=>"【工巧】"+h(t.length)+"事同炉："+t.join("、")+"已一并拨资开炉，账房共扣"+h(e)+"贯，此笔不再入账。",放贷:(t,e)=>"【无尽藏】放贷"+h(e)+"贯与"+t+"，立契画押，账房已出"+h(e)+"贯，此笔不再入账。",勒索:t=>"【勒索】凭簿上所记把柄，向"+t+"开口勒索。"},ar="零一二三四五六七八九";function ua(t){if(t===0)return"零";let e=["","十","百","千"],n="",a=!1,o=String(t);for(let i=0;i<o.length;i++){let r=+o[i],s=o.length-1-i;if(r===0){a=!0;continue}a&&(n+="零",a=!1),n+=ar[r]+e[s]}return o.length===2&&n.startsWith("一十")&&(n=n.slice(1)),n}function h(t){if(t=Math.max(0,Math.round(+t||0)),t<1e4)return ua(t);let e=Math.floor(t/1e4),n=t%1e4;return ua(e)+"万"+(n?(n<1e3?"零":"")+ua(n):"")}function F(t){t=Math.max(0,Math.round(+t||0));let e=Math.floor(t/1e3),n=t%1e3;return e?h(e)+"贯"+(n?h(n)+"文":""):n?h(n)+"文":"零贯"}var et=t=>Math.round((Number(_.get(t,"财务.铜钱"))||0)*1e3);function Nt(t){let e=String(t||"").split("/").map(l=>l.trim()),n=hl(e[0]),a=n<0?-1:n-841,o=(e[1]||"").replace(/^闰/,""),i=ji.concat(Object.keys(Pi)).filter(l=>o.startsWith(l)).sort((l,c)=>c.length-l.length)[0]||null,r=i?o.slice(i.length).replace(/日$/,""):"";i&&(i=Pi[i]||i);let s=Hl(r);return{年序号:a,年名:e[0]||"",公元:n,月序号:i?ji.indexOf(i):-1,月名:i,日:s,日文:r,时辰:e[2]||"",月标:a>=0&&i?e[0]+"/"+i:""}}function Hl(t){if(t=String(t||"").replace(/^初/,""),!t)return 0;if(/^\d+$/.test(t))return+t;let e=0,n=0;for(let a of t){let o=ar.indexOf(a);o>=0?n=o:a==="十"?(e+=(n||1)*10,n=0):a==="廿"?(e+=20,n=0):a==="卅"&&(e+=30,n=0)}return e+n}var Rl=t=>t.月序号*30+t.日;function ql(t,e=Zi){if(t.月序号<0||!t.日)return{今日:null,将至:null};let n=Rl(t),a=null,o=null;for(let[i,r,s,l,c]of e){let p=i*30+r,m=p-n;if(Math.abs(m)<=l){a={名:s,氛围:c};break}m>0&&m<=7&&(!o||m<o.余日)&&(o={名:s,余日:m})}return{今日:a,将至:o}}var Bl={元日:"fest-yuanri.webp",上元:"fest-shangyuan.webp",晦日:"fest-huiri.webp",寒食:"fest-hanshi.webp",清明:"fest-qingming.webp",上巳:"fest-shangsi.webp",浴佛:"fest-yufo.webp",端午:"fest-duanwu.webp",七夕:"fest-qixi.webp",盂兰盆:"fest-yulanpen.webp",重阳:"fest-chongyang.webp",冬至:"fest-dongzhi.webp",岁除:"fest-suichu.webp"},Fl={萨嘎达瓦:"fest-xue-sagadawa.webp",赛马会:"fest-xue-saima.webp",沐浴节:"fest-xue-muyu.webp",望果节:"fest-xue-wangguo.webp",古突夜:"fest-xue-gutu.webp",吐蕃新年:"fest-xue-xinnian.webp"};function Ta(t){let e=It(t),n=ql(Nt(t.时空.时间),e?wl:Zi).今日;return n?{名:n.名,氛围:n.氛围,src:(e?Fl:Bl)[n.名]}:null}var or="央金",ir=["汉字我学得慢，这封信写了好几个晚上，字歪歪扭扭的，你别笑我。","前些天西市来了队蕃商，我去帮着搬皮货，听他们讲了逻些的事。大昭寺的门被钉上了铁板，我母亲家的家庙也贴了封条。从前在宫里教我念经的上师，都被逼着脱了僧袍，进山去打猎。那天夜里我坐在窗边，一直坐到天亮。","有件事我一直瞒着你。我让你叫我阿央，其实我叫赤玛央金，我父亲是先前的赞普。在城南看你结手印、听你讲法的时候，我就认出来了，你的法和父亲宫里传下来的是一个路数，只是比我贴身藏着的残本全得多。父亲不在了，这法不能断在我手里，可我一个人护不住它。","我想请你跟我回逻些，在那里立道场。母亲家的旧宅和家庙都还在，地窖也深，能落脚，也能设坛。路很远，顺着驿道要走三个多月，过了赤岭就是风雪和草滩，去了，不知道哪年才能回长安。这些我都想过了，还是想问问你。","你不用急着回我。想好了，同我说声就好。"],En="应允央金所请，同去逻些立道场，即日筹备进藏。",qe=t=>t.吐蕃之行.进藏行程==="未出发"&&t.吐蕃之行.来信===!0;var Lt=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{},nt=t=>t==null?"":String(t),rr=t=>Math.max(0,Math.round(Number(t)||0)),Gl=t=>Math.max(0,Math.round((Number(t)||0)*1e3)/1e3);function j(t){let e=t?null:Dt(),n=t||e||{},a=i=>_.get(n,i),o={};return q.forEach(i=>{let r=Lt(a("核心女主."+i));o[i]={灌顶位阶:nt(r.灌顶位阶)||"待度欲种",心声:nt(r.心声).trim(),回想:Lt(r.回想)}}),{时空:{时间:nt(a("时空.时间")),当前地界:nt(a("时空.当前地界")),已结算至:nt(a("时空.已结算至"))},财务:{铜钱:Gl(a("财务.铜钱")),库藏:Lt(a("财务.库藏")),暗账:Lt(a("财务.暗账"))},道场:{宗风:nt(a("道场.宗风")),所在:nt(a("道场.所在"))||"长安",正殿等级:nt(a("道场.正殿等级"))||"破败草庵",敕额:a("道场.敕额")===!0||a("道场.敕额")==="true",盟书:a("道场.盟书")===!0||a("道场.盟书")==="true",地宫设施:Lt(a("道场.地宫设施")),地宫深度:rr(a("道场.地宫深度"))},教务:{法事委托:Lt(a("教务.法事委托")),信众:rr(a("教务.信众")),上次法会:nt(a("教务.上次法会"))},核心女主:o,执事名册:Lt(a("执事名册")),明妃录:Lt(a("明妃录")),系统:{已解锁:(Array.isArray(a("系统.已解锁"))?a("系统.已解锁"):[]).map(nt)},吐蕃之行:{进藏行程:nt(a("吐蕃之行.进藏行程"))||"未出发",赞普遇刺:a("吐蕃之行.赞普遇刺")===!0||a("吐蕃之行.赞普遇刺")==="true",抵达逻些日期:nt(a("吐蕃之行.抵达逻些日期")),来信:a("吐蕃之行.来信")===!0||a("吐蕃之行.来信")==="true",随行:Lt(a("吐蕃之行.随行"))},_empty:!t&&!e}}function Be(t,e,n){if(!t)return;t.classList.remove(e),t.offsetWidth,t.classList.add(e);let a=()=>t.classList.remove(e);t.addEventListener("animationend",function o(i){i.target===i.currentTarget&&(a(),t.removeEventListener("animationend",o))}),setTimeout(a,n||1200)}function Aa(t,e){if(!t||!e)return null;let n={},a=et(t),o=et(e);return a!==o&&(n.铜钱={from:a,to:o}),t.教务.信众!==e.教务.信众&&(n.信众={from:t.教务.信众,to:e.教务.信众}),[["正殿",t.道场.正殿等级,e.道场.正殿等级],["地界",t.时空.当前地界,e.时空.当前地界],["时间",t.时空.时间,e.时空.时间]].forEach(([i,r,s])=>{r!==s&&s&&(n[i]={text:!0,from:r,to:s})}),Ge.forEach(i=>{!Fe(t,i.key)&&Fe(e,i.key)&&(n["解锁."+i.key]={text:!0})}),q.forEach(i=>{let r=t.核心女主[i],s=e.核心女主[i];r.灌顶位阶!==s.灌顶位阶&&s.灌顶位阶&&(n["位阶."+i]={text:!0,from:r.灌顶位阶,to:s.灌顶位阶}),r.心声!==s.心声&&s.心声&&(n["心声."+i]={text:!0}),Object.keys(r.回想).length!==Object.keys(s.回想).length&&(n["回想."+i]={text:!0})}),Object.keys(n).length?n:null}var Ln=new Map;function sr(){Ln.clear()}function xt(t){if(Ln.has(t))return Ln.get(t);let e=null,n=on(t);if(n){let a=j(n),o=t>=1?on(t-1):null;e={D:a,delta:o?Aa(j(o),a):null}}return Ln.set(t,e),e}var _a=null;function lr(t){_a=t}function cr(){let t=_a;_a=null;let e=R();!t||!e||!W()||Object.keys(t).forEach(n=>{if(n.startsWith("解锁.")){Be(e.querySelector('.tan-nav-item[data-zone="'+n.slice(3)+'"]'),"tan-unveil",2600);return}e.querySelectorAll('[data-stat="'+n+'"]').forEach(a=>Be(a,"tan-flash",1500))})}var at="开坛",fr="开山立坛",Ve=t=>"https://i.postimg.cc/"+t,$a=[{key:"理趣大乐",line:"借香汤声色破戒，以肉身作坛城。"},{key:"造境摄魂",line:"布暗室光影与迷香，造神迹以摄魄。"},{key:"慈悲蛊心",line:"揽万般罪业于己，引信众倾心托付。"},{key:"尸陀修罗",line:"筑修罗黑坛，以严刑骨器降伏恶徒。"},{key:"罪业提线",line:"握满城公卿把柄，借利害掌提线之索。"}],Vl={理趣大乐:"sect-1-bliss.webp",造境摄魂:"sect-2-illusion.webp",慈悲蛊心:"sect-3-mercy.webp",尸陀修罗:"sect-4-asura.webp",罪业提线:"sect-5-strings.webp"},pr=[{title:"破庙开山",blurb:"会昌元年三月，你翻进城南荒庙，寻回后殿那口空窖。天亮后，有人拿钥匙开了山门。",route:"长安本篇",img:Ve("NGK7Q9C9/su-bai-zhi-hou-yuan-yao-pu.png")},{title:"贝叶问字",blurb:"会昌元年三月，你在崇仁坊书肆翻寻旧经，怀里一片贝叶残页滑落，被一个戴帷帽的女子拾起。",route:"长安本篇",img:Ve("76sCp9yY/pei-qing-yan-huang-ye-gu-sha.png")},{title:"天街胡饼",blurb:"会昌元年三月，你在朱雀天街看了一场当街拆穿的戏法，转身去买胡饼，拆戏法的人也来了。",route:"长安本篇",img:Ve("m224c4M7/ye-xuan-wei-xi-shi-rou-bing.png")},{title:"酒肆拼桌",blurb:"会昌元年三月，你傍晚进西市一家胡姬酒肆歇脚，与一位独坐的女子拼桌，从酒聊到了香。",route:"长安本篇",img:Ve("gkPw1nC6/xiao-ye-chen-jiu-si-dang-lu.png")},{title:"雪域缘起",blurb:"会昌元年三月，你回城南荒庙的第二日，揣一包药草进了西市，在胡商巷里遇见一个摆摊的蕃女。",route:"长安本篇，吐蕃外传",img:Ve("MK47cWNx/chi-ma-yang-jin-xi-shi-tan-tou.png")}],Ul=/^\s*(?:（第[^（）\n]*楼）\s*)?(?:<StatusPlaceHolderImpl\s*\/?>\s*)*【开场介绍】/,Tn=t=>Ul.test(String(t||""));function gr(){let t=U(0);return!!t&&Tn(t.message)}var ur=()=>P()>0&&gr(),de=null,Q=0,za=0;var fe=!1;function Ut(){if(P()===0&&gr())return!0;let t=j();return t._empty&&Ca()?!1:!t.道场.宗风}var Ca=()=>{let t=P();return t!=null&&t>0};function Wl(t,e){let n=r=>(String(t||"").match(r)||[])[1],a=Nt(n(/时间:\s*"([^"]+)"/)),o=n(/当前地界:\s*"([^"]+)"/),i=n(/铜钱:\s*([\d.]+)/);return[["开局",a.月名?a.月名+a.日文+" "+a.时辰:""],["地界",o?o.replace(/\//g," "):""],["铜钱",i!=null?F(Math.round(+i*1e3)):""],["通往",e.route||""]].filter(r=>r[1])}function xr(){let t=Qt();if(!t)return[];let e=[];return t.swipes.forEach((n,a)=>{Tn(n)||e.push(a)}),e}function mr(){let t=Ca(),e=Qt(),n=xr();n.length&&Q>=n.length&&(Q=n.length-1);let a=t||za===1,o,i;if(a){let r=$a.find(c=>c.key===de)||$a[0],s=$a.map(c=>`<label class="tan-pick tan-gate-sect" data-gate="sect" data-sect="${c.key}"><input type="radio" name="宗风" value="${c.key}"${de===c.key?" checked":""}><b>${c.key}</b><small>${c.line.replace("，","，<br>")}</small></label>`).join(""),l=!!de&&(t||n.length>0||!e);o=`<div class="tan-gate-body tan-gate-sects">
        <h4>宗风</h4>
        <div class="tan-gate-two">
          <div class="tan-rite-pic tan-gate-pic"><img src="${$(Vl[r.key])}" alt=""></div>
          <div class="tan-picks tan-gate-picks">${s}</div>
        </div>
      </div>`,i=(t?"":'<button class="tan-gate-back" data-gate="step" data-step="0">上一步</button>')+`<button class="tan-seal-btn tan-lg" data-gate="confirm" ${l?"":"disabled"}>开坛</button>
      <span class="tan-why">${l?"":"请先择定宗风"}</span>`}else{let r=pr[n[Q]!=null?n[Q]-1:0]||pr[0],l=n.length>1?`<div class="tan-gate-nav"><button data-gate="prev" ${Q===0?"disabled":""}>${H.chev}</button><span>${Q+1} / ${n.length}</span><button data-gate="next" ${Q===n.length-1?"disabled":""}>${H.chev}</button></div>`:"",c=Wl(e&&n[Q]!=null?e.swipes[n[Q]]:"",r).map(([p,m])=>`<dt>${p}</dt><dd>${C(m)}</dd>`).join("");o=`<div class="tan-gate-body tan-gate-opening">
        <h4>开场白</h4>
        <div class="tan-gate-two tan-gate-card">
          <img class="tan-gate-portrait" src="${r.img}" alt="">
          <div class="tan-gate-text">
            <div class="tan-gate-copy">
              <b>${r.title}</b>
              <p>${r.blurb}</p>
              ${c?`<dl class="tan-gate-ledger">${c}</dl>`:""}
            </div>
            ${l}
          </div>
        </div>
      </div>`,i='<button class="tan-seal-btn tan-lg" data-gate="step" data-step="1">下一步</button>'}return`<section class="tan-win tan-on tan-gate-win">
    ${o}
    <div class="tan-gate-foot">
      ${i}
    </div>
  </section>`}async function dr(t){let e={type:"message",message_id:t},n=Mvu.getMvuData(e)||{};if(!n.stat_data){let a=ve(t);if(!a)return!1;n.stat_data=a}return _.set(n,"stat_data.道场.宗风",de),await Mvu.replaceMvuData(n,e),!0}async function Kl(t){if(!(fe||!de)){fe=!0,t.disabled=!0;try{let e=Ca();if(!e){let a=xr()[Q];a!=null&&await oa(a)}if(!await dr(0)&&!e)throw new Error("开场账目未读到，稍后再试");if(e&&!await dr(P()))throw new Error("末楼账目未读到，稍后再试");st(),ht(!0),Wt(),J(),Ma()}catch(e){let n=Ot("#"+M.lift+" .tan-gate-foot .tan-why");n&&(n.textContent="出错: "+(e&&e.message?e.message:e));let a=Ot("#"+M.lift+' .tan-gate-foot button[data-gate="confirm"]');a&&(a.disabled=!1)}finally{fe=!1}}}function Ma(){Be(w(f.paper),"tan-paper-in",900);let t=R();if(!t)return;[...t.querySelectorAll(".tan-topbar, #tan-minimap, .tan-side .tan-nav-item")].forEach((n,a)=>{n.style.setProperty("--i",a),Be(n,"tan-kindle",1400)})}function hr(t){let e=t.target.closest("[data-gate]");if(!e||e.disabled)return;let n=e.dataset.gate;if(n==="sect"){t.target.tagName!=="INPUT"&&(de=e.dataset.sect,mt());return}if(n==="step"){za=+e.dataset.step,mt();return}if(n==="prev"){Q=Math.max(0,Q-1),mt();return}if(n==="next"){Q+=1,mt();return}n==="confirm"&&Kl(e)}function Oa(){return fe?!1:Ut()?(za=0,Tt(at),!0):!1}var ct=C,ja=t=>String(t||"").split("/")[0].trim(),Zl=t=>String(t||"").split("/").slice(1).map(e=>e.trim()).filter(Boolean).join(" "),yr=(t,e)=>Object.values(t).filter(n=>n&&n.类别===e).length,_t=t=>Object.entries(t.道场.地宫设施).map(([e,n])=>({名:e,用途:String((n||{}).用途||""),档次:ut.includes((n||{}).档次)?(n||{}).档次:"粗成",奇效:String((n||{}).奇效||""),层:String((n||{}).层||"")})),Pa=(t,e)=>_t(t).some(n=>e.words.some(a=>n.名.includes(a)||n.用途.includes(a))),Ia=t=>Object.entries(t.财务.暗账).filter(([,e])=>e&&e.类别==="债契"),Na=t=>Object.entries(t.财务.暗账).filter(([,e])=>e&&e.类别!=="债契"),Ha=t=>Object.entries(t.教务.法事委托).filter(([,e])=>e&&e.状态!=="已完成"),kr=t=>{let e=Nt(t.时空.时间);return!!e.月标&&t.教务.上次法会.trim()===e.月标},Sr=t=>{let e=_t(t).find(n=>n.名.includes("库房"));return e?Sa[e.档次]?e.档次:"粗成":"无"},_n=t=>Sa[Sr(t)],ge=(t,e)=>t.系统.已解锁.includes("同心缕:"+e)||!!t.核心女主[e].心声;function Fe(t,e){let n=t.系统.已解锁;return e==="营造"||n.includes(e)?!0:Ea[e]?t.教务.信众>=Ea[e]:e==="库藏"?Sr(t)!=="无":e==="同心缕"?q.some(a=>ge(t,a)):!1}var Xl=t=>h(Math.floor(Math.max(0,t)/1e3))+"贯",Yl=t=>t>1e4?Xl(t):F(t);function Er(t){let e=Nt(t.时空.时间),n=et(t);return{日期:e.年序号>=0?ct(e.月名||"")+ct(e.日文):ct(t.时空.时间.replace(/\//g," ")),时辰:ct(e.时辰),题:ct(t.时空.时间.replace(/\//g," ")),铜钱:{k:It(t)?"绢帛":"铜钱",v:Yl(n),stat:"铜钱"},信众:{k:"信众",v:h(t.教务.信众)+"人",stat:"信众"},大势:(()=>{let a=vn(t,e);return{k:a.k,v:ct(a.v),cls:a.cls}})()}}var br=t=>'<span class="tan-tb-i"'+(t.stat?' data-stat="'+t.stat+'"':"")+"><span>"+t.k+"</span><b"+(t.cls?' class="'+t.cls+'"':"")+">"+t.v+"</b></span>";function Jl(t){if(t._empty)return'<span class="tan-tb-time tan-dim">'+(ur()?"第零楼仍是入口面板，未选开场白，请删至第零楼再入卷":"此则无账目")+"</span>";let e=Er(t);return'<span class="tan-tb-time" data-stat="时间" title="'+e.题+'"><span>时辰</span><b>'+e.日期+" "+e.时辰+'</b></span><span class="tan-tb-set">'+br(e.铜钱)+br(e.信众)+"</span>"}var vr=(t,e,n)=>'<div class="tan-sr-row'+(n?" "+n:"")+'"'+(t.stat?' data-stat="'+t.stat+'"':"")+(e?' title="'+e+'"':"")+"><span>"+t.k+"</span><b"+(t.cls?' class="'+t.cls+'"':"")+">"+t.v+"</b></div>";function Ql(t){if(t._empty)return'<div class="tan-sr-row"><b class="tan-dim">此则无账目</b></div>';let e=Er(t),n=t.时空.当前地界,a=ja(n),o=Zl(n),r=(It(t)?"蕃地 ":a&&!He.includes(a)?"城外 ":"")+ct(a)+(o?'<i class="tan-loc-sub">'+ct(o)+"</i>":"");return vr({k:"地界",v:r,stat:"地界"},ct(n.replace(/\//g," ")))+vr(e.大势)}var Dl=t=>String(t||"").split("·")[0];function tc(t,e){if(!Fe(e,t))return Yi[t];switch(t){case"同心缕":{let n=q.filter(o=>ge(e,o)),a=n.reduce((o,i)=>Math.max(o,Pt(e.核心女主[i].灌顶位阶)),0);return h(n.length)+"人在册 最高"+ct(Dl(hn[a]))}case"库藏":return"存"+h(Object.keys(e.财务.库藏).length)+"件 共"+h(_n(e))+"屉";case"教务":return"执事"+h(Object.keys(e.执事名册).length)+"人 明妃"+h(Object.keys(e.明妃录).length)+"位";case"营造":return"正殿"+ct(e.道场.正殿等级)+" 地宫"+h(_t(e).length)+"处";case"法事":return"委托"+h(Ha(e).length)+"单";case"暗账":return"把柄"+h(Na(e).length)+"条 债契"+h(Ia(e).length)+"契"}return""}function ec(t){let e=w(M.minimap);if(!e)return;let{mode:n,src:a,pin:o}=Ki(t),i=e.querySelector(".tan-map-wrap img");i&&i.dataset.mode!==n&&(i.dataset.mode=n,i.src=$(a));let r=e.querySelector(".tan-map-pin");r&&(r.style.display=o?"":"none",o&&(r.style.left=o[1]+"%",r.style.top=o[2]+"%",r.dataset.label=o[0]))}function An(){let t=$t("letter:"+be(),"");if(!t.startsWith("accepted"))return!1;let e=Number(t.split("#")[1]);if(!Number.isInteger(e))return!0;let n=U(e);return!!n&&n.role==="user"&&mn.read(n).includes(En)}var $n=t=>!t._empty&&qe(t)&&!An(),nc=t=>It(t)||qe(t)&&An(),wr=!1;function ac(t){let e=nc(t),n=R();if(n&&n.classList.toggle("tan-xue",e),e!==wr){wr=e;try{window.parent.__TAN_XUE=e,window.parent.dispatchEvent(new CustomEvent("tan-theme",{detail:e}))}catch(a){O("theme:parent",a)}}}function Wt(){let t=j();ac(t);let e=w(M.topbar);e&&(e.innerHTML=Jl(t));let n=w(M.doom);n&&(n.innerHTML=Ql(t)),Ge.forEach(a=>{let o=Ot('.tan-nav-item[data-zone="'+a.key+'"]');if(!o)return;let i=Fe(t,a.key);o.classList.toggle("tan-locked",!i),o.querySelector(".tan-nav-sub").innerHTML=tc(a.key,t),o.querySelector(".tan-nav-lock").innerHTML=i?"":H.lock}),ec(t),Kt()&&mt(t)}function Tr(t){ht(),Pe(t)}var Lr={sending:"续写未毕，稍待再拨",generating:"续写未毕，稍待再拨",deleting:"正在删记，了结再拨",editing:"改写未了，先存或弃"},Ra=!1;async function ue({tag:t,mutate:e,message:n,check:a,fail:o,onSent:i}){let r=s=>(o?o(s):I(s),!1);if(Ra)return r("账房正在记档，稍待");if(Lr[Jt()])return r(Lr[Jt()]);Ra=!0;try{return await oc({tag:t,mutate:e,message:n,check:a,onSent:i},r)}finally{Ra=!1}}async function oc({tag:t,mutate:e,message:n,check:a,onSent:o},i){let r=P();if(r==null||r<0)return i("卷上尚无记录，无从记账");let s=ve(r);if(!s)return i("账目未读到，稍后再试");let l=_.cloneDeep(s);if(a){let g=a(j(l),l);if(g)return i(g)}if(e(l),Number(l.财务&&l.财务.铜钱)<0)return i("铜钱不足");let c=Math.max(0,Math.round((Number(_.get(s,"财务.铜钱"))||0)-(Number(_.get(l,"财务.铜钱"))||0)));_.set(l,"系统.扣款记录",(t||"代发")+"#"+c+"#"+Date.now());let p=Qn(s,l);if(!p)return i("名目里不可含「/」「~」");ht();let m=typeof n=="function"?n(c):n;return re(m,{patch:p,onSent:o})}var k=C,Cn=t=>'<div class="tan-card">'+t+"</div>",Ga=()=>'<div class="tan-card tan-empty"><span>虚位</span></div>',G=(t,e)=>'<span class="tan-k">'+t+"</span>"+k(e),Ke=(t,e,n)=>{let a=On(t,e[0].id);return'<div class="tan-tabs">'+e.map(o=>"<button"+(a===o.id?' class="tan-on"':"")+' data-pane="'+o.id+'">'+o.label+(o.n!=null?'<span class="tan-n">'+o.n+"</span>":"")+(o.red?'<span class="tan-red"></span>':"")+"</button>").join("")+(n?'<span class="tan-why" style="margin-left:auto;align-self:center">'+n+"</span>":"")+"</div>"},ic=t=>Sn(t)==="逻些"?"长安的人手与家业俱在，归时如旧":t.吐蕃之行.进藏行程==="已回长安"?"逻些的人手与家业俱在，再去如旧":"",Ze=(t,e)=>[e,ic(t)].filter(Boolean).join("　"),Z=(t,e,n,a)=>'<div class="tan-pane'+(On(t,a)===e?" tan-on":"")+'" data-pane="'+e+'">'+n+"</div>",Ue=t=>'<div class="tan-rite-pic tan-page-pic"><img src="'+$(tr[t])+'" alt=""></div>',bt=(t,e)=>'<div class="tan-wh">'+t+(e?" <b>"+e+"</b>":"")+"</div>",Rt=(t,e,n,a,o)=>'<button class="tan-seal-btn'+(o||"")+'"'+(e?' data-act="'+e+'"':"")+(n?"":" disabled")+">"+t+"</button>"+(!n&&a?'<span class="tan-why">'+a+"</span>":""),he=(t,e)=>{let n=e*1e3-et(t);return n>0?"铜钱不足，差"+F(n):""},Va=(t,e)=>e==="精工"&&!Object.keys(t.执事名册).length?"须执事带工":e==="天工"&&t.教务.信众<50?"须信众五十人":"",Xt=t=>ha(t)?["远行途中"]:[],Cr=t=>{let e=B(t),n=Xt(t);t.道场.正殿等级!==e.三阶[0]&&n.push("正殿已改建");let a=he(t,e.价[e.三阶[1]]);return a&&n.push(a),n},Mr=(t,e,n,a)=>{let o=Xt(t),i=_t(t).find(l=>l.名===e);i?i.档次!==n&&o.push("此屋已改建"):o.push("此屋已不在");let r=Va(t,a);r&&o.push(r);let s=he(t,wn[a]);return s&&o.push(s),o},Ba=(t,e)=>{let n=Xt(t),a=Va(t,e);a&&n.push(a);let o=he(t,Re[e]);return o&&n.push(o),n},Or=(t,e)=>e&&!ka(t).includes(e)?["先开凿"+e]:[],jr=(t,e)=>{let n=Xt(t),a=Va(t,e==="地下二层"?"精工":"天工");a&&n.push(a);let o=he(t,yn[e]);return o&&n.push(o),n},Pr=(t,e)=>{let n=Xt(t);Pa(t,e)||n.push("须先营造"+B(t).作坊[e.kind]);let a=he(t,e.price);return a&&n.push(a),n},Ir=t=>Object.keys(t.财务.库藏).length>=_n(t)?["屉已满"]:[],rc=(t,e)=>Ir(t).concat(Pr(t,e)),Nr=(t,e,n)=>{let a=B(t),o=Xt(t);a.三阶.indexOf(t.道场.正殿等级)>=1||_t(t).some(s=>s.名.includes(a.贷.词)&&s.档次!=="粗成")||o.push("须正殿升"+a.三阶[1]+"，或"+a.贷.名+"达精工"),Object.keys(t.财务.暗账).length>=Vt.暗账&&o.push("簿已满"),n&&t.财务.暗账[n]&&o.push("「"+n+"」已在簿中，另立名目");let r=e>0?he(t,e):"";return r&&o.push(r),o},ot=[],Zt=[];function Mn(t,e,n){let a=_.cloneDeep(t||Dt()||{}),o=[];return(n?e.concat([n]):e).forEach(i=>{o.push(...i.whys(j(a))),i.mutate(a)}),[...new Set(o)]}var Hr=t=>t.reduce((e,n)=>e+n.价,0),Rr=t=>/[/~]/.test(t)?["名目里不可含「/」「~」"]:[];function sc(t,e,n,a,o="地下一层"){return{名:t,副:n,价:Re[n],项:t+"（"+n+"，"+o+(a?"，奇效："+a:"")+"）",单句:i=>Et.兴造(t,n,a,i,o),whys:i=>Rr(t).concat(n==="天工"&&!a?["先议定奇效"]:[],Ba(i,n),Or(i,o),i.道场.地宫设施[t]?["「"+t+"」已在地宫，另拟名目"]:[]),mutate:i=>{i.财务.铜钱-=Re[n],i.道场.地宫设施=i.道场.地宫设施||{},i.道场.地宫设施[t]=Object.assign({用途:e||"",档次:n,层:o},a?{奇效:a}:{})}}}function lc(t,e,n){return{名:t,副:n.kind,价:n.price,项:n.kind+"「"+t+"」",单句:a=>Et.工巧(t,n.kind,a),whys:a=>Rr(t).concat(rc(a,n),a.财务.库藏[t]?["「"+t+"」已在库藏，另拟物名"]:[]),mutate:a=>{a.财务.铜钱-=n.price,a.财务.库藏=a.财务.库藏||{},a.财务.库藏[t]={类别:n.kind,效用:e||""}}}}function cc(t,e){if(!e.length)return"";let n=e.map((o,i)=>'<div class="tan-bk-row"><b>'+k(o.名)+'</b><span class="tan-tag">'+k(o.副)+'</span><span class="tan-price">'+h(o.价)+'贯</span><button type="button" class="tan-bk-x" data-drop="'+t+":"+i+'">撤下</button></div>').join(""),a=Mn(null,e);return'<div class="tan-basket">'+bt("待呈",h(e.length)+"事 共"+h(Hr(e))+"贯")+n+'<div class="tan-build-foot">'+Rt("呈报",t+"-send",!a.length,a.join(" ")," tan-lg")+"</div></div>"}function _r(t,e){let n=e==="build"?ot:Zt;if(!n.length)return;let a=n.slice();ue({tag:e==="build"?"兴造":"工巧",check:(o,i)=>Mn(i,a).join(" "),mutate:o=>a.forEach(i=>i.mutate(o)),message:o=>a.length===1?a[0].单句(o):Et[e==="build"?"兴造多":"工巧多"](a.map(i=>i.项),o),fail:o=>N(t,o),onSent:()=>{e==="build"?(ot=ot.filter(o=>!a.includes(o)),vt=null):Zt=Zt.filter(o=>!a.includes(o)),Ht()}}).catch(o=>N(t,"出错: "+(o&&o.message||o)))}function Ar(t,e,n){let a=e==="build"?ot:Zt;if(a.some(i=>i.名===n.名)){N(t,"篮中已有同名，换个"+(e==="build"?"名目":"物名"));return}let o=Mn(null,a,n);if(o.length){N(t,(a.length?"连同篮中已记，":"")+o.join(" "));return}a.push(n),e==="build"?(vt=null,We(Wa,["名称","用途","档次","奇效","层"])):We(Ur,["物名","效用"]),Ht()}var qr=t=>{let e=vn(t,Nt(t.时空.时间));return'<div class="tan-doomline"><span'+(e.cls?' class="'+e.cls+'"':"")+">"+e.k+" "+k(e.v)+"</span></div>"};function $r(t,e,n,a,o,i,r,s,l){let c=!!s&&!a.includes(s);return'<section class="tan-win tan-atlas-win tan-on"><div class="tan-atlas"><div class="tan-mapbox"><img src="'+$(e)+'" alt="'+n+'"><svg viewBox="0 0 1024 1024" preserveAspectRatio="none">'+a.map(p=>'<path data-zone="'+p+'"'+(p===s?' class="tan-cur"':"")+' d="'+o[p]+'"><title>'+p+"</title></path>").join("")+"</svg>"+a.map(p=>{let m=i[p];return'<span class="tan-lbl'+(p===s?" tan-cur":"")+(l&&p===l.zone?" tan-mark":"")+'" style="left:'+m[1]+"%;top:"+m[2]+'%">'+m[0]+"</span>"}).join("")+(c?'<div class="tan-abroad-mark"><b>城外</b>'+k(s)+"</div>":"")+'</div><div class="tan-zones">'+bt(r)+'<ul class="tan-zlist">'+a.map(p=>"<li"+(p===s?' class="tan-cur"':"")+"><span>"+p+(l&&p===l.zone?'<i class="tan-zmark"></i>':"")+"</span><small>"+(p===s?"此刻在此":"")+"</small></li>").join("")+'<li class="tan-abroad'+(c?" tan-cur":"")+'"><span>城外</span><small>'+(c?k(s):"")+"</small></li></ul>"+(l?'<div class="tan-atlas-note">'+l.text+"</div>":"")+qr(t)+"</div></div></section>"}function pc(t,e){let n=bn.indexOf(e),a=r=>n<0?"tan-todo":r<n?"tan-past":r===n?"tan-cur":"tan-todo",o=r=>n<0?"":r<n?"已过":r===n?"此刻在此":"未至",i=!!e&&n<0;return'<section class="tan-win tan-atlas-win tan-on"><div class="tan-atlas tan-atlas-road"><div class="tan-roadbox"><div class="tan-mapbox tan-road"><img src="'+$("map-road.webp")+'" alt="唐蕃古道驿路">'+bn.map((r,s)=>{let l=va[r];return'<i class="tan-stop '+a(s)+'" data-stop="'+r+'" style="left:'+l[0]+"%;top:"+l[1]+'%"><span>'+r+"</span></i>"}).join("")+(i?'<div class="tan-abroad-mark"><b>驿路之外</b>'+k(e)+"</div>":"")+'</div></div><div class="tan-zones">'+bt("唐蕃古道八站")+'<ul class="tan-zlist tan-zlist-road">'+bn.map((r,s)=>'<li class="'+a(s)+'"><span>'+r+"<em>"+Fi[r]+"</em></span><small>"+o(s)+"</small></li>").join("")+'<li class="tan-abroad'+(i?" tan-cur":"")+'"><span>驿路之外</span><small>'+(i?k(e):"")+"</small></li></ul>"+qr(t)+"</div></div></section>"}function dc(t){let e=ja(t.时空.当前地界),n=ba(t);if(n==="road")return pc(t,e);if(n==="lhasa"){let a=t.吐蕃之行.赞普遇刺?{zone:"红山王宫",text:"赞普遇刺，两系争立"}:null;return $r(t,"map-lhasa.webp","逻些城内图",Bi,Gi,Vi,"逻些五区",e,a)}return $r(t,"map-changan.webp","长安城坊地图",He,Ui,Wi,"长安十区",e,null)}var K=q[0];function Ua(t){q.includes(t)&&(K=t)}function Br(t,e){let n=$t("bond:"+t,"");return n&&ma(t,e).find(a=>a[0]===n)||qi(t,e)}function Fr(t,e){let n=Br(t,e.核心女主[t].灌顶位阶);return n?n[1]:""}function fc(t){let e=Object.entries(t).reverse();return e.length?'<div class="tan-timeline">'+e.map(([n,a])=>{let o=String(a||"").split("/"),i=o.length>1?o[0].trim():"",r=o.length>1?o.slice(1).join("/").trim():String(a||"").trim();return'<div class="tan-memo"><b>'+k(n)+"</b>"+(i?"<small>"+k(i)+"</small>":"")+"<br>"+k(r)+"</div>"}).join("")+"</div>":'<div class="tan-none">尚无回想</div>'}function gc(t){let e=t.吐蕃之行.进藏行程==="已回长安"?"已归长安":qe(t)?An()?"已应允":"尚未答复":"已启程";return'<button class="tan-letter-row" data-letter="open"><img src="'+$("letter-envelope.webp")+'" alt=""><b>进藏书信</b><span>央金手书</span><small>'+e+"</small></button>"}function uc(t,e){if(!It(t))return"";let n=e==="赤玛央金"?"领路进藏":String(t.吐蕃之行.随行[e]||"").trim();return n?'<div class="tan-escort-line tan-with"><b>随行</b><span>'+k(n.replace(/\//g," "))+"</span></div>":'<div class="tan-escort-line"><b>留守长安</b><span>'+(t.吐蕃之行.进藏行程==="在途"?"远行途中，音信不通":"道场封存，待归再续")+"</span></div>"}function xc(t,e,n,a){return'<div class="tan-gallery">'+n.map(o=>'<button class="tan-cell'+(a&&o[0]===a[0]?" tan-on":"")+(o[1]?"":" tan-blank")+'" data-theme="'+k(o[0])+'" title="'+k(o[0])+'"><i'+(o[1]?` style="background-image:url('`+k(o[1])+`')"`:"")+"></i><span>"+k(o[0])+"</span></button>").join("")+Ri(t,e).map(o=>'<button class="tan-cell tan-lock" disabled title="'+k(o)+'解锁"><i></i><span>'+k(o)+"</span></button>").join("")+"</div>"}function mc(t){ge(t,K)||(K=q.find(l=>ge(t,l))||K);let e=t.核心女主[K],n=e.灌顶位阶,a=ma(K,n),o=Br(K,n),i=Pt(n),r=Object.keys(e.回想).length,s=On("同心缕","voice");return'<section class="tan-win tan-bond-win tan-on '+Ne[K]+'"><div class="tan-tabs tan-names">'+q.map(l=>ge(t,l)?"<button"+(l===K?' class="tan-on"':"")+' data-bond="'+l+'">'+l+'<span class="tan-n">'+k(t.核心女主[l].灌顶位阶)+"</span></button>":'<button class="tan-off" disabled>'+Hi[l]+'<span class="tan-n">未识</span></button>').join("")+'</div><div class="tan-wrow"><div class="tan-portrait"><div class="tan-pic">'+(o&&o[1]?'<img src="'+k(o[1])+'" alt="'+k(o[0])+'">':"<span>立绘待补</span>")+'</div></div><div class="tan-wcol" style="flex:1"><div class="tan-lotus-row">'+[1,2,3,4].map(l=>"<i"+(l<=i?' class="tan-lit"':"")+"></i>").join("")+"<span>灌顶位阶</span><b>"+k(n)+"</b></div>"+uc(t,K)+(K==="赤玛央金"&&(t.吐蕃之行.来信===!0||t.吐蕃之行.进藏行程!=="未出发")?gc(t):"")+'<div class="tan-tabs tan-tabs-sub"><button'+(s==="voice"?' class="tan-on"':"")+' data-pane="voice">心声</button><button'+(s==="memoir"?' class="tan-on"':"")+' data-pane="memoir">回想'+(r?'<span class="tan-n">'+h(r)+"则</span>":"")+"</button><button"+(s==="gallery"?' class="tan-on"':"")+' data-pane="gallery">立绘<span class="tan-n">'+h(a.length)+"幅</span></button></div>"+Z("同心缕","voice",e.心声?'<div class="tan-voice-sheet '+Ne[K]+'">'+k(e.心声)+"</div>":'<div class="tan-none">尚无心声</div>',"voice")+Z("同心缕","memoir",fc(e.回想),"voice")+Z("同心缕","gallery",xc(K,n,a,o),"voice")+"</div></div></section>"}var me=null,vt=null,xe="自拟";function Gr(){me=null,vt=null}function hc(t){vt=vt===t?null:t,We(Wa,["层","名称","用途","档次","奇效"])}function bc(t){me=t,We(Vr,["奇效"])}var Wa="tan-form tan-sheet tan-detail tan-build",Vr="tan-form tan-sheet tan-detail tan-upform",Ur="tan-form tan-sheet tan-craft",Wr="入浴者心防天然松动，灌顶事半功倍",Kr=(t,e)=>B(t).蓝图.some(n=>n.名===e),Fa=t=>'<div class="tan-fac-pic"><img src="'+$(t)+'" alt=""></div>',Zr=t=>'<span class="tan-tag '+(Xi[t]||"tan-q1")+'">'+k(t)+"</span>";function vc(t){let e=t.道场.正殿等级,n=_t(t),a=B(t).蓝图.filter(o=>!n.some(i=>i.名===o.名)).length;return'<section class="tan-win tan-on">'+Ke("营造",[{id:"hall",label:"正殿",n:e},{id:"cave",label:"地宫",n:kt[pe(t)]+" "+h(n.length)+"处"},{id:"build",label:"兴造",n:ot.length?"待呈"+h(ot.length)+"事":h(a)+"座未建"}],Ze(t))+Z("营造","hall",wc(t,e),"hall")+Z("营造","cave",yc(t,n),"hall")+Z("营造","build",kc(t,n),"hall")+"</section>"}function wc(t,e){let n=B(t),a=Math.max(0,n.三阶.indexOf(e));return'<div class="tan-folio tan-fill"><div class="tan-halls">'+n.三阶.map((i,r)=>{let s="";if(r>a){let l="<small>"+h(n.价[i])+"贯"+(r===2?"　"+n.顶阶条件:"")+"</small>",c=r===1?Cr(t):[],p=r!==a+1?"":r===1?Rt("升 "+i,"hall",!c.length,c.join(" ")):'<span class="tan-why">须教主亲身周旋</span>';s='<div class="tan-hall-act">'+l+p+"</div>"}return'<div class="tan-hall'+(r<a?" tan-done":r===a?" tan-cur":"")+'"><div class="tan-hall-pic"><img src="'+$(n.殿图[i])+'" alt="'+i+'"></div><div class="tan-hall-top"><b>'+i+"</b>"+(r===2&&t.道场[n.凭据]?'<span class="tan-chi">'+n.敕字+"</span>":"")+'<span class="tan-tag">'+(r<a?"已成":r===a?"当下":"未出发")+"</span></div><p>"+n.看[i]+'</p><div class="tan-hall-gain">'+G("香火",n.得[i][0])+"<br>"+G("客源",n.得[i][1])+"<br>"+n.得[i][2]+"</div>"+(s||'<div class="tan-hall-act"></div>')+"</div>"}).join("")+"</div></div>"}function yc(t,e){let n=me&&e.find(l=>l.名===me);if(n)return'<div class="tan-folio">'+Lc(t,n)+"</div>";let a=B(t),o=pe(t),i=a.蓝图.map(l=>e.find(c=>c.名===l.名)).filter(Boolean).concat(e.filter(l=>!Kr(t,l.名))),r=l=>'<div class="tan-card tan-fac tan-link" data-fac="'+k(l.名)+'">'+Fa(a.设施图[l.名]||a.自拟图[l.档次]||a.自拟图.粗成)+'<div class="tan-fac-top"><b>'+k(l.名)+"</b>"+Zr(l.档次)+"</div></div>";return'<div class="tan-folio"><div class="tan-cave-sect">'+kt.map((l,c)=>{let p='<div class="tan-stratum-name">'+l+"</div>";if(c<=o){let u=i.filter(v=>kn(t,v)===l).map(r).join("")||'<div class="tan-card tan-empty">虚位</div>';return'<div class="tan-stratum tan-l'+c+'">'+p+'<div class="tan-grid tan-c4 tan-cave-grid">'+u+"</div></div>"}let m=c===o+1?jr(t,l):null,g=i.filter(u=>kn(t,u)===l).map(r).join("");return'<div class="tan-stratum tan-undug tan-l'+c+'">'+p+(g?'<div class="tan-grid tan-c4 tan-cave-grid">'+g+"</div>":"")+'<div class="tan-dig"><span class="tan-why">'+(m?"岩层未凿":"未凿")+"</span>"+(m?Rt("开凿 "+l+" "+h(yn[l])+"贯","dig",!m.length,m.join(" ")):"")+"</div></div>"}).join('<div class="tan-stair"></div>')+"</div></div>"}function kc(t,e){let n=new Set(e.map(c=>c.名)),a=c=>ot.findIndex(p=>p.名===c),o=B(t),i=vt===xe?xe:o.蓝图.find(c=>c.名===vt&&!n.has(c.名)&&a(c.名)<0)||null;if(i)return'<div class="tan-folio">'+Tc(t,i===xe?null:i)+"</div>";let r=(c,p,m)=>'<div class="tan-card tan-fac tan-link" data-bp="'+k(c)+'">'+Fa(p)+'<div class="tan-fac-top"><b>'+k(c)+'</b><span class="tan-tag">'+m+'</span></div><div class="tan-up-foot"><span class="tan-fac-act">兴造</span></div></div>',s=(c,p,m)=>'<div class="tan-card tan-fac tan-queued">'+Fa(m)+'<div class="tan-fac-top"><b>'+k(c.名)+'</b><span class="tan-tag tan-gold">待呈 '+k(c.副)+'</span></div><div class="tan-up-foot"><button type="button" class="tan-bk-x tan-fac-act" data-drop="build:'+p+'">撤下</button></div></div>';return'<div class="tan-folio"><div class="tan-grid tan-c4 tan-bp-grid">'+(o.蓝图.filter(c=>!n.has(c.名)).map(c=>a(c.名)>=0?s(ot[a(c.名)],a(c.名),o.设施图[c.名]):r(c.名,o.设施图[c.名],c.层)).join("")+ot.map((c,p)=>Kr(t,c.名)?"":s(c,p,o.自拟图[c.副]||o.自拟图.粗成)).join("")+r(xe,o.自拟图.粗成,"另起名目"))+"</div>"+Sc(ot)+"</div>"}function Sc(t){if(!t.length)return"";let e=Mn(null,t);return'<div class="tan-basket tan-basket-bar">'+bt("待呈",h(t.length)+"事 共"+h(Hr(t))+"贯")+Rt("呈报","build-send",!e.length,e.join(" ")," tan-lg")+"</div>"}function Xr(t){return'<form class="'+t.form+'" onsubmit="return false"><div class="tan-detail-top"><div class="tan-detail-pic">'+t.pics+'</div><div class="tan-detail-text">'+t.head+t.text+"</div></div>"+(t.below||"")+'<div class="tan-build-foot">'+(t.foot||"")+'<button type="button" class="tan-back" data-back="'+t.back+'">返回</button></div></form>'}var Ec='<label class="tan-wonder tan-live">奇效<textarea name="奇效" rows="2" placeholder="'+Wr+'"></textarea><small>升作天工须议定奇效，写入即成定局</small></label>';function Lc(t,e){let n=ut[ut.indexOf(e.档次)+1],a=n?Mr(t,e.名,e.档次,n).join(" "):"",o=B(t),i=o.蓝图.find(r=>r.名===e.名);return Xr({back:"fac",form:Vr,pics:'<img src="'+$(o.设施图[e.名]||o.自拟图[e.档次]||o.自拟图.粗成)+'" alt="">',head:'<div class="tan-wh">地宫 <b>'+k(e.名)+"</b>"+Zr(e.档次)+'<span class="tan-tag tan-layer">'+kn(t,e)+"</span></div>",text:'<p class="tan-build-note">'+k(i?i.说明:e.用途)+"</p>"+(e.奇效?'<p class="tan-build-note">'+G("奇效",e.奇效)+"</p>":""),below:n==="天工"?Ec:"",foot:n?'<span class="tan-why">库中 '+F(et(t))+"</span>"+Rt("升 "+n+" "+h(wn[n])+"贯","upgrade",!a,a," tan-lg"):""})}function Tc(t,e){let n=ut.every(s=>Ba(t,s).length),a=e?Or(t,e.层).join(""):"",o=ut.map(s=>{let l=Ba(t,s);return'<label class="tan-pick'+(l.length?" tan-off":"")+'"><input type="radio" name="档次" value="'+s+'"'+(l.length?" disabled":"")+"><b>"+s+'</b><span class="tan-price">'+h(Re[s])+"贯</span>"+(l.length?'<small class="tan-cond">'+l.join(" ")+"</small>":"")+"</label>"}).join(""),i=e?'<input type="hidden" name="名称" value="'+k(e.名)+'"><input type="hidden" name="用途" value="'+k(e.用途)+'"><input type="hidden" name="层" value="'+e.层+'"><p class="tan-build-note">'+k(e.说明)+"</p>":'<div class="tan-own-head"><label>名称<input name="名称" placeholder="自拟名目"></label><label>用途<textarea name="用途" rows="2" placeholder="自拟用途与陈设"></textarea></label></div><div class="tan-picks tan-row tan-layers">'+ka(t).map(s=>'<label class="tan-pick"><input type="radio" name="层" value="'+s+'"'+(s==="地下一层"?" checked":"")+"><b>"+s+"</b></label>").join("")+"</div>",r=B(t);return Xr({back:"bp",form:Wa,pics:e?'<img src="'+$(r.设施图[e.名])+'" alt="">':ut.map(s=>'<img src="'+$(r.自拟图[s])+'" alt="" data-g="'+s+'">').join(""),head:'<div class="tan-wh">兴造 <b>'+(e?k(e.名):xe)+"</b>"+(e?'<span class="tan-tag tan-layer">'+e.层+"</span>":"")+"</div>",text:i,below:'<div class="tan-picks tan-row">'+o+'</div><label class="tan-wonder">奇效<textarea name="奇效" rows="2" placeholder="'+Wr+'"></textarea><small>天工独有：通达造化，立成定局，后效绵延</small></label>',foot:'<span class="tan-why">库中 '+F(et(t))+"</span>"+Rt("记下","build",!n&&!a,ha(t)?"远行途中":a||"铜钱不足"," tan-lg")})}function _c(t){let e=Na(t),n=Ia(t),a=e.length+n.length,o=e.length?e.map(([l,c])=>Cn("<b>"+k(l)+"</b>"+G("详情",c.详情||"")+"<br>"+G("价值",c.价值||"")+'<button class="tan-seal-btn" data-act="extort" data-name="'+k(l)+'">勒索</button>')).join(""):'<div class="tan-none">簿中无名</div>',i=n.length?n.map(([l,c])=>{let p=Number(c.欠额)||0,m=Number(c.已收息)||0,g=p>0&&m>=p*1e3;return'<div class="tan-debt"><b>'+k(l)+"</b><span>"+k(c.详情||"无抵押")+"</span><span>借"+h(p)+"贯</span><span>收息"+F(m)+(g?'<i class="tan-tag tan-gold">停息</i>':"")+"</span></div>"}).join(""):'<div class="tan-none">簿中无名</div>',r=Nr(t,0),s='<form class="tan-form tan-sheet tan-loan" onsubmit="return false"><div class="tan-loan-line"><span>'+B(t).贷.契+'</span><input name="欠户" placeholder="姓名"><span>钱</span><input name="本金" placeholder="几" inputmode="numeric"><span>贯，押</span><input name="抵押" placeholder="田契、宅契或人身"><span>，月息五分，利不过本。</span>'+Rt("放贷","loan",!r.length,r.join(" ")," tan-lg")+'<i class="tan-br"></i><span class="tan-why tan-loan-bal">库中 '+F(et(t))+"</span></div></form>";return'<section class="tan-win tan-on">'+Ke("暗账",[{id:"handle",label:"把柄",n:h(e.length)},{id:"debt",label:"债契",n:h(n.length)}],Ze(t,"共"+h(a)+"／五条"))+Z("暗账","handle",'<div class="tan-folio tan-fill">'+Ue("把柄")+'<div class="tan-grid tan-c2">'+o+"</div></div>","handle")+Z("暗账","debt",'<div class="tan-folio tan-fill"><div class="tan-rite-pic tan-loan-pic"><img src="'+$(Qi)+'" alt=""></div>'+s+bt("债契",h(n.length)+"契")+i+"</div>","handle")+"</section>"}function Ac(t){let n=Object.entries(t.教务.法事委托).map(([o,i])=>Cn('<span class="tan-tag'+(i.状态==="已完成"?" tan-gold":"")+'">'+k(i.状态||"待办")+"</span><b>"+k(o)+"</b>"+G("诉求",i.诉求||"")+"<br>"+G("时限",i.时限||"")+"<br>"+G("报酬",i.报酬||"")));for(;n.length<Vt.法事委托;)n.push(Ga());let a=Ha(t).length;return'<section class="tan-win tan-on">'+Ke("法事",[{id:"order",label:"委托",n:h(a)+"／三席"}],Ze(t))+Z("法事","order",'<div class="tan-folio tan-fill">'+Ue("委托")+'<div class="tan-grid tan-c3">'+n.join("")+"</div></div>","order")+"</section>"}var zr=(t,e,n)=>{let a=Math.min(n,Math.ceil(Math.max(t.length,1)/e)*e);for(;t.length<a;)t.push(Ga())};function $c(t){let e=Object.entries(t.执事名册),n=e.map(([s,l])=>{let c=String(l||"").split("/");return Cn("<b>"+k(s)+"</b>"+G("身份",c[0]||"")+"<br>"+G("位阶",c[1]||"")+"<br>"+G("职能",c.slice(2).join("/")||""))});zr(n,12,Vt.执事名册);let a=Object.entries(t.明妃录),o=a.map(([s,l])=>{let c=String(l||"").split("/");return Cn("<b>"+k(s)+"</b>"+G("出身",c[0]||"")+"<br>"+G("度化",c[1]||"")+"<br>"+G("要点",c.slice(2).join("/")||""))});zr(o,6,Vt.明妃录);let i=kr(t),r=[["钱帛五十贯以上",et(t)>=5e4],["库藏有药品",yr(t.财务.库藏,"药品")>0],["精工以上坛场设施",_t(t).some(s=>Ji.some(l=>s.名.includes(l)||s.用途.includes(l))&&s.档次!=="粗成")],["信众五十人以上",t.教务.信众>=50]];return'<section class="tan-win tan-on">'+Ke("教务",[{id:"steward",label:"执事",n:h(e.length)+"／二十四席",red:e.length>=Vt.执事名册},{id:"consort",label:"明妃",n:h(a.length)+"／十二席",red:a.length>=Vt.明妃录},{id:"rite",label:"法会",n:i?"暂休":"待办"}],Ze(t))+Z("教务","steward",'<div class="tan-folio tan-fill">'+Ue("执事")+'<div class="tan-grid tan-c4">'+n.join("")+"</div></div>","steward")+Z("教务","consort",'<div class="tan-folio tan-fill">'+Ue("明妃")+bt("明妃法座",h(a.length)+"位／十二席")+'<div class="tan-grid tan-c3">'+o.join("")+"</div></div>","steward")+Z("教务","rite",'<div class="tan-rite-pic"><img src="'+$(er)+'" alt=""></div>'+bt("上次法会",t.教务.上次法会?k(t.教务.上次法会.replace("/"," ")):"未曾办过")+'<div class="tan-none">'+(i?"本月已办":"本月可办")+"</div>"+bt("筹办门槛")+'<ul class="tan-ticks">'+r.map(([s,l])=>"<li"+(l?' class="tan-ok"':"")+">"+s+"</li>").join("")+'</ul><div class="tan-none">大法会关涉满城风云，须教主亲自开坛，此处仅照验规制</div>',"steward")+"</section>"}function zc(t){let e=Object.entries(t.财务.库藏),n=e.length,a=_n(t),o=Math.max(0,a-n),i=([A,L])=>'<div class="tan-card'+(String(L.效用||"").length>28?" tan-wide":"")+'"><b>'+k(A)+"</b>"+G("效用",L.效用||"")+"</div>",s='<div class="tan-folio tan-store">'+(La.map(A=>{let L=e.filter(([,At])=>At&&At.类别===A);return'<div class="tan-store-row"><div class="tan-store-head"><img class="tan-store-pic" src="'+$(nr[A])+'" alt=""><span>'+A+"</span><b>"+(L.length?h(L.length)+"件":"无")+'</b></div><div class="tan-grid tan-c4">'+L.map(i).join("")+"</div></div>"}).join("")+(()=>{let A=e.filter(([,L])=>!L||!La.includes(L.类别));return A.length?'<div class="tan-store-row"><div class="tan-store-head"><span>杂物</span><b>'+h(A.length)+'件</b></div><div class="tan-grid tan-c4">'+A.map(([L,At])=>i([L,At||{}])).join("")+"</div></div>":""})())+(o?'<div class="tan-store-row tan-store-spare"><div class="tan-store-head"><span>余屉</span><b>'+h(o)+'屉</b></div><div class="tan-grid tan-c4">'+Ga().repeat(o)+"</div></div>":"")+"</div>",l=St.map(A=>Pa(t,A)),c=St.map(A=>Pr(t,A)),p=c.findIndex(A=>!A.length),m=St.map((A,L)=>'<label class="tan-pick tan-shop'+(c[L].length?" tan-off":"")+'"><input type="radio" name="类别" form="tan-craft-form" value="'+A.kind+'"'+(c[L].length?" disabled":"")+(L===p?" checked":"")+"><b>"+A.kind+'</b><span class="tan-price">'+h(A.price)+'贯</span><small class="tan-shopline tan-cond">'+(c[L].length?c[L].join(" "):B(t).作坊[A.kind]+" 已备")+"</small></label>").join(""),g=Xt(t).concat(Ir(t)),u=St.filter((A,L)=>l[L]).map(A=>A.kind),v=St[p>=0?p:0].ph,D='<div class="tan-wrow tan-craftrow"><div class="tan-wcol tan-shoplist">'+bt("作坊")+'<div class="tan-picks tan-col">'+m+"</div>"+cc("craft",Zt)+'</div><form id="tan-craft-form" class="'+Ur+'" onsubmit="return false">'+bt("制作")+'<label>物名<input name="物名" placeholder="'+v[0]+'"></label><label class="tan-grow">效用<textarea name="效用" rows="3" placeholder="'+v[1]+'"></textarea></label><div class="tan-build-foot"><span class="tan-why">库中 '+F(et(t))+"</span>"+Rt("记下","craft",!g.length&&p>=0,g.length?g.join(" "):"无可用作坊"," tan-lg")+"</div></form></div>";return'<section class="tan-win tan-on">'+Ke("库藏",[{id:"store",label:"库藏",n:h(n)+"／"+h(a)+"屉"},{id:"craft",label:"工坊",n:u.length?"可制"+u.join("／"):"无坊"}],Ze(t))+Z("库藏","store",s,"store")+Z("库藏","craft",'<div class="tan-folio tan-fill">'+Ue("工坊")+D+"</div>","store")+"</section>"}var qa=null;function Cc(t){let e=Sn(t);qa!==null&&qa!==e&&(ot=[],Zt=[],vt=null),qa=e}function Yr(t){let e=t.querySelector('input[name="类别"]:checked'),n=t.querySelector("#tan-craft-form"),a=e&&St.find(o=>o.kind===e.value);a&&n&&(n.elements.物名.placeholder=a.ph[0],n.elements.效用.placeholder=a.ph[1])}function Jr(t,e){switch(Cc(e),t){case"舆图":return dc(e);case"同心缕":return mc(e);case"营造":return vc(e);case"暗账":return _c(e);case"法事":return Ac(e);case"教务":return $c(e);case"库藏":return zc(e)}return'<section class="tan-win tan-on"><div class="tan-stub">未辟</div></section>'}function zn(t){let e=t.closest("form"),n={};return e&&Array.from(e.elements).forEach(a=>{!a.name||a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"||(a.type==="radio"?a.checked?n[a.name]=a.value:n[a.name]=n[a.name]||"":n[a.name]=a.value.trim())}),n}function Qr(t,e){let n=t.target.closest(".tan-pic img");if(n){Mc(n.getAttribute("src"),n.getAttribute("alt")||"");return}let a=t.target.closest(".tan-names button[data-bond]");if(a){Ua(a.dataset.bond),Ht();return}let o=t.target.closest(".tan-gallery .tan-cell[data-theme]");if(o){dt("bond:"+K,o.dataset.theme),Ht(),Yn();return}let i=t.target.closest(".tan-bk-x[data-drop]");if(i){let[g,u]=i.dataset.drop.split(":");(g==="build"?ot:Zt).splice(+u,1),Ht();return}let r=t.target.closest('input[name="类别"]');if(r){let g=St.find(v=>v.kind===r.value),u=w("tan-craft-form");g&&u&&(u.elements.物名.placeholder=g.ph[0],u.elements.效用.placeholder=g.ph[1]);return}let s=t.target.closest(".tan-card[data-bp]");if(s){hc(s.dataset.bp),Ht();return}let l=t.target.closest(".tan-card[data-fac]");if(l){bc(l.dataset.fac),Ht();return}let c=t.target.closest(".tan-back");if(c){c.dataset.back==="fac"?me=null:vt=null,Ht();return}let p=t.target.closest(".tan-seal-btn[data-act]");if(!p||p.disabled)return;t.preventDefault();let m=p.dataset.act;if(m==="extort"){Tr(Et.勒索(p.dataset.name));return}if(m==="hall"){let g=B(j()),u=g.三阶[1];ue({tag:"兴造",check:v=>Cr(v).join(" "),mutate:v=>{v.财务.铜钱-=g.价[u],v.道场.正殿等级=u},message:v=>Et.升殿(u,v),fail:v=>N(p,v)}).catch(v=>N(p,"出错: "+(v&&v.message||v)));return}if(m==="upgrade"){let g=me,u=j(),v=_t(u).find(L=>L.名===g);if(!v)return;let D=ut[ut.indexOf(v.档次)+1];if(!D)return;let A=D==="天工"&&zn(p).奇效||"";if(D==="天工"&&!A){N(p,"先议定奇效");return}ue({tag:"兴造",check:L=>Mr(L,g,v.档次,D).join(" "),mutate:L=>{let At=L.道场.地宫设施&&L.道场.地宫设施[g];At&&(L.财务.铜钱-=wn[D],At.档次=D,A&&(At.奇效=A))},message:L=>Et.升造(g,v.档次,D,A,L),fail:L=>N(p,L)}).catch(L=>N(p,"出错: "+(L&&L.message||L)));return}if(m==="build"){let g=zn(p),u=g.档次;if(!g.名称){N(p,"先填名称");return}if(vt===xe&&!g.用途){N(p,"先填用途");return}if(!u){N(p,"先选档次");return}Ar(p,"build",sc(g.名称,g.用途,u,u==="天工"&&g.奇效||"",kt.includes(g.层)?g.层:"地下一层"));return}if(m==="dig"){let g=kt[pe(j())+1];if(!g)return;ue({tag:"兴造",check:u=>(kt[pe(u)+1]!==g?["此层已凿"]:jr(u,g)).join(" "),mutate:u=>{u.财务.铜钱-=yn[g],u.道场.地宫深度=kt.indexOf(g)},message:u=>Et.开凿(g,u),fail:u=>N(p,u)}).catch(u=>N(p,"出错: "+(u&&u.message||u)));return}if(m==="build-send"){_r(p,"build");return}if(m==="craft"){let g=zn(p),u=St.find(v=>v.kind===g.类别);if(!u){N(p,"先选类别");return}if(!g.物名){N(p,"先填物名");return}if(!g.效用){N(p,"先填效用");return}Ar(p,"craft",lc(g.物名,g.效用,u));return}if(m==="craft-send"){_r(p,"craft");return}if(m==="loan"){let g=zn(p),u=Math.round(Number(g.本金));if(!g.欠户){N(p,"先填欠户");return}if(/[/~]/.test(g.欠户)){N(p,"欠户里不可含「/」「~」");return}if(!(u>0)){N(p,"本金须为整数贯");return}ue({tag:"无尽藏",check:v=>Nr(v,u,g.欠户).join(" "),mutate:v=>{v.财务.铜钱-=u,v.财务.暗账=v.财务.暗账||{},v.财务.暗账[g.欠户]={类别:"债契",欠额:u,已收息:0,详情:g.抵押?"押 "+g.抵押:"",价值:"月息五分，利不过本"}},message:v=>Et.放贷(g.欠户,v),fail:v=>N(p,v)}).catch(v=>N(p,"出错: "+(v&&v.message||v)))}}function Mc(t,e){let n=R();if(!n||w("tan-viewer"))return;let a=E.createElement("div");a.id="tan-viewer",a.innerHTML='<img src="'+k(t)+'" alt="'+k(e)+'">'+(e?"<span>"+k(e)+"</span>":""),a.addEventListener("click",()=>a.remove()),n.appendChild(a)}function N(t,e){let n=t.nextElementSibling;(!n||!n.classList.contains("tan-why"))&&(n=E.createElement("span"),n.className="tan-why",t.after(n)),n.textContent=e}function Ht(){mt()}var V=null,Ka=0,jn=!1,Xa=()=>Ot('.tan-top-btn[data-toggle="side"]'),ts={},Kt=()=>V,On=(t,e)=>ts[t]||e;function Tt(t){Ut()&&(t=at),jn=Ee()&&qt("side"),jn&&Ct("side",!1),V!==t&&Xe.clear(),V=t;let e=w(M.lift);e&&(w(M.liftTitle).textContent=t===at?fr:t,e.classList.toggle("tan-gate",t===at),e.classList.toggle("tan-sin",t==="暗账"),mt(),clearTimeout(Ka),e.classList.remove("tan-hide"),e.classList.add("tan-show"),w(M.liftBody).scrollTop=0,es())}function es(){let t=Xa();if(!t)return;let e=!!V&&V!==at;t.classList.toggle("tan-ret",e),t.disabled=V===at;let n=w(M.corner);n&&n.classList.toggle("tan-away",e)}function ns(){let t=w(M.liftBody).querySelector(".tan-back");t?t.click():ht()}function ht(t){if(V===at&&!t&&Ut())return;V=null,Xe.clear(),Gr(),jn&&(jn=!1,Ct("side",!0)),es();let e=w(M.lift);e&&(e.classList.add("tan-hide"),clearTimeout(Ka),Ka=setTimeout(()=>{if(V)return;e.classList.remove("tan-show","tan-hide","tan-gate","tan-sin");let n=w(M.liftBody);n&&(n.innerHTML="")},300))}var Xe=new Set,Ya=t=>{let e=t.name||t.dataset.k||t.id||"";if(!e)return"";let n=t.closest("form");return(n?n.className:"")+"|"+e},Za=t=>t.type==="radio"||t.type==="checkbox";function Dr(t){let e=t.target;if(!e||!e.matches||!e.matches("input, textarea, select"))return;let n=Ya(e);n&&Xe.add(n)}function We(t,e){for(let n of e)Xe.delete(t+"|"+n)}function Oc(t){let e=new Map;return t.querySelectorAll("input, textarea, select").forEach(n=>{let a=Ya(n);!a||!Xe.has(a)||(Za(n)?e.set(a+"="+n.value,n.checked):e.set(a,n.value))}),e}function jc(t,e){e.size&&t.querySelectorAll("input, textarea, select").forEach(n=>{let a=Ya(n);if(!a||n.disabled)return;let o=e.get(Za(n)?a+"="+n.value:a);o!==void 0&&(Za(n)?n.checked=o:n.value=o)})}var Pc=t=>[...t.classList].find(e=>e.startsWith("tan-"))||t.tagName.toLowerCase();function as(t,e){let n=new Map;t.querySelectorAll("*").forEach(a=>{let o=Pc(a),i=n.get(o)||0;n.set(o,i+1),e(a,o+"#"+i)})}function Ic(t){let e=new Map;return as(t,(n,a)=>{n.scrollTop&&e.set(a,n.scrollTop)}),e}function Nc(t,e){e.size&&as(t,(n,a)=>{let o=e.get(a);o!==void 0&&(n.scrollTop=o)})}function mt(t){if(!V)return;let e=w(M.liftBody);if(!e)return;let n=t||j(),a=e.scrollTop,o=Ic(e),i=Oc(e);e.innerHTML=V===at?mr():Jr(V,n),jc(e,i),Yr(e),Nc(e,o),e.scrollTop=a}function Hc(t){if(V===at){t.target!==t.currentTarget&&hr(t);return}if(t.target===t.currentTarget){ht();return}let e=t.target.closest(".tan-tabs button[data-pane]");if(e){ts[V]=e.dataset.pane;let n=e.closest(".tan-win");e.parentElement.querySelectorAll("button").forEach(a=>a.classList.toggle("tan-on",a===e)),n.querySelectorAll(".tan-pane").forEach(a=>a.classList.toggle("tan-on",a.dataset.pane===e.dataset.pane));return}Qr(t,V)}function os(){let t=w(M.lift);t&&!t.dataset.bound&&(t.addEventListener("click",Hc),t.addEventListener("input",Dr),t.addEventListener("change",Dr),t.dataset.bound="1")}var Pn="tan-letter-veil",In=()=>!!w(Pn);function Rc(t){let e=t?'<button class="tan-letter-btn tan-primary" data-letter="accept">应允同行</button><button class="tan-letter-btn" data-letter="close">先收起</button>':'<button class="tan-letter-btn" data-letter="close">收起</button>';return'<div class="tan-letter"><div class="tan-letter-in"><div class="tan-letter-scroll"><div class="tan-letter-head">央金手书</div><div class="tan-letter-body">'+ir.map(n=>"<p>"+C(n)+"</p>").join("")+'</div><div class="tan-letter-sign">'+C(or)+'</div></div><div class="tan-letter-foot">'+e+"</div></div></div>"}function qc(){if(In())return;let t=R();if(!t)return;let e=E.createElement("div");e.id=Pn,e.className="tan-letter-veil",e.innerHTML=Rc($n(j())&&!it()),e.addEventListener("click",Bc),t.appendChild(e)}function Nn(){let t=w(Pn);t&&(t.classList.add("tan-out"),t.addEventListener("animationend",()=>t.remove(),{once:!0}))}function Bc(t){let e=t.target.closest("[data-letter]"),n=e?e.dataset.letter:t.target===t.currentTarget?"close":"";n&&(t.stopPropagation(),n==="close"?Nn():n==="accept"&&Fc())}async function Fc(){let t="letter:"+be();dt(t,"accepted"),Nn(),Wt(),Me(),await re(En,{onSent:n=>dt(t,"accepted#"+n)})||(dt(t,""),Wt(),Me())}function is(){let t=R();!t||t.dataset.letterBound||(t.addEventListener("click",e=>{let n=e.target.closest('[data-letter="open"]');!n||n.closest("#"+Pn)||(e.stopPropagation(),e.preventDefault(),qc())},!0),t.dataset.letterBound="1")}var Ge=[{key:"同心缕",lift:"同心缕",ico:"icon-redknot.webp"},{key:"库藏",lift:"库藏",ico:"icon-coffer.webp"},{key:"教务",lift:"教务",ico:"icon-letterbox.webp"},{key:"营造",lift:"营造",ico:"shrine-model.webp"},{key:"法事",lift:"法事",ico:"icon-folddoc.webp"},{key:"暗账",lift:"暗账",ico:"icon-ledger.webp"}];function Gc(t){return`<div class="tan-nav-item" data-lift="${t.lift}" data-zone="${t.key}"><span class="tan-nav-ico"><img src="${$(t.ico)}" alt="${t.key}"></span><span class="tan-nav-main"><span class="tan-nav-lab">${t.key}</span><span class="tan-nav-sub"></span></span><span class="tan-nav-lock"></span></div>`}var Vc=()=>`
    <div class="tan-plaque">密宗模拟器</div>
    <div id="${M.minimap}" data-lift="舆图">
      <div class="tan-map-wrap"><img src="${$("map-panorama.webp")}" alt="舆图" data-mode="home"><div class="tan-map-pin"></div></div>
      <div class="tan-doom" id="${M.doom}"></div>
    </div>
    <nav class="tan-nav">${Ge.map(Gc).join("")}</nav>`,Uc=()=>`
      <div class="tan-tb-face" id="${M.topbar}"></div>
      <div id="${M.corner}">
        <button data-corner="exit" title="出卷">${H.close}</button>
      </div>`,Wc=()=>`
    <div id="${f.paper}"></div>
    <div id="${f.status}"></div>
    <div id="${f.writing}">
      <div class="tan-w-tools">
        <button id="${f.del}" title="删去记录">${H.trash}</button>
        <button id="${f.regen}" title="删除并重写上一条">${H.regen}</button>
      </div>
      <textarea id="${f.textarea}" rows="1" placeholder="教主示下……"></textarea>
      <button id="${f.send}" title="发送">敕</button>
    </div>
    <div id="${f.delbar}"><span id="${f.delCount}">点选要删去的记录</span><button id="${f.delCancel}">取消</button><button class="tan-danger" id="${f.delConfirm}" disabled>删除</button></div>
    <button id="${f.jump}" title="回至卷尾"></button>`,Kc=()=>`<div id="${M.lift}"><div class="tan-held"><h3 id="${M.liftTitle}"></h3><div class="tan-held-body" id="${M.liftBody}"></div></div></div>`,rs={side:Vc,top:Uc,story:Wc,narrow:900,sideWidth:[220,420]},Ja=!1,ss=()=>Ja;function Qa(t){let e=R();return e?(Ja=!0,new Promise(n=>{let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),Ja=!1,n())};e.addEventListener("animationend",function i(r){r.target===e&&(e.removeEventListener("animationend",i),o())}),e.classList.add(t),setTimeout(o,400)})):Promise.resolve()}function ls(t){t.insertAdjacentHTML("beforeend",Kc()),t.querySelectorAll(".tan-side, .tan-topbar").forEach(n=>n.classList.add("tan-tex")),t.querySelector("#"+M.corner+' button[data-corner="exit"]').addEventListener("click",()=>na()),t.querySelectorAll(".tan-side [data-lift]").forEach(n=>{n.addEventListener("click",()=>{n.classList.contains("tan-locked")||Tt(n.dataset.lift)})}),Xa().addEventListener("click",n=>{Kt()&&(n.stopPropagation(),ns())}),w(f.paper).addEventListener("load",n=>{n.target.closest&&n.target.closest(".tan-scene")&&n.target.classList.add("tan-loaded")},!0),os(),is()}var Yt=new Map,Hn=new Set,to=new Map;function cs(){Yt.clear(),Hn.clear(),to.clear()}var Da={正殿:"正殿"};function Zc(t){let e=[];if(!t||!t.delta)return e;let n=t.delta;if(n.铜钱){let a=n.铜钱.to-n.铜钱.from;e.push({key:"stat:铜钱",html:'<span>铜钱</span><span class="tan-dv '+(a>0?"tan-up":"tan-down")+'">'+(a>0?H.up:H.down)+F(Math.abs(a))+"</span>",line:"铜钱 "+F(n.铜钱.from)+(a>0?" 升至 ":" 降至 ")+"<b>"+F(n.铜钱.to)+"</b>"})}if(n.信众){let a=n.信众.to-n.信众.from;e.push({key:"stat:信众",html:'<span>信众</span><span class="tan-dv '+(a>0?"tan-up":"tan-down")+'">'+(a>0?H.up:H.down)+h(Math.abs(a))+"人</span>",line:"信众 "+h(n.信众.from)+(a>0?" 升至 ":" 降至 ")+"<b>"+h(n.信众.to)+"</b>"})}return Object.keys(Da).forEach(a=>{n[a]&&e.push({key:"stat:"+a,html:"<span>"+Da[a]+'</span><span class="tan-dv">'+C(n[a].to)+"</span>",line:Da[a]+" "+C(n[a].from||"无")+" 改作 <b>"+C(n[a].to)+"</b>"})}),q.forEach(a=>{let o=n["位阶."+a];o&&e.push({key:"stat:位阶."+a,html:"<span>"+a+'</span><span class="tan-dv tan-up">'+C(o.to)+"</span>",line:a+" "+C(o.from)+" 进至 <b>"+C(o.to)+"</b>"})}),e}function Xc(t){return t&&t.delta?q.filter(e=>t.delta["心声."+e]||t.delta["回想."+e]):[]}function Yc(t,e,n){let a=xt(t),o=a&&a.D.核心女主[e]||{心声:"",回想:{}},i=Fr(e,a?a.D:void 0),r=Object.entries(o.回想),s=r.length?r[r.length-1]:null,l='<div class="tan-vc-empty">尚无回想</div>';if(s){let p=String(s[1]||"").split("/"),m=p.length>1?p[0].trim():"",g=p.length>1?p.slice(1).join("/").trim():String(s[1]||"");l='<div class="tan-vc-memos"><div class="tan-vc-memo"><b>'+C(s[0])+(m?"（"+C(m)+"）":"")+"</b>　"+C(g)+"</div></div>"}let c=(p,m)=>"<button"+(n===p?' class="tan-on"':"")+' data-foot-tab="voice:'+e+":"+p+'">'+m+"</button>";return'<div class="tan-vc tan-show '+Ne[e]+(n==="memoir"?" tan-memoir":"")+'"><div class="tan-vc-img" title="查阅同心缕" data-foot-char="'+e+'">'+(i?'<img src="'+C(i)+'" alt="'+e+'">':"<span>立绘待补</span>")+'</div><div class="tan-vc-main"><div class="tan-vc-head">'+e+'<span class="tan-vc-tabs">'+c("voice","心声")+c("memoir","回想")+"</span></div>"+(o.心声?'<div class="tan-vc-text">'+C(o.心声)+"</div>":'<div class="tan-vc-text tan-vc-empty">此刻未通心曲</div>')+(n==="memoir"?l:'<div class="tan-vc-memos"></div>')+"</div></div>"}function ps(t){let e=xt(t);if(!e)return"";let n=Zc(e),a=Xc(e);if(!n.length&&!a.length)return"";let o=JSON.stringify(e.delta);to.get(t)!==o&&(to.set(t,o),Yt.delete(t),Hn.delete(t));let i=String(Yt.get(t)||"").split(":"),r=i[0]==="stat"?i.join(":"):"",s=i[0]==="voice"?i[1]:"",l='<div class="tan-ff"><div class="tan-ff-vars">'+n.map(p=>'<button class="tan-ff-var'+(r===p.key?" tan-open":"")+'" data-foot-item="'+p.key+'">'+p.html+"</button>").join("")+"</div>"+(a.length?'<div class="tan-ff-side"><span class="tan-ff-label">心声</span>'+a.map(p=>'<button class="tan-ff-voice'+(s===p?" tan-open":"")+'" data-foot-item="voice:'+p+'">'+p+"</button>").join("")+(Hn.has(t)?"":'<span class="tan-dot"></span>')+"</div>":"")+"</div>",c="";if(r){let p=n.find(m=>m.key===r);p&&(c='<div class="tan-ff-detail tan-show">'+p.line+"</div>")}else s&&q.includes(s)&&(c=Yc(t,s,i[2]==="memoir"?"memoir":"voice"));return l+c}function Jc(t){return $n(t)?'<button class="tan-letter-strip" data-letter="open"><img src="'+$("letter-envelope.webp")+'" alt="信封"><span>央金留书一封</span></button>':""}function ds(){let t=P(),e=t!=null?U(t):null;return e&&e.role!=="user"?wi(e.message):[]}function Qc(t){return t.length?'<div class="tan-opts"><div class="tan-opt-head"><i></i>行事<i></i></div>'+t.map((e,n)=>'<button class="tan-opt" data-idx="'+n+'"><span class="tan-num">'+h(n+1)+"</span>"+C(e)+"</button>").join("")+"</div>":""}function eo(t){let e=ds()[t];return e==null||it()?!1:(Pe(e),!0)}var fs=()=>Jc(j())+Qc(ds());function Dc(t){let e=xt(t),n=e?ya(e.D):"";if(!n)return"";if(t>0){let a=xt(t-1)||(t>1?xt(t-2):null);if(!a||ya(a.D)===n)return""}return n}function tp(t){let e=xt(t),n=e?Ta(e.D):null;if(!n)return null;if(t>0){let a=xt(t-1)||(t>1?xt(t-2):null),o=a?Ta(a.D):null;if(o&&o.名===n.名)return null}return n}function gs(t){let e=tp(t),n=Dc(t),a="";if(e&&(a+='<figure class="tan-scene tan-fest" data-scene="'+e.src+'"><img src="'+$(e.src)+'" alt="'+e.名+'"><figcaption>'+e.名+"　"+e.氛围+"</figcaption></figure>"),n){let o=wa(xt(t).D);a+='<figure class="tan-scene" data-scene="'+n+'" data-open-atlas title="查阅舆图"><img src="'+$(n)+'" alt="'+o+'"><figcaption>'+o+"</figcaption></figure>"}return a}function us(t){let e=t.target.closest(".tan-opt");if(e){t.stopPropagation(),eo(+e.dataset.idx);return}if(t.target.closest("[data-open-atlas]")){t.stopPropagation(),Tt("舆图");return}let a=t.target.closest("[data-foot-char]");if(a){t.stopPropagation(),Ua(a.dataset.footChar),Tt("同心缕");return}let o=t.target.closest("[data-foot-tab]");if(o){t.stopPropagation();let r=o.closest(".tan-ff-wrap");if(r){let s=+r.dataset.footMid;Yt.set(s,o.dataset.footTab),sn(s)}return}let i=t.target.closest("[data-foot-item]");if(i){t.stopPropagation();let r=i.closest(".tan-ff-wrap");if(r){let s=+r.dataset.footMid,l=i.dataset.footItem,c=String(Yt.get(s)||""),p=l.indexOf("voice:")===0;(p?c.indexOf(l+":")===0:c===l)?Yt.delete(s):Yt.set(s,p?l+":voice":l),p&&Hn.add(s),sn(s)}}}var xs=t=>'<span class="tan-rule tan-l"></span><img src="'+$("incense-coil.webp")+'" alt="'+t+'"><span class="tan-rule tan-r"></span>';function ep(t){if(t.ctrlKey||t.metaKey||t.altKey||Jt()!=="idle"||Kt()||In())return;let e=t.composedPath()[0];if(e&&(e.tagName==="TEXTAREA"||e.tagName==="INPUT"||e.isContentEditable))return;let n=+t.key;n>=1&&n<=9&&eo(n-1)&&t.preventDefault()}var ms={name:"密宗前端",prefix:"tan",legacyPrefix:"mz",css:()=>Bn()+Ci,fonts:no,roleClass:{user:"zhu",ai:"gm"},deleteMode:"tail",tags:{content:"tan-content",options:"tan-options"},parse:(t,e)=>e.mid===0&&Tn(t)?{thought:"",main:""}:vi(t,e),userEdit:mn,layout:rs,mount:t=>{ls(t),ki(()=>it()||ss()||fe)},entryButton:"入卷",render:()=>Wt(),onVars:(t,e)=>{lr(Aa(j(e),j(t))),cr()},onInvalidate:t=>{sr(),t&&cs()},floorHead:t=>gs(t),floorFoot:t=>ps(t),tailHtml:()=>fs(),onStoryClick:t=>us(t),thoughtHeadHtml:()=>xs("推演"),thinkingHtml:()=>xs("推演中"),onKey:ep,onEnter:()=>{let t=Ut();return t||Ma(),Qa("tan-shell-in").then(()=>{t&&W()&&Oa()})},onLeave:()=>Qa("tan-shell-out").then(()=>{Ee()&&Ct("side",!1),ht()}),recheck:()=>Oa(),blockSend:()=>Ut()?(Tt(at),"请先开坛"):"",escClosers:[{isOpen:()=>In(),close:()=>Nn()},{isOpen:()=>!!Kt(),close:()=>ht()}],text:{sendLabel:"敕",stopLabel:"止",writing:"续写中……",thinking:"推演中……",stopped:"已停",stopping:"停笔中……",noReply:"未得回音，可重拟前文",recording:"记录中……",sendFail:"示下未能入卷",generating:"酒馆正在续写，稍待",deleting:"删去中……",noFloor:"尚无可删去的记录",noRegenOpening:"开场白不可重写，请先示下",delIdleTail:"点一则，自它起到末尾一并删去",delCountTail:t=>"自此以下 "+h(t)+" 则",delBtn:t=>"删去 "+h(t)+" 则",delArmed:t=>"再点一次删去 "+h(t)+" 则",editLabel:H.pen,editHint:"改写这一则",editing:"改写中……",editEmpty:"未写一字，照旧",editTitle:"Ctrl+Enter 存, Esc 弃",editSave:"存",editCancel:"弃",earlier:t=>"前文尚有 "+h(t)+" 则，展卷",thought:"推演",patchFail:"账目未能记入，请删去这一则重来",renderFail:"卷文未能铺展，请重新入卷",sideLabel:H.side,sideHint:"收起诸务",sideTopLabel:H.side+H.back,sideTopHint:"诸务"}};qn(ms);ia();})();
