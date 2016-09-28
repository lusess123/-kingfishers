
import cFile = require("./PersonSetCer");
import mFile = require("./PersonSetMer");
import rFile = require("./PersonSetRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MenuMRC extends mrcFile.BasePageMRC<cFile.PersonSetCer, mFile.PersonSetMer, rFile.PersonSetRer>
{
    public constructor() {
        var cer: cFile.PersonSetCer = new cFile.PersonSetCer();
        var mer: mFile.PersonSetMer = new mFile.PersonSetMer();
        var rer: rFile.PersonSetRer = new rFile.PersonSetRer();
        super(cer, mer, rer); 
    }
}
iocFile.Core.Ioc.Current().RegisterType("PERSONSET", iPageFile.PageFace, MenuMRC);