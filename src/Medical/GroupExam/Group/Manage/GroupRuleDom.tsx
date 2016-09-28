import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import GroupRuleTableFile = require("./GroupRuleTable");
import GroupRuleTable = GroupRuleTableFile.GroupRuleTable.GroupRuleTableReact;
import GroupRuleTableVm = GroupRuleTableFile.GroupRuleTable.GroupRuleTableVm;
import DataFlie = require("./../Data");
export module GroupRuleDom {
    export class GroupRuleDomAction extends domCore.DomAction {
    }

    export class GroupRuleDomReact extends domCore.DomReact<GroupRuleDomProps, GroupRuleDomStates, GroupRuleDomAction> implements domCore.IReact {

        public state = new GroupRuleDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-group-rule">
                {this.props.Vm.GroupRuleTableObj.intoDom()}
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactGroupRuleDomVm extends domCore.DomVm {
         GroupRuleTableObj: GroupRuleTableFile.GroupRuleTable.GroupRuleTableVm;
    }

    export interface IGroupRuleDomConfig {
        Data: DataFlie.Group.IGroupData[];
        UniId: string;
        BatchId: string;
    }

    export class GroupRuleDomVm extends domCore.DomVm implements IReactGroupRuleDomVm {
        public ReactType = GroupRuleDomReact;
        public Data:any;

        public GroupRuleTableObj: GroupRuleTableFile.GroupRuleTable.GroupRuleTableVm;
        public BatchId: string
        public constructor(config?: IGroupRuleDomConfig) {
            super();
            if (config.Data)
            {
                this.Data = config.Data;
                this.BatchId =config.BatchId
                this.UniId = config.UniId
                var config1 = { Data: this.Data, UniId: this.UniId, BatchId: this.BatchId }
                this.GroupRuleTableObj = new GroupRuleTableFile.GroupRuleTable.GroupRuleTableVm(config1);
            }
        }

    }
    export class GroupRuleDomStates extends domCore.DomStates {
    }


    export class GroupRuleDomProps extends domCore.DomProps<IReactGroupRuleDomVm>{
    }



}


