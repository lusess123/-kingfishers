import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import examDataFile = require("./data");
import examFile = require("./examOrderPage");

export module ExamOrderGridRow {
    export class ExamOrderGridRowAction extends domCore.DomAction {
    }

    export class ExamOrderGridRowReact extends domCore.DomReact<ExamOrderGridRowProps, ExamOrderGridRowStates, ExamOrderGridRowAction> implements domCore.IReact {

        public state = new ExamOrderGridRowStates();

        public pSender(): React.ReactElement<any> {
            var gridRow = this.creatRow();
            return gridRow;
        }
        private createSingelCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckboxVm.intoDom();

        }

        public creatRow(): React.ReactElement<any> {
            return (
                <tr>
                    <td>{this.props.Vm.RowData.PackageName}</td>
                    <td>{this.props.Vm.RowData.Name}</td>
                    <td>{this.props.Vm.RowData.DepartmentName}</td>
                    <td className="text-right">{this.props.Vm.RowData.Price}</td>
                </tr>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IExamOrderGridRowConfig {
        RowData: examDataFile.ExamOrder.IMemberExamItemData;
    }

    export class ExamOrderGridRowVm extends domCore.DomVm {
        public ReactType = ExamOrderGridRowReact;
        public SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: string;
        public RowData: examDataFile.ExamOrder.IMemberExamItemData;
        public ExamObj: examFile.ExamOrderPage.ExamOrderPageVm;
        public constructor(config?: IExamOrderGridRowConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;
            }
        }

    }
    export class ExamOrderGridRowStates extends domCore.DomStates { }
    export class ExamOrderGridRowProps extends domCore.DomProps<ExamOrderGridRowVm>{ }



}