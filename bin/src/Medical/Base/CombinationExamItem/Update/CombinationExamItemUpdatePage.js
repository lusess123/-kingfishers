var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./CombinationExamItemUpdateRowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, updateRowFile) {
    "use strict";
    var CombinationExamItemUpdatePage;
    (function (CombinationExamItemUpdatePage) {
        var CombinationExamItemUpdatePageAction = (function (_super) {
            __extends(CombinationExamItemUpdatePageAction, _super);
            function CombinationExamItemUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemUpdatePage.CombinationExamItemUpdatePageAction = CombinationExamItemUpdatePageAction;
        var CombinationExamItemUpdatePageReact = (function (_super) {
            __extends(CombinationExamItemUpdatePageReact, _super);
            function CombinationExamItemUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemUpdatePageStates();
            }
            CombinationExamItemUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acs-modals-panel"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acsModalList"}, this.props.Vm.RowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "acsTextC"}, React.createElement("span", {className: "button tiny", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            CombinationExamItemUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return CombinationExamItemUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CombinationExamItemUpdatePage.CombinationExamItemUpdatePageReact = CombinationExamItemUpdatePageReact;
        var CombinationExamItemUpdatePageVm = (function (_super) {
            __extends(CombinationExamItemUpdatePageVm, _super);
            function CombinationExamItemUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemUpdatePageReact;
                this.RowList = [];
                this.Title = "编辑体检套餐";
                if (config) {
                    this.init(config);
                }
            }
            CombinationExamItemUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.RowConfigList.forEach(function (row, index) {
                    var _row = new updateRowFile.CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomVm(row);
                    _row.Index = index;
                    _this.RowList.push(_row);
                });
            };
            CombinationExamItemUpdatePageVm.prototype.loadPage = function (callback) {
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
            CombinationExamItemUpdatePageVm.prototype.submit = function () {
            };
            return CombinationExamItemUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CombinationExamItemUpdatePage.CombinationExamItemUpdatePageVm = CombinationExamItemUpdatePageVm;
        var CombinationExamItemUpdatePageStates = (function (_super) {
            __extends(CombinationExamItemUpdatePageStates, _super);
            function CombinationExamItemUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemUpdatePage.CombinationExamItemUpdatePageStates = CombinationExamItemUpdatePageStates;
        var CombinationExamItemUpdatePageProps = (function (_super) {
            __extends(CombinationExamItemUpdatePageProps, _super);
            function CombinationExamItemUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CombinationExamItemUpdatePage.CombinationExamItemUpdatePageProps = CombinationExamItemUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemUpdatePageVm);
    })(CombinationExamItemUpdatePage = exports.CombinationExamItemUpdatePage || (exports.CombinationExamItemUpdatePage = {}));
});
