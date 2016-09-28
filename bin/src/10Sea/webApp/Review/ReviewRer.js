var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer"], function (require, exports, baseRerFile) {
    "use strict";
    var ReviewRer = (function (_super) {
        __extends(ReviewRer, _super);
        function ReviewRer() {
            _super.apply(this, arguments);
            this.AkName = "ReviewRer";
            this.Option = null;
            this.ADMIN = false;
            this.$dvContain = null;
            this.EditorObj = null;
        }
        ReviewRer.prototype.initR = function ($dom) {
        };
        ;
        ReviewRer.prototype.loadModuleXmlMainR = function (fid, adimin, url) {
            var _$dom = this.$JObj;
            _$dom.html("");
            //seajs.use(['jquery', 'AkReviewInit'], function ($, iner) {
            //    iner.load(_$dom, { FID: fid, ADMIN: adimin, URL: url });
            //});
        };
        ;
        return ReviewRer;
    }(baseRerFile.AkBaseRenderer));
    exports.ReviewRer = ReviewRer;
});
