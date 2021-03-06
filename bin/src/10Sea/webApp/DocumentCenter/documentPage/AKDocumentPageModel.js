var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var AKDocumentPageModel = (function (_super) {
        __extends(AKDocumentPageModel, _super);
        function AKDocumentPageModel() {
            _super.apply(this, arguments);
            this.AkName = "AkBaseModel-DocumentPage";
        }
        AKDocumentPageModel.prototype.getWithinPageM = function (option, callback) {
            $.AKjs.getJSON("/module/module", option, callback);
        };
        return AKDocumentPageModel;
    }(baseMerFile.AkBaseModel));
    exports.AKDocumentPageModel = AKDocumentPageModel;
});
