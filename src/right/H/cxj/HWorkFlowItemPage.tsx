


import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

export module HWFItemPage {
    export class HWFItemPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class HWFItemPageReact extends basewedPageFile.Web.BaseWebPageReact<HWFItemPageProps, HWFItemPageStates, HWFItemPageAction> implements domCore.IReact {

        public state = new HWFItemPageStates();
        public pSender(): React.ReactElement<any> {
            return<div>
            <div className="acs-workflow-info">
                    <span>上午好！</span>
                        <a>您有(234) 条工作</a>
                       <span>需要处理：若查看自己的工作流，点击：</span>
                        <a>我的工作。</a>
                        <span>若查看自己参与的流程，点击：</span>
                        <a>我参与的流程</a>
                    </div>
            <div className="acs-workflow-content">
                    <ul>
                        <div><li><a className={"acsPointer" + (this.props.Vm.IsNodeShow ? "" : " active") } onClick={() => { this.fun_NodeShow() } }><i className={"fa fa-angle-down" + (this.props.Vm.IsNodeShow ? " active" : "") }></i>加班工作流(2) </a>                            
                            <ul className={(this.props.Vm.IsNodeShow ? "hide" : "") }>
                                <li className="acs-workflow-item">
                                        <div className="acs-new-btn"><a className="button red2">最新</a>
                                           <a className="button orange acsMarginL0-2">最紧急</a></div>
                                        <div className="clearfix">
                                        <span>2015/09/29  16:05</span>
                                        <a className="acsMarginL3 acsWidth48">信使系统管理员2015/9/1加班-申请人确定信使系统管理员2015/9/1加班-申请人确定信使系统管理员2015/9/1加班-申请人确定信使系统管理员2015/9/1加班-申请人确定</a>
                                        <a className="acs-btn-execute right"><i className="fa fa-caret-right"></i>执行</a>
                                        </div>
                                    </li>                                                                 
                                <li className="acs-workflow-item">
                                    <div className="clearfix">
                                    <span>2015/09/29  16:05</span>
                                    <a className="acsMarginL3 acsWidth48">信使系统管理员2015/9/1加班-申请人确定</a>
                                    <a className="acs-btn-execute right"><i className="fa fa-caret-right"></i>执行</a>
                                        </div>
                                    </li>
                                </ul>
                                </li>
                            </div>  
                        <div><li><a><i className="fa fa-angle-right"></i>弘正保修申请(17)</a></li></div>
                       <div><li><a><i className="fa fa-angle-right"></i>必达信息补充流程(60)</a></li></div>
                       <div><li><a><i className="fa fa-angle-right"></i>必达打款流程(56)</a></li></div>
                        </ul>
                   </div>
                </div>;
        }

        public fun_NodeShow() {
            this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
            this.forceUpdate();
        }







    }
    export class HWFItemPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = HWFItemPageReact;
        public IsNodeShow: boolean = false;

    }
    export class HWFItemPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class HWFItemPageProps extends basewedPageFile.Web.BaseWebPageProps<HWFItemPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("HWFITEMPAGE", basewedPageFile.Web.BaseWebPageVm, HWFItemPageVm);

}