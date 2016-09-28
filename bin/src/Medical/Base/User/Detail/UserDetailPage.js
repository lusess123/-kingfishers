var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UserDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
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
        var XXXReact = (function (_super) {
            __extends(XXXReact, _super);
            function XXXReact() {
                _super.apply(this, arguments);
                this.state = new UserDetailPageStates();
            }
            XXXReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return XXXReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserDetailPage.XXXReact = XXXReact;
        var UserDetailPageVm = (function (_super) {
            __extends(UserDetailPageVm, _super);
            function UserDetailPageVm(config) {
                _super.call(this);
                this.ReactType = XXXReact;
                this.RowList = [];
                this.Title = "用户详细信息";
                if (config) {
                    this.init(config);
                }
            }
            UserDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.UserDetailRowDom.UserDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            UserDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Users/FetchUsers", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            rowConfigList.push({ MasterConfig: masterConfig });
                        });
                        var pageConfig = {
                            RowConfigList: rowConfigList
                        };
                        _this.init(pageConfig);
                    }
                    if (callback) {
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
        iocFile.Core.Ioc.Current().RegisterType("USERDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, UserDetailPageVm);
    })(UserDetailPage = exports.UserDetailPage || (exports.UserDetailPage = {}));
});
