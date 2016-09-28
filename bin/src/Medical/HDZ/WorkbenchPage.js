var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var WorkbenchPage;
    (function (WorkbenchPage) {
        var WorkbenchPageAction = (function (_super) {
            __extends(WorkbenchPageAction, _super);
            function WorkbenchPageAction() {
                _super.apply(this, arguments);
            }
            return WorkbenchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        WorkbenchPage.WorkbenchPageAction = WorkbenchPageAction;
        var WorkbenchPageReact = (function (_super) {
            __extends(WorkbenchPageReact, _super);
            function WorkbenchPageReact() {
                _super.apply(this, arguments);
                this.state = new WorkbenchPageStates();
            }
            WorkbenchPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-workbench clearfix"}, React.createElement("div", {className: "pull-left YSm-workbench-left"}, React.createElement("ul", {className: "nav nav-pills clearfix"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "#$PersonalListPage$"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_pdj_on.png"}), React.createElement("span", null, "个人登记"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_pzyd_on.png"}), React.createElement("span", null, "打印指引单"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_pjf_on.png"}), React.createElement("span", null, "个人缴费")))), React.createElement("ul", {className: "nav nav-pills clearfix"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link YSs-workbench-blue", href: "#$GroupListPage$"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_gdj_on.png"}), React.createElement("span", null, "团体登记"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link YSs-workbench-blue"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_pzyd_on.png"}), React.createElement("span", null, "打印指引单"))))), React.createElement("div", {className: "pull-right YSm-workbench-right"}, React.createElement("ul", {className: "nav nav-pills clearfix"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_olr_on.png"}), React.createElement("span", null, "科室录入"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_zj_on.png"}), React.createElement("span", null, "总检"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link"}, React.createElement("img", {src: "/ts/lib/akCss/images/YSWork_cbg_on.png"}), React.createElement("span", null, "打印体检报告"))))), React.createElement("div", {className: "YSu-workbench-red"}), React.createElement("div", {className: "YSu-workbench-blue"}));
            };
            return WorkbenchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        WorkbenchPage.WorkbenchPageReact = WorkbenchPageReact;
        var WorkbenchPageVm = (function (_super) {
            __extends(WorkbenchPageVm, _super);
            function WorkbenchPageVm(config) {
                _super.call(this);
                this.ReactType = WorkbenchPageReact;
                $(".nav-link").hover(function () {
                    var _this = $(this);
                    var _img = _this.children("img");
                    _img.attr("src", _img.attr("src").replace("_on", "_over"));
                }, function () {
                    var _this = $(this);
                    var _img = _this.children("img");
                    _img.attr("src", _img.attr("src").replace("_over", "_on"));
                });
            }
            WorkbenchPageVm.prototype.init = function (config) {
            };
            WorkbenchPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return WorkbenchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        WorkbenchPage.WorkbenchPageVm = WorkbenchPageVm;
        var WorkbenchPageStates = (function (_super) {
            __extends(WorkbenchPageStates, _super);
            function WorkbenchPageStates() {
                _super.apply(this, arguments);
            }
            return WorkbenchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        WorkbenchPage.WorkbenchPageStates = WorkbenchPageStates;
        var WorkbenchPageProps = (function (_super) {
            __extends(WorkbenchPageProps, _super);
            function WorkbenchPageProps() {
                _super.apply(this, arguments);
            }
            return WorkbenchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        WorkbenchPage.WorkbenchPageProps = WorkbenchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("WORKBENCHPAGE", basewedPageFile.Web.BaseWebPageVm, WorkbenchPageVm);
    })(WorkbenchPage = exports.WorkbenchPage || (exports.WorkbenchPage = {}));
});
