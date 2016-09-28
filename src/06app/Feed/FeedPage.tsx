import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import doorFile = require("./Door");
import workBenchFile = require("./WorkBench/WorkBench");

import dataFile = require("./../Sns/Data");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module FeedPage {
    export class FeedPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class FeedPageReact extends basewedPageFile.Web.BaseWebPageReact<FeedPageProps, FeedPageStates, FeedPageAction> implements domCore.IReact {

        public state = new FeedPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hc-modals-list" >
                { this._tDom( this.props.Vm.DoorObj)}
                     {this.props.Vm.WorkBenchObj.intoDom()}
                    </div>;
        }






    }
    export interface IFeedPageConfig {


    }
    export class FeedPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = FeedPageReact;
        public DoorObj: doorFile.Door.DoorVm;
        public WorkBenchObj: workBenchFile.WorkBench.WorkBenchVm;

        public constructor(config?: IFeedPageConfig) {
            super();
           // this.DoorObj = new doorFile.Door.DoorVm();
            this.WorkBenchObj = new workBenchFile.WorkBench.WorkBenchVm();
        }

        protected loadPage(callback?: () => any) {


            //urlFile.Core.AkPost("/RightCloud/SysFeed/getFirstFeed", {}, (a) => {

            //    this.Title = "动态消息";
            //    var data = a.Data;
            //    var _data: dataFile.Sns.FeedData = data;
            //    this.WorkBenchObj.FeedObj.loadData(_data);
            //    callback();
            //});

            this.WorkBenchObj.WorkflowItemObj.loadData(() => {
                callback();
            });

            //this.loadData();
           // callback();

        }

    }
    export class FeedPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FeedPageProps extends basewedPageFile.Web.BaseWebPageProps<FeedPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("FEEDPAGE", basewedPageFile.Web.BaseWebPageVm, FeedPageVm);
    iocFile.Core.Ioc.Current().RegisterType("FEED", basewedPageFile.Web.BaseWebPageVm, FeedPageVm);
}
