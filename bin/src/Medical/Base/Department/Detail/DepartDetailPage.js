var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DepartDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var DepartDetailPage;
    (function (DepartDetailPage) {
        var DepartDetailPageAction = (function (_super) {
            __extends(DepartDetailPageAction, _super);
            function DepartDetailPageAction() {
                _super.apply(this, arguments);
            }
            return DepartDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartDetailPage.DepartDetailPageAction = DepartDetailPageAction;
        var DepartDetailPageReact = (function (_super) {
            __extends(DepartDetailPageReact, _super);
            function DepartDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new DepartDetailPageStates();
            }
            DepartDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return DepartDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DepartDetailPage.DepartDetailPageReact = DepartDetailPageReact;
        var DepartDetailPageVm = (function (_super) {
            __extends(DepartDetailPageVm, _super);
            function DepartDetailPageVm(config) {
                _super.call(this);
                this.ReactType = DepartDetailPageReact;
                this.RowList = [];
                this.Title = "科室详细信息";
                if (config) {
                    this.init(config);
                }
            }
            DepartDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.DepartDetailRowDom.DepartDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            DepartDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Department/FetchDepartmentList", { fids: this.Param1 }, function (a) {
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
            return DepartDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DepartDetailPage.DepartDetailPageVm = DepartDetailPageVm;
        var DepartDetailPageStates = (function (_super) {
            __extends(DepartDetailPageStates, _super);
            function DepartDetailPageStates() {
                _super.apply(this, arguments);
            }
            return DepartDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartDetailPage.DepartDetailPageStates = DepartDetailPageStates;
        var DepartDetailPageProps = (function (_super) {
            __extends(DepartDetailPageProps, _super);
            function DepartDetailPageProps() {
                _super.apply(this, arguments);
            }
            return DepartDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DepartDetailPage.DepartDetailPageProps = DepartDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPARTDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, DepartDetailPageVm);
    })(DepartDetailPage = exports.DepartDetailPage || (exports.DepartDetailPage = {}));
});
