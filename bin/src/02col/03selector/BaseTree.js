var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Url", "./../../05tool/Tree", "react"], function (require, exports, basecolFile, urlFile, Tree, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        //--------------------基本树控件----------
        var BaseTreeAction = (function (_super) {
            __extends(BaseTreeAction, _super);
            function BaseTreeAction() {
                _super.apply(this, arguments);
            }
            return BaseTreeAction;
        }(BaseColAction));
        ui.BaseTreeAction = BaseTreeAction;
        var BaseTreeReact = (function (_super) {
            __extends(BaseTreeReact, _super);
            function BaseTreeReact() {
                _super.apply(this, arguments);
            }
            BaseTreeReact.prototype.pInstall = function () {
                var _this = this;
                _super.prototype.pInstall.call(this);
                var _vm = this.props.Vm;
                // var _val = _vm.dataValueGet();
                var _tree = _vm.Tree;
                this.props.Vm.getDataPromise().done(function (a) {
                    _this.props.Vm.initTreeData(a);
                });
            };
            BaseTreeReact.prototype.pSender = function () {
                if (this.props.Vm.IsNull) {
                    return React.createElement("div", {className: "acsPaddingT2 text-center"}, this.props.Vm.senderNullFun());
                }
                else {
                    var _tree = this.props.Vm.Tree;
                    return _tree.intoDom();
                }
            };
            return BaseTreeReact;
        }(BaseColReact));
        ui.BaseTreeReact = BaseTreeReact;
        var BaseTreeProps = (function (_super) {
            __extends(BaseTreeProps, _super);
            function BaseTreeProps() {
                _super.apply(this, arguments);
            }
            return BaseTreeProps;
        }(BaseColProps));
        ui.BaseTreeProps = BaseTreeProps;
        var BaseTreeStates = (function (_super) {
            __extends(BaseTreeStates, _super);
            function BaseTreeStates() {
                _super.apply(this, arguments);
            }
            return BaseTreeStates;
        }(BaseColStates));
        ui.BaseTreeStates = BaseTreeStates;
        var BaseTreeVm = (function (_super) {
            __extends(BaseTreeVm, _super);
            function BaseTreeVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = BaseTreeReact;
                this.RegName = "MenuCodeTable";
                this.LoadUrl = "/core/Selector/LoadTreeFormatJson";
                this.SubLoadUrl = "/core/Selector/LoadSubTreeFormatJson";
                this.IsRootExpand = false;
                this.IsNull = false;
                this.Tree = new Tree.ui.TreeVm({
                    OnExpandFun: function (nodeVm) {
                        _this.clickSubTreeLoading(nodeVm);
                    },
                    OnActiveNodeSetValue: function (nodeVm) {
                        _this.onActiveNodeSetValue(nodeVm);
                    }
                });
                if (config) {
                    if (config.RegName) {
                        this.RegName = config.RegName;
                    }
                    if (config.IsRootExpand) {
                        this.IsRootExpand = config.IsRootExpand;
                    }
                    if (config.NullReactFun) {
                        this.NullReactFun = config.NullReactFun;
                    }
                    if (config.IsAllTree) {
                        this.LoadUrl = "/core/Selector/LoadAllTreeFormatJson";
                    }
                }
            }
            BaseTreeVm.prototype.onActiveNodeSetValue = function (nodeVm) {
                // var _thisObj = this;
                // return (nodeVm: Tree.ui.TreeNodeVm) => {
                if (this.Tree.IsMultiSelect) {
                    var _valArr = new Array();
                    this.Tree.SelectNodes.forEach(function (a) {
                        _valArr.push("\"" + a.Value + "\"");
                    });
                    this.reactDataValueSet(_valArr.join(","));
                }
                else {
                    if (this.Tree.SelectNodes.length > 0) {
                        this.reactDataValueSet(this.Tree.SelectNodes[0].Value);
                    }
                    else {
                        this.reactDataValueSet("");
                    }
                }
                // }
            };
            ;
            BaseTreeVm.prototype.vmDataValueSet = function (val) {
                _super.prototype.vmDataValueSet.call(this, val);
                this.SetNodeSelected();
                this.Tree.forceUpdate("");
            };
            BaseTreeVm.prototype.senderNullFun = function () {
                if (this.NullReactFun) {
                    return this.NullReactFun(this);
                }
                else
                    return "没有树形数据";
            };
            //设置节点选中状态
            BaseTreeVm.prototype.SetNodeSelected = function () {
                var _tree = this.Tree;
                var _val = this.dataValueGet();
                var _keys = new Array();
                if (_val) {
                    var _valArr = _val.split(",");
                    _valArr.forEach(function (a) {
                        _keys.push(a.replace(/\"/g, ""));
                    });
                }
                var _newSelectNodes = _tree.getNodeByKey(_keys);
                if (_newSelectNodes.length > 0) {
                    if (_tree.SelectNodes.length > 0) {
                        _tree.SelectNodes.forEach(function (a) {
                            a.IsActive = false;
                            a.forceUpdate("");
                        });
                    }
                }
                _tree.SelectNodes = _newSelectNodes.length > 0 ? _newSelectNodes : _tree.SelectNodes;
                if (_tree.SelectNodes.length > 0) {
                    _tree.SelectNodes.forEach(function (a) {
                        a.IsActive = true;
                        _tree.pExpandParent(a, true);
                        a.forceUpdate("");
                    });
                }
            };
            ;
            BaseTreeVm.prototype.setPostDataFun = function () {
                var ds = {};
                var _rows = [];
                ds = { _OPERATION: _rows };
                var _val = this.dataValueGet();
                if (_val) {
                    var _valArr = _val.split(",");
                    _valArr.forEach(function (a) {
                        _rows.push({ KeyValue: a.replace(/\"/g, "") });
                    });
                }
                return JSON.stringify(ds);
            };
            BaseTreeVm.prototype.initTreeData = function (data) {
                if (data.length > 0) {
                    this.IsNull = false;
                    this.Tree.initTreeVm({
                        CODE_TEXT: "根节点",
                        CODE_VALUE: "0",
                        Children: data
                    });
                }
                else {
                    this.IsNull = true;
                }
                this.Tree.IsChange = true;
                this.forceUpdate("");
            };
            BaseTreeVm.prototype.getDataPromise = function () {
                var _p = $.Deferred();
                urlFile.Core.AkPost(this.LoadUrl, {
                    regName: this.RegName,
                    ds: this.setPostDataFun()
                }, function (a) {
                    var _treeRootModel = a;
                    _p.resolve(_treeRootModel);
                });
                return _p.promise();
            };
            BaseTreeVm.prototype.clickSubTreeLoading = function (nodeVm) {
                var _this = this;
                // return function (nodeVm: Tree.ui.TreeNodeVm) {
                urlFile.Core.AkPost(this.SubLoadUrl, { regName: this.RegName, CODE_VALUE: nodeVm.Value }, function (a) {
                    var _sonNodesModel = a;
                    _sonNodesModel.forEach(function (a) {
                        _this.Tree.appendToNode(a, nodeVm);
                    });
                    nodeVm.forceUpdate("");
                });
                // }
            };
            return BaseTreeVm;
        }(BaseColVm));
        ui.BaseTreeVm = BaseTreeVm;
    })(ui = exports.ui || (exports.ui = {}));
});
