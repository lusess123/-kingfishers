var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var RecyleDocumentCenterMer = (function (_super) {
        __extends(RecyleDocumentCenterMer, _super);
        function RecyleDocumentCenterMer() {
            _super.apply(this, arguments);
            this.AkName = "RecyleDocumentCenterMer";
            this.UserId = null;
            this.Xml = "Module/SNS/DocumentCenter/SNS_ALLRECYCLE.xml";
        }
        RecyleDocumentCenterMer.prototype.getModuleXmlPageData = function (callBack) {
            var _ds = {};
            var _dt = _ds["View_SNS_ALLDocumentsDelete_Search"] = [];
            var _row = { PID: "0" };
            _dt.push(_row);
            var postData = { xml: this.Xml, ds: $.toJSON(_ds), pageStyle: "List" };
            $.AKjs.getJSON("/module/module", postData, callBack);
        };
        return RecyleDocumentCenterMer;
    }(baseMerFile.AkBaseModel));
    exports.RecyleDocumentCenterMer = RecyleDocumentCenterMer;
});
