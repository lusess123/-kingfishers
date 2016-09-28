var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, cer, util) {
    "use strict";
    var IframeCer = (function (_super) {
        __extends(IframeCer, _super);
        function IframeCer() {
            _super.apply(this, arguments);
            this.AkName = "DefaultCer";
            this.AppCer = null;
            this.LayOutName = "";
        }
        IframeCer.prototype.init = function () {
        };
        ;
        IframeCer.prototype.getM = function () {
            return util.Core.Util.Cast(this.M);
        };
        IframeCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().Xml = p1;
            //alert(p2);
            if (!p2 || p2 == "") {
                this.getM().PageStyle = "List";
            }
            else {
                this.getM().PageStyle = p2;
            }
            this.getM().Param = p3;
        };
        ;
        IframeCer.prototype.loadMenu = function () {
            // var _pageStyle = "";
            if (this.getM().PageStyle == "List") {
                $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml);
            }
            else {
                $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml + "$" + this.getM().PageStyle);
            }
        };
        ;
        IframeCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return IframeCer;
    }(cer.BasePageCer));
    exports.IframeCer = IframeCer;
});
