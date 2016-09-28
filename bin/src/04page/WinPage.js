var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../03form/Base/BasePage", "./BaseWebPage"], function (require, exports, basepage, baseWedPage) {
    "use strict";
    var ui;
    (function (ui) {
        var WinPageAction = (function (_super) {
            __extends(WinPageAction, _super);
            function WinPageAction() {
                _super.apply(this, arguments);
            }
            return WinPageAction;
        }(basepage.ui.BasePageAction));
        ui.WinPageAction = WinPageAction;
        var WinPageReact = (function (_super) {
            __extends(WinPageReact, _super);
            function WinPageReact() {
                _super.apply(this, arguments);
            }
            return WinPageReact;
        }(baseWedPage.Web.BaseWebPageReact));
        ui.WinPageReact = WinPageReact;
        var WinPageProps = (function (_super) {
            __extends(WinPageProps, _super);
            function WinPageProps() {
                _super.apply(this, arguments);
            }
            return WinPageProps;
        }(baseWedPage.Web.BaseWebPageProps));
        ui.WinPageProps = WinPageProps;
        var WinPageVm = (function (_super) {
            __extends(WinPageVm, _super);
            function WinPageVm() {
                _super.apply(this, arguments);
            }
            return WinPageVm;
        }(baseWedPage.Web.BaseWebPageVm));
        ui.WinPageVm = WinPageVm;
        var WinPageStates = (function (_super) {
            __extends(WinPageStates, _super);
            function WinPageStates() {
                _super.apply(this, arguments);
            }
            return WinPageStates;
        }(baseWedPage.Web.BaseWebPageStates));
        ui.WinPageStates = WinPageStates;
    })(ui = exports.ui || (exports.ui = {}));
});
