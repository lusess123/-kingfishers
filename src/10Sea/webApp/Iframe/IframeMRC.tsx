
import cFile = require("./IframeCer");
import mFile = require("./IframeMer");
import rFile = require("./IframeRer");
import mrc = require("./../webApp/BasePageMRC");
import iPageFile = require("./../../core/IPage");
import iocFile = require("./../../../01core/Ioc");


export class IframeMRC extends mrc.BasePageMRC<cFile.IframeCer, mFile.IframeMer, rFile.IframeRer> {

    public constructor() {
        var cer: cFile.IframeCer = new cFile.IframeCer();
        var mer: mFile.IframeMer = new mFile.IframeMer();
        var rer: rFile.IframeRer = new rFile.IframeRer();
        super(cer, mer, rer);
    }


}
iocFile.Core.Ioc.Current().RegisterType("Iframe", iPageFile.PageFace, IframeMRC);
