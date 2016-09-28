
import cFile = require("./DefaultCer");
import mFile = require("./DefaultMer");
import rFile = require("./DefaultRer");
import mrcFile = require("./../../BasePageMRC");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");

export class DefaultMRC extends mrcFile.BasePageMRC<cFile.DefaultCer, mFile.DefaultMer, rFile.DefaultRer>
{
    public constructor()
    {
        var cer: cFile.DefaultCer = new cFile.DefaultCer();
        var mer: mFile.DefaultMer = new mFile.DefaultMer();
        var rer: rFile.DefaultRer = new rFile.DefaultRer();
        super(cer,mer,rer);
    }
}   
iocFile.Core.Ioc.Current().RegisterType("DEFAULT", iPageFile.PageFace, DefaultMRC);