import cer = require("./../BasePageCer");
import mer = require("./IframeMer");
import rer = require("./IframeRer");
import util = require("./../../../01core/Util");


export class IframeCer extends cer.BasePageCer {
public AkName = "DefaultCer";
public AppCer = null;
public LayOutName = "";
public init() {

};
public getM(): mer.IframeMer {
    return util.Core.Util.Cast<mer.IframeMer>(this.M);
}

public setModel (p1, p2, p3) {

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

public loadMenu () {
    // var _pageStyle = "";
    if (this.getM().PageStyle == "List") {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml);
    }
    else {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml + "$" + this.getM().PageStyle);
    }
};
public clearPage () {
    $.AKjs.AppGet().hideNavi();
    $.AKjs.AppGet().clearWindow();
};

}