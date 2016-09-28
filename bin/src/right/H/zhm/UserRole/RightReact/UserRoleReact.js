var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../../01core/0Dom", "react", "./../../../../../01core/Url", "./../../../../../05tool/EditSpan"], function (require, exports, domFile, React, urlFile, EditSpanFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var User;
    (function (User) {
        var UserRoleReact = (function (_super) {
            __extends(UserRoleReact, _super);
            function UserRoleReact() {
                _super.apply(this, arguments);
            }
            UserRoleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tbody", {className: (this.props.Vm.IsUserBodyHide ? "hide" : "")}, this.props.Vm.UserData.map(function (a) {
                    _this.props.Vm._arry = [];
                    return _this.healthContent(a, _this.props.Vm._arry);
                }), React.createElement("tr", null, React.createElement("td", {className: this.props.Vm.thClass, style: this.props.Vm.thstyle}, React.createElement("span", {className: "acsRelative"}, React.createElement("i", {className: "fa fa-plus-circle acsPointer", onClick: function () { _this.addUser(); }}), React.createElement("strong", null, "添加用户")), React.createElement("span", {className: "acsRelative"}, React.createElement("i", {className: "fa fa-th-large acsPointer"}), React.createElement("strong", null, " 导入用户 ")))));
            };
            UserRoleReact.prototype.healthContent = function (a, _arry) {
                var _this = this;
                _arry.push(React.createElement("tr", null, React.createElement("td", {className: "item-1" + (a.ActionType == "delete" ? " acs-delete" : (a.FID ? "" : " acs-new-col")) + this.props.Vm.thClass, style: this.props.Vm.thstyle}, React.createElement(ESpan, {Vm: new ESpanVm({ Content: a.UserName }), children: null}), React.createElement("span", {className: "acsEditSpanV"}, a.UserSign), React.createElement("i", {className: "fa fa-times acsPointer", onClick: function () { _this.deleteUser(a); }})), this.props.Vm.RoleData.map(function (b) {
                    return React.createElement("td", {className: b.ActionType == "delete" || a.ActionType == "delete" ? "acs-delete" : (b.FID && a.FID ? "" : "acs-new-row")}, React.createElement("input", {type: "checkbox", onClick: function () { return _this.EditUser(a, b); }}));
                })));
                return _arry;
            };
            UserRoleReact.prototype.deleteUser = function (a) {
                if (!a.ActionType) {
                    a.ActionType = "delete";
                }
                else if (a.ActionType == "add") {
                    for (var i = 0; i < this.props.Vm.UserData.length; i++) {
                        if (this.props.Vm.UserData[i].UserName == a.UserName) {
                            this.props.Vm.UserData.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (a.ActionType == "delete") {
                    a.ActionType = "";
                }
                this.props.Vm.forceUpdate("");
            };
            UserRoleReact.prototype.addUser = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewUserPage$", true);
            };
            UserRoleReact.prototype.EditUser = function (a, b) {
            };
            UserRoleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserRoleReact;
        }(domCore.DomReact));
        User.UserRoleReact = UserRoleReact;
    })(User = exports.User || (exports.User = {}));
});
