var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./BaseTreeSelector"], function (require, exports, basecolFile, iocFile, BaseTreeSelectorFile) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        //树选择器基类
        //树单选
        var TreeSingleSelectorAction = (function (_super) {
            __extends(TreeSingleSelectorAction, _super);
            function TreeSingleSelectorAction() {
                _super.apply(this, arguments);
            }
            return TreeSingleSelectorAction;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorAction));
        ui.TreeSingleSelectorAction = TreeSingleSelectorAction;
        var TreeSingleSelectorStates = (function (_super) {
            __extends(TreeSingleSelectorStates, _super);
            function TreeSingleSelectorStates() {
                _super.apply(this, arguments);
            }
            return TreeSingleSelectorStates;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorStates));
        ui.TreeSingleSelectorStates = TreeSingleSelectorStates;
        var TreeSingleSelectorReact = (function (_super) {
            __extends(TreeSingleSelectorReact, _super);
            function TreeSingleSelectorReact() {
                _super.apply(this, arguments);
                this.state = new TreeSingleSelectorStates();
            }
            TreeSingleSelectorReact.prototype.pSender = function () {
                // this.props.Vm.Tree.IsMultiSelect = false;
                return _super.prototype.pSender.call(this);
            };
            TreeSingleSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TreeSingleSelectorReact;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorReact));
        ui.TreeSingleSelectorReact = TreeSingleSelectorReact;
        var TreeSingleSelectorProps = (function (_super) {
            __extends(TreeSingleSelectorProps, _super);
            function TreeSingleSelectorProps() {
                _super.apply(this, arguments);
            }
            return TreeSingleSelectorProps;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorProps));
        ui.TreeSingleSelectorProps = TreeSingleSelectorProps;
        var TreeSingleSelectorVm = (function (_super) {
            __extends(TreeSingleSelectorVm, _super);
            function TreeSingleSelectorVm() {
                var _this = this;
                _super.call(this);
                this.pRegName = "树单选选择器控件";
                this.ReactType = TreeSingleSelectorReact;
                this.Tree.IsMultiSelect = false;
                this.onActiveNodeSetValue = function (nodeVm) {
                    //  this.state.IsModalShow = false;
                    _this.IsModalShow = false;
                    _this.Text = nodeVm.Text;
                    var _ac = new TreeSingleSelectorAction();
                    _ac.Vm = _this;
                    //  this.pDispatcher(_ac);
                    //调用Object的设置
                    if (!_this.reactDataValueSet(nodeVm.Value)) {
                        _this.forceUpdate("");
                    }
                };
            }
            TreeSingleSelectorVm.Test = function () {
                var _bean = new TreeSingleSelectorVm();
                _bean.dataValueSet("20150520195821537A039FDC72B3224C6AA5F6FE4B91BA0199");
                return _bean;
            };
            return TreeSingleSelectorVm;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorVm));
        ui.TreeSingleSelectorVm = TreeSingleSelectorVm;
        iocFile.Core.Ioc.Current().RegisterType("TreeSingleSelectorVm", BaseColVm, TreeSingleSelectorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
