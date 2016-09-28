var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/ALink"], function (require, exports, domFile, React, alinkFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var headListMenu;
    (function (headListMenu) {
        var headListMenuAction = (function (_super) {
            __extends(headListMenuAction, _super);
            function headListMenuAction() {
                _super.apply(this, arguments);
            }
            return headListMenuAction;
        }(domCore.DomAction));
        headListMenu.headListMenuAction = headListMenuAction;
        var headListMenuReact = (function (_super) {
            __extends(headListMenuReact, _super);
            function headListMenuReact() {
                _super.apply(this, arguments);
                this.state = new headListMenuStates();
            }
            headListMenuReact.prototype.pSender = function () {
                return React.createElement("section", {className: "top-bar-section clearfix"}, React.createElement("ul", {className: "left"}, React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$menu$", children: null}, " 基础信息")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$menu$", children: null}, " 权限管理")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$winmenunew$", children: null}, " 新增菜单")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$winFEED$", children: null}, "侧边栏主页")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$winorg$", children: null}, "基础信息侧")), React.createElement("li", {className: "acsPointer"}, React.createElement("a", {className: "more-text"}, "更多", React.createElement("i", {className: "fa fa-caret-down"})), React.createElement("ul", {className: "more-listmenu "}, React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$menu$", children: null}, " 基础信息")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$menu$", children: null}, " 权限管理")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$winmenunew$", children: null}, " 新增菜单")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$winFEED$", children: null}, "侧边栏主页")), React.createElement("li", {className: "acsPointer "}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$winorg$", children: null}, "基础信息侧"))))));
            };
            headListMenuReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return headListMenuReact;
        }(domCore.DomReact));
        headListMenu.headListMenuReact = headListMenuReact;
        var headListMenuVm = (function (_super) {
            __extends(headListMenuVm, _super);
            function headListMenuVm(config) {
                _super.call(this);
                this.ReactType = headListMenuReact;
            }
            return headListMenuVm;
        }(domCore.DomVm));
        headListMenu.headListMenuVm = headListMenuVm;
        var headListMenuStates = (function (_super) {
            __extends(headListMenuStates, _super);
            function headListMenuStates() {
                _super.apply(this, arguments);
            }
            return headListMenuStates;
        }(domCore.DomStates));
        headListMenu.headListMenuStates = headListMenuStates;
        var headListMenuProps = (function (_super) {
            __extends(headListMenuProps, _super);
            function headListMenuProps() {
                _super.apply(this, arguments);
            }
            return headListMenuProps;
        }(domCore.DomProps));
        headListMenu.headListMenuProps = headListMenuProps;
    })(headListMenu = exports.headListMenu || (exports.headListMenu = {}));
});
