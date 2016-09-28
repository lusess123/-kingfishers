var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ResultCommonInsertRowDom"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, insertRowFile) {
    "use strict";
    var ResultCommonInsertPage;
    (function (ResultCommonInsertPage) {
        var ResultCommonInsertPageAction = (function (_super) {
            __extends(ResultCommonInsertPageAction, _super);
            function ResultCommonInsertPageAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ResultCommonInsertPage.ResultCommonInsertPageAction = ResultCommonInsertPageAction;
        var ResultCommonInsertPageReact = (function (_super) {
            __extends(ResultCommonInsertPageReact, _super);
            function ResultCommonInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonInsertPageStates();
            }
            ResultCommonInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            ResultCommonInsertPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return ResultCommonInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ResultCommonInsertPage.ResultCommonInsertPageReact = ResultCommonInsertPageReact;
        var ResultCommonInsertPageVm = (function (_super) {
            __extends(ResultCommonInsertPageVm, _super);
            function ResultCommonInsertPageVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增常规体检结果";
                var insertRow = new insertRowFile.ResultCommonInsertRowDom.ResultCommonInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            ResultCommonInsertPageVm.prototype.init = function (config) {
            };
            ResultCommonInsertPageVm.prototype.submit = function () {
                var postData = [];
                var masterRow = this.InsertRowList[0].MasterRow;
                var resultcommonData = masterRow.RowData;
                postData.push(resultcommonData);
                var jsonData = JSON.stringify(postData);
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/ResultCommon/AddResultCommons", {
                        resultcommons: jsonData
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelCommonResultdetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$CommonResultlistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$CommonResultlistpage$", false);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            ResultCommonInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return ResultCommonInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ResultCommonInsertPage.ResultCommonInsertPageVm = ResultCommonInsertPageVm;
        var ResultCommonInsertPageStates = (function (_super) {
            __extends(ResultCommonInsertPageStates, _super);
            function ResultCommonInsertPageStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ResultCommonInsertPage.ResultCommonInsertPageStates = ResultCommonInsertPageStates;
        var ResultCommonInsertPageProps = (function (_super) {
            __extends(ResultCommonInsertPageProps, _super);
            function ResultCommonInsertPageProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ResultCommonInsertPage.ResultCommonInsertPageProps = ResultCommonInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CommonResultINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonInsertPageVm);
    })(ResultCommonInsertPage = exports.ResultCommonInsertPage || (exports.ResultCommonInsertPage = {}));
});
