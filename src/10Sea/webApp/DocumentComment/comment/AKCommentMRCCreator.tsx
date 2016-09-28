import mrcFile = require("./../../../core/mcrv/AkMRCCreator");
import mFile = require("./AKCommentModel");
import cFile = require("./AKCommentController");
import rFile = require("./AKCommentRenderer");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");
import utilFile = require("./../../../../01core/Util");
export class AKCommentMRCCreator extends mrcFile.AkMRCCreator<cFile.AKCommentController, mFile.AKCommentModel, rFile.AKCommentRenderer> {
    public constructor() {
        var cer: cFile.AKCommentController = new cFile.AKCommentController();
        var mer: mFile.AKCommentModel = new mFile.AKCommentModel();
        var rer: rFile.AKCommentRenderer = new rFile.AKCommentRenderer();
        super(cer, mer, rer);
    }
    public getC(): cFile.AKCommentController {
        return utilFile.Core.Util.Cast<cFile.AKCommentController>(this.C);
    }

    public setModel(p1, p2, p3) {
        this.getC().setModel(p1, p2, p3);
    };

    public init ($dom) {
        this.getC().init($dom);
    };
}