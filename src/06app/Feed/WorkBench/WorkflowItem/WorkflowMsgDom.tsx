


import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module WorkflowMsgDom {
    export class WorkflowMsgDomAction extends domCore.DomAction {
    }

    export class WorkflowMsgDomReact extends domCore.DomReact<WorkflowMsgDomProps, WorkflowMsgDomStates, WorkflowMsgDomAction> implements domCore.IReact {

        public state = new WorkflowMsgDomStates();

        public pSender(): React.ReactElement<any> {
            return <li className="Hc-workflow-item">
                <div className="acs-new-btn">
                    {this.props.Vm.IsNew ? <a className="button red2">最新</a> : null} 
                    {this.props.Vm.IsHot ? <a className="button orange acsMarginL0-2">最紧急</a> : null} 
                
            </div>
                <div className="clearfix">
                    <span><i className={"fa  fa-2 fa-folder" + (this.props.Vm.IsOpen ? "-open" : "") }></i>{this.props.Vm.WI_RECEIVE_DATE}</span>
                    <span className="acsMarginL3 acsWidth36">{this.props.Vm.WI_NAME}</span>

                    <a className="Hu-btn-execute " onClick={() => { this.exeClick_fun(this.props.Vm.FID) } }><i className="fa fa-2 fa-caret-right" title="执行"></i></a>
                    <a className="Hu-btn-execute "  onClick={() => { this.detailClick_fun(this.props.Vm.FID) }}><i className="fa fa-2 fa-search-plus" title="查看"></i></a>

                </div></li>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private exeClick_fun(id:string)
        {
            urlFile.Core.AkUrl.Current().openUrl("$winworkflow$inst$undefined$" + id, true);
        }
        private detailClick_fun(id:string)
        {
            urlFile.Core.AkUrl.Current().openUrl("$winworkflow$detail$undefined$"+id, true);
        }

    }

    export interface IWorkflowMsgDomConfig {
        FID: string;
        WI_WD_NAME: string;
        WI_WD_DISPLAYNAME: string;
        WI_NAME: string;
        WI_STATUS: number;
        WI_RECEIVE_DATE: string;
        WI_PRIORITY: number;
        IsNew: boolean;
        IsHot: boolean;
        IsOpen: boolean;
    }
  

    export class WorkflowMsgDomVm extends domCore.DomVm {
        public ReactType = WorkflowMsgDomReact;

      public  FID: string;
      public  WI_WD_NAME: string;
      public  WI_WD_DISPLAYNAME: string;
      public  WI_NAME: string;
      public  WI_STATUS: number;
      public  WI_RECEIVE_DATE: string;
      public  WI_PRIORITY: number;
      public  IsNew: boolean;
      public IsHot: boolean;
      public IsOpen: boolean;
        public constructor(config?: IWorkflowMsgDomConfig) {
            super();
            if (config) {
                this.FID = config.FID;
                this.WI_WD_NAME = config.WI_WD_NAME;
                this.WI_WD_DISPLAYNAME = config.WI_WD_DISPLAYNAME;

                this.WI_NAME = config.WI_NAME;
                this.WI_STATUS = config.WI_STATUS;
                this.WI_RECEIVE_DATE = config.WI_RECEIVE_DATE;

                this.WI_PRIORITY = config.WI_PRIORITY;
                this.IsHot = config.IsHot;
                this.IsNew = config.IsNew;
                this.IsOpen = config.IsOpen;
            }
        }

    }
    export class WorkflowMsgDomStates extends domCore.DomStates {
    }


    export class WorkflowMsgDomProps extends domCore.DomProps<WorkflowMsgDomVm>{
    }



}


