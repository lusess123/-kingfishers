
import cFile = require("./WinDefaultCer");
import mFile = require("./../DefaultMer");
import rFile = require("./WinDefaultRer");
import mrcFile = require("./../../../BasePageMRC");
import iocFile = require("./../../../../../01core/Ioc");
import iPageFile = require("./../../../../core/IPage");


export class WinDefaultMRC extends mrcFile.BasePageMRC<cFile.WinDefaultCer, mFile.DefaultMer, rFile.WinDefaultRer>
{

    public constructor() {
        var cer: cFile.WinDefaultCer = new cFile.WinDefaultCer();
        var mer: mFile.DefaultMer = new mFile.DefaultMer();
        var rer: rFile.WinDefaultRer = new rFile.WinDefaultRer();
        super(cer, mer, rer);
    }

 
}

iocFile.Core.Ioc.Current().RegisterType("WINDEFAULT", iPageFile.PageFace, WinDefaultMRC);