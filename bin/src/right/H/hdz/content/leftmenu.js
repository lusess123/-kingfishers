var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/ALink", "./../../../../05tool/tree", "./shortCut"], function (require, exports, domFile, React, alinkFile, treeFile, shortcutFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var shortcutVm = shortcutFile.shortcut.shortcutVm;
    var leftMenu;
    (function (leftMenu) {
        var leftMenuAction = (function (_super) {
            __extends(leftMenuAction, _super);
            function leftMenuAction() {
                _super.apply(this, arguments);
            }
            return leftMenuAction;
        }(domCore.DomAction));
        leftMenu.leftMenuAction = leftMenuAction;
        var leftMenuReact = (function (_super) {
            __extends(leftMenuReact, _super);
            function leftMenuReact() {
                _super.apply(this, arguments);
                this.state = new leftMenuStates();
            }
            leftMenuReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "left-menu left "}, React.createElement("div", {className: (this.props.Vm.IsLeftMenuShow ? "" : "hide ")}, React.createElement("div", {className: "pro-name"}, React.createElement("img", {src: "../lib/akCss/images/apply/limits.png"}), React.createElement("strong", null, "权限管理")), this.props.Vm.MenuObj.intoDom()), React.createElement("div", {className: "hide-for-xxlarge hide-for-xlarge hide-for-large hide-for-medium"}, React.createElement("div", null, React.createElement("strong", {className: "acsPointer", onClick: function () { _this.fun_MenuTitleClick(); }}, "权限管理")), React.createElement("ul", {className: "menu clearfix " + (this.props.Vm.IsMenuShow ? "hide" : "is-open")}, React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: "active" }), href: "$FEED$", children: null}, "基础机构管理")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "自定义菜单管理")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "图标信息")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "日志信息")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "产品管理")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "系统控制单元配置")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "用户管理")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "基础菜单")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "", children: null}, "角色管理")))));
            };
            leftMenuReact.prototype.fun_MenuTitleClick = function () {
                this.props.Vm.IsMenuShow = !this.props.Vm.IsMenuShow;
                this.forceUpdate();
            };
            leftMenuReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return leftMenuReact;
        }(domCore.DomReact));
        leftMenu.leftMenuReact = leftMenuReact;
        var leftMenuVm = (function (_super) {
            __extends(leftMenuVm, _super);
            function leftMenuVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = leftMenuReact;
                this.ShortCutObj = new shortcutVm();
                this.IsMenuShow = false;
                this.IsLeftMenuShow = false;
                if (config) {
                    this.ShortCutObj.UniId = config.UniId;
                }
                this.listenAppEvent("_shortcut", this.ShortCutObj.UniId, function (rowIndex) {
                    _this.IsLeftMenuShow = true;
                    _this.forceUpdate("");
                });
                //菜单
                this.MenuObj = new treeFile.ui.TreeVm({ StyleName: "East" });
                this.MenuObj.initTreeVm({
                    CODE_VALUE: "0", CODE_TEXT: "根",
                    Children: [
                        {
                            CODE_VALUE: "key1", CODE_TEXT: "自定义菜单管理"
                        },
                        {
                            CODE_VALUE: "key2", CODE_TEXT: "图标信息"
                        },
                        {
                            CODE_VALUE: "key3", CODE_TEXT: "日志信息"
                        },
                        {
                            CODE_VALUE: "key4", CODE_TEXT: "产品管理"
                        },
                        {
                            CODE_VALUE: "key5", CODE_TEXT: "系统控制单元配置"
                        },
                        {
                            CODE_VALUE: "key6", CODE_TEXT: "用户管理"
                        },
                        {
                            CODE_VALUE: "key7", CODE_TEXT: "基础菜单"
                        },
                        {
                            CODE_VALUE: "key8", CODE_TEXT: "菜单同意设置"
                        },
                        {
                            CODE_VALUE: "key9", CODE_TEXT: "基础机构管理"
                        },
                        {
                            CODE_VALUE: "key10", CODE_TEXT: "角色管理",
                            Children: [
                                { CODE_VALUE: "$menu$", CODE_TEXT: "自定义菜单管理" },
                                { CODE_VALUE: "$menu$", CODE_TEXT: "图标信息" },
                            ]
                        }
                    ]
                });
            }
            return leftMenuVm;
        }(domCore.DomVm));
        leftMenu.leftMenuVm = leftMenuVm;
        var leftMenuStates = (function (_super) {
            __extends(leftMenuStates, _super);
            function leftMenuStates() {
                _super.apply(this, arguments);
            }
            return leftMenuStates;
        }(domCore.DomStates));
        leftMenu.leftMenuStates = leftMenuStates;
        var leftMenuProps = (function (_super) {
            __extends(leftMenuProps, _super);
            function leftMenuProps() {
                _super.apply(this, arguments);
            }
            return leftMenuProps;
        }(domCore.DomProps));
        leftMenu.leftMenuProps = leftMenuProps;
    })(leftMenu = exports.leftMenu || (exports.leftMenu = {}));
});
