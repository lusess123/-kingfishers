import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");

import masterRowFile = require("./DepartInsertMasterRowDom");

export module DepartInsertRowDom {
    export class DepartInsertRowDomAction extends domCore.DomAction { }

    export class DepartInsertRowDomReact extends domCore.DomReact<DepartInsertRowDomProps, DepartInsertRowDomStates, DepartInsertRowDomAction> implements domCore.IReact {

        public state = new DepartInsertRowDomStates();

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

    export interface DepartInsertRowDomConfig { }

    export class DepartInsertRowDomVm extends domCore.DomVm {
        public ReactType = DepartInsertRowDomReact;

        public MasterRow: masterRowFile.DepartInsertMasterRowDom.DepartInsertMasterRowDomVm;
        public UniId: string;

        public IsDetailHide: boolean;

        public constructor(config?: DepartInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.DepartInsertMasterRowDom.DepartInsertMasterRowDomVm();
        }

    }

    export class DepartInsertRowDomStates extends domCore.DomStates { }

    export class DepartInsertRowDomProps extends domCore.DomProps<DepartInsertRowDomVm>{ }
}