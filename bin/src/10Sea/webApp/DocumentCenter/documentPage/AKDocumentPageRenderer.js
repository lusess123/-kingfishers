var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseRenderer", "./../../../../01core/Util"], function (require, exports, rerFile, utilFile) {
    "use strict";
    var AKDocumentPageRenderer = (function (_super) {
        __extends(AKDocumentPageRenderer, _super);
        function AKDocumentPageRenderer() {
            _super.apply(this, arguments);
            this.Option = null;
            this.ALLDocumentsFormObj = null;
            this.$TextSearchDiv = null;
            this.setCustomSearchData = function () {
                var _this = this;
                return function (ds) {
                    var _dt = ds["CUSTOM_SEARCH"] = [];
                    var _row = { TEXT: null };
                    _row["TEXT"] = $.trim(_this.$TextSearchDiv.find("input").val());
                    _dt.push(_row);
                    return ds;
                };
            };
        }
        AKDocumentPageRenderer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        AKDocumentPageRenderer.prototype.initR = function () {
            this.$TextSearchDiv = $("<div class='ACT-SEARCH clear'><div class='ACT-BODY navbar-form navbar-right pd0-left'><div class='search-box ACT-SEARCH-TEXT' role='search'><input class='ACT-SEARCH-BOX' type='text' placeholder='搜索...'><button class='ACT-SEARCH-BTN'><i class=' icon-search'></i></button></div></div></div>");
            this.getC().getWithinPageC(this.Option);
        };
        //public initialize(config) {
        //    this.Option = config;
        ////me.superclass.initialize.call(this, config);
        //}
        //public constructor(config) {
        //    this.Option = config;
        //    super(config);
        //}
        AKDocumentPageRenderer.prototype.creategetWithinPageR = function (res) {
            var _this = this;
            res.FunAfterInit = function (page) {
                _this.$JObj.find(".formTypeBtnBar").append(_this.$TextSearchDiv);
                _this.ALLDocumentsFormObj = page.FormObjs["View_SNS_ALLDocuments"];
                _this["Data"] = _this.ALLDocumentsFormObj.Data;
                _this.ALLDocumentsFormObj.SetCustomSearchDataFun = _this.setCustomSearchData();
                page.AfterSearchCustomFun = _this.afterSearchFun();
                _this.bindSearchEvent();
                var _app = $.AKjs.AppGet();
                _app.R.togglePageNavi();
            };
            _this.$JObj["Ataw" + this.Option.pageStyle + "Page"](res);
            var mainObj = this.$JObj.AtawControl();
            if (_this.Option.paramObj.afterPageFun) {
                var afterPageFun = new Function(_this.Option.paramObj.afterPageFun);
                afterPageFun()(mainObj);
            }
        };
        AKDocumentPageRenderer.prototype.bindSearchEvent = function () {
            var _this = this;
            _this.$TextSearchDiv.find(".ACT-SEARCH-BTN").unbind("click").bind("click", function () {
                var searchedata = $.trim(_this.$TextSearchDiv.find("input").val());
                if (searchedata == "") {
                    _this.ALLDocumentsFormObj.Form.IsSearchRow = false;
                }
                else {
                    _this.ALLDocumentsFormObj.Form.IsSearchRow = true;
                }
                _this.ALLDocumentsFormObj.searchDataList(1);
            });
        };
        AKDocumentPageRenderer.prototype.afterSearchFun = function () {
            var _this = this;
            return function () {
                _this["Data"] = _this.ALLDocumentsFormObj.Data;
            };
        };
        ;
        return AKDocumentPageRenderer;
    }(rerFile.AkBaseRenderer));
    exports.AKDocumentPageRenderer = AKDocumentPageRenderer;
});
