var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var UserHomeCer = (function (_super) {
        __extends(UserHomeCer, _super);
        function UserHomeCer() {
            _super.apply(this, arguments);
            this.LayOutName = "VTT";
            this.UserId = null;
        }
        UserHomeCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        UserHomeCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        UserHomeCer.prototype.init = function () {
            this.getR().initR(this.UserId);
        };
        UserHomeCer.prototype.setModel = function (p1, p2, p3) {
            if (p1.isEmpty())
                p1 = $.AKjs.LoginId;
            this.UserId = p1;
        };
        UserHomeCer.prototype.loadRight = function ($dom) {
            this.getR().loadRight($dom);
        };
        UserHomeCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$colleague$");
        };
        ;
        UserHomeCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().R.getMain$DomR().html("");
            $.AKjs.AppGet().R.getRight$DomR().find(".ACT-RIGHT-CUSTOM").remove();
        };
        ;
        UserHomeCer.prototype.loadDocumentMoreAction = function () {
            if (this.getM()["UserId"] == $.AKjs.LoginId) {
                this.getR()["initDocumentMoreAction"]();
            }
        };
        return UserHomeCer;
    }(pageCerFile.BasePageCer));
    exports.UserHomeCer = UserHomeCer;
});
