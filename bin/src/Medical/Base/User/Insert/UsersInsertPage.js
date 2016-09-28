var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UsersInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var UsersInsertPage;
    (function (UsersInsertPage) {
        var UsersInsertPageAction = (function (_super) {
            __extends(UsersInsertPageAction, _super);
            function UsersInsertPageAction() {
                _super.apply(this, arguments);
            }
            return UsersInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UsersInsertPage.UsersInsertPageAction = UsersInsertPageAction;
        var UsersInsertPageReact = (function (_super) {
            __extends(UsersInsertPageReact, _super);
            function UsersInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new UsersInsertPageStates();
            }
            UsersInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            UsersInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return UsersInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UsersInsertPage.UsersInsertPageReact = UsersInsertPageReact;
        var UsersInsertPageVm = (function (_super) {
            __extends(UsersInsertPageVm, _super);
            function UsersInsertPageVm(config) {
                _super.call(this);
                this.ReactType = UsersInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增用户";
                var insertRow = new insertRowFile.UsersInsertRowDom.UsersInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            UsersInsertPageVm.prototype.init = function (config) {
            };
            UsersInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Users/AddUsers", {
                        user: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$userlistpage$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            UsersInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return UsersInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UsersInsertPage.UsersInsertPageVm = UsersInsertPageVm;
        var UsersInsertPageStates = (function (_super) {
            __extends(UsersInsertPageStates, _super);
            function UsersInsertPageStates() {
                _super.apply(this, arguments);
            }
            return UsersInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UsersInsertPage.UsersInsertPageStates = UsersInsertPageStates;
        var UsersInsertPageProps = (function (_super) {
            __extends(UsersInsertPageProps, _super);
            function UsersInsertPageProps() {
                _super.apply(this, arguments);
            }
            return UsersInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UsersInsertPage.UsersInsertPageProps = UsersInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("USERSINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, UsersInsertPageVm);
    })(UsersInsertPage = exports.UsersInsertPage || (exports.UsersInsertPage = {}));
});
