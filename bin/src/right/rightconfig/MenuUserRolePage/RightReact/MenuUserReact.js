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
        var MenuUserReact = (function (_super) {
            __extends(MenuUserReact, _super);
            function MenuUserReact() {
                _super.apply(this, arguments);
            }
            MenuUserReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tbody", {className: (this.props.Vm.IsMenuUserBodyHide ? "hide" : "")}, this.props.Vm.UserData.length > 0 ? this.initData() : "", React.createElement("tr", null, React.createElement("td", {className: this.props.Vm.thclass, style: this.props.Vm.thstyle}, React.createElement("span", {className: "acsRelative"}, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.addUser(); }}), React.createElement("strong", null, "添加用户")), React.createElement("span", {className: "acsRelative"}, React.createElement("i", {className: "fa fa-th-large Hu-pointer"}), React.createElement("strong", null, " 导入用户 ")))));
            };
            MenuUserReact.prototype.initData = function () {
                var _this = this;
                var arry = [];
                this.props.Vm.UserData.map(function (a, index) {
                    _this.props.Vm._arry = [];
                    var trElement = _this.healthContent(a, _this.props.Vm._arry, index);
                    //return trElement
                    arry.push(trElement);
                });
                return arry;
            };
            //new ESpanVm({
            //        Content: a.UserName, ChangeEvent: (vm, ischage) => {
            //                        this.props.Vm.UpdateUser(a, vm.Content)
            //}
            //                }) 
            MenuUserReact.prototype.healthContent = function (a, _arry, index) {
                var _this = this;
                _arry.push(React.createElement("tr", null, React.createElement("td", {className: "Hu-item-1" + (a.ActionType == "Del" ? " Hs-delete" : (a.ActionType == "Add" ? " Hs-new-col" : (a.ActionType == "Update" ? " Hs-update" : ""))) + this.props.Vm.thclass, style: this.props.Vm.thstyle}, React.createElement(ESpan, {Vm: this.props.Vm.UserEspeList[index], children: null}), React.createElement("span", {className: "Hc-edit-spanH"}, a.UserSign), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.deleteUser(a); }})), this.props.Vm.RoleData.map(function (b) {
                    return React.createElement("td", {className: _this.isCheck(b.FID, a.FID) ? "Hs-td-checked" : (b.ActionType == "Del" || a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" || b.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" || b.ActionType == "Update" ? "Hs-update" : "")))}, React.createElement("input", {type: "checkbox", checked: _this.isCheck(b.FID, a.FID), onClick: function () { return _this.EditUser(a, b); }, onChange: function (c) { _this.changeCheck(b, a, c); }}));
                })));
                return _arry;
            };
            MenuUserReact.prototype.isCheck = function (Role, User) {
                return this.props.Vm.fun_isCheckUser(Role, User);
            };
            MenuUserReact.prototype.deleteUser = function (a) {
                debugger;
                if (!a.ActionType) {
                    a.ActionType = "Del";
                }
                else if (a.ActionType == "Add") {
                    for (var i = 0; i < this.props.Vm.UserData.length; i++) {
                        if (this.props.Vm.UserData[i].UserName == a.UserName) {
                            this.props.Vm.UserData.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (a.ActionType == "Del") {
                    a.ActionType = "";
                }
                this.props.Vm.forceUpdate("");
            };
            MenuUserReact.prototype.changeCheck = function (Role, User, event) {
                if (Role.ActionType == "Del" || User.ActionType == "Del") {
                    alert("该节点已被删除!");
                }
                else {
                    this.props.Vm.fun_changeRoleUserCheck(Role, User, event);
                }
            };
            //fun_changeRoleUserCheck
            MenuUserReact.prototype.pInstall = function () {
                var _this = this;
                this.props.Vm.getEmit("React").addListener("forceUpdate_MenuUser", function (callback) {
                    _this.forceUpdate(callback);
                });
                _super.prototype.pInstall.call(this);
            };
            MenuUserReact.prototype.addUser = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewUserPage$", true);
            };
            MenuUserReact.prototype.EditUser = function (a, b) {
            };
            MenuUserReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuUserReact;
        }(domCore.DomReact));
        Menu.MenuUserReact = MenuUserReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
