var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var AddMenuorButtonPage;
    (function (AddMenuorButtonPage) {
        var AddMenuorButtonPageAction = (function (_super) {
            __extends(AddMenuorButtonPageAction, _super);
            function AddMenuorButtonPageAction() {
                _super.apply(this, arguments);
            }
            return AddMenuorButtonPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AddMenuorButtonPage.AddMenuorButtonPageAction = AddMenuorButtonPageAction;
        var AddMenuorButtonPageReact = (function (_super) {
            __extends(AddMenuorButtonPageReact, _super);
            function AddMenuorButtonPageReact() {
                _super.apply(this, arguments);
                this.state = new AddMenuorButtonPageStates();
            }
            AddMenuorButtonPageReact.prototype.pSender = function () {
                var _this = this;
                var _Panel;
                if (this.props.Vm.AddType == "3") {
                    _Panel = React.createElement("div", {className: "panel-collapse"}, React.createElement("div", {className: "Hm-workflow-tab"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "添加子节点"), React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "添加按钮"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-form clearfix" + (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide ")}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.NodeName, onChange: function (a) { _this.onChangeNodeName(a); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点权值：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.NodeValue, onChange: function (a) { _this.onChangeNodeVaue(a); }}))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function (a) { _this.AddNode(); }}, "确定12"))), React.createElement("div", {className: "Hm-form  clearfix" + (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide ")}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "按钮名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.ButtonName, onChange: function (a) { _this.onChangeButtonName(a); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function (a) { _this.AddButton(); }}, "确定11")))));
                }
                else if (this.props.Vm.AddType == "1") {
                    _Panel = React.createElement("div", {className: "panel-collapse"}, React.createElement("div", {className: "Hm-workflow-tab"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "nav-item Hu-pointer active"}, "添加子节点"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.NodeName, onChange: function (a) { _this.onChangeNodeName(a); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点权值：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", classID: "aa", type: "text", value: this.props.Vm.NodeValue, onChange: function (a) { _this.onChangeNodeVaue(a); }}))))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function (a) { _this.AddNode(); }}, "确定12")));
                }
                else {
                    _Panel = React.createElement("div", {className: "panel-collapse"}, React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-workflow-tab"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "nav-item Hu-pointer active"}, "添加按钮"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "按钮名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.ButtonName, onChange: function (a) { _this.onChangeButtonName(a); }})))))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function (a) { _this.AddButton(); }}, "确定11")));
                }
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "新增"), React.createElement("div", null, _Panel));
            };
            AddMenuorButtonPageReact.prototype.AddNode = function () {
                this.props.Vm.AddMenu();
            };
            AddMenuorButtonPageReact.prototype.AddButton = function () {
                this.props.Vm.AddButton();
            };
            AddMenuorButtonPageReact.prototype.onChangeNodeName = function (a) {
                var _val = a.target["value"];
                this.props.Vm.NodeName = _val;
                this.props.Vm.forceUpdate("");
            };
            AddMenuorButtonPageReact.prototype.onChangeNodeVaue = function (a) {
                var _val = a.target["value"];
                this.props.Vm.NodeValue = _val;
                this.props.Vm.forceUpdate("");
            };
            AddMenuorButtonPageReact.prototype.onChangeButtonName = function (a) {
                var _val = a.target["value"];
                this.props.Vm.ButtonName = _val;
                this.props.Vm.forceUpdate("");
            };
            AddMenuorButtonPageReact.prototype.fun_TabsClick = function (num) {
                this.props.Vm.TabCurrentIndex = num;
                this.props.Vm.forceUpdate("");
            };
            return AddMenuorButtonPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AddMenuorButtonPage.AddMenuorButtonPageReact = AddMenuorButtonPageReact;
        var AddMenuorButtonPageVm = (function (_super) {
            __extends(AddMenuorButtonPageVm, _super);
            function AddMenuorButtonPageVm() {
                _super.apply(this, arguments);
                this.ReactType = AddMenuorButtonPageReact;
            }
            AddMenuorButtonPageVm.prototype.constrctor = function () {
            };
            AddMenuorButtonPageVm.prototype.loadPage = function (callback) {
                this.AddType = this.Param1;
                if (this.AddType == "1") {
                    this.TabCurrentIndex = 0;
                }
                else if (this.AddType == "2") {
                    this.TabCurrentIndex = 1;
                }
                else {
                    this.TabCurrentIndex = 0;
                }
                callback();
            };
            AddMenuorButtonPageVm.prototype.AddMenu = function () {
                this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { MenuName: this.NodeName, MenuValue: this.NodeValue, Type: "Node" });
                this.closePage();
            };
            AddMenuorButtonPageVm.prototype.AddButton = function () {
                this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { MenuName: this.ButtonName, Type: "Button" });
                this.closePage();
            };
            return AddMenuorButtonPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AddMenuorButtonPage.AddMenuorButtonPageVm = AddMenuorButtonPageVm;
        var AddMenuorButtonPageStates = (function (_super) {
            __extends(AddMenuorButtonPageStates, _super);
            function AddMenuorButtonPageStates() {
                _super.apply(this, arguments);
            }
            return AddMenuorButtonPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AddMenuorButtonPage.AddMenuorButtonPageStates = AddMenuorButtonPageStates;
        var AddMenuorButtonPageProps = (function (_super) {
            __extends(AddMenuorButtonPageProps, _super);
            function AddMenuorButtonPageProps() {
                _super.apply(this, arguments);
            }
            return AddMenuorButtonPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AddMenuorButtonPage.AddMenuorButtonPageProps = AddMenuorButtonPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ADDMENUORBUTTONPAGE", basewedPageFile.Web.BaseWebPageVm, AddMenuorButtonPageVm);
    })(AddMenuorButtonPage = exports.AddMenuorButtonPage || (exports.AddMenuorButtonPage = {}));
});
