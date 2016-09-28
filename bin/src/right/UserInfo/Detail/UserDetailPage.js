var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, rowDomFile) {
    "use strict";
    var UserDetailPage;
    (function (UserDetailPage) {
        var UserDetailPageAction = (function (_super) {
            __extends(UserDetailPageAction, _super);
            function UserDetailPageAction() {
                _super.apply(this, arguments);
            }
            return UserDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserDetailPage.UserDetailPageAction = UserDetailPageAction;
        var UserDetailPageReact = (function (_super) {
            __extends(UserDetailPageReact, _super);
            function UserDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new UserDetailPageStates();
            }
            UserDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hg-overflow-auto Hc-modals-list"}, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return UserDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserDetailPage.UserDetailPageReact = UserDetailPageReact;
        var UserDetailPageVm = (function (_super) {
            __extends(UserDetailPageVm, _super);
            function UserDetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = UserDetailPageReact;
                this.RowList = [];
                this.Title = "用户详情";
            }
            UserDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/UserDetail/getUserDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    //var _data: userDataFile.Menu.IMenuDetailData[] = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            var _row = new rowDomFile.Row.RowVm();
                            _row.MasterDomObj.Data = r;
                            _row.Index = index;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            _this.RowList.push(_row);
                        });
                        callback();
                    }
                });
            };
            return UserDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserDetailPage.UserDetailPageVm = UserDetailPageVm;
        var UserDetailPageStates = (function (_super) {
            __extends(UserDetailPageStates, _super);
            function UserDetailPageStates() {
                _super.apply(this, arguments);
            }
            return UserDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserDetailPage.UserDetailPageStates = UserDetailPageStates;
        var UserDetailPageProps = (function (_super) {
            __extends(UserDetailPageProps, _super);
            function UserDetailPageProps() {
                _super.apply(this, arguments);
            }
            return UserDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserDetailPage.UserDetailPageProps = UserDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("userdetail", basewedPageFile.Web.BaseWebPageVm, UserDetailPageVm);
    })(UserDetailPage = exports.UserDetailPage || (exports.UserDetailPage = {}));
});
