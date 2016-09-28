var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../BasePageCer", "./../../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var TsCer = (function (_super) {
        __extends(TsCer, _super);
        function TsCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.LayOutName = "";
        }
        TsCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        TsCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        TsCer.prototype.init = function () {
            this.getR().initR();
        };
        TsCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().PageName = p1;
            this.getM().P1 = p2;
            this.getM().P2 = p3;
        };
        ;
        TsCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$ts$" + this.getM().PageName + "$" + this.getM().P1);
        };
        ;
        TsCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return TsCer;
    }(pageCerFile.BasePageCer));
    exports.TsCer = TsCer;
});
