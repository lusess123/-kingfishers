import cer = require("./../BasePageCer");
import mer = require("./InBoxMer");
import rer = require("./InBoxRer");
import util = require("./../../../01core/Util");

export class InBoxCer extends cer.BasePageCer {
    public AkName = "InBoxCer";
    public getR(): rer.InBoxRer {
        return util.Core.Util.Cast<rer.InBoxRer>(this.R);
    }
    public getM(): mer.InBoxMer {
        return util.Core.Util.Cast<mer.InBoxMer>(this.M);
    };

public init() {
    var _this = this;
    this.R.initR();
};

public loadMainContent(ds) {
    var _this = this;
    this.getM().getModuleXmlPageData(ds, function (res) {
        _this.getR().loadModuleXmlMainR(res);
    });
};

public setModel(p1, p2, p3) {
};

public loadUserMailAccounts($dom) {
    var _this = this;
    this.getM().getUserMailAccounts(function (res) {
        _this.getR().initMailAccountItems(res, $dom);
    });
};

public loadLeft($dom) {
    this.getR().loadLeft($dom);
};

public loadMenu() {
    $.AKjs.AppGet().Menu.gotoMenuLoction("$inbox$");
};

public clearPage  () {
    $.AKjs.AppGet().hideNavi();
    $.AKjs.AppGet().R.getLeft$DomR().find(".ACT-EMAILACCOUNT-LIST").remove();
};

}