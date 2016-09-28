var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../04page/Viewpage", "react", "./IIsSiteHook"], function (require, exports, iocFile, basewedPageFile, ViewPageFile, React, iisHookPage) {
    "use strict";
    iisHookPage;
    var IIsSitePage;
    (function (IIsSitePage) {
        var IIsSitePageAction = (function (_super) {
            __extends(IIsSitePageAction, _super);
            function IIsSitePageAction() {
                _super.apply(this, arguments);
            }
            return IIsSitePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        IIsSitePage.IIsSitePageAction = IIsSitePageAction;
        var IIsSitePageReact = (function (_super) {
            __extends(IIsSitePageReact, _super);
            function IIsSitePageReact() {
                _super.apply(this, arguments);
                this.state = new IIsSitePageStates();
            }
            IIsSitePageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.ViewPageObj));
            };
            return IIsSitePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        IIsSitePage.IIsSitePageReact = IIsSitePageReact;
        var IIsSitePageVm = (function (_super) {
            __extends(IIsSitePageVm, _super);
            function IIsSitePageVm(config) {
                _super.call(this);
                this.ReactType = IIsSitePageReact;
                this.Title = "IIsSitePage页面;";
            }
            IIsSitePageVm.prototype.init = function (config) {
            };
            IIsSitePageVm.prototype.loadPage = function (callback) {
                this.ViewPageObj = new ViewPageFile.Page.WebViewPageVm();
                this.ViewPageObj.IsV1 = false;
                this.ViewPageObj.Reset("module/dev/iismode");
                this.ViewPageObj.sysPage_load(function () {
                    callback();
                });
            };
            return IIsSitePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        IIsSitePage.IIsSitePageVm = IIsSitePageVm;
        var IIsSitePageStates = (function (_super) {
            __extends(IIsSitePageStates, _super);
            function IIsSitePageStates() {
                _super.apply(this, arguments);
            }
            return IIsSitePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        IIsSitePage.IIsSitePageStates = IIsSitePageStates;
        var IIsSitePageProps = (function (_super) {
            __extends(IIsSitePageProps, _super);
            function IIsSitePageProps() {
                _super.apply(this, arguments);
            }
            return IIsSitePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        IIsSitePage.IIsSitePageProps = IIsSitePageProps;
        iocFile.Core.Ioc.Current().RegisterType("IISSITEPAGE", basewedPageFile.Web.BaseWebPageVm, IIsSitePageVm);
    })(IIsSitePage = exports.IIsSitePage || (exports.IIsSitePage = {}));
});
