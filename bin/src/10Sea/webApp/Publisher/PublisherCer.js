var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var PublisherCer = (function (_super) {
        __extends(PublisherCer, _super);
        function PublisherCer() {
            _super.apply(this, arguments);
            this.AkName = "PublisherCer";
            this.IsText = false;
            this.IsImage = false;
            this.IsFile = false;
            this.ActivMRC = null;
        }
        PublisherCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        PublisherCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        PublisherCer.prototype.init = function () {
            var mylogo;
            var _logo = null;
            var _this = this;
            if (!mylogo) {
                _logo = this.getM().MyLogo;
            }
            this.getM().getAllBusinessM(function (res) {
                _this.getR().init(_logo, res);
            });
        };
        ;
        PublisherCer.prototype.publicText = function (content, shareData, callBack) {
            this.getM().publicText(content, shareData, callBack);
        };
        ;
        PublisherCer.prototype.publicImage = function (imageStr, content, shareData, callBack) {
            //             alert(imageStr);
            var _imageObj = $.parseJSON(imageStr);
            var _l = $.AKjs.SetImageList(_imageObj);
            //            alert(_l.html());
            var _s = "<div>" + content + "</div><div>" + _l.html() + "</div>";
            var privacy = "";
            if (shareData && shareData.length == 1 && shareData[0].PRIVACY == "ToAllPeople") {
                privacy = "ToAllPeople";
            }
            this.getM().saveThePictureM(imageStr.substring(imageStr.indexOf("["), imageStr.lastIndexOf("}")), privacy);
            this.getM().publicText(encodeURIComponent(_s), shareData, callBack);
        };
        ;
        PublisherCer.prototype.publicFile = function (fileStr, content, shareData, callBack) {
            //             alert(imageStr);
            var _fileObj = $["parseJSON"](fileStr);
            var _l = $.AKjs.SetFileList(_fileObj);
            //            alert(_l.html());
            var _s = "<div>" + content + "</div><div>" + _l.html() + "</div>";
            var privacy = "";
            if (shareData && shareData.length == 1 && shareData[0].PRIVACY == "ToAllPeople") {
                privacy = "ToAllPeople";
            }
            this.getM().saveTheDocumentM(fileStr.substring(fileStr.indexOf("["), fileStr.lastIndexOf("}")), privacy);
            this.getM().publicText(encodeURIComponent(_s), shareData, callBack);
        };
        ;
        PublisherCer.prototype.MicrText = function () {
            //alert(123);
            if (!this.IsText) {
                this.getR().showTextEdit();
                //this.getR().addBody();
                this.IsText = true;
            }
        };
        ;
        PublisherCer.prototype.PublicImage = function () {
            //------------
            this.getR().clearupload();
            if (!this.IsText) {
                this.getR().showTextEdit();
                //this.getR().addBody();
                this.IsText = true;
            }
            if (!this.IsImage) {
                this.getR().showImage();
                this.IsImage = true;
                this.IsFile = false;
            }
        };
        ;
        PublisherCer.prototype.PublicFile = function () {
            //------------
            this.getR().clearupload();
            if (!this.IsText) {
                this.getR().showTextEdit();
                //this.getR().addBody();
                this.IsText = true;
            }
            if (!this.IsFile) {
                this.getR().showFile();
                this.IsFile = true;
                this.IsImage = false;
            }
        };
        ;
        PublisherCer.prototype.Vote = function () {
            var Vote = require("votemrc");
            var _vote = new Vote();
            _vote.init();
        };
        PublisherCer.prototype.All = function () {
            this.getR().All();
        };
        ;
        PublisherCer.prototype.afterPublisher = function () {
            this.ActivMRC.C.routNewsComming();
        };
        ;
        PublisherCer.prototype.setModel = function (p1, p2) {
            this.getM().ClubId = p1;
            this.getM().ClubName = p2;
        };
        return PublisherCer;
    }(pageCerFile.BasePageCer));
    exports.PublisherCer = PublisherCer;
});
