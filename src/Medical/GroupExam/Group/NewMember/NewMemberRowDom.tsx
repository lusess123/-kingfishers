import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./NewMemberMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module NewMemberRowDom {
    export class NewMemberRowDomAction extends domCore.DomAction {
    }

    export class NewMemberRowDomReact extends domCore.DomReact<NewMemberRowDomProps, NewMemberRowDomStates, NewMemberRowDomAction> implements domCore.IReact {

        public state = new NewMemberRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.MasterRow.intoDom() }
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface INewMemberRowDomConfig {
        selectId: string;
        batchId: string;
    }

    export class NewMemberRowDomVm extends domCore.DomVm {
        public ReactType = NewMemberRowDomReact;
        public MasterRow: masterRowFile.NewMemberMasterRowDom.NewMemberMasterRowDomVm;
        public UniId: string;


        public constructor(config?: INewMemberRowDomConfig) {
            super();
            if (config)
            {
                var config1 = { selectId: config.selectId, batchId:config.batchId}
                this.MasterRow = new masterRowFile.NewMemberMasterRowDom.NewMemberMasterRowDomVm(config1);
            }

        }



    }
    export class NewMemberRowDomStates extends domCore.DomStates {
    }


    export class NewMemberRowDomProps extends domCore.DomProps<NewMemberRowDomVm>{
    }



}


