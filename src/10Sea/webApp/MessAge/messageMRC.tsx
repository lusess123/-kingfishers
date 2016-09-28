import cFile = require("./MessAgeCer");
import mFile = require("./MessAgeMer");
import rFile = require("./MessAgeRer");

import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class MessAgeMRC extends mrcFile.BasePageMRC<cFile.MessAgeCer, mFile.MessAgeMer, rFile.MessAgeRer>{
    public constructor() {
        var cer: cFile.MessAgeCer = new cFile.MessAgeCer();
        var mer: mFile.MessAgeMer = new mFile.MessAgeMer();
        var rer: rFile.MessAgeRer = new rFile.MessAgeRer();
        super(cer, mer,rer);
    }

    public init($dom) {
        this.R.$JObj = $dom;
        this.C.getR();
    }
}
iocFile.Core.Ioc.Current().RegisterType("MESSAGE", iPageFile.PageFace, MessAgeMRC);
