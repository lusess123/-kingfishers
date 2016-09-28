import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./TestCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");


export class TestRer extends baseRerFile.AkBaseRenderer {

    public getC(): cFile.TestCer {
        return utilFile.Core.Util.Cast<cFile.TestCer>(this.C);
    }
    public initR($dom) {
    var _seaName = this.getC().getSeaName();
    var _$JObj = this.$JObj;
    iocFile.Core.Ioc.Current().FetchAsyInstance<iPageFile.IPage>(
        _seaName, iPageFile.PageFace, (a) => { this.initR(a) }, () => {
            alert("sea组件: " + _seaName + "  不存在（" + new Date() + "）");
        }
    );

};

    
}