var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkMRCCreator", "./AKDocumentPageModel", "./AKDocumentPageController", "./AKDocumentPageRenderer", "./../../../../01core/Util"], function (require, exports, mrcFile, mFile, cFile, rFile, utilFile) {
    "use strict";
    var AKDocumentPageMRCCreator = (function (_super) {
        __extends(AKDocumentPageMRCCreator, _super);
        function AKDocumentPageMRCCreator() {
            var cer = new cFile.AKDocumentPageController();
            var mer = new mFile.AKDocumentPageModel();
            var rer = new rFile.AKDocumentPageRenderer();
            _super.call(this, cer, mer, rer);
        }
        AKDocumentPageMRCCreator.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        AKDocumentPageMRCCreator.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        AKDocumentPageMRCCreator.prototype.init = function ($dom) {
            this.getR().$JObj = $dom;
            this.getC().initC();
        };
        ;
        return AKDocumentPageMRCCreator;
    }(mrcFile.AkMRCCreator));
    exports.AKDocumentPageMRCCreator = AKDocumentPageMRCCreator;
});
