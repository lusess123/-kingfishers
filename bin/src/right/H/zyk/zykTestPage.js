var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./../../../05tool/XScroll"], function (require, exports, React, iocFile, basewedPageFile, xscrollFile) {
    "use strict";
    var zykTestPage;
    (function (zykTestPage) {
        var zykTestPageAction = (function (_super) {
            __extends(zykTestPageAction, _super);
            function zykTestPageAction() {
                _super.apply(this, arguments);
            }
            return zykTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        zykTestPage.zykTestPageAction = zykTestPageAction;
        var zykTestPageReact = (function (_super) {
            __extends(zykTestPageReact, _super);
            function zykTestPageReact() {
                _super.apply(this, arguments);
                this.state = new zykTestPageStates();
            }
            zykTestPageReact.prototype.fGetItem = function () {
                return React.createElement("div", {className: "large-4 small-6 columns"}, React.createElement("img", {src: "http://placehold.it/1000x1000&amp;text=Thumbnail"}), React.createElement("div", {className: "panel"}, React.createElement("h5", null, "Item Name"), React.createElement("h6", {className: "subheader"}, "$000.00")));
            };
            zykTestPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.XScrollObj.intoDom());
            };
            return zykTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        zykTestPage.zykTestPageReact = zykTestPageReact;
        var zykTestPageVm = (function (_super) {
            __extends(zykTestPageVm, _super);
            function zykTestPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = zykTestPageReact;
                this.XScrollObj = new xscrollFile.XScroll.XScrollVm({
                    FunSetInnerContent: function () {
                        return _this.setInner();
                    }
                });
            }
            zykTestPageVm.prototype.setInner = function () {
                var _list = [];
                for (var i = 0; i < 300; i++) {
                    _list.push(i);
                }
                return [
                    React.createElement("ul", {className: "acsWhiteSpace secondary button-group "}, _list.map(function (h, i) {
                        return React.createElement("li", {className: "acsPointer  button"}, React.createElement("a", null, "菜单" + i.toString(), " "));
                    }))];
            };
            return zykTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        zykTestPage.zykTestPageVm = zykTestPageVm;
        var zykTestPageStates = (function (_super) {
            __extends(zykTestPageStates, _super);
            function zykTestPageStates() {
                _super.apply(this, arguments);
            }
            return zykTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        zykTestPage.zykTestPageStates = zykTestPageStates;
        var zykTestPageProps = (function (_super) {
            __extends(zykTestPageProps, _super);
            function zykTestPageProps() {
                _super.apply(this, arguments);
            }
            return zykTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        zykTestPage.zykTestPageProps = zykTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ZYKTESTPAGE", basewedPageFile.Web.BaseWebPageVm, zykTestPageVm);
    })(zykTestPage = exports.zykTestPage || (exports.zykTestPage = {}));
});
