var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var PublisherMer = (function (_super) {
        __extends(PublisherMer, _super);
        function PublisherMer() {
            _super.apply(this, arguments);
            this.AkName = "PublisherCer";
            this.MyLogo = "http://192.168.66.11:99/Core/User/logo/atawsmysecret_60-60.jpg";
            this.ClubId = null;
            this.ClubName = null;
        }
        PublisherMer.prototype.publicText = function (content, shareData, callBack) {
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
            }
            ;
            $.AKjs.getJSON("/module/modulemerge", {
                xml: "module/sns/microblog/sns_microblogs.xml",
                ds: $.toJSON(_ds),
                pageStyle: "Insert"
            }, callBack);
        };
        ;
        PublisherMer.prototype.getAllBusinessM = function (callback) {
            $.AKjs.getJSON("/Right/Desk/GetBussinessConfig", {}, callback);
        };
        PublisherMer.prototype.saveThePictureM = function (imgJson, privacy) {
            $.AKjs.getJSON("/sns/AllDocument/MicroblogsPictureFiles", { url: imgJson, type: privacy }, function (res) { });
        };
        PublisherMer.prototype.saveTheDocumentM = function (fileJson, privacy) {
            $.AKjs.getJSON("/sns/AllDocument/MicroblogsDocumentFiles", { url: fileJson, type: privacy }, function (res) { });
        };
        return PublisherMer;
    }(baseMerFile.AkBaseModel));
    exports.PublisherMer = PublisherMer;
});
