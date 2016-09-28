import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");
import rFile = require("./UserHomeRer");
import mFile = require("./UserHomeMer");
export class UserHomeCer extends pageCerFile.BasePageCer {
    public LayOutName: string = "VTT";
    public UserId = null;

    public getR(): rFile.UserHomeRer {
        return utilFile.Core.Util.Cast<rFile.UserHomeRer>(this.R);

    }

    public getM(): mFile.UserHomeMer {
        return utilFile.Core.Util.Cast<rFile.UserHomeRer>(this.M);

    }
    public init() {
        this.getR().initR(this.UserId);
    }

    public setModel (p1,p2,p3) {
        if (p1.isEmpty())
            p1 = $.AKjs.LoginId;
        this.UserId = p1;
    }

    public loadRight($dom) {
        this.getR().loadRight($dom);
    }

    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$colleague$");
    };

    public clearPage() {
        $.AKjs.AppGet().hideNavi();
        $.AKjs.AppGet().R.getMain$DomR().html("");
        $.AKjs.AppGet().R.getRight$DomR().find(".ACT-RIGHT-CUSTOM").remove();
    };

    public loadDocumentMoreAction() {
        if (this.getM()["UserId"] == $.AKjs.LoginId) {
            this.getR()["initDocumentMoreAction"]();
        }
    }
}