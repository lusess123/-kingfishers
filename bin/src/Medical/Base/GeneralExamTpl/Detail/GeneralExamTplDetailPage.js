var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./GeneralExamTplDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var GeneralExamTplDetailPage;
    (function (GeneralExamTplDetailPage) {
        var GeneralExamTplDetailPageAction = (function (_super) {
            __extends(GeneralExamTplDetailPageAction, _super);
            function GeneralExamTplDetailPageAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GeneralExamTplDetailPage.GeneralExamTplDetailPageAction = GeneralExamTplDetailPageAction;
        var GeneralExamTplDetailPageReact = (function (_super) {
            __extends(GeneralExamTplDetailPageReact, _super);
            function GeneralExamTplDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplDetailPageStates();
            }
            GeneralExamTplDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return GeneralExamTplDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GeneralExamTplDetailPage.GeneralExamTplDetailPageReact = GeneralExamTplDetailPageReact;
        var GeneralExamTplDetailPageVm = (function (_super) {
            __extends(GeneralExamTplDetailPageVm, _super);
            function GeneralExamTplDetailPageVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplDetailPageReact;
                this.RowList = [];
                this.Title = "科室小结模板信息";
                if (config) {
                    this.init(config);
                }
            }
            GeneralExamTplDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            GeneralExamTplDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/FetchTemplateDetailList", { fids: this.Param1 }, function (a) {
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
            return GeneralExamTplDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GeneralExamTplDetailPage.GeneralExamTplDetailPageVm = GeneralExamTplDetailPageVm;
        var GeneralExamTplDetailPageStates = (function (_super) {
            __extends(GeneralExamTplDetailPageStates, _super);
            function GeneralExamTplDetailPageStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GeneralExamTplDetailPage.GeneralExamTplDetailPageStates = GeneralExamTplDetailPageStates;
        var GeneralExamTplDetailPageProps = (function (_super) {
            __extends(GeneralExamTplDetailPageProps, _super);
            function GeneralExamTplDetailPageProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GeneralExamTplDetailPage.GeneralExamTplDetailPageProps = GeneralExamTplDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplDetailPageVm);
    })(GeneralExamTplDetailPage = exports.GeneralExamTplDetailPage || (exports.GeneralExamTplDetailPage = {}));
});
