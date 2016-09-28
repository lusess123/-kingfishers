var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/EditSpan", "./../../../../02col/01single/Radio", "./Data"], function (require, exports, iocFile, basewedPageFile, React, EditSpanFile, RadioFile, data) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var ApplicationPage;
    (function (ApplicationPage) {
        var ApplicationPageAction = (function (_super) {
            __extends(ApplicationPageAction, _super);
            function ApplicationPageAction() {
                _super.apply(this, arguments);
            }
            return ApplicationPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ApplicationPage.ApplicationPageAction = ApplicationPageAction;
        var ApplicationPageReact = (function (_super) {
            __extends(ApplicationPageReact, _super);
            function ApplicationPageReact() {
                _super.apply(this, arguments);
                this.state = new ApplicationPageStates();
            }
            ApplicationPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", null, React.createElement("div", {className: "well"}, React.createElement("h6", {className: "Hu-title Hs-fw "}, "基础设置"), React.createElement("span", null)), React.createElement("form", {className: "m-a clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12"}, React.createElement("label", {className: "form-control-label text-right"}, "应用程序名："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "haa", ChangeEvent: function () { _this.props.Vm.changerEvent(); }, ClassName: this.props.Vm.isAppNameEdit })})), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "是否支持报表："), this.props.Vm.RadioObj.intoDom()), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "日志记录："), this.props.Vm.RadioDObj.intoDom()), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "异常堆栈信息的提示："), this.props.Vm.RadioEObj.intoDom()), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "帮助中心："), this.props.Vm.RadioFObj.intoDom()), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "签到推送："), this.props.Vm.RadioGObj.intoDom())), this._initMemcached(), this._initDB()), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm"}, "保存"))));
            };
            ApplicationPageReact.prototype._initMemcached = function () {
                return React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("p", {className: "m-b-0 Hs-fw "}, "分布式缓存"), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "基本设置："), React.createElement("div", {className: "Hg-w80  pull-left"}, React.createElement("div", {className: ""}, React.createElement("label", {className: "form-control-label text-right"}, "Init："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "50" })})), React.createElement("div", {className: ""}, React.createElement("label", {className: "form-control-label text-right"}, "Min："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "50" })})), React.createElement("div", {className: ""}, React.createElement("label", {className: "form-control-label text-right"}, "Max："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "250" })})))), React.createElement("div", {className: "col-lg-12 col-md-12"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "服务列表："), React.createElement("div", {className: "Hg-w80 pull-left"}, React.createElement("div", null, React.createElement("label", {className: "form-control-label text-right"}, "服务地址1："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "127.0.0.1:11211" })})), React.createElement("div", null, React.createElement("label", {className: "form-control-label text-right"}, "服务地址2："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "192.168.68.90:11211" })})), React.createElement("div", null, React.createElement("label", {className: "form-control-label text-right"}, "服务地址3："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "192.168.68.90:11211" })})))));
            };
            ApplicationPageReact.prototype._initDB = function () {
                return React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("div", {className: "col-lg-12 col-md-12"}, React.createElement("label", {className: "form-control-label text-right pull-left"}, "反向生产数据库："), this.props.Vm.RadioDBObj.intoDom()), React.createElement("table", {className: "table  table-hover"}, this._initDBThead(), this._initDBTbody()));
            };
            ApplicationPageReact.prototype._initDBThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Key" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Vaule" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "NeedParse" })}))));
            };
            ApplicationPageReact.prototype._initDBTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "设置1" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "MultiLog" })})), React.createElement("td", null, this.props.Vm.RadioHObj.intoDom()), React.createElement("td", null, this.props.Vm.RadioIObj.intoDom())), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "设置2" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "GeneratorXMLPath" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "E:\form.xml" })})), React.createElement("td", null, this.props.Vm.RadioJObj.intoDom())), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "设置3" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "SisenMessNotifyUrl" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "http://192.168.66.11:8524/workflow/WebServer/SisenMessSingle", Type: "textarea" })})), React.createElement("td", null, this.props.Vm.RadioKObj.intoDom())), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "设置4" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "SMTPPort" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "25" })})), React.createElement("td", null, this.props.Vm.RadioLObj.intoDom())));
            };
            ApplicationPageReact.prototype.fun_addDBRow = function () {
                this.props.Vm.DBRowHidden = !this.props.Vm.DBRowHidden;
                this.forceUpdate();
            };
            return ApplicationPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ApplicationPage.ApplicationPageReact = ApplicationPageReact;
        var ApplicationPageVm = (function (_super) {
            __extends(ApplicationPageVm, _super);
            function ApplicationPageVm(config) {
                _super.call(this);
                this.ReactType = ApplicationPageReact;
                this.Title = "ApplicationPage页面;";
                this.RadioObj = new RadioFile.ui.RadioVm();
                this.RadioDObj = new RadioFile.ui.RadioVm();
                this.RadioEObj = new RadioFile.ui.RadioVm();
                this.RadioFObj = new RadioFile.ui.RadioVm();
                this.RadioGObj = new RadioFile.ui.RadioVm();
                this.RadioDBObj = new RadioFile.ui.RadioVm();
                this.RadioHObj = new RadioFile.ui.RadioVm();
                this.RadioIObj = new RadioFile.ui.RadioVm();
                this.RadioJObj = new RadioFile.ui.RadioVm();
                this.RadioKObj = new RadioFile.ui.RadioVm();
                this.RadioLObj = new RadioFile.ui.RadioVm();
                this.RadioMObj = new RadioFile.ui.RadioVm();
                this.isAppNameEdit = "";
                this.DBRowHidden = false;
                this.RadioObj.ItemList = data.ApplicationData.IsSupportReportData;
                this.RadioObj.SelectText = "否";
                this.RadioDObj.ItemList = data.ApplicationData.HasLoggerData;
                this.RadioDObj.SelectText = "关闭";
                this.RadioEObj.ItemList = data.ApplicationData.ExceptionStackData;
                this.RadioEObj.SelectText = "关闭";
                this.RadioFObj.ItemList = data.ApplicationData.PageHelpStackData;
                this.RadioFObj.SelectText = "关闭";
                this.RadioGObj.ItemList = data.ApplicationData.SignStackData;
                this.RadioGObj.SelectText = "关闭";
                this.RadioHObj.ItemList = data.ApplicationData.RodioHData;
                this.RadioHObj.SelectText = "否";
                this.RadioIObj.ItemList = data.ApplicationData.RodioIData;
                this.RadioIObj.SelectText = "否";
                this.RadioJObj.ItemList = data.ApplicationData.RodioJData;
                this.RadioJObj.SelectText = "否";
                this.RadioKObj.ItemList = data.ApplicationData.RodioKData;
                this.RadioKObj.SelectText = "是";
                this.RadioLObj.ItemList = data.ApplicationData.RodioLData;
                this.RadioLObj.SelectText = "否";
                this.RadioMObj.ItemList = data.ApplicationData.RodioMData;
                this.RadioMObj.SelectText = "是";
                this.RadioDBObj.ItemList = data.ApplicationData.MigrationData;
                this.RadioDBObj.SelectText = "否";
            }
            ApplicationPageVm.prototype.changerEvent = function () {
                this.isAppNameEdit = "Hs-edit";
            };
            ApplicationPageVm.prototype.init = function (config) {
            };
            ApplicationPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return ApplicationPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ApplicationPage.ApplicationPageVm = ApplicationPageVm;
        var ApplicationPageStates = (function (_super) {
            __extends(ApplicationPageStates, _super);
            function ApplicationPageStates() {
                _super.apply(this, arguments);
            }
            return ApplicationPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ApplicationPage.ApplicationPageStates = ApplicationPageStates;
        var ApplicationPageProps = (function (_super) {
            __extends(ApplicationPageProps, _super);
            function ApplicationPageProps() {
                _super.apply(this, arguments);
            }
            return ApplicationPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ApplicationPage.ApplicationPageProps = ApplicationPageProps;
        iocFile.Core.Ioc.Current().RegisterType("_APPLICATIONPAGE", basewedPageFile.Web.BaseWebPageVm, ApplicationPageVm);
    })(ApplicationPage = exports.ApplicationPage || (exports.ApplicationPage = {}));
});
