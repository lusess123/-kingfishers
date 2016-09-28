var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var MenuCer = (function (_super) {
        __extends(MenuCer, _super);
        function MenuCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.Key = "";
            this.LayOutName = "TTV";
        }
        MenuCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        MenuCer.prototype.init = function () {
            // var _this = this;
            this.getR().loadModuleXmlMainR(this.Key);
        };
        ;
        MenuCer.prototype.setModel = function (p1, p2, p3) {
            this.Key = p1;
        };
        ;
        MenuCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction(this.Key);
        };
        ;
        MenuCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        ;
        return MenuCer;
    }(pageCerFile.BasePageCer));
    exports.MenuCer = MenuCer;
});
