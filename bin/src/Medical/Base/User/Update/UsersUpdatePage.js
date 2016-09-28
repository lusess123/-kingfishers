var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UserUpdateRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var UsersUpdatePage;
    (function (UsersUpdatePage) {
        var UsersUpdatePageAction = (function (_super) {
            __extends(UsersUpdatePageAction, _super);
            function UsersUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return UsersUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UsersUpdatePage.UsersUpdatePageAction = UsersUpdatePageAction;
        var UsersUpdatePageReact = (function (_super) {
            __extends(UsersUpdatePageReact, _super);
            function UsersUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new UsersUpdatePageStates();
            }
            UsersUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            UsersUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return UsersUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UsersUpdatePage.UsersUpdatePageReact = UsersUpdatePageReact;
        var UsersUpdatePageVm = (function (_super) {
            __extends(UsersUpdatePageVm, _super);
            function UsersUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = UsersUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑用户";
                if (config) {
                    this.init(config);
                }
            }
            UsersUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.UserUpdateRowDom.UserUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            UsersUpdatePageVm.prototype.loadPage = function (callback) {
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
            UsersUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            UsersUpdatePageVm.prototype.getData = function () {
                var _ds = [];
                this.RowList.forEach(function (row) {
                    var _o = row.getData();
                    if (!utilFile.Core.Util.IsPure(_o)) {
                        _ds.push(_o);
                    }
                });
                if (_ds.length == 0) {
                    return null;
                }
                return _ds;
            };
            UsersUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        urlFile.Core.AkPost("/MedicalCenter/Users/ModifyUsers", { user: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$UserListPage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$Userdetailpage$" + _strs + "$", true);
                                    });
                                }
                                else {
                                    utilFile.Core.Util.Noty("数据未更新");
                                }
                            }
                            else {
                                utilFile.Core.Util.Noty("数据编辑失败");
                            }
                        });
                    }
                    else {
                        utilFile.Core.Util.Noty("没有可提交的数据");
                    }
                }
            };
            return UsersUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UsersUpdatePage.UsersUpdatePageVm = UsersUpdatePageVm;
        var UsersUpdatePageStates = (function (_super) {
            __extends(UsersUpdatePageStates, _super);
            function UsersUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return UsersUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UsersUpdatePage.UsersUpdatePageStates = UsersUpdatePageStates;
        var UsersUpdatePageProps = (function (_super) {
            __extends(UsersUpdatePageProps, _super);
            function UsersUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return UsersUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UsersUpdatePage.UsersUpdatePageProps = UsersUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("USERINFOSUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, UsersUpdatePageVm);
    })(UsersUpdatePage = exports.UsersUpdatePage || (exports.UsersUpdatePage = {}));
});
