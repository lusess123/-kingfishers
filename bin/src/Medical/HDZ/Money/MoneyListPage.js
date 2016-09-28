var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./MoneyTable"], function (require, exports, iocFile, basewedPageFile, React, MoneyTableFile) {
    "use strict";
    var MoneyListPage;
    (function (MoneyListPage) {
        var MoneyListPageAction = (function (_super) {
            __extends(MoneyListPageAction, _super);
            function MoneyListPageAction() {
                _super.apply(this, arguments);
            }
            return MoneyListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MoneyListPage.MoneyListPageAction = MoneyListPageAction;
        var MoneyListPageReact = (function (_super) {
            __extends(MoneyListPageReact, _super);
            function MoneyListPageReact() {
                _super.apply(this, arguments);
                this.state = new MoneyListPageStates();
            }
            MoneyListPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initQuantity(), this._initHandle(), this.props.Vm.MoneyTableObj.intoDom());
            };
            MoneyListPageReact.prototype._initQuantity = function () {
                return React.createElement("div", {className: "YSm-quantity clearfix"}, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-danger"}, React.createElement("p", null, "今日缴费（元）："), React.createElement("h2", null, "25666"))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-info"}, React.createElement("p", null, "已收费（元）："), React.createElement("h2", null, "5666"))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12"}, React.createElement("div", {className: "panel panel-success"}, React.createElement("p", null, "未收费（元）："), React.createElement("h2", null, "66"))));
            };
            MoneyListPageReact.prototype._initHandle = function () {
                return React.createElement("div", {className: "YSm-handle"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10", type: "text", placeholder: "输入身份证、体检号、档案号查询"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary"}, "查询")), React.createElement("a", {href: "#$PayListPage$", className: "btn YSu-link"}, "缴费列表"));
            };
            return MoneyListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MoneyListPage.MoneyListPageReact = MoneyListPageReact;
        var MoneyListPageVm = (function (_super) {
            __extends(MoneyListPageVm, _super);
            function MoneyListPageVm(config) {
                _super.call(this);
                this.ReactType = MoneyListPageReact;
                this.MoneyTableObj = new MoneyTableFile.MoneyTable.MoneyTableVm();
                this.listenAppEvent("", "Hull-Menu-Toggle", function (a) {
                    // alert(a);
                    // var _$dom = $(ReactDOM.findDOMNode());
                    if (a) {
                        $(".YSm-fixed-bottom").removeClass("col-lg-10").addClass("col-lg-12 Hg-default-left ");
                    }
                    else {
                        $(".YSm-fixed-bottom").removeClass("col-lg-12 Hg-default-left").addClass("col-lg-10");
                    }
                });
            }
            MoneyListPageVm.prototype.init = function (config) {
            };
            MoneyListPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return MoneyListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MoneyListPage.MoneyListPageVm = MoneyListPageVm;
        var MoneyListPageStates = (function (_super) {
            __extends(MoneyListPageStates, _super);
            function MoneyListPageStates() {
                _super.apply(this, arguments);
            }
            return MoneyListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MoneyListPage.MoneyListPageStates = MoneyListPageStates;
        var MoneyListPageProps = (function (_super) {
            __extends(MoneyListPageProps, _super);
            function MoneyListPageProps() {
                _super.apply(this, arguments);
            }
            return MoneyListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MoneyListPage.MoneyListPageProps = MoneyListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MONEYLISTPAGE", basewedPageFile.Web.BaseWebPageVm, MoneyListPageVm);
    })(MoneyListPage = exports.MoneyListPage || (exports.MoneyListPage = {}));
});
