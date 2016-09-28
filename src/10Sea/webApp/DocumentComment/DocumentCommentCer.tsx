import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");
import mFile = require("./DocumentCommentMer");
import rFile = require("./DocumentCommentRer");
export class DocumentCommentCer extends pageCerFile.BasePageCer{
    public getM(): mFile.DocumentCommentMer {
        return utilFile.Core.Util.Cast<mFile.DocumentCommentMer>(this.M);
    }
    public getR(): rFile.DocumentCommentRer {
        return utilFile.Core.Util.Cast<rFile.DocumentCommentRer>(this.R);
    }
    public AkName = "DocumentCommentCer";
    public AppCer = null;

    public init(){
        var _this = this;
        this.getR().loadModuleXmlMainR(this.getM().FID, this.getM().Type, this.getM().IsPublic);
    }


    public setModel(p1,p2,p3) {
        this.getM().FID = p1;
        this.getM().Type = p2;
        if (p3 != null) {
            this.getM().IsPublic = p3;
        } else {
            this.getM().IsPublic = false;
        }
    }


    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction('$$module/SNS/Documentcenter/SNS_ALLDocuments');
    }

    public clearPage() {
        $.AKjs.AppGet().hideNavi();
    }
    
}