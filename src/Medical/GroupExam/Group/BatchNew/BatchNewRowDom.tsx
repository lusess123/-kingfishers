import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./BatchNewMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module BatchNewRowDom {
    export class BatchNewRowDomAction extends domCore.DomAction {
    }

    export class BatchNewRowDomReact extends domCore.DomReact<BatchNewRowDomProps, BatchNewRowDomStates, BatchNewRowDomAction> implements domCore.IReact {

        public state = new BatchNewRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.MasterRow.intoDom() }
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IBatchNewRowDomConfig {


    }

    export class BatchNewRowDomVm extends domCore.DomVm {
        public ReactType = BatchNewRowDomReact;
        public MasterRow: masterRowFile.BatchNewMasterRowDom.BatchNewMasterRowDomVm;
        public UniId: string;


        public constructor(config?: IBatchNewRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.BatchNewMasterRowDom.BatchNewMasterRowDomVm();

        }



    }
    export class BatchNewRowDomStates extends domCore.DomStates {
    }


    export class BatchNewRowDomProps extends domCore.DomProps<BatchNewRowDomVm>{
    }



}


