var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../02col/02Mulite/CheckBox"], function (require, exports, React, iocFile, basewedPageFile, checkFile) {
    "use strict";
    var CustomColPage;
    (function (CustomColPage) {
        var CustomColPageAction = (function (_super) {
            __extends(CustomColPageAction, _super);
            function CustomColPageAction() {
                _super.apply(this, arguments);
            }
            return CustomColPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CustomColPage.CustomColPageAction = CustomColPageAction;
        var CustomColPageReact = (function (_super) {
            __extends(CustomColPageReact, _super);
            function CustomColPageReact() {
                _super.apply(this, arguments);
                this.state = new CustomColPageStates();
            }
            CustomColPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("h4", null, "自定义列"), React.createElement("div", {className: "acs-form clearfix acsCustomColPanel"}, React.createElement("div", null, React.createElement("strong", null, "可用字段"), this.props.Vm.CheckBox.intoDom()), React.createElement("div", null, React.createElement("strong", null, "当前字段"), this.props.Vm.CheckBox1.intoDom())), React.createElement("div", {className: "acsTextC acsMarginT3"}, React.createElement("a", {className: "button"}, "提交")));
            };
            CustomColPageReact.prototype.fun_ModalClick = function () {
                this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
                this.forceUpdate();
            };
            return CustomColPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CustomColPage.CustomColPageReact = CustomColPageReact;
        var CustomColPageVm = (function (_super) {
            __extends(CustomColPageVm, _super);
            function CustomColPageVm() {
                _super.call(this);
                this.ReactType = CustomColPageReact;
                this.IsModalShow = false;
                this.CheckBox = checkFile.ui.CheckBoxVm.Test();
                this.CheckBox1 = new checkFile.ui.CheckBoxVm;
                this.CheckBox1.ItemList.push({ Value: "1", Text: "选项1", Select: true });
                this.CheckBox1.ItemList.push({ Value: "2", Text: "选项2", Select: true });
            }
            return CustomColPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CustomColPage.CustomColPageVm = CustomColPageVm;
        var CustomColPageStates = (function (_super) {
            __extends(CustomColPageStates, _super);
            function CustomColPageStates() {
                _super.apply(this, arguments);
            }
            return CustomColPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CustomColPage.CustomColPageStates = CustomColPageStates;
        var CustomColPageProps = (function (_super) {
            __extends(CustomColPageProps, _super);
            function CustomColPageProps() {
                _super.apply(this, arguments);
            }
            return CustomColPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CustomColPage.CustomColPageProps = CustomColPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CUSTOMCOLPAGE", basewedPageFile.Web.BaseWebPageVm, CustomColPageVm);
    })(CustomColPage = exports.CustomColPage || (exports.CustomColPage = {}));
});
