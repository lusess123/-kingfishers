var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DeptConclusionTplDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var DeptConclusionTplDetailPage;
    (function (DeptConclusionTplDetailPage) {
        var DeptConclusionTplDetailPageAction = (function (_super) {
            __extends(DeptConclusionTplDetailPageAction, _super);
            function DeptConclusionTplDetailPageAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DeptConclusionTplDetailPage.DeptConclusionTplDetailPageAction = DeptConclusionTplDetailPageAction;
        var DeptConclusionTplDetailPageReact = (function (_super) {
            __extends(DeptConclusionTplDetailPageReact, _super);
            function DeptConclusionTplDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplDetailPageStates();
            }
            DeptConclusionTplDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return DeptConclusionTplDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DeptConclusionTplDetailPage.DeptConclusionTplDetailPageReact = DeptConclusionTplDetailPageReact;
        var DeptConclusionTplDetailPageVm = (function (_super) {
            __extends(DeptConclusionTplDetailPageVm, _super);
            function DeptConclusionTplDetailPageVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplDetailPageReact;
                this.RowList = [];
                this.Title = "科室小结模板信息";
                if (config) {
                    this.init(config);
                }
            }
            DeptConclusionTplDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.DeptConclusionTplDetailRowDom.DeptConclusionTplDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            DeptConclusionTplDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/FetchTemplateDetailList", { fids: this.Param1 }, function (a) {
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
            return DeptConclusionTplDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DeptConclusionTplDetailPage.DeptConclusionTplDetailPageVm = DeptConclusionTplDetailPageVm;
        var DeptConclusionTplDetailPageStates = (function (_super) {
            __extends(DeptConclusionTplDetailPageStates, _super);
            function DeptConclusionTplDetailPageStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DeptConclusionTplDetailPage.DeptConclusionTplDetailPageStates = DeptConclusionTplDetailPageStates;
        var DeptConclusionTplDetailPageProps = (function (_super) {
            __extends(DeptConclusionTplDetailPageProps, _super);
            function DeptConclusionTplDetailPageProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DeptConclusionTplDetailPage.DeptConclusionTplDetailPageProps = DeptConclusionTplDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplDetailPageVm);
    })(DeptConclusionTplDetailPage = exports.DeptConclusionTplDetailPage || (exports.DeptConclusionTplDetailPage = {}));
});
