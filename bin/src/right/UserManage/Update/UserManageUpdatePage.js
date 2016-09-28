var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./UserRoleDom", "./../Data"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, userRoleDomFile, usermanageDataFile) {
    "use strict";
    var UserManageUpdatePage;
    (function (UserManageUpdatePage) {
        var UserManageUpdatePageAction = (function (_super) {
            __extends(UserManageUpdatePageAction, _super);
            function UserManageUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return UserManageUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManageUpdatePage.UserManageUpdatePageAction = UserManageUpdatePageAction;
        var UserManageUpdatePageReact = (function (_super) {
            __extends(UserManageUpdatePageReact, _super);
            function UserManageUpdatePageReact() {
                _super.apply(this, arguments);
            }
            UserManageUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.userManagerRowList.map(function (l) {
                    return l.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            UserManageUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return UserManageUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserManageUpdatePage.UserManageUpdatePageReact = UserManageUpdatePageReact;
        var UserManageUpdatePageVm = (function (_super) {
            __extends(UserManageUpdatePageVm, _super);
            //在这里初始化的时候 将请求发送过去 然后数据赋值到控件里面的数据
            function UserManageUpdatePageVm() {
                _super.call(this);
                this.ReactType = UserManageUpdatePageReact;
                this.userManagerRowList = [];
                this.isload = true;
                this.Title = "编辑用户管理信息";
                //要将请求发送出去
            }
            UserManageUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/user/getUser", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.userManagerRowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new userRoleDomFile.UserRoleDom.UserRoleDomVm();
                            _row.master.Data = r;
                            _row.master.Data.CreaterName = $(r.CreaterName).text();
                            _row.Index = index;
                            if (r.RoleNames) {
                                _row.RoleList = r.RoleNames;
                            }
                            _row.FControlUnitID = r.FControlUnitID;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            _this.userManagerRowList.push(_row);
                            _row.initData();
                        });
                        callback();
                    }
                });
            };
            UserManageUpdatePageVm.prototype.submit = function () {
                var postData = [];
                this.userManagerRowList.forEach(function (row) {
                    var userManagerData = row.master.Data;
                    // var userroledata : usermanageDataFile.UserManager.userroleData[]=[];
                    userManagerData.UserID = row.master.UserID.dataValueGet(); //用户的字段
                    userManagerData.NickName = row.master.UserNickName.vmDataValueGet();
                    userManagerData.UserName = row.master.UserUserName.vmDataValueGet();
                    userManagerData.Area = row.master.Area.vmDataValueGet();
                    userManagerData.UserKindId = row.master.UserKind.vmDataValueGet();
                    userManagerData.IsActive = row.master.isActive.dataValueGet() == "true" ? true : false;
                    userManagerData.Remark = row.master.Remark.vmDataValueGet(); //MEID
                    userManagerData.MEID = row.master.MEID.dataValueGet(); //MEID
                    userManagerData.FControlUnitID = row.master.FControlUnitID.vmDataValueGet();
                    //角色
                    userManagerData.userRoles = [];
                    row.RoleUserList.map(function (r) {
                        if (r.ActionType == "remove" || r.ActionType == "add" || r.changeValue != r.originalValue) {
                            var data = new usermanageDataFile.UserManager.userroleData;
                            data.ActionType = r.ActionType;
                            data.changeValue = r.Role.dataValueGet();
                            data.originalValue = r.originalValue;
                            userManagerData.userRoles.push(data);
                        }
                    });
                    postData.push(userManagerData);
                });
                var userManagerData = JSON.stringify(postData);
                urlFile.Core.AkPost("/RightCloud/User/updateuser", {
                    users: userManagerData
                }, function (a) {
                    if (a.Content == "ok") {
                        var _list = a.Data;
                        var _strs = _list.join(",");
                        urlFile.Core.AkUrl.Current().openUrl("$UserManagerPage$" + _strs + "$", true);
                        urlFile.Core.AkUrl.Current().openUrl("$UserManagerPage$" + _strs + "$", false);
                        utilFile.Core.Util.Noty("更新成功!");
                    }
                    else {
                        utilFile.Core.Util.Noty("数据更新失败");
                    }
                });
            };
            return UserManageUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserManageUpdatePage.UserManageUpdatePageVm = UserManageUpdatePageVm;
        var UserManageUpdatePageStates = (function (_super) {
            __extends(UserManageUpdatePageStates, _super);
            function UserManageUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return UserManageUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManageUpdatePage.UserManageUpdatePageStates = UserManageUpdatePageStates;
        var UserManageUpdatePageProps = (function (_super) {
            __extends(UserManageUpdatePageProps, _super);
            function UserManageUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return UserManageUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserManageUpdatePage.UserManageUpdatePageProps = UserManageUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("UserManageUpdate", basewedPageFile.Web.BaseWebPageVm, UserManageUpdatePageVm);
    })(UserManageUpdatePage = exports.UserManageUpdatePage || (exports.UserManageUpdatePage = {}));
});
