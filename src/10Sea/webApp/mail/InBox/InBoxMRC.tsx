import cFile = require("./InBoxCer");
import mFile = require("./InBoxMer");
import rFile = require("./InBoxRer");
import mrc = require("./../webApp/BasePageMRC");
import iPageFile = require("./../../core/IPage");
import iocFile = require("./../../../01core/Ioc");


export class InBoxMRC extends mrc.BasePageMRC<cFile.InBoxCer, mFile.InBoxMer, rFile.InBoxRer> {

    public constructor() {
        var cer: cFile.InBoxCer = new cFile.InBoxCer();
        var mer: mFile.InBoxMer = new mFile.InBoxMer();
        var rer: rFile.InBoxRer = new rFile.InBoxRer();
        super(cer, mer, rer);
    }


}
iocFile.Core.Ioc.Current().RegisterType("InBox", iPageFile.PageFace, InBoxMRC);
