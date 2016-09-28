var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var DefaultMer = (function (_super) {
        __extends(DefaultMer, _super);
        function DefaultMer() {
            _super.apply(this, arguments);
            this.Xml = "";
            this.PageStyle = "";
            this.Ds = null;
            this.Param = null;
            this.OpenFunAfterInit = null;
        }
        DefaultMer.prototype.formartPageState = function (pagestyle, param) {
            //-----------nn--
            var pageState = {};
            pageState.ds = {};
            if (pagestyle && param) {
                pagestyle = pagestyle.toUpperCase();
                try {
                    param = $.parseJSON(window["Base64"].decode(param));
                }
                catch (arr) {
                    param = { keys: param };
                }
                if (param.keys) {
                    var keys = param.keys.split(",");
                    pageState.ds["_KEY"] = [];
                    for (var i = 0; i < keys.length; i++) {
                        pageState.ds["_KEY"].push({ "KeyValue": keys[i] });
                    }
                }
                if (param.OpenFunAfterInit) {
                    this.OpenFunAfterInit = param.OpenFunAfterInit;
                }
                if (param.additionData) {
                    pageState.additionData = param.additionData;
                }
                switch (pagestyle) {
                    case "INSERT":
                        break;
                    case "UPDATE":
                    case "DETAIL":
                        break;
                    default:
                        if (param.tablename && (param.navi || param.search)) {
                            pageState.ds[param.tablename + "_SEARCH"] = [$.extend({}, param.navi, param.search)];
                        }
                        if (param && param.page) {
                            pageState.ds["PAGER"] = [param.page];
                        }
                        if (param && param.formType) {
                            pageState.formType = param.formType;
                        }
                        break;
                }
            }
            return pageState;
        };
        ;
        DefaultMer.prototype.getModuleXmlPageData = function (callBack) {
            var paramObj = this.formartPageState(this.PageStyle, this.Param);
            var ds = {};
            if (paramObj && paramObj.ds) {
                ds = paramObj.ds;
            }
            this.Ds = ds;
            var postData = $.extend({}, {
                xml: this.Xml,
                ds: $.toJSON(this.Ds),
                pageStyle: this.PageStyle
            }, paramObj.additionData);
            $.AKjs.getJSON("/module/module", postData, callBack);
        };
        return DefaultMer;
    }(baseMerFile.AkBaseModel));
    exports.DefaultMer = DefaultMer;
});
