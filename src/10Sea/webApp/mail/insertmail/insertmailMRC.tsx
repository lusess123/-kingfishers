import cFile = require("./InsertMailCer");
import mFile = require("./InsertMailMer");
import rFile = require("./InsertMailRer");
import mrc = require("./../webApp/BasePageMRC");
import iPageFile = require("./../../core/IPage");
import iocFile = require("./../../../01core/Ioc");


export class InsertMailMRC extends mrc.BasePageMRC<cFile.InsertMailCer, mFile.InsertMailMer, rFile.InsertMailRer> {
    public constructor() {
        var cer: cFile.InsertMailCer = new cFile.InsertMailCer();
        var mer: mFile.InsertMailMer = new mFile.InsertMailMer();
        var rer: rFile.InsertMailRer = new rFile.InsertMailRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("InsertMail", iPageFile.PageFace, InsertMailMRC);
