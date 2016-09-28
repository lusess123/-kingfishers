import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");
import mFile = require("./DocumentCenterMer");
import rFile = require("./DocumentCenterRer");
export class DocumentCenterCer extends pageCerFile.BasePageCer {
    public getM(): mFile.DocumentCenterMer {
        return utilFile.Core.Util.Cast<mFile.DocumentCenterMer>(this.M)
    }
    public getR(): rFile.DocumentCenterRer {
        return utilFile.Core.Util.Cast<rFile.DocumentCenterRer>(this.R);
    }
    public AkName = "DocumentCenterCer";
    public AppCer = null;
    public Xml = "module/SNS/Documentcenter/SNS_ALLDocuments";
    public PageStyle = "";
    public Param = "";
    public init() {
        var _this = this;
        var paramObj = this.getM().formartPageState(this.PageStyle, this.Param);
        this.getR().loadModuleXmlMainR({ xml: this.Xml, pageStyle: this.PageStyle, param: this.Param, paramObj: paramObj });
    };


    public setModel(p1, p2, p3) {

        this.PageStyle = "List";
        if (p2 === "List") p2 = "";
        this.Param = p2;
    };

    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$DocumentCenter$");
    };

    public clearPage() {
        var _app = $.AKjs.AppGet();
        _app.hideNavi();

        _app.R.togglePageNavi();
        _app.clearWindow();
    };
}