import baseMerFile = require("./../../core/mcrv/AkBaseModel");
import mFile = require("./AKPageHelpMRC");
import utilFile = require("./../../../01core/Util");
export class AKPageHelpinit extends baseMerFile.AkBaseModel {
    public getMRC(): mFile.AKPageHelpMRC {
        return utilFile.Core.Util.Cast<mFile.AKPageHelpMRC>(this.C);
    }
    public load($dom, option) {
        this.getMRC().init($dom);
    }

}
