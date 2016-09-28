import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import mFile = require("./PageHelpMer");
import cFile = require("./PageHelpCer");
import rFile = require("./PageHelpRer");
import mrcFile = require("./AKPageHelp/AKPageHelpinit")
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");
export class PageHelpRer extends baseRerFile.AkBaseRenderer {

    public getinit(): mrcFile.AKPageHelpinit {
        return utilFile.Core.Util.Cast<mrcFile.AKPageHelpinit>(this.C);
    }
    public initR($dom) {

    };

    public loadModuleXmlMainR(fid, admin) {
        var _$dom = this.$JObj;
        _$dom.html("");
        this.getinit().load(_$dom,{FID: fid, ADMIN: admin });
    }
}


