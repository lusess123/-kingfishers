var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./../../../02col/03selector/selector"], function (require, exports, React, iocFile, urlFile, basewedPageFile, selecotrFile) {
    "use strict";
    var UserManageBatchRolePage;
    (function (UserManageBatchRolePage) {
        var UserManageBatchRolePageAction = (function (_super) {
            __extends(UserManageBatchRolePageAction, _super);
            function UserManageBatchRolePageAction() {
                _super.apply(this, arguments);
            }
            return UserManageBatchRolePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManageBatchRolePage.UserManageBatchRolePageAction = UserManageBatchRolePageAction;
        var UserManageBatchRolePageReact = (function (_super) {
            __extends(UserManageBatchRolePageReact, _super);
            function UserManageBatchRolePageReact() {
                _super.apply(this, arguments);
                this.state = new UserManageBatchRolePageeStates();
            }
            UserManageBatchRolePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 col-sm-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "角色：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.RoleSelector.intoDom())), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交"))));
            };
            UserManageBatchRolePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.fun_submitBtn(this.props.Vm.RoleSelector.dataValueGet());
            };
            return UserManageBatchRolePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserManageBatchRolePage.UserManageBatchRolePageReact = UserManageBatchRolePageReact;
        var UserManageBatchRolePageVm = (function (_super) {
            __extends(UserManageBatchRolePageVm, _super);
            function UserManageBatchRolePageVm() {
                _super.call(this);
                this.ReactType = UserManageBatchRolePageReact;
                this.Title = "用户角色批量设置";
                this.RoleSelector = new selecotrFile.ui.SelectorVm;
                this.RoleSelector.RegName = "RoleCodeTable";
                this.Param2;
                var fcontrolid = this.FControlUnitID;
                var _this = this;
                this.RoleSelector.OnPostDataSetFun = function (ds) {
                    var _rows = ds["DromsTable"] = [];
                    var _id = _this.FControlUnitID; //这个要靠前台返回
                    if (_id == "" || _id == null) {
                        _id = "-1";
                    }
                    var _row = { FControlUnitID: _id };
                    _rows.push(_row);
                    return ds;
                };
            }
            UserManageBatchRolePageVm.prototype.fun_submitBtn = function (val) {
                urlFile.Core.AkPost("/RightCloud/User/AddUserRoleBA", { fids: this.UserIds, rolid: val }, function (data) {
                    if (data.Content == "ok") {
                        urlFile.Core.AkUrl.Current().openUrl("$winUserManagerPage$", true);
                    }
                });
            };
            UserManageBatchRolePageVm.prototype.loadPage = function (callback) {
                this.UserIds = this.Param1;
                this.FControlUnitID = this.Param2;
                callback();
            };
            return UserManageBatchRolePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserManageBatchRolePage.UserManageBatchRolePageVm = UserManageBatchRolePageVm;
        var UserManageBatchRolePageeStates = (function (_super) {
            __extends(UserManageBatchRolePageeStates, _super);
            function UserManageBatchRolePageeStates() {
                _super.apply(this, arguments);
            }
            return UserManageBatchRolePageeStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManageBatchRolePage.UserManageBatchRolePageeStates = UserManageBatchRolePageeStates;
        var UserManageBatchRolePageProps = (function (_super) {
            __extends(UserManageBatchRolePageProps, _super);
            function UserManageBatchRolePageProps() {
                _super.apply(this, arguments);
            }
            return UserManageBatchRolePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserManageBatchRolePage.UserManageBatchRolePageProps = UserManageBatchRolePageProps;
        iocFile.Core.Ioc.Current().RegisterType("UserManagBatchRole", basewedPageFile.Web.BaseWebPageVm, UserManageBatchRolePageVm);
    })(UserManageBatchRolePage = exports.UserManageBatchRolePage || (exports.UserManageBatchRolePage = {}));
});
