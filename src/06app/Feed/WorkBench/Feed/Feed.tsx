import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import dayFile = require("./Day");
import newFile = require("./New");
import dataFile = require("./../../../Sns/Data");
import eventFile = require("./../../../../01core/Event");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Feed {
    export class FeedAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class FeedReact extends basewedPageFile.Web.BaseWebPageReact<FeedProps, FeedStates, FeedAction> implements domCore.IReact {

        public state = new FeedStates();

        private fun_moreBtn()
        {
            try {
                this.props.Vm.loadMorePage(this.props.Vm.LastTime);
                //this.props.Vm.IsChange = true;
                //this.forceUpdate();
            }
            catch (e) {
                console.log(e);
            }
        }

        public pSender(): React.ReactElement<any> {
            return <div  >
                   <div data-rowSpan="ddd" className="Hm-news">
                    <div id="ACT-NEW-MSG" className="acsTextC  hide"><a>您有新的动态消息</a></div>
                     {this.props.Vm.List.map((a) => { return a.intoDom() }) }
                     </div>
                    <div className="text-center Hg-padding-tb" >
                      <i  className="fa fa-arrow-circle-o-down fa-2 Hu-pointer " onClick={() => { this.fun_moreBtn();}}>
                        {this.props.Vm.MoreTxt}
                     </i>
                   </div>
                  </div>;

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
           // alert("第一次载入...");
           // this.props.Vm.loadData();
           // this.forceUpdate();
        }


    }
    export class FeedVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = FeedReact;
        public List: dayFile.Day.DayVm[] = [];
        public LastTime: string;
        public MoreTxt: string = "下拉加载更多...";
        private _fun: Function;
        public constructor() {
            super();
           // this.loadData();
            this._fun = () => {
                this.notify();
            };
            eventFile.App.GetAppEvent().addListener("notify", this._fun);
        }

        public dispose() {
            eventFile.App.GetAppEvent().removeListener("notify",this._fun);
            super.dispose();
        }

        private fTest()
        {
            var _d = new Date();
            for (var i = 0; i < 4; i++) {
                var _day: dayFile.Day.DayVm = new dayFile.Day.DayVm();
                _d.setDate(_d.getDate() - 1);
                _day.DayString = _d.toLocaleDateString();
                for (var _i = 0; _i < 3; _i++) {
                    var _new: newFile.Sns.NewVm = new newFile.Sns.NewVm();
                    _new.DayString = _day.DayString;
                    _new.CreateDateTime = new Date().toString();;
                    _new.FromUserName = "黄连花同学"+ _i.toString()+ i.toString();
                    _new.FromUserId = _i.toString();
                    _new.Content = "这就是今天早饭两位花痴小编的对话，付费也要追剧，在贫困线以下苦苦挣扎的哒哒君也是第一次含泪办会员。《太阳的后裔》这部韩剧才播出两集就已经在各大热搜榜上霸屏多次，哒哒君觉得除";
                    _day.NewList.push(_new);
                }
                this.List.push(_day);
            }
        }

        public loadData(data?: dataFile.Sns.FeedData) {
            if (data) {
                //this.List = [];
                data.DayNewList.forEach((dayVm, i) => {
                    var _day: dayFile.Day.DayVm = null;
                    if (i == 0) {
                        if (this.List.length > 0) {
                            var _dayStr = this.List[this.List.length - 1].DayString;
                            if (_dayStr == dayVm.DayString) {
                                _day = this.List[this.List.length - 1];
                            }

                        }
                    }
                    if (_day == null) {
                        _day = new dayFile.Day.DayVm();
                        _day.DayString = dayVm.DayString;
                        this.List.push(_day);

                    }
                    _day.IsChange = true;
                    
                    dayVm.NewDataList.forEach((newVm) => {
                        var _new: newFile.Sns.NewVm = new newFile.Sns.NewVm();
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
            
        }

        public loadMorePage(t: string) {
            this.MoreTxt = "正在加载数据...";
            this.forceUpdate("", () => {
                urlFile.Core.AkPost("/RightCloud/SysFeed/getFeed", { time: t }, (a) => {

                    var data = a.Data;
                    var _data: dataFile.Sns.FeedData = data;
                    if (_data.DayNewList && _data.DayNewList.length > 0) {
                        this.loadData(_data);
                        this.MoreTxt = "下拉加载更多...";
                        this.forceUpdate("");
                    } else {
                        utilFile.Core.Util.Noty("已经没有更多数据了！！");
                    }
                });
            });
            
        }

        public notify()
        {
            $("#ACT-NEW-MSG").removeClass("hide");
        }

       

        protected loadPage(callback?: () => any) {
          
            urlFile.Core.AkPost("/RightCloud/SysFeed/getFirstFeed", {}, (a) => {

                this.Title = "动态消息";
                var data = a.Data;
                var _data: dataFile.Sns.FeedData = data;
                this.List = [];
                this.LastTime = "";
                this.loadData(_data);
                callback();
            });

           
            //this.loadData();
           

        }
        protected ReceivePageSend(config:basewedPageFile.Web.IPageActor, obj: any) {
            // alert( fromName + " to "+  panelName);
            super.ReceivePageSend(config, obj);
            alert("来源:" + config.FromModulename + "目标:" + config.ToPanelName + " 信息 ：" + obj);
        }

    }
    export class FeedStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FeedProps extends basewedPageFile.Web.BaseWebPageProps<FeedVm>{
    }


  
   
}
