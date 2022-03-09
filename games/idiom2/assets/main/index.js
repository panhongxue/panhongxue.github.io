System.register("chunks:///_virtual/AudioManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,i,r,o,a,c,u,l,s,p,d;return{setters:[function(e){n=e.defineProperty,t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,a=e.createClass},function(e){c=e.cclegacy,u=e._decorator,l=e.AudioSource,s=e.AudioClip,p=e.assert,d=e.Component}],execute:function(){var f,h,y,g,_,v,S,b,A;c._RF.push({},"0198cipuXpM84CYVT5USs6d","AudioManager",void 0);var k=u.ccclass,C=u.property;e("AudioManager",(f=k("AudioManager"),h=C(l),y=C(s),f((A=b=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,r(o(n),"_audioSource",v,o(n)),r(o(n),"clickBtn",S,o(n)),n}i(n,e);var t=n.prototype;return t.onLoad=function(){var e=this.node.getComponent(l);p(e),this._audioSource=e,n._instance=this},t.playClickBtn=function(){this._audioSource.playOneShot(this.clickBtn)},a(n,null,[{key:"instance",get:function(){return this._instance}}]),n}(d),n(b,"_instance",null),v=t((_=A).prototype,"_audioSource",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(_.prototype,"clickBtn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=_))||g));c._RF.pop()}}}));

System.register("chunks:///_virtual/enums.ts",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){var r;t("GridState",void 0),e._RF.push({},"10574qxTLBPpYpsd+o/q3rr","enums",void 0),function(t){t[t.EMPTY=0]="EMPTY",t[t.BLANK=1]="BLANK"}(r||(r=t("GridState",{}))),e._RF.pop()}}}));

System.register("chunks:///_virtual/main.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var n,t,e,c,r;return{setters:[function(o){n=o.inheritsLoose},function(o){t=o.cclegacy,e=o._decorator,c=o.director,r=o.Component}],execute:function(){var i;t._RF.push({},"1b3ffTiPC5Jc4Mr40gCsH+2","main",void 0);var l=e.ccclass;e.property,o("main",l("main")(i=function(o){function t(){return o.apply(this,arguments)||this}n(t,o);var e=t.prototype;return e.start=function(){},e.onStartButtonClick=function(){console.log("去答题"),c.preloadScene("level",(function(o,n){console.log("preload:",o,n)}),(function(o){console.log("onLoad"),c.loadScene("level")}))},t}(r))||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/Level.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./config.ts","./Grid.ts","./Word.ts"],(function(e){"use strict";var t,r,i,n,l,o,s,a,c,d,u,h,f,v,_,g,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized,l=e.defineProperty},function(e){o=e.cclegacy,s=e._decorator,a=e.Prefab,c=e.resources,d=e.Label,u=e.instantiate,h=e.Vec3,f=e.director,v=e.Component},function(e){_=e.config},function(e){g=e.Grid},function(e){p=e.Word}],execute:function(){var y,b,w,C,G;o._RF.push({},"3e04bwTD4xP+Y+M9dOi/RtN","Level",void 0);var m=s.ccclass,D=s.property;e("Level",(y=m("Level"),b=D({type:a}),y((G=t((C=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(n(t),"gridPrfb",G,n(t)),l(n(t),"_level",void 0),l(n(t),"_levelData",void 0),l(n(t),"_currentGrid",null),l(n(t),"_gridsMap",{}),l(n(t),"_wordCtrl",void 0),t}r(t,e);var o=t.prototype;return o.onLoad=function(){this.init()},o.start=function(){},o.init=function(){var e=this;void 0===localStorage.current_level&&(localStorage.current_level=1),this._level=Number(localStorage.current_level),this.updateLevelLabel(),c.load("levels/level."+this._level,(function(t,r){e._levelData=e.processData(r.json),console.log("关卡数据：",e._levelData),e.genGrids(),e.genBottomGrids(),e._wordCtrl=new p(e._gridsMap)}))},o.updateLevelLabel=function(){this.node.getChildByPath("game/levelLabel/Label").getComponent(d).string="第"+this._level+"关"},o.processData=function(e){this._levelData={words:e};var t={};e.forEach((function(e){e.blanks.forEach((function(e){t[e]=!0}))}));for(var r=[],i=1;i<=8;i++)for(var n=1;n<=10;n++){var l=t[i+"_"+n],o=this.getWordByAxis(i,n),s={type:l?"blank":o?"char":"empty"};l?s._char=o:s.char=o,r.push(s)}return{words:e,chars:r}},o.__getWordsByAxis=function(e,t){return this._levelData.words.filter((function(r){return r.axis.includes(e+"_"+t)}))},o.getWordByAxis=function(e,t){var r=this.__getWordsByAxis(e,t);if(r.length>0){var i=r[0];return i.word.split("")[i.axis.indexOf(e+"_"+t)]}return""},o.genGrids=function(){for(var e=this.node.getChildByPath("game/grids/bg"),t=_.grid,r=!0,i=0;i<_.grids.rows;i++)for(var n=0;n<_.grids.cols;n++){var l=u(this.gridPrfb),o=new h(n*(t.w+2)-360+21+t.w/2+5,250,0);o.y=-i*(t.h+2)+235,l.setPosition(o);var s=l.getComponent(g);s.levelCtrl=this,s.setChar((i*_.grids.cols+n).toString());var a=this._levelData.chars[i*_.grids.cols+n];s.setData(a),s.col=n+1,s.row=i+1,this._gridsMap[s.row+"_"+s.col]=s,"blank"===a.type&&r&&(r=!1,this.setSelected(s)),e.addChild(l)}},o.genBottomGrids=function(){var e=this,t=this._levelData.chars.filter((function(e){return"blank"==e.type}));t.sort((function(){return Math.random()>.5?-1:1}));var r=this.node.getChildByPath("game/bottomGrids");t.forEach((function(t){var i=u(e.gridPrfb),n=i.getComponent(g);n.levelCtrl=e,n.isBottom=!0,n.setData(t),r.addChild(i)}))},o.setSelected=function(e){e.canSelect&&(null!==this._currentGrid&&(this._currentGrid.Selected=!1),this._currentGrid=e,e.Selected=!0,e.isFilled&&this._currentGrid.resetWord())},o.fillWord=function(e){this._currentGrid.canSelect&&(this._currentGrid.fillWord(e),this.checkCurrentWord()&&this.selectNext())},o.checkCurrentWord=function(){var e=this,t=!0;return this.__getWordsByAxis(this._currentGrid.row,this._currentGrid.col).forEach((function(r){e._wordCtrl.isAllFilled(r)&&(e._wordCtrl.checkFillResult(r)?(e._wordCtrl.playRightAni(r),console.log(r),e._wordCtrl.checkLevelPass()&&(console.log("过关"),localStorage.current_level=e._level+1,f.loadScene("pass"))):(t=!1,e._wordCtrl.playErrorAni(r)))})),t},o.selectNext=function(){var e,t=this,r=Object.values(this._gridsMap);if(this.__getWordsByAxis(this._currentGrid.row,this._currentGrid.col).find((function(r){var i=r.blanks.find((function(e){return!t._gridsMap[e].isFilled}));if(i)return e=t._gridsMap[i],!0})),!e){var i=r.slice(this._currentGrid.index+1);e=i.find((function(e){return"blank"==e.data.type&&!e.isFilled}))}e||(e=r.find((function(e){return"blank"==e.data.type&&!e.isFilled}))),e&&this.setSelected(e)},t}(v)).prototype,"gridPrfb",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=C))||w));o._RF.pop()}}}));

System.register("chunks:///_virtual/Pass.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,r,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.director,c=t.Component}],execute:function(){var s;e._RF.push({},"458430gYihLzo3Vnb3GbyjR","Pass",void 0);var i=o.ccclass;o.property,t("Pass",i("Pass")(s=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.onBtnReturnClick=function(){r.loadScene("main")},o.onBtnNextClick=function(){r.loadScene("level")},e}(c))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/config.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,r,e,c;return{setters:[function(t){o=t.defineProperty,n=t.inheritsLoose},function(t){r=t.cclegacy,e=t._decorator,c=t.Component}],execute:function(){var i,s,u;r._RF.push({},"5f2eaqunZtNMoK/hBwIwfCe","config",void 0);var f=e.ccclass;e.property,t("config",f("config")((u=s=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){},o}(c),o(s,"grids",{rows:8,cols:10}),o(s,"grid",{w:65,h:65}),i=u))||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/Grid.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./AudioManager.ts","./config.ts"],(function(t){"use strict";var e,i,n,o,s,r,l,a,c,h,d,u,p,f;return{setters:[function(t){e=t.inheritsLoose,i=t.defineProperty,n=t.assertThisInitialized,o=t.createClass},function(t){s=t.cclegacy,r=t._decorator,l=t.Input,a=t.Vec3,c=t.UIOpacity,h=t.Animation,d=t.Component,u=t.Label},function(t){p=t.AudioManager},function(t){f=t.config}],execute:function(){var y;s._RF.push({},"deaf6H74/9NZ4R3YTYY0wpc","Grid",void 0);var g=r.ccclass;r.property,t("Grid",g("Grid")(y=function(t){function s(){for(var e,o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,i(n(e),"data",void 0),i(n(e),"col",void 0),i(n(e),"row",void 0),i(n(e),"levelCtrl",null),i(n(e),"relTopGrid",void 0),i(n(e),"relBottomGrid",void 0),i(n(e),"isBottom",!1),i(n(e),"_bgName",void 0),i(n(e),"_selected",!1),i(n(e),"_bottomFilled",!1),e}e(s,t);var r=s.prototype;return r.start=function(){this.bindEvents()},r.bindEvents=function(){var t=this;this.node.on(l.EventType.TOUCH_END,(function(e){p.instance.playClickBtn(),t.isBottom?t.bottomFilled?t.relTopGrid.resetWord():t.levelCtrl.fillWord(t):t.levelCtrl.setSelected(t)}))},r.setData=function(t){if(this.data=t,"empty"!==t.type)switch(this.updateType(),this.Type){case"char":this.setChar(t.char);break;case"blank":this.setChar("");break;case"bottom_blank":this.setChar(t._char)}else this.node.active=!1},r.setBG=function(t){this._bgName=t;var e=this.node.getChildByPath("box/bgs");e.children.forEach((function(t){t.active=!1})),e.getChildByName(t).active=!0},r.updateType=function(){if("right"!==this._bgName)switch(this.setBG(this.Type),this.Type){case"bottom_blank":this.node.scale=new a(1.5,1.5,1)}},r.setOpacity=function(t){this.node.getComponent(c).opacity=255*t},r.setChar=function(t){null!=t&&(this.Label.string=t)},r.fillWord=function(t){this.resetWord(),t.relTopGrid=this,t.bottomFilled=!0,this.relBottomGrid=t,this.setChar(t.data._char)},r.resetWord=function(){this.canSelect&&null!=this.relBottomGrid&&(this.relBottomGrid.relTopGrid=null,this.relBottomGrid.bottomFilled=!1,this.relBottomGrid=null,this.setChar(""),this.levelCtrl.setSelected(this))},r.playAni=function(t){this.node.getChildByPath("box").getComponent(h).play(t)},o(s,[{key:"index",get:function(){return this.col-1+(this.row-1)*f.grids.cols}},{key:"Label",get:function(){return this.node.getChildByPath("box/char").getComponent(u)}},{key:"isFilled",get:function(){return""!==this.Label.string}},{key:"isFillRight",get:function(){switch(this.data.type){case"blank":return this.Label.string===this.data._char;default:return!0}}},{key:"canSelect",get:function(){return"blank"===this.Type&&"right"!==this._bgName}},{key:"Type",get:function(){var t=this.data.type;return this.isBottom&&(t="bottom_blank"),t}},{key:"Selected",get:function(){return this._selected},set:function(t){this._selected=t,t?this.setBG("selected"):this.updateType()}},{key:"bottomFilled",get:function(){return this._bottomFilled},set:function(t){this._bottomFilled=t,this.setOpacity(t?.5:1)}}]),s}(d))||y);s._RF.pop()}}}));

System.register("chunks:///_virtual/Word.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var t,e,i,n,o;return{setters:[function(r){t=r.defineProperty},function(r){e=r.cclegacy,i=r.Color,n=r.tween,o=r.Vec3}],execute:function(){e._RF.push({},"e6416oXwZ9HtL3P3/uqW5Xe","Word",void 0);r("Word",function(){function r(r){t(this,"_gridsMap",void 0),this._gridsMap=r}var e=r.prototype;return e.isAllFilled=function(r){var t=this;return r.axis.every((function(r){return t._gridsMap[r].isFilled}))},e.checkFillResult=function(r){var t=this;return r.axis.every((function(r){return t._gridsMap[r].isFillRight}))},e.checkLevelPass=function(){return Object.values(this._gridsMap).every((function(r){return r.isFillRight}))},e.playRightAni=function(r){var t=this;r.axis.forEach((function(r,e){var s=t._gridsMap[r];s.setBG("right"),s.Label.color=i.WHITE,s.relBottomGrid&&s.relBottomGrid.setChar("");var a=.08;n(s.node).delay(a*e).to(a,{scale:new o(1.3,1.3,1)}).start().to(a,{scale:new o(1,1,1)}).start()}))},e.playErrorAni=function(r){var t=this;r.axis.forEach((function(r){var e=t._gridsMap[r];"blank"===e.data.type&&(e.Label.color=i.RED),e.playAni("error")}))},r}());e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AudioManager.ts","./enums.ts","./main.ts","./config.ts","./Grid.ts","./Word.ts","./Level.ts","./Pass.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

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