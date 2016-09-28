import rer = require("./../core/mcrv/AkBaseRenderer");

export class InsertMailRer extends rer.AkBaseRenderer {
 public AkName = "InsertmailRer";
 public $dvContain = null;
 public UserId = null;
 public NickName = null;

public  initR(userId, nickName?:string) {
    this.UserId = userId;
    this.NickName = nickName;
    this.$dvContain = $("<div></div>");
    this.$JObj.append(this.$dvContain);
}

public  loadModuleXmlMainR(res) {
    var _this = this;
    res.IsInner = true;
    res.IsPart = true;
    if (this.UserId) {
        res.Tag = { Button: "SetMailReceiver", Data: { UserId: this.UserId, NickName: this.NickName } };
    }

    this.$dvContain.AtawInsertPage(res);
}

public showInfo() {
    this.$dvContain.addClass("panel panel-default");
    this.$dvContain.append("<p>当前用户没有设置默认邮箱，请<a class='ACT-A-HREF' href='$$module/mail/useremailaccounts'>点击此处</a>设置后才能发送邮件！</p>");
    $.AKjs.AppGet().bindPageEvent(this.$dvContain);
};

}