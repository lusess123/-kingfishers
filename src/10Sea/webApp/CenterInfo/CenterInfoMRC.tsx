import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

import pageCerFile = require("./../BasePageCer");
import baseMerFile = require("./../../core/mcrv/AkBaseModel");
import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import utilFile = require("./../../../01core/Util");


import publishermrc = require("./../Publisher/PublisherMRC");
import activitymrc = require("./../Activity/ActivityMRC");

export class CenterInfoMer extends baseMerFile.AkBaseModel {
    public Param: string = "";
}
export class CenterInfoCer extends pageCerFile.BasePageCer {
    public getM(): CenterInfoMer {
        return utilFile.Core.Util.Cast<CenterInfoMer>(this.M);
    }

    public getR(): CenterInfoRer {
        return utilFile.Core.Util.Cast<CenterInfoRer>(this.R);
    }

    public LayOutName: string = "2,10,0";
    public init() {
        // var _this = this;
        //alert();
        this.getR().initR(this.getM().Param);
    };


    public setModel(p1, p2, p3) {
        //alert(p1 + "  "+ p2 + "  "+p3);
        this.getM().Param = p1;
        //this.M.PageStyle = p2;
    };

    public loadMenu() {
        $.AKjs.AppGet().Menu.gotoMenuLoction("$CenterInfo$");
        //$.AKjs.AppGet().LayOut.layOutTransFormPage("VTV");
    };

    public clearPage() {
        $.AKjs.AppGet().hideNavi();
        // $.AKjs.AppGet().R.getRight$DomR().find(".ACT-IM").hide();
    };
    public loadLayOut() {
        if (this.LayOutName != "") {
            if ($.AKjs.AppGet().R.$ActAppRight != null && $.AKjs.AppGet().R.$ActAppRight.length > 0) {
                $.AKjs.AppGet().LayOut.layOutTransFormPage(this.LayOutName);
            }
            else {
                $.AKjs.AppGet().LayOut.layOutTransFormPage("0,12,0");
            }
        }
    }

}

export class CenterInfoRer extends baseRerFile.AkBaseRenderer {

    public $PublisherDiv: JQuery = null;
    public $ActivityDiv: JQuery = null;
    public _per0 = null;
    public _per = null;

    public initR(param?: string) {
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

    public initPublisher() {

    };

    public initActivity(param: string) {
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

}

export class CenterInfoMRC extends mrcFile.BasePageMRC<CenterInfoCer, CenterInfoMer, CenterInfoRer>{
    public constructor() {
        super(new CenterInfoCer(), new CenterInfoMer(), new CenterInfoRer());
    }
}




iocFile.Core.Ioc.Current().RegisterType("CENTERINFO", iPageFile.PageFace, CenterInfoMRC);