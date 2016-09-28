var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var AKPageHelpCer = (function (_super) {
        __extends(AKPageHelpCer, _super);
        function AKPageHelpCer() {
            _super.apply(this, arguments);
        }
        AKPageHelpCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        AKPageHelpCer.prototype.initC = function () {
            this.getR().initR();
        };
        AKPageHelpCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        AKPageHelpCer.prototype.initialize = function (config, renderer, model) {
            _super.prototype.dispose.call(this);
        };
        AKPageHelpCer.prototype.fileContainC = function (option) {
            var _this = this;
            _this.getM().getModuleXmlPageData(option.FID, function (res) {
                _this.getR().getDataR(res);
            });
        };
        AKPageHelpCer.prototype.commentContainC = function (option) {
            var _this = this;
            _this.getM().getFileCommentM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKPageHelpCer.prototype.addCommentC = function (option) {
            var _this = this;
            _this.getM().addCommentM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKPageHelpCer.prototype.addReplyC = function (option) {
            var _this = this;
            _this.getM().addReplyM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKPageHelpCer.prototype.removeCommentC = function (option) {
            var _this = this;
            _this.getM().removeCommentM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKPageHelpCer.prototype.removeReplyC = function (option) {
            var _this = this;
            _this.getM().removeReplyM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKPageHelpCer.prototype.removeComment = function (option) {
            var _this = this;
            _this.getM().removeComment(option, function (res) {
                _this.getR().reInitComments();
            });
        };
        AKPageHelpCer.prototype.removeReply = function (option) {
            var _this = this;
            _this.getM().removeReply(option, function (res) {
                _this.getR().reInitComments();
            });
        };
        AKPageHelpCer.prototype.shareFileC = function (option) {
            var _this = this;
            _this.getM().shareFileM(option);
        };
        return AKPageHelpCer;
    }(pageCerFile.BasePageCer));
    exports.AKPageHelpCer = AKPageHelpCer;
});
