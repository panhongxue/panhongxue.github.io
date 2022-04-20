System.register("chunks:///_virtual/AudioManagerMain.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts"],(function(i){"use strict";var e,t,n,o,r,u,a,c,s,l,p,d,f;return{setters:[function(i){e=i.defineProperty,t=i.applyDecoratedDescriptor,n=i.inheritsLoose,o=i.initializerDefineProperty,r=i.assertThisInitialized,u=i.createClass},function(i){a=i.cclegacy,c=i._decorator,s=i.AudioSource,l=i.AudioClip,p=i.assert,d=i.Component},function(i){f=i.storage}],execute:function(){var M,h,g,_,y,S,m,v,A;a._RF.push({},"0198cipuXpM84CYVT5USs6d","AudioManagerMain",void 0);var b=c.ccclass,C=c.property;i("AudioManagerMain",(M=b("AudioManagerMain"),h=C(s),g=C(l),M((A=v=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return e=i.call.apply(i,[this].concat(n))||this,o(r(e),"_audioSource",S,r(e)),o(r(e),"mainMusic",m,r(e)),e}n(e,i);var t=e.prototype;return t.onLoad=function(){var i=this.node.getComponent(s);p(i),this._audioSource=i,this.setMuiscMute(f.AudioSetting.music),e._instance=this},t.stop=function(){this._audioSource.stop()},t.playMainMusic=function(){this._audioSource.clip=this.mainMusic,this._audioSource.play()},t.setMuiscMute=function(i){this._audioSource.volume=i?1:0},u(e,null,[{key:"instance",get:function(){return this._instance}}]),e}(d),e(v,"_instance",null),S=t((y=A).prototype,"_audioSource",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(y.prototype,"mainMusic",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=y))||_));a._RF.pop()}}}));

System.register("chunks:///_virtual/enums.ts",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){var r;t("GridState",void 0),e._RF.push({},"10574qxTLBPpYpsd+o/q3rr","enums",void 0),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.RIGHT=1]="RIGHT",t[t.ERROR=2]="ERROR"}(r||(r=t("GridState",{}))),e._RF.pop()}}}));

System.register("chunks:///_virtual/main.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./AudioManagerMain.ts"],(function(n){"use strict";var o,e,t,r,i,a,c;return{setters:[function(n){o=n.inheritsLoose},function(n){e=n.cclegacy,t=n._decorator,r=n.ProgressBar,i=n.director,a=n.Component},function(n){c=n.AudioManagerMain}],execute:function(){var s;e._RF.push({},"1b3ffTiPC5Jc4Mr40gCsH+2","main",void 0);var l=t.ccclass;t.property,n("main",l("main")(s=function(n){function e(){return n.apply(this,arguments)||this}o(e,n);var t=e.prototype;return t.onLoad=function(){},t.start=function(){c.instance.playMainMusic()},t.onStartButtonClick=function(){console.log("去答题");var n=this.node.getChildByPath("ProgressBar");n.active=!0;var o=n.getComponent(r),e=0;i.preloadScene("level",(function(n,t){var r=n/t;r>e?e=r:console.log("--------倒灌-------"),o.progress=e,console.log("preload:",n,t,e)}),(function(n){console.log("onLoad"),i.loadScene("level")}))},e}(a))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/Level.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts","./enums.ts","./AudioManagerLevel.ts","./config.ts","./User.ts","./Grid.ts","./Word.ts"],(function(t){"use strict";var e,r,i,n,s,o,a,l,c,u,d,h,f,v,_,g,p,b,y,C,m,w,D;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized,s=t.defineProperty,o=t.asyncToGenerator},function(t){a=t.cclegacy,l=t._decorator,c=t.Prefab,u=t.JsonAsset,d=t.director,h=t.Label,f=t.instantiate,v=t.Vec3,_=t.Color,g=t.Component},function(t){p=t.storage},function(t){b=t.GridState},function(t){y=t.AudioManagerLevel},function(t){C=t.config},function(t){m=t.User},function(t){w=t.Grid},function(t){D=t.Word}],execute:function(){var G,L,x,S,k,A,B;a._RF.push({},"3e04bwTD4xP+Y+M9dOi/RtN","Level",void 0);var W=l.ccclass,P=l.property;t("Level",(G=W("Level"),L=P({type:c}),x=P(u),G((A=e((k=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,i(n(e),"gridPrfb",A,n(e)),i(n(e),"levelsDataJson",B,n(e)),s(n(e),"_level",void 0),s(n(e),"_levelData",void 0),s(n(e),"_currentGrid",null),s(n(e),"_gridsMap",{}),s(n(e),"_bottomGrids",[]),s(n(e),"_wordCtrl",void 0),s(n(e),"_userCtrl",void 0),e}r(e,t);var a=e.prototype;return a.onLoad=function(){this.init()},a.start=function(){y.instance.playLevelMusic(),d.preloadScene("pass")},a.init=function(){this._level=p.currentLevel,this.updateLevelLabel(),this._levelData=this.processData(this.levelsDataJson.json["level-"+this._level]),console.log("关卡数据：",this._levelData),this.genBottomGrids(),this.genGrids(),this.restoreStatus(),this._wordCtrl=new D(this._gridsMap),this._userCtrl=new m,this.renderUserData()},a.setLabel=function(t,e){this.node.getChildByPath(t).getComponent(h).string=e},a.renderUserData=function(){this.setLabel("header/jingyan/Label",this._userCtrl.jingyan),this.setLabel("header/jinbi/Label",this._userCtrl.jinbi)},a.updateLevelLabel=function(){this.node.getChildByPath("game/levelLabel/Label").getComponent(h).string="第"+this._level+"关"},a.processData=function(t){this._levelData={words:t};var e={};t.forEach((function(t){t.blanks.forEach((function(t){e[t]=!0}))}));for(var r=[],i=1;i<=8;i++)for(var n=1;n<=10;n++){var s=e[i+"_"+n],o=this.getWordByAxis(i,n),a={type:s?"blank":o?"char":"empty"};s?a._char=o:a.char=o,r.push(a)}return{words:t,chars:r}},a.__getWordsByAxis=function(t,e){return this._levelData.words.filter((function(r){return r.axis.includes(t+"_"+e)}))},a.getWordByAxis=function(t,e){var r=this.__getWordsByAxis(t,e);if(r.length>0){var i=r[0];return i.word.split("")[i.axis.indexOf(t+"_"+e)]}return""},a.genGrids=function(){for(var t=this.node.getChildByPath("game/grids/bg"),e=C.grid,r=!0,i=0;i<C.grids.rows;i++)for(var n=0;n<C.grids.cols;n++){var s=f(this.gridPrfb),o=new v(n*(e.w+2)-360+21+e.w/2+5,250,0);o.y=-i*(e.h+2)+235,s.setPosition(o);var a=s.getComponent(w);a.levelCtrl=this,a.setChar("");var l=this._levelData.chars[i*C.grids.cols+n];a.setData(l),a.col=n+1,a.row=i+1,this._gridsMap[a.axis]=a,p.currentSelectedAxis?a.axis===p.currentSelectedAxis&&this.setSelected(a):"blank"===l.type&&r&&(r=!1,this.setSelected(a)),t.addChild(s)}},a.genBottomGrids=function(){var t=this,e=p.bottomData,r=this._levelData.chars.filter((function(t){return"blank"==t.type}));if(e){var i=!1;if(e.length===r.length)i=e.every((function(t){return r.some((function(e){return e._char===t._char}))}));i||(p.levelStatusData="",e=null)}e||((e=r).sort((function(){return Math.random()>.5?-1:1})),p.bottomData=e);var n=this.node.getChildByPath("game/bottomGrids");e.forEach((function(e){var r=f(t.gridPrfb),i=r.getComponent(w);t._bottomGrids.push(i),i.levelCtrl=t,i.isBottom=!0,i.setData(e),n.addChild(r)}))},a.restoreStatus=function(){var t=this,e=p.FillMap;Object.keys(e).forEach((function(r){var i=t._gridsMap[r],n=e[r],s=n.state,o=n.bottom_idx;if(void 0!==s&&(i.State=s),void 0!==o){var a=t._bottomGrids[o];i.fillWord(a),i.State===b.RIGHT&&a.setChar("")}}))},a.setSelected=function(t){t.canSelect&&(null!==this._currentGrid&&(this._currentGrid.Selected=!1),this._currentGrid=t,t.Selected=!0,t.isFilled&&this._currentGrid.resetWord())},a.fillWord=function(){var t=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._currentGrid.canSelect){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this._currentGrid.fillWord(e);case 4:this.checkCurrentWord()&&this.selectNext();case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),a.resetError=function(t){if(t.Label.color.equals(_.RED)){var e=this.__getWordsByAxis(t.row,t.col);this._wordCtrl.resetError(e)}},a.checkCurrentWord=function(){var t=this,e=!1,r=!0;return this.__getWordsByAxis(this._currentGrid.row,this._currentGrid.col).forEach((function(i){t._wordCtrl.isAllFilled(i)&&(t._wordCtrl.checkFillResult(i)?(e=!0,r=!0,t._wordCtrl.playRightAni(i),setTimeout((function(){t._wordCtrl.checkLevelPass()&&(console.log("过关"),p.levelStatusData="",p.currentLevel=t._level+1,d.loadScene("pass"))}),400)):(e||(r=!1),t._wordCtrl.playErrorAni(i)))})),r},a.selectNext=function(){var t,e=this,r=Object.values(this._gridsMap);this.__getWordsByAxis(this._currentGrid.row,this._currentGrid.col).find((function(r){var i=r.blanks.find((function(t){return!e._gridsMap[t].isFilled}));if(i)return t=e._gridsMap[i],!0})),t||(t=r.find((function(t){return"blank"==t.data.type&&!t.isFilled}))),t&&this.setSelected(t)},a.onTishiClick=function(){var t=this,e=this._bottomGrids.find((function(e){return e.data._char===t._currentGrid.data._char}));e&&this._userCtrl.jinbi>=20&&(this._userCtrl.jinbi-=20,this.renderUserData(),this.fillWord(e))},a.onReturnButtonClick=function(){y.instance.stop(),d.loadScene("main")},e}(g)).prototype,"gridPrfb",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(k.prototype,"levelsDataJson",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=k))||S));a._RF.pop()}}}));

System.register("chunks:///_virtual/Pass.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts","./AudioManagerLevel.ts","./User.ts"],(function(e){"use strict";var t,n,s,i,r,o,a,l,u,c,h;return{setters:[function(e){t=e.inheritsLoose,n=e.defineProperty,s=e.assertThisInitialized},function(e){i=e.cclegacy,r=e._decorator,o=e.Label,a=e.director,l=e.Component},function(e){u=e.storage},function(e){c=e.AudioManagerLevel},function(e){h=e.User}],execute:function(){var p;i._RF.push({},"458430gYihLzo3Vnb3GbyjR","Pass",void 0);var v=r.ccclass;r.property,e("Pass",v("Pass")(p=function(e){function i(){for(var t,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,n(s(t),"_userCtrl",void 0),n(s(t),"_level",void 0),t}t(i,e);var r=i.prototype;return r.start=function(){this._userCtrl=new h,this._level=u.currentLevel-1,this.updateLevelLabel(),this.updateUserJifen()},r.updateUserJifen=function(){var e=this._userCtrl.pass(this._level);this.setLabel("user/jinbi",e.jinbi),this.setLabel("user/jingyan",e.jingyan)},r.setLabel=function(e,t){this.node.getChildByPath(e).getComponent(o).string=t},r.updateLevelLabel=function(){this.node.getChildByPath("levelLabel/Label").getComponent(o).string="第"+this._level+"关"},r.onBtnReturnClick=function(){c.instance.stop(),a.loadScene("main")},r.onBtnNextClick=function(){a.loadScene("level")},i}(l))||p);i._RF.pop()}}}));

System.register("chunks:///_virtual/Renwu.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./User.ts","./Grade.ts"],(function(e){"use strict";var t,r,n,i,o,a,s,l,c,u,d,p,g,h,f,y,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,l=e.Prefab,c=e.instantiate,u=e.ScrollView,d=e.resources,p=e.SpriteFrame,g=e.Sprite,h=e.Label,f=e.Component},function(e){y=e.User},function(e){b=e.Grade}],execute:function(){var w,C,v,m,P;a._RF.push({},"4caf7QPRodEqoIBgefyHHLK","Renwu",void 0);var L=s.ccclass,B=s.property;e("Renwu",(w=L("Renwu"),C=B({type:l}),w((P=t((m=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,n(i(t),"gradePrfb",P,i(t)),o(i(t),"_userCtrl",void 0),o(i(t),"gradeList",{"初学弟子":0,"初入江湖":1,"江湖新秀":10,"莫问出身":20,"江湖少侠":30,"七窍玲珑":40,"江湖大侠":60,"踏雪无痕":80,"江湖豪侠":100,"扶危济困":120,"一派掌门":140,"碧血丹心":170,"一代宗师":200,"清微淡远":250,"武林盟主":300,"超凡入圣":400,"武林至尊":600,"独孤求败":8e6}),t}r(t,e);var a=t.prototype;return a.onLoad=function(){this._userCtrl=new y,this.renderGrade(),this.node.active=!1},a.start=function(){},a.renderGrade=function(){var e=this,t=this.node.getChildByPath("popup/bg/ScrollView/view/content"),r=this._userCtrl.jingyan,n=Object.keys(this.gradeList),i=n.length,o=!1,a=0;n.forEach((function(n,s){var l=e.gradeList[n],u=c(e.gradePrfb),d=u.getComponent(b);r>=l?d.status="reach":o?d.status="unreach":(o=!0,d.status="current",d.progress=r+"/"+l,e.setMainTitle(n),e.setLabel("renwu/titleBG/num",s),e.setLabel("renwu/gradeProgressLabel","还差"+(l-r)+"点经验可升级"),e.loadGradeImage(s),a=(s>i/2?s+1:s-1)/i),d.string=n,t.addChild(u)}));var s=this.node.getChildByPath("popup/bg/ScrollView").getComponent(u);console.log(a),s.scrollToPercentVertical(1-a)},a.loadGradeImage=function(e){var t=this;d.load("images/renwu/"+e.toString().padStart(2,"0")+"/spriteFrame",p,(function(e,r){t.node.parent.getChildByPath("renwu/Sprite").getComponent(g).spriteFrame=r}))},a.setMainTitle=function(e){this.node.parent.getChildByPath("renwu/titleBG/Label").getComponent(h).string=e},a.setLabel=function(e,t){this.node.parent.getChildByPath(e).getComponent(h).string=t},a.onClose=function(){this.node.active=!1},a.onRenwuClick=function(){this.node.active=!0},t}(f)).prototype,"gradePrfb",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=m))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Grade.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(exports){"use strict";var _inheritsLoose,_defineProperty,_assertThisInitialized,_createClass,cclegacy,_decorator,Label,ProgressBar,Component;return{setters:[function(e){_inheritsLoose=e.inheritsLoose,_defineProperty=e.defineProperty,_assertThisInitialized=e.assertThisInitialized,_createClass=e.createClass},function(e){cclegacy=e.cclegacy,_decorator=e._decorator,Label=e.Label,ProgressBar=e.ProgressBar,Component=e.Component}],execute:function(){var _dec,_class,_temp;cclegacy._RF.push({},"5c5eb4Md3xFlZuAA5UvyVx/","Grade",void 0);var ccclass=_decorator.ccclass,property=_decorator.property,Grade=exports("Grade",(_dec=ccclass("Grade"),_dec((_temp=function(_Component){function Grade(){for(var e,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=_Component.call.apply(_Component,[this].concat(r))||this,_defineProperty(_assertThisInitialized(e),"_status",void 0),_defineProperty(_assertThisInitialized(e),"_progress",void 0),e}_inheritsLoose(Grade,_Component);var _proto=Grade.prototype;return _proto.start=function(){},_proto.setBG=function(e){var t=this.node;t.children.forEach((function(e){e.active=!1})),t.getChildByName(e).active=!0},_createClass(Grade,[{key:"string",set:function(e){this.node.getChildByPath(this.status+"/Label").getComponent(Label).string=e}},{key:"status",get:function(){return this._status},set:function(e){this._status=e,this.setBG(e)}},{key:"progress",get:function(){return this._progress},set:function set(value){this._progress=value;var progressBar=this.node.getChildByName("current").getComponent(ProgressBar);progressBar.progress=eval(value);var label=this.node.getChildByPath(this.status+"/num").getComponent(Label);label.string=value}}]),Grade}(Component),_class=_temp))||_class));cclegacy._RF.pop()}}}));

System.register("chunks:///_virtual/config.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,r,e,c;return{setters:[function(t){o=t.defineProperty,n=t.inheritsLoose},function(t){r=t.cclegacy,e=t._decorator,c=t.Component}],execute:function(){var i,s,u;r._RF.push({},"5f2eaqunZtNMoK/hBwIwfCe","config",void 0);var f=e.ccclass;e.property,t("config",f("config")((u=s=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){},o}(c),o(s,"grids",{rows:8,cols:10}),o(s,"grid",{w:65,h:65}),i=u))||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/AudioManagerLevel.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts"],(function(e){"use strict";var i,t,u,o,n,r,c,a,s,l,d,p,f,h;return{setters:[function(e){i=e.defineProperty,t=e.applyDecoratedDescriptor,u=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized,r=e.createClass},function(e){c=e.cclegacy,a=e._decorator,s=e.AudioSource,l=e.AudioClip,d=e.game,p=e.assert,f=e.Component},function(e){h=e.storage}],execute:function(){var S,M,y,_,g,v,b,m,A,L,k,z,w;c._RF.push({},"60904vvy3tM4Iy0oIK3FnQe","AudioManagerLevel",void 0);var B=a.ccclass,C=a.property;e("AudioManagerLevel",(S=B("AudioManagerLevel"),M=C(s),y=C(s),_=C(l),g=C(l),S((w=z=function(e){function i(){for(var i,t=arguments.length,u=new Array(t),r=0;r<t;r++)u[r]=arguments[r];return i=e.call.apply(e,[this].concat(u))||this,o(n(i),"_audioSourceMusic",m,n(i)),o(n(i),"_audioSourceSound",A,n(i)),o(n(i),"clickBtn",L,n(i)),o(n(i),"levelMusic",k,n(i)),i}u(i,e);var t=i.prototype;return t.onLoad=function(){d.addPersistRootNode(this.node);var e=this.node.getComponents(s);p(e),this._audioSourceMusic=e[0],this._audioSourceSound=e[1],this.setMuiscMute(h.AudioSetting.music),this.setSoundMute(h.AudioSetting.sound),i._instance=this},t.stop=function(){this._audioSourceMusic.stop()},t.playClickBtn=function(){this._audioSourceSound.playOneShot(this.clickBtn)},t.playLevelMusic=function(){this._audioSourceMusic.playing||(this._audioSourceMusic.clip=this.levelMusic,this._audioSourceMusic.play())},t.setMuiscMute=function(e){this._audioSourceMusic.volume=e?1:0},t.setSoundMute=function(e){this._audioSourceSound.volume=e?1:0},r(i,null,[{key:"instance",get:function(){return this._instance}}]),i}(f),i(z,"_instance",null),m=t((b=w).prototype,"_audioSourceMusic",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(b.prototype,"_audioSourceSound",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(b.prototype,"clickBtn",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(b.prototype,"levelMusic",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=b))||v));c._RF.pop()}}}));

System.register("chunks:///_virtual/Setting.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts","./AudioManagerLevel.ts"],(function(e){"use strict";var t,n,i,o,s,c,u,g;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e._decorator,o=e.Toggle,s=e.director,c=e.Component},function(e){u=e.storage},function(e){g=e.AudioManagerLevel}],execute:function(){var a;n._RF.push({},"7a5a9JgsdRD3oTo8DWc/dEM","Setting",void 0);var d=i.ccclass;i.property,e("Setting",d("Setting")(a=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var i=n.prototype;return i.start=function(){this.initToggle()},i.initToggle=function(){this.setToggleChecked("Mask/SpriteSplash/ToggleMusic",u.AudioSetting.music),this.setToggleChecked("Mask/SpriteSplash/ToggleSound",u.AudioSetting.sound)},i.setToggleChecked=function(e,t){this.node.getChildByPath(e).getComponent(o).isChecked=t},i.onMusicCheckedChange=function(e){u.AudioSetting.music=e.isChecked,g.instance.setMuiscMute(e.isChecked)},i.onSoundCheckedChange=function(e){u.AudioSetting.sound=e.isChecked,g.instance.setSoundMute(e.isChecked)},i.onSettingButtonClick=function(){this.node.active=!0},i.onClose=function(){this.node.active=!1},i.onOpenExplain=function(){s.loadScene("expl")},n}(c))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/ExplPref.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,i;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Label,i=t.Component}],execute:function(){var s;n._RF.push({},"adbaeTQE4dPsLkPo96VZgzc","ExplPref",void 0);var a=o.ccclass;o.property,t("ExplPref",a("ExplPref")(s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.setData=function(t){this.setLabel("bg/idiom",t.word+" ["+t.pinyin+"]"),this.setLabel("bg/expl",""+t.explanation)},o.setLabel=function(t,e){this.node.getChildByPath(t).getComponent(r).string=e},n}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/User.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var n,t,e;return{setters:[function(i){n=i.createClass,t=i.defineProperty},function(i){e=i.cclegacy}],execute:function(){e._RF.push({},"b708bL8Hv9ES6Ke+Rqc0ZFE","User",void 0);i("User",function(){function i(){var i;t(this,"_jingyan",0),t(this,"_jinbi",100);try{i=JSON.parse(localStorage.user)}catch(i){}i&&void 0!==i.jingyan?(this._jingyan=i.jingyan,this._jinbi=i.jinbi):this._store()}var e=i.prototype;return e.pass=function(i){console.log("User.pass",i);var n={jingyan:1,jinbi:5};return this.jingyan+=n.jingyan,this.jinbi+=n.jinbi,n},e._store=function(){localStorage.user=JSON.stringify(this.storeData)},n(i,[{key:"storeData",get:function(){return{jingyan:this._jingyan,jinbi:this._jinbi}}},{key:"jingyan",get:function(){return this._jingyan},set:function(i){this._jingyan=i,this._store()}},{key:"jinbi",get:function(){return this._jinbi},set:function(i){this._jinbi=i,this._store()}}]),i}());e._RF.pop()}}}));

System.register("chunks:///_virtual/Grid.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts","./enums.ts","./AudioManagerLevel.ts","./config.ts"],(function(t){"use strict";var e,i,n,r,s,o,a,c,l,u,h,d,p,f,y,g,m,v,b,k;return{setters:[function(t){e=t.inheritsLoose,i=t.defineProperty,n=t.assertThisInitialized,r=t.createClass,s=t.asyncToGenerator},function(t){o=t.cclegacy,a=t._decorator,c=t.Input,l=t.Vec3,u=t.UIOpacity,h=t.Animation,d=t.Label,p=t.Color,f=t.Component,y=t.instantiate,g=t.tween},function(t){m=t.storage},function(t){v=t.GridState},function(t){b=t.AudioManagerLevel},function(t){k=t.config}],execute:function(){var C;o._RF.push({},"deaf6H74/9NZ4R3YTYY0wpc","Grid",void 0);var _=a.ccclass;a.property,t("Grid",_("Grid")(C=function(t){function o(){for(var e,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s))||this,i(n(e),"data",void 0),i(n(e),"col",void 0),i(n(e),"row",void 0),i(n(e),"levelCtrl",null),i(n(e),"relTopGrid",void 0),i(n(e),"relBottomGrid",void 0),i(n(e),"isBottom",!1),i(n(e),"_bgName",void 0),i(n(e),"_state",v.DEFAULT),i(n(e),"_selected",!1),i(n(e),"_bottomFilled",!1),e}e(o,t);var a=o.prototype;return a.start=function(){this.bindEvents()},a.bindEvents=function(){var t=this;this.node.on(c.EventType.TOUCH_END,(function(e){t.data&&"empty"!==t.Type&&(b.instance.playClickBtn(),t.isBottom?t.bottomFilled?t.relTopGrid.resetWord():t.levelCtrl.fillWord(t):t.levelCtrl.setSelected(t))}))},a.setData=function(t){switch(this.data=t,this.updateType(),this.Type){case"char":this.setChar(t.char);break;case"blank":this.setChar("");break;case"bottom_blank":this.setChar(t._char)}},a.setBG=function(t){this._bgName=t;var e=this.node.getChildByPath("box/bgs");e.children.forEach((function(t){t.active=!1})),e.getChildByName(t).active=!0},a.updateType=function(){if("right"!==this._bgName)switch(this.setBG(this.Type),this.Type){case"bottom_blank":this.node.scale=new l(1.5,1.5,1)}},a.setOpacity=function(t){this.node.getComponent(u).opacity=255*t},a.setChar=function(t){null!=t&&(this.Label.string=t)},a.fillWord=function(){var t=s(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.bottomFilled=!0,e.relTopGrid=this,t.next=4,this.playFillWordAni(e);case 4:this.resetWord(),this.relBottomGrid=e,this.setChar(e.data._char),m.setFillRelBottom(this.axis,e.node.getSiblingIndex());case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),a.resetWord=function(){var t=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.canSelect&&null!=this.relBottomGrid){t.next=2;break}return t.abrupt("return");case 2:return this.levelCtrl.resetError(this),this.setChar(""),this.levelCtrl.setSelected(this),t.next=7,this.playResetWordAni(this.relBottomGrid);case 7:if(this.canSelect&&null!=this.relBottomGrid){t.next=9;break}return t.abrupt("return");case 9:this.relBottomGrid.relTopGrid=null,this.relBottomGrid.bottomFilled=!1,this.relBottomGrid=null,m.setFillRelBottom(this.axis,void 0);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),a.playAni=function(t){this.node.getChildByPath("box").getComponent(h).play(t)},a.playGridAni=function(){var t=s(regeneratorRuntime.mark((function t(e,i,n,r){var s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r=.2),t.abrupt("return",new Promise((function(t){var o=s.node.scene.getChildByPath("Canvas/game/anis"),a=y(e.node),c=a.getComponent(u);for(var l in c.opacity=255,i)a[l]=i[l];o.addChild(a),g(a).to(r,n,{easing:"quadOut"}).call((function(e){o.removeChild(a),t(e)})).start()})));case 2:case"end":return t.stop()}}),t)})));return function(e,i,n,r){return t.apply(this,arguments)}}(),a.playFillWordAni=function(){var t=s(regeneratorRuntime.mark((function t(e){var i,n,r,s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.node.position,n=i.x,r=i.y,s=i.z,o=new l(n,r+570,s),t.next=4,this.playGridAni(e,{},{position:o,scale:new l(1,1,1)});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),a.playResetWordAni=function(){var t=s(regeneratorRuntime.mark((function t(e){var i,n,r,s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.node.position,n=i.x,r=i.y,s=i.z,o=new l(n,r+570,s),t.next=4,this.playGridAni(e,{position:o,scale:new l(1,1,1)},{position:e.node.position,scale:new l(1.5,1.5,1)});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r(o,[{key:"index",get:function(){return this.col-1+(this.row-1)*k.grids.cols}},{key:"axis",get:function(){return this.row+"_"+this.col}},{key:"Label",get:function(){return this.node.getChildByPath("box/char").getComponent(d)}},{key:"isFilled",get:function(){return""!==this.Label.string}},{key:"isFillRight",get:function(){switch(this.data.type){case"blank":return this.Label.string===this.data._char;default:return!0}}},{key:"canSelect",get:function(){return"blank"===this.Type&&"right"!==this._bgName}},{key:"State",get:function(){return this._state},set:function(t){switch(this._state=t,m.setFillState(this.axis,this._state),this._state){case v.DEFAULT:this.Label.color=p.BLACK;break;case v.RIGHT:this.setBG("right"),this.Label.color=p.WHITE;break;case v.ERROR:this.Label.color=p.RED}}},{key:"Type",get:function(){var t=this.data.type;return this.isBottom&&(t="bottom_blank"),t}},{key:"Selected",get:function(){return this._selected},set:function(t){this._selected=t,m.currentSelectedAxis=this.axis,t?this.setBG("selected"):this.updateType()}},{key:"bottomFilled",get:function(){return this._bottomFilled},set:function(t){this._bottomFilled=t,this.setOpacity(t?.5:1)}}]),o}(f))||C);o._RF.pop()}}}));

System.register("chunks:///_virtual/Word.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./enums.ts"],(function(t){"use strict";var r,i,e,n,a;return{setters:[function(t){r=t.defineProperty},function(t){i=t.cclegacy,e=t.tween,n=t.Vec3},function(t){a=t.GridState}],execute:function(){i._RF.push({},"e6416oXwZ9HtL3P3/uqW5Xe","Word",void 0);t("Word",function(){function t(t){r(this,"_gridsMap",void 0),this._gridsMap=t}var i=t.prototype;return i.isAllFilled=function(t){var r=this;return t.axis.every((function(t){return r._gridsMap[t].isFilled}))},i.checkFillResult=function(t){var r=this;return t.axis.every((function(t){return r._gridsMap[t].isFillRight}))},i.checkLevelPass=function(){return Object.values(this._gridsMap).every((function(t){return t.isFillRight}))},i.playRightAni=function(t){var r=this;t.axis.forEach((function(t,i){var s=r._gridsMap[t];s.State=a.RIGHT,s.relBottomGrid&&s.relBottomGrid.setChar("");var o=.08;e(s.node).delay(o*i).to(o,{scale:new n(1.3,1.3,1)}).start().to(o,{scale:new n(1,1,1)}).start()}))},i.playErrorAni=function(t){var r=this;t.axis.forEach((function(t){var i=r._gridsMap[t];"blank"===i.data.type&&(i.State=a.ERROR),i.playAni("error")}))},i.resetError=function(t){var r=this;t.forEach((function(t){t.axis.forEach((function(t){var i=r._gridsMap[t];"blank"===i.data.type&&(i.State=a.DEFAULT)}))}))},t}());i._RF.pop()}}}));

System.register("chunks:///_virtual/storage.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,a;return{setters:[function(t){e=t.createClass},function(t){a=t.cclegacy}],execute:function(){a._RF.push({},"f584eSUDntGLaiSlh/FmzpS","storage",void 0);var n=t("storage",function(){function t(){}return t.setStorage=function(t,e,a){var n;try{n=JSON.parse(localStorage[t])}catch(t){}(n=n||{})[e]=a,localStorage[t]=JSON.stringify(n)},t.getStorage=function(t,e){var a;try{a=JSON.parse(localStorage[t])}catch(t){}return(a||{})[e]},t._setLevelStatusData=function(e,a){var n=t.levelStatusData;n[e]=a,t.levelStatusData=n},t._setFillMap=function(e,a,n){var l=t.levelStatusData;l.fill_map||(l.fill_map={}),l.fill_map[e]||(l.fill_map[e]={}),l.fill_map[e][a]=n,t.levelStatusData=l},t.setFillRelBottom=function(e,a){t._setFillMap(e,"bottom_idx",a)},t.setFillState=function(e,a){t._setFillMap(e,"state",a)},e(t,null,[{key:"currentLevel",get:function(){void 0===localStorage.current_level&&(localStorage.current_level=1);var t=Number(localStorage.current_level);return t>250&&(t=1),t},set:function(t){localStorage.current_level=t}},{key:"levelStatusData",get:function(){var t;try{t=JSON.parse(localStorage.level_status_data)}catch(t){}return t||{}},set:function(t){localStorage.level_status_data=JSON.stringify(t)}},{key:"bottomData",get:function(){return t.levelStatusData.bottom_data},set:function(e){t._setLevelStatusData("bottom_data",e)}},{key:"currentSelectedAxis",get:function(){return t.levelStatusData.current_axis},set:function(e){t._setLevelStatusData("current_axis",e)}},{key:"FillMap",get:function(){return t.levelStatusData.fill_map||{}}},{key:"AudioSetting",get:function(){return new l}}]),t}()),l=function(){function t(){}return e(t,[{key:"music",get:function(){return!1!==n.getStorage("setting","music")},set:function(t){n.setStorage("setting","music",t)}},{key:"sound",get:function(){return!1!==n.getStorage("setting","sound")},set:function(t){n.setStorage("setting","sound",t)}}]),t}();a._RF.pop()}}}));

System.register("chunks:///_virtual/Explain.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./storage.ts","./ExplPref.ts"],(function(e){"use strict";var t,n,i,r,l,o,a,s,c,u,p,v,f,h,d,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,l=e.defineProperty,o=e.createClass},function(e){a=e.cclegacy,s=e._decorator,c=e.Prefab,u=e.JsonAsset,p=e.instantiate,v=e.Label,f=e.director,h=e.Component},function(e){d=e.storage},function(e){b=e.ExplPref}],execute:function(){var x,y,g,m,L,P,C,E,w;a._RF.push({},"f8c84WWrtpAO64Ee/u+7L+s","Explain",void 0);var _=s.ccclass,D=s.property;e("Explain",(x=_("Explain"),y=D({type:c}),g=D(u),m=D(u),x((C=t((P=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,i(r(t),"explainPrfb",C,r(t)),i(r(t),"levelsDataJson",E,r(t)),i(r(t),"idiomExplainJson",w,r(t)),l(r(t),"_level",void 0),t}n(t,e);var a=t.prototype;return a.start=function(){this.render()},a.render=function(){if(void 0===this.level){var e=Math.max(d.currentLevel-1,1);this.level=e}this.renderLevelExplain(this.level)},a.renderLevelExplain=function(e){var t=this;this.node.getChildByPath("bottom/prev").active=e>1,this.node.getChildByPath("bottom/next").active=e<d.currentLevel-1,this.updateLevelLabel(e);var n=this.levelsDataJson.json["level-"+e].map((function(e){return e.word})),i=this.idiomExplainJson.json.filter((function(e){return n.includes(e.word)})),r=this.node.getChildByPath("ScrollView/view/content");r.removeAllChildren(),i.forEach((function(e){var n=p(t.explainPrfb);n.getComponent(b).setData(e),r.addChild(n)}))},a.updateLevelLabel=function(e){this.node.getChildByPath("top/levelLabel/Label").getComponent(v).string="第"+e+"关"},a.onReturnButtonClick=function(){f.loadScene("level")},a.onPrevClick=function(){this.level-=1,this.render()},a.onNextClick=function(){this.level+=1,this.render()},o(t,[{key:"level",get:function(){return this._level},set:function(e){this._level=e}}]),t}(h)).prototype,"explainPrfb",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(P.prototype,"levelsDataJson",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(P.prototype,"idiomExplainJson",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=P))||L));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./storage.ts","./AudioManagerMain.ts","./enums.ts","./main.ts","./AudioManagerLevel.ts","./config.ts","./User.ts","./Grid.ts","./Word.ts","./Level.ts","./Pass.ts","./Grade.ts","./Renwu.ts","./Setting.ts","./ExplPref.ts","./Explain.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});