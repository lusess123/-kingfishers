import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");


import workflowFile = require("./HWorkFlowItemPage");
import workflowVm = workflowFile.HWFItemPage.HWFItemPageVm;

import worknewsFile = require("./HWorkNewMsg");
import worknewsVm = worknewsFile.HWorkNewMsg.HWorkNewMsgVm;

export module HWorkBenchPage {
    export class HWorkBenchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class HWorkBenchPageReact extends basewedPageFile.Web.BaseWebPageReact<HWorkBenchPageProps, HWorkBenchPageStates, HWorkBenchPageAction> implements domCore.IReact {

        public state = new HWorkBenchPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acsWhiteBg acsMarginT1">
                <div className="acs-workflow-tab clearfix">
                    <ul className="left">
                        <li className={"acsPointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>待处理事项</li>
                        <li className={"acsPointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>最新动态</li>
                        </ul>
                    <ul className="right">
                        <li className="acsMarginR0 "><i className="acsPointer acsFontSize0-2 fa fa-repeat"></i></li>
                        <li className="acsMarginR1-5 "><i className={"acsPointer acsFontSize1-2 fa fa-" + (this.props.Vm.IsWorkshow ? "angle-up" : "angle-down") } onClick={() => { this.fun_WorkShow() } }></i></li>
                        <li className="acsMarginR1-5 "><i className="acsPointer acsFontSize0-2 fa fa-expand"></i></li>
                        </ul> 
                    </div>
                <div className={(this.props.Vm.IsWorkshow ? "hide" : "") }>                 
                <div className={(this.props.Vm.TabCurrentIndex == 0 ? "" : " hide") }>
                    {this.props.Vm.workflowObj.intoDom() }
                    </div>
                <div className={(this.props.Vm.TabCurrentIndex == 1 ? "" : " hide")}>
                    {this.props.Vm.worknewsObj.intoDom()}
                    </div>  
                    </div>    
                </div>;
        }
        private fun_TabsClick(index) {
            this.props.Vm.TabCurrentIndex = index;
            this.forceUpdate();
        }
        private fun_WorkShow() {
            this.props.Vm.IsWorkshow = !this.props.Vm.IsWorkshow;
            this.forceUpdate();
        }


    }
    export interface IHWorkBenchPageConfig {


    }
    export class HWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = HWorkBenchPageReact;

        public worknewsObj: worknewsVm = new worknewsVm();
        public workflowObj: workflowVm = new workflowVm();
        public TabCurrentIndex = 0;
        public IsWorkshow: boolean=false;

    }
    export class HWorkBenchPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class HWorkBenchPageProps extends basewedPageFile.Web.BaseWebPageProps<HWorkBenchPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("HWORKBENCHPAGE", basewedPageFile.Web.BaseWebPageVm, HWorkBenchPageVm);

}