import cFile = require("./DocumentCenterCer");
import mFile = require("./DocumentCenterMer");
import rFile = require("./DocumentCenterRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");
export class DocumentCenterMRC extends mrcFile.BasePageMRC<cFile.DocumentCenterCer, mFile.DocumentCenterMer, rFile.DocumentCenterRer> {
    public constructor() {
        var cer: cFile.DocumentCenterCer = new cFile.DocumentCenterCer();
        var mer: mFile.DocumentCenterMer = new mFile.DocumentCenterMer();
        var rer: rFile.DocumentCenterRer = new rFile.DocumentCenterRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("DocumentCenter", iPageFile.PageFace, DocumentCenterMRC);