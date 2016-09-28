import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import workflowDefFile = require("./WorkflowDefDom");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module MyWorkflowDom {
    export class MyWorkflowDomAction extends domCore.DomAction {
    }

    export class WorkflowItemDomReact extends domCore.DomReact<MyWorkflowDomProps, MyWorkflowDomStates, MyWorkflowDomAction> implements domCore.IReact {

        public state = new MyWorkflowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hm-workflow-info">
                    <span>你好！</span>
                    <a>您有({this.props.Vm.TotalCount}) 条工作</a>
                    <span>需要处理：若查看自己的工作流，点击：</span>
                    <a>我的工作。</a>
                    <span>若查看自己参与的流程，点击：</span>
                    <a>我参与的流程</a>
                </div>
                <div className="Hm-workflow-content">
                    <ul className="nav">
                        {this.props.Vm.WorkflowDefList.map((def) => {
                           return  def.intoDom();
                        }) }
                       
                    </ul>
                </div>
            </div>;
        }

        public fun_NodeShow() {
            this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
            this.forceUpdate();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IWfInst
    {
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

    export interface IWfDef
    {
        Name: string;
        DisplayName: string;
        Count: number;
        InstList: IWfInst[];
    }



    export interface IMyWorkflowDomConfig {
        Count?: Number;
        WorkflowDefList: IWfDef[];
    }

    export class MyWorkflowDomVm extends domCore.DomVm {
        public ReactType = WorkflowItemDomReact;
        public IsNodeShow: boolean = false;

       public TotalCount: Number;
       public WorkflowDefList: workflowDefFile.WorkflowDefDom.WorkflowDefDomVm[] = [];

        public constructor(config?: IMyWorkflowDomConfig) {
            super();
            if (config) {
                this.init(config);
            }
       }

        public init(config: IMyWorkflowDomConfig)
        {
            this.TotalCount = config.Count;
            if (config.WorkflowDefList) {
                this.WorkflowDefList = [];
                config.WorkflowDefList.forEach((def) => {
                    this.WorkflowDefList.push(new workflowDefFile.WorkflowDefDom.WorkflowDefDomVm(def));
                });
            }
        }

        public loadData(fun:Function)
        {
            urlFile.Core.AkPost("/workflow/MyWorkflow/MyWork", {}, (a) => {
                var _data: IMyWorkflowDomConfig = a;
                this.init(_data);
                this.IsChange = true;
                fun();

            });
        }

    }
    export class MyWorkflowDomStates extends domCore.DomStates {
    }


    export class MyWorkflowDomProps extends domCore.DomProps<MyWorkflowDomVm>{
    }



}


