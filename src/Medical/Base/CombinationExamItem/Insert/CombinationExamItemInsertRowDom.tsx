import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./CombinationExamItemInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module CombinationExamItemInsertRowDom {
    export class CombinationExamItemInsertRowDomAction extends domCore.DomAction {
    }

    export class CombinationExamItemInsertRowDomReact extends domCore.DomReact<CombinationExamItemInsertRowDomProps, CombinationExamItemInsertRowDomStates, CombinationExamItemInsertRowDomAction> implements domCore.IReact {

        public state = new CombinationExamItemInsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className = "">
                {this.props.Vm.MasterRow.intoDom() }
            </div>;
        }
  
        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ICombinationExamItemInsertRowDomConfig {


    }

    export class CombinationExamItemInsertRowDomVm extends domCore.DomVm {
        public ReactType = CombinationExamItemInsertRowDomReact;
        public MasterRow: masterRowFile.CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;


        public constructor(config?: ICombinationExamItemInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomVm();

        }



    }
    export class CombinationExamItemInsertRowDomStates extends domCore.DomStates {
    }


    export class CombinationExamItemInsertRowDomProps extends domCore.DomProps<CombinationExamItemInsertRowDomVm>{
    }



}


