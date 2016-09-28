var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
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
                return React.createElement("div", null, React.createElement("h4", null, "新建菜单"), React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right required"}, "菜单名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.menuText, onChange: function (e) { _this.fun_linkText(e); }})))), React.createElement("div", {className: "acsTextC acsMarginT3"}, React.createElement("a", {className: "button", onClick: function () { _this.fun_addMenu(); }}, "提交")));
            };
            NewMenuPageReact.prototype.fun_addMenu = function () {
                this.props.Vm.addMenuByName();
            };
            NewMenuPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.menuText = _val;
                this.forceUpdate();
            };
            return NewMenuPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewMenuPage.NewMenuPageReact = NewMenuPageReact;
        var NewMenuPageVm = (function (_super) {
            __extends(NewMenuPageVm, _super);
            function NewMenuPageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewMenuPageReact;
                this.IsModalShow = true;
            }
            NewMenuPageVm.prototype.addMenuByName = function () {
                this.SendPageActor({ ToPanelName: "rightPage" }, this.MenuName);
                this.closePage();
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
