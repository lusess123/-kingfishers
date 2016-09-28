import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");
import mFile = require("./UserDocumentCenterMer");
import rFile = require("./UserDocumentCenterRer");
export class UserDocumentCenterCer extends pageCerFile.BasePageCer {
    public getM(): mFile.UserDocumentCenterMer {
        return utilFile.Core.Util.Cast<mFile.UserDocumentCenterMer>(this.M);
    }
    public getR(): rFile.UserDocumentCenterRer {
        return utilFile.Core.Util.Cast<rFile.UserDocumentCenterRer>(this.R);
    }
    public AkName = "UserDocumentCenterCer";
    public init () {
        var _this = this;
        this.getR().initR(this.getM().UserId);
        this.getM().getModuleXmlPageData(function (res) {
            _this.getR().loadModuleXmlMainR(res);
        });
    };


    public setModel (p1, p2, p3) {
        this.getM().UserId = p1;
        if (p2 != null) {
            this.getM().pid = p2
        }
        else {
            this.getM().pid = "0";
        }
    };

    public getFilePathC (option) {
        var _this = this;
        this.getM().getFilePathM(option, function (res) {
            _this.getR().createFilePathR(res);
        })
    }

    public clearPage () {
        $.AKjs.AppGet().hideNavi();
    };
}