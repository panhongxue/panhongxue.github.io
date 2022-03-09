System.register("chunks:///_virtual/AudioManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, AudioSource, AudioClip, assert, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      assert = module.assert;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp;

      cclegacy._RF.push({}, "0198cipuXpM84CYVT5USs6d", "AudioManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AudioManager = exports('AudioManager', (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioClip), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);

        function AudioManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_audioSource", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "clickBtn", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AudioManager.prototype;

        _proto.onLoad = function onLoad() {
          var audioSource = this.node.getComponent(AudioSource);
          assert(audioSource);
          this._audioSource = audioSource;
          AudioManager._instance = this;
        };

        _proto.playClickBtn = function playClickBtn() {
          this._audioSource.playOneShot(this.clickBtn);
        };

        _createClass(AudioManager, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);

        return AudioManager;
      }(Component), _defineProperty(_class3, "_instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/enums.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('GridState', void 0);

      cclegacy._RF.push({}, "10574qxTLBPpYpsd+o/q3rr", "enums", undefined);

      var GridState;

      (function (GridState) {
        GridState[GridState["EMPTY"] = 0] = "EMPTY";
        GridState[GridState["BLANK"] = 1] = "BLANK";
      })(GridState || (GridState = exports('GridState', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, director, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1b3ffTiPC5Jc4Mr40gCsH+2", "main", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var main = exports('main', (_dec = ccclass('main'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(main, _Component);

        function main() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = main.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.onStartButtonClick = function onStartButtonClick() {
          console.log('去答题');
          director.preloadScene('level', function (load, total) {
            // progressBar.progress = load / total;
            console.log('preload:', load, total);
          }, function (err) {
            console.log('onLoad');
            director.loadScene('level');
          });
        };

        return main;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Level.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './config.ts', './Grid.ts', './Word.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Prefab, resources, Label, instantiate, Vec3, director, Component, config, Grid, Word;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      resources = module.resources;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      config = module.config;
    }, function (module) {
      Grid = module.Grid;
    }, function (module) {
      Word = module.Word;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "3e04bwTD4xP+Y+M9dOi/RtN", "Level", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Level = exports('Level', (_dec = ccclass('Level'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Level, _Component);

        function Level() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "gridPrfb", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_level", void 0);

          _defineProperty(_assertThisInitialized(_this), "_levelData", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentGrid", null);

          _defineProperty(_assertThisInitialized(_this), "_gridsMap", {});

          _defineProperty(_assertThisInitialized(_this), "_wordCtrl", void 0);

          return _this;
        }

        var _proto = Level.prototype;

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.init = function init() {
          var _this2 = this;

          if (localStorage['current_level'] === undefined) {
            localStorage['current_level'] = 1;
          }

          this._level = Number(localStorage['current_level']);
          this.updateLevelLabel();
          resources.load("levels/level." + this._level, function (err, json) {
            _this2._levelData = _this2.processData(json.json);
            console.log('关卡数据：', _this2._levelData);

            _this2.genGrids();

            _this2.genBottomGrids();

            _this2._wordCtrl = new Word(_this2._gridsMap);
          });
        };

        _proto.updateLevelLabel = function updateLevelLabel() {
          var label = this.node.getChildByPath('game/levelLabel/Label').getComponent(Label);
          label.string = "\u7B2C" + this._level + "\u5173";
        };

        _proto.processData = function processData(words) {
          this._levelData = {
            words: words
          };
          var blanks = {};
          words.forEach(function (t) {
            t.blanks.forEach(function (axis) {
              blanks[axis] = true;
            });
          });
          var chars = [];

          for (var y = 1; y <= 8; y++) {
            for (var x = 1; x <= 10; x++) {
              var isBlank = blanks[y + "_" + x];

              var _char = this.getWordByAxis(y, x);

              var item = {
                type: isBlank ? 'blank' : _char ? 'char' : 'empty'
              };

              if (isBlank) {
                item._char = _char;
              } else {
                item["char"] = _char;
              }

              chars.push(item);
            }
          }

          return {
            words: words,
            chars: chars
          };
        };

        _proto.__getWordsByAxis = function __getWordsByAxis(rowIndex, colIndex) {
          return this._levelData.words.filter(function (t) {
            return t.axis.includes(rowIndex + "_" + colIndex);
          });
        };

        _proto.getWordByAxis = function getWordByAxis(rowIndex, colIndex) {
          var words = this.__getWordsByAxis(rowIndex, colIndex);

          if (words.length > 0) {
            var word = words[0];
            return word.word.split('')[word.axis.indexOf(rowIndex + "_" + colIndex)];
          }

          return '';
        };

        _proto.genGrids = function genGrids() {
          var container = this.node.getChildByPath('game/grids/bg');
          var size = config.grid;
          var firstBlank = true;

          for (var y = 0; y < config.grids.rows; y++) {
            for (var x = 0; x < config.grids.cols; x++) {
              var gridNode = instantiate(this.gridPrfb);
              var pos = new Vec3(x * (size.w + 2) - 360 + 21 + size.w / 2 + 5, 250, 0); // pos.y = (7-y) * (size.h + 1) - 500

              pos.y = -y * (size.h + 2) + 235;
              gridNode.setPosition(pos); // tween(gridNode)
              //   .delay(x * 0.05 + (7 - y) * 0.05)
              //   .to(0.2, { position: pos }, { easing: 'quadOut' })
              //   .start();

              var grid = gridNode.getComponent(Grid);
              grid.levelCtrl = this; // debug

              grid.setChar((y * config.grids.cols + x).toString());
              var gridData = this._levelData.chars[y * config.grids.cols + x];
              grid.setData(gridData);
              grid.col = x + 1;
              grid.row = y + 1;
              this._gridsMap[grid.row + "_" + grid.col] = grid;

              if (gridData.type === 'blank' && firstBlank) {
                firstBlank = false;
                this.setSelected(grid); // let highlight = this.node.getChildByName('highlight');
                // tween(highlight)
                //   .delay(x * 0.05 + (7 - y) * 0.05)
                //   .to(0.2, { position: pos }, { easing: 'quadOut' })
                //   .start();
              }

              container.addChild(gridNode);
            }
          }
        };

        _proto.genBottomGrids = function genBottomGrids() {
          var _this3 = this;

          var bottomData = this._levelData.chars.filter(function (item) {
            return item.type == 'blank';
          });

          bottomData.sort(function () {
            return Math.random() > 0.5 ? -1 : 1;
          });
          var container = this.node.getChildByPath('game/bottomGrids');
          bottomData.forEach(function (item) {
            var gridNode = instantiate(_this3.gridPrfb); // gridNode.scale = new Vec3(1.5, 1.5, 1);

            var grid = gridNode.getComponent(Grid);
            grid.levelCtrl = _this3;
            grid.isBottom = true;
            grid.setData(item);
            container.addChild(gridNode);
          });
        };

        _proto.setSelected = function setSelected(grid) {
          if (!grid.canSelect) {
            return;
          }

          if (this._currentGrid !== null) {
            this._currentGrid.Selected = false;
          }

          this._currentGrid = grid;
          grid.Selected = true;

          if (grid.isFilled) {
            this._currentGrid.resetWord();
          }
        };

        _proto.fillWord = function fillWord(bottomGrid) {
          if (this._currentGrid.data.type !== 'blank') {
            return;
          }

          this._currentGrid.fillWord(bottomGrid);

          if (this.checkCurrentWord()) {
            this.selectNext();
          }
        };

        _proto.checkCurrentWord = function checkCurrentWord() {
          var _this4 = this;

          var result = true;

          var words = this.__getWordsByAxis(this._currentGrid.row, this._currentGrid.col);

          words.forEach(function (word) {
            if (_this4._wordCtrl.isAllFilled(word)) {
              if (_this4._wordCtrl.checkFillResult(word)) {
                _this4._wordCtrl.playRightAni(word);

                console.log(word);

                if (_this4._wordCtrl.checkLevelPass()) {
                  console.log('过关');
                  localStorage['current_level'] = _this4._level + 1;
                  director.loadScene('pass');
                }
              } else {
                result = false;

                _this4._wordCtrl.playErrorAni(word);
              }
            }
          });
          return result;
        };

        _proto.selectNext = function selectNext() {
          var _this5 = this;

          var grids = Object.values(this._gridsMap);
          var nextBlank;

          var words = this.__getWordsByAxis(this._currentGrid.row, this._currentGrid.col); // 找同词空位


          words.find(function (word) {
            var blank = word.blanks.find(function (axis) {
              return !_this5._gridsMap[axis].isFilled;
            });

            if (blank) {
              nextBlank = _this5._gridsMap[blank];
              return true;
            }
          }); // 找下一个空位

          if (!nextBlank) {
            var backGrids = grids.slice(this._currentGrid.index + 1);
            nextBlank = backGrids.find(function (t) {
              return t.data.type == 'blank' && !t.isFilled;
            });
          } // 从前面找


          if (!nextBlank) {
            nextBlank = grids.find(function (t) {
              return t.data.type == 'blank' && !t.isFilled;
            });
          }

          if (nextBlank) {
            this.setSelected(nextBlank);
          }
        };

        return Level;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "gridPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Pass.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, director, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "458430gYihLzo3Vnb3GbyjR", "Pass", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Pass = exports('Pass', (_dec = ccclass('Pass'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Pass, _Component);

        function Pass() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Pass.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.onBtnReturnClick = function onBtnReturnClick() {
          director.loadScene('main');
        };

        _proto.onBtnNextClick = function onBtnNextClick() {
          director.loadScene('level');
        };

        return Pass;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/config.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "5f2eaqunZtNMoK/hBwIwfCe", "config", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var config = exports('config', (_dec = ccclass('config'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(config, _Component);

        function config() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = config.prototype;

        _proto.start = function start() {// [3]
        };

        return config;
      }(Component), _defineProperty(_class2, "grids", {
        rows: 8,
        cols: 10
      }), _defineProperty(_class2, "grid", {
        w: 65,
        h: 65
      }), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Grid.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './config.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Input, Vec3, UIOpacity, Animation, Component, Label, AudioManager, config;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Input = module.Input;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      Animation = module.Animation;
      Component = module.Component;
      Label = module.Label;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      config = module.config;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "deaf6H74/9NZ4R3YTYY0wpc", "Grid", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Grid = exports('Grid', (_dec = ccclass('Grid'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Grid, _Component);

        function Grid() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "data", void 0);

          _defineProperty(_assertThisInitialized(_this), "col", void 0);

          _defineProperty(_assertThisInitialized(_this), "row", void 0);

          _defineProperty(_assertThisInitialized(_this), "levelCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "relTopGrid", void 0);

          _defineProperty(_assertThisInitialized(_this), "relBottomGrid", void 0);

          _defineProperty(_assertThisInitialized(_this), "isBottom", false);

          _defineProperty(_assertThisInitialized(_this), "_bgName", void 0);

          _defineProperty(_assertThisInitialized(_this), "_selected", false);

          _defineProperty(_assertThisInitialized(_this), "_bottomFilled", false);

          return _this;
        }

        var _proto = Grid.prototype; // public isBottom: boolean;

        _proto.start = function start() {
          this.bindEvents();
        };

        _proto.bindEvents = function bindEvents() {
          var _this2 = this;

          this.node.on(Input.EventType.TOUCH_END, function (e) {
            AudioManager.instance.playClickBtn();

            if (_this2.isBottom) {
              // 底部格子点击
              if (_this2.bottomFilled) {
                _this2.relTopGrid.resetWord();
              } else {
                _this2.levelCtrl.fillWord(_this2);
              }
            } else {
              _this2.levelCtrl.setSelected(_this2);
            }
          });
        };

        _proto.setData = function setData(data) {
          this.data = data;

          if (data.type === 'empty') {
            this.node.active = false;
            return;
          }

          this.updateType();

          switch (this.Type) {
            case 'char':
              this.setChar(data["char"]);
              break;

            case 'blank':
              this.setChar('');
              break;

            case 'bottom_blank':
              this.setChar(data._char);
              break;
          }
        };

        _proto.setBG = function setBG(name) {
          this._bgName = name;
          var bgs = this.node.getChildByPath('box/bgs');
          bgs.children.forEach(function (node) {
            node.active = false;
          });
          bgs.getChildByName(name).active = true;
        };

        _proto.updateType = function updateType() {
          if (this._bgName === 'right') {
            return;
          }

          this.setBG(this.Type);

          switch (this.Type) {
            case 'bottom_blank':
              this.node.scale = new Vec3(1.5, 1.5, 1);
              break;
          }
        };

        _proto.setOpacity = function setOpacity(opacity) {
          var uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = opacity * 255;
        };

        _proto.setChar = function setChar(_char) {
          if (_char == undefined) {
            return;
          }

          this.Label.string = _char;
        };

        _proto.fillWord = function fillWord(bottomGrid) {
          bottomGrid.relTopGrid = this;
          bottomGrid.bottomFilled = true;
          this.relBottomGrid = bottomGrid;
          this.setChar(bottomGrid.data._char);
        };

        _proto.resetWord = function resetWord() {
          if (!this.canSelect) {
            return;
          }

          this.relBottomGrid.relTopGrid = null;
          this.relBottomGrid.bottomFilled = false;
          this.relBottomGrid = null;
          this.setChar('');
          this.levelCtrl.setSelected(this);
        };

        _proto.playAni = function playAni(aniName) {
          var ani = this.node.getChildByPath('box').getComponent(Animation);
          ani.play(aniName);
        };

        _createClass(Grid, [{
          key: "index",
          get: function get() {
            return this.col - 1 + (this.row - 1) * config.grids.cols;
          }
        }, {
          key: "Label",
          get: function get() {
            return this.node.getChildByPath('box/char').getComponent(Label);
          }
        }, {
          key: "isFilled",
          get: function get() {
            return this.Label.string !== '';
          }
        }, {
          key: "isFillRight",
          get: function get() {
            switch (this.data.type) {
              case 'blank':
                return this.Label.string === this.data._char;

              default:
                return true;
            }
          }
        }, {
          key: "canSelect",
          get: function get() {
            return this.Type === 'blank' && this._bgName !== 'right';
          }
        }, {
          key: "Type",
          get: function get() {
            var type = this.data.type;

            if (this.isBottom) {
              type = 'bottom_blank';
            }

            return type;
          }
        }, {
          key: "Selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = value;

            if (value) {
              this.setBG('selected');
            } else {
              // 还原原BG
              this.updateType();
            }
          }
        }, {
          key: "bottomFilled",
          get: function get() {
            return this._bottomFilled;
          },
          set: function set(value) {
            this._bottomFilled = value; // 底部已填字半透明状态

            this.setOpacity(value ? 0.5 : 1);
          }
        }]);

        return Grid;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Word.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Color, tween, Vec3;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      tween = module.tween;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6416oXwZ9HtL3P3/uqW5Xe", "Word", undefined);

      var Word = exports('Word', /*#__PURE__*/function () {
        // private _word: { axis };
        function Word(gridMap) {
          _defineProperty(this, "_gridsMap", void 0);

          this._gridsMap = gridMap;
        }

        var _proto = Word.prototype;

        _proto.isAllFilled = function isAllFilled(word) {
          var _this = this;

          return word.axis.every(function (axis) {
            return _this._gridsMap[axis].isFilled;
          });
        };

        _proto.checkFillResult = function checkFillResult(word) {
          var _this2 = this;

          return word.axis.every(function (axis) {
            return _this2._gridsMap[axis].isFillRight;
          });
        };

        _proto.checkLevelPass = function checkLevelPass() {
          return Object.values(this._gridsMap).every(function (grid) {
            return grid.isFillRight;
          });
        };

        _proto.playRightAni = function playRightAni(word) {
          var _this3 = this;

          word.axis.forEach(function (axis, i) {
            var grid = _this3._gridsMap[axis]; // if (grid.data.type == 'blank') {

            grid.setBG('right');
            grid.Label.color = Color.WHITE;

            if (grid.relBottomGrid) {
              grid.relBottomGrid.setChar('');
            }

            var duration = 0.08;
            tween(grid.node).delay(duration * i).to(duration, {
              scale: new Vec3(1.3, 1.3, 1)
            }).start().to(duration, {
              scale: new Vec3(1, 1, 1)
            }).start(); // }
          });
        };

        _proto.playErrorAni = function playErrorAni(word) {
          var _this4 = this;

          word.axis.forEach(function (axis) {
            var grid = _this4._gridsMap[axis];

            if (grid.data.type === 'blank') {
              grid.Label.color = Color.RED;
            }

            grid.playAni('error');
          });
        };

        return Word;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AudioManager.ts', './enums.ts', './main.ts', './config.ts', './Grid.ts', './Word.ts', './Level.ts', './Pass.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

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