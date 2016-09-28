var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DepartInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var DepartmentInsertPage;
    (function (DepartmentInsertPage) {
        var DepartmentInsertPageAction = (function (_super) {
            __extends(DepartmentInsertPageAction, _super);
            function DepartmentInsertPageAction() {
                _super.apply(this, arguments);
            }
            return DepartmentInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        DepartmentInsertPage.DepartmentInsertPageAction = DepartmentInsertPageAction;
        var DepartmentInsertPageReact = (function (_super) {
            __extends(DepartmentInsertPageReact, _super);
            function DepartmentInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentInsertPageStates();
            }
            DepartmentInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            DepartmentInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return DepartmentInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DepartmentInsertPage.DepartmentInsertPageReact = DepartmentInsertPageReact;
        var DepartmentInsertPageVm = (function (_super) {
            __extends(DepartmentInsertPageVm, _super);
            function DepartmentInsertPageVm(config) {
                _super.call(this);
                this.ReactType = DepartmentInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增科室";
                var insertRow = new insertRowFile.DepartInsertRowDom.DepartInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            DepartmentInsertPageVm.prototype.init = function (config) { };
            DepartmentInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Department/AddDepartment", {
                        depart: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$DEPARTMENTPAGE$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            DepartmentInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return DepartmentInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DepartmentInsertPage.DepartmentInsertPageVm = DepartmentInsertPageVm;
        var DepartmentInsertPageStates = (function (_super) {
            __extends(DepartmentInsertPageStates, _super);
            function DepartmentInsertPageStates() {
                _super.apply(this, arguments);
            }
            return DepartmentInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentInsertPage.DepartmentInsertPageStates = DepartmentInsertPageStates;
        var DepartmentInsertPagePops = (function (_super) {
            __extends(DepartmentInsertPagePops, _super);
            function DepartmentInsertPagePops() {
                _super.apply(this, arguments);
            }
            return DepartmentInsertPagePops;
        }(basewedPageFile.Web.BaseWebPageProps));
        DepartmentInsertPage.DepartmentInsertPagePops = DepartmentInsertPagePops;
        iocFile.Core.Ioc.Current().RegisterType("DEPARTMENTINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, DepartmentInsertPageVm);
    })(DepartmentInsertPage = exports.DepartmentInsertPage || (exports.DepartmentInsertPage = {}));
});
