import pageCerFile = require("./../BasePageCer");
import mFile = require("./ReviewMer");
import rFile = require("./ReviewRer");
import utilFile = require("./../../../01core/Util");
export class ReviewCer extends pageCerFile.BasePageCer {
    public AkName = "ReviewCer";
    public AppCer = null;
    public getM(): mFile.ReviewMer {
        return utilFile.Core.Util.Cast<mFile.ReviewMer>(this.M);
    };
    public getR(): rFile.ReviewRer {
        return utilFile.Core.Util.Cast<rFile.ReviewRer>(this.R);
    };

    public init() {
        var _this = this;
        this.getR().loadModuleXmlMainR(this.getM().FID, this.getM().admin, this.getM().url);

    };

    public setModel(p1, p2, p3) {

        this.getM().FID = p1;
        this.getM().url = p2;
        this.getM().admin = p3;
    };


    public clearPage() {
    };

}