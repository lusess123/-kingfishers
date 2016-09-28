var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../../01core/0Dom", "react", "./../../../../../01core/Url", "./../../../../../05tool/EditSpan"], function (require, exports, domFile, React, urlFile, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var User;
    (function (User) {
        var UserRoleHeadReact = (function (_super) {
            __extends(UserRoleHeadReact, _super);
            function UserRoleHeadReact() {
                _super.apply(this, arguments);
                this.EspanVMIndex = 0;
            }
            UserRoleHeadReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {className: this.props.Vm.thClass, style: this.props.Vm.thstyle}, React.createElement("i", {className: "acsPointer fa fa-caret-" + (this.props.Vm.IsUserBodyHide ? "up " : "down "), onClick: function () { _this.fun_MenuUserBodyHide(); }}), React.createElement("span", null, "用户  /  角色 "), React.createElement("span", null, React.createElement("i", {className: "fa fa-plus-circle acsPointer", onClick: function () { _this.addRole(); }}), React.createElement("strong", null, "添加角色")), React.createElement("span", null, React.createElement("i", {className: "fa fa-th-large acsPointer"}), React.createElement("strong", null, "导入角色"))), this.props.Vm.RoleData.map(function (a) {
                    debugger;
                    return React.createElement("th", {className: a.ActionType == "delete" ? "acs-delete" : (a.FID ? "" : "acs-new-col")}, React.createElement(ESpan, {children: null, Vm: _this.Em(a.RoleName)}), React.createElement("span", {className: "acsEditSpanV"}, a.RoleSign), React.createElement("i", {className: "fa fa-times acsPointer" + (a.ActionType == "delete" ? " fa-reply" : " acsPointer"), onClick: function () { _this.delRole(a); }}));
                })));
            };
            UserRoleHeadReact.prototype.Em = function (content, changeEvent, config) {
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
            UserRoleHeadReact.prototype.addUserFromPage = function (a) {
            };
            UserRoleHeadReact.prototype.addRole = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewUserRolePage$", true);
            };
            UserRoleHeadReact.prototype.delRole = function (a) {
                if (!a.ActionType) {
                    a.ActionType = "delete";
                }
                else if (a.ActionType == "add") {
                    for (var i = 0; i < this.props.Vm.RoleData.length; i++) {
                        if (this.props.Vm.RoleData[i].RoleName == a.RoleName) {
                            this.props.Vm.RoleData.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (a.ActionType == "delete") {
                    a.ActionType = "";
                }
                this.props.Vm.forceUpdate("");
            };
            UserRoleHeadReact.prototype.fun_MenuUserBodyHide = function () {
                this.props.Vm.IsUserBodyHide = !this.props.Vm.IsUserBodyHide;
                this.props.Vm.forceUpdate("");
            };
            UserRoleHeadReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserRoleHeadReact;
        }(domCore.DomReact));
        User.UserRoleHeadReact = UserRoleHeadReact;
    })(User = exports.User || (exports.User = {}));
});
