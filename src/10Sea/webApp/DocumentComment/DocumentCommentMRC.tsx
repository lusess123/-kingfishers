import cFile = require("./DocumentCommentCer");
import mFile = require("./DocumentCommentMer");
import rFile = require("./DocumentCommentRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");
export class DocumentCommentMRC extends mrcFile.BasePageMRC<cFile.DocumentCommentCer, mFile.DocumentCommentMer, rFile.DocumentCommentRer> {
    public constructor() {
        var cer: cFile.DocumentCommentCer = new cFile.DocumentCommentCer();
        var mer: mFile.DocumentCommentMer = new mFile.DocumentCommentMer();
        var rer: rFile.DocumentCommentRer = new rFile.DocumentCommentRer();
        super(cer, mer, rer);
    }

}
iocFile.Core.Ioc.Current().RegisterType("DocumentComment", iPageFile.PageFace, DocumentCommentMRC);