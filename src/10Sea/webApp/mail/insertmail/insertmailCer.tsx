import cer = require("./../BasePageCer");
import mer = require("./InsertMailMer")
import rer = require("./InsertMailRer");
import util = require("./../../../01core/Util");

export class InsertMailCer extends cer.BasePageCer {
 public AkName = "InsertmailCer";
 public LayOutName = "273";
 public getR(): rer.InsertMailRer {
     return util.Core.Util.Cast<rer.InsertMailRer>(this.R);
 }
 public getM(): mer.InsertMailMer {
     return util.Core.Util.Cast<mer.InsertMailMer>(this.M);
 };
public init() {
    $.AKjs.AppGet().IsNewMailPage = true;
    var _this = this;
    this.getR().initR(this.getM().UserId, this.getM().NickName);
    _this.getM().getModuleXmlPageData(function (res) {
        _this.getR().loadModuleXmlMainR(res);
    });

};

public setModel (p1, p2) {
    this.getM().UserId = p1;
    this.getM().NickName = p2;
};
public loadMenu () {
    $.AKjs.AppGet().Menu.gotoMenuLoction("$INSERTMAIL$");
};


}