import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");
import row = require("./AnomalyConExamRowDom");

export module AnomalyConExamTableDom {
    export class AnomalyConExamTableDomAction extends domCore.DomAction { }


    export class AnomalyConExamTableDomReact extends domCore.DomReact<AnomalyConExamTableDomProps, AnomalyConExamTableDomStates, AnomalyConExamTableDomAction> implements domCore.IReact {
        public state = new AnomalyConExamTableDomStates();

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

    export interface IReactAnomalyConExamTableDomVm extends domCore.DomVm {

    }

    export interface IAnomalyConExamTableDomConfig {
        ListData?: data.Result.ItemTemplate[];
        Unid?: string;
    }

    export class AnomalyConExamTableDomVm extends domCore.DomVm implements IReactAnomalyConExamTableDomVm {
        public ReactType = AnomalyConExamTableDomReact;
        public DataList: data.Result.ItemTemplate[] = [];

        public RowList: row.AnomalyConExamRowDom.AnomalyConExamRowDomVm[] = [];
        public constructor(config?: IAnomalyConExamTableDomConfig) {
            super();
            if (config) {
                this.UniId = config.Unid;
                this.DataList = config.ListData;
        
                if (this.DataList) {
                    this.DataList.forEach((a) => {
                        var rowconfig: row.AnomalyConExamRowDom.IAnomalyConExamRowDomConfig = {
                            Data: a,
                            Unid: this.UniId
                        }
                        var rowdom = new row.AnomalyConExamRowDom.AnomalyConExamRowDomVm(rowconfig)

                        this.RowList.push(rowdom);
                    })
                }
            }
        }
    }

    export class AnomalyConExamTableDomStates extends domCore.DomStates {

    }

    export class AnomalyConExamTableDomProps extends domCore.DomProps<AnomalyConExamTableDomVm> { }
}