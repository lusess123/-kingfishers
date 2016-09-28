import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import AccountTableFile = require("./AccountTable");
import DataFile = require("./../Data");
import pagination = require("./../../../../05tool/Pagination");

export module AccountManageDom {
    export class AccountManageDomAction extends domCore.DomAction {
    }

    export class AccountManageDomReact extends domCore.DomReact<AccountManageDomProps, AccountManageDomStates, AccountManageDomAction> implements domCore.IReact {

        public state = new AccountManageDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{
                    this.props.Vm.AccountTableFile.intoDom()
                }
                </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAccountManageDomVm extends domCore.DomVm { 

    }

    export interface IAccountManageDomConfig {

        Data: DataFile.Group.IAccount[];
        UniId: string;
        BatchId: string;
    }

    export class AccountManageDomVm extends domCore.DomVm implements IReactAccountManageDomVm {
        public ReactType = AccountManageDomReact;
        public AccountTableFile: AccountTableFile.AccountTable.AccountTableVm;
         
        public constructor(config?: IAccountManageDomConfig) {
            super();
            if (config)
            {
                var config1 = { Data: config.Data, Unild:config.UniId,BatchId:config.BatchId}
                this.AccountTableFile = new AccountTableFile.AccountTable.AccountTableVm(config1);
            }

        }


    }
    export class AccountManageDomStates extends domCore.DomStates {
    }


    export class AccountManageDomProps extends domCore.DomProps<AccountManageDomVm>{
    }



}
