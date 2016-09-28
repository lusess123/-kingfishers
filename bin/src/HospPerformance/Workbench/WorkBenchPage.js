var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var WorkBenchPage;
    (function (WorkBenchPage) {
        var WorkBenchPageAction = (function (_super) {
            __extends(WorkBenchPageAction, _super);
            function WorkBenchPageAction() {
                _super.apply(this, arguments);
            }
            return WorkBenchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        WorkBenchPage.WorkBenchPageAction = WorkBenchPageAction;
        var WorkBenchPageReact = (function (_super) {
            __extends(WorkBenchPageReact, _super);
            function WorkBenchPageReact() {
                _super.apply(this, arguments);
                this.state = new WorkBenchPageStates();
            }
            WorkBenchPageReact.prototype.pSender = function () {
                return React.createElement("div", null, "WorkBenchPage的页面");
            };
            return WorkBenchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        WorkBenchPage.WorkBenchPageReact = WorkBenchPageReact;
        var WorkBenchPageVm = (function (_super) {
            __extends(WorkBenchPageVm, _super);
            function WorkBenchPageVm(config) {
                _super.call(this);
                this.ReactType = WorkBenchPageReact;
            }
            WorkBenchPageVm.prototype.init = function (config) {
            };
            WorkBenchPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return WorkBenchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        WorkBenchPage.WorkBenchPageVm = WorkBenchPageVm;
        var WorkBenchPageStates = (function (_super) {
            __extends(WorkBenchPageStates, _super);
            function WorkBenchPageStates() {
                _super.apply(this, arguments);
            }
            return WorkBenchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        WorkBenchPage.WorkBenchPageStates = WorkBenchPageStates;
        var WorkBenchPageProps = (function (_super) {
            __extends(WorkBenchPageProps, _super);
            function WorkBenchPageProps() {
                _super.apply(this, arguments);
            }
            return WorkBenchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        WorkBenchPage.WorkBenchPageProps = WorkBenchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("WorkBenchPage", basewedPageFile.Web.BaseWebPageVm, WorkBenchPageVm);
    })(WorkBenchPage = exports.WorkBenchPage || (exports.WorkBenchPage = {}));
});
