var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
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
                return React.createElement("div", null, "ApplicationPage的页面wewewe");
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
            }
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
        iocFile.Core.Ioc.Current().RegisterType("APPLICATIONPAGE", basewedPageFile.Web.BaseWebPageVm, ApplicationPageVm);
    })(ApplicationPage = exports.ApplicationPage || (exports.ApplicationPage = {}));
});
