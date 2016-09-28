import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");
import row = require("./AnomalyConclusionRowDom");

export module AnomalyConclusionTableDom {
    export class AnomalyConclusionTableDomAction extends domCore.DomAction { }


    export class AnomalyConclusionTableDomReact extends domCore.DomReact<AnomalyConclusionTableDomProps, AnomalyConclusionTableDomStates, AnomalyConclusionTableDomAction> implements domCore.IReact {
        public state = new AnomalyConclusionTableDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>选择</th>
                        <th>异常名</th>
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

    export interface IReactAnomalyConclusionTableDomVm extends domCore.DomVm {

    }

    export interface IAnomalyConclusionTableDomConfig {
        ListData?: data.DetectionData.AnomalyTemplate[];
        Unid?: string;
    }

    export class AnomalyConclusionTableDomVm extends domCore.DomVm implements IReactAnomalyConclusionTableDomVm {
        public ReactType = AnomalyConclusionTableDomReact;
        public dataList = new Array<data.DetectionData.AnomalyTemplate>();

        public RowList: row.AnomalyConclusionRowDom.AnomalyConclusionRowDomVm[] = [];
        public constructor(config?: IAnomalyConclusionTableDomConfig) {
            super();
            if (config) {
                this.dataList = config.ListData;
                this.UniId = config.Unid;
                if (this.dataList) {
                    this.dataList.forEach((a) => {
                        var rowconfig: row.AnomalyConclusionRowDom.IAnomalyConclusionRowDomConfig = {
                            Data: a,
                            Unid: this.UniId
                        }
                        var rowDom = new row.AnomalyConclusionRowDom.AnomalyConclusionRowDomVm(rowconfig);
                        this.RowList.push(rowDom);
                    })
                }
            }
        }
    }

    export class AnomalyConclusionTableDomStates extends domCore.DomStates {

    }

    export class AnomalyConclusionTableDomProps extends domCore.DomProps<AnomalyConclusionTableDomVm> { }
}