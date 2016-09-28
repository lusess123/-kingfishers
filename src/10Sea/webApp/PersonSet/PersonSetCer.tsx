import pageCerFile = require("./../BasePageCer");
import mFile = require("./PersonSetMer");
import rFile = require("./PersonSetRer");
import utilFile = require("./../../../01core/Util");

export class PersonSetCer extends pageCerFile.BasePageCer {
    public getM(): mFile.PersonSetMer{
        return utilFile.Core.Util.Cast<mFile.PersonSetMer>(this.M)
    }

    public getR(): rFile.PersonSetRer {
        return utilFile.Core.Util.Cast<rFile.PersonSetRer>(this.R)
    }
    public init() {
        this.getM().getModuleXmlPageData(function (res) {
            this.getR.loadModuleXmlMain(res);
        });
    };

    public setModel(p1, p2, p3) {

    }
    public clearPage() {

    }


}
