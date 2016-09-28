var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseController", "./../../../../01core/Util"], function (require, exports, akcerFile, utilFile) {
    "use strict";
    //import layOutFile = require("./cer/AppLayOut");
    //import menuFile = require("./cer/AppMenu");
    //import urlFile = require("./cer/AppUrl");
    var AKCommentController = (function (_super) {
        __extends(AKCommentController, _super);
        function AKCommentController() {
            _super.apply(this, arguments);
            this.AkName = "DCCer";
        }
        AKCommentController.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        AKCommentController.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        AKCommentController.prototype.init = function ($dom) {
            this.getR().initR(this.getM().option);
        };
        ;
        AKCommentController.prototype.setModel = function (p1, p2, p3) {
            if (p3 != null) {
                this.getM().option = { FID: p1, TYPE: p2, ISPUBLIC: false };
            }
            else {
                this.getM().option = { FID: p1, TYPE: p2, ISPUBLIC: p3 };
            }
        };
        ;
        AKCommentController.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction('$$module/SNS/Documentcenter/SNS_ALLDocuments');
        };
        ;
        AKCommentController.prototype.fileContainC = function (option) {
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
                }
                else {
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
            });
        };
        AKCommentController.prototype.commentContainC = function (option) {
            var _this = this;
            _this.getM().getFileCommentM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKCommentController.prototype.addCommentC = function (option) {
            var _this = this;
            _this.getM().addCommentM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKCommentController.prototype.addReplyC = function (option) {
            var _this = this;
            _this.getM().addReplyM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKCommentController.prototype.removeCommentC = function (option) {
            var _this = this;
            _this.getM().removeCommentM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKCommentController.prototype.removeReplyC = function (option) {
            var _this = this;
            _this.getM().removeReplyM(option, function (res) {
                _this.getR().createCommentContainR($.parseJSON(res));
            });
        };
        AKCommentController.prototype.shareFileC = function (option) {
            var _this = this;
            _this.getM().shareFileM(option);
        };
        return AKCommentController;
    }(akcerFile.AkBaseController));
    exports.AKCommentController = AKCommentController;
});
