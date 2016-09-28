// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Viewpage", "./BaseWebPage", "./../01core/Ioc"], function (require, exports, ViewpageFile, basewedPage, iocFile) {
    "use strict";
    var ViewModulePage;
    (function (ViewModulePage) {
        var ViewModulePageReact = (function (_super) {
            __extends(ViewModulePageReact, _super);
            function ViewModulePageReact() {
                _super.apply(this, arguments);
            }
            return ViewModulePageReact;
        }(ViewpageFile.Page.BaseWebViewPageReact));
        ViewModulePage.ViewModulePageReact = ViewModulePageReact;
        var ViewModulePageVm = (function (_super) {
            __extends(ViewModulePageVm, _super);
            function ViewModulePageVm() {
                _super.apply(this, arguments);
                this.ReactType = ViewModulePageReact;
                this.IsView = true;
            }
            return ViewModulePageVm;
        }(ViewpageFile.Page.WebViewPageVm));
        ViewModulePage.ViewModulePageVm = ViewModulePageVm;
        var ViewModulePageProps = (function (_super) {
            __extends(ViewModulePageProps, _super);
            function ViewModulePageProps() {
                _super.apply(this, arguments);
            }
            return ViewModulePageProps;
        }(basewedPage.Web.BaseWebPageProps));
        ViewModulePage.ViewModulePageProps = ViewModulePageProps;
        iocFile.Core.Ioc.Current().RegisterType("VIEW", basewedPage.Web.BaseWebPageVm, ViewModulePageVm);
    })(ViewModulePage || (ViewModulePage = {}));
});
