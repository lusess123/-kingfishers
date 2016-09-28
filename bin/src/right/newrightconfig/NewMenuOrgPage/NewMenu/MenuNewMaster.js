var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuNewMaster;
    (function (MenuNewMaster) {
        var MenuNewMasterAction = (function (_super) {
            __extends(MenuNewMasterAction, _super);
            function MenuNewMasterAction() {
                _super.apply(this, arguments);
            }
            return MenuNewMasterAction;
        }(domCore.DomAction));
        MenuNewMaster.MenuNewMasterAction = MenuNewMasterAction;
        var MenuNewMasterReact = (function (_super) {
            __extends(MenuNewMasterReact, _super);
            function MenuNewMasterReact() {
                _super.apply(this, arguments);
                this.state = new MenuNewMasterStates();
            }
            MenuNewMasterReact.prototype.pSender = function () {
                var _this = this;
                var _Panel;
                if (this.props.Vm.type == "All") {
                    _Panel = React.createElement("div", {className: "panel-collapse"}, React.createElement("div", {className: "Hm-workflow-tab"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "添加子节点"), React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "添加按钮"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-form clearfix" + (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide ")}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点名称：")), React.createElement("div", {className: " Hu-input"}, this.inputName())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "节点权值：")), React.createElement("div", {className: "Hu-input"}, this.inputRightValue()))), React.createElement("div", {className: "Hm-form  clearfix" + (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide ")}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "按钮名称：")), React.createElement("div", {className: "Hu-input"}, this.inputName())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "按钮权值：")), React.createElement("div", {className: "Hu-input"}, this.inputRightValue())))));
                }
                else if (this.props.Vm.type == "Menu") {
                    _Panel = React.createElement("div", {className: "panel-collapse"}, React.createElement("div", {className: "Hm-workflow-tab"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "nav-item Hu-pointer active"}, "添加子节点"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点名称：")), React.createElement("div", {className: "Hu-input"}, this.inputName())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "节点权值：")), React.createElement("div", {className: "Hu-input"}, this.inputRightValue())))));
                }
                else {
                    _Panel =
                        React.createElement("div", {className: "panel-collapse"}, React.createElement("div", {className: "Hm-workflow-tab"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "nav-item Hu-pointer active"}, "添加按钮"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "按钮名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.inputName()), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "按钮权值：")), React.createElement("div", {className: "Hu-input"}, this.inputRightValue()))))));
                }
                return React.createElement("div", null, _Panel);
            };
            MenuNewMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MenuNewMasterReact.prototype.fun_TabsClick = function (index) {
                if (index == 0) {
                    this.props.Vm.NameData.RowType = "Menu";
                }
                else {
                    this.props.Vm.NameData.RowType = "Btn";
                }
                this.props.Vm.TabCurrentIndex = index;
                this.props.Vm.forceUpdate("");
            };
            MenuNewMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                // _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            MenuNewMasterReact.prototype.inputName = function () {
                var _this = this;
                var _vm = new textFile.ui.TextVm(); // this.getInputVm(this.props.Vm.NameData.Name, "notNull");
                this.props.Vm.NameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.NameData.Name = str;
                    return true;
                });
                return _vm.intoDom();
            };
            MenuNewMasterReact.prototype.inputRightValue = function () {
                var _this = this;
                var _vm = new textFile.ui.TextVm(); // this.getInputVm(this.props.Vm.NameData.RightValue, "");
                this.props.Vm.RightValueVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.NameData.RightValue = str;
                    return true;
                });
                return _vm.intoDom();
            };
            return MenuNewMasterReact;
        }(domCore.DomReact));
        MenuNewMaster.MenuNewMasterReact = MenuNewMasterReact;
        var MenuNewMasterVm = (function (_super) {
            __extends(MenuNewMasterVm, _super);
            function MenuNewMasterVm(config) {
                _super.call(this);
                this.ReactType = MenuNewMasterReact;
                this.TabCurrentIndex = 0;
                this.NameData = { Name: "", RowType: "Menu" };
                if (config) {
                    this.type = config.rowType;
                }
            }
            MenuNewMasterVm.prototype.legal = function () {
                var _res = this.NameTextVm.legal();
                var _rr = this.NameTextVm.dataValue();
                this.NameData.Name = String(_rr);
                return _res;
            };
            return MenuNewMasterVm;
        }(domCore.DomVm));
        MenuNewMaster.MenuNewMasterVm = MenuNewMasterVm;
        var MenuNewMasterStates = (function (_super) {
            __extends(MenuNewMasterStates, _super);
            function MenuNewMasterStates() {
                _super.apply(this, arguments);
            }
            return MenuNewMasterStates;
        }(domCore.DomStates));
        MenuNewMaster.MenuNewMasterStates = MenuNewMasterStates;
        var MenuNewMasterProps = (function (_super) {
            __extends(MenuNewMasterProps, _super);
            function MenuNewMasterProps() {
                _super.apply(this, arguments);
            }
            return MenuNewMasterProps;
        }(domCore.DomProps));
        MenuNewMaster.MenuNewMasterProps = MenuNewMasterProps;
    })(MenuNewMaster = exports.MenuNewMaster || (exports.MenuNewMaster = {}));
});
