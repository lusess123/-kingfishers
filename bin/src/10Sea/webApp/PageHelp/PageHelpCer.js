var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var PageHelpCer = (function (_super) {
        __extends(PageHelpCer, _super);
        function PageHelpCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.FID = "";
            this.admin = false;
        }
        PageHelpCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        PageHelpCer.prototype.init = function () {
        };
        PageHelpCer.prototype.setModel = function (p1, p2, p3) {
            this.FID = p1;
            if (p2 == null) {
                this.admin = false;
            }
            else {
                this.admin = p2;
            }
        };
        PageHelpCer.prototype.clearPage = function () {
        };
        return PageHelpCer;
    }(pageCerFile.BasePageCer));
    exports.PageHelpCer = PageHelpCer;
});
