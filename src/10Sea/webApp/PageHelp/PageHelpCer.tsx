import pageCerFile = require("./../BasePageCer");
import mFile = require("./PageHelpMer");
import rFile = require("./PageHelpRer");
import utilFile = require("./../../../01core/Util");

export class PageHelpCer extends pageCerFile.BasePageCer {
    public AppCer = null;
    public FID: string = "";
    public admin = false;

    public getR() :rFile.PageHelpRer{
        return utilFile.Core.Util.Cast<rFile.PageHelpRer>(this.R);
    }
    public init() {

    }

    public setModel(p1, p2, p3) {
        this.FID = p1;
        if (p2 == null) {
            this.admin = false;

        } else {
            this.admin = p2;
        }
    }

    public clearPage(){
        
    }

}