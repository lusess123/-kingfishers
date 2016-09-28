
import cFile = require("./PartCer");
import mFile = require("./PartMer");
import rFile = require("./PartRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MenuMRC extends mrcFile.BasePageMRC<cFile.PartCer, mFile.PartMer, rFile.PartRer>
{
    public constructor() {
        var cer: cFile.PartCer = new cFile.PartCer();
        var mer: mFile.PartMer = new mFile.PartMer();
        var rer: rFile.PartRer = new rFile.PartRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("PART", iPageFile.PageFace, MenuMRC);
