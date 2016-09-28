var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var ReviewCer = (function (_super) {
        __extends(ReviewCer, _super);
        function ReviewCer() {
            _super.apply(this, arguments);
            this.AkName = "ReviewCer";
            this.AppCer = null;
        }
        ReviewCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        ;
        ReviewCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        ;
        ReviewCer.prototype.init = function () {
            var _this = this;
            this.getR().loadModuleXmlMainR(this.getM().FID, this.getM().admin, this.getM().url);
        };
        ;
        ReviewCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().FID = p1;
            this.getM().url = p2;
            this.getM().admin = p3;
        };
        ;
        ReviewCer.prototype.clearPage = function () {
        };
        ;
        return ReviewCer;
    }(pageCerFile.BasePageCer));
    exports.ReviewCer = ReviewCer;
});
