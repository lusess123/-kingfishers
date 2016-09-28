import rerFile = require("./../../../core/mcrv/AkBaseRenderer");
import cerFile = require("./AKDocumentPageController");
import utilFile = require("./../../../../01core/Util");
export class AKDocumentPageRenderer extends rerFile.AkBaseRenderer {
    public getC(): cerFile.AKDocumentPageController {
        return utilFile.Core.Util.Cast<cerFile.AKDocumentPageController>(this.C);
    }
    
    
    public Option = null;
    public ALLDocumentsFormObj = null;
    public $TextSearchDiv = null;
    public initR() {
    this.$TextSearchDiv = $("<div class='ACT-SEARCH clear'><div class='ACT-BODY navbar-form navbar-right pd0-left'><div class='search-box ACT-SEARCH-TEXT' role='search'><input class='ACT-SEARCH-BOX' type='text' placeholder='搜索...'><button class='ACT-SEARCH-BTN'><i class=' icon-search'></i></button></div></div></div>");
    this.getC().getWithinPageC(this.Option);
    }
    //public initialize(config) {
    //    this.Option = config;
    ////me.superclass.initialize.call(this, config);
    //}
    //public constructor(config) {
    //    this.Option = config;
    //    super(config);
    //}
    public creategetWithinPageR(res) {
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
    }

    public bindSearchEvent () {
        var _this = this;
        _this.$TextSearchDiv.find(".ACT-SEARCH-BTN").unbind("click").bind("click", function () {
            var searchedata = $.trim(_this.$TextSearchDiv.find("input").val());
            if (searchedata == "") {
                _this.ALLDocumentsFormObj.Form.IsSearchRow = false;
            } else {
                _this.ALLDocumentsFormObj.Form.IsSearchRow = true;
            }
            _this.ALLDocumentsFormObj.searchDataList(1);
        });
    }

    public afterSearchFun() {
        var _this = this;
        return function () {
            _this["Data"] = _this.ALLDocumentsFormObj.Data;
        }
    };

    public setCustomSearchData = function () {
        var _this = this;
        return function (ds) {
            var _dt = ds["CUSTOM_SEARCH"] = [];
            var _row = { TEXT: null };
            _row["TEXT"] = $.trim(_this.$TextSearchDiv.find("input").val());
            _dt.push(_row);
            return ds;
        }
    };
}