var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../base/examitem/selector/examitemselectorlistpage"], function (require, exports, iocFile, urlFile, basewedPageFile, React, itemListPage) {
    "use strict";
    //import itemListPage = require("./../../base/anomaly/list/anomalylistpage");
    var ItemSingleSelectPage;
    (function (ItemSingleSelectPage) {
        var ItemSingleSelectPageAction = (function (_super) {
            __extends(ItemSingleSelectPageAction, _super);
            function ItemSingleSelectPageAction() {
                _super.apply(this, arguments);
            }
            return ItemSingleSelectPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ItemSingleSelectPage.ItemSingleSelectPageAction = ItemSingleSelectPageAction;
        var ItemSingleSelectPageReact = (function (_super) {
            __extends(ItemSingleSelectPageReact, _super);
            function ItemSingleSelectPageReact() {
                _super.apply(this, arguments);
                this.state = new ItemSingleSelectPageStates();
            }
            ItemSingleSelectPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "选择体检项"), React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left"}, this.props.Vm.ListPageObj.intoDom())));
            };
            return ItemSingleSelectPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ItemSingleSelectPage.ItemSingleSelectPageReact = ItemSingleSelectPageReact;
        var ItemSingleSelectPageVm = (function (_super) {
            __extends(ItemSingleSelectPageVm, _super);
            // public ListPageObj: itemListPage.AnomalyListPage.AnomalyListPageVm;
            function ItemSingleSelectPageVm(config) {
                _super.call(this);
                this.ReactType = ItemSingleSelectPageReact;
            }
            ItemSingleSelectPageVm.prototype.init = function (config) {
            };
            ItemSingleSelectPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "ExamItemListData.json" }, function (a) {
                    var pageConfig = { PagerListData: a, IsMultiSelect: false };
                    _this.ListPageObj = new itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
                //urlFile.Core.AkPost("/MedicalCenter/Anomaly/SearchAnomalies", {}, (a) => {
                //    var pageConfig: itemListPage.AnomalyListPage.IAnomalyListPageConfig = { PagerListData: a.Data };
                //    this.ListPageObj = new itemListPage.AnomalyListPage.AnomalyListPageVm(pageConfig);
                //    if (callback) {
                //        callback();
                //    }
                //});
            };
            return ItemSingleSelectPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ItemSingleSelectPage.ItemSingleSelectPageVm = ItemSingleSelectPageVm;
        var ItemSingleSelectPageStates = (function (_super) {
            __extends(ItemSingleSelectPageStates, _super);
            function ItemSingleSelectPageStates() {
                _super.apply(this, arguments);
            }
            return ItemSingleSelectPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ItemSingleSelectPage.ItemSingleSelectPageStates = ItemSingleSelectPageStates;
        var ItemSingleSelectPageProps = (function (_super) {
            __extends(ItemSingleSelectPageProps, _super);
            function ItemSingleSelectPageProps() {
                _super.apply(this, arguments);
            }
            return ItemSingleSelectPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ItemSingleSelectPage.ItemSingleSelectPageProps = ItemSingleSelectPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ItemSingleSelectPAGE", basewedPageFile.Web.BaseWebPageVm, ItemSingleSelectPageVm);
    })(ItemSingleSelectPage = exports.ItemSingleSelectPage || (exports.ItemSingleSelectPage = {}));
});
