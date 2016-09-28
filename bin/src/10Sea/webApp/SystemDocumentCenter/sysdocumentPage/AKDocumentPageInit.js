var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./AKDocumentPageMRCCreator"], function (require, exports, dcmrcFile) {
    "use strict";
    var AKDocumentPageInit = (function (_super) {
        __extends(AKDocumentPageInit, _super);
        function AKDocumentPageInit() {
            _super.apply(this, arguments);
        }
        //public getMRC():dcmrcFile.AKDocumentPageMRCCreator {
        //    return utilFile.Core.Util.Cast<dcmrcFile.AKDocumentPageMRCCreator>(this.C);
        //}
        AKDocumentPageInit.prototype.load = function ($dom, option) {
            //var creator: dcmrcFile.AKCommentMRCCreator = new dcmrcFile.AKCommentMRCCreator<>(option);
            var creator = new dcmrcFile.AKDocumentPageMRCCreator();
            creator.init($dom);
            //this.getMRC().init($dom);
        };
        return AKDocumentPageInit;
    }(dcmrcFile.AKDocumentPageMRCCreator));
    exports.AKDocumentPageInit = AKDocumentPageInit;
});
