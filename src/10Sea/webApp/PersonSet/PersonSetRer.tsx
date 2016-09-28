import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./PersonSetCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");
export class PersonSetRer extends baseRerFile.AkBaseRenderer {
    public loadModuleXmlMain(res) {
        this.$JObj["AtawUpdatePage"](res)
    }
}
