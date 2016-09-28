import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");
import mFile = require("./RecyleDocumentCenterMer");
import rFile = require("./RecyleDocumentCenterRer");
export class RecyleDocumentCenterCer extends pageCerFile.BasePageCer {
    public getM(): mFile.RecyleDocumentCenterMer {
        return utilFile.Core.Util.Cast<mFile.RecyleDocumentCenterMer>(this.M);
    }
    public getR(): rFile.RecyleDocumentCenterRer {
        return utilFile.Core.Util.Cast<rFile.RecyleDocumentCenterRer>(this.R);
    }
    public AkName = "RecyleDocumentCenterCer";

    public init () {
        var _this = this;
        this.getM().getModuleXmlPageData(function (res) {
            _this.getR().loadModuleXmlMainR(res);
        });
    };
    public setModel (p1, p2, p3) {
    };

    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$DocumentCenter$");
    };


    public clearPage () {
        $.AKjs.AppGet().hideNavi();
    };
}