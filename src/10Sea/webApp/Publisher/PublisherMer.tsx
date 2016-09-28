import baseMerFile = require("./../../core/mcrv/AkBaseModel");


export class PublisherMer extends baseMerFile.AkBaseModel {

    public AkName = "PublisherCer";
    public MyLogo = "http://192.168.66.11:99/Core/User/logo/atawsmysecret_60-60.jpg";
    public ClubId = null;
    public ClubName = null;

    public publicText(content, shareData, callBack) {
        //-------
        var _ds = {};
        var _blogDt = _ds["SNS_MICROBLOGS"] = [];
        var _row = { FID: null, BODY: content, ORIGINALID: null, FORWARDEDID: null };
        _blogDt.push(_row);
        //---------------------

        //			var _privacyDt = _ds["ACTIVITIES_PRIVACY"] = [];
        //			var _row2 = { CLUBID: this.ClubId, CLUBNAME: null, PRIVACYSTATUS: null, OWNERID: null };
        //			if (this.ClubId && !this.ClubId.isEmpty()) {
        //				privacy = "ToClub";
        //				_row2["CLUBNAME"] = this.ClubName;
        //				_row2["OWNERID"] = this.ClubId;
        //			}

        //			_row2["PRIVACYSTATUS"] = privacy;
        //			if (privacy == "ToDepartment" || privacy == "ToUser") {
        //				_row2["OWNERID"] = ownerid;
        //			}

        //			_privacyDt.push(_row2);
        //-------------------------------------
        var _privacyDt = _ds["ACTIVITIES_PRIVACY"] = shareData;
        if (this.ClubId && !this.ClubId.isEmpty()) {
            _privacyDt = [];
            var _row2 = { CLUBID: this.ClubId, CLUBNAME: null, PRIVACY: null, OWNERID: null };
            _row2["CLUBNAME"] = this.ClubName;
            _row2["OWNERID"] = this.ClubId;
            _row2["PRIVACY"] = "ToClub";
        };
        $.AKjs.getJSON("/module/modulemerge",
            {
                xml: "module/sns/microblog/sns_microblogs.xml",
                ds: $.toJSON(_ds),
                pageStyle: "Insert"
            },
            callBack);
    };
    public getAllBusinessM(callback) {
        $.AKjs.getJSON("/Right/Desk/GetBussinessConfig", {}, callback);
    }

    public saveThePictureM(imgJson, privacy) {
        $.AKjs.getJSON("/sns/AllDocument/MicroblogsPictureFiles", { url: imgJson, type: privacy }, function (res) { });
    }

    public saveTheDocumentM(fileJson, privacy) {
        $.AKjs.getJSON("/sns/AllDocument/MicroblogsDocumentFiles", { url: fileJson, type: privacy }, function (res) { });
    }
}