var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../BasePageCer", "./../../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var DefaultCer = (function (_super) {
        __extends(DefaultCer, _super);
        function DefaultCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.LayOutName = "";
        }
        DefaultCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        DefaultCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        DefaultCer.prototype.init = function () {
            var _this = this;
            this.getM().getModuleXmlPageData(function (res) {
                if (_this.getR() && _this.getR().loadModuleXmlMain)
                    _this.getR().loadModuleXmlMain(res, _this.getM().PageStyle);
                //_this.AppCer.Menu.gotoMenuLoction("$$" + _this.M.Xml);
            });
        };
        ;
        DefaultCer.prototype.setModel = function (p1, p2, p3) {
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
        DefaultCer.prototype.loadMenu = function () {
            // var _pageStyle = "";
            // alert();
            this.getM().Xml = this.getM().Xml.replace(".xml", "");
            if (this.getM().PageStyle == "List") {
                $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml);
            }
            else {
                $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml + "$" + this.getM().PageStyle);
            }
        };
        ;
        DefaultCer.prototype.clearPage = function () {
            var _app = $.AKjs.AppGet();
            _app.hideNavi();
            _app.R.togglePageNavi();
            _app.clearWindow();
        };
        ;
        return DefaultCer;
    }(pageCerFile.BasePageCer));
    exports.DefaultCer = DefaultCer;
});
