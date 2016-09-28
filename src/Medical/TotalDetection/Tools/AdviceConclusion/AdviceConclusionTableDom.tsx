import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");
import row = require("./AdviceConclusionRowDom");

export module AdviceConclusionTableDom {
    export class AdviceConclusionTableDomAction extends domCore.DomAction { }


    export class AdviceConclusionTableDomReact extends domCore.DomReact<AdviceConclusionTableDomProps, AdviceConclusionTableDomStates, AdviceConclusionTableDomAction> implements domCore.IReact {
        public state = new AdviceConclusionTableDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>选择</th>
                        <th>模板名称</th>
                        <th>综述</th>
                        <th>建议</th>
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

    export interface IReactAdviceConclusionTableDomVm extends domCore.DomVm {
    }

    export interface IAdviceConclusionTableDomConfig {
        ListData?: data.DetectionData.IDocterAdviceData[];
        Unid?: string;
    }

    export class AdviceConclusionTableDomVm extends domCore.DomVm implements IReactAdviceConclusionTableDomVm {
        public ReactType = AdviceConclusionTableDomReact;
        public dataList = new Array<data.DetectionData.IDocterAdviceData>();

        public RowList: row.DeptConclusionRowDom.DeptConclusionRowDomVm[] = [];
        public constructor(config?: IAdviceConclusionTableDomConfig) {
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

    export class AdviceConclusionTableDomStates extends domCore.DomStates {

    }

    export class AdviceConclusionTableDomProps extends domCore.DomProps<AdviceConclusionTableDomVm> { }
}