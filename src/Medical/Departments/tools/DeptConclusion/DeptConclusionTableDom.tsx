import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");
import row = require("./DeptConclusionRowDom");

export module DeptConclusionTableDom {
    export class DeptConclusionTableDomAction extends domCore.DomAction { }


    export class DeptConclusionTableDomReact extends domCore.DomReact<DeptConclusionTableDomProps, DeptConclusionTableDomStates, DeptConclusionTableDomAction> implements domCore.IReact {
        public state = new DeptConclusionTableDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>选择</th>
                        <th>科室名</th>
                        <th>小结名称</th>
                        <th>小结内容</th>
                        <th>关联项目详情</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.Vm.RowList.map((r) => {
                            return r.intoDom();
                        })
                    }
                </tbody>

            </table>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDeptConclusionTableDomVm extends domCore.DomVm {

    }

    export interface IDeptConclusionTableDomConfig {
        ListData?: data.Result.DepartTemplate[];
        Unid?: string;
    }

    export class DeptConclusionTableDomVm extends domCore.DomVm implements IReactDeptConclusionTableDomVm {
        public ReactType = DeptConclusionTableDomReact;
        public dataList = new Array<data.Result.DepartTemplate>();

        public RowList: row.DeptConclusionRowDom.DeptConclusionRowDomVm[] = [];
        public constructor(config?: IDeptConclusionTableDomConfig) {
            super();
            if (config) {
                this.dataList = config.ListData;
                this.UniId = config.Unid;
                if (this.dataList) {
                    this.dataList.forEach((a) => {
                        var rowconfig: row.DeptConclusionRowDom.IDeptConclusionRowDomConfig = {
                            Data: a,
                            Unid: this.UniId
                        }
                        var rowDom = new row.DeptConclusionRowDom.DeptConclusionRowDomVm(rowconfig);
                        this.RowList.push(rowDom);
                    })
                }
            }
        }
    }

    export class DeptConclusionTableDomStates extends domCore.DomStates {

    }

    export class DeptConclusionTableDomProps extends domCore.DomProps<DeptConclusionTableDomVm> { }
}