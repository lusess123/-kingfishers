var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var UserDocumentCenterMer = (function (_super) {
        __extends(UserDocumentCenterMer, _super);
        function UserDocumentCenterMer() {
            _super.apply(this, arguments);
            this.AkName = "UserDocumentCenterMer";
            this.UserId = null;
            this.pid = null;
            this.Xml = "Module/SNS/DocumentCenter/Public/SNS_ALLDocuments.xml";
        }
        UserDocumentCenterMer.prototype.getFilePathM = function (option, callback) {
            $.AKjs.getJSON("/SNS/DocumentCenter/GetPublicFilePath", option, callback);
        };
        UserDocumentCenterMer.prototype.getModuleXmlPageData = function (callBack) {
            var _ds = {};
            var _dt = _ds["View_SNS_ALLDocuments_Search"] = [];
            var _row = { UserID: this.UserId, PID: this.pid };
            _dt.push(_row);
            var postData = { xml: this.Xml, ds: $.toJSON(_ds), pageStyle: "List" };
            $.AKjs.getJSON("/module/module", postData, callBack);
        };
        return UserDocumentCenterMer;
    }(baseMerFile.AkBaseModel));
    exports.UserDocumentCenterMer = UserDocumentCenterMer;
});
