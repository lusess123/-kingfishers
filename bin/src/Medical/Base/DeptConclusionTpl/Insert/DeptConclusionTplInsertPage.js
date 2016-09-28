var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DeptConclusionTplInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var DeptConclusionTplInsertPage;
    (function (DeptConclusionTplInsertPage) {
        var DeptConclusionTplInsertPageAction = (function (_super) {
            __extends(DeptConclusionTplInsertPageAction, _super);
            function DeptConclusionTplInsertPageAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DeptConclusionTplInsertPage.DeptConclusionTplInsertPageAction = DeptConclusionTplInsertPageAction;
        var DeptConclusionTplInsertPageReact = (function (_super) {
            __extends(DeptConclusionTplInsertPageReact, _super);
            function DeptConclusionTplInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplInsertPageStates();
            }
            DeptConclusionTplInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            DeptConclusionTplInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return DeptConclusionTplInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DeptConclusionTplInsertPage.DeptConclusionTplInsertPageReact = DeptConclusionTplInsertPageReact;
        var DeptConclusionTplInsertPageVm = (function (_super) {
            __extends(DeptConclusionTplInsertPageVm, _super);
            function DeptConclusionTplInsertPageVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增模板";
                var insertRow = new insertRowFile.DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            DeptConclusionTplInsertPageVm.prototype.init = function (config) {
            };
            DeptConclusionTplInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            DeptConclusionTplInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var rowData = masterRow.RowData;
                rowData.ItemList = [];
                this.InsertRowList[0].DetailRowList.forEach(function (detailRow) {
                    rowData.ItemList.push(detailRow.RowData);
                });
                postData.push(rowData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = this.InsertRowList[0].legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/AddTemplates", {
                        templates: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelDeptConclusionTpldetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$DeptConclusionTpllistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$DeptConclusionTpllistpage$", true);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return DeptConclusionTplInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DeptConclusionTplInsertPage.DeptConclusionTplInsertPageVm = DeptConclusionTplInsertPageVm;
        var DeptConclusionTplInsertPageStates = (function (_super) {
            __extends(DeptConclusionTplInsertPageStates, _super);
            function DeptConclusionTplInsertPageStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DeptConclusionTplInsertPage.DeptConclusionTplInsertPageStates = DeptConclusionTplInsertPageStates;
        var DeptConclusionTplInsertPageProps = (function (_super) {
            __extends(DeptConclusionTplInsertPageProps, _super);
            function DeptConclusionTplInsertPageProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DeptConclusionTplInsertPage.DeptConclusionTplInsertPageProps = DeptConclusionTplInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplInsertPageVm);
    })(DeptConclusionTplInsertPage = exports.DeptConclusionTplInsertPage || (exports.DeptConclusionTplInsertPage = {}));
});
