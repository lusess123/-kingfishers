var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree"], function (require, exports, React, iocFile, urlFile, basewedPageFile, baseTreeFile) {
    "use strict";
    var UserRightDetailPage;
    (function (UserRightDetailPage) {
        var UserRightDetailPageAction = (function (_super) {
            __extends(UserRightDetailPageAction, _super);
            function UserRightDetailPageAction() {
                _super.apply(this, arguments);
            }
            return UserRightDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserRightDetailPage.UserRightDetailPageAction = UserRightDetailPageAction;
        var UserRightDetailPageReact = (function (_super) {
            __extends(UserRightDetailPageReact, _super);
            function UserRightDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new UserRightDetailPageStates();
            }
            UserRightDetailPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "查看角色权限"), React.createElement("div", null, this.initRightTree()), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.rightPage(); }}, "分配权限")));
            };
            UserRightDetailPageReact.prototype.rightPage = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelrolegrant$" + this.props.Vm.Param1 + "$", true);
            };
            UserRightDetailPageReact.prototype.initRightTree = function () {
                var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm();
                treeVm.Tree.IsMultiSelect = true;
                treeVm.RegName = "RoleTreeCodeTable" + "-" + this.props.Vm.UserRightIds;
                //var newArr = [];
                //this.props.Vm.UserRight.forEach((id) => {
                //    newArr.push("\"" + id + "\"");
                //});
                //treeVm.dataValueSet(newArr.join(","));
                if (this.props.Vm.UserRightIds) {
                    return treeVm.intoDom();
                }
                else {
                    return React.createElement("div", null, "用户无权限");
                }
            };
            ;
            return UserRightDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserRightDetailPage.UserRightDetailPageReact = UserRightDetailPageReact;
        var UserRightDetailPageVm = (function (_super) {
            __extends(UserRightDetailPageVm, _super);
            function UserRightDetailPageVm(config) {
                _super.call(this);
                this.ReactType = UserRightDetailPageReact;
            }
            UserRightDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //改成User
                urlFile.Core.AkPost("/RightCloud/User/GetUserRole", { userid: this.Param1 }, function (a) {
                    _this.UserRightIds = a.Data;
                    alert(_this.UserRightIds);
                    if (callback) {
                        callback();
                    }
                    //urlFile.Core.AkPost("/RightCloud/Role/GetRoleRightsList", { roleid: this.UserRightIds }, (b) => {
                    //    this.UserRight = b.Data;
                    //    alert(this.UserRight);
                    //});
                });
            };
            return UserRightDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserRightDetailPage.UserRightDetailPageVm = UserRightDetailPageVm;
        var UserRightDetailPageStates = (function (_super) {
            __extends(UserRightDetailPageStates, _super);
            function UserRightDetailPageStates() {
                _super.apply(this, arguments);
            }
            return UserRightDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserRightDetailPage.UserRightDetailPageStates = UserRightDetailPageStates;
        var UserRightDetailPageProps = (function (_super) {
            __extends(UserRightDetailPageProps, _super);
            function UserRightDetailPageProps() {
                _super.apply(this, arguments);
            }
            return UserRightDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserRightDetailPage.UserRightDetailPageProps = UserRightDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("USERRIGHTDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, UserRightDetailPageVm);
    })(UserRightDetailPage = exports.UserRightDetailPage || (exports.UserRightDetailPage = {}));
});
