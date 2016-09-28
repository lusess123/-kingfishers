import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import pagination = require("./../../../../05tool/Pagination");
import NewGroupRow = require("./NewGroupRow");
import DataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");


export module NewGroupTable {
    export class NewGroupTableAction extends domCore.DomAction {
    }

    export class NewGroupTableReact extends domCore.DomReact<NewGroupTableProps, NewGroupTableStates, NewGroupTableAction> implements domCore.IReact {

        public state = new NewGroupTableStates();

        public pSender(): React.ReactElement<any> {
        return <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-default">
                        <tr>
                        <th className={"thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                            <th>批次</th>
                            <th>开始时间</th>
                            <th>体检人数</th>
                            <th>实检人数</th>
                            <th>结算方式</th>
                            <th>总账单</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.Vm.RowList.map((row, index) => {
                            return [row.intoDom()];
                        })
                    }
                </tbody>
                </table>
            </div>;

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

    }

    export interface IReactNewGroupTableVm extends domCore.DomVm {

    }

    export interface INewGroupTableConfig {
        ListData: DataFile.Group.IBatch[]
    }

    export class NewGroupTableVm extends domCore.DomVm implements IReactNewGroupTableVm {
        public ReactType = NewGroupTableReact;
        public RowList: NewGroupRow.NewGroupRow.NewGroupRowVm[];
        public Data: DataFile.Group.IBatch[];
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;

        public constructor(config?: INewGroupTableConfig) {          
            super();
            this.Data = [];
            this.RowList = [];
            var rowVm = new NewGroupRow.NewGroupRow.NewGroupRowVm();
            this.RowList.push(rowVm);
            if (config)
            {
                this.RowList = [];
                this.Data = config.ListData;
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowList = new Array<NewGroupRow.NewGroupRow.NewGroupRowVm>();
                this.Data.forEach((rowData, index) => {
                var rowConfig = { RowData: rowData };
                var rowVm = new NewGroupRow.NewGroupRow.NewGroupRowVm(rowConfig);
                this.RowList.push(rowVm);
                });
            }

            

        }

    }
    export class NewGroupTableStates extends domCore.DomStates {
    }


    export class NewGroupTableProps extends domCore.DomProps<NewGroupTableVm>{
    }
}
