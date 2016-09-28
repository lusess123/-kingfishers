
import cFile = require("./TsCer");
import mFile = require("./TsMer");
import rFile = require("./TsRer");
import mrcFile = require("./../../BasePageMRC");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");

export class TsMRC extends mrcFile.BasePageMRC<cFile.TsCer, mFile.TsMer, rFile.TsRer>
{
    public constructor() {
        var cer: cFile.TsCer = new cFile.TsCer();
        var mer: mFile.TsMer = new mFile.TsMer();
        var rer: rFile.TsRer = new rFile.TsRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("TS", iPageFile.PageFace, TsMRC);