var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var MyWorkCer = (function (_super) {
        __extends(MyWorkCer, _super);
        function MyWorkCer() {
            _super.apply(this, arguments);
            this.Xml = "module/workflow/topMyWork";
            this.LayOutName = "TTV";
        }
        MyWorkCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        MyWorkCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        MyWorkCer.prototype.init = function () {
            var _this = this;
            this.R.initR();
            this.getM().getMyWorkDataM(this.Xml, function (res) {
                _this.getR().createMyWorkR(res);
            });
            this.getM().getAllBusinessM(function (res) {
                _this.getR().createBusinessR(res);
            });
        };
        ;
        MyWorkCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$MyWork$");
        };
        MyWorkCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        return MyWorkCer;
    }(pageCerFile.BasePageCer));
    exports.MyWorkCer = MyWorkCer;
});
