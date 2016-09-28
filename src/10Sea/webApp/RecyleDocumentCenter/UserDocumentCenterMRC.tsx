import cFile = require("./RecyleDocumentCenterCer");
import mFile = require("./RecyleDocumentCenterMer");
import rFile = require("./RecyleDocumentCenterRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");
export class RecyleDocumentCenterMRC extends mrcFile.BasePageMRC<cFile.RecyleDocumentCenterCer, mFile.RecyleDocumentCenterMer, rFile.RecyleDocumentCenterRer> {
    public constructor() {
        var cer: cFile.RecyleDocumentCenterCer = new cFile.RecyleDocumentCenterCer();
        var mer: mFile.RecyleDocumentCenterMer = new mFile.RecyleDocumentCenterMer();
        var rer: rFile.RecyleDocumentCenterRer = new rFile.RecyleDocumentCenterRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("RecyleDocumentCenter", iPageFile.PageFace, RecyleDocumentCenterMRC);