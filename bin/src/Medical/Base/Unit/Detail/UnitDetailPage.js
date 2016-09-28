var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UnitDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var UnitDetailPage;
    (function (UnitDetailPage) {
        var UnitDetailPageAction = (function (_super) {
            __extends(UnitDetailPageAction, _super);
            function UnitDetailPageAction() {
                _super.apply(this, arguments);
            }
            return UnitDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitDetailPage.UnitDetailPageAction = UnitDetailPageAction;
        var UnitDetailPageReact = (function (_super) {
            __extends(UnitDetailPageReact, _super);
            function UnitDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new UnitDetailPageStates();
            }
            UnitDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return UnitDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UnitDetailPage.UnitDetailPageReact = UnitDetailPageReact;
        var UnitDetailPageVm = (function (_super) {
            __extends(UnitDetailPageVm, _super);
            function UnitDetailPageVm(config) {
                _super.call(this);
                this.ReactType = UnitDetailPageReact;
                this.RowList = [];
                this.Title = "单位详细信息";
                if (config) {
                    this.init(config);
                }
            }
            UnitDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.UnitDetailRowDom.UnitDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            UnitDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Unit/FetchUnitsList", { fids: this.Param1 }, function (a) {
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
            return UnitDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UnitDetailPage.UnitDetailPageVm = UnitDetailPageVm;
        var UnitDetailPageStates = (function (_super) {
            __extends(UnitDetailPageStates, _super);
            function UnitDetailPageStates() {
                _super.apply(this, arguments);
            }
            return UnitDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitDetailPage.UnitDetailPageStates = UnitDetailPageStates;
        var UnitDetailPageProps = (function (_super) {
            __extends(UnitDetailPageProps, _super);
            function UnitDetailPageProps() {
                _super.apply(this, arguments);
            }
            return UnitDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UnitDetailPage.UnitDetailPageProps = UnitDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UnitDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, UnitDetailPageVm);
    })(UnitDetailPage = exports.UnitDetailPage || (exports.UnitDetailPage = {}));
});
