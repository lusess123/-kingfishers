var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./PersonalTable"], function (require, exports, iocFile, basewedPageFile, React, PersonalTableFile) {
    "use strict";
    var PersonalTableVm = PersonalTableFile.PersonalTable.PersonalTableVm;
    var PersonalListPage;
    (function (PersonalListPage) {
        var PersonalListPageAction = (function (_super) {
            __extends(PersonalListPageAction, _super);
            function PersonalListPageAction() {
                _super.apply(this, arguments);
            }
            return PersonalListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonalListPage.PersonalListPageAction = PersonalListPageAction;
        var PersonalListPageReact = (function (_super) {
            __extends(PersonalListPageReact, _super);
            function PersonalListPageReact() {
                _super.apply(this, arguments);
                this.state = new PersonalListPageStates();
            }
            PersonalListPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initQuantity(), this._initHandle(), this.props.Vm.PersonalTableObj.intoDom());
            };
            PersonalListPageReact.prototype._initQuantity = function () {
                return React.createElement("div", {className: "YSm-quantity clearfix"}, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-danger"}, React.createElement("p", null, "总预约量："), React.createElement("h2", null, "25666"))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-info"}, React.createElement("p", null, "今日预约量："), React.createElement("h2", null, "5666"))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12"}, React.createElement("div", {className: "panel panel-success"}, React.createElement("p", null, "我的预约量："), React.createElement("h2", null, "66"))));
            };
            PersonalListPageReact.prototype._initHandle = function () {
                return React.createElement("div", {className: "YSm-handle"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10", type: "text", placeholder: "输入身份证、体检号、档案号查询"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary"}, "查询")), React.createElement("a", {className: "btn btn-primary", href: "#$NewOrderPage$"}, React.createElement("i", {className: "fa fa-plus"}), "新增预约"), React.createElement("a", {href: "", className: "YSu-link"}, "历史数据查询"));
            };
            return PersonalListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PersonalListPage.PersonalListPageReact = PersonalListPageReact;
        var PersonalListPageVm = (function (_super) {
            __extends(PersonalListPageVm, _super);
            function PersonalListPageVm(config) {
                _super.call(this);
                this.ReactType = PersonalListPageReact;
                this.PersonalTableObj = new PersonalTableVm();
            }
            PersonalListPageVm.prototype.init = function (config) {
            };
            PersonalListPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return PersonalListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PersonalListPage.PersonalListPageVm = PersonalListPageVm;
        var PersonalListPageStates = (function (_super) {
            __extends(PersonalListPageStates, _super);
            function PersonalListPageStates() {
                _super.apply(this, arguments);
            }
            return PersonalListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonalListPage.PersonalListPageStates = PersonalListPageStates;
        var PersonalListPageProps = (function (_super) {
            __extends(PersonalListPageProps, _super);
            function PersonalListPageProps() {
                _super.apply(this, arguments);
            }
            return PersonalListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PersonalListPage.PersonalListPageProps = PersonalListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PERSONALLISTPAGE", basewedPageFile.Web.BaseWebPageVm, PersonalListPageVm);
    })(PersonalListPage = exports.PersonalListPage || (exports.PersonalListPage = {}));
});
