var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseWebPage", "./../01core/Ioc", "react"], function (require, exports, basewedPage, iocFile, React) {
    "use strict";
    var Page;
    (function (Page) {
        var IframePageReact = (function (_super) {
            __extends(IframePageReact, _super);
            function IframePageReact() {
                _super.apply(this, arguments);
            }
            IframePageReact.prototype.pSender = function () {
                return React.createElement("iframe", {src: this.props.Vm.Url, className: "Hz-scroll  Hg-overflow-auto Hg-width Hu-border-none", style: { "height": $(window).height(), "overflow-y": "auto" }});
            };
            IframePageReact.prototype.pComponentDidMount = function () {
                var _this = this;
                this._resizeFun = function () {
                    _this.forceUpdate();
                };
                $(window).bind("resize", this._resizeFun);
                //$(window).bind("resize", (a) => {
                //    alert(a);
                //})
            };
            IframePageReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                if (this._resizeFun) {
                    $(window).unbind("resize", this._resizeFun);
                }
            };
            return IframePageReact;
        }(basewedPage.Web.BaseWebPageReact));
        Page.IframePageReact = IframePageReact;
        var IframePageStates = (function (_super) {
            __extends(IframePageStates, _super);
            function IframePageStates() {
                _super.apply(this, arguments);
            }
            return IframePageStates;
        }(basewedPage.Web.BaseWebPageStates));
        Page.IframePageStates = IframePageStates;
        var IframePageAction = (function (_super) {
            __extends(IframePageAction, _super);
            function IframePageAction() {
                _super.apply(this, arguments);
            }
            return IframePageAction;
        }(basewedPage.Web.BaseWebPageAction));
        Page.IframePageAction = IframePageAction;
        var IframePageVm = (function (_super) {
            __extends(IframePageVm, _super);
            function IframePageVm() {
                _super.apply(this, arguments);
                this.ReactType = IframePageReact;
            }
            IframePageVm.prototype.Reset = function (p1, p2, p3) {
                _super.prototype.Reset.call(this, p1, p2, p3);
                this.Url = p1;
            };
            return IframePageVm;
        }(basewedPage.Web.BaseWebPageVm));
        Page.IframePageVm = IframePageVm;
        var IframePageProps = (function (_super) {
            __extends(IframePageProps, _super);
            function IframePageProps() {
                _super.apply(this, arguments);
            }
            return IframePageProps;
        }(basewedPage.Web.BaseWebPageProps));
        Page.IframePageProps = IframePageProps;
        iocFile.Core.Ioc.Current().RegisterType("IFRAME", basewedPage.Web.BaseWebPageVm, IframePageVm);
    })(Page = exports.Page || (exports.Page = {}));
});
