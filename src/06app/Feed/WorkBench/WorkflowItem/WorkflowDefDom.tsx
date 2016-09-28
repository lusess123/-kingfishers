
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import workflowMsgFile = require("./WorkflowMsgDom");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module WorkflowDefDom {
    export class WorkflowDefDomAction extends domCore.DomAction {
    }

    export class WorkflowDefDomReact extends domCore.DomReact<WorkflowDefDomProps, WorkflowDefDomStates, WorkflowDefDomAction> implements domCore.IReact {

        public state = new WorkflowDefDomStates();

        public pSender(): React.ReactElement<any> {
            return <div><li>
                <a className={"Hu-pointer" + (this.props.Vm.IsNodeShow ? "" : " active") } onClick={() => { this.fun_NodeShow(); } }>
                    <i className={"fa fa-angle-down" + (this.props.Vm.IsNodeShow ? " active" : "") }></i>{this.props.Vm.DisplayName}({this.props.Vm.Count})
                </a>
                <ul className={(this.props.Vm.IsNodeShow ? "hide" : "") }>
                    {
                        this.props.Vm.InstList.map((inst) => {
                        return inst.intoDom();
                        })
                    }
                </ul>
            </li ></div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        public fun_NodeShow() {
            this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
            this.forceUpdate();
        }


    }

    export interface IWfInst {
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

    export interface IWorkflowDefDomConfig {

        Name: string;
        DisplayName: string;
        Count: number;
        InstList: IWfInst[];
    }

    export class WorkflowDefDomVm extends domCore.DomVm {
        public ReactType = WorkflowDefDomReact;
        public  Name: string;
        public  DisplayName: string;
        public Count: number;
        public InstList: workflowMsgFile.WorkflowMsgDom.WorkflowMsgDomVm[];
        public IsNodeShow: boolean = true;

        public constructor(config?: IWorkflowDefDomConfig) {
            super();
            if (config) {
                this.Count = config.Count;
                this.Name = config.Name;
                this.DisplayName = config.DisplayName;
                if (config.InstList) {
                    this.InstList = [];
                    config.InstList.forEach((inst) => {
                        this.InstList.push(new workflowMsgFile.WorkflowMsgDom.WorkflowMsgDomVm(inst));
                    });
                }
            }
        }

    }
    export class WorkflowDefDomStates extends domCore.DomStates {
    }


    export class WorkflowDefDomProps extends domCore.DomProps<WorkflowDefDomVm>{
    }



}
