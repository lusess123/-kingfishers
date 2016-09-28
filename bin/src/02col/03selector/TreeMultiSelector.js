var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./BaseTreeSelector", "react"], function (require, exports, basecolFile, iocFile, BaseTreeSelectorFile, React) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        //树多选
        var TreeMultiSelectorAction = (function (_super) {
            __extends(TreeMultiSelectorAction, _super);
            function TreeMultiSelectorAction() {
                _super.apply(this, arguments);
            }
            return TreeMultiSelectorAction;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorAction));
        ui.TreeMultiSelectorAction = TreeMultiSelectorAction;
        var TreeMultiSelectorStates = (function (_super) {
            __extends(TreeMultiSelectorStates, _super);
            function TreeMultiSelectorStates() {
                _super.apply(this, arguments);
            }
            return TreeMultiSelectorStates;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorStates));
        ui.TreeMultiSelectorStates = TreeMultiSelectorStates;
        var TreeMultiSelectorReact = (function (_super) {
            __extends(TreeMultiSelectorReact, _super);
            function TreeMultiSelectorReact() {
                _super.apply(this, arguments);
                this.state = new TreeMultiSelectorStates();
            }
            TreeMultiSelectorReact.prototype.pSender = function () {
                this.props.Vm.Tree.IsMultiSelect = true;
                return _super.prototype.pSender.call(this);
            };
            TreeMultiSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            TreeMultiSelectorReact.prototype.initModalContent = function (content) {
                var _this = this;
                return React.DOM.div({ className: "Hm-modals Hm-modals-content" }, React.DOM.h4(null, "请选择 :"), React.DOM.div({ className: "Hc-modals-list" }, content), React.DOM.button({
                    className: "btn btn-xs btn-primary",
                    onClick: function () {
                        _this.onClickLiSetValue();
                    }
                }, "确定"));
            };
            TreeMultiSelectorReact.prototype.onActiveNodeSetValue = function () {
            };
            //选择好选项之后 点击确定触发的事件
            TreeMultiSelectorReact.prototype.onClickLiSetValue = function () {
                //this.state.IsModalShow = false;
                this.props.Vm.IsModalShow = false;
                var _valArr = new Array();
                var _txtArr = new Array();
                this.props.Vm.Tree.SelectNodes.forEach(function (a) {
                    _txtArr.push(a.Text);
                    _valArr.push("\"" + a.Value + "\"");
                });
                this.props.Vm.Text = _txtArr.join(",");
                var _ac = new TreeMultiSelectorAction();
                _ac.Vm = this.props.Vm;
                this.pDispatcher(_ac);
                //调用Object的设置
                if (!this.props.Vm.reactDataValueSet(_valArr.join(","))) {
                    this.forceUpdate();
                }
            };
            return TreeMultiSelectorReact;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorReact));
        ui.TreeMultiSelectorReact = TreeMultiSelectorReact;
        var TreeMultiSelectorProps = (function (_super) {
            __extends(TreeMultiSelectorProps, _super);
            function TreeMultiSelectorProps() {
                _super.apply(this, arguments);
            }
            return TreeMultiSelectorProps;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorProps));
        ui.TreeMultiSelectorProps = TreeMultiSelectorProps;
        var TreeMultiSelectorVm = (function (_super) {
            __extends(TreeMultiSelectorVm, _super);
            function TreeMultiSelectorVm() {
                _super.call(this);
                this.pRegName = "树多选选择器控件";
                this.ReactType = TreeMultiSelectorReact;
            }
            TreeMultiSelectorVm.Test = function () {
                var _bean = new TreeMultiSelectorVm();
                _bean.dataValueSet("\"20150520195821537A039FDC72B3224C6AA5F6FE4B91BA0199\",\"20150520195533523A596724F77B6343EF9CDE0C11B8E24382\"");
                return _bean;
            };
            return TreeMultiSelectorVm;
        }(BaseTreeSelectorFile.ui.BaseTreeSelectorVm));
        ui.TreeMultiSelectorVm = TreeMultiSelectorVm;
        iocFile.Core.Ioc.Current().RegisterType("TreeMultiSelectorVm", BaseColVm, TreeMultiSelectorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
