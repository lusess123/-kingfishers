var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamItemInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var ExamItemInsertPage;
    (function (ExamItemInsertPage) {
        var ExamItemInsertPageAction = (function (_super) {
            __extends(ExamItemInsertPageAction, _super);
            function ExamItemInsertPageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemInsertPage.ExamItemInsertPageAction = ExamItemInsertPageAction;
        var ExamItemInsertPageReact = (function (_super) {
            __extends(ExamItemInsertPageReact, _super);
            function ExamItemInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemInsertPageStates();
            }
            ExamItemInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ExamItemInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ExamItemInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemInsertPage.ExamItemInsertPageReact = ExamItemInsertPageReact;
        var ExamItemInsertPageVm = (function (_super) {
            __extends(ExamItemInsertPageVm, _super);
            function ExamItemInsertPageVm(config) {
                _super.call(this);
                this.ReactType = ExamItemInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增体检项目";
                var insertRow = new insertRowFile.ExamItemInsertRowDom.ExamItemInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            ExamItemInsertPageVm.prototype.init = function (config) {
            };
            ExamItemInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            ExamItemInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/ExamItem/addExamItem", {
                        exam: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$examitemlistpage$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return ExamItemInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemInsertPage.ExamItemInsertPageVm = ExamItemInsertPageVm;
        var ExamItemInsertPageStates = (function (_super) {
            __extends(ExamItemInsertPageStates, _super);
            function ExamItemInsertPageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemInsertPage.ExamItemInsertPageStates = ExamItemInsertPageStates;
        var ExamItemInsertPageProps = (function (_super) {
            __extends(ExamItemInsertPageProps, _super);
            function ExamItemInsertPageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemInsertPage.ExamItemInsertPageProps = ExamItemInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EXAMITEMINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemInsertPageVm);
    })(ExamItemInsertPage = exports.ExamItemInsertPage || (exports.ExamItemInsertPage = {}));
});
