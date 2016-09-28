var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkBaseRenderer"], function (require, exports, rer) {
    "use strict";
    var InsertMailRer = (function (_super) {
        __extends(InsertMailRer, _super);
        function InsertMailRer() {
            _super.apply(this, arguments);
            this.AkName = "InsertmailRer";
            this.$dvContain = null;
            this.UserId = null;
            this.NickName = null;
        }
        InsertMailRer.prototype.initR = function (userId, nickName) {
            this.UserId = userId;
            this.NickName = nickName;
            this.$dvContain = $("<div></div>");
            this.$JObj.append(this.$dvContain);
        };
        InsertMailRer.prototype.loadModuleXmlMainR = function (res) {
            var _this = this;
            res.IsInner = true;
            res.IsPart = true;
            if (this.UserId) {
                res.Tag = { Button: "SetMailReceiver", Data: { UserId: this.UserId, NickName: this.NickName } };
            }
            this.$dvContain.AtawInsertPage(res);
        };
        InsertMailRer.prototype.showInfo = function () {
            this.$dvContain.addClass("panel panel-default");
            this.$dvContain.append("<p>当前用户没有设置默认邮箱，请<a class='ACT-A-HREF' href='$$module/mail/useremailaccounts'>点击此处</a>设置后才能发送邮件！</p>");
            $.AKjs.AppGet().bindPageEvent(this.$dvContain);
        };
        ;
        return InsertMailRer;
    }(rer.AkBaseRenderer));
    exports.InsertMailRer = InsertMailRer;
});
