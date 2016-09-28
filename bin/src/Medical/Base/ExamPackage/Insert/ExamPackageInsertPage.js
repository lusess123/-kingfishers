var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamPackageInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var ExamPackageInsertPage;
    (function (ExamPackageInsertPage) {
        var ExamPackageInsertPageAction = (function (_super) {
            __extends(ExamPackageInsertPageAction, _super);
            function ExamPackageInsertPageAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPackageInsertPage.ExamPackageInsertPageAction = ExamPackageInsertPageAction;
        var ExamPackageInsertPageReact = (function (_super) {
            __extends(ExamPackageInsertPageReact, _super);
            function ExamPackageInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageInsertPageStates();
            }
            ExamPackageInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ExamPackageInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ExamPackageInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamPackageInsertPage.ExamPackageInsertPageReact = ExamPackageInsertPageReact;
        var ExamPackageInsertPageVm = (function (_super) {
            __extends(ExamPackageInsertPageVm, _super);
            function ExamPackageInsertPageVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增体检套餐";
                var insertRow = new insertRowFile.ExamPackageInsertRowDom.ExamPackageInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            ExamPackageInsertPageVm.prototype.init = function (config) {
            };
            ExamPackageInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var exampackageData = masterRow.RowData;
                exampackageData.DetailListData = [];
                this.InsertRowList[0].DetailRowList.forEach(function (detailRow) {
                    exampackageData.DetailListData.push(detailRow.RowData);
                });
                postData.push(exampackageData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = this.InsertRowList[0].legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/ExamPackage/AddExamPackage", {
                        exampackages: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelexampackagedetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$panelexampackagedetailpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$exampackagelistpage$", true);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            ExamPackageInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return ExamPackageInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamPackageInsertPage.ExamPackageInsertPageVm = ExamPackageInsertPageVm;
        var ExamPackageInsertPageStates = (function (_super) {
            __extends(ExamPackageInsertPageStates, _super);
            function ExamPackageInsertPageStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPackageInsertPage.ExamPackageInsertPageStates = ExamPackageInsertPageStates;
        var ExamPackageInsertPageProps = (function (_super) {
            __extends(ExamPackageInsertPageProps, _super);
            function ExamPackageInsertPageProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamPackageInsertPage.ExamPackageInsertPageProps = ExamPackageInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamPackageINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPackageInsertPageVm);
    })(ExamPackageInsertPage = exports.ExamPackageInsertPage || (exports.ExamPackageInsertPage = {}));
});
