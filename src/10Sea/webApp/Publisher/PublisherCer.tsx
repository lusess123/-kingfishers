import pageCerFile = require("./../BasePageCer");
import mFile = require("./PublisherMer");
import rFile = require("./PublisherRer");
import utilFile = require("./../../../01core/Util");

export class PublisherCer extends pageCerFile.BasePageCer {

    public getM(): mFile.PublisherMer {
        return utilFile.Core.Util.Cast<mFile.PublisherMer>(this.M);
    }

    public getR(): rFile.PublisherRer {
        return utilFile.Core.Util.Cast<rFile.PublisherRer>(this.R);
    }


    public AkName = "PublisherCer";
    public IsText = false;
    public IsImage = false;
    public IsFile = false;
    public ActivMRC = null;


    public init() {
        var mylogo;
        var _logo = null;
        var _this = this;
        if (!mylogo) {
            _logo =this.getM().MyLogo;

        }
       this.getM().getAllBusinessM(function (res) {
            _this.getR().init(_logo, res);
        })

    };

    public publicText(content, shareData, callBack) {
       this.getM().publicText(content, shareData, callBack);
    };

    public publicImage(imageStr, content, shareData, callBack) {
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

    public publicFile(fileStr, content, shareData, callBack) {
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

    public MicrText() {
        //alert(123);
        if (!this.IsText) {
            this.getR().showTextEdit();
            //this.getR().addBody();
            this.IsText = true;
        }
    };

    public PublicImage() {
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

    public PublicFile() {
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

    public Vote() {
        var Vote = require("votemrc");
        var _vote = new Vote();
        _vote.init();
    }

    public All() {
        this.getR().All();
    };

    public afterPublisher() {
        this.ActivMRC.C.routNewsComming();
    };

    public setModel(p1, p2) {
       this.getM().ClubId = p1;
       this.getM().ClubName = p2;
    }
}