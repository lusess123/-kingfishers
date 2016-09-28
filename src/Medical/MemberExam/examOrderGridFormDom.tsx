import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import examDataFile = require("./data");
import gridRowFile = require("./examOrderGridRowMaster");



export module ExamOrderGridFormDom {
    export class ExamOrderGridFormDomAction extends domCore.DomAction {
    }

    export class ExamOrderGridFormDomReact extends domCore.DomReact<ExamOrderGridFormDomProps, ExamOrderGridFormDomStates, ExamOrderGridFormDomAction> implements domCore.IReact {

        public state = new ExamOrderGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">

                    {this.initHeader()}
                    { this.initBody() }
                </table>
                <div className="Hg-height-4"></div>
            </div>
        }

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return row.intoDom();
                    })
                }</tbody>;
        };


        public initHeader(): React.ReactElement<any> {
            return (
                <thead className="thead-default">
                    <tr>
                        <th>套餐名称</th>
                        <th>项目名称</th>
                        <th>检查科室</th>
                        <th>价格</th>
                    </tr>
                </thead>)
        }

    
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IExamOrderGridFormDomConfig {
       // data: examDataFile.ExamOrder.IExamItemData;
    }

    export class ExamOrderGridFormDomVm extends domCore.DomVm {
        public ReactType = ExamOrderGridFormDomReact;
        public RowList: gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm[]=[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;


        public constructor(config?: IExamOrderGridFormDomConfig) {
            super();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
        }

    }
    export class ExamOrderGridFormDomStates extends domCore.DomStates { }
    export class ExamOrderGridFormDomProps extends domCore.DomProps<ExamOrderGridFormDomVm>{ }



}