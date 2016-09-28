import mrcFile = require("./../../../core/mcrv/AkMRCCreator");
import mFile = require("./AKDocumentPageModel");
import cFile = require("./AKDocumentPageController");
import rFile = require("./AKDocumentPageRenderer");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");
import utilFile = require("./../../../../01core/Util");
export class AKDocumentPageMRCCreator extends mrcFile.AkMRCCreator<cFile.AKDocumentPageController, mFile.AKDocumentPageModel, rFile.AKDocumentPageRenderer>{
    public constructor() {
        var cer: cFile.AKDocumentPageController = new cFile.AKDocumentPageController();
        var mer: mFile.AKDocumentPageModel = new mFile.AKDocumentPageModel();
        var rer: rFile.AKDocumentPageRenderer = new rFile.AKDocumentPageRenderer();
        super(cer, mer, rer);
    }
    public getR(): rFile.AKDocumentPageRenderer {
        return utilFile.Core.Util.Cast<rFile.AKDocumentPageRenderer>(this.R);
    }
    public getC(): cFile.AKDocumentPageController {
        return utilFile.Core.Util.Cast<cFile.AKDocumentPageController>(this.C);
    }
    public init($dom) {
        this.getR().$JObj = $dom;
        this.getC().initC();
    };
}