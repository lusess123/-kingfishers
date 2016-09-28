var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./AnomalyDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var AnomalyDetailPage;
    (function (AnomalyDetailPage) {
        var AnomalyDetailPageAction = (function (_super) {
            __extends(AnomalyDetailPageAction, _super);
            function AnomalyDetailPageAction() {
                _super.apply(this, arguments);
            }
            return AnomalyDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AnomalyDetailPage.AnomalyDetailPageAction = AnomalyDetailPageAction;
        var AnomalyDetailPageReact = (function (_super) {
            __extends(AnomalyDetailPageReact, _super);
            function AnomalyDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyDetailPageStates();
            }
            AnomalyDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return AnomalyDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AnomalyDetailPage.AnomalyDetailPageReact = AnomalyDetailPageReact;
        var AnomalyDetailPageVm = (function (_super) {
            __extends(AnomalyDetailPageVm, _super);
            function AnomalyDetailPageVm(config) {
                _super.call(this);
                this.ReactType = AnomalyDetailPageReact;
                this.RowList = [];
                this.Title = "异常详细信息";
                if (config) {
                    this.init(config);
                }
            }
            AnomalyDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.AnomalyDetailRowDom.AnomalyDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            AnomalyDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Anomaly/FetchAnomalyDetailList", { fids: this.Param1 }, function (a) {
                    if (a && a.Data) {
                        var rowConfigList = [];
                        a.Data.map(function (data, index) {
                            var masterData = data;
                            var masterConfig = { RowData: masterData };
                            var detailConfigList = [];
                            var detailListData = data.ItemList;
                            rowConfigList.push({ MasterConfig: masterConfig, DetailListData: detailListData });
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
            return AnomalyDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AnomalyDetailPage.AnomalyDetailPageVm = AnomalyDetailPageVm;
        var AnomalyDetailPageStates = (function (_super) {
            __extends(AnomalyDetailPageStates, _super);
            function AnomalyDetailPageStates() {
                _super.apply(this, arguments);
            }
            return AnomalyDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AnomalyDetailPage.AnomalyDetailPageStates = AnomalyDetailPageStates;
        var AnomalyDetailPageProps = (function (_super) {
            __extends(AnomalyDetailPageProps, _super);
            function AnomalyDetailPageProps() {
                _super.apply(this, arguments);
            }
            return AnomalyDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AnomalyDetailPage.AnomalyDetailPageProps = AnomalyDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ANOMALYDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, AnomalyDetailPageVm);
    })(AnomalyDetailPage = exports.AnomalyDetailPage || (exports.AnomalyDetailPage = {}));
});
