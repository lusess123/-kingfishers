var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamItemCategoryInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var ExamItemCategoryInsertPage;
    (function (ExamItemCategoryInsertPage) {
        var ExamItemCategoryInsertPageAction = (function (_super) {
            __extends(ExamItemCategoryInsertPageAction, _super);
            function ExamItemCategoryInsertPageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryInsertPage.ExamItemCategoryInsertPageAction = ExamItemCategoryInsertPageAction;
        var ExamItemCategoryInsertPageReact = (function (_super) {
            __extends(ExamItemCategoryInsertPageReact, _super);
            function ExamItemCategoryInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryInsertPageStates();
            }
            ExamItemCategoryInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ExamItemCategoryInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ExamItemCategoryInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemCategoryInsertPage.ExamItemCategoryInsertPageReact = ExamItemCategoryInsertPageReact;
        var ExamItemCategoryInsertPageVm = (function (_super) {
            __extends(ExamItemCategoryInsertPageVm, _super);
            function ExamItemCategoryInsertPageVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增体检项目分类";
                var insertRow = new insertRowFile.ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            ExamItemCategoryInsertPageVm.prototype.init = function (config) {
            };
            ExamItemCategoryInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/addExamItemCategory", {
                        examcate: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$EXAMITEMCATEGORYLISTPAGE$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            ExamItemCategoryInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return ExamItemCategoryInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemCategoryInsertPage.ExamItemCategoryInsertPageVm = ExamItemCategoryInsertPageVm;
        var ExamItemCategoryInsertPageStates = (function (_super) {
            __extends(ExamItemCategoryInsertPageStates, _super);
            function ExamItemCategoryInsertPageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryInsertPage.ExamItemCategoryInsertPageStates = ExamItemCategoryInsertPageStates;
        var ExamItemCategoryInsertPageProps = (function (_super) {
            __extends(ExamItemCategoryInsertPageProps, _super);
            function ExamItemCategoryInsertPageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemCategoryInsertPage.ExamItemCategoryInsertPageProps = ExamItemCategoryInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamItemCategoryInsertPage", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryInsertPageVm);
    })(ExamItemCategoryInsertPage = exports.ExamItemCategoryInsertPage || (exports.ExamItemCategoryInsertPage = {}));
});
