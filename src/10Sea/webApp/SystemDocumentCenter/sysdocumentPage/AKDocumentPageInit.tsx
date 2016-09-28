import dcmrcFile = require("./AKDocumentPageMRCCreator");
import utilFile = require("./../../../../01core/Util");
//import mrcFile = require("./../../../core/mcrv/AkMRCCreator");
import mrcFile = require("./../../BasePageMRC");
export class AKDocumentPageInit extends dcmrcFile.AKDocumentPageMRCCreator {
    //public getMRC():dcmrcFile.AKDocumentPageMRCCreator {
    //    return utilFile.Core.Util.Cast<dcmrcFile.AKDocumentPageMRCCreator>(this.C);
    //}
    public load($dom, option) {
        //var creator: dcmrcFile.AKCommentMRCCreator = new dcmrcFile.AKCommentMRCCreator<>(option);
        var creator = new dcmrcFile.AKDocumentPageMRCCreator();
        creator.init($dom);
        //this.getMRC().init($dom);
    }
}