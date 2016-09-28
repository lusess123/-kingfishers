import dcmrcFile = require("./AKCommentMRCCreator");
import utilFile = require("./../../../../01core/Util");
//import mrcFile = require("./../../../core/mcrv/AkMRCCreator");
import mrcFile = require("./../../BasePageMRC");
export class AKCommentInit extends dcmrcFile.AKCommentMRCCreator{
    //public getMRC(): dcmrcFile.AKCommentMRCCreator{
    //    return utilFile.Core.Util.Cast<dcmrcFile.AKCommentMRCCreator>(this.C);
    //}
    public load($dom, option) {
        //var creator: dcmrcFile.AKCommentMRCCreator = new dcmrcFile.AKCommentMRCCreator<>(option);
        var creator = new dcmrcFile.AKCommentMRCCreator();
        //this.getMRC().init($dom);
        creator.init($dom);
    }
}