var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var MessAgeCer = (function (_super) {
        __extends(MessAgeCer, _super);
        function MessAgeCer() {
            _super.apply(this, arguments);
            this.Data = null;
            this.LayOutName = "VTV";
            this.key = "";
        }
        MessAgeCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        MessAgeCer.prototype.init = function () {
            this.getR().initContentContain();
        };
        MessAgeCer.prototype.setModel = function (p1, p2, p3) {
            this.key = p1;
        };
        MessAgeCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        return MessAgeCer;
    }(pageCerFile.BasePageCer));
    exports.MessAgeCer = MessAgeCer;
});
