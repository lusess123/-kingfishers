import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./PartCer");
import mFile = require("./PartMer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");

export class PartRer extends baseRerFile.AkBaseRenderer {


    public getM(): mFile.PartMer {
        return utilFile.Core.Util.Cast<mFile.PartMer>(this.C.M);
    }
    public initR($dom?: any) {
        var _url = this.getM().Url;
        this.$JObj["AtawLoad"](_url);
    };

    public loadModuleXmlMain(res, pageStyle) {
        var _$dom = this.$JObj;
    }

    public dispose() {
        if (this.$JObj) {
            var _obj = this.$JObj.data("ATAW_CONTROL");
            if (_obj) {
                _obj["dispose"]();
            }
            _obj = null;
        }
        super.dispose();
    };
}
