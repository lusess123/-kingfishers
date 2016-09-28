import cFile = require("./SystemDocumentCenterCer");
import mFile = require("./SystemDocumentCenterMer");
import rFile = require("./SystemDocumentCenterRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");
export class SystemDocumentCenterMRC extends mrcFile.BasePageMRC<cFile.SystemDocumentCenterCer, mFile.SystemDocumentCenterMer, rFile.SystemDocumentCenterRer> {
    public constructor() {
        var cer: cFile.SystemDocumentCenterCer = new cFile.SystemDocumentCenterCer();
        var mer: mFile.SystemDocumentCenterMer = new mFile.SystemDocumentCenterMer();
        var rer: rFile.SystemDocumentCenterRer = new rFile.SystemDocumentCenterRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("SystemDocumentCenter", iPageFile.PageFace, SystemDocumentCenterMRC);