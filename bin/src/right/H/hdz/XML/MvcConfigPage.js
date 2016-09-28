var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/EditSpan"], function (require, exports, iocFile, basewedPageFile, React, EditSpanFile) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var MvcConfigPage;
    (function (MvcConfigPage) {
        var MvcConfigPageAction = (function (_super) {
            __extends(MvcConfigPageAction, _super);
            function MvcConfigPageAction() {
                _super.apply(this, arguments);
            }
            return MvcConfigPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MvcConfigPage.MvcConfigPageAction = MvcConfigPageAction;
        var MvcConfigPageReact = (function (_super) {
            __extends(MvcConfigPageReact, _super);
            function MvcConfigPageReact() {
                _super.apply(this, arguments);
                this.state = new MvcConfigPageStates();
            }
            MvcConfigPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "well"}, React.createElement("h6", {className: "Hu-title Hs-fw "}, "基础设置"), React.createElement("span", null)), React.createElement("form", {className: "m-a clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("label", {className: "form-control-label text-right"}, "应用程序名："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "MvcConfig" })})), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("p", {className: "m-b Hs-fw "}, "路由配置集合"), React.createElement("table", {className: "table  table-hover"}, this._initThead(), this._initTbody()))));
            };
            MvcConfigPageReact.prototype._initThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "路由配置名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "控制器名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "方法名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Area名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "参数" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "命名空间" })}))));
            };
            MvcConfigPageReact.prototype._initTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "MRP" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Home" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Login" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: " " })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "ataw" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Ataw.MRP.Web.Controllers", Type: "textarea" })}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "UISDK" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Home" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Index" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: " " })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: " " })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "UISdk.Controllers" })}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "AMALL" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Home" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "AmallIndex" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "AmallPortal" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: " " })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Ataw.AMALL.Portal.Web.Controllers", Type: "textarea" })}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Right" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Home" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Login" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Right" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Ataw.Right.Web.Controllers", Type: "textarea" })}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Estate" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Home" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Login" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Estate" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Estate.Manage.Web.Controllers", Type: "textarea" })}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "RightCloud" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Auth" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Index" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "RightCloud" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Ataw.RightCloud.Web" })}))));
            };
            return MvcConfigPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MvcConfigPage.MvcConfigPageReact = MvcConfigPageReact;
        var MvcConfigPageVm = (function (_super) {
            __extends(MvcConfigPageVm, _super);
            function MvcConfigPageVm(config) {
                _super.call(this);
                this.ReactType = MvcConfigPageReact;
                this.Title = "MvcConfigPage页面;";
            }
            MvcConfigPageVm.prototype.init = function (config) {
            };
            MvcConfigPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return MvcConfigPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MvcConfigPage.MvcConfigPageVm = MvcConfigPageVm;
        var MvcConfigPageStates = (function (_super) {
            __extends(MvcConfigPageStates, _super);
            function MvcConfigPageStates() {
                _super.apply(this, arguments);
            }
            return MvcConfigPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MvcConfigPage.MvcConfigPageStates = MvcConfigPageStates;
        var MvcConfigPageProps = (function (_super) {
            __extends(MvcConfigPageProps, _super);
            function MvcConfigPageProps() {
                _super.apply(this, arguments);
            }
            return MvcConfigPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MvcConfigPage.MvcConfigPageProps = MvcConfigPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MVCCONFIGPAGE", basewedPageFile.Web.BaseWebPageVm, MvcConfigPageVm);
    })(MvcConfigPage = exports.MvcConfigPage || (exports.MvcConfigPage = {}));
});
