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
        var MenuUserHeadReact = (function (_super) {
            __extends(MenuUserHeadReact, _super);
            function MenuUserHeadReact() {
                _super.apply(this, arguments);
                this.EspanVMIndex = 0;
            }
            MenuUserHeadReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {className: this.props.Vm.thclass, style: this.props.Vm.thstyle}, React.createElement("i", {className: "Hu-pointer fa fa-caret-" + (this.props.Vm.IsMenuUserBodyHide ? "up " : "down "), onClick: function () { _this.fun_MenuUserBodyHide(); }}), React.createElement("span", null, "用户  /  角色 "), React.createElement("span", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddRole(); }}), React.createElement("strong", null, "添加角色")), React.createElement("span", null, React.createElement("i", {className: "fa fa-th-large Hu-pointer"}), React.createElement("strong", null, "导入角色"))), this.props.Vm.RoleData.map(function (a) {
                    return React.createElement("th", {className: a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" ? "Hs-update" : ""))}, React.createElement(ESpan, {children: null, Vm: _this.Em(a.RoleName, function (c, b) {
                        _this.props.Vm.UpdateRole(a, c.Content);
                    })}), React.createElement("span", {className: "Hc-edit-spanV"}, a.RoleSign), React.createElement("i", {className: "fa fa-times hu-pointert" + (a.ActionType == "Del" ? " Hs-delete" : (a.ActionType == "Update" ? "Hs-update" : "")), onClick: function () { _this.props.Vm.fun_delRole(a); }}));
                })));
            };
            MenuUserHeadReact.prototype.Em = function (content, changeEvent, config) {
                this.EspanVMIndex++;
                if (config) {
                    config.Content = content;
                    if (changeEvent) {
                        config.ChangeEvent = changeEvent;
                    }
                }
                else {
                    config = { Content: content, ChangeEvent: changeEvent };
                }
                return this.props.Vm.getESpan("name" + this.EspanVMIndex, config);
            };
            MenuUserHeadReact.prototype.addUserFromPage = function (a) {
            };
            //protected pInstall(): void {
            //    this.props.Vm.getEmit("React").addListener("forceUpdate_MenuRole", (callback) => {
            //        this.forceUpdate(callback);
            //    });
            //    super.pInstall();
            //}
            MenuUserHeadReact.prototype.pInstall = function () {
                var _this = this;
                this.props.Vm.getEmit("React").addListener("forceUpdate_RoleData", function (callback) {
                    _this.forceUpdate(callback);
                });
                _super.prototype.pInstall.call(this);
            };
            MenuUserHeadReact.prototype.fun_AddRole = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewUserRolePage$", true);
            };
            MenuUserHeadReact.prototype.delRole = function (a) {
                if (!a.ActionType) {
                    a.ActionType = "Del";
                }
                else if (a.ActionType == "Add") {
                    for (var i = 0; i < this.props.Vm.UserRoleData.length; i++) {
                        if (this.props.Vm.UserRoleData[i].RoleName == a.RoleName) {
                            this.props.Vm.UserRoleData.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (a.ActionType == "Del") {
                    a.ActionType = "";
                }
                this.props.Vm.forceUpdate("");
            };
            MenuUserHeadReact.prototype.fun_MenuUserBodyHide = function () {
                this.props.Vm.IsMenuUserBodyHide = !this.props.Vm.IsMenuUserBodyHide;
                this.props.Vm.forceUpdate("");
            };
            MenuUserHeadReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuUserHeadReact;
        }(domCore.DomReact));
        Menu.MenuUserHeadReact = MenuUserHeadReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
