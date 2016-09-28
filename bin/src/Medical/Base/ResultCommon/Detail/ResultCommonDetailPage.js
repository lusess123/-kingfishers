var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ResultCommonDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var ResultCommonDetailPage;
    (function (ResultCommonDetailPage) {
        var ResultCommonDetailPageAction = (function (_super) {
            __extends(ResultCommonDetailPageAction, _super);
            function ResultCommonDetailPageAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ResultCommonDetailPage.ResultCommonDetailPageAction = ResultCommonDetailPageAction;
        var ResultCommonDetailPageReact = (function (_super) {
            __extends(ResultCommonDetailPageReact, _super);
            function ResultCommonDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonDetailPageStates();
            }
            ResultCommonDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return ResultCommonDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ResultCommonDetailPage.ResultCommonDetailPageReact = ResultCommonDetailPageReact;
        var ResultCommonDetailPageVm = (function (_super) {
            __extends(ResultCommonDetailPageVm, _super);
            function ResultCommonDetailPageVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonDetailPageReact;
                this.RowList = [];
                this.Title = "常规体检详细信息";
                if (config) {
                    this.init(config);
                }
            }
            ResultCommonDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.ResultCommonDetailRowDom.ResultCommonDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ResultCommonDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ResultCommon/FetchResultCommonsList", { fids: this.Param1 }, function (a) {
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
            return ResultCommonDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ResultCommonDetailPage.ResultCommonDetailPageVm = ResultCommonDetailPageVm;
        var ResultCommonDetailPageStates = (function (_super) {
            __extends(ResultCommonDetailPageStates, _super);
            function ResultCommonDetailPageStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ResultCommonDetailPage.ResultCommonDetailPageStates = ResultCommonDetailPageStates;
        var ResultCommonDetailPageProps = (function (_super) {
            __extends(ResultCommonDetailPageProps, _super);
            function ResultCommonDetailPageProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ResultCommonDetailPage.ResultCommonDetailPageProps = ResultCommonDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CommonResultDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonDetailPageVm);
    })(ResultCommonDetailPage = exports.ResultCommonDetailPage || (exports.ResultCommonDetailPage = {}));
});
