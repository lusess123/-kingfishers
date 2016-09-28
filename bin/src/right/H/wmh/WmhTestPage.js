var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var wmhTestPage;
    (function (wmhTestPage) {
        var wmhTestPageAction = (function (_super) {
            __extends(wmhTestPageAction, _super);
            function wmhTestPageAction() {
                _super.apply(this, arguments);
            }
            return wmhTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        wmhTestPage.wmhTestPageAction = wmhTestPageAction;
        var wmhTestPageReact = (function (_super) {
            __extends(wmhTestPageReact, _super);
            function wmhTestPageReact() {
                _super.apply(this, arguments);
                this.state = new wmhTestPageStates();
            }
            wmhTestPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("h1", null, "wmh测试页面"));
            };
            return wmhTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        wmhTestPage.wmhTestPageReact = wmhTestPageReact;
        var wmhTestPageVm = (function (_super) {
            __extends(wmhTestPageVm, _super);
            function wmhTestPageVm() {
                _super.apply(this, arguments);
                this.ReactType = wmhTestPageReact;
            }
            return wmhTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        wmhTestPage.wmhTestPageVm = wmhTestPageVm;
        var wmhTestPageStates = (function (_super) {
            __extends(wmhTestPageStates, _super);
            function wmhTestPageStates() {
                _super.apply(this, arguments);
            }
            return wmhTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        wmhTestPage.wmhTestPageStates = wmhTestPageStates;
        var wmhTestPageProps = (function (_super) {
            __extends(wmhTestPageProps, _super);
            function wmhTestPageProps() {
                _super.apply(this, arguments);
            }
            return wmhTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        wmhTestPage.wmhTestPageProps = wmhTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("WMHTESTPAGE", basewedPageFile.Web.BaseWebPageVm, wmhTestPageVm);
    })(wmhTestPage = exports.wmhTestPage || (exports.wmhTestPage = {}));
});
