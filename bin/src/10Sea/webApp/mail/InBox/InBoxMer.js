var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkBaseModel"], function (require, exports, model) {
    "use strict";
    var InBoxMer = (function (_super) {
        __extends(InBoxMer, _super);
        function InBoxMer() {
            _super.apply(this, arguments);
            this.AkName = "InBoxMer";
            this.Xml = "Module/Mail/INBOX.xml";
        }
        InBoxMer.prototype.getModuleXmlPageData = function (ds, callBack) {
            var postData = { xml: this.Xml, ds: ds, pageStyle: "List" };
            $.AKjs.getJSON("/module/module", postData, callBack);
        };
        InBoxMer.prototype.getUserMailAccounts = function (callBack) {
            $.AKjs.getJSON("/Mail/Mail/GetUserEmailAccounts", {}, callBack);
        };
        ;
        return InBoxMer;
    }(model.AkBaseModel));
    exports.InBoxMer = InBoxMer;
});
