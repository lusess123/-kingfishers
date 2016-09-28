var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkMRCCreator", "./AKCommentModel", "./AKCommentController", "./AKCommentRenderer", "./../../../../01core/Util"], function (require, exports, mrcFile, mFile, cFile, rFile, utilFile) {
    "use strict";
    var AKCommentMRCCreator = (function (_super) {
        __extends(AKCommentMRCCreator, _super);
        function AKCommentMRCCreator() {
            var cer = new cFile.AKCommentController();
            var mer = new mFile.AKCommentModel();
            var rer = new rFile.AKCommentRenderer();
            _super.call(this, cer, mer, rer);
        }
        AKCommentMRCCreator.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        AKCommentMRCCreator.prototype.setModel = function (p1, p2, p3) {
            this.getC().setModel(p1, p2, p3);
        };
        ;
        AKCommentMRCCreator.prototype.init = function ($dom) {
            this.getC().init($dom);
        };
        ;
        return AKCommentMRCCreator;
    }(mrcFile.AkMRCCreator));
    exports.AKCommentMRCCreator = AKCommentMRCCreator;
});
