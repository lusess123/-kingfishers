var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage", "./../BasePageCer", "./../../core/mcrv/AkBaseModel", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util", "./../Publisher/PublisherMRC", "./../Activity/ActivityMRC"], function (require, exports, mrcFile, iocFile, iPageFile, pageCerFile, baseMerFile, baseRerFile, utilFile, publishermrc, activitymrc) {
    "use strict";
    var CenterInfoMer = (function (_super) {
        __extends(CenterInfoMer, _super);
        function CenterInfoMer() {
            _super.apply(this, arguments);
            this.Param = "";
        }
        return CenterInfoMer;
    }(baseMerFile.AkBaseModel));
    exports.CenterInfoMer = CenterInfoMer;
    var CenterInfoCer = (function (_super) {
        __extends(CenterInfoCer, _super);
        function CenterInfoCer() {
            _super.apply(this, arguments);
            this.LayOutName = "2,10,0";
        }
        CenterInfoCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        CenterInfoCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        CenterInfoCer.prototype.init = function () {
            // var _this = this;
            //alert();
            this.getR().initR(this.getM().Param);
        };
        ;
        CenterInfoCer.prototype.setModel = function (p1, p2, p3) {
            //alert(p1 + "  "+ p2 + "  "+p3);
            this.getM().Param = p1;
            //this.M.PageStyle = p2;
        };
        ;
        CenterInfoCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$CenterInfo$");
            //$.AKjs.AppGet().LayOut.layOutTransFormPage("VTV");
        };
        ;
        CenterInfoCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            // $.AKjs.AppGet().R.getRight$DomR().find(".ACT-IM").hide();
        };
        ;
        CenterInfoCer.prototype.loadLayOut = function () {
            if (this.LayOutName != "") {
                if ($.AKjs.AppGet().R.$ActAppRight != null && $.AKjs.AppGet().R.$ActAppRight.length > 0) {
                    $.AKjs.AppGet().LayOut.layOutTransFormPage(this.LayOutName);
                }
                else {
                    $.AKjs.AppGet().LayOut.layOutTransFormPage("0,12,0");
                }
            }
        };
        return CenterInfoCer;
    }(pageCerFile.BasePageCer));
    exports.CenterInfoCer = CenterInfoCer;
    var CenterInfoRer = (function (_super) {
        __extends(CenterInfoRer, _super);
        function CenterInfoRer() {
            _super.apply(this, arguments);
            this.$PublisherDiv = null;
            this.$ActivityDiv = null;
            this._per0 = null;
            this._per = null;
        }
        CenterInfoRer.prototype.initR = function (param) {
            //alert(param);
            param = param ? param : "MyWork";
            $.AKjs.App.LatestActivityTime = null;
            $.AKjs.App.LastActivityTime = null;
            this.$PublisherDiv = $("<div class ='ACT-PUBLISH-APP clear panel' style='padding-top: 30px;padding-bottom: 18px;'></div>");
            this.$ActivityDiv = $("<div class='ACT-ACTIVITY-APP col-md-12 pd0'></div>");
            this.$JObj.append(this.$PublisherDiv);
            this.$JObj.append(this.$ActivityDiv);
            //-------
            var _this = this;
            // _this.clearMain();
            //$.AKjs.Activity(this.$JObj, "", "", param);
            this.initPublisher();
            this.initActivity(param);
            var _$rightDv = $("#ACT-APP-RIGHT");
            _$rightDv.find(".ACT-RIGHT-COMMON").show();
            _$rightDv.find(".ACT-RIGHT-CUSTOM").remove();
            $(".unreadmsg_count").html("");
            $["cookie"]("UnReadMsgCount", "", { path: '/' });
            //this.bindPageEvent(this.$ActMain);
        };
        ;
        CenterInfoRer.prototype.initPublisher = function () {
        };
        ;
        CenterInfoRer.prototype.initActivity = function (param) {
            // var _per0 = require("publishermrc");
            this._per0 = new publishermrc.PublishMRC();
            // _per0 = new _per0();
            this._per0.init(this.$PublisherDiv);
            //var _per = require("activitymrc");
            //_per = new _per();
            this._per = new activitymrc.ActivityMRC();
            this._per0.C.ActivMRC = this._per;
            this._per.init(this.$ActivityDiv, { type: param });
        };
        ;
        return CenterInfoRer;
    }(baseRerFile.AkBaseRenderer));
    exports.CenterInfoRer = CenterInfoRer;
    var CenterInfoMRC = (function (_super) {
        __extends(CenterInfoMRC, _super);
        function CenterInfoMRC() {
            _super.call(this, new CenterInfoCer(), new CenterInfoMer(), new CenterInfoRer());
        }
        return CenterInfoMRC;
    }(mrcFile.BasePageMRC));
    exports.CenterInfoMRC = CenterInfoMRC;
    iocFile.Core.Ioc.Current().RegisterType("CENTERINFO", iPageFile.PageFace, CenterInfoMRC);
});
