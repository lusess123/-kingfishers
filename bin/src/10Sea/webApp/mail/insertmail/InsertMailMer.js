var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkBaseModel"], function (require, exports, model) {
    "use strict";
    var InsertMailMer = (function (_super) {
        __extends(InsertMailMer, _super);
        function InsertMailMer() {
            _super.apply(this, arguments);
            this.AkName = "InsertmailMer";
            this.Xml = "Module/Mail/NEWMAIL.xml";
            this.UserId = null;
            this.NickName = null;
        }
        InsertMailMer.prototype.getModuleXmlPageData = function (callBack) {
            var postData = { xml: this.Xml, pageStyle: "Insert" };
            $.AKjs.getJSON("/module/module", postData, callBack);
        };
        InsertMailMer.prototype.getDefaultEmailAccount = function (callBack) {
            $.AKjs.getJSON("/Mail/Mail/GetDefaultEmailAccount", { userId: "" }, callBack);
        };
        ;
        return InsertMailMer;
    }(model.AkBaseModel));
    exports.InsertMailMer = InsertMailMer;
});
