var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "./../01core/Url", "./../01core/Event", "./../01core/Ioc"], function (require, exports, domFile, urlFile, eventFile, iocFile) {
    "use strict";
    var Web;
    (function (Web) {
        var BaseWebPageAction = (function (_super) {
            __extends(BaseWebPageAction, _super);
            function BaseWebPageAction() {
                _super.apply(this, arguments);
            }
            return BaseWebPageAction;
        }(domFile.Core.DomAction));
        Web.BaseWebPageAction = BaseWebPageAction;
        var BaseWebPageReact = (function (_super) {
            __extends(BaseWebPageReact, _super);
            function BaseWebPageReact() {
                _super.apply(this, arguments);
            }
            BaseWebPageReact.prototype.pSender = function () {
                return null;
            };
            return BaseWebPageReact;
        }(domFile.Core.DomReact));
        Web.BaseWebPageReact = BaseWebPageReact;
        var BaseWebPageProps = (function (_super) {
            __extends(BaseWebPageProps, _super);
            function BaseWebPageProps() {
                _super.apply(this, arguments);
            }
            return BaseWebPageProps;
        }(domFile.Core.DomProps));
        Web.BaseWebPageProps = BaseWebPageProps;
        var BaseWebPageVm = (function (_super) {
            __extends(BaseWebPageVm, _super);
            function BaseWebPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = null;
                this.Param1 = "";
                this.Param2 = "";
                this.Param3 = "";
                this.ModuleName = "";
                this.Title = "";
                this.PanelName = "";
                this.pIsHullAutoHide = false;
                this.pIsHullAutoShow = false;
                this.UniId = "BaseWebPage_" + eventFile.App.getUniId();
                this.BeginTime = new Date();
                this.getEmit().addListener("sendPage", function (config, obj) {
                    _this.ReceivePageSend(config, obj);
                });
            }
            ;
            BaseWebPageVm.prototype.SendPageActor = function (toPage, obj) {
                var _config = {
                    FromPanelName: this.PanelName,
                    FromModulename: this.ModuleName,
                    ToPanelName: toPage.ToPanelName,
                    ToModuleName: toPage.ToModuleName,
                    Param1: this.Param1,
                    Param2: this.Param2,
                    Param3: this.Param3
                };
                urlFile.Core.AkUrl.Current().SendToPage(_config, obj);
            };
            BaseWebPageVm.prototype.ReceivePageSend = function (config, obj) {
                // alert( fromName + " to "+  panelName);
            };
            BaseWebPageVm.prototype.Reset = function (p1, p2, p3) {
                this.Param1 = p1;
                this.Param2 = p2;
                this.Param3 = p3;
            };
            BaseWebPageVm.prototype.senderPage = function (callback) {
                this.forceUpdate("", function () { if (callback)
                    callback(); });
            };
            BaseWebPageVm.prototype.sysPage_load = function (callback) {
                if (this.pIsHullAutoHide) {
                    this.emitAppEvent("Hull-Menu-Toggle-Page-NoSender", "sys", true);
                }
                if (this.pIsHullAutoShow) {
                    this.emitAppEvent("Hull-Menu-Toggle-Page-NoSender", "sys", false);
                }
                this.loadPage(callback);
                // callback();
            };
            BaseWebPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            BaseWebPageVm.prototype.closePage = function () {
                urlFile.Core.AkUrl.Current().closePage(this.PanelName);
            };
            return BaseWebPageVm;
        }(domFile.Core.DomVm));
        Web.BaseWebPageVm = BaseWebPageVm;
        var BaseWebPageStates = (function (_super) {
            __extends(BaseWebPageStates, _super);
            function BaseWebPageStates() {
                _super.apply(this, arguments);
            }
            return BaseWebPageStates;
        }(domFile.Core.DomStates));
        Web.BaseWebPageStates = BaseWebPageStates;
    })(Web = exports.Web || (exports.Web = {}));
    function _reg(name, path, src) {
        if (!src) {
            src = "./../";
        }
        iocFile.Core.Ioc.Current().RegisterTypeSrc(name, Web.BaseWebPageVm, src + path);
    }
    exports._reg = _reg;
});
