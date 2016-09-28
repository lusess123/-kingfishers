var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./../../../04page/Viewpage"], function (require, exports, iocFile, basewedPageFile, React, ViewPageFile) {
    "use strict";
    var PlugListPage;
    (function (PlugListPage) {
        var PlugListPageAction = (function (_super) {
            __extends(PlugListPageAction, _super);
            function PlugListPageAction() {
                _super.apply(this, arguments);
            }
            return PlugListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PlugListPage.PlugListPageAction = PlugListPageAction;
        var PlugListPageReact = (function (_super) {
            __extends(PlugListPageReact, _super);
            function PlugListPageReact() {
                _super.apply(this, arguments);
                this.state = new PlugListPageStates();
            }
            PlugListPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.ViewPageObj));
            };
            return PlugListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PlugListPage.PlugListPageReact = PlugListPageReact;
        var PlugListPageVm = (function (_super) {
            __extends(PlugListPageVm, _super);
            function PlugListPageVm(config) {
                _super.call(this);
                this.ReactType = PlugListPageReact;
                this.Title = "PlugListPage页面;";
            }
            PlugListPageVm.prototype.init = function (config) {
            };
            PlugListPageVm.prototype.loadPage = function (callback) {
                this.ViewPageObj = new ViewPageFile.Page.WebViewPageVm();
                this.ViewPageObj.IsV1 = false;
                this.ViewPageObj.Reset("module/plug");
                this.ViewPageObj.sysPage_load(function () {
                    callback();
                });
            };
            return PlugListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PlugListPage.PlugListPageVm = PlugListPageVm;
        var PlugListPageStates = (function (_super) {
            __extends(PlugListPageStates, _super);
            function PlugListPageStates() {
                _super.apply(this, arguments);
            }
            return PlugListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PlugListPage.PlugListPageStates = PlugListPageStates;
        var PlugListPageProps = (function (_super) {
            __extends(PlugListPageProps, _super);
            function PlugListPageProps() {
                _super.apply(this, arguments);
            }
            return PlugListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PlugListPage.PlugListPageProps = PlugListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PLUGLISTPAGE", basewedPageFile.Web.BaseWebPageVm, PlugListPageVm);
    })(PlugListPage = exports.PlugListPage || (exports.PlugListPage = {}));
});
