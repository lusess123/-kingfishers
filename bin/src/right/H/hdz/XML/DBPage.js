var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/EditSpan"], function (require, exports, iocFile, basewedPageFile, React, EditSpanFile) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var DBPage;
    (function (DBPage) {
        var DBPageAction = (function (_super) {
            __extends(DBPageAction, _super);
            function DBPageAction() {
                _super.apply(this, arguments);
            }
            return DBPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DBPage.DBPageAction = DBPageAction;
        var DBPageReact = (function (_super) {
            __extends(DBPageReact, _super);
            function DBPageReact() {
                _super.apply(this, arguments);
                this.state = new DBPageStates();
            }
            DBPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "well"}, React.createElement("h6", {className: "Hu-title Hs-fw "}, "基础设置"), React.createElement("span", null)), React.createElement("table", {className: "table table-hover"}, this._initThead(), this._initTbody()), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm"}, "保存")));
            };
            DBPageReact.prototype._initThead = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "数据库连接字符串" })})), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addRow(); }}))));
            };
            DBPageReact.prototype._initTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "New" })})), React.createElement("td", null, "Data Source=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "192.168.66.3" })}), ";" + ' ' + "Initial Catalog=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Dev_Ataw_Ez_Office" })}), ";" + ' ' + "User ID=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "dev" })}), ";" + ' ' + "Pwd=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "dev" })}), ";"), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer"}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Invoicing" })})), React.createElement("td", null, "Data Source=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "192.168.66.5" })}), ";" + ' ' + "Initial Catalog=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "InvoicingTest" })}), ";" + ' ' + "User ID=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "sa" })}), ";" + ' ' + "Pwd=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Testsql665" })}), ";"), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer"}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "MedicalCenter" })})), React.createElement("td", null, "Data Source=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "192.168.66.3" })}), ";" + ' ' + "Initial Catalog=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Dev_Ataw_MedicalCenter" })}), ";" + ' ' + "User ID=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "dev" })}), ";" + ' ' + "Pwd=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "dev" })}), ";"), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer"}))), React.createElement("tr", {className: this.props.Vm.RowHidden ? " " : " hide"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-circle-o Hu-pointer"})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "请输入..." })})), React.createElement("td", null, "Data Source=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "请输入..." })}), ";" + ' ' + "Initial Catalog=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "请输入..." })}), ";" + ' ' + "User ID=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "请输入..." })}), ";" + ' ' + "Pwd=", React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "请输入..." })}), ";"), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer"}))));
            };
            DBPageReact.prototype.fun_addRow = function () {
                this.props.Vm.RowHidden = !this.props.Vm.RowHidden;
                this.forceUpdate();
            };
            return DBPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DBPage.DBPageReact = DBPageReact;
        var DBPageVm = (function (_super) {
            __extends(DBPageVm, _super);
            function DBPageVm(config) {
                _super.call(this);
                this.ReactType = DBPageReact;
                this.Title = "DBPage页面;";
            }
            DBPageVm.prototype.init = function (config) {
            };
            DBPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return DBPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DBPage.DBPageVm = DBPageVm;
        var DBPageStates = (function (_super) {
            __extends(DBPageStates, _super);
            function DBPageStates() {
                _super.apply(this, arguments);
            }
            return DBPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DBPage.DBPageStates = DBPageStates;
        var DBPageProps = (function (_super) {
            __extends(DBPageProps, _super);
            function DBPageProps() {
                _super.apply(this, arguments);
            }
            return DBPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DBPage.DBPageProps = DBPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DBPAGE", basewedPageFile.Web.BaseWebPageVm, DBPageVm);
    })(DBPage = exports.DBPage || (exports.DBPage = {}));
});
