var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel", "./../../../01core/Util"], function (require, exports, baseMerFile, utilFile) {
    "use strict";
    var AKPageHelpinit = (function (_super) {
        __extends(AKPageHelpinit, _super);
        function AKPageHelpinit() {
            _super.apply(this, arguments);
        }
        AKPageHelpinit.prototype.getMRC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        AKPageHelpinit.prototype.load = function ($dom, option) {
            this.getMRC().init($dom);
        };
        return AKPageHelpinit;
    }(baseMerFile.AkBaseModel));
    exports.AKPageHelpinit = AKPageHelpinit;
});
