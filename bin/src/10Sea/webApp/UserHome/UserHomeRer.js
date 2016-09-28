var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var UserHomeRer = (function (_super) {
        __extends(UserHomeRer, _super);
        function UserHomeRer() {
            _super.apply(this, arguments);
            this.$UserInfo = null;
            this.$UserActivity = null;
            this.$UserClub = null;
            this.$UserDocument = null;
            this.UserId = null;
            this.$MainDiv = null;
            this.$MainDiv1 = null;
            this.$Tab = null;
            this.$Content = null;
        }
        UserHomeRer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        UserHomeRer.prototype.initialize = function (onfig, controller, $dom, userId) {
            this.$MainDiv = $("<div class='panel'></div>");
            this.$MainDiv1 = $("<div class='panel'></div>"); //
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
            _super.prototype.dispose.call(this);
        };
        ;
        UserHomeRer.prototype.initR = function (userId) {
            _super.prototype.dispose.call(this);
            this.UserId = userId;
            this.$JObj.append(this.$MainDiv);
            this.$JObj.append(this.$MainDiv1); //
            this.$MainDiv.append(this.$UserInfo);
            this.$MainDiv1.append(this.$Tab); //
            this.initUserInfo();
            this.initTab();
        };
        UserHomeRer.prototype.initUserInfo = function () {
            var Creator = require("Personalinformationmrc");
            var _creator = new Creator();
            _creator.setModel(this.UserId, this.initUserClubHead());
            _creator.init(this.$UserInfo);
        };
        UserHomeRer.prototype.initUserClubHead = function () {
            var _this = this;
            return function (title) {
                var _head = "我的圈子";
                if (!_this.UserId.isEmpty() && _this.UserId != $.AKjs.LoginId) {
                    _head = title + "的圈子";
                }
                _this.$UserClub.find(".ACT-HEAD").html(_head);
            };
        };
        ;
        UserHomeRer.prototype.initTab = function () {
            this.initUserActivity();
            this.initUserDocument();
        };
        UserHomeRer.prototype.initUserActivity = function () {
            var _per = require("activitymrc");
            _per = new _per();
            // _per.creator();
            _per.init(this.$Tab.find("#ACT-USER-ACTIVITY"), { type: "Activity", userID: this.UserId });
        };
        ;
        UserHomeRer.prototype.loadRight = function ($dom) {
            $dom.prepend(this.$UserClub);
            // $dom.append(this.$UserDocument); 
            this.initUserClub();
            //this.initUserDocument();
        };
        ;
        UserHomeRer.prototype.initUserClub = function () {
            var CircleCreator = require("usercirclemrc");
            var _creator = new CircleCreator();
            _creator.setModel(this.UserId);
            _creator.init(this.$UserClub);
        };
        ;
        UserHomeRer.prototype.initUserDocument = function () {
            this.getC().loadDocumentMoreAction();
            var Creator = require("userdocumentcentermrc");
            var _creator = new Creator();
            _creator.setModel(this.UserId);
            _creator.init(this.$Tab.find("#ACT-USER-DOCUMENT .ACT-CONTENT"));
        };
        UserHomeRer.prototype.initDocumentMoreAction = function () {
            this.$Tab.find("#ACT-USER-DOCUMENT .ACT-MORE-ACTION").append("<a class='btn btn-default ACT-A-HREF acs-document-more-action' href='$documentcenter$'>更多操作<i class='icon-double-angle-right'></i></a>");
            $.AKjs.App.bindPageEvent(this.$Tab.find("#ACT-USER-DOCUMENT"));
        };
        ;
        return UserHomeRer;
    }(baseRerFile.AkBaseRenderer));
    exports.UserHomeRer = UserHomeRer;
});
