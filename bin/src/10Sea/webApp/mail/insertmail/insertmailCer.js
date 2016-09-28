var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, cer, util) {
    "use strict";
    var InsertMailCer = (function (_super) {
        __extends(InsertMailCer, _super);
        function InsertMailCer() {
            _super.apply(this, arguments);
            this.AkName = "InsertmailCer";
            this.LayOutName = "273";
        }
        InsertMailCer.prototype.getR = function () {
            return util.Core.Util.Cast(this.R);
        };
        InsertMailCer.prototype.getM = function () {
            return util.Core.Util.Cast(this.M);
        };
        ;
        InsertMailCer.prototype.init = function () {
            $.AKjs.AppGet().IsNewMailPage = true;
            var _this = this;
            this.getR().initR(this.getM().UserId, this.getM().NickName);
            _this.getM().getModuleXmlPageData(function (res) {
                _this.getR().loadModuleXmlMainR(res);
            });
        };
        ;
        InsertMailCer.prototype.setModel = function (p1, p2) {
            this.getM().UserId = p1;
            this.getM().NickName = p2;
        };
        ;
        InsertMailCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$INSERTMAIL$");
        };
        ;
        return InsertMailCer;
    }(cer.BasePageCer));
    exports.InsertMailCer = InsertMailCer;
});
