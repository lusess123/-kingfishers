import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./UsersInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module UsersInsertRowDom {
    export class UsersInsertRowDomAction extends domCore.DomAction {
    }

    export class UsersInsertRowDomReact extends domCore.DomReact<UsersInsertRowDomProps, UsersInsertRowDomStates, UsersInsertRowDomAction> implements domCore.IReact {

        public state = new UsersInsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this.props.Vm.MasterRow.intoDom() }
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

    export interface UsersInsertRowDomConfig {


    }

    export class UsersInsertRowDomVm extends domCore.DomVm {
        public ReactType = UsersInsertRowDomReact;

        public MasterRow: masterRowFile.UsersInsertMasterRowDom.UsersInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;

        public constructor(config?: UsersInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.UsersInsertMasterRowDom.UsersInsertMasterRowDomVm();
        }

    }
    export class UsersInsertRowDomStates extends domCore.DomStates {
    }


    export class UsersInsertRowDomProps extends domCore.DomProps<UsersInsertRowDomVm>{
    }



}


