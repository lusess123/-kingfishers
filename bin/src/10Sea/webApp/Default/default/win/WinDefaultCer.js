var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../DefaultCer", "./../../../../../01core/Util"], function (require, exports, dcFile, utilFile) {
    "use strict";
    var WinDefaultCer = (function (_super) {
        __extends(WinDefaultCer, _super);
        function WinDefaultCer() {
            _super.apply(this, arguments);
            this.AkName = "WinDefaultCer";
        }
        WinDefaultCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        WinDefaultCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        WinDefaultCer.prototype.loadMenu = function () {
        };
        WinDefaultCer.prototype.clearPage = function () {
        };
        return WinDefaultCer;
    }(dcFile.DefaultCer));
    exports.WinDefaultCer = WinDefaultCer;
});
