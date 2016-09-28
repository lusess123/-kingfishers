import baseMerFile = require("./../../core/mcrv/AkBaseModel");


export class ActivityMer extends baseMerFile.AkBaseModel {

    public getTopMyWork(callback) {
        $.AKjs.getJSON("/module/module", { xml: "module/workflow/topMyWork.xml", pageStyle: "List" }, callback);
    }

    public getAll(param, callback) {
        param = param ? param : {};
        var userID = param.userID ? param.userID : "";
        var circleID = param.circleID ? param.circleID : "";
        $.AKjs.getJSON("/SNS/SNSActivity/GetActivity?UserID=" + userID + "&ClubID=" + circleID, {}, callback);
    }


    public getAllNewsComming(param, callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var url = "/module/module?LatestTime=" + _latestTime;
        var circleID = param && param.circleID ? param.circleID : "";
        var url = url + "&ClubID=" + circleID;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", pageStyle: "List" }, callback);
    };
    public getAllMore(param, callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        var userID = param.userID ? param.userID : "";
        var circleID = param.circleID ? param.circleID : "";
        //var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime;
        $.AKjs.getJSON("/SNS/SNSActivity/GetActivity?UserID=" +
            userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime, {}, callback);
        //$.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", pageStyle: "List" }, callback);
    };
    public getRelationMeM(param, callback) {
        var ownerID = param.userID ? param.userID : $.AKjs.LoginId;
        var url = "/module/module?OwnerID=" + ownerID;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_relationmeactivities.xml", pageStyle: "List" }, callback);
    }
    public getRelationMeNewsComming(param, callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var ownerID = param.userID ? param.userID : $.AKjs.LoginId;
        var url = "/module/module?OwnerID=" + ownerID + "&LatestTime=" + _latestTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_relationmeactivities.xml", pageStyle: "List" }, callback);
    };
    public getRelationMeMoreM(param, callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        var ownerID = param.userID ? param.userID : $.AKjs.LoginId;
        var url = "/module/module?OwnerID=" + ownerID + "&LastTime=" + _lastTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_relationmeactivities.xml", pageStyle: "List" }, callback);
    }
    public getWorkflowM(param, callback) {
        var _ds = '{ "SNS_ACTIVITIES_SEARCH": [{ "ACTIVITYITEMTYPE": "WorkFlow"}] }';
        var userID = param.userID ? param.userID : $.AKjs.LoginId;
        var circleID = param.circleID ? param.circleID : "";
        var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", ds: _ds, pageStyle: "List" }, callback);
    };
    public getWorkflowNewsComming(param, callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var _ds = '{ "SNS_ACTIVITIES_SEARCH": [{ "ACTIVITYITEMTYPE": "WorkFlow"}] }';
        var userID = param.userID ? param.userID : $.AKjs.LoginId;
        var circleID = param.circleID ? param.circleID : "";
        var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LatestTime=" + _latestTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", ds: _ds, pageStyle: "List" }, callback);
    };
    public getWorkflowMoreM(param, callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        var userID = param.userID ? param.userID : $.AKjs.LoginId;
        var circleID = param.circleID ? param.circleID : "";
        var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime;
        var _ds = '{ "SNS_ACTIVITIES_SEARCH": [{ "ACTIVITYITEMTYPE": "WorkFlow"}] }';
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_activities.xml", ds: _ds, pageStyle: "List" }, callback);
    };
    public getCircleM(callback) {
        $.AKjs.getJSON("/module/module", { xml: "module/sns/activity/sns_circleactivities.xml", pageStyle: "List" }, callback);
    };
    public getCircleNewsComming(callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var url = "/module/module?LatestTime=" + _latestTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_circleactivities.xml", pageStyle: "List" }, callback);
    };
    public getCircleMoreM(callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        $.AKjs.getJSON("/module/module?LastTime=" + _lastTime, { xml: "module/sns/activity/sns_circleactivities.xml", pageStyle: "List" }, callback);
    };

    //未读
    public getUnreadM(callback) {
        var ownerID = $.AKjs.LoginId;
        // var actiivityStatus = "0";
        var url = "/module/module?OwnerID=" + ownerID;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities.xml", pageStyle: "List" }, callback);
    };
    public getUnreadNewsComming(callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var ownerID = $.AKjs.LoginId;
        // var actiivityStatus = "0";
        var url = "/module/module?OwnerID=" + ownerID + "&LatestTime=" + _latestTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities.xml", pageStyle: "List" }, callback);
    };
    public getUnreadMoreM(callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        var ownerID = $.AKjs.LoginId;
        //var actiivityStatus = "0";
        var url = "/module/module?OwnerID=" + ownerID + "&LastTime=" + _lastTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities.xml", pageStyle: "List" }, callback);
    };

    public getUnreadNumM(callback) {
        var ownerID = $.AKjs.LoginId;
        // var actiivityStatus = "0";
        var url = "/module/module?OwnerID=" + ownerID;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_unreadactivities_num.xml", pageStyle: "List" }, callback);
    };

    public updateUnreadM() {
        var ownerID = $.AKjs.LoginId;
        var _postDs = {};
        var _dt = _postDs["SNS_ACTIVITIES"] = [];
        var _row = { FID: " ", OWNERID: ownerID };
        _dt.push(_row);
        $.AKjs.getJSON("/module/modulemerge", { xml: "module/sns/activity/sns_unreadactivities.xml", ds: $.toJSON(_postDs), pageStyle: "Update" });
    };

    public updateNewsUnreadM() {
        var ownerID = $.AKjs.LoginId;
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var _postDs = {};
        var _dt = _postDs["SNS_ACTIVITIES"] = [];
        var _row = { FID: " ", OWNERID: ownerID, CREATE_TIME: _latestTime };
        _dt.push(_row);
        $.AKjs.getJSON("/module/modulemerge", { xml: "module/sns/activity/sns_unreadactivities.xml", ds: $.toJSON(_postDs), pageStyle: "Update" });
    };

    public getAttentionM(param, callback) {
        var userID = param.userID ? param.userID : "";
        var circleID = param.circleID ? param.circleID : "";
        var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID;

        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_attentionactivities.xml", pageStyle: "List" }, callback);
    };
    public getAttentionNewsComming(param, callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var userID = param.userID ? param.userID : "";
        var circleID = param.circleID ? param.circleID : "";
        var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LatestTime=" + _latestTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_attentionactivities.xml", pageStyle: "List" }, callback);
    };
    public getAttentionMoreM(param, callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        var userID = param.userID ? param.userID : "";
        var circleID = param.circleID ? param.circleID : "";
        var url = "/module/module?UserID=" + userID + "&ClubID=" + circleID + "&LastTime=" + _lastTime;

        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_attentionactivities.xml", pageStyle: "List" }, callback);
    };

    public getAllVote(callBack) {
        $.AKjs.getJSON("/module/module", { xml: "module/sns/vote/vote.xml", pageStyle: "List" }, callBack);
    }

    public getVoteMore(callBack) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        $.AKjs.getJSON("/module/module?LastTime=" + _lastTime, { xml: "module/sns/vote/vote.xml", pageStyle: "List" }, callBack);
    }

    //我的收藏
    public getMyFavoriteM(callback) {
        var userID = $.AKjs.LoginId;
        var url = "/module/module?UserID=" + userID;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_favorite.xml", pageStyle: "List" }, callback);
    };
    public getMyFavoriteNewsComming(callback) {
        var _latestTime = $.AKjs.App.LatestActivityTime;
        var userID = $.AKjs.LoginId;
        var url = "/module/module?UserID=" + userID + "&LatestTime=" + _latestTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_favorite.xml", pageStyle: "List" }, callback);
    };
    public getMyFavoriteMoreM(callback) {
        var _lastTime = $.AKjs.App.LastActivityTime;
        var userID = $.AKjs.LoginId;
        var url = "/module/module?UserID=" + userID + "&LastTime=" + _lastTime;
        $.AKjs.getJSON(url, { xml: "module/sns/activity/sns_favorite.xml", pageStyle: "List" }, callback);
    };
}