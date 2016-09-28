var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, urlFile, basewedPageFile, React) {
    "use strict";
    var AppraisalRegisterPage;
    (function (AppraisalRegisterPage) {
        var AppraisalRegisterPageAction = (function (_super) {
            __extends(AppraisalRegisterPageAction, _super);
            function AppraisalRegisterPageAction() {
                _super.apply(this, arguments);
            }
            return AppraisalRegisterPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppraisalRegisterPage.AppraisalRegisterPageAction = AppraisalRegisterPageAction;
        var AppraisalRegisterPageReact = (function (_super) {
            __extends(AppraisalRegisterPageReact, _super);
            function AppraisalRegisterPageReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalRegisterPageStates();
            }
            AppraisalRegisterPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.newOpt("new"); }}, "登记1"), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.registerOpt("new"); }}, "登记2"));
            };
            AppraisalRegisterPageReact.prototype.newOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winNewAppraisalRegisterPage$" + vals + "$", true);
            };
            AppraisalRegisterPageReact.prototype.registerOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winNewAppraisalRegisterPageT$" + vals + "$", true);
            };
            return AppraisalRegisterPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AppraisalRegisterPage.AppraisalRegisterPageReact = AppraisalRegisterPageReact;
        var AppraisalRegisterPageVm = (function (_super) {
            __extends(AppraisalRegisterPageVm, _super);
            function AppraisalRegisterPageVm(config) {
                _super.call(this);
                this.ReactType = AppraisalRegisterPageReact;
            }
            AppraisalRegisterPageVm.prototype.init = function (config) {
            };
            AppraisalRegisterPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return AppraisalRegisterPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AppraisalRegisterPage.AppraisalRegisterPageVm = AppraisalRegisterPageVm;
        var AppraisalRegisterPageStates = (function (_super) {
            __extends(AppraisalRegisterPageStates, _super);
            function AppraisalRegisterPageStates() {
                _super.apply(this, arguments);
            }
            return AppraisalRegisterPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppraisalRegisterPage.AppraisalRegisterPageStates = AppraisalRegisterPageStates;
        var AppraisalRegisterPageProps = (function (_super) {
            __extends(AppraisalRegisterPageProps, _super);
            function AppraisalRegisterPageProps() {
                _super.apply(this, arguments);
            }
            return AppraisalRegisterPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AppraisalRegisterPage.AppraisalRegisterPageProps = AppraisalRegisterPageProps;
        iocFile.Core.Ioc.Current().RegisterType("APPRAISALREGISTERPAGE", basewedPageFile.Web.BaseWebPageVm, AppraisalRegisterPageVm);
    })(AppraisalRegisterPage = exports.AppraisalRegisterPage || (exports.AppraisalRegisterPage = {}));
});
