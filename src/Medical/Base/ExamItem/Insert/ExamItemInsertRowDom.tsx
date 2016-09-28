import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamItemInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");


export module ExamItemInsertRowDom {
    export class ExamItemInsertRowDomAction extends domCore.DomAction {
    }

    export class ExamItemInsertRowDomReact extends domCore.DomReact<ExamItemInsertRowDomProps, ExamItemInsertRowDomStates, ExamItemInsertRowDomAction> implements domCore.IReact {

        public state = new ExamItemInsertRowDomStates();

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

    export interface IExamItemInsertRowDomConfig {


    }

    export class ExamItemInsertRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemInsertRowDomReact;
        public MasterRow: masterRowFile.ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;

        public constructor(config?: IExamItemInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow  = new masterRowFile.ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomVm();
        }

    }
    export class ExamItemInsertRowDomStates extends domCore.DomStates {
    }


    export class ExamItemInsertRowDomProps extends domCore.DomProps<ExamItemInsertRowDomVm>{
    }



}


