import pageCerFile = require("./../BasePageCer");
import utilFile = require("./../../../01core/Util");
import mFile = require("./SystemDocumentCenterMer");
import rFile = require("./SystemDocumentCenterRer");
export class SystemDocumentCenterCer extends pageCerFile.BasePageCer {
    public getM(): mFile.SystemDocumentCenterMer {
        return utilFile.Core.Util.Cast<mFile.SystemDocumentCenterMer>(this.M);
    }
    public getR(): rFile.SystemDocumentCenterRer {
        return utilFile.Core.Util.Cast<rFile.SystemDocumentCenterRer>(this.R);
    }
    public AkName = "SystemDocumentCenterCer";
        public AppCer = null;
        public Xml = "module/SNS/Documentcenter/System/SNS_ALLDocuments";
        public PageStyle = "";
        public Param = "";
        public init () {
            var _this = this;
            var paramObj = this.getM().formartPageState(this.PageStyle, this.Param);
            this.getR().loadModuleXmlMainR({ xml: this.Xml, pageStyle: this.PageStyle, param: this.Param, paramObj: paramObj });
        };


        public setModel(p1, p2, p3) {

            this.PageStyle = "List";
            if (p2 === "List") p2 = "";
            this.Param = p2;
        };

        public loadMenu () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.Xml);
        };

        public clearPage () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
}