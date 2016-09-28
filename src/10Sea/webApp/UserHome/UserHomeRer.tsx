import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./UserHomeCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");

export class UserHomeRer extends baseRerFile.AkBaseRenderer {
    public $UserInfo = null;
    public $UserActivity = null;
    public $UserClub = null;
    public $UserDocument = null;
    public UserId = null;
    public $MainDiv = null;
    public $MainDiv1 = null;
    public $Tab = null;
    public $Content = null;

    public getC(): cFile.UserHomeCer{
        return utilFile.Core.Util.Cast<cFile.UserHomeCer>(this.C);
    }

    public initialize(onfig, controller, $dom, userId) {
        this.$MainDiv = $("<div class='panel'></div>");
        this.$MainDiv1 = $("<div class='panel'></div>");  //
        this.$UserInfo = $("<div class='panel-body ask-perhomepage'></div>");
        this.$UserClub = $("<div class='panel panel-default ACT-RIGHT-CUSTOM'><div class='panel-heading ACT-HEAD'></div></div>");
        this.$Tab = $("<div class='panel-body' id='panel-body-data'><div class='col-md-12 ask-example-tabs'><div class='bs-example bs-example-tabs'><div class='tab-content' id='myTabContent'>  <div class='tab-pane fade active in'>" +
            "<ul class='nav nav-tabs ask-mytab-heading' id='myTab' role='tablist'>" +
            "<li class='my-tab active'><a href='#ACT-USER-ACTIVITY' data-toggle='tab'>动态</a></li>" +
            "<li class='my-tab'><a href='#ACT-USER-DOCUMENT' data-toggle='tab'>文档</a></li></ul>" +
            "<div class='tab-content'>" +
            " <div class='tab-pane fade active in activities_main' id='ACT-USER-ACTIVITY'>" +

            "</div>" +

            "<div class='tab-pane panel clearfix' id='ACT-USER-DOCUMENT'>" +
            // "<ul class='qing_messages content-messages clear'>"
            "<div class='ACT-MORE-ACTION'></div><div class='ACT-CONTENT'></div></div>" +
            "</div>  </div></div></div></div></div>");
        this.$Content = $("<div></div>");
        super.dispose();
    };

    public initR(userId) {
        super.dispose();
        this.UserId = userId;
        this.$JObj.append(this.$MainDiv);
        this.$JObj.append(this.$MainDiv1); //
        this.$MainDiv.append(this.$UserInfo);
        this.$MainDiv1.append(this.$Tab);  //

        this.initUserInfo();
        this.initTab();
    }

    public initUserInfo() {
        var Creator = require("Personalinformationmrc");
        var _creator = new Creator();
        _creator.setModel(this.UserId, this.initUserClubHead());
        _creator.init(this.$UserInfo);
    }

    public initUserClubHead() {
        var _this = this;
        return function (title) {
            var _head = "我的圈子";
            if (!_this.UserId.isEmpty() && _this.UserId != $.AKjs.LoginId) {
                _head = title + "的圈子";
            }
            _this.$UserClub.find(".ACT-HEAD").html(_head);
        }
    };

    public initTab() {
        this.initUserActivity();
        this.initUserDocument();
    }

    public initUserActivity() {
        var _per = require("activitymrc");
        _per = new _per();
        // _per.creator();
        _per.init(this.$Tab.find("#ACT-USER-ACTIVITY"), { type: "Activity", userID: this.UserId });
    };

    public loadRight($dom) {
        $dom.prepend(this.$UserClub);
        // $dom.append(this.$UserDocument); 
        this.initUserClub();
            //this.initUserDocument();
    };

    public initUserClub() {
        var CircleCreator = require("usercirclemrc");
        var _creator = new CircleCreator();
        _creator.setModel(this.UserId);
        _creator.init(this.$UserClub);
    };

    public initUserDocument() {
        this.getC().loadDocumentMoreAction();
        var Creator = require("userdocumentcentermrc");
        var _creator = new Creator();
        _creator.setModel(this.UserId)
        _creator.init(this.$Tab.find("#ACT-USER-DOCUMENT .ACT-CONTENT"));
    }

    public initDocumentMoreAction() {
        this.$Tab.find("#ACT-USER-DOCUMENT .ACT-MORE-ACTION").append("<a class='btn btn-default ACT-A-HREF acs-document-more-action' href='$documentcenter$'>更多操作<i class='icon-double-angle-right'></i></a>");
        $.AKjs.App.bindPageEvent(this.$Tab.find("#ACT-USER-DOCUMENT"));
    };
}