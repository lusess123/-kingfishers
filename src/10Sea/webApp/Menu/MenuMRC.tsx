
import cFile = require("./MenuCer");
import mFile = require("./MenuMer");
import rFile = require("./MenuRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MenuMRC extends mrcFile.BasePageMRC<cFile.MenuCer, mFile.MenuMer, rFile.MenuRer>
{
    public constructor() {
        var cer: cFile.MenuCer = new cFile.MenuCer();
        var mer: mFile.MenuMer = new mFile.MenuMer();
        var rer: rFile.MenuRer = new rFile.MenuRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("MENU", iPageFile.PageFace, MenuMRC);