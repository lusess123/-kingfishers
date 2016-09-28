var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TsMer", "./TsRer", "./../../BasePageMRC", "./../../BasePageCer", "./../../../../01core/Util"], function (require, exports, mFile, rFile, mrcFile, pageCerFile, utilFile) {
    "use strict";
    var WebPageMRC = (function (_super) {
        __extends(WebPageMRC, _super);
        function WebPageMRC() {
            var cer = new WebPageCer();
            var mer = new mFile.TsMer();
            var rer = new rFile.TsRer();
            _super.call(this, cer, mer, rer);
        }
        WebPageMRC.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        WebPageMRC.prototype.setRegName = function (regName) {
            if (regName.length > 3) {
                if (regName.substring(0, 3).toUpperCase() == "WIN") {
                    regName = regName.substr(3);
                    this.getM().IsWin = true;
                }
                else {
                    if (regName.length > 5 && regName.substring(0, 5).toUpperCase() == "PANEL") {
                        regName = regName.substr(5);
                        this.getM().IsWin = true;
                    }
                }
            }
            this.getM().PageName = regName;
        };
        return WebPageMRC;
    }(mrcFile.BasePageMRC));
    exports.WebPageMRC = WebPageMRC;
    var WebPageCer = (function (_super) {
        __extends(WebPageCer, _super);
        function WebPageCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.LayOutName = "";
        }
        WebPageCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        WebPageCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        WebPageCer.prototype.init = function () {
            this.getR().initR();
        };
        WebPageCer.prototype.setModel = function (p1, p2, p3) {
            // this.getM().PageName = p1;
            this.getM().P1 = p1;
            this.getM().P2 = p2;
        };
        ;
        WebPageCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$" + this.getM().PageName + "$" + this.getM().P1);
        };
        ;
        WebPageCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return WebPageCer;
    }(pageCerFile.BasePageCer));
    exports.WebPageCer = WebPageCer;
});
