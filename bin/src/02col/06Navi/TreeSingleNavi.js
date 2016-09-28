var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "react", "./../00core/baseCol", "./../03selector/BaseTree"], function (require, exports, iocFile, React, basecolFile, BaseTreeFile) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var TreeSingleNavi;
    (function (TreeSingleNavi) {
        var TreeSingleNaviAction = (function (_super) {
            __extends(TreeSingleNaviAction, _super);
            function TreeSingleNaviAction() {
                _super.apply(this, arguments);
            }
            return TreeSingleNaviAction;
        }(BaseColAction));
        TreeSingleNavi.TreeSingleNaviAction = TreeSingleNaviAction;
        var TreeSingleNaviReact = (function (_super) {
            __extends(TreeSingleNaviReact, _super);
            function TreeSingleNaviReact() {
                _super.apply(this, arguments);
                this.state = new TreeSingleNaviStates();
            }
            TreeSingleNaviReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals Hm-modals-content"}, this._tDom(this.props.Vm.TreeObj, { nullNode: React.createElement("div", null, "树形控件") }));
            };
            TreeSingleNaviReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TreeSingleNaviReact;
        }(BaseColReact));
        TreeSingleNavi.TreeSingleNaviReact = TreeSingleNaviReact;
        var TreeSingleNaviVm = (function (_super) {
            __extends(TreeSingleNaviVm, _super);
            function TreeSingleNaviVm(config) {
                _super.call(this);
                this.ReactType = TreeSingleNaviReact;
                // this.TreeObj = new 
            }
            TreeSingleNaviVm.prototype.pMakerInNavi = function (config) {
                var _this = this;
                _super.prototype.pMakerInNavi.call(this, config);
                if (config) {
                    this.TreeObj = new BaseTreeFile.ui.BaseTreeVm({
                        RegName: config.NavigationColumnConfig.Options.RegName,
                        IsRootExpand: true
                    });
                    this.TreeObj.Tree.IsMultiSelect = this.pIsMultiSelect;
                    this.TreeObj.Tree.onReactNodeClick(function (a) {
                        // alert(a.IsActive);
                        // alert(a.Value);
                        //if (a.IsActive) {
                        //    this.pDataValueSet(a.Value);
                        //} else {
                        //    this.pDataValueSet("");
                        //}
                        var _strs = _this.TreeObj.Tree.SelectNodes.map(function (a) { return a.Value; }).join(",");
                        _this.pDataValueSet(_strs);
                        return true;
                    });
                }
            };
            return TreeSingleNaviVm;
        }(BaseColVm));
        TreeSingleNavi.TreeSingleNaviVm = TreeSingleNaviVm;
        var TreeSingleNaviStates = (function (_super) {
            __extends(TreeSingleNaviStates, _super);
            function TreeSingleNaviStates() {
                _super.apply(this, arguments);
            }
            return TreeSingleNaviStates;
        }(BaseColStates));
        TreeSingleNavi.TreeSingleNaviStates = TreeSingleNaviStates;
        var TreeSingleNaviProps = (function (_super) {
            __extends(TreeSingleNaviProps, _super);
            function TreeSingleNaviProps() {
                _super.apply(this, arguments);
            }
            return TreeSingleNaviProps;
        }(BaseColProps));
        TreeSingleNavi.TreeSingleNaviProps = TreeSingleNaviProps;
        iocFile.Core.Ioc.Current().RegisterType("TreeSingleNaviVm", BaseColVm, TreeSingleNaviVm);
    })(TreeSingleNavi = exports.TreeSingleNavi || (exports.TreeSingleNavi = {}));
});
