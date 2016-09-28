import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./DocumentCommentCer");
import utilFile = require("./../../../01core/Util");
import DCInit = require("./comment/AKCommentInit");
export class DocumentCommentRer extends baseRerFile.AkBaseRenderer {
    public getCer(): cFile.DocumentCommentCer {
        return utilFile.Core.Util.Cast<cFile.DocumentCommentCer>(this.C);
    }
        //public AkName = "DocumentCommentRer";

        public initR($dom) { }

        //this.loadModuleXmlMainR = function (fid, type, isPublic) {
        //    var _$dom = this.$JObj;
        //    _$dom.html("");
        //    seajs.use(['jquery', 'DCInit'], function ($, iner) {
        //        iner.load(_$dom, { FID: fid, TYPE: type, ISPUBLIC: isPublic });
        //    });
        //}
        public loadModuleXmlMainR(fid, type, isPublic) {
            let _$dom = this.$JObj;
            _$dom.html("");
            var dcinit = new DCInit.AKCommentInit();
            dcinit.load(_$dom, { FID: fid, TYPE: type, ISPUBLIC: isPublic });
            
        }

}