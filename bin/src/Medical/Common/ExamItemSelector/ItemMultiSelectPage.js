var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, urlFile, basewedPageFile, React) {
    "use strict";
    //import itemListPage = require("./../../base/anomaly/list/anomalylistpage");
    var ItemMultiSelectPage;
    (function (ItemMultiSelectPage) {
        var ItemMultiSelectPageAction = (function (_super) {
            __extends(ItemMultiSelectPageAction, _super);
            function ItemMultiSelectPageAction() {
                _super.apply(this, arguments);
            }
            return ItemMultiSelectPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ItemMultiSelectPage.ItemMultiSelectPageAction = ItemMultiSelectPageAction;
        var ItemMultiSelectPageReact = (function (_super) {
            __extends(ItemMultiSelectPageReact, _super);
            function ItemMultiSelectPageReact() {
                _super.apply(this, arguments);
                this.state = new ItemMultiSelectPageStates();
            }
            ItemMultiSelectPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "选择体检项"), React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left"}, this.props.Vm.ListPageObj.intoDom())), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary"}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary"}, "保存")));
            };
            return ItemMultiSelectPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ItemMultiSelectPage.ItemMultiSelectPageReact = ItemMultiSelectPageReact;
        var ItemMultiSelectPageVm = (function (_super) {
            __extends(ItemMultiSelectPageVm, _super);
            // public ListPageObj: itemListPage.AnomalyListPage.AnomalyListPageVm;
            function ItemMultiSelectPageVm(config) {
                _super.call(this);
                this.ReactType = ItemMultiSelectPageReact;
                if (config && config.UniId) {
                    this.UniId = config.UniId;
                }
            }
            ItemMultiSelectPageVm.prototype.init = function (config) {
            };
            ItemMultiSelectPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "ExamItemListData.json" }, (a) => {
                //    var pageConfig: itemListPage.ExamItemSelectorListPage.IExamItemSelectorListPageConfig =
                //        {
                //            PagerListData: a,
                //            UniId: this.UniId 
                //        };
                //    this.ListPageObj = new itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm(pageConfig);
                //    if (callback) {
                //        callback();
                //    }
                //});
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            return ItemMultiSelectPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ItemMultiSelectPage.ItemMultiSelectPageVm = ItemMultiSelectPageVm;
        var ItemMultiSelectPageStates = (function (_super) {
            __extends(ItemMultiSelectPageStates, _super);
            function ItemMultiSelectPageStates() {
                _super.apply(this, arguments);
            }
            return ItemMultiSelectPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ItemMultiSelectPage.ItemMultiSelectPageStates = ItemMultiSelectPageStates;
        var ItemMultiSelectPageProps = (function (_super) {
            __extends(ItemMultiSelectPageProps, _super);
            function ItemMultiSelectPageProps() {
                _super.apply(this, arguments);
            }
            return ItemMultiSelectPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ItemMultiSelectPage.ItemMultiSelectPageProps = ItemMultiSelectPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ItemMultiSelectPAGE", basewedPageFile.Web.BaseWebPageVm, ItemMultiSelectPageVm);
    })(ItemMultiSelectPage = exports.ItemMultiSelectPage || (exports.ItemMultiSelectPage = {}));
});
