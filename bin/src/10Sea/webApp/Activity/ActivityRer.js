var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var ActivityRer = (function (_super) {
        __extends(ActivityRer, _super);
        function ActivityRer() {
            _super.apply(this, arguments);
            this.AkName = "ActivityRer";
            this.$Header = null;
            this.$MyWork = null;
            this.$NewMain = null;
            this.$Main = null;
            this.$OldMain = null;
            this.$lastdiv = null;
            this.param = null;
            this.$HeaderContent = null;
            this.$SecondHeader = null;
        }
        ActivityRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        ActivityRer.prototype.init = function (param) {
            this.param = param;
            param = param ? param : { type: "MyWork" };
            $.AKjs.App.LatestActivityTime = null;
            $.AKjs.App.LastActivityTime = null;
            this["$Content"] = $("<div class='panel '><div class='panel-body'><div class='col-md-12 ask-example-tabs'><div class='bs-example bs-example-tabs ACT-ACTIVITY-DATA'></div></div></div></div></div>");
            //this.$Content = $("<div class='panel panel-danger'><div class='col-md-12 ask-example-tabs'><div class='bs-example bs-example-tabs ACT-ACTIVITY-DATA'></div></div></div></div>");
            this.$Header = $('<ul class="nav nav-tabs" id="ActivityTab" role="tablist" style="margin-bottom: 15px;"></ul>');
            this.$HeaderContent = $('<div class="tab-content" id="myTab"></div>');
            var $Activity = $('<li class="my-tab active" activity_type="Activity" ><a href="#myTab" data-toggle="tab" role="tab">&nbsp;动态<label class="unreadmsg_count" style="position:relative;top:-10px;color:red;font-weight:bold"></label> </a></li>');
            var $MyWork = $('<li class="my-tab" activity_type="MyWork"><a data-toggle="tab" role="tab"><i class="icon-tasks icon-large">&nbsp;待处理事务</i></a></li>');
            var $fullcalendar = $('<li class="my-tab" activity_type="fullcalendar"><a data-toggle="tab" role="tab"><i class="icon-calendar icon-large"&nbsp;日历</i></a></li>');
            var $todayToDo = $('<li class="my-tab" activity_type="todayToDo"><a data-toggle="tab" role="tab"><i class="icon-bell-alt icon-large">&nbsp;今日待办事项</i></a></li>');
            var $Vote = $('<li class="my-tab" activity_type="Vote"><a data-toggle="tab" role="tab"><i class="icon-bar-chart icon-large">&nbsp;投票</i></a></li>');
            //第二层子菜单
            //this.$lastdiv = $("<div class='last—menu bs-example bs-example-tabs'><ul class='nav nav-tabs ask-mytab-heading' id='myTab' role='tablist'></ul></div>");
            this.$SecondHeader = $('<ul class="last—menu nav nav-tabs ask-mytab-heading"  role="tablist"></ul>');
            var $all = $("<li class='my-tab' activity_type='all' class='active'><a  data-toggle='tab' role='tab'>全部</a></li>");
            var $workflow = $("<li class='my-tab' activity_type='WorkFlow' ><a data-toggle='tab' role='tab'>事务相关</i></a></li>");
            var $relationme = $("<li class='my-tab' activity_type='relationme' ><a data-toggle='tab' role='tab'>@与我相关</a></li>");
            //var $attention = $("<li class='my-tab' activity_type='attention' ><a  data-toggle='tab' role='tab'><i class='icon-heart'></i>关注的人</a></li>");
            //var $cilcle = $("<li class='my-tab' activity_type='circle' ><a data-toggle='tab' role='tab'><i class='icon-circle-blank'>圈</i> </a></li>");
            //var $unread = $("<li class='my-tab' activity_type='unread' ><a data-toggle='tab' role='tab'><i class='icon-unread'>未读<label class='unreadmsg_count' style='position:relative;top:-10px;color:red;font-weight:bold'></label></i></a></li>");
            //var $myfavorite = $("<li class='my-tab' activity_type='myfavorite' ><a data-toggle='tab' role='tab'><i class='icon-circle-blank'>我的收藏</i> </a></li>");
            if (param && param.circleID) {
                this.$Header.append($relationme); //.append($attention);
            } //else if (param.userID) { }
            else if (param.workflow) {
                this.$Header.append($MyWork).append($Activity);
            }
            else {
                this.$Header.append($MyWork).append($Activity);
                //.append($Vote);
                this.$SecondHeader.append($all).append($workflow).append($relationme); //.append($attention).append($cilcle).append($unread).append($myfavorite);
            }
            this.$MyWork = $("<div class='activities_main_mywork'/>");
            this.$NewMain = $("<div class='activities_main_new'/>");
            this.$Main = $("<div class='activities_main'/>");
            this.$OldMain = $("<div class='activities_main_old'/>");
            this["$More"] = $("<div class='ta0'><a href='javascript:void(0)' class='acs-more'>展开更多</a></div>");
            this.$JObj.append(this["$Content"]);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this.$Header);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this.$HeaderContent);
            this.$HeaderContent.append(this.$SecondHeader);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this.$MyWork);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this.$NewMain);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this.$Main);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this.$OldMain);
            this["$Content"].find(".ACT-ACTIVITY-DATA").append(this["$More"]);
            var _this = this;
            this.$Header.find("li").unbind("click").bind("click", function () {
                var _$this = $(this);
                var activityType = _$this.attr("activity_type");
                _this.routInit(activityType);
            });
            this.$SecondHeader.find("li").unbind("click").bind("click", function () {
                var _$this = $(this);
                var activityType = _$this.attr("activity_type");
                _this.lastroutInit(activityType);
            });
            this.routInit(param.type);
        };
        ActivityRer.prototype.routNewsComming = function () {
            var type = this.$Header.find(".active").attr("activity_type");
            var type2 = this.$SecondHeader.find(".active").attr("activity_type");
            if (type === "Activity" && type2 === "all") {
                this.getCer()["exeNewComming"](type2 + 'NewsComming');
            }
            else {
                this.$Header.find("li[activity_type='all']>a").tab("show");
                this.getCer["exe"]("all");
            }
        };
        ActivityRer.prototype.routInit = function (param) {
            if (param) {
                if (param == "")
                    param = "MyWork";
                if (param == "all") {
                    param = "Activity";
                }
                if (param == "WorkFlow") {
                    param = "Activity";
                }
                if (param == "Activity") {
                    $["cookie"]("UnReadMsgCount", "0", { path: '/' });
                    $(".unreadmsg_count").html("");
                }
                var _lis = this.$Header.find("li");
                _lis.removeClass("active");
                this.$Header.find(" [activity_type='" + param + "']").addClass("active");
                if (param.toUpperCase() == "MYWORK") {
                    this.getCer()["setTopMyWork"]();
                }
                else {
                    switch (param) {
                        case "MyWork":
                            this.getCer()["setTopMyWork"]();
                            break;
                        case "Activity":
                            //  if ((!!this.param) && (!!this.param.workflow)) {
                            this.getCer()["exe"]("all");
                            break;
                        //} else {
                        //    this.$SecondHeader.find("li").removeClass("active");
                        //    this.$SecondHeader.find("[activity_type='all']").addClass("active");
                        //    this.C.exe(param);
                        //    break;
                        //}
                        case "Vote":
                            this.getCer()["getAllVote"]();
                            break;
                        default:
                            this.getCer()["exe"](param);
                            break;
                    }
                    ;
                }
            }
        };
        ;
        ActivityRer.prototype.lastroutInit = function (param) {
            if (param) {
                var activityBefore = this.$SecondHeader.find(".active").attr("activity_type");
                var _lis = this.$SecondHeader.find("li");
                _lis.removeClass("active");
                this.$SecondHeader.find(" [activity_type='" + param + "']").addClass("active");
                if (param == activityBefore) {
                    this.getCer()["exeNewComming"](param + 'NewsComming');
                }
                else {
                    this.getCer()["exe"](param);
                }
            }
        };
        ;
        ActivityRer.prototype.routMore = function (type) {
            this.getCer()["exeMore"](type + 'More');
        };
        ActivityRer.prototype.setDefault = function (res) {
            if (res.Data) {
                var unReadMsgCount = null;
                unReadMsgCount = $["cookie"]("UnReadMsgCount");
                if (unReadMsgCount == "0") {
                    this.$SecondHeader.find(".unreadmsg_count").html("");
                }
                else {
                    this.$SecondHeader.find(".unreadmsg_count").html(unReadMsgCount);
                }
                if (unReadMsgCount == null || (unReadMsgCount && unReadMsgCount.isEmpty())) {
                    this.$SecondHeader.find(".icon-unread").attr("style", "");
                }
                else {
                    this.$SecondHeader.find(".icon-unread").attr("style", "color:red;");
                }
                this["$More"].hide();
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    $.AKjs.App.LatestActivityTime = _dt[0]["CREATE_TIME"];
                    if (res.ExtData) {
                        $.AKjs.App.LastActivityTime = res.ExtData.LastTime;
                    }
                    else {
                        $.AKjs.App.LastActivityTime = _dt[_dt.length - 1]["CREATE_TIME"];
                    }
                }
                if (res.ExtData && res.ExtData.IsEnd && res.ExtData.IsEnd == "") {
                    this["$More"]["show"]();
                }
                var _form = res.Forms["SNS_ACTIVITIES"];
                _form.HasPager = false;
                _form.FormType = "Activity";
                for (var i = 0; i < _dt.length; i++) {
                    if (res.Data["SNS_ACTIVITIES"][i].SACT_SUBCONTENT == null) {
                        res.Data["SNS_ACTIVITIES"][i].SACT_SUBCONTENT = res.Data["SNS_ACTIVITIES"][i].SACT_TITLE;
                    }
                }
                var _op = { Data: res.Data, Form: _form };
                this.$Main.AtawActivityForm(_op);
                this["ActivityGroupByDate"](this.$Main);
                this["bindEvent"]();
            }
            else {
                if (!res.Header.IsValid) {
                    this.$Main.append($("<div class='text-danger'>" + res.Header.Message + "</div>"));
                }
            }
        };
        ActivityRer.prototype.ActivityGroupByDate = function ($JObj) {
            var $liList = $JObj.find("div.qing_row");
            var $ul = $("<div class='acs-timeline ACT-ACTIVITY-DATA'></div>");
            var dates = [];
            var mouth = "";
            var loginUserID = $["cookie"]("hahahaUserID");
            for (var i = 0; i < $liList.length; i++) {
                var $li = $($liList[i]);
                var dateStr = $li.find(".qing_date").text();
                var activityDate = new Date()["parse"](dateStr);
                var activityDateStr = activityDate.format("yyyy-mm-dd");
                var today = new Date()["parse"](new Date()["format"]("yyyy-mm-dd"));
                var userid = $li.find(".qing_main").attr("user_id");
                if (loginUserID == userid) {
                    $li.find(".ACT-NODE").find(".bg-primary").addClass("suceess");
                    $li.find(".qing_main").addClass("acs-timeline-bg");
                }
                var $group = $("<div class='acs-e'><div class='acs-timeline-badge warning'><span></span></div></div>");
                var hasdate = false;
                for (var n = 0; n < dates.length; n++) {
                    if (dates[n] == activityDateStr) {
                        hasdate = true;
                    }
                }
                if (hasdate == false) {
                    dates.push(activityDateStr);
                    var newDate = new Date()["parse"](activityDateStr);
                    if (newDate.dateDiff("d", today) == 0) {
                        $group.find("span").append("今天");
                        $group.find("span").addClass("acs-timeline-date");
                    }
                    else if (newDate.dateDiff("d", today) == 1) {
                        $group.find("span").append("昨天");
                        $group.find("span").addClass("acs-timeline-date");
                    }
                    else {
                        var month = null;
                        switch (activityDate.format("m")) {
                            case "1":
                                month = "一";
                                break;
                            case "2":
                                month = "二";
                                break;
                            case "3":
                                month = "三";
                                break;
                            case "4":
                                month = "四";
                                break;
                            case "5":
                                month = "五";
                                break;
                            case "6":
                                month = "六";
                                break;
                            case "7":
                                month = "七";
                                break;
                            case "8":
                                month = "八";
                                break;
                            case "9":
                                month = "九";
                                break;
                            case "10":
                                month = "十";
                                break;
                            case "11":
                                month = "十一";
                                break;
                            case "12":
                                month = "十二";
                                break;
                        }
                        $group.find("span").append(activityDate.format("dd"));
                        $group.find("span").addClass("acs-timeline-date-day");
                        $group.find("div").append("<span class='acs-timeline-date-month'>" + month + "月" + "</span>");
                    }
                    $ul.append($group);
                }
                $ul.append($li);
            }
            var group = $JObj.find(".columnGroup");
            if (group.length > 1) {
                $JObj.html(group[0]);
            }
            $JObj.find(".columnGroup").html($ul);
        };
        ;
        ActivityRer.prototype.setDefaultNewsComming = function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                $.AKjs.App.LatestActivityTime = _dt[0]["CREATE_TIME"];
            }
            var _form = res.Forms["SNS_ACTIVITIES"];
            _form.HasPager = false;
            _form.FormType = "Activity";
            var _op = { Data: res.Data, Form: _form };
            this.$NewMain.AtawActivityForm(_op);
            var _$newactivityRowList = this.$NewMain.find("li.qing_row");
            var _$mainactivity = this.$Main;
            this.$Main.find(".acs-nodata-alert").remove();
            _$mainactivity.find("ul.ACT-ACTIVITY-DATA").prepend(_$newactivityRowList);
            this.ActivityGroupByDate(_$mainactivity);
            this.$NewMain.html("");
            this["bindEvent"]();
        };
        ActivityRer.prototype.setDefaultMore = function (res) {
            this["$More"]["hide"]();
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                if (res.ExtData) {
                    $.AKjs.App.LastActivityTime = res.ExtData.LastTime;
                }
                else {
                    $.AKjs.App.LastActivityTime = _dt[_dt.length - 1]["CREATE_TIME"];
                }
            }
            if (res.ExtData.IsEnd == "") {
                this["$More"]["show"]();
            }
            var _form = res.Forms["SNS_ACTIVITIES"];
            _form.HasPager = false;
            _form.FormType = "Activity";
            var _op = { Data: res.Data, Form: _form };
            this.$OldMain.AtawActivityForm(_op);
            var _$oldactivityRowList = this.$OldMain.find("li.qing_row");
            var _$mainactivity = this.$Main;
            _$mainactivity.find("ul.ACT-ACTIVITY-DATA").append(_$oldactivityRowList);
            this.ActivityGroupByDate(_$mainactivity);
            this.$OldMain.html("");
            this["bindEvent"]();
        };
        ActivityRer.prototype.setAll = function (res) {
            var _this = this;
            $(".last—menu").show();
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a").off("click").on("click", function () {
                _this.routMore("all");
            });
            //this.C.getUnreadNum();
            var date = new Date()["format"]("yyyy-mm-dd hh:nn:ss");
            $["cookie"]("LasttimeReadMsg", date, { path: '/' });
        };
        ;
        ActivityRer.prototype.setAllNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setAllMore = function (res) {
            this.setDefaultMore(res);
        };
        ;
        //圈子
        ActivityRer.prototype.setCircleR = function (res) {
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("circle");
            });
        };
        ActivityRer.prototype.setCircleNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setCircleMoreR = function (res) {
            this.setDefaultMore(res);
        };
        //未读
        ActivityRer.prototype.setUnreadR = function (res) {
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("unread");
            });
        };
        ActivityRer.prototype.setUnreadNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setUnreadMoreR = function (res) {
            this.setDefaultMore(res);
        };
        //事务
        ActivityRer.prototype.setWorkflowR = function (res) {
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("WorkFlow");
            });
        };
        ActivityRer.prototype.setWorkflowNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setWorkflowMoreR = function (res) {
            this.setDefaultMore(res);
        };
        //与我相关
        ActivityRer.prototype.setRelationMeR = function (res) {
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("relationme");
            });
        };
        ActivityRer.prototype.setRelationMeNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setRelationMeMoreR = function (res) {
            this.setDefaultMore(res);
        };
        //关注的人
        ActivityRer.prototype.setAttentionR = function (res) {
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("attention");
            });
        };
        ActivityRer.prototype.setAttentionNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setAttentionMoreR = function (res) {
            this.setDefaultMore(res);
        };
        //我的工作
        ActivityRer.prototype.setTopMyWork = function (op) {
            this.clear();
            this.$MyWork.clear(true);
            this.$MyWork.AtawActivityForm(op);
            this.$MyWork.find(".qing_main").addClass("panel-primary");
            this["bindEvent"]();
            this["$More"]["hide"]();
            $(".last—menu").hide();
        };
        ;
        //我的收藏
        ActivityRer.prototype.setMyFavoriteR = function (res) {
            var _this = this;
            this.setDefault(res);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("myfavorite");
            });
        };
        ActivityRer.prototype.setMyFavoriteNewsComming = function (res) {
            this.setDefaultNewsComming(res);
        };
        ;
        ActivityRer.prototype.setMyFavoriteMoreR = function (res) {
            this.setDefaultMore(res);
        };
        ActivityRer.prototype.clear = function () {
            this.$MyWork.clear(true);
            this.$NewMain.clear(true);
            this.$Main.clear(true);
            this.$OldMain.clear(true);
        };
        ;
        ActivityRer.prototype.fullcalendar = function () {
            this.$Main.html("<div id='ACT-CALENDAR' style='margin:10%' />");
            this.$Main.find("#ACT-CALENDAR").AtawCalendarPage();
            $(".last—menu").hide();
        };
        ;
        ActivityRer.prototype.todayToDo = function () {
            this.$Main.html("<div id='ACT-TODO-TODAY' style='margin:10%' />");
            this.$Main.find("#ACT-TODO-TODAY").AtawCalendarPage({ OnlyDayView: true });
            $(".last—menu").hide();
        };
        ;
        ActivityRer.prototype.setAllVote = function (res) {
            this.clear();
            this["initVote"](res);
            this["$More"]["show"]();
            $(".last—menu").hide();
            var _this = this;
            this.ActivityGroupByDate(this.$Main);
            this["$More"]["find"]("a")["off"]("click")["on"]("click", function () {
                _this.routMore("vote");
            });
        };
        ;
        ActivityRer.prototype.setVoteMore = function (res) {
            this.initVote(res);
        };
        ;
        ActivityRer.prototype.initVote = function (res) {
            var originalData = res.Data;
            if (originalData) {
                var voteDt = res.Data["SNS_VOTES"];
                if (voteDt && voteDt.length > 0) {
                    $.AKjs.App.LastActivityTime = voteDt[voteDt.length - 1]["CREATE_TIME"];
                    for (var i = 0; i < voteDt.length; i++) {
                        var voteId = voteDt[i]["FID"];
                        var _form = res.Forms["SNS_VOTES"];
                        _form.HasPager = false;
                        _form.FormType = "Activity";
                        originalData["SNS_VOTES"] = [];
                        originalData["SNS_VOTES"].push(voteDt[i]);
                        var param = { Data: originalData, Form: _form };
                        var Creator = require("voteresultmrc");
                        var _creator = new Creator();
                        _creator.setModel(voteId, param);
                        _creator.init(this.$Main);
                    }
                }
            }
        };
        ;
        ActivityRer.prototype.bindEvent = function () {
            $.AKjs.App.bindPageEvent(this.$JObj);
        };
        ;
        ActivityRer.prototype.getUnreadNumR = function (res) {
            if (res.Data) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                var len = _dt.length;
                if (len > 0) {
                    this.$SecondHeader.find(".icon-unread").attr("style", "color:red;");
                    this.$SecondHeader.find(".unreadmsg_count").html(len);
                    $["cookie"]("UnReadMsgCount", len, { path: '/' });
                }
                else {
                    this.$SecondHeader.find(".icon-unread").attr("style", "");
                }
            }
        };
        return ActivityRer;
    }(baseRerFile.AkBaseRenderer));
    exports.ActivityRer = ActivityRer;
});
