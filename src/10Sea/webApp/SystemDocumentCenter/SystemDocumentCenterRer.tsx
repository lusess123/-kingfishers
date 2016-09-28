import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./SystemDocumentCenterCer");
import utilFile = require("./../../../01core/Util");
import dcpInitFile = require("./sysdocumentPage/AKDocumentPageInit");
export class SystemDocumentCenterRer extends baseRerFile.AkBaseRenderer {
    public getCer(): cFile.SystemDocumentCenterCer {
        return utilFile.Core.Util.Cast<cFile.SystemDocumentCenterCer>(this.C);
    }
    public AkName = "SystemDocumentCenterRer";
        public initR($dom) {

        };

        public loadModuleXmlMainR (option) {
            var _$dom = this.$JObj;
            _$dom.clear();
            //seajs.use(['jquery', 'AkDocumentPage-sysInit'], function ($, iner) {
            //    iner.load(_$dom, option);
            //});
            var dcpinit = new dcpInitFile.AKDocumentPageInit();
            dcpinit.load(_$dom, option);
        }
}