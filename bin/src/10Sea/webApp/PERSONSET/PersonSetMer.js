var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var PersonSetMer = (function (_super) {
        __extends(PersonSetMer, _super);
        function PersonSetMer() {
            _super.apply(this, arguments);
            this.Xml = "Module/PersonSet/PERSONSET_DETAIL";
        }
        PersonSetMer.prototype.getModuleXmlPageData = function (callBack) {
            var postData = { xml: this.Xml, pageStyle: "Update" };
            $.AKjs.getJSON("/module/module", postData, callBack);
        };
        return PersonSetMer;
    }(baseMerFile.AkBaseModel));
    exports.PersonSetMer = PersonSetMer;
});
