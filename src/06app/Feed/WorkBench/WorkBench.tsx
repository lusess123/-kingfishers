import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import feedFile = require("./Feed/Feed");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import tabDomFile = require("./../../../05tool/TabDom");
import MyWorkflowFile = require("./WorkflowItem/MyWorkflowDom");

export module WorkBench {
    export class WorkBenchAction extends domCore.DomAction {
    }

    export class WorkBenchReact extends domCore.DomReact<WorkBenchProps, WorkBenchStates, WorkBenchAction> implements domCore.IReact {

        public state = new WorkBenchStates();

        public pSender(): React.ReactElement<any> {
            return <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-workflow">
                    { this.props.Vm.TabDomObj.intoDom() }
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
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IWorkBenchConfig {


    }

    export class WorkBenchVm extends domCore.DomVm {
        public ReactType = WorkBenchReact;

        public TabCurrentIndex = 0;
        public IsWorkshow: boolean = false;
        public FeedObj: feedFile.Feed.FeedVm;
        public TabDomObj: tabDomFile.TabDom.TabDomVm;
        public WorkflowItemObj: MyWorkflowFile.MyWorkflowDom.MyWorkflowDomVm;

        public constructor(config?: IWorkBenchConfig) {
            super();
            this.FeedObj = new feedFile.Feed.FeedVm();
            this.WorkflowItemObj = new MyWorkflowFile.MyWorkflowDom.MyWorkflowDomVm();

            this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        Name: "mywork",
                        Title: "待处理事项",
                        IsActive: true,
                        ReloadFun: (vm) => {
                            utilFile.Core.Util.Cast<MyWorkflowFile.MyWorkflowDom.MyWorkflowDomVm>(vm.DomObj).loadData(
                                () => { vm.DomObj.forceUpdate(""); }
                            );
                        },
                        DomObj: this.WorkflowItemObj
                    },
                    {
                        Name: "feed",
                        Title: "动态",
                        IsActive: false,
                        ReloadFun: (vm) => {
                            utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                                vm.DomObj.forceUpdate("");
                            });
                        },
                        DomObj: this.FeedObj
                    }
                     
                ]
            });
        }

    }
    export class WorkBenchStates extends domCore.DomStates {
    }


    export class WorkBenchProps extends domCore.DomProps<WorkBenchVm>{
    }



}


