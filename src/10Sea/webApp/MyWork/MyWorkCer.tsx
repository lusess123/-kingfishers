import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");

import rFile = require("./MyWorkRer");
import mFile = require("./MyWorkMer");
export class MyWorkCer extends pageCerFile.BasePageCer
{
    public Xml = "module/workflow/topMyWork";
    public LayOutName: string = "TTV";

    public getM(): mFile.MyWorkMer {
        return utilFile.Core.Util.Cast<mFile.MyWorkMer>(this.M);
    }
    public getR(): rFile.MyWorkRer {
        return utilFile.Core.Util.Cast<rFile.MyWorkRer>(this.R)
    }

    public init() {
        var  _this = this
        this.R.initR();
        this.getM().getMyWorkDataM(this.Xml, function (res) {
            _this.getR().createMyWorkR(res);
        })
        this.getM().getAllBusinessM(function (res) {
            _this.getR().createBusinessR(res);
        })  
    };

    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$MyWork$");
    }
    public clearPage(){
        $.AKjs.AppGet().hideNavi();
    }
}
