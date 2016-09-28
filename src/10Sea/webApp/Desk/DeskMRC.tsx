import cFile = require("./DeskCer");
import mFile = require("./DeskMer");
import rFile = require("./DeskRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class DeskMRC extends mrcFile.BasePageMRC<cFile.DeskCer, mFile.DeskMer, rFile.DeskRer>
{
   

    public constructor() {
        var cer: cFile.DeskCer = new cFile.DeskCer();
        var mer: mFile.DeskMer = new mFile.DeskMer();
        var rer: rFile.DeskRer = new rFile.DeskRer();
        super(cer, mer, rer);
    };
}

iocFile.Core.Ioc.Current().RegisterType("DESK", iPageFile.PageFace, DeskMRC);