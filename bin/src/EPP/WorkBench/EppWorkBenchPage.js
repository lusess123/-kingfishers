var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var EppWorkBenchPage;
    (function (EppWorkBenchPage) {
        var EppWorkBenchPageAction = (function (_super) {
            __extends(EppWorkBenchPageAction, _super);
            function EppWorkBenchPageAction() {
                _super.apply(this, arguments);
            }
            return EppWorkBenchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        EppWorkBenchPage.EppWorkBenchPageAction = EppWorkBenchPageAction;
        var EppWorkBenchPageReact = (function (_super) {
            __extends(EppWorkBenchPageReact, _super);
            function EppWorkBenchPageReact() {
                _super.apply(this, arguments);
                this.state = new EppWorkBenchPageStates();
            }
            EppWorkBenchPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "epp-homepage"}, React.createElement("ul", {className: "nav nav-pills epp-list"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "$$module/EPP/inspection/EquipmentManage"}, React.createElement("img", {src: "/areas/epp/Content/imgs/xj_sb.png"}), React.createElement("span", null, "设备管理"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "$$module/EPP/inspection/PatrolTask"}, React.createElement("img", {src: "/areas/epp/Content/imgs/xj_xj.png"}), React.createElement("span", null, "巡检任务"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "$$module/EPP/inspection/maintainplan"}, React.createElement("img", {src: "/areas/epp/Content/imgs/xj_by.png"}), React.createElement("span", null, "保养计划")))));
            };
            return EppWorkBenchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        EppWorkBenchPage.EppWorkBenchPageReact = EppWorkBenchPageReact;
        var EppWorkBenchPageVm = (function (_super) {
            __extends(EppWorkBenchPageVm, _super);
            function EppWorkBenchPageVm(config) {
                _super.call(this);
                this.ReactType = EppWorkBenchPageReact;
            }
            EppWorkBenchPageVm.prototype.init = function (config) {
            };
            EppWorkBenchPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return EppWorkBenchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        EppWorkBenchPage.EppWorkBenchPageVm = EppWorkBenchPageVm;
        var EppWorkBenchPageStates = (function (_super) {
            __extends(EppWorkBenchPageStates, _super);
            function EppWorkBenchPageStates() {
                _super.apply(this, arguments);
            }
            return EppWorkBenchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        EppWorkBenchPage.EppWorkBenchPageStates = EppWorkBenchPageStates;
        var EppWorkBenchPageProps = (function (_super) {
            __extends(EppWorkBenchPageProps, _super);
            function EppWorkBenchPageProps() {
                _super.apply(this, arguments);
            }
            return EppWorkBenchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        EppWorkBenchPage.EppWorkBenchPageProps = EppWorkBenchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EppWorkBenchPage", basewedPageFile.Web.BaseWebPageVm, EppWorkBenchPageVm);
    })(EppWorkBenchPage = exports.EppWorkBenchPage || (exports.EppWorkBenchPage = {}));
});
