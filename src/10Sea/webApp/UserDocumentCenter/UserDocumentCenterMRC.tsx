import cFile = require("./UserDocumentCenterCer");
import mFile = require("./UserDocumentCenterMer");
import rFile = require("./UserDocumentCenterRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");
export class UserDocumentCenterMRC extends mrcFile.BasePageMRC<cFile.UserDocumentCenterCer, mFile.UserDocumentCenterMer, rFile.UserDocumentCenterRer> {
    public constructor() {
        var cer: cFile.UserDocumentCenterCer = new cFile.UserDocumentCenterCer();
        var mer: mFile.UserDocumentCenterMer = new mFile.UserDocumentCenterMer();
        var rer: rFile.UserDocumentCenterRer = new rFile.UserDocumentCenterRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("UserDocumentCenter", iPageFile.PageFace, UserDocumentCenterMRC);