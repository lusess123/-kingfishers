import pageCerFile = require("./../../../BasePageCer");
import mFile = require("./../DefaultMer");
import dcFile = require("./../DefaultCer");
import rFile = require("./WinDefaultRer");
import utilFile = require("./../../../../../01core/Util");

export class WinDefaultCer extends dcFile.DefaultCer {

    public getM(): mFile.DefaultMer {
        return utilFile.Core.Util.Cast<mFile.DefaultMer>(this.M);
    }

    public getR(): rFile.WinDefaultRer {
        return utilFile.Core.Util.Cast<rFile.WinDefaultRer>(this.R);
    }

    public AkName = "WinDefaultCer";

    public loadMenu() {

    }

    public clearPage()
    {

    }
}