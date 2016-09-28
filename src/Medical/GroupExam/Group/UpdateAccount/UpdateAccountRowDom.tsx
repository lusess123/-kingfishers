import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./UpdateAccountMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import DataFile = require("./../Data");
export module UpdateAccountRowDom {
    export class UpdateAccountRowDomAction extends domCore.DomAction {
    }

    export class UpdateAccountRowDomReact extends domCore.DomReact<UpdateAccountRowDomProps, UpdateAccountRowDomStates, UpdateAccountRowDomAction> implements domCore.IReact {

        public state = new UpdateAccountRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.MasterRow.intoDom() }
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IUpdateAccountRowDomConfig {
        Data: DataFile.Group.IAccount;
        BatchId: string;
    }

    export class UpdateAccountRowDomVm extends domCore.DomVm {
        public ReactType = UpdateAccountRowDomReact;
        public MasterRow: masterRowFile.UpdateAccountRowDom.UpdateAccountRowDomVm;
        public UniId: string;


        public constructor(config?: IUpdateAccountRowDomConfig) {
            super();
            if (config)
            {
                var config1 = { Data: config.Data, BatchId:config.BatchId}
                this.MasterRow = new masterRowFile.UpdateAccountRowDom.UpdateAccountRowDomVm(config1);
            }

        }



    }
    export class UpdateAccountRowDomStates extends domCore.DomStates {
    }


    export class UpdateAccountRowDomProps extends domCore.DomProps<UpdateAccountRowDomVm>{
    }



}


