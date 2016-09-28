var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var SystemDocumentCenterMer = (function (_super) {
        __extends(SystemDocumentCenterMer, _super);
        function SystemDocumentCenterMer() {
            _super.apply(this, arguments);
            this.AkName = "SystemDocumentCenterMer";
        }
        SystemDocumentCenterMer.prototype.formartPageState = function (pagestyle, param) {
            var pageState = {};
            pageState.ds = {};
            if (pagestyle && param) {
                pagestyle = pagestyle.toUpperCase();
                param = $.parseJSON(window["Base64"].decode(param));
                if (param.afterPageFun) {
                    pageState.afterPageFun = param.afterPageFun;
                }
                if (param.additionData) {
                    pageState.additionData = param.additionData;
                }
                switch (pagestyle) {
                    case "INSERT":
                        if (param.keys) {
                            var keys = param.keys.split(",");
                            pageState.ds["_KEY"] = [{ "KeyValue": keys[0] }];
                        }
                        break;
                    case "UPDATE":
                    case "DETAIL":
                        if (param.keys) {
                            var keys = param.keys.split(",");
                            pageState.ds["_KEY"] = [];
                            for (var i = 0; i < keys.length; i++) {
                                pageState.ds["_KEY"].push({ "KeyValue": keys[i] });
                            }
                        }
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
        return SystemDocumentCenterMer;
    }(baseMerFile.AkBaseModel));
    exports.SystemDocumentCenterMer = SystemDocumentCenterMer;
});
