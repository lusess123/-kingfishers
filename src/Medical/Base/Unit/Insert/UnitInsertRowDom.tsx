import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./UnitInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module UnitInsertRowDom {
    export class UnitInsertRowDomAction extends domCore.DomAction {
    }

    export class UnitInsertRowDomReact extends domCore.DomReact<UnitInsertRowDomProps, UnitInsertRowDomStates, UnitInsertRowDomAction> implements domCore.IReact {

        public state = new UnitInsertRowDomStates();

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

    export interface IUnitInsertRowDomConfig {


    }

    export class UnitInsertRowDomVm extends domCore.DomVm {
        public ReactType = UnitInsertRowDomReact;
        public MasterRow: masterRowFile.UnitInsertMasterRowDom.UnitInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;


        public constructor(config?: IUnitInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.UnitInsertMasterRowDom.UnitInsertMasterRowDomVm();

        }



    }
    export class UnitInsertRowDomStates extends domCore.DomStates {
    }


    export class UnitInsertRowDomProps extends domCore.DomProps<UnitInsertRowDomVm>{
    }



}


