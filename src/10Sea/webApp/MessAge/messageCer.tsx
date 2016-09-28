import pageCerFile = require("./../BasePageCer");
import mFile = require("./MessAgeMer");
import rFile = require("./MessAgeRer");

import utilFile = require("./../../../01core/Util");

export class MessAgeCer extends pageCerFile.BasePageCer {
    public Data = null;
    public LayOutName :string = "VTV";
    public key: string = "";

    public getR(): rFile.MessAgeRer{
        return utilFile.Core.Util.Cast<rFile.MessAgeRer>(this.R);
    }

    public init() {
        this.getR().initContentContain();
    }


    public setModel(p1,p2,p3) {
        this.key= p1;
    }

    public clearPage() {
        $.AKjs.AppGet().hideNavi();
    }
}
