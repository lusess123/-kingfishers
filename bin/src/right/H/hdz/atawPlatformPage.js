var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./../../../01core/Event", "./head/head", "./content/content", "./head/head_right"], function (require, exports, React, iocFile, basewedPageFile, eventFile, headFile, contentFile, headPosRightFile) {
    "use strict";
    var headVm = headFile.head.headVm;
    var contentVm = contentFile.content.contentVm;
    var headPosRightVm = headPosRightFile.headPosRight.headPosRightVm;
    var atawPlatformPage;
    (function (atawPlatformPage) {
        var atawPlatformPageAction = (function (_super) {
            __extends(atawPlatformPageAction, _super);
            function atawPlatformPageAction() {
                _super.apply(this, arguments);
            }
            return atawPlatformPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        atawPlatformPage.atawPlatformPageAction = atawPlatformPageAction;
        var atawPlatformPageReact = (function (_super) {
            __extends(atawPlatformPageReact, _super);
            function atawPlatformPageReact() {
                _super.apply(this, arguments);
                this.state = new atawPlatformPageStates();
            }
            atawPlatformPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "off-canvas-wrapper"}, React.createElement("div", {className: "off-canvas-wrapper-inner " + (this.props.Vm.ToggleIconShow ? "is-open-right" : "")}, React.createElement("div", {className: "off-canvas position-right is-open"}, this.props.Vm.HeadPosRightObj.intoDom()), React.createElement("div", {className: "off-canvas-content"}, this.props.Vm.HeadObj.intoDom(), this.props.Vm.ContentObj.intoDom())));
            };
            return atawPlatformPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        atawPlatformPage.atawPlatformPageReact = atawPlatformPageReact;
        var atawPlatformPageVm = (function (_super) {
            __extends(atawPlatformPageVm, _super);
            function atawPlatformPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = atawPlatformPageReact;
                this.HeadObj = new headVm();
                this.HeadPosRightObj = new headPosRightVm();
                this.ToggleIconShow = false;
                this.UniId = eventFile.App.getUniId().toString();
                this.HeadObj.TitleObj.UniId = this.UniId;
                //this.Cont_LeftId = eventFile.App.getUniId().toString();
                if (config) {
                    this.ContentObj = new contentVm(config.IcontentConfig);
                }
                else {
                    var config1 = { IcontentConfig: { IshortcutConfig: { UniId: this.UniId }, IleftMenuConfig: { UniId: this.UniId } } };
                    this.ContentObj = new contentVm(config1.IcontentConfig);
                }
                this.listenAppEvent("_title_toggle", this.UniId, function (rowIndex) {
                    _this.ToggleIconShow = !_this.ToggleIconShow;
                    _this.forceUpdate("");
                });
            }
            return atawPlatformPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        atawPlatformPage.atawPlatformPageVm = atawPlatformPageVm;
        var atawPlatformPageStates = (function (_super) {
            __extends(atawPlatformPageStates, _super);
            function atawPlatformPageStates() {
                _super.apply(this, arguments);
            }
            return atawPlatformPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        atawPlatformPage.atawPlatformPageStates = atawPlatformPageStates;
        var atawPlatformPageProps = (function (_super) {
            __extends(atawPlatformPageProps, _super);
            function atawPlatformPageProps() {
                _super.apply(this, arguments);
            }
            return atawPlatformPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        atawPlatformPage.atawPlatformPageProps = atawPlatformPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ATAWPLATFORMPAGE", basewedPageFile.Web.BaseWebPageVm, atawPlatformPageVm);
    })(atawPlatformPage = exports.atawPlatformPage || (exports.atawPlatformPage = {}));
});
