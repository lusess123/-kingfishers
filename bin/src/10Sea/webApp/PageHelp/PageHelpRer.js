var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var PageHelpRer = (function (_super) {
        __extends(PageHelpRer, _super);
        function PageHelpRer() {
            _super.apply(this, arguments);
        }
        PageHelpRer.prototype.getinit = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        PageHelpRer.prototype.initR = function ($dom) {
        };
        ;
        PageHelpRer.prototype.loadModuleXmlMainR = function (fid, admin) {
            var _$dom = this.$JObj;
            _$dom.html("");
            this.getinit().load(_$dom, { FID: fid, ADMIN: admin });
        };
        return PageHelpRer;
    }(baseRerFile.AkBaseRenderer));
    exports.PageHelpRer = PageHelpRer;
});
