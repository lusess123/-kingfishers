import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamItemCategoryInsertMasterRowDom");
import eventFile = require("./../../../../01core/Event");

export module ExamItemCategoryInsertRowDom {
    export class ExamItemCategoryInsertRowDomAction extends domCore.DomAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemCategoryInsertRowDomReact extends domCore.DomReact<ExamItemCategoryInsertRowDomProps, ExamItemCategoryInsertRowDomStates, ExamItemCategoryInsertRowDomAction> implements domCore.IReact {

        public state = new ExamItemCategoryInsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.MasterRow.intoDom() }
            </div>;
        }






    }
    export interface IExamItemCategoryInsertRowDomConfig {


    }
    export class ExamItemCategoryInsertRowDomVm extends domCore.DomVm{
        public ReactType = ExamItemCategoryInsertRowDomReact;
        public MasterRow: masterRowFile.ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomVm;
        public IsDetailHide: boolean;
        public UniId: string;

        public constructor(config?: IExamItemCategoryInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomVm();
        }
    }
    export class ExamItemCategoryInsertRowDomStates extends domCore.DomStates{
    }


    export class ExamItemCategoryInsertRowDomProps extends domCore.DomProps<ExamItemCategoryInsertRowDomVm>{
    }
}
