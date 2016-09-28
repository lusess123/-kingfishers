import akcerFile = require("./../../../core/mcrv/AkBaseController");
import akrerFile = require("./AKCommentRenderer");
import pageCerFile = require("./../../BasePageCer");
import utilFile = require("./../../../../01core/Util");
import akmFile = require("./AKCommentModel");
//import layOutFile = require("./cer/AppLayOut");
//import menuFile = require("./cer/AppMenu");
//import urlFile = require("./cer/AppUrl");
export class AKCommentController extends akcerFile.AkBaseController {
    public getM(): akmFile.AKCommentModel {
        return utilFile.Core.Util.Cast<akmFile.AKCommentModel>(this.M);
    }
    public getR(): akrerFile.AKCommentRenderer {
        return utilFile.Core.Util.Cast<akrerFile.AKCommentRenderer>(this.R);
    }
    public AkName = "DCCer";
    public init($dom) {
        this.getR().initR(this.getM().option);
    };

    public setModel(p1, p2, p3) {
            if (p3 != null) {
                this.getM().option = { FID: p1, TYPE: p2, ISPUBLIC: false };
            } else {
                this.getM().option = { FID: p1, TYPE: p2, ISPUBLIC: p3 };
            }
    };

    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction('$$module/SNS/Documentcenter/SNS_ALLDocuments');
    };

    public fileContainC(option) {
        var _this = this;
        _this.getM().getFileInfoM(option, function (res) {
            res = $.parseJSON(res)[0];
            var result = {};
            if (option.ISPUBLIC == true) {
                switch (option.TYPE) {
                    case "1":
                        _this.getM().getPublicPictureDataM(res.FID, function (res) {
                            _this.getR().getDataR(res);
                        });
                        break;
                    case "2":
                        _this.getM().getPublicArticleDataM(res.FID, function (res) {
                            _this.getR().getDataR(res);
                        });
                        break;
                    default:
                        _this.getM().getPublicDocumentDataM(res.FID, function (res) {
                            _this.getR().getDataR(res);
                        });
                        break;
                }
            } else {
                switch (option.TYPE) {
                    case "1":
                        _this.getM().getPictureDataM(res.FID, function (res) {
                            _this.getR().getDataR(res);
                        });
                        break;
                    case "2":
                        _this.getM().getArticleDataM(res.FID, function (res) {
                            _this.getR().getDataR(res);
                        });
                        break;
                    default:
                        _this.getM().getDocumentDataM(res.FID, function (res) {
                            _this.getR().getDataR(res);
                        });
                        break;
                }

            }
        })
    }
    public commentContainC(option) {
        var _this = this;
        _this.getM().getFileCommentM(option, function (res) {
            _this.getR().createCommentContainR($.parseJSON(res));
        })
    }
    public addCommentC(option) {
        var _this = this;
        _this.getM().addCommentM(option, function (res) {
            _this.getR().createCommentContainR($.parseJSON(res));
        })
    }
    public addReplyC(option) {
        var _this = this;
        _this.getM().addReplyM(option, function (res) {
            _this.getR().createCommentContainR($.parseJSON(res));
        })
    }
    public removeCommentC(option) {
        var _this = this;
        _this.getM().removeCommentM(option, function (res) {
            _this.getR().createCommentContainR($.parseJSON(res));
        })
    }
    public removeReplyC(option) {
        var _this = this;
        _this.getM().removeReplyM(option, function (res) {
            _this.getR().createCommentContainR($.parseJSON(res));
        })
    }
    public shareFileC(option) {
        var _this = this;
        _this.getM().shareFileM(option);
    }
}