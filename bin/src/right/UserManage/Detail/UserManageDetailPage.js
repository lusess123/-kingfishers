var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RoleDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, rowDomFile) {
    "use strict";
    var UserManageDetailPage;
    (function (UserManageDetailPage) {
        var UserManageDetailPageAction = (function (_super) {
            __extends(UserManageDetailPageAction, _super);
            function UserManageDetailPageAction() {
                _super.apply(this, arguments);
            }
            return UserManageDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManageDetailPage.UserManageDetailPageAction = UserManageDetailPageAction;
        var UserManageDetailPageReact = (function (_super) {
            __extends(UserManageDetailPageReact, _super);
            function UserManageDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new UserManageDetailPageStates();
            }
            UserManageDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return UserManageDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserManageDetailPage.UserManageDetailPageReact = UserManageDetailPageReact;
        var UserManageDetailPageVm = (function (_super) {
            __extends(UserManageDetailPageVm, _super);
            function UserManageDetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = UserManageDetailPageReact;
                this.RowList = [];
                this.Title = "用户信息";
            }
            UserManageDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/user/getUser", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new rowDomFile.Row.RowVm();
                            _row.MasterDomObj.Data = r;
                            _row.RoleList = r.RoleNames;
                            _row.Index = index;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            _this.RowList.push(_row);
                        });
                        callback();
                    }
                });
            };
            return UserManageDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserManageDetailPage.UserManageDetailPageVm = UserManageDetailPageVm;
        var UserManageDetailPageStates = (function (_super) {
            __extends(UserManageDetailPageStates, _super);
            function UserManageDetailPageStates() {
                _super.apply(this, arguments);
            }
            return UserManageDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManageDetailPage.UserManageDetailPageStates = UserManageDetailPageStates;
        var UserManageDetailPageProps = (function (_super) {
            __extends(UserManageDetailPageProps, _super);
            function UserManageDetailPageProps() {
                _super.apply(this, arguments);
            }
            return UserManageDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserManageDetailPage.UserManageDetailPageProps = UserManageDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("usermanagedetail", basewedPageFile.Web.BaseWebPageVm, UserManageDetailPageVm);
    })(UserManageDetailPage = exports.UserManageDetailPage || (exports.UserManageDetailPage = {}));
});
