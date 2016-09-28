import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./MemberInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module MemberInsertRowDom {
    export class MemberInsertRowDomAction extends domCore.DomAction {
    }

    export class MemberInsertRowDomReact extends domCore.DomReact<MemberInsertRowDomProps, MemberInsertRowDomStates, MemberInsertRowDomAction> implements domCore.IReact {

        public state = new MemberInsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
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

    export interface IMemberInsertRowDomConfig {


    }

    export class MemberInsertRowDomVm extends domCore.DomVm {
        public ReactType = MemberInsertRowDomReact;
        public MasterRow: masterRowFile.MemberInsertMasterRowDom.MemberInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;


        public constructor(config?: IMemberInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.MemberInsertMasterRowDom.MemberInsertMasterRowDomVm();

        }



    }
    export class MemberInsertRowDomStates extends domCore.DomStates {
    }


    export class MemberInsertRowDomProps extends domCore.DomProps<MemberInsertRowDomVm>{
    }



}


