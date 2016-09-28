var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "./../../05tool/MonacoEditor/MonacoEditor"], function (require, exports, iocFile, urlFile, basewedPageFile, React, MonacoEditorFile) {
    "use strict";
    var WebConfigFilePage;
    (function (WebConfigFilePage) {
        var WebConfigFilePageAction = (function (_super) {
            __extends(WebConfigFilePageAction, _super);
            function WebConfigFilePageAction() {
                _super.apply(this, arguments);
            }
            return WebConfigFilePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        WebConfigFilePage.WebConfigFilePageAction = WebConfigFilePageAction;
        var WebConfigFilePageReact = (function (_super) {
            __extends(WebConfigFilePageReact, _super);
            function WebConfigFilePageReact() {
                _super.apply(this, arguments);
                this.state = new WebConfigFilePageStates();
            }
            WebConfigFilePageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.MonacoEditorObj));
            };
            return WebConfigFilePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        WebConfigFilePage.WebConfigFilePageReact = WebConfigFilePageReact;
        var WebConfigFilePageVm = (function (_super) {
            __extends(WebConfigFilePageVm, _super);
            function WebConfigFilePageVm(config) {
                _super.call(this);
                this.ReactType = WebConfigFilePageReact;
                this.Title = "WebConfigFilePage页面;";
            }
            WebConfigFilePageVm.prototype.init = function (config) {
            };
            WebConfigFilePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                if (callback) {
                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "Ataw.WebSite/web.config" }, function (a) {
                        var _list = a;
                        _this.MonacoEditorObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                            ContentList: _list
                        });
                        callback();
                    });
                }
            };
            return WebConfigFilePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        WebConfigFilePage.WebConfigFilePageVm = WebConfigFilePageVm;
        var WebConfigFilePageStates = (function (_super) {
            __extends(WebConfigFilePageStates, _super);
            function WebConfigFilePageStates() {
                _super.apply(this, arguments);
            }
            return WebConfigFilePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        WebConfigFilePage.WebConfigFilePageStates = WebConfigFilePageStates;
        var WebConfigFilePageProps = (function (_super) {
            __extends(WebConfigFilePageProps, _super);
            function WebConfigFilePageProps() {
                _super.apply(this, arguments);
            }
            return WebConfigFilePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        WebConfigFilePage.WebConfigFilePageProps = WebConfigFilePageProps;
        iocFile.Core.Ioc.Current().RegisterType("WEBCONFIGFILEPAGE", basewedPageFile.Web.BaseWebPageVm, WebConfigFilePageVm);
    })(WebConfigFilePage = exports.WebConfigFilePage || (exports.WebConfigFilePage = {}));
});
