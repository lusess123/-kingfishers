
import cFile = require("./UserHomeCer");
import mFile = require("./UserHomeMer");
import rFile = require("./UserHomeRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class UserHomeMRC extends mrcFile.BasePageMRC<cFile.UserHomeCer, mFile.UserHomeMer, rFile.UserHomeRer>
{
    public constructor() {
        var cer: cFile.UserHomeCer = new cFile.UserHomeCer();
        var mer: mFile.UserHomeMer = new mFile.UserHomeMer();
        var rer: rFile.UserHomeRer = new rFile.UserHomeRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("USERHOME", iPageFile.PageFace, UserHomeMRC);