var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamItemDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var ExamItemDetailPage;
    (function (ExamItemDetailPage) {
        var ExamItemDetailPageAction = (function (_super) {
            __extends(ExamItemDetailPageAction, _super);
            function ExamItemDetailPageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemDetailPage.ExamItemDetailPageAction = ExamItemDetailPageAction;
        var ExamItemDetailPageReact = (function (_super) {
            __extends(ExamItemDetailPageReact, _super);
            function ExamItemDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemDetailPageStates();
            }
            ExamItemDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return ExamItemDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemDetailPage.ExamItemDetailPageReact = ExamItemDetailPageReact;
        var ExamItemDetailPageVm = (function (_super) {
            __extends(ExamItemDetailPageVm, _super);
            function ExamItemDetailPageVm(config) {
                _super.call(this);
                this.ReactType = ExamItemDetailPageReact;
                this.RowList = [];
                this.Title = "体检项目详细信息";
                if (config) {
                    this.init(config);
                }
            }
            ExamItemDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.ExamItemDetailRowDom.ExamItemDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ExamItemDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/FetchExamItem", { fids: this.Param1 }, function (a) {
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
            return ExamItemDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemDetailPage.ExamItemDetailPageVm = ExamItemDetailPageVm;
        var ExamItemDetailPageStates = (function (_super) {
            __extends(ExamItemDetailPageStates, _super);
            function ExamItemDetailPageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemDetailPage.ExamItemDetailPageStates = ExamItemDetailPageStates;
        var ExamItemDetailPageProps = (function (_super) {
            __extends(ExamItemDetailPageProps, _super);
            function ExamItemDetailPageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemDetailPage.ExamItemDetailPageProps = ExamItemDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EXAMIREMDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemDetailPageVm);
    })(ExamItemDetailPage = exports.ExamItemDetailPage || (exports.ExamItemDetailPage = {}));
});
