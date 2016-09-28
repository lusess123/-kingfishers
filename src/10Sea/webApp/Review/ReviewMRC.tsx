import cFile = require("./ReviewCer");
import mFile = require("./ReviewMer");
import rFile = require("./ReviewRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class ReviewMRC extends mrcFile.BasePageMRC<cFile.ReviewCer, mFile.ReviewMer, rFile.ReviewRer>
{
    public constructor() {
        var cer: cFile.ReviewCer = new cFile.ReviewCer();
        var mer: mFile.ReviewMer = new mFile.ReviewMer();
        var rer: rFile.ReviewRer = new rFile.ReviewRer();
        super(cer, mer, rer);
    }


}
iocFile.Core.Ioc.Current().RegisterType("Review", iPageFile.PageFace, ReviewMRC);