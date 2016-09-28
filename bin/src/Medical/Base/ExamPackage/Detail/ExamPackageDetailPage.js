var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamPackageDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var ExamPackageDetailPage;
    (function (ExamPackageDetailPage) {
        var ExamPackageDetailPageAction = (function (_super) {
            __extends(ExamPackageDetailPageAction, _super);
            function ExamPackageDetailPageAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPackageDetailPage.ExamPackageDetailPageAction = ExamPackageDetailPageAction;
        var ExamPackageDetailPageReact = (function (_super) {
            __extends(ExamPackageDetailPageReact, _super);
            function ExamPackageDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageDetailPageStates();
            }
            ExamPackageDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return ExamPackageDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamPackageDetailPage.ExamPackageDetailPageReact = ExamPackageDetailPageReact;
        var ExamPackageDetailPageVm = (function (_super) {
            __extends(ExamPackageDetailPageVm, _super);
            function ExamPackageDetailPageVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageDetailPageReact;
                this.RowList = [];
                this.Title = "体检套餐详细信息";
                if (config) {
                    this.init(config);
                }
            }
            ExamPackageDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.ExamPackageDetailRowDom.ExamPackageDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ExamPackageDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamPackage/FetchExamPackageDetailList", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            var detailConfigList = [];
                            var detailListData = data.DetailListData;
                            detailListData.map(function (detail, index) {
                                var detailConfig = { RowData: detail };
                                detailConfigList.push(detailConfig);
                            });
                            rowConfigList.push({ MasterConfig: masterConfig, DetailRowConfigList: detailConfigList });
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
            return ExamPackageDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamPackageDetailPage.ExamPackageDetailPageVm = ExamPackageDetailPageVm;
        var ExamPackageDetailPageStates = (function (_super) {
            __extends(ExamPackageDetailPageStates, _super);
            function ExamPackageDetailPageStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPackageDetailPage.ExamPackageDetailPageStates = ExamPackageDetailPageStates;
        var ExamPackageDetailPageProps = (function (_super) {
            __extends(ExamPackageDetailPageProps, _super);
            function ExamPackageDetailPageProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamPackageDetailPage.ExamPackageDetailPageProps = ExamPackageDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamPackageDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPackageDetailPageVm);
    })(ExamPackageDetailPage = exports.ExamPackageDetailPage || (exports.ExamPackageDetailPage = {}));
});
