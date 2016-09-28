var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./ReviewCer", "./ReviewMer", "./ReviewRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var ReviewMRC = (function (_super) {
        __extends(ReviewMRC, _super);
        function ReviewMRC() {
            var cer = new cFile.ReviewCer();
            var mer = new mFile.ReviewMer();
            var rer = new rFile.ReviewRer();
            _super.call(this, cer, mer, rer);
        }
        return ReviewMRC;
    }(mrcFile.BasePageMRC));
    exports.ReviewMRC = ReviewMRC;
    iocFile.Core.Ioc.Current().RegisterType("Review", iPageFile.PageFace, ReviewMRC);
});
