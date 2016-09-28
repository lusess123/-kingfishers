
import cFile = require("./AKPageHelpCer");
import mFile = require("./AKPageHelpMer");
import rFile = require("./AKPageHelpRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class AKPageHelpMRC extends mrcFile.BasePageMRC<cFile.AKPageHelpCer, mFile.AKPageHelpMer, rFile.AKPageHelpRer>
{
    public init($dom) {
        this.R.$JObj = $dom;
        this.C.initC();
    }
    public constructor() {
        var cer: cFile.AKPageHelpCer = new cFile.AKPageHelpCer();
        var mer: mFile.AKPageHelpMer = new mFile.AKPageHelpMer();
        var rer: rFile.AKPageHelpRer = new rFile.AKPageHelpRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("AKPAGEHELP", iPageFile.PageFace, AKPageHelpMRC );