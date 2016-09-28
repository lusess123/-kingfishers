var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./Day", "./New", "./../../../../01core/Event", "react"], function (require, exports, utilFile, urlFile, basewedPageFile, dayFile, newFile, eventFile, React) {
    "use strict";
    var Feed;
    (function (Feed) {
        var FeedAction = (function (_super) {
            __extends(FeedAction, _super);
            function FeedAction() {
                _super.apply(this, arguments);
            }
            return FeedAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Feed.FeedAction = FeedAction;
        var FeedReact = (function (_super) {
            __extends(FeedReact, _super);
            function FeedReact() {
                _super.apply(this, arguments);
                this.state = new FeedStates();
            }
            FeedReact.prototype.fun_moreBtn = function () {
                try {
                    this.props.Vm.loadMorePage(this.props.Vm.LastTime);
                }
                catch (e) {
                    console.log(e);
                }
            };
            FeedReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {"data-rowSpan": "ddd", className: "Hm-news"}, React.createElement("div", {id: "ACT-NEW-MSG", className: "acsTextC  hide"}, React.createElement("a", null, "您有新的动态消息")), this.props.Vm.List.map(function (a) { return a.intoDom(); })), React.createElement("div", {className: "text-center Hg-padding-tb"}, React.createElement("i", {className: "fa fa-arrow-circle-o-down fa-2 Hu-pointer ", onClick: function () { _this.fun_moreBtn(); }}, this.props.Vm.MoreTxt)));
            };
            FeedReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                // alert("第一次载入...");
                // this.props.Vm.loadData();
                // this.forceUpdate();
            };
            return FeedReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Feed.FeedReact = FeedReact;
        var FeedVm = (function (_super) {
            __extends(FeedVm, _super);
            function FeedVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = FeedReact;
                this.List = [];
                this.MoreTxt = "下拉加载更多...";
                // this.loadData();
                this._fun = function () {
                    _this.notify();
                };
                eventFile.App.GetAppEvent().addListener("notify", this._fun);
            }
            FeedVm.prototype.dispose = function () {
                eventFile.App.GetAppEvent().removeListener("notify", this._fun);
                _super.prototype.dispose.call(this);
            };
            FeedVm.prototype.fTest = function () {
                var _d = new Date();
                for (var i = 0; i < 4; i++) {
                    var _day = new dayFile.Day.DayVm();
                    _d.setDate(_d.getDate() - 1);
                    _day.DayString = _d.toLocaleDateString();
                    for (var _i = 0; _i < 3; _i++) {
                        var _new = new newFile.Sns.NewVm();
                        _new.DayString = _day.DayString;
                        _new.CreateDateTime = new Date().toString();
                        ;
                        _new.FromUserName = "黄连花同学" + _i.toString() + i.toString();
                        _new.FromUserId = _i.toString();
                        _new.Content = "这就是今天早饭两位花痴小编的对话，付费也要追剧，在贫困线以下苦苦挣扎的哒哒君也是第一次含泪办会员。《太阳的后裔》这部韩剧才播出两集就已经在各大热搜榜上霸屏多次，哒哒君觉得除";
                        _day.NewList.push(_new);
                    }
                    this.List.push(_day);
                }
            };
            FeedVm.prototype.loadData = function (data) {
                var _this = this;
                if (data) {
                    //this.List = [];
                    data.DayNewList.forEach(function (dayVm, i) {
                        var _day = null;
                        if (i == 0) {
                            if (_this.List.length > 0) {
                                var _dayStr = _this.List[_this.List.length - 1].DayString;
                                if (_dayStr == dayVm.DayString) {
                                    _day = _this.List[_this.List.length - 1];
                                }
                            }
                        }
                        if (_day == null) {
                            _day = new dayFile.Day.DayVm();
                            _day.DayString = dayVm.DayString;
                            _this.List.push(_day);
                        }
                        _day.IsChange = true;
                        dayVm.NewDataList.forEach(function (newVm) {
                            var _new = new newFile.Sns.NewVm();
                            _new.Content = newVm.Content;
                            _new.CreateDateTime = newVm.CreateDateTime;
                            _new.DayString = newVm.DayString;
                            _new.FromUserId = newVm.FromUserId;
                            _new.FromUserName = newVm.FromUserName;
                            //  _new.
                            //_day.DayString = newVm.DayString;
                            _day.NewList.push(_new);
                        });
                        // this.LastTime = 
                    });
                    if (data.DayNewList.length > 0) {
                        var _last = data.DayNewList[data.DayNewList.length - 1];
                        if (_last.NewDataList.length > 0) {
                            this.LastTime = _last.NewDataList[_last.NewDataList.length - 1].CreateDateTime;
                        }
                    }
                }
                else {
                    this.fTest();
                }
            };
            FeedVm.prototype.loadMorePage = function (t) {
                var _this = this;
                this.MoreTxt = "正在加载数据...";
                this.forceUpdate("", function () {
                    urlFile.Core.AkPost("/RightCloud/SysFeed/getFeed", { time: t }, function (a) {
                        var data = a.Data;
                        var _data = data;
                        if (_data.DayNewList && _data.DayNewList.length > 0) {
                            _this.loadData(_data);
                            _this.MoreTxt = "下拉加载更多...";
                            _this.forceUpdate("");
                        }
                        else {
                            utilFile.Core.Util.Noty("已经没有更多数据了！！");
                        }
                    });
                });
            };
            FeedVm.prototype.notify = function () {
                $("#ACT-NEW-MSG").removeClass("hide");
            };
            FeedVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/SysFeed/getFirstFeed", {}, function (a) {
                    _this.Title = "动态消息";
                    var data = a.Data;
                    var _data = data;
                    _this.List = [];
                    _this.LastTime = "";
                    _this.loadData(_data);
                    callback();
                });
                //this.loadData();
            };
            FeedVm.prototype.ReceivePageSend = function (config, obj) {
                // alert( fromName + " to "+  panelName);
                _super.prototype.ReceivePageSend.call(this, config, obj);
                alert("来源:" + config.FromModulename + "目标:" + config.ToPanelName + " 信息 ：" + obj);
            };
            return FeedVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Feed.FeedVm = FeedVm;
        var FeedStates = (function (_super) {
            __extends(FeedStates, _super);
            function FeedStates() {
                _super.apply(this, arguments);
            }
            return FeedStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Feed.FeedStates = FeedStates;
        var FeedProps = (function (_super) {
            __extends(FeedProps, _super);
            function FeedProps() {
                _super.apply(this, arguments);
            }
            return FeedProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Feed.FeedProps = FeedProps;
    })(Feed = exports.Feed || (exports.Feed = {}));
});
