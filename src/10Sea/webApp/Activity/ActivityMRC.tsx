import cFile = require("./ActivityCer");
import mFile = require("./ActivityMer");
import rFile = require("./ActivityRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class ActivityMRC extends mrcFile.BasePageMRC<cFile.Activitycer, mFile.ActivityMer, rFile.ActivityRer>
{
    public constructor() {
        var cer: cFile.Activitycer = new cFile.Activitycer();
        var mer: mFile.ActivityMer = new mFile.ActivityMer();
        var rer: rFile.ActivityRer = new rFile.ActivityRer();
        super(cer, mer, rer);
    }
}

iocFile.Core.Ioc.Current().RegisterType("ACTIVITY", iPageFile.PageFace, ActivityMRC);