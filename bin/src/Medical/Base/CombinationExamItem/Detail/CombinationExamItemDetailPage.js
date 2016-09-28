var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./CombinationExamItemDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var CombinationExamItemDetailPage;
    (function (CombinationExamItemDetailPage) {
        var CombinationExamItemDetailPageAction = (function (_super) {
            __extends(CombinationExamItemDetailPageAction, _super);
            function CombinationExamItemDetailPageAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemDetailPage.CombinationExamItemDetailPageAction = CombinationExamItemDetailPageAction;
        var CombinationExamItemDetailPageReact = (function (_super) {
            __extends(CombinationExamItemDetailPageReact, _super);
            function CombinationExamItemDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemDetailPageStates();
            }
            CombinationExamItemDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-modals-panel"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return CombinationExamItemDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CombinationExamItemDetailPage.CombinationExamItemDetailPageReact = CombinationExamItemDetailPageReact;
        var CombinationExamItemDetailPageVm = (function (_super) {
            __extends(CombinationExamItemDetailPageVm, _super);
            function CombinationExamItemDetailPageVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemDetailPageReact;
                this.RowList = [];
                this.Title = "体检套餐详细信息";
                if (config) {
                    this.init(config);
                }
            }
            CombinationExamItemDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            CombinationExamItemDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "CombinationExamItemListData.json" }, function (a) {
                    if (a) {
                        var rowConfigList = [];
                        var data1 = a.ListData;
                        data1.map(function (data, index) {
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
            return CombinationExamItemDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CombinationExamItemDetailPage.CombinationExamItemDetailPageVm = CombinationExamItemDetailPageVm;
        var CombinationExamItemDetailPageStates = (function (_super) {
            __extends(CombinationExamItemDetailPageStates, _super);
            function CombinationExamItemDetailPageStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemDetailPage.CombinationExamItemDetailPageStates = CombinationExamItemDetailPageStates;
        var CombinationExamItemDetailPageProps = (function (_super) {
            __extends(CombinationExamItemDetailPageProps, _super);
            function CombinationExamItemDetailPageProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CombinationExamItemDetailPage.CombinationExamItemDetailPageProps = CombinationExamItemDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemDetailPageVm);
    })(CombinationExamItemDetailPage = exports.CombinationExamItemDetailPage || (exports.CombinationExamItemDetailPage = {}));
});
