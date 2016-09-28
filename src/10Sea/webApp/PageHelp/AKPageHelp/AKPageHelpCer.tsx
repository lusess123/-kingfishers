import pageCerFile = require("./../BasePageCer");
import mFile = require("./AKPageHelpMer");
import rFile = require("./AKPageHelpRer");
import utilFile = require("./../../../01core/Util");

export class AKPageHelpCer extends pageCerFile.BasePageCer {
    public getR(): rFile.AKPageHelpRer {
        return utilFile.Core.Util.Cast<rFile.AKPageHelpRer>(this.R);
    }
    public initC() {
        this.getR().initR();
    }

    public getM(): mFile.AKPageHelpMer {
        return utilFile.Core.Util.Cast<mFile.AKPageHelpMer>(this.M);
    }
    public initialize(config, renderer, model) {
        super.dispose();
    }

    public fileContainC(option) {
        var _this = this;
        _this.getM().getModuleXmlPageData(option.FID, function (res) {
            _this.getR().getDataR(res);
        });
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

    public removeComment(option) {
        var _this = this;
        _this.getM().removeComment(option, function (res) {
            _this.getR().reInitComments();
        });
    }

    public removeReply(option) {
        var _this = this;
        _this.getM().removeReply(option, function (res) {
            _this.getR().reInitComments();
        });
    }

    public shareFileC(option) {
        var _this = this;
        _this.getM().shareFileM(option);
    }

}