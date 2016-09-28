import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");
import row = require("./DeptConExamRowDom");

export module DeptConExamTableDom {
    export class DeptConExamTableDomAction extends domCore.DomAction { }


    export class DeptConExamTableDomReact extends domCore.DomReact<DeptConExamTableDomProps, DeptConExamTableDomStates, DeptConExamTableDomAction> implements domCore.IReact {
        public state = new DeptConExamTableDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>项目名</th>
                        <th>上限</th>
                        <th>下限</th>
                        <th>是否位阳性</th>
                        <th>关键字</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.Vm.RowList.map((a) => {
                            return a.intoDom();
                        })
                    }
                </tbody>

            </table>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDeptConExamTableDomVm extends domCore.DomVm {

    }

    export interface IDeptConExamTableDomConfig {
        ListData?: data.Result.ItemTemplate[];
        Unid?: string;
    }

    export class DeptConExamTableDomVm extends domCore.DomVm implements IReactDeptConExamTableDomVm {
        public ReactType = DeptConExamTableDomReact;
        public DataList: data.Result.ItemTemplate[] = [];

        public RowList: row.DeptConExamRowDom.DeptConExamRowDomVm[] = [];
        public constructor(config?: IDeptConExamTableDomConfig) {
            super();
            if (config) {
                this.UniId = config.Unid;
                this.DataList = config.ListData;
        
                if (this.DataList) {
                    this.DataList.forEach((a) => {
                        var rowconfig: row.DeptConExamRowDom.IDeptConExamRowDomConfig = {
                            Data: a,
                            Unid: this.UniId
                        }
                        var rowdom = new row.DeptConExamRowDom.DeptConExamRowDomVm(rowconfig)

                        this.RowList.push(rowdom);
                    })
                }
            }
        }
    }

    export class DeptConExamTableDomStates extends domCore.DomStates {

    }

    export class DeptConExamTableDomProps extends domCore.DomProps<DeptConExamTableDomVm> { }
}