import cFile = require("./MyWorkCer");
import mFile = require("./MyWorkMer");
import rFile = require("./MyWorkRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MyWorkMRC extends mrcFile.BasePageMRC<cFile.MyWorkCer, mFile.MyWorkMer, rFile.MyWorkRer>{
    public constructor() {
        var cer: cFile.MyWorkCer = new cFile.MyWorkCer();
        var mer: mFile.MyWorkMer = new mFile.MyWorkMer();
        var rer: rFile.MyWorkRer = new rFile.MyWorkRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("MYWORK", iPageFile.PageFace, MyWorkMRC);
iocFile.Core.Ioc.Current().RegisterType("MYWORKMRC", iPageFile.PageFace, MyWorkMRC);