var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var ActivityMer = (function (_super) {
        __extends(ActivityMer, _super);
        function ActivityMer() {
            _super.apply(this, arguments);
        }
        ActivityMer.prototype.getTopMyWork = function (callback) {
            $.AKjs.getJSON("/module/module", { xml: "module/workflow/topMyWork.xml", pageStyle: "List" }, callback);
        };
        ActivityMer.prototype.getAll = function (param, callback) {
            param = param ? param : {};
            var userID = param.userID ? param.userID : "";
            var circleID = param.circleID ? param.circleID : "";
            $.AKjs.getJSON("/SNS/SNSActivity/GetActivity?UserID=" + userID + "&ClubID=" + circleID, {}, callback);
        };
        ActivityMer.prototype.getAllNewsComming = function (param, callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var url = "/module/module?LatestTime=" + _latestTime;
            var circleID = param && param.circleID ? param.circleID : "";
            var url = url + "&ClubID=" + circleID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getAllMore = function (param, callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            var userID = param.userID ? param.userID : "";
            var circleID = param.circleID ? param.circleID : "";
            //var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime;
            $.AKjs.getJSON("/SNS/SNSActivity/GetActivity?UserID=" +
                userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime, {}, callback);
            //$.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getRelationMeM = function (param, callback) {
            var ownerID = param.userID ? param.userID : $.AKjs.LoginId;
            var url = "/module/module?OwnerID=" + ownerID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_relationmeactivities.xml", pageStyle: "List" }, callback);
        };
        ActivityMer.prototype.getRelationMeNewsComming = function (param, callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var ownerID = param.userID ? param.userID : $.AKjs.LoginId;
            var url = "/module/module?OwnerID=" + ownerID + "&LatestTime=" + _latestTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_relationmeactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getRelationMeMoreM = function (param, callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            var ownerID = param.userID ? param.userID : $.AKjs.LoginId;
            var url = "/module/module?OwnerID=" + ownerID + "&LastTime=" + _lastTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_relationmeactivities.xml", pageStyle: "List" }, callback);
        };
        ActivityMer.prototype.getWorkflowM = function (param, callback) {
            var _ds = '{ "SNS_ACTIVITIES_SEARCH": [{ "ACTIVITYITEMTYPE": "WorkFlow"}] }';
            var userID = param.userID ? param.userID : $.AKjs.LoginId;
            var circleID = param.circleID ? param.circleID : "";
            var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", ds: _ds, pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getWorkflowNewsComming = function (param, callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var _ds = '{ "SNS_ACTIVITIES_SEARCH": [{ "ACTIVITYITEMTYPE": "WorkFlow"}] }';
            var userID = param.userID ? param.userID : $.AKjs.LoginId;
            var circleID = param.circleID ? param.circleID : "";
            var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LatestTime=" + _latestTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", ds: _ds, pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getWorkflowMoreM = function (param, callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            var userID = param.userID ? param.userID : $.AKjs.LoginId;
            var circleID = param.circleID ? param.circleID : "";
            var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime;
            var _ds = '{ "SNS_ACTIVITIES_SEARCH": [{ "ACTIVITYITEMTYPE": "WorkFlow"}] }';
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", ds: _ds, pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getCircleM = function (callback) {
            $.AKjs.getJSON("/module/module", { xml: "module/sns/activity/sns_circleactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getCircleNewsComming = function (callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var url = "/module/module?LatestTime=" + _latestTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_circleactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getCircleMoreM = function (callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            $.AKjs.getJSON("/module/module?LastTime=" + _lastTime, { xml: "module/sns/activity/sns_circleactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        //未读
        ActivityMer.prototype.getUnreadM = function (callback) {
            var ownerID = $.AKjs.LoginId;
            // var actiivityStatus = "0";
            var url = "/module/module?OwnerID=" + ownerID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getUnreadNewsComming = function (callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var ownerID = $.AKjs.LoginId;
            // var actiivityStatus = "0";
            var url = "/module/module?OwnerID=" + ownerID + "&LatestTime=" + _latestTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getUnreadMoreM = function (callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            var ownerID = $.AKjs.LoginId;
            //var actiivityStatus = "0";
            var url = "/module/module?OwnerID=" + ownerID + "&LastTime=" + _lastTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getUnreadNumM = function (callback) {
            var ownerID = $.AKjs.LoginId;
            // var actiivityStatus = "0";
            var url = "/module/module?OwnerID=" + ownerID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities_num.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.updateUnreadM = function () {
            var ownerID = $.AKjs.LoginId;
            var _postDs = {};
            var _dt = _postDs["SNS_ACTIVITIES"] = [];
            var _row = { FID: " ", OWNERID: ownerID };
            _dt.push(_row);
            $.AKjs.getJSON("/module/modulemerge", { xml: "module/sns/activity/sns_unreadactivities.xml", ds: $.toJSON(_postDs), pageStyle: "Update" });
        };
        ;
        ActivityMer.prototype.updateNewsUnreadM = function () {
            var ownerID = $.AKjs.LoginId;
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var _postDs = {};
            var _dt = _postDs["SNS_ACTIVITIES"] = [];
            var _row = { FID: " ", OWNERID: ownerID, CREATE_TIME: _latestTime };
            _dt.push(_row);
            $.AKjs.getJSON("/module/modulemerge", { xml: "module/sns/activity/sns_unreadactivities.xml", ds: $.toJSON(_postDs), pageStyle: "Update" });
        };
        ;
        ActivityMer.prototype.getAttentionM = function (param, callback) {
            var userID = param.userID ? param.userID : "";
            var circleID = param.circleID ? param.circleID : "";
            var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_attentionactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getAttentionNewsComming = function (param, callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var userID = param.userID ? param.userID : "";
            var circleID = param.circleID ? param.circleID : "";
            var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LatestTime=" + _latestTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_attentionactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getAttentionMoreM = function (param, callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            var userID = param.userID ? param.userID : "";
            var circleID = param.circleID ? param.circleID : "";
            var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_attentionactivities.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getAllVote = function (callBack) {
            $.AKjs.getJSON("/module/module", { xml: "module/sns/vote/vote.xml", pageStyle: "List" }, callBack);
        };
        ActivityMer.prototype.getVoteMore = function (callBack) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            $.AKjs.getJSON("/module/module?LastTime=" + _lastTime, { xml: "module/sns/vote/vote.xml", pageStyle: "List" }, callBack);
        };
        //我的收藏
        ActivityMer.prototype.getMyFavoriteM = function (callback) {
            var userID = $.AKjs.LoginId;
            var url = "/module/module?UserID=" + userID;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_favorite.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getMyFavoriteNewsComming = function (callback) {
            var _latestTime = $.AKjs.App.LatestActivityTime;
            var userID = $.AKjs.LoginId;
            var url = "/module/module?UserID=" + userID + "&LatestTime=" + _latestTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_favorite.xml", pageStyle: "List" }, callback);
        };
        ;
        ActivityMer.prototype.getMyFavoriteMoreM = function (callback) {
            var _lastTime = $.AKjs.App.LastActivityTime;
            var userID = $.AKjs.LoginId;
            var url = "/module/module?UserID=" + userID + "&LastTime=" + _lastTime;
            $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_favorite.xml", pageStyle: "List" }, callback);
        };
        ;
        return ActivityMer;
    }(baseMerFile.AkBaseModel));
    exports.ActivityMer = ActivityMer;
});
