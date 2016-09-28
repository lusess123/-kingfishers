
import cFile = require("./PageHelpCer");
import mFile = require("./PageHelpMer");
import rFile = require("./PageHelpRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MenuMRC extends mrcFile.BasePageMRC<cFile.PageHelpCer, mFile.PageHelpMer, rFile.PageHelpRer>
{
    public constructor() {
        var cer: cFile.PageHelpCer = new cFile.PageHelpCer();
        var mer: mFile.PageHelpMer = new mFile.PageHelpMer();
        var rer: rFile.PageHelpRer = new rFile.PageHelpRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("PAGEHELP", iPageFile.PageFace, MenuMRC);