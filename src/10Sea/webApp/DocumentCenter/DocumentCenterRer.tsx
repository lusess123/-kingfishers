import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./DocumentCenterCer");
import utilFile = require("./../../../01core/Util");
import DPInit = require("./documentPage/AKDocumentPageInit");
export class DocumentCenterRer extends baseRerFile.AkBaseRenderer {
    public getC(): cFile.DocumentCenterCer {
        return utilFile.Core.Util.Cast<cFile.DocumentCenterCer>(this.C);
    }
    public AkName = "DocumentCenterRer";


    public initR() { }

    public loadModuleXmlMainR(option){
            var _$dom = this.$JObj;
            _$dom.html("");
            //seajs.use(['jquery', 'AkDocumentPage-Init'], function ($, iner) {
            //    iner.load(_$dom, option);
            //});
            var dpinit = new DPInit.AKDocumentPageInit();
            dpinit.load(_$dom, option);
        }
}