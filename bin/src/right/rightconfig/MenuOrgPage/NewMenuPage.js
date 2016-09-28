var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var NewMenuPage;
    (function (NewMenuPage) {
        var NewMenuPageAction = (function (_super) {
            __extends(NewMenuPageAction, _super);
            function NewMenuPageAction() {
                _super.apply(this, arguments);
            }
            return NewMenuPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMenuPage.NewMenuPageAction = NewMenuPageAction;
        var NewMenuPageReact = (function (_super) {
            __extends(NewMenuPageReact, _super);
            function NewMenuPageReact() {
                _super.apply(this, arguments);
                this.state = new NewMenuPageStates();
            }
            NewMenuPageReact.prototype.pSender = function () {
                var _this = this;
                var _Panel;
                debugger;
                if (this.props.Vm.type == "All") {
                    _Panel = React.createElement("div", null, React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "菜单名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.menuText, onChange: function (e) { _this.fun_linkText(e); }})))), React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "按钮名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.btnText, onChange: function (e) { _this.fun_btnText(e); }})))));
                }
                else if (this.props.Vm.type == "Menu") {
                    _Panel = React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "菜单名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.menuText, onChange: function (e) { _this.fun_linkText(e); }}))));
                }
                else if (this.props.Vm.type == "Btn") {
                    _Panel = React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "按钮名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.btnText, onChange: function (e) { _this.fun_btnText(e); }}))));
                }
                return React.createElement("div", null, React.createElement("h4", null, this.props.Vm.type == "All" ? "菜单或按钮名称" : (this.props.Vm.type == "Menu" ? "菜单名称" : "按钮名称")), _Panel, React.createElement("div", {className: "acsTextC acsMarginT3"}, React.createElement("a", {className: "button", onClick: function () { _this.fun_addMenu(); }}, "提交")));
            };
            NewMenuPageReact.prototype.fun_addMenu = function () {
                if (this.props.Vm.type != "All") {
                    this.props.Vm.addMenuByName();
                }
                else {
                    if (this.props.Vm.BtnName != undefined && this.props.Vm.MenuName != undefined) {
                        alert("只能输入按钮名或菜单名");
                    }
                    else {
                        this.props.Vm.addMenuByName();
                    }
                }
            };
            NewMenuPageReact.prototype.fun_btnText = function (e) {
                var _val = e.target["value"];
                this.btnText = _val;
                this.props.Vm.BtnName = _val;
                this.forceUpdate();
            };
            NewMenuPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.menuText = _val;
                this.props.Vm.MenuName = _val;
                this.forceUpdate();
            };
            return NewMenuPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewMenuPage.NewMenuPageReact = NewMenuPageReact;
        var NewMenuPageVm = (function (_super) {
            __extends(NewMenuPageVm, _super);
            function NewMenuPageVm() {
                _super.call(this);
                this.ReactType = NewMenuPageReact;
                this.IsModalShow = true;
                this.type = "All";
            }
            NewMenuPageVm.prototype.addMenuByName = function () {
                if (this.MenuName != "" && this.MenuName != undefined) {
                    this.Name = this.MenuName;
                    this.type = "Menu";
                }
                else {
                    this.Name = this.BtnName;
                    this.type = "Btn";
                }
                this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTMAINPAGE" }, { CODE_TEXT: this.Name, Type: this.type });
                this.closePage();
            };
            NewMenuPageVm.prototype.loadPage = function (callback) {
                var _keys = this.Param1;
                this.type = _keys;
                if (callback) {
                    callback();
                }
            };
            return NewMenuPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewMenuPage.NewMenuPageVm = NewMenuPageVm;
        var NewMenuPageStates = (function (_super) {
            __extends(NewMenuPageStates, _super);
            function NewMenuPageStates() {
                _super.apply(this, arguments);
            }
            return NewMenuPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMenuPage.NewMenuPageStates = NewMenuPageStates;
        var NewMenuPageProps = (function (_super) {
            __extends(NewMenuPageProps, _super);
            function NewMenuPageProps() {
                _super.apply(this, arguments);
            }
            return NewMenuPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewMenuPage.NewMenuPageProps = NewMenuPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWMENUPAGE", basewedPageFile.Web.BaseWebPageVm, NewMenuPageVm);
    })(NewMenuPage = exports.NewMenuPage || (exports.NewMenuPage = {}));
});
