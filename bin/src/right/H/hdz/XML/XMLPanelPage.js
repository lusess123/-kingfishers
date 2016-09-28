var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/EditSpan", "./../../../../02col/02Mulite/Combo", "./Data"], function (require, exports, iocFile, basewedPageFile, React, EditSpanFile, ComboFile, data) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var XMLPanelPage;
    (function (XMLPanelPage) {
        var XMLPanelPageAction = (function (_super) {
            __extends(XMLPanelPageAction, _super);
            function XMLPanelPageAction() {
                _super.apply(this, arguments);
            }
            return XMLPanelPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        XMLPanelPage.XMLPanelPageAction = XMLPanelPageAction;
        var XMLPanelPageReact = (function (_super) {
            __extends(XMLPanelPageReact, _super);
            function XMLPanelPageReact() {
                _super.apply(this, arguments);
                this.state = new XMLPanelPageStates();
            }
            XMLPanelPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("p", null, "表单集合，配置页面的表单，可配置多个，包含一般表单、MVC表单、Script表单"), this._initBaseForm(), this._initMVCForm());
            };
            XMLPanelPageReact.prototype._initBaseForm = function () {
                return React.createElement("div", {className: "Hu-dashed-line clearfix"}, React.createElement("p", {className: "m-b-0 Hs-fw"}, "一般表单"), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "标题："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "操作面板" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "发布版1" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "展示形式："), React.createElement("div", {className: "col-lg-8 col-md-8"}, this.props.Vm.ComboObj.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "占行："), React.createElement("div", {className: "col-lg-8 col-md-8"}, this.props.Vm.ComboZObj.intoDom())), React.createElement("div", {className: "col-lg-12 col-md-12"}, React.createElement("p", {className: "m-b-0 Hs-fw"}, "Sea表单："), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "mrc名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "publishermrc" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "模块名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "发布版" })}))));
            };
            XMLPanelPageReact.prototype._initMVCForm = function () {
                return React.createElement("div", {className: "clearfix"}, React.createElement("p", {className: "m-b-0 m-t Hs-fw"}, "MVC表单"), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "标题："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "welcome" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "展示形式："), React.createElement("div", {className: "col-lg-8 col-md-8"}, this.props.Vm.ComboObj.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "占行："), React.createElement("div", {className: "col-lg-8 col-md-8"}, this.props.Vm.ComboZObj.intoDom())), React.createElement("div", {className: "col-lg-12 col-md-12"}, React.createElement("p", {className: "m-b-0 Hs-fw"}, "路由设置："), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "控制器名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Desk" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "方法名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Desk" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "Area名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "ERepair" })})), React.createElement("div", {className: "col-lg-3 col-md-3"}, React.createElement("label", {className: "form-control-label text-right"}, "命名空间："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "ERepair.Manage.Web.Controllers", Type: "textarea" })}))));
            };
            return XMLPanelPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        XMLPanelPage.XMLPanelPageReact = XMLPanelPageReact;
        var XMLPanelPageVm = (function (_super) {
            __extends(XMLPanelPageVm, _super);
            function XMLPanelPageVm(config) {
                _super.call(this);
                this.ReactType = XMLPanelPageReact;
                this.Title = "XMLPanelPage页面;";
                this.ComboObj = new ComboFile.ui.ComboVm();
                this.ComboZObj = new ComboFile.ui.ComboVm();
                this.ComboObj.ItemList = data.ApplicationData.ShowKindData;
                this.ComboObj.SelectText = "Tile";
                this.ComboZObj.ItemList = data.ApplicationData.ShowTypeData;
                this.ComboZObj.SelectText = "0";
            }
            XMLPanelPageVm.prototype.init = function (config) {
            };
            XMLPanelPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return XMLPanelPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        XMLPanelPage.XMLPanelPageVm = XMLPanelPageVm;
        var XMLPanelPageStates = (function (_super) {
            __extends(XMLPanelPageStates, _super);
            function XMLPanelPageStates() {
                _super.apply(this, arguments);
            }
            return XMLPanelPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        XMLPanelPage.XMLPanelPageStates = XMLPanelPageStates;
        var XMLPanelPageProps = (function (_super) {
            __extends(XMLPanelPageProps, _super);
            function XMLPanelPageProps() {
                _super.apply(this, arguments);
            }
            return XMLPanelPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        XMLPanelPage.XMLPanelPageProps = XMLPanelPageProps;
        iocFile.Core.Ioc.Current().RegisterType("XMLPANELPAGE", basewedPageFile.Web.BaseWebPageVm, XMLPanelPageVm);
    })(XMLPanelPage = exports.XMLPanelPage || (exports.XMLPanelPage = {}));
});
