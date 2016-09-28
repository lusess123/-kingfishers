var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../01core/Url", "./../../../../05tool/EditSpan"], function (require, exports, domFile, React, urlFile, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var Menu;
    (function (Menu) {
        var MenuRoleHeadReact = (function (_super) {
            __extends(MenuRoleHeadReact, _super);
            function MenuRoleHeadReact() {
                _super.apply(this, arguments);
                this.EspanVMIndex = 0;
            }
            MenuRoleHeadReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {className: this.props.Vm.thclass, style: this.props.Vm.thstyle}, React.createElement("i", {className: "Hu-pointer fa fa-caret-" + (this.props.Vm.IsMenuRoleBodyHide ? "up " : "down "), onClick: function () { _this.fun_MenuRoleBodyHide(); }}), React.createElement("span", null, "菜单 / 角色 "), React.createElement("span", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddRole(); }}), React.createElement("strong", null, "添加角色")), React.createElement("span", null, React.createElement("i", {className: "fa fa-th-large Hu-pointer"}), React.createElement("strong", null, "导入角色"))), this.props.Vm.RoleData.map(function (a) {
                    return React.createElement("th", {className: a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" ? "Hs-update" : ""))}, React.createElement(ESpan, {children: null, Vm: _this.Em(a.RoleName, function (c, b) { _this.props.Vm.UpdateRole(a, c.Content); })}), React.createElement("span", {className: "Hc-edit-spanV"}, a.RoleSign), React.createElement("i", {className: "fa fa-times Hu-pointert" + (a.ActionType == "Del" ? " Hs-delete" : (a.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" ? "Hs-update" : ""))), onClick: function () { _this.props.Vm.fun_delRole(a); }}));
                })));
            };
            MenuRoleHeadReact.prototype.fun_MenuRoleBodyHide = function () {
                this.props.Vm.IsMenuRoleBodyHide = !this.props.Vm.IsMenuRoleBodyHide;
                this.props.Vm.forceUpdate("");
            };
            MenuRoleHeadReact.prototype.fun_AddRole = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winRCNewRolePage$", true);
            };
            MenuRoleHeadReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MenuRoleHeadReact.prototype.addMenuFromPage = function (a) {
            };
            MenuRoleHeadReact.prototype.Em = function (content, changeEvent, config) {
                // this.EspanVMIndex++;
                if (config) {
                    config.Content = content;
                    if (changeEvent) {
                        config.ChangeEvent = changeEvent;
                    }
                }
                else {
                    config = { Content: content, ChangeEvent: changeEvent };
                }
                return this.props.Vm.getESpan("name_" + content, config);
            };
            MenuRoleHeadReact.prototype.submit = function () {
                var _data;
                return _data;
            };
            return MenuRoleHeadReact;
        }(domCore.DomReact));
        Menu.MenuRoleHeadReact = MenuRoleHeadReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
