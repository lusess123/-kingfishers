var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/03selector/selector", "./UserManagerUpdateRow", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, selecotrFile, masterDomFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserRoleDom;
    (function (UserRoleDom) {
        var UserRoleDomAction = (function (_super) {
            __extends(UserRoleDomAction, _super);
            function UserRoleDomAction() {
                _super.apply(this, arguments);
            }
            return UserRoleDomAction;
        }(domCore.DomAction));
        UserRoleDom.UserRoleDomAction = UserRoleDomAction;
        var UserRoleDomReact = (function (_super) {
            __extends(UserRoleDomReact, _super);
            function UserRoleDomReact() {
                _super.apply(this, arguments);
            }
            UserRoleDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            UserRoleDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UserRoleDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.master.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "角色编辑", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsRowFormHide ? " hide" : "")}, React.createElement("div", {className: "content clearfix active "}, this.props.Vm.RoleUserList.map(function (r) {
                    return React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line " + (r.ActionType == "remove" ? " hide" : "")}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "角色：")), React.createElement("div", {className: "pull-left Hu-input"}, r.Role.intoDom()), r.isCheck.intoDom());
                })))), React.createElement("div", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-minus-circle", onClick: function () { _this.fu_RoleListMinus(); }})), React.createElement("a", null, React.createElement("i", {className: "fa fa-plus-circle", onClick: function () { _this.fu_RoleListPlugs(); }})))));
            };
            UserRoleDomReact.prototype.fu_RoleListMinus = function () {
                //删除
                this.props.Vm.fu_RoleListMinus();
            };
            UserRoleDomReact.prototype.fu_RoleListPlugs = function () {
                this.props.Vm.fu_RoleListPlugs();
            };
            return UserRoleDomReact;
        }(domCore.DomReact));
        UserRoleDom.UserRoleDomReact = UserRoleDomReact;
        var UserRoleDomVm = (function (_super) {
            __extends(UserRoleDomVm, _super);
            function UserRoleDomVm() {
                _super.call(this);
                this.ReactType = UserRoleDomReact;
                this.master = new masterDomFile.UserManagerUpdateRow.UserManagerUpdateRowVm();
                this.RoleList = [];
                this.RoleUserList = [];
                this.RoleSelectorList = [];
            }
            UserRoleDomVm.prototype.initData = function () {
                var _this = this;
                this.RoleList.map(function (i) {
                    _this.Role = new UserRoleData;
                    _this.Role.Role = new selecotrFile.ui.SelectorVm;
                    _this.Role.Role.RegName = "RoleCodeTable";
                    var _$this = _this;
                    _this.Role.Role.OnPostDataSetFun = function (ds) {
                        var _rows = ds["DromsTable"] = [];
                        var _id = _$this.FControlUnitID;
                        if (_id == "" || _id == null) {
                            _id = "-1";
                        }
                        var _row = { FControlUnitID: _id };
                        _rows.push(_row);
                        return ds;
                    };
                    _this.Role.Role.dataValueSet(i.RoleID);
                    _this.Role.Role.Text = i.RoleName;
                    _this.Role.isCheck = new singleCheckFile.ui.SingleCheckBoxVm;
                    _this.Role.originalValue = i.RoleID;
                    _this.Role.ActionType = "none";
                    _this.RoleUserList.push(_this.Role);
                });
                this.master.initData();
            };
            UserRoleDomVm.prototype.fu_RoleListMinus = function () {
                this.RoleUserList.map(function (r) {
                    if (r.isCheck.dataValueGet() == "true") {
                        r.ActionType = "remove";
                    }
                });
                this.forceUpdate("");
            };
            UserRoleDomVm.prototype.fu_RoleListPlugs = function () {
                var data = new UserRoleData;
                //增加
                data.Role = new selecotrFile.ui.SelectorVm;
                data.Role.RegName = "RoleCodeTable";
                var _this = this;
                data.Role.OnPostDataSetFun = function (ds) {
                    var _rows = ds["DromsTable"] = [];
                    var _id = _this.FControlUnitID;
                    if (_id == "" || _id == null) {
                        _id = "-1";
                    }
                    var _row = { FControlUnitID: _id };
                    _rows.push(_row);
                    return ds;
                };
                data.isCheck = new singleCheckFile.ui.SingleCheckBoxVm;
                data.ActionType = "add";
                data.originalValue = "";
                this.RoleUserList.push(data);
                this.forceUpdate("");
            };
            return UserRoleDomVm;
        }(domCore.DomVm));
        UserRoleDom.UserRoleDomVm = UserRoleDomVm;
        var UserRoleData = (function () {
            function UserRoleData() {
            }
            return UserRoleData;
        }());
        UserRoleDom.UserRoleData = UserRoleData;
        var UserRoleDomStates = (function (_super) {
            __extends(UserRoleDomStates, _super);
            function UserRoleDomStates() {
                _super.apply(this, arguments);
            }
            return UserRoleDomStates;
        }(domCore.DomStates));
        UserRoleDom.UserRoleDomStates = UserRoleDomStates;
        var UserRoleDomProps = (function (_super) {
            __extends(UserRoleDomProps, _super);
            function UserRoleDomProps() {
                _super.apply(this, arguments);
            }
            return UserRoleDomProps;
        }(domCore.DomProps));
        UserRoleDom.UserRoleDomProps = UserRoleDomProps;
    })(UserRoleDom = exports.UserRoleDom || (exports.UserRoleDom = {}));
});
