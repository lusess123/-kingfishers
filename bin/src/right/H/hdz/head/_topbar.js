var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/ALink"], function (require, exports, domFile, React, alinkFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var topbar;
    (function (topbar) {
        var topbarAction = (function (_super) {
            __extends(topbarAction, _super);
            function topbarAction() {
                _super.apply(this, arguments);
            }
            return topbarAction;
        }(domCore.DomAction));
        topbar.topbarAction = topbarAction;
        var topbarReact = (function (_super) {
            __extends(topbarReact, _super);
            function topbarReact() {
                _super.apply(this, arguments);
                this.state = new topbarStates();
            }
            topbarReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "top-bar-section"}, React.createElement("ul", {className: "clearfix left"}, React.createElement("li", {className: "acsPointer active"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "工作平台")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "通讯录")), React.createElement("li", {className: "acsPointer"}, React.createElement("a", {onClick: function () { _this.fun_appCenterClick(); }}, "应用中心"))), React.createElement("ul", {className: "clearfix left"}, React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "车辆管理", React.createElement("img", {src: "../lib/akCss/images/icon-close.png"}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "OA应用平台", React.createElement("img", {src: "../lib/akCss/images/icon-close.png"}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "权限管理", React.createElement("img", {src: "../lib/akCss/images/icon-close.png"})))));
            };
            topbarReact.prototype.fun_appCenterClick = function () {
                this.fun_appCenterClick();
            };
            topbarReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return topbarReact;
        }(domCore.DomReact));
        topbar.topbarReact = topbarReact;
        var topbarVm = (function (_super) {
            __extends(topbarVm, _super);
            function topbarVm(config) {
                _super.call(this);
                this.ReactType = topbarReact;
            }
            topbarVm.prototype.fun_appCenterClick = function () {
                this.emitAppEvent("_topbar", this.UniId);
            };
            return topbarVm;
        }(domCore.DomVm));
        topbar.topbarVm = topbarVm;
        var topbarStates = (function (_super) {
            __extends(topbarStates, _super);
            function topbarStates() {
                _super.apply(this, arguments);
            }
            return topbarStates;
        }(domCore.DomStates));
        topbar.topbarStates = topbarStates;
        var topbarProps = (function (_super) {
            __extends(topbarProps, _super);
            function topbarProps() {
                _super.apply(this, arguments);
            }
            return topbarProps;
        }(domCore.DomProps));
        topbar.topbarProps = topbarProps;
    })(topbar = exports.topbar || (exports.topbar = {}));
});
