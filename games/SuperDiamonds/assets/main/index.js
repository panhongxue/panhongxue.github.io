System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Main.ts","./Piece.ts","./util.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./util.ts","./random.module.js","./Piece.ts"],(function(t){var i,e,s,r,h,n,a,o,c,l,y,x,u,p,g;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,s=t.initializerDefineProperty,r=t.assertThisInitialized,h=t.createClass,n=t.asyncToGenerator},function(t){a=t.cclegacy,o=t._decorator,c=t.Prefab,l=t.instantiate,y=t.Vec3,x=t.Component},function(t){u=t.sleep},function(t){p=t.default},function(t){g=t.Piece}],execute:function(){var f,d,v,P,A;a._RF.push({},"6a61ckmcnVEqrxxqQlYV0im","Main",void 0);var w=o.ccclass,m=o.property;t("Main",(f=w("Main"),d=m({type:c}),f((A=i((P=function(t){function i(){for(var i,e=arguments.length,h=new Array(e),n=0;n<e;n++)h[n]=arguments[n];return i=t.call.apply(t,[this].concat(h))||this,s(i,"prefab",A,r(i)),i._playButton=null,i._gameover=void 0,i._grid=null,i._pieceMap={},i._selectAxix={x:-1,y:-1},i._targetAxix={x:-1,y:-1},i.p=void 0,i.way=void 0,i.ortaX=[],i.ortaY=[],i.nrtaX=void 0,i.nrtaY=void 0,i.cells=0,i.score=0,i}e(i,t);var a=i.prototype;return a.start=function(){this._playButton=this.node.getChildByPath("Grid/play"),this._grid=this.node.getChildByPath("Grid/bg"),this._gameover=this.node.getChildByPath("Grid/gameover")},a.update=function(t){},a.onPlayButtonClicked=function(){console.log("开始游戏"),this._playButton.active=!1,this.buildGrid(),this.createPiece()},a.createPiece=function(){var t=n((function*(t){void 0===t&&(t=5),yield u(0);for(var i=0;i<t;i++){var e=this.getRandomEmptyPieceAxix(),s=p.int(1,7);console.log("createPiece",e,s),this.getPiece(e).type=s,++this.cells,this.check(e.x,e.y,s),this.cells>=81&&(console.log("gameover"),this._gameover.active=!0),yield u(200)}}));return function(i){return t.apply(this,arguments)}}(),a.buildGrid=function(){for(var t=50,i=50,e=0;e<9;e++)for(var s=0;s<9;s++){var r=l(this.prefab),h=new y(s*(t+4.8)+t/2+6-250,0,0);h.y=-e*(i+4.8)-(t/2+6)+250,r.setPosition(h),this._grid.addChild(r);var n=r.getComponent(g);n.axix={x:s,y:e},this.setPieceMap(n.axix,n)}},a.setPieceMap=function(t,i){this._pieceMap[t.x+"_"+t.y]=i},a.getPiece=function(t){return this._pieceMap[t.x+"_"+t.y]},a.getRandomEmptyPieceAxix=function(){for(var t={x:p.int(0,8),y:p.int(0,8)};this.getPiece(t).type>0;)if(++t.x>=9&&(t.x=0,++t.y>=9)){t.y=0;break}return t},a.startMove=function(){this.resetWay(),this.p[this.selectAxix.x][this.selectAxix.y]=0,this.ortaX[0]=this.selectAxix.x,this.ortaY[0]=this.selectAxix.y;do{this.nrtaX=new Array,this.nrtaY=new Array;for(var t=0;t<this.ortaX.length;)this.find(this.ortaX[t],this.ortaY[t]),++t;this.ortaX=this.nrtaX,this.ortaY=this.nrtaY}while(this.ortaX.length>0&&0==this.way[this.targetAxix.x][this.targetAxix.y].length);this.p[this.targetAxix.x][this.targetAxix.y]<Number.POSITIVE_INFINITY&&this.movePiece()},a.movePiece=function(){var t=n((function*(){var t,i=this.targetAxix.x,e=this.targetAxix.y,s=this.selectAxix.x,r=this.selectAxix.y,h=this.way[i][e].length,n=-1,a=null==(t=this.getPiece({x:s,y:r}))?void 0:t.type;for(console.log("movePiece",{x:s,y:r},this.getPiece({x:s,y:r}));;){if(!(++n<h)){if(this.check(this.targetAxix.x,this.targetAxix.y,a))break;this.createPiece(3);break}0==this.way[i][e][n]?(this.getPiece({x:s,y:r}).mr(),++s):1==this.way[i][e][n]?(this.getPiece({x:s,y:r}).mt(),--r):2==this.way[i][e][n]?(this.getPiece({x:s,y:r}).ml(),--s):(this.getPiece({x:s,y:r}).md(),++r),yield u(100),this.getPiece({x:s,y:r}).type=a,yield u(100)}}));return function(){return t.apply(this,arguments)}}(),a.check=function(t,i,e){console.log("check",t,i,e);for(var s=0,r=new Array,h=new Array,n=new Array,a=new Array,o=0;o<3;++o)r[o]=0,h[o]=0,n[o]=!1,a[o]=!1;for(o=1;o<5;++o){var c,l,y,x,u,p,g,f;n[0]||(null==(c=this.getPiece({x:t-o,y:i}))?void 0:c.type)!=e?n[0]=!0:++r[0],a[0]||(null==(l=this.getPiece({x:t+o,y:i}))?void 0:l.type)!=e?a[0]=!0:++h[0],n[1]||(null==(y=this.getPiece({x:t,y:i-o}))?void 0:y.type)!=e?n[1]=!0:++r[1],a[1]||(null==(x=this.getPiece({x:t,y:i+o}))?void 0:x.type)!=e?a[1]=!0:++h[1],n[2]||(null==(u=this.getPiece({x:t-o,y:i-o}))?void 0:u.type)!=e?n[2]=!0:++r[2],a[2]||(null==(p=this.getPiece({x:t+o,y:i+o}))?void 0:p.type)!=e?a[2]=!0:++h[2],n[3]||(null==(g=this.getPiece({x:t-o,y:i+o}))?void 0:g.type)!=e?n[3]=!0:++r[3],a[3]||(null==(f=this.getPiece({x:t+o,y:i-o}))?void 0:f.type)!=e?a[3]=!0:++h[3]}if(r[0]+h[0]>3){++s,this.cells=this.cells-(r[0]+h[0]),this.score=this.score+10*(r[0]+h[0]);for(o=-r[0];h[0]>=o;++o){var d;null==(d=this.getPiece({x:t+o,y:i}))||d.go()}}if(r[1]+h[1]>3){++s,this.cells=this.cells-(r[1]+h[1]),this.score=this.score+10*(r[1]+h[1]);for(o=-r[1];h[1]>=o;++o){var v;null==(v=this.getPiece({x:t,y:i+o}))||v.go()}}if(r[2]+h[2]>3){++s,this.cells=this.cells-(r[2]+h[2]),this.score=this.score+10*(r[2]+h[2]);for(o=-r[2];h[2]>=o;++o){var P;null==(P=this.getPiece({x:t+o,y:i+o}))||P.go()}}if(r[3]+h[3]>3){++s,this.cells=this.cells-(r[3]+h[3]),this.score=this.score+10*(r[3]+h[3]);for(o=-r[3];h[3]>=o;++o){var A;null==(A=this.getPiece({x:t+o,y:i-o}))||A.go()}}return s>0&&(--this.cells,this.score=this.score+10,!0)},a.find=function(t,i){var e,s,r,h;(null==(e=this.getPiece({x:t+1,y:i}))?void 0:e.type)<1&&t+1<9&&this.p[t][i]+1<this.p[t+1][i]&&(this.p[t+1][i]=this.p[t][i]+1,this.way[t+1][i]=this.way[t][i].concat(0),this.nrtaX.push(t+1),this.nrtaY.push(i)),(null==(s=this.getPiece({x:t,y:i-1}))?void 0:s.type)<1&&i-1>-1&&this.p[t][i]+1<this.p[t][i-1]&&(this.p[t][i-1]=this.p[t][i]+1,this.way[t][i-1]=this.way[t][i].concat(1),this.nrtaX.push(t),this.nrtaY.push(i-1)),(null==(r=this.getPiece({x:t-1,y:i}))?void 0:r.type)<1&&t-1>-1&&this.p[t][i]+1<this.p[t-1][i]&&(this.p[t-1][i]=this.p[t][i]+1,this.way[t-1][i]=this.way[t][i].concat(2),this.nrtaX.push(t-1),this.nrtaY.push(i)),(null==(h=this.getPiece({x:t,y:i+1}))?void 0:h.type)<1&&i+1<9&&this.p[t][i]+1<this.p[t][i+1]&&(this.p[t][i+1]=this.p[t][i]+1,this.way[t][i+1]=this.way[t][i].concat(3),this.nrtaX.push(t),this.nrtaY.push(i+1))},a.resetWay=function(){this.p=new Array,this.way=new Array;for(var t=0;t<9;++t){this.p[t]=new Array,this.way[t]=new Array;for(var i=0;i<9;++i)this.p[t][i]=Number.POSITIVE_INFINITY,this.way[t][i]=new Array}},h(i,[{key:"selectAxix",get:function(){return this._selectAxix},set:function(t){this._selectAxix=t}},{key:"targetAxix",get:function(){return this._targetAxix},set:function(t){this._targetAxix=t}}]),i}(x)).prototype,"prefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=P))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Piece.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts"],(function(t){var i,e,n,s,o,a,c,r;return{setters:[function(t){i=t.inheritsLoose,e=t.createClass},function(t){n=t.cclegacy,s=t._decorator,o=t.Animation,a=t.Input,c=t.Component},function(t){r=t.Main}],execute:function(){var p;n._RF.push({},"765546GQ/ROzK0TXRmPkhMX","Piece",void 0);var h=s.ccclass;s.property,t("Piece",h("Piece")(p=function(t){function n(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this)._type=0,i._axix=void 0,i._anim=void 0,i._cont=void 0,i}i(n,t);var s=n.prototype;return s.start=function(){this._cont=this.node.getChildByName("Node"),this._anim=this.getComponent(o),this.bindEvents(),this.reset()},s.update=function(t){},s.bindEvents=function(){var t=this;this.node.on(a.EventType.TOUCH_END,(function(i){var e=t.node.parent.parent.parent.getComponent(r);if(e.targetAxix=t.axix,e.selectAxix.x>-1&&0==e.getPiece(t.axix).type)console.log("移动",t.axix),e.startMove();else if(e.getPiece(t.axix).type>0){var n;console.log("选中",t.axix),null==(n=e.getPiece(e.selectAxix))||n.stopAnims(),e.selectAxix=t.axix,t._anim.play()}})),this._anim.on(o.EventType.FINISHED,(function(i){t.reset()}))},s.reset=function(){this.type=0,this.stopAnims()},s.hideAll=function(){this._cont.children.forEach((function(t){t.active=!1}))},s.playScale=function(){this._anim.getState("scale").play()},s.stopAnims=function(){var t=this;this._anim.clips.forEach((function(i){var e=t._anim.getState(i.name);e.setTime(0),e.sample(),e.stop()}))},s.ml=function(){this.stopAnims(),this._anim.getState("ml").play()},s.mr=function(){this.stopAnims(),this._anim.getState("mr").play()},s.mt=function(){this.stopAnims(),this._anim.getState("mt").play()},s.md=function(){this.stopAnims(),this._anim.getState("md").play()},s.go=function(){this._anim.getState("go").play()},e(n,[{key:"type",get:function(){return this._type},set:function(t){this._type=t,this.hideAll(),t>0&&t<=7&&(this._cont.children[t-1].active=!0)}},{key:"axix",get:function(){return this._axix},set:function(t){this._axix=t}}]),n}(c))||p);n._RF.pop()}}}));

System.register("chunks:///_virtual/util.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e;return{setters:[function(t){n=t.asyncToGenerator},function(t){e=t.cclegacy}],execute:function(){function u(){return(u=n((function*(t){return new Promise((function(n){return setTimeout(n,t)}))}))).apply(this,arguments)}t("sleep",(function(t){return u.apply(this,arguments)})),e._RF.push({},"0aab5imheVHjpo2nqtMXc2v","util",void 0),e._RF.pop()}}}));

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