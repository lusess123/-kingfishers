import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import newFile = require("./New");
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

        public pSender(): React.ReactElement<any> {
            return <div className="acsMargin3 Hz-scroll Hg-overflow-auto"
                style={{ height: (($(window).height() - 135)) }}
                >{this.props.Vm.List.map((a) => { return [a.intoDom(), <br/>] }) }
                <div className="text-center"><i
                    className="fa fa-arrow-circle-o-down fa-2 Hu-pointer "
                    onClick={() => {
                    this.props.Vm.loadData();
                    this.forceUpdate();
                   } }
                    >下拉加载更多...</i></div>
                </div>;
          
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class FeedVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = FeedReact;
        public List: newFile.Sns.NewVm[] = [];
        protected pIsHullAutoHide: boolean = true;
        public constructor() {
            super();
            this.loadData();
           
        }

        public loadData() {
            for (var i = 0; i < 10; i++) {
                this.List.push(new newFile.Sns.NewVm());
            }
        }

        protected loadPage(callback?: () => any) {
           // super.loadPage();
            this.loadData();
           // this.forceUpdate("");
            callback();
        }

        protected ReceivePageSend(config:basewedPageFile.Web.IPageActor, obj: any) {
            // alert( fromName + " to "+  panelName);
            super.ReceivePageSend(config,obj);
            alert("来源:" + config.FromModulename + "目标:"+ config.ToModuleName + " 信息 ："+ obj);
        }
         

    }
    export class FeedStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FeedProps extends basewedPageFile.Web.BaseWebPageProps<FeedVm>{
    }


 
    iocFile.Core.Ioc.Current().RegisterType("CENTERINFO", basewedPageFile.Web.BaseWebPageVm, FeedVm);
    iocFile.Core.Ioc.Current().RegisterType("ORGDETAIL", basewedPageFile.Web.BaseWebPageVm, FeedVm);
}
