var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, cer, util) {
    "use strict";
    var InBoxCer = (function (_super) {
        __extends(InBoxCer, _super);
        function InBoxCer() {
            _super.apply(this, arguments);
            this.AkName = "InBoxCer";
        }
        InBoxCer.prototype.getR = function () {
            return util.Core.Util.Cast(this.R);
        };
        InBoxCer.prototype.getM = function () {
            return util.Core.Util.Cast(this.M);
        };
        ;
        InBoxCer.prototype.init = function () {
            var _this = this;
            this.R.initR();
        };
        ;
        InBoxCer.prototype.loadMainContent = function (ds) {
            var _this = this;
            this.getM().getModuleXmlPageData(ds, function (res) {
                _this.getR().loadModuleXmlMainR(res);
            });
        };
        ;
        InBoxCer.prototype.setModel = function (p1, p2, p3) {
        };
        ;
        InBoxCer.prototype.loadUserMailAccounts = function ($dom) {
            var _this = this;
            this.getM().getUserMailAccounts(function (res) {
                _this.getR().initMailAccountItems(res, $dom);
            });
        };
        ;
        InBoxCer.prototype.loadLeft = function ($dom) {
            this.getR().loadLeft($dom);
        };
        ;
        InBoxCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$inbox$");
        };
        ;
        InBoxCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().R.getLeft$DomR().find(".ACT-EMAILACCOUNT-LIST").remove();
        };
        ;
        return InBoxCer;
    }(cer.BasePageCer));
    exports.InBoxCer = InBoxCer;
});
