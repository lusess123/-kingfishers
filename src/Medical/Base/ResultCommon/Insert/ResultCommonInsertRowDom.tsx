import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ResultCommonInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module ResultCommonInsertRowDom {
    export class ResultCommonInsertRowDomAction extends domCore.DomAction {
    }

    export class ResultCommonInsertRowDomReact extends domCore.DomReact<ResultCommonInsertRowDomProps, ResultCommonInsertRowDomStates, ResultCommonInsertRowDomAction> implements domCore.IReact {

        public state = new ResultCommonInsertRowDomStates();

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

    export interface IResultCommonInsertRowDomConfig {


    }

    export class ResultCommonInsertRowDomVm extends domCore.DomVm {
        public ReactType = ResultCommonInsertRowDomReact;
        public MasterRow: masterRowFile.ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;


        public constructor(config?: IResultCommonInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomVm();

        }



    }
    export class ResultCommonInsertRowDomStates extends domCore.DomStates {
    }


    export class ResultCommonInsertRowDomProps extends domCore.DomProps<ResultCommonInsertRowDomVm>{
    }



}


