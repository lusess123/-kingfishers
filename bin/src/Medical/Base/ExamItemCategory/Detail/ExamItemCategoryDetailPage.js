var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ExamItemCategoryDetailRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, detailRowFile) {
    "use strict";
    var ExamItemCategoryDetailPage;
    (function (ExamItemCategoryDetailPage) {
        var ExamItemCategoryDetailPageAction = (function (_super) {
            __extends(ExamItemCategoryDetailPageAction, _super);
            function ExamItemCategoryDetailPageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryDetailPage.ExamItemCategoryDetailPageAction = ExamItemCategoryDetailPageAction;
        var ExamItemCategoryDetailPageReact = (function (_super) {
            __extends(ExamItemCategoryDetailPageReact, _super);
            function ExamItemCategoryDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryDetailPageStates();
            }
            ExamItemCategoryDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return ExamItemCategoryDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemCategoryDetailPage.ExamItemCategoryDetailPageReact = ExamItemCategoryDetailPageReact;
        var ExamItemCategoryDetailPageVm = (function (_super) {
            __extends(ExamItemCategoryDetailPageVm, _super);
            function ExamItemCategoryDetailPageVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryDetailPageReact;
                this.RowList = [];
                this.Title = "体检项目分类详细信息";
                if (config) {
                    this.init(config);
                }
            }
            ExamItemCategoryDetailPageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new detailRowFile.ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            ExamItemCategoryDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/FctchExamItemCategory", { fids: this.Param1 }, function (a) {
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
            return ExamItemCategoryDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemCategoryDetailPage.ExamItemCategoryDetailPageVm = ExamItemCategoryDetailPageVm;
        var ExamItemCategoryDetailPageStates = (function (_super) {
            __extends(ExamItemCategoryDetailPageStates, _super);
            function ExamItemCategoryDetailPageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryDetailPage.ExamItemCategoryDetailPageStates = ExamItemCategoryDetailPageStates;
        var ExamItemCategoryDetailPageProps = (function (_super) {
            __extends(ExamItemCategoryDetailPageProps, _super);
            function ExamItemCategoryDetailPageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemCategoryDetailPage.ExamItemCategoryDetailPageProps = ExamItemCategoryDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EXAMITEMCATEGORYDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryDetailPageVm);
    })(ExamItemCategoryDetailPage = exports.ExamItemCategoryDetailPage || (exports.ExamItemCategoryDetailPage = {}));
});
