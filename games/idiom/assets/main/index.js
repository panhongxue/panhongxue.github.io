System.register("chunks:///_virtual/LevelController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,i,n,o,a,s,l,c,d,u,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized,o=t.defineProperty},function(t){a=t.cclegacy,s=t._decorator,l=t.Prefab,c=t.resources,d=t.tween,u=t.instantiate,h=t.Component}],execute:function(){var f,p,v,g,y;a._RF.push({},"c4def2Wu6lIsqe9mmj5La3P","LevelController",void 0);var _=s.ccclass,m=s.property;t("LevelController",(f=_("LevelController"),p=m({type:l}),f((y=e((g=function(t){function e(){for(var e,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a))||this,i(n(e),"gridPrfb",y,n(e)),o(n(e),"_levelData",void 0),o(n(e),"_currentGrid",void 0),e}r(e,t);var a=e.prototype;return a.start=function(){this.init()},a.init=function(){var t=this;c.load("levels/level.3",(function(e,r){t._levelData=r.json,t.genGrids(),t.genBottomGrids()}))},a.setSelected=function(t){if(this._currentGrid==t)this.resetWord();else{this._currentGrid=t;var e=this.node.getChildByName("highlight");d(e).to(.1,{position:t.node.position}).start()}},a.resetWord=function(){"blank"==this._currentGrid.data.type&&this._currentGrid.setChar("")},a.fillWord=function(t){"blank"==this._currentGrid.data.type&&this._currentGrid.setChar(t.data._char)},a.genGrids=function(){console.log("生成格子...");for(var t=70,e=70,r=!0,i=0;i<8;i++)for(var n=0;n<10;n++){var o=u(this.gridPrfb);o.setPosition(n*(t+1)-360+t/2+5,-i*(e+1),0);var a=o.getComponent("Grid"),s=this._levelData[10*i+n];a.setData(s),"blank"==s.type&&r&&(r=!1,this.setSelected(a)),this.node.getChildByName("Grids").addChild(o)}},a.genBottomGrids=function(){var t=this,e=this._levelData.filter((function(t){return"blank"==t.type}));e.sort((function(){return Math.random()>.5?-1:1})),e.forEach((function(e){console.log(e);var r=u(t.gridPrfb),i=r.getComponent("Grid");i.isBottom=!0,i.setData(e),t.node.getChildByName("BottomGrids").addChild(r)}))},e}(h)).prototype,"gridPrfb",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=g))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Grid.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,i,s,a,o,c,h,p;return{setters:[function(t){e=t.inheritsLoose,n=t.defineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,s=t._decorator,a=t.Input,o=t.resources,c=t.Sprite,h=t.Label,p=t.Component}],execute:function(){var d;i._RF.push({},"cb6d6v8f/FH5riM6Sd9GSlf","Grid",void 0);var l=s.ccclass;s.property,t("Grid",l("Grid")(d=function(t){function i(){for(var e,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,n(r(e),"data",void 0),n(r(e),"isBottom",!1),e}e(i,t);var s=i.prototype;return s.start=function(){this.bindEvents()},s.bindEvents=function(){var t=this;"empty"!=this.data.type&&this.node.on(a.EventType.TOUCH_END,(function(e){var n=t.node.parent.parent.getComponent("LevelController");t.isBottom?n.fillWord(t):n.setSelected(t)}))},s.setData=function(t){switch(this.data=t,this.setType(),t.type){case"char":this.setChar(t.char);break;case"blank":this.isBottom&&this.setChar(t._char)}},s.setType=function(){var t=this,e=this.data.type;switch(e){case"char":case"blank":o.load("images/bg_grid_"+e+"/spriteFrame",(function(e,n){t.node.getChildByName("BG").getComponent(c).spriteFrame=n}))}},s.setChar=function(t){null!=t&&(this.node.getChildByName("char").getComponent(h).string=t)},i}(p))||d);i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./LevelController.ts","./Grid.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

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