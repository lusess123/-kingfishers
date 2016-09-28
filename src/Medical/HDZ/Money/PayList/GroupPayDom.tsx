import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import GroupPayTableFile = require("./GroupPayTable");
import GroupPayTable = GroupPayTableFile.GroupPayTable.GroupPayTableReact;
import GroupPayTableVm = GroupPayTableFile.GroupPayTable.GroupPayTableVm;

export module GroupPayDom {
    export class GroupPayDomAction extends domCore.DomAction {
    }

    export class GroupPayDomReact extends domCore.DomReact<GroupPayDomProps, GroupPayDomStates, GroupPayDomAction> implements domCore.IReact {

        public state = new GroupPayDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initHandle() }
                {this.props.Vm.GroupPayTableObj.intoDom() }

            </div>;
        }

        public _initHandle(): React.ReactElement<any> {

            return <div className="YSm-handle clearfix">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10" type="text" placeholder="输入身份证、体检号、档案号查询" />
                    <a className="col-lg-1 col-md-2 btn btn-primary">查询</a>
                </div>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactGroupPayDomVm extends domCore.DomVm {
        GroupPayTableObj: GroupPayTableFile.GroupPayTable.GroupPayTableVm;
    }

    export interface IGroupPayDomConfig {


    }

    export class GroupPayDomVm extends domCore.DomVm implements IReactGroupPayDomVm {
        public ReactType = GroupPayDomReact;

        public GroupPayTableObj: GroupPayTableVm = new GroupPayTableFile.GroupPayTable.GroupPayTableVm();

        public constructor(config?: IGroupPayDomConfig) {
            super();

        }

    }
    export class GroupPayDomStates extends domCore.DomStates {
    }


    export class GroupPayDomProps extends domCore.DomProps<IReactGroupPayDomVm>{
    }



}


