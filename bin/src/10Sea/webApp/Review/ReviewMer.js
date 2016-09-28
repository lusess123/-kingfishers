var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var ReviewMer = (function (_super) {
        __extends(ReviewMer, _super);
        function ReviewMer() {
            _super.apply(this, arguments);
            this.AkName = "ReviewMer";
            this.FID = "";
            this.admin = false;
            this.url = "";
        }
        return ReviewMer;
    }(baseMerFile.AkBaseModel));
    exports.ReviewMer = ReviewMer;
});
