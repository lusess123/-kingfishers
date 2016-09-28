import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./RecyleDocumentCenterCer");
import utilFile = require("./../../../01core/Util");

export class RecyleDocumentCenterRer extends baseRerFile.AkBaseRenderer {
    public getCer(): cFile.RecyleDocumentCenterCer {
        return utilFile.Core.Util.Cast<cFile.RecyleDocumentCenterCer>(this.C);
    }
    public AkName = "RecyleDocumentCenterRer";


    public initR ($dom) {

    };

    public loadModuleXmlMainR (res) {
        var _$dom = this.$JObj;
        //_$dom.html("");
        _$dom["AtawListPage"](res);
    }
}